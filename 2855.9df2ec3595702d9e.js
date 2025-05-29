"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2855],{

/***/ 25294:
/*!***************************************************************!*\
  !*** ./src/app/autofill-form/autofill-form-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillFormPageRoutingModule: () => (/* binding */ AutofillFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _autofill_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofill-form.page */ 54864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AutofillFormPageRoutingModule;




const routes = [{
  path: '',
  component: _autofill_form_page__WEBPACK_IMPORTED_MODULE_0__.AutofillFormPage
}];
class AutofillFormPageRoutingModule {}
_AutofillFormPageRoutingModule = AutofillFormPageRoutingModule;
_AutofillFormPageRoutingModule.ɵfac = function AutofillFormPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillFormPageRoutingModule)();
};
_AutofillFormPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AutofillFormPageRoutingModule
});
_AutofillFormPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AutofillFormPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54864:
/*!*****************************************************!*\
  !*** ./src/app/autofill-form/autofill-form.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillFormPage: () => (/* binding */ AutofillFormPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 70600);
var _AutofillFormPage;









class AutofillFormPage {
  constructor(apiFactory, loaderService, dateService, commonService, util, commonStorage, globalData, navCtrl) {
    this.apiFactory = apiFactory;
    this.loaderService = loaderService;
    this.dateService = dateService;
    this.commonService = commonService;
    this.util = util;
    this.commonStorage = commonStorage;
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.isreturnTrip = false;
    this.autofillData = false;
  }
  ngOnInit() {
    // const currentUrl = 'http://api.lvh.me:3004/m/autofill-form?from=63&fromCity=Jaipur&to=152&toCity=Udaipur&depart=2024-04-25&pre_postpone=true&res_id=65173&is_tiny_url_booking=true&is_show_return=false&pnr=XX170597'
    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);
    const queryString = currentUrl.split('?')[1];
    console.log("String after ?: ", queryString);
    let keyValuePairs = queryString.split('&');
    let resultObject = {};
    keyValuePairs.forEach(pair => {
      let [key, value] = pair.split('=');
      resultObject[key] = value;
    });
    console.log("resultObject", resultObject.pnr);
    this.loaderService.showLoadingDefault();
    this.apiFactory.getTicketDetails_autofill(resultObject.pnr).subscribe(result => {
      console.log(result);
      if (result.code && result.code == 419) {
        this.util.showToast(result.message);
        this.navCtrl.navigateForward('tabs/home');
      } else {
        // this.origin = {name: result.origin,id: result.origin_id}
        // this.destination = {name: result.destination,id: result.destination_id}
        this.origin = {
          name: resultObject.fromCity,
          id: resultObject.from
        };
        this.destination = {
          name: resultObject.toCity,
          id: resultObject.to
        };
        console.log("origin", this.origin);
        console.log("destination", this.destination);
        this.commonStorage.localSet('origin', this.origin);
        this.commonStorage.localSet('destination', this.destination);
        // this.reservation_id = result.reservation_id;
        this.reservation_id = resultObject.res_id;
        console.log("reservation_id", this.reservation_id);
        // const parts = result.travel_date.split('/');
        // const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        this.autofillData = true;
        this.commonStorage.localSet('autofillData', this.autofillData);
        this.commonStorage.localSet('ticketRecentData', result);
        const personal_contact = {
          country_code: '',
          email: result.result.passengerOtherDetails.email,
          mobile_number: '',
          pinCode: result.result.passengerOtherDetails.pinCode ? result.result.passengerOtherDetails.pinCode : ''
        };
        const phone = result.result.passengerOtherDetails.phone;
        if (phone.includes('-')) {
          const parts = phone.split('-');
          personal_contact.country_code = parts[0].substring(1);
          personal_contact.mobile_number = parts[1];
        } else {
          personal_contact.country_code = '';
          personal_contact.mobile_number = phone;
        }
        const personal_data = result.result.passengerDetails.map(passenger => ({
          name: passenger.name.trim(),
          age: passenger.age,
          sex: passenger.title
        }));
        this.commonStorage.localSet('passenger_personal_contact', personal_contact);
        this.commonStorage.localSet('passenger_personal_data', personal_data);
        // this.travelDate = resultObject.depart
        // this.travelDate = this.dateService.getToday_got(date);
        const customDateObj = new Date(resultObject.depart);
        customDateObj.setHours(0, 0, 0, 0);
        console.log("customDateObj", customDateObj);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.todayDate = today;
        console.log("today", today);
        if (customDateObj > today) {
          console.log('Future Date');
          this.travelDate = resultObject.depart;
        } else if (customDateObj < today) {
          console.log('Past Date');
          this.travelDate = this.convertDateFormat(this.todayDate);
          this.util.showToast("Your last date service already left, you can book today service");
          console.log("originalDate convert date", this.travelDate);
        } else {
          this.travelDate = resultObject.depart;
          console.log("today");
        }
        console.log("travelDate", this.travelDate);
        setTimeout(() => {
          this.getapicall();
        }, 500);
      }
    }, err => {
      this.loaderService.hideLoadingDefault();
      this.util.showToast(err);
      this.navCtrl.navigateForward('tabs/home');
    });
  }
  getapicall() {
    // let travelDateQuery = this.commonService.apiFormatDate(this.travelDate);
    let path = this.origin.id + '/' + this.destination.id + '/' + this.travelDate + '.json?show_only_available_services=false&show_injourney_services=true';
    this.apiFactory.getAvaiableRoutes(path).subscribe(routes => {
      // this.loaderService.hideLoadingDefault();
      console.log(routes, "this.reservation_id", this.reservation_id);
      const desiredObject = routes.find(item => item.reservation_id == this.reservation_id);
      console.log("desiredObject", desiredObject);
      if (desiredObject) {
        setTimeout(() => {
          this.gotoSeatLayout(desiredObject);
        }, 1000);
      } else {
        this.navCtrl.navigateForward('tabs/home');
        this.util.showToast("Your service is not found");
      }
    }, err => {
      this.loaderService.hideLoadingDefault();
    });
  }
  gotoSeatLayout(route) {
    if (!this.util.checkConnection()) {
      return false;
    }
    if (route.description != null && route.description != '' && route.is_show_description == true) {
      console.log("route.description =>" + route.description);
      this.commonStorage.localSet('SERVICE_DESCRIPTION', route.description);
    } else {
      console.log("route.description (NN)=>" + route.description);
      this.commonStorage.localSet('SERVICE_DESCRIPTION', "");
    }
    if (route.bus_amenities) {
      this.globalData.AMENITIES = route.bus_amenities;
      this.commonStorage.localSet('AMENITIES', route.bus_amenities);
    }
    if (route.rest_stop_details) {
      this.globalData.REST_STOPS = route.rest_stop_details;
      this.commonStorage.localSet('REST_STOPS', route.rest_stop_details);
    }
    if (this.isreturnTrip) {
      this.globalData.SELECTED_ROUTE_RETURN = route;
      this.commonStorage.localSet("SELECTED_ROUTE_RETURN", route);
      this.commonStorage.localSet('RES_ID_RET', route.reservation_id);
      this.commonStorage.localSet('ORIGIN_ID_RET', route.origin_id);
      this.commonStorage.localSet('DESTINATION_ID_RET', route.destination_id);
      this.commonStorage.localSet('BOARDING_DETAILS_RET', route.boarding_point_details);
      this.commonStorage.localSet('DROPPING_DETAILS_RET', route.drop_off_details);
      this.commonStorage.localSet('DEP_TIME_RET', route.dep_time);
      this.commonStorage.localSet('travelDateReturn', this.globalData.DEPARTURE_DATE_RETURN);
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.commonService.gTrack("available routes");
      this.commonService.gTrack('serviceSelection', 'service selected in trips search result');
      this.loaderService.hideLoadingDefault();
      this.navCtrl.navigateForward('seat-layout', navigationExtras);
    } else {
      console.log('r-->seat layout', route);
      this.globalData.SELECTED_ROUTE = route;
      this.commonStorage.localSet("SELECTED_ROUTE", route);
      this.commonStorage.localSet('RES_ID', route.reservation_id);
      this.commonStorage.localSet('ORIGIN_ID', route.origin_id);
      this.commonStorage.localSet('DESTINATION_ID', route.destination_id);
      this.commonStorage.localSet('BOARDING_DETAILS', route.boarding_point_details);
      this.commonStorage.localSet('DROPPING_DETAILS', route.drop_off_details);
      this.commonStorage.localSet('DEP_TIME', route.dep_time);
      console.log("this.globalData.DEPARTURE_DATE", this.globalData.DEPARTURE_DATE);
      this.commonStorage.localSet('travelDate', this.globalData.DEPARTURE_DATE);
      this.getDeals(route);
      this.commonService.gTrack('serviceSelection', 'service selected in trips search result');
      this.loaderService.hideLoadingDefault();
      this.navCtrl.navigateForward('seat-layout');
    }
    localStorage.setItem('isBima', route.is_bima ? route.is_bima : false);
    localStorage.setItem('isBPDP', route.is_apply_bp_dp_fare ? route.is_apply_bp_dp_fare : false);
  }
  getDeals(route) {
    if (!this.util.checkConnection()) {
      return false;
    }
    var resId = route.reservation_id;
    this.apiFactory.getDealsForReservation(resId).subscribe(res => {
      console.log("deals for resId ", res);
      //  if(res[2] && res[2][resId]){
      //   this.commonStorage.setItem('deals_for_res',res[2][resId]);
      //  }
      //   else if(res[1][resId]){
      //     this.commonStorage.setItem('deals_for_res',res[1][resId]);
      //   }  
      if (res[resId]) {
        this.commonStorage.localSet('deals_for_res', res[resId]);
      }
    }, err => {});
  }
  convertDateFormat(dateString) {
    // Create a new Date object from the dateString
    const date = new Date(dateString);
    // Extract the year, month, and day components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    // Concatenate the components to form the desired date string
    return `${year}-${month}-${day}`;
  }
}
_AutofillFormPage = AutofillFormPage;
_AutofillFormPage.ɵfac = function AutofillFormPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_0__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_6__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController));
};
_AutofillFormPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _AutofillFormPage,
  selectors: [["app-autofill-form"]],
  standalone: false,
  decls: 0,
  vars: 0,
  template: function AutofillFormPage_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 72855:
/*!*******************************************************!*\
  !*** ./src/app/autofill-form/autofill-form.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillFormPageModule: () => (/* binding */ AutofillFormPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _autofill_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofill-form-routing.module */ 25294);
/* harmony import */ var _autofill_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autofill-form.page */ 54864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _AutofillFormPageModule;






class AutofillFormPageModule {}
_AutofillFormPageModule = AutofillFormPageModule;
_AutofillFormPageModule.ɵfac = function AutofillFormPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillFormPageModule)();
};
_AutofillFormPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AutofillFormPageModule
});
_AutofillFormPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _autofill_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AutofillFormPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AutofillFormPageModule, {
    declarations: [_autofill_form_page__WEBPACK_IMPORTED_MODULE_1__.AutofillFormPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _autofill_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AutofillFormPageRoutingModule]
  });
})();

/***/ })

}]);