"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8987],{

/***/ 77906
/*!*******************************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies-routing.module.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPageRoutingModule: () => (/* binding */ CancellationPoliciesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellation-policies.page */ 72852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancellationPoliciesPageRoutingModule;




const routes = [{
  path: '',
  component: _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_1__.CancellationPoliciesPage
}];
class CancellationPoliciesPageRoutingModule {}
_CancellationPoliciesPageRoutingModule = CancellationPoliciesPageRoutingModule;
_CancellationPoliciesPageRoutingModule.ɵfac = function CancellationPoliciesPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPageRoutingModule)();
};
_CancellationPoliciesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _CancellationPoliciesPageRoutingModule
});
_CancellationPoliciesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CancellationPoliciesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 8987
/*!***********************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPageModule: () => (/* binding */ CancellationPoliciesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancellation-policies-routing.module */ 77906);
/* harmony import */ var _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancellation-policies.page */ 72852);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancellationPoliciesPageModule;








class CancellationPoliciesPageModule {}
_CancellationPoliciesPageModule = CancellationPoliciesPageModule;
_CancellationPoliciesPageModule.ɵfac = function CancellationPoliciesPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPageModule)();
};
_CancellationPoliciesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _CancellationPoliciesPageModule
});
_CancellationPoliciesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_3__.CancellationPoliciesPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CancellationPoliciesPageModule, {
    declarations: [_cancellation_policies_page__WEBPACK_IMPORTED_MODULE_4__.CancellationPoliciesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_3__.CancellationPoliciesPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe]
  });
})();

/***/ },

/***/ 72852
/*!*********************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies.page.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPage: () => (/* binding */ CancellationPoliciesPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
var _CancellationPoliciesPage;










