"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1967],{

/***/ 22376:
/*!***********************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPage: () => (/* binding */ OtpConfirmationPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);

var _OtpConfirmationPage;






function OtpConfirmationPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpConfirmationPage_div_27_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.sendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpConfirmationPage_div_27_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function OtpConfirmationPage_div_29_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function OtpConfirmationPage_div_29_span_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpConfirmationPage_div_29_span_11_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.resend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function OtpConfirmationPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "ion-row")(5, "ion-col", 17)(6, "ion-item", 10)(7, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function OtpConfirmationPage_div_29_Template_ion_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.otpGet, $event) || (ctx_r1.otpGet = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, OtpConfirmationPage_div_29_span_9_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, OtpConfirmationPage_div_29_span_11_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "OTP is shared on below Registered contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpConfirmationPage_div_29_Template_span_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goToSuccessTransfer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpConfirmationPage_div_29_Template_span_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otpGet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userDetails.user.mobileNo);
  }
}
class OtpConfirmationPage {
  constructor(navCtrl, appData, toastCtrl, apiFactory) {
    this.navCtrl = navCtrl;
    this.appData = appData;
    this.toastCtrl = toastCtrl;
    this.apiFactory = apiFactory;
    this.timerOn = true;
    this.isShown = false;
    this.isShownn = false;
    this.otpsendHide = true;
    this.timerHideShow = false;
    this.timerString = "";
    this.pointsGet = '';
    this.otpGet = '';
    this.transferMobNo = '';
    this.baseUrl = appData.BASE_URL;
    this.userDetails = JSON.parse(localStorage.getItem('currentUser') || '');
    this.newIdData = localStorage.getItem('dataGet') || '';
    this.pointsGet = localStorage.getItem('totalPoints');
  }
  ngOnInit() {}
  timer(remaining) {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;
    this.m = m < 10 ? '0' + m : m;
    this.s = s < 10 ? '0' + s : s;
    this.timerString = m + ':' + s;
    remaining -= 1;
    if (remaining >= 0) {
      setTimeout(() => {
        this.timer(remaining);
      }, 1000);
      return;
    } else {
      this.timerHideShow = false;
    }
  }
  resend() {
    this.apiFactory.smartMilesSendOTP(this.submit_data).subscribe(data => {
      this.dema = data;
      if (this.dema.code == 500) {
        this.toast();
      } else {
        this.timerHideShow = true;
        this.timer(59);
      }
    }, error => {});
  }
  goToSuccessTransfer() {
    this.timer(0);
    console.log(this.transferMobNo);
    localStorage.setItem('transferMobNo', this.transferMobNo);
    this.apiFactory.smartMilesVerifyOtp("&id=" + this.newIdData + "&transfer_mobile_number=" + this.transferMobNo + "&secret_key=" + this.dema.secret_key + "&otp=" + this.otpGet).subscribe(data => {}, error => {
      console.log(error);
    });
    ;
    this.navCtrl.navigateForward('points-success-msg');
  }
  sendOTP() {
    this.submit_data = {
      "id": this.newIdData,
      "transfer_mobile_number": this.transferMobNo
    };
    this.apiFactory.smartMilesSendOTP(this.submit_data).subscribe(data => {
      this.dema = data;
      console.log('myData', this.dema);
      if (this.dema.code == 500) {
        this.toast();
        console.log('ErrorMessage', this.dema.message);
      } else {
        this.otpsendHide = false;
        this.timerHideShow = true;
        this.isShown = true;
        this.timer(59);
      }
    }, error => {});
  }
  toast() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let toast = yield _this.toastCtrl.create({
        message: _this.dema.message,
        duration: 4000,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }
  cancel() {
    this.navCtrl.navigateForward('point-transfer');
  }
}
_OtpConfirmationPage = OtpConfirmationPage;
_OtpConfirmationPage.ɵfac = function OtpConfirmationPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OtpConfirmationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_1__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory));
};
_OtpConfirmationPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _OtpConfirmationPage,
  selectors: [["app-otp-confirmation"]],
  standalone: false,
  decls: 30,
  vars: 4,
  consts: [["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], [1, "firDiv", "ion-margin-bottom", "ion-text-center"], [1, "firPara"], [1, "firSpan"], ["src", "../../assets/otp-confirmation.png", 1, "image-set"], [1, "secDiv", "ion-margin-bottom"], [1, "ion-text-center"], [1, "listDiv"], [2, "--background", "#f1f5f8"], ["placeholder", "Enter phone number", "type", "number", "maxlength", "10", 3, "ngModelChange", "ngModel"], ["class", "btn-style", 4, "ngIf"], [4, "ngIf"], [1, "btn-style"], [1, "first-btn", 3, "click"], [1, "sec-btn", 3, "click"], ["size", "9"], ["type", "tel", 3, "ngModelChange", "ngModel"], ["size", "3", 2, "padding", "10px"], ["id", "timer", 4, "ngIf"], ["class", "ion-text-center", 3, "click", 4, "ngIf"], ["id", "timer"], [1, "ion-text-center", 3, "click"]],
  template: function OtpConfirmationPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "OTP Confirmation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "div", 3)(8, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Enter OTP to Confirm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Points you are Transfering");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Please enter other customer registered no. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " to whom you wants transfer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "div")(25, "ion-item", 10)(26, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function OtpConfirmationPage_Template_ion_input_ngModelChange_26_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.transferMobNo, $event) || (ctx.transferMobNo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, OtpConfirmationPage_div_27_Template, 5, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OtpConfirmationPage_div_29_Template, 22, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.pointsGet, " Points");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.transferMobNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.otpsendHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShown);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: rgba(128, 128, 128, 0.733);\n  height: 100vh;\n}\n\n.firDiv[_ngcontent-%COMP%] {\n  --background: rgba(128, 128, 128, 0.733);\n  height: 40vh;\n  padding: 4px 10px 20px 10px;\n}\n\n.image-set[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.secDiv[_ngcontent-%COMP%] {\n  background: #f1f5f8;\n  min-height: 60vh;\n  padding: 4px 10px 20px 10px;\n  border-radius: 28px 28px 0 0;\n}\n\n.firPara[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 80px;\n}\n\n.firSpan[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 500;\n}\n\n.secDivv[_ngcontent-%COMP%] {\n  background: #dfdada;\n  margin-left: auto;\n  margin-right: auto;\n  width: 150px;\n  height: 30px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n}\n\nion-input[_ngcontent-%COMP%] {\n  padding-bottom: 5px !important;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.thirdDiv[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.btn-style[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.first-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 10px 15px 10px 15px;\n  border-radius: 10px;\n  background-color: var(--iconsAndButtonsColor);\n}\n\n.sec-btn[_ngcontent-%COMP%] {\n  background: #ed3237;\n  color: #fff;\n  margin-left: 10px;\n  padding: 10px 15px 10px 15px;\n  border-radius: 10px;\n}\n\n.secDiv.ion-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: black;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n}"]
});

