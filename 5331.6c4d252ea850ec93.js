"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5331],{

/***/ 17516
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _FilterPipe;

class FilterPipe {
  transform(items, field, value) {
    if (!items) return [];
    let rtItems = items;
    try {
      rtItems = items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
    } finally {
      return rtItems;
    }
  }
}
_FilterPipe = FilterPipe;
_FilterPipe.ɵfac = function FilterPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilterPipe)();
};
_FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: _FilterPipe,
  pure: true
});

/***/ },

/***/ 867
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderbyPipe: () => (/* binding */ OrderbyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _OrderbyPipe;

class OrderbyPipe {
  transform(array, orderByValue, orderType = 'ASC') {
    if (!array || !orderByValue) {
      return array;
    }
    return array.sort((a, b) => {
      if (orderType === 'ASC') {
        if (a[orderByValue] < b[orderByValue]) return -1;
        if (a[orderByValue] > b[orderByValue]) return 1;
        return 0;
      } else {
        if (a[orderByValue] < b[orderByValue]) return 1;
        if (a[orderByValue] > b[orderByValue]) return -1;
        return 0;
      }
    });
  }
}
_OrderbyPipe = OrderbyPipe;
_OrderbyPipe.ɵfac = function OrderbyPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderbyPipe)();
};
_OrderbyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "orderby",
  type: _OrderbyPipe,
  pure: true
});

/***/ },

/***/ 90218
/*!***************************************************************!*\
  !*** ./src/app/stage-details/stage-details-routing.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsPageRoutingModule: () => (/* binding */ StageDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _stage_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage-details.page */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _StageDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _stage_details_page__WEBPACK_IMPORTED_MODULE_1__.StageDetailsPage
}];
class StageDetailsPageRoutingModule {}
_StageDetailsPageRoutingModule = StageDetailsPageRoutingModule;
_StageDetailsPageRoutingModule.ɵfac = function StageDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsPageRoutingModule)();
};
_StageDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _StageDetailsPageRoutingModule
});
_StageDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StageDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 65331
/*!*******************************************************!*\
  !*** ./src/app/stage-details/stage-details.module.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsPageModule: () => (/* binding */ StageDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _stage_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stage-details-routing.module */ 90218);
/* harmony import */ var _stage_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stage-details.page */ 60124);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
var _StageDetailsPageModule;









class StageDetailsPageModule {}
_StageDetailsPageModule = StageDetailsPageModule;
_StageDetailsPageModule.ɵfac = function StageDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsPageModule)();
};
_StageDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _StageDetailsPageModule
});
_StageDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _stage_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.StageDetailsPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_7__.CommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StageDetailsPageModule, {
    declarations: [_stage_details_page__WEBPACK_IMPORTED_MODULE_4__.StageDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _stage_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.StageDetailsPageRoutingModule, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__.FilterPipe, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_7__.CommonHeaderComponent]
  });
})();

/***/ },

/***/ 60124
/*!*****************************************************!*\
  !*** ./src/app/stage-details/stage-details.page.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsPage: () => (/* binding */ StageDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _map_search_map_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-search/map-search.page */ 60032);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/plugin.service */ 65765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);

var _StageDetailsPage;




















