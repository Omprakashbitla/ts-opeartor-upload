(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_otp-confirmation_otp-confirmation_module_ts"],{

/***/ 11290:
/*!*********************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPageRoutingModule: () => (/* binding */ OtpConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-confirmation.page */ 25412);




const routes = [{
  path: '',
  component: _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.OtpConfirmationPage
}];
let OtpConfirmationPageRoutingModule = class OtpConfirmationPageRoutingModule {};
OtpConfirmationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], OtpConfirmationPageRoutingModule);


/***/ }),

/***/ 67255:
/*!*************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPageModule: () => (/* binding */ OtpConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _otp_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-confirmation-routing.module */ 11290);
/* harmony import */ var _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-confirmation.page */ 25412);







let OtpConfirmationPageModule = class OtpConfirmationPageModule {};
OtpConfirmationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otp_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpConfirmationPageRoutingModule],
  declarations: [_otp_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.OtpConfirmationPage]
})], OtpConfirmationPageModule);


/***/ }),

/***/ 25412:
/*!***********************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpConfirmationPage: () => (/* binding */ OtpConfirmationPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _otp_confirmation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-confirmation.page.html?ngResource */ 59070);
/* harmony import */ var _otp_confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp-confirmation.page.scss?ngResource */ 82103);
/* harmony import */ var _otp_confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_otp_confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ 70176);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ 96525);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ 41843);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/appdata */ 51559);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ 88794);











