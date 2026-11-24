"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1598],{

/***/ 17500
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 4970
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 91598
/*!***********************************************************!*\
  !*** ./src/app/add-money-wallet/add-money-wallet.page.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletPage: () => (/* binding */ AddMoneyWalletPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-payment/modal-payment.page */ 59140);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-razorpay */ 71602);
/* harmony import */ var ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-capacitor-phonepe-pg */ 17274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 89417);

var _AddMoneyWalletPage;
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';




















const _c0 = ["amountInput"];
const _c1 = a0 => ({
  "selected": a0
});
const _c2 = () => ({
  "padding": "10px"
});
const _c3 = () => ({});
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payType_r6.name);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const payType_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentType = payType_r6.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_img_2_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-radio", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == false || payType_r6.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r6.name == "Razorpay" && payType_r6.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", payType_r6 ? payType_r6.id : "");
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_ion_item_1_Template, 4, 3, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r6.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 18)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19)(4, "ion-list")(5, "ion-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "contact-details-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Continue to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddMoneyWalletPage_ng_container_0_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 9)(1, "ion-card", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13)(6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setSelectedOption(100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setSelectedOption(200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setSelectedOption(500));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_ion_content_10_Template_ion_chip_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setSelectedOption(1000));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddMoneyWalletPage_ng_container_0_ion_content_10_ion_card_21_Template, 7, 3, "ion-card", 16)(22, AddMoneyWalletPage_ng_container_0_ion_content_10_div_22_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "contact-details-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx_r1.currencySym, " Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c1, ctx_r1.isSelected(100)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, ctx_r1.isSelected(200)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 200");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c1, ctx_r1.isSelected(500)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 500");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c1, ctx_r1.isSelected(1000)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.currencySym, " 1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "1" && !ctx_r1.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r1.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_div_11_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss("success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "VIEW WALLET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_div_12_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentFailed = !ctx_r1.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_0_div_13_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("( ", ctx_r1.timer, " )");
  }
}
function AddMoneyWalletPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 34)(2, "ion-row")(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_div_13_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.timer === 0 && (ctx_r1.isPendingPayment = !ctx_r1.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_0_div_13_span_11_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx_r1.timer > 0)("enable", ctx_r1.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timer > 0);
  }
}
function AddMoneyWalletPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-row")(3, "ion-col", 2)(4, "ion-buttons", 3)(5, "ion-back-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_0_Template_ion_back_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 5)(7, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddMoneyWalletPage_ng_container_0_ion_content_10_Template, 24, 22, "ion-content", 7)(11, AddMoneyWalletPage_ng_container_0_div_11_Template, 11, 0, "div", 8)(12, AddMoneyWalletPage_ng_container_0_div_12_Template, 11, 0, "div", 8)(13, AddMoneyWalletPage_ng_container_0_div_13_Template, 12, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isPendingPayment);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payType_r15.name);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const payType_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentType = payType_r15.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-radio", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == false || payType_r15.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == true && payType_r15.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", payType_r15 ? payType_r15.id : "");
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_ion_item_1_Template, 4, 3, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r15.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 18)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Select Payment Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 46)(4, "ion-list")(5, "ion-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 9)(1, "ion-card", 18)(2, "div", 11)(3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13)(6, "ion-item", 44)(7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_1_ion_content_8_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_1_ion_content_8_ion_card_11_Template, 7, 2, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "0" && !ctx_r1.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r1.metaData.isPaytmIframeEnabled);
  }
}
function AddMoneyWalletPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_div_9_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss("success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "VIEW WALLET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_div_10_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentFailed = !ctx_r1.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_1_div_11_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("( ", ctx_r1.timer, " )");
  }
}
function AddMoneyWalletPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 34)(2, "ion-row")(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_div_11_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.timer === 0 && (ctx_r1.isPendingPayment = !ctx_r1.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_1_div_11_span_11_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx_r1.timer > 0)("enable", ctx_r1.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timer > 0);
  }
}
function AddMoneyWalletPage_ng_container_1_ion_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer")(1, "div")(2, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_ion_footer_12_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddMoneyWalletPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-title", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 40)(6, "ion-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_1_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddMoneyWalletPage_ng_container_1_ion_content_8_Template, 12, 3, "ion-content", 7)(9, AddMoneyWalletPage_ng_container_1_div_9_Template, 11, 0, "div", 8)(10, AddMoneyWalletPage_ng_container_1_div_10_Template, 11, 0, "div", 8)(11, AddMoneyWalletPage_ng_container_1_div_11_Template, 12, 5, "div", 8)(12, AddMoneyWalletPage_ng_container_1_ion_footer_12_Template, 5, 0, "ion-footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isPendingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payType_r23.name);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 75);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const payType_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentType = payType_r23.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_span_2_Template, 2, 1, "span", 71)(3, AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_img_3_Template, 1, 0, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-checked", ctx_r1.paymentType == payType_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == false || payType_r23.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRazorpayPg == true && payType_r23.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sb-radio--on", ctx_r1.paymentType == payType_r23.id);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_button_1_Template, 5, 5, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const payType_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r23.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Payment Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_ng_container_4_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 57)(1, "div", 58)(2, "section", 59)(3, "h2", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 61)(6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 63)(9, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_2_ion_content_8_Template_ion_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddMoneyWalletPage_ng_container_2_ion_content_8_ng_container_12_Template, 5, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "0" && !ctx_r1.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r1.metaData.isPaytmIframeEnabled);
  }
}
function AddMoneyWalletPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "div", 77)(2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Payment Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 81)(7, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss("success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "View Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "div", 83)(2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Payment Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 81)(7, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_div_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentFailed = !ctx_r1.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_2_div_11_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0(", ctx_r1.timer, ")");
  }
}
function AddMoneyWalletPage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76)(1, "div", 87)(2, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 81)(9, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_div_11_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.timer === 0 && (ctx_r1.isPendingPayment = !ctx_r1.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_2_div_11_span_11_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.timer > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timer > 0);
  }
}
function AddMoneyWalletPage_ng_container_2_ion_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer", 93)(1, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_ion_footer_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddMoneyWalletPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 48)(2, "ion-toolbar", 49)(3, "div", 50)(4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddMoneyWalletPage_ng_container_2_ion_content_8_Template, 13, 3, "ion-content", 54)(9, AddMoneyWalletPage_ng_container_2_div_9_Template, 9, 0, "div", 55)(10, AddMoneyWalletPage_ng_container_2_div_10_Template, 9, 0, "div", 55)(11, AddMoneyWalletPage_ng_container_2_div_11_Template, 12, 2, "div", 55)(12, AddMoneyWalletPage_ng_container_2_ion_footer_12_Template, 4, 0, "ion-footer", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isPendingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.paymentStart);
  }
}
function AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payType_r31.name);
  }
}
function AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 108);
  }
}
function AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const payType_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentType = payType_r31.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_img_2_Template, 1, 0, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-radio", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", payType_r31.id == "53" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r31.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r31.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", payType_r31 ? payType_r31.id : "");
  }
}
function AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_ion_item_2_Template, 4, 6, "ion-item", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payType_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r31.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function AddMoneyWalletPage_ng_container_3_ion_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 18)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 46)(4, "ion-list")(5, "ion-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_3_ion_card_16_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_3_ion_card_16_div_6_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Money Added to wallet successfully! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row", 111)(5, "ion-col", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_div_21_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "VIEW WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_div_22_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Payment Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row", 111)(5, "ion-col", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_div_22_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.okay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OKAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 95)(3, "ion-row")(4, "ion-col", 2)(5, "ion-buttons", 3)(6, "ion-back-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 5)(8, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 96)(12, "div", 97)(13, "ion-item", 98)(14, "ion-input", 99, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function AddMoneyWalletPage_ng_container_3_Template_ion_input_ionInput_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_3_Template_ion_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddMoneyWalletPage_ng_container_3_ion_card_16_Template, 7, 2, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "ion-button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_3_Template_ion_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddMoneyWalletPage_ng_container_3_div_21_Template, 7, 0, "div", 101)(22, AddMoneyWalletPage_ng_container_3_div_22_Template, 7, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.pgLength > "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.logoutNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.paymentFaild);
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payType_r38.name);
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const payType_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentType = payType_r38.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_ion_label_1_Template, 2, 1, "ion-label", 1)(2, AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_img_2_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-radio", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r38.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payType_r38.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", payType_r38 ? payType_r38.id : "");
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_ion_item_1_Template, 4, 3, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 18)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Select Payment Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 46)(4, "ion-list")(5, "ion-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.paymentType, $event) || (ctx_r1.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.payMentGateWayTypes);
  }
}
function AddMoneyWalletPage_ng_container_4_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 9)(1, "ion-card", 18)(2, "div", 11)(3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13)(6, "ion-item", 44)(7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddMoneyWalletPage_ng_container_4_ion_content_8_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddMoneyWalletPage_ng_container_4_ion_content_8_ion_card_11_Template, 7, 2, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.isPaytmIframeEnabled && !ctx_r1.metaData.isPhonePeV2PayBitlaEnabled);
  }
}
function AddMoneyWalletPage_ng_container_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_div_9_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss("success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "VIEW WALLET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "ion-row")(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_div_10_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.paymentFailed = !ctx_r1.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AddMoneyWalletPage_ng_container_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 34)(2, "ion-row")(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_div_11_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.timer === 0 && (ctx_r1.isPendingPayment = !ctx_r1.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx_r1.timer > 0)("enable", ctx_r1.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Cancel Payment (", ctx_r1.timer, ")");
  }
}
function AddMoneyWalletPage_ng_container_4_ion_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer")(1, "div")(2, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_ion_footer_12_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addMoney(ctx_r1.amount ? ctx_r1.amount : ctx_r1.walletBalance, ctx_r1.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddMoneyWalletPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-title", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 40)(6, "ion-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddMoneyWalletPage_ng_container_4_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddMoneyWalletPage_ng_container_4_ion_content_8_Template, 12, 3, "ion-content", 7)(9, AddMoneyWalletPage_ng_container_4_div_9_Template, 11, 0, "div", 8)(10, AddMoneyWalletPage_ng_container_4_div_10_Template, 11, 0, "div", 8)(11, AddMoneyWalletPage_ng_container_4_div_11_Template, 11, 5, "div", 8)(12, AddMoneyWalletPage_ng_container_4_ion_footer_12_Template, 5, 0, "ion-footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isPendingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
  }
}
class AddMoneyWalletPage {
  constructor(navCtrl, dateService, authenticate, util, theme, commonStorage, loader, apiFactory, platform, commonService, modalCtrl, iab, appData, modalController, params, alertController, router, firebaseAnalyticsService, loadingController) {
    this.navCtrl = navCtrl;
    this.dateService = dateService;
    this.authenticate = authenticate;
    this.util = util;
    this.theme = theme;
    this.commonStorage = commonStorage;
    this.loader = loader;
    this.apiFactory = apiFactory;
    this.platform = platform;
    this.commonService = commonService;
    this.modalCtrl = modalCtrl;
    this.iab = iab;
    this.appData = appData;
    this.modalController = modalController;
    this.params = params;
    this.alertController = alertController;
    this.router = router;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.loadingController = loadingController;
    this.paymentStart = false;
    this.formHtml = '';
    this.payUrl = '';
    this.resultScript = '';
    this.innerHtmlStr = '';
    this.isIos = false;
    this.logoutNoteModal = false;
    this.paymentFaild = false;
    this.viewTicket = false;
    this.paymentFailed = false;
    this.isPendingPayment = false;
    this.timer = 10;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.walletBalance = params.get('wallectBalance');
    if (params.get('enterAmount')) {
      this.amount = params.get('enterAmount');
    } else if (params.get('wallectBalance')) {
      this.amount = this.walletBalance;
    }
    console.log("walletBalance", this.amount);
    // this.commonService.gTrack("addwallet")
    this.payMentGateWayTypes = this.commonStorage.getItem("metaData").payMentGateWayTypes;
    let getId;
    for (let i = 0; i <= this.payMentGateWayTypes.length - 1; i++) {
      if (this.payMentGateWayTypes.length == 1) {
        this.paymentType = this.payMentGateWayTypes[i].id;
      }
      this.pgLength = this.payMentGateWayTypes.length;
    }
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.innerHtmlStr = "<!DOCTYPE html><html><head><title>Redirecting to the payment page</title></head>" + "<body><b>please wait we are redirecting to the payment page....</b>" + "<form id='payMentGateWayForm' name='payMentGateWayForm'></form>" + "<form id='ts-app-payment-form-redirect'></form><div id='ts-app-payment-form-redirect-div'></div>" + "</body></html>";
    this.metaData = this.commonStorage.localGet("metaData");
    this.isRazorpayPg = this.metaData.isRazorpayPg;
    this.prepareGateways(this.payMentGateWayTypes);
    this.options = {
      toolbar: {
        height: 56,
        color: this.theme.primary
      },
      title: {
        color: '#ffffffff',
        staticText: 'Payment',
        showPageTitle: true
      },
      customButtons: [{
        wwwImage: 'assets/icon/back_button.png',
        wwwImagePressed: 'assets/icon/back_button.png',
        align: 'left',
        event: 'backPressed'
      }]
    };
  }
  ngOnInit() {}
  emcription(serverDate, subdomain) {
    const [first, second] = serverDate.split('T');
    serverDate = first.replace('-', '');
    serverDate = serverDate.replace('-', '');
    var res = subdomain.concat(serverDate);
    var halfEncryptData = btoa(res);
    return halfEncryptData;
  }
  ionViewWillLoad() {
    // this.commonService.gTrack('addWallet','“Add Money” button is clicked in Wallet page')
  }
  ionViewDidEnter() {
    setTimeout(() => {
      if (this.amountInput) {
        this.amountInput.setFocus();
      }
    }, 100);
  }
  dismiss(msg = undefined) {
    this.modalCtrl.dismiss(msg);
  }
  prepareGateways(paymetTypes) {
    // this.bankingPayments = paymetTypes.filter(it => it.id.indexOf('4') < 0);
    // this.walletPayments = paymetTypes.filter(it => it.id.indexOf('4') >= 0);
  }
  setSelectedOption(option) {
    if (this.amount === option) {
      this.amount = '';
    } else {
      this.amount = option;
    }
  }
  isSelected(option) {
    return this.amount === option;
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
  openInNewTab(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_self';
    link.click();
  }
  addMoney(amount, paymentType) {
    var _this2 = this;
    if (!amount) {
      this.util.showToast("Please enter amount");
      return;
    } else {
      // amount = amount.toFixed(2);
    }
    if (!paymentType) {
      this.util.showToast("Please select payment option");
      return;
    }
    let platformNumber;
    // if (this.util.platformName() == 'IOS') {
    //   platformNumber = 9;
    // } else if (this.util.platformName() == 'Android') {
    //   platformNumber = 10;
    // } else {
    //   platformNumber = 11;
    // }
    if (this.util.isWebApp()) {
      platformNumber = '6';
    } else if (this.util.isIos() && !this.util.isWebApp()) {
      platformNumber = '9';
    } else {
      platformNumber = '10';
    }
    // amount = amount.toFixed(2);
    this.loader.showLoadingDefault();
    this.apiFactory.addMoneyToWallet(amount, paymentType, platformNumber).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        // this.commonService.gTrack('addWallet','adding money to wallet success')
        _this2.loader.hideLoadingDefault();
        if (res.code == 400) {
          _this2.util.showToast(res.message);
        } else if (res.code == 422) {
          _this2.accountDeRegisterAlert("", res.message);
        } else {
          if ('is_razorpay_payment' in res) {
            if (res.is_razorpay_payment == true) {
              if (res.amount != null && res.merchant_id != null && res.order_id != null && res.secret_key != null) {
                _this2.payWithRazorpay(res);
              }
            }
          } else if (_this2.paymentType == "55") {
            if (_this2.appData.isWEBAPP) {
              // window.open(res.payment_link);
              _this2.openInNewTab(res.payment_link);
            } else if (_this2.appData.isIOS && !_this2.appData.isWEBAPP) {
              const browser = _this2.iab.create(res.payment_link + "", '_blank', _this2.options);
              browser.on('loadstart').subscribe(event => {
                if (event.url.indexOf('add-money-wallet-confirm') > -1) {
                  // this.commonService.gTrack('addwallet','adding money to wallet success')
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Add Money Wallet'
                  });
                  browser.close();
                  _this2.modalCtrl.dismiss('success');
                } else if (event.url.indexOf('add-money-wallet-cancel') > -1) {
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                    page: 'Add Money Wallet'
                  });
                  browser.close();
                  _this2.modalCtrl.dismiss();
                }
              });
            }
          } else if (_this2.paymentType == "57") {
            setTimeout(() => {
              // Your jQuery code here
              const accessKey = res.access_key;
              const options = {
                access_key: accessKey,
                onResponse: response => {
                  window.location.href = res.redirect_url + '&pnr_number=' + response['txnid'] + "&amount=" + response['amount'] + "&email=" + response['email'] + "&phone=" + response['phone'] + '&product_info=easebuzz';
                  ;
                },
                theme: '#123456'
              };
              // Your jQuery code here
              const easebuzzCheckout = new EasebuzzCheckout(res.key, 'prod');
              easebuzzCheckout.initiatePayment(options);
            }, 1000);
          } else if (_this2.paymentType == '45') {
            var halfKey = _this2.emcription(_this2.metaData.serverDate, _this2.metaData.subdomain);
            let marchantKey = atob(res.merchant_id);
            marchantKey = marchantKey.replace(halfKey, '');
            if (_this2.appData.isWEBAPP) {
              var options = {
                "features": {
                  "enableExpressPay": true,
                  "enableInstrumentDeRegistration": true,
                  "enableMerTxnDetails": true,
                  "enableNewWindowFlow": true
                },
                "consumerData": {
                  "deviceId": "WEBSH2",
                  "token": res.token,
                  "paymentMode": "all",
                  "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                  //provided merchant logo will be displayed
                  "merchantId": marchantKey,
                  "currency": "INR",
                  "consumerId": res.consumer_id,
                  "consumerMobileNo": res.consumer_mobile_no,
                  "consumerEmailId": res.consumer_email_id,
                  "txnId": res.txn_id,
                  //Unique merchant transaction ID
                  "items": [{
                    "itemId": "FIRST",
                    "amount": res.amount,
                    // "comAmt": result.Amount
                    // "amount": "8",
                    "comAmt": "0"
                  }],
                  "customStyle": {
                    "PRIMARY_COLOR_CODE": "#45beaa",
                    //merchant primary color code
                    "SECONDARY_COLOR_CODE": "#FFFFFF",
                    //provide merchant"s suitable color code
                    "BUTTON_COLOR_CODE_1": "#2d8c8c",
                    //merchant"s button background color code
                    "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                  }
                }
              };
              var paymentCallback = response => {
                let techSuccessMsg = response.msg;
                let msgCase = techSuccessMsg.split('|')[0];
                if (msgCase == '0300') {
                  let merchantId = response.merchant_code;
                  var halfKey = _this2.emcription(_this2.metaData.serverDate, _this2.metaData.subdomain);
                  let message = btoa(techSuccessMsg);
                  message = message.replace(halfKey, '');
                  //  this.commonService.gTrack('addWallet','adding money to wallet success');
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Add Money Wallet'
                  });
                  //this.util.showToast('Money added to wallet successfully', 'bottom');
                  _this2.modalCtrl.dismiss('success');
                  _this2.apiFactory.techProcessWalletCall(merchantId, res.amount, message).subscribe(result => {}, err => {});
                } else if (msgCase != '0300' || !msgCase) {
                  //  this.commonService.gTrack('addwallet','adding money to wallet failed');
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                    page: 'Add Money Wallet'
                  });
                  _this2.util.showToast('Payment failed', 'bottom');
                }
              };
              var errorCallback = error => {
                // this.commonService.gTrack('addwallet','adding money to wallet failed');
                _this2.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                  page: 'Add Money Wallet'
                });
                _this2.util.showToast('Payment failed', 'bottom');
              };
              WLCheckout.open(options, paymentCallback, errorCallback);
            } else if (_this2.appData.isIOS) {
              var options = {
                "features": {
                  "enableExpressPay": true,
                  "enableInstrumentDeRegistration": true,
                  "enableMerTxnDetails": true,
                  "enableNewWindowFlow": true
                },
                "consumerData": {
                  "deviceId": "iOSSH2",
                  //supported values "ANDROIDSH1" or "ANDROIDSH2" for Android and supported values "iOSSH1" or "iOSSH2" for iOS
                  //result.payment_mode
                  "token": res.token,
                  "paymentMode": "all",
                  "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                  //provided merchant logo will be displayed
                  "merchantId": marchantKey,
                  "currency": "INR",
                  "consumerId": res.consumer_id,
                  "consumerMobileNo": res.consumer_mobile_no,
                  "consumerEmailId": res.consumer_email_id,
                  "txnId": res.txn_id,
                  //Unique merchant transaction ID
                  "items": [{
                    "itemId": "FIRST",
                    "amount": res.amount,
                    // "comAmt": result.Amount
                    // "amount": "8",
                    "comAmt": "0"
                  }],
                  "customStyle": {
                    "PRIMARY_COLOR_CODE": "#45beaa",
                    //merchant primary color code
                    "SECONDARY_COLOR_CODE": "#FFFFFF",
                    //provide merchant"s suitable color code
                    "BUTTON_COLOR_CODE_1": "#2d8c8c",
                    //merchant"s button background color code
                    "BUTTON_COLOR_CODE_2": "#FFFFFF" //provide merchant"s suitable color code for button text
                  }
                }
              };
              var paymentCallback = response => {
                let techSuccessMsg = JSON.parse(response).msg;
                let msgCase = techSuccessMsg.split('|')[0];
                if (msgCase == '0300') {
                  let merchantId = response.merchant_code;
                  var halfKey = _this2.emcription(_this2.metaData.serverDate, _this2.metaData.subdomain);
                  let message = btoa(techSuccessMsg);
                  message = message.replace(halfKey, '');
                  //  this.commonService.gTrack('addWallet','adding money to wallet success');
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Add Money Wallet'
                  });
                  _this2.modalCtrl.dismiss('success');
                  _this2.apiFactory.techProcessWalletCall(merchantId, res.amount, message).subscribe(result => {}, err => {});
                } else if (msgCase != '0300' || !msgCase) {
                  // this.commonService.gTrack('addwallet','adding money to wallet failed');
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                    page: 'Add Money Wallet'
                  });
                  _this2.util.showToast('Payment failed', 'bottom');
                }
              };
              var errorCallback = error => {
                // this.commonService.gTrack('addwallet','adding money to wallet failed');
                _this2.firebaseAnalyticsService.logCustomEvent('payment_failed', {
                  page: 'Add Money Wallet'
                });
                _this2.util.showToast('Payment failed', 'bottom');
              };
              WLCheckout.open(options, paymentCallback, errorCallback);
            }
          } else if (_this2.paymentType == '32-22-PHONEPE_V2') {
            const payFlowUrl = res === null || res === void 0 ? void 0 : res.pay_flow;
            if (payFlowUrl) {
              let browser;
              let paymentCompleted = false;
              if (_this2.appData.isWEBAPP) {
                browser = _this2.iab.create(payFlowUrl, '_self', {
                  location: 'no',
                  toolbar: 'no'
                });
              } else {
                browser = _this2.iab.create(payFlowUrl, '_blank', {
                  location: 'no',
                  toolbar: 'no',
                  phonepepopup: 'yes'
                });
              }
              browser.on('loadstart').subscribe(event => {
                const currentUrl = event.url;
                if (currentUrl.indexOf('add-money-wallet-confirm') > -1) {
                  paymentCompleted = true;
                  _this2.viewTicket = true;
                  _this2.paymentFailed = false;
                  _this2.firebaseAnalyticsService.logCustomEvent('payment_success', {
                    page: 'Add Money Wallet'
                  });
                  browser.close();
                  _this2.modalCtrl.dismiss('success');
                } else if (currentUrl.indexOf('add-money-wallet-cancel') > -1 || currentUrl.indexOf('failed') > -1) {
                  paymentCompleted = true;
                  _this2.viewTicket = false;
                  _this2.paymentFailed = true;
                  browser.close();
                  _this2.modalCtrl.dismiss();
                }
              });
              browser.on('exit').subscribe(() => {
                if (!paymentCompleted) {
                  _this2.modalCtrl.dismiss();
                }
              });
            }
          } else if (_this2.paymentType == '60' && res.is_phonepe_v2_payment) {
            if (!_this2.appData.isWEBAPP && (_this2.appData.isANDROID || _this2.appData.isIOS)) {
              const payload = {
                merchantId: res.merchant_id,
                orderId: res.orderId,
                token: res.token,
                amount: res.amount,
                paymentMode: {
                  type: "PAY_PAGE"
                }
              };
              yield ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_4__.PhonePePaymentPlugin.init({
                environment: res.is_live_environment ? 'PRODUCTION' : 'SANDBOX',
                merchantId: res.merchant_id,
                flowId: res.customer_transaction_id,
                enableLogging: false
              }).then(() => {
                ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_4__.PhonePePaymentPlugin.startTransaction({
                  request: JSON.stringify(payload),
                  showLoaderFlag: true,
                  appSchema: _this2.appData.isANDROID ? '' : 'mytravelApplication'
                }).then(resp => {
                  // Example:
                  if (resp['status'] === "SUCCESS" || resp['status'] === "COMPLETED" || resp['code'] === "PAYMENT_SUCCESS") {
                    // Payment completed successfully
                    //   this.verifyPaymentOnServer(result.orderId);
                  } else if (resp['status'] === "FAILED" || resp['status'] === "FAILURE") {
                    // Payment failed
                  } else if (resp['status'] === "CANCELLED" || resp['status'] === "CANCEL") {
                    // User cancelled
                  }
                  _this2.call_Pay_Status(res);
                }).catch(err => {
                  console.error("Transaction Error: ", err);
                });
              }).catch(error => {
                console.error("PhonePe Init Error: ", error);
              });
            } else if (_this2.appData.isWEBAPP) {
              if (res.payment_link) _this2.openInNewTab(res.payment_link);else _this2.util.showToast("Payment link not found");
            }
          } else if (_this2.paymentType == '63') {
            if (res.is_cc_avenue_icici_direct_payment && res.payment_url) {
              _this2.goToCCavenuePayment(res);
            } else {
              _this2.util.showToast(res.message);
            }
          } else if (res.payment_url && _this2.paymentType != "26" && _this2.paymentType != "37") {
            // this.commonService.gTrack("addwalletsuccess")
            _this2.openBrowser(res.payment_url, res);
          } else {
            _this2.util.showToast("Something went wrong, please try again later.");
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), err => {
      this.loader.hideLoadingDefault();
    });
  }
  redirectToPayU(result) {
    const isMobileApp = this.platform.is('cordova') || this.platform.is('capacitor');
    const isIOS = this.platform.is('ios');
    const formInputs = `
      <input type="hidden" name="key" value="${result.key}" />
      <input type="hidden" name="txnid" value="${result.txnid}" />
      <input type="hidden" name="amount" value="${result.amount}" />
      <input type="hidden" name="productinfo" value="${result.productinfo}" />
      <input type="hidden" name="firstname" value="${result.firstname}" />
      <input type="hidden" name="email" value="${result.email}" />
      <input type="hidden" name="phone" value="${result.phone}" />
      <input type="hidden" name="surl" value="${result.surl}" />
      <input type="hidden" name="furl" value="${result.furl}" />
      <input type="hidden" name="hash" value="${result.hash}" />
    `;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Redirecting to PayU...</title>
      </head>
      <body onload="document.forms[0].submit();" style="margin:0;padding:0;">
        <form method="POST" action="${result.payment_url}">
          ${formInputs}
        </form>
      </body>
      </html>
    `;
    if (isMobileApp && isIOS && this.appData.isIOS && !this.appData.isWEBAPP) {
      const base64HTML = btoa(unescape(encodeURIComponent(htmlContent)));
      const dataUri = `data:text/html;base64,${base64HTML}`;
      const browser = this.iab.create(dataUri, '_blank', {
        location: 'no',
        toolbar: 'yes',
        closebuttoncaption: 'Cancel',
        hardwareback: 'yes',
        toolbarposition: 'top',
        hidespinner: 'no'
      });
      browser.on('loadstart').subscribe(event => {
        console.log("Navigated to:", event.url);
        if (event.url.indexOf('payu-success') > -1 || event.url.indexOf('add-money-wallet-confirm') > -1) {
          this.commonService.gTrack('addwallet', 'adding money to wallet success');
          browser.close();
          this.modalCtrl.dismiss('success');
        } else if (event.url.indexOf('payu-failure') > -1 || event.url.indexOf('payment-cancelled') > -1 || event.url.indexOf('add-money-wallet-cancel') > -1) {
          this.commonService.gTrack('payu', 'failed');
          browser.close();
          this.modalCtrl.dismiss();
        }
      });
      browser.on('exit').subscribe(() => {
        this.modalCtrl.dismiss(); // Optional: fallback cancel handler
      });
    } else if (this.appData.isWEBAPP) {
      // Web fallback
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = result.payment_url;
      form.style.display = 'none';
      const fields = {
        key: result.key,
        txnid: result.txnid,
        amount: result.amount,
        productinfo: result.productinfo,
        firstname: result.firstname,
        email: result.email,
        phone: result.phone,
        surl: result.surl,
        furl: result.furl,
        hash: result.hash
      };
      for (const key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key] || '';
        form.appendChild(input);
      }
      // this.viewTicket = true;
      document.body.appendChild(form);
      form.submit();
    }
  }
  redirectToPaytm(result) {
    console.log("redirectToPaytm", JSON.stringify(result));
    // if (result.pay_gay_url && result.CHECKSUMHASH) {
    const isMobileApp = this.platform.is('cordova') || this.platform.is('capacitor');
    const isIOS = this.platform.is('ios');
    const formInputs = `
          <input type="hidden" name="CHANNEL_ID" value="${result.CHANNEL_ID}" />
          <input type="hidden" name="CUST_ID" value="${result.CUST_ID}" />
          <input type="hidden" name="EMAIL" value="${result.EMAIL}" />
          <input type="hidden" name="INDUSTRY_TYPE_ID" value="${result.INDUSTRY_TYPE_ID}" />
          <input type="hidden" name="MID" value="${result.MID}" />
          <input type="hidden" name="MOBILE_NO" value="${result.MOBILE_NO}" />
          <input type="hidden" name="ORDER_ID" value="${result.ORDER_ID}" />
          <input type="hidden" name="TXN_AMOUNT" value="${result.TXN_AMOUNT}" />
          <input type="hidden" name="WEBSITE" value="${result.WEBSITE}" />
          <input type="hidden" name="CALLBACK_URL" value="${result.CALLBACK_URL}" />
          <input type="hidden" name="CHECKSUMHASH" value="${result.CHECKSUMHASH}" />
        `;
    const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <title>Redirecting to Paytm...</title>
            ${isIOS ? `<style>body { -webkit-touch-callout: none; -webkit-user-select: none; }</style>` : ''}
          </head>
          <body onload="document.forms[0].submit();" style="margin:0;padding:0;">
            <form method="POST" action="${result.payment_url}">
              ${formInputs}
            </form>
          </body>
          </html>
        `;
    if (isMobileApp && this.appData.isIOS && !this.appData.isWEBAPP) {
      const base64HTML = btoa(unescape(encodeURIComponent(htmlContent)));
      const dataUri = `data:text/html;base64,${base64HTML}`;
      // 👇 Important: Keep toolbar for iOS to allow manual Cancel
      const browser = this.iab.create(dataUri, '_blank', {
        location: 'no',
        toolbar: 'yes',
        closebuttoncaption: 'Cancel',
        hardwareback: 'yes',
        toolbarposition: 'top',
        hidespinner: 'no'
      });
      browser.on('loadstart').subscribe(event => {
        const currentUrl = event.url;
        if (currentUrl.includes('status=0') || currentUrl.includes('pnr_number')) {
          browser.close();
          this.handlePaymentSuccess(result);
        } else if (currentUrl.includes('ticket_failure') || currentUrl.includes('status=1') || currentUrl.includes('customerCancellation') || currentUrl.includes('ticket-cancel') || currentUrl.includes('payment-cancelled')) {
          browser.close();
          this.paymentFailed = true;
          this.handlePaymentFailure();
        }
      });
      browser.on('exit').subscribe(() => {
        this.paymentFailed = true;
        this.handlePaymentFailure();
      });
      this.platform.backButton.subscribeWithPriority(10, () => {
        browser.close();
      });
    } else if (this.appData.isWEBAPP && !(this.appData.isIOS && isMobileApp)) {
      // WEB fallback
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = result.payment_url;
      form.style.display = 'none';
      const fields = {
        CHANNEL_ID: result.CHANNEL_ID,
        CUST_ID: result.CUST_ID,
        EMAIL: result.EMAIL,
        INDUSTRY_TYPE_ID: result.INDUSTRY_TYPE_ID,
        MID: result.MID,
        MOBILE_NO: result.MOBILE_NO,
        ORDER_ID: result.ORDER_ID,
        TXN_AMOUNT: result.TXN_AMOUNT,
        WEBSITE: result.WEBSITE,
        CALLBACK_URL: result.CALLBACK_URL,
        CHECKSUMHASH: result.CHECKSUMHASH
      };
      for (const key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key] || '';
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
    }
    // }
  }
  handlePaymentSuccess(result) {
    this.commonStorage.localSet('bookedTicketDetails', result);
    this.viewTicket = true;
    this.paymentFailed = false;
    // redirect or navigate to ticket details page
    this.navCtrl.navigateRoot('booking-details', {
      queryParams: {
        new_booking: true,
        // is_roundTrip: true,
        hideLocateTrackBus: true
      }
    });
  }
  handlePaymentFailure() {
    // this.commonStorage.localRemove('bookedTicketDetails');
    this.paymentFailed = true;
    this.viewTicket = false;
    // this.util.showToast('Payment failed. Please try again.');
  }
  gotoPaymentModal(url) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this3.modalController.create({
        component: _modal_payment_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__.ModalPaymentPage,
        componentProps: {
          formHtml: _this3.resultScript,
          url: url
        }
      });
      yield modal.present();
    })();
  }
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    input.value = sanitizedValue;
    if (this.amount !== undefined) {
      this.amount = sanitizedValue;
    } else {
      this.walletBalance = sanitizedValue;
    }
  }
  payWithRazorpay(ticketData) {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Hello razorpay");
      var halfKey = _this4.emcription(_this4.metaData.serverDate, _this4.metaData.subdomain);
      let marchantKey = atob(ticketData.merchant_id);
      marchantKey = marchantKey.replace(halfKey, '');
      let imageUrl = '';
      if (_this4.metaData.msiteFolder == 'ourbustheme') {
        imageUrl = _this4.metaData.favicon ? _this4.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
      } else {
        imageUrl = _this4.metaData.favicon ? _this4.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
      }
      var options = {
        description: 'Add money in the wallet.',
        image: imageUrl,
        order_id: ticketData.order_id,
        currency: 'INR',
        key: marchantKey,
        amount: ticketData.amount,
        prefill: {
          name: ticketData.passenger_name,
          email: ticketData.email_id,
          contact: ticketData.phone_no
        },
        theme: {
          color: '#3399cc'
        }
      };
      try {
        const success = yield capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__.Checkout.open(options);
        console.log("Razorpay Success Response:", success);
        let successData;
        if (typeof success.response === 'string') {
          successData = JSON.parse(success.response); // Convert JSON string to object
          console.log("success.response", success.response, JSON.parse(success.response));
        } else {
          successData = success.response;
        }
        const razorpayPaymentId = successData.razorpay_payment_id;
        if (!razorpayPaymentId) {
          throw new Error("Payment ID not received from Razorpay.");
        }
        // Payment successful
        _this4.firebaseAnalyticsService.logCustomEvent('razorpay_payment_success', {
          page: 'Add Money Wallet'
        });
        // await this.apiFactory.addmoneySuccess(ticketData.amount, ticketData.customer_transaction_id, razorpayPaymentId).toPromise();
        _this4.apiFactory.addmoneySuccess(ticketData.amount, ticketData.customer_transaction_id, razorpayPaymentId).subscribe({
          next: response => {
            // handle success response here
            console.log('Money added successfully:', response);
          },
          error: error => {
            // handle error here
            console.error('Error adding money:', error);
          }
        });
        _this4.navigateWithLoader();
      } catch (error) {
        // Payment failed
        _this4.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', {
          page: 'Add Money Wallet'
        });
        // await this.apiFactory.addmoneyFailure(ticketData.amount, ticketData.customer_transaction_id, ticketData.order_id).toPromise();
        _this4.apiFactory.addmoneyFailure(ticketData.amount, ticketData.customer_transaction_id, ticketData.order_id).subscribe({
          next: response => {
            // Handle success response
            console.log('Failure recorded successfully:', response);
          },
          error: error => {
            // Handle error
            console.error('Error recording failure:', error);
          }
        });
        _this4.navigateWithLoader1();
      }
    })();
  }
  payWithRazorpay1(ticketData) {
    var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
    let marchantKey = atob(ticketData.merchant_id);
    marchantKey = marchantKey.replace(halfKey, '');
    let imageUrl = '';
    if (this.metaData.msiteFolder == 'ourbustheme') {
      imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
    } else {
      imageUrl = this.metaData.favicon ? this.metaData.favicon : 'https://i.imgur.com/3g7nmJC.png';
    }
    var options = {
      description: 'Add money in the wallet.',
      image: imageUrl,
      order_id: ticketData.order_id,
      currency: 'INR',
      key: marchantKey,
      amount: ticketData.amount,
      prefill: {
        name: ticketData.passenger_name,
        email: ticketData.email_id,
        contact: ticketData.phone_no
      },
      theme: {
        color: '#3399cc'
      }
    };
    var successCallback = success => {
      // this.commonService.gTrack('addWallet','adding money to wallet success');
      this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_success', {
        page: 'Add Money Wallet'
      });
      var orderId = success.razorpay_order_id;
      var signature = success.razorpay_signature;
      this.apiFactory.addmoneySuccess(ticketData.amount, ticketData.customer_transaction_id, success.razorpay_payment_id).subscribe(data => {}, err => {});
      this.navigateWithLoader();
    };
    var cancelCallback = error => {
      // alert(error.description + ' (Error '+error.code+')');
      // this.commonService.gTrack('addwallet','adding money to wallet failed');
      this.firebaseAnalyticsService.logCustomEvent('razorpay_payment_failed', {
        page: 'Add Money Wallet'
      });
      // this.util.showToast('Payment failed', 'bottom');
      this.apiFactory.addmoneyFailure(ticketData.amount, ticketData.customer_transaction_id, ticketData.order_id).subscribe(data => {
        // this.commonService.gTrack('addWallet','adding money to wallet success')
      }, err => {});
      this.navigateWithLoader1();
    };
    // RazorpayCheckout.on('payment.success', successCallback)
    // RazorpayCheckout.on('payment.cancel', cancelCallback)
    // RazorpayCheckout.open(options)
  }
  navigateWithLoader() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingController.create({
        message: 'Please wait...',
        duration: 3000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        if (_this5.metaData.msiteFolder == 'ourbustheme') {
          _this5.logoutNoteModal = true;
        } else {
          _this5.util.showToast('Money added to wallet successfully', 'bottom');
          _this5.modalCtrl.dismiss('success');
        }
      });
    })();
  }
  navigateWithLoader1() {
    var _this6 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this6.loadingController.create({
        message: 'Please wait...',
        duration: 3000
      });
      yield loading.present();
      loading.onDidDismiss().then(() => {
        if (_this6.metaData.msiteFolder == 'ourbustheme') {
          _this6.paymentFaild = true;
        } else {
          _this6.commonService.gTrack('addwallet', 'adding money to wallet failed');
          _this6.util.showToast('Payment failed', 'bottom');
        }
      });
    })();
  }
  viewWallet() {
    // this.util.showToast('Money added to wallet successfully', 'bottom');
    this.modalCtrl.dismiss('success');
  }
  addpaymentsave(amount, customer_transaction_id, razorpay_payment_id) {
    this.apiFactory.addmoneySuccess(amount, customer_transaction_id, razorpay_payment_id).subscribe(data => {
      // this.commonService.gTrack('addWallet','adding money to wallet success')
    }, err => {});
  }
  openBrowser(url, data) {
    if ((this.platform.is('cordova') || this.platform.is('ios') || this.platform.is('android')) && !this.util.isWebApp()) {
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      let payScript = "";
      payScript += "var form = document.getElementById('ts-app-payment-form-redirect');";
      payScript += "form.innerHTML = `" + formHtml + "`;";
      payScript += "form.action = '" + url + "';";
      payScript += "form.method = 'POST';";
      payScript += "form.submit();";
      const browser = this.iab.create(this.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', 'location=no,toolbar=no');
      let self = this;
      browser.on('loadstart').subscribe(event => {
        console.log("Payment Gateway URL:", event.url);
        if (event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1 || event.url.indexOf("order_num") > -1 || event.url.indexOf('add-money-wallet-confirm') > -1) {
          this.firebaseAnalyticsService.logCustomEvent('payment_success', {
            page: 'Add Money Wallet'
          });
          browser.close();
          this.modalCtrl.dismiss('success');
        } else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("status=1") > -1 || event.url.indexOf('failed') > -1 || event.url.indexOf('add-money-wallet-cancel') > -1) {
          // this.commonService.gTrack('addwallet','adding money to wallet failed')
          this.firebaseAnalyticsService.logCustomEvent('payment_failed', {
            page: 'Add Money Wallet'
          });
          browser.close();
          this.modalCtrl.dismiss('1');
        }
      });
      browser.on('loadstop').subscribe(event => {
        browser.executeScript({
          code: "var key = 'hidden'; var keyval = 'yes'; localStorage.setItem('hidden',''); var button = document.createElement('Button'); button.innerHTML = 'Hide Map'; button.style = 'top:0;right:0;position:fixed;'; document.body.appendChild(button); button.setAttribute('onclick','localStorage.setItem(key,keyval);');"
        });
        // var loop = setInterval(function () {
        //   browser.executeScript({
        //     code: "localStorage.getItem( 'hidden' )"
        //   }),
        //     function (values : any) {
        //       var hidden = values[0];
        //       if (hidden === 'yes') {
        //         clearInterval(loop);
        //         browser.hide();
        //       }
        //     }
        // });
        browser.insertCSS({
          code: "input{-webkit-user-select: none !important;}input[type=submit],input[type=button]{-webkit-user-select: auto !important;}"
        });
        if (event.url.indexOf("redirect") > -1) {
          browser.executeScript({
            code: payScript
          });
        }
      });
      browser.on('exit').subscribe(event => {});
    } else {
      // web browser
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      let form = document.getElementById('payMentGateWayForm');
      form.innerHTML = formHtml;
      form.action = url;
      form.method = "POST";
      form.submit();
      // this.openPaymentModel(formHtml,result.pay_gay_url);
    }
  }
  openBrowser1(url, data) {
    this.paymentStart = true;
    this.iframeLoad();
    let form = document.getElementById('payMentGateWayForm');
    if (this.platform.is('cordova')) {
      let formHtml = '';
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let value = data[key];
          if (key == "passenger_contact_details" || key == "passengers_details") {
            value = encodeURIComponent(value);
          }
          let value2 = '';
          if (value) {
            value2 = value.toString().replace(/\n/g, '');
          }
          formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
        }
      }
      if (!(this.paymentType == "31")) {
        form.innerHTML = formHtml;
      }
      this.resultScript = formHtml;
      this.gotoPaymentModal(url);
    } else {
      form.action = url;
      form.method = "POST";
      form.submit();
    }
  }
  iframeLoad() {
    try {
      let iframe = document.getElementById("pay-iframe");
      let iframeData = {
        formHtml: this.formHtml,
        payUrl: this.payUrl
      };
      iframe.contentWindow.postMessage(iframeData, "*");
      let returnUrl = iframe.contentWindow.location.href;
      if (iframe.contentWindow.location.href.indexOf("ticket_confirm") > 0) {
        let pnrNumber = returnUrl.substr(returnUrl.lastIndexOf('pnr_number:') + 11);
      } else if (iframe.contentWindow.location.href.indexOf("failure") > 0) {}
    } catch (e) {}
  }
  goback() {
    this.modalController.dismiss();
  }
  dismissModal() {
    this.logoutNoteModal = true;
  }
  okay() {
    this.paymentFaild = false;
  }
  call_Pay_Status(resp) {
    // this.loader.showLoadingDefault();
    this.checkPhonePeStatus(resp.customer_transaction_id).subscribe({
      next: res => {
        this.loader.hideLoadingDefault();
        if (res.code === 200 && res.status) {
          switch (res.status.toUpperCase()) {
            case 'COMPLETED':
              this.loader.showLoadingDefault();
              this.apiFactory.phone_pe_v2_conpay(resp.customer_transaction_id, "add money", resp.amount).subscribe(resdata => {
                this.loader.hideLoadingDefault();
              }, err => {
                this.loader.hideLoadingDefault();
              });
              this.stopCountdown();
              // this.modalCtrl.dismiss('success');
              this.viewTicket = true;
              this.isPendingPayment = false;
              this.paymentFailed = false;
              this.loader.hideLoadingDefault();
              if (this.pendingTimeOut && this.isPendingPayment) {
                this.viewTicket = true;
                this.isPendingPayment = false;
                this.paymentFailed = false;
              }
              break;
            case 'FAILED':
              // this.releaseBookTicket(ticketOrPnr);
              // this.modalCtrl.dismiss();
              this.stopCountdown();
              this.paymentFailed = true;
              this.viewTicket = false;
              this.isPendingPayment = false;
              this.util.showToast('Payment failed');
              break;
            case 'PENDING':
              if (!this.pendingTimeOut && !this.isPendingPayment) {
                //   this.openSMS('',"Pending_PhonePe_v2",ticketOrPnr);
                this.isPendingPayment = true;
                this.paymentFailed = false;
                this.viewTicket = false;
                this.startCountdownTimer();
              }
              this.pendingTimeOut = setTimeout(() => {
                this.call_Pay_Status(resp);
              }, 1000);
              break;
            default:
              this.util.showToast('Server Error');
              break;
          }
        } else {
          this.loader.hideLoadingDefault();
          this.util.showToast(res.error || res.message || "Invalid payment response or missing data");
        }
      },
      error: () => {
        this.loader.hideLoadingDefault();
        this.util.showToast('Server Error');
      }
    });
  }
  checkPhonePeStatus(ticketNumber) {
    return this.apiFactory.phonepe_v2_payment_success(ticketNumber, '');
  }
  startCountdownTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timer = 10; // reset timer if needed
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        console.log('Timer finished');
        // optionally handle auto cancel:
        // this.isPendingPayment = false;
        // this.paymentFailed = true;
      }
    }, 1000);
  }
  stopCountdown() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timer = 0;
  }
  goToCCavenuePayment(data) {
    console.log("CC Avenue Payment Data: ", data);
    if (this.appData.isIOS || this.appData.isANDROID) {
      this.startIospayment(data);
    } else if (this.appData.isWEBAPP) {
      this.startWebPayment(data);
    }
  }
  startIospayment(data) {
    const htmlContent = `
    <html>
      <body onload="document.forms[0].submit();">
        <form method="POST" action="${data.payment_url}">
          <input type="hidden" name="encRequest" value="${data.encRequest}" />
          <input type="hidden" name="access_code" value="${data.access_code}" />
        </form>
      </body>
    </html>
    `;
    const browser = this.iab.create('data:text/html;base64,' + btoa(htmlContent), '_blank', {
      location: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes'
    });
    console.log("Browser opened for CC Avenue Payment");
    browser.on('loadstart').subscribe(event => {
      const url = event.url;
      if (url.includes('add-money-wallet-confirm')) {
        browser.close();
        this.firebaseAnalyticsService.logCustomEvent('payment_success', {
          page: 'Add Money Wallet'
        });
        this.modalCtrl.dismiss('success');
      } else if (url.includes('add-money-wallet-cancel') || url.includes('sessionTimeOut')) {
        browser.close();
        this.paymentFailed = true;
        this.viewTicket = false;
      }
    });
    browser.on('loadstop').subscribe(event => {
      console.log('Page loaded: ', event.url);
    });
    browser.on('exit').subscribe(() => {
      console.log('Browser closed');
    });
  }
  startWebPayment(data) {
    this.submitViaPopup(data.payment_url, data.encRequest, data.access_code);
  }
  submitViaPopup(url, encRequest, accessCode) {
    const formHtml = `
      <html>
        <body onload="document.forms[0].submit()">
          <form method="POST" action="${url}">
            <input type="hidden" name="encRequest" value="${encRequest}" />
            <input type="hidden" name="access_code" value="${accessCode}" />
          </form>
        </body>
      </html>
    `;
    const blob = new Blob([formHtml], {
      type: 'text/html'
    });
    const blobUrl = URL.createObjectURL(blob);
    const newWindow = window.open(blobUrl);
    if (!newWindow) {
      alert('Popup blocked. Please allow popups for this site.');
    }
  }
}
_AddMoneyWalletPage = AddMoneyWalletPage;
_AddMoneyWalletPage.ɵfac = function AddMoneyWalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_10__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_12__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_13__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_14__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_15__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_17__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController));
};
_AddMoneyWalletPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _AddMoneyWalletPage,
  selectors: [["app-add-money-wallet"]],
  viewQuery: function AddMoneyWalletPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.amountInput = _t.first);
    }
  },
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [["amountInput", ""], [4, "ngIf"], ["size", "2"], ["mode", "md"], [2, "color", "#000", 3, "click"], [1, "themeone-col-header"], [1, "themeone-header-title"], ["padding", "", 4, "ngIf"], ["class", "whole center", 4, "ngIf"], ["padding", ""], [1, "card-1", 2, "margin-bottom", "0px"], [1, "amount"], [3, "ngClass"], [1, "pay-box"], ["type", "number", 2, "background", "white", 3, "ngModelChange", "placeholder", "ngModel"], [3, "click", "ngClass"], ["class", "card-1 mr-tp-16", 4, "ngIf"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], [1, "card-1", "mr-tp-16"], [1, "themeone-pay-box-payment"], ["mode", "md", 3, "ngModelChange", "ngModel"], [4, "ngFor", "ngForOf"], ["button", "", 3, "click", 4, "ngIf"], ["button", "", 3, "click"], ["class", "razorpayImage", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 4, "ngIf"], ["slot", "start", 3, "value"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "", 1, "razorpayImage"], ["mode", "md", "expand", "block", 1, "themeone-login-btn", 3, "click"], [1, "whole", "center"], [1, "legend-box"], [1, "circle1"], [1, "txt-msg"], ["size", "7"], ["size", "5", 1, "dwn-txt", 2, "text-align", "end", 3, "click"], [1, "legend-box", 2, "width", "300px !important"], [2, "color", "grey", "font-weight", "bold"], [1, "txt-msg", 2, "font-size", "14px"], ["size", "12", 1, "dwn-txt", 2, "text-align", "center", 3, "click"], ["expand", "block"], [2, "font-size", "15px"], ["slot", "start"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "arrow-back", "color", "default"], [1, "Contact-details"], ["lines", "none"], ["type", "number", "name", "amount", 3, "ngModelChange", "ngModel"], [1, "pay-box", "payment"], ["mode", "md", "expand", "block", 1, "SeaBird_login-btn", 3, "click"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], ["class", "sb-pax", 4, "ngIf"], ["class", "sb-dialog-backdrop", 4, "ngIf"], ["class", "sb-pay-footer", 4, "ngIf"], [1, "sb-pax"], [1, "sb-pax__form"], [1, "sb-pax-card"], [1, "sb-pax-card__title"], [1, "sb-pfield"], [1, "sb-pfield__label"], [1, "sb-pfield__row"], [1, "sb-wallet-currency"], ["type", "number", "name", "amount", "aria-label", "Amount", 1, "sb-pfield__input", 3, "ngModelChange", "ngModel"], [1, "sb-pay-label"], ["role", "radiogroup", "aria-label", "Payment options", 1, "sb-pay-card", "sb-methods"], ["type", "button", "class", "sb-method", "role", "radio", 3, "click", 4, "ngIf"], ["type", "button", "role", "radio", 1, "sb-method", 3, "click"], [1, "sb-method__text"], ["class", "sb-method__title", 4, "ngIf"], ["class", "sb-method__logo", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "Razorpay", 4, "ngIf"], [1, "sb-radio"], [1, "sb-method__title"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "Razorpay", 1, "sb-method__logo"], [1, "sb-dialog-backdrop"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbAmDone", 1, "sb-dialog", "sb-confirm"], [1, "sb-confirm__icon", "sb-wallet-state-icon"], ["name", "checkmark-circle-outline", "aria-hidden", "true"], ["id", "sbAmDone", 1, "sb-confirm__title"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbAmFail", 1, "sb-dialog", "sb-confirm"], [1, "sb-confirm__icon", "sb-wallet-state-icon", "sb-wallet-result--fail"], ["name", "alert-circle-outline", "aria-hidden", "true"], ["id", "sbAmFail", 1, "sb-confirm__title"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbAmPending", 1, "sb-dialog", "sb-confirm"], [1, "sb-confirm__icon", "sb-wallet-state-icon", "sb-wallet-result--pending"], ["name", "time-outline", "aria-hidden", "true"], ["id", "sbAmPending", 1, "sb-confirm__title"], [1, "sb-confirm__text"], ["type", "button", 1, "sb-btn-primary", 3, "click", "disabled"], [1, "sb-pay-footer"], ["type", "button", 1, "sb-btn-primary", "sb-pay-footer__btn", 3, "click"], [2, "--background", "#fff"], [1, "ourbustheme"], [2, "padding-top", "30px"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "amountField"], ["fill", "outline", "label", "Please enter amount", "labelPlacement", "floating", "type", "tel", "maxlength", "6", 2, "--highlight-color", "var(--sectionHeaderTextColor)", "background", "#fff", "color", "#000", "margin-top", "4px", 3, "ionInput", "ngModelChange", "autofocus", "placeholder", "ngModel"], ["mode", "md", "expand", "block", 1, "login-btn1", 3, "click"], ["class", "whole center ourbustheme", "style", "z-index: 9999", 3, "click", 4, "ngIf"], [1, "Contact-details", 2, "margin-left", "10px", "font-weight", "normal !important", "padding-bottom", "10px"], [1, "ion-no-paading"], ["lines", "none", "button", "", 3, "ngStyle", "click", 4, "ngIf"], ["lines", "none", "button", "", 3, "click", "ngStyle"], ["class", "razorpayImage", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", 4, "ngIf"], ["slot", "end", 1, "ourbus-ion-radio", 3, "value"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", 1, "razorpayImage"], [1, "whole", "center", "ourbustheme", 2, "z-index", "9999", 3, "click"], [1, "txt-msg-hd"], [2, "margin", "10px 0px"], ["size", "12", 1, "themeone-dwn-txt", 3, "click"], ["slot", "start", 2, "--color", "var(--iconsAndButtonsColor) !important", "--color-checked", "var(--iconsAndButtonsColor)", 3, "value"]],
  template: function AddMoneyWalletPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddMoneyWalletPage_ng_container_0_Template, 14, 4, "ng-container", 1)(1, AddMoneyWalletPage_ng_container_1_Template, 13, 5, "ng-container", 1)(2, AddMoneyWalletPage_ng_container_2_Template, 13, 5, "ng-container", 1)(3, AddMoneyWalletPage_ng_container_3_Template, 23, 6, "ng-container", 1)(4, AddMoneyWalletPage_ng_container_4_Template, 13, 5, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:#f7f9fb;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n  border-radius: 4px;\n  margin: 0px 8px;\n}\n\n.pay-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 15px;\n}\n\n.content-md[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.amount[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n.amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  text-align: left;\n  font-size: 1.4em;\n}\n.amount[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.amount[_ngcontent-%COMP%]   .contact-details-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--iconsAndButtonsColor);\n}\n\nion-item.item.item-block.item-radio[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%] {\n  color: #000;\n  text-overflow: initial;\n  white-space: normal;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0;\n  --ion-background-color: white;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\nion-radio-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nlist-md[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n.head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\nion-select[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], \n.item.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-radio-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F2C21A;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  color: #191966;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone-pay-box-payment[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 35px 4px;\n  margin-top: 15px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: #191966;\n  background: #F2C21A;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.themeone-col-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #000;\n}\n\n.themeone-header-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000;\n}\n\n.SeaBird_login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 15px;\n  height: 50px;\n  --border-radius: 26px;\n  text-transform: uppercase;\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n\n.amountField[_ngcontent-%COMP%] {\n  margin: 0px 4px;\n  width: 97%;\n  --background: #fff;\n  --border-color: #737070 !important;\n  --border-style: solid;\n  --highlight-color-focused: #737070 !important;\n  --highlight-height: 1px;\n  --highlight-background: #737070 !important;\n}\n\n.amountField[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]::before, \n.amountField[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]::after {\n  --padding: 0px 20px;\n  background: transparent !important;\n  content: none;\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  --color:var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 325px;\n  height: auto;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  color: #2D2D2D;\n  font-weight: 700;\n}\n\n.themeone-dwn-txt[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  font-size: 18px;\n  padding: 10px;\n  text-align: center;\n  color: white;\n  font-weight: 700;\n  border-radius: 10px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none; \n\n  color: white;\n  --background: grey;\n}\n\n.enable[_ngcontent-%COMP%] {\n  --color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor);\n}"]
});

