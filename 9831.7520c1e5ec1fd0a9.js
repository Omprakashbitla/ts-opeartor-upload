"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9831],{

/***/ 17516
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 18606
/*!*************************************************!*\
  !*** ./src/app/wallet/wallet-routing.module.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPageRoutingModule: () => (/* binding */ WalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page */ 81328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _WalletPageRoutingModule;




const routes = [{
  path: '',
  component: _wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage
}];
class WalletPageRoutingModule {}
_WalletPageRoutingModule = WalletPageRoutingModule;
_WalletPageRoutingModule.ɵfac = function WalletPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPageRoutingModule)();
};
_WalletPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _WalletPageRoutingModule
});
_WalletPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WalletPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 39831
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPageModule: () => (/* binding */ WalletPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-routing.module */ 18606);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet.page */ 81328);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _WalletPageModule;








class WalletPageModule {}
_WalletPageModule = WalletPageModule;
_WalletPageModule.ɵfac = function WalletPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPageModule)();
};
_WalletPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _WalletPageModule
});
_WalletPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__.WalletPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](WalletPageModule, {
    declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_4__.WalletPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__.WalletPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe]
  });
})();

/***/ },

/***/ 81328
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletPage: () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _add_money_wallet_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-money-wallet/add-money-wallet.page */ 91598);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);

var _WalletPage;



















