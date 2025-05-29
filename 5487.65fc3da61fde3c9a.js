"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5487],{

/***/ 7768:
/*!*********************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPage: () => (/* binding */ PhoneConfirmBookingPage)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _app_services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/appdata */ 40172);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/plugin.service */ 65765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 89417);
var _PhoneConfirmBookingPage;


















function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_row_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 45)(2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 48)(7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](passenger_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", passenger_r3.seat_number, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_106_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.gotoMaps(ctx_r4.ticketDetail.boarding_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_121_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.gotoMaps(ctx_r4.ticketDetail.drop_off_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 8)(2, "ion-card", 9)(3, "ion-grid")(4, "ion-row")(5, "ion-col", 10)(6, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-col", 13)(12, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-col", 10)(16, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-col", 16)(19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "path", 21)(24, "path", 22)(25, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-col", 10)(28, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ion-col", 10)(31, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ion-col", 10)(34, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ion-col", 13)(37, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "ion-col", 10)(40, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "ion-col", 10)(45, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 28)(48, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "ion-grid")(51, "ion-row", 31)(52, "ion-col", 32)(53, "ion-row")(54, "ion-col", 33)(55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "path", 36)(58, "path", 37)(59, "path", 38)(60, "path", 39)(61, "path", 40)(62, "path", 41)(63, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "ion-col", 43)(65, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "ion-col", 44)(70, "ion-row")(71, "ion-col", 45)(72, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "ion-col", 48)(77, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](81, PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_row_81_Template, 11, 2, "ion-row", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 28)(83, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](84, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "ion-grid")(86, "ion-row")(87, "ion-col", 52)(88, "ion-row")(89, "ion-col", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "svg", 54)(91, "g", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](92, "path", 56)(93, "path", 57)(94, "path", 58)(95, "path", 59)(96, "path", 60)(97, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "defs")(99, "clipPath", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](100, "rect", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "ion-col", 43)(102, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_106_Template, 4, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "ion-row")(108, "ion-col", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "svg", 54)(110, "g", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](111, "path", 68)(112, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "defs")(114, "clipPath", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](115, "rect", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "ion-col", 43)(117, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](121, PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_121_Template, 4, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "div", 28)(123, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](124, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "ion-grid")(126, "ion-row", 31)(127, "ion-col", 8)(128, "h2", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "ion-radio-group", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template_ion_radio_group_ngModelChange_130_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.bookType, $event) || (ctx_r4.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template_ion_radio_group_ionChange_130_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.bookTypeChanged(ctx_r4.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "ion-item", 73)(132, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](133, " Book Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](134, "ion-radio", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "ion-item", 73)(136, "ion-label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, " Chartered Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template_ion_icon_click_138_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.showWalletDets = !ctx_r4.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](140, "ion-radio", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 17, ctx_r4.ticketDetail.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 19, ctx_r4.ticketDetail.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.ticketDetail.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.ticketDetail.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r4.ticketDetail.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.ticketDetail.duration.split(":")[0] + "h " + ctx_r4.ticketDetail.duration.split(":")[1] + "m", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.ticketDetail.drop_off_details.arr_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.ticketDetail.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.ticketDetail.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.getFormatedDate(ctx_r4.ticketDetail.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.ticketDetail.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.ticketDetail.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.ticketDetail.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.ticketDetail.boarding_details.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.ticketDetail.drop_off_details ? ctx_r4.ticketDetail.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.ticketDetail.drop_off_details.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.bookType);
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 86)(1, "ion-row")(2, "ion-col", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Promotional : ", ctx_r4.promobalance, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "ion-row")(3, "ion-col", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_16_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.showWalletDets = !ctx_r4.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, PhoneConfirmBookingPage_ng_container_0_div_16_div_7_Template, 9, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 86)(9, "ion-row")(10, "ion-col", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-col", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Non-promotional : ", ctx_r4.nonpromobalance, "");
  }
}
function PhoneConfirmBookingPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar")(3, "ion-buttons", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-content")(8, "ion-toolbar", 3)(9, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template, 141, 21, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_Template_ion_col_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, PhoneConfirmBookingPage_ng_container_0_div_16_Template, 17, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.ticketDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.showWalletDets);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card", 97)(1, "div")(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Fare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 99)(5, "ion-row")(6, "ion-col", 100)(7, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 100)(10, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 100)(14, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-col", 100)(17, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.RefundableCharge());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.getTotalPayable());
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-item", 105)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-checkbox", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_div_57_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.showhide, $event) || (ctx_r4.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r4.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.showhide);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 107)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-radio", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](payType_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", payType_r11 ? payType_r11.id : "");
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_ion_item_1_Template, 4, 2, "ion-item", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", payType_r11.name && payType_r11.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-list", 105)(4, "ion-radio-group", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.paymentType, $event) || (ctx_r4.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.calculatePgCharges(ctx_r4.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-col", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.bookTypeChanged(ctx_r4.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-col", 87)(2, "ion-col", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.walletNoteModal = !ctx_r4.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 117)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template, 6, 0, "ion-row", 0)(7, PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template, 5, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81)(1, "div", 117)(2, "ion-row")(3, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_77_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81)(1, "div", 117)(2, "ion-row")(3, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_78_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r16);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.paymentFailed = !ctx_r4.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 92)(3, "ion-buttons", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-content", 95)(8, "div", 96)(9, "ion-card", 97)(10, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 99)(13, "ion-row")(14, "ion-col", 100)(15, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-col", 100)(18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 100)(22, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-col", 100)(25, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 100)(29, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-col", 100)(32, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 100)(36, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-col", 100)(39, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 100)(43, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "ion-col", 100)(46, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "ion-row")(49, "ion-col", 100)(50, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ion-col", 100)(53, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, PhoneConfirmBookingPage_ng_container_1_ion_card_55_Template, 19, 2, "ion-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "ion-card", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, PhoneConfirmBookingPage_ng_container_1_div_57_Template, 5, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "ion-card", 97)(59, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "ion-list", 105)(62, "ion-radio-group", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_Template_ion_radio_group_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.bookType, $event) || (ctx_r4.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_1_Template_ion_radio_group_ionChange_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.bookTypeChanged(ctx_r4.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "ion-item", 107)(64, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "Pay Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "ion-radio", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "ion-item", 107)(68, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "Pay From Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "ion-radio", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template, 6, 2, "ion-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "ion-button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_Template_ion_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](75, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, PhoneConfirmBookingPage_ng_container_1_div_76_Template, 8, 3, "div", 112)(77, PhoneConfirmBookingPage_ng_container_1_div_77_Template, 11, 0, "div", 7)(78, PhoneConfirmBookingPage_ng_container_1_div_78_Template, 11, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.changeDateFormat(ctx_r4.bookingDetails.travelDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.metaData.showCancelProtect && ctx_r4.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.bookOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.paymentFailed);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card", 97)(1, "div")(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Fare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 99)(5, "ion-row")(6, "ion-col", 100)(7, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 100)(10, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 100)(14, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-col", 100)(17, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.RefundableCharge());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.getTotalPayable());
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-item", 105)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-checkbox", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_div_57_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.showhide, $event) || (ctx_r4.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r4.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.showhide);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-item", 107)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-radio", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](payType_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", payType_r20 ? payType_r20.id : "");
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_ion_item_1_Template, 4, 2, "ion-item", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", payType_r20.name && payType_r20.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-card", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-list", 105)(4, "ion-radio-group", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.paymentType, $event) || (ctx_r4.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.calculatePgCharges(ctx_r4.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-col", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.bookTypeChanged(ctx_r4.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-col", 87)(2, "ion-col", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.walletNoteModal = !ctx_r4.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 117)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template, 6, 0, "ion-row", 0)(7, PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template, 5, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r4.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81)(1, "div", 117)(2, "ion-row")(3, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_76_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81)(1, "div", 117)(2, "ion-row")(3, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_77_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.paymentFailed = !ctx_r4.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 92)(3, "ion-buttons", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-content", 126)(8, "div", 96)(9, "ion-card", 97)(10, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 99)(13, "ion-row")(14, "ion-col", 100)(15, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-col", 100)(18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 100)(22, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-col", 100)(25, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 100)(29, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-col", 100)(32, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 100)(36, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-col", 100)(39, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 100)(43, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "ion-col", 100)(46, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "ion-row")(49, "ion-col", 100)(50, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ion-col", 100)(53, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, PhoneConfirmBookingPage_ng_container_2_ion_card_55_Template, 19, 2, "ion-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "ion-card", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, PhoneConfirmBookingPage_ng_container_2_div_57_Template, 5, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "ion-card", 97)(59, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "ion-list", 105)(62, "ion-radio-group", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_Template_ion_radio_group_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r4.bookType, $event) || (ctx_r4.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_2_Template_ion_radio_group_ionChange_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.bookTypeChanged(ctx_r4.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "ion-item", 107)(64, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "Pay Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "ion-radio", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "ion-item", 107)(68, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "Pay From Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "ion-radio", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template, 6, 2, "ion-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "ion-button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_Template_ion_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](74, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](75, PhoneConfirmBookingPage_ng_container_2_div_75_Template, 8, 3, "div", 112)(76, PhoneConfirmBookingPage_ng_container_2_div_76_Template, 11, 0, "div", 7)(77, PhoneConfirmBookingPage_ng_container_2_div_77_Template, 11, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.changeDateFormat(ctx_r4.bookingDetails.travelDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.bookingDetails.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.metaData.showCancelProtect && ctx_r4.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.bookOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.paymentFailed);
  }
}
class PhoneConfirmBookingPage {
  constructor(commonStorage, apiFactory, dateService, iab, util, commonService, loader, modalController, navCtrl, appData, locationProvider, route, router, ex, platform, globalData) {
    var _localStorage$getItem, _localStorage$getItem2;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.iab = iab;
    this.util = util;
    this.commonService = commonService;
    this.loader = loader;
    this.modalController = modalController;
    this.navCtrl = navCtrl;
    this.appData = appData;
    this.locationProvider = locationProvider;
    this.route = route;
    this.router = router;
    this.ex = ex;
    this.platform = platform;
    this.globalData = globalData;
    this.bookOnline = true;
    this.payFromWallet = false;
    this.payMentGateWayTypes = [];
    this.booking = [];
    this.pgType = {};
    this.pgChargesAmount = 0;
    this.walletMessage = "";
    this.isShowWalletBtn = false;
    this.walletNoteModal = false;
    this.showWalletDets = false;
    this.bookType = '1';
    this.cancel_protect_percentage = 10;
    this.viewTicket = false;
    this.paymentFailed = false;
    this.is_round_trip = false;
    this.roundTrip = false;
    this.ticketDetail = [];
    this.appData.newTheme = this.util.getNewTheme();
    this.showhide = true;
    const ticketDetails = JSON.parse((_localStorage$getItem = localStorage.getItem('ticket-details')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '{}');
    this.totalAmount = (ticketDetails === null || ticketDetails === void 0 ? void 0 : ticketDetails.ticket_fare) || 0;
    this.bookingDetails = JSON.parse((_localStorage$getItem2 = localStorage.getItem('bookingDetails')) !== null && _localStorage$getItem2 !== void 0 ? _localStorage$getItem2 : '{}');
    this.travelDate = this.dateService.getDateObjFromDateStr(this.bookingDetails.travelDate);
    this.pnrNumber = this.bookingDetails.pnrNumber ? this.bookingDetails.pnrNumber : this.bookingDetails.ticket_number;
    this.metaData = this.commonStorage.getItem("metaData");
    this.isCancelProtect = this.metaData.showCancelProtect;
    this.payMentGateWayTypes = this.metaData.payMentGateWayTypes;
    for (var i = 0; i < this.metaData.payMentGateWayTypes.length; i++) {
      if (this.metaData.payMentGateWayTypes[i].checked == true) {
        this.paymentType = this.metaData.payMentGateWayTypes[i].id;
      }
    }
  }
  ngOnInit() {
    var _localStorage$getItem3;
    this.ticketDetail = JSON.parse((_localStorage$getItem3 = localStorage.getItem("ticket-details")) !== null && _localStorage$getItem3 !== void 0 ? _localStorage$getItem3 : '{}');
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.getWalletDetails();
    this.caluclatePercen = (this.cancel_protect_percentage / 100 * this.totalAmount).toFixed(2);
    this.totalPayble = (parseFloat(this.caluclatePercen) + this.totalAmount).toFixed(2);
  }
  getWalletDetails() {
    this.apiFactory.getWalletBalance().subscribe(res => {
      if (res.success) {
        this.nonpromobalance = res.body.balance;
        this.promobalance = res.body.promotional_balance;
      }
    }, err => {});
  }
  bookTypeChanged(value) {
    if (value == 1) {
      this.bookOnline = true;
      this.payFromWallet = false;
    } else if (value == 3) {
      this.bookOnline = false;
      this.payFromWallet = true;
    } else {}
  }
  getFormatedDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, "DD/MM/YYYY").format("DD MMM YYYY");
  }
  changeDateFormat(date) {
    if (date && date != undefined && date != null && date != '') {
      var r = this.dateService.getDateObjFromDateStr(date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
      if (r.dayName != undefined && r.dayName != null && r.dayName != '') {
        return r.dayName + ", " + r.day + " " + r.monthName + " " + r.year;
      } else {
        var d = new Date(date.substr(0, 10).toString().trim());
        if (d.toString() != "Invalid Date" && d != null) {
          var m = this.util.getDayName(d.getDay() + 1) + " " + d.getDate() + " " + this.util.getMonthName(d.getMonth() + 1) + " " + d.getFullYear();
          return m;
        } else {
          return date;
        }
      }
    } else {
      return date;
    }
  }
  calculatePgCharges(id) {
    let pgCharges = this.metaData.pgCharges;
    this.pgType = pgCharges.find(it => {
      if (it.pay_gay_type_id == id) {
        return it;
      }
    });
    if (this.pgType && this.pgType.transaction_type) {
      if (this.pgType.transaction_type.toUpperCase() == 'NONE') {
        this.pgChargesAmount = 0;
      } else if (this.pgType.transaction_type.toUpperCase() == 'PERCENTAGE') {
        this.pgChargesAmount = this.pgType.transaction_charges * this.netBookingAmount / 100;
      } else if (this.pgType.transaction_type.toUpperCase() == 'FIXED') {
        this.pgChargesAmount = this.pgType.transaction_charges;
      }
    }
  }
  confirmBooking() {
    console.log('con_bk', this.reservationData);
    let platformNumber;
    if (this.appData.isWEBAPP) {
      platformNumber = 6;
    } else {
      if (this.appData.isIOS) {
        platformNumber = 9;
      } else {
        platformNumber = 10;
      }
    }
    try {
      let pathForBooking = "pnr_number=" + this.pnrNumber;
      if (this.metaData.showCancelProtect && this.showhide) {
        pathForBooking += "&is_cancel_protect=" + this.showhide;
      }
      if (this.bookType == '1') {
        let payType = this.payMentGateWayTypes.find(it => {
          return this.paymentType == it.id;
        });
        pathForBooking += "&pay_gay_type=" + payType.id;
        pathForBooking += "&native_app_type=" + platformNumber;
        pathForBooking += "&is_mobile_app=true";
        this.bookTicket(pathForBooking);
      } else {
        pathForBooking += "&is_wallet_booking=true";
        pathForBooking += "&native_app_type=" + platformNumber;
        this.bookWallet(pathForBooking);
      }
    } catch (e) {}
  }
  openInNewTab(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  }
  bookTicket(pathForBooking) {
    if (!this.util.checkConnection()) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.phoneEBook(pathForBooking).subscribe(result => {
      setTimeout(() => {
        this.loader.hideLoadingDefault();
      }, 100);
      if (result.code == 401) {
        this.util.showToast(result.message);
      }
      if ('is_razorpay_payment' in result) {
        if (result.is_razorpay_payment == true) {
          if (result.amount != null && result.merchant_id != null && result.order_id != null && result.secret_key != null) {
            this.payWithRazorpay(result);
          }
        }
      }
      if (this.paymentType == "55") {
        let self = this;
        if (this.appData.isWEBAPP) {
          this.openInNewTab(result.payment_link);
        } else if (this.appData.isIOS && !this.appData.isWEBAPP) {
          const browser = this.iab.create(result.payment_link + "", '_blank', this.options);
          browser.on('loadstart').subscribe(event => {
            if (event.url.indexOf('ticket-confirm') > -1) {
              browser.close();
              localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
              let navigationExtras = {
                queryParams: {
                  new_booking: true
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
              // }
            } else if (event.url.indexOf('ticket-cancel') > -1) {
              self.commonStorage.localRemove('bookedTicketDetails');
              browser.close();
              localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
              let navigationExtras = {
                queryParams: {
                  new_booking: true
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
            }
          });
        }
      }
      if (this.paymentType == "57") {
        setTimeout(() => {
          const accessKey = result.access_key;
          const options = {
            access_key: accessKey,
            onResponse: response => {
              window.location.href = result.redirect_url + '?pnr_number=' + response['txnid'] + "&amount=" + response['amount'] + "&email=" + response['email'] + "&phone=" + response['phone'];
            },
            theme: '#123456'
          };
          const easebuzzCheckout = new EasebuzzCheckout(result.key, 'prod');
          easebuzzCheckout.initiatePayment(options);
        }, 1000);
      }
      if (this.paymentType == '45') {
        var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
        let marchantKey = atob(result.merchant_id);
        marchantKey = marchantKey.replace(halfKey, '');
        if (this.appData.isWEBAPP) {
          var options = {
            "features": {
              "enableExpressPay": true,
              "enableInstrumentDeRegistration": true,
              "enableMerTxnDetails": true,
              "enableNewWindowFlow": true
            },
            "consumerData": {
              "deviceId": "WEBSH2",
              "token": result.token,
              "paymentMode": "all",
              "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
              "merchantId": marchantKey,
              "currency": "INR",
              "consumerId": result.consumer_id,
              "consumerMobileNo": result.consumer_mobile_no,
              "consumerEmailId": result.consumer_email_id,
              "txnId": result.txn_id,
              "items": [{
                "itemId": "FIRST",
                "amount": result.amount,
                "comAmt": "0"
              }],
              "customStyle": {
                "PRIMARY_COLOR_CODE": "#45beaa",
                "SECONDARY_COLOR_CODE": "#FFFFFF",
                "BUTTON_COLOR_CODE_1": "#2d8c8c",
                "BUTTON_COLOR_CODE_2": "#FFFFFF"
              }
            }
          };
          var paymentCallback = response => {
            let techSuccessMsg = response.msg;
            let splitPnr = techSuccessMsg.split('|')[3];
            let msgCase = techSuccessMsg.split('|')[0];
            if (msgCase == '0300') {
              var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
              let message = btoa(techSuccessMsg);
              message = message.replace(halfKey, '');
              let bookingDetails = {
                "pnr_number": splitPnr
              };
              localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
              let navigationExtras = {
                queryParams: {
                  new_booking: true,
                  hideLocateTrackBus: false
                }
              };
              this.navigationExtras = navigationExtras;
              this.paymentFailed = false;
              this.viewTicket = true;
              this.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
            } else if (msgCase != '0300' || !msgCase) {
              this.paymentFailed = true;
              this.viewTicket = false;
            }
          };
          var errorCallback = error => {
            this.paymentFailed = true;
            this.viewTicket = false;
          };
          WLCheckout.open(options, paymentCallback, errorCallback);
        } else if (this.appData.isIOS) {
          var options = {
            "features": {
              "enableExpressPay": true,
              "enableInstrumentDeRegistration": true,
              "enableMerTxnDetails": true,
              "enableNewWindowFlow": true
            },
            "consumerData": {
              "deviceId": "iOSSH2",
              "token": result.token,
              "paymentMode": "all",
              "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
              "merchantId": marchantKey,
              "currency": "INR",
              "consumerId": result.consumer_id,
              "consumerMobileNo": result.consumer_mobile_no,
              "consumerEmailId": result.consumer_email_id,
              "txnId": result.txn_id,
              "items": [{
                "itemId": "FIRST",
                "amount": result.amount,
                "comAmt": "0"
              }],
              "customStyle": {
                "PRIMARY_COLOR_CODE": "#45beaa",
                "SECONDARY_COLOR_CODE": "#FFFFFF",
                "BUTTON_COLOR_CODE_1": "#2d8c8c",
                "BUTTON_COLOR_CODE_2": "#FFFFFF"
              }
            }
          };
          var paymentCallback = response => {
            let techSuccessMsg = response.msg;
            let splitPnr = techSuccessMsg.split('|')[3];
            let msgCase = techSuccessMsg.split('|')[0];
            if (msgCase == '0300') {
              var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
              let message = btoa(techSuccessMsg);
              message = message.replace(halfKey, '');
              let bookingDetails = {
                "pnr_number": splitPnr
              };
              localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
              let navigationExtras = {
                queryParams: {
                  new_booking: true,
                  hideLocateTrackBus: false
                }
              };
              this.navigationExtras = navigationExtras;
              this.paymentFailed = false;
              this.viewTicket = true;
              this.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
            } else if (msgCase != '0300' || !msgCase) {
              // this.commonService.gTrack('addwallet','adding money to wallet failed');
              this.util.showToast('Payment failed', 'bottom');
            }
          };
          var errorCallback = error => {
            // this.commonService.gTrack('addwallet','adding money to wallet failed');
            this.util.showToast('Payment failed', 'bottom');
          };
          WLCheckout.open(options, paymentCallback, errorCallback);
        }
      } else if (result.pay_gay_url && !result.code) {
        let form = document.getElementById('payMentGateWayForm');
        this.commonStorage.localSet('bookedTicketDetails', result);
        let formHtml = '';
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            let value = result[key];
            if (key == "passenger_contact_details" || key == "passengers_details") {
              value = encodeURIComponent(value);
            }
            let value2 = '';
            if (value) {
              value2 = value.toString().replace(/\n/g, '');
            }
            formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
          }
        }
        if (!(this.paymentType == "31")) {
          form.innerHTML = formHtml;
        }
        let payScript = "var form = document.getElementById('ts-app-payment-form-redirect'); ";
        let dirtyEl = '<input type="hidden" id="page_is_dirty" value="no">';
        payScript += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
        payScript += "form.action = `" + result.pay_gay_url + "`;";
        payScript += "form.method = 'POST';";
        payScript += `var e = document.getElementById("page_is_dirty");`;
        payScript += `if (e.value == "no") {e.value = "yes";form.submit();}`;
        payScript += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
        let payScript2 = "";
        payScript2 += "var form = document.getElementById('ts-app-payment-form-redirect');";
        payScript2 += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
        payScript += "form.action = `" + result.pay_gay_url + "`;";
        payScript += "form.method = 'POST';";
        payScript2 += `var e = document.getElementById("page_is_dirty");`;
        payScript2 += `if (e.value == "yes") {e.value = "yes";form.submit();}`;
        payScript2 += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
        if (result.html_body_contents && !result.pay_gay_url) {
          let parser = new DOMParser();
          let doc = parser.parseFromString(result.html_body_contents, "text/xml");
          let htmlStr = "";
          htmlStr += '<script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>';
          payScript = "document.write(`" + htmlStr + result.html_body_contents + "<body></body>`);";
          payScript2 = payScript;
        }
        if ((this.platform.is('cordova') || this.platform.is('android') || this.platform.is('ios')) && !this.appData.isWEBAPP) {
          let browser;
          let self = this;
          let track = 0;
          let prevUrl = '';
          // browser = this.iab.create(this.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', this.options);
          // browser.on('loadstart').subscribe((event  : any) => {
          //     if (event.url.indexOf("payment_gateway_redirect_page") > -1 && prevUrl.indexOf("payment_gateway_redirect_page") > -1) {
          //         track = 0;
          //     }
          //     if ((event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1) && event.url.indexOf('payment_gateway_redirect_page') <= -1) {
          //       let pnrNumber = self.commonStorage.localGet('bookedTicketDetails').pnr_number;
          //       browser.close();
          //       localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           new_booking: false,
          //         }
          //       };
          //       this.navCtrl.navigateRoot('booking-details', navigationExtras)
          //     }
          //     else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("status=1") > -1 || event.url.indexOf("customerCancellation") > -1 || event.url.indexOf("www.ticketsimply.com") > -1) {
          //       self.commonStorage.localRemove('bookedTicketDetails');
          //       browser.close();
          //       localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           new_booking: false,
          //         }
          //       };
          //       this.navCtrl.navigateRoot('booking-details', navigationExtras)
          //     } else if (event.url.indexOf("local-cancel") > -1) {
          //       setTimeout(() => {
          //         browser.close();
          //       }, 500);
          //     }
          // });
          // browser.on('loadstop').subscribe((event  : any) => {
          //     if (event.url.indexOf("payment_gateway_redirect_page") > -1) {
          //         if (track <= 0) {
          //             browser.executeScript({
          //                 code: payScript
          //             });
          //         } else {
          //             browser.executeScript({
          //                 code: payScript2
          //             });
          //         }
          //     }
          //     track++;
          // });
          // browser.on('exit').subscribe((event : any) => {
          //     browser.executeScript({
          //         code: payScript
          //     });
          // });
          // browser.on('backPressed').subscribe ((event : any) =>{
          //   navigator.notification.confirm('Are you sure you want to go Back?', function (index : any) {
          //     if (index == 1) {
          //       setTimeout(() => {
          //         browser.close();
          //       }, 500);
          //     }
          //   }, '', ['YES', 'NO']);
          // });
        } else {
          form.action = result.pay_gay_url;
          form.method = "POST";
          form.submit();
        }
      } else if (result.code == 443) {
        this.walletNoteModal = true;
        var msg = result.message;
        if (msg.indexOf("sufficient") !== -1) {
          this.isShowWalletBtn = true;
        } else {
          this.isShowWalletBtn = false;
        }
        this.walletMessage = result.message;
      } else if (result.code) {
        this.util.showAlert("Error", result.message);
      } else {
        if (!result.code && result.ticket_number) {
          localStorage.setItem('bookingDetails', JSON.stringify(result));
          let navigationExtras = {
            queryParams: {
              new_booking: true
            }
          };
          this.navCtrl.navigateRoot('booking-details', navigationExtras);
        }
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  clearReturnJourney() {
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.commonStorage.setItem('travelDateReturn', {});
    // this.modalController.dismiss({});
  }
  bookWallet(pathForBooking) {
    if (!this.util.checkConnection()) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.phoneEBook(pathForBooking).subscribe(result => {
      this.loader.hideLoadingDefault();
      if (result.passenger_details) {
        this.util.showAlert('', 'TICKET CONFIRMED SUCCESSFULLY');
        localStorage.setItem('bookingDetails', JSON.stringify(result));
        let navigationExtras = {
          queryParams: {
            new_booking: true
          }
        };
        this.navCtrl.navigateRoot('booking-details', navigationExtras);
      } else if (result.code == 443) {
        this.walletNoteModal = true;
        var msg = result.message;
        if (msg.indexOf("sufficient") !== -1) {
          // yes
          this.isShowWalletBtn = true;
        } else {
          this.isShowWalletBtn = false;
        }
        this.walletMessage = result.message;
      } else {
        this.util.showAlert('', result.message);
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  cancelbtn() {
    this.walletNoteModal = false;
  }
  RefundableCharge() {
    var m = parseInt(this.commonStorage.getItem('ticket-details-item').ticket_fare) * this.metaData.cancelProtectPercentage / 100;
    return m;
  }
  getTotalPayable() {
    var m = parseInt(this.commonStorage.getItem('ticket-details-item').ticket_fare) + this.RefundableCharge();
    return m;
  }
  emcription(serverDate, subdomain) {
    const [first, second] = serverDate.split('T');
    serverDate = first.replace('-', '');
    serverDate = serverDate.replace('-', '');
    var res = subdomain.concat(serverDate);
    var halfEncryptData = btoa(res);
    return halfEncryptData;
  }
  payWithRazorpay(ticketData) {
    var halfKey = this.emcription(this.metaData.serverDate, this.metaData.subdomain);
    let marchantKey = atob(ticketData.merchant_id);
    marchantKey = marchantKey.replace(halfKey, '');
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      order_id: ticketData.order_id,
      currency: 'INR',
      key: marchantKey,
      amount: ticketData.amount,
      prefill: {
        email: ticketData.email_id,
        contact: ticketData.phone_no,
        name: ticketData.passenger_name
      },
      theme: {
        color: '#3399cc'
      }
    };
    var successCallback = success => {
      this.util.showAlert('', 'TICKET CONFIRMED SUCCESSFULLY');
      localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
      let navigationExtras = {
        queryParams: {
          new_booking: true
        }
      };
      this.apiFactory.paymentSuccessCall(ticketData.pnr_number, success.razorpay_payment_id).subscribe(result => {
        this.navCtrl.navigateRoot('booking-details', navigationExtras);
      }, err => {
        this.navCtrl.navigateRoot('booking-details', navigationExtras);
      });
      var orderId = success.razorpay_order_id;
      var signature = success.razorpay_signature;
    };
    var cancelCallback = error => {
      localStorage.setItem('bookingDetails', JSON.stringify(this.commonStorage.localGet('bookedTicketDetails')));
      let navigationExtras = {
        queryParams: {
          new_booking: false
        }
      };
      this.navCtrl.navigateRoot('booking-details', navigationExtras);
      this.apiFactory.paymentFailureCall(ticketData.pnr_number, ticketData.order_id).subscribe(result => {}, err => {});
    };
    RazorpayCheckout.on('payment.success', successCallback);
    RazorpayCheckout.on('payment.cancel', cancelCallback);
    RazorpayCheckout.open(options);
  }
  viewTicketPage() {
    this.viewTicket = false;
    this.navCtrl.navigateRoot('booking-details', this.navigationExtras);
  }
  gotoMaps(mapdata) {
    this.loader.showLoadingDefault();
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 3600
    }).then(resp => {
      this.loader.hideLoadingDefault();
      let lat = resp.coords.latitude;
      let long = resp.coords.longitude;
      let latB = mapdata.latitude;
      let longB = mapdata.longitude;
      var url = 'https://www.google.com/maps/dir/?api=1&origin=' + lat + ',' + long + '&destination=' + latB + ',' + longB;
      window.open(url, '_system');
    }).catch(error => {
      this.loader.hideLoadingDefault();
    });
  }
}
_PhoneConfirmBookingPage = PhoneConfirmBookingPage;
_PhoneConfirmBookingPage.ɵfac = function PhoneConfirmBookingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_8__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_plugin_service__WEBPACK_IMPORTED_MODULE_10__.PluginProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_11__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_12__.GlobalDataService));
};
_PhoneConfirmBookingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _PhoneConfirmBookingPage,
  selectors: [["app-phone-confirm-booking"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "translucent"], ["mode", "md", "slot", "start"], [1, ""], ["size", "12", 3, "click"], [1, "Continue-button", 2, "font-weight", "bold", "height", "50px"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], ["class", "whole center", 4, "ngIf"], ["size", "12"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom"], ["size", "4", 1, "ion-no-padding"], [1, "", 2, "margin", "0", "color", "#191966 !important", "font-weight", "bold"], [2, "margin-bottom", "0"], ["size", "4 ", 1, "ion-no-padding"], [1, "", 2, "margin", "0", "font-weight", "bold", "color", "#F2C21A !important"], [2, "color", "#A0A0A0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], [1, "location-line"], [1, "location-dot"], [1, "location-bus"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.54909 6.42781C6.67037 5.70013 6.42781 5.21501 5.82141 4.85117C5.33629 4.60862 4.7299 4.60861 4.24478 4.97245C3.75966 5.33629 3.5171 5.82141 3.63838 6.42781H3.5171C2.54687 6.42781 1.57663 6.42781 0.485118 6.42781C0.12128 6.42781 0 6.30653 0 5.94269C0 5.21501 0 4.36606 0 3.63838C0 3.5171 4.60837e-07 3.39582 0.12128 3.39582C0.242559 3.27454 0.242558 3.27454 0.242558 3.15326C0.242558 2.18303 0.363838 1.33407 0.363838 0.363838C0.363838 0.12128 0.485118 0 0.727677 0C1.57663 0 2.42559 0 3.27454 0C7.15548 0 10.9151 0 14.7961 0C16.9791 0 19.2834 0 21.4664 0C21.9516 0 22.4367 0.363838 22.558 0.848955V0.970235C22.558 2.42559 22.558 3.88094 22.558 5.45757C22.558 5.57885 22.4367 5.70013 22.3154 5.70013C21.8303 5.82141 21.2239 5.94269 20.7388 6.06397C20.1324 6.18525 19.4047 6.30653 18.7983 6.42781C18.5557 6.42781 18.1919 6.54909 17.8281 6.54909C17.8281 5.94269 17.7068 5.33629 17.1004 4.97245C16.8578 4.85117 16.494 4.7299 16.2514 4.7299C15.4025 4.85117 14.7961 5.57885 14.9174 6.42781C12.2492 6.42781 9.45979 6.42781 6.54909 6.42781ZM10.5513 0.848955C10.0662 0.848955 9.45979 0.848955 8.97467 0.848955C8.73211 0.848955 8.48956 0.970235 8.48956 1.33407C8.48956 1.69791 8.48956 2.06175 8.48956 2.54687C8.48956 2.9107 8.61084 3.03198 8.97467 3.03198C10.0662 3.03198 11.0364 3.03198 12.1279 3.03198C12.3705 3.03198 12.6131 2.9107 12.6131 2.54687C12.6131 2.18303 12.6131 1.69791 12.6131 1.33407C12.6131 1.09151 12.4918 0.848955 12.1279 0.848955C11.6428 0.848955 11.0364 0.848955 10.5513 0.848955ZM5.82141 0.848955C5.33629 0.848955 4.7299 0.848955 4.24478 0.848955C4.00222 0.848955 3.88094 0.970235 3.75966 1.21279C3.75966 1.57663 3.75966 2.06175 3.75966 2.42559C3.75966 2.66815 3.88094 2.78943 4.1235 2.78943C5.21501 2.78943 6.30653 2.78943 7.39804 2.78943C7.6406 2.78943 7.76188 2.66815 7.76188 2.42559C7.76188 2.06175 7.76188 1.57663 7.76188 1.21279C7.76188 0.848955 7.6406 0.727677 7.27676 0.727677C6.79164 0.848956 6.30653 0.848955 5.82141 0.848955ZM15.2812 0.848955C14.7961 0.848955 14.1897 0.848955 13.7046 0.848955C13.462 0.848955 13.3407 0.970235 13.3407 1.21279C13.3407 1.57663 13.3407 2.06175 13.3407 2.42559C13.3407 2.66815 13.462 2.78943 13.7046 2.78943C14.7961 2.78943 15.8876 2.78943 16.9791 2.78943C17.2217 2.78943 17.3429 2.66815 17.3429 2.42559C17.3429 2.06175 17.3429 1.57663 17.3429 1.21279C17.3429 0.848955 17.2217 0.727677 16.8578 0.727677C16.3727 0.848956 15.7663 0.848955 15.2812 0.848955ZM20.0111 2.91071C20.4962 2.91071 21.1026 2.91071 21.5877 2.91071C21.8303 2.91071 21.9516 2.78942 21.9516 2.54687C21.9516 2.30431 21.9516 2.06175 21.9516 1.69791C21.9516 1.33407 21.8303 1.09151 21.4664 0.970235C21.3452 0.848956 21.1026 0.848955 20.8601 0.848955C20.0111 0.848955 19.1621 0.848955 18.3132 0.848955C17.9493 0.848955 17.8281 0.970235 17.8281 1.33407C17.8281 1.69791 17.8281 2.06175 17.8281 2.42559C17.8281 2.78943 17.9493 2.91071 18.3132 2.91071C18.9196 2.91071 19.526 2.91071 20.0111 2.91071ZM1.33407 3.27454C1.33407 3.88094 1.33407 4.60862 1.33407 5.21501C1.33407 5.45757 1.45535 5.57885 1.69791 5.57885C1.94047 5.57885 2.18303 5.57885 2.42559 5.57885C2.66815 5.57885 2.91071 5.45757 2.91071 5.09373C2.91071 3.75966 2.91071 2.42559 2.91071 1.21279C2.91071 0.970235 2.78943 0.848956 2.54687 0.727677C2.30431 0.727677 2.06175 0.727677 1.94047 0.727677C1.57663 0.727677 1.45535 0.848955 1.45535 1.21279C1.33407 2.06175 1.33407 2.66815 1.33407 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.00195 6.06393C4.00195 5.45753 4.60835 4.97241 5.21475 4.97241C5.82114 4.97241 6.30626 5.45753 6.30626 6.18521C6.30626 6.7916 5.82114 7.27672 5.21475 7.27672C4.48707 7.27672 4.00195 6.7916 4.00195 6.06393ZM5.69986 6.18521C5.69986 5.94265 5.4573 5.57881 5.21475 5.57881C4.97219 5.57881 4.72963 5.82137 4.60835 6.06393C4.60835 6.30649 4.85091 6.67032 5.09347 6.67032C5.4573 6.67032 5.69986 6.42776 5.69986 6.18521Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4938 7.27672C15.8874 7.27672 15.281 6.7916 15.4023 6.06393C15.4023 5.45753 15.8874 4.97241 16.4938 4.97241C17.1002 4.97241 17.5854 5.45753 17.5854 6.18521C17.7066 6.7916 17.2215 7.27672 16.4938 7.27672ZM17.1002 6.06393C17.1002 5.82137 16.8577 5.57881 16.6151 5.57881C16.3726 5.57881 16.13 5.82137 16.13 6.18521C16.13 6.42776 16.3726 6.67032 16.7364 6.67032C16.8577 6.67032 17.1002 6.42777 17.1002 6.06393Z", "fill", "#191966"], [1, "location-dot-blue"], [1, "", 2, "margin", "0", "color", "#000 !important"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "-7px", "font-size", "12px"], [2, "margin", "0", "color", "#000 !important"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dash-line"], [1, "ion-padding"], ["size", "12", 1, "pnr-status"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "pnr-circle-status"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.46973 7.04369L3.66703 4.24098C-0.282238 8.50874 -0.282238 15.1333 3.66703 19.4648L6.46973 16.6621C4.04921 13.9231 4.04921 9.78269 6.46973 7.04369Z", "fill", "#FBAE17"], ["d", "M7.04294 17.2353L4.24023 20.038C8.50799 23.9873 15.1326 23.9873 19.464 20.038L16.6613 17.2353C13.9223 19.6559 9.78195 19.6559 7.04294 17.2353Z", "fill", "#FBAE17"], ["d", "M17.2344 16.6621L20.0371 19.4648C23.9863 15.197 23.9863 8.57244 20.0371 4.24098L17.2344 7.04369C19.6549 9.78269 19.6549 13.9231 17.2344 16.6621Z", "fill", "#BBBDBF"], ["d", "M16.6613 6.4704L19.464 3.6677C15.1963 -0.281567 8.57169 -0.281567 4.24023 3.6677L7.04294 6.4704C9.78195 4.04989 13.9223 4.04989 16.6613 6.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.33617 13.4135C9.39987 13.0313 9.27247 12.7765 8.95398 12.5854C8.69919 12.458 8.3807 12.458 8.12591 12.6491C7.87112 12.8402 7.74372 13.095 7.80742 13.4135H7.74372C7.23414 13.4135 6.72456 13.4135 6.15128 13.4135C5.96018 13.4135 5.89648 13.3498 5.89648 13.1587C5.89648 12.7765 5.89648 12.3306 5.89648 11.9484C5.89648 11.8847 5.89648 11.821 5.96018 11.821C6.02388 11.7573 6.02388 11.7573 6.02388 11.6936C6.02388 11.184 6.08758 10.7382 6.08758 10.2286C6.08758 10.1012 6.15128 10.0375 6.27867 10.0375C6.72456 10.0375 7.17044 10.0375 7.61633 10.0375C9.65466 10.0375 11.6293 10.0375 13.6676 10.0375C14.8142 10.0375 16.0244 10.0375 17.171 10.0375C17.4258 10.0375 17.6806 10.2286 17.7443 10.4834V10.5471C17.7443 11.3114 17.7443 12.0758 17.7443 12.9039C17.7443 12.9676 17.6806 13.0313 17.6169 13.0313C17.3621 13.095 17.0436 13.1587 16.7888 13.2224C16.4703 13.2861 16.0881 13.3498 15.7696 13.4135C15.6423 13.4135 15.4512 13.4772 15.2601 13.4772C15.2601 13.1587 15.1964 12.8402 14.8779 12.6491C14.7505 12.5854 14.5594 12.5217 14.432 12.5217C13.9861 12.5854 13.6676 12.9676 13.7313 13.4135C12.33 13.4135 10.8649 13.4135 9.33617 13.4135ZM11.4382 10.4834C11.1834 10.4834 10.8649 10.4834 10.6101 10.4834C10.4827 10.4834 10.3553 10.5471 10.3553 10.7382C10.3553 10.9292 10.3553 11.1203 10.3553 11.3751C10.3553 11.5662 10.419 11.6299 10.6101 11.6299C11.1834 11.6299 11.693 11.6299 12.2663 11.6299C12.3937 11.6299 12.5211 11.5662 12.5211 11.3751C12.5211 11.184 12.5211 10.9292 12.5211 10.7382C12.5211 10.6108 12.4574 10.4834 12.2663 10.4834C12.0115 10.4834 11.693 10.4834 11.4382 10.4834ZM8.95398 10.4834C8.69919 10.4834 8.3807 10.4834 8.12591 10.4834C7.99851 10.4834 7.93482 10.5471 7.87112 10.6745C7.87112 10.8655 7.87112 11.1203 7.87112 11.3114C7.87112 11.4388 7.93482 11.5025 8.06221 11.5025C8.63549 11.5025 9.20877 11.5025 9.78205 11.5025C9.90945 11.5025 9.97315 11.4388 9.97315 11.3114C9.97315 11.1203 9.97315 10.8655 9.97315 10.6745C9.97315 10.4834 9.90945 10.4197 9.71835 10.4197C9.46356 10.4834 9.20877 10.4834 8.95398 10.4834ZM13.9224 10.4834C13.6676 10.4834 13.3491 10.4834 13.0943 10.4834C12.9669 10.4834 12.9032 10.5471 12.9032 10.6745C12.9032 10.8655 12.9032 11.1203 12.9032 11.3114C12.9032 11.4388 12.9669 11.5025 13.0943 11.5025C13.6676 11.5025 14.2409 11.5025 14.8142 11.5025C14.9416 11.5025 15.0053 11.4388 15.0053 11.3114C15.0053 11.1203 15.0053 10.8655 15.0053 10.6745C15.0053 10.4834 14.9416 10.4197 14.7505 10.4197C14.4957 10.4834 14.1772 10.4834 13.9224 10.4834ZM16.4066 11.5662C16.6614 11.5662 16.9799 11.5662 17.2347 11.5662C17.3621 11.5662 17.4258 11.5025 17.4258 11.3751C17.4258 11.2477 17.4258 11.1203 17.4258 10.9292C17.4258 10.7382 17.3621 10.6108 17.171 10.5471C17.1073 10.4834 16.9799 10.4834 16.8525 10.4834C16.4066 10.4834 15.9607 10.4834 15.5149 10.4834C15.3238 10.4834 15.2601 10.5471 15.2601 10.7382C15.2601 10.9292 15.2601 11.1203 15.2601 11.3114C15.2601 11.5025 15.3238 11.5662 15.5149 11.5662C15.8333 11.5662 16.1518 11.5662 16.4066 11.5662ZM6.59716 11.7573C6.59716 12.0758 6.59716 12.458 6.59716 12.7765C6.59716 12.9039 6.66086 12.9676 6.78825 12.9676C6.91565 12.9676 7.04305 12.9676 7.17044 12.9676C7.29784 12.9676 7.42523 12.9039 7.42523 12.7128C7.42523 12.0121 7.42523 11.3114 7.42523 10.6745C7.42523 10.5471 7.36153 10.4834 7.23414 10.4197C7.10674 10.4197 6.97935 10.4197 6.91565 10.4197C6.72456 10.4197 6.66086 10.4834 6.66086 10.6745C6.59716 11.1203 6.59716 11.4388 6.59716 11.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.99805 13.2224C7.99805 12.9039 8.31654 12.6491 8.63503 12.6491C8.95351 12.6491 9.20831 12.9039 9.20831 13.2861C9.20831 13.6046 8.95351 13.8594 8.63503 13.8594C8.25284 13.8594 7.99805 13.6046 7.99805 13.2224ZM8.88982 13.2861C8.88982 13.1587 8.76242 12.9676 8.63503 12.9676C8.50763 12.9676 8.38023 13.095 8.31654 13.2224C8.31654 13.3498 8.44393 13.5409 8.57133 13.5409C8.76242 13.5409 8.88982 13.4135 8.88982 13.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.559 13.8594C14.2405 13.8594 13.922 13.6046 13.9857 13.2224C13.9857 12.9039 14.2405 12.6491 14.559 12.6491C14.8775 12.6491 15.1323 12.9039 15.1323 13.2861C15.196 13.6046 14.9412 13.8594 14.559 13.8594ZM14.8775 13.2224C14.8775 13.095 14.7501 12.9676 14.6227 12.9676C14.4953 12.9676 14.3679 13.095 14.3679 13.2861C14.3679 13.4135 14.4953 13.5409 14.6864 13.5409C14.7501 13.5409 14.8775 13.4135 14.8775 13.2224Z", "fill", "#BBBDBF"], ["size", "10"], ["size", "12", 1, "ticket-details"], ["size", "6"], [1, "ticket-details-description"], [1, "ticket-details-status"], ["size", "6", 1, "ion-justify-content-end"], [1, "ticket-details-description", 2, "text-align", "end"], [1, "ticket-details-status", 2, "text-align", "end"], [4, "ngFor", "ngForOf"], ["size", "12", 1, ""], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6126)"], ["d", "M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2V4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20V22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 12H22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12H4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6126"], ["width", "24", "height", "24", "fill", "white"], [1, "pickup-point"], [1, "pickup-detail"], ["style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6134)"], ["d", "M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6134"], [1, "Method-pay"], ["mode", "md", 2, "width", "100%", "padding-left", "5px", 3, "ngModelChange", "ionChange", "ngModel"], ["lines", "none", 2, "border-bottom", "1px solid rgba(128,128,128,0.3)", "--background", "white"], ["slot", "start", "value", "1", 2, "color", "#191966", "--color-checked", "#191966"], [2, "justify-content", "start", "display", "flex", "align-items", "center"], ["name", "information-circle-outline", 2, "z-index", "50", "height", "23px", "width", "26px", "margin-left", "5px", 3, "click"], ["slot", "start", "value", "3", 2, "color", "#191966", "--color-checked", "#191966"], [2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], ["src", "./assets/icon/cbuslocation.svg", "item-start", "", 2, "height", "20px", "width", "20px"], [1, "themeone-viewmap-txt", 2, "margin", "auto", "margin-top", "4px"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6", 1, "brws-txt", 2, "margin", "0", "font-size", "14px", "font-weight", "600"], ["size", "6", 1, "dwn-txt", 2, "margin", "0", "color", "#191966", "font-size", "14px", "font-weight", "600", 3, "click"], ["class", "container-m", 4, "ngIf"], [1, "container-m"], ["size", "2"], ["src", "./assets/icon/rupee-indian.png", "alt", "", 2, "height", "40px"], ["size", "10", 1, "promo-txt-m"], [2, "font-size", "11px"], ["src", "./assets/icon/calculator.png", "alt", "", 2, "height", "40px"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], [1, "bg-content"], [1, "center-div"], [1, "card-1", "mr-tp-16"], [1, "Contact-details"], [1, "pass-body", "grey-box"], ["width-50", ""], [1, "small"], [1, "small", "bold"], ["class", "card-1 mr-tp-16", 4, "ngIf"], [1, "card-1", "mr-tp-16", 2, "padding", "0"], ["lines", "none"], ["mode", "md", 3, "ngModelChange", "ionChange", "ngModel"], [2, "border-bottom", "1px solid rgba(128,128,128,0.3)"], ["slot", "start", "color", "red", "value", "1"], ["slot", "start", "color", "red", "value", "3"], ["mode", "md", "expand", "full", 1, "routes-footer", "mr-tp-16", 3, "click"], [1, "center", "pay-txt-1"], ["class", "whole center", 3, "click", 4, "ngIf"], ["slot", "start", 2, "--color", "var(--iconsAndButtonsColor)", 3, "ngModelChange", "disabled", "ngModel"], ["style", "border-bottom:1px solid rgba(128,128,128,0.3)", 4, "ngIf"], ["slot", "start", "color", "red", 3, "value"], [1, "whole", "center", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg"], ["size", "5", 1, "brws-txt", 3, "click"], ["size", "5", 1, "dwn-txt", 3, "click"], ["size", "5", 1, "brws-txt"], [1, "circle"], ["size", "7"], [1, "circle1"], [1, "bg-content", "seabirdTheme"], ["mode", "md", "expand", "block", 1, "searbird-login-btn", 3, "click"]],
  template: function PhoneConfirmBookingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PhoneConfirmBookingPage_ng_container_0_Template, 17, 3, "ng-container", 0)(1, PhoneConfirmBookingPage_ng_container_1_Template, 79, 13, "ng-container", 0)(2, PhoneConfirmBookingPage_ng_container_2_Template, 78, 13, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.UpperCasePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #d84e55;\n}\n\n.pass[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.pass[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 1.2rem;\n  margin: 0;\n  position: relative;\n  background-color: #ffdd21;\n  color: #000;\n}\n\n.pass[_ngcontent-%COMP%]   .passenger-body[_ngcontent-%COMP%] {\n  padding: 0 10px 10px;\n}\n\n.pass[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 10px 0 0;\n  font-size: 1.7em;\n  padding: 20px 5px 0;\n}\n\n.pass[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 0;\n  margin: 0;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  --background: #ed3237;\n  color: white;\n  font-weight: bolder;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\nion-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #fff;\n}\n\nion-segment-button[_ngcontent-%COMP%]::part(indicator-background) {\n  background: #FFBD16;\n}\n\nion-segment-button.segment-button-checked[_ngcontent-%COMP%]::part(native) {\n  color: #FFBD16;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 40%;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-card[_ngcontent-%COMP%]   .dash-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #DFDFDF;\n  margin: 0px 25px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   .track-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #FFBD16;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pnr-circle-status[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #DFDFDF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #A0A0A0;\n  text-align: start;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  text-align: start;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pickup-point[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  color: #A0A0A0;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: start;\n  color: #191966;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4.light-font[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   .bus-contact-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #25E88A;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  font-weight: 600;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #C2C2C2;\n}\nion-card[_ngcontent-%COMP%]   h2.edit-ticket[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: #191966;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   h2.Method-pay[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333333;\n}\n\nion-button.Continue-button[_ngcontent-%COMP%]::part(native) {\n  --background: #f2c21a;\n  color: #191966;\n}\n\nion-button.Continue-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.container-m[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 15px auto;\n  height: auto;\n  border: 1px solid grey;\n  background-color: #f5f5f5;\n  padding: 10px;\n}\n\n.promo-txt-m[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: darkslategrey;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n  font-family: Roboto;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n.seabirdTheme[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --background-checked: var(--iconsAndButtonsColor);\n  --color: var(--iconsAndButtonsColor) !important;\n  --background: var(--iconsAndButtonsColor) !important;\n  --ion-color-base: var(--iconsAndButtonsColor) !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .searbird-login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  margin: 10px 4px;\n  --border-radius: 20px;\n  height: 45px;\n}"]
});

/***/ }),

/***/ 20966:
/*!*******************************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPageRoutingModule: () => (/* binding */ PhoneConfirmBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-confirm-booking.page */ 7768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneConfirmBookingPageRoutingModule;




const routes = [{
  path: '',
  component: _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_0__.PhoneConfirmBookingPage
}];
class PhoneConfirmBookingPageRoutingModule {}
_PhoneConfirmBookingPageRoutingModule = PhoneConfirmBookingPageRoutingModule;
_PhoneConfirmBookingPageRoutingModule.ɵfac = function PhoneConfirmBookingPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPageRoutingModule)();
};
_PhoneConfirmBookingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PhoneConfirmBookingPageRoutingModule
});
_PhoneConfirmBookingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhoneConfirmBookingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 37762:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 61636);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ 2920).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 92920)).then(m => new m.GeolocationWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61636:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 65765:
/*!********************************************!*\
  !*** ./src/app/services/plugin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginProvider: () => (/* binding */ PluginProvider)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);