/***/ },

/***/ 59140
/*!*****************************************************!*\
  !*** ./src/app/modal-payment/modal-payment.page.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPaymentPage: () => (/* binding */ ModalPaymentPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);

var _ModalPaymentPage;



class ModalPaymentPage {
  constructor(navParams, platform, modalCtrl, alertCtrl, navCtrl) {
    this.navParams = navParams;
    this.platform = platform;
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.navCtrl = navCtrl;
    this.formHtml = "";
    this.innerHtmlStr = "";
    this.innerHtmlStr1 = "";
    this.url = "";
    this.platform.backButton.subscribe(() => {
      this.dismiss();
    });
    this.innerHtmlStr = " <iframe id='pay-iframe' srcdoc=" + this.innerHtmlStr1 + " width='100%' height='100%'></iframe>";
    this.formHtml = this.navParams.get('formHtml');
    this.url = this.navParams.get('url');
    this.innerHtmlStr1 = "<!DOCTYPE html><html>" + "<body><b>Please wait we are redirecting to the payment page....</b>" + "<form id='payMentGateWayForm' name='payMentGateWayForm'></form>" + "</body></html>";
    this.openPaymentGateway();
  }
  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  openPaymentGateway() {
    try {
      let form = document.getElementById('payMentGateWayForm');
      let iframe = document.getElementById("pay-iframe");
      var e = document.getElementById("page_is_dirty");
      form.action = this.url;
      form.method = "POST";
      form.submit();
    } catch (err) {
      this.showAlert("Transaction Ended", err);
    }
  }
  showAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'OK',
          handler: data => {}
        }]
      });
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present();
    })();
  }
}
_ModalPaymentPage = ModalPaymentPage;
_ModalPaymentPage.ɵfac = function ModalPaymentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController));
};
_ModalPaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _ModalPaymentPage,
  selectors: [["app-modal-payment"]],
  standalone: false,
  decls: 7,
  vars: 1,
  consts: [["mode", "md"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], ["id", "pay-iframe", "width", "100%", "height", "100%", 3, "srcdoc"]],
  template: function ModalPaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "form", 1)(6, "iframe", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("srcdoc", ctx.innerHtmlStr, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar],
  encapsulation: 2
});

