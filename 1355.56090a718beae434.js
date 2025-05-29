"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1355],{

/***/ 21355:
/*!*******************************************************!*\
  !*** ./src/app/modal-payment/modal-payment.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPaymentPageModule: () => (/* binding */ ModalPaymentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _modal_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-payment-routing.module */ 87138);
/* harmony import */ var _modal_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-payment.page */ 59140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ModalPaymentPageModule;






class ModalPaymentPageModule {}
_ModalPaymentPageModule = ModalPaymentPageModule;
_ModalPaymentPageModule.ɵfac = function ModalPaymentPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPaymentPageModule)();
};
_ModalPaymentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ModalPaymentPageModule
});
_ModalPaymentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _modal_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPaymentPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModalPaymentPageModule, {
    declarations: [_modal_payment_page__WEBPACK_IMPORTED_MODULE_1__.ModalPaymentPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _modal_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPaymentPageRoutingModule]
  });
})();

/***/ }),

/***/ 59140:
/*!*****************************************************!*\
  !*** ./src/app/modal-payment/modal-payment.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPaymentPage: () => (/* binding */ ModalPaymentPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 74474);
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
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'OK',
          handler: data => {}
        }]
      });
      yield alert.present();
    })();
  }
}
_ModalPaymentPage = ModalPaymentPage;
_ModalPaymentPage.ɵfac = function ModalPaymentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController));
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
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  encapsulation: 2
});

/***/ }),

/***/ 87138:
/*!***************************************************************!*\
  !*** ./src/app/modal-payment/modal-payment-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPaymentPageRoutingModule: () => (/* binding */ ModalPaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _modal_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-payment.page */ 59140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ModalPaymentPageRoutingModule;




const routes = [{
  path: '',
  component: _modal_payment_page__WEBPACK_IMPORTED_MODULE_0__.ModalPaymentPage
}];
class ModalPaymentPageRoutingModule {}
_ModalPaymentPageRoutingModule = ModalPaymentPageRoutingModule;
_ModalPaymentPageRoutingModule.ɵfac = function ModalPaymentPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPaymentPageRoutingModule)();
};
_ModalPaymentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ModalPaymentPageRoutingModule
});
_ModalPaymentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModalPaymentPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);