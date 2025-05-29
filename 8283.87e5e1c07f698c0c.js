"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8283],{

/***/ 39106:
/*!***********************************************************!*\
  !*** ./src/app/faq-popover/faq-popover-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPopoverPageRoutingModule: () => (/* binding */ FaqPopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _faq_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-popover.page */ 70180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPopoverPageRoutingModule;




const routes = [{
  path: '',
  component: _faq_popover_page__WEBPACK_IMPORTED_MODULE_0__.FaqPopoverPage
}];
class FaqPopoverPageRoutingModule {}
_FaqPopoverPageRoutingModule = FaqPopoverPageRoutingModule;
_FaqPopoverPageRoutingModule.ɵfac = function FaqPopoverPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPopoverPageRoutingModule)();
};
_FaqPopoverPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _FaqPopoverPageRoutingModule
});
_FaqPopoverPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqPopoverPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 78283:
/*!***************************************************!*\
  !*** ./src/app/faq-popover/faq-popover.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPopoverPageModule: () => (/* binding */ FaqPopoverPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _faq_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-popover-routing.module */ 39106);
/* harmony import */ var _faq_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq-popover.page */ 70180);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPopoverPageModule;







class FaqPopoverPageModule {}
_FaqPopoverPageModule = FaqPopoverPageModule;
_FaqPopoverPageModule.ɵfac = function FaqPopoverPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPopoverPageModule)();
};
_FaqPopoverPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _FaqPopoverPageModule
});
_FaqPopoverPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPopoverPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FaqPopoverPageModule, {
    declarations: [_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__.FaqPopoverPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPopoverPageRoutingModule, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe]
  });
})();

/***/ })

}]);