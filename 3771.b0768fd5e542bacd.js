"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3771],{

/***/ 67714
/*!*******************************************************************!*\
  !*** ./src/app/save-travellers/save-travellers-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveTravellersPageRoutingModule: () => (/* binding */ SaveTravellersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _save_travellers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-travellers.page */ 9220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _SaveTravellersPageRoutingModule;




const routes = [{
  path: '',
  component: _save_travellers_page__WEBPACK_IMPORTED_MODULE_1__.SaveTravellersPage
}];
class SaveTravellersPageRoutingModule {}
_SaveTravellersPageRoutingModule = SaveTravellersPageRoutingModule;
_SaveTravellersPageRoutingModule.ɵfac = function SaveTravellersPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SaveTravellersPageRoutingModule)();
};
_SaveTravellersPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _SaveTravellersPageRoutingModule
});
_SaveTravellersPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaveTravellersPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 13771
/*!***********************************************************!*\
  !*** ./src/app/save-travellers/save-travellers.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveTravellersPageModule: () => (/* binding */ SaveTravellersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _save_travellers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-travellers-routing.module */ 67714);
/* harmony import */ var _save_travellers_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-travellers.page */ 9220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _SaveTravellersPageModule;






class SaveTravellersPageModule {}
_SaveTravellersPageModule = SaveTravellersPageModule;
_SaveTravellersPageModule.ɵfac = function SaveTravellersPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SaveTravellersPageModule)();
};
_SaveTravellersPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _SaveTravellersPageModule
});
_SaveTravellersPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _save_travellers_routing_module__WEBPACK_IMPORTED_MODULE_3__.SaveTravellersPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SaveTravellersPageModule, {
    declarations: [_save_travellers_page__WEBPACK_IMPORTED_MODULE_4__.SaveTravellersPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _save_travellers_routing_module__WEBPACK_IMPORTED_MODULE_3__.SaveTravellersPageRoutingModule]
  });
})();

/***/ },

/***/ 9220
/*!*********************************************************!*\
  !*** ./src/app/save-travellers/save-travellers.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveTravellersPage: () => (/* binding */ SaveTravellersPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
var _SaveTravellersPage;








