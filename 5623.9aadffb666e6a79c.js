"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5623],{

/***/ 52238
/*!*************************************************************************!*\
  !*** ./src/app/auto-signup-dialog/auto-signup-dialog-routing.module.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSignupDialogPageRoutingModule: () => (/* binding */ AutoSignupDialogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-signup-dialog.page */ 48176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _AutoSignupDialogPageRoutingModule;




const routes = [{
  path: '',
  component: _auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_1__.AutoSignupDialogPage
}];
class AutoSignupDialogPageRoutingModule {}
_AutoSignupDialogPageRoutingModule = AutoSignupDialogPageRoutingModule;
_AutoSignupDialogPageRoutingModule.ɵfac = function AutoSignupDialogPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoSignupDialogPageRoutingModule)();
};
_AutoSignupDialogPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AutoSignupDialogPageRoutingModule
});
_AutoSignupDialogPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AutoSignupDialogPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 25623
/*!*****************************************************************!*\
  !*** ./src/app/auto-signup-dialog/auto-signup-dialog.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSignupDialogPageModule: () => (/* binding */ AutoSignupDialogPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _auto_signup_dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-signup-dialog-routing.module */ 52238);
/* harmony import */ var _auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-signup-dialog.page */ 48176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _AutoSignupDialogPageModule;






class AutoSignupDialogPageModule {}
_AutoSignupDialogPageModule = AutoSignupDialogPageModule;
_AutoSignupDialogPageModule.ɵfac = function AutoSignupDialogPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoSignupDialogPageModule)();
};
_AutoSignupDialogPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _AutoSignupDialogPageModule
});
_AutoSignupDialogPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _auto_signup_dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__.AutoSignupDialogPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AutoSignupDialogPageModule, {
    declarations: [_auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_4__.AutoSignupDialogPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _auto_signup_dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__.AutoSignupDialogPageRoutingModule]
  });
})();

/***/ }

}]);