/***/ }),

/***/ 71967:
/*!*************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPageModule: () => (/* binding */ OtpConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _otp_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-confirmation-routing.module */ 86166);
/* harmony import */ var _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-confirmation.page */ 22376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _OtpConfirmationPageModule;






class OtpConfirmationPageModule {}
_OtpConfirmationPageModule = OtpConfirmationPageModule;
_OtpConfirmationPageModule.ɵfac = function OtpConfirmationPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OtpConfirmationPageModule)();
};
_OtpConfirmationPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _OtpConfirmationPageModule
});
_OtpConfirmationPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _otp_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpConfirmationPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OtpConfirmationPageModule, {
    declarations: [_otp_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.OtpConfirmationPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _otp_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpConfirmationPageRoutingModule]
  });
})();

/***/ }),

/***/ 86166:
/*!*********************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPageRoutingModule: () => (/* binding */ OtpConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-confirmation.page */ 22376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _OtpConfirmationPageRoutingModule;




const routes = [{
  path: '',
  component: _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.OtpConfirmationPage
}];
class OtpConfirmationPageRoutingModule {}
_OtpConfirmationPageRoutingModule = OtpConfirmationPageRoutingModule;
_OtpConfirmationPageRoutingModule.ɵfac = function OtpConfirmationPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OtpConfirmationPageRoutingModule)();
};
_OtpConfirmationPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _OtpConfirmationPageRoutingModule
});
_OtpConfirmationPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtpConfirmationPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);