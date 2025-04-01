"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faq-popover_faq-popover_module_ts"],{

/***/ 13980:
/*!***********************************************************!*\
  !*** ./src/app/faq-popover/faq-popover-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPopoverPageRoutingModule: () => (/* binding */ FaqPopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _faq_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-popover.page */ 66790);




const routes = [{
  path: '',
  component: _faq_popover_page__WEBPACK_IMPORTED_MODULE_0__.FaqPopoverPage
}];
let FaqPopoverPageRoutingModule = class FaqPopoverPageRoutingModule {};
FaqPopoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FaqPopoverPageRoutingModule);


/***/ }),

/***/ 64235:
/*!***************************************************!*\
  !*** ./src/app/faq-popover/faq-popover.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPopoverPageModule: () => (/* binding */ FaqPopoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _faq_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-popover-routing.module */ 13980);
/* harmony import */ var _faq_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq-popover.page */ 66790);







let FaqPopoverPageModule = class FaqPopoverPageModule {};
FaqPopoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPopoverPageRoutingModule],
  declarations: [_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__.FaqPopoverPage]
})], FaqPopoverPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_faq-popover_faq-popover_module_ts.js.map