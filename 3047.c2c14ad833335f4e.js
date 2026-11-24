"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3047],{

/***/ 26302
/*!*****************************************************************************!*\
  !*** ./src/app/phone-booking-lookup/phone-booking-lookup-routing.module.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneBookingLookupPageRoutingModule: () => (/* binding */ PhoneBookingLookupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _phone_booking_lookup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-booking-lookup.page */ 83840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneBookingLookupPageRoutingModule;




const routes = [{
  path: '',
  component: _phone_booking_lookup_page__WEBPACK_IMPORTED_MODULE_1__.PhoneBookingLookupPage
}];
class PhoneBookingLookupPageRoutingModule {}
_PhoneBookingLookupPageRoutingModule = PhoneBookingLookupPageRoutingModule;
_PhoneBookingLookupPageRoutingModule.ɵfac = function PhoneBookingLookupPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneBookingLookupPageRoutingModule)();
};
_PhoneBookingLookupPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PhoneBookingLookupPageRoutingModule
});
_PhoneBookingLookupPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PhoneBookingLookupPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 23047
/*!*********************************************************************!*\
  !*** ./src/app/phone-booking-lookup/phone-booking-lookup.module.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneBookingLookupPageModule: () => (/* binding */ PhoneBookingLookupPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _phone_booking_lookup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-booking-lookup-routing.module */ 26302);
/* harmony import */ var _phone_booking_lookup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-booking-lookup.page */ 83840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneBookingLookupPageModule;






class PhoneBookingLookupPageModule {}
_PhoneBookingLookupPageModule = PhoneBookingLookupPageModule;
_PhoneBookingLookupPageModule.ɵfac = function PhoneBookingLookupPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneBookingLookupPageModule)();
};
_PhoneBookingLookupPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _PhoneBookingLookupPageModule
});
_PhoneBookingLookupPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _phone_booking_lookup_routing_module__WEBPACK_IMPORTED_MODULE_3__.PhoneBookingLookupPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PhoneBookingLookupPageModule, {
    declarations: [_phone_booking_lookup_page__WEBPACK_IMPORTED_MODULE_4__.PhoneBookingLookupPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _phone_booking_lookup_routing_module__WEBPACK_IMPORTED_MODULE_3__.PhoneBookingLookupPageRoutingModule]
  });
})();

/***/ },

/***/ 83840
/*!*******************************************************************!*\
  !*** ./src/app/phone-booking-lookup/phone-booking-lookup.page.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneBookingLookupPage: () => (/* binding */ PhoneBookingLookupPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
var _PhoneBookingLookupPage;






