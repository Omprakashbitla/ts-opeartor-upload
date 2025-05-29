"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9223],{

/***/ 4880:
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePage: () => (/* binding */ MorePage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _refer_earn_refer_earn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../refer-earn/refer-earn.page */ 66160);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 52233);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 45564);

var _MorePage;
















const _c0 = () => ({
  "top": "130px"
});
const _c1 = () => ({});
function MorePage_ng_container_0_div_10_ion_row_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 39);
  }
}
function MorePage_ng_container_0_div_10_ion_row_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_0_div_10_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_10_ion_row_1_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MorePage_ng_container_0_div_10_ion_row_1_img_2_Template, 1, 0, "img", 33)(3, MorePage_ng_container_0_div_10_ion_row_1_img_3_Template, 1, 1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 35)(5, "ion-label")(6, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-col", 37)(11, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Hello, ", ctx_r2.userProfileName, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
  }
}
function MorePage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MorePage_ng_container_0_div_10_ion_row_1_Template, 13, 4, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 41)(1, "ion-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Sign Up or Login to manage your trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 43)(5, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_11_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_11_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_12_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 47)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Chartered Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 48)(7, "ion-label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function MorePage_ng_container_0_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_13_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Smart Miles Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_22_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.viewTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "View ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_23_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancelTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_24_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.updateTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Update ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_25_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.prePostponeTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Pre/Postpone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_ion_row_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_26_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.referandEarn_cbus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_hr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "hr", 60);
  }
}
function MorePage_ng_container_0_hr_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "hr", 60);
  }
}
function MorePage_ng_container_0_ion_row_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_92_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_ion_row_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_93_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_ion_row_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_94_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_95_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Deactivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Are you sure you want to deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_95_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_95_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_0_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_96_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Logout? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Are you sure you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_96_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_96_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2)(3, "ion-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-content", 5)(7, "div", 6)(8, "div", 7)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, MorePage_ng_container_0_div_10_Template, 2, 1, "div", 0)(11, MorePage_ng_container_0_div_11_Template, 9, 0, "div", 8)(12, MorePage_ng_container_0_ion_row_12_Template, 9, 2, "ion-row", 9)(13, MorePage_ng_container_0_ion_row_13_Template, 7, 0, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-col", 13)(18, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, MorePage_ng_container_0_div_22_Template, 5, 0, "div", 17)(23, MorePage_ng_container_0_div_23_Template, 5, 0, "div", 17)(24, MorePage_ng_container_0_div_24_Template, 5, 0, "div", 17)(25, MorePage_ng_container_0_div_25_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, MorePage_ng_container_0_ion_row_26_Template, 7, 0, "ion-row", 18)(27, MorePage_ng_container_0_hr_27_Template, 1, 0, "hr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-col", 13)(32, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](37, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-col", 13)(39, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Rate this app");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "ion-col", 13)(46, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "Share this app");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](48, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](51, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ion-col", 13)(53, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](55, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "ion-col", 13)(60, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](62, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "ion-col", 13)(67, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](69, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](72, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "ion-col", 13)(74, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "ion-col", 13)(81, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](83, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.faq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](86, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "ion-col", 13)(88, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "Faq");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](90, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](91, MorePage_ng_container_0_hr_91_Template, 1, 0, "hr", 19)(92, MorePage_ng_container_0_ion_row_92_Template, 7, 0, "ion-row", 9)(93, MorePage_ng_container_0_ion_row_93_Template, 7, 0, "ion-row", 9)(94, MorePage_ng_container_0_ion_row_94_Template, 7, 0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](95, MorePage_ng_container_0_div_95_Template, 12, 0, "div", 29)(96, MorePage_ng_container_0_div_96_Template, 12, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](19, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](20, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.cancelOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.isPrePostPone);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r2.isLogin ? "themeone_norow" : "themeone_row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r2.isLogin ? "themeone_norow" : "themeone_row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
function MorePage_ng_container_1_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 96)(2, "ion-title", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-title", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_div_4_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 107);
  }
}
function MorePage_ng_container_1_div_4_div_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 108);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_div_4_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileEmail);
  }
}
function MorePage_ng_container_1_div_4_div_2_ion_col_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_1_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-row", 102)(2, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MorePage_ng_container_1_div_4_div_2_img_3_Template, 1, 0, "img", 103)(4, MorePage_ng_container_1_div_4_div_2_img_4_Template, 1, 1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 105)(6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, MorePage_ng_container_1_div_4_div_2_p_9_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, MorePage_ng_container_1_div_4_div_2_ion_col_12_Template, 2, 0, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.util.isInternational());
  }
}
function MorePage_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MorePage_ng_container_1_div_4_div_2_Template, 13, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_17_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.viewTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "View ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_18_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancelTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_19_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.updateTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Update ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_20_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.prePostponeTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Pre/Postpone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 111)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_21_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_22_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_23_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_24_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_45_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Share this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_102_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_103_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_103_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.agentLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Agent Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_103_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 120)(1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Full Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 74)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MorePage_ng_container_1_div_103_div_2_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MorePage_ng_container_1_div_103_a_4_Template, 9, 0, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
  }
}
function MorePage_ng_container_1_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_106_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_107_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_108_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_109_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Are you sure, Do you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_109_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-col", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_109_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MorePage_ng_container_1_ion_header_1_Template, 5, 1, "ion-header", 0)(2, MorePage_ng_container_1_ion_header_2_Template, 5, 1, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MorePage_ng_container_1_div_4_Template, 3, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 74)(6, "div", 75)(7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-col", 79)(12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, MorePage_ng_container_1_div_17_Template, 5, 0, "div", 17)(18, MorePage_ng_container_1_div_18_Template, 5, 0, "div", 17)(19, MorePage_ng_container_1_div_19_Template, 5, 0, "div", 17)(20, MorePage_ng_container_1_div_20_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, MorePage_ng_container_1_div_21_Template, 9, 0, "div", 83)(22, MorePage_ng_container_1_div_22_Template, 9, 0, "div", 84)(23, MorePage_ng_container_1_div_23_Template, 9, 0, "div", 84)(24, MorePage_ng_container_1_div_24_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 74)(26, "div", 75)(27, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "ion-row")(29, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-col", 79)(32, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ion-row")(38, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "ion-col", 79)(41, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "Rate This App");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, MorePage_ng_container_1_div_45_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "ion-row")(48, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "ion-col", 79)(51, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "ion-row")(57, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "ion-col", 79)(60, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](63, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "ion-row")(66, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](67, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "ion-col", 79)(69, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](72, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "ion-row")(75, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "ion-col", 79)(78, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, "Cancellation Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](81, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "ion-row")(84, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](85, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "ion-col", 79)(87, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](90, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.faq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "ion-row")(93, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](94, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "ion-col", 79)(96, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97, "Faq");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 74)(101, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](102, MorePage_ng_container_1_div_102_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](103, MorePage_ng_container_1_div_103_Template, 5, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "div", 94)(105, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, MorePage_ng_container_1_div_106_Template, 9, 0, "div", 84)(107, MorePage_ng_container_1_div_107_Template, 9, 0, "div", 84)(108, MorePage_ng_container_1_div_108_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](109, MorePage_ng_container_1_div_109_Template, 12, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.cancelOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.isPrePostPone);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.appData.isIndia);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isSocialShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
function MorePage_ng_container_2_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 96)(2, "ion-title", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 99)(2, "ion-title", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_4_div_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 137);
  }
}
function MorePage_ng_container_2_div_4_div_3_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 138);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_2_div_4_div_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileEmail);
  }
}
function MorePage_ng_container_2_div_4_div_3_ion_col_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_2_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 101)(1, "ion-row", 102)(2, "ion-col", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MorePage_ng_container_2_div_4_div_3_img_3_Template, 1, 0, "img", 134)(4, MorePage_ng_container_2_div_4_div_3_img_4_Template, 1, 1, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 136)(6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, MorePage_ng_container_2_div_4_div_3_p_9_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, MorePage_ng_container_2_div_4_div_3_ion_col_12_Template, 2, 0, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.util.isInternational());
  }
}
function MorePage_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div")(2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MorePage_ng_container_2_div_4_div_3_Template, 13, 6, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 111)(1, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_16_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_19_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_40_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Share this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_88_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_91_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_92_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_93_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 79)(5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Are you sure, Do you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-col", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MorePage_ng_container_2_ion_header_1_Template, 4, 0, "ion-header", 0)(2, MorePage_ng_container_2_ion_header_2_Template, 4, 0, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MorePage_ng_container_2_div_4_Template, 4, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 127)(6, "div", 75)(7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.toggleModifyTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-col", 79)(12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, MorePage_ng_container_2_div_16_Template, 9, 0, "div", 83)(17, MorePage_ng_container_2_div_17_Template, 9, 0, "div", 84)(18, MorePage_ng_container_2_div_18_Template, 9, 0, "div", 84)(19, MorePage_ng_container_2_div_19_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 127)(21, "div", 75)(22, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-col", 79)(27, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "ion-col", 79)(36, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Rate This App");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, MorePage_ng_container_2_div_40_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-row")(43, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "ion-col", 79)(46, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "ion-row")(52, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](53, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "ion-col", 79)(55, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](62, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "ion-col", 79)(64, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](67, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "ion-row")(70, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](71, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "ion-col", 79)(73, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Cancellation Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "ion-row")(79, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](80, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "ion-col", 79)(82, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](85, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 74)(87, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](88, MorePage_ng_container_2_div_88_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "div", 94)(90, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](91, MorePage_ng_container_2_div_91_Template, 9, 0, "div", 84)(92, MorePage_ng_container_2_div_92_Template, 9, 0, "div", 84)(93, MorePage_ng_container_2_div_93_Template, 9, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](94, MorePage_ng_container_2_div_94_Template, 12, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.appData.isIndia);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isSocialShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
class MorePage {
  constructor(platform, authenticate, navCtrl, commonStorage, apiFactory, dateService, util, commonService, alertController, router, route, globalData, modalController, appData, popupctrl, iab) {
    this.platform = platform;
    this.authenticate = authenticate;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.util = util;
    this.commonService = commonService;
    this.alertController = alertController;
    this.router = router;
    this.route = route;
    this.globalData = globalData;
    this.modalController = modalController;
    this.appData = appData;
    this.popupctrl = popupctrl;
    this.iab = iab;
    this.isLogin = false;
    this.showModify = false;
    this.logoutNoteModal = false;
    this.deactivateNoteModal = false;
    this.metaData = {};
    this.appUrl = '';
    this.photo = '';
    this.profileDataGet = [];
    this.isSocialShare = false;
    this.profileInfo = [];
    this.userProfileName = "";
    this.userProfileEmail = "";
    this.userProfileMobileNo = "";
    this.isProfileHide = false;
    this.splitData = "";
    this.firstData = "";
    this.balance = 0;
    this.promobalance = 0;
    this.walletbalance = 0;
    this.nonpromobalance = 0;
    this.currencySym = "";
    this.isIos = true;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.loginDetails();
    this.appData.newTheme = this.util.getNewTheme();
    this.isProfileHide = !this.util.isProfileHide();
    this.options = {
      toolbar: {
        height: 56,
        color: 'red'
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
    this.metaData = this.commonStorage.getItem('metaData');
    this.loginType = this.metaData.loginType;
    this.logo = this.commonStorage.getItem("metaData").mobileNavigationLogo ? this.commonStorage.getItem("metaData").mobileNavigationLogo : this.commonStorage.getItem("metaData").headerLogo;
    if (this.platform.is('ios')) {
      this.appUrl = this.commonStorage.getItem("metaData").iosUrl;
    } else if (this.platform.is('android')) {
      this.appUrl = this.commonStorage.getItem("metaData").androidUrl;
    }
  }
  ngOnInit() {
    if (this.util.platformName() == "Web") {
      this.isSocialShare = false;
    } else {
      this.isSocialShare = true;
    }
    this.route.queryParams.subscribe(params => {
      var _this$router$getCurre;
      if ((_this$router$getCurre = this.router.getCurrentNavigation()) !== null && _this$router$getCurre !== void 0 && (_this$router$getCurre = _this$router$getCurre.extras) !== null && _this$router$getCurre !== void 0 && _this$router$getCurre.state) {
        var _this$router$getCurre2;
        this.isLogin = (_this$router$getCurre2 = this.router.getCurrentNavigation()) === null || _this$router$getCurre2 === void 0 || (_this$router$getCurre2 = _this$router$getCurre2.extras) === null || _this$router$getCurre2 === void 0 || (_this$router$getCurre2 = _this$router$getCurre2.state) === null || _this$router$getCurre2 === void 0 ? void 0 : _this$router$getCurre2["login"];
      }
    });
    this.routeSubscription = this.route.url.subscribe(() => {
      this.loginDetails();
    });
  }
  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  loginDetails() {
    let formdata;
    if (localStorage.getItem('currentUser')) {
      this.isLogin = true;
      if (this.isProfileHide) {
        this.loadPersonalData();
      }
    } else {
      this.isLogin = false;
    }
  }
  loadPersonalData() {
    this.apiFactory.getprofileData().subscribe(resultData => {
      if (resultData.code == 401) {
        this.authenticate.logout();
        window.location.reload();
      } else if (resultData.code == 422) {
        this.accountDeRegisterAlert("", resultData.message);
      } else {
        var _resultData$body, _this$profileDataGet;
        this.userProfileName = resultData.first_name + " " + resultData.last_name;
        this.userProfileEmail = resultData.email;
        this.splitData = this.userProfileEmail.split('@')[1];
        this.firstData = this.userProfileEmail.slice(0, 4);
        this.userProfileMobileNo = resultData.mobile_number;
        this.getWalletDetails();
        this.profileInfo = resultData;
        this.commonStorage.localSet('alldata', resultData);
        this.commonStorage.localSet('statedata', resultData.nationality_id);
        this.commonStorage.localSet('forcitydata', resultData.state_code);
        this.commonStorage.localSet('cityId', resultData.city_id);
        if (this.metaData.msiteFolder == 'cbustheme') {
          this.photo = resultData.profile_pic ? resultData.profile_pic : "";
        } else {
          this.photo = this.profileDataGet ? this.profileDataGet.profile_pic : "";
        }
        this.profileDataGet = resultData === null || resultData === void 0 || (_resultData$body = resultData.body) === null || _resultData$body === void 0 ? void 0 : _resultData$body.map(res => res);
        if (this.metaData.msiteFolder == 'cbustheme') {
          this.photo = resultData.profile_pic ? resultData.profile_pic : "";
        } else {
          this.photo = this.profileDataGet ? this.profileDataGet.profile_pic : "";
        }
        if ((_this$profileDataGet = this.profileDataGet) !== null && _this$profileDataGet !== void 0 && _this$profileDataGet.error) {
          this.util.showToast(this.profileDataGet.error);
        } else {}
      }
    }, err => {
      this.util.showToast(JSON.parse(err._body).error);
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
  getWalletDetails() {
    this.metaData = this.commonStorage.getItem('metaData');
    this.currencySym = this.commonStorage.getItem('metaData').currencySym;
    this.apiFactory.getWalletBalance().subscribe(res => {
      if (res.success) {
        this.balance = res.body.balance.toFixed(2);
        this.promobalance = res.body.promotional_balance.toFixed(2);
        this.walletbalance = this.metaData.is_wallet_promotional ? parseFloat(this.balance) + parseFloat(this.promobalance) : parseFloat(this.balance);
        this.nonpromobalance = parseFloat(this.balance);
      }
    }, err => {});
  }
  ionViewDidEnter() {
    this.showModify = false;
  }
  ionViewWillEnter() {}
  gotoLogin() {
    this.navCtrl.navigateForward('login');
  }
  gotoSignup() {
    this.navCtrl.navigateForward('sign-up');
  }
  cancelTicket() {
    this.navCtrl.navigateForward('cancel-ticket');
  }
  gotoWebsite() {
    window.open(this.appData.baseUrl(), "_system", "location=yes");
  }
  updateTicket() {
    let navigationExtras = {
      queryParams: {
        title: "Update ticket",
        from_book_page: false,
        otp_enabled: true
        // newbooking: true
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  prePostponeTicket() {
    this.navCtrl.navigateForward('prepostone');
  }
  agentLogin() {
    window.open(this.metaData.operatorInternalUrl, "_system", "location=yes");
  }
  viewTicket() {
    let navigationExtras = {
      queryParams: {
        title: "View ticket",
        from_book_page: false
        // otp_enabled:false
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  feedBack() {
    this.navCtrl.navigateForward('feedback');
    // window.open('mailto:' + this.userDetails.email, '_system');
  }
  faq() {
    this.navCtrl.navigateForward('faq');
  }
  aboutUs() {
    this.navCtrl.navigateForward('about-us');
  }
  privacyPolicy() {
    this.navCtrl.navigateForward('privacy-policy');
  }
  cancellation() {
    this.navCtrl.navigateForward('cancellation-policies');
  }
  termsCond() {
    this.navCtrl.navigateForward('term-conditions');
  }
  contactUs() {
    this.navCtrl.navigateForward('contact-us');
  }
  changePassword() {
    this.navCtrl.navigateForward('reset-password');
  }
  wallet() {
    this.navCtrl.navigateForward('wallet');
  }
  peronalDetail() {
    if (this.isProfileHide) {
      this.navCtrl.navigateForward('personal-detail');
    }
  }
  logout() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let button = [{
        text: "NO",
        cssClass: 'alert-button-cancel',
        /** @note for new theme design */
        handler: () => {}
      }, {
        text: 'YES',
        cssClass: 'alert-button-okay',
        handler: () => {
          _this2.logoutConfirmed();
        }
      }];
      const alert = yield _this2.alertController.create({
        header: `Logout?`,
        message: '<p>Are you sure you want Logout?</p>',
        buttons: button,
        cssClass: 'theme-1-logout theme1'
      });
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present().then(() => {});
      const crossButton = document.createElement('ion-icon');
      crossButton.setAttribute('name', 'close-outline');
      crossButton.classList.add('cross-button');
      crossButton.addEventListener('click', () => {
        _this2.handleCrossButtonClick(alert);
      });
      const header = document.querySelector('.alert-title');
      if (header) {
        header.appendChild(crossButton);
      }
    })();
  }
  handleCrossButtonClick(alert) {
    alert.dismiss();
  }
  logIn() {
    this.router.navigate(['login']);
  }
  deactivateAcc() {
    this.deactivateNoteModal = true;
  }
  logoutConfirmed() {
    this.globalData.IS_GST = false;
    {
      this.authenticate.logout();
      this.isLogin = false;
      this.navCtrl.navigateForward('tabs/home');
      if (this.loginType == 'Forced Signup with OTP Login') {
        //  this.router.navigate(['forced-login-with-otp']);
        window.location.reload();
      }
    }
  }
  confirmExitApp(title, message, exit) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: title,
        message: message,
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'logoutcancel',
          handler: blah => {}
        }, {
          text: exit ? 'Exit' : 'Logout',
          cssClass: 'logoutbtn',
          handler: () => {
            // this.commonService.gTrack('logOut', 'logged out of app')
            _this3.globalData.IS_GST = false;
            if (exit) {
              navigator['app'].exitApp();
            } else {
              _this3.authenticate.logout();
              _this3.isLogin = false;
              // this.navCtrl.navigateForward('login');
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  deactivateAccConfirm() {
    this.apiFactory.deactivateConsumerStatus(this.authenticate.token, '2').subscribe(res => {
      if (res.code == 200) {
        this.authenticate.logout();
        this.commonStorage.localRemove('origin');
        this.commonStorage.localRemove('destination');
        this.commonStorage.localRemove('passenger_personal_contact');
        this.commonStorage.localRemove('passenger_personal_data');
        this.isLogin = false;
        this.util.showToast(res.message);
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  rateThisApp() {
    var url = '';
    if (this.platform.is('ios')) {
      url = this.commonStorage.getItem("metaData").iosUrl;
    } else {
      url = this.commonStorage.getItem("metaData").androidUrl;
    }
    if (url == '') {
      this.util.showToast('Link currently not available');
    } else {
      const browser = this.iab.create(url, '_system', this.options);
      browser.on('loadstart').subscribe(event => {});
    }
  }
  referandEarn() {
    this.navCtrl.navigateForward('refer-earn');
  }
  smartMilesPoint() {
    this.navCtrl.navigateForward('point-transfer');
  }
  offerPage() {
    if (this.metaData.msiteFolder == 'seabirdTheme') {
      this.commonStorage.setItem('tabSelected', 'morePage');
    }
    this.navCtrl.navigateForward('offer-coupon');
  }
  goToHomePage() {
    this.router.navigate(['/tabs/home']);
  }
  toggleModifyTicket() {
    let navigationExtras = {
      queryParams: {
        title: "View ticket",
        from_book_page: false
        // otp_enabled:false
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  referandEarn_cbus() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _refer_earn_refer_earn_page__WEBPACK_IMPORTED_MODULE_1__.ReferEarnPage,
        // breakpoints: [0, 0.70, 0.80],
        // initialBreakpoint: 0.70,
        backdropDismiss: true,
        cssClass: 'custom-modal'
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
    })();
  }
  trackBus() {
    const options = {
      toolbar: 'yes',
      // Show the toolbar
      toolbarcolor: '#FF0000',
      // Customize toolbar color (optional)
      closebuttoncolor: '#000000',
      // Customize close button color (optional)
      hideurlbar: 'yes',
      // Hide the URL bar (optional)
      location: 'yes',
      // Show the URL in the location bar
      closebuttoncaption: '←',
      // Hide default close button text
      toolbarposition: 'top'
    };
    var url = this.metaData.trackingoUrl;
    const browser = this.iab.create(url, '_blank', options);
    browser.on('loadstart').subscribe(event => {});
  }
  shareApp() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
        title: 'Share the app',
        text: "Install " + _this5.appData.APP_NAME + " app and get discounts on each bus ticket booking, android " + _this5.commonStorage.getItem("metaData").androidUrl + ", IOS " + _this5.commonStorage.getItem("metaData").iosUrl
        // url: this.appUrl
      }).then(() => {}).catch(() => {
        _this5.util.showToast("Failed to share the app");
      });
    })();
  }
  toggleModify() {
    this.showModify = !this.showModify;
  }
}
_MorePage = MorePage;
_MorePage.ɵfac = function MorePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_10__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_11__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__.InAppBrowser));
};
_MorePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _MorePage,
  selectors: [["app-more"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [1, "ion-no-border"], [2, "--background", "#191966"], [1, "themeone_title-main-wthlogin"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [1, "theme1", 2, "position", "absolute", "z-index", "8888", "top", "70px", "--background", "transparent", 3, "ngStyle"], [1, "themeone_main_div", 2, "padding-bottom", "75px", "border-top-left-radius", "25px", "border-top-right-radius", "25px"], [1, "themeone_div_container", 2, "padding-bottom", "70px"], ["class", "themeone_ion-row", 4, "ngIf"], ["class", "themeone_row", 3, "click", 4, "ngIf"], [1, "themeone_row", 3, "click"], ["size", "1.5", 1, "themeone_col"], ["src", "./assets/icon/cbuspencil.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "20px", "width", "25px"], ["size", "8.5", 1, "themeone_col"], [1, "themeone_label"], ["size", "2"], [2, "margin-left", "6px"], ["class", "modify", 4, "ngIf"], ["class", "themeone_norow", 3, "click", 4, "ngIf"], ["style", "border: 3px solid #DADEE3; height: 0px;", 4, "ngIf"], ["src", "./assets/icon/themeone_writefeedback.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/ratenew.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Share.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/aboutusimg.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/termsandconditionimg.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/themeone_modifyticket.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [3, "click", "ngClass"], ["src", "./assets/icon/contactus.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/faqIcon.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "20px", "width", "25px"], ["class", "whole center theme1", "style", "z-index: 9999", 3, "click", 4, "ngIf"], ["class", "themeone_ion-row", 3, "click", 4, "ngIf"], [1, "themeone_ion-row", 3, "click"], ["size", "2", 2, "padding", "0"], ["alt", "", "src", "./assets/icon/themeone-profileimg.svg", "class", "themeone_profile", "item-start", "", 4, "ngIf"], ["alt", "", "class", "themeone_profile", "style", "border-radius: 50%;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "7"], [1, "themeone_h3"], ["size", "3", 2, "display", "flex", "justify-content", "end", "align-items", "flex-start", "padding", "0"], [2, "color", "#191966", "font-size", "14px", "font-weight", "bold", "font-family", "'NotoSans'"], ["alt", "", "src", "./assets/icon/themeone-profileimg.svg", "item-start", "", 1, "themeone_profile"], ["alt", "", "item-start", "", 1, "themeone_profile", 2, "border-radius", "50%", 3, "src"], [1, "themeone_ion-row"], [1, "themeone_signup"], [2, "margin-top", "11px"], [1, "themeone-select-login-btn", 3, "click"], [1, "themeone-select-signup-btn", 3, "click"], ["src", "./././assets/icon/cbusWallet.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["size", "6", 1, "themeone_col"], ["size", "4.5", 2, "text-align", "right", "margin", "auto"], [2, "color", "#191966", "font-size", "16px", "font-weight", "bold", "font-family", "'NotoSans'"], ["src", "./assets/icon/Group264.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [1, "modify"], [3, "click"], ["item-start", "", "name", "eye", 1, "icon-img", 2, "height", "25px", "width", "25px", "color", "#333"], [1, "txt-main", 2, "margin-left", "20px", "color", "black"], ["src", "./assets/icon/themeone_modifyticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Refresh.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/prepostpone.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "themeone_norow", 3, "click"], ["src", "././assets/icon/Frame.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [2, "border", "3px solid #DADEE3", "height", "0px"], ["src", "./assets/icon/change_pass.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/themeone_location.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/theme1logout.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [1, "whole", "center", "theme1", 2, "z-index", "9999", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg1"], ["size", "4"], ["size", "4", 1, "brws-txt1", 3, "click"], ["size", "4", 1, "themeone-dwn-txt", 3, "click"], [1, "txt-msg"], ["size", "4", 1, "brws-txt", 3, "click"], ["style", "margin-top:2%;", 3, "click", 4, "ngIf"], [2, "margin-top", "2%"], [2, "height", "auto", "padding-top", "0px", "padding-bottom", "0px", "margin-left", "7px", "margin-right", "10px", "border-radius", "5px"], [1, "rectangle-box", 2, "padding-left", "0px", "height", "42px", "padding", "6px", 3, "click"], ["size", "1"], ["src", "./assets/icon/Modify Ticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["size", "10"], [1, "txt-main"], ["size", "1", 2, "padding", "0px"], ["src", "./assets/icon/2.svg", "alt", "", "item-end", "", 1, "icon-img"], ["class", "rectangle-box", "style", "padding-left: 0px;    height: 42px;\n      padding: 6px;", 4, "ngIf"], ["class", "rectangle-box", "style", "padding-left: 0px;    height: 42px;\n      padding: 6px;", 3, "click", 4, "ngIf"], ["src", "./assets/icon/Write Feedback.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Rate us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/About us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/privacy-policy-icon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Term and Conditions.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Cancellation Policies.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Contact Us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/faqIcon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["style", "margin-top:2%;", 4, "ngIf"], [2, "margin-top", "2%", "margin-bottom", "90px"], ["class", "whole center", 3, "click", 4, "ngIf"], ["mode", "md", 1, "high-1"], [1, "title-main-wthlogin"], ["alt", "", 1, "icn-main-wthtlogin", 3, "src"], ["mode", "md", 1, "h50"], [2, "margin-top", "2%", 3, "click"], [1, "rectangle-box", "lll", 2, "height", "auto", "padding-top", "0px", "padding-bottom", "0px", "margin-left", "7px", "margin-right", "10px", "border-radius", "5px"], [2, "align-items", "center"], ["alt", "", "src", "./assets/icon/Profile.svg", "class", "icon-img", "style", "height: 35px; width: 35px;", "item-start", "", 4, "ngIf"], ["alt", "", "class", "icon-img", "style", " border-radius: 100px; height: 35px; width: 35px;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "09"], ["size", "1", "style", "padding: 0px;", 4, "ngIf"], ["alt", "", "src", "./assets/icon/Profile.svg", "item-start", "", 1, "icon-img", 2, "height", "35px", "width", "35px"], ["alt", "", "item-start", "", 1, "icon-img", 2, "border-radius", "100px", "height", "35px", "width", "35px", 3, "src"], ["src", "./assets/icon/viewTicket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Cancel.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "rectangle-box", 2, "padding-left", "0px", "height", "42px", "padding", "6px"], ["src", "./assets/icon/wallet.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Smart mile Balance.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Refer and Earn.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/offer-icon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Share App.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Location Track.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["href", "/?mb=1", "style", "text-decoration: none;", 4, "ngIf"], ["src", "./assets/icon/Agent Login.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["href", "/?mb=1", 2, "text-decoration", "none"], ["src", "./assets/icon/Full Website.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Change Password.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/logout.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "whole", "center", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], [3, "click", 4, "ngIf"], [2, "margin-top", "5%"], ["src", "././assets/icon/ic_edit.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_info.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_cancel.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_contact.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["class", "rectangle-box lll", "style", "height: auto;\n      padding-top: 0px;\n      padding-bottom: 0px; margin-left: 7px;\n      margin-right: 10px;border-radius: 5px;", 4, "ngIf"], ["size", "2.5"], ["src", "././assets/icon/seabird_profile_icon.svg", "class", "icon-img", "style", "height: 50px; width: 50px;", "item-start", "", 4, "ngIf"], ["class", "icon-img", "style", " border-radius: 100px; height: 50px; width: 50px;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "8.5"], ["src", "././assets/icon/seabird_profile_icon.svg", "item-start", "", 1, "icon-img", 2, "height", "50px", "width", "50px"], ["item-start", "", 1, "icon-img", 2, "border-radius", "100px", "height", "50px", "width", "50px", 3, "src"], ["src", "././assets/icon/ic_password.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/seabird_logout.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"]],
  template: function MorePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, MorePage_ng_container_0_Template, 97, 21, "ng-container", 0)(1, MorePage_ng_container_1_Template, 110, 18, "ng-container", 0)(2, MorePage_ng_container_2_Template, 95, 13, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.rectangle-box[_ngcontent-%COMP%] {\n  height: 51px;\n  padding: 12px;\n  font-family: NotoSans;\n  border: solid 0.5px #e8e8e8;\n  background-color: #ffffff;\n}\n\n.modify[_ngcontent-%COMP%] {\n  height: 48px;\n  background-color: #ffffff;\n  padding: 12px 12px 12px 16px;\n}\n\n.icon-img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-top: -1px;\n}\n\n.txt-main[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  height: 19px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.icn-main-wthtlogin[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 0;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n}\n\n.title-main-wthlogin[_ngcontent-%COMP%] {\n  margin: 10px 16px 0 0;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n  color: black;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.txt-msg1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.brws-txt1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-left: 20px;\n}\n\n.themeone_main_div[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.themeone_div_container[_ngcontent-%COMP%] {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  background: white;\n}\n\n.themeone_h3[_ngcontent-%COMP%] {\n  font-family: \"NotoSans\";\n  font-size: 16px;\n  font-weight: 600;\n  color: #333333;\n}\n\n.themeone_ion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DADEE3;\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 25px;\n  padding-bottom: 11px;\n}\n\n.themeone_row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DADEE3;\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n.themeone_row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.themeone_norow[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n.themeone_norow[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.themeone_label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--Type-Title, #333);\n  padding-left: 5px;\n}\n\n.themeone_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.themeone_title-main-wthlogin[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: center;\n  --placeholderColor: #fff;\n  color: var(--placeholderColor) !important;\n}\n\n.headd[_ngcontent-%COMP%] {\n  --placeholderColor: #fff;\n  color: var(--placeholderColor) !important;\n}\n\n.themeone_signup[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 700;\n  font-family: \"NotoSans\";\n  font-size: 16px;\n}\n\n.themeone_profile[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.themeone-dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #24249d;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.themeone-select-login-btn[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin: 0px 10px 0px 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  height: 28px;\n  border-radius: 4px;\n  --background: #191966 !important;\n  background: #191966;\n  --background-activated:#191966;\n  box-sizing: content-box;\n}\n\n.themeone-select-signup-btn[_ngcontent-%COMP%] {\n  color: #191966;\n  margin: 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  height: 28px;\n  border-radius: 4px;\n  --background: #FFF !important;\n  background: #FFF;\n  border: 1px solid #191966;\n  --background-activated:#FFF;\n  box-sizing: content-box;\n}\n\n.ourbus_login_border[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ourbus_login[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4CAF50;\n  line-height: 24px;\n  border: 1px solid #4CAF50;\n  padding: 12px 24px;\n  border-radius: 8px;\n}\n\n.seabird_logo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin-left: 0px;\n}\n\n.seabird_center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.seabird_row[_ngcontent-%COMP%] {\n  padding: 3px 0px;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.seabird_img[_ngcontent-%COMP%] {\n  height: 17px;\n  width: 17px;\n}\n\n.seabird_fixed_image[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  bottom: 15%;\n  width: 50px;\n  height: auto;\n  z-index: 1000;\n}\n\n.blkImg[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%);\n}"]
});

/***/ }),

/***/ 41166:
/*!*********************************************!*\
  !*** ./src/app/more/more-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePageRoutingModule: () => (/* binding */ MorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.page */ 4880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _MorePageRoutingModule;




const routes = [{
  path: '',
  component: _more_page__WEBPACK_IMPORTED_MODULE_0__.MorePage
}];
class MorePageRoutingModule {}
_MorePageRoutingModule = MorePageRoutingModule;
_MorePageRoutingModule.ɵfac = function MorePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePageRoutingModule)();
};
_MorePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _MorePageRoutingModule
});
_MorePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MorePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 79223:
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePageModule: () => (/* binding */ MorePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _more_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-routing.module */ 41166);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.page */ 4880);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _MorePageModule;







class MorePageModule {}
_MorePageModule = MorePageModule;
_MorePageModule.ɵfac = function MorePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePageModule)();
};
_MorePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _MorePageModule
});
_MorePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _more_routing_module__WEBPACK_IMPORTED_MODULE_0__.MorePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MorePageModule, {
    declarations: [_more_page__WEBPACK_IMPORTED_MODULE_1__.MorePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _more_routing_module__WEBPACK_IMPORTED_MODULE_0__.MorePageRoutingModule]
  });
})();

/***/ })

}]);