"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9223],{

/***/ 41166
/*!*********************************************!*\
  !*** ./src/app/more/more-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePageRoutingModule: () => (/* binding */ MorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.page */ 4880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _MorePageRoutingModule;




const routes = [{
  path: '',
  component: _more_page__WEBPACK_IMPORTED_MODULE_1__.MorePage
}];
class MorePageRoutingModule {}
_MorePageRoutingModule = MorePageRoutingModule;
_MorePageRoutingModule.ɵfac = function MorePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePageRoutingModule)();
};
_MorePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MorePageRoutingModule
});
_MorePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MorePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 79223
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePageModule: () => (/* binding */ MorePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _more_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-routing.module */ 41166);
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more.page */ 4880);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _MorePageModule;







class MorePageModule {}
_MorePageModule = MorePageModule;
_MorePageModule.ɵfac = function MorePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePageModule)();
};
_MorePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _MorePageModule
});
_MorePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _more_routing_module__WEBPACK_IMPORTED_MODULE_3__.MorePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MorePageModule, {
    declarations: [_more_page__WEBPACK_IMPORTED_MODULE_4__.MorePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _more_routing_module__WEBPACK_IMPORTED_MODULE_3__.MorePageRoutingModule]
  });
})();

/***/ },

/***/ 4880
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorePage: () => (/* binding */ MorePage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _refer_earn_refer_earn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../refer-earn/refer-earn.page */ 66160);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 52233);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 16213);

var _MorePage;

















