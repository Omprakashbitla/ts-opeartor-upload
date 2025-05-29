"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1743],{

/***/ 39206:
/*!***************************************************!*\
  !*** ./src/app/popover/popover-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverPageRoutingModule: () => (/* binding */ PopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.page */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PopoverPageRoutingModule;




const routes = [{
  path: '',
  component: _popover_page__WEBPACK_IMPORTED_MODULE_0__.PopoverPage
}];
class PopoverPageRoutingModule {}
_PopoverPageRoutingModule = PopoverPageRoutingModule;
_PopoverPageRoutingModule.ɵfac = function PopoverPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverPageRoutingModule)();
};
_PopoverPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PopoverPageRoutingModule
});
_PopoverPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopoverPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 41743:
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverPageModule: () => (/* binding */ PopoverPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-routing.module */ 39206);
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.page */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PopoverPageModule;






class PopoverPageModule {}
_PopoverPageModule = PopoverPageModule;
_PopoverPageModule.ɵfac = function PopoverPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PopoverPageModule)();
};
_PopoverPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PopoverPageModule
});
_PopoverPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopoverPageModule, {
    declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_1__.PopoverPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverPageRoutingModule]
  });
})();

/***/ })

}]);