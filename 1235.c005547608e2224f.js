"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1235],{

/***/ 1235:
/*!*******************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPageModule: () => (/* binding */ TicketCancelPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ticket_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-cancel-routing.module */ 91274);
/* harmony import */ var _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-cancel.page */ 31759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _TicketCancelPageModule;






class TicketCancelPageModule {}
_TicketCancelPageModule = TicketCancelPageModule;
_TicketCancelPageModule.ɵfac = function TicketCancelPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketCancelPageModule)();
};
_TicketCancelPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TicketCancelPageModule
});
_TicketCancelPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ticket_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketCancelPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TicketCancelPageModule, {
    declarations: [_ticket_cancel_page__WEBPACK_IMPORTED_MODULE_1__.TicketCancelPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ticket_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketCancelPageRoutingModule]
  });
})();

/***/ }),

/***/ 31759:
/*!*****************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPage: () => (/* binding */ TicketCancelPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
var _TicketCancelPage;



class TicketCancelPage {
  constructor(navCtrl, commonStorage) {
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
  }
  ngOnInit() {
    this.logo = this.commonStorage.localGet("metaData").mobileLoginPageLogo ? this.commonStorage.localGet("metaData").mobileLoginPageLogo : this.commonStorage.getItem("metaData").headerLogo;
  }
  goToHome() {
    this.navCtrl.navigateRoot('tabs/home');
  }
}
_TicketCancelPage = TicketCancelPage;
_TicketCancelPage.ɵfac = function TicketCancelPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketCancelPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage));
};
_TicketCancelPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TicketCancelPage,
  selectors: [["app-ticket-cancel"]],
  standalone: false,
  decls: 7,
  vars: 0,
  consts: [[1, "centerDiv"], ["mode", "md", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], [1, "search-txt"]],
  template: function TicketCancelPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your Transaction is not done.Please try again!!! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketCancelPage_Template_ion_button_click_3_listener() {
        return ctx.goToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Okay ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent],
  styles: [".centerDiv[_ngcontent-%COMP%] {\n  margin-top: 100%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  width: 61px;\n  text-transform: capitalize;\n}"]
});

/***/ }),

/***/ 91274:
/*!***************************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPageRoutingModule: () => (/* binding */ TicketCancelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-cancel.page */ 31759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _TicketCancelPageRoutingModule;




const routes = [{
  path: '',
  component: _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_0__.TicketCancelPage
}];
class TicketCancelPageRoutingModule {}
_TicketCancelPageRoutingModule = TicketCancelPageRoutingModule;
_TicketCancelPageRoutingModule.ɵfac = function TicketCancelPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TicketCancelPageRoutingModule)();
};
_TicketCancelPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TicketCancelPageRoutingModule
});
_TicketCancelPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TicketCancelPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);