class PhoneBookingLookupPage {
  constructor(route, apiFactory, util, router) {
    this.route = route;
    this.apiFactory = apiFactory;
    this.util = util;
    this.router = router;
    this.pnrNumber = '';
    this.phoneNumber = '';
    this.email = '';
    this.state = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pnrNumber = params['pnr_number'] || '';
      this.phoneNumber = params['phone_number'] || '';
    });
  }
  findBooking() {
    const pnr = String(this.pnrNumber || '').trim();
    const phone = String(this.phoneNumber || '').trim();
    if (!pnr) {
      this.util.showToast('Please enter PNR number');
    } else if (!phone) {
      this.util.showToast('Please enter mobile number');
    } else if (phone.length !== 10) {
      this.util.showToast('Please enter valid mobile number');
    } else {
      this.getPhoneBookingDetailsApi();
    }
  }
  getPhoneBookingDetailsApi() {
    this.apiFactory.getPhoneBookingDetails(this.pnrNumber, this.phoneNumber).subscribe(details => {
      if (details.code === 200) {
        this.pnrNumber = details.pnr_number;
        this.phoneNumber = details.phone_number;
        this.email = details.email;
        this.state = details.state;
        const navigationExtras = {
          queryParams: {
            pnr_number: details.pnr_number,
            phone_number: details.phone_number,
            email: details.email,
            state: details.state
          }
        };
        this.router.navigate(['/pay-phone-booking'], navigationExtras);
      } else {
        this.util.showToast(details.message);
      }
    }, err => {
      console.error('Error fetching phone booking details:', err);
    });
  }
}
_PhoneBookingLookupPage = PhoneBookingLookupPage;
_PhoneBookingLookupPage.ɵfac = function PhoneBookingLookupPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneBookingLookupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_PhoneBookingLookupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _PhoneBookingLookupPage,
  selectors: [["app-phone-booking-lookup"]],
  standalone: false,
  decls: 37,
  vars: 3,
  consts: [[1, "review-toolbar", 2, "padding-top", "8px", "padding-bottom", "8px"], ["mode", "md", "slot", "start", 2, "position", "absolute"], [3, "fullscreen"], [1, "booking-card"], [1, "header-divider"], ["size", "12"], [1, "description-text"], [1, "input-card"], [1, "field-label"], ["type", "text", "inputmode", "numeric", "placeholder", "e.g. 28684388", 3, "ngModelChange", "ngModel"], [1, "input-divider"], ["type", "tel", "inputmode", "numeric", "placeholder", "e.g. 9098195969", "maxlength", "10", 3, "ngModelChange", "ngModel"], ["expand", "block", 1, "find-booking-btn", 3, "click"], [1, "info-box"], [1, "info-text"], [2, "font-weight", "700"]],
  template: function PhoneBookingLookupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pay For Phone Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 5)(11, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You blocked a seat by calling our team. Enter your details below to find your booking and complete payment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "ion-row")(15, "ion-col", 5)(16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TICKET PNR NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 5)(19, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PhoneBookingLookupPage_Template_ion_input_ngModelChange_19_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.pnrNumber, $event) || (ctx.pnrNumber = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row")(22, "ion-col", 5)(23, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "REGISTERED MOBILE NUMBER");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 5)(26, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function PhoneBookingLookupPage_Template_ion_input_ngModelChange_26_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 5)(29, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhoneBookingLookupPage_Template_ion_button_click_29_listener() {
        return ctx.findBooking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Find My Booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter the ticket number and mobile number you gave when calling the bus operator. Only ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "pending phone bookings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " can be paid here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.pnrNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.phoneNumber);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #f5f5f5;\n}\n\nion-header[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.review-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff !important;\n  --color: #1e1e1e;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  border-bottom: 1px solid #E0E0E0;\n}\n\n.review-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: #1E1E1E;\n  font-weight: 700;\n  font-size: 18px;\n  text-align: start;\n  align-items: center;\n  text-align-last: center;\n}\n\n.review-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --color: #1E1E1E;\n}\n\n.booking-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 20px 16px 16px;\n  text-align: center;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1e1e1e;\n}\n\nion-row[_ngcontent-%COMP%], \nion-col[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.input-card[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --min-height: 32px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.header-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  display: block;\n  margin: 16px;\n  margin-bottom: 4px;\n  color: #555555;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.input-card[_ngcontent-%COMP%] {\n  margin: 16px;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 14px 16px 2px;\n  color: #b0b0b0;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\nion-input[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 0;\n  --padding-bottom: 12px;\n  min-height: 36px;\n  font-size: 14px;\n  font-weight: 600;\n  --placeholder-color: #8a8a8a;\n  --placeholder-opacity: 1;\n}\n\n.input-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n  margin-top: 2px;\n}\n\n.find-booking-btn[_ngcontent-%COMP%] {\n  margin: 8px 16px 0;\n  --background: #ffd54f;\n  --color: #000000;\n  font-weight: 700;\n  text-transform: none;\n  --border-radius: 12px;\n  min-height: 50px;\n}\n\n.info-box[_ngcontent-%COMP%] {\n  margin: 16px;\n  padding: 16px;\n  background: #dfdcf4;\n  border-radius: 12px;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  color: #311b92;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.4);\n  z-index: 999;\n}"]
});

/***/ }

}]);