var _PluginProvider;


class PluginProvider {
  constructor() {
    this.locationCoords = {};
  }
  // To check whether Location Service is enabled or Not
  locationStatus() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission first
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        // Check if permission is granted
        if (permissionStatus.location === 'granted') {
          try {
            const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
            return true;
          } catch (error) {
            console.error('Error getting location:', error);
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error checking location status:', error);
        return false;
      }
    })();
  }
  checkLocationEnabled() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          try {
            // Attempt to get the current position to confirm location is enabled
            const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
            return true;
          } catch (error) {
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error checking location status:', error);
        return false;
      }
    })();
  }
  // Check if application has GPS access permission
  checkGPSPermission() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          // If permission is granted, proceed with checking if GPS is enabled
          return _this.askToTurnOnGPS();
        } else {
          return _this.requestGPSPermission();
        }
      } catch (error) {
        console.error('Error checking GPS permission:', error);
        return false;
      }
    })();
  }
  // Simulating askToTurnOnGPS method for enabling GPS
  askToTurnOnGPS() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // We can attempt to get the location as a method to trigger GPS enabling
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        return true;
      } catch (error) {
        return false;
      }
    })();
  }
  // Simulating requestGPSPermission method for requesting location permissions
  requestGPSPermission() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission again if it was not granted
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          return _this2.askToTurnOnGPS();
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error requesting GPS permission:', error);
        return false;
      }
    })();
  }
  getLocationCoordinates() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get the current position
        const resp = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        // Store the coordinates in locationCoords object
        _this3.locationCoords.latitude = resp.coords.latitude;
        _this3.locationCoords.longitude = resp.coords.longitude;
        _this3.locationCoords.accuracy = resp.coords.accuracy;
        _this3.locationCoords.timestamp = resp.timestamp;
        return _this3.locationCoords;
      } catch (error) {
        console.error('Error getting location:', error);
        alert('Error getting location');
        return false; // You can return false or handle error accordingly
      }
    })();
  }
}
_PluginProvider = PluginProvider;
_PluginProvider.ɵfac = function PluginProvider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PluginProvider)();
};
_PluginProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _PluginProvider,
  factory: _PluginProvider.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 85487:
/*!***********************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPageModule: () => (/* binding */ PhoneConfirmBookingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-confirm-booking-routing.module */ 20966);
/* harmony import */ var _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-confirm-booking.page */ 7768);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneConfirmBookingPageModule;







class PhoneConfirmBookingPageModule {}
_PhoneConfirmBookingPageModule = PhoneConfirmBookingPageModule;
_PhoneConfirmBookingPageModule.ɵfac = function PhoneConfirmBookingPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPageModule)();
};
_PhoneConfirmBookingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _PhoneConfirmBookingPageModule
});
_PhoneConfirmBookingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneConfirmBookingPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PhoneConfirmBookingPageModule, {
    declarations: [_phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__.PhoneConfirmBookingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneConfirmBookingPageRoutingModule]
  });
})();

/***/ })

}]);