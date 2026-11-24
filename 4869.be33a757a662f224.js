"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4869],{

/***/ 62276
/*!*****************************************************************!*\
  !*** ./src/app/point-transfer/point-transfer-routing.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageRoutingModule: () => (/* binding */ PointTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _point_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-transfer.page */ 20062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointTransferPageRoutingModule;




const routes = [{
  path: '',
  component: _point_transfer_page__WEBPACK_IMPORTED_MODULE_1__.PointTransferPage
}];
class PointTransferPageRoutingModule {}
_PointTransferPageRoutingModule = PointTransferPageRoutingModule;
_PointTransferPageRoutingModule.ɵfac = function PointTransferPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPageRoutingModule)();
};
_PointTransferPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PointTransferPageRoutingModule
});
_PointTransferPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PointTransferPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 44869
/*!*********************************************************!*\
  !*** ./src/app/point-transfer/point-transfer.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageModule: () => (/* binding */ PointTransferPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-transfer-routing.module */ 62276);
/* harmony import */ var _point_transfer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-transfer.page */ 20062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointTransferPageModule;






class PointTransferPageModule {}
_PointTransferPageModule = PointTransferPageModule;
_PointTransferPageModule.ɵfac = function PointTransferPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPageModule)();
};
_PointTransferPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _PointTransferPageModule
});
_PointTransferPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__.PointTransferPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PointTransferPageModule, {
    declarations: [_point_transfer_page__WEBPACK_IMPORTED_MODULE_4__.PointTransferPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__.PointTransferPageRoutingModule]
  });
})();

/***/ },

/***/ 20062
/*!*******************************************************!*\
  !*** ./src/app/point-transfer/point-transfer.page.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPage: () => (/* binding */ PointTransferPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _points_level_popup_points_level_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../points-level-popup/points-level-popup.component */ 10712);
/* harmony import */ var _points_transfer_popup_points_transfer_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../points-transfer-popup/points-transfer-popup.component */ 44496);
/* harmony import */ var _points_faq_popup_points_faq_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../points-faq-popup/points-faq-popup.component */ 75560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 16213);

var _PointTransferPage;











