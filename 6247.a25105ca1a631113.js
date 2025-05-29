"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6247],{

/***/ 5662:
/*!*********************************************!*\
  !*** ./src/app/wait/wait-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitPageRoutingModule: () => (/* binding */ WaitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _wait_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait.page */ 19584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _WaitPageRoutingModule;




const routes = [{
  path: '',
  component: _wait_page__WEBPACK_IMPORTED_MODULE_0__.WaitPage
}];
class WaitPageRoutingModule {}
_WaitPageRoutingModule = WaitPageRoutingModule;
_WaitPageRoutingModule.ɵfac = function WaitPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WaitPageRoutingModule)();
};
_WaitPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _WaitPageRoutingModule
});
_WaitPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WaitPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 19584:
/*!***********************************!*\
  !*** ./src/app/wait/wait.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitPage: () => (/* binding */ WaitPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 45564);

var _WaitPage;








function WaitPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-content", 1)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function WaitPage_ng_container_1_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function WaitPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WaitPage_ng_container_1_ion_content_1_Template, 3, 0, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isWebApp);
  }
}
function WaitPage_ng_container_2_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function WaitPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WaitPage_ng_container_2_ion_content_1_Template, 3, 0, "ion-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isBusIcon);
  }
}
class WaitPage {
  constructor(apiFactory, commonStorage, navCtrl, commonService, appData, util, loadingController, platform) {
    this.apiFactory = apiFactory;
    this.commonStorage = commonStorage;
    this.navCtrl = navCtrl;
    this.commonService = commonService;
    this.appData = appData;
    this.util = util;
    this.loadingController = loadingController;
    this.platform = platform;
    this.isWebApp = false;
    this.isBusIcon = false;
    this.appData.newTheme = this.util.getNewTheme();
    this.metaData = this.commonStorage.getItem('metaData');
  }
  ionViewDidEnter() {}
  ngOnInit() {
    //  this.loadata() ;
  }
  ionViewWillEnter() {
    this.loadata();
  }
  loadata() {
    var result = {};
    var query = window.location.href.split('?')[1];
    if (query) {
      var _resultObject$is_what, _resultObject$mobile;
      let keyValuePairs = query.split('&');
      let resultObject = {};
      keyValuePairs.forEach(pair => {
        let [key, value] = pair.split('=');
        resultObject[key] = value;
      });
      let booleanValue = (resultObject === null || resultObject === void 0 || (_resultObject$is_what = resultObject.is_whatsapp) === null || _resultObject$is_what === void 0 ? void 0 : _resultObject$is_what.toLowerCase()) === "true" ? true : false;
      localStorage.setItem('isWPBooking', booleanValue);
      if (resultObject !== null && resultObject !== void 0 && resultObject.origin_name) {
        localStorage.setItem('whatsappPrefilledData', JSON.stringify(resultObject));
      } else {
        localStorage.removeItem('whatsappPrefilledData');
      }
      if ((resultObject === null || resultObject === void 0 || (_resultObject$mobile = resultObject.mobile) === null || _resultObject$mobile === void 0 ? void 0 : _resultObject$mobile.length) > 10) {
        let splitNumber = {
          firstTwo: resultObject === null || resultObject === void 0 ? void 0 : resultObject.mobile.slice(0, 2),
          remaining: resultObject === null || resultObject === void 0 ? void 0 : resultObject.mobile.slice(2)
        };
        localStorage.setItem('wpMobileNo', splitNumber.remaining);
      } else {
        localStorage.setItem('wpMobileNo', resultObject === null || resultObject === void 0 ? void 0 : resultObject.mobile);
      }
    }
    if (this.commonStorage.localHas('metaData')) {
      this.metaData = this.commonStorage.getItem('metaData');
      this.msite_theme = this.metaData.msiteFolder;
      if (this.msite_theme == 'ourbustheme') {
        this.isBusIcon = false;
        if ((this.platform.is('ios') || this.platform.is('android')) && this.platform.is('mobileweb')) {
          this.isWebApp = true;
        } else {
          this.isWebApp = false;
          this.presentLoading();
        }
      } else {
        this.isBusIcon = true;
      }
      if (this.metaData.loginType == 'Forced Signup with OTP Login' && this.metaData.forced_signup_with_otp_login_for_m_site == true && localStorage.getItem('currentUser') == null) {
        setTimeout(() => {
          this.navCtrl.navigateForward('forced-login-with-otp');
          // this.navCtrl.navigateForward('/home');
        }, 500);
      } else {
        setTimeout(() => {
          this.navCtrl.navigateForward('tabs/home');
        }, 500);
      }
    } else {
      this.apiFactory.getMetaAppData().subscribe(loginResponse => {
        if (!loginResponse.code || loginResponse.code == 200) {
          ;
          let localData = loginResponse[0];
          this.metaData = loginResponse[0];
          this.commonStorage.localSet('locale', localData);
          this.commonService.setMetaApp(localData);
          if (this.commonStorage.localHas('metaData')) {
            this.metaData = this.commonStorage.getItem('metaData');
            this.msite_theme = localData.msite_theme;
            if (this.msite_theme == 'ourbustheme') {
              this.isBusIcon = false;
              if ((this.platform.is('ios') || this.platform.is('android')) && this.platform.is('mobileweb')) {
                this.isWebApp = true;
              } else {
                this.isWebApp = false;
                this.presentLoading();
              }
            } else {
              this.isBusIcon = true;
            }
            if (localData.login_type == 'Forced Signup with OTP Login' && localData.forced_signup_with_otp_login_for_m_site == true && localStorage.getItem('currentUser') == null) {
              setTimeout(() => {
                // this.navCtrl.navigateForward('forced-login-with-otp');
                this.navCtrl.navigateForward('/home');
              }, 500);
            } else {
              setTimeout(() => {
                this.navCtrl.navigateForward('tabs/home');
              }, 500);
            }
          }
        }
      }, err => {});
    }
  }
  presentLoading() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        message: '',
        duration: 1000,
        spinner: 'crescent'
      });
      yield loading.present();
      yield loading.onDidDismiss();
    })();
  }
}
_WaitPage = WaitPage;
_WaitPage.ɵfac = function WaitPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WaitPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_4__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_5__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform));
};
_WaitPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _WaitPage,
  selectors: [["app-wait"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [2, "width", "100%", "height", "100%"], [1, "center", 2, "width", "100%", "height", "100%"], ["src", "./assets/icon/cbus loader.gif", "alt", "", 2, "width", "35%"], ["style", "width: 100%;height: 100%;--background: #4CAF50 !important;", 4, "ngIf"], [2, "width", "100%", "height", "100%", "--background", "#4CAF50 !important"], [1, "center", 2, "width", "100%", "height", "100%", "--background", "#4CAF50"], ["src", "./assets/icon/Ourbus_splash.svg", "alt", "", 2, "width", "35%"], ["style", "width: 100%;height: 100%;", 4, "ngIf"], ["src", "./assets/icon/animation_200_l3a6yclb.gif", "alt", "", 2, "width", "25%"]],
  template: function WaitPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, WaitPage_ng_container_0_Template, 5, 0, "ng-container", 0)(1, WaitPage_ng_container_1_Template, 2, 1, "ng-container", 0)(2, WaitPage_ng_container_2_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.msite_theme == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.msite_theme == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.msite_theme == "seabirdTheme" || ctx.msite_theme == null || ctx.msite_theme == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader],
  encapsulation: 2
});

/***/ }),

/***/ 46247:
/*!*************************************!*\
  !*** ./src/app/wait/wait.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitPageModule: () => (/* binding */ WaitPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _wait_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait-routing.module */ 5662);
/* harmony import */ var _wait_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait.page */ 19584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _WaitPageModule;






class WaitPageModule {}
_WaitPageModule = WaitPageModule;
_WaitPageModule.ɵfac = function WaitPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WaitPageModule)();
};
_WaitPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _WaitPageModule
});
_WaitPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _wait_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WaitPageModule, {
    declarations: [_wait_page__WEBPACK_IMPORTED_MODULE_1__.WaitPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _wait_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitPageRoutingModule]
  });
})();

/***/ })

}]);