const _c0 = () => ({
  "": ""
});
const _c1 = () => ({
  "border-bottom": "none"
});
const _c2 = () => ({
  "margin": "0px"
});
const _c3 = a0 => ({
  "disableionitem": a0
});
const _c4 = () => ({
  "border-top": "1px solid #DADEE3"
});
const _c5 = () => ({});
function MorePage_ng_container_0_div_10_ion_row_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 46);
  }
}
function MorePage_ng_container_0_div_10_ion_row_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_0_div_10_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_10_ion_row_1_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MorePage_ng_container_0_div_10_ion_row_1_img_2_Template, 1, 0, "img", 41)(3, MorePage_ng_container_0_div_10_ion_row_1_img_3_Template, 1, 1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 43)(5, "ion-label")(6, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 45)(11, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hello, ", ctx_r2.userProfileName, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_view_profile" : "theme1_view_profile");
  }
}
function MorePage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MorePage_ng_container_0_div_10_ion_row_1_Template, 13, 5, "ion-row", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "ion-label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Sign Up or Login to manage your trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 50)(5, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_11_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_11_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "themeone-select-login-btn" : "themeone-select-login-btn-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "themeone-select-signup-btn" : "themeone-select-signup-btn-2");
  }
}
function MorePage_ng_container_0_ion_row_12_ion_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Chartered Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_ion_row_12_ion_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.walletText);
  }
}
function MorePage_ng_container_0_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_12_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MorePage_ng_container_0_ion_row_12_ion_label_4_Template, 2, 0, "ion-label", 54)(5, MorePage_ng_container_0_ion_row_12_ion_label_5_Template, 2, 1, "ion-label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 55)(7, "ion-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_view_profile" : "theme1_view_profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function MorePage_ng_container_0_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_13_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Smart Miles Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_ion_row_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_14_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.navigateToPayPhoneBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Pay For Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 58);
  }
}
function MorePage_ng_container_0_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 59);
  }
}
function MorePage_ng_container_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_24_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_25_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancelTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_26_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.updateTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Update ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_27_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.prePostponeTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pre/Postpone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_0_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_28_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.referandEarn_cbus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_img_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 70);
  }
}
function MorePage_ng_container_0_img_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 71);
  }
}
function MorePage_ng_container_0_img_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 72);
  }
}
function MorePage_ng_container_0_img_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 73);
  }
}
function MorePage_ng_container_0_img_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 74);
  }
}
function MorePage_ng_container_0_img_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 75);
  }
}
function MorePage_ng_container_0_img_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 28);
  }
}
function MorePage_ng_container_0_img_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 76);
  }
}
function MorePage_ng_container_0_ion_row_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_98_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_ion_row_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_99_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r2.is_delete_request));
  }
}
function MorePage_ng_container_0_ion_row_100_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 82);
  }
}
function MorePage_ng_container_0_ion_row_100_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 83);
  }
}
function MorePage_ng_container_0_ion_row_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_100_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MorePage_ng_container_0_ion_row_100_img_2_Template, 1, 0, "img", 80)(3, MorePage_ng_container_0_ion_row_100_img_3_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 13)(5, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
  }
}
function MorePage_ng_container_0_ion_row_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_ion_row_101_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 13)(4, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_0_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_102_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Deactivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure you want to deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_102_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_102_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_0_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_103_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Logout? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_103_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_div_103_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2)(3, "ion-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 4)(7, "div", 5)(8, "div", 6)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MorePage_ng_container_0_div_10_Template, 2, 1, "div", 0)(11, MorePage_ng_container_0_div_11_Template, 9, 2, "div", 7)(12, MorePage_ng_container_0_ion_row_12_Template, 9, 5, "ion-row", 8)(13, MorePage_ng_container_0_ion_row_13_Template, 7, 0, "ion-row", 8)(14, MorePage_ng_container_0_ion_row_14_Template, 7, 0, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MorePage_ng_container_0_img_17_Template, 1, 0, "img", 11)(18, MorePage_ng_container_0_img_18_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-col", 13)(20, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, MorePage_ng_container_0_div_24_Template, 5, 0, "div", 17)(25, MorePage_ng_container_0_div_25_Template, 5, 0, "div", 18)(26, MorePage_ng_container_0_div_26_Template, 5, 0, "div", 18)(27, MorePage_ng_container_0_div_27_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, MorePage_ng_container_0_ion_row_28_Template, 7, 0, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-col", 13)(34, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, MorePage_ng_container_0_img_39_Template, 1, 0, "img", 23)(40, MorePage_ng_container_0_img_40_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-col", 13)(42, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Rate this app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, MorePage_ng_container_0_img_47_Template, 1, 0, "img", 25)(48, MorePage_ng_container_0_img_48_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ion-col", 13)(50, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Share this app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ion-col", 13)(57, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-col", 13)(64, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, MorePage_ng_container_0_img_69_Template, 1, 0, "img", 29)(70, MorePage_ng_container_0_img_70_Template, 1, 0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "ion-col", 13)(72, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, MorePage_ng_container_0_img_77_Template, 1, 0, "img", 31)(78, MorePage_ng_container_0_img_78_Template, 1, 0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "ion-col", 13)(80, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "ion-col", 13)(87, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "ion-row", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_0_Template_ion_row_click_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.faq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "ion-col", 13)(94, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, MorePage_ng_container_0_ion_row_98_Template, 7, 0, "ion-row", 8)(99, MorePage_ng_container_0_ion_row_99_Template, 7, 3, "ion-row", 36)(100, MorePage_ng_container_0_ion_row_100_Template, 8, 2, "ion-row", 8)(101, MorePage_ng_container_0_ion_row_101_Template, 7, 0, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, MorePage_ng_container_0_div_102_Template, 12, 0, "div", 37)(103, MorePage_ng_container_0_div_103_Template, 12, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_bg_header" : "theme1_bg_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "themeone_title-main-wthlogin" : "themeone_title-main-wthlogin-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_bg_curved" : "theme1_bg_curved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && (ctx_r2.metaData == null ? null : ctx_r2.metaData.isGeneralLogin));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r2.isLogin ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder != "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.cancelOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.isPrePostPone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r2.isLogin ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r2.isLogin ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c1))("ngClass", ctx_r2.isLogin ? "themeone_norow" : "themeone_row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r2.isLogin ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](40, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
function MorePage_ng_container_1_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 119)(2, "ion-title", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-title", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_3_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateNoteModal = !ctx_r2.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_3_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteNoteModal = !ctx_r2.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_4_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteNoteModal = !ctx_r2.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_4_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_1_div_6_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 132);
  }
}
function MorePage_ng_container_1_div_6_div_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 133);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_1_div_6_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileEmail);
  }
}
function MorePage_ng_container_1_div_6_div_2_ion_col_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_1_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-row", 127)(2, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MorePage_ng_container_1_div_6_div_2_img_3_Template, 1, 0, "img", 128)(4, MorePage_ng_container_1_div_6_div_2_img_4_Template, 1, 1, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 130)(6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MorePage_ng_container_1_div_6_div_2_p_9_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MorePage_ng_container_1_div_6_div_2_ion_col_12_Template, 2, 0, "ion-col", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.util.isInternational());
  }
}
function MorePage_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MorePage_ng_container_1_div_6_div_2_Template, 13, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_19_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_20_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancelTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_21_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.updateTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Update ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_22_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.prePostponeTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pre/Postpone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_23_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket("Send_Ticket"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Send ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_24_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket("Email_Ticket"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Email ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 139)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_25_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_26_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_49_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Share this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_106_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_107_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_107_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.agentLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Agent Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_107_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 148)(1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Full Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MorePage_ng_container_1_div_107_div_2_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MorePage_ng_container_1_div_107_a_4_Template, 9, 0, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
  }
}
function MorePage_ng_container_1_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_110_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_111_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deactivateAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Deactivate Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r2.is_delete_request));
  }
}
function MorePage_ng_container_1_div_112_ion_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-badge", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_1_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_112_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.deleteAcc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Delete Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MorePage_ng_container_1_div_112_ion_badge_7_Template, 2, 0, "ion-badge", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, ctx_r2.is_delete_request));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.is_delete_request);
  }
}
function MorePage_ng_container_1_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_113_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_114_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_1_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_115_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure, Do you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_115_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_div_115_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MorePage_ng_container_1_ion_header_1_Template, 5, 1, "ion-header", 0)(2, MorePage_ng_container_1_ion_header_2_Template, 5, 1, "ion-header", 0)(3, MorePage_ng_container_1_div_3_Template, 12, 0, "div", 94)(4, MorePage_ng_container_1_div_4_Template, 15, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MorePage_ng_container_1_div_6_Template, 3, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 96)(8, "div", 97)(9, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-col", 101)(14, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MorePage_ng_container_1_div_19_Template, 5, 0, "div", 105)(20, MorePage_ng_container_1_div_20_Template, 5, 0, "div", 105)(21, MorePage_ng_container_1_div_21_Template, 5, 0, "div", 105)(22, MorePage_ng_container_1_div_22_Template, 5, 0, "div", 105)(23, MorePage_ng_container_1_div_23_Template, 5, 0, "div", 105)(24, MorePage_ng_container_1_div_24_Template, 5, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, MorePage_ng_container_1_div_25_Template, 9, 0, "div", 106)(26, MorePage_ng_container_1_div_26_Template, 9, 0, "div", 107)(27, MorePage_ng_container_1_div_27_Template, 9, 0, "div", 107)(28, MorePage_ng_container_1_div_28_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 96)(30, "div", 97)(31, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-col", 101)(36, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ion-col", 101)(45, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Rate This App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, MorePage_ng_container_1_div_49_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-row")(52, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-col", 101)(55, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-col", 101)(64, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ion-row")(70, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "ion-col", 101)(73, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "ion-row")(79, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "ion-col", 101)(82, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Cancellation Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "ion-row")(88, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "ion-col", 101)(91, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_1_Template_div_click_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.faq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "ion-row")(97, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "ion-col", 101)(100, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 96)(105, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](106, MorePage_ng_container_1_div_106_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, MorePage_ng_container_1_div_107_Template, 5, 2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 117)(109, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, MorePage_ng_container_1_div_110_Template, 9, 0, "div", 107)(111, MorePage_ng_container_1_div_111_Template, 9, 3, "div", 118)(112, MorePage_ng_container_1_div_112_Template, 10, 4, "div", 118)(113, MorePage_ng_container_1_div_113_Template, 9, 0, "div", 107)(114, MorePage_ng_container_1_div_114_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, MorePage_ng_container_1_div_115_Template, 12, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.deleteNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.cancelOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && !ctx_r2.metaData.isPrePostPone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && ctx_r2.metaData.showSentTicketOption && ctx_r2.metaData.msiteFolder !== "ourbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && ctx_r2.metaData.msiteFolder !== "ourbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.appData.isIndia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isSocialShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.profileDataGet2.hasOwnProperty("is_delete_request"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
function MorePage_ng_container_2_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 119)(2, "ion-title", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_2_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 122)(2, "ion-title", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_2_div_4_div_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 169);
  }
}
function MorePage_ng_container_2_div_4_div_3_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 170);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_2_div_4_div_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileEmail);
  }
}
function MorePage_ng_container_2_div_4_div_3_ion_col_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_2_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 126)(1, "ion-row", 127)(2, "ion-col", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MorePage_ng_container_2_div_4_div_3_img_3_Template, 1, 0, "img", 166)(4, MorePage_ng_container_2_div_4_div_3_img_4_Template, 1, 1, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 168)(6, "ion-label")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MorePage_ng_container_2_div_4_div_3_p_9_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MorePage_ng_container_2_div_4_div_3_ion_col_12_Template, 2, 0, "ion-col", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.util.isInternational());
  }
}
function MorePage_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div")(2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MorePage_ng_container_2_div_4_div_3_Template, 13, 6, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
function MorePage_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 139)(1, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_16_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_19_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_40_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Share this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_88_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_91_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_92_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_93_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 101)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_2_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure, Do you want Logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutNoteModal = !ctx_r2.logoutNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_div_94_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logoutConfirmed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MorePage_ng_container_2_ion_header_1_Template, 5, 1, "ion-header", 0)(2, MorePage_ng_container_2_ion_header_2_Template, 5, 1, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MorePage_ng_container_2_div_4_Template, 4, 1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 158)(6, "div", 97)(7, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModifyTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 101)(12, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MorePage_ng_container_2_div_16_Template, 9, 0, "div", 106)(17, MorePage_ng_container_2_div_17_Template, 9, 0, "div", 107)(18, MorePage_ng_container_2_div_18_Template, 9, 0, "div", 107)(19, MorePage_ng_container_2_div_19_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 96)(21, "div", 97)(22, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-col", 101)(27, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-col", 101)(36, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Rate This App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, MorePage_ng_container_2_div_40_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-row")(43, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ion-col", 101)(46, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-row")(52, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-col", 101)(55, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-col", 101)(64, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ion-row")(70, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "ion-col", 101)(73, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Cancellation Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_2_Template_div_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "ion-row")(79, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "ion-col", 101)(82, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 96)(87, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, MorePage_ng_container_2_div_88_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 117)(90, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, MorePage_ng_container_2_div_91_Template, 9, 0, "div", 107)(92, MorePage_ng_container_2_div_92_Template, 9, 0, "div", 107)(93, MorePage_ng_container_2_div_93_Template, 9, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, MorePage_ng_container_2_div_94_Template, 12, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.appData.isIndia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isSocialShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.logoutNoteModal);
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 210);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, (ctx_r2.userProfileName || "").trim().charAt(0)));
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileEmail);
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_ng_container_7_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_section_1_Template_section_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MorePage_ng_container_3_ng_container_7_section_1_img_2_Template, 1, 1, "img", 204)(3, MorePage_ng_container_3_ng_container_7_section_1_span_3_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 205)(5, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MorePage_ng_container_3_ng_container_7_section_1_span_7_Template, 2, 1, "span", 207)(8, MorePage_ng_container_3_ng_container_7_section_1_span_8_Template, 2, 1, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MorePage_ng_container_3_ng_container_7_section_1_span_9_Template, 2, 0, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.userProfileMobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.userProfileEmail && ctx_r2.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
  }
}
function MorePage_ng_container_3_ng_container_7_button_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function MorePage_ng_container_3_ng_container_7_button_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_ng_container_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Seabird Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MorePage_ng_container_3_ng_container_7_button_3_span_4_Template, 2, 2, "span", 218)(5, MorePage_ng_container_3_ng_container_7_button_3_span_5_Template, 2, 0, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isProfileHide);
  }
}
function MorePage_ng_container_3_ng_container_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sbOpenCompletedTrips());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Trips taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.profileInfo == null ? null : ctx_r2.profileInfo.completed_trips_count);
  }
}
function MorePage_ng_container_3_ng_container_7_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.savetravllers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Saved travellers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_ng_container_7_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_ng_container_7_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MorePage_ng_container_3_ng_container_7_section_1_Template, 10, 6, "section", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MorePage_ng_container_3_ng_container_7_button_3_Template, 6, 2, "button", 199)(4, MorePage_ng_container_3_ng_container_7_button_4_Template, 6, 1, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MorePage_ng_container_3_ng_container_7_button_6_Template, 6, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModifyTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MorePage_ng_container_3_ng_container_7_button_13_Template, 6, 0, "button", 189)(14, MorePage_ng_container_3_ng_container_7_button_14_Template, 6, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_ng_container_7_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProfileHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.profileInfo == null ? null : ctx_r2.profileInfo.completed_trips_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn() && ctx_r2.metaData && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
  }
}
function MorePage_ng_container_3_section_8_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_section_8_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 226)(1, "h2", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Log in to see your profile, wallet and trips.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MorePage_ng_container_3_section_8_button_5_Template, 2, 0, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
  }
}
function MorePage_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 180)(1, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModifyTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Modify ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_3_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_3_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Track my Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.shareApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Share this App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_61_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sbLogoutOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_61_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 238)(3, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_61_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sbLogoutOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Log out?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Are you sure you want to log out of your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 245)(12, "button", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_61_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sbLogoutOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_div_61_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sbConfirmLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Yes, Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function MorePage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 173)(2, "ion-toolbar", 174)(3, "div", 175)(4, "h1", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MorePage_ng_container_3_ng_container_7_Template, 21, 6, "ng-container", 0)(8, MorePage_ng_container_3_section_8_Template, 6, 1, "section", 178)(9, MorePage_ng_container_3_div_9_Template, 7, 0, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 180)(11, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Help & support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancellation & refund policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, MorePage_ng_container_3_button_23_Template, 5, 0, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h3", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, MorePage_ng_container_3_button_27_Template, 6, 0, "button", 189)(28, MorePage_ng_container_3_button_28_Template, 6, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.feedBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.rateThisApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "img", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Rate This App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MorePage_ng_container_3_button_41_Template, 6, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.privacyPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_3_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.termsCond());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, MorePage_ng_container_3_div_61_Template, 16, 0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.appData.isIndia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isSocialShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sbLogoutOpen);
  }
}
function MorePage_ng_container_4_ion_header_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 278);
  }
}
function MorePage_ng_container_4_ion_header_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 279);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MorePage_ng_container_4_ion_header_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Add profile photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MorePage_ng_container_4_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 266)(1, "ion-toolbar", 267)(2, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_ion_header_1_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.peronalDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MorePage_ng_container_4_ion_header_1_img_4_Template, 1, 0, "img", 270)(5, MorePage_ng_container_4_ion_header_1_img_5_Template, 1, 1, "img", 271)(6, MorePage_ng_container_4_ion_header_1_div_6_Template, 2, 0, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 273)(8, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-buttons", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_ion_header_1_Template_ion_buttons_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.goToHomePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.userProfileMobileNo);
  }
}
function MorePage_ng_container_4_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 281)(1, "ion-toolbar", 267)(2, "ion-title", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function MorePage_ng_container_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r71);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "My Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 284);
  }
}
function MorePage_ng_container_4_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 285);
  }
}
function MorePage_ng_container_4_div_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_14_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r73);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancelTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_14_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket("Send_Ticket"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Send Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_14_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket("Email_Ticket"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Email Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 286)(1, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_14_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MorePage_ng_container_4_div_14_div_5_Template, 4, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_14_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.updateTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Update Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MorePage_ng_container_4_div_14_div_10_Template, 4, 0, "div", 289)(11, MorePage_ng_container_4_div_14_div_11_Template, 4, 0, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.metaData.cancelOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify && ctx_r2.metaData.showSentTicketOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
  }
}
function MorePage_ng_container_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.smartMilesPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loyalty Point Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.referandEarn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_41_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r78);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.trackBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_48_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r79);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_49_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r80);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_div_50_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MorePage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MorePage_ng_container_4_ion_header_1_Template, 14, 5, "ion-header", 247)(2, MorePage_ng_container_4_ion_header_2_Template, 4, 0, "ion-header", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-content", 249)(4, "div", 250)(5, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MorePage_ng_container_4_div_6_Template, 6, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleModify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MorePage_ng_container_4_img_12_Template, 1, 0, "img", 257)(13, MorePage_ng_container_4_img_13_Template, 1, 0, "img", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MorePage_ng_container_4_div_14_Template, 12, 3, "div", 259)(15, MorePage_ng_container_4_div_15_Template, 6, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.offerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancellation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, MorePage_ng_container_4_div_28_Template, 6, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.contactUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "img", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.faq());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "img", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MorePage_ng_container_4_div_41_Template, 6, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MorePage_ng_container_4_Template_div_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.aboutUs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "img", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, MorePage_ng_container_4_div_48_Template, 6, 0, "div", 252)(49, MorePage_ng_container_4_div_49_Template, 6, 0, "div", 252)(50, MorePage_ng_container_4_div_50_Template, 6, 0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r2.isLogin ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.showModify);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.isAllowSmartMiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin && ctx_r2.metaData && ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.trackingoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLogin && ctx_r2.commonStorage.getItem("metaData") && ctx_r2.commonStorage.getItem("metaData").isGeneralLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLogin);
  }
}
class MorePage {
  constructor(platform, authenticate, navCtrl, commonStorage, apiFactory, dateService, util, commonService, alertController, router, route, globalData, modalController, appData, popupctrl, iab, loader) {
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
    this.loader = loader;
    this.isLogin = false;
    this.showModify = false;
    this.logoutNoteModal = false;
    this.deactivateNoteModal = false;
    // seabirdThemeNew: custom logout confirmation dialog (other themes keep the AlertController alert in logout())
    this.sbLogoutOpen = false;
    this.sbLoggingOut = false;
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
    this.is_delete_request = false;
    this.deleteNoteModal = false;
    this.profileDataGet2 = {};
    this.walletText = '';
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
    const travelsName = this.commonStorage.getItem("metaData").travels_name;
    if (travelsName && travelsName != undefined && travelsName != null && travelsName != '') {
      this.walletText = travelsName + " Wallet";
    } else {
      this.walletText = "Wallet";
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
    this.loader.showLoadingDefault();
    this.apiFactory.getprofileData().subscribe(resultData => {
      if (resultData.code == 401) {
        this.loader.hideLoadingDefault();
        this.authenticate.logout();
        window.location.reload();
      } else if (resultData.code == 422) {
        this.loader.hideLoadingDefault();
        this.accountDeRegisterAlert("", resultData.message);
      } else {
        var _resultData$body, _this$profileDataGet;
        this.loader.hideLoadingDefault();
        this.userProfileName = resultData.first_name + " " + resultData.last_name;
        this.userProfileEmail = resultData.email;
        this.splitData = this.userProfileEmail.split('@')[1];
        this.firstData = this.userProfileEmail.slice(0, 4);
        this.userProfileMobileNo = resultData.mobile_number;
        this.getWalletDetails();
        this.profileInfo = resultData;
        console.log("profileInfo", resultData);
        this.commonStorage.localSet('alldata', resultData);
        this.commonStorage.localSet('statedata', resultData.nationality_id);
        this.commonStorage.localSet('forcitydata', resultData.state_code);
        this.commonStorage.localSet('cityId', resultData.city_id);
        this.profileDataGet = resultData === null || resultData === void 0 || (_resultData$body = resultData.body) === null || _resultData$body === void 0 ? void 0 : _resultData$body.map(res => res);
        if (this.metaData.msiteFolder == 'cbustheme' || this.metaData.msiteFolder == 'networktheme' || this.metaData.msiteFolder == 'shyamolitheme' || this.metaData.msiteFolder == 'seabirdThemeNew') {
          this.photo = resultData.profile_pic ? resultData.profile_pic : "";
        } else {
          this.photo = this.profileDataGet ? this.profileDataGet.profile_pic : "";
        }
        console.log("profileDataGet", this.profileDataGet);
        if ((_this$profileDataGet = this.profileDataGet) !== null && _this$profileDataGet !== void 0 && _this$profileDataGet.error) {
          this.util.showToast(this.profileDataGet.error);
        } else {}
      }
    }, err => {
      this.loader.hideLoadingDefault();
      this.util.showToast(JSON.parse(err._body).error);
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
    this.loader.showLoadingDefault();
    this.apiFactory.getprofileData().subscribe(resultData => {
      var _this$profileDataGet2;
      this.loader.hideLoadingDefault();
      this.profileDataGet2 = resultData;
      this.is_delete_request = (_this$profileDataGet2 = this.profileDataGet) === null || _this$profileDataGet2 === void 0 ? void 0 : _this$profileDataGet2.is_delete_request;
    }, err => {
      this.loader.hideLoadingDefault();
    });
    this.showModify = false;
  }
  ionViewWillEnter() {}
  sbOpenCompletedTrips() {
    this.router.navigate(['/tabs/my-bookings'], {
      state: {
        sbSegment: 'previous'
      }
    });
  }
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
  viewTicket(title = "View ticket") {
    if (title == 'Send_Ticket') title = 'Send Ticket';else if (title == 'Email_Ticket') title = 'Email Ticket';
    let navigationExtras = {
      queryParams: {
        title: title,
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
    this.navCtrl.navigateForward('about-us', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  privacyPolicy() {
    this.navCtrl.navigateForward('privacy-policy', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  cancellation() {
    this.router.navigate(['cancellation-policies'], {
      state: {
        resId: null
      }
    });
  }
  termsCond() {
    this.navCtrl.navigateForward('term-conditions', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  contactUs() {
    this.navCtrl.navigateForward('contact-us', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  changePassword() {
    this.navCtrl.navigateForward('reset-password');
  }
  wallet() {
    this.navCtrl.navigateRoot('wallet', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  peronalDetail() {
    if (this.isProfileHide && this.metaData.msiteFolder != 'shyamolitheme') {
      this.navCtrl.navigateForward('personal-detail');
    } else if (this.isProfileHide && this.metaData.msiteFolder == 'shyamolitheme') {
      this.navCtrl.navigateForward('/tabs/personal-detail');
    }
  }
  logout() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$metaData;
      if (((_this2$metaData = _this2.metaData) === null || _this2$metaData === void 0 ? void 0 : _this2$metaData.msiteFolder) === 'seabirdThemeNew') {
        _this2.sbLoggingOut = false;
        _this2.sbLogoutOpen = true;
        return;
      }
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
      if (_this2.metaData.msiteFolder == 'networktheme') {
        const alert = yield _this2.alertController.create({
          header: `Logout?`,
          // subHeader:header,
          // message:
          //   "Note: Phone bookings will be Hold tentatively till the given time, please confirm or cancel the booking before auto cancellation to avoid charges, visit to TRIPS or WALLET Section."+'</br><br>'+" On confirmation, you will receive the details on your registered mail ID " +
          //   '<strong>'+ this.passengerDetails.contact_detail.email +'</strong>'+
          //   " and number " +
          //   '<strong>'+  this.passengerDetails.contact_detail.mobile_number +'<strong>',
          message: 'Are you sure you want Logout?',
          buttons: button,
          cssClass: 'theme-2-logout theme1'
        });
        const alertElement = document.querySelector('.alert-message');
        if (alertElement && alert.message) {
          alertElement.innerHTML = alert.message.toString();
        }
        yield alert.present().then(() => {
          // alert-head sc-ion-alert-ios
        });
        const crossButton = document.createElement('ion-icon');
        crossButton.setAttribute('name', 'close-outline'); // Replace with the desired icon
        crossButton.setAttribute('mode', 'md');
        crossButton.classList.add('cross-button');
        crossButton.style.position = 'absolute';
        crossButton.style.right = '8%';
        crossButton.addEventListener('click', () => {
          _this2.handleCrossButtonClick(alert);
        });
        const header = document.querySelector('.alert-title');
        if (header) {
          header.appendChild(crossButton);
        }
      } else {
        const alert = yield _this2.alertController.create({
          header: `Logout?`,
          message: 'Are you sure you want Logout?',
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
      }
    })();
  }
  handleCrossButtonClick(alert) {
    alert.dismiss();
  }
  // seabirdThemeNew: "Yes, Log out" → the existing logoutConfirmed(); repeat taps are ignored
  sbConfirmLogout() {
    if (this.sbLoggingOut) {
      return;
    }
    this.sbLoggingOut = true;
    this.sbLogoutOpen = false;
    this.logoutConfirmed();
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
      if (this.isIos) {
        setTimeout(() => {
          this.navCtrl.navigateForward('wait');
        }, 100);
      } else {
        this.navCtrl.navigateForward('tabs/home');
      }
      if (this.loginType == 'Forced Signup with OTP Login') {
        //  this.router.navigate(['forced-login-with-otp']);
        window.location.reload();
      }
    }
  }
  confirmExitApp(title, message, exit) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
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
    this.navCtrl.navigateForward('offer-coupon');
  }
  goToHomePage() {
    this.router.navigate(['/tabs/home']);
  }
  toggleModifyTicket() {
    let navigationExtras = {
      queryParams: {
        title: "View Ticket",
        from_book_page: false
        // otp_enabled:false
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  referandEarn_cbus() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    // if (this.appData.isWEBAPP) {
    window.open(this.metaData.trackingoUrl, "_system", "location=no,toolbar=no");
    // } else {
    // const options: InAppBrowserOptions = {
    //   location: 'no',
    //   hidden: 'no',
    //   clearcache: 'yes',
    //   clearsessioncache: 'yes',
    //   hardwareback: 'yes',
    //   closebuttoncaption: 'Close',
    //   disallowoverscroll: 'no',
    //   toolbar: 'no',
    //   enableViewportScale: 'no',
    // };
    // var url = this.metaData.trackingoUrl;
    // const browser = this.iab.create(url, '_blank', options);
    // browser.on('loadstart').subscribe(event => {
    // });
    // }
  }
  shareApp() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appName = _this5.commonStorage.getItem("metaData").travels_name;
      const iosUrl = _this5.commonStorage.getItem("metaData").iosUrl;
      const androidUrl = _this5.commonStorage.getItem("metaData").androidUrl;
      const shareText = `Install ${appName} app and get discounts on each bus ticket booking, Android : ${androidUrl ? androidUrl : ' App Link not available'}, IOS : ${iosUrl ? iosUrl : ' App Link not available.'}`;
      _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
        title: 'Share the app',
        text: shareText
      }).then(() => {
        console.log('Share completed');
      }).catch(error => {
        var _error$message, _error$message2;
        console.log('Share error:', error);
        if (error.name === 'AbortError' || error.name === 'InvalidStateError' || (_error$message = error.message) !== null && _error$message !== void 0 && _error$message.includes('Share canceled') || (_error$message2 = error.message) !== null && _error$message2 !== void 0 && _error$message2.includes('An earlier share has not yet completed')) {
          return;
        }
        _this5.util.showToast("Failed to share the app");
      });
    })();
  }
  toggleModify() {
    this.showModify = !this.showModify;
  }
  myBookings() {
    this.router.navigate(['/my-bookings']);
  }
  deactivateAccount() {
    if (!this.is_delete_request) {
      this.deactivateNoteModal = true;
    }
  }
  deleteAcc() {
    if (!this.is_delete_request) {
      this.deleteNoteModal = true;
    }
  }
  deleteAccConfirm() {
    let path = '?authentication_token=' + this.authenticate.token;
    this.apiFactory.deleteConsumerStatus(path).subscribe(res => {
      if (res.code == 200) {
        this.presentAlert('', res.message);
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  presentAlert(title, msg) {
    var _this6 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            window.location.reload();
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
  navigateToPayPhoneBooking() {
    this.navCtrl.navigateForward('phone-booking-lookup');
  }
  savetravllers() {
    this.navCtrl.navigateForward('save-travellers');
  }
}
_MorePage = MorePage;
_MorePage.ɵfac = function MorePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MorePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_8__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_9__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_11__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_12__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_14__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_15__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_17__.LoaderService));
};
_MorePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _MorePage,
  selectors: [["app-more"]],
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], [1, "ion-no-border"], [1, "headd", 3, "ngClass"], [3, "ngClass"], [1, "theme1", 2, "position", "absolute", "z-index", "8888", "top", "70px", "--background", "transparent"], [1, "themeone_main_div", 2, "padding-bottom", "75px", "border-top-left-radius", "25px", "border-top-right-radius", "25px"], [1, "themeone_div_container", 2, "padding-bottom", "70px"], ["class", "themeone_ion-row", 4, "ngIf"], ["class", "themeone_row", 3, "click", 4, "ngIf"], [1, "themeone_row", 3, "click", "ngStyle"], ["size", "1.5", 1, "themeone_col"], ["src", "./assets/icon/cbuspencil.svg", "alt", "", "style", "height: 20px; width: 25px;", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/cbuspencil.svg", "alt", "", "style", "height: 20px; width: 25px;filter: invert(0%) sepia(19%) saturate(0%) hue-rotate(46deg) brightness(102%) contrast(100%);", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["size", "8.5", 1, "themeone_col"], [1, "themeone_label"], ["size", "2"], [2, "margin-left", "6px"], ["class", "modify modify-cbus", "style", "margin-top: 18px;", 4, "ngIf"], ["class", "modify modify-cbus", 4, "ngIf"], ["class", "themeone_norow", 3, "click", 4, "ngIf"], [2, "border", "3px solid #DADEE3", "height", "0px", 3, "ngStyle"], [1, "themeone_row", 3, "click"], ["src", "./assets/icon/themeone_writefeedback.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/ratenew.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "././assets/icon/network_rateIcon.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/Share.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "././assets/icon/network_share.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/aboutusimg.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/termsandconditionimg.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/themeone_modifyticket.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "././assets/icon/network_policy.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/termsandconditionimg.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "././assets/icon/network_terms.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/contactus.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [3, "click", "ngStyle", "ngClass"], ["src", "././assets/icon/new_faq.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "20px", "width", "25px"], ["class", "themeone_row", 3, "ngClass", "click", 4, "ngIf"], ["class", "whole center theme1", "style", "z-index: 9999", 3, "click", 4, "ngIf"], ["class", "themeone_ion-row", 3, "click", 4, "ngIf"], [1, "themeone_ion-row", 3, "click"], ["size", "2", 2, "padding", "0"], ["alt", "", "src", "./assets/icon/themeone-profileimg.svg", "class", "themeone_profile", "item-start", "", 4, "ngIf"], ["alt", "", "class", "themeone_profile", "style", "border-radius: 50%;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "7"], [1, "themeone_h3"], ["size", "3", 2, "display", "flex", "justify-content", "end", "align-items", "flex-start", "padding", "0"], ["alt", "", "src", "./assets/icon/themeone-profileimg.svg", "item-start", "", 1, "themeone_profile"], ["alt", "", "item-start", "", 1, "themeone_profile", 2, "border-radius", "50%", 3, "src"], [1, "themeone_ion-row"], [1, "themeone_signup"], [2, "margin-top", "11px"], [3, "click", "ngClass"], ["src", "./././assets/icon/cbusWallet.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["size", "6", 1, "themeone_col"], ["class", "themeone_label", 4, "ngIf"], ["size", "4.5", 2, "text-align", "right", "margin", "auto"], ["src", "./assets/icon/Group264.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/pay-for-phone-booking.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/cbuspencil.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "20px", "width", "25px"], ["src", "./assets/icon/cbuspencil.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "20px", "width", "25px", "filter", "invert(0%) sepia(19%) saturate(0%) hue-rotate(46deg) brightness(102%) contrast(100%)"], [1, "modify", "modify-cbus", 2, "margin-top", "18px"], [3, "click"], ["item-start", "", "name", "eye", 1, "icon-img", 2, "height", "25px", "width", "25px", "color", "#333"], [1, "txt-main", 2, "margin-left", "20px", "color", "black"], [1, "modify", "modify-cbus"], ["src", "./assets/icon/themeone_modifyticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Refresh.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/prepostpone.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "themeone_norow", 3, "click"], ["src", "././assets/icon/Frame.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/ratenew.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/network_rateIcon.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Share.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/network_share.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/themeone_modifyticket.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/network_policy.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/network_terms.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/change_pass.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [1, "themeone_row", 3, "click", "ngClass"], ["name", "power-outline", "alt", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px", "margin-left", "0px"], ["src", "./assets/icon/themeone_location.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "././assets/icon/tracking_new.svg", "style", "height: 25px; width: 25px;", "alt", "", "class", "themeone_icon-img", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/themeone_location.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/tracking_new.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/theme1logout.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "25px", "width", "25px"], [1, "whole", "center", "theme1", 2, "z-index", "9999", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg1"], ["size", "4"], ["size", "4", 1, "brws-txt1", 3, "click"], ["size", "4", 1, "themeone-dwn-txt", 3, "click"], [1, "txt-msg"], ["size", "4", 1, "brws-txt", 3, "click"], ["class", "whole center", 3, "click", 4, "ngIf"], ["style", "margin-top:2%;", 3, "click", 4, "ngIf"], [2, "margin-top", "2%"], [2, "height", "auto", "padding-top", "0px", "padding-bottom", "0px", "margin-left", "7px", "margin-right", "10px", "border-radius", "5px"], [1, "rectangle-box", 2, "padding-left", "0px", "height", "42px", "padding", "6px", 3, "click"], ["size", "1"], ["src", "./assets/icon/Modify Ticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["size", "10"], [1, "txt-main"], ["size", "1", 2, "padding", "0px"], ["src", "./assets/icon/2.svg", "alt", "", "item-end", "", 1, "icon-img"], ["class", "modify", 4, "ngIf"], ["class", "rectangle-box", "style", "padding-left: 0px;    height: 42px;\n      padding: 6px;", 4, "ngIf"], ["class", "rectangle-box", "style", "padding-left: 0px;    height: 42px;\n      padding: 6px;", 3, "click", 4, "ngIf"], ["src", "./assets/icon/Write Feedback.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Rate us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/About us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/privacy-policy-icon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Term and Conditions.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Cancellation Policies.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Contact Us.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/faqIcon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["style", "margin-top:2%;", 4, "ngIf"], [2, "margin-top", "2%", "margin-bottom", "90px"], ["class", "rectangle-box", "style", "padding-left: 0px;    height: 42px;\n      padding: 6px;", 3, "ngClass", "click", 4, "ngIf"], ["mode", "md", 1, "high-1"], [1, "title-main-wthlogin"], ["alt", "", 1, "icn-main-wthtlogin", 3, "src"], ["mode", "md", 1, "h50"], [1, "whole", "center", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], [2, "margin-top", "2%", 3, "click"], [1, "rectangle-box", "lll", 2, "height", "auto", "padding-top", "0px", "padding-bottom", "0px", "margin-left", "7px", "margin-right", "10px", "border-radius", "5px"], [2, "align-items", "center"], ["alt", "", "src", "./assets/icon/Profile.svg", "class", "icon-img", "style", "height: 35px; width: 35px;", "item-start", "", 4, "ngIf"], ["alt", "", "class", "icon-img", "style", " border-radius: 100px; height: 35px; width: 35px;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "09"], ["size", "1", "style", "padding: 0px;", 4, "ngIf"], ["alt", "", "src", "./assets/icon/Profile.svg", "item-start", "", 1, "icon-img", 2, "height", "35px", "width", "35px"], ["alt", "", "item-start", "", 1, "icon-img", 2, "border-radius", "100px", "height", "35px", "width", "35px", 3, "src"], [1, "modify"], ["src", "./assets/icon/viewTicket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Cancel.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/send-ticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/mail-ticket.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "rectangle-box", 2, "padding-left", "0px", "height", "42px", "padding", "6px"], ["src", "./assets/icon/wallet.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Smart mile Balance.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Refer and Earn.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/offer-icon.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Share App.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Location Track.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["href", "/?mb=1", "style", "text-decoration: none;", 4, "ngIf"], ["src", "./assets/icon/Agent Login.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["href", "/?mb=1", 2, "text-decoration", "none"], ["src", "./assets/icon/Full Website.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/Change Password.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "rectangle-box", 2, "padding-left", "0px", "height", "42px", "padding", "6px", 3, "click", "ngClass"], ["src", "./assets/icon/deactivate.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["name", "close-circle-outline", "color", "#afafaf", 1, "icon-img", 2, "height", "25px", "width", "25px"], ["slot", "end", "color", "danger", 4, "ngIf"], ["slot", "end", "color", "danger"], ["src", "./assets/icon/logout.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [3, "click", 4, "ngIf"], [2, "margin-top", "5%"], ["src", "././assets/icon/ic_edit.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_info.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_cancel.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/ic_contact.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], [1, "title-main-wthlogin-seabird"], ["class", "rectangle-box lll", "style", "height: auto;\n      padding-top: 0px;\n      padding-bottom: 0px; margin-left: 7px;\n      margin-right: 10px;border-radius: 5px;", 4, "ngIf"], ["size", "2.5"], ["src", "././assets/icon/seabird_profile_icon.svg", "class", "icon-img", "style", "height: 50px; width: 50px;", "item-start", "", 4, "ngIf"], ["class", "icon-img", "style", " border-radius: 100px; height: 50px; width: 50px;", "item-start", "", 3, "src", 4, "ngIf"], ["size", "8.5"], ["src", "././assets/icon/seabird_profile_icon.svg", "item-start", "", 1, "icon-img", 2, "height", "50px", "width", "50px"], ["item-start", "", 1, "icon-img", 2, "border-radius", "100px", "height", "50px", "width", "50px", 3, "src"], ["src", "././assets/icon/ic_password.svg", "alt", "", "item-start", "", 1, "icon-img", "blkImg", 2, "height", "25px", "width", "25px"], ["src", "././assets/icon/seabird_logout.svg", "alt", "", "item-start", "", 1, "icon-img", 2, "height", "25px", "width", "25px"], [1, "sb-page-header"], [1, "sb-toolbar"], [1, "sb-trips-appbar"], [1, "sb-trips-title"], [1, "sb-account"], ["class", "sb-trips-login", 4, "ngIf"], ["class", "sb-menu", 4, "ngIf"], [1, "sb-menu"], ["type", "button", 1, "sb-menu-row", 3, "click"], [1, "sb-menu-row__icon"], ["src", "./assets/icon/ic_contact.svg", "alt", "", 1, "sb-icon-filter-black"], [1, "sb-menu-row__title"], ["src", "./assets/seabird-new/row-chevron.svg", "alt", "", 1, "sb-menu-row__chevron"], ["src", "./assets/icon/ic_cancel.svg", "alt", "", 1, "sb-icon-filter-black"], ["type", "button", "class", "sb-menu-row sb-menu-row--danger", 3, "click", 4, "ngIf"], [1, "sb-overline", "sb-account-section"], ["type", "button", "class", "sb-menu-row", 3, "click", 4, "ngIf"], ["src", "./assets/icon/Write Feedback.svg", "alt", ""], ["src", "./assets/icon/Rate us.svg", "alt", ""], ["src", "./assets/icon/ic_info.svg", "alt", "", 1, "sb-icon-filter-black"], ["src", "./assets/icon/privacy-policy-icon.svg", "alt", ""], ["src", "./assets/icon/Term and Conditions.svg", "alt", ""], [1, "sb-home__bottom-space"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], ["class", "sb-profile sb-profile--tappable", 3, "click", 4, "ngIf"], [1, "sb-stats"], ["type", "button", "class", "sb-stat", 3, "click", 4, "ngIf"], ["src", "./assets/icon/ic_edit.svg", "alt", "", 1, "sb-icon-filter-black"], ["src", "./assets/icon/ic_password.svg", "alt", "", 1, "sb-icon-filter-black"], [1, "sb-profile", "sb-profile--tappable", 3, "click"], [1, "sb-profile__avatar"], ["alt", "", 3, "src", 4, "ngIf"], [1, "sb-profile__text"], [1, "sb-profile__name"], ["class", "sb-profile__phone", 4, "ngIf"], ["class", "sb-profile__email", 4, "ngIf"], ["class", "sb-profile__edit", "aria-label", "Edit profile", 4, "ngIf"], ["alt", "", 3, "src"], [1, "sb-profile__phone"], [1, "sb-profile__email"], ["aria-label", "Edit profile", 1, "sb-profile__edit"], ["src", "./assets/icon/ic_edit.svg", "alt", ""], ["type", "button", 1, "sb-stat", 3, "click"], [1, "sb-stat__label"], ["src", "./assets/seabird-new/wallet-icon.svg", "alt", ""], ["class", "sb-stat__value", 4, "ngIf"], ["class", "sb-stat__value sb-stat__value--link", 4, "ngIf"], [1, "sb-stat__value"], [1, "sb-stat__value", "sb-stat__value--link"], ["src", "./assets/seabird-new/bus-from.svg", "alt", ""], ["src", "./assets/seabird-new/save_travellers.svg", "alt", "", 1, "sb-icon-filter-black"], ["src", "./assets/icon/Smart mile Balance.svg", "alt", ""], ["src", "./assets/icon/Refer and Earn.svg", "alt", ""], [1, "sb-trips-login"], [1, "sb-trips-login__title"], [1, "sb-trips-login__text"], ["type", "button", "class", "sb-btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["type", "button", 1, "sb-menu-row", "sb-menu-row--danger", 3, "click"], ["src", "./assets/icon/seabird_logout.svg", "alt", ""], ["src", "./assets/icon/Location Track.svg", "alt", ""], ["src", "./assets/icon/offer-icon.svg", "alt", ""], ["src", "./assets/icon/Share App.svg", "alt", ""], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbLogoutTitle", 1, "sb-dialog", "sb-logout", 3, "click"], [1, "sb-dialog__head", "sb-logout__head"], ["type", "button", "aria-label", "Close", 1, "sb-icon-btn", "sb-dialog__close", 3, "click"], ["name", "close-outline", "aria-hidden", "true"], [1, "sb-logout__icon"], ["name", "log-out-outline", "aria-hidden", "true"], ["id", "sbLogoutTitle", 1, "sb-logout__title"], [1, "sb-logout__text"], [1, "sb-logout__actions"], ["type", "button", 1, "sb-btn-secondary", 3, "click"], ["class", "shyamoli-header-wrapper", "style", "box-shadow: none;", 4, "ngIf"], ["class", "shyamoli-header-wrapper", 4, "ngIf"], [1, "shyamolitheme", 3, "ngStyle"], [1, "shyamoli-page-wrapper", 2, "padding", "0px"], [1, "shyamoli-menu-container"], ["class", "shyamoli-menu-row shyamoli-clickable", 3, "click", 4, "ngIf"], [1, "shyamoli-menu-row", "shyamoli-clickable", 3, "click"], ["src", "./assets/icon/shyamoli-modify.svg", "alt", "Modify Ticket", 1, "shyamoli-menu-icon"], [1, "shyamoli-menu-name"], [1, "shyamoli-arrow-wrap"], ["src", "./assets/icon/shyamoli-down.svg", "class", "shyamoli-arrow-icon", "alt", "Expand", 4, "ngIf"], ["src", "./assets/icon/shyamoli-up.svg", "class", "shyamoli-arrow-icon", "alt", "Collapse", 4, "ngIf"], ["style", "margin-left: 36px; margin-bottom: 4px;", 4, "ngIf"], ["src", "./assets/icon/shyamoli-offers.svg", "alt", "Offers", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-arrow.svg", "alt", "", 1, "shyamoli-arrow-icon"], ["src", "./assets/icon/shyamoli-cancel.svg", "alt", "Cancellation Policy", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-contact.svg", "alt", "Contact Us", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-faq.svg", "alt", "FAQ", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/about_us_shyamoli.svg", "alt", "FAQ", 1, "shyamoli-menu-icon"], [1, "shyamoli-header-wrapper", 2, "box-shadow", "none"], ["mode", "md", 1, "shyamoli-header-toolbar", "shyamoli-header-compact", "ion-no-border"], [1, "shyamoli-header-profile", 3, "click"], [1, "shyamoli-avatar-wrap"], ["src", "./assets/icon/shyamoli-name.svg", "alt", "Profile", "class", "shyamoli-header-avatar", 4, "ngIf"], ["alt", "Profile", "class", "shyamoli-header-avatar", 3, "src", 4, "ngIf"], ["class", "syamoli-add-photo-text", "style", "margin-top:6px; font-size:10px; color:#777;", 4, "ngIf"], [1, "shyamoli-header-texts"], [1, "shyamoli-header-name"], [1, "shyamoli-header-mobile"], ["slot", "end", 1, "shyamoli-header-close", 3, "click"], ["name", "close", 1, "shyamoli-close-icon", 2, "font-size", "16px"], ["src", "./assets/icon/shyamoli-name.svg", "alt", "Profile", 1, "shyamoli-header-avatar"], ["alt", "Profile", 1, "shyamoli-header-avatar", 3, "src"], [1, "syamoli-add-photo-text", 2, "margin-top", "6px", "font-size", "10px", "color", "#777"], [1, "shyamoli-header-wrapper"], [1, "shyamoli-header-title", 2, "text-align", "center"], ["src", "./assets/icon/shyamoli-wallet.svg", "alt", "My Wallet", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-down.svg", "alt", "Expand", 1, "shyamoli-arrow-icon"], ["src", "./assets/icon/shyamoli-up.svg", "alt", "Collapse", 1, "shyamoli-arrow-icon"], [2, "margin-left", "36px", "margin-bottom", "4px"], [1, "shyamoli-menu-row", "shyamoli-clickable", 2, "padding", "8px 0", 3, "click"], ["src", "./assets/icon/shyamoli-view.svg", "alt", "View", 1, "shyamoli-menu-icon"], ["class", "shyamoli-menu-row shyamoli-clickable", "style", "padding:8px 0;", 3, "click", 4, "ngIf"], ["src", "./assets/icon/shyamoli-update.svg", "alt", "Update", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-cancel1.svg", "alt", "Cancel", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/send_sms_ticket.svg", "alt", "Send", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/send_email_ticket.svg", "alt", "Email", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-offers.svg", "alt", "Loyalty Point Program", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-refer.svg", "alt", "Refer and Earn", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/shyamoli-trackmybus.svg", "alt", "Track My Bus", 1, "shyamoli-menu-icon"], ["src", "./assets/icon/theme1logout.svg", 1, "shyamoli-menu-icon", 2, "background-color", "#fdf6e3", "border-radius", "10px", "height", "35px !important", "width", "40px !important"], ["src", "./assets/icon/change_password.svg", 1, "shyamoli-menu-icon", 2, "background-color", "#fdf6e3", "border-radius", "10px", "height", "35px !important", "width", "40px !important"]],
  template: function MorePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MorePage_ng_container_0_Template, 104, 42, "ng-container", 0)(1, MorePage_ng_container_1_Template, 116, 24, "ng-container", 0)(2, MorePage_ng_container_2_Template, 95, 13, "ng-container", 0)(3, MorePage_ng_container_3_Template, 62, 8, "ng-container", 0)(4, MorePage_ng_container_4_Template, 51, 15, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_18__.UpperCasePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.rectangle-box[_ngcontent-%COMP%] {\n  height: 51px;\n  padding: 12px;\n  font-family: NotoSans;\n  border: solid 0.5px #e8e8e8;\n  background-color: #ffffff;\n}\n\n.modify[_ngcontent-%COMP%] {\n  height: 48px;\n  background-color: #ffffff;\n  padding: 12px 12px 12px 16px;\n}\n\n.modify-cbus[_ngcontent-%COMP%] {\n  padding: 12px 12px 12px 0px;\n}\n\n.icon-img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-top: -1px;\n}\n\n.txt-main[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  height: 19px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.icn-main-wthtlogin[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 100px;\n  height: 50px;\n  top: 0;\n  float: right;\n  margin-right: 30px;\n}\n\n.title-main-wthlogin[_ngcontent-%COMP%] {\n  margin: 10px 16px 0 0;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n  color: var(--viewBgColor);\n}\n\n.title-main-wthlogin-seabird[_ngcontent-%COMP%] {\n  margin: 10px 16px 0 0;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n  color: var(--placeholderColor);\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.txt-msg1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.brws-txt1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin-left: 20px;\n}\n\n.themeone_main_div[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.themeone_div_container[_ngcontent-%COMP%] {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  background: white;\n}\n\n.themeone_h3[_ngcontent-%COMP%] {\n  font-family: \"NotoSans\";\n  font-size: 16px;\n  font-weight: 600;\n  color: #333333;\n}\n\n.themeone_ion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DADEE3;\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 25px;\n  padding-bottom: 11px;\n}\n\n.themeone_row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DADEE3;\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n.themeone_row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.themeone_norow[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-right: 24px;\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n.themeone_norow[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.themeone_label[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--Type-Title, #333);\n  padding-left: 5px;\n}\n\n.themeone_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.themeone_title-main-wthlogin[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-align: center;\n  --placeholderColor: #fff;\n  color: var(--placeholderColor) !important;\n}\n\n.themeone_title-main-wthlogin-2[_ngcontent-%COMP%] {\n  \n\n  \n\n  \n\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  \n\n  text-align: center;\n  color: var(--primaryText) !important;\n}\n\n.headd[_ngcontent-%COMP%] {\n  --placeholderColor: #fff;\n  color: var(--placeholderColor) !important;\n}\n\n.themeone_signup[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 700;\n  font-family: \"NotoSans\";\n  font-size: 16px;\n}\n\n.themeone_profile[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.themeone-dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #24249d;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.themeone-select-login-btn[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin: 0px 10px 0px 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  height: 28px;\n  border-radius: 4px;\n  --background: #191966 !important;\n  background: #191966;\n  --background-activated:#191966;\n  box-sizing: content-box;\n}\n\n.themeone-select-login-btn-2[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin: 0px 10px 0px 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 4px;\n  --background: #000 !important;\n  background: #000;\n  --background-activated:#000;\n}\n\n.themeone-select-signup-btn[_ngcontent-%COMP%] {\n  color: #191966;\n  margin: 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  height: 28px;\n  border-radius: 4px;\n  --background: #FFF !important;\n  background: #FFF;\n  border: 1px solid #191966;\n  --background-activated:#FFF;\n  box-sizing: content-box;\n}\n\n.themeone-select-signup-btn-2[_ngcontent-%COMP%] {\n  color: #000;\n  margin: 0px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 4px;\n  --background: #FFF !important;\n  background: #FFF;\n  border: 1px solid #000;\n  --background-activated:#FFF;\n}\n\n.ourbus_login_border[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ourbus_login[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4CAF50;\n  line-height: 24px;\n  border: 1px solid #4CAF50;\n  padding: 12px 24px;\n  border-radius: 8px;\n}\n\n.seabird_logo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin-left: 0px;\n}\n\n.seabird_center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.seabird_row[_ngcontent-%COMP%] {\n  padding: 3px 0px;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.seabird_img[_ngcontent-%COMP%] {\n  height: 17px;\n  width: 17px;\n}\n\n.seabird_fixed_image[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  bottom: 15%;\n  width: 50px;\n  height: auto;\n  z-index: 1000;\n}\n\n.blkImg[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%);\n}\n\n.theme1_bg_header[_ngcontent-%COMP%] {\n  --background: var(--homeBgColor) !important;\n  --color: var(--primaryText);\n}\n\n.cbus_bg_header[_ngcontent-%COMP%] {\n  --background: #191966;\n}\n\n.theme1_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: var(--homeBgColor);\n  color: #ffffff;\n}\n\n.cbus_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #191966;\n  color: #ffffff;\n}\n\n.cbus_view_profile[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: \"NotoSans\";\n}\n\n.theme1_view_profile[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  font-size: 14px;\n  font-weight: bold;\n  font-family: \"NotoSans\";\n}\n\n.shyamoli-menu-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 24px;\n  margin-right: 24px;\n}\n\n.shyamoli-menu-row[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 24px;\n}\n\n.shyamoli-menu-icon[_ngcontent-%COMP%] {\n  height: 40px !important;\n  width: 40px !important;\n  margin-right: 12px;\n  vertical-align: middle;\n  object-fit: contain;\n}\n\n.shyamoli-arrow-icon[_ngcontent-%COMP%] {\n  height: 24px !important;\n  width: 24px !important;\n  vertical-align: middle;\n  opacity: 0.9;\n}\n\n.shyamoli-menu-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 15px;\n  font-weight: 400;\n  color: #222;\n  letter-spacing: 0.3px;\n  line-height: 20px;\n}\n\n.shyamoli-profile-label[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 16px;\n  font-weight: 600;\n  color: #222;\n  line-height: 20px;\n  margin: 0;\n}\n\n.shyamoli-profile-mobile[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 13px;\n  color: #555;\n  margin-top: 2px;\n}\n\n.shyamoli-menu-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  margin: 0 0 4px 0;\n  position: relative;\n}\n\n.shyamoli-menu-row[_ngcontent-%COMP%]    + .shyamoli-menu-row[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.shyamoli-menu-container[_ngcontent-%COMP%] {\n  margin: 12px 24px 32px 24px;\n}\n\n.shyamoli-menu-row-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9E9E9;\n  margin: 0 0 8px 0;\n}\n\n.shyamoli-arrow-wrap[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n.shyamoli-profile-block[_ngcontent-%COMP%] {\n  margin: 16px 24px 8px 24px;\n  display: flex;\n  align-items: center;\n}\n\n.shyamoli-profile-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 12px;\n  background: #f2f2f2;\n  border: 1px solid #e2e2e2;\n}\n\n.shyamoli-profile-avatar.large[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n\n.shyamoli-profile-texts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.shyamoli-profile-greeting[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 12px;\n  font-weight: 500;\n  color: #777;\n  margin-bottom: 2px;\n  line-height: 14px;\n}\n\n.shyamoli-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.shyamoli-section-spacer[_ngcontent-%COMP%] {\n  height: 12px;\n}\n\n.shyamoli-hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nion-content.shyamolitheme[_ngcontent-%COMP%] {\n  background: #fff !important;\n}\n\n\n\n.shyamoli-page-wrapper[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n@media (min-width: 420px) {\n  .shyamoli-page-wrapper[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media (min-width: 600px) {\n  .shyamoli-page-wrapper[_ngcontent-%COMP%] {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n\n\n.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-container[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-row[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  padding-right: 14px;\n}\n\n\n\n.shyamoli-header-toolbar[_ngcontent-%COMP%] {\n  --background: #fff;\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  min-height: 56px;\n  --padding-top: calc(14px + var(--ion-safe-area-top, 0px));\n  min-height: calc(56px + var(--ion-safe-area-top, 0px));\n}\n\n.shyamoli-header-compact[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.shyamoli-header-title[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--sectionHeaderTextColor);\n  margin: 0;\n}\n\n\n\n.shyamoli-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n\n.shyamoli-header-logo[_ngcontent-%COMP%] {\n  height: 36px; \n\n  width: auto;\n  max-width: 110px;\n  object-fit: contain;\n}\n\n.shyamoli-header-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n\n.shyamoli-close-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n@media (max-width: 360px) {\n  .shyamoli-header-logo[_ngcontent-%COMP%] {\n    height: 32px;\n  }\n  .shyamoli-close-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.shyamoli-header-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  position: relative;\n  margin-left: 20px;\n}\n\n.shyamoli-header-avatar[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #f2f2f2;\n  border: 1px solid #e2e2e2;\n  margin-right: 12px;\n}\n\n.shyamoli-header-profile[_ngcontent-%COMP%]   .shyamoli-add-photo-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 48px;\n  text-align: center;\n  color: #626262;\n  font-size: 8px;\n  margin-top: 2px;\n  letter-spacing: 0.2px;\n  \n\n  z-index: 2;\n  background: #fff;\n}\n\n.shyamoli-header-texts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  line-height: 1.2;\n}\n\n.shyamoli-header-name[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 15px;\n  font-weight: 600;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.shyamoli-header-mobile[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  font-size: 12px;\n  color: #666;\n  margin-top: 3px;\n}\n\n.shyamoli-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.shyamoli-header-edit-btn[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-Medium\", sans-serif !important;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --background: transparent;\n  --box-shadow: none;\n  --ripple-color: #ddd;\n  color: #007aff;\n  font-size: 13px;\n}\n\n\n\nion-content.shyamolitheme[_ngcontent-%COMP%], \nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-name[_ngcontent-%COMP%], \nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-row[_ngcontent-%COMP%]   .shyamoli-menu-name[_ngcontent-%COMP%], \nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-profile-label[_ngcontent-%COMP%], \nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-profile-mobile[_ngcontent-%COMP%] {\n  font-family: \"Gilroy\", sans-serif !important;\n}\n\n\n\nion-content.shyamolitheme[_ngcontent-%COMP%]   .shyamoli-menu-row.shyamoli-clickable[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  font-family: \"Gilroy\", sans-serif !important;\n  font-weight: 500 !important;\n}\n\n.shyamoli-add-photo-text[_ngcontent-%COMP%] {\n  color: #626262;\n  font-size: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  letter-spacing: 0.2px;\n}\n\n.shyamoli-avatar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 12px; \n\n}\n\n.disableionitem[_ngcontent-%COMP%] {\n  --ion-item-background:#e1e1e1;\n}"]
});

/***/ }

}]);