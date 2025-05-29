"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6357],{

/***/ 13833:
/*!*********************************************************!*\
  !*** ./src/app/components/testing/testing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestingComponent: () => (/* binding */ TestingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _TestingComponent;

class TestingComponent {
  constructor() {}
  ngOnInit() {}
}
_TestingComponent = TestingComponent;
_TestingComponent.ɵfac = function TestingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TestingComponent)();
};
_TestingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _TestingComponent,
  selectors: [["app-testing"]],
  decls: 2,
  vars: 0,
  template: function TestingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " testing works!\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 26357:
/*!*********************************************************!*\
  !*** ./src/app/calendar-modal/calendar-modal.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarModalPageModule: () => (/* binding */ CalendarModalPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _calendar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-modal-routing.module */ 87476);
/* harmony import */ var _calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-modal.page */ 70990);
/* harmony import */ var _components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/testing/testing.component */ 13833);
/* harmony import */ var _components_tan_calendar_tan_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tan-calendar/tan-calendar */ 94370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _CalendarModalPageModule;








class CalendarModalPageModule {}
_CalendarModalPageModule = CalendarModalPageModule;
_CalendarModalPageModule.ɵfac = function CalendarModalPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarModalPageModule)();
};
_CalendarModalPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _CalendarModalPageModule
});
_CalendarModalPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _calendar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarModalPageRoutingModule, _components_tan_calendar_tan_calendar__WEBPACK_IMPORTED_MODULE_3__.TanCalendar]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CalendarModalPageModule, {
    declarations: [_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__.CalendarModalPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _calendar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarModalPageRoutingModule, _components_testing_testing_component__WEBPACK_IMPORTED_MODULE_2__.TestingComponent, _components_tan_calendar_tan_calendar__WEBPACK_IMPORTED_MODULE_3__.TanCalendar]
  });
})();

/***/ }),

/***/ 87476:
/*!*****************************************************************!*\
  !*** ./src/app/calendar-modal/calendar-modal-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarModalPageRoutingModule: () => (/* binding */ CalendarModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _calendar_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-modal.page */ 70990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _CalendarModalPageRoutingModule;




const routes = [{
  path: '',
  component: _calendar_modal_page__WEBPACK_IMPORTED_MODULE_0__.CalendarModalPage
}];
class CalendarModalPageRoutingModule {}
_CalendarModalPageRoutingModule = CalendarModalPageRoutingModule;
_CalendarModalPageRoutingModule.ɵfac = function CalendarModalPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarModalPageRoutingModule)();
};
_CalendarModalPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _CalendarModalPageRoutingModule
});
_CalendarModalPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarModalPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);