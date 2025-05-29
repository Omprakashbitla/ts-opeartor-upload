"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9431],{

/***/ 9431:
/*!*************************************************!*\
  !*** ./src/app/refer-earn/refer-earn.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferEarnPageModule: () => (/* binding */ ReferEarnPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _refer_earn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refer-earn-routing.module */ 35534);
/* harmony import */ var _refer_earn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refer-earn.page */ 66160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ReferEarnPageModule;






class ReferEarnPageModule {}
_ReferEarnPageModule = ReferEarnPageModule;
_ReferEarnPageModule.ɵfac = function ReferEarnPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferEarnPageModule)();
};
_ReferEarnPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ReferEarnPageModule
});
_ReferEarnPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _refer_earn_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferEarnPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReferEarnPageModule, {
    declarations: [_refer_earn_page__WEBPACK_IMPORTED_MODULE_1__.ReferEarnPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _refer_earn_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferEarnPageRoutingModule]
  });
})();

/***/ }),

/***/ 35534:
/*!*********************************************************!*\
  !*** ./src/app/refer-earn/refer-earn-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferEarnPageRoutingModule: () => (/* binding */ ReferEarnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _refer_earn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refer-earn.page */ 66160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ReferEarnPageRoutingModule;




const routes = [{
  path: '',
  component: _refer_earn_page__WEBPACK_IMPORTED_MODULE_0__.ReferEarnPage
}];
class ReferEarnPageRoutingModule {}
_ReferEarnPageRoutingModule = ReferEarnPageRoutingModule;
_ReferEarnPageRoutingModule.ɵfac = function ReferEarnPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferEarnPageRoutingModule)();
};
_ReferEarnPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ReferEarnPageRoutingModule
});
_ReferEarnPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReferEarnPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);