"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9831],{

/***/ 17516:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _FilterPipe;

class FilterPipe {
  transform(items, field, value) {
    if (!items) return [];
    let rtItems = items;
    try {
      rtItems = items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
    } finally {
      return rtItems;
    }
  }
}
_FilterPipe = FilterPipe;
_FilterPipe.ɵfac = function FilterPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterPipe)();
};
_FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: _FilterPipe,
  pure: true
});

/***/ }),

/***/ 18606:
/*!*************************************************!*\
  !*** ./src/app/wallet/wallet-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPageRoutingModule: () => (/* binding */ WalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.page */ 81328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _WalletPageRoutingModule;




const routes = [{
  path: '',
  component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
}];
class WalletPageRoutingModule {}
_WalletPageRoutingModule = WalletPageRoutingModule;
_WalletPageRoutingModule.ɵfac = function WalletPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPageRoutingModule)();
};
_WalletPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _WalletPageRoutingModule
});
_WalletPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WalletPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 39831:
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPageModule: () => (/* binding */ WalletPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-routing.module */ 18606);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page */ 81328);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _WalletPageModule;








class WalletPageModule {}
_WalletPageModule = WalletPageModule;
_WalletPageModule.ɵfac = function WalletPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPageModule)();
};
_WalletPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _WalletPageModule
});
_WalletPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WalletPageModule, {
    declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe]
  });
})();

/***/ }),

/***/ 81328:
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPage: () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-money-wallet/add-money-wallet.page */ 91598);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);

var _WalletPage;


