const _c0 = ["shyamoliContent"];
const _c1 = ["infiniteScroll"];
const _c2 = (a0, a1, a2) => ({
  "tier-stepper__dot--here": a0,
  "tier-stepper__dot--done": a1,
  "tier-stepper__dot--ahead": a2
});
const _c3 = (a0, a1) => ({
  "tier-stepper__name--here": a0,
  "tier-stepper__name--done": a1
});
const _c4 = a0 => ({
  "tier-stepper__connector--done": a0
});
const _c5 = a0 => ({
  "expiring-btn": a0
});
const _c6 = () => [1, 2, 3, 4];
function PointTransferPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dd_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", dd_r4.expiry_date, " (Expiry Date)");
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_ion_img_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_9_div_19_ion_img_24_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const dd_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.otpPage(dd_r4.id, dd_r4.points));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-row")(2, "ion-col", 27)(3, "div", 28)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PointTransferPage_ng_container_0_div_9_div_19_div_10_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 17)(13, "div", 31)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-col", 32)(17, "ion-row")(18, "ion-col", 17)(19, "div")(20, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-col", 32)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PointTransferPage_ng_container_0_div_9_div_19_ion_img_24_Template, 1, 0, "ion-img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PointTransferPage_ng_container_0_div_9_div_19_div_27_Template, 3, 0, "div", 36)(28, PointTransferPage_ng_container_0_div_9_div_19_div_28_Template, 3, 0, "div", 37)(29, PointTransferPage_ng_container_0_div_9_div_19_div_29_Template, 3, 0, "div", 38)(30, PointTransferPage_ng_container_0_div_9_div_19_div_30_Template, 3, 0, "div", 39)(31, PointTransferPage_ng_container_0_div_9_div_19_div_31_Template, 3, 0, "div", 40)(32, PointTransferPage_ng_container_0_div_9_div_19_div_32_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dd_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](dd_r4.pnr_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](dd_r4.travel_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", dd_r4.transaction_message, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", dd_r4.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.transferable && dd_r4.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r4.status == "Cancelled");
  }
}
function PointTransferPage_ng_container_0_div_9_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_9_div_20_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Next page");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_9_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_9_div_20_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prev page");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_9_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_9_div_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_9_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div")(2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PointTransferPage_ng_container_0_div_9_div_20_span_5_Template, 2, 0, "span", 52)(6, PointTransferPage_ng_container_0_div_9_div_20_span_6_Template, 2, 0, "span", 52)(7, PointTransferPage_ng_container_0_div_9_div_20_span_7_Template, 2, 0, "span", 53)(8, PointTransferPage_ng_container_0_div_9_div_20_span_8_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.page, "/", ctx_r2.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isShownNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isShownPrev);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.page == 1 && ctx_r2.totalPages != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.page == ctx_r2.totalPages && ctx_r2.totalPages != 1);
  }
}
function PointTransferPage_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "ion-row")(2, "ion-col", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 17)(6, "div", 18)(7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Loyalty Points balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 14)(13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_9_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "RECENT ACTIVITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PointTransferPage_ng_container_0_div_9_div_19_Template, 34, 12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PointTransferPage_ng_container_0_div_9_div_20_Template, 9, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "networktheme" ? "roundDiv_network" : "roundDiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.demo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length > 0 && ctx_r2.totalPages != 1);
  }
}
function PointTransferPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PointTransferPage_ng_container_0_div_8_Template, 3, 0, "div", 6)(9, PointTransferPage_ng_container_0_div_9_Template, 21, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("touchmove", function PointTransferPage_ng_container_0_Template_div_touchmove_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.touchMove($event));
    })("touchend", function PointTransferPage_ng_container_0_Template_div_touchend_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.touchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Smart miles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "1: Your point tier is Defining your point value and based on that calculating Redemption Discount. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "2: Points value is Dynamically Change Their Trend and it may be changed without any prior notice. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "3: Use points frequently to get more points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "4: Points get expired automatically. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "5: No Claim or refund guaranteed on Expired/Used Points Management have all rights to change point trend or Discontinue it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "networktheme" ? "themeone-bg-cl" : "bg-cl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length !== 0);
  }
}
function PointTransferPage_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dd_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, dd_r10.expiry_date, "dd MMM yyyy"), " ");
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_ion_img_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_ion_card_8_div_19_ion_img_17_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const dd_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.otpPage(dd_r10.id, dd_r10.points));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 78)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-card", 69)(3, "ion-row")(4, "ion-col", 70)(5, "div", 71)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PointTransferPage_ng_container_1_ion_card_8_div_19_div_8_Template, 4, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 72)(10, "ion-row")(11, "ion-col", 17)(12, "div")(13, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 32)(16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PointTransferPage_ng_container_1_ion_card_8_div_19_ion_img_17_Template, 1, 0, "ion-img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PointTransferPage_ng_container_1_ion_card_8_div_19_div_20_Template, 3, 0, "div", 74)(21, PointTransferPage_ng_container_1_ion_card_8_div_19_div_21_Template, 3, 0, "div", 75)(22, PointTransferPage_ng_container_1_ion_card_8_div_19_div_22_Template, 3, 0, "div", 40)(23, PointTransferPage_ng_container_1_ion_card_8_div_19_div_23_Template, 3, 0, "div", 76)(24, PointTransferPage_ng_container_1_ion_card_8_div_19_div_24_Template, 3, 0, "div", 40)(25, PointTransferPage_ng_container_1_ion_card_8_div_19_div_25_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const dd_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](dd_r10.transaction_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", dd_r10.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.transferable && dd_r10.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", dd_r10.status == "Cancelled");
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_ion_card_8_div_20_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Next page");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_ion_card_8_div_20_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prev page");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_ion_card_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div")(2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PointTransferPage_ng_container_1_ion_card_8_div_20_span_5_Template, 2, 0, "span", 52)(6, PointTransferPage_ng_container_1_ion_card_8_div_20_span_6_Template, 2, 0, "span", 52)(7, PointTransferPage_ng_container_1_ion_card_8_div_20_span_7_Template, 2, 0, "span", 53)(8, PointTransferPage_ng_container_1_ion_card_8_div_20_span_8_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.page, "/", ctx_r2.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isShownNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isShownPrev);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.page == 1 && ctx_r2.totalPages != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.page == ctx_r2.totalPages && ctx_r2.totalPages != 1);
  }
}
function PointTransferPage_ng_container_1_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 61)(1, "ion-row")(2, "ion-col", 14)(3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 17)(6, "div", 64)(7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Loyalty Points balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 14)(13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_ion_card_8_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PointTransferPage_ng_container_1_ion_card_8_div_19_Template, 26, 10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PointTransferPage_ng_container_1_ion_card_8_div_20_Template, 9, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.demo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length > 0 && ctx_r2.totalPages != 1);
  }
}
function PointTransferPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-content", 56)(2, "ion-toolbar", 57)(3, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PointTransferPage_ng_container_1_div_7_Template, 3, 0, "div", 6)(8, PointTransferPage_ng_container_1_ion_card_8_Template, 21, 3, "ion-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("touchmove", function PointTransferPage_ng_container_1_Template_div_touchmove_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.touchMove($event));
    })("touchend", function PointTransferPage_ng_container_1_Template_div_touchend_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.touchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Smart miles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "1: Your point tier is Defining your point value and based on that calculating Redemption Discount. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "2: Points value is Dynamically Change Their Trend and it may be changed without any prior notice. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "3: Use points frequently to get more points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "4: Points get expired automatically. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "5: No Claim or refund guaranteed on Expired/Used Points Management have all rights to change point trend or Discontinue it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo.length != 0);
  }
}
function PointTransferPage_ng_container_2_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 84)(1, "ion-toolbar", 85)(2, "div", 86)(3, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_header_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_header_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openProgressPopup("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PointTransferPage_ng_container_2_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 91)(1, "ion-toolbar", 92)(2, "ion-buttons", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_header_2_Template_ion_buttons_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 96)(7, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_header_2_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openProgressPopup("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("--background", (ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.color) + " !important");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.nextMemberPoints, " points more to ", ctx_r2.nextMembership, "");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.nextMembership);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 126)(1, "ion-col")(2, "div", 127)(3, "div", 128)(4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "ion-label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-progress-bar", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 134)(15, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_16_Template, 2, 2, "ion-text", 135)(17, PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_17_Template, 2, 1, "ion-text", 135)(18, PointTransferPage_ng_container_2_ion_content_3_ion_card_3_ion_text_18_Template, 2, 0, "ion-text", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 136)(20, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 138)(23, "ion-img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ion_card_3_Template_ion_img_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showBadges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.nextMemberPoints && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.nextMemberPoints && ctx_r2.nextMembership && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.redeemPointValue);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.nextMemberPoints, " points more to ", ctx_r2.nextMembership, "");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.nextMembership);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 140)(1, "ion-col")(2, "div", 127)(3, "div", 141)(4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "ion-label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-progress-bar", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 134)(15, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_16_Template, 2, 2, "ion-text", 146)(17, PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_17_Template, 2, 1, "ion-text", 146)(18, PointTransferPage_ng_container_2_ion_content_3_ion_card_4_ion_text_18_Template, 2, 0, "ion-text", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 136)(20, "ion-text", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 138)(23, "ion-img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ion_card_4_Template_ion_img_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showBadges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.nextMemberPoints && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.nextMemberPoints && ctx_r2.nextMembership && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.redeemPointValue);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.nextMemberPoints, " points more to ", ctx_r2.nextMembership, "");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.nextMembership);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 149)(1, "ion-col")(2, "div", 127)(3, "div", 150)(4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "ion-label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-progress-bar", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 134)(15, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_16_Template, 2, 2, "ion-text", 135)(17, PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_17_Template, 2, 1, "ion-text", 135)(18, PointTransferPage_ng_container_2_ion_content_3_ion_card_5_ion_text_18_Template, 2, 0, "ion-text", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 136)(20, "ion-text", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 138)(23, "ion-img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ion_card_5_Template_ion_img_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showBadges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.nextMemberPoints && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.nextMemberPoints && ctx_r2.nextMembership && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.redeemPointValue);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.nextMemberPoints, " points more to ", ctx_r2.nextMembership, "");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.nextMembership);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-text", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 152)(1, "ion-col")(2, "div", 127)(3, "div", 153)(4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "ion-label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-progress-bar", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 134)(15, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_16_Template, 2, 2, "ion-text", 158)(17, PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_17_Template, 2, 1, "ion-text", 158)(18, PointTransferPage_ng_container_2_ion_content_3_ion_card_6_ion_text_18_Template, 2, 0, "ion-text", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 136)(20, "ion-text", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 138)(23, "ion-img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ion_card_6_Template_ion_img_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showBadges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.nextMemberPoints && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.nextMemberPoints && ctx_r2.nextMembership && !(ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.redeemPointValue);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You're here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 167)(1, "div")(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_span_4_Template, 2, 0, "span", 168)(5, PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_span_5_Template, 2, 0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tier_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", tier_r21 == null ? null : tier_r21.is_current)("done", !(tier_r21 == null ? null : tier_r21.is_current) && (tier_r21 == null ? null : tier_r21.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", tier_r21 == null ? null : tier_r21.icon, " ", tier_r21 == null ? null : tier_r21.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tier_r21 == null ? null : tier_r21.is_current);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(tier_r21 == null ? null : tier_r21.is_current) && (tier_r21 == null ? null : tier_r21.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tier_r21 == null ? null : tier_r21.point_value_label);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 161)(1, "ion-card", 162)(2, "ion-card-content", 163)(3, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Point value by tier:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-list", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PointTransferPage_ng_container_2_ion_content_3_div_7_div_6_Template, 8, 9, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.memberships);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tier_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tier_r23 == null ? null : tier_r23.tag) || "You're here");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 183);
  }
  if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c4, (ctx_r2.memberships[i_r24] == null ? null : ctx_r2.memberships[i_r24].is_unlocked) && (ctx_r2.memberships[i_r24 + 1] == null ? null : ctx_r2.memberships[i_r24 + 1].is_unlocked)));
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 176)(2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_div_9_Template, 2, 1, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_div_10_Template, 1, 3, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, tier_r23 == null ? null : tier_r23.is_current, !(tier_r23 == null ? null : tier_r23.is_current) && (tier_r23 == null ? null : tier_r23.is_unlocked), !(tier_r23 == null ? null : tier_r23.is_current) && !(tier_r23 == null ? null : tier_r23.is_unlocked)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](!(tier_r23 == null ? null : tier_r23.is_current) && (tier_r23 == null ? null : tier_r23.is_unlocked) ? "\u2713" : tier_r23 == null ? null : tier_r23.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c3, tier_r23 == null ? null : tier_r23.is_current, !(tier_r23 == null ? null : tier_r23.is_current) && (tier_r23 == null ? null : tier_r23.is_unlocked)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tier_r23 == null ? null : tier_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", !(tier_r23 == null ? null : tier_r23.is_current) && (tier_r23 == null ? null : tier_r23.is_unlocked) ? tier_r23.to_points : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 7, tier_r23 == null ? null : tier_r23.from_points, "1.0-0"), " pts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tier_r23 == null ? null : tier_r23.is_current);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r24 < ctx_r2.memberships.length - 1);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 172)(1, "ion-card", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_div_9_Template_ion_card_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openProgressPopup("progress"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-card-content")(3, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PointTransferPage_ng_container_2_ion_content_3_div_9_ng_container_4_Template, 11, 17, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Tap to see tier benefits \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.memberships);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const benefit_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u2022 ", benefit_r25, " ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 184)(1, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PointTransferPage_ng_container_2_ion_content_3_div_10_div_4_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \uD83C\uDF1F ", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.name, " Exclusive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.benefits);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 187)(1, "ion-row", 188)(2, "ion-col", 189)(3, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u26A0\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col")(6, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const alert_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", alert_r26 == null ? null : alert_r26.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", alert_r26 == null ? null : alert_r26.message, " ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-img", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_1_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.checkboxChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-img", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_2_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.checkboxChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_1_Template, 1, 0, "ion-img", 193)(2, PointTransferPage_ng_container_2_ion_content_3_ng_container_18_ion_img_2_Template, 1, 0, "ion-img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isChecked);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.checkboxChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-checkbox", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-checked", ctx_r2.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.isChecked);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Showing ", ctx_r2.statement_meta == null ? null : ctx_r2.statement_meta.active_count, " active transactions \u00B7 expired & redeemed hidden");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" PNR: ", value_r30.pnr_number, " ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.getTransactionTitle(value_r30), " ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" (", value_r30.origin, " to ", value_r30.destination, ") ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 212)(1, "ion-button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_12_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openPointsTranferPopup(value_r30.id, value_r30.points, value_r30, ctx_r2.currentMembershipData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, value_r30.is_expiring_soon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r30.is_expiring_soon ? "Transfer before expiry" : "Transfer points", " ");
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 202)(1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 204)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_5_Template, 2, 1, "div", 205)(6, PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_6_Template, 2, 1, "div", 205)(7, PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_7_Template, 2, 2, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_div_12_Template, 4, 4, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r30 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.getTransactionCardClass(value_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.getTransactionBadgeClass(value_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.getTransactionBadgeText(value_r30), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", value_r30.pnr_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !value_r30.pnr_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", value_r30.origin && value_r30.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.getTransactionDateClass(value_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.getTransactionDateText(value_r30), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r2.getTransactionPointsClass(value_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r30.display_points || value_r30.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", value_r30.can_transfer);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PointTransferPage_ng_container_2_ion_content_3_div_21_ion_card_1_Template, 13, 11, "ion-card", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.demo);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 215)(2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No points yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Book a trip to start earning SmartMiles. Every \u20B910 spent = 1 point.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_ng_container_22_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.bookTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Book a Trip \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function PointTransferPage_ng_container_2_ion_content_3_ion_infinite_scroll_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-infinite-scroll", 220, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInfinite", function PointTransferPage_ng_container_2_ion_content_3_ion_infinite_scroll_34_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onIonInfinite($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-infinite-scroll-content", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.isInfiniteDisabled);
  }
}
function PointTransferPage_ng_container_2_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", null, 0)(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PointTransferPage_ng_container_2_ion_content_3_ion_card_3_Template, 24, 8, "ion-card", 99)(4, PointTransferPage_ng_container_2_ion_content_3_ion_card_4_Template, 24, 8, "ion-card", 100)(5, PointTransferPage_ng_container_2_ion_content_3_ion_card_5_Template, 24, 8, "ion-card", 101)(6, PointTransferPage_ng_container_2_ion_content_3_ion_card_6_Template, 24, 8, "ion-card", 102)(7, PointTransferPage_ng_container_2_ion_content_3_div_7_Template, 7, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PointTransferPage_ng_container_2_ion_content_3_div_9_Template, 7, 1, "div", 105)(10, PointTransferPage_ng_container_2_ion_content_3_div_10_Template, 5, 2, "div", 106)(11, PointTransferPage_ng_container_2_ion_content_3_div_11_Template, 10, 2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-row", 108)(13, "ion-label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Points Statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-row", 110)(16, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Show active points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PointTransferPage_ng_container_2_ion_content_3_ng_container_18_Template, 3, 2, "ng-container", 2)(19, PointTransferPage_ng_container_2_ion_content_3_button_19_Template, 2, 2, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PointTransferPage_ng_container_2_ion_content_3_div_20_Template, 2, 1, "div", 113)(21, PointTransferPage_ng_container_2_ion_content_3_div_21_Template, 2, 1, "div", 114)(22, PointTransferPage_ng_container_2_ion_content_3_ng_container_22_Template, 10, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_Template_div_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openFaqPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 116)(25, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 118)(28, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "FAQs on Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "How to earn, redeem & transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, PointTransferPage_ng_container_2_ion_content_3_ion_infinite_scroll_34_Template, 3, 1, "ion-infinite-scroll", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-fab", 123)(36, "ion-fab-button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointTransferPage_ng_container_2_ion_content_3_Template_ion_fab_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.scrollToTierCards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-icon", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isBronzeMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isSilverMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isGoldMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isPlatinumMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.showBadge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.memberships == null ? null : ctx_r2.memberships.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.is_max_tier) && (ctx_r2.currentMembershipData == null ? null : ctx_r2.currentMembershipData.benefits == null ? null : ctx_r2.currentMembershipData.benefits.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder != "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isChecked && ctx_r2.statement_meta && (ctx_r2.statement_meta == null ? null : ctx_r2.statement_meta.active_count));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.demo == null ? null : ctx_r2.demo.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.demo == null ? null : ctx_r2.demo.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.showInfiniteScroll);
  }
}
function PointTransferPage_ng_container_2_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 222)(1, "div", 223)(2, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Unable to load points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.errormsg, ". ");
  }
}
function PointTransferPage_ng_container_2_ion_content_5_ion_card_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-content")(2, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-skeleton-text", 235)(4, "ion-skeleton-text", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-skeleton-text", 242)(6, "ion-skeleton-text", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-skeleton-text", 244)(9, "ion-skeleton-text", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function PointTransferPage_ng_container_2_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 227)(1, "ion-card", 126)(2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-skeleton-text", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-skeleton-text", 230)(6, "ion-skeleton-text", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-skeleton-text", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-skeleton-text", 234)(10, "ion-skeleton-text", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-card", 236)(12, "ion-card-content")(13, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-skeleton-text", 238)(15, "ion-skeleton-text", 238)(16, "ion-skeleton-text", 238)(17, "ion-skeleton-text", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-card")(19, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-skeleton-text", 239)(21, "ion-skeleton-text", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, PointTransferPage_ng_container_2_ion_content_5_ion_card_22_Template, 10, 0, "ion-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c6));
  }
}
function PointTransferPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PointTransferPage_ng_container_2_ion_header_1_Template, 9, 0, "ion-header", 80)(2, PointTransferPage_ng_container_2_ion_header_2_Template, 9, 2, "ion-header", 81)(3, PointTransferPage_ng_container_2_ion_content_3_Template, 38, 14, "ion-content", 2)(4, PointTransferPage_ng_container_2_ion_content_4_Template, 8, 1, "ion-content", 82)(5, PointTransferPage_ng_container_2_ion_content_5_Template, 23, 2, "ion-content", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isError && !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading && ctx_r2.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
  }
}
class PointTransferPage {
  constructor(navCtrl, loader, apiFactory, commonStorage, util, modalCtrl) {
    this.navCtrl = navCtrl;
    this.loader = loader;
    this.apiFactory = apiFactory;
    this.commonStorage = commonStorage;
    this.util = util;
    this.modalCtrl = modalCtrl;
    this.demo = [];
    this.page = 1;
    this.isShownPrev = false;
    this.isShownNext = true;
    this.isBronzeMember = false;
    this.isSilverMember = false;
    this.isGoldMember = false;
    this.isPlatinumMember = false;
    this.progressPercentage = 0;
    this.isChecked = false;
    this.memberships = [];
    this.showBadge = false;
    this.isError = false;
    this.isLoading = true;
    this.isInfiniteDisabled = false;
    this.isFetchingMore = false;
    this.showInfiniteScroll = true;
    this.metaData = this.commonStorage.getItem('metaData');
    this.smartMilesData();
  }
  ngOnInit() {
    this.close();
  }
  smartMilesData() {
    var _this$metaData, _this$metaData2;
    this.loader.showLoadingDefault();
    if (((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) !== 'shyamolitheme' && ((_this$metaData2 = this.metaData) === null || _this$metaData2 === void 0 ? void 0 : _this$metaData2.msiteFolder) !== 'seabirdThemeNew') {
      this.apiFactory.getSmartMilesData("&page=" + this.page + "&is_active=" + this.isChecked).subscribe(data => {
        this.loader.hideLoadingDefault();
        if (data.code == 200) {
          this.demo = data.customer_smart_transactions;
          this.currentMembership = data.current_membership;
          this.nextMembership = data.next_membership;
          this.memberships = data.memberships;
          this.totalPages = data.total_page;
          this.availablePoints = data.total_points;
          if (this.availablePoints != '') {
            this.availablePoints = this.availablePoints.toFixed(2);
          }
          this.nextMemberPoints = data.points_for_next_plan;
          if (this.nextMemberPoints != '') {
            this.nextMemberPoints = this.nextMemberPoints.toFixed(2);
          }
          this.isBronzeMember = false;
          this.isSilverMember = false;
          this.isGoldMember = false;
          this.isPlatinumMember = false;
          const currentIndex = this.memberships.findIndex(m => m.is_current);
          if (currentIndex <= 0) {
            this.isBronzeMember = true;
          } else if (currentIndex === 1) {
            this.isSilverMember = true;
          } else if (currentIndex === 2) {
            this.isGoldMember = true;
          } else {
            this.isPlatinumMember = true;
          }
          this.calculateProgress();
          this.redeemPointValue = data.redeem_point_value;
          this.faqData = {
            'credit_point_value': data.credit_point_value,
            'max_redeem_value': data.max_redeem_value,
            'max_redeem_type': data.max_redeem_type
          };
          this.syncInfiniteState();
        } else {
          this.util.showToast(data.message || data.result.message);
        }
      }, error => {
        this.loader.hideLoadingDefault();
      });
    } else {
      this.apiFactory.getNewSmartMilesData("&page=" + this.page + "&is_active=" + this.isChecked).subscribe(data => {
        this.loader.hideLoadingDefault();
        if (data.code == 200) {
          var _ref, _data$membership, _data$membership2, _data$membership3, _data$membership4, _data$membership5, _data$membership6, _data$pagination, _data$membership7, _this$next_membership;
          this.isLoading = false;
          this.isError = false;
          this.demo = (_ref = data.transactions || []) === null || _ref === void 0 ? void 0 : _ref.filter(item => (item === null || item === void 0 ? void 0 : item.points) > 0);
          this.currentMembershipData = data === null || data === void 0 || (_data$membership = data.membership) === null || _data$membership === void 0 ? void 0 : _data$membership.current_membership;
          this.currentMembership = data === null || data === void 0 || (_data$membership2 = data.membership) === null || _data$membership2 === void 0 || (_data$membership2 = _data$membership2.current_membership) === null || _data$membership2 === void 0 ? void 0 : _data$membership2.name;
          this.nextMembership = data === null || data === void 0 || (_data$membership3 = data.membership) === null || _data$membership3 === void 0 || (_data$membership3 = _data$membership3.next_membership) === null || _data$membership3 === void 0 ? void 0 : _data$membership3.name;
          this.memberships = data === null || data === void 0 || (_data$membership4 = data.membership) === null || _data$membership4 === void 0 ? void 0 : _data$membership4.all_memberships;
          this.nextTierProgress = data === null || data === void 0 || (_data$membership5 = data.membership) === null || _data$membership5 === void 0 ? void 0 : _data$membership5.next_tier_progress;
          this.next_membership = data === null || data === void 0 || (_data$membership6 = data.membership) === null || _data$membership6 === void 0 ? void 0 : _data$membership6.next_membership;
          this.totalPages = data === null || data === void 0 || (_data$pagination = data.pagination) === null || _data$pagination === void 0 ? void 0 : _data$pagination.total_pages;
          this.page = data.pagination.current_page;
          this.userSummary = data === null || data === void 0 ? void 0 : data.user_summary;
          this.tierUpgrade = data === null || data === void 0 ? void 0 : data.tier_upgrade;
          this.pagination = data === null || data === void 0 ? void 0 : data.pagination;
          this.statement_meta = data === null || data === void 0 ? void 0 : data.statement_meta;
          this.alerts = data === null || data === void 0 ? void 0 : data.alerts;
          if (this.tierUpgrade && this.tierUpgrade.show_upgrade_popup) {
            const foundMembership = this.memberships.find(membership => membership.key === this.tierUpgrade.new_tier.key);
            this.openFaqPopup('upgrade', foundMembership, this.currentMembershipData);
          }
          this.availablePoints = data === null || data === void 0 || (_data$membership7 = data.membership) === null || _data$membership7 === void 0 || (_data$membership7 = _data$membership7.current_membership) === null || _data$membership7 === void 0 ? void 0 : _data$membership7.current_points;
          if (this.availablePoints != '') {
            this.availablePoints = this.availablePoints.toFixed(2);
          }
          this.nextMemberPoints = (_this$next_membership = this.next_membership) === null || _this$next_membership === void 0 ? void 0 : _this$next_membership.remaining_points;
          if (this.nextMemberPoints) {
            var _this$nextMemberPoint;
            this.nextMemberPoints = (_this$nextMemberPoint = this.nextMemberPoints) === null || _this$nextMemberPoint === void 0 ? void 0 : _this$nextMemberPoint.toFixed(2);
          }
          this.isBronzeMember = false;
          this.isSilverMember = false;
          this.isGoldMember = false;
          this.isPlatinumMember = false;
          const currentIndex = this.memberships.findIndex(m => m.is_current);
          if (currentIndex <= 0) {
            this.isBronzeMember = true;
          } else if (currentIndex === 1) {
            this.isSilverMember = true;
          } else if (currentIndex === 2) {
            this.isGoldMember = true;
          } else {
            this.isPlatinumMember = true;
          }
          this.progressPercentage = data.membership.current_membership.progress_percentage;
          this.redeemPointValue = this.userSummary.redeem_point_value;
          this.faqData = {
            "all_memberships": this.memberships,
            "userSummary": this.userSummary
          };
          this.syncInfiniteState();
        } else {
          var _data$result3;
          this.isError = true;
          this.isLoading = false;
          if (data.code === 422) {
            var _data$result, _data$result2;
            this.errormsg = (data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 || (_data$result = data.result) === null || _data$result === void 0 ? void 0 : _data$result.message) || "Something went wrong. Please try again later.";
            this.util.showAlert('', (data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 || (_data$result2 = data.result) === null || _data$result2 === void 0 ? void 0 : _data$result2.message), () => {
              this.commonStorage.clear();
              this.navCtrl.navigateRoot('/wait');
            });
          } else this.util.showToast((data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 || (_data$result3 = data.result) === null || _data$result3 === void 0 ? void 0 : _data$result3.message) || "Something went wrong. Please try again later.");
        }
      }, error => {
        this.loader.hideLoadingDefault();
        this.isError = true;
        this.isLoading = false;
        this.util.showAlert('', "Something went wrong. Please try again later.", () => {
          this.navCtrl.navigateRoot('tabs/more');
        });
      });
    }
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
  formatDateNew(dateStr) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(dateStr), "do MMMM yyyy");
  }
  calculateProgress() {
    const currentMembership = this.memberships.find(m => m.is_current);
    if (!currentMembership) {
      this.progressPercentage = 0;
      return;
    }
    const from = currentMembership.from_points;
    const to = currentMembership.to_points;
    this.progressPercentage = (this.availablePoints - from) / (to - from) * 100;
    // safety clamp
    if (this.progressPercentage < 0) this.progressPercentage = 0;
    if (this.progressPercentage > 100) this.progressPercentage = 100;
  }
  openProgressPopup(type) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const level = yield _this.modalCtrl.create({
          component: _points_level_popup_points_level_popup_component__WEBPACK_IMPORTED_MODULE_2__.PointsLevelPopupComponent,
          componentProps: {
            availablePoints: _this.availablePoints,
            membershipData: _this.memberships,
            type: type,
            currentMembershipData: _this.currentMembershipData,
            nextTierProgress: _this.nextTierProgress,
            next_membership: _this.next_membership
          },
          backdropDismiss: false
        });
        yield level.present();
      } catch (error) {
        console.error('Error creating or presenting modal:', error);
      }
    })();
  }
  checkboxChanged() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$shyamoliConten;
      if (_this2.isFetchingMore) {
        return;
      }
      _this2.page = 1;
      _this2.totalPages = 0;
      _this2.isChecked = !_this2.isChecked;
      _this2.demo = [];
      _this2.isInfiniteDisabled = false;
      _this2.isFetchingMore = false;
      _this2.showInfiniteScroll = false;
      if (_this2.infiniteScroll) {
        _this2.infiniteScroll.disabled = false;
      }
      yield (_this2$shyamoliConten = _this2.shyamoliContent) === null || _this2$shyamoliConten === void 0 ? void 0 : _this2$shyamoliConten.scrollToTop(0);
      setTimeout(() => {
        _this2.showInfiniteScroll = true;
        _this2.smartMilesData();
      }, 0);
    })();
  }
  onIonInfinite(event) {
    this.loadMoreTransactions(() => {
      event.target.complete();
    });
  }
  openPointsTranferPopup(id, points, value, currentMembershipData) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const popover = yield _this3.modalCtrl.create({
          component: _points_transfer_popup_points_transfer_popup_component__WEBPACK_IMPORTED_MODULE_3__.PointsTransferPopupComponent,
          componentProps: {
            id: id,
            points: points,
            value: value,
            currentMembershipData: currentMembershipData
          },
          backdropDismiss: false
        });
        yield popover.present();
        const {
          data
        } = yield popover.onDidDismiss();
        if (data == 'success') {
          _this3.page = 1;
          _this3.smartMilesData();
        }
      } catch (error) {
        console.error('Error creating or presenting modal:', error);
      }
    })();
  }
  openFaqPopup() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type = 'faq', foundmembershipData = null, currentMembershipData = null) {
      try {
        const popover = yield _this4.modalCtrl.create({
          component: _points_faq_popup_points_faq_popup_component__WEBPACK_IMPORTED_MODULE_4__.PointsFaqPopupComponent,
          componentProps: {
            faqData: _this4.faqData,
            type: type,
            membershipData: foundmembershipData,
            currentMembershipData: currentMembershipData
          },
          backdropDismiss: false
        });
        yield popover.present();
      } catch (error) {
        console.error('Error creating or presenting modal:', error);
      }
    }).apply(this, arguments);
  }
  bookTrip() {
    this.navCtrl.navigateRoot('tabs/home');
  }
  showBadges() {
    this.showBadge = !this.showBadge;
  }
  scrollToTierCards() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this5$shyamoliConten;
      yield (_this5$shyamoliConten = _this5.shyamoliContent) === null || _this5$shyamoliConten === void 0 ? void 0 : _this5$shyamoliConten.scrollToTop(500);
    })();
  }
  goBack() {
    this.navCtrl.navigateRoot(['tabs/more']);
  }
  getTransactionCardClass(item) {
    if (item.category === 'ticket_booking' && item.display_status === 'active') {
      if (item.is_expiring_soon) {
        return 'expiring-card';
      }
      return 'active-card';
    }
    if (item.category === 'signup_bonus' && item.display_status === 'active') {
      return 'active-card';
    }
    if (item.category === 'received_transfer' && item.display_status === 'active') {
      return 'received-card';
    }
    if (item.is_expiring_soon && item.display_status === 'active') {
      return 'expiring-card';
    }
    if (item.display_status === 'expired') {
      return 'expired-card';
    }
    if (item.display_status === 'redeemed' || item.display_status === 'transferred') {
      return 'redeemed-card';
    }
    if (item.display_status === 'pending') {
      return 'pending-card';
    }
    if (item.display_status === 'adjusted') {
      return 'adjusted-card';
    }
    return '';
  }
  getTransactionBadgeClass(item) {
    if (item.category === 'received_transfer' && item.display_status === 'active') {
      return 'received';
    }
    if (item.is_expiring_soon && item.display_status === 'active') {
      return 'expiring';
    }
    return item.display_status;
  }
  getTransactionBadgeText(item) {
    if (item.category === 'received_transfer' && item.display_status === 'active') {
      return '↓ Received';
    }
    if (item.category === 'sent_transfer') {
      return '↑ Transferred';
    }
    if (item.is_expiring_soon && item.display_status === 'active') {
      return '⚠ Expiring Soon';
    }
    switch (item.display_status) {
      case 'active':
        return 'Active';
      case 'expired':
        return 'Expired';
      case 'redeemed':
        return 'Redeemed';
      case 'pending':
        return 'Pending';
      case 'adjusted':
        return 'Adjusted';
      case 'transferred':
        return 'Transferred';
      default:
        return item.display_status || '';
    }
  }
  getTransactionTitle(item) {
    if (item.category === 'received_transfer' || item.category === 'sent_transfer') {
      return item.transaction_message || '';
    }
    return item.transaction_title || '';
  }
  getTransactionDateText(item) {
    switch (item.display_status) {
      case 'expired':
        return `Expired on: ${this.formatDateNew(item.expiry_date)}`;
      case 'redeemed':
        return `Redeemed on: ${this.formatDateNew(item.created_at)}`;
      case 'transferred':
        return `Transferred on: ${this.formatDateNew(item.created_at)}`;
      case 'adjusted':
        return `Adjusted on: ${this.formatDateNew(item.created_at)}`;
      // case 'pending':
      //   return `Pending since: ${this.formatDateNew(item.created_at)}`;
      default:
        if (item.is_expiring_soon && item.display_status === 'active') {
          return `Expires: ${this.formatDateNew(item.expiry_date)} · ${item.days_to_expire} days left`;
        }
        return item.display_status === 'pending' ? '' : item.expiry_date ? `Use by: ${this.formatDateNew(item.expiry_date)}` : this.formatDateNew(item.created_at);
    }
  }
  getTransactionDateClass(item) {
    if (item.is_expiring_soon && item.display_status === 'active') {
      return 'warn';
    }
    switch (item.display_status) {
      case 'expired':
        return 'danger';
      case 'pending':
        return 'pending';
      case 'adjusted':
        return 'info';
      default:
        return '';
    }
  }
  getTransactionPointsClass(item) {
    if (item.category === 'received_transfer' && item.display_status === 'active') {
      return 'blue';
    }
    if (item.display_status === 'adjusted') {
      return 'blue';
    }
    if (item.display_status === 'redeemed') {
      return 'redeemed';
    }
    if (item.display_status === 'expired') {
      return 'neutral';
    }
    if (item.transaction_type === 'credit') {
      return 'plus';
    }
    if (item.transaction_type === 'debit') {
      return 'minus';
    }
    return 'neutral';
  }
  syncInfiniteState() {
    this.isInfiniteDisabled = !this.totalPages || this.page >= this.totalPages;
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = this.isInfiniteDisabled;
    }
  }
  ensureScrollableContent() {
    var _this6 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this6$metaData, _this6$shyamoliConten;
      if (((_this6$metaData = _this6.metaData) === null || _this6$metaData === void 0 ? void 0 : _this6$metaData.msiteFolder) !== 'shyamolitheme') {
        return;
      }
      if (_this6.isInfiniteDisabled || _this6.isFetchingMore) {
        return;
      }
      const scrollElement = yield (_this6$shyamoliConten = _this6.shyamoliContent) === null || _this6$shyamoliConten === void 0 ? void 0 : _this6$shyamoliConten.getScrollElement();
      if (!scrollElement) {
        return;
      }
      const hasScrollableContent = scrollElement.scrollHeight > scrollElement.clientHeight + 10;
      if (!hasScrollableContent && _this6.page < _this6.totalPages) {
        _this6.loadMoreTransactions();
      }
    })();
  }
  loadMoreTransactions(onComplete) {
    var _this$metaData3;
    if (this.isFetchingMore || this.page >= this.totalPages) {
      this.syncInfiniteState();
      if (onComplete) {
        onComplete();
      }
      return;
    }
    this.isFetchingMore = true;
    const nextPage = this.page + 1;
    if (((_this$metaData3 = this.metaData) === null || _this$metaData3 === void 0 ? void 0 : _this$metaData3.msiteFolder) !== 'shyamolitheme') {
      this.apiFactory.getSmartMilesData("&page=" + nextPage + "&is_active=" + this.isChecked).subscribe(data => {
        if (data.code == 200) {
          var _ref2;
          this.page = nextPage;
          this.demo = this.demo.concat((_ref2 = data.customer_smart_transactions || []) === null || _ref2 === void 0 ? void 0 : _ref2.filter(item => (item === null || item === void 0 ? void 0 : item.points) > 0));
          this.totalPages = data.total_page;
          this.syncInfiniteState();
        } else {
          this.util.showToast(data.message || data.result.message);
        }
        this.isFetchingMore = false;
        if (onComplete) {
          onComplete();
        }
      }, error => {
        this.isFetchingMore = false;
        if (onComplete) {
          onComplete();
        }
      });
      return;
    }
    this.apiFactory.getNewSmartMilesData("&page=" + nextPage + "&is_active=" + this.isChecked).subscribe(data => {
      if (data.code == 200) {
        var _data$pagination2, _ref3, _data$pagination3;
        this.page = (data === null || data === void 0 || (_data$pagination2 = data.pagination) === null || _data$pagination2 === void 0 ? void 0 : _data$pagination2.current_page) || nextPage;
        this.demo = this.demo.concat((_ref3 = data.transactions || []) === null || _ref3 === void 0 ? void 0 : _ref3.filter(item => (item === null || item === void 0 ? void 0 : item.points) > 0));
        this.totalPages = (data === null || data === void 0 || (_data$pagination3 = data.pagination) === null || _data$pagination3 === void 0 ? void 0 : _data$pagination3.total_pages) || this.totalPages;
        this.syncInfiniteState();
        setTimeout(() => {
          this.ensureScrollableContent();
        }, 0);
      } else {
        if (data.code === 422) {
          var _data$result4;
          this.util.showAlert('', (data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 || (_data$result4 = data.result) === null || _data$result4 === void 0 ? void 0 : _data$result4.message), () => {
            this.commonStorage.clear();
            this.navCtrl.navigateRoot('/wait');
          });
        } else {
          var _data$result5;
          this.util.showToast((data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 || (_data$result5 = data.result) === null || _data$result5 === void 0 ? void 0 : _data$result5.message));
        }
      }
      this.isFetchingMore = false;
      if (onComplete) {
        onComplete();
      }
    }, error => {
      this.isFetchingMore = false;
      if (onComplete) {
        onComplete();
      }
    });
  }
}
_PointTransferPage = PointTransferPage;
_PointTransferPage.ɵfac = function PointTransferPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_8__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_9__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_10__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_11__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController));
};
_PointTransferPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _PointTransferPage,
  selectors: [["app-point-transfer"]],
  viewQuery: function PointTransferPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.shyamoliContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
    }
  },
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [["shyamoliContent", ""], ["infiniteScroll", ""], [4, "ngIf"], ["mode", "md", 1, "h50", 3, "ngClass"], ["slot", "start"], [1, "head"], ["class", "center", "style", "height: 100%; width: 100%;", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "bg", 3, "click"], [1, "bottomsheet", 3, "touchmove", "touchend"], [1, "swipe-handler"], [1, "content", "ion-padding"], [1, "center", 2, "height", "100%", "width", "100%"], [1, "container"], ["size", "2"], [1, "roundDiv", 3, "ngClass"], ["src", "./assets/gifttt.png", 1, "firstIcon"], ["size", "8"], [1, "pointshowDiv"], [2, "font-size", "smaller", "color", "#636363"], [1, "informationDiv", 3, "click"], ["src", "./assets/information.jpg"], [1, "activityDiv"], [2, "color", "#797777"], [2, "padding-bottom", "40px"], [4, "ngFor", "ngForOf"], ["style", "background-color: #fff; position: fixed; bottom: 0px; width: 100%;", 4, "ngIf"], ["size", "6"], [1, "pnrDiv"], [2, "font-size", "14px", "color", "#636363"], ["class", "expiryDiv", 4, "ngIf"], [1, "descriptionDiv"], ["size", "4"], [2, "margin-left", "30px"], ["style", " width: 20px; float: right; margin-right: 20px;", "src", "./assets/arrow-right.png", 3, "click", 4, "ngIf"], ["size", "12"], ["class", "statusDiv", "style", "background-color: #ff9800;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #f44336;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #009688;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #8bc34a;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #009688;", 4, "ngIf"], [2, "border-bottom", "1px solid #cacaca", "padding-top", "10px"], [1, "expiryDiv"], [2, "font-size", "12px", "color", "#797777"], ["src", "./assets/arrow-right.png", 2, "width", "20px", "float", "right", "margin-right", "20px", 3, "click"], [1, "statusDiv", 2, "background-color", "#ff9800"], [1, "statusDiv", 2, "background-color", "#f44336"], [1, "statusDiv", 2, "background-color", "#009688"], [1, "statusDiv", 2, "background-color", "#8bc34a"], [1, "SeaBird_statusDiv", 2, "background-color", "#009688"], [2, "background-color", "#fff", "position", "fixed", "bottom", "0px", "width", "100%"], [2, "float", "left", "padding", "10px"], ["class", "pageBtn", 3, "click", 4, "ngIf"], ["class", "pageBtn", 4, "ngIf"], [1, "pageBtn", 3, "click"], [1, "pageBtn"], [2, "--background", "#F1F7FA"], ["mode", "md", 2, "--background", "#F1F7FA"], ["defaultHref", "/tabs/more"], [1, "SeaBird_head", 2, "margin", "0px"], ["class", "SeaBird_container", 4, "ngIf"], [1, "SeaBird_container"], [1, "SeaBird_rounDiv"], ["src", "./assets/icon/star.png", 1, "Sea_firstIcon"], [1, "SeaBird_pointshowDiv"], [1, "SeaBird_Loyality"], [1, "SeaBird_points"], [1, "SeaBird_line"], [1, "SeaBird_Recent"], [1, "SeaBird_card"], ["size", "9"], [1, "SeaBird_descriptionDiv"], ["size", "3"], [2, "color", "green"], ["class", "SeaBird_statusDiv", "style", "background-color: #ff9800;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #f44336;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #8bc34a;", 4, "ngIf"], [1, "SeaBird_statusDiv", 2, "background-color", "#ff9800"], [1, "SeaBird_statusDiv", 2, "background-color", "#f44336"], [1, "SeaBird_statusDiv", 2, "background-color", "#8bc34a"], ["class", "sb-page-header", 4, "ngIf"], ["style", "box-shadow: none;", 4, "ngIf"], ["class", "error-page", 4, "ngIf"], ["class", "loading-page", 4, "ngIf"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], ["type", "button", "aria-label", "How loyalty points work", 1, "sb-icon-btn", "sb-lp-help", 3, "click"], [2, "box-shadow", "none"], ["mode", "md", 2, "--background", "#F5A623 !important"], ["slot", "start", 3, "click"], [2, "color", "white"], [1, "head", "shyamoli-head"], [1, "center-hr", 2, "position", "absolute", "right", "0px", "top", "25%"], [1, "tb-help", 3, "click"], [1, "header-section"], ["class", "cardId ", 4, "ngIf"], ["class", "cardId2 ", 4, "ngIf"], ["class", "cardId3 ", 4, "ngIf"], ["class", "cardId4 ", 4, "ngIf"], ["class", "tier-tooltip-wrapper", 4, "ngIf"], [1, "content-section"], ["class", "tier-stepper", 4, "ngIf"], ["class", "platinum-exclusive", 4, "ngIf"], ["class", "expiry-alert", 4, "ngFor", "ngForOf"], [1, "div1", 2, "margin", "0px 18px", "--background", "none"], [1, "labelText"], [2, "display", "flex", "align-items", "center"], [1, "spanId"], ["type", "button", "class", "sb-lp-active-toggle", "role", "checkbox", "aria-label", "Show active points", 3, "click", 4, "ngIf"], ["class", "filter-active-note", 4, "ngIf"], ["class", "tx-wrapper", 4, "ngIf"], [1, "faq-cta", 3, "click"], [1, "faq-cta__left"], [1, "faq-cta__icon"], [1, "faq-cta__content"], [1, "faq-cta__title"], [1, "faq-cta__subtitle"], [1, "faq-cta__arrow"], ["threshold", "200px", 3, "disabled", "ionInfinite", 4, "ngIf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], [1, "custom-fab-btn", 3, "click"], ["name", "arrow-up-outline", 1, "custom-fab-icon"], [1, "cardId"], [1, "containerId"], [1, "localDiv", "localDiv2", 2, "border", "1px solid rgb(137, 95, 0)"], [1, "imgId2", "imgNewIcon"], [1, "labelId"], [1, "labelId2"], [1, "labelId3"], [2, "--progress-background", "#7E582A", 3, "value"], [1, "subId"], ["class", "ionText", 4, "ngIf"], ["size", "4", 1, "center-hr", 2, "justify-content", "end"], [1, "ionText"], [1, "subId2"], ["src", "././assets/icon/ic_help_bronze.png", 1, "imgId2", 3, "click"], [1, "cardId2"], [1, "localDiv", "localDiv2", 2, "border", "1px solid rgb(101, 101, 101)"], [1, "labelId", 2, "color", "#9B9B9B"], [1, "labelId2", 2, "color", "#656565"], [1, "labelId3", 2, "color", "#656565"], [2, "--progress-background", "#656565", 3, "value"], ["class", "ionText", "style", "color: #656565;", 4, "ngIf"], [1, "ionText", 2, "color", "#656565"], ["src", "././assets/icon/ic_help_silver.svg", 1, "imgId2", 3, "click"], [1, "cardId3"], [1, "localDiv", "localDiv2", 2, "background-color", "#FFF8D7", "border", "1px solid rgb(137, 95, 0)"], [2, "--progress-background", "#895F00", 3, "value"], [1, "cardId4"], [1, "localDiv", "localDiv2"], [1, "labelId", 2, "color", "#174578"], [1, "labelId2", 2, "color", "white"], [1, "labelId3", 2, "color", "white"], [2, "--progress-background", "#50A8EF", 3, "value"], ["class", "ionText", "style", "color: white;", 4, "ngIf"], [1, "ionText", 2, "color", "white"], ["src", "././assets/icon/ic_help_platinum.svg", 1, "imgId2", 3, "click"], [1, "tier-tooltip-wrapper"], [1, "tooltip-box"], [1, "tooltip-content"], [1, "tooltip-title"], ["lines", "none", 1, "tier-list"], ["class", "tier-item", 4, "ngFor", "ngForOf"], [1, "tier-item"], ["class", "badge", 4, "ngIf"], ["class", "achieved", 4, "ngIf"], [1, "badge"], [1, "achieved"], [1, "tier-stepper"], ["button", "", 1, "tier-stepper__card", 3, "click"], [1, "tier-stepper__row"], [1, "tier-stepper__tap-hint"], [1, "tier-stepper__item"], [1, "tier-stepper__dot", 3, "ngClass"], [1, "tier-stepper__name", 3, "ngClass"], [1, "tier-stepper__pts"], ["class", "tier-stepper__badge", 4, "ngIf"], ["class", "tier-stepper__connector", 3, "ngClass", 4, "ngIf"], [1, "tier-stepper__badge"], [1, "tier-stepper__connector", 3, "ngClass"], [1, "platinum-exclusive"], [1, "platinum-exclusive__title"], [1, "platinum-exclusive__content"], [1, "expiry-alert"], [1, "expiry-alert__row", "ion-align-items-start"], ["size", "auto"], [1, "expiry-alert__icon"], [1, "expiry-alert__title"], [1, "expiry-alert__subtitle"], ["src", "assets/icon/unchecked_checkbox_icon.svg", 3, "click", 4, "ngIf"], ["src", "assets/icon/checked_checkbox_icon.svg", 3, "click", 4, "ngIf"], ["src", "assets/icon/unchecked_checkbox_icon.svg", 3, "click"], ["src", "assets/icon/checked_checkbox_icon.svg", 3, "click"], ["type", "button", "role", "checkbox", "aria-label", "Show active points", 1, "sb-lp-active-toggle", 3, "click"], ["mode", "md", "aria-hidden", "true", 1, "sb-pax-check", 3, "checked"], [1, "filter-active-note"], [1, "tx-wrapper"], ["class", "tx-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "tx-card", 3, "ngClass"], [1, "tx-badge", 3, "ngClass"], [1, "tx-top"], ["class", "tx-pnr", 4, "ngIf"], ["class", "tx-route", 4, "ngIf"], [1, "tx-date", 3, "ngClass"], [1, "tx-pts", 3, "ngClass"], ["class", "tx-actions", 4, "ngIf"], [1, "tx-pnr"], [1, "tx-route"], [1, "tx-actions"], ["fill", "outline", "shape", "round", 1, "btn-transfer", 3, "click", "ngClass"], ["slot", "start", "name", "swap-horizontal-outline"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-sub"], ["fill", "solid", "shape", "round", 1, "btn-book", 3, "click"], ["threshold", "200px", 3, "ionInfinite", "disabled"], ["loadingText", "Please wait...", "loadingSpinner", "bubbles"], [1, "error-page"], [1, "error-page__wrapper"], [1, "error-page__icon"], [1, "error-page__title"], [1, "error-page__subtitle"], [1, "loading-page"], ["animated", "", 2, "width", "120px", "height", "24px"], [2, "margin-top", "16px"], ["animated", "", 2, "width", "90px", "height", "14px"], ["animated", "", 2, "width", "70px", "height", "28px", "margin-top", "8px"], ["animated", "", 2, "height", "8px", "margin-top", "16px"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "12px"], ["animated", "", 2, "width", "140px", "height", "14px"], ["animated", "", 2, "width", "70px", "height", "14px"], [1, "tier-stepper__card"], [2, "display", "flex", "justify-content", "space-between"], ["animated", "", 2, "width", "50px", "height", "50px", "border-radius", "50%"], ["animated", "", 2, "width", "60%", "height", "16px"], ["animated", "", 2, "width", "90%", "height", "12px"], ["animated", "", 2, "width", "60px", "height", "18px"], ["animated", "", 2, "width", "120px", "height", "18px", "margin-top", "12px"], ["animated", "", 2, "width", "180px", "height", "14px"], ["animated", "", 2, "width", "90px", "height", "12px"], ["animated", "", 2, "width", "110px", "height", "32px", "border-radius", "20px"]],
  template: function PointTransferPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PointTransferPage_ng_container_0_Template, 26, 3, "ng-container", 2)(1, PointTransferPage_ng_container_1_Template, 25, 2, "ng-container", 2)(2, PointTransferPage_ng_container_2_Template, 6, 5, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme" || ctx.metaData.msiteFolder == "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".firDiv[_ngcontent-%COMP%] {\n  background: greenyellow;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90px;\n  height: 25px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 15px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.icon-set[_ngcontent-%COMP%] {\n  width: 20px;\n  float: right;\n  margin-right: 10px;\n  --background-color: rgb(86, 145, 233);\n}\n\nion-col.md.hydrated[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-col.ios.hydrated[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  float: left;\n  list-style-type: none;\n}\n\nli[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.pageBtn[_ngcontent-%COMP%] {\n  float: right;\n  color: #3f51b5;\n  font-size: 10px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n}\n\n.roundDiv[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin: 10px;\n  padding: 10px;\n  background-color: var(--primary);\n}\n\n.roundDiv_network[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin: 10px;\n  padding: 10px;\n  background-color: var(--homeBgColor) !important;\n}\n\n.firstIcon[_ngcontent-%COMP%] {\n  color: black;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  margin: auto;\n}\n\n.pointshowDiv[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.informationDiv[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-left: 10px;\n  height: 25px;\n  width: 25px;\n}\n\n.activityDiv[_ngcontent-%COMP%] {\n  padding: 10px 0 5px 10px;\n  font-size: 0.8rem;\n  background-color: #eeeeee;\n}\n\n.pnrDiv[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.expiryDiv[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 5px;\n}\n\n.descriptionDiv[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 13px;\n  color: #636363;\n}\n\n.statusDiv[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 25px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 3px;\n  padding-bottom: 5px;\n  color: white;\n  font-size: 14px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: -1000px;\n  border-radius: 15px 15px 0 0;\n  z-index: 20;\n  background-color: #fff;\n  transition: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .swipe-handler[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 30px;\n  height: 6px;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  margin-left: -10px;\n  margin-top: -3px;\n  border-radius: 3px;\n  background: lightgray;\n}\n\n.bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n  display: none;\n}\n\n.SeaBird_Recent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: black;\n  padding: 18px 0 5px 10px;\n  font-size: 0.8rem;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background:#F1F7FA ;\n}\n\n.SeaBird_container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n.Sea_firstIcon[_ngcontent-%COMP%] {\n  height: 14.85px;\n  width: 18.01px;\n}\n\n.SeaBird_Loyality[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #000000;\n  font-weight: 600;\n  margin-left: -44px;\n}\n\n.SeaBird_head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000000;\n  font-weight: 700;\n}\n\n.SeaBird_rounDiv[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  margin-top: 31px;\n}\n\n.SeaBird_points[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 10px;\n  color: #000000;\n  margin-left: -30px;\n  margin-top: 8px;\n}\n\n.SeaBird_descriptionDiv[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.SeaBird_card[_ngcontent-%COMP%] {\n  --background:#F1F7FA;\n  margin: 8px;\n  padding: 4px;\n}\n\n.SeaBird_line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cacaca;\n  padding-top: 10px;\n  margin-left: 16px;\n  width: 311px;\n}\n\n.SeaBird_pointshowDiv[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.SeaBird_statusDiv[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 21px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 3px;\n  padding-bottom: 5px;\n  color: white;\n  font-size: 12px;\n}\n\n.shyamoli-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 12px;\n  margin: 10px 15px;\n  padding: 5px 0px;\n  border: 1px solid #D9D9D9;\n}\n\n.shyamoli-head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white !important;\n  -webkit-text-fill-color: white !important;\n}\n\n.shyamoli-header-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: left;\n  color: #333333;\n  margin-left: 15px;\n}\n\n.shyamoli-pageBtn[_ngcontent-%COMP%] {\n  float: right;\n  color: #3f51b5;\n  font-size: 14px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}\n\n.cardId[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n  background: url('bronze_member_background.dc0d1d40e8f7e8ac.png');\n  background-size: cover;\n  background-position: center;\n  border: solid 1px #EADED0;\n}\n\n.cardId2[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n  background: linear-gradient(to right, #ECEDF0, #EEF1F3);\n  background-image: url('silver_member_background.e2e4f680f0952074.png');\n  background-size: cover;\n}\n\n.cardId3[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n  background-image: url('gold_member_background.42ad9529f6d34d29.png');\n  margin-top: 20px;\n}\n\n.cardId4[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n  background-image: url('platinum_member_background.e9e9c69572ab5b42.png');\n}\n\n.containerId[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.localDiv[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 46%;\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  padding: 4px 8px 4px 8px;\n}\n\n.localDiv2[_ngcontent-%COMP%] {\n  min-height: 40px;\n  width: 46%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: #fff;\n  border-radius: 5px;\n  padding: 4px 8px;\n}\n\n.imgId2[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n\n.imgNewIcon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n\n.labelId[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #895F00;\n}\n\n.labelId2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #895F00;\n}\n\n.labelId3[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #895F00;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  --background: white;\n}\n\n.subId[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.subId2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 8px;\n}\n\n.ionText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #895F00;\n}\n\n.itemLabel[_ngcontent-%COMP%] {\n  --background: none;\n  margin-top: 0px;\n  margin-left: -5px;\n}\n\n.labelText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #464646;\n}\n\n.spanId[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4A4A4A;\n  margin-right: 8px;\n}\n\n.parentDiv[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 95%;\n  border-radius: 8px;\n  background-color: #FFFFFF;\n  margin: 2%;\n  padding: 12px;\n}\n\n.labelText2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.labelText3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #E8AA0A;\n}\n\n.pId[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.labelText4[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.div1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pId2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #9B9B9B;\n  margin-top: 5px;\n}\n\n.square[_ngcontent-%COMP%] {\n  border: solid 1px #E8AA0A;\n  height: 24px;\n  padding: 0px 5px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.iconID[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 18px;\n}\n\n.idLabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #E8AA0A;\n  margin-left: 6px;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #F1F7FA;\n  padding: 1px;\n}\n\n.header-section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  margin: 12px;\n  padding: 14px;\n}\n\n.content-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.custom-fab-btn[_ngcontent-%COMP%] {\n  --background: #F5A623;\n  --background-activated: #e09514;\n  --background-hover: #f7b23a;\n  --color: #ffffff;\n  --box-shadow: 0 6px 18px rgba(245, 166, 35, 0.35);\n  width: 54px;\n  height: 54px;\n  margin-right: 4px;\n  margin-bottom: 10px;\n}\n\n.custom-fab-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #f0f0f0;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 55px;\n  opacity: 0.35;\n  margin-bottom: 4px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 28px 20px;\n  text-align: center;\n  gap: 12px;\n  height: 40%;\n  width: 100%;\n}\n\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-hd);\n}\n\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-sm);\n  line-height: 1.5;\n  max-width: 220px;\n}\n\n.btn-book[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  \n\n  --background: #F5A623;\n  --color: #ffffff;\n  --border-radius: 20px;\n  --box-shadow: 0 3px 12px rgba(245, 166, 35, 0.35);\n  --padding-start: 24px;\n  --padding-end: 24px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: none; \n\n}\n\n.faq-cta[_ngcontent-%COMP%] {\n  margin: 8px 12px 0;\n  padding: 11px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n}\n.faq-cta__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.faq-cta__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  background: #edf3ff;\n  font-size: 15px;\n}\n.faq-cta__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.faq-cta__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-hd);\n}\n.faq-cta__subtitle[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: 11px;\n  color: var(--text-sm);\n}\n.faq-cta__arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-sm);\n  line-height: 1;\n}\n\n.tb-help[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  cursor: pointer;\n  margin-right: 15px;\n}\n\n.tb-transfer[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  margin-left: 4px;\n}\n\n.filter-active-note[_ngcontent-%COMP%] {\n  margin: 6px 14px 6px;\n  background: var(--primary-lt);\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 14px;\n  color: var(--primary-dk);\n  font-weight: bold;\n}\n\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  font-size: 11px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  margin: 4px 18px 8px;\n  line-height: 1.4;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  background: transparent;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 0;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #fff;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  color: #FFD27A;\n  font-size: 12px;\n  font-weight: 600;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #F5A623;\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  color: var(--active-green);\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #F5A623;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  margin-left: 6px;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .achieved[_ngcontent-%COMP%] {\n  background: var(--active-green);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  margin-left: 6px;\n}\n\n.expiry-alert[_ngcontent-%COMP%] {\n  margin: 8px 18px;\n  padding: 10px 12px;\n  background: var(--expiring-bg);\n  border: 1px solid #F0A875;\n  border-radius: var(--radius);\n}\n.expiry-alert__row[_ngcontent-%COMP%] {\n  gap: 8px;\n  flex-wrap: nowrap;\n}\n.expiry-alert__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.expiry-alert__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--expiring-org);\n}\n.expiry-alert__subtitle[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #C0722A;\n}\n\n.platinum-exclusive[_ngcontent-%COMP%] {\n  margin: 8px 18px;\n  background: #EEF2FF;\n  border: 1px solid #C7D2FE;\n  border-radius: var(--radius);\n  padding: 11px 12px;\n}\n.platinum-exclusive__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #3B4DB0;\n  margin-bottom: 6px;\n}\n.platinum-exclusive__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #4A5BA0;\n}\n\n.tier-stepper__card[_ngcontent-%COMP%] {\n  margin: 14px 16px;\n  border-radius: 18px;\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-sm);\n  background: var(--card-bg);\n}\n.tier-stepper[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 18px 14px 14px;\n}\n.tier-stepper__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0;\n}\n.tier-stepper__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  min-width: 0;\n}\n.tier-stepper__connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3px;\n  background: #E0E0E0;\n  margin: 18px 4px 0;\n  border-radius: 10px;\n}\n.tier-stepper__connector--done[_ngcontent-%COMP%] {\n  background: var(--active-green);\n  opacity: 0.5;\n}\n.tier-stepper__dot[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  position: relative;\n  z-index: 1;\n  transition: 0.2s ease;\n}\n.tier-stepper__dot--here[_ngcontent-%COMP%] {\n  background: #F5A623;\n  color: #ffffff;\n  box-shadow: 0 0 0 5px rgba(245, 166, 35, 0.22);\n}\n.tier-stepper__dot--ahead[_ngcontent-%COMP%] {\n  background: #F0F0F0;\n  border: 2px solid #CCCCCC;\n  color: #AAAAAA;\n  font-size: 15px;\n}\n.tier-stepper__dot--done[_ngcontent-%COMP%] {\n  background: #E8F8EE;\n  border: 2px solid var(--active-green);\n  color: var(--active-green);\n  font-size: 16px;\n}\n.tier-stepper__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-sm);\n  text-align: center;\n  line-height: 1.2;\n}\n.tier-stepper__name--here[_ngcontent-%COMP%] {\n  color: var(--primary-dk);\n  font-weight: 700;\n}\n.tier-stepper__name--done[_ngcontent-%COMP%] {\n  color: var(--active-green);\n}\n.tier-stepper__pts[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9B9B9B;\n  text-align: center;\n  line-height: 1.3;\n}\n.tier-stepper__badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  background: #F5A623;\n  color: #ffffff;\n  border-radius: 5px;\n  padding: 3px 8px;\n  white-space: nowrap;\n  margin-top: 3px;\n}\n.tier-stepper__tap-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #F5A623;\n  letter-spacing: 0.2px;\n}\n\n.error-page[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.error-page__wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  padding: 24px;\n  text-align: center;\n}\n.error-page__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #fff5f5;\n  border: 1px solid #ffd6d6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  margin-bottom: 18px;\n}\n.error-page__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-hd);\n  margin-bottom: 8px;\n}\n.error-page__subtitle[_ngcontent-%COMP%] {\n  max-width: 280px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: var(--text-sm);\n  margin-bottom: 24px;\n}\n.error-page__retry-btn[_ngcontent-%COMP%] {\n  width: 180px;\n  margin: 0;\n  --background: #F5A623;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(245, 166, 35, 0.25);\n  font-weight: 700;\n  height: 46px;\n}\n\n.loading-page[_ngcontent-%COMP%] {\n  --background: #f7f7f7;\n}\n.loading-page[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 12px;\n  border-radius: 14px;\n  box-shadow: none;\n}\n\n.tx-wrapper[_ngcontent-%COMP%]   .tx-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n  padding: 11px 12px;\n  box-shadow: var(--shadow-sm);\n  margin: 12px 16px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .active-card[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--active-green);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .received-card[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--received-blue);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .expiring-card[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--expiring-org);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .redeemed-card[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  border-left: 3px solid var(--redeemed-pur);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .expired-card[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  border-left: 3px solid var(--expired-red);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .pending-card[_ngcontent-%COMP%] {\n  border-left: 3px solid #D48806;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .adjusted-card[_ngcontent-%COMP%] {\n  border-left: 3px solid #1677FF;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  padding: 2px 8px;\n  border-radius: 4px;\n  margin-bottom: 6px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.active[_ngcontent-%COMP%] {\n  background: var(--active-bg);\n  color: var(--active-green);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.expired[_ngcontent-%COMP%] {\n  background: var(--expired-bg);\n  color: var(--expired-red);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.redeemed[_ngcontent-%COMP%] {\n  background: var(--redeemed-bg);\n  color: var(--redeemed-pur);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.expiring[_ngcontent-%COMP%] {\n  background: var(--expiring-bg);\n  color: var(--expiring-org);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.received[_ngcontent-%COMP%] {\n  background: var(--received-bg);\n  color: var(--received-blue);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.transferred[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #4F46E5;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.pending[_ngcontent-%COMP%] {\n  background: #FFF7E6;\n  color: #D48806;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-badge.adjusted[_ngcontent-%COMP%] {\n  background: #E6F4FF;\n  color: #1677FF;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pnr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-hd);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-route[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-sm);\n  margin-top: 2px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-sm);\n  margin-top: 3px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-date.warn[_ngcontent-%COMP%] {\n  color: var(--expiring-org);\n  font-weight: 600;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-date.danger[_ngcontent-%COMP%] {\n  color: var(--expired-red);\n  font-weight: 600;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-date.info[_ngcontent-%COMP%] {\n  color: var(--received-blue);\n  font-weight: 500;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-date.pending[_ngcontent-%COMP%] {\n  color: #D48806;\n  font-weight: 500;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts.plus[_ngcontent-%COMP%] {\n  color: var(--active-green);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts.minus[_ngcontent-%COMP%] {\n  color: var(--expired-red);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts.blue[_ngcontent-%COMP%] {\n  color: var(--received-blue);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts.redeemed[_ngcontent-%COMP%] {\n  color: var(--redeemed-pur);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-pts.neutral[_ngcontent-%COMP%] {\n  color: var(--text-sm);\n}\n.tx-wrapper[_ngcontent-%COMP%]   .tx-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .btn-transfer[_ngcontent-%COMP%] {\n  --border-color: #F5A623;\n  --color: #F5A623;\n  --background: #fff;\n  --border-radius: 20px;\n  --border-width: 1.5px;\n  --background-activated: #F5A623;\n  --background-focused: #F5A623;\n  --color-focused: #fff;\n  --color-activated: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  margin-top: 8px;\n}\n.tx-wrapper[_ngcontent-%COMP%]   .btn-transfer.expiring-btn[_ngcontent-%COMP%] {\n  --color: var(--expiring-org);\n  --border-color: var(--expiring-org);\n}\n\n[data-theme=seabirdThemeNew][_nghost-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%] {\n  \n\n  \n\n  \n\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--sb-bg);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .error-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .error-page[_ngcontent-%COMP%] {\n  --background: var(--sb-surface);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .loading-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .loading-page[_ngcontent-%COMP%] {\n  --background: #f7f7f7;\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .header-section[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  background: var(--sb-bg);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .custom-fab-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .custom-fab-btn[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n  --background-activated: var(--sb-color-sea);\n  --background-hover: var(--sb-color-sea);\n  --box-shadow: 0 6px 18px rgba(10, 110, 127, 0.35);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .btn-book[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .btn-book[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n  --box-shadow: 0 3px 12px rgba(10, 110, 127, 0.35);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .error-page__retry-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .error-page__retry-btn[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n  --box-shadow: 0 4px 12px rgba(10, 110, 127, 0.25);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .filter-active-note[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .filter-active-note[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%] {\n  background: var(--sb-color-navy);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  color: var(--sb-color-on-dark-muted);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--sb-on-brand);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__dot--here[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__dot--here[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n  box-shadow: 0 0 0 5px rgba(10, 110, 127, 0.22);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__name--here[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__name--here[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__badge[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__badge[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__tap-hint[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__tap-hint[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer[_ngcontent-%COMP%] {\n  --border-color: var(--sb-accent);\n  --color: var(--sb-accent);\n  --background-activated: var(--sb-color-sea);\n  --background-focused: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer.expiring-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer.expiring-btn[_ngcontent-%COMP%] {\n  --border-color: var(--sb-color-coral);\n  --color: var(--sb-color-coral);\n  --background-activated: var(--sb-color-coral);\n  --background-focused: var(--sb-color-coral);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .sb-lp-active-toggle[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .sb-lp-active-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 8px;\n  padding: 2px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .sb-lp-active-toggle[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .sb-lp-active-toggle[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n@media (prefers-color-scheme: dark) {\n  [data-theme=seabirdThemeNew][_nghost-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%] {\n    \n\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .error-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .error-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew][_nghost-%COMP%]   .loading-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .loading-page[_ngcontent-%COMP%] {\n    --background: var(--sb-bg);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .filter-active-note[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .filter-active-note[_ngcontent-%COMP%] {\n    background: var(--sb-color-sea-tint);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__connector[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__connector[_ngcontent-%COMP%] {\n    background: var(--sb-border);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__dot--ahead[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__dot--ahead[_ngcontent-%COMP%] {\n    background: var(--sb-surface-alt);\n    border-color: var(--sb-border-strong);\n    color: var(--sb-text-muted);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-stepper__dot--done[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-stepper__dot--done[_ngcontent-%COMP%] {\n    background: var(--active-bg);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tx-wrapper[_ngcontent-%COMP%]   .btn-transfer[_ngcontent-%COMP%] {\n    --background: var(--sb-surface);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .expiry-alert[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .expiry-alert[_ngcontent-%COMP%] {\n    border-color: var(--expiring-org);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .expiry-alert__subtitle[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .expiry-alert__subtitle[_ngcontent-%COMP%] {\n    color: #E8A36A;\n  }\n}"]
});