const _c0 = ["mySlider"];
const _c1 = () => ({
  "padding-top": "0px"
});
const _c2 = () => ({});
const _c3 = () => ({
  "top": "14%"
});
const _c4 = () => ({
  "": ""
});
const _c5 = () => ({
  "border-bottom": "1px solid rgba(128, 128, 128, 0.3)"
});
const _c6 = (a0, a1) => ({
  "seabird_point_selected": a0,
  "seabird_point": a1
});
function StageDetailsPage_ng_container_0_ng_container_18_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1_radio" : "theme1_radio_2");
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 28);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1_radio" : "theme1_radio_2");
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r5.landmark, " ");
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r5.contact_numbers, " ");
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_ng_container_18_div_11_div_2_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StageDetailsPage_ng_container_0_ng_container_18_div_11_span_1_Template, 2, 1, "span", 31)(2, StageDetailsPage_ng_container_0_ng_container_18_div_11_div_2_Template, 4, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r5.contact_numbers != "" && stage_r5.contact_numbers != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r5.latitude != null);
  }
}
function StageDetailsPage_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_ng_container_18_Template_ion_item_click_1_listener() {
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(mySlider_r3, stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_0_ng_container_18_ion_icon_2_Template, 1, 1, "ion-icon", 19)(3, StageDetailsPage_ng_container_0_ng_container_18_ion_icon_3_Template, 1, 1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label", 21)(5, "div", 22)(6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_0_ng_container_18_div_10_Template, 2, 1, "div", 25)(11, StageDetailsPage_ng_container_0_ng_container_18_div_11_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedBp === stage_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp === stage_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp !== stage_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](stage_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r5.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r5.contact_numbers != "" && stage_r5.contact_numbers != null || stage_r5.latitude != null);
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1_radio" : "theme1_radio_2");
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 28);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1_radio" : "theme1_radio_2");
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r8.landmark, " ");
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r8.contact_numbers, " ");
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_ng_container_24_div_11_div_2_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const stage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(stage_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StageDetailsPage_ng_container_0_ng_container_24_div_11_span_1_Template, 2, 1, "span", 31)(2, StageDetailsPage_ng_container_0_ng_container_24_div_11_div_2_Template, 4, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r8.contact_numbers != "" && stage_r8.contact_numbers != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r8.latitude != null);
  }
}
function StageDetailsPage_ng_container_0_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_ng_container_24_Template_ion_item_click_1_listener() {
      const stage_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(mySlider_r3, stage_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_0_ng_container_24_ion_icon_2_Template, 1, 1, "ion-icon", 19)(3, StageDetailsPage_ng_container_0_ng_container_24_ion_icon_3_Template, 1, 1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label", 21)(5, "div", 22)(6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_0_ng_container_24_div_10_Template, 2, 1, "div", 25)(11, StageDetailsPage_ng_container_0_ng_container_24_div_11_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const stage_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedDp === stage_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp === stage_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp !== stage_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", stage_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](stage_r8.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r8.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", stage_r8.contact_numbers != "" && stage_r8.contact_numbers != null || stage_r8.latitude != null);
  }
}
function StageDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-common-header", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content", 6, 0)(6, "div", 7)(7, "div", 8)(8, "ion-segment", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsPage_ng_container_0_Template_ion_segment_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-segment-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_Template_ion_segment_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r3, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Select Pick-up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-segment-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_0_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r3, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Select Drop-off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "swiper-container", 12, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("swiperslidechange", function StageDetailsPage_ng_container_0_Template_swiper_container_swiperslidechange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "swiper-slide", 13)(16, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_0_Template_ion_searchbar_ionInput_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, StageDetailsPage_ng_container_0_ng_container_18_Template, 12, 8, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "swiper-slide", 17)(22, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_0_Template_ion_searchbar_ionInput_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStageDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, StageDetailsPage_ng_container_0_ng_container_24_Template, 12, 8, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "", ctx_r1.origin == null ? null : ctx_r1.origin.name, " - ", ctx_r1.destination == null ? null : ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate3"]("subtitle", "", ctx_r1.dateFull == null ? null : ctx_r1.dateFull.day, " ", ctx_r1.dateFull == null ? null : ctx_r1.dateFull.monthNameShort, " - ", ctx_r1.globalData.SELECTED_ROUTE == null ? null : ctx_r1.globalData.SELECTED_ROUTE.bus_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "curved-corner" : "curved-corner_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c2))("scrollY", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-segment" : "themeone-segment_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "slide" : "themeone_slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](19, 17, ctx_r1.boardingPoints, "name", ctx_r1.searchKey), "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "slide" : "themeone_slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](26, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](25, 24, ctx_r1.droppingPoints, "name", ctx_r1.searchKeyDrop), "time"));
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 63);
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 64);
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13 == null ? null : i_r13.landmark);
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_ion_item_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_ng_container_32_ion_item_11_div_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StageDetailsPage_ng_container_1_ng_container_32_ion_item_11_div_1_Template, 4, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r13.latitude != null);
  }
}
function StageDetailsPage_ng_container_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_ng_container_32_Template_ion_item_click_1_listener() {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(mySlider_r11, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_1_ng_container_32_ion_icon_2_Template, 1, 0, "ion-icon", 57)(3, StageDetailsPage_ng_container_1_ng_container_32_ion_icon_3_Template, 1, 0, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label")(5, "div", 59)(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_1_ng_container_32_p_10_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, StageDetailsPage_ng_container_1_ng_container_32_ion_item_11_Template, 2, 1, "ion-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedBp === i_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", i_r13.latitude ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp === i_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp !== i_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r13.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r13.latitude);
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 63);
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 64);
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r16.landmark);
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_ion_item_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_ng_container_38_ion_item_11_div_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StageDetailsPage_ng_container_1_ng_container_38_ion_item_11_div_1_Template, 4, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r16.latitude != null);
  }
}
function StageDetailsPage_ng_container_1_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_ng_container_38_Template_ion_item_click_1_listener() {
      const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(mySlider_r11, i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_1_ng_container_38_ion_icon_2_Template, 1, 0, "ion-icon", 57)(3, StageDetailsPage_ng_container_1_ng_container_38_ion_icon_3_Template, 1, 0, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label")(5, "div", 59)(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_1_ng_container_38_p_10_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, StageDetailsPage_ng_container_1_ng_container_38_ion_item_11_Template, 2, 1, "ion-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedDp === i_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", i_r16.latitude ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp === i_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp !== i_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r16.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r16.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r16.latitude);
  }
}
function StageDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 38)(3, "ion-buttons", 39)(4, "ion-back-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-content", 43)(10, "ion-segment", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsPage_ng_container_1_Template_ion_segment_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-segment-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const mySlider_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r11, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-col", 46)(13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-segment-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_1_Template_ion_segment_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const mySlider_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r11, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-col", 46)(20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "swiper-container", 50, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("swiperslidechange", function StageDetailsPage_ng_container_1_Template_swiper_container_swiperslidechange_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const mySlider_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "swiper-slide", 51)(28, "ion-item-divider", 52)(29, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Select Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-list", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, StageDetailsPage_ng_container_1_ng_container_32_Template, 12, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "swiper-slide", 55)(34, "ion-item-divider", 52)(35, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Select Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-list", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, StageDetailsPage_ng_container_1_ng_container_38_Template, 12, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.origin == null ? null : ctx_r1.origin.name, " - ", ctx_r1.destination == null ? null : ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.globalData.SELECTED_ROUTE == null ? null : ctx_r1.globalData.SELECTED_ROUTE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollY", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](!ctx_r1.selectedBp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](17, 9, ctx_r1.selectedBp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](!ctx_r1.selectedDp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](24, 13, ctx_r1.selectedDp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.boardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.droppingPoints);
  }
}
function StageDetailsPage_ng_container_2_div_32_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r21.landmark);
  }
}
function StageDetailsPage_ng_container_2_div_32_ion_item_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r21.distance, " Kms");
  }
}
function StageDetailsPage_ng_container_2_div_32_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 92)(1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_div_32_ion_item_12_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const point_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.gotoMaps(point_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_2_div_32_ion_item_12_div_5_Template, 2, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsPage_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 82)(2, "ion-item", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_div_32_Template_ion_item_click_2_listener() {
      const point_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(mySlider_r19, point_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 84)(4, "div", 85)(5, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col")(8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_2_div_32_span_10_Template, 2, 1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, StageDetailsPage_ng_container_2_div_32_ion_item_12_Template, 6, 1, "ion-item", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedBp === point_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r21.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r21.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r1.selectedBp === point_r21.name ? "radio-button-on" : "radio-button-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r21.latitude != null);
  }
}
function StageDetailsPage_ng_container_2_div_37_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r24.landmark);
  }
}
function StageDetailsPage_ng_container_2_div_37_ion_item_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r24.distance, " Kms");
  }
}
function StageDetailsPage_ng_container_2_div_37_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 92)(1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_div_37_ion_item_12_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const point_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.gotoMaps(point_r24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_2_div_37_ion_item_12_div_5_Template, 2, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpDp);
  }
}
function StageDetailsPage_ng_container_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 82)(2, "ion-item", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_div_37_Template_ion_item_click_2_listener() {
      const point_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(mySlider_r19, point_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 84)(4, "div", 85)(5, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col")(8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_2_div_37_span_10_Template, 2, 1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, StageDetailsPage_ng_container_2_div_37_ion_item_12_Template, 6, 1, "ion-item", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedDp === point_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r24.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r24.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r1.selectedDp === point_r24.name ? "radio-button-on" : "radio-button-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r24.latitude != null);
  }
}
function StageDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 69)(2, "div", 70)(3, "div", 71)(4, "ion-buttons", 72)(5, "ion-back-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_Template_ion_back_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Boarding & Dropping points");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-content", 75)(13, "ion-segment", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsPage_ng_container_2_Template_ion_segment_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-segment-button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_Template_ion_segment_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r19, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Boarding Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-segment-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_2_Template_ion_segment_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r19, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Dropping Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "swiper-container", 79, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("swiperslidechange", function StageDetailsPage_ng_container_2_Template_swiper_container_swiperslidechange_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.onSlideChanged(mySlider_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "swiper-slide", 51)(29, "ion-list", 80)(30, "ion-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Select Boarding Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, StageDetailsPage_ng_container_2_div_32_Template, 13, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "swiper-slide", 55)(34, "ion-list", 80)(35, "ion-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Select Dropping Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, StageDetailsPage_ng_container_2_div_37_Template, 13, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.origin.name, " - ", ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.globalData.SELECTED_ROUTE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollY", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](22, _c6, ctx_r1.tabName === "lower", ctx_r1.tabName !== "lower"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](!ctx_r1.selectedBp ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](19, 12, ctx_r1.selectedBp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](25, _c6, ctx_r1.tabName === "upper", ctx_r1.tabName !== "upper"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](!ctx_r1.selectedDp ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](25, 16, ctx_r1.selectedDp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.boardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.droppingPoints);
  }
}
function StageDetailsPage_ng_container_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" \u00B7 ", ctx_r1.dateFull.dayNameShort, " ", ctx_r1.dateFull.day, " ", ctx_r1.dateFull.monthNameShort, "");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sbNear_r28 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", sbNear_r28.nearest ? "Nearest to you:" : "", " ", sbNear_r28.name, " (", sbNear_r28.distance, ")");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const point_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00B7 ", point_r30.distance, " km");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const point_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      ctx_r1.gotoMaps(point_r30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_button_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpBp && point_r30.distance && point_r30.distance !== "N/A");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sbDist_r32 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", sbDist_r32, ")");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r30.landmark || point_r30.address);
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_Template_div_click_1_listener() {
      const point_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(null, point_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 119)(3, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_button_5_Template, 3, 1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 122)(7, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_ng_container_9_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_span_10_Template, 2, 1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const point_r30 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-checked", ctx_r1.selectedBp === point_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r30.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r30.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sbStopDistance(point_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r30.landmark || point_r30.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sb-radio--on", ctx_r1.selectedBp === point_r30.name);
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.searchKey ? "No boarding points match \"" + ctx_r1.searchKey + "\"" : "No boarding points available");
  }
}
function StageDetailsPage_ng_container_3_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 111)(2, "ion-searchbar", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_3_ng_container_18_Template_ion_searchbar_ionInput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, StageDetailsPage_ng_container_3_ng_container_18_div_3_Template, 4, 3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_3_ng_container_18_ng_container_5_Template, 12, 8, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, StageDetailsPage_ng_container_3_ng_container_18_p_7_Template, 2, 1, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sbNearest(ctx_r1.boardingPoints, "boarding"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](6, 3, ctx_r1.boardingPoints, "name", ctx_r1.searchKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](8, 7, ctx_r1.boardingPoints, "name", ctx_r1.searchKey).length === 0);
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sbNear_r34 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", sbNear_r34.nearest ? "Nearest to you:" : "", " ", sbNear_r34.name, " (", sbNear_r34.distance, ")");
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const point_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00B7 ", point_r36.distance, " km");
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const point_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      ctx_r1.gotoMaps(point_r36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_button_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpDp && point_r36.distance && point_r36.distance !== "N/A");
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sbDist_r38 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", sbDist_r38, ")");
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r36.landmark || point_r36.address);
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_Template_div_click_1_listener() {
      const point_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(null, point_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 119)(3, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_button_5_Template, 3, 1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 122)(7, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_ng_container_9_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_span_10_Template, 2, 1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const point_r36 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-checked", ctx_r1.selectedDp === point_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r36.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r36.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sbStopDistance(point_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r36.landmark || point_r36.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sb-radio--on", ctx_r1.selectedDp === point_r36.name);
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.searchKeyDrop ? "No dropping points match \"" + ctx_r1.searchKeyDrop + "\"" : "No dropping points available");
  }
}
function StageDetailsPage_ng_container_3_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 111)(2, "ion-searchbar", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_3_ng_container_19_Template_ion_searchbar_ionInput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStageDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, StageDetailsPage_ng_container_3_ng_container_19_div_3_Template, 4, 3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_3_ng_container_19_ng_container_5_Template, 12, 8, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, StageDetailsPage_ng_container_3_ng_container_19_p_7_Template, 2, 1, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sbNearest(ctx_r1.droppingPoints, "dropping"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](6, 3, ctx_r1.droppingPoints, "name", ctx_r1.searchKeyDrop));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](8, 7, ctx_r1.droppingPoints, "name", ctx_r1.searchKeyDrop).length === 0);
  }
}
function StageDetailsPage_ng_container_3_ion_footer_20_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.BP.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.BP.time);
  }
}
function StageDetailsPage_ng_container_3_ion_footer_20_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.DP.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.DP.time);
  }
}
function StageDetailsPage_ng_container_3_ion_footer_20_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ion_footer_20_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(null, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function StageDetailsPage_ng_container_3_ion_footer_20_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_ion_footer_20_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoPassengerdetailsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.BP);
  }
}
function StageDetailsPage_ng_container_3_ion_footer_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-footer", 130)(1, "div", 131)(2, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StageDetailsPage_ng_container_3_ion_footer_20_ng_container_4_Template, 5, 2, "ng-container", 2)(5, StageDetailsPage_ng_container_3_ion_footer_20_ng_container_5_Template, 5, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, StageDetailsPage_ng_container_3_ion_footer_20_button_6_Template, 2, 0, "button", 133)(7, StageDetailsPage_ng_container_3_ion_footer_20_button_7_Template, 2, 1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.tabName === "lower" ? "Boarding at" : "Dropping at");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "upper");
  }
}
function StageDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 99)(2, "ion-toolbar", 100)(3, "div", 101)(4, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 104)(7, "h1", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Pick-up & drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, StageDetailsPage_ng_container_3_ng_container_11_Template, 2, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 107)(13, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(null, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Boarding point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_3_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(null, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Dropping point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-content", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, StageDetailsPage_ng_container_3_ng_container_18_Template, 9, 11, "ng-container", 2)(19, StageDetailsPage_ng_container_3_ng_container_19_Template, 9, 11, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, StageDetailsPage_ng_container_3_ion_footer_20_Template, 8, 5, "ion-footer", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.origin == null ? null : ctx_r1.origin.name, " \u2192 ", ctx_r1.destination == null ? null : ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.dateFull == null ? null : ctx_r1.dateFull.dayNameShort);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r1.tabName === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r1.tabName === "upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tabName === "lower" && ctx_r1.BP || ctx_r1.tabName === "upper" && ctx_r1.DP);
  }
}
function StageDetailsPage_ng_container_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsPage_ng_container_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsPage_ng_container_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsPage_ng_container_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.globalData.SELECTED_ROUTE_RETURN ? ctx_r1.globalData.SELECTED_ROUTE_RETURN.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE_RETURN ? ctx_r1.globalData.SELECTED_ROUTE_RETURN.arr_time : "", " ");
  }
}
function StageDetailsPage_ng_container_4_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.journeyType == "onward" ? "\u00A0(Onward)" : "\u00A0(Return)");
  }
}
function StageDetailsPage_ng_container_4_div_37_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", point_r44.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r44.landmark, " ");
  }
}
function StageDetailsPage_ng_container_4_div_37_ion_item_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r44.distance, " Kms");
  }
}
function StageDetailsPage_ng_container_4_div_37_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_div_37_ion_item_14_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const point_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.gotoMaps(point_r44);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 164)(2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, StageDetailsPage_ng_container_4_div_37_ion_item_14_div_6_Template, 2, 1, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsPage_ng_container_4_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 152)(2, "ion-item", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_div_37_Template_ion_item_click_2_listener() {
      const point_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(mySlider_r42, point_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row", 154)(4, "ion-col", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 157)(7, "ion-label")(8, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_4_div_37_div_10_Template, 4, 2, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 160)(12, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, StageDetailsPage_ng_container_4_div_37_ion_item_14_Template, 7, 1, "ion-item", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r44 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedBp === point_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r1.selectedBp === point_r44.name ? "radio-button-on" : "radio-button-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r44.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r44.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r44.latitude != null);
  }
}
function StageDetailsPage_ng_container_4_div_43_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", point_r47.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r47.landmark, " ");
  }
}
function StageDetailsPage_ng_container_4_div_43_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", ctx_r1.formatteddate(point_r47.travel_date), ") ");
  }
}
function StageDetailsPage_ng_container_4_div_43_ion_item_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r47.distance, " Kms");
  }
}
function StageDetailsPage_ng_container_4_div_43_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_div_43_ion_item_15_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const point_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.gotoMaps(point_r47);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 164)(2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, StageDetailsPage_ng_container_4_div_43_ion_item_15_div_6_Template, 2, 1, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.helpDp);
  }
}
function StageDetailsPage_ng_container_4_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 152)(2, "ion-item", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_div_43_Template_ion_item_click_2_listener() {
      const point_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(mySlider_r42, point_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-row", 154)(4, "ion-col", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 157)(7, "ion-label")(8, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StageDetailsPage_ng_container_4_div_43_div_10_Template, 4, 2, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 160)(12, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, StageDetailsPage_ng_container_4_div_43_span_14_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, StageDetailsPage_ng_container_4_div_43_ion_item_15_Template, 7, 1, "ion-item", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r47 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedDp === point_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r1.selectedDp === point_r47.name ? "radio-button-on" : "radio-button-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](point_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r47.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", point_r47.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r47.is_next_day != null && point_r47.is_next_day == "YES_LABEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", point_r47.latitude != null);
  }
}
function StageDetailsPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header", 139)(2, "ion-toolbar", 38)(3, "ion-buttons", 39)(4, "ion-back-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_4_div_5_Template, 2, 2, "div", 140)(6, StageDetailsPage_ng_container_4_div_6_Template, 2, 2, "div", 140)(7, StageDetailsPage_ng_container_4_div_7_Template, 2, 2, "div", 140)(8, StageDetailsPage_ng_container_4_div_8_Template, 2, 2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, StageDetailsPage_ng_container_4_span_13_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-content", 139)(15, "ion-segment", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsPage_ng_container_4_Template_ion_segment_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-segment-button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_Template_ion_segment_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const mySlider_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r42, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 145)(18, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-segment-button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_4_Template_ion_segment_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const mySlider_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r42, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-col", 145)(25, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "swiper-container", 149, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("swiperslidechange", function StageDetailsPage_ng_container_4_Template_swiper_container_swiperslidechange_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const mySlider_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.onSlideChanged(mySlider_r42);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "swiper-slide", 51)(33, "ion-item-divider")(34, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Select Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-list", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, StageDetailsPage_ng_container_4_div_37_Template, 15, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "swiper-slide", 55)(39, "ion-item-divider")(40, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Select Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-list", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, StageDetailsPage_ng_container_4_div_43_Template, 16, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "oneway");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType != "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx_r1.dateFull == null ? null : ctx_r1.dateFull.monthNameShort, " ", ctx_r1.leadingZero(ctx_r1.dateFull == null ? null : ctx_r1.dateFull.day), " |\u00A0 ", ctx_r1.OurbusPassengerCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" \u00A0| ", ctx_r1.origin == null ? null : ctx_r1.origin.name, " - ", ctx_r1.destination == null ? null : ctx_r1.destination.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", !ctx_r1.selectedBp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](22, 16, ctx_r1.selectedBp, 0, 12) + "...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.isSlideGo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", !ctx_r1.selectedDp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](29, 20, ctx_r1.selectedDp, 0, 12) + "...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.boardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.droppingPoints);
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 189);
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 190);
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r52 == null ? null : i_r52.address, " - ", i_r52 == null ? null : i_r52.landmark, "");
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r52.phone);
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_ng_container_20_div_16_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_5_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_ng_container_20_Template_ion_card_click_1_listener() {
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectBoarding(mySlider_r50, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-card-content")(3, "ion-row")(4, "ion-col", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_5_ng_container_20_ion_icon_5_Template, 1, 0, "ion-icon", 180)(6, StageDetailsPage_ng_container_5_ng_container_20_ion_icon_6_Template, 1, 0, "ion-icon", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 182)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 183)(11, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, StageDetailsPage_ng_container_5_ng_container_20_p_13_Template, 2, 2, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, StageDetailsPage_ng_container_5_ng_container_20_p_15_Template, 2, 1, "p", 187)(16, StageDetailsPage_ng_container_5_ng_container_20_div_16_Template, 4, 0, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r52 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedBp === i_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp === i_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedBp !== i_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r52.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r52.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r52.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r52.latitude);
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 189);
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 190);
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", i_r55.address, " - ", i_r55.landmark, "");
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r55.phone);
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_ng_container_26_div_16_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r56);
      const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.gotoMaps(i_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View on map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StageDetailsPage_ng_container_5_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_ng_container_26_Template_ion_card_click_1_listener() {
      const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const mySlider_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectDropping(mySlider_r50, i_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-card-content")(3, "ion-row")(4, "ion-col", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StageDetailsPage_ng_container_5_ng_container_26_ion_icon_5_Template, 1, 0, "ion-icon", 180)(6, StageDetailsPage_ng_container_5_ng_container_26_ion_icon_6_Template, 1, 0, "ion-icon", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 182)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 183)(11, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, StageDetailsPage_ng_container_5_ng_container_26_p_13_Template, 2, 2, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, StageDetailsPage_ng_container_5_ng_container_26_p_15_Template, 2, 1, "p", 187)(16, StageDetailsPage_ng_container_5_ng_container_26_div_16_Template, 4, 0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r55 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", ctx_r1.selectedDp === i_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp === i_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedDp !== i_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r55.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r55.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r55.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r55.latitude);
  }
}
function StageDetailsPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 170)(3, "ion-buttons", 39)(4, "ion-back-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-segment", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsPage_ng_container_5_Template_ion_segment_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-segment-button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_Template_ion_segment_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const mySlider_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r50, 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Choose pick-up point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-segment-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StageDetailsPage_ng_container_5_Template_ion_segment_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const mySlider_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToSlide(mySlider_r50, 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Choose drop-off point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-content", 173)(15, "swiper-container", 174, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("swiperslidechange", function StageDetailsPage_ng_container_5_Template_swiper_container_swiperslidechange_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const mySlider_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "swiper-slide", 51)(18, "ion-searchbar", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_5_Template_ion_searchbar_ionInput_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-list", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, StageDetailsPage_ng_container_5_ng_container_20_Template, 17, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "swiper-slide", 55)(24, "ion-searchbar", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function StageDetailsPage_ng_container_5_Template_ion_searchbar_ionInput_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.searchStageDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-list", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, StageDetailsPage_ng_container_5_ng_container_26_Template, 17, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.origin == null ? null : ctx_r1.origin.name, " - ", ctx_r1.destination == null ? null : ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.globalData.SELECTED_ROUTE == null ? null : ctx_r1.globalData.SELECTED_ROUTE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollY", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](21, 7, ctx_r1.boardingPoints, "name", ctx_r1.searchKey), "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](28, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](27, 14, ctx_r1.droppingPoints, "name", ctx_r1.searchKeyDrop), "time"));
  }
}
class StageDetailsPage {
  constructor(commonStorage, theme, globalData, navCtrl, modalController, util, route, loader, router, inAppBrowser, platform, appData, dateService, locationProvider) {
    this.commonStorage = commonStorage;
    this.theme = theme;
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.modalController = modalController;
    this.util = util;
    this.route = route;
    this.loader = loader;
    this.router = router;
    this.inAppBrowser = inAppBrowser;
    this.platform = platform;
    this.appData = appData;
    this.dateService = dateService;
    this.locationProvider = locationProvider;
    this.selectedRoute = [];
    this.tabName = 'lower';
    this.isreturnTrip = false;
    this.mySlideOptions = {
      initialSlide: 0,
      loop: false
    };
    this.slideOpts = {
      slidesPerView: 1
    };
    this.origin = [];
    this.destination = [];
    this.dateFull = [];
    this.journeyType = '';
    this.isRoundTrip = false;
    this.selectedTripSegment = 'oneway';
    this.isSlideGo = false;
    this.returnSeatDetails = [];
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.returnSeatDetails = this.globalData.SELECTED_SEAT_DETAILS_RETURN;
    this.journeyType = this.commonStorage.localGet("journeyType");
    this.searchKey = "";
    this.searchKeyDrop = "";
    this.selectedTripSegment = this.commonStorage.getItem('selectedTripSegment');
    this.OurbusPassengerCount = this.commonStorage.localGet("ourbusPassengerCount");
  }
  scrollToTop() {
    this.content.scrollToTop(500);
  }
  ionViewDidEnter() {
    if (this.content) {
      this.content.scrollToTop();
    }
  }
  goBack() {
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (this.isreturnTrip) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('seat-layout', navigationExtras);
    } else {
      this.router.navigate(['/seat-layout']);
    }
  }
  ionViewWillEnter() {
    this.commonStorage.localRemove('passengerDetails');
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (this.isreturnTrip) {
      this.boardingPoints = this.commonStorage.localGet('originStageDetailsReturn') || [];
      if (this.boardingPoints.length) {
        this.commonStorage.setItem('boardingStage', this.boardingPoints[0]);
      }
      this.droppingPoints = this.commonStorage.localGet('destinationStageDetailsReturn') || [];
      this.destination = this.commonStorage.localGet('origin');
      this.origin = this.commonStorage.localGet('destination');
      this.dateFull = this.globalData.DEPARTURE_DATE_RETURN;
      this.selectedRoute = this.globalData.SELECTED_ROUTE_RETURN;
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID_RET'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID_RET'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID_RET'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS_RET'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS_RET'),
        "dep_time": this.commonStorage.localGet('DEP_TIME_RET')
      };
      if (this.isreturnTrip) {
        this.journeyType = 'round';
      }
    } else {
      this.boardingPoints = this.commonStorage.localGet('originStageDetails') || [];
      if (this.boardingPoints.length) {
        this.commonStorage.setItem('boardingStage', this.boardingPoints[0]);
      }
      this.droppingPoints = this.commonStorage.localGet('destinationStageDetails') || [];
      if (this.isreturnTrip == undefined) {
        this.journeyType = 'onward';
      }
      this.selectedRoute = this.globalData.SELECTED_ROUTE;
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS'),
        "dep_time": this.commonStorage.localGet('DEP_TIME')
      };
      this.origin = this.commonStorage.localGet('origin');
      this.destination = this.commonStorage.localGet('destination');
      this.dateFull = this.globalData.DEPARTURE_DATE;
    }
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem('metaData');
    this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
  }
  addDays(date) {
    let dt = new Date(date);
    dt.setDate(dt.getDate() + 1);
    return this.preZero(dt.getDate()) + "-" + this.preZero(dt.getMonth() + 1) + "-" + dt.getFullYear();
    // removed by dead control flow

  }
  preZero(val) {
    return val < '10' ? '0' + val : val;
  }
  mapsCalc(from, to) {
    var myLatLng1 = {
      lat: 12.923050,
      lng: 77.624190
    };
    var myLatLng2 = {
      lat: 12.906100,
      lng: 77.580450
    };
    var myPos = {
      lat: 12.910620,
      lng: 77.575180
    };
    if (google && google.maps && google.maps.geometry) {} else if (google && google.maps) {} else {}
  }
  goToSlide(slide, slideNum, tabName) {
    if (tabName == 'lower') {
      var _this$swiperRef;
      (_this$swiperRef = this.swiperRef) === null || _this$swiperRef === void 0 || _this$swiperRef.nativeElement.swiper.slidePrev(500, false);
      this.content.scrollToTop();
    } else if (tabName == "upper") {
      var _this$swiperRef2;
      (_this$swiperRef2 = this.swiperRef) === null || _this$swiperRef2 === void 0 || _this$swiperRef2.nativeElement.swiper.slideNext(500, false);
      this.content.scrollToTop();
    }
    this.tabName = tabName;
  }
  onSlideChanged(slides) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this$swiperRef3;
        const currentIndex = yield (_this$swiperRef3 = _this.swiperRef) === null || _this$swiperRef3 === void 0 ? void 0 : _this$swiperRef3.nativeElement.swiper.activeIndex;
        switch (currentIndex) {
          case 0:
            _this.tabName = "lower";
            break;
          case 1:
            _this.tabName = "upper";
            break;
          default:
            _this.tabName = "lower";
            break;
        }
      } catch (e) {}
    })();
  }
  selectBoarding(slide, stage) {
    var _this$metaData;
    if (!stage) {
      return;
    }
    this.commonStorage.setItem('boardingStage', stage);
    this.commonStorage.localSet('boardingTime', (stage === null || stage === void 0 ? void 0 : stage.stime) || (stage === null || stage === void 0 ? void 0 : stage.time));
    this.selectedBp = stage.name;
    this.BP = stage;
    if (((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'seabirdThemeNew') {
      // seabirdThemeNew: stay on boarding tab; Next button handles navigation
    } else if (!this.DP) {
      var _this$swiperRef4;
      (_this$swiperRef4 = this.swiperRef) === null || _this$swiperRef4 === void 0 || _this$swiperRef4.nativeElement.swiper.slideNext(500, false);
      this.tabName = 'upper';
      const content = this.contents.first;
      if (content) {
        content.scrollToTop(500);
      }
    } else {
      this.gotoPassengerdetailsPage();
    }
    if (this.BP) {
      this.isSlideGo = true;
    } else {
      this.isSlideGo = false;
    }
  }
  selectDropping(slide, stage) {
    var _this$metaData2;
    if (!stage) {
      return false;
    }
    this.commonStorage.setItem('droppingStage', stage);
    this.commonStorage.localSet('droppingTime', (stage === null || stage === void 0 ? void 0 : stage.stime) || (stage === null || stage === void 0 ? void 0 : stage.time));
    const boardingTimeRaw = this.commonStorage.localGet('boardingTime');
    const droppingTimeRaw = this.commonStorage.localGet('droppingTime');
    if (boardingTimeRaw && droppingTimeRaw) {
      const d1 = new Date(boardingTimeRaw);
      const d2 = new Date(droppingTimeRaw);
      if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
        this.date1 = d1;
        this.date2 = d2;
        const timeDifference = this.date2.getTime() - this.date1.getTime();
        if (timeDifference >= 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
          const formattedMinutes = minutes.toString().padStart(2, '0');
          if (this.isreturnTrip) {
            this.commonStorage.localSet('timeDifferenceDayReturn', days);
            this.commonStorage.localSet('timeDifferenceHourReturn', hours);
            this.commonStorage.localSet('timeDifferenceMinuteReturn', formattedMinutes);
          } else {
            this.commonStorage.localSet('timeDifferenceDay', days);
            this.commonStorage.localSet('timeDifferenceHour', hours);
            this.commonStorage.localSet('timeDifferenceMinute', formattedMinutes);
          }
        }
      }
    }
    this.selectedDp = stage.name;
    if (this.isreturnTrip) this.globalData.ARRIVAL_DATE_RETURN = this.dateService.getDateObject(stage.travel_date);else this.globalData.ARRIVAL_DATE = this.dateService.getDateObject(stage.travel_date);
    this.DP = stage;
    if (!this.BP) {
      var _this$swiperRef5;
      (_this$swiperRef5 = this.swiperRef) === null || _this$swiperRef5 === void 0 || _this$swiperRef5.nativeElement.swiper.slidePrev(500, false);
      const content = this.contents.first;
      content.scrollToTop();
      return false;
    }
    if (((_this$metaData2 = this.metaData) === null || _this$metaData2 === void 0 ? void 0 : _this$metaData2.msiteFolder) === 'seabirdThemeNew') {
      // seabirdThemeNew: stay on dropping tab; Next button handles navigation
      return false;
    }
    this.gotoPassengerdetailsPage();
    return false;
  }
  gotoPassengerdetailsPage() {
    if (this.isreturnTrip) {
      var res = this.commonStorage.localGet('reservationDataReturn');
      res.boardingStage = this.BP;
      res.droppingStage = this.DP;
      this.commonStorage.localSet('reservationDataReturn', res);
    } else {
      var res = this.commonStorage.localGet('reservationData');
      res.boardingStage = this.BP;
      res.droppingStage = this.DP;
      this.commonStorage.localSet('reservationData', res);
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.cleverTapSelectSeatsEvent();
      if (this.isreturnTrip) {
        this.globalData.DEPARTURE_DATE_RETURN = this.globalData.DEPARTURE_DATE_RETURN;
      } else {
        if (this.globalData.DEPARTURE_DATE_RETURN.formattedDate == undefined) {
          if (Object.keys(this.commonStorage.localGet('travelDateReturn')).length != 0) {
            this.globalData.DEPARTURE_DATE_RETURN = JSON.parse(this.globalData.DEPARTURE_DATE_RETURN);
          } else {
            this.globalData.DEPARTURE_DATE_RETURN = this.globalData.DEPARTURE_DATE_RETURN;
          }
        }
      }
    }
    if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate && !this.isreturnTrip) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('available-routes', navigationExtras);
    } else if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate && this.isreturnTrip) {
      if (this.globalData.DEPARTURE_DATE_RETURN && this.returnSeatDetails == undefined && this.isreturnTrip) {
        let navigationExtras = {
          queryParams: {
            is_return_trip: true
          }
        };
        this.navCtrl.navigateForward('available-routes', navigationExtras);
      } else {
        let navigationExtras = {
          queryParams: {
            is_return_trip: true
          }
        };
        this.navCtrl.navigateForward('passenger-details', navigationExtras);
      }
    } else if (this.globalData.DEPARTURE_DATE_RETURN && this.isreturnTrip) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('passenger-details', navigationExtras);
    } else {
      this.navCtrl.navigateForward('passenger-details');
    }
  }
  // seabirdThemeNew nearest strip: reads the backend's is_nearest / nearest_distance from the in-memory store
  // (filled by getServiceDetails). `list` is the existing boarding or dropping list; no distance is calculated or compared.
  sbNearest(list, listType) {
    if (!Array.isArray(list) || !list.length) {
      return null;
    }
    const entries = this.sbNearestEntries();
    if (!entries) {
      return null;
    }
    for (const stop of list) {
      const info = stop ? entries.get(stop.id + '|' + stop.city_id) : undefined;
      if (info && info.is_nearest === true && info.nearest_distance !== null && info.nearest_distance !== undefined && String(info.nearest_distance).trim() !== '') {
        return {
          name: stop.name,
          distance: info.nearest_distance,
          nearest: info.is_nearest
        };
      }
    }
    return null;
  }
  sbNearestEntries() {
    const ret = this.isreturnTrip ? '_RET' : '';
    const serviceKey = [this.commonStorage.localGet('RES_ID' + ret), this.commonStorage.localGet('ORIGIN_ID' + ret), this.commonStorage.localGet('DESTINATION_ID' + ret), this.isreturnTrip ? 'return' : 'onward'].map(String).join('|');
    return this.locationProvider.getNearestInfo(serviceKey);
  }
  // Distance string for one stop exactly as the backend sent it ("2.1 km"), or null
  sbStopDistance(point) {
    const entries = this.sbNearestEntries();
    const info = entries && point ? entries.get(point.id + '|' + point.city_id) : undefined;
    const d = info === null || info === void 0 ? void 0 : info.nearest_distance;
    return d !== null && d !== undefined && String(d).trim() !== '' ? String(d) : null;
  }
  gotoMap(event, type) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation();
      var title = "";
      if (type == 1) {
        title = "Search for closet place to Board ";
      } else {
        title = "Search for closet place to Drop ";
      }
      const modal = yield _this2.modalController.create({
        component: _map_search_map_search_page__WEBPACK_IMPORTED_MODULE_1__.MapSearchPage,
        componentProps: {
          destination: {},
          boardingPoint: "",
          title: title
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data !== undefined && typeof data === 'object' && Object.keys(data).length !== 0) {
        if (type == 1) {
          _this2.helpBp = true;
          _this2.mapCalBp(data.data);
        } else {
          _this2.helpDp = true;
          _this2.mapCalDp(data.data);
        }
      }
    })();
  }
  mapCalBp(pos) {
    var myPos = pos;
    var myLatLng1 = {};
    for (var i = 0; i < this.boardingPoints.length; i++) {
      if (this.boardingPoints[i].latitude && this.boardingPoints[i].longitude) {
        myLatLng1 = {
          lat: parseFloat(this.boardingPoints[i].latitude),
          lng: parseFloat(this.boardingPoints[i].longitude)
        };
        if (google && google.maps && google.maps.geometry) {
          var dist = google.maps.geometry.spherical.computeDistanceBetween(myPos, new google.maps.LatLng(myLatLng1));
          this.boardingPoints[i].distance = (dist / 1000.0).toFixed(2);
        } else {
          this.boardingPoints[i].distance = "N/A";
        }
      }
    }
    this.boardingPoints.sort((a, b) => {
      return a.distance - b.distance;
    });
  }
  mapCalDp(pos) {
    var myPos = pos;
    var myLatLng1 = {};
    for (var i = 0; i < this.droppingPoints.length; i++) {
      if (this.droppingPoints[i].latitude && this.droppingPoints[i].longitude) {
        myLatLng1 = {
          lat: parseFloat(this.droppingPoints[i].latitude),
          lng: parseFloat(this.droppingPoints[i].longitude)
        };
        if (google && google.maps && google.maps.geometry) {
          var dist = google.maps.geometry.spherical.computeDistanceBetween(myPos, new google.maps.LatLng(myLatLng1));
          this.droppingPoints[i].distance = (dist / 1000.0).toFixed(2);
        } else {
          this.droppingPoints[i].distance = "N/A";
        }
      }
    }
    this.droppingPoints.sort((a, b) => {
      return a.distance - b.distance;
    });
  }
  gotoMaps(stage) {
    if (this.platform.is('ios')) {
      const url = `http://maps.apple.com/maps?q=${stage.latitude},${stage.longitude}`;
      const browser = this.inAppBrowser.create(url, '_system');
      browser.show();
    } else {
      var url = 'http://maps.google.com/maps?q=loc:' + stage.latitude + ',' + stage.longitude;
      window.open(url, '_system');
    }
  }
  searchStage(ev) {
    this.searchKey = ev.target.value;
  }
  searchStageDrop(ev) {
    this.searchKeyDrop = ev.target.value;
  }
  leadingZero(day) {
    if (day == null) {
      // checks for both null and undefined
      return '00';
    }
    return day.toString().padStart(2, '0');
  }
  formatteddate(myDate) {
    const dateParts = myDate.split('/'); // Split the string into day, month, year
    const date = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]); // Convert to Date object
    return myDate = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short'
    }).format(date);
  }
  cleverTapSelectSeatsEvent() {
    let tripLeg = null;
    if (this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
      tripLeg = this.isreturnTrip ? "return" : "departure";
    }
    let platform = this.appData.isIOS ? 'IOS' : this.appData.isWEBAPP ? 'Mobweb' : "Android";
    let passengerCount = this.commonStorage.localGet("ourbusPassengerCount");
    if (passengerCount < 10) {
      passengerCount = passengerCount.substring(1);
    }
    let resData = this.commonStorage.localGet("reservationData");
    let resDataReturn = this.commonStorage.localGet("reservationDataReturn");
    let data = {
      "trip_leg": tripLeg,
      "departure_pick_stop_name": !this.isreturnTrip ? resData.boardingStage.name : null,
      "departure_drop_stop_name": !this.isreturnTrip ? resData.droppingStage.name : null,
      "return_pick_stop_name": this.isreturnTrip ? resDataReturn.boardingStage.name : null,
      "return_drop_stop_name": this.isreturnTrip ? resDataReturn.droppingStage.name : null,
      "departure_pick_time": !this.isreturnTrip ? resData.boardingStage.time : null,
      "departure_drop_time": !this.isreturnTrip ? resData.droppingStage.time : null,
      "return_pick_time": this.isreturnTrip ? resDataReturn.boardingStage.time : null,
      "return_drop_time": this.isreturnTrip ? resDataReturn.droppingStage.time : null,
      "departure_pick_date": !this.isreturnTrip ? resData.boardingStage.travel_date : null,
      "departure_drop_date": !this.isreturnTrip ? resData.droppingStage.travel_date : null,
      "return_pick_date": this.isreturnTrip ? resDataReturn.boardingStage.travel_date : null,
      "return_drop_date": this.isreturnTrip ? resDataReturn.droppingStage.travel_date : null,
      "departure_stop_combination": !this.isreturnTrip ? resData.boardingStage.name + " - " + resData.droppingStage.name : null,
      "return_stop_combination": this.isreturnTrip ? resDataReturn.boardingStage.name + " - " + resDataReturn.droppingStage.name : null,
      "boarding_from": this.origin.name,
      "dropping_to": this.destination ? this.destination.name : null,
      "amount": this.isreturnTrip ? resDataReturn.totalBookingAmount : resData.totalBookingAmount,
      "platform": platform,
      "passenger_count": passengerCount
    };
    this.util.cleverTapEvent('select_seats', data);
  }
}
_StageDetailsPage = StageDetailsPage;
_StageDetailsPage.ɵfac = function StageDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_7__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_9__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_13__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_14__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_plugin_service__WEBPACK_IMPORTED_MODULE_15__.PluginProvider));
};
_StageDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _StageDetailsPage,
  selectors: [["app-stage-details"]],
  viewQuery: function StageDetailsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contents = _t);
    }
  },
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["content", ""], ["mySlider", ""], [4, "ngIf"], [1, "ion-no-border", "theme1", 3, "ngStyle"], ["showsubTxt", "true", "showsubtitle", "true", 3, "title", "subtitle"], [3, "ngClass"], [2, "position", "absolute", "z-index", "8888", "top", "70px", "--background", "transparent", 3, "ngStyle", "scrollY"], [1, "themeone-bg-page", "theme1", 2, "padding-bottom", "75px", "height", "100%"], [1, "themeone-center", 2, "height", "100%"], ["mode", "md", 3, "ngModelChange", "ngModel", "ngClass"], ["mode", "md", "value", "lower", 3, "click"], ["mode", "md", "value", "upper", 3, "click"], ["pagination", "false", "options", "slideOpts", 2, "padding-top", "62px", "height", "100%", 3, "swiperslidechange"], ["id", "lower", 3, "ngClass"], ["placeholder", "Search location", "mode", "md", 1, "themeone-search-stage", 2, "padding", "8px 16px", 3, "ionInput"], ["lines", "none", 2, "margin-top", "0px", "padding-top", "0px"], [4, "ngFor", "ngForOf"], ["id", "upper", 3, "ngClass"], ["button", "", 1, "themeone-stage-card", 2, "width", "102%", 3, "click"], ["name", "radio-button-on", "slot", "start", "style", "    margin-right: 15px;", 3, "ngClass", 4, "ngIf"], ["name", "radio-button-off", "slot", "start", "style", "    margin-right: 15px;", 3, "ngClass", 4, "ngIf"], [1, "themeone-stage-card-label"], [1, "themeone-label-head"], [1, "themeone-txt-bp-name"], [1, "themeone-txt-rt"], ["class", "txt-bp-adrss", "style", "color: #5F5F5F; padding-top: 5px; margin-right: 25%;", 4, "ngIf"], ["class", "themeone-label-foot", 4, "ngIf"], ["name", "radio-button-on", "slot", "start", 2, "margin-right", "15px", 3, "ngClass"], ["name", "radio-button-off", "slot", "start", 2, "margin-right", "15px", 3, "ngClass"], [1, "txt-bp-adrss", 2, "color", "#5F5F5F", "padding-top", "5px", "margin-right", "25%"], [1, "themeone-label-foot"], ["class", "themeone-dis-txt", 4, "ngIf"], ["style", "    display: flex;justify-content: end; align-items: center;    position: absolute;right: 10%;", 4, "ngIf"], [1, "themeone-dis-txt"], [2, "display", "flex", "justify-content", "end", "align-items", "center", "position", "absolute", "right", "10%"], ["src", "./assets/icon/cbuslocation.svg", "slot", "start", 2, "height", "20px", "width", "20px"], ["button", "", 1, "themeone-viewmap-txt", 3, "click"], ["style", "    display: flex;justify-content: end; align-items: center;    position: absolute;\n    right: 10%;", 4, "ngIf"], ["mode", "md", 1, "bg-cl", "tlbr-center"], ["slot", "start"], [3, "click"], [1, "hd-ln-1"], [1, "hd-ln-2"], [3, "scrollY"], ["mode", "md", "color", "red", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 2, "background-color", "#fff", "padding-bottom", "10px", 3, "click"], [2, "text-align", "start", "margin-top", "10px", "margin-bottom", "10px"], [1, "lbl-hd1"], [1, "lbl-hd2"], ["mode", "md", "value", "upper", 2, "background-color", "#fff", "border-left", "2px solid #f3f3f3", "padding-bottom", "10px", 3, "click"], ["pagination", "false", "options", "slideOpts", 2, "padding-top", "15px", "overflow-y", "scroll", "height", "94%", 3, "swiperslidechange"], ["id", "lower", 1, "slide"], [2, "background", "#e6e6e6"], [1, "selectBPDP"], ["lines", "none", 2, "margin-top", "0px"], ["id", "upper", 1, "slide"], ["button", "", 1, "RemoveIcon", "bpdp-item", 3, "click", "ngStyle"], ["name", "radio-button-on", "color", "red", "class", "select-boardin-droping-bt", 4, "ngIf"], ["name", "radio-button-off", "color", "medium", "class", "select-boardin-droping-bt", 4, "ngIf"], [1, "bpdp-header"], [1, "bpdp-name"], [1, "bpdp-time"], ["style", "height: 30px;", 4, "ngIf"], ["name", "radio-button-on", "color", "red", 1, "select-boardin-droping-bt"], ["name", "radio-button-off", "color", "medium", 1, "select-boardin-droping-bt"], [2, "height", "30px"], ["class", "map", 4, "ngIf"], [1, "map"], ["src", "./assets/icon/maps-and-flags.png", 2, "height", "15px", "width", "15px"], [2, "background-color", "var(--primary)", "color", "var(--placeholderColor)", 3, "ngStyle"], [1, "seabird_header-content"], [1, "seabird_title-container"], ["mode", "md", "slot", "start"], [1, "seabird_main-title"], [1, "seabird_origin-destination"], [1, "seabird_content", 3, "scrollY"], ["mode", "md", 1, "seabird_segment", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "seabird_seg_button", 2, "background-color", "#fff", "text-transform", "capitalize", "color", "transparent", 3, "click"], ["mode", "md", "value", "upper", 2, "background-color", "#fff", "text-transform", "capitalize", "color", "transparent", 3, "click"], ["pagination", "false", "options", "slideOpts", 2, "height", "90%", 3, "swiperslidechange"], ["lines", "none", 1, "seabird_list"], [1, "seabird_item_heading"], [1, "seabird_item"], ["button", "", 1, "seabird_item_content", 3, "click"], [1, "seabird_item_text", 2, "margin-top", "10px"], [1, "seabird_item_time_name"], [1, "seabird_item_time"], [1, "seabird_item_name"], ["class", "seabird_item_address", 4, "ngIf"], ["slot", "end", 1, "seabird_radio", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", "color", "var(--iconsAndButtonsColor) !important", 3, "name"], ["class", "seabird_map_item", 4, "ngIf"], [1, "seabird_item_address"], [1, "seabird_map_item"], [1, "seabird_map_content", 3, "click"], ["src", "./assets/icon/maps-and-flags.png", "alt", "", 1, "seabird_map_icon"], [1, "seabird_map_link"], ["class", "seabird_map_distance", 4, "ngIf"], [1, "seabird_map_distance"], ["slot", "end", 1, "seabird_radio_button", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", "color", "var(--iconsAndButtonsColor) !important", 3, "name"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--60"], [1, "sb-results-appbar", "sb-stage-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-appbar__text"], [1, "sb-appbar__title"], [1, "sb-appbar__subtitle"], ["role", "tablist", 1, "sb-trip-tabs", "sb-stage-tabs"], ["type", "button", "role", "tab", 1, "sb-tab-btn", 3, "click"], [1, "sb-stage"], ["class", "sb-seat-footer", 4, "ngIf"], [1, "sb-stage-search-wrap"], ["mode", "md", "placeholder", "Search boarding point", "searchIcon", "./assets/seabird-new/search-field.svg", "showClearButton", "focus", 1, "sb-city-search", "sb-stage-search", 3, "ionInput"], ["class", "sb-nearest", 4, "ngIf"], [1, "sb-stops"], ["class", "sb-city-empty", 4, "ngIf"], [1, "sb-nearest"], ["src", "./assets/seabird-new/location-pin-teal-16.svg", "alt", "", "width", "16", "height", "16"], ["role", "radio", "tabindex", "0", 1, "sb-stop", 3, "click"], [1, "sb-stop__side"], [1, "sb-stop__time"], ["type", "button", "class", "sb-stop__map", 3, "click", 4, "ngIf"], [1, "sb-stop__text"], [1, "sb-stop__name"], ["class", "sb-stop__addr", 4, "ngIf"], [1, "sb-radio"], ["type", "button", 1, "sb-stop__map", 3, "click"], [1, "sb-stop__addr"], [1, "sb-city-empty"], ["mode", "md", "placeholder", "Search dropping point", "searchIcon", "./assets/seabird-new/search-field.svg", "showClearButton", "focus", 1, "sb-city-search", "sb-stage-search", 3, "ionInput"], [1, "sb-seat-footer"], [1, "sb-seat-footer__summary"], [1, "sb-seat-footer__seats"], ["type", "button", "class", "sb-btn-primary sb-stage-footer__btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "sb-btn-primary sb-stage-footer__btn", 3, "disabled", "click", 4, "ngIf"], [1, "sb-stage-footer__value"], [1, "sb-stage-footer__time"], ["type", "button", 1, "sb-btn-primary", "sb-stage-footer__btn", 3, "click"], ["type", "button", 1, "sb-btn-primary", "sb-stage-footer__btn", 3, "click", "disabled"], [1, "ourbustheme"], ["class", "hd-ln-1", "style", "text-align: left;margin-left: 10px;font-size: 16px;", 4, "ngIf"], [1, "ourbus-hd-ln"], ["src", "./assets/icon/ourbus_header_person_icon.svg", 1, "ourbus-inline-icon"], ["mode", "md", 1, "ourbus-segment", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "ourbus-segment-button", 3, "click"], [1, "ourbus-segment-col"], [1, "lbl-hd1", 2, "color", "var(--iconsAndButtonsColor)"], [1, "lbl-hd2", 2, "color", "var(--iconsAndButtonsColor)"], ["mode", "md", "value", "upper", 1, "ourbus-segment-button", 3, "click", "disabled"], ["pagination", "false", "options", "slideOpts", 2, "padding-top", "15px", "overflow-y", "scroll", 3, "swiperslidechange"], ["lines", "none"], [1, "hd-ln-1", 2, "text-align", "left", "margin-left", "10px", "font-size", "16px"], [2, "border-bottom", "1px solid rgba(128,128,128,0.3)"], ["button", "", 1, "ourbus_list_item", 3, "click"], [2, "width", "100%"], ["size", "1.5", 1, "ion-col", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "ourbus-ion-radio", 3, "name"], ["size", "8", 1, "ion-col"], [1, "txt-bp-name", 2, "width", "250px"], ["class", "txt-bp-adrss", 4, "ngIf"], ["size", "2.5", 1, "ion-col"], [1, "txt-rt", 2, "text-align", "end", "font-size", "14px"], ["button", "", "class", "ourbus_list_item", 3, "click", 4, "ngIf"], [1, "txt-bp-adrss"], ["size", "12", 1, "ion-col", 2, "padding", "0"], [2, "display", "flex", "align-items", "center"], ["src", "./assets/icon/maps-and-flags.png", "alt", "Map icon", 2, "width", "15px", "height", "15px", "margin-left", "5px"], [2, "font-size", "12px", "margin-left", "20px"], ["class", "dis-txt", 4, "ngIf"], [1, "dis-txt"], ["mode", "md", 1, "shyamolitheme-bg-cl", "tlbr-center"], ["mode", "md", 1, "shyamoli_themeone-segment_2", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 2, "font-size", "12px", 3, "click"], ["height", "100%", 1, "shyamolitheme-content", 3, "scrollY"], ["pagination", "false", "options", "slideOpts", 2, "padding", "15px 10px 0px 10px", "overflow-y", "scroll", "height", "94%", 3, "swiperslidechange"], ["placeholder", "Search pick-up point", "mode", "md", 1, "custom-searchbar", 3, "ionInput"], ["lines", "none", 1, "location-list"], ["placeholder", "Search drop-off point", "mode", "md", 1, "custom-searchbar", 3, "ionInput"], [1, "location-card", 3, "click"], ["size", "1.2", 1, "ion-no-padding"], ["name", "radio-button-on", "class", "radio-icon selected", 4, "ngIf"], ["name", "radio-button-off", "class", "radio-icon", 4, "ngIf"], ["size", "7.8", 1, "ion-no-padding"], ["size", "3", 1, "ion-no-padding", 2, "text-align", "end"], [1, "time"], ["class", "address", 4, "ngIf"], [1, "map-link"], ["class", "phone", 4, "ngIf"], ["style", "    display: contents;align-items: center;color: #ff9f00;font-weight: 500;font-size: 14px;", 4, "ngIf"], ["name", "radio-button-on", 1, "radio-icon", "selected"], ["name", "radio-button-off", 1, "radio-icon"], [1, "address"], [1, "phone"], [2, "display", "contents", "align-items", "center", "color", "#ff9f00", "font-weight", "500", "font-size", "14px"], ["src", "./assets/icon/maps-and-flags.png", 1, "map-icon"], ["button", "", 1, "view-map", 3, "click"], ["style", "\n            display: contents;\n            align-items: center;\n            color: #ff9f00;\n            font-weight: 500;\n            font-size: 14px;\n          ", 4, "ngIf"]],
  template: function StageDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, StageDetailsPage_ng_container_0_Template, 27, 35, "ng-container", 2)(1, StageDetailsPage_ng_container_1_Template, 39, 17, "ng-container", 2)(2, StageDetailsPage_ng_container_2_Template, 38, 28, "ng-container", 2)(3, StageDetailsPage_ng_container_3_Template, 21, 10, "ng-container", 2)(4, StageDetailsPage_ng_container_4_Template, 44, 24, "ng-container", 2)(5, StageDetailsPage_ng_container_5_Template, 29, 21, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_18__.CommonHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_19__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_20__.FilterPipe],
  styles: [".hd-ln-1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 25px 0 0;\n}\n\n.hd-ln-2[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 2;\n  text-align: center;\n  margin: 0 25px 0 0;\n}\n\n.tlbr-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-right: 15px;\n}\n\n.slide[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #f7f9fb;\n  display: flex;\n  flex-direction: column;\n  justify-content: initial;\n}\n\n.themeone_slide[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: initial;\n}\n\n.lbl-hd1[_ngcontent-%COMP%] {\n  text-transform: unset;\n  font-family: NotoSans;\n  font-size: 16px;\n  color: #747f8d;\n}\n\n.lbl-hd2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 13px;\n  color: #3e3e53;\n  text-transform: capitalize;\n  margin: -4px 0;\n}\n\n.img-lbl[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 30px;\n  object-fit: contain;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 8%;\n}\n\n.txt-bp-name[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n}\n\n.txt-rt[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.dis-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  color: blue;\n}\n\n.txt-bp-adrss[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: 500;\n  color: #989898;\n}\n\n.loc-hd1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n\n.loc-hd2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  color: #4a4a4a;\n}\n\n.crd-bp[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  text-align: left;\n  box-shadow: 0 0 0;\n}\n\nion-item-divider[_ngcontent-%COMP%]   .selectBPDP[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  color: var(--iconsAndButtonsColor);\n  font-weight: bold;\n  font-size: 15px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  bottom: 4px;\n}\n\n.item.sc-ion-label-md-h[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%] {\n  --color: initial;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  \n\n  \n\n  overflow: hidden;\n  box-sizing: border-box;\n  text-overflow: unset;\n  white-space: unset;\n}\n\n.themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\n.themeone-search-stage[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --border-radius: 5px;\n  background: #ffffff;\n  text-align: initial;\n}\n\n.themeone-segment[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-bottom: 1px solid #a9a9aa;\n}\n.themeone-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  color: #191966 !important;\n  --indicator-color: #191966 !important;\n}\n.themeone-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 2px;\n  font-size: 14px;\n  text-transform: inherit;\n  display: inline-table;\n  color: #5F5F5F;\n  font-weight: 600;\n}\n\n.themeone-segment_2[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-bottom: 1px solid #a9a9aa;\n}\n.themeone-segment_2[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--bottomBarColor) !important;\n  --indicator-color: var(--bottomBarColor) !important;\n}\n.themeone-segment_2[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 2px;\n  font-size: 14px;\n  text-transform: inherit;\n  display: inline-table;\n  color: #5F5F5F;\n  font-weight: 600;\n}\n\n.themeone-stage-card[_ngcontent-%COMP%] {\n  margin: 4px 4px;\n}\n\n.themeone-stage-card-label[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px 0px 11px 0px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.themeone-label-head[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  font-weight: 600;\n}\n\n.themeone-txt-bp-name[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #333;\n  font-size: 12px;\n  width: 75%;\n}\n\n.themeone-txt-rt[_ngcontent-%COMP%] {\n  color: #333;\n  width: 25%;\n  text-align: right;\n  font-size: 12px;\n}\n\n.themeone-label-foot[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n.themeone-dis-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #191966;\n  font-size: 12px;\n  width: 50%;\n  margin-top: auto;\n  font-weight: 500;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n}\n\n.seabird_header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.seabird_title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n\n.seabird_main-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.seabird_origin-destination[_ngcontent-%COMP%] {\n  margin-left: 48px;\n  font-size: 10px;\n  color: var(--homaPageHeadingTextColor);\n  transform: translateY(-19px);\n  text-align: left;\n}\n\n.seabird_content[_ngcontent-%COMP%] {\n  --background: #F1F7FA;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.seabird_segment[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0.5px solid #626262;\n  margin-top: 10px;\n  border-radius: 8px;\n  padding: 16px 10px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-top: 23px;\n  padding-bottom: 0px;\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.seabird_point[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  text-align: center;\n  color: #000000;\n  border: 0.5px solid #626262;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #fff;\n  width: 150px;\n}\n\n.seabird_point_selected[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 10px;\n  text-align: center;\n  color: #000000;\n  border: 0.5px solid #626262;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #DCEEFF;\n  width: 150px;\n}\n\n.seabird_header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.seabird_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.seabird_item_content.selected[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.1) !important;\n}\n.seabird_item_content.selected[_ngcontent-%COMP%]   .seabird_radio[_ngcontent-%COMP%], \n.seabird_item_content.selected[_ngcontent-%COMP%]   .seabird_radio_button[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor) !important;\n}\n\n.seabird_radio[_ngcontent-%COMP%], \n.seabird_radio_button[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  transition: color 0.3s ease;\n}\n\n.seabird_item_text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.seabird_item_time_name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.seabird_item_time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 20px;\n}\n\n.seabird_item_name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  flex: 1;\n}\n\n.seabird_item_address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  width: 100%;\n  font-weight: 400;\n  color: #999999;\n}\n\n.seabird_map_item[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n}\n\n.seabird_map_content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.seabird_map_icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n}\n\n.seabird_map_link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 10px;\n  text-align: center;\n}\n\n.seabird_map_distance[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  border: solid 1px gray;\n  border-radius: 10px;\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.seabird_item_heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.seabird_radio[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin: 0px;\n}\n\n.ourbus-hd-ln[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #747474;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #757575;\n  --indicator-color: transparent;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --color: var(--iconsAndButtonsColor) !important;\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n}\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .lbl-hd1[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .lbl-hd2[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  --color:var(--iconsAndButtonsColor) !important;\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light) !important;\n}\n.selected[_ngcontent-%COMP%]   .ourbus-ion-radio[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor) !important;\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.ourbus-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 10px;\n}\n\n.ourbus-segment-col[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.ion-col[_ngcontent-%COMP%] {\n  padding-inline-end: 0px;\n  padding-inline-start: 0px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --padding-top: env(safe-area-inset-top);\n}\n\n.curved-corner[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #191966;\n  color: #ffffff;\n}\n\n.curved-corner_2[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: var(--homeBgColor) !important;\n  color: #ffffff;\n}\n\n.theme1_radio[_ngcontent-%COMP%] {\n  color: #191966;\n  --color-checked:#191966;\n}\n\n.theme1_radio_2[_ngcontent-%COMP%] {\n  color: var(--bottomBarColor);\n  --color-checked:var(--bottomBarColor);\n}\n\nion-item.themeone-stage-card[_ngcontent-%COMP%]::part(detail-icon), \nion-item.seabird_item_content[_ngcontent-%COMP%]::part(detail-icon), \nion-item.ourbus_list_item[_ngcontent-%COMP%]::part(detail-icon), \nion-item.RemoveIcon[_ngcontent-%COMP%]::part(detail-icon) {\n  opacity: 0;\n}\n\n.map[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n  display: flex;\n  justify-content: normal;\n  align-items: center;\n  position: absolute;\n  top: 0%;\n  width: 100%;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\n\n.shyamolitheme-bg-cl[_ngcontent-%COMP%] {\n  color: var(--placeholderColor) !important;\n}\n.shyamolitheme-bg-cl[_ngcontent-%COMP%]   .hd-ln-1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.shyamolitheme-bg-cl[_ngcontent-%COMP%]   .hd-ln-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5F5F5F;\n}\n.shyamolitheme-bg-cl[_ngcontent-%COMP%]   .shyamoli_themeone-segment_2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 20;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-bottom: 1px solid #a9a9aa;\n}\n.shyamolitheme-bg-cl[_ngcontent-%COMP%]   .shyamoli_themeone-segment_2[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 2px;\n  display: inline-table;\n  color: #5F5F5F;\n  font-weight: 600;\n  font-size: 12px !important;\n  text-transform: none !important;\n}\n\n.shyamolitheme-content[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .custom-searchbar[_ngcontent-%COMP%] {\n  --background: #fff5d8;\n  --border-radius: 25px;\n  --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  height: 50px;\n  padding: 0 10px;\n  background-color: var(--viewBgColor);\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .location-list[_ngcontent-%COMP%] {\n  margin-top: 0;\n  background-color: var(--viewBgColor);\n  padding-top: 16px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #D9D9D9;\n  margin-bottom: 15px;\n  transition: transform 0.2s ease;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #999;\n  margin-right: 6px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .radio-icon.selected[_ngcontent-%COMP%] {\n  color: #ff9f00;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n  \n\n  color: #333333;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #444;\n  font-weight: 500;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  margin-top: 6px;\n  line-height: 1.4;\n  margin-left: 25px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n  margin-top: 4px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .map-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #ff9f00;\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: 25px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .map-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n}\n.shyamolitheme-content[_ngcontent-%COMP%]   .view-map[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.select-boardin-droping-bt[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.bpdp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 14px;\n}\n\n.bpdp-name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: normal;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.bpdp-time[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-align: right;\n}\n\n.bpdp-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n}"]
});

/***/ }

}]);