const _c0 = () => ({
  "padding-top": "0px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "color": "var(--primaryText)"
});
const _c3 = () => ({
  "color": "var(--viewBgColor)"
});
const _c4 = () => ({
  "margin-left": "22%",
  "color": "var(--primaryText)"
});
const _c5 = () => [1, 2, 3];
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Between ", p_r1.time_limit_from, " to ", p_r1.time_limit_to, " from the station departure time: ", p_r1.percent, "%");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Beyond ", p_r1.time_limit_from, " before main station departure time: ", p_r1.percent, "% Cancellation Charges");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_div_1_Template, 2, 3, "div", 1)(2, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_div_2_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((p_r1 == null ? null : p_r1.time_limit_from == null ? null : p_r1.time_limit_from.indexOf(30)) > -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (p_r1 == null ? null : p_r1.time_limit_from == null ? null : p_r1.time_limit_from.indexOf(30)) > -1);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_ion_row_1_Template, 3, 2, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage ? ctx_r1.errorMessage : "Cancellation Policy: Not Applicable");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_p_1_Template, 2, 0, "p", 1)(2, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_2_Template, 2, 1, "div", 7)(3, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_div_3_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length == 0);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-white-common-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CancellationPoliciesPage_ng_container_0_ng_container_1_ion_content_3_Template, 4, 3, "ion-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 19)(1, "ion-buttons", 20)(2, "ion-back-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_1_Template_ion_back_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancellation policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "networktheme" ? "themeone-bg-cl" : "bg-cl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 23)(1, "ion-buttons", 24)(2, "ion-back-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_2_Template_ion_back_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancellation policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Between ", p_r5.time_limit_from, " to ", p_r5.time_limit_to, " from the station departure time: ", p_r5.percent, "%");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Beyond ", p_r5.time_limit_from, " before main station departure time: ", p_r5.percent, "% Cancellation Charges");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_div_1_Template, 2, 3, "div", 1)(2, CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_div_2_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((p_r5 == null ? null : p_r5.time_limit_from == null ? null : p_r5.time_limit_from.indexOf(30)) > -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (p_r5 == null ? null : p_r5.time_limit_from == null ? null : p_r5.time_limit_from.indexOf(30)) > -1);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_ion_row_1_Template, 3, 2, "ion-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage ? ctx_r1.errorMessage : "Cancellation Policy: Not Applicable");
  }
}
function CancellationPoliciesPage_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_1_Template, 5, 7, "ion-toolbar", 14)(2, CancellationPoliciesPage_ng_container_0_ng_template_2_ion_toolbar_2_Template, 5, 0, "ion-toolbar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CancellationPoliciesPage_ng_container_0_ng_template_2_p_4_Template, 2, 0, "p", 17)(5, CancellationPoliciesPage_ng_container_0_ng_template_2_div_5_Template, 2, 1, "div", 18)(6, CancellationPoliciesPage_ng_container_0_ng_template_2_div_6_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder != "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length == 0);
  }
}
function CancellationPoliciesPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_0_ng_container_1_Template, 4, 4, "ng-container", 2)(2, CancellationPoliciesPage_ng_container_0_ng_template_2_Template, 7, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const showOldTheme_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.appData.newTheme)("ngIfElse", showOldTheme_r6);
  }
}
function CancellationPoliciesPage_ng_container_1_section_9_ion_skeleton_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-skeleton-text", 44);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
  }
}
function CancellationPoliciesPage_ng_container_1_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CancellationPoliciesPage_ng_container_1_section_9_ion_skeleton_text_2_Template, 1, 1, "ion-skeleton-text", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-skeleton-text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
  }
}
function CancellationPoliciesPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Something went wrong. Please try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Between ", p_r8.time_limit_from, " to ", p_r8.time_limit_to, " from the station departure time: ", p_r8.percent, "%");
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Beyond ", p_r8.time_limit_from, " before main station departure time: ", p_r8.percent, "% Cancellation Charges");
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_span_1_Template, 2, 3, "span", 1)(2, CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_span_2_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((p_r8 == null ? null : p_r8.time_limit_from == null ? null : p_r8.time_limit_from.indexOf(30)) > -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (p_r8 == null ? null : p_r8.time_limit_from == null ? null : p_r8.time_limit_from.indexOf(30)) > -1);
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 48)(1, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_div_3_Template, 3, 2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 48)(1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage ? ctx_r1.errorMessage : "Cancellation Policy: Not Applicable");
  }
}
function CancellationPoliciesPage_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CancellationPoliciesPage_ng_container_1_ng_container_11_section_1_Template, 4, 1, "section", 47)(2, CancellationPoliciesPage_ng_container_1_ng_container_11_section_2_Template, 3, 1, "section", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices.length == 0);
  }
}
function CancellationPoliciesPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 31)(2, "ion-toolbar", 32)(3, "div", 33)(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CancellationPoliciesPage_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancellation policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CancellationPoliciesPage_ng_container_1_section_9_Template, 4, 4, "section", 38)(10, CancellationPoliciesPage_ng_container_1_div_10_Template, 4, 0, "div", 39)(11, CancellationPoliciesPage_ng_container_1_ng_container_11_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbPolicyState === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbPolicyState === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbPolicyState === "ready");
  }
}
class CancellationPoliciesPage {
  constructor(navCtrl, apiFactory, appData, util, commonStorage, router) {
    this.navCtrl = navCtrl;
    this.apiFactory = apiFactory;
    this.appData = appData;
    this.util = util;
    this.commonStorage = commonStorage;
    this.router = router;
    this.cancellationPolices = [];
    this.isIos = false;
    this.errorMessage = '';
    // seabirdThemeNew: skeleton while 'loading', existing empty card only when 'ready', error block on 'error'.
    this.sbPolicyState = 'loading';
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    // this.metaData.msiteFolder = 'shyamolitheme';
    this.defaultCall();
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem("metaData");
  }
  defaultCall() {
    var _this$router$getCurre;
    let resId = (_this$router$getCurre = this.router.getCurrentNavigation()) === null || _this$router$getCurre === void 0 || (_this$router$getCurre = _this$router$getCurre.extras.state) === null || _this$router$getCurre === void 0 ? void 0 : _this$router$getCurre['resId'];
    if (!resId) resId = '';
    this.apiFactory.getTermsAndConditionsWithCancellationPolicies(resId).subscribe(htmlData => {
      this.sbPolicyState = 'ready'; // set first: the line below throws on an empty array
      this.htmlData = htmlData;
      if (!this.htmlData[0].message) {
        this.cancellationPolices = htmlData;
      } else {
        var _this$htmlData$;
        this.cancellationPolices = [];
        this.errorMessage = (_this$htmlData$ = this.htmlData[0]) === null || _this$htmlData$ === void 0 ? void 0 : _this$htmlData$.message;
      }
    }, error => {
      this.sbPolicyState = 'error';
    });
  }
  goBack() {
    this.navCtrl.back();
  }
}
_CancellationPoliciesPage = CancellationPoliciesPage;
_CancellationPoliciesPage.ɵfac = function CancellationPoliciesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_5__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
_CancellationPoliciesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _CancellationPoliciesPage,
  selectors: [["app-cancellation-policies"]],
  standalone: false,
  decls: 2,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngStyle"], ["title", "Cancellation Policy", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["class", "theme1", "padding", "", "style", "--background:#fff;", 4, "ngIf"], ["padding", "", 1, "theme1", 2, "--background", "#fff"], ["class", "theme_one_mr-tp-plcy", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], [1, "theme_one_mr-tp-plcy"], ["class", "theme_one_txt-policy", 4, "ngFor", "ngForOf"], [1, "theme_one_txt-policy"], [1, "errorMsg"], [2, "box-shadow", "none"], ["mode", "md", "class", "h50", 3, "ngClass", 4, "ngIf"], ["mode", "md", "style", "--border-width:0px", 4, "ngIf"], ["padding", ""], ["style", "margin-left: 16px;", 4, "ngIf"], ["class", "mr-tp-plcy", "style", "margin-top: 5%;", 4, "ngIf"], ["mode", "md", 1, "h50", 3, "ngClass"], ["slot", "start"], [2, "color", "var(--viewBgColor)", "font-weight", "bold", 3, "click", "ngStyle"], [2, "color", "var(--viewBgColor)", "font-weight", "bold", 3, "ngStyle"], ["mode", "md", 2, "--border-width", "0px"], ["mode", "md", "slot", "start", 2, "position", "absolute"], [2, "color", "#333333", "font-weight", "bold", 3, "click"], [1, "head", "shyamoli-head"], [2, "margin-left", "16px"], [1, "mr-tp-plcy", 2, "margin-top", "5%"], ["class", "txt-policy", 4, "ngFor", "ngForOf"], [1, "txt-policy"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-trips-title", "sb-info-title"], [1, "sb-pax", "sb-doc-page"], ["class", "sb-pax-card sb-doc-card sb-doc--skeleton", "aria-hidden", "true", 4, "ngIf"], ["class", "sb-results-empty sb-results-error", "role", "alert", 4, "ngIf"], ["aria-hidden", "true", 1, "sb-pax-card", "sb-doc-card", "sb-doc--skeleton"], [1, "sb-skel", "sb-skel--title", 3, "animated"], ["class", "sb-skel sb-skel--doc", 3, "animated", 4, "ngFor", "ngForOf"], [1, "sb-skel", "sb-skel--line-short", 3, "animated"], [1, "sb-skel", "sb-skel--doc", 3, "animated"], ["role", "alert", 1, "sb-results-empty", "sb-results-error"], ["name", "alert-circle-outline", "aria-hidden", "true"], ["class", "sb-pax-card sb-doc-card", 4, "ngIf"], [1, "sb-pax-card", "sb-doc-card"], [1, "sb-pax-card__title"], ["class", "sb-policy-row", 4, "ngFor", "ngForOf"], [1, "sb-policy-row"], [1, "sb-doc-empty"]],
  template: function CancellationPoliciesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CancellationPoliciesPage_ng_container_0_Template, 4, 2, "ng-container", 1)(1, CancellationPoliciesPage_ng_container_1_Template, 12, 3, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder !== "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__.WhiteCommonHeaderComponent],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.txt-policy[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  margin: 16px;\n  font-weight: 300;\n}\n\n.mr-tp-plcy[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-top: 10%;\n}\n\n.theme_one_txt-policy[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  margin-top: 10px;\n}\n\n.theme_one_mr-tp-plcy[_ngcontent-%COMP%] {\n  background: #F3F3F7;\n  margin: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #3e3e52 !important;\n  font-weight: 500;\n}\n\n.errorMsg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.shyamoli-cancel-title[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 700;\n  font-size: 18px;\n  text-align: center;\n  width: 100%;\n  display: block;\n  padding-right: 30px;\n}\n\n.shyamoli-head[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}"]
});

/***/ }

}]);