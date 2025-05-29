"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6871],{

/***/ 52830:
/*!*****************************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPageRoutingModule: () => (/* binding */ TicketConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-confirm.page */ 97760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _TicketConfirmPageRoutingModule;




const routes = [{
  path: '',
  component: _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_0__.TicketConfirmPage
}];
class TicketConfirmPageRoutingModule {}
_TicketConfirmPageRoutingModule = TicketConfirmPageRoutingModule;
_TicketConfirmPageRoutingModule.ɵfac = function TicketConfirmPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketConfirmPageRoutingModule)();
};
_TicketConfirmPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TicketConfirmPageRoutingModule
});
_TicketConfirmPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TicketConfirmPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76871:
/*!*********************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPageModule: () => (/* binding */ TicketConfirmPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ticket_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-confirm-routing.module */ 52830);
/* harmony import */ var _ticket_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-confirm.page */ 97760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _TicketConfirmPageModule;






class TicketConfirmPageModule {}
_TicketConfirmPageModule = TicketConfirmPageModule;
_TicketConfirmPageModule.ɵfac = function TicketConfirmPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketConfirmPageModule)();
};
_TicketConfirmPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TicketConfirmPageModule
});
_TicketConfirmPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ticket_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketConfirmPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TicketConfirmPageModule, {
    declarations: [_ticket_confirm_page__WEBPACK_IMPORTED_MODULE_1__.TicketConfirmPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ticket_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketConfirmPageRoutingModule]
  });
})();

/***/ }),

/***/ 97760:
/*!*******************************************************!*\
  !*** ./src/app/ticket-confirm/ticket-confirm.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketConfirmPage: () => (/* binding */ TicketConfirmPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
var _TicketConfirmPage;






function TicketConfirmPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketConfirmPage_div_1_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
class TicketConfirmPage {
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
    // this.urlGet = "https://jpsb-qa1.ticketsimply.co.in/m/#/ticket-confirm?pnr_number=193311&is_native_app=true&status=0&is_round_trip=false";
    this.pnrNum = this.urlGet.split('?')[1];
    this.getData = this.pnrNum.split('&');
    let obj = [];
    for (let i = 0; i < this.getData.length; i++) {
      let [firname, secname] = this.getData[i].split('=');
      obj[firname] = secname;
    }
    this.pnrNumber = obj.pnr_number.split('_');
    this.is_round_trip = obj.is_round_trip.split('_');
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
    this.apiFactory.getTicketDetails(this.splitPnr).subscribe(result => {
      this.ticketstatus = result.ticket_status;
      if (this.ticketstatus != 'Pending') {
        this.viewTicket = true;
        this.failurePopop = false;
        this.ticketDetailsnew = result;
        this.viewTicketPage();
      }
    });
    // err:any => {
    // }
  }
  ngOnInit() {}
  viewTicketPage() {
    if (this.roundTrip === true) {
      // this.clearReturnJourney();
      let bookingDetails = {
        "round_trip_number": this.splitPnr
      };
      this.commonStorage.localSet('bookedTicketDetails', JSON.stringify(bookingDetails));
      localStorage.setItem('bookingDetails', this.commonStorage.localGet('bookedTicketDetails'));
      let navigationExtras = {
        queryParams: {
          new_booking: true,
          is_roundTrip: true,
          hideLocateTrackBus: true
        }
      };
      this.navCtrl.navigateRoot('booking-details', navigationExtras);
    } else {
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
}
_TicketConfirmPage = TicketConfirmPage;
_TicketConfirmPage.ɵfac = function TicketConfirmPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketConfirmPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_0__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_1__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage));
};
_TicketConfirmPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _TicketConfirmPage,
  selectors: [["app-ticket-confirm"]],
  standalone: false,
  decls: 2,
  vars: 1,
  consts: [["style", "margin-top: 50%;", 4, "ngIf"], [2, "margin-top", "50%"], [2, "font-size", "35px", "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "././assets/icon/UnconfirmedEmoji.svg"], [2, "text-align", "center", "font-size", "16px"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["mode", "md", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], [1, "search-txt"]],
  template: function TicketConfirmPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TicketConfirmPage_div_1_Template, 10, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ticketstatus == "Pending");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon],
  styles: [".search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  width: 61px;\n  text-transform: capitalize;\n  text-align: center;\n}"]
});

/***/ })

}]);