let OtpConfirmationPage = class OtpConfirmationPage {
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
    // console.log(JSON.parse( localStorage.getItem('currentUser')));
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    // console.log('grrgr' ,this.userrDetails)
    this.newIdData = localStorage.getItem('dataGet');
    this.pointsGet = localStorage.getItem('totalPoints');
    // this.tokenGet  =localStorage.getItem('tokenNum');
    // this.dynamicColor = JSON.parse (localStorage.getItem('metaData'))
    // this.backgroundColor= this.dynamicColor.appColors.iconsAndButtonsColor;
    // this.textColor = this.dynamicColor.appColors.primaryText;
    //   console.log(this.dynamicColor)       
  }

  ngOnInit() {}
  timer(remaining) {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;
    this.m = m < 10 ? '0' + m : m;
    this.s = s < 10 ? '0' + s : s;
    // document.getElementById('timer').innerHTML = m + ':' + s;
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
    // if(!this.timerOn) {
    //   // Do validate stuff here
    //   return;
    // }
    // Do timeout stuff here
    // this.timerHideShow = false;
    // alert('Timeout for otp');
  }

  resend() {
    //  this.timer(60);
    //  this.isShownn = false;
    this.apiFactory.smartMilesSendOTP(this.submit_data).subscribe(data => {
      this.dema = data;
      //  console.log('myData',this.dema)
      if (this.dema.code == 500) {
        this.toast();
        // console.log('ErrorMessage' , this.dema.message)
      }
      //  else if(this.transferMobNo.length !== 0){
      //   this.isShown = ! this.isShown;
      //   this.timerHideShow = true;
      //   this.timer(59);
      // }
      else {
        // this.isShown = ! this.isShown;
        this.timerHideShow = true;
        this.timer(59);
      }
      // this.timer(60);
    }, error => {});
  }
  // testPost(url): Observable<any>{
  //   const idBody =
  //     {
  //       "id":this.newIdData, 
  //       "transfer_mobile_number":this.transferMobNo
  //       }
  //   ;
  //   console.log("loguu",idBody);
  //   return this.http.post(url,idBody);
  //  }
  //  testGet(url): Observable<any>{
  //   const idBody =
  //     {  
  //       "auth_token": this.userDetails.token,
  //     "id": this.newIdData,
  //     "transfer_mobile_number": this.transferMobNo,
  //     "secret_key": this.dema.secret_key,
  //     "otp": this.otpGet
  //       }
  //   ;
  //   console.log("loguu",idBody);
  //   return this.http.post(url,idBody);
  //  }
  goToSuccessTransfer() {
    this.timer(0);
    // console.log(this.transferMobNo);
    localStorage.setItem('transferMobNo', this.transferMobNo);
    // this.testGet(`${this.baseUrl}api2/verify_otp_and_transfer_points.json?`).map(res =>res.json()).subscribe(data =>{
    //   this.demo = data;
    //   console.log('demooodata' ,this.demo);
    // },error =>{});
    this.apiFactory.smartMilesVerifyOtp("&id=" + this.newIdData + "&transfer_mobile_number=" + this.transferMobNo + "&secret_key=" + this.dema.secret_key + "&otp=" + this.otpGet).subscribe(data => {}, error => {
      // console.log(error);
    });
    ;
    this.navCtrl.navigateForward('points-success-msg');
  }
  sendOTP() {
    // this.testPost(`${this.baseUrl}api2/send_otp_to_transfer_smart_mile.json?auth_token=${ this.userDetails.token}`).map(res => res.json()).subscribe(data => {
    //   this.dema = data;
    // console.log('myData',this.dema)
    // if(this.dema.code == 500 ){
    //    this.toast();
    //   console.log('ErrorMessage' , this.dema.message)
    // }
    //  else if(this.transferMobNo.length !== 0){
    //   this.isShown = ! this.isShown;
    //   this.timer(60);
    // }
    // // this.timer(60);
    // }, error => { 
    // });  
    this.submit_data = {
      "id": this.newIdData,
      "transfer_mobile_number": this.transferMobNo
    };
    this.apiFactory.smartMilesSendOTP(this.submit_data).subscribe(data => {
      this.dema = data;
      //  console.log('myData',this.dema)
      if (this.dema.code == 500) {
        this.toast();
        // console.log('ErrorMessage' , this.dema.message)
      }
      //  else if(this.transferMobNo.length !== 0){
      //   this.otpsendHide = false;
      //   this.timerHideShow = true;
      //   this.isShown = ! this.isShown;
      //   this.timer(59);
      // }
      else {
        this.otpsendHide = false;
        this.timerHideShow = true;
        this.isShown = true;
        this.timer(59);
      }
      // this.timer(60);
    }, error => {});
  }
  toast() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let toast = yield _this.toastCtrl.create({
        message: _this.dema.message,
        duration: 4000,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }
  cancel() {
    // this.postApi()
    // this.modalCtrl.dismiss()
    this.navCtrl.navigateForward('point-transfer');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
  }, {
    type: _services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_7__.ApiFactory
  }];
};
OtpConfirmationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-otp-confirmation',
  template: _otp_confirmation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_otp_confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController, _services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController, _services__WEBPACK_IMPORTED_MODULE_7__.ApiFactory])], OtpConfirmationPage);


/***/ }),

