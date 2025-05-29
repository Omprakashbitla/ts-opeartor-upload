"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7249],{

/***/ 2656:
/*!*********************************************************************!*\
  !*** ./src/app/snack-preference/snack-preference-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackPreferencePageRoutingModule: () => (/* binding */ SnackPreferencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _snack_preference_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-preference.page */ 66250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _SnackPreferencePageRoutingModule;




const routes = [{
  path: '',
  component: _snack_preference_page__WEBPACK_IMPORTED_MODULE_0__.SnackPreferencePage
}];
class SnackPreferencePageRoutingModule {}
_SnackPreferencePageRoutingModule = SnackPreferencePageRoutingModule;
_SnackPreferencePageRoutingModule.ɵfac = function SnackPreferencePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SnackPreferencePageRoutingModule)();
};
_SnackPreferencePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _SnackPreferencePageRoutingModule
});
_SnackPreferencePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SnackPreferencePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67249:
/*!*************************************************************!*\
  !*** ./src/app/snack-preference/snack-preference.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackPreferencePageModule: () => (/* binding */ SnackPreferencePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _snack_preference_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-preference-routing.module */ 2656);
/* harmony import */ var _snack_preference_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snack-preference.page */ 66250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _SnackPreferencePageModule;






class SnackPreferencePageModule {}
_SnackPreferencePageModule = SnackPreferencePageModule;
_SnackPreferencePageModule.ɵfac = function SnackPreferencePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SnackPreferencePageModule)();
};
_SnackPreferencePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _SnackPreferencePageModule
});
_SnackPreferencePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _snack_preference_routing_module__WEBPACK_IMPORTED_MODULE_0__.SnackPreferencePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SnackPreferencePageModule, {
    declarations: [_snack_preference_page__WEBPACK_IMPORTED_MODULE_1__.SnackPreferencePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _snack_preference_routing_module__WEBPACK_IMPORTED_MODULE_0__.SnackPreferencePageRoutingModule]
  });
})();

/***/ })

}]);