"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5991],{

/***/ 5694:
/*!*********************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPageRoutingModule: () => (/* binding */ OurbusContactusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-contactus.page */ 77408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _OurbusContactusPageRoutingModule;




const routes = [{
  path: '',
  component: _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_0__.OurbusContactusPage
}];
class OurbusContactusPageRoutingModule {}
_OurbusContactusPageRoutingModule = OurbusContactusPageRoutingModule;
_OurbusContactusPageRoutingModule.ɵfac = function OurbusContactusPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OurbusContactusPageRoutingModule)();
};
_OurbusContactusPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _OurbusContactusPageRoutingModule
});
_OurbusContactusPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OurbusContactusPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 65991:
/*!*************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPageModule: () => (/* binding */ OurbusContactusPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ourbus_contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-contactus-routing.module */ 5694);
/* harmony import */ var _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourbus-contactus.page */ 77408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _OurbusContactusPageModule;






class OurbusContactusPageModule {}
_OurbusContactusPageModule = OurbusContactusPageModule;
_OurbusContactusPageModule.ɵfac = function OurbusContactusPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OurbusContactusPageModule)();
};
_OurbusContactusPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _OurbusContactusPageModule
});
_OurbusContactusPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ourbus_contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurbusContactusPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OurbusContactusPageModule, {
    declarations: [_ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_1__.OurbusContactusPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ourbus_contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurbusContactusPageRoutingModule]
  });
})();

/***/ }),

/***/ 77408:
/*!***********************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPage: () => (/* binding */ OurbusContactusPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 31482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
var _OurbusContactusPage;




function OurbusContactusPage_div_47_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](", ");
  }
}
function OurbusContactusPage_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OurbusContactusPage_div_47_span_4_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const number_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:+91\u00A0", number_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +91 ", number_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 < ctx_r2.helpLineNumber.length - 1);
  }
}
class OurbusContactusPage {
  constructor(navCtrl, commonStorage, location) {
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.location = location;
  }
  ngOnInit() {
    this.helpLineNumber = this.commonStorage.getItem('metaData').helpLineNumber.split(',');
    this.operatorEmail = this.commonStorage.getItem('metaData').operatorEmail;
  }
  goToContactSupport() {
    this.navCtrl.navigateForward('contact-us');
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.navCtrl.navigateRoot('tabs/home');
    }
  }
}
_OurbusContactusPage = OurbusContactusPage;
_OurbusContactusPage.ɵfac = function OurbusContactusPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OurbusContactusPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
};
_OurbusContactusPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _OurbusContactusPage,
  selectors: [["app-ourbus-contactus"]],
  standalone: false,
  decls: 48,
  vars: 4,
  consts: [["mode", "md", 1, "ourbustheme"], ["size", "1"], [3, "click"], ["size", "10", 1, "contactUs"], [1, "ourbustheme"], [1, "bigTextHeading"], [1, "cardSet"], ["href", "https://api.whatsapp.com/send/?phone=918062750000&text&type=phone_number&app_absent=0", 2, "text-decoration", "none"], [2, "margin", "8px"], ["src", "././assets/icon/WhatsappLogo.svg", 1, "iconSet"], [1, "subText"], [2, "color", "#2D2D2D", "text-decoration", "none"], [1, "NormalText"], [2, "text-decoration", "none", 3, "href"], ["src", "././assets/icon/ourbusEnvelope.svg", 1, "iconSet"], [2, "color", "#4CAF50", "text-decoration", "none"], ["src", "././assets/icon/ourBusPhoneCall.svg", 1, "iconSet"], ["style", "display: inline;", 4, "ngFor", "ngForOf"], [2, "display", "inline"], [2, "color", "#4CAF50", "text-decoration", "none", 3, "href"], [4, "ngIf"]],
  template: function OurbusContactusPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-row")(3, "ion-col", 1)(4, "ion-buttons")(5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OurbusContactusPage_Template_ion_back_button_click_5_listener() {
        return ctx.handleBackButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 3)(7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-col", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 4)(11, "div")(12, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Welcome to OurBus");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card", 6)(15, "a", 7)(16, "div", 8)(17, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "span")(21, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "WhatsApp Chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Speak with our next available ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " WhatsApp Chat Agent");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-card", 6)(29, "a", 13)(30, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10)(33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Can\u2019t find your answer? Write to us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-card", 6)(40, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10)(43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Phone call");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Reach out to one of our support agents: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, OurbusContactusPage_div_47_Template, 5, 4, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.operatorEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.operatorEmail, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.helpLineNumber);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton],
  styles: [".contactUs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n\n.bigTextHeading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #2d2d2d;\n  margin: 16px;\n}\n\n.iconSet[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.cardSet[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px;\n  padding: 16px;\n}\n\n.NormalText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2D2D2D;\n  margin: 8px;\n}\n\n.subText[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}"]
});

/***/ })

}]);