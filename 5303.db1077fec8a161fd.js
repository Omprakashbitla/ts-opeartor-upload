"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5303],{

/***/ 55303:
/*!*************************************************!*\
  !*** ./src/app/map-search/map-search.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapSearchPageModule: () => (/* binding */ MapSearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _map_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-search-routing.module */ 62750);
/* harmony import */ var _map_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-search.page */ 60032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _MapSearchPageModule;






class MapSearchPageModule {}
_MapSearchPageModule = MapSearchPageModule;
_MapSearchPageModule.ɵfac = function MapSearchPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapSearchPageModule)();
};
_MapSearchPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MapSearchPageModule
});
_MapSearchPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapSearchPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapSearchPageModule, {
    declarations: [_map_search_page__WEBPACK_IMPORTED_MODULE_1__.MapSearchPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _map_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapSearchPageRoutingModule]
  });
})();

/***/ }),

/***/ 62750:
/*!*********************************************************!*\
  !*** ./src/app/map-search/map-search-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapSearchPageRoutingModule: () => (/* binding */ MapSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _map_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-search.page */ 60032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _MapSearchPageRoutingModule;




const routes = [{
  path: '',
  component: _map_search_page__WEBPACK_IMPORTED_MODULE_0__.MapSearchPage
}];
class MapSearchPageRoutingModule {}
_MapSearchPageRoutingModule = MapSearchPageRoutingModule;
_MapSearchPageRoutingModule.ɵfac = function MapSearchPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapSearchPageRoutingModule)();
};
_MapSearchPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _MapSearchPageRoutingModule
});
_MapSearchPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapSearchPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);