/***/ 82103:
/*!************************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  --background: rgba(128, 128, 128, 0.733);
  height: 100vh;
}

.firDiv {
  --background: rgba(128, 128, 128, 0.733);
  height: 40vh;
  padding: 4px 10px 20px 10px;
}

.image-set {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.secDiv {
  background: #f1f5f8;
  min-height: 60vh;
  padding: 4px 10px 20px 10px;
  border-radius: 28px 28px 0 0;
}

.firPara {
  color: white;
  margin-top: 80px;
}

.firSpan {
  font-size: small;
  font-weight: 500;
}

.secDivv {
  background: #dfdada;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 30px;
  padding-top: 2px;
  padding-bottom: 5px;
}

ion-input {
  padding-bottom: 5px !important;
}

.main-div {
  display: flex;
}

.thirdDiv {
  margin-left: auto;
  margin-right: auto;
}

.btn-style {
  text-align: center;
  padding: 20px;
}

.first-btn {
  margin-right: 10px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  background-color: var(--iconsAndButtonsColor);
}

.sec-btn {
  background: #ed3237;
  color: #fff;
  margin-left: 10px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
}

.secDiv.ion-margin-bottom {
  margin-bottom: 0;
}

:host ion-item {
  --border-color: black;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
}`, "",{"version":3,"sources":["webpack://./src/app/otp-confirmation/otp-confirmation.page.scss"],"names":[],"mappings":"AAEA;EACI,wCAAA;EACA,aAAA;AADJ;;AAGA;EACI,wCAAA;EAEA,YAAA;EACA,2BAAA;AADJ;;AAIA;EACI,YAAA;EACA,aAAA;EACA,cAAA;AADJ;;AAGA;EACI,mBAAA;EACA,gBAAA;EACA,2BAAA;EACA,4BAAA;AAAJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AACA;EAEI,gBAAA;EACA,gBAAA;AACJ;;AAMA;EACI,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AAHJ;;AAUA;EAII,8BAAA;AAVJ;;AAYA;EACI,aAAA;AATJ;;AAYA;EAEI,iBAAA;EACA,kBAAA;AAVJ;;AAcA;EACI,kBAAA;EACA,aAAA;AAXJ;;AAaA;EAEI,kBAAA;EAGA,4BAAA;EACA,mBAAA;EAEA,6CAAA;AAdJ;;AAiBA;EACI,mBAAA;EACA,WAAA;EACA,iBAAA;EAGA,4BAAA;EACA,mBAAA;AAhBJ;;AAkBA;EACI,gBAAA;AAfJ;;AA4BI;EACI,qBAAA;EACA,+BAAA;EACA,6BAAA;AAzBR","sourcesContent":["\n\nion-content{\n    --background: rgba(128, 128, 128, 0.733);\n    height: 100vh;\n}\n.firDiv{\n    --background: rgba(128, 128, 128, 0.733);\n    // --background: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n    height: 40vh;\n    padding: 4px 10px 20px 10px;\n    // border-radius: 0 0 28px 28px;\n}\n.image-set{\n    width: 100px;\n    height: 100px;\n    margin: 0 auto;\n }\n.secDiv{\n    background: #f1f5f8;\n    min-height: 60vh;\n    padding: 4px 10px 20px 10px;\n    border-radius: 28px 28px 0 0;\n}\n.firPara{\n    color: white;\n    margin-top: 80px;\n}\n.firSpan{\n    // color: white;\n    font-size: small;\n    font-weight: 500;\n    // margin-top: -10px;\n}\n// .listDiv{\n//     // display: flex;\n//     justify-content: center;\n// }\n.secDivv{\n    background: #dfdada;\n    margin-left: auto;\n    margin-right: auto;\n    width: 150px;\n    height: 30px;\n    padding-top: 2px;\n    padding-bottom: 5px;\n    // margin: 0 auto;\n}\n// .secDivvv{\n//   margin-left: 50px;\n \n// }\nion-input{\n    // margin-top: auto;\n    // margin-bottom: 5px;\n    // color: white;\n    padding-bottom: 5px !important;  \n}\n.main-div{\n    display: flex;\n    // justify-content: center;\n}\n.thirdDiv{\n    // background: #d1a2a2;\n    margin-left: auto;\n    margin-right: auto;\n    // width: 60px;\n    // height: 60px;\n}\n.btn-style{\n    text-align: center;\n    padding: 20px;\n}\n.first-btn{\n    // background: #00d543;\n    margin-right: 10px;\n    // width: 100px;\n    // height: 100px;\n    padding: 10px 15px 10px 15px;\n    border-radius: 10px;\n    // color:white;\n    background-color:var(--iconsAndButtonsColor);\n\n}\n.sec-btn{\n    background: #ed3237;\n    color: #fff;\n    margin-left: 10px;\n    // width: 10px;\n    // height: 100px;\n    padding: 10px 15px 10px 15px;\n    border-radius: 10px;\n}\n.secDiv.ion-margin-bottom {\n    margin-bottom: 0;\n}\n// .sc-ion-input-md-h {\n//     --padding-top: 0;\n//     // --padding-left:auto;\n//     // --padding-right:auto;\n//     text-align: center;\n// }\n// ion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n//     margin-top: 15px;\n// }\n\n:host {\n    ion-item {\n        --border-color: black; // default underline color\n        --highlight-color-invalid: none; // invalid underline color\n        --highlight-color-valid: none; // valid underline color\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59070:
/*!************************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"h50 bg-cl\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n    <div class=\"head\">OTP Confirmation</div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"firDiv ion-margin-bottom ion-text-center\">\n    <p class=\"firPara\">Enter OTP to Confirm <br>  <span class=\"firSpan\">Points you are Transfering</span> <br> <span  class=\"firSpan\">{{pointsGet}} Points</span></p>\n    <div>\n      <ion-img class=\"image-set\" src=\"../../assets/otp-confirmation.png\"></ion-img>\n    </div>\n  </div>\n\n\n  <div class=\"secDiv ion-margin-bottom\">\n    <p class=\"ion-text-center\">Please enter other customer registered no. <br> to whom you wants transfer</p>\n    <div class=\"listDiv\">\n      <div >\n        <ion-item  style=\"--background:#f1f5f8\">\n          <ion-input [(ngModel)]=\"transferMobNo\" placeholder=\"Enter phone number\" type=\"number\" maxlength='10'></ion-input> \n        </ion-item>\n      </div>\n      <div class=\"btn-style\" *ngIf=\"otpsendHide\">\n        <span (click)=\"sendOTP()\" class=\"first-btn\"  >Send OTP</span>\n        <span class=\"sec-btn\" (click)=\"cancel()\">Cancel</span>\n        \n      </div>\n    </div>\n       <div>\n      <!-- <p class=\"ion-text-center\" style=\"margin-top: 2px;\">Sorry this number is not registered with us.</p> -->\n      <!-- <p class=\"ion-text-center\" style=\"color: rgb(93, 194, 228);margin-top: 2px;\">This number is Registered with us as Mr. Reddy</p> -->\n    </div>\n    \n    <div *ngIf=\"isShown\">\n      <h5 class=\"ion-text-center\">OTP</h5>\n       <div >\n         <ion-row>\n           <ion-col size=\"9\"  >\n            <ion-item style=\"--background:#f1f5f8\">\n              <ion-input    type=\"tel\" [(ngModel)]=\"otpGet\" ></ion-input> \n            </ion-item>  \n           </ion-col>\n           <ion-col size=\"3\" style=\"padding: 10px;\">\n            <!-- <div>Time left = <span id=\"timer\"></span></div> -->\n            <span  id=\"timer\" *ngIf=\"timerHideShow\"> {{timerString}} </span> <br> <span *ngIf=\"!timerHideShow\" class=\"ion-text-center\" (click)=\"resend()\"   >Resend</span>\n           </ion-col>\n         </ion-row>\n        <!-- <div class=\"thirdDiv\">\n          <ion-item>\n            <ion-input  type=\"tel\" maxlength='10'></ion-input> \n          </ion-item>        \n        </div> -->\n        <!-- <div class=\"thirdDiv\">\n          <ion-input type=\"tel\" maxlength='1'></ion-input>\n        </div>\n        <div class=\"thirdDiv\">\n          <ion-input type=\"tel\" maxlength='1'></ion-input>\n        </div>\n        <div class=\"thirdDiv\">\n          <ion-input type=\"tel\" maxlength='1'></ion-input>\n        </div> -->\n        <!-- <div>\n          <p>00:59 <br> <span class=\"ion-text-center\" >Resend</span></p>\n        </div> -->\n      </div>\n      <p class=\"ion-text-center\"  >OTP is shared on below Registered contact details <br> <span>{{userDetails.user.mobileNo}}</span> </p>\n      \n    <div class=\"btn-style\" >\n      <span (click)=\"goToSuccessTransfer()\" class=\"first-btn\">Approve</span>\n      <span class=\"sec-btn\" (click)=\"cancel()\">Cancel</span>\n    </div>\n    </div>\n   \n    <!-- <br> <br> -->\n    <!-- <p style=\"color: red; float: right; font-size: smaller;\">Note:Please Read the Transfer Related T&C Carefully</p> -->\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_otp-confirmation_otp-confirmation_module_ts.js.map