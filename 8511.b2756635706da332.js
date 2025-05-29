"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8511],{

/***/ 89414:
/*!*****************************************************!*\
  !*** ./src/app/bus-hire/bus-hire-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusHirePageRoutingModule: () => (/* binding */ BusHirePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _bus_hire_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus-hire.page */ 96504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _BusHirePageRoutingModule;




const routes = [{
  path: '',
  component: _bus_hire_page__WEBPACK_IMPORTED_MODULE_0__.BusHirePage
}];
class BusHirePageRoutingModule {}
_BusHirePageRoutingModule = BusHirePageRoutingModule;
_BusHirePageRoutingModule.ɵfac = function BusHirePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BusHirePageRoutingModule)();
};
_BusHirePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _BusHirePageRoutingModule
});
_BusHirePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BusHirePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96504:
/*!*******************************************!*\
  !*** ./src/app/bus-hire/bus-hire.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusHirePage: () => (/* binding */ BusHirePage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 45564);
var _BusHirePage;











const _c0 = ["quoteCanvas"];
function BusHirePage_ion_select_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", val_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](val_r1.name);
  }
}
class BusHirePage {
  constructor(formBuilder, api, util, alertController, commonService, route, commonStorage) {
    this.formBuilder = formBuilder;
    this.api = api;
    this.util = util;
    this.alertController = alertController;
    this.commonService = commonService;
    this.route = route;
    this.commonStorage = commonStorage;
    this.bus_type = [{
      "id": 0,
      "name": "AC"
    }, {
      "id": 1,
      "name": "Non-AC"
    }];
    this.randomNumber = '';
    this.randomNumber1 = '';
    this.randomNumberEntered = '';
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount;
    // this.defaultCall();
    // this.createCaptcha();
  }
  ionViewDidEnter() {
    console.log('available routes initialized');
    this.route.queryParams.subscribe(params => {
      console.log("reentered page");
      this.title = params["title"];
      if (this.title == "Bus Rental Service") {
        this.package_type = "1";
      } else if (this.title == "Car Rental Service") {
        this.package_type = "2";
      } else {
        this.package_type = "4";
      }
    });
  }
  // defaultCall(){
  //   this.api.buscartourpackages()
  //   .subscribe(
  //     res => {
  //         this.spam_answers =  res.spam_answers;
  //         this.spam_question = res.spam_question;
  //     },
  //     err => {
  //     }
  //   )
  // }
  ngOnInit() {
    this.createCaptcha();
    // this.randomNumber1 = this.generateRandomNumber(11, 99) ;
    // this.randomNumber = this.generateRandomNumber(11, 99);
    this.busForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_0__.ValidatorService.emailOrPhoneValidator])],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      nSeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      bustype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      anyspecialrequest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      verification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
    });
  }
  submitBusHire(event) {
    event.preventDefault();
    // if (this.busForm.value.verification == this.code) {
    //   alert("Valid Captcha")
    // }else{
    //   alert("Invalid Captcha. try Again");
    //   this.createCaptcha();
    // }
    // this.sum = parseInt(this.randomNumber1) + parseInt(this.randomNumber);
    // console.log('add',this.sum)
    if (this.isValid() && this.busForm.value.verification == this.code) {
      // if (this.isValid() && this.sum == this.busForm.value.verification) {
      console.log(this.busForm.value);
      let submit_data = {
        "passenger_name": this.busForm.value.name,
        "mobile_number": this.busForm.value.phone,
        "email": this.busForm.value.email,
        "package_type": this.package_type,
        //PACKAGE_BOOKING_BUS_HIRE = 1, PACKAGE_BOOKING_CAR = 2, PACKAGE_BOOKING_TAXI = 3, PACKAGE_BOOKING_PACKAGE =4, PACKAGE_BOOKING_HOME_DELIVERY = 5
        "from": this.busForm.value.from,
        "to": this.busForm.value.to,
        "no_of_seats": this.busForm.value.nSeat,
        "bus_type": this.busForm.value.bustype,
        // AC = 0, Non-AC = 1, AC and Non-AC = 2
        "remarks": "none"
        // "spam_answers": this.spam_answers,
        // "spam_answer": this.busForm.value.verification
      };
      console.log(submit_data);
      this.api.packageBooking(submit_data).subscribe(res => {
        this.util.showToast(res.message);
        if (res.message == 'Thank you for posting this request. We will get back to you soon.') {
          console.log("yes");
          this.busForm.reset();
          //  this.defaultCall();
          this.createCaptcha();
        } else {
          //  this.defaultCall();
        }
      }, err => {});
    } else if (this.busForm.value.verification != this.code) {
      let msg = "Invalid Captcha";
      this.util.showToast(msg);
      this.createCaptcha();
      // this.busForm.value.verification = '';
      // this.randomNumber = this.generateRandomNumber(11, 99);
      // this.randomNumber1 = this.generateRandomNumber(11, 99) ;
    }
  }
  isValid() {
    if (this.busForm.valid) {
      return true;
    }
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  // generateRandomNumber(min,max){
  //   let randomNum = min+Math.random()*(max-min);
  //   randomNum = Math.round(randomNum);
  //   return randomNum.toString();
  // }
  // validate(){
  //   this.sum = parseInt(this.randomNumber1) + parseInt(this.randomNumber);
  //   console.log('add',this.sum)
  //   if(this.sum != this.randomNumberEntered){
  //     this.busForm.value.verification = '';
  //     this.randomNumber = this.generateRandomNumber(11, 99);
  //     this.randomNumber1 = this.generateRandomNumber(11, 99) ;
  //   }else{
  //     alert('valid captcha');
  //   }
  // }
  createCaptcha() {
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyz";
    let lengthOtp = 6;
    let captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1) captcha.push(charsArray[index]);else i--;
    }
    const captchaContainer = document.getElementById("captcha");
    if (captchaContainer) {
      captchaContainer.innerHTML = '';
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    if (ctx) {
      ctx.font = "25px Georgia";
      ctx.strokeText(captcha.join(""), 0, 30);
    }
    // //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.code = captcha.join("");
    if (captchaContainer) {
      captchaContainer.appendChild(canv);
    }
    // this.deta = this.code // adds the canvas to the body element
    console.log('captchacreate', this.code);
  }
  resetCap() {
    this.createCaptcha();
  }
}
_BusHirePage = BusHirePage;
_BusHirePage.ɵfac = function BusHirePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BusHirePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage));
};
_BusHirePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _BusHirePage,
  selectors: [["app-bus-hire"]],
  viewQuery: function BusHirePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    }
  },
  standalone: false,
  decls: 62,
  vars: 5,
  consts: [["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], [1, "bg-content"], [1, "center-div"], ["lines", "none"], [3, "ngSubmit", "formGroup"], ["position", "floating", 1, "txt-lbl"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "phone"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "from"], ["type", "text", "formControlName", "to"], ["type", "text", "formControlName", "nSeat"], ["color", "red", "interface", "popover", "formControlName", "bustype", 1, "select-lbl", "txt-lbl", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "anyspecialrequest"], [1, "txt-lbl"], ["id", "captcha", 1, "captchaDiv"], [2, "background-color", "#f7f9fb"], [1, "txt-lbl", 2, "margin-top", "15px"], ["size", "8"], [1, "captchaVerificationDiv"], ["type", "text", "formControlName", "verification"], ["size", "4"], ["src", "./../../assets/Refresh_icon.png", 1, "refreshLogo", 3, "click"], ["padding", ""], ["mode", "md", "type", "submit", "expand", "block", 1, "submit-btn"], [3, "value"]],
  template: function BusHirePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 3)(7, "div", 4)(8, "ion-item", 5)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Please enter your details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function BusHirePage_Template_form_ngSubmit_11_listener($event) {
        return ctx.submitBusHire($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item")(13, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item")(17, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item")(21, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-item")(25, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-item")(29, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "ion-input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-item")(33, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "No of Seats");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "ion-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-item")(37, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, BusHirePage_ion_select_option_38_Template, 2, 2, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-item")(40, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Any special request");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "ion-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-item", 5)(44, "ion-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Verification");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-row", 19)(49, "ion-item")(50, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Verification Answer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-row", 19)(53, "ion-col", 21)(54, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "ion-input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 24)(57, "ion-img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BusHirePage_Template_ion_img_click_57_listener() {
        return ctx.resetCap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26)(60, "ion-button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.busForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx.package_type == "1" ? "Bus" : ctx.package_type == "2" ? "Car" : "Bus", " Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bus_type);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: [".head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  height: 44px;\n}\n\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: var(--viewBgColor);\n}\n.bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  z-index: 5;\n  --background: white;\n  font-family: NotoSans;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: #ff002a;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 152px;\n}\n\n.img-right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\nion-select-option[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-family: NotoSans !important;\n}\n\n.ok-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.select-lbl[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  max-width: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 0;\n  height: 40px;\n  border-radius: 4px;\n}\n\n.refreshBtn[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 49px;\n  margin-top: 0;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n}\n\n.captchaDiv[_ngcontent-%COMP%] {\n  color: rgba(34, 36, 40, 0.6588235294);\n  font-size: 25px;\n  font-family: Georgia;\n  font-weight: bold;\n  border: 1px solid rgba(34, 36, 40, 0.6588235294);\n  width: 250px;\n  height: 50px;\n  text-align: center;\n  padding: 10px;\n}\n\n.captchaVerificationDiv[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 250px;\n}\n\n.refreshLogo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 10px;\n}"]
});

/***/ }),

/***/ 98511:
/*!*********************************************!*\
  !*** ./src/app/bus-hire/bus-hire.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusHirePageModule: () => (/* binding */ BusHirePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _bus_hire_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus-hire-routing.module */ 89414);
/* harmony import */ var _bus_hire_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bus-hire.page */ 96504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _BusHirePageModule;






class BusHirePageModule {}
_BusHirePageModule = BusHirePageModule;
_BusHirePageModule.ɵfac = function BusHirePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BusHirePageModule)();
};
_BusHirePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _BusHirePageModule
});
_BusHirePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _bus_hire_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusHirePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BusHirePageModule, {
    declarations: [_bus_hire_page__WEBPACK_IMPORTED_MODULE_1__.BusHirePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _bus_hire_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusHirePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);