/***/ },

/***/ 47402
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appdata */ 40172);
/* harmony import */ var _util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util-provider */ 81101);

var _FirebaseAnalyticsService;







class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata, util) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    this.util = util;
    this.isInitialized = false;
    this.initializationPromise = null;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializationPromise = this.initializeAnalytics(localData);
    this.generateNewSessionId();
  }
  initializeAnalytics(localData) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let firebaseInitOptions;
      if (localData && localData.msiteFolder == 'cbustheme') {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.c_firebaseConfig;
      } else {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig;
      }
      try {
        if (_this.appdata.isANDROID) {
          // For Android, Firebase is auto-initialized via google-services.json
          // No need to call initializeFirebase()
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Android');
        } else if (_this.appdata.isIOS) {
          // For iOS, Firebase is auto-initialized via GoogleService-Info.plist
          // The native Firebase SDK is already loaded, just mark as initialized
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for iOS');
        } else {
          // For Web, use initializeFirebase
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Web');
        }
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
        _this.isInitialized = false;
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Wait for initialization to complete
        if (_this2.initializationPromise) {
          yield _this2.initializationPromise;
        }
        if (!_this2.isInitialized) {
          console.warn('Firebase Analytics is not initialized. Cannot log event:', eventName);
          return;
        }
        if (_this2.operatorName) {
          params['OPERATOR_NAME'] = _this2.operatorName;
        }
        params['op_custom_session_id'] = _this2.session_id;
        if (_this2.appdata.isIOS) {
          // Log event on native iOS platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on iOS`);
        } else if (_this2.appdata.isANDROID) {
          // Log event on native Android platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Android with params:`, params);
        } else if (_this2.appdata.isWEBAPP) {
          // Log event on web
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Web`);
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
  // Check if Firebase Analytics is initialized
  isAnalyticsReady() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.initializationPromise) {
        yield _this3.initializationPromise;
      }
      return _this3.isInitialized;
    })();
  }
  // Method to manually initialize if needed
  ensureInitialized() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.initializationPromise) {
        yield _this4.initializationPromise;
      }
      if (!_this4.isInitialized) {
        console.warn('Firebase Analytics initialization failed or is not complete');
      }
    })();
  }
  generateNewSessionId() {
    if (this.sessionInterval) {
      clearInterval(this.sessionInterval);
    }
    this.session_id = this.util.generateSid();
    this.sessionInterval = setInterval(() => {
      this.generateNewSessionId();
    }, 30 * 60 * 1000);
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 45312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  c_firebaseConfig: {
    apiKey: "AIzaSyCGL9kGMW80ARug7-1-m0zHX0q4N6EMmNg",
    authDomain: "pc-api-5560718033266272099-659.firebaseapp.com",
    projectId: "pc-api-5560718033266272099-659",
    storageBucket: "pc-api-5560718033266272099-659.firebasestorage.app",
    messagingSenderId: "276783339554",
    appId: "1:276783339554:web:a3d1878b9e2601740f927b",
    measurementId: "G-8PFZ6HYLEM"
  },
  firebaseConfig: {
    apiKey: "AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA",
    authDomain: "customer-app---mweb.firebaseapp.com",
    projectId: "customer-app---mweb",
    storageBucket: "customer-app---mweb.firebasestorage.app",
    messagingSenderId: "697968204843",
    appId: "1:697968204843:web:2acfadff1e6821c0eede6e",
    measurementId: "G-ZFC9S0PR6W"
  }
};

/***/ },

/***/ 29780
/*!*****************************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/definitions.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 71602
/*!***********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/index.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkout: () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.Checkout),
/* harmony export */   CheckoutWeb: () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.CheckoutWeb)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 29780);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 2408);


//# sourceMappingURL=index.js.map

/***/ },

/***/ 2408
/*!*********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/web.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkout: () => (/* binding */ Checkout),
/* harmony export */   CheckoutWeb: () => (/* binding */ CheckoutWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 29780);


class CheckoutWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
  }
  echo(options) {
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ECHO', options);
      return options;
    })();
  }
  open(options) {
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(options);
      return new Promise((resolve, reject) => {
        var _a;
        var razorpay;
        //add handlers to options to get the success response
        var finalOps = options;
        finalOps['handler'] = function (res) {
          console.log(res.razorpay_payment_id);
          resolve({
            response: res
          });
        };
        finalOps['modal.ondismiss'] = function () {
          reject(JSON.stringify({
            code: 2,
            description: 'Payment Canceled by User'
          }));
        };
        var retryCount = 0;
        if (finalOps.hasOwnProperty('retry')) {
          if (finalOps.retry.enabled === true) {
            retryCount = finalOps.retry.max_count;
          }
        }
        //get the first script tag in the document
        var rjs = document.getElementsByTagName('script')[0];
        //create a HTMLScriptElement object for rzp script injection
        var rzpjs = document.createElement('script');
        rzpjs.id = 'rzp-jssdk';
        rzpjs.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
        (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(rzpjs);
        rzpjs.addEventListener('load', () => {
          try {
            razorpay = new window.Razorpay(finalOps);
            razorpay.open();
            razorpay.on('payment.failed', res => {
              var _a;
              retryCount = retryCount - 1;
              if (retryCount < 0) {
                console.log(res);
                (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(rzpjs);
                reject(res.error);
              }
            });
          } catch (err) {
            reject({
              response: err
            });
          }
        });
      });
      // var rjs = document.getElementsByTagName('script')[0]
      // var razorpay;
      // var js:HTMLScriptElement = document.createElement('script')
      // js.id = 'rzp-jssdk'
      // js.setAttribute('src','https://checkout.razorpay.com/v1/checkout.js')
      // document.body.appendChild(js);
      // document.body.appendChild(js);
      // rjs.parentNode?.appendChild(js)
      // rjs.addEventListener('load',()=>{
      //   try{
      //     razorpay = new (window as any).Razorpay(options)
      //     razorpay.open()
      //     razorpay.on('payment.failed',function(response:any){
      //         console.log('payment failed')
      //         console.log(response)
      //     })
      //   }catch(err){
      //     document.body.removeChild(js)
      //     return{
      //       response: "Problem opening checkouts"
      //     }
      //   }
      // })
      // return {
      //   response:options.key
      // }
    })();
  }
}
const Checkout = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('Checkout', {
  web: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2408)).then(m => new m.CheckoutWeb())
});


//# sourceMappingURL=web.js.map

/***/ },

/***/ 9740
/*!*************************************************************************!*\
  !*** ./node_modules/ionic-capacitor-phonepe-pg/dist/esm/definitions.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 17274
/*!*******************************************************************!*\
  !*** ./node_modules/ionic-capacitor-phonepe-pg/dist/esm/index.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhonePePaymentPlugin: () => (/* binding */ PhonePePaymentPlugin)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 9740);

const PhonePePaymentPlugin = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PhonePePaymentSDK');


//# sourceMappingURL=index.js.map

/***/ }

}]);