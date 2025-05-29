"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3073],{

/***/ 27850:
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPage: () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 31482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
var _AboutUsPage;











const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
function AboutUsPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r0.aboutus), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function AboutUsPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.mobileWebVersion, " ");
  }
}
function AboutUsPage_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.iosVersion, " ");
  }
}
function AboutUsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-white-common-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AboutUsPage_ng_container_0_ion_content_3_Template, 3, 3, "ion-content", 4)(4, AboutUsPage_ng_container_0_div_4_Template, 2, 1, "div", 5)(5, AboutUsPage_ng_container_0_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.aboutus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.util.isWebApp());
  }
}
function AboutUsPage_ng_template_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r0.aboutus), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function AboutUsPage_ng_template_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.mobileWebVersion, " ");
  }
}
function AboutUsPage_ng_template_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.iosVersion, " ");
  }
}
function AboutUsPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar", 9)(2, "ion-buttons", 10)(3, "ion-back-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AboutUsPage_ng_template_1_Template_ion_back_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AboutUsPage_ng_template_1_div_7_Template, 2, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AboutUsPage_ng_template_1_div_8_Template, 2, 1, "div", 5)(9, AboutUsPage_ng_template_1_div_9_Template, 2, 1, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.aboutus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.util.isWebApp());
  }
}
class AboutUsPage {
  constructor(apiFactory, appData, util, loader, location, router) {
    this.apiFactory = apiFactory;
    this.appData = appData;
    this.util = util;
    this.loader = loader;
    this.location = location;
    this.router = router;
    this.mobileWebVersion = "";
    this.iosVersion = "";
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.mobileWebVersion = this.appData.mobileWebVersion;
    this.iosVersion = this.appData.iosVersion;
    this.appData.newTheme = this.util.getNewTheme();
    this.defaultCall();
  }
  ngOnInit() {}
  defaultCall() {
    this.loader.showLoadingDefault();
    this.apiFactory.getAboutUs().subscribe(aboutus => {
      this.aboutus = aboutus.about_us;
      this.loader.hideLoadingDefault();
    }, error => {
      this.loader.hideLoadingDefault();
    });
    this.loader.hideLoadingDefault();
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
}
_AboutUsPage = AboutUsPage;
_AboutUsPage.ɵfac = function AboutUsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_2__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
_AboutUsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _AboutUsPage,
  selectors: [["app-about-us"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], [3, "ngStyle"], ["title", "About us", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["class", "theme1", "padding", "", "style", "--background:#fff;", 4, "ngIf"], ["class", "center", 4, "ngIf"], ["padding", "", 1, "theme1", 2, "--background", "#fff"], [1, "mt20", "p5", "context", 3, "innerHTML"], [1, "center"], ["mode", "md", 1, "h50"], ["slot", "start"], [3, "click"], [1, "head"], ["padding", ""], ["class", "mt20 p5 context", 3, "innerHTML", 4, "ngIf"]],
  template: function AboutUsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AboutUsPage_ng_container_0_Template, 6, 6, "ng-container", 1)(1, AboutUsPage_ng_template_1_Template, 10, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}"]
});

/***/ }),

/***/ 37888:
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPageRoutingModule: () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 27850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AboutUsPageRoutingModule;




const routes = [{
  path: '',
  component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
}];
class AboutUsPageRoutingModule {}
_AboutUsPageRoutingModule = AboutUsPageRoutingModule;
_AboutUsPageRoutingModule.ɵfac = function AboutUsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPageRoutingModule)();
};
_AboutUsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AboutUsPageRoutingModule
});
_AboutUsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 53073:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPageModule: () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 37888);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 27850);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _AboutUsPageModule;








class AboutUsPageModule {}
_AboutUsPageModule = AboutUsPageModule;
_AboutUsPageModule.ɵfac = function AboutUsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPageModule)();
};
_AboutUsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _AboutUsPageModule
});
_AboutUsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AboutUsPageModule, {
    declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe]
  });
})();

/***/ })

}]);