/***/ },

/***/ 75560
/*!****************************************************************!*\
  !*** ./src/app/points-faq-popup/points-faq-popup.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsFaqPopupComponent: () => (/* binding */ PointsFaqPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
var _PointsFaqPopupComponent;






const _c0 = () => ["earn", "redeem", "single-txn", "expiry", "transfer", "tiers"];
function PointsFaqPopupComponent_ng_container_0_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 20)(1, "ion-toolbar", 21)(2, "div", 22)(3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsFaqPopupComponent_ng_container_0_ion_header_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "FAQs on Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsFaqPopupComponent_ng_container_0_ion_header_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsFaqPopupComponent_ng_container_0_ion_header_3_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "FAQs on Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsFaqPopupComponent_ng_container_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tier_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2022 ", tier_r4.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tier_r4.point_value_label);
  }
}
function PointsFaqPopupComponent_ng_container_0_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tier_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tier_r5 == null ? null : tier_r5.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tier_r5 == null ? null : tier_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tier_r5 == null ? null : tier_r5.unlock_label, " ");
  }
}
function PointsFaqPopupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PointsFaqPopupComponent_ng_container_0_ion_header_2_Template, 7, 0, "ion-header", 2)(3, PointsFaqPopupComponent_ng_container_0_ion_header_3_Template, 7, 0, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content")(5, "div", 3)(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Loyalty Points Guide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " How to earn, redeem and transfer SmartMiles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "ion-accordion-group", 9)(15, "ion-accordion", 10)(16, "ion-item", 11)(17, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " How to earn loyalty points? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " You earn points with every booking on the app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Every ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Points are credited after your journey is completed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-accordion", 14)(29, "ion-item", 11)(30, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " How to redeem loyalty points? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Based on your membership tier, the value of each point differs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, PointsFaqPopupComponent_ng_container_0_div_34_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Apply points at checkout before payment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-accordion", 16)(37, "ion-item", 11)(38, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Can I redeem all my points in a single transaction? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " No. You can redeem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " up to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " in a single transaction . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-accordion", 17)(49, "ion-item", 11)(50, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " When do my points expire? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Points expire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " from the date they were earned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " You'll see a warning on expiring points \u2014 use or transfer them before the expiry date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-accordion", 18)(60, "ion-item", 11)(61, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Can I transfer points to someone else? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Yes. Tap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Transfer points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " on any active transaction. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " You can transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "points per transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " to any registered user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " You cannot transfer to yourself. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ion-accordion", 19)(76, "ion-item", 11)(77, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " How do tier levels work? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Tiers are based on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "total cumulative points earned");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " (lifetime, not just available). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, PointsFaqPopupComponent_ng_container_0_div_85_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Once unlocked, your tier never goes down. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) != "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", true)("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.faqData == null ? null : ctx_r1.faqData.userSummary == null ? null : ctx_r1.faqData.userSummary.credit_point_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.faqData == null ? null : ctx_r1.faqData.all_memberships);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.faqData == null ? null : ctx_r1.faqData.userSummary == null ? null : ctx_r1.faqData.userSummary.max_redeem == null ? null : ctx_r1.faqData.userSummary.max_redeem.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.faqData == null ? null : ctx_r1.faqData.userSummary == null ? null : ctx_r1.faqData.userSummary.max_redeem == null ? null : ctx_r1.faqData.userSummary.max_redeem.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.pointsExpiryText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.faqData == null ? null : ctx_r1.faqData.all_memberships);
  }
}
function PointsFaqPopupComponent_ng_container_1_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 20)(1, "ion-toolbar", 21)(2, "div", 22)(3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsFaqPopupComponent_ng_container_1_ion_header_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsFaqPopupComponent_ng_container_1_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsFaqPopupComponent_ng_container_1_ion_header_2_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsFaqPopupComponent_ng_container_1_ion_card_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.point_value_label, " ");
  }
}
function PointsFaqPopupComponent_ng_container_1_ion_card_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const benefit_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](benefit_r9);
  }
}
function PointsFaqPopupComponent_ng_container_1_ion_card_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 45)(1, "ion-card-content")(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PointsFaqPopupComponent_ng_container_1_ion_card_23_div_4_Template, 4, 1, "div", 47)(5, PointsFaqPopupComponent_ng_container_1_ion_card_23_div_5_Template, 4, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83C\uDF81 ", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.name, " Member Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.point_value_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.benefits);
  }
}
function PointsFaqPopupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PointsFaqPopupComponent_ng_container_1_ion_header_1_Template, 7, 0, "ion-header", 2)(2, PointsFaqPopupComponent_ng_container_1_ion_header_2_Template, 7, 0, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-content")(4, "div", 30)(5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Congratulations! You've unlocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-card", 36)(14, "ion-card-content")(15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Your current points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PointsFaqPopupComponent_ng_container_1_ion_card_23_Template, 6, 3, "ion-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsFaqPopupComponent_ng_container_1_Template_ion_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " View My Points \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) != "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.name, " Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" You've crossed ", ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points, " cumulative SmartMiles. Your points are now worth more. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.icon, " ", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.name, " Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.point_value_label, " \u00B7 ", ctx_r1.membershipData == null ? null : ctx_r1.membershipData.name, " redemption rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.membershipData);
  }
}
class PointsFaqPopupComponent {
  constructor(modalContrl, commonStorage) {
    this.modalContrl = modalContrl;
    this.commonStorage = commonStorage;
    this.metaData = this.commonStorage.getItem('metaData');
  }
  ngOnInit() {
    var _this$faqData, _this$faqData2, _this$faqData3, _this$faqData4;
    this.creditPointValue = (_this$faqData = this.faqData) === null || _this$faqData === void 0 ? void 0 : _this$faqData.credit_point_value;
    this.maxRedeemValue = (_this$faqData2 = this.faqData) !== null && _this$faqData2 !== void 0 && _this$faqData2.max_redeem_value ? (_this$faqData3 = this.faqData) === null || _this$faqData3 === void 0 ? void 0 : _this$faqData3.max_redeem_value : 0;
    this.maxRedeemType = (_this$faqData4 = this.faqData) === null || _this$faqData4 === void 0 ? void 0 : _this$faqData4.max_redeem_type;
  }
  get pointsExpiryText() {
    var _this$faqData$userSum, _this$faqData5;
    const days = Number((_this$faqData$userSum = (_this$faqData5 = this.faqData) === null || _this$faqData5 === void 0 || (_this$faqData5 = _this$faqData5.userSummary) === null || _this$faqData5 === void 0 ? void 0 : _this$faqData5.points_expire_after_days) !== null && _this$faqData$userSum !== void 0 ? _this$faqData$userSum : 0);
    if (!days || days <= 0) {
      return '0 days';
    }
    if (days < 30) {
      return `${days} day${days === 1 ? '' : 's'}`;
    }
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    if (remainingDays === 0) {
      return `${months} month${months === 1 ? '' : 's'}`;
    }
    return `${months} month${months === 1 ? '' : 's'} ${remainingDays} day${remainingDays === 1 ? '' : 's'}`;
  }
  closePopup() {
    this.modalContrl.dismiss();
  }
}
_PointsFaqPopupComponent = PointsFaqPopupComponent;
_PointsFaqPopupComponent.ɵfac = function PointsFaqPopupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsFaqPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage));
};
_PointsFaqPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _PointsFaqPopupComponent,
  selectors: [["app-points-faq-popup"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [1, "faq-popup"], ["class", "sb-page-header", 4, "ngIf"], [1, "faq-hero-card"], [1, "faq-hero-icon"], [1, "faq-hero-content"], [1, "faq-hero-heading"], [1, "faq-hero-subtitle"], [1, "faq-content"], [3, "multiple", "value"], ["value", "earn"], ["slot", "header", "lines", "none", 1, "faq-item-header"], [1, "faq-question"], ["slot", "content", 1, "faq-answer"], ["value", "redeem"], [4, "ngFor", "ngForOf"], ["value", "single-txn"], ["value", "expiry"], ["value", "transfer"], ["value", "tiers", 2, "margin-bottom", "40px"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], [2, "--background", "#1a3a6e !important"], [1, "faq-topbar", 3, "click"], [1, "faq-back"], [1, "faq-title"], [1, "tier-upgrade-popup"], [1, "upgrade-screen", 2, "padding-top", "0px"], ["src", "././assets/icon/popper.gif", "alt", "", 1, "upgrade-burst"], [1, "upgrade-sub-lbl"], [1, "upgrade-tier-name"], [1, "upgrade-desc"], [1, "upgrade-card"], [1, "uc-badge"], [1, "uc-label"], [1, "uc-pts"], [1, "uc-rate"], ["class", "perks-card", 4, "ngIf"], ["expand", "block", "fill", "solid", "shape", "round", 1, "btn-back-hub", 3, "click"], [2, "--background", "#F5A623 !important"], [1, "faq-topbar", 2, "background", "#F5A623", 3, "click"], [1, "perks-card"], [1, "perks-title"], ["class", "perk-row", 4, "ngIf"], ["class", "perk-row", 4, "ngFor", "ngForOf"], [1, "perk-row"], [1, "perk-dot"]],
  template: function PointsFaqPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PointsFaqPopupComponent_ng_container_0_Template, 87, 11, "ng-container", 0)(1, PointsFaqPopupComponent_ng_container_1_Template, 26, 10, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "faq");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "upgrade");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: [".textHeader[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n  margin-top: 10px;\n  text-decoration: underline;\n}\n\n.textQuestion[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  margin-top: 15px;\n}\n\n.textAnswer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  color: #4A4A4A;\n}\n\n.btnId[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 4px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n}\n\n.faq-topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  background: #1a3a6e;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n}\n\n.faq-back[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.faq-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n\n.faq-popup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-hero-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 18px 16px;\n  background: linear-gradient(135deg, #1a3a6e 0%, #2d5ea8 100%);\n  color: #ffffff;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  box-shadow: 0 10px 24px rgba(26, 58, 110, 0.18);\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-hero-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  flex-shrink: 0;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-hero-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-hero-heading[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 4px;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  opacity: 0.92;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-content[_ngcontent-%COMP%] {\n  padding: 0 16px 20px;\n}\n.faq-popup[_ngcontent-%COMP%]   ion-accordion-group[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid #e4e9f2;\n  background: #ffffff;\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-item-header[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 18px;\n  --inner-padding-end: 18px;\n  --min-height: 56px;\n  --color: #1f2937;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.45;\n  color: #243047;\n  white-space: normal;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%] {\n  padding: 2px 18px 18px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #5b6475;\n  background: #ffffff;\n  border-top: 1px solid #eef2f7;\n}\n.faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 700;\n}\n.faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanding[_ngcontent-%COMP%], \n.faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanded[_ngcontent-%COMP%] {\n  border-color: #d7deeb;\n}\n.faq-popup[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  padding-right: 14px;\n}\n.faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #111827;\n}\n\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 28px 16px;\n  text-align: center;\n  background: linear-gradient(180deg, #fff9ee 0%, #ffffff 60%);\n  gap: 14px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-burst[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-sub-lbl[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  color: var(--text-sm);\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-tier-name[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  color: var(--primary-dk);\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-desc[_ngcontent-%COMP%] {\n  max-width: 90%;\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text-sm);\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 6px 0 0;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: linear-gradient(135deg, #f5a623 0%, #e8960f 100%);\n  box-shadow: 0 8px 22px rgba(232, 150, 15, 0.22);\n  position: relative;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.14) 1.5px, transparent 1px);\n  background-size: 16px 16px;\n  pointer-events: none;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 18px 18px 20px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .uc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.22);\n  font-size: 13px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 10px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .uc-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 6px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .uc-pts[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-weight: 800;\n  line-height: 1;\n  color: #ffffff;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .uc-rate[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.84);\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perks-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  border-radius: var(--radius-lg);\n  background: #ffffff;\n  border: 1px solid var(--border);\n  box-shadow: none;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perks-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perks-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-hd);\n  margin-bottom: 12px;\n  text-align: left;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perk-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 15px;\n  line-height: 1.5;\n  color: var(--text-bd);\n  margin-bottom: 10px;\n  text-align: left;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perk-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perk-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  margin-top: 5px;\n  border-radius: 50%;\n  background: var(--active-green);\n  flex-shrink: 0;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .perk-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-hd);\n  font-weight: 700;\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 6px;\n  --border-radius: var(--radius);\n  --background: #F5A623;\n  --background-activated: #F5A623;\n  --background-hover: #F5A623;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: none;\n  box-shadow: 0 4px 14px rgba(245, 166, 35, 0.28);\n}\n.tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%]::after {\n  --background: #F5A623 !important;\n  --background-focused: transparent !important;\n}\n\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-tier-name[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-tier-name[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-card[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-card[_ngcontent-%COMP%] {\n  background: var(--sb-gradient-header);\n  box-shadow: 0 8px 22px rgba(11, 37, 64, 0.22);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n  --background-activated: var(--sb-color-sea);\n  --background-hover: var(--sb-color-sea);\n  box-shadow: 0 4px 14px rgba(10, 110, 127, 0.28);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%]::after, [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .btn-back-hub[_ngcontent-%COMP%]::after {\n  --background: var(--sb-color-sea) !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-theme=seabirdThemeNew][_nghost-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%] {\n    \n\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%] {\n    background: var(--sb-surface);\n    border-color: var(--sb-border);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanding[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanding[_ngcontent-%COMP%], \n   [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanded[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion.accordion-expanded[_ngcontent-%COMP%] {\n    border-color: var(--sb-border-strong);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-item-header[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-item-header[_ngcontent-%COMP%] {\n    --background: var(--sb-surface);\n    --color: var(--sb-text);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%], \n   [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    color: var(--sb-text);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%] {\n    color: var(--sb-text-muted);\n    background: var(--sb-surface);\n    border-top-color: var(--sb-border);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .faq-popup[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    color: var(--sb-text);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-screen[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .upgrade-screen[_ngcontent-%COMP%] {\n    background: var(--sb-bg);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .perks-card[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-upgrade-popup[_ngcontent-%COMP%]   .perks-card[_ngcontent-%COMP%] {\n    background: var(--sb-surface);\n  }\n}"]
});

