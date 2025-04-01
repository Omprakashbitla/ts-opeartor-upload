(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ticket-confirm_ticket-confirm_module_ts"],{

/***/ 45454:
/*!*****************************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPageRoutingModule: () => (/* binding */ TicketConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-confirm.page */ 64812);




const routes = [{
  path: '',
  component: _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_0__.TicketConfirmPage
}];
let TicketConfirmPageRoutingModule = class TicketConfirmPageRoutingModule {};
TicketConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TicketConfirmPageRoutingModule);


/***/ }),

/***/ 75131:
/*!*********************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPageModule: () => (/* binding */ TicketConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _ticket_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-confirm-routing.module */ 45454);
/* harmony import */ var _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-confirm.page */ 64812);







let TicketConfirmPageModule = class TicketConfirmPageModule {};
TicketConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ticket_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketConfirmPageRoutingModule],
  declarations: [_ticket_confirm_page__WEBPACK_IMPORTED_MODULE_1__.TicketConfirmPage]
})], TicketConfirmPageModule);


/***/ }),

/***/ 64812:
/*!*******************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPage: () => (/* binding */ TicketConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ticket_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-confirm.page.html?ngResource */ 88083);
/* harmony import */ var _ticket_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-confirm.page.scss?ngResource */ 82421);
/* harmony import */ var _ticket_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ticket_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 88794);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global-data.service */ 74283);







let TicketConfirmPage = class TicketConfirmPage {
  constructor(apiFactory, navCtrl, globalData, commonStorage) {
    this.apiFactory = apiFactory;
    this.navCtrl = navCtrl;
    this.globalData = globalData;
    this.commonStorage = commonStorage;
    this.viewTicket = false;
    this.failurePopop = false;
    this.is_round_trip = false;
    this.roundTrip = false;
    this.urlGet = window.location.href;
    //  console.log('urlHere',this.urlGet) ;
    // this.urlGet = "https://www.btb-qa2.ticketsimply.co.in/m/#/ticket-confirm?pnr_number=471668&is_native_app=true&status=0&is_round_trip=false";
    this.pnrNum = this.urlGet.split('?')[1];
    this.getData = this.pnrNum.split('&');
    let obj = [];
    for (let i = 0; i < this.getData.length; i++) {
      let [firname, secname] = this.getData[i].split('=');
      obj[firname] = secname;
    }
    this.pnrNumber = obj.pnr_number.split('_');
    this.is_round_trip = obj.is_round_trip.split('_');
    // console.log('splitingRoundTrip',this.is_round_trip)
    if (!this.pnrNumber[1]) {
      this.splitPnr = this.pnrNumber[0];
    } else {
      this.splitPnr = this.pnrNumber[1];
    }
    if (!this.is_round_trip[1]) {
      this.roundTrip = this.is_round_trip[0];
    } else {
      this.roundTrip = this.is_round_trip[1];
    }
    // console.log("splitPnr",this.splitPnr, this.roundTrip);
    this.apiFactory.getTicketDetails(this.splitPnr).subscribe(result => {
      this.ticketstatus = result.ticket_status;
      if (this.ticketstatus != 'Pending') {
        this.viewTicket = true;
        this.failurePopop = false;
        this.ticketDetailsnew = result;
        this.viewTicketPage();
      }
    });
    err => {};
  }
  ngOnInit() {}
  viewTicketPage() {
    if (this.roundTrip === true) {
      // console.log('roundTrip')
      // this.clearReturnJourney();
      let bookingDetails = {
        "round_trip_number": this.splitPnr
      };
      this.commonStorage.localSet('bookedTicketDetails', JSON.stringify(bookingDetails));
      localStorage.setItem('bookingDetails', this.commonStorage.localGet('bookedTicketDetails'));
      // console.log(bookingDetails,"bookingDetailsGoToTicketDetailsPage---------")
      let navigationExtras = {
        queryParams: {
          new_booking: true,
          is_roundTrip: true,
          hideLocateTrackBus: true
        }
      };
      this.navCtrl.navigateRoot('booking-details', navigationExtras);
    } else {
      // console.log('singleTrip')
      localStorage.setItem('bookingDetails', JSON.stringify(this.ticketDetailsnew));
      let navigationExtras = {
        queryParams: {
          new_booking: true,
          is_roundTrip: false,
          hideLocateTrackBus: true
        }
      };
      this.navCtrl.navigateRoot('booking-details', navigationExtras);
    }
  }
  clearReturnJourney() {
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.commonStorage.setItem('travelDateReturn', {});
    // this.modalController.dismiss({});
  }

  goToHome() {
    this.navCtrl.navigateRoot('tabs/home');
  }
  static #_ = this.ctorParameters = () => [{
    type: _services__WEBPACK_IMPORTED_MODULE_2__.ApiFactory
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
  }, {
    type: _services_global_data_service__WEBPACK_IMPORTED_MODULE_3__.GlobalDataService
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage
  }];
};
TicketConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-ticket-confirm',
  template: _ticket_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ticket_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__.ApiFactory, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController, _services_global_data_service__WEBPACK_IMPORTED_MODULE_3__.GlobalDataService, _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage])], TicketConfirmPage);


/***/ }),

/***/ 82421:
/*!********************************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.search-txt {
  font-size: 14px;
  font-weight: bold;
  width: 61px;
  text-transform: capitalize;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/app/ticket-confirm/ticket-confirm.page.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,0BAAA;EACA,kBAAA;AACJ","sourcesContent":[".search-txt {\n    font-size: 14px;\n    font-weight: bold;\n    width: 61px;\n    text-transform: capitalize;\n    text-align: center;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88083:
/*!********************************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content>\n  <div style=\"margin-top: 50%;\" *ngIf=\"this.ticketstatus == 'Pending'\">\n    <div style=\"\n    font-size: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\">\n      <ion-icon src=\"././assets/icon/UnconfirmedEmoji.svg\"></ion-icon>\n    </div>\n    <p style=\"text-align: center; font-size: 16px;\">Note: Your ticket is in Pending.Please check after sometime.</p>\n    <div style=\"display: flex;\n    align-items: center;\n    justify-content: center;\">\n      <ion-button mode=\"md\" (click)=\"goToHome()\" class=\"search-btn\" style='--background:var(--iconsAndButtonsColor);--color:var(--primaryText)' >\n        <p class=\"search-txt\">Okay\n        <p>\n  </ion-button>\n</div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ticket-confirm_ticket-confirm_module_ts.js.map