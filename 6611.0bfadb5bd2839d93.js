"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6611],{

/***/ 80010
/*!***********************************************************************************!*\
  !*** ./src/app/modal-phonebooking-info/modal-phonebooking-info-routing.module.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPhonebookingInfoPageRoutingModule: () => (/* binding */ ModalPhonebookingInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-phonebooking-info.page */ 53244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ModalPhonebookingInfoPageRoutingModule;




const routes = [{
  path: '',
  component: _modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_1__.ModalPhonebookingInfoPage
}];
class ModalPhonebookingInfoPageRoutingModule {}
_ModalPhonebookingInfoPageRoutingModule = ModalPhonebookingInfoPageRoutingModule;
_ModalPhonebookingInfoPageRoutingModule.ɵfac = function ModalPhonebookingInfoPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPhonebookingInfoPageRoutingModule)();
};
_ModalPhonebookingInfoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ModalPhonebookingInfoPageRoutingModule
});
_ModalPhonebookingInfoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModalPhonebookingInfoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 66611
/*!***************************************************************************!*\
  !*** ./src/app/modal-phonebooking-info/modal-phonebooking-info.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalPhonebookingInfoPageModule: () => (/* binding */ ModalPhonebookingInfoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _modal_phonebooking_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-phonebooking-info-routing.module */ 80010);
/* harmony import */ var _modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-phonebooking-info.page */ 53244);
/* harmony import */ var _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter-oculto.pipe */ 43773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _ModalPhonebookingInfoPageModule;







class ModalPhonebookingInfoPageModule {}
_ModalPhonebookingInfoPageModule = ModalPhonebookingInfoPageModule;
_ModalPhonebookingInfoPageModule.ɵfac = function ModalPhonebookingInfoPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalPhonebookingInfoPageModule)();
};
_ModalPhonebookingInfoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _ModalPhonebookingInfoPageModule
});
_ModalPhonebookingInfoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _modal_phonebooking_info_routing_module__WEBPACK_IMPORTED_MODULE_3__.ModalPhonebookingInfoPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ModalPhonebookingInfoPageModule, {
    declarations: [_modal_phonebooking_info_page__WEBPACK_IMPORTED_MODULE_4__.ModalPhonebookingInfoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterOcultoPipe, _modal_phonebooking_info_routing_module__WEBPACK_IMPORTED_MODULE_3__.ModalPhonebookingInfoPageRoutingModule]
  });
})();

/***/ },

/***/ 43773
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-oculto.pipe.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterOcultoPipe: () => (/* binding */ FilterOcultoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _FilterOcultoPipe;

class FilterOcultoPipe {
  transform(items) {
    return items.filter(item => !item.oculto);
  }
}
_FilterOcultoPipe = FilterOcultoPipe;
_FilterOcultoPipe.ɵfac = function FilterOcultoPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterOcultoPipe)();
};
_FilterOcultoPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filterOculto",
  type: _FilterOcultoPipe,
  pure: true
});

/***/ }

}]);