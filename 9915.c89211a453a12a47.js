"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9915],{

/***/ 43940
/*!***************************************************************!*\
  !*** ./src/app/update-ticket/ticket-inline-view.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketInlineViewComponent: () => (/* binding */ TicketInlineViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
var _TicketInlineViewComponent;




function TicketInlineViewComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.cus_name || "Passenger " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Seat: ", p_r1.seat_no, "");
  }
}
function TicketInlineViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Passengers & Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketInlineViewComponent_div_12_div_3_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ticketDetails.passenger_details);
  }
}
function TicketInlineViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.ticketDetails.boarding_details.address, " ", ctx_r2.ticketDetails.boarding_details.time, "");
  }
}
function TicketInlineViewComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.drop_off_details.address);
  }
}
class TicketInlineViewComponent {
  constructor() {
    this.bookingDetails = {};
    this.ticketDetails = {};
    this.modify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onModifyClick() {
    this.modify.emit();
  }
}
_TicketInlineViewComponent = TicketInlineViewComponent;
_TicketInlineViewComponent.ɵfac = function TicketInlineViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketInlineViewComponent)();
};
_TicketInlineViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TicketInlineViewComponent,
  selectors: [["app-ticket-inline-view"]],
  inputs: {
    bookingDetails: "bookingDetails",
    ticketDetails: "ticketDetails"
  },
  outputs: {
    modify: "modify"
  },
  standalone: false,
  decls: 17,
  vars: 7,
  consts: [[1, "syamoli-view-wrapper"], [1, "syamoli-view-card"], [1, "syamoli-view-header"], [1, "syamoli-view-route"], [1, "syamoli-view-date"], [1, "syamoli-view-pnr"], [1, "syamoli-view-body"], ["class", "syamoli-view-section", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "syamoli-btn-primary", 3, "click"], [1, "syamoli-view-section"], [1, "syamoli-section-title-sm"], ["class", "syamoli-passenger-row", 4, "ngFor", "ngForOf"], [1, "syamoli-passenger-row"], [1, "syamoli-passenger-name"], [1, "syamoli-passenger-seat"], [1, "syamoli-inline"]],
  template: function TicketInlineViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PNR: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TicketInlineViewComponent_div_12_Template, 4, 1, "div", 7)(13, TicketInlineViewComponent_div_13_Template, 5, 2, "div", 7)(14, TicketInlineViewComponent_div_14_Template, 5, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketInlineViewComponent_Template_ion_button_click_15_listener() {
        return ctx.onModifyClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modify Ticket");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.bookingDetails == null ? null : ctx.bookingDetails.origin, " \u2192 ", ctx.bookingDetails == null ? null : ctx.bookingDetails.destination, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingDetails == null ? null : ctx.bookingDetails.travelDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookingDetails == null ? null : ctx.bookingDetails.pnrNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketDetails == null ? null : ctx.ticketDetails.passenger_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketDetails == null ? null : ctx.ticketDetails.boarding_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketDetails == null ? null : ctx.ticketDetails.drop_off_details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton],
  styles: [".syamoli-view-wrapper[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.syamoli-view-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.syamoli-view-header[_ngcontent-%COMP%] {\n  padding: 16px 16px 8px;\n  background: linear-gradient(90deg, var(--iconsAndButtonsColor), #FFA733);\n  color: #222;\n  font-size: 14px;\n}\n\n.syamoli-view-route[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.syamoli-view-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n\n.syamoli-view-pnr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n\n.syamoli-view-body[_ngcontent-%COMP%] {\n  padding: 10px 16px 6px;\n}\n\n.syamoli-view-section[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.syamoli-section-title-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #666;\n  margin-bottom: 4px;\n}\n\n.syamoli-passenger-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 6px 0;\n  border-bottom: 1px dashed #e1e1e1;\n  font-size: 13px;\n}\n\n.syamoli-passenger-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.syamoli-passenger-seat[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-weight: 600;\n}\n\n.syamoli-inline[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #333;\n}\n\n.syamoli-btn-primary[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  --border-radius:8px;\n  margin: 12px 16px 16px;\n  font-weight: 600;\n}"]
});

/***/ },

/***/ 16146
/*!***************************************************************!*\
  !*** ./src/app/update-ticket/update-ticket-routing.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPageRoutingModule: () => (/* binding */ UpdateTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _update_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-ticket.page */ 16308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _UpdateTicketPageRoutingModule;




const routes = [{
  path: '',
  component: _update_ticket_page__WEBPACK_IMPORTED_MODULE_1__.UpdateTicketPage
}];
class UpdateTicketPageRoutingModule {}
_UpdateTicketPageRoutingModule = UpdateTicketPageRoutingModule;
_UpdateTicketPageRoutingModule.ɵfac = function UpdateTicketPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPageRoutingModule)();
};
_UpdateTicketPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _UpdateTicketPageRoutingModule
});
_UpdateTicketPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdateTicketPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 29915
/*!*******************************************************!*\
  !*** ./src/app/update-ticket/update-ticket.module.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPageModule: () => (/* binding */ UpdateTicketPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-ticket-routing.module */ 16146);
/* harmony import */ var _update_ticket_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-ticket.page */ 16308);
/* harmony import */ var _ticket_inline_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-inline-view.component */ 43940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _UpdateTicketPageModule;







class UpdateTicketPageModule {}
_UpdateTicketPageModule = UpdateTicketPageModule;
_UpdateTicketPageModule.ɵfac = function UpdateTicketPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPageModule)();
};
_UpdateTicketPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _UpdateTicketPageModule
});
_UpdateTicketPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__.UpdateTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UpdateTicketPageModule, {
    declarations: [_update_ticket_page__WEBPACK_IMPORTED_MODULE_4__.UpdateTicketPage, _ticket_inline_view_component__WEBPACK_IMPORTED_MODULE_5__.TicketInlineViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_3__.UpdateTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
  });
})();

/***/ },

/***/ 16308
/*!*****************************************************!*\
  !*** ./src/app/update-ticket/update-ticket.page.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPage: () => (/* binding */ UpdateTicketPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 16213);

var _UpdateTicketPage;






















function UpdateTicketPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_0_div_8_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-card")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "PNR Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Email/Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Journey date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_8_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 22)(23, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "" : ctx_r1.updateForm.value.displayDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_select_12_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", code_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", code_r4, " ");
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_select_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_0_div_9_ion_select_12_ion_select_option_1_Template, 2, 2, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 44);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_input_14_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 47);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_9_ion_input_14_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_0_div_9_ion_input_14_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_0_div_9_ion_input_14_ion_icon_1_Template, 1, 0, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
  }
}
function UpdateTicketPage_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_0_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-grid")(3, "ion-row", 24)(4, "ion-col", 25)(5, "ion-card")(6, "ion-row")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Change Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-row", 26)(10, "ion-col", 27)(11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UpdateTicketPage_ng_container_0_div_9_ion_select_12_Template, 2, 1, "ion-select", 29)(13, UpdateTicketPage_ng_container_0_div_9_ion_icon_13_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, UpdateTicketPage_ng_container_0_div_9_ion_input_14_Template, 2, 2, "ion-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 32)(16, "ion-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_0_div_9_Template_ion_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-col", 25)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Change Boarding/Pick Up Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-row", 26)(21, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_9_Template_ion_item_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "ion-input", 35)(23, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-row", 37)(25, "ion-col", 38)(26, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Update Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
  }
}
function UpdateTicketPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 5)(3, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_0_div_8_Template, 25, 4, "div", 9)(9, UpdateTicketPage_ng_container_0_div_9_Template, 30, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_header" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == true);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_container_2_Template, 3, 1, "ng-container", 61)(3, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r9);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template, 2, 0, "p", 58)(2, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_17_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_1_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UpdateTicketPage_ng_container_1_div_8_div_13_Template, 3, 2, "div", 3)(14, UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template, 2, 1, "ion-item", 3)(15, UpdateTicketPage_ng_container_1_div_8_div_15_Template, 3, 1, "div", 57)(16, UpdateTicketPage_ng_container_1_div_8_div_16_Template, 3, 1, "div", 57)(17, UpdateTicketPage_ng_container_1_div_8_div_17_Template, 3, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.title == "Send Ticket" || ctx_r1.title == "Email Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_select_4_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", code_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", code_r13, " ");
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_select_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_1_div_9_ion_select_4_ion_select_option_2_Template, 2, 2, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_1_div_9_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 84)(1, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_ion_item_12_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.email_value, $event) || (ctx_r1.email_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email_value);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_row_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-item")(3, "ion-input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_ion_row_20_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectDroppingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.droppingStage && ctx_r1.updateData.droppingStage.time ? ctx_r1.updateData.droppingStage.time + "-" : "", " ");
  }
}
function UpdateTicketPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_1_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-row", 67)(3, "ion-col", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UpdateTicketPage_ng_container_1_div_9_ion_select_4_Template, 3, 1, "ion-select", 69)(5, UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template, 1, 1, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 72)(8, "ion-label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UpdateTicketPage_ng_container_1_div_9_p_11_Template, 2, 0, "p", 75)(12, UpdateTicketPage_ng_container_1_div_9_ion_item_12_Template, 2, 1, "ion-item", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-row")(14, "ion-col")(15, "ion-label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-item")(18, "ion-input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_Template_ion_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, UpdateTicketPage_ng_container_1_div_9_ion_row_20_Template, 5, 2, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 22)(22, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 48)(3, "ion-buttons", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_1_div_8_Template, 18, 7, "div", 9)(9, UpdateTicketPage_ng_container_1_div_9_Template, 24, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow);
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const option_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateValue(option_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", option_r19.img, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u00A0 ", option_r19.label, " ");
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template, 3, 2, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (option_r19.action !== "cancel_ticket" || !ctx_r1.metaData.cancelOption) && (option_r19.action !== "reschedule_ticket" || !ctx_r1.metaData.isPrePostPone));
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_Template, 2, 1, "ng-container", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.ticketOptions);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_container_2_Template, 3, 1, "ng-container", 61)(3, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r23);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template, 2, 0, "p", 117)(2, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 123)(1, "ion-button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_26_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 123)(1, "ion-button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_27_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 103)(2, "form", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_2_div_14_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 105)(5, "ion-item", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 105)(9, "ion-item", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-row")(12, "ion-item", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_Template_ion_item_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-col", 111)(14, "ion-label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ion-icon", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u00A0Select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, UpdateTicketPage_ng_container_2_div_14_div_22_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-row")(24, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template, 2, 1, "ion-item", 3)(26, UpdateTicketPage_ng_container_2_div_14_div_26_Template, 3, 1, "div", 116)(27, UpdateTicketPage_ng_container_2_div_14_div_27_Template, 3, 2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_select_7_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", code_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", code_r28, " ");
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_select_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_div_15_ion_select_7_ion_select_option_1_Template, 2, 2, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_2_div_15_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-card", 126)(3, "ion-row")(4, "ion-col", 27)(5, "ion-label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UpdateTicketPage_ng_container_2_div_15_ion_select_7_Template, 2, 1, "ion-select", 128)(8, UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template, 1, 1, "ion-input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-col", 32)(10, "ion-label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_15_Template_ion_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 25)(15, "ion-label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-item", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_15_Template_ion_item_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-row")(23, "ion-col", 25)(24, "ion-button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.boardingStage.name + " " + ctx_r1.updateData.boardingStage.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 87)(2, "ion-toolbar", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_Template_ion_toolbar_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-buttons", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 91)(8, "ion-row", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ion-icon", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UpdateTicketPage_ng_container_2_ion_row_13_Template, 3, 1, "ion-row", 96)(14, UpdateTicketPage_ng_container_2_div_14_Template, 28, 6, "div", 3)(15, UpdateTicketPage_ng_container_2_div_15_Template, 28, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_name.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx_r1.optionsVisible ? "chevron-up-circle-outline" : "chevron-down-circle-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.optionsVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == true);
  }
}
function UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-datetime", 148, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const popoverDatetime_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r32 == null ? null : popoverDatetime_r32.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_container_2_Template, 3, 1, "ng-container", 61)(3, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r35);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template, 2, 0, "p", 149)(2, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 141)(1, "ion-input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.enforceMaxLengthOtp($event));
    })("keyup", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_14_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_3_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-item", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-item", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-item", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-input", 145)(8, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-modal", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UpdateTicketPage_ng_container_3_div_8_div_11_Template, 3, 2, "div", 3)(12, UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template, 2, 1, "ion-item", 147)(13, UpdateTicketPage_ng_container_3_div_8_div_13_Template, 3, 1, "div", 57)(14, UpdateTicketPage_ng_container_3_div_8_div_14_Template, 3, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket ? "Email/Phone number" : "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ion-item", 165)(2, "ion-label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedCountry.dialCode);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 165)(1, "ion-label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.selectedCountry.dialCode);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 165)(1, "ion-label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.dialCodeSelected, $event) || (ctx_r1.dialCodeSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.flagSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dialCodeSelected);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template, 4, 2, "ion-item", 168)(2, UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template, 4, 2, "ion-item", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCountry);
  }
}
function UpdateTicketPage_ng_container_3_div_9_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\"SMS shall not be sent to an international number\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 158)(1, "ion-input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.email_value, $event) || (ctx_r1.email_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email_value);
  }
}
function UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25)(2, "ion-item", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectDroppingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.updateData.droppingStage && ctx_r1.updateData.droppingStage.name ? ctx_r1.updateData.droppingStage.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
  }
}
function UpdateTicketPage_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_3_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-row", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-col", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UpdateTicketPage_ng_container_3_div_9_div_5_Template, 6, 3, "div", 3)(6, UpdateTicketPage_ng_container_3_div_9_div_6_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 157)(8, "ion-item", 158)(9, "ion-input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_9_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UpdateTicketPage_ng_container_3_div_9_p_10_Template, 2, 0, "p", 160)(11, UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template, 2, 1, "ion-item", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 25)(14, "ion-item", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template, 5, 2, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 22)(20, "ion-button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.boardingStage && ctx_r1.updateData.boardingStage.time ? ctx_r1.updateData.boardingStage.time + "-" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 138)(2, "ion-toolbar", 48)(3, "ion-buttons", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_3_div_8_Template, 15, 6, "div", 9)(9, UpdateTicketPage_ng_container_3_div_9_Template, 22, 10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow);
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_18_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_8_div_18_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_18_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_18_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_8_div_18_div_2_ng_template_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_4_div_8_div_18_div_2_ng_container_1_Template, 3, 1, "ng-container", 61)(2, UpdateTicketPage_ng_container_4_div_8_div_18_div_2_ng_template_2_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const resendButton_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r46);
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_4_div_8_div_18_p_1_Template, 2, 0, "p", 189)(2, UpdateTicketPage_ng_container_4_div_8_div_18_div_2_Template, 4, 2, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_4_div_8_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 181)(1, "ion-input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_4_div_8_ion_item_19_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_4_div_8_ion_item_19_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_8_div_20_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_4_div_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "ion-button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_4_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 179)(3, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "PNR Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-item", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 179)(8, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Email/Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-item", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Journey Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-item", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_8_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "img", 186)(16, "ion-input", 187)(17, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UpdateTicketPage_ng_container_4_div_8_div_18_Template, 3, 2, "div", 3)(19, UpdateTicketPage_ng_container_4_div_8_ion_item_19_Template, 2, 1, "ion-item", 188)(20, UpdateTicketPage_ng_container_4_div_8_div_20_Template, 3, 2, "div", 57)(21, UpdateTicketPage_ng_container_4_div_8_div_21_Template, 3, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_4_div_9_ion_select_4_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", code_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](code_r50);
  }
}
function UpdateTicketPage_ng_container_4_div_9_ion_select_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_4_div_9_ion_select_4_ion_select_option_1_Template, 2, 2, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_4_div_9_ion_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_9_ion_input_5_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_4_div_9_ion_input_5_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_4_div_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " SMS shall not be sent to an international number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_4_div_9_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 181)(1, "ion-input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_4_div_9_ion_item_9_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.email_value, $event) || (ctx_r1.email_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email_value);
  }
}
function UpdateTicketPage_ng_container_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "form", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_4_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-row", 197)(3, "ion-col", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UpdateTicketPage_ng_container_4_div_9_ion_select_4_Template, 2, 1, "ion-select", 199)(5, UpdateTicketPage_ng_container_4_div_9_ion_input_5_Template, 1, 1, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-col", 201)(7, "ion-input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_4_div_9_Template_ion_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_4_div_9_p_8_Template, 2, 0, "p", 203)(9, UpdateTicketPage_ng_container_4_div_9_ion_item_9_Template, 2, 1, "ion-item", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 204)(12, "ion-label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-item", 206)(15, "ion-input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_9_Template_ion_input_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 204)(18, "ion-label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-item", 206)(21, "ion-input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_4_div_9_Template_ion_input_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectDroppingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 22)(23, "ion-button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 174)(2, "ion-toolbar", 175)(3, "ion-buttons", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_4_div_8_Template, 22, 5, "div", 9)(9, UpdateTicketPage_ng_container_4_div_9_Template, 25, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow);
  }
}
function UpdateTicketPage_ng_container_5_ion_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 228);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx_r1.optionsVisible ? "chevron-up-outline" : "chevron-down-outline");
  }
}
function UpdateTicketPage_ng_container_5_div_18_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_div_18_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateValue(option_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", option_r55.img, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r55.label);
  }
}
function UpdateTicketPage_ng_container_5_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_5_div_18_ng_container_1_button_1_Template, 5, 2, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r55 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (option_r55.action !== "cancel_ticket" || !ctx_r1.metaData.cancelOption) && (option_r55.action !== "reschedule_ticket" || !ctx_r1.metaData.isPrePostPone));
  }
}
function UpdateTicketPage_ng_container_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_5_div_18_ng_container_1_Template, 2, 1, "ng-container", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.ticketOptions);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_19_div_17_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_ng_template_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_span_1_Template, 2, 1, "span", 249)(2, UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sbResendButton_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", sbResendButton_r59);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_5_ng_container_19_div_17_button_1_Template, 2, 0, "button", 247)(2, UpdateTicketPage_ng_container_5_ng_container_19_div_17_ng_container_2_Template, 4, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 236)(1, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_5_ng_container_19_div_18_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_5_ng_container_19_div_18_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_19_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_19_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_5_ng_container_19_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 236)(3, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "PNR number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 236)(7, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Email / Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_19_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Journey date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, UpdateTicketPage_ng_container_5_ng_container_19_div_17_Template, 3, 2, "div", 242)(18, UpdateTicketPage_ng_container_5_ng_container_19_div_18_Template, 4, 1, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, UpdateTicketPage_ng_container_5_ng_container_19_button_19_Template, 2, 1, "button", 244)(20, UpdateTicketPage_ng_container_5_ng_container_19_button_20_Template, 2, 2, "button", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_20_ion_select_6_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", code_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](code_r64);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_20_ion_select_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_5_ng_container_20_ion_select_6_ion_select_option_1_Template, 2, 2, "ion-select-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_20_ion_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_20_ion_input_7_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_5_ng_container_20_ion_input_7_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_5_ng_container_20_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Invalid Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_5_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_5_ng_container_20_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.sbSubmitUpdateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 254)(3, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UpdateTicketPage_ng_container_5_ng_container_20_ion_select_6_Template, 2, 1, "ion-select", 255)(7, UpdateTicketPage_ng_container_5_ng_container_20_ion_input_7_Template, 1, 1, "ion-input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function UpdateTicketPage_ng_container_5_ng_container_20_Template_ion_input_ionInput_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.sbOnMobileInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_5_ng_container_20_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UpdateTicketPage_ng_container_5_ng_container_20_p_9_Template, 2, 0, "p", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_ng_container_20_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 224)(14, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-input", 259)(17, "ion-icon", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateDetailsForm.controls["mobile_number"].touched && ctx_r1.updateDetailsForm.controls["mobile_number"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.updateData.boardingStage.name + " " + ctx_r1.updateData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 213)(2, "ion-toolbar", 214)(3, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 217)(6, "h1", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-content", 219)(9, "div", 220)(10, "section", 221)(11, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_5_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Select option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 224)(15, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, UpdateTicketPage_ng_container_5_ion_icon_17_Template, 1, 1, "ion-icon", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UpdateTicketPage_ng_container_5_div_18_Template, 2, 1, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, UpdateTicketPage_ng_container_5_ng_container_19_Template, 21, 5, "ng-container", 3)(20, UpdateTicketPage_ng_container_5_ng_container_20_Template, 20, 8, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-select-row--locked", ctx_r1.updateShow == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.updateShow == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-expanded", ctx_r1.optionsVisible && ctx_r1.updateShow != true ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.optionsVisible && ctx_r1.updateShow != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == true);
  }
}
class UpdateTicketPage {
  constructor(loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, appData, globalData, modalCtrl) {
    this.loader = loader;
    this.util = util;
    this.formBuilder = formBuilder;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.modalController = modalController;
    this.dateService = dateService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.appData = appData;
    this.globalData = globalData;
    this.modalCtrl = modalCtrl;
    this.pnrNumber = '';
    this.email = '';
    this.updateShow = false;
    this.stageDetails = [];
    this.reservationId = 0;
    this.updateData = {};
    this.ticketDetails = [];
    this.fromMybooking = false;
    this.travelDateMybooking = '';
    this.title = '';
    this.bookingDetails = {};
    this.update_btn_disabled = true;
    this.timer = 30;
    this.enabled_otp = false;
    this.timerInSeconds = 30;
    this.otp_value = '';
    this.authKey = '';
    this.from_otp_enabled = false;
    this.otp_based_authentication_to_modify_ticket = false;
    this.stageDetailsDrop = [];
    this.boardingPoints = [];
    this.isRoundTrip = false;
    this.departureDate = {};
    this.departureDateReturn = {};
    this.ticketOptions = [{
      label: 'View ticket',
      action: 'view_ticket',
      img: './assets/icon/viewTicket.svg'
    }, {
      label: 'Cancel ticket',
      action: 'cancel_ticket',
      img: './assets/icon/seabird_modify_cancelticket.svg'
    }, {
      label: 'Download ticket',
      action: 'download_ticket',
      img: './assets/icon/seabird_modify_downloadticket.svg'
    }, {
      label: 'Reschedule',
      action: 'reschedule_ticket',
      img: './assets/icon/prepostpone.svg'
    }, {
      label: 'Update ticket',
      action: 'update_ticket',
      img: './assets/icon/Refresh.svg'
    }];
    this.selected_name = {
      label: 'View ticket',
      action: 'view_ticket'
    };
    this.optionsVisible = false;
    this.selectedCountry = '';
    this.flagSelected = '';
    this.dialCodeSelected = '';
    this.maxDate = '';
    this.isIos = false;
    this.isSms = false;
    this.isEmail = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.updateData = this.ticketDetails.boarding_details;
    this.updateData = {
      "boardingStage": '',
      "droppingStage": ''
    };
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
      if (this.title == 'Update ticket') this.selected_name = {
        label: 'Update ticket',
        action: 'update_ticket'
      };else if (this.title == 'View ticket') this.selected_name = {
        label: 'View ticket',
        action: 'view_ticket'
      };
      this.from_otp_enabled = params["otp_enabled"] ? params["otp_enabled"] : false;
      this.newBooking = params["newBooking"];
      this.metaData = this.commonStorage.getItem('metaData');
      this.updateShow = params["from_book_page"];
      if (this.title === 'Download Ticket') {
        this.selected_name = {
          label: 'Download Ticket',
          action: 'download_ticket'
        };
      } else if (this.title === 'View Ticket') {
        this.selected_name = {
          label: 'View Ticket',
          action: 'view_ticket'
        };
      } else if (this.title === 'Send Ticket') {
        this.selected_name = {
          label: 'Send Ticket',
          action: 'send_ticket'
        };
      } else if (this.title === 'Email Ticket') {
        this.selected_name = {
          label: 'Email Ticket',
          action: 'email_ticket'
        };
      }
      if (this.title === 'Send Ticket') {
        this.isSms = true;
        this.isEmail = false;
      } else if (this.title === 'Email Ticket') {
        this.isSms = false;
        this.isEmail = true;
      } else {
        this.isSms = false;
        this.isEmail = false;
      }
    });
    this.AllowedCountryCodes = this.commonStorage.getItem("metaData").AllowedCountryCodes;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount;
  }
  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.updateShow = params["from_book_page"];
      if (this.updateShow) {
        this.updateData = params["user"] ? params["user"] : '';
        this.ticketDetails = this.updateData;
        this.getBoradingPoint();
        this.getDroppingPoint();
        this.email_value = this.ticketDetails.passenger_details[0].cus_email;
        this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
        if (this.ticketDetails.passenger_details[0].country_code != '') {
          if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
            this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
          } else {
            this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
          }
        } else {
          if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
            if (this.AllowedCountryCodes[0] == '91') {
              this.selected_Country_code = '+91';
            } else {
              this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
            }
          }
        }
        if (this.ticketDetails.passenger_details[0].mobile != '') {
          const mobile = this.ticketDetails.passenger_details[0].mobile;
          if (mobile.includes('-')) {
            const parts = mobile.split('-');
            this.selected_mobilenum = parts[1];
          } else {
            this.selected_mobilenum = mobile;
          }
        }
        this.updateDetailsForm.value.country_code = this.selected_Country_code;
        this.commonStorage.setItem('cancelTicketDetails', this.ticketDetails);
        let numberPhone = this.ticketDetails.passenger_details[0].mobile.indexOf("-") > -1 ? this.ticketDetails.passenger_details[0].mobile.split("-")[1] : this.ticketDetails.passenger_details[0].mobile;
        let emailValidation;
        if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
          emailValidation = false;
        } else {
          emailValidation = this.email !== this.ticketDetails.passenger_details[0].email;
        }
      }
    });
  }
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
    const trimmedValue = parseInt(input.value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      return;
    }
  }
  enforceMaxLengthOtp(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 6);
    input.value = sanitizedValue;
  }
  getDroppingPoint() {
    let path2 = "reservation_id=" + this.ticketDetails.reservation_id + "&city_id=" + this.ticketDetails.destination_id;
    this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
      if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
        this.stageDetailsDrop = droppingResult.dropping_stages;
        var x = this.stageDetailsDrop.find(elem => {
          return elem.name == this.ticketDetails.drop_off_details.address;
        });
        this.updateData.droppingStage = x;
        //  this.updateDetailsForm.controls['staged'].setValue(x.name+ ' ' + x.time);
        this.updateDetailsForm.controls['staged'].setValue(x.name + ' ' + x.time);
      } else {
        this.util.showToast(droppingResult.message);
      }
    });
  }
  getBoradingPoint() {
    let path = "reservation_id=" + this.ticketDetails.reservation_id + "&city_id=" + this.ticketDetails.origin_id;
    this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
      console.log("boardingResult", boardingResult);
      this.loader.hideLoadingDefault();
      if (boardingResult.result && boardingResult.result.length) {
        this.stageDetails = [];
        for (let i = 1; i < boardingResult.result.length; i++) {
          this.stageDetails.push({
            id: boardingResult.result[i][1],
            name: boardingResult.result[i][0],
            time: boardingResult.result[i][2]
          });
        }
        var x = this.stageDetails.find(elem => {
          return elem.name == this.ticketDetails.boarding_details.address;
        });
        this.updateData.boardingStage = x;
        this.updateDetailsForm.controls['stage'].setValue(x.name + ' ' + x.time);
        //  this.updateDetailsForm.controls['stage'].setValue(x.name);
        this.pnrNumber = this.ticketDetails.ticket_number;
        if (!this.fromMybooking) {
          this.updateShow = true;
        }
      } else {
        this.util.showToast(boardingResult.message);
      }
    });
  }
  ngOnInit() {
    const today = new Date();
    // this.maxDate = today.toISOString().split('T')[0];
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_6__;
    this.selectedCountry = this.countryData.find(country => country.dialCode === "+91");
    this.validations();
    this.otp_based_authentication_to_modify_ticket = this.commonStorage.getItem('metaData').otp_based_authentication_to_modify_ticket ? this.commonStorage.getItem('metaData').otp_based_authentication_to_modify_ticket : false;
    if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
      this.util.getCountries().subscribe(data => {
        this.countries = data;
      });
    } else {
      this.countries = [];
    }
  }
  ionViewDidLoad() {}
  selectCountry_code() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.metaData.msiteFolder == 'ourbustheme') {
        const reformattedCountries = _this.countryData.map(country => ({
          name: country.name,
          cca2: country.code,
          idd: country.dialCode,
          flags: country.flag
        }));
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": reformattedCountries,
            "isOurbus": 'true'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selectedCountry = null;
          _this.flagSelected = data.flags;
          _this.dialCodeSelected = data.idd;
        }
      } else {
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": _this.countries,
            "isOurbus": 'false'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selected_Country_code = data.idd;
        }
      }
    })();
  }
  departureDateModal() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_4__.CalendarModalPage,
        componentProps: {
          departureDate: _this2.dateService.getToday(),
          showPastDate: false,
          title: "Select Booking Date"
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this2.travelDate = data;
        _this2.updateForm.controls['displayDate'].setValue(_this2.commonService.displayFormatDate(data));
      }
    })();
  }
  validations() {
    this.updateForm = this.formBuilder.group({
      pnrNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_5__.ValidatorService.emailOrPhoneValidator])],
      displayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      otp: ['']
    });
    if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
      this.updateDetailsForm = this.formBuilder.group({
        mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        country_code: [this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        staged: [''],
        email: ['']
      });
    } else {
      this.updateDetailsForm = this.formBuilder.group({
        mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        staged: [''],
        email: ['']
      });
    }
  }
  setDefaultFormData() {
    this.updateDetailsForm.controls['stage'].setValue(this.ticketDetails.boarding_details ? this.ticketDetails.boarding_details.address + (this.ticketDetails.boarding_details.dep_time ? ` (${this.ticketDetails.boarding_details.dep_time})` : '') : '');
    this.updateDetailsForm.controls['staged'].setValue(this.ticketDetails.drop_off_details ? this.ticketDetails.drop_off_details.address + (this.ticketDetails.drop_off_details.arr_time ? ` (${this.ticketDetails.drop_off_details.arr_time})` : '') : '');
    this.updateDetailsForm.controls['email'].setValue(this.ticketDetails.passenger_details[0].cus_email);
    this.updateDetailsForm.controls['mobile_number'].setValue(this.ticketDetails.passenger_details[0].mobile);
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  getFormattedTime() {
    const minutes = Math.floor(this.timerInSeconds / 60);
    const seconds = this.timerInSeconds % 60;
    return `${this.padLeft(minutes)}:${this.padLeft(seconds)}`;
  }
  padLeft(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }
  startTimer() {
    this.timerInSeconds = 59;
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000).subscribe(() => {
      this.timerInSeconds--;
      if (this.timerInSeconds === 0 && this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    });
  }
  onEnterKeyPressed(event) {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    this.updateForm.controls['otp'].setValue(value);
    if (this.isValid()) {
      if (this.updateForm.value.otp != '') {
        var dataCount = this.updateForm.value.otp.length;
        if (dataCount == 6) {
          this.update_btn_disabled = false;
        } else {
          this.update_btn_disabled = true;
        }
      }
    } else {
      this.util.showAlert('Error', 'Please enter valid details');
    }
  }
  resendCode(event) {
    this.otp_value = '';
    this.updateForm.value.otp = '';
    event.preventDefault();
    this.getOtp();
    event.stopPropagation();
  }
  getOtp() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.apiFactory.getTicketDetails_otp(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.updateForm.value.displayDate, true).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (result.code == 200) {
          this.authKey = result.key;
          this.enabled_otp = true;
          this.util.showToast(result.message);
          this.startTimer();
        } else {
          this.util.showToast(result.message);
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlerts("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
        } else {
          this.util.showAlerts("Error Loading", "Something went wrong, please try again after sometime");
        }
      });
      return;
    } else {
      this.util.showAlert('Error', 'Please enter valid details');
    }
  }
  submit_otpForm() {
    this.pnrNumber = this.updateForm.value.pnrNumber;
    this.email = this.updateForm.value.email;
    this.loader.showLoadingDefault();
    this.apiFactory.submit_otp(this.updateForm.value.pnrNumber, this.email, this.updateForm.value.displayDate, this.authKey, this.updateForm.value.otp).subscribe(result => {
      this.loader.hideLoadingDefault();
      if (result.code && result.code == 200) {
        this.ticketDetails = result.result;
        this.util.showToast("OTP verified successfully");
        this.email_value = this.ticketDetails.passenger_details[0].cus_email;
        this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
        if (this.ticketDetails.passenger_details[0].country_code != '') {
          if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
            this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
          } else {
            this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
          }
        } else {
          if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
            if (this.AllowedCountryCodes[0] == '91') {
              this.selected_Country_code = '+91';
            } else {
              this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
            }
          }
        }
        if (this.ticketDetails.passenger_details[0].mobile != '') {
          const mobile = this.ticketDetails.passenger_details[0].mobile;
          if (mobile.includes('-')) {
            const parts = mobile.split('-');
            this.selected_mobilenum = parts[1];
          } else {
            this.selected_mobilenum = mobile;
          }
        }
        this.updateDetailsForm.value.country_code = this.selected_Country_code;
        this.setDefaultFormData();
        this.commonStorage.setItem('cancelTicketDetails', result.result);
        let emailValidation;
        if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
          emailValidation = false;
        } else {
          emailValidation = this.email !== result.result.passenger_details[0].email && this.email !== this.selected_mobilenum;
        }
        let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.result.travel_date;
        let cancelStatus = result.result.ticket_status == 'Cancelled';
        if (!emailValidation && !cancelStatus) {
          this.bookingDetails['origin'] = result.result.origin;
          this.bookingDetails['destination'] = result.result.destination;
          let d = new Date(result.result.travel_date);
          this.bookingDetails['travelDate'] = result.result.travel_date;
          this.bookingDetails['travelDay'] = d.getDate();
          this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
          this.bookingDetails['travelYear'] = d.getFullYear();
          this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
          localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
          let navigationExtras = {
            queryParams: {
              redirectToHome: true
            }
          };
          if (this.title == "View ticket") {
            this.navCtrl.navigateRoot('booking-details', navigationExtras);
            return false;
          }
          let path = "reservation_id=" + result.result.reservation_id + "&city_id=" + result.result.origin_id;
          let path2 = "reservation_id=" + result.result.reservation_id + "&city_id=" + result.result.destination_id;
          this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
            this.loader.hideLoadingDefault();
            if (boardingResult.result && boardingResult.result.length) {
              this.stageDetails = [];
              for (let i = 1; i < boardingResult.result.length; i++) {
                this.stageDetails.push({
                  id: boardingResult.result[i][1],
                  name: boardingResult.result[i][0],
                  time: boardingResult.result[i][2]
                });
              }
              var x = this.stageDetails.find(elem => {
                return elem.name == this.ticketDetails.boarding_details.address;
              });
              this.updateData.boardingStage = x;
              this.pnrNumber = result.result.ticket_number;
              if (this.fromMybooking) {} else {
                this.updateShow = true;
              }
            } else {
              this.util.showToast(boardingResult.message);
            }
          });
          this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
            this.loader.hideLoadingDefault();
            if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
              this.stageDetailsDrop = droppingResult.dropping_stages;
              var x = this.stageDetailsDrop.find(elem => {
                return elem.name == this.ticketDetails.drop_off_details.address;
              });
              this.updateData.droppingStage = x;
            } else {
              this.util.showToast(droppingResult.message);
            }
          });
        } else {
          this.updateShow = false;
          this.loader.hideLoadingDefault();
          if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
            if (emailValidation && !dateValidation) {
              this.util.showAlerts('', "Email and date you entered mismatching");
            } else if (!dateValidation) {
              this.util.showAlerts('', 'Date you entered mismatching');
            } else if (cancelStatus) {
              this.util.showAlerts('', "your ticket is already cancelled");
            }
          } else {
            if (emailValidation && !dateValidation) {
              this.util.showAlerts('', "Email and date you entered mismatching");
            } else if (!dateValidation) {
              this.util.showAlerts('', 'Date you entered mismatching');
            } else if (emailValidation) {
              this.util.showAlerts('', "Email / Phone number you entered mismatching");
            } else if (cancelStatus) {
              this.util.showAlerts('', "your ticket is already cancelled");
            }
          }
        }
        return;
      } else {
        this.loader.hideLoadingDefault();
        setTimeout(() => {
          this.util.showAlerts('', result.message);
        });
        return;
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlerts("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
      } else {
        this.util.showAlerts("Error Loading", "Something went wrong, please try again after sometime");
      }
    });
  }
  submitForm() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.pnrNumber = this.updateForm.value.pnr;
      this.email = this.updateForm.value.email;
      this.displayNewDate = this.updateForm.value.displayDate;
      if (this.appData.newTheme) {
        this.apiFactory.getTicketDetails_update(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.displayNewDate, false, this.isSms, this.isEmail).subscribe(result => {
          this.loader.hideLoadingDefault();
          // debugger;
          if (typeof result.code == "undefined") {
            this.ticketDetails = result;
            this.email_value = this.ticketDetails.passenger_details[0].cus_email;
            this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
            if (this.ticketDetails.passenger_details[0].country_code != '') {
              if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
                this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
              } else {
                this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
              }
            } else {
              if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
                if (this.AllowedCountryCodes[0] == '91') {
                  this.selected_Country_code = '+91';
                } else {
                  this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
                }
              }
            }
            if (this.ticketDetails.passenger_details[0].mobile != '') {
              const mobile = this.ticketDetails.passenger_details[0].mobile;
              if (mobile.includes('-')) {
                const parts = mobile.split('-');
                this.selected_mobilenum = parts[1];
              } else {
                this.selected_mobilenum = mobile;
              }
            }
            this.updateDetailsForm.value.country_code = this.selected_Country_code;
            this.setDefaultFormData();
            this.commonStorage.setItem('cancelTicketDetails', result);
            let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
            let emailValidation;
            if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
              emailValidation = false;
            } else {
              emailValidation = this.email !== result.passenger_details[0].email && this.email !== numberPhone;
            }
            let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
            let cancelStatus = result.ticket_status == 'Cancelled';
            if (!emailValidation && !cancelStatus) {
              this.bookingDetails['origin'] = result.origin;
              this.bookingDetails['destination'] = result.destination;
              let d = new Date(result.travel_date);
              this.bookingDetails['travelDate'] = result.travel_date;
              this.bookingDetails['travelDay'] = d.getDate();
              this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
              this.bookingDetails['travelYear'] = d.getFullYear();
              this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
              localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
              if (this.metaData.msiteFolder == 'ourbustheme') {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false"
                  }
                };
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              } else {
                let navigationExtras;
                if (this.metaData.msiteFolder == 'shyamolitheme') {
                  navigationExtras = {
                    queryParams: {
                      redirectToHome: false,
                      new_booking: "false"
                    }
                  };
                } else {
                  navigationExtras = {
                    queryParams: {
                      redirectToHome: true,
                      new_booking: "false"
                    }
                  };
                }
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              }
              let path = "reservation_id=" + result.reservation_id + "&city_id=" + result.origin_id;
              let path2 = "reservation_id=" + result.reservation_id + "&city_id=" + result.destination_id;
              this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
                this.loader.hideLoadingDefault();
                if (boardingResult.result && boardingResult.result.length) {
                  this.stageDetails = [];
                  for (let i = 1; i < boardingResult.result.length; i++) {
                    this.stageDetails.push({
                      id: boardingResult.result[i][1],
                      name: boardingResult.result[i][0],
                      time: boardingResult.result[i][2]
                    });
                  }
                  var x = this.stageDetails.find(elem => {
                    return elem.name == this.ticketDetails.boarding_details.address;
                  });
                  this.updateData.boardingStage = x;
                  this.pnrNumber = result.ticket_number;
                  if (!this.fromMybooking) {
                    this.updateShow = true;
                  }
                } else {
                  this.util.showToast(boardingResult.message);
                }
              });
              this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
                this.loader.hideLoadingDefault();
                if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
                  this.stageDetailsDrop = droppingResult.dropping_stages;
                  var x = this.stageDetailsDrop.find(elem => {
                    return elem.name == this.ticketDetails.drop_off_details.address;
                  });
                  this.updateData.droppingStage = x;
                } else {
                  this.util.showToast(droppingResult.message);
                }
              });
              return;
            } else {
              this.updateShow = false;
              this.loader.hideLoadingDefault();
              if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
                if (emailValidation && !dateValidation) {
                  this.util.showAlerts('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlerts('', 'Date you entered mismatching');
                } else if (cancelStatus) {
                  this.util.showAlerts('', "your ticket is already cancelled");
                }
                return;
              } else {
                if (emailValidation && !dateValidation) {
                  this.util.showAlerts('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlerts('', 'Date you entered mismatching');
                } else if (emailValidation) {
                  this.util.showAlerts('', "Email / Phone number you entered mismatching");
                } else if (cancelStatus) {
                  this.util.showAlerts('', "your ticket is already cancelled");
                }
                return;
              }
            }
            // removed by dead control flow

          } else {
            if (result.code && result.code == 200 && (this.title === 'Send Ticket' || this.title === 'Email Ticket')) {
              this.util.showToast(result.message);
              this.navCtrl.navigateRoot('tabs/home');
              return;
            } else {
              this.loader.hideLoadingDefault();
              setTimeout(() => {
                this.util.showAlerts('', result.message);
              });
              return;
            }
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlerts("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
            return;
          } else {
            this.util.showAlerts("Error Loading", "Something went wrong, please try again after sometime");
            return;
          }
        });
      } else {
        this.apiFactory.getTicketDetails_update(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.updateForm.value.displayDate, false, this.isSms, this.isEmail).subscribe(result => {
          this.loader.hideLoadingDefault();
          if (typeof result.code == "undefined") {
            this.ticketDetails = result;
            this.email_value = this.ticketDetails.passenger_details[0].cus_email;
            this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
            if (this.ticketDetails.passenger_details[0].country_code != '') {
              if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
                this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
              } else {
                this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
              }
            } else {
              if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
                if (this.AllowedCountryCodes[0] == '91') {
                  this.selected_Country_code = '+91';
                } else {
                  this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
                }
              }
            }
            if (this.ticketDetails.passenger_details[0].mobile != '') {
              const mobile = this.ticketDetails.passenger_details[0].mobile;
              if (mobile.includes('-')) {
                const parts = mobile.split('-');
                this.selected_mobilenum = parts[1];
              } else {
                this.selected_mobilenum = mobile;
              }
            }
            this.updateDetailsForm.value.country_code = this.selected_Country_code;
            this.setDefaultFormData();
            this.commonStorage.setItem('cancelTicketDetails', result);
            let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
            let emailValidation;
            if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
              emailValidation = false;
            } else {
              emailValidation = this.email !== result.passenger_details[0].email && this.email !== numberPhone;
            }
            let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
            let cancelStatus = result.ticket_status == 'Cancelled';
            if (!emailValidation && !cancelStatus) {
              this.bookingDetails['origin'] = result.origin;
              this.bookingDetails['destination'] = result.destination;
              let d = new Date(result.travel_date);
              this.bookingDetails['travelDate'] = result.travel_date;
              this.bookingDetails['travelDay'] = d.getDate();
              this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
              this.bookingDetails['travelYear'] = d.getFullYear();
              this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
              localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
              if (this.metaData.msiteFolder == 'ourbustheme') {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false"
                  }
                };
                if (this.title == "View ticket") {
                  this.router.navigate(['booking-details'], navigationExtras);
                  return false;
                }
              } else {
                let navigationExtras;
                if (this.metaData.msiteFolder == 'shyamolitheme') {
                  navigationExtras = {
                    queryParams: {
                      redirectToHome: false,
                      new_booking: "false"
                    }
                  };
                } else {
                  navigationExtras = {
                    queryParams: {
                      redirectToHome: true,
                      new_booking: "false"
                    }
                  };
                }
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              }
              let path = "reservation_id=" + result.reservation_id + "&city_id=" + result.origin_id;
              let path2 = "reservation_id=" + result.reservation_id + "&city_id=" + result.destination_id;
              this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
                this.loader.hideLoadingDefault();
                if (boardingResult.result && boardingResult.result.length) {
                  this.stageDetails = [];
                  for (let i = 1; i < boardingResult.result.length; i++) {
                    this.stageDetails.push({
                      id: boardingResult.result[i][1],
                      name: boardingResult.result[i][0],
                      time: boardingResult.result[i][2]
                    });
                  }
                  var x = this.stageDetails.find(elem => {
                    return elem.name == this.ticketDetails.boarding_details.address;
                  });
                  this.updateData.boardingStage = x;
                  this.pnrNumber = result.ticket_number;
                  if (this.fromMybooking) {} else {
                    this.updateShow = true;
                  }
                } else {
                  this.util.showToast(boardingResult.message);
                }
              });
              this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
                this.loader.hideLoadingDefault();
                if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
                  this.stageDetailsDrop = droppingResult.dropping_stages;
                  var x = this.stageDetailsDrop.find(elem => {
                    return elem.name == this.ticketDetails.drop_off_details.address;
                  });
                  this.updateData.droppingStage = x;
                } else {
                  this.util.showToast(droppingResult.message);
                }
              });
            } else {
              this.updateShow = false;
              this.loader.hideLoadingDefault();
              if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
                if (emailValidation && !dateValidation) {
                  this.util.showAlerts('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlerts('', 'Date you entered mismatching');
                } else if (cancelStatus) {
                  this.util.showAlerts('', "your ticket is already cancelled");
                }
              } else {
                if (emailValidation && !dateValidation) {
                  this.util.showAlerts('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlerts('', 'Date you entered mismatching');
                } else if (emailValidation) {
                  this.util.showAlerts('', "Email / Phone number you entered mismatching");
                } else if (cancelStatus) {
                  this.util.showAlerts('', "your ticket is already cancelled");
                }
              }
            }
            return;
          } else {
            if (result.code && result.code == 200 && (this.title === 'Send Ticket' || this.title === 'Email Ticket')) {
              this.util.showToast(result.message);
              this.navCtrl.navigateRoot('tabs/home');
              return;
            } else {
              this.loader.hideLoadingDefault();
              setTimeout(() => {
                this.util.showAlerts('', result.message);
              });
              return;
            }
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlerts("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
          } else {
            this.util.showAlerts("Error Loading", "Something went wrong, please try again after sometime");
          }
        });
      }
    } else {
      this.util.showAlert('Error', 'Please enter valid details');
    }
  }
  submitForm1() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      if (this.selected_name.action == 'cancel_ticket') {
        this.continueToCancel();
      } else if (this.selected_name.action == 'update_ticket') {
        let navigationExtras = {
          queryParams: {
            title: "Update ticket",
            from_book_page: false,
            otp_enabled: true
          }
        };
        this.navCtrl.navigateForward('update-ticket', navigationExtras);
        this.submitForm();
      } else if (this.selected_name.action == 'view_ticket') {
        this.submitForm();
      } else if (this.selected_name.action == 'download_ticket') {
        this.downloadTicket();
      } else {
        this.pnrNumber = this.updateForm.value.pnr;
        this.email = this.updateForm.value.email;
      }
    } else {
      this.util.showAlert('Error', 'Please enter valid details');
    }
  }
  selectBoardingStage() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
        componentProps: {
          "list": 8,
          "bpdpList": _this3.stageDetails,
          "title": 'Please select a boarding point'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this3.updateDetailsForm.controls['stage'].setValue(data.name + ' (' + data.time + ')');
        _this3.updateData.boardingStage = data;
      }
      _this3.commonStorage.setItem('bpdpList', data);
    })();
  }
  selectDroppingStage() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
        componentProps: {
          "list": 8,
          "bpdpList": _this4.stageDetailsDrop,
          "title": 'Please select a dropping point'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this4.updateDetailsForm.controls['staged'].setValue(data.name + ' (' + data.time + ')');
        _this4.updateData.droppingStage = data;
      }
      _this4.commonStorage.setItem('bpdpListDropping', data);
    })();
  }
  isDataValid() {
    if (this.updateDetailsForm.valid) {
      return true;
    }
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  removeplus(part) {
    return part.replace('+', '');
  }
  updateDetails() {
    if (this.updateData && this.updateData.boardingStage && this.updateData.boardingStage.id) {
      if (this.isDataValid()) {
        if (!this.util.checkConnection()) {
          return false;
        }
        let path;
        this.loader.showLoadingDefault();
        if (this.otp_based_authentication_to_modify_ticket && this.from_otp_enabled) {
          if (this.updateData && this.updateData.droppingStage && this.updateData.droppingStage.id) {
            path = "pnr_number=" + this.pnrNumber + "&phone_number=" + this.updateDetailsForm.value.mobile_number + "&boarding_at=" + this.updateData.boardingStage.id + "&country_code=" + this.removeplus(this.updateDetailsForm.value.country_code) + '&dropping_at=' + this.updateData.droppingStage.id + '&email_id=' + this.updateDetailsForm.value.email;
          }
        } else {
          path = "pnr_number=" + this.pnrNumber + "&phone_number=" + this.updateDetailsForm.value.mobile_number + "&boarding_at=" + this.updateData.boardingStage.id + "&country_code=" + this.removeplus(this.updateDetailsForm.value.country_code);
        }
        this.apiFactory.updateTicket(path).subscribe(result => {
          this.loader.hideLoadingDefault();
          if (result && result.code == 200) {
            this.util.showAlerts('SUCCESS', result.message);
            this.isRoundTrip = this.commonStorage.localGet('isRoundTrip');
            if (this.isRoundTrip) {
              let navigationExtras = {
                queryParams: {
                  redirectToHome: true,
                  new_booking: false,
                  is_roundTrip: true
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
              this.commonStorage.localRemove('isRoundTrip');
              this.isRoundTrip = false;
            } else {
              let navigationExtras = {
                queryParams: {
                  redirectToHome: true,
                  new_booking: false
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
            }
          } else {
            this.util.showAlerts('FAILURE', result.message);
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlerts("ERROR_LOADING", "INTERNET NOT CONNECTED PLEASE CONNECT INTERNET AND TRY AFTER AGAIN");
          } else {
            this.util.showAlerts("ERROR_LOADING", "SOMETHING WENT WRONG PLEASE TRY AFTER SOMTIME");
          }
          this.ex.call('UpdateTicketPage', 'updateDetails() --> this.apiFactory.updateTicket(path)', err, '');
        });
      }
    } else {
      this.util.showToast('Please select a different boarding point');
    }
  }
  onInputChange(ev) {
    let mob = this.updateDetailsForm.value.mobile_number.toString();
    if (mob.length > this.phoneNumCount) {
      this.updateDetailsForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    }
  }
  sbOnMobileInput(ev) {
    var _ref, _ref2, _ev$detail$value, _ev$detail;
    const host = ev === null || ev === void 0 ? void 0 : ev.target;
    const isIonInput = host && host.tagName === 'ION-INPUT';
    const nativeInput = isIonInput ? host.querySelector('input') : host;
    const raw = String((_ref = (_ref2 = (_ev$detail$value = ev === null || ev === void 0 || (_ev$detail = ev.detail) === null || _ev$detail === void 0 ? void 0 : _ev$detail.value) !== null && _ev$detail$value !== void 0 ? _ev$detail$value : host === null || host === void 0 ? void 0 : host.value) !== null && _ref2 !== void 0 ? _ref2 : nativeInput === null || nativeInput === void 0 ? void 0 : nativeInput.value) !== null && _ref !== void 0 ? _ref : '');
    const maxPhoneCount = Number(this.phoneNumCount) > 0 ? Number(this.phoneNumCount) : 18;
    let value = raw.replace(/[^0-9]/g, '');
    if (value.length > maxPhoneCount) {
      value = value.substring(0, maxPhoneCount);
    }
    if (value && Number(value) === 0) {
      value = '';
    }
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    if (isIonInput && host.value !== value) {
      host.value = value;
    }
    this.updateDetailsForm.controls['mobile_number'].setValue(value);
    this.selected_mobilenum = value;
  }
  sbSubmitUpdateDetails() {
    var _control$value;
    const control = this.updateDetailsForm.controls['mobile_number'];
    const value = String((_control$value = control.value) !== null && _control$value !== void 0 ? _control$value : '').trim();
    const phoneCount = Number(this.phoneNumCount);
    const lengthOk = phoneCount > 0 ? value.length === phoneCount : value.length > 0 && value.length <= 18;
    const isValidMobile = /^[0-9]+$/.test(value) && Number(value) !== 0 && lengthOk;
    if (!isValidMobile) {
      control.markAsTouched();
      control.setErrors({
        ...(control.errors || {}),
        sbInvalidMobile: true
      });
      this.util.showToast('Invalid Mobile number');
      return false;
    }
    return this.updateDetails();
  }
  isValid() {
    if (this.updateForm.valid || this.fromMybooking) {
      return true;
    }
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  toggleOptions() {
    this.optionsVisible = !this.optionsVisible;
  }
  updateValue(action) {
    this.selected_name = action;
    this.optionsVisible = false;
    // keep UI title in sync with selected option (fixes stale title from URL)
    this.title = action.label;
    if (action.action === 'view_ticket') {
      // show the entry form (not the update UI) and disable OTP flow
      this.updateShow = false;
      this.from_otp_enabled = false;
      this.enabled_otp = false;
    } else if (action.action === 'cancel_ticket') {
      // existing behavior
    } else if (action.action === 'update_ticket') {
      // enable update flow (OTP as required)
      this.updateShow = false;
      this.from_otp_enabled = true;
      this.enabled_otp = true;
    } else if (action.action === 'download_ticket') {
      this.downloadTicket();
    } else if (action.action === 'reschedule_ticket') {
      this.navCtrl.navigateForward('prepostone');
    }
  }
  downloadTicket() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.apiFactory.getTicketDetails(this.updateForm.value.pnrNumber).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          if (result.sharing_pdf_link != '') {
            let newText = result.sharing_pdf_link.replace('.jpsb-qa1.', '.');
            window.open(newText);
          } else {
            this.util.showToast("Invalid Pdf link");
          }
        } else {
          setTimeout(() => {
            this.util.showAlert('', result.message);
          });
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {} else {}
      });
    }
  }
  continueToCancel() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.pnrNumber = this.updateForm.value.pnrNumber;
      this.email = this.updateForm.value.email;
      this.apiFactory.getTicketDetails(this.updateForm.value.pnrNumber).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          this.commonStorage.setItem('cancelTicketDetails', result);
          let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
          let emailValidation = this.email !== result.passenger_details[0].email && this.email !== numberPhone;
          let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
          let cancelStatus = result.ticket_status == 'Cancelled';
          if (!emailValidation && !cancelStatus) {
            let navigationExtras = {
              state: {
                user: this.updateForm.value.email
              }
            };
            this.router.navigate(['cancel-confirmation-ticket'], navigationExtras);
          } else {
            if (emailValidation && !dateValidation) {
              this.util.showAlerts('', "Email and date you entered mismatching");
            } else if (emailValidation) {
              this.util.showAlerts('', "Email / Phone number you entered mismatching");
            } else if (cancelStatus) {
              this.util.showAlerts('', "your ticket is already cancelled");
            }
          }
        } else {
          setTimeout(() => {
            this.util.showAlerts('', result.message);
          });
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {} else {}
      });
    } else {
      this.util.showAlert('Error', 'Please enter valid details');
    }
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.travelDate = result;
    this.updateForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
  }
  displayMybookings(date) {
    var _date;
    date = (_date = date) === null || _date === void 0 ? void 0 : _date.substring(0, 10);
    var newDate = new Date(date);
    const result = this.dateService.formattedDateData(newDate);
    this.travelDate = result;
    this.updateForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
    return this.commonService.displayFormatDate(result);
  }
}
_UpdateTicketPage = UpdateTicketPage;
_UpdateTicketPage.ɵfac = function UpdateTicketPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_9__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_10__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_12__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_13__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_14__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_15__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_18__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_20__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_21__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController));
};
_UpdateTicketPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _UpdateTicketPage,
  selectors: [["app-update-ticket"]],
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["resendButton", ""], ["popoverDatetime", ""], ["sbResendButton", ""], [4, "ngIf"], ["class", "shyaoli-seat-layout-header", 4, "ngIf"], [3, "ngClass"], ["mode", "md", "slot", "start", 2, "position", "absolute"], [2, "text-align", "center", "font-weight", "700"], [1, "theme1", "themeone"], ["class", "center-div", 4, "ngIf"], [1, "center-div"], [1, "card-row"], [3, "ngSubmit", "formGroup"], [1, "box"], ["formControlName", "pnrNumber", 1, "themeone-input"], ["type", "email", "formControlName", "email", 1, "themeone-input"], ["tappable", "", 1, "box", 3, "click"], [2, "--padding-start", "8px"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], [1, "txt-lbl"], ["ion-button", "", 1, "txt-main"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "themeone-input", 2, "display", "none"], ["padding", ""], ["mode", "md", "expand", "block", "type", "submit", 3, "ngClass"], [1, "card-row", 2, "margin-top", "0px"], ["size", "12"], [1, "box", "themeone-input"], ["size", "3"], [1, "country-select-wrapper"], ["mode", "md", "interface", "popover", "interface", "popover", "formControlName", "country_code", "class", "custom-country-select", 4, "ngIf"], ["name", "caret-down-outline", "class", "select-icon", 4, "ngIf"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], ["size", "9"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "txt-input", 2, "--padding-bottom", "6px", 3, "ngModelChange", "ngModel"], [2, "font-size", "16px", "border", "none", 3, "click"], ["formControlName", "stage", "name", "text", 1, "txt-input"], ["name", "chevron-down-outline", "slot", "end", 2, "font-size", "18px"], [1, "ion-margin-top"], ["size", "12", 1, "ion-margin-top"], ["mode", "md", "expand", "block", "type", "submit", 1, "ticket", "ion-margin-top", 2, "margin", "0px"], ["type", "text", "readonly", "", 2, "display", "none"], ["mode", "md", "interface", "popover", "interface", "popover", "formControlName", "country_code", 1, "custom-country-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "caret-down-outline", 1, "select-icon"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 3, "click", "ngModelChange", "ngModel"], ["name", "caret-down-outline", "style", "position: absolute;right: 10px;bottom: 10px;", 4, "ngIf"], ["name", "caret-down-outline", 2, "position", "absolute", "right", "10px", "bottom", "10px"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head", 2, "text-transform", "capitalize"], ["formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl", 2, "min-height", "44px", "margin-top", "20px"], ["type", "email", "formControlName", "email", "label", "Email/Phone Number", "labelPlacement", "floating", 1, "txt-lbl", 2, "min-height", "44px", "margin-top", "20px"], ["tappable", "", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end", 2, "margin-bottom", "4px", "margin-top", "36px"], [1, "txt-lbl", 2, "margin-bottom", "4px", "margin-top", "36px"], ["type", "text", "readonly", "", "formControlName", "displayDate", 2, "display", "none"], ["padding", "", 4, "ngIf"], ["class", "getOtp", 3, "click", 4, "ngIf"], [1, "getOtp", 3, "click"], [1, "resendOtpDiv"], [4, "ngIf", "ngIfElse"], [1, "resendTimeText"], [1, "resendText", 3, "click"], ["type", "text", "label", "Enter Otp", "labelPlacement", "floating", "formControlName", "otp", "maxlength", "6", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click", "disabled"], [1, "txt-input", 2, "margin-left", "24px"], ["size", "2.8", 1, "country-code"], ["mode", "md", "style", "--padding-top: 12px;", "interface", "popover", "formControlName", "country_code", 4, "ngIf"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", "style", "margin-bottom: -5px;", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], ["name", "chevron-down-outline", 1, "dropdown-arrow", 2, "height", "50%", "width", "24px"], ["size", "9", "size", "9", "offset", "0.2", 2, "border-bottom", "1px solid #a2a2a2"], [2, "font-size", "15px", "color", "#141313", "margin-bottom", "2px"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "txt-input", 3, "ngModelChange", "ngModel"], ["style", "font-size: 13px;\n          margin: 10px 0px 10px 22px;\n          color: var(--primary);", 4, "ngIf"], ["style", "padding: 5px;", 4, "ngIf"], [2, "font-size", "15px", "color", "#121212", "margin-bottom", "2px", "margin-left", "17px"], ["placeholder", "Select boarding stage", "formControlName", "stage", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", "font-size", "18px", 3, "click"], ["slot", "end", "mode", "md", "src", "././assets/icon/arrow-drop-down-big.svg", 1, "modify-dropDown"], ["mode", "md", "interface", "popover", "formControlName", "country_code", 2, "--padding-top", "12px"], ["slot", "icon", "name", "chevron-down-outline", "color", "black", 2, "font-size", "18px", "margin-left", "8px"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 2, "margin-bottom", "-5px", 3, "click", "ngModelChange", "ngModel"], [2, "font-size", "13px", "margin", "10px 0px 10px 22px", "color", "var(--primary)"], [2, "padding", "5px"], ["type", "email", "label", "E-mail Address", "labelPlacement", "floating", "formControlName", "email", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["label", "Select dropping stage", "labelPlacement", "floating", "formControlName", "staged", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", "font-size", "18px", 3, "click"], [1, "background-cl"], ["mode", "md", 1, "background-cl", 3, "click"], ["defaultHref", "/tabs/more"], [2, "font-weight", "bold"], [1, "seabirdTheme", 2, "--background", "#F1F7FA"], [1, "seabird_row", 3, "click"], ["size", "9", 1, "seabird_col"], ["size", "3", 1, "seabird_col", 2, "justify-content", "end"], [2, "font-size", "20px", 3, "name"], ["style", "box-shadow: 0px 0px 4px 0px #00000040; border: none;", "class", "seabird_row", 4, "ngIf"], [1, "seabird_row", 2, "box-shadow", "0px 0px 4px 0px #00000040", "border", "none"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], ["class", "seabird_col_line", "size", "12", 3, "click", 4, "ngIf"], ["size", "12", 1, "seabird_col_line", 3, "click"], [2, "filter", "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)", 3, "src"], [1, "seabird_row", 2, "background", "white", "padding", "0px"], [1, "seabird_item", 3, "ngSubmit", "formGroup"], [1, "seabird_col_line1"], [1, "seabird_item", "seabird-border-bottom", 2, "border-top-left-radius", "15px", "border-top-right-radius", "15px"], ["formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl", 2, "margin-top", "0px !important"], [1, "seabird_item", "seabird-border-bottom"], ["type", "email", "formControlName", "email", "label", "Email/Phone number", "labelPlacement", "floating", 1, "txt-lbl", 2, "margin-top", "0px !important"], ["tappable", "", 1, "seabird_item", "seabird-clickable", 2, "border-radius", "10px", 3, "click"], ["size", "8", 1, "seabird_col_line1"], [1, "txt-lbl", 2, "margin-top", "0px !important"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "seabird-input-hidden"], ["size", "4", 1, "seabird_col_line1", "seabird-select-date"], ["name", "calendar-outline"], ["style", "padding: 10px;", "padding", "", 4, "ngIf"], ["class", "get-otp-text", 3, "click", 4, "ngIf"], [1, "get-otp-text", 3, "click"], [1, "resend-otp-text"], [1, "resend-otp-disabled"], [1, "resend-otp-enabled", 3, "click"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", "maxlength", "6", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel"], ["padding", "", 2, "padding", "10px"], ["mode", "md", "expand", "block", "type", "submit", 1, "seabird-login-btn", 3, "click"], ["mode", "md", "expand", "block", 1, "seabird-login-btn", 3, "click", "disabled"], [1, "seabird_row", 2, "background-color", "#ffff", "margin", "12px", "border-radius", "10px"], [2, "color", "transparent"], ["style", "--background:#ffff;border-bottom: 1px solid #626262;", "interface", "popover", "formControlName", "country_code", "class", "custom-select", 4, "ngIf"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", "style", "margin-left:13px", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], [2, "font-size", "15px", "color", "#444", "margin-bottom", "2px"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "txt-input", 2, "border-bottom", "1px solid #626262", 3, "ngModelChange", "ngModel"], [2, "margin-left", "16px"], ["lines", "none", 2, "font-size", "16px", "--background", "#fff", "border-bottom", "1px solid #626262", 3, "click"], ["formControlName", "stage", "name", "text", 1, "txt-input", 2, "display", "contents"], ["mode", "md", "shape", "round", "expand", "block", "type", "submit", 1, "seabird-login-btn", "ion-margin-top"], ["interface", "popover", "formControlName", "country_code", 1, "custom-select", 2, "--background", "#ffff", "border-bottom", "1px solid #626262"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 2, "margin-left", "13px", 3, "click", "ngModelChange", "ngModel"], [1, "ourbustheme"], [1, "head", 2, "margin-left", "25%"], ["padding", "", 1, "ourbustheme"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "input-spacing"], ["fill", "outline", "formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl"], ["fill", "outline", "type", "email", "formControlName", "email", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl", 3, "label"], ["lines", "none", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["fill", "outline", "label", "Journey Date", "labelPlacement", "floating", "type", "text", "formControlName", "displayDate", 1, "ourbus_inputText", "txt-lbl"], ["id", "dob", "trigger", "open-date-input-3", 1, "ourbus-Modal"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input input-spacing", 4, "ngIf"], ["mode", "md", "color", "success", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "max"], ["style", "    text-align: center;\n\n          color:var(--iconsAndButtonsColor);\n          font-size: 14px;\n\n          padding-top: 10px;\n            margin-bottom: 14px;", 3, "click", 4, "ngIf"], [2, "text-align", "center", "color", "var(--iconsAndButtonsColor)", "font-size", "14px", "padding-top", "10px", "margin-bottom", "14px", 3, "click"], [2, "text-align", "center", "color", "var(--iconsAndButtonsColor)", "font-size", "14px", "padding-top", "10px", "background", "transparent", "margin-bottom", "14px"], [2, "font-size", "14px", "font-weight", "700", "color", "#9B9B9B"], [2, "font-size", "14px", "font-weight", "700", "margin-bottom", "0", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["fill", "outline", "label", "Enter OTP", "labelPlacement", "floating", "formControlName", "otp", "maxlength", "6", "inputmode", "numeric", "type", "tel", 1, "ourbus_custom_input1", "txt-lbl", 3, "ionChange", "keyup", "ngModelChange", "ngModel"], [1, "txt-input"], ["size", "0.5"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["fill", "outline", "type", "tel", "maxlength", "10", "label", "Mobile Number", "labelPlacement", "floating", "formControlName", "mobile_number", 1, "ourbus_custom_input1", "txt-input", "ourbus_labelSet", 3, "ionChange", "ngModelChange", "ngModel"], ["style", "font-size: 13px; margin: 10px 0px 10px 22px;color: var(--primary);", 4, "ngIf"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 3, "click"], ["fill", "outline", "formControlName", "stage", "name", "text", "label", "Select boarding stage", "labelPlacement", "floating", 1, "txt-lbl", 2, "margin", "7px 0"], ["mode", "md", "expand", "block", "type", "submit", 1, "ourbus-login-btn"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline"], [2, "margin", "2px 4px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", 3, "readonly"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input ourbus_item_outline", 4, "ngIf"], ["formControlName", "country_code", "placeholder", "Code", 2, "height", "58px", 3, "click", "ngModel"], ["formControlName", "country_code", "placeholder", "Code", 2, "height", "58px", 3, "click", "ngModelChange", "ngModel"], ["fill", "outline", "type", "email", "formControlName", "email", "label", "E-mail Address", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["fill", "outline", "label", "Select dropping stage", "labelPlacement", "floating", "formControlName", "staged", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", 3, "value"], [1, "shyaoli-seat-layout-header"], [2, "box-shadow", "none"], ["mode", "md", 1, "h50", "bg-cl", 2, "--border-width", "0px"], ["slot", "start", "mode", "md", 2, "position", "absolute"], [1, "head", 2, "text-align", "center", "font-size", "17px"], [1, "shyamoli-card", 3, "ngSubmit", "formGroup"], [1, "shyamoli-input-group"], [1, "shyamoli-input-label"], [1, "shyamoli-item"], ["formControlName", "pnrNumber", "placeholder", "PNR Number", 1, "shyamoli-input", 2, "height", "55px"], ["type", "email", "formControlName", "email", "placeholder", "Email/Phone Number", 1, "shyamoli-input", 2, "height", "55px"], [1, "subheading"], ["tappable", "", 1, "shyamoli-item", "shyamoli-date-item", 3, "click"], ["src", "./assets/icon/shyamoli-calendar.svg", "alt", "", "slot", "start", 1, "shyamoli-icon"], ["mode", "md", "type", "text", "readonly", "", "formControlName", "displayDate", 2, "height", "55px", "font-size", "14px"], ["class", "shyamoli-item", 4, "ngIf"], ["class", "shyamoli-otp-link", 3, "click", 4, "ngIf"], ["class", "resendOtpDiv", 4, "ngIf"], [1, "shyamoli-otp-link", 3, "click"], [1, "shyamoli-resend-timer"], [1, "shyamoli-resend-btn", 3, "click"], ["type", "text", "label", "Enter Otp", "labelPlacement", "floating", "formControlName", "otp", "maxlength", "6", 1, "shyamoli-input", 3, "keyup", "ngModelChange", "ngModel"], ["mode", "md", "expand", "block", 1, "login-btn", "shyamoli-button", 3, "click", "disabled"], ["mode", "md", "expand", "block", "type", "submit", 1, "shyamoli-button"], [1, "txt-input", "shyamoli-item-row"], ["size", "2.8", 1, "country-code", "shyamoli-item"], ["interface", "popover", "formControlName", "country_code", "class", "shyamoli-input", 4, "ngIf"], ["class", "shyamoli-input", "formControlName", "country_code", "placeholder", "Code", "style", "margin-left: 10px;", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], ["size", "9", "offset", "0.2", 1, "shyamoli-item"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "shyamoli-input", 2, "margin-left", "5px", 3, "ngModelChange", "ngModel"], ["class", "shyamoli-warning", 4, "ngIf"], [2, "padding", "5px 0px"], [1, "shyamoli-label"], [1, "shyamoli-item", "shyamoli-date-item"], ["placeholder", "Select boarding stage", "formControlName", "stage", 1, "shyamoli-input", 2, "height", "55px", 3, "click"], ["placeholder", "Select dropping stage", "formControlName", "staged", 1, "shyamoli-input", 2, "height", "55px", 3, "click"], ["interface", "popover", "formControlName", "country_code", 1, "shyamoli-input"], ["formControlName", "country_code", "placeholder", "Code", 1, "shyamoli-input", 2, "margin-left", "10px", 3, "click", "ngModelChange", "ngModel"], [1, "shyamoli-warning"], ["type", "email", "label", "E-mail Address", "labelPlacement", "floating", "formControlName", "email", 1, "shyamoli-input", 2, "height", "55px", 3, "ngModelChange", "ngModel"], [1, "sb-page-header"], [1, "sb-toolbar"], [1, "sb-results-appbar", "sb-pax-appbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", "defaultHref", "/tabs/more", 1, "sb-auth-back"], [1, "sb-appbar__text"], [1, "sb-appbar__title"], [1, "sb-pax"], [1, "sb-pax__form"], [1, "sb-pax-card"], ["type", "button", 1, "sb-pfield", "sb-select-row", 3, "click", "disabled"], [1, "sb-pfield__label"], [1, "sb-pfield__row"], [1, "sb-select-row__value"], ["class", "sb-select-row__chevron", "aria-hidden", "true", 3, "name", 4, "ngIf"], ["class", "sb-ut-options", 4, "ngIf"], ["aria-hidden", "true", 1, "sb-select-row__chevron", 3, "name"], [1, "sb-ut-options"], ["type", "button", "class", "sb-menu-row", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-menu-row", 3, "click"], [1, "sb-menu-row__icon"], ["alt", "", 3, "src"], [1, "sb-menu-row__title"], [1, "sb-pax-card", 3, "ngSubmit", "formGroup"], [1, "sb-pfield"], ["formControlName", "pnrNumber", "placeholder", "Enter PNR number", "aria-label", "PNR number", 1, "sb-pfield__input"], ["type", "email", "formControlName", "email", "placeholder", "Enter email or phone number", "aria-label", "Email or phone number", 1, "sb-pfield__input"], ["tappable", "", 1, "sb-pfield", "sb-auth__date", 3, "click"], ["type", "text", "readonly", "", "formControlName", "displayDate", "placeholder", "Select date", "aria-label", "Journey date", 1, "sb-pfield__input"], ["aria-hidden", "true", 1, "sb-auth__icon"], ["class", "sb-ut-otp", 4, "ngIf"], ["class", "sb-pfield", 4, "ngIf"], ["type", "button", "class", "sb-btn-solid sb-auth__btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "sb-btn-solid sb-auth__btn", 3, "disabled", "click", 4, "ngIf"], [1, "sb-ut-otp"], ["type", "button", "class", "sb-auth__link-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-auth__link-btn", 3, "click"], ["class", "sb-ut-otp__timer", 4, "ngIf", "ngIfElse"], [1, "sb-ut-otp__timer"], ["type", "text", "formControlName", "otp", "maxlength", "6", "placeholder", "Enter OTP", "aria-label", "OTP", 1, "sb-pfield__input", 3, "keyup", "ngModelChange", "ngModel"], ["type", "button", 1, "sb-btn-solid", "sb-auth__btn", 3, "click"], ["type", "button", 1, "sb-btn-solid", "sb-auth__btn", 3, "click", "disabled"], [1, "sb-pfield", "sb-pfield--phone"], ["class", "sb-pfield__code", "interface", "popover", "mode", "md", "formControlName", "country_code", "aria-label", "Country code", 4, "ngIf"], ["class", "sb-pfield__code", "formControlName", "country_code", "placeholder", "Code", "aria-label", "Country code", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "tel", "inputmode", "numeric", "aria-label", "Mobile number", 1, "sb-pfield__input", 3, "ionInput", "ngModelChange", "ngModel"], ["class", "sb-pax-warn", "role", "alert", 4, "ngIf"], ["formControlName", "stage", "name", "text", "aria-hidden", "true", 1, "sb-ut-hidden"], ["name", "chevron-down-outline", "aria-hidden", "true", 1, "sb-select-row__chevron"], ["type", "submit", 1, "sb-btn-solid", "sb-auth__btn"], ["interface", "popover", "mode", "md", "formControlName", "country_code", "aria-label", "Country code", 1, "sb-pfield__code"], ["formControlName", "country_code", "placeholder", "Code", "aria-label", "Country code", 1, "sb-pfield__code", 3, "click", "ngModelChange", "ngModel"], ["role", "alert", 1, "sb-pax-warn"]],
  template: function UpdateTicketPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, UpdateTicketPage_ng_container_0_Template, 10, 4, "ng-container", 3)(1, UpdateTicketPage_ng_container_1_Template, 10, 3, "ng-container", 3)(2, UpdateTicketPage_ng_container_2_Template, 16, 5, "ng-container", 3)(3, UpdateTicketPage_ng_container_3_Template, 10, 3, "ng-container", 3)(4, UpdateTicketPage_ng_container_4_Template, 10, 3, "ng-container", 4)(5, UpdateTicketPage_ng_container_5_Template, 21, 9, "ng-container", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.ourbus-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n  margin-top: 11px;\n}\n\n.ion-input[_ngcontent-%COMP%]::part(label) {\n  margin-bottom: 11px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%] {\n  \n\n  margin: 0px 0 5px;\n  background-color: #fff;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .code.item-md[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .code.item-ios[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: center;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  left: -5px;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .select-md[_ngcontent-%COMP%], \non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .select-ios[_ngcontent-%COMP%] {\n  padding: 0;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border: 0;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .item-md.code[_ngcontent-%COMP%], \non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .item-ios.code[_ngcontent-%COMP%] {\n  height: 35px;\n  min-height: 35px;\n  padding: 0;\n  position: absolute;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: block;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.6em;\n  color: #555;\n  position: absolute;\n  bottom: 11px;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  position: relative;\n}\non[_ngcontent-%COMP%]   .passenger-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 100%;\n  background-color: #fff !important;\n  margin: 0px;\n  padding: 16px;\n  height: 90vh;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  background-color: #fff !important;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ADADAD;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n  width: 100%;\n  height: 50px;\n  --inner-border-width: 0px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n  margin-top: 6px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%]::part(native) {\n  background-color: #F2C21A;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-weight: 600;\n  height: 45px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nion-select[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nion-input[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.themeone-input[_ngcontent-%COMP%] {\n  color: #000;\n  height: 50px;\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n}\n\n\n\n.custom-popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.custom-popover[_ngcontent-%COMP%]   .popover-list[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 16px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F1C11A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  position: fixed;\n  bottom: 60px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone-login-btn-2[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone[_ngcontent-%COMP%]   .sc-ion-input-ios-h[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n}\n\n\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-interface[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  border: 1px solid darkgray;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-popover[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: white;\n}\n\n.sc-ion-select-popover[_ngcontent-%COMP%]   sc-ion-label-ios-h[_ngcontent-%COMP%]   sc-ion-label-ios-s[_ngcontent-%COMP%]   ios[_ngcontent-%COMP%]   hydrated[_ngcontent-%COMP%] {\n  text-overflow: unset !important;\n  white-space: normal !important;\n  overflow: auto !important;\n}\n\n.seabird_row[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  margin: 15px;\n  border: 0.5px solid #626262;\n  border-radius: 15px;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-bottom: 0.5px dotted #999999;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.seabird_col_line1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 0px;\n  font-size: 14px;\n}\n\n.seabird_item[_ngcontent-%COMP%] {\n  --background: #fff;\n  width: 100%;\n  --min-height: 34px;\n  --border-color: white;\n}\n\n.seabird-border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #626262;\n}\n\n.seabird-clickable[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.seabird-input-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.seabird-select-date[_ngcontent-%COMP%] {\n  color: #2B28CE;\n}\n\n.get-otp-text[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resend-otp-disabled[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #9B9B9B;\n  text-decoration: underline;\n}\n\n.resend-otp-enabled[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n}\n\n.seabird-login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText) !important;\n  text-transform: initial;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 14px;\n  height: 50px;\n  --border-radius: 20px;\n}\n\n.input-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: transparent;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}\n\n.modify-dropDown[_ngcontent-%COMP%] {\n  width: 18px;\n}\n\n.getOtp[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resendOtpDiv[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resendText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n}\n\n.resendTimeText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #9B9B9B;\n  text-decoration: underline;\n}\n\n.ourbus_item_outline[_ngcontent-%COMP%] {\n  outline: 1px solid #D9D9D9 !important;\n  margin-top: 6px !important;\n  padding-top: 0px !important;\n  border-radius: 3px !important;\n  height: 55px !important;\n}\n\n.ourbus_custom_input1[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  --highlight-color-focused:#D9D9D9 !important;\n  --placeholder-color:#000 !important;\n}\n\n.cbus_header[_ngcontent-%COMP%] {\n  --background: #191966;\n}\n\n.theme1_header[_ngcontent-%COMP%] {\n  --background: var(--homeBgColor) !important;\n}\n\n.country-select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 20px; \n\n}\n\n.custom-country-select[_ngcontent-%COMP%] {\n  text-align: center;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: transparent;\n  --border-width: 0;\n  box-shadow: none;\n}\n\nion-select-option[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 4px; \n\n  color: gray;\n  \n\n}\n\n.modify-ticket-title[_ngcontent-%COMP%] {\n  color: var(--viewBgColor);\n}\n\nion-input[_ngcontent-%COMP%]::part(label) {\n  margin-top: -17px;\n}\n\n  .select-popover {\n  --width: 100px; \n\n  --max-width: 260px;\n  margin-left: 18px;\n}\n\n  .select-popover .popover-content {\n  width: 260px;\n  max-width: 260px;\n}\n\n.country-code[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #a2a2a2;\n  padding-left: 0px;\n  display: flex;\n  align-items: end;\n}\n\n\n\n.shyamoli-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 22px 20px;\n  border-radius: 20px;\n  border: 1px solid #DFDFDF;\n}\n\n\n\n.shyamoli-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --inner-padding-end: 0px;\n  border: 1px solid #DFDFDF;\n  border-radius: 14px;\n}\n\n\n\n.shyamoli-item-row[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n\n\n.shyamoli-input[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nion-select.shyamoli-input[_ngcontent-%COMP%]::part(container) {\n  width: 60px; \n\n  display: block;\n  text-align: center; \n\n}\n\n\n\n.shyamoli-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #7a7a7a;\n  font-weight: 500;\n}\n\n\n\n.shyamoli-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n\n\n.shyamoli-warning[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 6px;\n  font-size: 13px;\n}\n\n\n\n.shyamoli-date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  --background: #ffffff;\n}\n\n\n\n.shyamoli-button[_ngcontent-%COMP%] {\n  --background: #ff9800;\n  height: 48px;\n  border-radius: 12px;\n  font-size: 17px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.shyamoli-input-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.shyamoli-input-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #9A9A9A;\n  margin-left: 4px;\n  margin-bottom: 6px;\n  display: block;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px;\n  color: #626262;\n  font-size: 16px;\n}\n\n.scroll-area[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 100px; \n\n}"]
});

/***/ }

}]);