const _c0 = ["scrollableDiv"];
const _c1 = ["swiper"];
const _c2 = ["myslider1"];
const _c3 = () => ({
  "padding-top": "0px"
});
const _c4 = () => ({});
const _c5 = a0 => ({
  $implicit: a0
});
const _c6 = a0 => ({
  "border-bottom": a0
});
const _c7 = (a0, a1, a2, a3) => ({
  "credit": a0,
  "debit": a1,
  "pending": a2,
  "expire": a3
});
function WalletPage_ng_container_0_app_white_common_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-white-common-header", 10);
  }
}
function WalletPage_ng_container_0_app_white_common_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-white-common-header", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r0.headerText);
  }
}
function WalletPage_ng_container_0_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chartered Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.walletText);
  }
}
function WalletPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ion-card", 12)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_0_div_4_span_3_Template, 2, 0, "span", 13)(4, WalletPage_ng_container_0_div_4_span_4_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-row", 14)(6, "ion-col", 15)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-col", 16)(10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_4_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = !ctx_r0.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-row", 18)(13, "ion-col", 19)(14, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_4_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 22)(18, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-row", 24)(21, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_4_Template_ion_col_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.all());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_4_Template_ion_col_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.promotional());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-col", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_4_Template_ion_col_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.transactional());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Transactional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.isShowAll ? "all" : "all1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.isShowPromotional ? "promo" : "promo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.isShowTransactional ? "transactional" : "transactional1");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.currencySym, "", transaction_r3.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r3.transaction_date ? transaction_r3.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r0.changeDateFormat1(transaction_r3.expiry_date ? transaction_r3.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r3.transaction_date ? transaction_r3.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "ion-row")(2, "ion-col", 35)(3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_6_Template, 2, 2, "p", 38)(7, WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_7_Template, 2, 2, "p", 39)(8, WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_8_Template, 2, 2, "p", 40)(9, WalletPage_ng_container_0_ion_content_5_div_4_div_1_p_9_Template, 2, 2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-row", 42)(11, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WalletPage_ng_container_0_ion_content_5_div_4_div_1_div_12_Template, 6, 2, "div", 44)(13, WalletPage_ng_container_0_ion_content_5_div_4_div_1_div_13_Template, 3, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 45)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "CREDIT" && transaction_r3.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r3.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r3.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r3.txn_status);
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_ion_content_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_0_ion_content_5_div_4_div_1_Template, 20, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_0_ion_content_5_div_4_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length == 0);
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.currencySym, "", transaction_r4.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r4.transaction_date ? transaction_r4.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r0.changeDateFormat1(transaction_r4.expiry_date ? transaction_r4.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r4.transaction_date ? transaction_r4.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "ion-row")(2, "ion-col", 35)(3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_6_Template, 2, 2, "p", 38)(7, WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_7_Template, 2, 2, "p", 39)(8, WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_8_Template, 2, 2, "p", 40)(9, WalletPage_ng_container_0_ion_content_5_div_5_div_1_p_9_Template, 2, 2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-row", 42)(11, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WalletPage_ng_container_0_ion_content_5_div_5_div_1_div_12_Template, 6, 2, "div", 44)(13, WalletPage_ng_container_0_ion_content_5_div_5_div_1_div_13_Template, 3, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 45)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "CREDIT" && transaction_r4.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r4.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r4.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r4.txn_status);
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_ion_content_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_0_ion_content_5_div_5_div_1_Template, 20, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_0_ion_content_5_div_5_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.promotionalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.promotionalList.length == 0);
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.currencySym, "", transaction_r5.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r5.transaction_date ? transaction_r5.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", ctx_r0.changeDateFormat1(transaction_r5.expiry_date ? transaction_r5.expiry_date : ""), "");
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat1(transaction_r5.transaction_date ? transaction_r5.transaction_date : ""));
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "ion-row")(2, "ion-col", 35)(3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_6_Template, 2, 2, "p", 38)(7, WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_7_Template, 2, 2, "p", 39)(8, WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_8_Template, 2, 2, "p", 40)(9, WalletPage_ng_container_0_ion_content_5_div_6_div_1_p_9_Template, 2, 2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-row", 42)(11, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WalletPage_ng_container_0_ion_content_5_div_6_div_1_div_12_Template, 6, 2, "div", 44)(13, WalletPage_ng_container_0_ion_content_5_div_6_div_1_div_13_Template, 3, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 45)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const transaction_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "CREDIT" && transaction_r5.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.expiry_date != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r5.expiry_date == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Txn ID ", transaction_r5.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r5.txn_status);
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_0_ion_content_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_0_ion_content_5_div_6_div_1_Template, 20, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_0_ion_content_5_div_6_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.nonPromotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nonPromotional.length == 0);
  }
}
function WalletPage_ng_container_0_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 30)(1, "div")(2, "div", 31)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_0_ion_content_5_div_4_Template, 4, 2, "div", 4)(5, WalletPage_ng_container_0_ion_content_5_div_5_Template, 4, 2, "div", 4)(6, WalletPage_ng_container_0_ion_content_5_div_6_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isShowAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isShowPromotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isShowTransactional);
  }
}
function WalletPage_ng_container_0_div_6_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 61)(1, "ion-col", 35)(2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 58)(5, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "ion-row")(3, "ion-col", 53)(4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Price Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-col", 55)(7, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_0_div_6_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = !ctx_r0.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 35)(10, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Transactional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 58)(13, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WalletPage_ng_container_0_div_6_ion_row_15_Template, 7, 2, "ion-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 35)(18, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Total Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col", 58)(21, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
  }
}
function WalletPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_0_app_white_common_header_2_Template, 1, 0, "app-white-common-header", 6)(3, WalletPage_ng_container_0_app_white_common_header_3_Template, 1, 1, "app-white-common-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_0_div_4_Template, 30, 7, "div", 4)(5, WalletPage_ng_container_0_ion_content_5_Template, 7, 3, "ion-content", 8)(6, WalletPage_ng_container_0_div_6_Template, 23, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.iscalled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.iscalled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.balanceDiv);
  }
}
function WalletPage_ng_container_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r8.amount, "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r8.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r8.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r8.expiry_date);
  }
}
function WalletPage_ng_container_1_div_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_1_div_54_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 53)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 53)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_54_ng_container_1_span_19_Template, 2, 2, "span", 108)(20, WalletPage_ng_container_1_div_54_ng_container_1_span_20_Template, 2, 2, "span", 109)(21, WalletPage_ng_container_1_div_54_ng_container_1_span_21_Template, 2, 2, "span", 110)(22, WalletPage_ng_container_1_div_54_ng_container_1_span_22_Template, 2, 2, "span", 111)(23, WalletPage_ng_container_1_div_54_ng_container_1_p_23_Template, 2, 1, "p", 112)(24, WalletPage_ng_container_1_div_54_ng_container_1_p_24_Template, 2, 0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row", 113)(26, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-row", 115)(29, "ion-col", 116)(30, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-col", 118)(33, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_54_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "CREDIT" && transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r8.transaction_date ? transaction_r8.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r8.payment_transaction_type ? transaction_r8.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "CREDIT" && transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r8.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r8.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r8.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r8.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_54_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_54_ng_container_1_Template, 36, 17, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_54_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.transactions, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length == 0);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r9.amount, "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r9.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r9.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r9.expiry_date);
  }
}
function WalletPage_ng_container_1_div_55_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_1_div_55_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_55_ng_container_1_span_19_Template, 2, 2, "span", 108)(20, WalletPage_ng_container_1_div_55_ng_container_1_span_20_Template, 2, 2, "span", 109)(21, WalletPage_ng_container_1_div_55_ng_container_1_span_21_Template, 2, 2, "span", 110)(22, WalletPage_ng_container_1_div_55_ng_container_1_span_22_Template, 2, 2, "span", 111)(23, WalletPage_ng_container_1_div_55_ng_container_1_p_23_Template, 2, 1, "p", 112)(24, WalletPage_ng_container_1_div_55_ng_container_1_p_24_Template, 2, 0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row", 113)(26, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-row", 115)(29, "ion-col", 116)(30, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-col", 118)(33, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_55_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "CREDIT" && transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r9.transaction_date ? transaction_r9.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r9.payment_transaction_type ? transaction_r9.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "CREDIT" && transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r9.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r9.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r9.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r9.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_55_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_55_ng_container_1_Template, 36, 17, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_55_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.booking, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.booking.length == 0);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r10.amount, "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r10.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r10.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r10.expiry_date);
  }
}
function WalletPage_ng_container_1_div_56_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_1_div_56_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_56_ng_container_1_span_19_Template, 2, 2, "span", 108)(20, WalletPage_ng_container_1_div_56_ng_container_1_span_20_Template, 2, 2, "span", 109)(21, WalletPage_ng_container_1_div_56_ng_container_1_span_21_Template, 2, 2, "span", 110)(22, WalletPage_ng_container_1_div_56_ng_container_1_span_22_Template, 2, 2, "span", 111)(23, WalletPage_ng_container_1_div_56_ng_container_1_p_23_Template, 2, 1, "p", 112)(24, WalletPage_ng_container_1_div_56_ng_container_1_p_24_Template, 2, 0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row", 113)(26, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-row", 115)(29, "ion-col", 116)(30, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-col", 118)(33, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_56_ng_container_1_ion_row_35_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "CREDIT" && transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r10.transaction_date ? transaction_r10.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r10.payment_transaction_type ? transaction_r10.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "CREDIT" && transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r10.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r10.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r10.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r10.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_56_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_56_ng_container_1_Template, 36, 17, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_56_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cancellation, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cancellation.length == 0);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r11.amount, "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r11.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r11.transaction_type, " ");
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r11.expiry_date);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_19_Template, 2, 2, "span", 108)(20, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_20_Template, 2, 2, "span", 109)(21, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_21_Template, 2, 2, "span", 110)(22, WalletPage_ng_container_1_div_57_ng_container_1_div_1_span_22_Template, 2, 2, "span", 111)(23, WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_23_Template, 2, 1, "p", 112)(24, WalletPage_ng_container_1_div_57_ng_container_1_div_1_p_24_Template, 2, 0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row", 113)(26, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-row", 115)(29, "ion-col", 116)(30, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-col", 118)(33, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, WalletPage_ng_container_1_div_57_ng_container_1_div_1_ion_row_35_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transaction_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "CREDIT" && transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r11.transaction_date ? transaction_r11.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r11.payment_transaction_type ? transaction_r11.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "CREDIT" && transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r11.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r11.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r11.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.expiry_date != null);
  }
}
function WalletPage_ng_container_1_div_57_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_57_ng_container_1_div_1_Template, 36, 17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r11.payment_transaction_type == "Booking Cash Back" || transaction_r11.payment_transaction_type == "Refer and Earn" || transaction_r11.payment_transaction_type == "Birthday Cashback" || transaction_r11.payment_transaction_type == "Wallet Recharge" || transaction_r11.payment_transaction_type == "Validity Configurations" || transaction_r11.payment_transaction_type == "New Customer Registration");
  }
}
function WalletPage_ng_container_1_div_57_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_1_div_57_ng_container_1_Template, 2, 1, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_1_div_57_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cashback, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cashback.length == 0);
  }
}
function WalletPage_ng_container_1_div_58_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_58_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional Balance is the reward you received from Different Promotional Activities such as referrals and cashback programs. you can use this amount with the limitations (Conditions apply) in a single transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_1_div_58_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 133)(2, "h5", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Non Promotional Balance is the money you received as a refund or Recharge done by you, This Money can be used in any Single transaction at the time of booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_1_div_58_h5_6_Template, 2, 0, "h5", 135)(7, WalletPage_ng_container_1_div_58_p_7_Template, 2, 0, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
  }
}
function WalletPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 62)(3, "ion-buttons", 63)(4, "ion-back-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 66)(8, "div", 67)(9, "div")(10, "div", 68)(11, "ion-row", 14)(12, "ion-col", 69)(13, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Total wallet balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-col", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 75)(25, "ion-item", 76)(26, "ion-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_1_Template_ion_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.enteramount, $event) || (ctx_r0.enteramount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 75)(29, "ion-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_1_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 79)(32, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, WalletPage_ng_container_1_span_33_Template, 4, 2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Non-Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 84)(39, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_1_Template_ion_icon_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 86)(41, "ion-segment", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_1_Template_ion_segment_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function WalletPage_ng_container_1_Template_ion_segment_ionChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-segment-button", 88)(43, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-segment-button", 90)(46, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ion-segment-button", 91)(49, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ion-segment-button", 92)(52, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, WalletPage_ng_container_1_div_54_Template, 4, 6, "div", 4)(55, WalletPage_ng_container_1_div_55_Template, 4, 6, "div", 4)(56, WalletPage_ng_container_1_div_56_Template, 4, 6, "div", 4)(57, WalletPage_ng_container_1_div_57_Template, 4, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, WalletPage_ng_container_1_div_58_Template, 8, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.enteramount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.trackBusModal);
  }
}
function WalletPage_ng_container_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 158)(1, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_2_ng_container_44_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function WalletPage_ng_container_2_ng_container_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_44_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const sbWalletTxn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", sbWalletTxn_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, transaction_r14));
  }
}
function WalletPage_ng_container_2_ng_container_44_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_44_ng_container_1_Template, 2, 4, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_2_ng_container_44_p_3_Template, 2, 0, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.transactions, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length == 0);
  }
}
function WalletPage_ng_container_2_ng_container_45_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function WalletPage_ng_container_2_ng_container_45_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_45_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const sbWalletTxn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", sbWalletTxn_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, transaction_r16));
  }
}
function WalletPage_ng_container_2_ng_container_45_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_45_ng_container_1_Template, 2, 4, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_2_ng_container_45_p_3_Template, 2, 0, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.booking, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.booking.length == 0);
  }
}
function WalletPage_ng_container_2_ng_container_46_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function WalletPage_ng_container_2_ng_container_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_46_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const sbWalletTxn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", sbWalletTxn_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, transaction_r17));
  }
}
function WalletPage_ng_container_2_ng_container_46_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_46_ng_container_1_Template, 2, 4, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_2_ng_container_46_p_3_Template, 2, 0, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cancellation, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cancellation.length == 0);
  }
}
function WalletPage_ng_container_2_ng_container_47_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function WalletPage_ng_container_2_ng_container_47_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_47_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const sbWalletTxn_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", sbWalletTxn_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, transaction_r18));
  }
}
function WalletPage_ng_container_2_ng_container_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_47_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r18.payment_transaction_type == "Booking Cash Back" || transaction_r18.payment_transaction_type == "Refer and Earn" || transaction_r18.payment_transaction_type == "Birthday Cashback" || transaction_r18.payment_transaction_type == "Wallet Recharge" || transaction_r18.payment_transaction_type == "Validity Configurations" || transaction_r18.payment_transaction_type == "New Customer Registration");
  }
}
function WalletPage_ng_container_2_ng_container_47_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_2_ng_container_47_ng_container_1_Template, 2, 1, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_2_ng_container_47_p_3_Template, 2, 0, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cashback, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cashback.length == 0);
  }
}
function WalletPage_ng_container_2_ng_template_48_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 191);
  }
}
function WalletPage_ng_container_2_ng_template_48_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 192);
  }
}
function WalletPage_ng_container_2_ng_template_48_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 193);
  }
}
function WalletPage_ng_container_2_ng_template_48_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 194);
  }
}
function WalletPage_ng_container_2_ng_template_48_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r19.amount, "");
  }
}
function WalletPage_ng_container_2_ng_template_48_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r19.amount, "");
  }
}
function WalletPage_ng_container_2_ng_template_48_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r19.amount, "");
  }
}
function WalletPage_ng_container_2_ng_template_48_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r19.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_2_ng_template_48_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-wallet-pill--credit", transaction_r19.transaction_type == "CREDIT")("sb-wallet-pill--debit", transaction_r19.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r19.transaction_type);
  }
}
function WalletPage_ng_container_2_ng_template_48_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_ng_template_48_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 201)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Expiry Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transaction_r19.expiry_date, "");
  }
}
function WalletPage_ng_container_2_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 169)(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_2_ng_template_48_img_2_Template, 1, 0, "img", 171)(3, WalletPage_ng_container_2_ng_template_48_img_3_Template, 1, 0, "img", 172)(4, WalletPage_ng_container_2_ng_template_48_img_4_Template, 1, 0, "img", 173)(5, WalletPage_ng_container_2_ng_template_48_img_5_Template, 1, 0, "img", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 175)(7, "div", 176)(8, "div", 177)(9, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WalletPage_ng_container_2_ng_template_48_span_14_Template, 2, 2, "span", 181)(15, WalletPage_ng_container_2_ng_template_48_span_15_Template, 2, 2, "span", 182)(16, WalletPage_ng_container_2_ng_template_48_span_16_Template, 2, 2, "span", 183)(17, WalletPage_ng_container_2_ng_template_48_span_17_Template, 2, 2, "span", 184)(18, WalletPage_ng_container_2_ng_template_48_span_18_Template, 2, 5, "span", 185)(19, WalletPage_ng_container_2_ng_template_48_span_19_Template, 2, 0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 188)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, WalletPage_ng_container_2_ng_template_48_p_27_Template, 4, 1, "p", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r19 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "CREDIT" && transaction_r19.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r19.transaction_date ? transaction_r19.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r19.payment_transaction_type ? transaction_r19.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "CREDIT" && transaction_r19.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Description: ", transaction_r19.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number: ", transaction_r19.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r19.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r19.expiry_date != null);
  }
}
function WalletPage_ng_container_2_div_50_h3_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_div_50_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional Balance is the reward you received from Different Promotional Activities such as referrals and cashback programs. you can use this amount with the limitations (Conditions apply) in a single transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_50_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_50_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 204)(3, "h2", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Wallet balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_50_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Non Promotional Balance is the money you received as a refund or Recharge done by you, This Money can be used in any Single transaction at the time of booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WalletPage_ng_container_2_div_50_h3_11_Template, 2, 0, "h3", 210)(12, WalletPage_ng_container_2_div_50_p_12_Template, 2, 0, "p", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
  }
}
function WalletPage_ng_container_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_51_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.sbCloseResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_51_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 213)(3, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_51_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.sbCloseResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 217)(10, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_div_51_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.sbCloseResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "View Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-wallet-result--fail", !ctx_r0.sbResult.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r0.sbResult.success ? "checkmark-circle-outline" : "alert-circle-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.sbResult.msg);
  }
}
function WalletPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 137)(2, "ion-toolbar", 138)(3, "div", 139)(4, "ion-back-button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 142)(8, "div", 143)(9, "section", 144)(10, "div", 145)(11, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total wallet balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "section", 149)(17, "div", 150)(18, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Enter amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 152)(21, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_2_Template_ion_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.enteramount, $event) || (ctx_r0.enteramount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "section", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, WalletPage_ng_container_2_div_27_Template, 5, 2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 158)(29, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-icon", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 163)(36, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "all");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "booking");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "cancellation");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_2_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "cashback");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, WalletPage_ng_container_2_ng_container_44_Template, 4, 6, "ng-container", 4)(45, WalletPage_ng_container_2_ng_container_45_Template, 4, 6, "ng-container", 4)(46, WalletPage_ng_container_2_ng_container_46_Template, 4, 6, "ng-container", 4)(47, WalletPage_ng_container_2_ng_container_47_Template, 4, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, WalletPage_ng_container_2_ng_template_48_Template, 28, 17, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(50, WalletPage_ng_container_2_div_50_Template, 13, 2, "div", 165)(51, WalletPage_ng_container_2_div_51_Template, 12, 4, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.enteramount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sbResult);
  }
}
function WalletPage_ng_container_3_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 247)(1, "ion-col", 238)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 238)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 238)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 248)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Particular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function WalletPage_ng_container_3_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 253)(1, "ion-icon", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_div_26_div_2_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const scrollableDiv_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.scrollToBottom(scrollableDiv_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", transaction_r26.amount, "");
  }
}
function WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" -", ctx_r0.currencySym, "", transaction_r26.amount, "");
  }
}
function WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r26.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_3_div_26_ion_row_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 257)(1, "ion-col", 258)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_6_Template, 2, 2, "p", 259)(7, WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_7_Template, 2, 2, "p", 260)(8, WalletPage_ng_container_3_div_26_ion_row_3_div_1_p_8_Template, 2, 2, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-col", 258)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 248)(13, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, transaction_r26.transaction_date, "dd/MM/yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "CREDIT" && transaction_r26.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r26.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r26.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", transaction_r26.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r26.payment_transaction_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r26.description);
  }
}
function WalletPage_ng_container_3_div_26_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_3_div_26_ion_row_3_div_1_Template, 17, 11, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r26.txn_status != "Pending");
  }
}
function WalletPage_ng_container_3_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 264)(1, "ion-icon", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_div_26_div_4_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const scrollableDiv_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.scrollToTop(scrollableDiv_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 249, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function WalletPage_ng_container_3_div_26_Template_div_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const scrollableDiv_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onScroll(scrollableDiv_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_3_div_26_div_2_Template, 2, 0, "div", 250)(3, WalletPage_ng_container_3_div_26_ion_row_3_Template, 2, 1, "ion-row", 251)(4, WalletPage_ng_container_3_div_26_div_4_Template, 2, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isAtBottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isAtTop);
  }
}
function WalletPage_ng_container_3_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 266)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No transactions yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WalletPage_ng_container_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 270)(1, "ion-accordion-group", 271, 2)(3, "ion-accordion", 271, 3)(5, "ion-item", 272)(6, "ion-label", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const catQue_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r29 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", catQue_r28.question, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", catQue_r28.answer, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function WalletPage_ng_container_3_div_62_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 61)(1, "ion-col", 35)(2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 58)(5, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "ion-row")(3, "ion-col", 53)(4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Price Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-col", 55)(7, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_div_62_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = !ctx_r0.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 35)(10, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Transactional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 58)(13, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WalletPage_ng_container_3_div_62_ion_row_15_Template, 7, 2, "ion-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 35)(18, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Total Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col", 58)(21, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
  }
}
function WalletPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 219)(2, "ion-toolbar", 220)(3, "ion-row")(4, "ion-col", 221)(5, "ion-buttons")(6, "ion-back-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 222)(8, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "OurBus wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 224)(11, "ion-icon", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_icon_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 226)(13, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Wallet Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-icon", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_3_Template_ion_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = !ctx_r0.balanceDiv);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-content", 219)(19, "ion-refresher", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function WalletPage_ng_container_3_Template_ion_refresher_ionRefresh_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.doRefresh($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-refresher-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div")(22, "ion-card", 231)(23, "p", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, WalletPage_ng_container_3_ion_row_25_Template, 13, 0, "ion-row", 233)(26, WalletPage_ng_container_3_div_26_Template, 5, 3, "div", 234)(27, WalletPage_ng_container_3_div_27_Template, 5, 0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-card", 236)(29, "p", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Wallet Benefits");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-row", 237)(32, "ion-col", 238)(33, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-icon", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-col", 241)(36, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Quick and efficient");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "The ticket value will be credited to your OurBus Wallet instantly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-row", 237)(41, "ion-col", 238)(42, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "ion-icon", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ion-col", 241)(45, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Transform credits into tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Use your credits to book another ticket on OurBus right away!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "ion-row", 237)(50, "ion-col", 238)(51, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "ion-icon", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "ion-col", 241)(54, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Yours forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "OurBus Wallet credits do not expire, and are valid for all purchases on OurBus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ion-card", 236)(59, "p", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, WalletPage_ng_container_3_div_61_Template, 11, 3, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, WalletPage_ng_container_3_div_62_Template, 23, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.faqData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.balanceDiv);
  }
}
function WalletPage_ng_container_4_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.amount);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.amount);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.amount);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.amount.toFixed(2));
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r32.transaction_type, " ");
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.expiry_date);
  }
}
function WalletPage_ng_container_4_div_45_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_4_div_45_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_4_div_45_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_4_div_45_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_4_div_45_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 53)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 53)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, WalletPage_ng_container_4_div_45_ng_container_1_span_20_Template, 2, 1, "span", 289)(21, WalletPage_ng_container_4_div_45_ng_container_1_span_21_Template, 2, 1, "span", 290)(22, WalletPage_ng_container_4_div_45_ng_container_1_span_22_Template, 2, 1, "span", 291)(23, WalletPage_ng_container_4_div_45_ng_container_1_span_23_Template, 2, 1, "span", 292)(24, WalletPage_ng_container_4_div_45_ng_container_1_p_24_Template, 2, 1, "p", 293)(25, WalletPage_ng_container_4_div_45_ng_container_1_p_25_Template, 2, 0, "p", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row", 113)(27, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-row", 115)(30, "ion-col", 116)(31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 118)(34, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, WalletPage_ng_container_4_div_45_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r32 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "CREDIT" && transaction_r32.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r32.transaction_date ? transaction_r32.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r32.payment_transaction_type ? transaction_r32.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "CREDIT" && transaction_r32.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r32.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r32.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r32.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r32.expiry_date != null);
  }
}
function WalletPage_ng_container_4_div_45_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_4_div_45_ng_container_1_Template, 37, 18, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_4_div_45_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.transactions, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length == 0);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.amount);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.amount);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.amount);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.amount.toFixed(2));
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r33.transaction_type, " ");
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.expiry_date);
  }
}
function WalletPage_ng_container_4_div_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_4_div_46_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_4_div_46_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_4_div_46_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_4_div_46_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, WalletPage_ng_container_4_div_46_ng_container_1_span_20_Template, 2, 1, "span", 299)(21, WalletPage_ng_container_4_div_46_ng_container_1_span_21_Template, 2, 1, "span", 300)(22, WalletPage_ng_container_4_div_46_ng_container_1_span_22_Template, 2, 1, "span", 301)(23, WalletPage_ng_container_4_div_46_ng_container_1_span_23_Template, 2, 1, "span", 302)(24, WalletPage_ng_container_4_div_46_ng_container_1_p_24_Template, 2, 1, "p", 293)(25, WalletPage_ng_container_4_div_46_ng_container_1_p_25_Template, 2, 0, "p", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row", 113)(27, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-row", 115)(30, "ion-col", 116)(31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 118)(34, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, WalletPage_ng_container_4_div_46_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r33 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "CREDIT" && transaction_r33.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r33.transaction_date ? transaction_r33.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r33.payment_transaction_type ? transaction_r33.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "CREDIT" && transaction_r33.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r33.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r33.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r33.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r33.expiry_date != null);
  }
}
function WalletPage_ng_container_4_div_46_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_4_div_46_ng_container_1_Template, 37, 18, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_4_div_46_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.booking, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.booking.length == 0);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.amount);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.amount);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.amount);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.amount.toFixed(2));
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r34.transaction_type, " ");
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.expiry_date);
  }
}
function WalletPage_ng_container_4_div_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_4_div_47_ng_container_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_4_div_47_ng_container_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_4_div_47_ng_container_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_4_div_47_ng_container_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, WalletPage_ng_container_4_div_47_ng_container_1_span_20_Template, 2, 1, "span", 289)(21, WalletPage_ng_container_4_div_47_ng_container_1_span_21_Template, 2, 1, "span", 290)(22, WalletPage_ng_container_4_div_47_ng_container_1_span_22_Template, 2, 1, "span", 291)(23, WalletPage_ng_container_4_div_47_ng_container_1_span_23_Template, 2, 1, "span", 292)(24, WalletPage_ng_container_4_div_47_ng_container_1_p_24_Template, 2, 1, "p", 293)(25, WalletPage_ng_container_4_div_47_ng_container_1_p_25_Template, 2, 0, "p", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row", 113)(27, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-row", 115)(30, "ion-col", 116)(31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 118)(34, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, WalletPage_ng_container_4_div_47_ng_container_1_ion_row_36_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r34 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "CREDIT" && transaction_r34.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r34.transaction_date ? transaction_r34.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r34.payment_transaction_type ? transaction_r34.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "CREDIT" && transaction_r34.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r34.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r34.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r34.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r34.expiry_date != null);
  }
}
function WalletPage_ng_container_4_div_47_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_4_div_47_ng_container_1_Template, 37, 18, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_4_div_47_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cancellation, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cancellation.length == 0);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 120);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 121);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 122);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 123);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.amount);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.amount);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.amount);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.amount.toFixed(2));
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transaction_r35.transaction_type, " ");
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 113)(1, "ion-col", 14)(2, "p", 129)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Expiry Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.expiry_date);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div")(2, "ion-row", 96)(3, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_4_Template, 1, 0, "ion-img", 98)(5, WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_5_Template, 1, 0, "ion-img", 99)(6, WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_6_Template, 1, 0, "ion-img", 100)(7, WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_img_7_Template, 1, 0, "ion-img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 102)(9, "ion-row", 103)(10, "ion-col")(11, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-row", 105)(14, "ion-col", 130)(15, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 131)(18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_20_Template, 2, 1, "span", 289)(21, WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_21_Template, 2, 1, "span", 290)(22, WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_22_Template, 2, 1, "span", 291)(23, WalletPage_ng_container_4_div_48_ng_container_1_div_1_span_23_Template, 2, 1, "span", 292)(24, WalletPage_ng_container_4_div_48_ng_container_1_div_1_p_24_Template, 2, 1, "p", 293)(25, WalletPage_ng_container_4_div_48_ng_container_1_div_1_p_25_Template, 2, 0, "p", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row", 113)(27, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-row", 115)(30, "ion-col", 116)(31, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 118)(34, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, WalletPage_ng_container_4_div_48_ng_container_1_div_1_ion_row_36_Template, 6, 1, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transaction_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "CREDIT" && transaction_r35.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.changeDateFormat(transaction_r35.transaction_date ? transaction_r35.transaction_date : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r35.payment_transaction_type ? transaction_r35.payment_transaction_type : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "CREDIT" && transaction_r35.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.transaction_type == "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.txn_status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.txn_status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Description:", transaction_r35.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Transaction Number:", transaction_r35.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Bal: ", ctx_r0.currencySym, "", transaction_r35.balance_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.expiry_date != null);
  }
}
function WalletPage_ng_container_4_div_48_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_4_div_48_ng_container_1_div_1_Template, 37, 18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transaction_r35.payment_transaction_type == "Booking Cash Back" || transaction_r35.payment_transaction_type == "Refer and Earn" || transaction_r35.payment_transaction_type == "Birthday Cashback" || transaction_r35.payment_transaction_type == "Wallet Recharge" || transaction_r35.payment_transaction_type == "Validity Configurations" || transaction_r35.payment_transaction_type == "New Customer Registration");
  }
}
function WalletPage_ng_container_4_div_48_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Booking Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_4_div_48_ng_container_1_Template, 2, 1, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WalletPage_ng_container_4_div_48_span_3_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, ctx_r0.cashback, "transaction_number", ctx_r0.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cashback.length == 0);
  }
}
function WalletPage_ng_container_4_div_49_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_49_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Promotional Balance is the reward you received from Different Promotional Activities such as referrals and cashback programs. you can use this amount with the limitations (Conditions apply) in a single transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_4_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_4_div_49_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 133)(2, "h5", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Non Promotional Balance is the money you received as a refund or Recharge done by you, This Money can be used in any Single transaction at the time of booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_4_div_49_h5_6_Template, 2, 0, "h5", 135)(7, WalletPage_ng_container_4_div_49_p_7_Template, 2, 0, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
  }
}
function WalletPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 62)(3, "ion-buttons", 63)(4, "ion-button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_4_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-back-button", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content")(9, "div", 67)(10, "div")(11, "ion-row", 279)(12, "ion-col")(13, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Total Wallet Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-col", 281)(18, "ion-button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_4_Template_ion_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 283)(21, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, WalletPage_ng_container_4_span_22_Template, 4, 2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Non-Promotional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 285)(28, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_4_Template_ion_icon_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.trackBusModal = !ctx_r0.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 286)(30, "ion-row")(31, "ion-searchbar", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInput", function WalletPage_ng_container_4_Template_ion_searchbar_ionInput_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.searchCities($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-segment", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_4_Template_ion_segment_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function WalletPage_ng_container_4_Template_ion_segment_ionChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-segment-button", 88)(34, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ion-segment-button", 90)(37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ion-segment-button", 91)(40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-segment-button", 92)(43, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, WalletPage_ng_container_4_div_45_Template, 4, 6, "div", 4)(46, WalletPage_ng_container_4_div_46_Template, 4, 6, "div", 4)(47, WalletPage_ng_container_4_div_47_Template, 4, 6, "div", 4)(48, WalletPage_ng_container_4_div_48_Template, 4, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, WalletPage_ng_container_4_div_49_Template, 8, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "cashback");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.trackBusModal);
  }
}
function WalletPage_ng_container_5_div_34_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_34_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_34_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", t_r38.expiry_date ? ctx_r0.formatDate(t_r38.expiry_date) : "N/A", "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", t_r38.amount, "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r38.amount, "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r38.amount, "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r38.amount, "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r38.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_5_div_34_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_5_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 331)(1, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_5_div_34_div_1_ng_container_2_Template, 2, 0, "ng-container", 4)(3, WalletPage_ng_container_5_div_34_div_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, WalletPage_ng_container_5_div_34_div_1_ng_container_4_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 333)(6, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WalletPage_ng_container_5_div_34_div_1_span_10_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WalletPage_ng_container_5_div_34_div_1_span_13_Template, 2, 2, "span", 4)(14, WalletPage_ng_container_5_div_34_div_1_span_14_Template, 2, 2, "span", 337)(15, WalletPage_ng_container_5_div_34_div_1_span_15_Template, 2, 2, "span", 4)(16, WalletPage_ng_container_5_div_34_div_1_span_16_Template, 2, 2, "span", 4)(17, WalletPage_ng_container_5_div_34_div_1_span_17_Template, 2, 2, "span", 4)(18, WalletPage_ng_container_5_div_34_div_1_div_18_Template, 2, 0, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c6, ctx_r0.transactions.length - 1 != i_r39 ? "1px solid #DADEE3" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "CREDIT" && t_r38.txn_status !== "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "DEBIT" || t_r38.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.txn_status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r38.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.formatDate(t_r38.transaction_date), " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Txn ID ", t_r38.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](17, _c7, t_r38.transaction_type === "CREDIT" && t_r38.txn_status !== "Pending", t_r38.transaction_type === "DEBIT", t_r38.txn_status === "Pending", t_r38.transaction_type === "EXPIRE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "CREDIT" && t_r38.txn_status !== "Pending" && t_r38.txn_status != "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "CREDIT" && t_r38.txn_status == "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.txn_status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r38.txn_status === "Pending");
  }
}
function WalletPage_ng_container_5_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No transactions yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_5_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_5_div_34_div_1_Template, 19, 22, "div", 329)(2, WalletPage_ng_container_5_div_34_div_2_Template, 2, 0, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.transactions.length === 0);
  }
}
function WalletPage_ng_container_5_div_35_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_35_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_35_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", t_r40.expiry_date ? ctx_r0.formatDate(t_r40.expiry_date) : "N/A", "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", t_r40.amount, "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r40.amount, "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r40.amount, "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r40.amount, "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r40.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_5_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 331)(1, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_5_div_35_div_1_ng_container_2_Template, 2, 0, "ng-container", 4)(3, WalletPage_ng_container_5_div_35_div_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, WalletPage_ng_container_5_div_35_div_1_ng_container_4_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 333)(6, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WalletPage_ng_container_5_div_35_div_1_span_10_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WalletPage_ng_container_5_div_35_div_1_span_13_Template, 2, 2, "span", 4)(14, WalletPage_ng_container_5_div_35_div_1_span_14_Template, 2, 2, "span", 337)(15, WalletPage_ng_container_5_div_35_div_1_span_15_Template, 2, 2, "span", 4)(16, WalletPage_ng_container_5_div_35_div_1_span_16_Template, 2, 2, "span", 4)(17, WalletPage_ng_container_5_div_35_div_1_span_17_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c6, ctx_r0.promotionalList.length - 1 != i_r41 ? "1px solid #DADEE3" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "CREDIT" && t_r40.txn_status !== "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "DEBIT" || t_r40.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.txn_status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r40.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.formatDate(t_r40.transaction_date), " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Txn ID ", t_r40.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](16, _c7, t_r40.transaction_type === "CREDIT" && t_r40.txn_status !== "Pending", t_r40.transaction_type === "DEBIT", t_r40.txn_status === "Pending", t_r40.transaction_type === "EXPIRE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "CREDIT" && t_r40.txn_status !== "Pending" && t_r40.txn_status != "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "CREDIT" && t_r40.txn_status == "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r40.txn_status === "Pending");
  }
}
function WalletPage_ng_container_5_div_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No promotional transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_5_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_5_div_35_div_1_Template, 18, 21, "div", 329)(2, WalletPage_ng_container_5_div_35_div_2_Template, 2, 0, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.promotionalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.promotionalList.length === 0);
  }
}
function WalletPage_ng_container_5_div_36_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_36_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_36_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Expiring on ", t_r42.expiry_date ? ctx_r0.formatDate(t_r42.expiry_date) : "N/A", "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+", ctx_r0.currencySym, "", t_r42.amount, "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r42.amount, "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r42.amount, "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("-", ctx_r0.currencySym, "", t_r42.amount, "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", t_r42.amount.toFixed(2), "");
  }
}
function WalletPage_ng_container_5_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 331)(1, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WalletPage_ng_container_5_div_36_div_1_ng_container_2_Template, 2, 0, "ng-container", 4)(3, WalletPage_ng_container_5_div_36_div_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, WalletPage_ng_container_5_div_36_div_1_ng_container_4_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 333)(6, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WalletPage_ng_container_5_div_36_div_1_span_10_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, WalletPage_ng_container_5_div_36_div_1_span_13_Template, 2, 2, "span", 4)(14, WalletPage_ng_container_5_div_36_div_1_span_14_Template, 2, 2, "span", 337)(15, WalletPage_ng_container_5_div_36_div_1_span_15_Template, 2, 2, "span", 4)(16, WalletPage_ng_container_5_div_36_div_1_span_16_Template, 2, 2, "span", 4)(17, WalletPage_ng_container_5_div_36_div_1_span_17_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c6, ctx_r0.nonPromotional.length - 1 != i_r43 ? "1px solid #DADEE3" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "CREDIT" && t_r42.txn_status !== "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "DEBIT" || t_r42.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.txn_status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r42.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.formatDate(t_r42.transaction_date), " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Txn ID ", t_r42.transaction_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](16, _c7, t_r42.transaction_type === "CREDIT" && t_r42.txn_status !== "Pending", t_r42.transaction_type === "DEBIT", t_r42.txn_status === "Pending", t_r42.transaction_type === "EXPIRE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "CREDIT" && t_r42.txn_status !== "Pending" && t_r42.txn_status != "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "CREDIT" && t_r42.txn_status == "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.transaction_type === "EXPIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r42.txn_status === "Pending");
  }
}
function WalletPage_ng_container_5_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No other transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WalletPage_ng_container_5_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WalletPage_ng_container_5_div_36_div_1_Template, 18, 21, "div", 329)(2, WalletPage_ng_container_5_div_36_div_2_Template, 2, 0, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.nonPromotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nonPromotional.length === 0);
  }
}
function WalletPage_ng_container_5_div_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 351)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.promobalance, "");
  }
}
function WalletPage_ng_container_5_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_div_37_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_div_37_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 347)(3, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Wallet Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-icon", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_div_37_Template_ion_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.balanceDiv = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WalletPage_ng_container_5_div_37_div_6_Template, 5, 2, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 351)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Transactional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 352)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.nonpromobalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
  }
}
function WalletPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 303)(2, "ion-toolbar", 304)(3, "ion-buttons", 305)(4, "ion-back-button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Shyamoli Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 308)(8, "div", 309)(9, "div", 310)(10, "div", 311)(11, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Available Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.addMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 315)(18, "div", 316)(19, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 318)(21, "img", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Include smart miles balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-toggle", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WalletPage_ng_container_5_Template_ion_toggle_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.smartMiles, $event) || (ctx_r0.smartMiles = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h3", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 323)(28, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_Template_div_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "all");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_Template_div_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "promotional");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WalletPage_ng_container_5_Template_div_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.segment = "others");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Non-Promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, WalletPage_ng_container_5_div_34_Template, 3, 2, "div", 326)(35, WalletPage_ng_container_5_div_35_Template, 3, 2, "div", 326)(36, WalletPage_ng_container_5_div_36_Template, 3, 2, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, WalletPage_ng_container_5_div_37_Template, 17, 5, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currencySym, "", ctx_r0.walletbalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.smartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.segment === "promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r0.segment === "others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "promotional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.segment === "others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.balanceDiv);
  }
}
class WalletPage {
  logActiveIndex() {}
  constructor(navCtrl, commonStorage, theme, apiFactory, loader, commonService, modalController, util, dateService, alertController, authenticate, appData, firebaseAnalyticsService, router) {
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
    this.router = router;
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
    // seabirdThemeNew: Add Money result dialog (other themes keep util.showAlertSuccess())
    this.sbResult = null;
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
    this.smartMiles = false;
    this.isAtBottom = false;
    this.isIos = false;
    this.headerText = '';
    this.walletText = '';
    this.iscalled = false;
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present();
    })();
  }
  defaultCall() {
    var _this$commonStorage$g;
    this.loader.showLoadingDefault();
    this.metaData = this.commonStorage.getItem('metaData');
    this.currencySym = (_this$commonStorage$g = this.commonStorage.getItem('metaData')) === null || _this$commonStorage$g === void 0 ? void 0 : _this$commonStorage$g.currencySym;
    const travelsName = this.commonStorage.getItem("metaData").travels_name;
    if (travelsName && travelsName != undefined && travelsName != null && travelsName != '') {
      this.headerText = travelsName + " Wallet";
      this.walletText = travelsName + " Wallet Balance";
    } else {
      this.headerText = "Wallet";
      this.walletText = "Wallet Balance";
    }
    this.apiFactory.getWalletBalance().subscribe(res => {
      this.iscalled = true;
      this.loader.hideLoadingDefault();
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
      this.iscalled = true;
      this.loader.hideLoadingDefault();
    });
    this.loader.hideLoadingDefault();
  }
  wallettransactions() {
    // this.loader.showLoadingDefault();
    this.apiFactory.getWalletTransactions().subscribe(res => {
      if (res.success) {
        this.loader.hideLoadingDefault();
        this.transactions = this.sortThis(res.body.customer_account_transactions, 'created_at');
        this.booking = [];
        this.cancellation = [];
        this.cashback = [];
        this.transactions.forEach(value => {
          const isDuplicate = (arr, item) => arr.some(x => x.transaction_number === item.transaction_number);
          if (value['payment_transaction_type'] == 'Booking') {
            if (!isDuplicate(this.booking, value)) {
              this.booking.push(value);
            }
          }
          if (value['payment_transaction_type'] == 'Cancellation') {
            if (!isDuplicate(this.cancellation, value)) {
              this.cancellation.push(value);
            }
          }
          if (value['wallet_type'] == 'NON_PROMOTIONAL' || value['wallet_type'] == 'Nonpromotional') {
            if (!isDuplicate(this.nonPromotional, value)) {
              this.nonPromotional.push(value);
            }
          }
          if (value['wallet_type'] == 'PROMOTIONAL' || value['wallet_type'] == 'Promotional') {
            if (!isDuplicate(this.promotionalList, value)) {
              this.promotionalList.push(value);
            }
          }
          if (value['payment_transaction_type'] == 'Booking Cash Back' || value['payment_transaction_type'] == 'Refer and Earn' || value['payment_transaction_type'] == 'Birthday Cashback' || value['payment_transaction_type'] == 'Wallet Recharge' || value['payment_transaction_type'] == 'Validity Configurations' || value['payment_transaction_type'] == 'New Customer Registration') {
            if (!isDuplicate(this.cashback, value)) {
              this.cashback.push(value);
            }
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
      // this.loader.hideLoadingDefault()
    }, err => {
      this.loader.hideLoadingDefault();
    });
    // this.loader.hideLoadingDefault();
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
            _this4.sbResultOrAlert(true, "Money Added to wallet successfully!");
          } else {
            // this.util.showAlert('FAILURE', "Transaction failed");
            _this4.sbResultOrAlert(false, "Transaction failed");
            _this4.defaultCall();
          }
        } else {
          _this4.defaultCall();
        }
        return Promise.resolve(); // Ensure the function always returns
      } catch (error) {
        console.error('Error in addMoney:', error);
        return Promise.reject(error); // Return a rejected Promise in case of an error
      }
    })();
  }
  // seabirdThemeNew shows the custom result dialog; every other theme keeps the existing util.showAlertSuccess(msg)
  sbResultOrAlert(success, msg) {
    var _this$metaData;
    if (((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'seabirdThemeNew') {
      this.sbResult = {
        success,
        msg
      };
      return;
    }
    this.util.showAlertSuccess(msg);
  }
  // "View Wallet" / close / backdrop: closes the dialog (the wallet is already reloaded by addMoney(), as with the alert)
  sbCloseResult() {
    this.sbResult = null;
  }
  addMoney1() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    // prefer explicit previousUrl passed via navigation state (HomePage sets it)
    const prev = window && window.history && window.history.state ? window.history.state.previousUrl : null;
    if (prev) {
      // navigate back to the previous URL if available
      this.router.navigateByUrl(prev);
    } else {
      // default: go to More page
      this.navCtrl.navigateBack('tabs/more');
    }
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
  formatDate(d) {
    const date = new Date(d);
    const day = date.getDate();
    const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    const options = {
      month: 'short',
      year: 'numeric'
    };
    const formatted = date.toLocaleDateString('en-US', options);
    return `${day}${suffix} ${formatted}`;
  }
}
_WalletPage = WalletPage;
_WalletPage.ɵfac = function WalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_6__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_8__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_9__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_11__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_12__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_13__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_14__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_15__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
};
_WalletPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _WalletPage,
  selectors: [["app-wallet"]],
  viewQuery: function WalletPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollableDiv = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    }
  },
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["sbWalletTxn", ""], ["scrollableDiv", ""], ["accordionGroup", ""], ["accordionItem", ""], [4, "ngIf"], [1, "theme1", 3, "ngStyle"], ["title", "Chartered Wallet", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false", 4, "ngIf"], ["subtitle", "", "showsubTxt", "true", "showsubtitle", "false", 3, "title", 4, "ngIf"], ["class", "theme1", "style", "--background:#fff;", 4, "ngIf"], ["class", "whole center theme1", 4, "ngIf"], ["title", "Chartered Wallet", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["subtitle", "", "showsubTxt", "true", "showsubtitle", "false", 3, "title"], [1, "theme1", 2, "background", "#F3F3F7", "box-shadow", "none", "margin", "0px 22px 20px 22px", "padding", "15px 20px 20px 20px"], ["class", "heading", 4, "ngIf"], [2, "display", "flex", "align-items", "center"], ["size", "6", 1, "fare", 2, "padding-top", "7px", "padding-left", "0px"], ["size", "6", 1, "breakUpView", 2, "padding-top", "7px", "padding-right", "0px"], [2, "text-align", "right", "font-size", "14px", "font-weight", "600", "line-height", "22px", 3, "click"], [2, "padding-top", "13px"], ["size", "12", 2, "padding", "0px"], [1, "addMoneyBtn", 3, "click"], [2, "border", "3px solid #EFEFEF", "height", "0px"], [1, "theme1", 2, "margin", "20px 22px 1px 22px"], [1, "history"], [1, "transaction_segment"], ["size", "2", 3, "click"], [3, "ngClass"], ["size", "4", 3, "click"], ["size", "6", 2, "padding-left", "5px", 3, "click"], [1, "heading"], [1, "theme1", 2, "--background", "#fff"], [2, "margin", "17px"], ["style", "margin: 10px 0px;", 4, "ngFor", "ngForOf"], ["class", "msg", 4, "ngIf"], [2, "margin", "10px 0px"], ["size", "8"], [1, "walletList"], ["size", "4"], ["style", "color: #3BAD69;", "class", "points", 4, "ngIf"], ["style", "color: #e91e63;", "class", "points", 4, "ngIf"], ["style", "color: #333", "class", "points", 4, "ngIf"], ["style", "color: #ff9c00;", "class", "points", 4, "ngIf"], [2, "border-bottom", "1px solid #DADEE3", "padding-bottom", "10px"], ["size", "10", 2, "padding-top", "0px"], ["class", "msgList", 4, "ngIf"], [1, "msgList"], [1, "points", 2, "color", "#3BAD69"], [1, "points", 2, "color", "#e91e63"], [1, "points", 2, "color", "#333"], [1, "points", 2, "color", "#ff9c00"], [1, "msg"], [1, "whole", "center", "theme1"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "border-top-left-radius", "16px", "border-top-right-radius", "16px"], ["size", "6"], [1, "priceBreakup"], ["size", "6", 1, "closeBtn"], ["name", "close-outline", 3, "click"], [1, "balanceDiv"], ["size", "4", 2, "text-align", "end"], ["style", "border-bottom: 1px solid #c4c4c4;\n          padding-bottom: 10px;", 4, "ngIf"], [1, "totalBalance"], [2, "border-bottom", "1px solid #c4c4c4", "padding-bottom", "10px"], ["mode", "md", 1, "h50"], ["slot", "start"], ["defaultHref", "/tabs/more", 3, "click"], [1, "head", 2, "font-weight", "bold"], [2, "--background", "#F1F7FA !important"], [1, "main-content"], [1, "seabirdBgSet"], ["size", "10"], [1, "totalWlletBlc"], [1, "walletblc"], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["src", "././assets/icon/seabird_wallet2.svg", 2, "width", "24px", "height", "24px"], ["size", "12", 2, "border-top", "1px dashed #999999"], ["size", "12"], [2, "--background", "#ffffff"], ["type", "number", "placeholder", "Enter amount", 2, "font-size", "12px", 3, "ngModelChange", "ngModel"], ["expand", "block", 2, "--border-radius", "35px", 3, "click"], [1, "walletBgSet"], [1, "seabird_balanceDiv"], ["class", "promotionalSpan", 4, "ngIf"], [1, "seabird_nonpromoSpan"], [1, "balanceBold"], [2, "margin-top", "6px", "display", "flex", "margin-left", "20px"], ["name", "information-circle-outline", "size", "small", 3, "click"], [1, "contentBgSet"], ["value", "all", "color", "red", "scrollable", "true", "mode", "md", 2, "box-shadow", "0px 2px 1px 0px #ccc", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "all"], [2, "color", "black"], ["value", "booking"], ["value", "cancellation"], ["value", "cashback"], ["class", "whole center", 3, "click", 4, "ngIf"], [1, "promotionalSpan"], [4, "ngFor", "ngForOf"], [1, "transaction-history"], ["size", "1", 1, "wallet-icon"], ["src", "./assets/icon/wallet_credit 1.png", 4, "ngIf"], ["src", "./assets/icon/wallet_debit 1.png", 4, "ngIf"], ["src", "./assets/icon/wallet_expired.png", 4, "ngIf"], ["src", "./assets/icon/pending.png", 4, "ngIf"], ["size", "11"], [2, "margin-bottom", "-37px", "margin-top", "-15px"], [2, "font-weight", "bold"], [2, "margin-bottom", "-15px"], [1, "typeSet"], [1, "amount"], ["style", "color: #01875f;font-weight: bold;", 4, "ngIf"], ["style", "color: #e91e63;font-weight: bold;", 4, "ngIf"], ["style", "color: #424242;font-weight: bold;", 4, "ngIf"], ["style", "color: #ff9c00;font-weight: bold;", 4, "ngIf"], ["style", "margin-top: 0px;", 4, "ngIf"], [1, "desRow"], ["size", "10", 1, "description"], [1, "transactionNum"], ["size", "8", 2, "display", "flex", "align-items", "center"], [2, "margin-top", "5px"], ["size", "4", 2, "text-align", "right"], ["class", "desRow", 4, "ngIf"], ["src", "./assets/icon/wallet_credit 1.png"], ["src", "./assets/icon/wallet_debit 1.png"], ["src", "./assets/icon/wallet_expired.png"], ["src", "./assets/icon/pending.png"], [2, "color", "#01875f", "font-weight", "bold"], [2, "color", "#e91e63", "font-weight", "bold"], [2, "color", "#424242", "font-weight", "bold"], [2, "color", "#ff9c00", "font-weight", "bold"], [2, "margin-top", "0px"], [2, "margin-top", "5px", "font-size", "12px"], ["size", "9"], ["size", "3"], [1, "whole", "center", 3, "click"], [1, "legend-box", 2, "position", "absolute", "width", "100% !important", "bottom", "0"], [2, "font-size", "12px"], ["style", "font-weight: bold;", 4, "ngIf"], ["style", "font-size: 12px;", 4, "ngIf"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", "defaultHref", "/tabs/more", 1, "sb-auth-back", 3, "click"], [1, "sb-trips-title", "sb-info-title"], [1, "sb-pax"], [1, "sb-pax__form"], [1, "sb-wallet-balance"], [1, "sb-wallet-balance__text"], [1, "sb-wallet-balance__label"], [1, "sb-wallet-balance__amount"], ["src", "./assets/seabird-new/wallet-icon.svg", "alt", "", 1, "sb-wallet-balance__icon"], [1, "sb-pax-card"], [1, "sb-pfield"], [1, "sb-pfield__label"], [1, "sb-pfield__row"], [1, "sb-wallet-currency"], ["type", "number", "placeholder", "Enter amount", "aria-label", "Enter amount", 1, "sb-pfield__input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "sb-btn-primary", "sb-wallet-add", 3, "click"], [1, "sb-pax-card", "sb-wallet-split"], ["class", "sb-wallet-split__item", 4, "ngIf"], [1, "sb-wallet-split__item"], [1, "sb-wallet-split__label"], [1, "sb-wallet-split__value"], ["type", "button", "aria-label", "About wallet balances", 1, "sb-method__info", "sb-wallet-split__info", 3, "click"], ["name", "information-circle-outline", "aria-hidden", "true"], ["role", "tablist", 1, "sb-trip-tabs", "sb-wallet-tabs"], ["type", "button", "role", "tab", 1, "sb-tab-btn", 3, "click"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], ["class", "sb-trips-empty", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sb-trips-empty"], [1, "sb-wallet-txn"], [1, "sb-wallet-txn__icon"], ["src", "./assets/icon/wallet_credit 1.png", "alt", "", 4, "ngIf"], ["src", "./assets/icon/wallet_debit 1.png", "alt", "", 4, "ngIf"], ["src", "./assets/icon/wallet_expired.png", "alt", "", 4, "ngIf"], ["src", "./assets/icon/pending.png", "alt", "", 4, "ngIf"], [1, "sb-wallet-txn__body"], [1, "sb-wallet-txn__top"], [1, "sb-wallet-txn__main"], [1, "sb-wallet-txn__date"], [1, "sb-wallet-txn__type"], [1, "sb-wallet-txn__amount"], ["class", "sb-wallet-amt sb-wallet-amt--credit", 4, "ngIf"], ["class", "sb-wallet-amt sb-wallet-amt--debit", 4, "ngIf"], ["class", "sb-wallet-amt sb-wallet-amt--expire", 4, "ngIf"], ["class", "sb-wallet-amt sb-wallet-amt--pending", 4, "ngIf"], ["class", "sb-wallet-pill", 3, "sb-wallet-pill--credit", "sb-wallet-pill--debit", 4, "ngIf"], ["class", "sb-wallet-pill sb-wallet-pill--pending", 4, "ngIf"], [1, "sb-wallet-txn__desc"], [1, "sb-wallet-txn__meta"], [1, "sb-wallet-txn__bal"], ["class", "sb-wallet-txn__expiry", 4, "ngIf"], ["src", "./assets/icon/wallet_credit 1.png", "alt", ""], ["src", "./assets/icon/wallet_debit 1.png", "alt", ""], ["src", "./assets/icon/wallet_expired.png", "alt", ""], ["src", "./assets/icon/pending.png", "alt", ""], [1, "sb-wallet-amt", "sb-wallet-amt--credit"], [1, "sb-wallet-amt", "sb-wallet-amt--debit"], [1, "sb-wallet-amt", "sb-wallet-amt--expire"], [1, "sb-wallet-amt", "sb-wallet-amt--pending"], [1, "sb-wallet-pill"], [1, "sb-wallet-pill", "sb-wallet-pill--pending"], [1, "sb-wallet-txn__expiry"], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbWalletInfoTitle", 1, "sb-dialog", 3, "click"], [1, "sb-dialog__head"], ["id", "sbWalletInfoTitle", 1, "sb-pax-card__title"], ["type", "button", "aria-label", "Close", 1, "sb-icon-btn", "sb-dialog__close", 3, "click"], ["name", "close-outline", "aria-hidden", "true"], [1, "sb-wallet-info__title"], [1, "sb-dialog__text"], ["class", "sb-wallet-info__title", 4, "ngIf"], ["class", "sb-dialog__text", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbWalletResultTitle", 1, "sb-dialog", "sb-confirm", 3, "click"], [1, "sb-dialog__head", "sb-confirm__head"], [1, "sb-confirm__icon"], ["aria-hidden", "true", 3, "name"], ["id", "sbWalletResultTitle", 1, "sb-confirm__title"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-primary", 3, "click"], [1, "ourbustheme"], ["mode", "md", 1, "h50", "ourbus_bg"], ["size", "2", 2, "color", "white"], ["size", "8", 2, "text-align", "center", "margin-top", "auto", "margin-bottom", "auto"], [1, "ourbus_wallet"], ["size", "2", 2, "display", "flex", "align-items", "center", "justify-content", "center"], ["name", "add-circle-outline", 2, "font-size", "26px", "color", "white", 3, "click"], [2, "text-align", "center", "color", "#fff"], [2, "font-size", "48px", "color", "white", "font-weight", "600"], [1, "ourbus-wallet-balance"], ["name", "information-circle", 3, "click"], ["slot", "fixed", 3, "ionRefresh"], [1, "custom-card", 2, "padding", "16px"], [1, "ourbus_history"], ["class", "ourbus_rowHead", 4, "ngIf"], ["class", "scrollable-content", 3, "scroll", 4, "ngIf"], ["style", "margin: 24px;", 4, "ngIf"], [2, "padding", "16px"], [2, "margin-top", "8px"], ["size", "2.5"], [1, "box_ourbus"], ["src", "././assets/icon/lightning_ourbus.svg", 2, "height", "32px", "width", "32px"], ["size", "9.5"], [1, "subText_ourbus"], [1, "small_text_ourbus"], ["src", "././assets/icon/ourbus_ticketsave.svg", 2, "height", "32px", "width", "32px"], ["src", "././assets/icon/oubus_HourglassHigh.svg", 2, "height", "32px", "width", "32px"], ["style", "margin: 0px;box-shadow: none; border-bottom: 1px solid #EFEFEF;", 4, "ngFor", "ngForOf"], [1, "ourbus_rowHead"], ["size", "4.5"], [1, "scrollable-content", 3, "scroll"], ["style", "position: fixed;right: 10px;top: 65px;", 4, "ngIf"], ["style", "border-bottom: 1px solid #efefef;font-size: 12px;font-weight: 300;display: flex;align-items: center;", 4, "ngFor", "ngForOf"], ["style", "position: fixed;right: 10px;bottom: 20px;", 4, "ngIf"], [2, "position", "fixed", "right", "10px", "top", "65px"], ["name", "arrow-down-outline", 2, "width", "24px", "height", "24px", 3, "click"], [2, "border-bottom", "1px solid #efefef", "font-size", "12px", "font-weight", "300", "display", "flex", "align-items", "center"], ["style", "display: contents;", 4, "ngIf"], [2, "display", "contents"], ["size", "2.5", 2, "color", "#2d2d2d"], ["style", "color: #4CAF50;font-weight: bold;", 4, "ngIf"], ["style", "color: #F60C0C;font-weight: bold;", 4, "ngIf"], [2, "font-weight", "700", "color", "#000"], [2, "color", "#4CAF50", "font-weight", "bold"], [2, "color", "#F60C0C", "font-weight", "bold"], [2, "position", "fixed", "right", "10px", "bottom", "20px"], ["name", "arrow-up-outline", 2, "width", "24px", "height", "24px", 3, "click"], [2, "margin", "24px"], [2, "text-align", "center", "margin", "8px 0px"], ["src", "././assets/icon/ourbus_Coins.svg", 1, "ourbus_noTransaction_icon"], [1, "ourbus_notransaction_text"], [2, "margin", "0px", "box-shadow", "none", "border-bottom", "1px solid #EFEFEF"], [2, "border-radius", "8px"], ["lines", "none", "slot", "header", 1, "accordion-header"], [1, "txt-lbl"], [3, "innerHTML"], ["slot", "content", 1, "accordion-content"], [1, "answer-content", 3, "innerHTML"], [3, "click"], [1, "head"], [1, "wallet-row"], [2, "font-size", "15px"], ["size", "auto"], [1, "add-money-button", 3, "click"], [1, "walletBar"], [1, "nonpromoSpan"], [1, "informationDiv"], [1, "search-box"], ["placeholder", "Transaction Number", "autofocus", "", 3, "ionInput"], ["value", "all", "color", "red", "scrollable", "true", 2, "box-shadow", "0px 2px 1px 0px #ccc", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "color: #01875f;font-weight: bold; font-size: 15px", 4, "ngIf"], ["style", "color: #e91e63;font-weight: bold; font-size: 15px", 4, "ngIf"], ["style", "color: #424242;font-weight: bold; font-size: 15px", 4, "ngIf"], ["style", "color: #ff9c00;font-weight: bold; font-size: 15px", 4, "ngIf"], ["style", "margin-top: 0px; font-size: 12px", 4, "ngIf"], [2, "color", "#01875f", "font-weight", "bold", "font-size", "15px"], [2, "color", "#e91e63", "font-weight", "bold", "font-size", "15px"], [2, "color", "#424242", "font-weight", "bold", "font-size", "15px"], [2, "color", "#ff9c00", "font-weight", "bold", "font-size", "15px"], [2, "margin-top", "0px", "font-size", "12px"], ["style", "color: #01875f;font-weight: bold; font-size: 15px;", 4, "ngIf"], ["style", "color: #e91e63;font-weight: bold; font-size: 15px;", 4, "ngIf"], ["style", "color: #424242;font-weight: bold; font-size: 15px;", 4, "ngIf"], ["style", "color: #ff9c00;font-weight: bold; font-size: 15px;", 4, "ngIf"], [1, "shyamoli-wallet-header"], ["mode", "md", 1, "shyamoli-wallet-toolbar"], ["slot", "start", 2, "position", "absolute"], ["text", "", "icon", "arrow-back-outline", "defaultHref", "/tabs/more", 1, "shyamoli-back-btn", 3, "click"], [1, "shyamoli-wallet-title"], [1, "shyamoli-wallet-content", "shyamolitheme"], [1, "shyamoli-wallet-wrapper"], [1, "shyamoli-balance-card", "center-mode"], [1, "balance-center-block"], [1, "label"], [1, "value", "main-balance"], [1, "shyamoli-add-money-btn", 3, "click"], [1, "smart-miles-section", 2, "display", "none"], [1, "smart-miles-toggle"], [1, "smartmiles-img-wrap"], ["src", "./assets/icon/shyamoli-wallet1.svg", "alt", "Smart Miles", 1, "smartmiles-icon"], ["src", "./assets/icon/shyamoli-smartmiles.svg", "alt", "Overlay", 1, "smartmiles-overlay"], [1, "smartmiles-label"], ["mode", "ios", 1, "smart-toggle", 3, "ngModelChange", "ngModel"], [1, "transaction-heading"], [1, "shyamoli-segment"], [1, "seg-chip", 3, "click"], [1, "seg-chip", 2, "padding", "10px 10px", 3, "click"], ["class", "shyamoli-transactions", 4, "ngIf"], ["class", "shyamoli-breakdown-overlay", 3, "click", 4, "ngIf"], [1, "shyamoli-transactions"], ["class", "tx-row", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "tx-row", 3, "ngStyle"], [1, "tx-icon"], [1, "tx-left"], [1, "tx-type"], [1, "tx-meta"], [1, "tx-amt", 3, "ngClass"], ["class", "showred", 4, "ngIf"], ["class", "tx-status", 4, "ngIf"], ["src", "./assets/icon/shyamoli-downarrow.svg", "alt", "Added", 1, "shyamoli-tx-arrow", "green-bg"], ["src", "./assets/icon/shyamoli-uparrow.svg", "alt", "Reduced", 1, "shyamoli-tx-arrow", "red-bg"], ["name", "time-outline", 1, "pending-bg"], [1, "showred"], [1, "tx-status"], [1, "empty"], [1, "shyamoli-breakdown-overlay", 3, "click"], [1, "shyamoli-breakdown-sheet", 3, "click"], [1, "sheet-head"], [1, "title"], ["name", "close", 3, "click"], ["class", "sheet-line", 4, "ngIf"], [1, "sheet-line"], [1, "sheet-total"]],
  template: function WalletPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WalletPage_ng_container_0_Template, 7, 8, "ng-container", 4)(1, WalletPage_ng_container_1_Template, 59, 12, "ng-container", 4)(2, WalletPage_ng_container_2_Template, 52, 25, "ng-container", 4)(3, WalletPage_ng_container_3_Template, 63, 7, "ng-container", 4)(4, WalletPage_ng_container_4_Template, 50, 11, "ng-container", 4)(5, WalletPage_ng_container_5_Template, 38, 13, "ng-container", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_19__.WhiteCommonHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__.FilterPipe],
  styles: ["@charset \"UTF-8\";\n.main-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.balance[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  font-size: 1.3em;\n  padding: 15px 0;\n  flex-direction: column;\n  margin-bottom: 10px;\n  padding: 5px;\n  box-shadow: 0px 2px 1px 0px #ccc;\n  background: #fff;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.wallet-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; \n\n}\n\n.add-money-button[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  border-radius: 5px;\n  --background: var(--iconsAndButtonsColor);\n  --background-activated: var(--iconsAndButtonsColor);\n  white-space: nowrap; \n\n}\n\n.sc-ion-searchbar-md-h[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.balance[_ngcontent-%COMP%]   .add-money[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n\n.transaction-card[_ngcontent-%COMP%] {\n  padding: 6px;\n  background-color: #fff;\n}\n\nspan.msg[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  height: 29vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2em;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #787777;\n}\n\nspan.amount[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n\n.grey-box[_ngcontent-%COMP%] {\n  width: 89%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color:var(--viewBgColor);\n}\n\nion-button[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: \"NotoSans\";\n}\n\n.bln[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-left: 5px;\n  margin-top: -14px;\n}\n\n.transaction-history[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d1d1d1;\n  font-size: 14px;\n  color: #737373;\n}\n\n.wallet-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none !important;\n}\n\n.informationDiv[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 4px;\n  top: 26%;\n}\n\n.waletdetails[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n\n.walletBar[_ngcontent-%COMP%] {\n  background-color: #E3E3E3;\n  padding: 6px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  width: 94%;\n  display: inline-block;\n}\n\n.promotionalSpan[_ngcontent-%COMP%] {\n  width: 40%;\n  font-size: 12px;\n  margin-right: 10px;\n  float: left;\n}\n\n.nonpromoSpan[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 40%;\n}\n\n.seabird_nonpromoSpan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.balanceBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.amount[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.transactionNum[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: -15px;\n  margin-top: 5px;\n}\n\n.typeSet[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n\n.desRow[_ngcontent-%COMP%] {\n  margin-top: -25px;\n  margin-bottom: -14px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-radius: 15px 15px 0 0;\n  z-index: 20;\n  background-color: #fff;\n  transition: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .swipe-handler[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 30px;\n  height: 6px;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  margin-left: -10px;\n  margin-top: -3px;\n  border-radius: 3px;\n  background: lightgray;\n}\n\n.bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n}\n\n.heading[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.fare[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  color: #333;\n}\n\n.breakUpView[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  color: #191966;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addMoneyBtn[_ngcontent-%COMP%] {\n  color: var(--Primary, #191966);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  --background: #F2C21A;\n  --background-activated:#F2C21A;\n}\n\n.expiryMsg[_ngcontent-%COMP%] {\n  color: #FCAF17;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.priceBreakup[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n  font-style: normal;\n  color: #333;\n  font-weight: 500;\n}\n\n.closeBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  font-size: 30px;\n  color: #747B84;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.seabird_balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n}\n\n.totalBalance[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n}\n\n.all1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.all[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.transactional[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.transactional1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.walletList[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.points[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  margin: 0px;\n}\n\n.msgList[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #5F5F5F;\n}\n\n.transaction_segment[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n}\n\nheading[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.fare[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  color: #333;\n}\n\n.breakUpView[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  color: #191966;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 248px;\n}\n\n.addMoneyBtn[_ngcontent-%COMP%] {\n  color: var(--Primary, #191966);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  display: flex;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  --background: #F2C21A;\n  --background-activated:#F2C21A;\n}\n\n.expiryMsg[_ngcontent-%COMP%] {\n  color: #FCAF17;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.priceBreakup[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n  font-style: normal;\n  color: #333;\n  font-weight: 500;\n}\n\n.closeBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  font-size: 30px;\n  color: #747B84;\n}\n\n.balanceDiv[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.totalBalance[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n}\n\n.all1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.all[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.promo1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.transactional[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 20px;\n  border-radius: 100px;\n  background: #FFBD16;\n}\n\n.transactional1[_ngcontent-%COMP%] {\n  color: var(--Type-Title, #333);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n  display: inline-flex;\n  padding: 3px 15px;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 100px;\n  background: rgba(25, 25, 102, 0.05);\n}\n\n.walletList[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #333;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.points[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  margin: 0px;\n}\n\n.msgList[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #5F5F5F;\n}\n\n.transaction_segment[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.transaction_segment[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.ourbus_bg[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #2E6726 0%, #74C267 50%, #459A37 100%);\n}\n\n.ourbus_wallet[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n}\n\n.ourbus_history[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #2d2d2d;\n  margin: 0px;\n}\n\n.ourbus_rowHead[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 12px;\n  font-weight: 300;\n  color: #2d2d2d;\n  border-bottom: 1px solid #EFEFEF;\n  padding-bottom: 8px;\n}\n.ourbus_rowHead[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.scrollable-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 300px;\n}\n\n.box_ourbus[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  padding: 8px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.subText_ourbus[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2d2d2d;\n}\n\n.small_text_ourbus[_ngcontent-%COMP%] {\n  margin: 4px 0px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #2d2d2d;\n}\n\n.ourbus_noTransaction_icon[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  padding: 10px;\n  border-radius: 42px;\n  width: 32px;\n  height: 32px;\n}\n\n.ourbus_notransaction_text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n\n.seabirdBgSet[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 10px;\n  padding: 8px;\n  background: white;\n}\n\n.contentBgSet[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 10px;\n  margin-top: 16px;\n  padding: 8px;\n  background: white;\n}\n\n.walletBgSet[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-bottom: 6px;\n  padding-left: 6px;\n  background: #D9D9D8;\n}\n\n.totalWlletBlc[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #000;\n}\n\n.walletblc[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #00904B;\n}\n\n.segment-button-checked[_ngcontent-%COMP%] {\n  --ion-color-base: #2B28CE;\n}\n\n.ourbus-wallet-balance[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ourbus-wallet-balance[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding: 2px 0px 0px 5px;\n  color: #fff;\n  height: 20px;\n  width: 20px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  white-space: wrap;\n  overflow: initial;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-bottom: 15px;\n}\n\n\n\n.shyamoli-wallet-header[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n\n.shyamoli-wallet-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 56px;\n  font-family: \"Gilroy-Medium\", sans-serif;\n}\n\n.shyamoli-back-btn[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n\n.shyamoli-back-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .shyamoli-wallet-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]   .button-native[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #000000;\n}\n\n.shyamoli-wallet-title[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n\n.shyamoli-wallet-content[_ngcontent-%COMP%] {\n  --background: var(--viewBgColor);\n}\n\n.shyamoli-wallet-wrapper[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n  padding: 20px 16px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-family: \"Gilroy-Medium\", sans-serif;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #C2C2C2;\n  border-radius: 14px;\n  padding: 18px 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.shyamoli-balance-card.center-mode[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .main-balance[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n\n.balance-center-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .amount-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .amount-line[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #666;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .amount-line[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #111;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #C30010;\n  cursor: pointer;\n}\n\n.shyamoli-balance-card[_ngcontent-%COMP%]   .add-money-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.shyamoli-input-item[_ngcontent-%COMP%] {\n  flex: 1;\n  --background: #F2F4F7;\n  border-radius: 8px;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n}\n\n.shyamoli-input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.shyamoli-add-money-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  --background-hover: #ff9f26;\n  --background-activated: #ff9f26;\n  height: 50px;\n  width: 130px;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  font-size: 16px;\n}\n\n.shyamoli-add-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #C30010;\n}\n\n.sub-balances[_ngcontent-%COMP%] {\n  border-top: 1px dashed #E2E6EA;\n  padding-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.sub-balances[_ngcontent-%COMP%]   .sub-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #444;\n}\n\n.shyamoli-segment[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center; \n\n  flex-wrap: nowrap; \n\n  padding: 5px;\n  background: #FDF6E3;\n  font-family: \"Gilroy-Bold\";\n  font-weight: 400;\n  border-radius: 30px;\n}\n.shyamoli-segment[_ngcontent-%COMP%]   .shyamoli-segment.single[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.seg-chip[_ngcontent-%COMP%] {\n  background: #FDF6E3;\n  border: #E1E5EA;\n  font-size: 14px;\n  padding: 10px 30px;\n  font-weight: 600;\n  color: #ADADAD;\n  cursor: pointer;\n  transition: 0.18s;\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 88px;\n}\n\n.seg-chip.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #9098A1;\n  border-radius: 30px;\n  color: var(--iconsAndButtonsColor);\n}\n\n.shyamoli-transactions[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 10px;\n}\n\n.tx-row[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 12px 14px 14px;\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  position: relative;\n}\n\n.tx-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.tx-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n\n.tx-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n  line-height: 1.3;\n}\n\n.tx-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 3px;\n}\n\n.tx-amt[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.tx-amt.credit[_ngcontent-%COMP%] {\n  color: #058A55;\n}\n\n.tx-amt.debit[_ngcontent-%COMP%] {\n  color: #C30010;\n}\n\n.tx-amt.pending[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n\n.tx-amt.expire[_ngcontent-%COMP%] {\n  color: #555;\n}\n\n.tx-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  background: #FFEFDC;\n  color: #A45900;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 0;\n  font-size: 13px;\n  color: #777;\n}\n\n.shyamoli-breakdown-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  z-index: 999;\n}\n\n.shyamoli-breakdown-sheet[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 520px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 20px 18px 28px;\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.12);\n  animation: _ngcontent-%COMP%_slideUp 0.28s ease;\n}\n\n.sheet-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.sheet-head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sheet-head[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #444;\n}\n\n.sheet-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  padding: 6px 0;\n  border-bottom: 1px solid #F0F2F5;\n}\n\n.sheet-line[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n\n.sheet-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 10px 0 0;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(40px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (min-width: 500px) {\n  .shyamoli-wallet-wrapper[_ngcontent-%COMP%] {\n    padding: 32px 24px 80px;\n  }\n  .shyamoli-balance-card[_ngcontent-%COMP%] {\n    padding: 24px 24px 26px;\n  }\n  .tx-row[_ngcontent-%COMP%] {\n    padding: 14px 18px 16px;\n  }\n  .shyamoli-faq-card[_ngcontent-%COMP%] {\n    padding: 20px 20px 10px;\n  }\n}\n.tx-icon[_ngcontent-%COMP%] {\n  min-width: 36px;\n  align-items: center;\n  justify-content: center;\n}\n\n.shyamoli-tx-arrow[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 30px;\n  padding: 7px;\n  background: #eee;\n  object-fit: contain;\n}\n\n.green-bg[_ngcontent-%COMP%] {\n  background: #D1FAE5 !important;\n  border-radius: 5px;\n}\n\n.red-bg[_ngcontent-%COMP%] {\n  background: #FEE2E2 !important;\n  border-radius: 5px;\n}\n\n.shyamoli-tx-arrow.green-bg[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.smart-miles-section[_ngcontent-%COMP%] {\n  background: #fffbea;\n  border-radius: 10px;\n  padding: 5px 5px;\n  margin: 15px 0;\n}\n\n.smart-miles-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.smartmiles-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: block;\n}\n\n.smartmiles-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: #333;\n  white-space: nowrap;\n}\n\n.smartmiles-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n}\n\n.smartmiles-info[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.smart-toggle[_ngcontent-%COMP%]::part(track) {\n  background: #ccc;\n}\n\n.smart-toggle.toggle-checked[_ngcontent-%COMP%]::part(track) {\n  background: #3BAD69 !important; \n\n  opacity: 1;\n}\n\n.smartmiles-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 7px;\n  top: 7px;\n  width: 18px;\n  height: 18px;\n  pointer-events: none;\n}\n\n.showred[_ngcontent-%COMP%] {\n  color: #C30010;\n}"]
});

/***/ }

}]);