/***/ },

/***/ 10712
/*!********************************************************************!*\
  !*** ./src/app/points-level-popup/points-level-popup.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsLevelPopupComponent: () => (/* binding */ PointsLevelPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
var _PointsLevelPopupComponent;






const _c0 = (a0, a1, a2) => ({
  "done": a0,
  "here": a1,
  "locked": a2
});
function PointsLevelPopupComponent_ng_container_0_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 4)(1, "ion-toolbar", 5)(2, "div", 6)(3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsLevelPopupComponent_ng_container_0_ion_header_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsLevelPopupComponent_ng_container_0_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 10)(1, "ion-toolbar", 11)(2, "ion-buttons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsLevelPopupComponent_ng_container_0_ion_header_2_Template_ion_buttons_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--background", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.color) + " !important");
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Milestone achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.next_membership == null ? null : ctx_r1.next_membership.remaining_points, " points more to ", ctx_r1.nextMembership, "");
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tier_r5 == null ? null : tier_r5.unlock_label);
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Milestone achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You're here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "div")(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_span_4_Template, 2, 0, "span", 38)(5, PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_span_5_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", item_r7 == null ? null : item_r7.is_current)("done", !(item_r7 == null ? null : item_r7.is_current) && (item_r7 == null ? null : item_r7.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r7 == null ? null : item_r7.icon, "", item_r7 == null ? null : item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r7 == null ? null : item_r7.is_current);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(item_r7 == null ? null : item_r7.is_current) && (item_r7 == null ? null : item_r7.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.point_value_label);
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "ion-card", 32)(2, "ion-card-content", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Point value by tier:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-list", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_div_6_Template, 8, 9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.membershipData);
  }
}
function PointsLevelPopupComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 16)(2, "ion-col")(3, "div", 17)(4, "div", 18)(5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-progress-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-row", 24)(16, "ion-col", 25)(17, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_18_Template, 2, 0, "ng-container", 0)(19, PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_19_Template, 2, 2, "ng-container", 0)(20, PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_20_Template, 2, 1, "ng-container", 0)(21, PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_21_Template, 2, 0, "ng-container", 0)(22, PointsLevelPopupComponent_ng_container_0_ng_container_4_ng_container_22_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col", 27)(24, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 28)(27, "ion-img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsLevelPopupComponent_ng_container_0_ng_container_4_Template_ion_img_click_27_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showBadges(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PointsLevelPopupComponent_ng_container_0_ng_container_4_div_28_Template, 7, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_21_0;
    let tmp_23_0;
    const tier_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (tmp_4_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_4_0.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", (tmp_5_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_5_0.tagBg)("border", "1px solid " + ((tmp_6_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_6_0.borderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tier_r5 == null ? null : tier_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.membershipData.length - 1 !== 3 ? (tmp_8_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_8_0.textColor : "#1F2937 !important");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", tier_r5 == null ? null : tier_r5.name, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", (tmp_10_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_10_0.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", (tmp_11_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_11_0.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--progress-background", (tmp_13_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_13_0.progressColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (tier_r5 == null ? null : tier_r5.is_current) ? ctx_r1.progressPercentage / 100 : !(tier_r5 == null ? null : tier_r5.is_current) && (tier_r5 == null ? null : tier_r5.is_unlocked) ? 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", (tmp_15_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_15_0.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r5 == null ? null : tier_r5.is_current) && (tier_r5 == null ? null : tier_r5.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && (tier_r5 == null ? null : tier_r5.is_current) && (tier_r5 == null ? null : tier_r5.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r5 == null ? null : tier_r5.is_current) && !(tier_r5 == null ? null : tier_r5.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && (tier_r5 == null ? null : tier_r5.is_current) && (tier_r5 == null ? null : tier_r5.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r5 == null ? null : tier_r5.is_current) && (tier_r5 == null ? null : tier_r5.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", (tmp_21_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_21_0.textColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tier_r5 == null ? null : tier_r5.point_value_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_23_0 = ctx_r1.getTheme(i_r6)) == null ? null : tmp_23_0.helpIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.cardClick == i_r6);
  }
}
function PointsLevelPopupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PointsLevelPopupComponent_ng_container_0_ion_header_1_Template, 7, 0, "ion-header", 1)(2, PointsLevelPopupComponent_ng_container_0_ion_header_2_Template, 7, 2, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PointsLevelPopupComponent_ng_container_0_ng_container_4_Template, 29, 29, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) != "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.membershipData);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 4)(1, "ion-toolbar", 5)(2, "div", 6)(3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsLevelPopupComponent_ng_container_1_ion_header_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Your Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 10)(1, "ion-toolbar", 11)(2, "ion-buttons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsLevelPopupComponent_ng_container_1_ion_header_2_Template_ion_buttons_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("--background", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.color) + " !important");
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r1.getCleanTitle(ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.title), " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_16_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points, "1.0-0"), " cumulative points earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextMembership);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 52)(1, "ion-col")(2, "div", 17)(3, "div", 53)(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-progress-bar", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row", 24)(15, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_16_Template, 4, 5, "ion-text", 57)(17, PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_17_Template, 2, 1, "ion-text", 57)(18, PointsLevelPopupComponent_ng_container_1_ion_card_5_ion_text_18_Template, 2, 0, "ion-text", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nextMemberPoints && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.nextMemberPoints && ctx_r1.nextMembership && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r1.getCleanTitle(ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.title), " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_16_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points, "1.0-0"), " cumulative points earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextMembership);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 58)(1, "ion-col")(2, "div", 17)(3, "div", 59)(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "ion-label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-progress-bar", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row", 24)(15, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_16_Template, 4, 5, "ion-text", 64)(17, PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_17_Template, 2, 1, "ion-text", 64)(18, PointsLevelPopupComponent_ng_container_1_ion_card_6_ion_text_18_Template, 2, 0, "ion-text", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nextMemberPoints && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.nextMemberPoints && ctx_r1.nextMembership && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r1.getCleanTitle(ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.title), " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_16_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points, "1.0-0"), " cumulative points earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextMembership);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 66)(1, "ion-col")(2, "div", 17)(3, "div", 67)(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-progress-bar", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row", 24)(15, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_16_Template, 4, 5, "ion-text", 57)(17, PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_17_Template, 2, 1, "ion-text", 57)(18, PointsLevelPopupComponent_ng_container_1_ion_card_7_ion_text_18_Template, 2, 0, "ion-text", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nextMemberPoints && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.nextMemberPoints && ctx_r1.nextMembership && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r1.getCleanTitle(ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.title), " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_16_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.current_points, "1.0-0"), " cumulative points earned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextMembership);
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You have achieved maximum level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 69)(1, "ion-col")(2, "div", 17)(3, "div", 18)(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "ion-label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Available points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-progress-bar", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row", 24)(15, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_16_Template, 4, 5, "ion-text", 74)(17, PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_17_Template, 2, 1, "ion-text", 74)(18, PointsLevelPopupComponent_ng_container_1_ion_card_8_ion_text_18_Template, 2, 0, "ion-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.currentMembership, " member");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.availablePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.progressPercentage / 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nextMemberPoints && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.nextMemberPoints && ctx_r1.nextMembership && !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier);
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tier_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tier_r10 == null ? null : tier_r10.tag) || "You're here", " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Milestone achieved ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, tier_r10 == null ? null : tier_r10.to_points, "1.0-0"), " pts ");
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.next_membership == null ? null : ctx_r1.next_membership.remaining_points, " points more to ", ctx_r1.nextMembership, " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tier_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tier_r10 == null ? null : tier_r10.unlock_label, " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You have achieved maximum level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Milestone achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PointsLevelPopupComponent_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 78)(4, "div", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PointsLevelPopupComponent_ng_container_1_div_11_span_7_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PointsLevelPopupComponent_ng_container_1_div_11_ng_container_9_Template, 3, 4, "ng-container", 0)(10, PointsLevelPopupComponent_ng_container_1_div_11_ng_container_10_Template, 2, 2, "ng-container", 0)(11, PointsLevelPopupComponent_ng_container_1_div_11_ng_container_11_Template, 2, 1, "ng-container", 0)(12, PointsLevelPopupComponent_ng_container_1_div_11_ng_container_12_Template, 2, 0, "ng-container", 0)(13, PointsLevelPopupComponent_ng_container_1_div_11_ng_container_13_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tier_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](18, _c0, (tier_r10 == null ? null : tier_r10.is_unlocked) && !(tier_r10 == null ? null : tier_r10.is_current), tier_r10 == null ? null : tier_r10.is_current, !(tier_r10 == null ? null : tier_r10.is_unlocked)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !(tier_r10 == null ? null : tier_r10.is_current) && (tier_r10 == null ? null : tier_r10.is_unlocked) ? "\u2713" : tier_r10 == null ? null : tier_r10.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("locked", !(tier_r10 == null ? null : tier_r10.is_unlocked))("done", (tier_r10 == null ? null : tier_r10.is_unlocked) && !(tier_r10 == null ? null : tier_r10.is_current));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tier_r10 == null ? null : tier_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", tier_r10 == null ? null : tier_r10.is_current);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r10 == null ? null : tier_r10.is_current) && (tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && (tier_r10 == null ? null : tier_r10.is_current) && (tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r10 == null ? null : tier_r10.is_current) && !(tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && (tier_r10 == null ? null : tier_r10.is_current) && (tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.currentMembershipData == null ? null : ctx_r1.currentMembershipData.is_max_tier) && !(tier_r10 == null ? null : tier_r10.is_current) && (tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.getRateClass(i_r11, tier_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tier_r10 == null ? null : tier_r10.point_value_label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("locked", !(tier_r10 == null ? null : tier_r10.is_unlocked));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", tier_r10 == null ? null : tier_r10.benefits == null ? null : tier_r10.benefits.join(" \u00B7 "), " ");
  }
}
function PointsLevelPopupComponent_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 91)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.progress_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.current_points, "pts now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.nextTierProgress == null ? null : ctx_r1.nextTierProgress.required_points, "pts needed");
  }
}
function PointsLevelPopupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PointsLevelPopupComponent_ng_container_1_ion_header_1_Template, 7, 0, "ion-header", 1)(2, PointsLevelPopupComponent_ng_container_1_ion_header_2_Template, 7, 2, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-content", 42)(4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PointsLevelPopupComponent_ng_container_1_ion_card_5_Template, 19, 7, "ion-card", 44)(6, PointsLevelPopupComponent_ng_container_1_ion_card_6_Template, 19, 7, "ion-card", 45)(7, PointsLevelPopupComponent_ng_container_1_ion_card_7_Template, 19, 7, "ion-card", 46)(8, PointsLevelPopupComponent_ng_container_1_ion_card_8_Template, 19, 7, "ion-card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PointsLevelPopupComponent_ng_container_1_div_11_Template, 18, 22, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PointsLevelPopupComponent_ng_container_1_div_12_Template, 12, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) == "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) != "seabirdThemeNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isBronzeMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isSilverMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isGoldMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isPlatinumMember);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r1.getTierProgressHeight(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.membershipData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nextTierProgress);
  }
}
class PointsLevelPopupComponent {
  constructor(modalContrl, commonStorage) {
    this.modalContrl = modalContrl;
    this.commonStorage = commonStorage;
    this.availablePoints = 0;
    this.membershipData = [];
    this.currentMembershipData = {};
    this.nextTierProgress = {};
    this.next_membership = {};
    this.currentMembership = '';
    this.cardClick = null;
    this.isBronzeMember = false;
    this.isSilverMember = false;
    this.isGoldMember = false;
    this.isPlatinumMember = false;
    this.progressPercentage = 0;
    this.nextMembership = '';
    this.nextMemberPoints = '';
    this.redeemPointValue = '';
    this.metaData = this.commonStorage.getItem('metaData');
    console.log(this.nextTierProgress);
  }
  ngOnInit() {
    var _this$currentMembersh, _this$currentMembersh2, _this$currentMembersh3, _this$currentMembersh4, _this$next_membership;
    this.currentMembership = ((_this$currentMembersh = this.currentMembershipData) === null || _this$currentMembersh === void 0 ? void 0 : _this$currentMembersh.name) || '';
    this.progressPercentage = ((_this$currentMembersh2 = this.currentMembershipData) === null || _this$currentMembersh2 === void 0 ? void 0 : _this$currentMembersh2.progress_percentage) || 0;
    this.nextMemberPoints = ((_this$currentMembersh3 = this.currentMembershipData) === null || _this$currentMembersh3 === void 0 ? void 0 : _this$currentMembersh3.remaining_points) || '';
    this.redeemPointValue = ((_this$currentMembersh4 = this.currentMembershipData) === null || _this$currentMembersh4 === void 0 ? void 0 : _this$currentMembersh4.point_value_label) || '';
    this.nextMembership = ((_this$next_membership = this.next_membership) === null || _this$next_membership === void 0 ? void 0 : _this$next_membership.name) || '';
    const currentIndex = this.membershipData.findIndex(item => item === null || item === void 0 ? void 0 : item.is_current);
    if (currentIndex <= 0) {
      this.isBronzeMember = true;
    } else if (currentIndex === 1) {
      this.isSilverMember = true;
    } else if (currentIndex === 2) {
      this.isGoldMember = true;
    } else {
      this.isPlatinumMember = true;
    }
    if (currentIndex !== -1 && this.membershipData[currentIndex + 1]) {
      var _this$membershipData;
      this.nextMembership = ((_this$membershipData = this.membershipData[currentIndex + 1]) === null || _this$membershipData === void 0 ? void 0 : _this$membershipData.name) || '';
    } else {
      this.nextMembership = 'Maximum tier unlocked';
    }
  }
  close() {
    this.modalContrl.dismiss();
  }
  isBeforeCurrent(index) {
    // Find the index of the current level
    const currentLevelIndex = this.membershipData.findIndex(membership => membership.is_current);
    // Return true if the passed index is before the current level index
    return index < currentLevelIndex;
  }
  showBadges(index) {
    if (this.cardClick === index) {
      this.cardClick = null;
    } else {
      this.cardClick = index;
    }
  }
  getTheme(key) {
    const themes = {
      0: {
        cardClass: 'cardId',
        textColor: '#895F00',
        progressColor: '#7E582A',
        helpIcon: '././assets/icon/ic_help_bronze.png',
        tagBg: '#FFFFFF',
        borderColor: 'rgb(137, 95, 0)'
      },
      1: {
        cardClass: 'cardId2',
        textColor: '#656565',
        progressColor: '#656565',
        helpIcon: '././assets/icon/ic_help_silver.svg',
        tagBg: '#FFFFFF',
        borderColor: 'rgb(101, 101, 101)'
      },
      2: {
        cardClass: 'cardId3',
        textColor: '#895F00',
        progressColor: '#895F00',
        helpIcon: '././assets/icon/ic_help_bronze.png',
        tagBg: '#FFF8D7',
        borderColor: 'rgb(137, 95, 0)'
      },
      3: {
        cardClass: 'cardId4',
        textColor: '#FFFFFF',
        progressColor: '#50A8EF',
        helpIcon: '././assets/icon/ic_help_platinum.svg',
        tagBg: '#FFFFFF'
      }
    };
    return themes[key] || themes[0];
  }
  getRateClass(index, tier) {
    const active = tier !== null && tier !== void 0 && tier.is_unlocked && !(tier !== null && tier !== void 0 && tier.is_current) ? 'active' : '';
    switch (index) {
      case 0:
        return 'bronze ' + active;
      case 1:
        return 'silver ' + active;
      case 2:
        return 'gold ' + active;
      case 3:
        return 'plat ' + active;
      default:
        return 'bronze ' + active;
    }
  }
  getCleanTitle(title) {
    var _title$replace;
    return (title === null || title === void 0 || (_title$replace = title.replace(/^[^\w\d]+/u, '')) === null || _title$replace === void 0 ? void 0 : _title$replace.trim()) || '';
  }
  getHeroGradient() {
    var _this$currentMembersh5;
    const start = ((_this$currentMembersh5 = this.currentMembershipData) === null || _this$currentMembersh5 === void 0 ? void 0 : _this$currentMembersh5.color) || '#F5A623';
    const gradientMap = {
      '#CD7F32': '#A05A2C',
      '#C0C0C0': '#8E8E93',
      '#F5A623': '#D18B00',
      '#6C5CE7': '#4834D4'
    };
    const end = gradientMap[start] || start;
    return `linear-gradient(135deg, ${start} 0%, ${end} 100%)`;
  }
  getTierProgressHeight() {
    const currentIndex = this.membershipData.findIndex(tier => tier.is_current);
    if (currentIndex <= 0) return 0;
    if (currentIndex === 1) return 24;
    if (currentIndex === 2) return 48;
    if (currentIndex >= this.membershipData.length - 1) return 85;
    return currentIndex / (this.membershipData.length - 1) * 100;
  }
}
_PointsLevelPopupComponent = PointsLevelPopupComponent;
_PointsLevelPopupComponent.ɵfac = function PointsLevelPopupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsLevelPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage));
};
_PointsLevelPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _PointsLevelPopupComponent,
  selectors: [["app-points-level-popup"]],
  inputs: {
    availablePoints: "availablePoints",
    membershipData: "membershipData",
    currentMembershipData: "currentMembershipData",
    nextTierProgress: "nextTierProgress",
    type: "type",
    next_membership: "next_membership"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "sb-page-header", 4, "ngIf"], ["style", "box-shadow: none;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], [2, "box-shadow", "none"], ["mode", "md"], ["slot", "start", 3, "click"], [2, "color", "white"], [1, "head", "shyamoli-head"], [1, "center-hr", 2, "position", "absolute", "right", "16px", "top", "25%"], [1, "stickyDiv", 3, "ngClass"], [1, "containerId"], [1, "localDiv", "localDiv2"], [1, "imgNewIcon"], [1, "labelId"], [1, "labelId2"], [1, "labelId3"], [3, "value"], [1, "subId"], ["size", "8"], [1, "ionText"], ["size", "4", 1, "center-hr", 2, "justify-content", "end"], [1, "subId2"], [1, "imgId2", 3, "click", "src"], ["class", "tier-tooltip-wrapper", 4, "ngIf"], [1, "tier-tooltip-wrapper"], [1, "tooltip-box"], [1, "tooltip-content"], [1, "tooltip-title"], ["lines", "none", 1, "tier-list"], ["class", "tier-item", 4, "ngFor", "ngForOf"], [1, "tier-item"], ["class", "badge", 4, "ngIf"], ["class", "achieved", 4, "ngIf"], [1, "badge"], [1, "achieved"], [1, "tier-progress-page"], [1, "header-section"], ["class", "cardId ", 4, "ngIf"], ["class", "cardId2 ", 4, "ngIf"], ["class", "cardId3 ", 4, "ngIf"], ["class", "cardId4 ", 4, "ngIf"], [1, "tier-track"], [1, "tier-track__progress"], ["class", "tier-row-item", 4, "ngFor", "ngForOf"], ["class", "next-tier-block", 4, "ngIf"], [1, "cardId"], [1, "localDiv", "localDiv2", 2, "border", "1px solid rgb(137, 95, 0)"], [1, "imgId2", "imgNewIcon"], [2, "--progress-background", "#7E582A", 3, "value"], ["size", "12"], ["class", "ionText", 4, "ngIf"], [1, "cardId2"], [1, "localDiv", "localDiv2", 2, "border", "1px solid rgb(101, 101, 101)"], [1, "labelId", 2, "color", "#9B9B9B"], [1, "labelId2", 2, "color", "#656565"], [1, "labelId3", 2, "color", "#656565"], [2, "--progress-background", "#656565", 3, "value"], ["class", "ionText", "style", "color: #656565;", 4, "ngIf"], [1, "ionText", 2, "color", "#656565"], [1, "cardId3"], [1, "localDiv", "localDiv2", 2, "background-color", "#FFF8D7", "border", "1px solid rgb(137, 95, 0)"], [2, "--progress-background", "#895F00", 3, "value"], [1, "cardId4"], [1, "labelId", 2, "color", "#174578"], [1, "labelId2", 2, "color", "white"], [1, "labelId3", 2, "color", "white"], [2, "--progress-background", "#50A8EF", 3, "value"], ["class", "ionText", "style", "color: white;", 4, "ngIf"], [1, "ionText", 2, "color", "white"], [1, "tier-row-item"], [1, "tri-dot", 3, "ngClass"], [1, "tri-info"], [1, "tri-name-row"], [1, "tri-name"], ["class", "tri-here-tag", 4, "ngIf"], [1, "tri-pts-req"], [1, "tri-rate-pill", 3, "ngClass"], [1, "tri-perks"], [1, "tri-here-tag"], [1, "next-tier-block"], [1, "ntb-title"], [1, "ntb-sub"], [1, "ntb-bar"], [1, "ntb-fill"], [1, "ntb-labels"]],
  template: function PointsLevelPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PointsLevelPopupComponent_ng_container_0_Template, 5, 3, "ng-container", 0)(1, PointsLevelPopupComponent_ng_container_1_Template, 13, 10, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "all");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "progress");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBackButton],
  styles: [".btnId[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 4px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n}\n\n.idDiv[_ngcontent-%COMP%] {\n  padding: 16px 0px 16px 0px;\n  margin-left: 10px;\n}\n\n.popLabelId[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  margin: 1px 1px 1px 8px;\n}\n\n.gridId[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  --ion-grid-padding: 0;\n}\n\n.textId2[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #000000;\n  display: flex;\n  justify-content: center;\n  margin-top: 4px;\n}\n\n.textId3[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  margin-top: 0px;\n  text-align: center;\n}\n\n.colId[_ngcontent-%COMP%] {\n  height: 73px;\n  border: solid 1px #E8E8E8;\n  background-color: white;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  margin-right: 10px;\n}\n\n.imgId3[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin: auto;\n}\n\n.newimgId[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 63px;\n  left: 30%;\n}\n\n.newimgId2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 68px;\n  left: 20%;\n}\n\n.scrollable-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  overflow-y: hidden;\n  stop-color: white;\n  height: 100%;\n  padding-bottom: 20px;\n}\n.scrollable-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.ion-row[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.shyamoli-head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white !important;\n  -webkit-text-fill-color: white !important;\n}\n\n.cardId[_ngcontent-%COMP%] {\n  margin: 12px;\n  padding: 14px;\n  border-radius: 16px;\n  background: url('bronze_member_background.dc0d1d40e8f7e8ac.png');\n  background-size: cover;\n  background-position: center;\n  border: solid 1px #EADED0;\n}\n\n.cardId2[_ngcontent-%COMP%] {\n  margin: 12px;\n  padding: 14px;\n  border-radius: 16px;\n  background: linear-gradient(to right, #ECEDF0, #EEF1F3);\n  background-image: url('silver_member_background.e2e4f680f0952074.png');\n  background-size: cover;\n}\n\n.cardId3[_ngcontent-%COMP%] {\n  margin: 12px;\n  padding: 14px;\n  border-radius: 16px;\n  background-image: url('gold_member_background.42ad9529f6d34d29.png');\n  margin-top: 20px;\n}\n\n.cardId4[_ngcontent-%COMP%] {\n  margin: 12px;\n  padding: 14px;\n  border-radius: 16px;\n  background-image: url('platinum_member_background.e9e9c69572ab5b42.png');\n}\n\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  font-size: 11px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  margin: 4px 18px 18px;\n  line-height: 1.4;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  background: transparent;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 0;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #fff;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  color: #FFD27A;\n  font-size: 12px;\n  font-weight: 600;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #F5A623;\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  color: var(--active-green);\n  font-weight: 700;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #F5A623;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  margin-left: 6px;\n}\n.tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .achieved[_ngcontent-%COMP%] {\n  background: var(--active-green);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n  margin-left: 6px;\n}\n\n.containerId[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.localDiv[_ngcontent-%COMP%] {\n  height: 24px;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  padding: 4px 8px 4px 8px;\n}\n\n.imgId2[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n\n.localDiv2[_ngcontent-%COMP%] {\n  min-height: 40px;\n  width: 46%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: #fff;\n  border-radius: 5px;\n  padding: 4px 8px;\n}\n\n.imgNewIcon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n\n.labelId[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #895F00;\n}\n\n.labelId2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #895F00;\n}\n\n.labelId3[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #895F00;\n}\n\nion-progress-bar[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  --background: white;\n}\n\n.subId[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.subId2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 8px;\n}\n\n.ionText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #895F00;\n}\n\n.itemLabel[_ngcontent-%COMP%] {\n  --background: none;\n  margin-top: 0px;\n  margin-left: -5px;\n}\n\n.tier-progress-page[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #F5A623 0%, var(--primary-dk) 100%);\n  padding: 18px 18px 16px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-hero-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: 6px;\n  line-height: 1.5;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-track[_ngcontent-%COMP%] {\n  padding: 22px 18px 12px;\n  position: relative;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-track__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 35px;\n  top: 54px;\n  width: 3px;\n  background: #27AE60;\n  border-radius: 10px;\n  z-index: 1;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-track[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 35px;\n  top: 54px;\n  bottom: 52px;\n  width: 3px;\n  background: #E5E5E5;\n  border-radius: 10px;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-row-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 18px;\n  position: relative;\n  z-index: 1;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tier-row-item[_ngcontent-%COMP%]    + .tier-row-item[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-dot[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  min-width: 38px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  background: #fff;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-dot.done[_ngcontent-%COMP%] {\n  background: var(--active-bg);\n  border: 2px solid var(--active-green);\n  color: var(--active-green);\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-dot.here[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border: 3px solid #FFE6B8;\n  box-shadow: 0 0 0 4px rgba(245, 166, 35, 0.18);\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-dot.locked[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  border: 2px dashed #CFCFCF;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-info[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 2px;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-hd);\n  line-height: 1.2;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-name.done[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--active-green);\n  line-height: 1.2;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-name.locked[_ngcontent-%COMP%] {\n  color: #8E8E8E;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-here-tag[_ngcontent-%COMP%] {\n  background: #F5A623;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 30px;\n  white-space: nowrap;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-pts-req[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: var(--text-sm);\n  line-height: 1.5;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 10px;\n  padding: 7px 14px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.active[_ngcontent-%COMP%] {\n  background: #E5F6EA !important;\n  color: var(--active-green) !important;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.bronze[_ngcontent-%COMP%] {\n  background: #F8E7D6;\n  color: #A05A2C;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.silver[_ngcontent-%COMP%] {\n  background: #EEF1F4;\n  color: #6E7781;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.gold[_ngcontent-%COMP%] {\n  background: #FFF1D8;\n  color: #D18400;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.plat[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3B4DB0;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-perks[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #7A7A7A;\n  line-height: 1.7;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .tri-perks.locked[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .next-tier-block[_ngcontent-%COMP%] {\n  margin: 16px 18px 24px;\n  background: #FFF7E8;\n  border: 1px solid #F0C070;\n  border-radius: 22px;\n  padding: 20px 18px;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .ntb-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #D18400;\n  line-height: 1.3;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .ntb-sub[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 15px;\n  line-height: 1.7;\n  color: #9A6020;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .ntb-bar[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 12px;\n  background: #F1D88D;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .ntb-fill[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 100%;\n  background: #F5A623;\n  border-radius: 20px;\n}\n.tier-progress-page[_ngcontent-%COMP%]   .ntb-labels[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #A36A1D;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  padding: 1px;\n}\n\n.header-section[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  margin: 12px;\n  padding: 14px;\n}\n\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tooltip-box[_ngcontent-%COMP%] {\n  background: var(--sb-color-navy);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  color: var(--sb-color-on-dark-muted);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--sb-on-brand);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-tooltip-wrapper[_ngcontent-%COMP%]   .tier-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tier-hero[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tier-hero[_ngcontent-%COMP%] {\n  background: var(--sb-gradient-header);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.here[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.here[_ngcontent-%COMP%] {\n  border-color: var(--sb-color-sea-tint);\n  box-shadow: 0 0 0 4px rgba(10, 110, 127, 0.18);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-here-tag[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-here-tag[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .ntb-fill[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .ntb-fill[_ngcontent-%COMP%] {\n  background: var(--sb-color-sea);\n}\n@media (prefers-color-scheme: dark) {\n  [data-theme=seabirdThemeNew][_nghost-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%] {\n    \n\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew][_nghost-%COMP%]   .header-section[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .header-section[_ngcontent-%COMP%] {\n    background: var(--sb-bg);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tier-track[_ngcontent-%COMP%]::before, [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tier-track[_ngcontent-%COMP%]::before {\n    background: var(--sb-border);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot[_ngcontent-%COMP%] {\n    background: var(--sb-surface);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.here[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.here[_ngcontent-%COMP%] {\n    background: var(--sb-color-sea);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.locked[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-dot.locked[_ngcontent-%COMP%] {\n    background: var(--sb-surface-alt);\n    border-color: var(--sb-border-strong);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-perks[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-perks[_ngcontent-%COMP%] {\n    color: var(--sb-text-muted);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.active[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .tier-progress-page[_ngcontent-%COMP%]   .tri-rate-pill.active[_ngcontent-%COMP%] {\n    background: var(--active-bg) !important;\n  }\n}"]
});

