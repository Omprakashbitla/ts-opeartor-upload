"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[831],{

/***/ 38934:
/*!*************************************************************!*\
  !*** ./src/app/cities-modal/cities-modal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitiesModalPageRoutingModule: () => (/* binding */ CitiesModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _cities_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities-modal.page */ 85960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _CitiesModalPageRoutingModule;




const routes = [{
  path: '',
  component: _cities_modal_page__WEBPACK_IMPORTED_MODULE_0__.CitiesModalPage
}];
class CitiesModalPageRoutingModule {}
_CitiesModalPageRoutingModule = CitiesModalPageRoutingModule;
_CitiesModalPageRoutingModule.ɵfac = function CitiesModalPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CitiesModalPageRoutingModule)();
};
_CitiesModalPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _CitiesModalPageRoutingModule
});
_CitiesModalPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CitiesModalPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 60831:
/*!*****************************************************!*\
  !*** ./src/app/cities-modal/cities-modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitiesModalPageModule: () => (/* binding */ CitiesModalPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _cities_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities-modal-routing.module */ 38934);
/* harmony import */ var _cities_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities-modal.page */ 85960);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _CitiesModalPageModule;








class CitiesModalPageModule {}
_CitiesModalPageModule = CitiesModalPageModule;
_CitiesModalPageModule.ɵfac = function CitiesModalPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CitiesModalPageModule)();
};
_CitiesModalPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _CitiesModalPageModule
});
_CitiesModalPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cities_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CitiesModalPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CitiesModalPageModule, {
    declarations: [_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cities_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CitiesModalPageRoutingModule, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_3__.OrderbyPipe]
  });
})();

/***/ })

}]);