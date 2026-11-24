"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6419],{

/***/ 8234
/*!*************************************************************!*\
  !*** ./src/app/force-update/force-update-routing.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForceUpdatePageRoutingModule: () => (/* binding */ ForceUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _force_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-update.page */ 82460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForceUpdatePageRoutingModule;




const routes = [{
  path: '',
  component: _force_update_page__WEBPACK_IMPORTED_MODULE_1__.ForceUpdatePage
}];
class ForceUpdatePageRoutingModule {}
_ForceUpdatePageRoutingModule = ForceUpdatePageRoutingModule;
_ForceUpdatePageRoutingModule.ɵfac = function ForceUpdatePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForceUpdatePageRoutingModule)();
};
_ForceUpdatePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ForceUpdatePageRoutingModule
});
_ForceUpdatePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForceUpdatePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 66419
/*!*****************************************************!*\
  !*** ./src/app/force-update/force-update.module.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForceUpdatePageModule: () => (/* binding */ ForceUpdatePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _force_update_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./force-update-routing.module */ 8234);
/* harmony import */ var _force_update_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./force-update.page */ 82460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForceUpdatePageModule;






class ForceUpdatePageModule {}
_ForceUpdatePageModule = ForceUpdatePageModule;
_ForceUpdatePageModule.ɵfac = function ForceUpdatePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForceUpdatePageModule)();
};
_ForceUpdatePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _ForceUpdatePageModule
});
_ForceUpdatePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _force_update_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForceUpdatePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ForceUpdatePageModule, {
    declarations: [_force_update_page__WEBPACK_IMPORTED_MODULE_4__.ForceUpdatePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _force_update_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForceUpdatePageRoutingModule]
  });
})();

/***/ }

}]);