const _c0 = ["travellerForm"];
const _c1 = () => [1, 2, 3, 4, 5, 6];
function SaveTravellersPage_ng_container_12_article_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-skeleton-text", 28)(5, "ion-skeleton-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
  }
}
function SaveTravellersPage_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SaveTravellersPage_ng_container_12_article_2_Template, 8, 4, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-skeleton-text", 19)(5, "ion-skeleton-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-skeleton-text", 22)(8, "ion-skeleton-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animated", true);
  }
}
function SaveTravellersPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_div_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.getPassengerList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.loadErrorMessage || "Unable to load saved travellers.");
  }
}
function SaveTravellersPage_ng_container_15_section_1_article_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 59);
  }
}
function SaveTravellersPage_ng_container_15_section_1_article_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const traveller_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](traveller_r5.age);
  }
}
function SaveTravellersPage_ng_container_15_section_1_article_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 59);
  }
}
function SaveTravellersPage_ng_container_15_section_1_article_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SaveTravellersPage_ng_container_15_section_1_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50)(4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaveTravellersPage_ng_container_15_section_1_article_1_span_8_Template, 1, 0, "span", 53)(9, SaveTravellersPage_ng_container_15_section_1_article_1_span_9_Template, 2, 1, "span", 11)(10, SaveTravellersPage_ng_container_15_section_1_article_1_span_10_Template, 1, 0, "span", 53)(11, SaveTravellersPage_ng_container_15_section_1_article_1_span_11_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ng_container_15_section_1_article_1_Template_button_click_12_listener() {
      const traveller_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.editTraveller(traveller_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ng_container_15_section_1_article_1_Template_button_click_14_listener() {
      const traveller_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.askDeleteTraveller(traveller_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const traveller_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sb-saved-person__avatar--female", traveller_r5.title === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(traveller_r5.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", traveller_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", traveller_r5.title === "Ms" ? "Female" : "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (traveller_r5 == null ? null : traveller_r5.age) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (traveller_r5 == null ? null : traveller_r5.age) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isCurrentUserTraveller(traveller_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isCurrentUserTraveller(traveller_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
  }
}
function SaveTravellersPage_ng_container_15_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaveTravellersPage_ng_container_15_section_1_article_1_Template, 16, 10, "article", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.travellersList);
  }
}
function SaveTravellersPage_ng_container_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No saved travellers yet. Add a traveller below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SaveTravellersPage_ng_container_15_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ng_container_15_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.resetTravellerForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SaveTravellersPage_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaveTravellersPage_ng_container_15_section_1_Template, 2, 1, "section", 33)(2, SaveTravellersPage_ng_container_15_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 35, 0)(5, "div", 36)(6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaveTravellersPage_ng_container_15_button_8_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 39)(10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Full name (as on ID) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function SaveTravellersPage_ng_container_15_Template_ion_input_ionInput_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.travellerName = $event.detail.value || "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21)(14, "label", 42)(15, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function SaveTravellersPage_ng_container_15_Template_ion_input_ionInput_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAgeInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 44)(19, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ng_container_15_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectGender("Mr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ng_container_15_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectGender("Ms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.travellersList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.travellersList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.editingTravellerId ? "Edit traveller" : "Add new traveller", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editingTravellerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.travellerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.travellerAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-selected", ctx_r1.travellerTitle === "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r1.travellerTitle === "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-selected", ctx_r1.travellerTitle === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx_r1.travellerTitle === "Ms");
  }
}
function SaveTravellersPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelDeleteTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_div_16_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete traveller?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 69)(9, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelDeleteTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.confirmDeleteTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remove ", ctx_r1.deletingTraveller.name, " from saved travellers?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.isDeleting ? "Deleting\u2026" : "Delete");
  }
}
function SaveTravellersPage_ion_footer_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-footer", 72)(1, "div", 73)(2, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_ion_footer_17_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.saveTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.isSaving ? "Saving\u2026" : ctx_r1.editingTravellerId ? "Update traveller" : "Save traveller", " ");
  }
}
class SaveTravellersPage {
  constructor(location, router, loader, apiFactory, util, commonStorage) {
    this.location = location;
    this.router = router;
    this.loader = loader;
    this.apiFactory = apiFactory;
    this.util = util;
    this.commonStorage = commonStorage;
    this.travellersList = [];
    this.travellerName = '';
    this.travellerAge = null;
    this.travellerTitle = 'Mr';
    this.editingTravellerId = null;
    this.isSaving = false;
    this.deletingTraveller = null;
    this.isDeleting = false;
    this.isLoading = false;
    this.sbRoutesState = 'loading';
    this.loadErrorMessage = '';
    this.query = 'get_travellers';
    this.currentUser = this.commonStorage.getItem("currentUser");
  }
  ngOnInit() {
    this.getPassengerList();
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/more']);
    }
  }
  getPassengerList() {
    this.sbRoutesState = 'loading';
    this.isLoading = true;
    this.loader.showLoadingDefault();
    this.apiFactory.travellersList(this.query).subscribe(result => {
      this.isLoading = false;
      this.loader.hideLoadingDefault();
      if (typeof (result === null || result === void 0 ? void 0 : result.code) === 'undefined') {
        this.travellersList = Array.isArray(result === null || result === void 0 ? void 0 : result.travellers_list) ? result.travellers_list : [];
        this.sbRoutesState = 'ready';
      } else {
        this.travellersList = [];
        this.loadErrorMessage = (result === null || result === void 0 ? void 0 : result.message) || '';
        this.sbRoutesState = 'error';
      }
    }, () => {
      this.isLoading = false;
      this.loader.hideLoadingDefault();
      this.loadErrorMessage = !this.util.isConnected() ? 'Please check your internet connection and try again.' : 'Unable to load saved travellers. Please try again.';
      this.sbRoutesState = 'error';
    });
  }
  editTraveller(traveller) {
    var _this$travellerForm;
    this.editingTravellerId = (traveller === null || traveller === void 0 ? void 0 : traveller.id) || null;
    this.travellerName = (traveller === null || traveller === void 0 ? void 0 : traveller.name) || '';
    this.travellerAge = (traveller === null || traveller === void 0 ? void 0 : traveller.age) !== undefined && (traveller === null || traveller === void 0 ? void 0 : traveller.age) !== null ? Number(traveller.age) : null;
    this.travellerTitle = (traveller === null || traveller === void 0 ? void 0 : traveller.title) === 'Ms' ? 'Ms' : 'Mr';
    (_this$travellerForm = this.travellerForm) === null || _this$travellerForm === void 0 || _this$travellerForm.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  selectGender(title) {
    this.travellerTitle = title;
  }
  onAgeInput(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '').slice(0, 3);
    this.travellerAge = value ? Math.min(120, Math.max(1, +value)) : '';
    input.value = this.travellerAge;
  }
  saveTraveller() {
    var _this$currentUser, _this$currentUser2;
    const name = (this.travellerName || '').trim();
    const nameParts = name.trim().split(/\s+/);
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(' ');
    const age = Number(this.travellerAge);
    if (!name) {
      this.util.showAlert('', 'Please enter the traveller name.');
      return;
    }
    if (!Number.isInteger(age) || age < 1 || age > 120) {
      this.util.showAlert('', 'Please enter a valid age.');
      return;
    }
    const payload = this.editingTravellerId ? {
      "id": this.editingTravellerId,
      "traveller": {
        name: name,
        age: age,
        title: this.travellerTitle
      }
    } : {
      "traveller": {
        "title": this.travellerTitle,
        "first_name": firstname,
        "last_name": lastname,
        "age": age,
        "country_code": "91",
        "mobile_number": (_this$currentUser = this.currentUser) === null || _this$currentUser === void 0 || (_this$currentUser = _this$currentUser.user) === null || _this$currentUser === void 0 ? void 0 : _this$currentUser.mobileNo,
        "email": (_this$currentUser2 = this.currentUser) === null || _this$currentUser2 === void 0 || (_this$currentUser2 = _this$currentUser2.user) === null || _this$currentUser2 === void 0 ? void 0 : _this$currentUser2.email
      }
    };
    this.isSaving = true;
    this.query = this.editingTravellerId ? "update_traveller" : "create_traveller";
    this.apiFactory.travellersList(this.query, payload).subscribe(result => {
      this.isSaving = false;
      if (Number(result === null || result === void 0 ? void 0 : result.code) === 200) {
        this.util.showToast((result === null || result === void 0 ? void 0 : result.message) || (this.query == "update_traveller" ? "Traveller details updated successfully" : "Traveller created successfully"));
        this.resetTravellerForm();
        this.query = 'get_travellers';
        this.getPassengerList();
      } else {
        this.util.showAlert('', (result === null || result === void 0 ? void 0 : result.message) || 'Unable to save traveller. Please try again.');
      }
    }, () => {
      this.isSaving = false;
      if (!this.util.isConnected()) {
        this.util.showAlert('', 'Please check your internet connection and try again.');
      } else {
        this.util.showAlert('', 'Unable to save traveller. Please try again.');
      }
    });
  }
  askDeleteTraveller(traveller) {
    if (this.isDeleting) {
      return;
    }
    this.deletingTraveller = traveller;
  }
  cancelDeleteTraveller() {
    if (this.isDeleting) {
      return;
    }
    this.deletingTraveller = null;
  }
  confirmDeleteTraveller() {
    if (this.isDeleting || !this.deletingTraveller) {
      return;
    }
    const traveller = this.deletingTraveller;
    const payload = {
      id: traveller.id
    };
    this.isDeleting = true;
    this.query = 'delete_traveller';
    this.apiFactory.travellersList(this.query, payload).subscribe(result => {
      this.isDeleting = false;
      this.query = 'get_travellers';
      if (Number(result === null || result === void 0 ? void 0 : result.code) === 200) {
        this.deletingTraveller = null;
        this.util.showToast((result === null || result === void 0 ? void 0 : result.message) || 'Traveller deleted successfully');
        if (this.editingTravellerId && this.editingTravellerId === traveller.id) {
          this.resetTravellerForm();
        }
        this.getPassengerList();
      } else {
        this.util.showAlert('', (result === null || result === void 0 ? void 0 : result.message) || 'Unable to delete traveller. Please try again.');
      }
    }, () => {
      this.isDeleting = false;
      this.query = 'get_travellers';
      if (!this.util.isConnected()) {
        this.util.showAlert('', 'Please check your internet connection and try again.');
      } else {
        this.util.showAlert('', 'Unable to delete traveller. Please try again.');
      }
    });
  }
  resetTravellerForm() {
    this.editingTravellerId = null;
    this.travellerName = '';
    this.travellerAge = null;
    this.travellerTitle = 'Mr';
  }
  getInitials(name) {
    const parts = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) {
      return '';
    }
    return parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
  }
  isCurrentUserTraveller(traveller) {
    return (traveller === null || traveller === void 0 ? void 0 : traveller.is_current_user) === true;
  }
}
_SaveTravellersPage = SaveTravellersPage;
_SaveTravellersPage.ɵfac = function SaveTravellersPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SaveTravellersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage));
};
_SaveTravellersPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _SaveTravellersPage,
  selectors: [["app-save-travellers"]],
  viewQuery: function SaveTravellersPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellerForm = _t.first);
    }
  },
  standalone: false,
  decls: 18,
  vars: 5,
  consts: [["travellerForm", ""], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-appbar__text"], [1, "sb-trips-title"], [1, "sb-appbar__subtitle"], [1, "sb-saved-travellers"], [1, "sb-saved-travellers__content"], [4, "ngIf"], [1, "sb-alert-parent"], ["class", "sb-saved-error", 4, "ngIf"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], ["class", "sb-saved-footer", 4, "ngIf"], [1, "sb-saved-list", "sb-saved-list--skeleton"], ["class", "sb-saved-person sb-saved-person--skeleton", 4, "ngFor", "ngForOf"], [1, "sb-saved-form", "sb-saved-form--skeleton"], [1, "sb-skeleton-form-title", 3, "animated"], [1, "sb-skeleton-input", 3, "animated"], [1, "sb-saved-form__row"], [1, "sb-skeleton-age", 3, "animated"], [1, "sb-skeleton-gender", 3, "animated"], [1, "sb-saved-person", "sb-saved-person--skeleton"], [1, "sb-skeleton-avatar"], [3, "animated"], [1, "sb-skeleton-details"], [1, "sb-skeleton-name", 3, "animated"], [1, "sb-skeleton-meta", 3, "animated"], [1, "sb-skeleton-edit"], [1, "sb-saved-error"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["class", "sb-saved-list", 4, "ngIf"], ["class", "sb-saved-empty", 4, "ngIf"], [1, "sb-saved-form"], [1, "sb-alert-parent", 2, "justify-content", "space-between"], [1, "sb-saved-form__title"], ["type", "button", "style", "color: var(--sb-color-danger); border: 0; background: transparent; padding: 0;", 3, "click", 4, "ngIf"], [1, "sb-saved-field"], [1, "sb-saved-field__label"], ["type", "text", "inputmode", "text", "autocomplete", "name", "placeholder", "Enter full name", 3, "ionInput", "value"], [1, "sb-saved-field", "sb-saved-field--age"], ["type", "number", "inputmode", "numeric", "maxlength", "3", "placeholder", "Age", 3, "ionInput", "value"], ["role", "group", "aria-label", "Gender", 1, "sb-saved-gender"], ["type", "button", 3, "click"], [1, "sb-saved-list"], ["class", "sb-saved-person", 4, "ngFor", "ngForOf"], [1, "sb-saved-person"], [1, "sb-saved-person__avatar"], [1, "sb-saved-person__details"], [1, "sb-saved-person__name"], [1, "sb-saved-person__meta"], ["class", "sb-saved-person__dot", 4, "ngIf"], ["class", "sb-saved-person__you", 4, "ngIf"], ["type", "button", "aria-label", "Edit traveller", 1, "sb-saved-person__edit", 3, "click"], ["src", "./assets/icon/ic_edit.svg", "alt", "", "width", "18", "height", "18"], ["type", "button", "aria-label", "Delete traveller", 1, "sb-saved-person__edit", 3, "click", "disabled"], ["name", "trash-outline"], [1, "sb-saved-person__dot"], [1, "sb-saved-person__you"], [1, "sb-saved-empty"], ["type", "button", 2, "color", "var(--sb-color-danger)", "border", "0", "background", "transparent", "padding", "0", 3, "click"], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbDeleteTravellerTitle", 1, "sb-dialog", "sb-confirm", 3, "click"], [1, "sb-confirm__icon"], ["name", "trash-outline", "aria-hidden", "true"], ["id", "sbDeleteTravellerTitle", 1, "sb-confirm__title"], [1, "sb-confirm__text"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "sb-btn-primary", 3, "click", "disabled"], [1, "sb-saved-footer"], [1, "sb-saved-footer__inner"], ["type", "button", 1, "sb-btn-primary", "sb-saved-submit", 3, "click", "disabled"]],
  template: function SaveTravellersPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "div", 3)(3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveTravellersPage_Template_button_click_3_listener() {
        return ctx.handleBackButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saved travellers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Used to fill details faster");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-content", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SaveTravellersPage_ng_container_12_Template, 9, 6, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SaveTravellersPage_div_14_Template, 5, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SaveTravellersPage_ng_container_15_Template, 23, 12, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SaveTravellersPage_div_16_Template, 13, 4, "div", 14)(17, SaveTravellersPage_ion_footer_17_Template, 4, 2, "ion-footer", 15);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sbRoutesState === "loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sbRoutesState === "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sbRoutesState === "ready");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletingTraveller);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sbRoutesState === "ready");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor],
  encapsulation: 2
});

/***/ }

}]);