/***/ },

/***/ 44496
/*!**************************************************************************!*\
  !*** ./src/app/points-transfer-popup/points-transfer-popup.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsTransferPopupComponent: () => (/* binding */ PointsTransferPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
var _PointsTransferPopupComponent;










function PointsTransferPopupComponent_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 38)(1, "ion-toolbar", 39)(2, "div", 40)(3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_ion_header_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Transfer Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function PointsTransferPopupComponent_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_ion_header_1_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Transfer Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function PointsTransferPopupComponent_ion_row_65_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Attempts left: ", ctx_r1.otpCount, " ");
  }
}
function PointsTransferPopupComponent_ion_row_65_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Resend OTP (", ctx_r1.countdown, ") ");
  }
}
function PointsTransferPopupComponent_ion_row_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 4)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Enter OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function PointsTransferPopupComponent_ion_row_65_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.otpValue, $event) || (ctx_r1.otpValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PointsTransferPopupComponent_ion_row_65_span_6_Template, 2, 1, "span", 50)(7, PointsTransferPopupComponent_ion_row_65_span_7_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otpValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.otpCount != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.timerActive);
  }
}
function PointsTransferPopupComponent_ion_button_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_ion_button_105_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.getOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Get OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PointsTransferPopupComponent_ion_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_ion_button_106_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.resendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PointsTransferPopupComponent_ion_button_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_ion_button_107_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.transferPoints());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class PointsTransferPopupComponent {
  constructor(modalController, apiFactory, navParams, util, commonStorage) {
    this.modalController = modalController;
    this.apiFactory = apiFactory;
    this.navParams = navParams;
    this.util = util;
    this.commonStorage = commonStorage;
    this.showBtn = false;
    this.otpCount = 4;
    this.countdown = '2:00';
    this.timerActive = false;
    this.reSendbtn = false;
    this.value = {};
    this.currentMembershipData = {};
    this.totalBalance = 0;
    this.balanceAfterTransfer = 0;
    this.metaData = this.commonStorage.getItem('metaData');
  }
  ngOnInit() {
    var _this$currentMembersh;
    this.dataId = this.navParams.get('id');
    this.availablePoints = this.navParams.get('points');
    this.value = this.navParams.get('value') || {};
    this.currentMembershipData = this.navParams.get('currentMembershipData') || {};
    this.pointsValue = Number(this.availablePoints || 0);
    this.totalBalance = Number(((_this$currentMembersh = this.currentMembershipData) === null || _this$currentMembersh === void 0 ? void 0 : _this$currentMembersh.current_points) || 0);
    this.balanceAfterTransfer = this.totalBalance - this.availablePoints;
    if (this.balanceAfterTransfer < 0) {
      this.balanceAfterTransfer = 0;
    }
  }
  close() {
    this.modalController.dismiss();
    this.showBtn = false;
  }
  transferPoints() {
    if (!this.otpValue || this.otpValue == '') {
      this.util.showToast('Please enter OTP');
    } else {
      const payload = {
        "id": this.dataId,
        "points_to_transfer": this.availablePoints,
        "transfer_mobile_number": this.phoneNumber,
        "secret_key": this.secretCode,
        "otp": this.otpValue
      };
      this.apiFactory.smartMilesVerifyOtpNew(payload).subscribe(res => {
        if (res.code == 200) {
          this.util.showToast(res.message);
          this.modalController.dismiss('success');
        } else {
          if (this.otpCount != 0 && this.otpCount != 1) {
            this.otpCount--;
            this.util.showToast('Please enter valid OTP');
          } else {
            this.util.showToast('You have reached maximum attempts');
            this.modalController.dismiss();
          }
        }
      });
    }
  }
  resendOTP() {
    this.otpCount = 4;
    this.reSendbtn = false;
    this.getOTP();
  }
  getOTP() {
    if (!this.phoneNumber || this.phoneNumber === '') {
      this.util.showToast('Please enter phone number to transfer');
    } else {
      if (this.phoneNumber.length != 10) {
        this.util.showToast('Please enter a valid 10-digit phone number');
        return;
      }
      const payload = {
        "id": this.dataId,
        "points_to_transfer": this.availablePoints,
        "transfer_mobile_number": this.phoneNumber
      };
      this.apiFactory.smartMilesSendOTP(payload).subscribe(res => {
        if (res && res.code !== 500) {
          this.secretCode = res.secret_key;
          this.util.showToast('OTP sent to registered mobile number');
          this.showBtn = true;
          this.startTimer();
        } else if (res.code == 500) {
          this.util.showToast(res.message);
        } else {
          this.util.showToast(res.message);
        }
      });
    }
  }
  startTimer() {
    let timeLeft = 120; // 2 mins timer
    this.timerActive = true;
    this.timerInterval = setInterval(() => {
      timeLeft--;
      this.countdown = this.formatTime(timeLeft);
      if (timeLeft <= 0) {
        this.stopTimer();
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerActive = false;
    this.reSendbtn = true;
    this.showBtn = false;
  }
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.padNumber(minutes)}:${this.padNumber(remainingSeconds)}`;
  }
  padNumber(num) {
    return num < 10 ? '0' + num : '' + num;
  }
}
_PointsTransferPopupComponent = PointsTransferPopupComponent;
_PointsTransferPopupComponent.ɵfac = function PointsTransferPopupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsTransferPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage));
};
_PointsTransferPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PointsTransferPopupComponent,
  selectors: [["app-points-transfer-popup"]],
  decls: 108,
  vars: 50,
  consts: [["class", "sb-page-header", 4, "ngIf"], [4, "ngIf"], ["fullscreen", "true", 1, "transfer-points-page"], [1, "transfer-points-page__hero"], ["size", "12"], [1, "transfer-points-page__hero-label"], [1, "ion-align-items-start", "ion-justify-content-between"], ["size", "8"], [1, "transfer-points-page__pnr"], [1, "transfer-points-page__route"], ["size", "4", 1, "ion-text-right"], [1, "transfer-points-page__points-pill"], [1, "transfer-points-page__body"], [1, "transfer-points-page__card"], [1, "transfer-points-page__section-title"], [1, "transfer-points-page__source-row"], ["size", "4", 1, "transfer-points-page__source-col"], [1, "transfer-points-page__source-label"], [1, "transfer-points-page__source-value", "transfer-points-page__source-value--orange"], ["size", "6", 1, "transfer-points-page__source-col"], [1, "transfer-points-page__source-value", "transfer-points-page__source-value--dark"], [1, "transfer-points-page__lifo-note"], [1, "transfer-points-page__form-label"], ["type", "tel", "maxlength", "10", "placeholder", "Phone no.", "fill", "outline", 1, "transfer-points-page__input", 3, "ngModelChange", "readonly", "ngModel"], [1, "transfer-points-page__hint"], ["type", "number", "readonly", "true", "fill", "outline", 1, "transfer-points-page__input", "transfer-points-page__input--prefilled", 3, "value"], [1, "transfer-points-page__avail-note"], [1, "transfer-points-page__prefill-note"], [1, "transfer-points-page__summary-row"], [1, "transfer-points-page__value", "transfer-points-page__value--red"], [1, "transfer-points-page__value", "transfer-points-page__value--green"], [1, "transfer-points-page__value"], [1, "transfer-points-page__summary-row", "transfer-points-page__summary-row--total"], ["size", "4"], ["expand", "block", "fill", "outline", 1, "transfer-points-page__cancel-btn", 3, "click"], ["size", "1"], ["size", "7"], ["expand", "block", "class", "transfer-points-page__confirm-btn", 3, "click", 4, "ngIf"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], [2, "--background", "#333 !important"], [1, "faq-topbar", 2, "background", "#333", 3, "click"], [1, "faq-back"], [1, "faq-title"], ["type", "text", "maxlength", "6", "placeholder", "Enter OTP", "fill", "outline", 1, "transfer-points-page__input", 3, "ngModelChange", "ngModel"], [1, "transfer-points-page__otp-row"], ["class", "transfer-points-page__attempts", 4, "ngIf"], ["class", "transfer-points-page__timer", 4, "ngIf"], [1, "transfer-points-page__attempts"], [1, "transfer-points-page__timer"], ["expand", "block", 1, "transfer-points-page__confirm-btn", 3, "click"]],
  template: function PointsTransferPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PointsTransferPopupComponent_ion_header_0_Template, 7, 0, "ion-header", 0)(1, PointsTransferPopupComponent_ion_header_1_Template, 7, 0, "ion-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-content", 2)(3, "ion-grid", 3)(4, "ion-row")(5, "ion-col", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Transferring from ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-row", 6)(9, "ion-col", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-col", 10)(16, "ion-chip", 11)(17, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-grid", 12)(21, "ion-row")(22, "ion-col", 4)(23, "ion-card", 13)(24, "ion-card-content")(25, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Points source (LIFO \u2014 newest first) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-row", 15)(28, "ion-col", 16)(29, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " This PNR ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-col", 19)(35, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Total balance ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " These points are being transferred from the selected booking and will be deducted from your available balance. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-row")(43, "ion-col", 4)(44, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Enter phone number to transfer to: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "ion-input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function PointsTransferPopupComponent_Template_ion_input_ngModelChange_46_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Must be a registered account on this app. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "ion-row")(50, "ion-col", 4)(51, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Points to transfer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "ion-input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Avl: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " from this PNR \u00B7 Total: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, PointsTransferPopupComponent_ion_row_65_Template, 8, 3, "ion-row", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "ion-row")(67, "ion-col", 4)(68, "ion-card", 13)(69, "ion-card-content")(70, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Transfer Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "ion-row", 28)(73, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Points you send ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "ion-col", 10)(76, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "ion-row", 28)(80, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Recipient receives ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "ion-col", 10)(83, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "ion-row", 28)(87, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Source ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "ion-col", 10)(90, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "ion-row", 32)(93, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Your balance after ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "ion-col", 10)(96, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](98, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "ion-row")(100, "ion-col", 33)(101, "ion-button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PointsTransferPopupComponent_Template_ion_button_click_101_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "ion-col", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "ion-col", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, PointsTransferPopupComponent_ion_button_105_Template, 2, 0, "ion-button", 37)(106, PointsTransferPopupComponent_ion_button_106_Template, 2, 0, "ion-button", 37)(107, PointsTransferPopupComponent_ion_button_107_Template, 2, 0, "ion-button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.metaData == null ? null : ctx.metaData.msiteFolder) == "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.metaData == null ? null : ctx.metaData.msiteFolder) != "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" PNR:", ctx.value == null ? null : ctx.value.pnr_number, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.value == null ? null : ctx.value.origin, " to ", ctx.value == null ? null : ctx.value.destination, " \u00B7 Expires ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 23, ctx.value == null ? null : ctx.value.expiry_date, "dd MMM yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 26, ctx.value == null ? null : ctx.value.points, "1.0-0"), " pts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 29, ctx.value == null ? null : ctx.value.points, "1.0-0"), " pts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](39, 32, ctx.totalBalance, "1.0-0"), " pts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.showBtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.phoneNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.availablePoints);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 35, ctx.value == null ? null : ctx.value.points, "1.0-0"), " pt");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](62, 38, ctx.totalBalance, "1.0-0"), " pt");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2726 Pre-filled from PNR:", ctx.value == null ? null : ctx.value.pnr_number, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2212", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](78, 41, ctx.availablePoints, "1.0-0"), " pts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](85, 44, ctx.availablePoints, "1.0-0"), " pts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" PNR:", ctx.value == null ? null : ctx.value.pnr_number, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](98, 47, ctx.balanceAfterTransfer, "1.0-0"), " pts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showBtn && !ctx.reSendbtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reSendbtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBtn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.TextValueAccessor],
  styles: [".popIddiv[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.textLabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #464646;\n}\n\n.textLabel2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #464646;\n}\n\n.itemDIv[_ngcontent-%COMP%] {\n  border: solid 1px #C7C7C7;\n  border-radius: 4px;\n  --height: 46px;\n  --width: 308px;\n  margin-bottom: 10px;\n}\n\n.spanId2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--iconsAndButtonsColor);\n}\n\n.popDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 0px;\n}\n\n.btnValue[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 36px;\n  margin-left: 10px;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor);\n  --border-radius: 4px;\n}\n\n.btnValue2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 33px;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-radius: 4px;\n}\n\n.newDivId[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.otpId[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.timerId[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 12px;\n}\n\n.faq-topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  background: #1a3a6e;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n}\n\n.faq-back[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.faq-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n\n.transfer-points-page[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.transfer-points-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.transfer-points-page[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.transfer-points-page[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.transfer-points-page__hero[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border-bottom: 1px solid var(--border);\n  padding: 12px 14px;\n}\n.transfer-points-page__hero-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-sm);\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin-bottom: 6px;\n}\n.transfer-points-page__pnr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-hd);\n}\n.transfer-points-page__route[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--text-sm);\n}\n.transfer-points-page__points-pill[_ngcontent-%COMP%] {\n  --background: #F5A623;\n  --color: #ffffff;\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n}\n.transfer-points-page__body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.transfer-points-page__card[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #f8f8f8;\n  box-shadow: none;\n}\n.transfer-points-page__section-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-sm);\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n}\n.transfer-points-page__source-row[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.transfer-points-page__source-col[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.transfer-points-page__source-col[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid var(--border);\n  margin-right: 10px;\n}\n.transfer-points-page__source-label[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-sm);\n}\n.transfer-points-page__source-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.transfer-points-page__source-value--orange[_ngcontent-%COMP%] {\n  color: #F5A623;\n}\n.transfer-points-page__source-value--dark[_ngcontent-%COMP%] {\n  color: var(--text-hd);\n}\n.transfer-points-page__source-value--grey[_ngcontent-%COMP%] {\n  color: var(--text-sm);\n}\n.transfer-points-page__lifo-note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 10px;\n  border-left: 3px solid #4a80d4;\n  border-radius: 0 6px 6px 0;\n  background: #eef4ff;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #3a5fa0;\n}\n.transfer-points-page__form-label[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-bd);\n}\n.transfer-points-page__input[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: var(--radius-sm);\n  --border-width: 1.5px;\n  --border-color: var(--border);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --min-height: 46px;\n  font-size: 14px;\n  color: var(--text-hd);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n}\n.transfer-points-page__input--prefilled[_ngcontent-%COMP%] {\n  --background: #fffbf0;\n  border: 1.5px solid #f0c070;\n}\n.transfer-points-page__hint[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 13px;\n  color: var(--text-sm);\n}\n.transfer-points-page__avail-note[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  text-align: right;\n  color: var(--text-sm);\n}\n.transfer-points-page__avail-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-hd);\n}\n.transfer-points-page__prefill-note[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--primary-dk);\n}\n.transfer-points-page__summary-row[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  align-items: center;\n  font-size: 12px;\n  color: var(--text-sm);\n}\n.transfer-points-page__summary-row--total[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 0;\n  padding-top: 10px;\n  border-top: 1px solid var(--border);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-hd);\n}\n.transfer-points-page__value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.transfer-points-page__value--red[_ngcontent-%COMP%] {\n  color: var(--expired-red);\n}\n.transfer-points-page__value--green[_ngcontent-%COMP%] {\n  color: var(--active-green);\n}\n.transfer-points-page__cancel-btn[_ngcontent-%COMP%] {\n  height: 46px;\n  margin: 0;\n  --border-radius: var(--radius);\n  --border-width: 1.5px;\n  --border-color: var(--border);\n  --background: #ffffff;\n  --color: var(--text-bd);\n  --background-activated: #F5A623;\n  --background-focused: #F5A623;\n  --background-hover: #F5A623;\n  --color-activated: #ffffff;\n  --ripple-color: transparent;\n  font-weight: 700;\n}\n.transfer-points-page__confirm-btn[_ngcontent-%COMP%] {\n  height: 46px;\n  margin: 0;\n  --background: #F5A623;\n  --border-radius: var(--radius);\n  --box-shadow: 0 3px 10px rgba(245, 166, 35, 0.3);\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --color-activated: var(--text-bd);\n  --ripple-color: transparent;\n  font-weight: 700;\n}\n.transfer-points-page__otp-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.transfer-points-page__attempts[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--expired-red);\n}\n.transfer-points-page__timer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #F5A623;\n}\n\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__points-pill[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__points-pill[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__source-value--orange[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__source-value--orange[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__prefill-note[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__prefill-note[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__timer[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__timer[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__cancel-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__cancel-btn[_ngcontent-%COMP%] {\n  --background-activated: var(--sb-color-sea);\n  --background-focused: var(--sb-color-sea);\n  --background-hover: var(--sb-color-sea);\n}\n[data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__confirm-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__confirm-btn[_ngcontent-%COMP%] {\n  --background: var(--sb-color-sea);\n  --box-shadow: 0 3px 10px rgba(10, 110, 127, 0.3);\n}\n@media (prefers-color-scheme: dark) {\n  [data-theme=seabirdThemeNew][_nghost-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%] {\n    \n\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page[_ngcontent-%COMP%] {\n    background: var(--sb-bg);\n    --background: var(--sb-bg);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__hero[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__hero[_ngcontent-%COMP%], \n   [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__card[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__card[_ngcontent-%COMP%] {\n    background: var(--sb-surface);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__input[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__input[_ngcontent-%COMP%] {\n    --background: var(--sb-surface);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__input--prefilled[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__input--prefilled[_ngcontent-%COMP%] {\n    --background: var(--sb-color-sea-tint);\n    border-color: var(--sb-accent);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__cancel-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__cancel-btn[_ngcontent-%COMP%] {\n    --background: var(--sb-surface);\n  }\n  [data-theme=seabirdThemeNew][_nghost-%COMP%]   .transfer-points-page__confirm-btn[_ngcontent-%COMP%], [data-theme=seabirdThemeNew]   [_nghost-%COMP%]   .transfer-points-page__confirm-btn[_ngcontent-%COMP%] {\n    --background-activated: var(--sb-color-sea);\n    --background-focused: var(--sb-color-sea);\n    --background-hover: var(--sb-color-sea);\n    --color-activated: var(--sb-on-brand);\n  }\n}"]
});

/***/ }

}]);