const _c0 = ["scrollableDiv"];
const _c1 = ["swiper"];
const _c2 = ["myslider1"];
const _c3 = () => ({
  "padding-top": "50px"
});
const _c4 = () => ({});
function WalletPage_ng_container_0_div_37_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("+", ctx_r1.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_37_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_37_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_37_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_37_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r3.transaction_date ? transaction_r3.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r1.changeDateFormat1(transaction_r3.expiry_date ? transaction_r3.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_div_37_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r3.transaction_date ? transaction_r3.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 28)(1, "ion-row")(2, "ion-col", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_0_div_37_div_1_p_6_Template, 2, 2, "p", 32)(7, WalletPage_ng_container_0_div_37_div_1_p_7_Template, 2, 2, "p", 33)(8, WalletPage_ng_container_0_div_37_div_1_p_8_Template, 2, 2, "p", 34)(9, WalletPage_ng_container_0_div_37_div_1_p_9_Template, 2, 2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-row", 36)(11, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, WalletPage_ng_container_0_div_37_div_1_div_12_Template, 6, 2, "div", 38)(13, WalletPage_ng_container_0_div_37_div_1_div_13_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "CREDIT" && transaction_r3.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r3.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r3.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r3.txn_status);
  }
}
function WalletPage_ng_container_0_div_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_0_div_37_div_1_Template, 20, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_0_div_37_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length == 0);
  }
}
function WalletPage_ng_container_0_div_38_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("+", ctx_r1.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_38_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_38_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_38_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_38_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r4.transaction_date ? transaction_r4.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r1.changeDateFormat1(transaction_r4.expiry_date ? transaction_r4.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_div_38_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r4.transaction_date ? transaction_r4.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 28)(1, "ion-row")(2, "ion-col", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_0_div_38_div_1_p_6_Template, 2, 2, "p", 32)(7, WalletPage_ng_container_0_div_38_div_1_p_7_Template, 2, 2, "p", 33)(8, WalletPage_ng_container_0_div_38_div_1_p_8_Template, 2, 2, "p", 34)(9, WalletPage_ng_container_0_div_38_div_1_p_9_Template, 2, 2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-row", 36)(11, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, WalletPage_ng_container_0_div_38_div_1_div_12_Template, 6, 2, "div", 38)(13, WalletPage_ng_container_0_div_38_div_1_div_13_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "CREDIT" && transaction_r4.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r4.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r4.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r4.txn_status);
  }
}
function WalletPage_ng_container_0_div_38_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_0_div_38_div_1_Template, 20, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_0_div_38_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.promotionalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.promotionalList.length == 0);
  }
}
function WalletPage_ng_container_0_div_39_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("+", ctx_r1.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_39_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_39_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("-", ctx_r1.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_39_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_div_39_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r5.transaction_date ? transaction_r5.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r1.changeDateFormat1(transaction_r5.expiry_date ? transaction_r5.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_div_39_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(transaction_r5.transaction_date ? transaction_r5.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 28)(1, "ion-row")(2, "ion-col", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_0_div_39_div_1_p_6_Template, 2, 2, "p", 32)(7, WalletPage_ng_container_0_div_39_div_1_p_7_Template, 2, 2, "p", 33)(8, WalletPage_ng_container_0_div_39_div_1_p_8_Template, 2, 2, "p", 34)(9, WalletPage_ng_container_0_div_39_div_1_p_9_Template, 2, 2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-row", 36)(11, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, WalletPage_ng_container_0_div_39_div_1_div_12_Template, 6, 2, "div", 38)(13, WalletPage_ng_container_0_div_39_div_1_div_13_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "CREDIT" && transaction_r5.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r5.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r5.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r5.txn_status);
  }
}
function WalletPage_ng_container_0_div_39_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_0_div_39_div_1_Template, 20, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_0_div_39_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.nonPromotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.nonPromotional.length == 0);
  }
}
function WalletPage_ng_container_0_div_40_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 55)(1, "ion-col", 29)(2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 52)(5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.promobalance, "");
  }
}
function WalletPage_ng_container_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "ion-row")(3, "ion-col", 47)(4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Price Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 49)(7, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_40_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.balanceDiv = !ctx_r1.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 29)(10, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Transactional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 52)(13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, WalletPage_ng_container_0_div_40_ion_row_15_Template, 7, 2, "ion-row", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 29)(18, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Total Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-col", 52)(21, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.walletbalance, "");
  }
}
function WalletPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-white-common-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div")(4, "ion-card", 6)(5, "ion-row")(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Chartered Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row", 8)(9, "ion-col", 9)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 10)(13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_Template_span_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.balanceDiv = !ctx_r1.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-row", 12)(16, "ion-col", 13)(17, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_Template_ion_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 16)(21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-row", 18)(24, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_Template_ion_col_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.all());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_Template_ion_col_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.promotional());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_0_Template_ion_col_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.transactional());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Transactional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-content", 23)(34, "div")(35, "div", 24)(36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, WalletPage_ng_container_0_div_37_Template, 4, 2, "div", 3)(38, WalletPage_ng_container_0_div_38_Template, 4, 2, "div", 3)(39, WalletPage_ng_container_0_div_39_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, WalletPage_ng_container_0_div_40_Template, 23, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](10, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.walletbalance.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r1.isShowAll ? "all" : "all1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r1.isShowPromotional ? "promo" : "promo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r1.isShowTransactional ? "transactional" : "transactional1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowPromotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowTransactional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.balanceDiv);
  }
}
function WalletPage_ng_container_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.promobalance, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r8.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r8.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r8.expiry_date);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 47)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 47)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_54_ng_container_1_span_19_Template, 2, 2, "span", 101)(20, WalletPage_ng_container_1_div_54_ng_container_1_span_20_Template, 2, 2, "span", 102)(21, WalletPage_ng_container_1_div_54_ng_container_1_span_21_Template, 2, 2, "span", 103)(22, WalletPage_ng_container_1_div_54_ng_container_1_span_22_Template, 2, 2, "span", 104)(23, WalletPage_ng_container_1_div_54_ng_container_1_p_23_Template, 2, 1, "p", 105)(24, WalletPage_ng_container_1_div_54_ng_container_1_p_24_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 106)(26, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-row", 108)(29, "ion-col", 109)(30, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-col", 111)(33, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_54_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "CREDIT" && transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r8.transaction_date ? transaction_r8.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r8.payment_transaction_type ? transaction_r8.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "CREDIT" && transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r8.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r8.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r8.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r8.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_54_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_54_ng_container_1_Template, 36, 17, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_54_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.transactions, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length == 0);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r9.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r9.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r9.expiry_date);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_55_ng_container_1_span_19_Template, 2, 2, "span", 101)(20, WalletPage_ng_container_1_div_55_ng_container_1_span_20_Template, 2, 2, "span", 102)(21, WalletPage_ng_container_1_div_55_ng_container_1_span_21_Template, 2, 2, "span", 103)(22, WalletPage_ng_container_1_div_55_ng_container_1_span_22_Template, 2, 2, "span", 104)(23, WalletPage_ng_container_1_div_55_ng_container_1_p_23_Template, 2, 1, "p", 105)(24, WalletPage_ng_container_1_div_55_ng_container_1_p_24_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 106)(26, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-row", 108)(29, "ion-col", 109)(30, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-col", 111)(33, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_55_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "CREDIT" && transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r9.transaction_date ? transaction_r9.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r9.payment_transaction_type ? transaction_r9.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "CREDIT" && transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r9.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r9.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r9.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r9.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_55_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_55_ng_container_1_Template, 36, 17, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_55_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.booking, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.booking.length == 0);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r10.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r10.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r10.expiry_date);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_56_ng_container_1_span_19_Template, 2, 2, "span", 101)(20, WalletPage_ng_container_1_div_56_ng_container_1_span_20_Template, 2, 2, "span", 102)(21, WalletPage_ng_container_1_div_56_ng_container_1_span_21_Template, 2, 2, "span", 103)(22, WalletPage_ng_container_1_div_56_ng_container_1_span_22_Template, 2, 2, "span", 104)(23, WalletPage_ng_container_1_div_56_ng_container_1_p_23_Template, 2, 1, "p", 105)(24, WalletPage_ng_container_1_div_56_ng_container_1_p_24_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 106)(26, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-row", 108)(29, "ion-col", 109)(30, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-col", 111)(33, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_56_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "CREDIT" && transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r10.transaction_date ? transaction_r10.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r10.payment_transaction_type ? transaction_r10.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "CREDIT" && transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r10.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r10.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r10.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r10.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_56_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_56_ng_container_1_Template, 36, 17, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_56_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.cancellation, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.cancellation.length == 0);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r11.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r11.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r11.expiry_date);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_19_Template, 2, 2, "span", 101)(20, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_20_Template, 2, 2, "span", 102)(21, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_21_Template, 2, 2, "span", 103)(22, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_22_Template, 2, 2, "span", 104)(23, WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_23_Template, 2, 1, "p", 105)(24, WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_24_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 106)(26, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-row", 108)(29, "ion-col", 109)(30, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-col", 111)(33, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_row_35_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "CREDIT" && transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r11.transaction_date ? transaction_r11.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r11.payment_transaction_type ? transaction_r11.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "CREDIT" && transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r11.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r11.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r11.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_57_ng_container_1_div_1_Template, 36, 17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r11.payment_transaction_type == "Booking Cash Back" || transaction_r11.payment_transaction_type == "Refer and Earn" || transaction_r11.payment_transaction_type == "Birthday Cashback" || transaction_r11.payment_transaction_type == "Wallet Recharge" || transaction_r11.payment_transaction_type == "Validity Configurations" || transaction_r11.payment_transaction_type == "New Customer Registration");
  }
}
function WalletPage_ng_container_1_div_57_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_57_ng_container_1_Template, 2, 1, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_57_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.cashback, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.cashback.length == 0);
  }
}
function WalletPage_ng_container_1_div_58_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_58_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "1: Promotional Balance is the reward you received from Different Promotional Activities such as referrals and cashback programs. you can use this amount with the limitations (Conditions apply) in a single transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_1_div_58_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 126)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "1: Non Promotional Balance is the money you received as a refund or Recharge done by you, This Money can be used in any Single transaction at the time of booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_1_div_58_h5_6_Template, 2, 0, "h5", 3)(7, WalletPage_ng_container_1_div_58_p_7_Template, 2, 0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
  }
}
function WalletPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 56)(3, "ion-buttons", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-content", 59)(8, "div", 60)(9, "div")(10, "div", 61)(11, "ion-row", 8)(12, "ion-col", 62)(13, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Total wallet balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 68)(25, "ion-item", 69)(26, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_1_Template_ion_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.enteramount, $event) || (ctx_r1.enteramount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 68)(29, "ion-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_1_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 72)(32, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, WalletPage_ng_container_1_span_33_Template, 4, 2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, "Non-Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 77)(39, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_1_Template_ion_icon_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 79)(41, "ion-segment", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_1_Template_ion_segment_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function WalletPage_ng_container_1_Template_ion_segment_ionChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "ion-segment-button", 81)(43, "ion-label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-segment-button", 83)(46, "ion-label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "ion-segment-button", 84)(49, "ion-label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-segment-button", 85)(52, "ion-label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53, "Cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, WalletPage_ng_container_1_div_54_Template, 4, 6, "div", 3)(55, WalletPage_ng_container_1_div_55_Template, 4, 6, "div", 3)(56, WalletPage_ng_container_1_div_56_Template, 4, 6, "div", 3)(57, WalletPage_ng_container_1_div_57_Template, 4, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, WalletPage_ng_container_1_div_58_Template, 8, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.enteramount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
  }
}
function WalletPage_ng_container_2_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 157)(1, "ion-col", 148)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 148)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 148)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 158)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Particular");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function WalletPage_ng_container_2_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 163)(1, "ion-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_26_div_2_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      const scrollableDiv_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.scrollToBottom(scrollableDiv_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("+", ctx_r1.currencySym, "", transaction_r17.amount, "");
  }
}
function WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" -", ctx_r1.currencySym, "", transaction_r17.amount, "");
  }
}
function WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r17.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_2_div_26_ion_row_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 167)(1, "ion-col", 168)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_6_Template, 2, 2, "p", 169)(7, WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_7_Template, 2, 2, "p", 170)(8, WalletPage_ng_container_2_div_26_ion_row_3_div_1_p_8_Template, 2, 2, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 168)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 158)(13, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](4, 8, transaction_r17.transaction_date, "dd/MM/yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r17.transaction_type == "CREDIT" && transaction_r17.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r17.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r17.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", transaction_r17.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r17.payment_transaction_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r17.description);
  }
}
function WalletPage_ng_container_2_div_26_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_2_div_26_ion_row_3_div_1_Template, 17, 11, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r17.txn_status != "Pending");
  }
}
function WalletPage_ng_container_2_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 174)(1, "ion-icon", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_26_div_4_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      const scrollableDiv_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.scrollToTop(scrollableDiv_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 159, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("scroll", function WalletPage_ng_container_2_div_26_Template_div_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const scrollableDiv_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onScroll(scrollableDiv_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, WalletPage_ng_container_2_div_26_div_2_Template, 2, 0, "div", 160)(3, WalletPage_ng_container_2_div_26_ion_row_3_Template, 2, 1, "ion-row", 161)(4, WalletPage_ng_container_2_div_26_div_4_Template, 2, 0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isAtBottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isAtTop);
  }
}
function WalletPage_ng_container_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 176)(1, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "No transactions yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 180)(1, "ion-accordion-group", 181, 1)(3, "ion-accordion", 181, 2)(5, "ion-item", 182)(6, "ion-label", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const catQue_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", i_r20 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", catQue_r19.question, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", catQue_r19.answer, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function WalletPage_ng_container_2_div_62_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 55)(1, "ion-col", 29)(2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 52)(5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.promobalance, "");
  }
}
function WalletPage_ng_container_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "ion-row")(3, "ion-col", 47)(4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Price Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 49)(7, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_62_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.balanceDiv = !ctx_r1.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 29)(10, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Transactional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 52)(13, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, WalletPage_ng_container_2_div_62_ion_row_15_Template, 7, 2, "ion-row", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 29)(18, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Total Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-col", 52)(21, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.walletbalance, "");
  }
}
function WalletPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 129)(2, "ion-toolbar", 130)(3, "ion-row")(4, "ion-col", 131)(5, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 132)(8, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "OurBus wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 134)(11, "ion-icon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_ion_icon_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.addMoney1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 136)(13, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Wallet Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-icon", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_ion_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.balanceDiv = !ctx_r1.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-content", 129)(19, "ion-refresher", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionRefresh", function WalletPage_ng_container_2_Template_ion_refresher_ionRefresh_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.doRefresh($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div")(22, "ion-card", 141)(23, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, WalletPage_ng_container_2_ion_row_25_Template, 13, 0, "ion-row", 143)(26, WalletPage_ng_container_2_div_26_Template, 5, 3, "div", 144)(27, WalletPage_ng_container_2_div_27_Template, 5, 0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-card", 146)(29, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Wallet Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-row", 147)(32, "ion-col", 148)(33, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](34, "ion-icon", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "ion-col", 151)(36, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "Quick and efficient");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "The ticket value will be credited to your OurBus Wallet instantly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-row", 147)(41, "ion-col", 148)(42, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "ion-icon", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "ion-col", 151)(45, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "Transform credits into tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Use your credits to book another ticket on OurBus right away!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-row", 147)(50, "ion-col", 148)(51, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-col", 151)(54, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Yours forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "OurBus Wallet credits do not expire, and are valid for all purchases on OurBus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "ion-card", 146)(59, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, WalletPage_ng_container_2_div_61_Template, 11, 3, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, WalletPage_ng_container_2_div_62_Template, 23, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.faqData);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.balanceDiv);
  }
}
function WalletPage_ng_container_3_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.promobalance, "");
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.amount);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.amount);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.amount);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.amount.toFixed(2));
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r23.transaction_type, " ");
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.expiry_date);
  }
}
function WalletPage_ng_container_3_div_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_3_div_46_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_3_div_46_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_3_div_46_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_3_div_46_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 47)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 47)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, WalletPage_ng_container_3_div_46_ng_container_1_span_20_Template, 2, 1, "span", 101)(21, WalletPage_ng_container_3_div_46_ng_container_1_span_21_Template, 2, 1, "span", 102)(22, WalletPage_ng_container_3_div_46_ng_container_1_span_22_Template, 2, 1, "span", 103)(23, WalletPage_ng_container_3_div_46_ng_container_1_span_23_Template, 2, 1, "span", 104)(24, WalletPage_ng_container_3_div_46_ng_container_1_p_24_Template, 2, 1, "p", 105)(25, WalletPage_ng_container_3_div_46_ng_container_1_p_25_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-row", 106)(27, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-row", 108)(30, "ion-col", 109)(31, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-col", 111)(34, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, WalletPage_ng_container_3_div_46_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r23 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "CREDIT" && transaction_r23.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r23.transaction_date ? transaction_r23.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r23.payment_transaction_type ? transaction_r23.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "CREDIT" && transaction_r23.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r23.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r23.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r23.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r23.expiry_date != null);
  }
}
function WalletPage_ng_container_3_div_46_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_46_ng_container_1_Template, 37, 18, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_3_div_46_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.transactions, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.transactions.length == 0);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.amount);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.amount);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.amount);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.amount.toFixed(2));
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r24.transaction_type, " ");
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.expiry_date);
  }
}
function WalletPage_ng_container_3_div_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_3_div_47_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_3_div_47_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_3_div_47_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_3_div_47_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, WalletPage_ng_container_3_div_47_ng_container_1_span_20_Template, 2, 1, "span", 101)(21, WalletPage_ng_container_3_div_47_ng_container_1_span_21_Template, 2, 1, "span", 102)(22, WalletPage_ng_container_3_div_47_ng_container_1_span_22_Template, 2, 1, "span", 103)(23, WalletPage_ng_container_3_div_47_ng_container_1_span_23_Template, 2, 1, "span", 104)(24, WalletPage_ng_container_3_div_47_ng_container_1_p_24_Template, 2, 1, "p", 105)(25, WalletPage_ng_container_3_div_47_ng_container_1_p_25_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-row", 106)(27, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-row", 108)(30, "ion-col", 109)(31, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-col", 111)(34, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, WalletPage_ng_container_3_div_47_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "CREDIT" && transaction_r24.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r24.transaction_date ? transaction_r24.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r24.payment_transaction_type ? transaction_r24.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "CREDIT" && transaction_r24.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r24.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r24.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r24.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r24.expiry_date != null);
  }
}
function WalletPage_ng_container_3_div_47_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_47_ng_container_1_Template, 37, 18, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_3_div_47_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.booking, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.booking.length == 0);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.amount);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.amount);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.amount);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.amount.toFixed(2));
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r25.transaction_type, " ");
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.expiry_date);
  }
}
function WalletPage_ng_container_3_div_48_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_3_div_48_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_3_div_48_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_3_div_48_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_3_div_48_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, WalletPage_ng_container_3_div_48_ng_container_1_span_20_Template, 2, 1, "span", 101)(21, WalletPage_ng_container_3_div_48_ng_container_1_span_21_Template, 2, 1, "span", 102)(22, WalletPage_ng_container_3_div_48_ng_container_1_span_22_Template, 2, 1, "span", 103)(23, WalletPage_ng_container_3_div_48_ng_container_1_span_23_Template, 2, 1, "span", 104)(24, WalletPage_ng_container_3_div_48_ng_container_1_p_24_Template, 2, 1, "p", 105)(25, WalletPage_ng_container_3_div_48_ng_container_1_p_25_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-row", 106)(27, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-row", 108)(30, "ion-col", 109)(31, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-col", 111)(34, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, WalletPage_ng_container_3_div_48_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r25 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "CREDIT" && transaction_r25.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r25.transaction_date ? transaction_r25.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r25.payment_transaction_type ? transaction_r25.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "CREDIT" && transaction_r25.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r25.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r25.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r25.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r25.expiry_date != null);
  }
}
function WalletPage_ng_container_3_div_48_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_48_ng_container_1_Template, 37, 18, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_3_div_48_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.cancellation, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.cancellation.length == 0);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 113);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 114);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 115);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 116);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.amount);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.amount);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.amount);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.amount.toFixed(2));
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", transaction_r26.transaction_type, " ");
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 106)(1, "ion-col", 8)(2, "p", 122)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.expiry_date);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div")(2, "ion-row", 89)(3, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_4_Template, 1, 0, "ion-img", 91)(5, WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_5_Template, 1, 0, "ion-img", 92)(6, WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_6_Template, 1, 0, "ion-img", 93)(7, WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_img_7_Template, 1, 0, "ion-img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 95)(9, "ion-row", 96)(10, "ion-col")(11, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 98)(14, "ion-col", 123)(15, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124)(18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_20_Template, 2, 1, "span", 101)(21, WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_21_Template, 2, 1, "span", 102)(22, WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_22_Template, 2, 1, "span", 103)(23, WalletPage_ng_container_3_div_49_ng_container_1_div_1_span_23_Template, 2, 1, "span", 104)(24, WalletPage_ng_container_3_div_49_ng_container_1_div_1_p_24_Template, 2, 1, "p", 105)(25, WalletPage_ng_container_3_div_49_ng_container_1_div_1_p_25_Template, 2, 0, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-row", 106)(27, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-row", 108)(30, "ion-col", 109)(31, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-col", 111)(34, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, WalletPage_ng_container_3_div_49_ng_container_1_div_1_ion_row_36_Template, 6, 1, "ion-row", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "CREDIT" && transaction_r26.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat(transaction_r26.transaction_date ? transaction_r26.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](transaction_r26.payment_transaction_type ? transaction_r26.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "CREDIT" && transaction_r26.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Description:", transaction_r26.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r26.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("Bal: ", ctx_r1.currencySym, "", transaction_r26.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.expiry_date != null);
  }
}
function WalletPage_ng_container_3_div_49_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_49_ng_container_1_div_1_Template, 37, 18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", transaction_r26.payment_transaction_type == "Booking Cash Back" || transaction_r26.payment_transaction_type == "Refer and Earn" || transaction_r26.payment_transaction_type == "Birthday Cashback" || transaction_r26.payment_transaction_type == "Wallet Recharge" || transaction_r26.payment_transaction_type == "Validity Configurations" || transaction_r26.payment_transaction_type == "New Customer Registration");
  }
}
function WalletPage_ng_container_3_div_49_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_49_ng_container_1_Template, 2, 1, "ng-container", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, WalletPage_ng_container_3_div_49_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](2, 2, ctx_r1.cashback, "transaction_number", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.cashback.length == 0);
  }
}
function WalletPage_ng_container_3_div_50_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_50_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "1: Promotional Balance is the reward you received from Different Promotional Activities such as referrals and cashback programs. you can use this amount with the limitations (Conditions apply) in a single transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_3_div_50_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 126)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "1: Non Promotional Balance is the money you received as a refund or Recharge done by you, This Money can be used in any Single transaction at the time of booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, WalletPage_ng_container_3_div_50_h5_6_Template, 2, 0, "h5", 3)(7, WalletPage_ng_container_3_div_50_p_7_Template, 2, 0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
  }
}
function WalletPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 56)(3, "ion-buttons", 57)(4, "ion-button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ion-icon", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-content")(9, "div", 60)(10, "div")(11, "ion-row", 8)(12, "ion-col", 29)(13, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Total Wallet Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 31)(18, "div")(19, "ion-button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 190)(22, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, WalletPage_ng_container_3_span_23_Template, 4, 2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Non-Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 192)(29, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_icon_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 193)(31, "ion-row")(32, "ion-searchbar", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionInput", function WalletPage_ng_container_3_Template_ion_searchbar_ionInput_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.searchCities($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-segment", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_3_Template_ion_segment_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function WalletPage_ng_container_3_Template_ion_segment_ionChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-segment-button", 81)(35, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-segment-button", 83)(38, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-segment-button", 84)(41, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-segment-button", 85)(44, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "Cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, WalletPage_ng_container_3_div_46_Template, 4, 6, "div", 3)(47, WalletPage_ng_container_3_div_47_Template, 4, 6, "div", 3)(48, WalletPage_ng_container_3_div_48_Template, 4, 6, "div", 3)(49, WalletPage_ng_container_3_div_49_Template, 4, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, WalletPage_ng_container_3_div_50_Template, 8, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
  }
}
class WalletPage {
  logActiveIndex() {}
  constructor(navCtrl, commonStorage, theme, apiFactory, loader, commonService, modalController, util, dateService, alertController, authenticate, appData, firebaseAnalyticsService) {
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.theme = theme;
    this.apiFactory = apiFactory;
    this.loader = loader;
    this.commonService = commonService;
    this.modalController = modalController;
    this.util = util;
    this.dateService = dateService;
    this.alertController = alertController;
    this.authenticate = authenticate;
    this.appData = appData;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.balance = 0;
    this.promobalance = 0;
    this.walletbalance = 0;
    this.nonpromobalance = 0;
    this.transactions = [];
    this.transactionsArray = [];
    this.selectedTab = 1;
    this.slideOpts = {
      slidesPerView: 1
    };
    this.dayIndex = 0;
    this.transcation_type = '0';
    this.booking = [];
    this.cancellation = [];
    this.cashback = [];
    this.metaData = [];
    this.balanceDiv = false;
    this.isShowAll = true;
    this.isShowPromotional = false;
    this.isShowTransactional = false;
    this.nonPromotional = [];
    this.promotionalList = [];
    this.trackBusModal = false;
    this.isAtTop = true;
    this.isAtBottom = false;
    this.isIos = false;
    this.faqData = [{
      question: "What is OurBus Wallet?",
      answer: "OurBus Wallet is a form of payment that can be used on the OurBus platform (both web & app). When you are purchasing anything on OurBus, it is as good as paying with a credit card."
    }, {
      question: "How are credits added to my OurBus Wallet?",
      answer: "If you are eligible to cancel your ticket, you'll have the option to transfer the ticket value as credits into your Wallet for immediate use. This way, you won't have to wait 3-5 days for the refund to be processed. Transferring ticket value from refunds is not the only way to add credits into your Wallet; you can also add credits to your wallet by completing a transaction of the desired amount through UPI/Netbanking/Card etc. (1 OurBus wallet credit = INR 1). To be able to use your credits, you need to activate your wallet. The wallets can only be used to complete transactions on the OurBus Web and App."
    },
    // {
    //   question: "How can I activate my Wallet?",
    //   answer: "You can request an activation code, which will be sent to your email. You can then copy this code and enter it into the Wallet section of the app or website to activate it."
    // },
    {
      question: "How can I use the credits in my OurBus Wallet?",
      answer: "You can use these credits to purchase either a ticket or a voucher on the OurBus platform (web & app). Wallet credits will act as a form of payment on the OurBus platform."
    }, {
      question: "Where can I use OurBus Wallet credits?",
      answer: "You can use these credits only on the OurBus platform (web & app)."
    }, {
      question: "Can I add money to the Wallet as credits?",
      answer: "You can add money into the Wallet directly. Simply click on 'Add Funds' on the OurBus Wallet page to initiate a transaction of the desired amount. The same amount will reflect into your OurBus wallet immediately."
    }, {
      question: "Do my Wallet credits expire?",
      answer: "Yes, your Wallet credits will expire if unused for a period of 20 years from the date of transfer."
    }, {
      question: "Can I transfer my Wallet credits to someone else?",
      answer: "No, your Wallet credits are associated with your email and can only be used by you. However, you can use these credits to purchase a ticket or voucher for someone else."
    }, {
      question: "Can I use my Wallet credits without logging in?",
      answer: "No. To be able to use your Wallet credits, you need to have an account created with OurBus, and you need to be logged in to that account to use the credits."
    }];
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.defaultCall();
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {
    // this.close();
    this.appData.newTheme = this.util.getNewTheme();
    this.firebaseAnalyticsService.logCustomEvent('wallet_info_page', {
      page: 'Wallet Page'
    });
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
            _this.authenticate.logout();
            _this.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      yield alert.present();
    })();
  }
  defaultCall() {
    // this.loader.showLoadingDefault();
    this.metaData = this.commonStorage.getItem('metaData');
    this.currencySym = this.commonStorage.getItem('metaData').currencySym;
    this.apiFactory.getWalletBalance().subscribe(res => {
      // this.loader.hideLoadingDefault();
      if (res.success) {
        this.balance = res.body.balance.toFixed(2);
        this.promobalance = res.body.promotional_balance.toFixed(2);
        this.walletbalance = this.metaData.is_wallet_promotional ? parseFloat(this.balance) + parseFloat(this.promobalance) : parseFloat(this.balance);
        this.nonpromobalance = parseFloat(this.balance);
        this.wallettransactions();
        this.loader.hideLoadingDefault();
      } else if (res.code == 422) {
        this.accountDeRegisterAlert("", res.message);
        this.loader.hideLoadingDefault();
      }
    }, err => {
      this.loader.hideLoadingDefault();
    });
  }
  wallettransactions() {
    this.loader.showLoadingDefault();
    this.apiFactory.getWalletTransactions().subscribe(res => {
      if (res.success) {
        this.transactions = this.sortThis(res.body.customer_account_transactions, 'created_at');
        this.booking = [];
        this.cancellation = [];
        this.cashback = [];
        this.transactions.forEach(value => {
          if (value['payment_transaction_type'] == 'Booking') {
            this.booking.push(value);
          }
          if (value['payment_transaction_type'] == 'Cancellation') {
            this.cancellation.push(value);
          }
          if (value['wallet_type'] == 'NON_PROMOTIONAL' || value['wallet_type'] == 'Nonpromotional') {
            this.nonPromotional.push(value);
          }
          if (value['wallet_type'] == 'PROMOTIONAL' || value['wallet_type'] == 'Promotional') {
            this.promotionalList.push(value);
          }
          if (value['payment_transaction_type'] == 'Booking Cash Back' || value['payment_transaction_type'] == 'Refer and Earn' || value['payment_transaction_type'] == 'Birthday Cashback' || value['payment_transaction_type'] == 'Wallet Recharge' || value['payment_transaction_type'] == 'Validity Configurations' || value['payment_transaction_type'] == 'New Customer Registration') {
            this.cashback.push(value);
          }
        });
        // for (var i = 0; i < 80; i++) {
        for (var i = 0; i < this.transactions; i++) {
          let booking = {};
          booking.transaction_number = this.transactions[i].transaction_number;
          booking.transaction_type = this.transactions[i].transaction_type;
          booking.payment_transaction_type = this.transactions[i].payment_transaction_type;
          booking.transaction_date = this.transactions[i].transaction_date;
          booking.amount = parseFloat(this.transactions[i].amount.toFixed(2));
          booking.balance_amount = parseFloat(this.transactions[i].balance_amount.toFixed(2));
          booking.description = this.transactions[i].description;
          this.transcationsList.push(booking);
          this.getBookingList(1);
        }
      } else if (res.code == 422) {
        this.accountDeRegisterAlert("", res.message);
      } else {
        this.transactionMsg = res.body.message;
      }
      this.loader.hideLoadingDefault();
    }, err => {
      this.loader.hideLoadingDefault();
    });
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
    if (date && date != undefined && date != null && date != '') {
      var r = this.dateService.getDateObjFromDateStr(date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
      if (r.dayName != undefined && r.dayName != null && r.dayName != '') {
        return r.day + " " + r.monthName + " " + r.year;
      } else {
        var d = new Date(date.substr(0, 10).toString().trim());
        if (d.toString() != "Invalid Date" && d != null) {
          var m = d.getDate() + " " + this.util.getMonthName(d.getMonth() + 1) + " " + d.getFullYear();
          return m;
        } else {
          return date;
        }
      }
    } else {
      return date;
    }
  }
  sortThis(arr, orderByValue, orderType = 'DESC') {
    arr.sort((a, b) => {
      return Date.parse(b[orderByValue]) - Date.parse(a[orderByValue]);
    });
    return arr;
  }
  ionViewDidLoad() {
    //this.wallet = "balance"
    this.segment = 'all';
  }
  segmentChanged(ev) {}
  onSlideChanged(slide) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$swiperRef;
      //  slide.getActiveIndex();
      const currentIndex = yield (_this2$swiperRef = _this2.swiperRef) === null || _this2$swiperRef === void 0 ? void 0 : _this2$swiperRef.nativeElement.swiper.activeIndex;
      switch (currentIndex) {
        case 0:
          _this2.segment = "all";
          break;
        case 1:
          _this2.segment = "booking";
          break;
        case 2:
          _this2.segment = "cancellation";
          break;
        case 3:
          _this2.segment = "cashback";
          break;
        default:
          _this2.segment = "all";
          break;
      }
    })();
  }
  goToSlide(slide, slideNum, tabName) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (tabName == 'all') {
        //slide.slidePrev();
        yield _this3.slides.slideTo(0);
      } else if (tabName == "booking") {
        //    slide.slideNext();
        yield _this3.slides.slideTo(1);
      } else if (tabName == "cancellation") {
        //    slide.slideNext();
        yield _this3.slides.slideTo(2);
      } else if (tabName == "cashback") {
        //    slide.slideNext();
        yield _this3.slides.slideTo(3);
      }
      _this3.segment = tabName;
    })();
  }
  addMoney() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.util.checkConnection()) {
        return Promise.resolve(false); // Explicitly return a Promise
      }
      try {
        const modal = yield _this4.modalController.create({
          component: _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletPage,
          componentProps: {
            'enterAmount': _this4.enteramount
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data) {
          if (data === 'success') {
            _this4.defaultCall();
            _this4.util.showAlert('SUCCESS', "Money Added successfully to wallet");
          } else {
            _this4.util.showAlert('FAILURE', "Transaction failed");
          }
        }
        return Promise.resolve(); // Ensure the function always returns
      } catch (error) {
        console.error('Error in addMoney:', error);
        return Promise.reject(error); // Return a rejected Promise in case of an error
      }
    })();
  }
  addMoney1() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.util.checkConnection()) {
        return Promise.resolve(false); // Explicitly return a Promise
      }
      try {
        const modal = yield _this5.modalController.create({
          component: _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletPage
          // breakpoints: [0, 0.4, 0.4, 0.8],
          // initialBreakpoint: 0.4,
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data) {
          if (data === 'success') {
            _this5.defaultCall();
            _this5.util.showAlert('SUCCESS', "Money Added successfully to wallet");
          } else {
            _this5.util.showAlert('FAILURE', "Transaction failed");
          }
        }
        return Promise.resolve(); // Ensure the function always returns
      } catch (error) {
        console.error('Error in addMoney1:', error);
        return Promise.reject(error); // Return a rejected Promise in case of an error
      }
    })();
  }
  searchCities(ev) {
    this.searchKey = ev.target.value;
  }
  getBookingList(type) {
    if (type == 1) {
      this.selectedTab = 1;
      this.transactionsArray = this.transcationsList.filter(it => {
        return this.transactions;
      });
    } else if (type == 2) {
      this.selectedTab = 2;
      this.transactionsArray = this.transcationsList.filter(it => {
        return it.payment_transaction_type == 'Booking';
      });
    } else if (type == 3) {
      this.selectedTab = 3;
      this.transactionsArray = this.transcationsList.filter(it => {
        return it.payment_transaction_type == 'Cashback';
      });
    } else if (type == 4) {
      this.selectedTab = 4;
    }
  }
  slideChanged() {
    var _this$swiperRef;
    let currentIndex = (_this$swiperRef = this.swiperRef) === null || _this$swiperRef === void 0 ? void 0 : _this$swiperRef.nativeElement.swiper.activeIndex;
    // this.pullToRefresh = (currentIndex == 0) ? true : false;
    this.transcation_type = currentIndex.toString();
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.defaultCall();
      refresher.target.complete();
    }, 1000);
  }
  ionViewDidEnter() {
    this.segment = "all";
  }
  back() {
    this.navCtrl.navigateBack('tabs/more');
  }
  all() {
    this.isShowAll = true;
    this.isShowPromotional = false;
    this.isShowTransactional = false;
  }
  promotional() {
    this.isShowAll = false;
    this.isShowPromotional = true;
    this.isShowTransactional = false;
  }
  transactional() {
    this.isShowAll = false;
    this.isShowPromotional = false;
    this.isShowTransactional = true;
  }
  scrollToBottom(scrollableDiv) {
    if (scrollableDiv) {
      scrollableDiv.scroll({
        top: scrollableDiv.scrollHeight,
        behavior: 'smooth'
      });
      this.isAtBottom = true;
      this.isAtTop = false;
    }
  }
  scrollToTop(scrollableDiv) {
    if (scrollableDiv) {
      scrollableDiv.scroll({
        top: 0,
        behavior: 'smooth'
      });
      this.isAtTop = true;
      this.isAtBottom = false;
    }
  }
  onScroll(scrollableDiv) {
    // Check if the user is at the top
    this.isAtTop = scrollableDiv.scrollTop === 0;
    // Check if the user is at the bottom
    this.isAtBottom = scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight;
  }
}
_WalletPage = WalletPage;
_WalletPage.ɵfac = function WalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_9__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_10__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_11__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_12__.FirebaseAnalyticsService));
};
_WalletPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _WalletPage,
  selectors: [["app-wallet"]],
  viewQuery: function WalletPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.scrollableDiv = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    }
  },
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["scrollableDiv", ""], ["accordionGroup", ""], ["accordionItem", ""], [4, "ngIf"], [1, "theme1", 3, "ngStyle"], ["title", "Chartered Wallet", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], [1, "theme1", 2, "background", "#F3F3F7", "box-shadow", "none", "margin", "0px 22px 20px 22px", "padding", "15px 20px 20px 20px"], [1, "heading"], [2, "display", "flex", "align-items", "center"], ["size", "6", 1, "fare", 2, "padding-top", "7px", "padding-left", "0px"], ["size", "6", 1, "breakUpView", 2, "padding-top", "7px", "padding-right", "0px"], [2, "text-align", "right", "font-size", "14px", "font-weight", "600", "line-height", "22px", 3, "click"], [2, "padding-top", "13px"], ["size", "12", 2, "padding", "0px"], [1, "addMoneyBtn", 3, "click"], [2, "border", "3px solid #EFEFEF", "height", "0px"], [1, "theme1", 2, "margin", "20px 22px 1px 22px"], [1, "history"], [1, "transaction_segment"], ["size", "2", 3, "click"], [3, "ngClass"], ["size", "4", 3, "click"], ["size", "6", 2, "padding-left", "5px", 3, "click"], [1, "theme1", 2, "--background", "#fff"], [2, "margin", "17px"], ["class", "whole center theme1", 4, "ngIf"], ["style", "margin: 10px 0px;", 4, "ngFor", "ngForOf"], ["class", "msg", 4, "ngIf"], [2, "margin", "10px 0px"], ["size", "8"], [1, "walletList"], ["size", "4"], ["style", "color: #3BAD69;", "class", "points", 4, "ngIf"], ["style", "color: #e91e63;", "class", "points", 4, "ngIf"], ["style", "color: #333", "class", "points", 4, "ngIf"], ["style", "color: #ff9c00;", "class", "points", 4, "ngIf"], [2, "border-bottom", "1px solid #DADEE3", "padding-bottom", "10px"], ["size", "10", 2, "padding-top", "0px"], ["class", "msgList", 4, "ngIf"], [1, "msgList"], [1, "points", 2, "color", "#3BAD69"], [1, "points", 2, "color", "#e91e63"], [1, "points", 2, "color", "#333"], [1, "points", 2, "color", "#ff9c00"], [1, "msg"], [1, "whole", "center", "theme1"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "border-top-left-radius", "16px", "border-top-right-radius", "16px"], ["size", "6"], [1, "priceBreakup"], ["size", "6", 1, "closeBtn"], ["name", "close-outline", 3, "click"], [1, "balanceDiv"], ["size", "4", 2, "text-align", "end"], ["style", "border-bottom: 1px solid #c4c4c4;\n          padding-bottom: 10px;", 4, "ngIf"], [1, "totalBalance"], [2, "border-bottom", "1px solid #c4c4c4", "padding-bottom", "10px"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head", 2, "opacity", "0.7"], [2, "--background", "#F1F7FA !important"], [1, "main-content"], [1, "seabirdBgSet"], ["size", "10"], [1, "totalWlletBlc"], [1, "walletblc"], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["src", "././assets/icon/seabird_wallet2.svg", 2, "width", "24px", "height", "24px"], ["size", "12", 2, "border-top", "1px dashed #999999"], ["size", "12"], [2, "--background", "#F2F8FF"], ["type", "number", "placeholder", "Enter amount", 2, "font-size", "12px", 3, "ngModelChange", "ngModel"], ["expand", "block", 2, "--border-radius", "35px", 3, "click"], [1, "walletBgSet"], [1, "seabird_balanceDiv"], ["class", "promotionalSpan", 4, "ngIf"], [1, "seabird_nonpromoSpan"], [1, "balanceBold"], [2, "margin-top", "6px", "display", "flex", "margin-left", "20px"], ["name", "information-circle-outline", "size", "small", 3, "click"], [1, "contentBgSet"], ["value", "all", "color", "red", "scrollable", "true", "mode", "md", 2, "box-shadow", "0px 2px 1px 0px #ccc", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "all"], [2, "color", "black"], ["value", "booking"], ["value", "cancellation"], ["value", "cashback"], ["class", "whole center", 3, "click", 4, "ngIf"], [1, "promotionalSpan"], [4, "ngFor", "ngForOf"], [1, "transaction-history"], ["size", "1", 1, "wallet-icon"], ["src", "./assets/icon/wallet_credit 1.png", 4, "ngIf"], ["src", "./assets/icon/wallet_debit 1.png", 4, "ngIf"], ["src", "./assets/icon/wallet_expired.png", 4, "ngIf"], ["src", "./assets/icon/pending.png", 4, "ngIf"], ["size", "11"], [2, "margin-bottom", "-37px", "margin-top", "-15px"], [2, "font-weight", "bold"], [2, "margin-bottom", "-15px"], [1, "typeSet"], [1, "amount"], ["style", "color: #01875f;font-weight: bold;", 4, "ngIf"], ["style", "color: #e91e63;font-weight: bold;", 4, "ngIf"], ["style", "color: #424242;font-weight: bold;", 4, "ngIf"], ["style", "color: #ff9c00;font-weight: bold;", 4, "ngIf"], ["style", "margin-top: 0px;", 4, "ngIf"], [1, "desRow"], ["size", "10", 1, "description"], [1, "transactionNum"], ["size", "8", 2, "display", "flex", "align-items", "center"], [2, "margin-top", "5px"], ["size", "4", 2, "text-align", "right"], ["class", "desRow", 4, "ngIf"], ["src", "./assets/icon/wallet_credit 1.png"], ["src", "./assets/icon/wallet_debit 1.png"], ["src", "./assets/icon/wallet_expired.png"], ["src", "./assets/icon/pending.png"], [2, "color", "#01875f", "font-weight", "bold"], [2, "color", "#e91e63", "font-weight", "bold"], [2, "color", "#424242", "font-weight", "bold"], [2, "color", "#ff9c00", "font-weight", "bold"], [2, "margin-top", "0px"], [2, "margin-top", "5px", "font-size", "12px"], ["size", "9"], ["size", "3"], [1, "whole", "center", 3, "click"], [1, "legend-box", 2, "position", "absolute", "width", "100% !important", "bottom", "0"], [2, "font-size", "12px"], ["style", "font-size: 12px;", 4, "ngIf"], [1, "ourbustheme"], ["mode", "md", 1, "h50", "ourbus_bg"], ["size", "2", 2, "color", "white"], ["size", "8", 2, "text-align", "center", "margin-top", "auto", "margin-bottom", "auto"], [1, "ourbus_wallet"], ["size", "2", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["name", "add-circle-outline", 2, "font-size", "26px", "color", "white", 3, "click"], [2, "text-align", "center", "color", "#fff"], [2, "font-size", "48px", "color", "white", "font-weight", "600"], [1, "ourbus-wallet-balance"], ["name", "information-circle", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], [1, "custom-card", 2, "padding", "16px"], [1, "ourbus_history"], ["class", "ourbus_rowHead", 4, "ngIf"], ["class", "scrollable-content", 3, "scroll", 4, "ngIf"], ["style", "margin: 24px;", 4, "ngIf"], [2, "padding", "16px"], [2, "margin-top", "8px"], ["size", "2.5"], [1, "box_ourbus"], ["src", "././assets/icon/lightning_ourbus.svg", 2, "height", "32px", "width", "32px"], ["size", "9.5"], [1, "subText_ourbus"], [1, "small_text_ourbus"], ["src", "././assets/icon/ourbus_ticketsave.svg", 2, "height", "32px", "width", "32px"], ["src", "././assets/icon/oubus_HourglassHigh.svg", 2, "height", "32px", "width", "32px"], ["style", "margin: 0px;box-shadow: none; border-bottom: 1px solid #EFEFEF;", 4, "ngFor", "ngForOf"], [1, "ourbus_rowHead"], ["size", "4.5"], [1, "scrollable-content", 3, "scroll"], ["style", "position: fixed;right: 10px;top: 65px;", 4, "ngIf"], ["style", "border-bottom: 1px solid #efefef;font-size: 12px;font-weight: 300;display: flex;align-items: center;", 4, "ngFor", "ngForOf"], ["style", "position: fixed;right: 10px;bottom: 20px;", 4, "ngIf"], [2, "position", "fixed", "right", "10px", "top", "65px"], ["name", "arrow-down-outline", 2, "width", "24px", "height", "24px", 3, "click"], [2, "border-bottom", "1px solid #efefef", "font-size", "12px", "font-weight", "300", "display", "flex", "align-items", "center"], ["style", "display: contents;", 4, "ngIf"], [2, "display", "contents"], ["size", "2.5", 2, "color", "#2d2d2d"], ["style", "color: #4CAF50;font-weight: bold;", 4, "ngIf"], ["style", "color: #F60C0C;font-weight: bold;", 4, "ngIf"], [2, "font-weight", "700", "color", "#000"], [2, "color", "#4CAF50", "font-weight", "bold"], [2, "color", "#F60C0C", "font-weight", "bold"], [2, "position", "fixed", "right", "10px", "bottom", "20px"], ["name", "arrow-up-outline", 2, "width", "24px", "height", "24px", 3, "click"], [2, "margin", "24px"], [2, "text-align", "center", "margin", "8px 0px"], ["src", "././assets/icon/ourbus_Coins.svg", 1, "ourbus_noTransaction_icon"], [1, "ourbus_notransaction_text"], [2, "margin", "0px", "box-shadow", "none", "border-bottom", "1px solid #EFEFEF"], [2, "border-radius", "8px"], ["lines", "none", "slot", "header", 1, "accordion-header"], [1, "txt-lbl"], [3, "innerHTML"], ["slot", "content", 1, "accordion-content"], [1, "answer-content", 3, "innerHTML"], [3, "click"], ["name", "arrow-back-outline"], [2, "font-size", "15px"], [1, "walletBar"], [1, "nonpromoSpan"], [1, "informationDiv"], [1, "search-box"], ["placeholder", "Transaction Number", "autofocus", "", 3, "ionInput"], ["value", "all", "color", "red", "scrollable", "true", 2, "box-shadow", "0px 2px 1px 0px #ccc", 3, "ngModelChange", "ionChange", "ngModel"]],
  template: function WalletPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, WalletPage_ng_container_0_Template, 41, 12, "ng-container", 3)(1, WalletPage_ng_container_1_Template, 59, 12, "ng-container", 3)(2, WalletPage_ng_container_2_Template, 63, 7, "ng-container", 3)(3, WalletPage_ng_container_3_Template, 51, 11, "ng-container", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_13__.WhiteCommonHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__.FilterPipe],
  styles: [".main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.balance[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  font-size: 1.3em;\n  padding: 15px 0;\n  flex-direction: column;\n  margin-bottom: 10px;\n  padding: 5px;\n  box-shadow: 0px 2px 1px 0px #ccc;\n  background: #fff;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sc-ion-searchbar-md-h[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.balance[_ngcontent-%COMP%]   .add-money[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n\n.transaction-card[_ngcontent-%COMP%] {\n  padding: 6px;\n  background-color: #fff;\n}\n\nspan.msg[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  height: 29vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2em;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #787777;\n}\n\nspan.amount[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n\n.grey-box[_ngcontent-%COMP%] {\n  width: 89%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color:var(--viewBgColor);\n}\n\nion-button[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: \"NotoSans\";\n}\n\n.bln[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-left: 5px;\n  margin-top: -14px;\n}\n\n.transaction-history[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d1d1d1;\n  font-size: 14px;\n  color: #737373;\n}\n\n.wallet-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none !important;\n}\n\n.informationDiv[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 4px;\n  top: 26%;\n}\n\n.waletdetails[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n\n.walletBar[_ngcontent-%COMP%] {\n  background-color: #E3E3E3;\n  padding: 6px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  width: 94%;\n  display: inline-block;\n}\n\n.promotionalSpan[_ngcontent-%COMP%] {\n  width: 40%;\n  font-size: 12px;\n  margin-right: 10px;\n  float: left;\n  padding-top: 5px;\n}\n\n.nonpromoSpan[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 40%;\n}\n\n.seabird_nonpromoSpan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.balanceBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.amount[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.transactionNum[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: -15px;\n  margin-top: 5px;\n}\n\n.typeSet[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n\n.desRow[_ngcontent-%COMP%] {\n  margin-top: -25px;\n  margin-bottom: -14px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-radius: 15px 15px 0 0;\n  z-index: 20;\n  background-color: #fff;\n  transition: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .swipe-handler[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 30px;\n  height: 6px;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  margin-left: -10px;\n  margin-top: -3px;\n  border-radius: 3px;\n  background: lightgray;\n}\n\n.bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.fare[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  color: #333;\n}\n\n.breakUpView[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  color: #191966;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addMoneyBtn[_ngcontent-%COMP%] {\n  color: var(--Primary, #191966);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  --background: #F2C21A;\n  --background-activated:#F2C21A;\n}\n\n.expiryMsg[_ngcontent-%COMP%] {\n  color: #FCAF17;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.priceBreakup[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n  font-style: normal;\n  color: #333;\n  font-weight: 500;\n}\n\n.closeBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  font-size: 30px;\n  color: #747B84;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.seabird_balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n}\n\n.totalBalance[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n}\n\n.all1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.all[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.transactional[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.transactional1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.walletList[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.points[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  margin: 0px;\n}\n\n.msgList[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #5F5F5F;\n}\n\n.transaction_segment[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n}\n\nheading[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.fare[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  color: #333;\n}\n\n.breakUpView[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  color: #191966;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 248px;\n}\n\n.addMoneyBtn[_ngcontent-%COMP%] {\n  color: var(--Primary, #191966);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  --background: #F2C21A;\n  --background-activated:#F2C21A;\n}\n\n.expiryMsg[_ngcontent-%COMP%] {\n  color: #FCAF17;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.priceBreakup[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n  font-style: normal;\n  color: #333;\n  font-weight: 500;\n}\n\n.closeBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  font-size: 30px;\n  color: #747B84;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.totalBalance[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n}\n\n.all1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.all[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.transactional[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.transactional1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.walletList[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.points[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  margin: 0px;\n}\n\n.msgList[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #5F5F5F;\n}\n\n.transaction_segment[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.transaction_segment[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.ourbus_bg[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #2E6726 0%, #74C267 50%, #459A37 100%);\n}\n\n.ourbus_wallet[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n}\n\n.ourbus_history[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #2d2d2d;\n  margin: 0px;\n}\n\n.ourbus_rowHead[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 12px;\n  font-weight: 300;\n  color: #2d2d2d;\n  border-bottom: 1px solid #EFEFEF;\n  padding-bottom: 8px;\n}\n.ourbus_rowHead[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.scrollable-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 300px;\n}\n\n.box_ourbus[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  padding: 8px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.subText_ourbus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2d2d2d;\n}\n\n.small_text_ourbus[_ngcontent-%COMP%] {\n  margin: 4px 0px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #2d2d2d;\n}\n\n.ourbus_noTransaction_icon[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  padding: 10px;\n  border-radius: 42px;\n  width: 32px;\n  height: 32px;\n}\n\n.ourbus_notransaction_text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n\n.seabirdBgSet[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 10px;\n  padding: 8px;\n  background: white;\n}\n\n.contentBgSet[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 10px;\n  margin-top: 16px;\n  padding: 8px;\n  background: white;\n}\n\n.walletBgSet[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-bottom: 6px;\n  padding-left: 6px;\n  background: #D9D9D8;\n}\n\n.totalWlletBlc[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #000;\n}\n\n.walletblc[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #00904B;\n}\n\n.segment-button-checked[_ngcontent-%COMP%] {\n  --ion-color-base: #2B28CE;\n}\n\n.ourbus-wallet-balance[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ourbus-wallet-balance[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding: 2px 0px 0px 5px;\n  color: #fff;\n  height: 20px;\n  width: 20px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  white-space: wrap;\n  overflow: initial;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-bottom: 15px;\n}"]
});

/***/ })

}]);