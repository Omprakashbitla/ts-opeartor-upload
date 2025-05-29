"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1971],{

/***/ 12058:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageRoutingModule: () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 71692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _MapPageRoutingModule;




const routes = [{
  path: '',
  component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
}];
class MapPageRoutingModule {}
_MapPageRoutingModule = MapPageRoutingModule;
_MapPageRoutingModule.ɵfac = function MapPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapPageRoutingModule)();
};
_MapPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _MapPageRoutingModule
});
_MapPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91971:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageModule: () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 12058);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 71692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _MapPageModule;






class MapPageModule {}
_MapPageModule = MapPageModule;
_MapPageModule.ɵfac = function MapPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapPageModule)();
};
_MapPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MapPageModule
});
_MapPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapPageModule, {
    declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule]
  });
})();

/***/ })

}]);