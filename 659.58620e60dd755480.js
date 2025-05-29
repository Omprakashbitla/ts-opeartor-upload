(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[659],{

/***/ 9930:
/*!********************************************************!*\
  !*** ./modules/ion-bottom-drawer/ion-bottom-drawer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IonBottomDrawerComponent: () => (/* binding */ IonBottomDrawerComponent)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 64511);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer-state */ 3641);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var src_app_services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common-storage */ 96970);
/* harmony import */ var src_app_services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-factory */ 59348);
/* harmony import */ var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global-data.service */ 7516);
/* harmony import */ var src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication */ 82491);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common-service */ 6036);
/* harmony import */ var src_app_services_appdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/appdata */ 40172);
/* harmony import */ var src_app_services_util_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/util-provider */ 81101);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 89417);

var _IonBottomDrawerComponent;



















const _c0 = ["mySlider"];
const _c1 = ["mySlider2"];
const _c2 = () => ({
  "padding-top": "50px"
});
const _c3 = () => ({});
function IonBottomDrawerComponent_ng_container_0_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_0_div_44_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 47);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_44_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_div_44_ion_row_17_Template_ion_col_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const bp_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.gotoMaps(bp_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "View on map");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function IonBottomDrawerComponent_ng_container_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 38)(2, "ion-row", 39)(3, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, IonBottomDrawerComponent_ng_container_0_div_44_div_7_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 44)(9, "ion-row")(10, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, IonBottomDrawerComponent_ng_container_0_div_44_ion_row_17_Template, 5, 0, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bp_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r7.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r8 != ctx_r1.bps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", bp_r7.name.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](12, 5, bp_r7.name, 0, 60) + "..." : bp_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", bp_r7.address.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](16, 9, bp_r7.address, 0, 60) + "..." : bp_r7.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", bp_r7.latitude != null);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_47_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 47);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_47_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_div_47_ion_row_17_Template_ion_col_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const dp_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.gotoMaps(dp_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "View on map");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
}
function IonBottomDrawerComponent_ng_container_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 38)(2, "ion-row", 39)(3, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, IonBottomDrawerComponent_ng_container_0_div_47_div_7_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col", 44)(9, "ion-row")(10, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, IonBottomDrawerComponent_ng_container_0_div_47_ion_row_17_Template, 5, 0, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const dp_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r10.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r11 != ctx_r1.dps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", dp_r10.name.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](12, 5, dp_r10.name, 0, 60) + "..." : dp_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.dpAddress > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](16, 9, dp_r10.address, 0, 60) + "..." : dp_r10.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", dp_r10.latitude != null);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Rest stops available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_0_div_50_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 47);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-col", 53)(4, "ion-col", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, IonBottomDrawerComponent_ng_container_0_div_50_div_1_div_8_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rs_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", rs_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r13 != ctx_r1.restStop.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_0_div_50_div_1_Template, 9, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.restStop);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 57)(1, "ion-grid", 58)(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Amenities Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
}
function IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const amn_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", amn_r14.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const amn_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](amn_r14.amenities_name);
  }
}
function IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_div_1_Template, 2, 1, "div", 64)(2, IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_span_2_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const amn_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", amn_r14.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", amn_r14.amenities_name != null);
  }
}
function IonBottomDrawerComponent_ng_container_0_ion_list_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_0_ion_list_53_div_1_Template, 3, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.amenitiesList);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 69)(1, "ion-grid", 58)(2, "ion-row")(3, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Via City Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
}
function IonBottomDrawerComponent_ng_container_0_div_56_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 79);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_56_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 73)(1, "ion-grid", 74)(2, "ion-row", 39)(3, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, IonBottomDrawerComponent_ng_container_0_div_56_div_3_div_9_Template, 1, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rs_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](rs_r15.dept_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u00A0\u00A0", rs_r15.city_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r16 != ctx_r1.ViaCityDetails.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 71)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Via City Route");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, IonBottomDrawerComponent_ng_container_0_div_56_div_3_Template, 10, 3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.ViaCityDetails);
  }
}
function IonBottomDrawerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 3)(2, "ion-card", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, IonBottomDrawerComponent_ng_container_0_ion_icon_4_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-segment", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_ionChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-segment-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r4, 0, "boarding");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Boarding &");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, " Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r4, 1, "amenities");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Bus Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r4, 2, "viacity");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Via City");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "ion-content", 16)(25, "swiper-container", null, 0)(27, "swiper-slide", 17)(28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Boarding & Dropping Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ion-segment", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabNested, $event) || (ctx_r1.tabNested = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_ionChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.segmentChanged2($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "ion-segment-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider2_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r5, 0, "boardingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Boarding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-segment-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider2_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r5, 1, "droppingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ion-segment-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_0_Template_ion_segment_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const mySlider2_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r5, 2, "reststop"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Rest Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "swiper-container", null, 1)(42, "swiper-slide", 24)(43, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, IonBottomDrawerComponent_ng_container_0_div_44_Template, 18, 13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "swiper-slide", 27)(46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, IonBottomDrawerComponent_ng_container_0_div_47_Template, 18, 13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "swiper-slide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, IonBottomDrawerComponent_ng_container_0_div_49_Template, 2, 0, "div", 29)(50, IonBottomDrawerComponent_ng_container_0_div_50_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "swiper-slide", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](52, IonBottomDrawerComponent_ng_container_0_div_52_Template, 7, 0, "div", 32)(53, IonBottomDrawerComponent_ng_container_0_ion_list_53_Template, 2, 1, "ion-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "swiper-slide", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, IonBottomDrawerComponent_ng_container_0_div_55_Template, 7, 0, "div", 35)(56, IonBottomDrawerComponent_ng_container_0_div_56_Template, 4, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "themeone-card-hd1" : "card-hd");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "notch1" : "notch");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("scrollEvents", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabNested);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.dps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.restStop && ctx_r1.restStop.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.restStop && ctx_r1.restStop.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.amenitiesList == null || ctx_r1.amenitiesList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.amenitiesList && ctx_r1.amenitiesList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.ViaCityDetails == null || ctx_r1.ViaCityDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.ViaCityDetails && ctx_r1.ViaCityDetails.length > 0);
  }
}
function IonBottomDrawerComponent_ng_container_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " More about this bus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_1_div_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 106)(3, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_1_div_39_div_10_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bp_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r21.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", bp_r21.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r21.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r22 != ctx_r1.bps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 111)(3, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_1_div_42_div_10_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    const dp_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r23.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", dp_r23.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((tmp_8_0 = dp_r23 == null ? null : dp_r23.address) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "Address not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r24 != ctx_r1.dps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Rest stops available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_1_div_45_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, IonBottomDrawerComponent_ng_container_1_div_45_div_1_div_7_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rs_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", rs_r25.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r26 != ctx_r1.restStop.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_1_div_45_div_1_Template, 8, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("REST_STOPS"));
  }
}
function IonBottomDrawerComponent_ng_container_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 115)(1, "ion-grid", 58)(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Amenities Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
}
function IonBottomDrawerComponent_ng_container_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const amn_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", amn_r27.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](amn_r27.amenities_name);
  }
}
function IonBottomDrawerComponent_ng_container_1_ion_row_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" Between ", p_r28.time_limit_from, " to ", p_r28.time_limit_to, " from the station departure time: ", p_r28.percent, "% ");
  }
}
function IonBottomDrawerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 80)(2, "ion-card", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, IonBottomDrawerComponent_ng_container_1_ion_icon_4_Template, 1, 0, "ion-icon", 6)(5, IonBottomDrawerComponent_ng_container_1_div_5_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-segment", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-segment-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r19, 0, "boarding");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Boarding & Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-segment-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r19, 1, "amenities");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Bus Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-segment-button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r19, 2, "policies");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Bus Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-content", 90)(20, "swiper-container", 91, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_1_Template_swiper_container_ionSlideDidChange_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "swiper-slide", 92)(23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Boarding & Dropping Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-segment", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabNested, $event) || (ctx_r1.tabNested = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-segment-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r20, 0, "boardingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Boarding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-segment-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r20, 1, "droppingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-segment-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_1_Template_ion_segment_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r20, 2, "reststop"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Rest Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "swiper-container", 96, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_1_Template_swiper_container_ionSlideDidChange_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const mySlider2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged2(mySlider2_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "swiper-slide", 24)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, IonBottomDrawerComponent_ng_container_1_div_39_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "swiper-slide", 27)(41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, IonBottomDrawerComponent_ng_container_1_div_42_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "swiper-slide", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, IonBottomDrawerComponent_ng_container_1_div_44_Template, 2, 0, "div", 98)(45, IonBottomDrawerComponent_ng_container_1_div_45_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "swiper-slide", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, IonBottomDrawerComponent_ng_container_1_div_47_Template, 7, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "ion-list", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, IonBottomDrawerComponent_ng_container_1_div_49_Template, 4, 2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "swiper-slide", 102)(51, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, IonBottomDrawerComponent_ng_container_1_ion_row_54_Template, 2, 3, "ion-row", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r1.isIos && ctx_r1.state == 2 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](14, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](15, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "card-hd1" : "card-hd");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "notch1" : "notch");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabNested);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.dps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length < 1 || ctx_r1.commonStorage.localGet("REST_STOPS") == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("AMENITIES") && ctx_r1.commonStorage.localGet("AMENITIES").length < 1 || ctx_r1.commonStorage.localGet("AMENITIES") == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("AMENITIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function IonBottomDrawerComponent_ng_container_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " More about this bus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_2_div_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113)(3, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_2_div_39_div_10_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bp_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r33.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", bp_r33.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r33.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r34 != ctx_r1.bps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113)(3, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_2_div_42_div_10_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dp_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r35.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", dp_r35.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r35.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r36 != ctx_r1.dps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Rest stops available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_2_div_45_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 110);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-col", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, IonBottomDrawerComponent_ng_container_2_div_45_div_1_div_7_Template, 1, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rs_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", rs_r37.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r38 != ctx_r1.restStop.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_2_div_45_div_1_Template, 8, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("REST_STOPS"));
  }
}
function IonBottomDrawerComponent_ng_container_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 57)(1, "ion-grid", 58)(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Amenities Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
}
function IonBottomDrawerComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const amn_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", amn_r39.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](amn_r39.amenities_name);
  }
}
function IonBottomDrawerComponent_ng_container_2_ion_row_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" Between ", p_r40.time_limit_from, " to ", p_r40.time_limit_to, " from the station departure time: ", p_r40.percent, "% ");
  }
}
function IonBottomDrawerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 80)(2, "ion-card", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, IonBottomDrawerComponent_ng_container_2_ion_icon_4_Template, 1, 0, "ion-icon", 6)(5, IonBottomDrawerComponent_ng_container_2_div_5_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-segment", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-segment-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r31, 0, "boarding");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Boarding & Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r31, 1, "amenities");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Bus Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-segment-button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r31, 2, "policies");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Bus Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-content", 90)(20, "swiper-container", 123, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_2_Template_swiper_container_ionSlideDidChange_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "swiper-slide", 92)(23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Boarding & Dropping Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-segment", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabNested, $event) || (ctx_r1.tabNested = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-segment-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider2_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r32, 0, "boardingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Boarding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-segment-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider2_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r32, 1, "droppingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-segment-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_2_Template_ion_segment_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider2_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r32, 2, "reststop"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Rest Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "swiper-container", 124, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_2_Template_swiper_container_ionSlideDidChange_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const mySlider2_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged2(mySlider2_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "swiper-slide", 24)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, IonBottomDrawerComponent_ng_container_2_div_39_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "swiper-slide", 27)(41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, IonBottomDrawerComponent_ng_container_2_div_42_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "swiper-slide", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, IonBottomDrawerComponent_ng_container_2_div_44_Template, 2, 0, "div", 98)(45, IonBottomDrawerComponent_ng_container_2_div_45_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "swiper-slide", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, IonBottomDrawerComponent_ng_container_2_div_47_Template, 7, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "ion-list", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, IonBottomDrawerComponent_ng_container_2_div_49_Template, 4, 2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "swiper-slide", 102)(51, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, IonBottomDrawerComponent_ng_container_2_ion_row_54_Template, 2, 3, "ion-row", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r1.isIos && ctx_r1.state == 2 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](14, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](15, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "card-hd1" : "card-hd");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "notch1" : "notch");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabNested);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.dps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("AMENITIES") && ctx_r1.commonStorage.localGet("AMENITIES").length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("AMENITIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_3_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_ion_icon_5_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_3_div_39_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 148);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113)(3, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_3_div_39_div_10_Template, 1, 0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bp_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r47.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", bp_r47.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](bp_r47.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r48 != ctx_r1.bps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 148);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113)(3, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "ion-col", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, IonBottomDrawerComponent_ng_container_3_div_42_div_10_Template, 1, 0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dp_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r49.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", dp_r49.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](dp_r49.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r50 != ctx_r1.dps.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Rest stops available");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function IonBottomDrawerComponent_ng_container_3_div_45_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 148);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "ion-grid", 52)(2, "ion-row", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-col", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, IonBottomDrawerComponent_ng_container_3_div_45_div_1_div_7_Template, 1, 0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rs_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", rs_r51.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", i_r52 != ctx_r1.restStop.length - 1);
  }
}
function IonBottomDrawerComponent_ng_container_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_3_div_45_div_1_Template, 8, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("REST_STOPS"));
  }
}
function IonBottomDrawerComponent_ng_container_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 150)(1, "ion-grid", 58)(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Amenities Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
}
function IonBottomDrawerComponent_ng_container_3_ng_container_50_div_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 119);
  }
  if (rf & 2) {
    const amn_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("src", amn_r53.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function IonBottomDrawerComponent_ng_container_3_ng_container_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_3_ng_container_50_div_1_img_1_Template, 1, 1, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const amn_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", amn_r53.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](amn_r53.amenities_name);
  }
}
function IonBottomDrawerComponent_ng_container_3_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, IonBottomDrawerComponent_ng_container_3_ng_container_50_div_1_Template, 4, 2, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const amn_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", amn_r53.amenities_name != null);
  }
}
function IonBottomDrawerComponent_ng_container_3_ion_row_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-row", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" Between ", p_r54.time_limit_from, " to ", p_r54.time_limit_to, " from the station departure time: ", p_r54.percent, "% ");
  }
}
function IonBottomDrawerComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-header", 126)(2, "ion-card", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, IonBottomDrawerComponent_ng_container_3_div_3_Template, 1, 0, "div", 128)(4, IonBottomDrawerComponent_ng_container_3_div_4_Template, 1, 0, "div", 129)(5, IonBottomDrawerComponent_ng_container_3_ion_icon_5_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-segment", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.OurbustabName, $event) || (ctx_r1.OurbustabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-segment-button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r45, 1, "amenities");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Amenities");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-segment-button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r45, 0, "boarding");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Route Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ion-segment-button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r1.goToSlide(mySlider_r45, 2, "policies");
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-content", 139)(20, "swiper-container", 123, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_3_Template_swiper_container_ionSlideDidChange_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "swiper-slide", 92)(23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Boarding & Dropping Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-segment", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.tabNested, $event) || (ctx_r1.tabNested = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-segment-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider2_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r46, 0, "boardingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Boarding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-segment-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider2_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r46, 1, "droppingpts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "ion-segment-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function IonBottomDrawerComponent_ng_container_3_Template_ion_segment_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider2_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goToSlide2(mySlider2_r46, 2, "reststop"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Rest Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "swiper-container", 124, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionSlideDidChange", function IonBottomDrawerComponent_ng_container_3_Template_swiper_container_ionSlideDidChange_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const mySlider2_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSlideChanged2(mySlider2_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "swiper-slide", 141)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, IonBottomDrawerComponent_ng_container_3_div_39_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "swiper-slide", 27)(41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, IonBottomDrawerComponent_ng_container_3_div_42_Template, 11, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "swiper-slide", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, IonBottomDrawerComponent_ng_container_3_div_44_Template, 2, 0, "div", 98)(45, IonBottomDrawerComponent_ng_container_3_div_45_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "swiper-slide", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, IonBottomDrawerComponent_ng_container_3_div_47_Template, 7, 0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "span", 143)(49, "ion-list", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, IonBottomDrawerComponent_ng_container_3_ng_container_50_Template, 2, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "swiper-slide", 102)(52, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, IonBottomDrawerComponent_ng_container_3_ion_row_55_Template, 2, 3, "ion-row", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r1.isIos && ctx_r1.state == 2 ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](17, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](18, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r1.state == 2 ? "card-hd1" : "card-hd");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.state == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.OurbustabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.OurbustabName === "amenities" ? "./assets/icon/ourbus_seatlayout_amenitite_selected.svg" : "./assets/icon/ourbus_seatlayout_amenitite.svg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.OurbustabName === "boarding" ? "./assets/icon/ourbus_seatlayout_routedetails_selected.svg" : "./assets/icon/ourbus_seatlayout_routedetails.svg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.OurbustabName === "policies" ? "./assets/icon/ourbus_seatlayout_policies_selected.svg" : "./assets/icon/ourbus_seatlayout_policies.svg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabNested);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.dps);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("REST_STOPS") && ctx_r1.commonStorage.localGet("REST_STOPS").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.localGet("AMENITIES") && ctx_r1.commonStorage.localGet("AMENITIES").length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.commonStorage.localGet("AMENITIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
class IonBottomDrawerComponent {
  constructor(_element, _renderer, _domCtrl, _platform, route, commonStorage, apiFactory, globalData, alertController, authenticate, service, navCtrl, appData, util,
  // private geolocation: Geolocation,
  loader) {
    this._element = _element;
    this._renderer = _renderer;
    this._domCtrl = _domCtrl;
    this._platform = _platform;
    this.route = route;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.globalData = globalData;
    this.alertController = alertController;
    this.authenticate = authenticate;
    this.service = service;
    this.navCtrl = navCtrl;
    this.appData = appData;
    this.util = util;
    this.loader = loader;
    // @ViewChild('mySlider', { static: true }) mySlider: IonicSlides;
    // @ViewChild('mySlider2', { static: true }) mySlider2: IonicSlides;
    this.dockedHeight = 25;
    this.shouldBounce = true;
    this.disableDrag = false;
    this.distanceTop = 0;
    this.transition = '0.25s ease-in-out';
    this.state = _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Bottom;
    this.minimumHeight = 0;
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this._startPositionTop = 0;
    this._BOUNCE_DELTA = 30;
    this.handleHeight = 50;
    this.bounceBack = true;
    this.thresholdTop = 200;
    this.thresholdBottom = 200;
    this.selectedRoute = [];
    this.isreturnTrip = false;
    this.tabName = "boarding";
    this.OurbustabName = "amenities";
    this.tabNested = "boardingpts";
    this.amenities = [];
    this.bps = [];
    this.dps = [];
    this.restStop = [];
    this.getamenitiesDetail = [];
    this.getgangwayClass = false;
    this.ViaCityDetails = [];
    this.amenitiesList = [];
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.selectedRoute = this.globalData.SELECTED_ROUTE;
    console.log("SELECTED_ROUTE", this.selectedRoute, commonStorage.localGet('AMENITIES'));
    this.getgangwayClass = this.selectedRoute.is_gangway_class;
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (!this.isreturnTrip) {
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS'),
        "dep_time": this.commonStorage.localGet('DEP_TIME')
      };
    } else {
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID_RET'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID_RET'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID_RET'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS_RET'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS_RET'),
        "dep_time": this.commonStorage.localGet('DEP_TIME_RET')
      };
    }
    this.reservationId = this.selectedRoute.reservation_id;
    if (this.globalData.AMENITIES.length > 0) {
      this.amenities;
    }
    if (this.globalData.REST_STOPS.length > 0) {
      this.restStop = this.globalData.REST_STOPS;
    }
    //  this.restStop=[{"name":"Test Restroom","latitude":22.940671,"longitude":76.061577,"arrival_time":"","departure_time":""}]
    this.defaultCall();
  }
  close() {
    this.service.publish('call-parent');
  }
  open() {
    this.service.publish('call-open');
  }
  accountDeRegisterAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this.authenticate.logout();
            _this.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      yield alert.present();
    })();
  }
  defaultCall() {
    this.isBima = JSON.parse(localStorage.getItem('isBima'));
    this.isBPDP = JSON.parse(localStorage.getItem('isBPDP'));
    this.metaData = this.commonStorage.getItem("metaData");
    this.apiFactory.getServiceDetails(this.reservationId, this.selectedRoute.origin_id, this.selectedRoute.destination_id, false, this.isBima, this.isBPDP).subscribe(serviceDetails => {
      // console.log("serrr", serviceDetails)
      // this.bps = this.commonStorage.getItem('originStageDetails')
      // this.dps = this.commonStorage.getItem('destinationStageDetails')
      this.cancellationPolices = serviceDetails.cancellation_policies;
      for (let val of serviceDetails.stage_details) {
        //  val.checkPurposeTime = this.commonService.checkPurposeTime(val.time);
        if (val.city_id === parseInt(serviceDetails.origin.id)) {
          this.bps.push(val);
          //  // ss.originStageDetails.push(success.stage_details[k]);
        } else {
          this.dps.push(val);
          // // ss.destinationStageDetails.push(success.stage_details[k])
        }
      }
      this.bps = this.bps;
      this.dps = this.dps;
      for (let dp of this.dps) {
        this.dpAddress = dp.address != undefined && dp.address ? dp.address.length : 0;
      }
      // console.log("heree ion drawer", this.bps, this.dps);
      // console.log("Bp dp length",typeof this.bps, this.dps.length);
      this.amenitiesList = this.commonStorage.localGet('AMENITIES');
      // console.log("this.amenitiesList",this.amenitiesList);
      this.ViaCityDetails = this.commonStorage.localGet('via_city_detail');
      this.restStop = this.commonStorage.localGet('REST_STOPS');
      // console.log("this.ViaCityDetails",this.ViaCityDetails,this.restStop);
    }, err => {});
  }
  ngAfterViewInit() {
    this._renderer.setStyle(this._element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content :first-child'), 'touch-action', 'none');
    this._setDrawerState(this.state);
    // const Hammer = require('hammerjs');
    const hammer = new (hammerjs__WEBPACK_IMPORTED_MODULE_1___default())(this._element.nativeElement);
    hammer.get('pan').set({
      enable: true,
      direction: (hammerjs__WEBPACK_IMPORTED_MODULE_1___default().DIRECTION_VERTICAL)
    });
    hammer.on('pan panstart panend', ev => {
      if (this.disableDrag) {
        return;
      }
      switch (ev.type) {
        case 'panstart':
          this._handlePanStart();
          break;
        case 'panend':
          this._handlePanEnd(ev);
          break;
        default:
          this._handlePan(ev);
      }
    });
  }
  ngOnChanges(changes) {
    if (!changes['state']) {
      return;
    }
    this._setDrawerState(changes['state'].currentValue);
  }
  _setDrawerState(state) {
    const seg = document.getElementById('themeone-seg');
    this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
    switch (state) {
      case _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Bottom:
        if (seg) seg.classList.remove('closed');
        this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        break;
      case _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Docked:
        if (seg) seg.classList.add('closed');
        this._setTranslateY(this._platform.height() - this.dockedHeight + 'px');
        break;
      default:
        if (seg) seg.classList.remove('closed');
        this._setTranslateY(this.distanceTop + 'px');
    }
  }
  _handlePanStart() {
    this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
  }
  _handlePanEnd(ev) {
    if (this.shouldBounce && ev.isFinal) {
      this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
      switch (this.state) {
        case _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Docked:
          this._handleDockedPanEnd(ev);
          break;
        case _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Top:
          this._handleTopPanEnd(ev);
          break;
        default:
          this._handleBottomPanEnd(ev);
      }
    }
    this.stateChange.emit(this.state);
  }
  _handleTopPanEnd(ev) {
    if (ev.deltaY > this._BOUNCE_DELTA) {
      this.state = _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Docked;
    } else {
      this._setTranslateY(this.distanceTop + 'px');
    }
  }
  _handleDockedPanEnd(ev) {
    const absDeltaY = Math.abs(ev.deltaY);
    if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
      this.state = _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Top;
    } else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
      this.state = _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Bottom;
    } else {
      this._setTranslateY(this._platform.height() - this.dockedHeight + 'px');
    }
  }
  _handleBottomPanEnd(ev) {
    if (-ev.deltaY > this._BOUNCE_DELTA) {
      this.state = _drawer_state__WEBPACK_IMPORTED_MODULE_2__.DrawerState.Docked;
    } else {
      this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
    }
  }
  _handlePan(ev) {
    const pointerY = ev.center.y;
    this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
    if (pointerY > 0 && pointerY < this._platform.height()) {
      if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
        const newTop = this._startPositionTop + ev.deltaY;
        if (newTop >= this.distanceTop) {
          this._setTranslateY(newTop + 'px');
        } else if (newTop < this.distanceTop) {
          this._setTranslateY(this.distanceTop + 'px');
        }
        if (newTop > this._platform.height() - this.minimumHeight) {
          this._setTranslateY(this._platform.height() - this.minimumHeight + 'px');
        }
      }
    }
  }
  _setTranslateY(value) {
    this._domCtrl.write(() => {
      this._renderer.setStyle(this._element.nativeElement, 'transform', 'translateY(' + value + ')');
    });
  }
  ngOnInit() {}
  goToSlide(swiperContainer, slideIndex, tab = '') {
    if (swiperContainer && swiperContainer.swiper) {
      const swiper = swiperContainer.swiper;
      swiper.slideTo(slideIndex); // Move to the selected slide
    }
  }
  // goToSlide(slide:any, slideNum: number, tabName: string) {
  //   console.log("slide",slide,"slideNum",slideNum,"tabName",tabName);
  //   this.mySlider?.swiper?.slideTo(slideNum, 2000, true);
  //   // slide.slideTo(slideNum);
  //   this.tabName = tabName;
  //   this.content.scrollToTop(10);
  // }
  goToSlide2(swiperContainer, slideIndex, tab = '') {
    if (swiperContainer && swiperContainer.swiper) {
      const swiper = swiperContainer.swiper;
      swiper.slideTo(slideIndex); // Move to the selected slide
    }
  }
  onSlideChanged(slides) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const currentIndex = yield slides.getActiveIndex();
        console.log("currentIndex", currentIndex);
        switch (currentIndex) {
          case 0:
            _this2.tabName = "boarding";
            break;
          case 1:
            _this2.tabName = "amenities";
            break;
          default:
            _this2.tabName = "viacity";
            break;
        }
      } catch (e) {
        // console.log("onSlideChanged ex", e)
      }
    })();
  }
  onSlideChanged2(slides) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const currentIndex = yield slides.getActiveIndex();
        // console.log("current index", currentIndex);
        switch (currentIndex) {
          case 0:
            _this3.tabNested = "boardingpts";
            break;
          case 1:
            _this3.tabNested = "droppingpts";
            break;
          case 2:
            _this3.tabNested = "reststop";
            break;
          case 3:
            _this3.tabNested = "busroute";
            break;
          default:
            _this3.tabNested = "boardingpts";
            break;
        }
      } catch (e) {
        // console.log("onSlideChanged ex", e)
      }
    })();
  }
  //theme1
  segmentChanged(event) {
    // const segmentValue = event.detail.value;
    // if (segmentValue === 'boarding') {
    //   this.goToSlide(this.mySlider,0,segmentValue);
    //   this.open();
    // } else if (segmentValue === 'amenities') {
    //   this.goToSlide(this.mySlider,1,segmentValue);
    //   this.open();
    // } else if (segmentValue === 'viacity') {
    //   this.goToSlide(this.mySlider,2,segmentValue);
    //   this.open();
    // }
    this.goToSlide(this.mySlider, event.detail.value);
  }
  segmentChanged2(event) {
    const segmentValue = event.detail.value;
    if (segmentValue === 'boardingpts') {
      this.goToSlide(this.mySlider2, 0, segmentValue);
      this.open();
    } else if (segmentValue === 'droppingpts') {
      this.goToSlide(this.mySlider2, 1, segmentValue);
      this.open();
    } else if (segmentValue === 'reststop') {
      this.goToSlide(this.mySlider2, 2, segmentValue);
      this.open();
    }
  }
  gotoMaps(data) {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loader.showLoadingDefault();
      try {
        _this4.loader.showLoadingDefault();
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition({
          timeout: 10000,
          // Timeout after 10 seconds
          enableHighAccuracy: true,
          // Request high accuracy location
          maximumAge: 3600 // Cache location for 1 hour
        });
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const latB = data.latitude;
        const longB = data.longitude;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${latB},${longB}`;
        window.open(url, '_system');
      } catch (error) {
        _this4.loader.hideLoadingDefault();
        console.error('Error getting location', error);
      }
    })();
  }
}
_IonBottomDrawerComponent = IonBottomDrawerComponent;
_IonBottomDrawerComponent.ɵfac = function IonBottomDrawerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IonBottomDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.DomController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_7__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_authentication__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_appdata__WEBPACK_IMPORTED_MODULE_10__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_util_provider__WEBPACK_IMPORTED_MODULE_11__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService));
};
_IonBottomDrawerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: _IonBottomDrawerComponent,
  selectors: [["ion-bottom-drawer"]],
  viewQuery: function IonBottomDrawerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.mySlider = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.mySlider2 = _t.first);
    }
  },
  inputs: {
    dockedHeight: "dockedHeight",
    shouldBounce: "shouldBounce",
    disableDrag: "disableDrag",
    distanceTop: "distanceTop",
    transition: "transition",
    state: "state",
    minimumHeight: "minimumHeight"
  },
  outputs: {
    stateChange: "stateChange"
  },
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 4,
  consts: [["mySlider", ""], ["mySlider2", ""], [4, "ngIf"], [1, "ion-no-border", "theme1"], [1, "center", 3, "ngClass"], [3, "click", "ngClass"], ["class", "close-btn", "name", "close-outline", 3, "click", 4, "ngIf"], ["id", "themeone-seg", "mode", "md", 1, "themeone-seg-btn", "closed", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "boarding", 3, "click"], [1, "themeone-div"], ["src", "./assets/icon/boarding&dropping.svg", "alt", "", 1, "themeone-img"], [1, "themeone-lbl-hd"], ["value", "amenities", 3, "click"], ["src", "./assets/icon/busaminities.svg", "alt", "", 1, "themeone-img"], ["value", "viacity", 3, "click"], ["src", "./assets/icon/viacity.svg", "alt", "", 1, "themeone-img"], [1, "ion-bottom-drawer-scrollable-content", "theme1", 2, "--background", "white", 3, "scrollEvents"], ["id", "boarding"], [1, "themeone-slide-hd"], ["mode", "ios", 1, "themeone-seg-bdy", 3, "ngModelChange", "ionChange", "ngModel"], ["goToSlide2", "", "value", "boardingpts", 3, "click"], [1, "themeone-lbl-hd-2", "center"], ["value", "droppingpts", 3, "click"], ["value", "reststop", 3, "click"], ["id", "boardingpts"], [1, "stretch", "mr-tp"], [4, "ngFor", "ngForOf"], ["id", "droppingpts"], ["id", "reststop"], ["class", "stretch  mr-tp center-hr", 4, "ngIf"], ["class", "stretch  mr-tp", 4, "ngIf"], ["id", "amenities"], ["text-center", "", "class", "vertical-align-content", 4, "ngIf"], ["class", "themeone-list-bg", 4, "ngIf"], ["id", "viacity"], ["style", "margin: 0%;", "text-center", "", "class", "vertical-align-content", 4, "ngIf"], ["class", "themeone-stretch  themeone-mr-tp", 4, "ngIf"], ["name", "close-outline", 1, "close-btn", 3, "click"], ["fixed", ""], [1, "center-hr", "themeone-align-rw1"], ["size", "3", 1, "themeone-time-bp", 2, "margin", "0px 0px auto 0px", "padding", "0px", "padding-left", "5px"], ["size", "1", 2, "margin", "0px 0px auto 0px", "padding", "0px", "padding-top", "3px"], [1, "themeone-point-bt", 2, "margin-left", "0"], ["class", "themeone-container-bp", 4, "ngIf"], ["size", "8", 2, "margin", "0px 0px auto 0px", "padding", "0px"], ["size", "12", 1, "themeone-name-bp", 2, "padding", "0px"], ["size", "12", 1, "themeone-name-bp", 2, "color", "#5F5F5F", "font-family", "Roboto", "font-size", "12px", "font-style", "normal", "font-weight", "400", "line-height", "18px", "padding", "0px", "padding-top", "5px"], [1, "themeone-container-bp"], ["size", "12", 1, "themeone-name-bp", 2, "display", "flex", "padding", "0px", "padding-top", "8px", "margin-left", "8px", 3, "click"], ["src", "./assets/icon/themeoneViewonmap.svg", "alt", "", 2, "width", "20px", "height", "20px", "margin-right", "5px"], [1, "themeone-viewmap-txt", 2, "margin", "auto 0px"], [1, "stretch", "mr-tp", "center-hr"], ["fixed", "", 2, "height", "25px"], ["size", "3"], ["sixe", "1", 1, "themeone-point-bt", 2, "margin-left", "10%"], ["size", "7", 1, "name-bp"], [1, "adrs-bp"], ["text-center", "", 1, "vertical-align-content"], [2, "width", "170px"], ["src", "./assets/icon/NoAmenities.svg", "alt", "", 1, "img-center"], [1, "error_msg"], [1, "themeone-list-bg"], ["class", "themeone-list-bg center-hr", "style", "margin: 15px 30px;justify-content: left;", 4, "ngFor", "ngForOf"], [1, "themeone-list-bg", "center-hr", 2, "margin", "15px 30px", "justify-content", "left"], ["class", "themeone-aminities-back", 4, "ngIf"], ["class", "amn-txt", 4, "ngIf"], [1, "themeone-aminities-back"], ["alt", "", 2, "padding", "5px", 3, "src"], [1, "amn-txt"], ["text-center", "", 1, "vertical-align-content", 2, "margin", "0%"], ["size", "12"], [1, "themeone-stretch", "themeone-mr-tp"], ["style", "margin-left: 8px;", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px"], ["fixed", "", 2, "height", "20px"], ["size", "3", 1, "time-bp"], ["sixe", "1", 1, "themeone-point-bt1"], ["size", "8", 1, "name-bp"], ["class", "themeone-container-bp1", 4, "ngIf"], [1, "themeone-container-bp1"], [3, "ngStyle"], ["class", "more", 4, "ngIf"], ["mode", "md", "color", "red", 1, "seg-btn", "seabird_color_segment", 3, "ngModelChange", "ngModel"], ["value", "boarding", 2, "width", "25%", "--ion-color-base", "#2B28CE", 3, "click"], ["src", "./assets/icon/Boarding.svg", "alt", ""], [1, "lbl-hd"], ["value", "amenities", 2, "width", "25%", "--ion-color-base", "#2B28CE", 3, "click"], ["src", "./assets/icon/Amenities.svg", "alt", ""], ["value", "policies", 2, "width", "25%", "--ion-color-base", "#2B28CE", 3, "click"], ["src", "./assets/icon/Policies.svg", "alt", ""], [1, "ion-bottom-drawer-scrollable-content"], ["pagination", "false", "options", "slideOpts", 2, "background-color", "#f7f9fb", 3, "ionSlideDidChange"], ["id", "boarding", 1, "slide"], [1, "slide-hd"], ["mode", "md", "color", "medium", 1, "seg-bdy", 3, "ngModelChange", "ngModel"], [1, "lbl-hd-2", "center"], ["pagination", "false", "options", "slideOpts", 2, "width", "100%", 3, "ionSlideDidChange"], ["id", "reststop", 2, "display", "flex", "justify-content", "center"], ["class", "mr-tp", 4, "ngIf"], ["style", "      margin: 50%;", "text-center", "", "class", "vertical-align-content", 4, "ngIf"], [1, "list-bg"], ["class", "list-bg center-hr", 4, "ngFor", "ngForOf"], ["id", "policies", 1, "slide"], [1, "mr-tp-plcy"], ["class", "txt-policy", 4, "ngFor", "ngForOf"], [1, "more"], [1, "center-hr"], ["size", "3", 1, "time-bp", "seabird_time_bp"], ["sixe", "1", 1, "point-bt"], ["class", "container-bp", 4, "ngIf"], [1, "container-bp"], [1, "center-hr", "align-rw1", 2, "margin-left", "0px"], [1, "mr-tp"], [1, "center-hr", "align-rw1"], ["sixe", "1", 1, "point-bt", 2, "margin-left", "10%"], ["text-center", "", 1, "vertical-align-content", 2, "margin", "50%"], ["src", "./assets/icon/NoAmenities.svg", 1, "img-center"], [1, "error_msg", 2, "width", "100%"], [1, "list-bg", "center-hr"], ["alt", "", 1, "img-amn", 3, "src"], [1, "txt-policy"], ["mode", "md", "color", "red", 1, "seg-btn", 3, "ngModelChange", "ngModel"], ["value", "policies", 3, "click"], ["pager", "false", "options", "slideOpts", 2, "background-color", "#f7f9fb", 3, "ionSlideDidChange"], ["pager", "false", "options", "slideOpts", 3, "ionSlideDidChange"], ["id", "amenities", 1, "amenities"], [1, "ourbustheme", 3, "ngStyle"], [1, "center", 2, "padding-bottom", "10px", 3, "ngClass"], ["class", "notchour", 3, "click", 4, "ngIf"], ["class", "notchour1", 3, "click", 4, "ngIf"], ["mode", "md", 1, "ourbus-segment", 2, "padding-left", "20px", 3, "ngModelChange", "ngModel"], ["value", "amenities", 2, "width", "25%", 3, "click"], ["alt", "Amenities", 2, "width", "52px", "height", "52px", 3, "src"], [1, "ourbus-lbl-hd"], ["value", "boarding", 2, "width", "25%", 3, "click"], ["alt", "Route Details", 2, "width", "52px", "height", "52px", 3, "src"], [1, "ourbus-lbl-hd", 2, "overflow", "visible", "margin-right", "14px"], ["value", "policies", 2, "width", "25%", 3, "click"], ["alt", "Policies", 2, "width", "52px", "height", "52px", 3, "src"], [1, "ion-bottom-drawer-scrollable-content", "ourbustheme"], ["mode", "md", "color", "medium", 1, "seg-bdy", "ourbus_sub_segment", 3, "ngModelChange", "ngModel"], ["id", "boardingpts", 1, "ourbus-wd-max"], ["style", "margin-bottom: 30%;", "text-center", "", "class", "vertical-align-content", 4, "ngIf"], [2, "margin-bottom", "20px", "padding-bottom", "120px", "display", "contents"], [1, "notchour", 3, "click"], [1, "notchour1", 3, "click"], ["sixe", "1", 1, "ourbus_point-bt"], ["class", "container-bp", "style", "left: 22%;", 4, "ngIf"], [1, "container-bp", 2, "left", "22%"], ["sixe", "1", 1, "ourbus_point-bt", 2, "margin-left", "10%"], ["text-center", "", 1, "vertical-align-content", 2, "margin-bottom", "30%"], ["class", "list-bg center-hr", 4, "ngIf"], ["class", "img-amn", "alt", "", 3, "src", 4, "ngIf"]],
  template: function IonBottomDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, IonBottomDrawerComponent_ng_container_0_Template, 57, 14, "ng-container", 2)(1, IonBottomDrawerComponent_ng_container_1_Template, 55, 16, "ng-container", 2)(2, IonBottomDrawerComponent_ng_container_2_Template, 55, 16, "ng-container", 2)(3, IonBottomDrawerComponent_ng_container_3_Template, 56, 19, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  z-index: 10 !important;\n  background-color: white;\n  transform: translateY(15px);\n}\n\n.card-hd[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  height: 110px;\n  box-shadow: 0 4px 8px 0 rgba(177, 177, 177, 0.5);\n  background-color: #ffffff;\n  z-index: 2;\n}\n\n.card-hd1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  height: 140px;\n  box-shadow: 0 4px 8px 0 rgba(177, 177, 177, 0.5);\n  background-color: #ffffff;\n  z-index: 2;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n\n.more[_ngcontent-%COMP%] {\n  position: relative;\n  top: -25px;\n}\n\n.more_our[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  font-size: 25px;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 95%;\n  z-index: 10;\n}\n\n.seg-btn-2[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150vw;\n  z-index: 1;\n  background-color: #f7f9fb;\n  padding: 16px;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  height: 150vw;\n  z-index: 1;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.slide-hd[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bolder;\n  color: #3e3e52;\n  position: absolute;\n  top: 16px;\n  left: 16px;\n}\n\n.seg-bdy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  width: 97%;\n  z-index: 25;\n}\n\n.slide-nested[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.lbl-hd[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0 0 16px;\n  color: #3e3e52;\n}\n\n.lbl-hd-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bolder;\n  margin: 15px auto 0 9px;\n  color: #7e7e8c;\n  width: 90%;\n}\n\n.time-bp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bolder;\n  color: #3e3e52;\n  margin-left: -25px;\n}\n\n.name-bp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.pick-bp[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #465986;\n  margin-left: 5px;\n}\n\n.adrs-bp[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #7e7e8c;\n  margin: 0 0 19px 97px;\n}\n\n.mr-tp[_ngcontent-%COMP%] {\n  margin-top: 26%;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  text-align: initial;\n}\n\n.point-bt[_ngcontent-%COMP%] {\n  max-width: 7px;\n  border-radius: 50px;\n  height: 7px;\n  margin-left: -20px;\n  border: 2px solid #5279d0;\n  background-color: #b7ccfc;\n}\n\n.ourbus_point-bt[_ngcontent-%COMP%] {\n  max-width: 7px;\n  border-radius: 50px;\n  height: 7px;\n  margin-left: -20px;\n  border: 2px solid #4CAF50;\n  background-color: #E8F5E9;\n}\n\n.container-bp[_ngcontent-%COMP%] {\n  border-left: 1px solid #5279d0;\n  border-style: dashed;\n  border-top: 0 solid white;\n  border-right: 0 solid white;\n  border-bottom: 0 solid white;\n  height: 80px;\n  position: relative;\n  left: 85px;\n  top: 5px;\n  margin-bottom: -15px;\n  margin-top: -5px;\n}\n\n.wd-max[_ngcontent-%COMP%] {\n  width: 33% !important;\n  min-width: 33% !important;\n}\n\n.stretch[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-bottom: 200px;\n}\n\n.align-rw1[_ngcontent-%COMP%] {\n  margin-left: -26px;\n}\n\n.txt-policy[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  margin: 16px 0;\n}\n\n.mr-tp-plcy[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-top: 10%;\n}\n\n.amenities[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  width: 360px;\n  background: #f7f9fb;\n  padding: 20px 0;\n}\n\n.mr-tp-200[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  background: #f7f9fb;\n}\n\n.lst-tp[_ngcontent-%COMP%] {\n  margin-top: -60px;\n}\n\n.list-bg[_ngcontent-%COMP%] {\n  background: #f7f9fb;\n}\n\n.amn-txt[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.img-amn[_ngcontent-%COMP%] {\n  width: 35px;\n  vertical-align: 0;\n  height: 35px;\n  margin: 0 5px 0 0;\n}\n\n.amenities[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.amenities[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  width: 78%;\n}\n.amenities[_ngcontent-%COMP%]   .center-hr[_ngcontent-%COMP%] {\n  justify-content: left !important;\n  margin-bottom: 10px;\n}\n.amenities[_ngcontent-%COMP%]   .img-amn[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  position: relative;\n}\n\n.error_msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 8px;\n}\n\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #FFD5B2;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  margin-bottom: 20px;\n}\n\n.themeone-img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.themeone-lbl-hd[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #191966;\n  margin-left: 5px;\n  font-family: \"NotoSans\";\n  text-align: left;\n  font-weight: bold;\n}\n\n.themeone-seg-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  border-bottom: 1px solid #9999a7;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: #191966 !important;\n  --indicator-color-checked: #191966 !important;\n  color: #191966 !important;\n}\n\n.closed.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n}\n\n.themeone-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-segment.themeone-seg-bdy[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #F3F3F7;\n  border-radius: 25px;\n  color: #000000;\n  height: 32px;\n  --border-color: none;\n  margin: 5px;\n}\n\n.themeone-seg-bdy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  width: 97%;\n  z-index: 25;\n  background: #fff;\n}\n.themeone-seg-bdy[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  background: #FFBD16;\n  border-radius: 35px;\n  --indicator-box-shadow: none;\n}\n\n.themeone-container-bp[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n  border-style: dashed;\n  border-top: 0 solid white;\n  border-right: 0 solid white;\n  border-bottom: 0 solid white;\n  height: 120px;\n  position: relative;\n  left: 16.2%;\n  margin-bottom: -15px;\n  width: 0px;\n}\n\n.themeone-point-bt[_ngcontent-%COMP%] {\n  max-width: 7px;\n  border-radius: 50px;\n  height: 7px;\n  margin-left: -15px;\n  border: 2px solid #191966;\n  padding: 3px;\n}\n\n.themeone-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150vw;\n  z-index: 1;\n  background-color: #fff;\n  padding: 16px;\n}\n\n.themeone-card-hd1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 0;\n  height: 140px;\n  box-shadow: none;\n  background-color: #ffffff;\n  z-index: 2;\n}\n\n.themeone-adrs-bp[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #7e7e8c;\n}\n\n.themeone-center[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: #191966 !important;\n  --indicator-color-checked: #191966 !important;\n  color: #191966 !important;\n}\n\n.themeone-align-rw1[_ngcontent-%COMP%] {\n  margin-left: -7px;\n}\n\n.themeone-slide-hd[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  position: absolute;\n  top: 5px;\n  left: 16px;\n  font-family: Roboto;\n  font-weight: 600;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  background: aliceblue;\n  font-family: \"NotoSans\";\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n}\n\nion-chip.ios.ion-activatable.hydrated[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  background: red;\n  font-family: \"NotoSans\";\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n}\n\n.themeone-amenities[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.themeone-amenities[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.themeone-amenities[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  width: 78%;\n}\n.themeone-amenities[_ngcontent-%COMP%]   .center-hr[_ngcontent-%COMP%] {\n  justify-content: left !important;\n  margin-bottom: 10px;\n}\n.themeone-amenities[_ngcontent-%COMP%]   .img-amn[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.themeone-amenities[_ngcontent-%COMP%] {\n  width: 360px;\n  background: #fff;\n  padding: 20px 0;\n}\n\n.themeone-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150vw;\n  z-index: 1;\n  background-color: #fff;\n  padding: 16px;\n}\n\n.themeone-list-bg[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.themeone-lbl-hd-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bolder;\n  margin: 10px auto 0 9px;\n  width: 80%;\n  padding-bottom: 10px;\n}\n\n.themeone-aminities-back[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  background: #EAEEF3;\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.themeone-point-bt1[_ngcontent-%COMP%] {\n  max-width: 7px;\n  border-radius: 50px;\n  height: 7px;\n  margin-left: -20px;\n  background: #191966;\n}\n\n.themeone-stretch[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-bottom: 200px;\n}\n\n.themeone-mr-tp[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.themeone-container-bp1[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n  border-style: dashed;\n  border-top: 0 solid white;\n  border-right: 0 solid white;\n  border-bottom: 0 solid white;\n  height: 48px;\n  position: relative;\n  left: 22%;\n  top: 5px;\n  margin-bottom: -15px;\n}\n\n.themeone-time-bp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bolder;\n  color: #3e3e52;\n  margin-left: -25px;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  color: #191966;\n}\n\n.themeone-name-bp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #333333;\n  margin-left: 10px;\n}\n\n.themeone-adrs-bp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5F5F5F;\n  margin: 0 0 4px 90px;\n}\n\n.theme1[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.seabird_color_segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color-checked: #2B28CE; \n\n}\n\n.seabird_color_segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(20%) sepia(75%) saturate(5000%) hue-rotate(227deg) brightness(89%) contrast(100%);\n}\n\n\n\n.seabird_color_segment[_ngcontent-%COMP%]   ion-segment-button.ion-activated[_ngcontent-%COMP%] {\n  --color-checked: #2B28CE;\n}\n\n.seabird_color_segment[_ngcontent-%COMP%]   ion-segment-button.ion-activated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(20%) sepia(75%) saturate(5000%) hue-rotate(227deg) brightness(89%) contrast(100%);\n}\n\n.seabird_time_bp[_ngcontent-%COMP%] {\n  margin-left: -52px !important;\n}\n\n.ourbus-wd-max[_ngcontent-%COMP%] {\n  min-width: 33% !important;\n}\n\n.ourbus-lbl-hd[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0 0 8px;\n}\n\n.ourbus_sub_segment[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #757575;\n  --indicator-color: transparent;\n  --color-checked: transparent !important;\n  background-color: #fff;\n  padding-top: 5px;\n  margin: 10px;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --color: #4CAF50 !important;\n  --indicator-color: #fff !important;\n  background-color: #E8F5E9 !important;\n  --color-checked: transparent !important;\n  padding-top: 5px;\n  margin: 10px;\n  border-radius: 18px;\n}\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .ourbus-lbl-hd[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-weight: 700;\n}\n\n.notchour[_ngcontent-%COMP%] {\n  \n\n  position: relative;\n  top: 10px;\n  width: 8%;\n  height: 5px;\n  border-radius: 3px;\n  background-color: #dcdcdc;\n  display: list-item;\n  color: white;\n  margin-bottom: 8px;\n  margin-top: 10px;\n}\n\n.notchour1[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  width: 8%;\n  height: 5px;\n  border-radius: 3px;\n  background-color: #dcdcdc;\n  display: list-item;\n  color: white;\n  margin-bottom: 8px;\n  margin-top: 10px;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .container-bp[_ngcontent-%COMP%] {\n  border-left: 1px solid #4CAF50 !important;\n  border-style: dashed !important;\n}\n\n.notch[_ngcontent-%COMP%] {\n  margin: -60px 0 16px;\n  width: 26px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #dcdcdc;\n}\n\n.notch1[_ngcontent-%COMP%] {\n  margin: -60px 0 16px;\n  width: 26px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #dcdcdc;\n  margin-bottom: 8%;\n}"]
});

/***/ }),

/***/ 10659:
/*!***************************************************!*\
  !*** ./src/app/seat-layout/seat-layout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeatLayoutPageModule: () => (/* binding */ SeatLayoutPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _seat_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seat-layout-routing.module */ 64698);
/* harmony import */ var _seat_layout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seat-layout.page */ 10668);
/* harmony import */ var modules_ion_bottom_drawer_ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/ion-bottom-drawer/ion-bottom-drawer */ 9930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _SeatLayoutPageModule;







class SeatLayoutPageModule {}
_SeatLayoutPageModule = SeatLayoutPageModule;
_SeatLayoutPageModule.ɵfac = function SeatLayoutPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SeatLayoutPageModule)();
};
_SeatLayoutPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _SeatLayoutPageModule
});
_SeatLayoutPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _seat_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeatLayoutPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SeatLayoutPageModule, {
    declarations: [_seat_layout_page__WEBPACK_IMPORTED_MODULE_1__.SeatLayoutPage, modules_ion_bottom_drawer_ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_2__.IonBottomDrawerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _seat_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeatLayoutPageRoutingModule],
    exports: [modules_ion_bottom_drawer_ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_2__.IonBottomDrawerComponent]
  });
})();

/***/ }),

/***/ 10668:
/*!*************************************************!*\
  !*** ./src/app/seat-layout/seat-layout.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeatLayoutPage: () => (/* binding */ SeatLayoutPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/ion-bottom-drawer/drawer-state */ 3641);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price-breakup/price-breakup.component */ 30072);
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover/popover.page */ 8824);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/modules */ 85756);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var modules_ion_bottom_drawer_ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! modules/ion-bottom-drawer/ion-bottom-drawer */ 9930);

var _SeatLayoutPage;
























const _c0 = ["mySlider"];
const _c1 = () => ({
  "padding-top": "50px"
});
const _c2 = () => ({});
const _c3 = a0 => ({
  "background": a0
});
const _c4 = () => ({
  "background": "#ccc"
});
const _c5 = a0 => ({
  "opacity-filter": a0
});
const _c6 = a0 => ({
  "horizontal": a0
});
const _c7 = a0 => ({
  "button_horizontal": a0
});
const _c8 = (a0, a1) => ({
  "berth": a0,
  "horizontal": a1
});
const _c9 = a0 => ({
  "berth": a0
});
const _c10 = a0 => ({
  "top": a0
});
const _c11 = (a0, a1) => ({
  "button_horizontal": a0,
  "opacity-filter": a1
});
const _c12 = (a0, a1) => ({
  "background": a0,
  "border-color": a1
});
const _c13 = (a0, a1) => ({
  "opacity-filter": a0,
  "opacity-none": a1
});
function SeatLayoutPage_ng_container_0_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 27)(1, "div", 28)(2, "ion-segment", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("ngModelChange", function SeatLayoutPage_ng_container_0_ion_row_7_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.berthType, $event) || (ctx_r1.berthType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "ion-segment-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_ion_row_7_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-segment-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_ion_row_7_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.berthType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"]("Lower (" + ctx_r1.lowerCount + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"]("Upper (" + ctx_r1.upperCount + ")");
  }
}
function SeatLayoutPage_ng_container_0_ion_row_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row")(1, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r1.service_description, " ");
  }
}
function SeatLayoutPage_ng_container_0_div_9_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c3, seat_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", seat_r5.name, " ");
  }
}
function SeatLayoutPage_ng_container_0_div_9_ion_col_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Blocked seat for social distancing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_9_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 43)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_0_div_9_ion_col_4_div_3_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 35)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_0_div_9_ion_col_3_Template, 4, 4, "ion-col", 36)(4, SeatLayoutPage_ng_container_0_div_9_ion_col_4_Template, 4, 3, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 38)(6, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_9_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.legendDetailsKeysStaticthemeone);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SeatLayoutPage_ng_container_0_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER BOARDING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.boardingStage.name + " ", "-", " " + ctx_r1.boardingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_0_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER DROPING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.droppingStage.name + " ", "-", " " + ctx_r1.droppingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46)(1, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_12_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_0_div_12_div_2_Template, 2, 0, "div", 48)(3, SeatLayoutPage_ng_container_0_div_12_div_3_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "ion-icon", 49)(5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_12_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectDropingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_0_div_12_div_7_Template, 2, 0, "div", 48)(8, SeatLayoutPage_ng_container_0_div_12_div_8_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "ion-icon", 49)(10, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.droppingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.droppingStage);
  }
}
function SeatLayoutPage_ng_container_0_ion_row_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_ion_row_13_div_3_Template_div_click_0_listener() {
      const prices_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter(prices_r9.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prices_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == prices_r9.toString() ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", prices_r9, " ");
  }
}
function SeatLayoutPage_ng_container_0_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_ion_row_13_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter("All"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_0_ion_row_13_div_3_Template, 2, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == "All" ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.serviceDetailsFull.all_fare_details);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r13.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td")(1, "span", 66)(2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r11);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      const seat_r13 = ctx_r11.$implicit;
      const k_r14 = ctx_r11.index;
      const j_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.presentPopover($event, seat_r13, seat_r13.isReservable, j_r15, k_r14, "themeoneSeatPopup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template, 5, 0, "span", 68)(4, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_4_Template, 5, 0, "span", 69)(5, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_5_Template, 5, 0, "span", 70)(6, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_6_Template, 5, 0, "span", 71)(7, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_7_Template, 5, 0, "span", 72)(8, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_8_Template, 5, 0, "span", 73)(9, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_9_Template, 5, 0, "span", 74)(10, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_10_Template, 2, 3, "span", 75)(11, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_11_Template, 2, 3, "span", 76)(12, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_12_Template, 2, 3, "span", 77)(13, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_13_Template, 2, 3, "span", 78)(14, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_14_Template, 2, 3, "span", 79)(15, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_15_Template, 2, 3, "span", 80)(16, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_16_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "span", 66)(18, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](20, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_span_20_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r13.rowSpan)("colspan", seat_r13.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c5, seat_r13.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](26, _c6, seat_r13.isHorizontal))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](28, _c7, seat_r13.isHorizontal))("hidden", !(seat_r13.isLower && !seat_r13.isUpper && !seat_r13.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r13.isBerth && seat_r13.isReservable && !seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.object.isMaleOrFemale == "male" && !seat_r13.isBerth && seat_r13.isReservable && seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.object.isMaleOrFemale == "female" && !seat_r13.isBerth && seat_r13.isReservable && seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r13.isBerth && seat_r13.isReservable && !seat_r13.isLadiesSeat && seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r13.isBerth && seat_r13.isReservable && seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r13.isBerth && !seat_r13.isReservable && seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r13.isBerth && !seat_r13.isReservable && !seat_r13.isLadiesSeat && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isBerth && seat_r13.isReservable && !seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.object.isMaleOrFemale == "male" && seat_r13.isBerth && seat_r13.isReservable && seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.object.isMaleOrFemale == "female" && seat_r13.isBerth && seat_r13.isReservable && seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isBerth && seat_r13.isReservable && !seat_r13.isLadiesSeat && seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isBerth && seat_r13.isReservable && seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isSelected && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isBerth && !seat_r13.isReservable && seat_r13.isLadiesSeat && !seat_r13.isGentsSeat && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isBerth && !seat_r13.isReservable && !seat_r13.isLadiesSeat && !seat_r13.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](30, _c6, seat_r13.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](32, _c8, seat_r13.isBerth, seat_r13.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r13.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13.isGangWay || seat_r13.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_td_1_Template, 21, 35, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r16, seat_r13));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r13);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r16);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 98);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-slide", 58)(1, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 60)(3, "div", 61)(4, "table", 62)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_tr_6_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_div_7_Template, 1, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r20.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r18);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      const seat_r20 = ctx_r18.$implicit;
      const n_r21 = ctx_r18.index;
      const m_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.presentPopover($event, seat_r20, seat_r20.isReservable, m_r22, n_r21, ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_1_Template, 5, 0, "span", 68)(2, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_2_Template, 5, 0, "span", 70)(3, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_3_Template, 5, 0, "span", 69)(4, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_4_Template, 5, 0, "span", 71)(5, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_5_Template, 5, 0, "span", 72)(6, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_6_Template, 5, 0, "span", 73)(7, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_7_Template, 5, 0, "span", 74)(8, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_8_Template, 2, 3, "span", 75)(9, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_9_Template, 2, 3, "span", 76)(10, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_10_Template, 2, 3, "span", 77)(11, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_11_Template, 2, 3, "span", 78)(12, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_12_Template, 2, 3, "span", 79)(13, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_13_Template, 2, 3, "span", 80)(14, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_14_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](17, _c7, seat_r20.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isBerth && seat_r20.isReservable && !seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.object.isMaleOrFemale == "female" && !seat_r20.isBerth && seat_r20.isReservable && seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.object.isMaleOrFemale == "male" && !seat_r20.isBerth && seat_r20.isReservable && seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isBerth && seat_r20.isReservable && !seat_r20.isLadiesSeat && seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isBerth && seat_r20.isReservable && seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isBerth && !seat_r20.isReservable && seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isBerth && !seat_r20.isReservable && !seat_r20.isLadiesSeat && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isBerth && seat_r20.isReservable && !seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.object.isMaleOrFemale == "male" && seat_r20.isBerth && seat_r20.isReservable && seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.object.isMaleOrFemale == "female" && seat_r20.isBerth && seat_r20.isReservable && seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isBerth && seat_r20.isReservable && !seat_r20.isLadiesSeat && seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isBerth && seat_r20.isReservable && seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isSelected && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isBerth && !seat_r20.isReservable && seat_r20.isLadiesSeat && !seat_r20.isGentsSeat && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isBerth && !seat_r20.isReservable && !seat_r20.isLadiesSeat && !seat_r20.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](19, _c9, seat_r20.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r20.isSocialDistancing ? "X" : "");
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 66)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template, 17, 21, "button", 104)(3, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c6, seat_r20.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r20.rowSpan)("colspan", seat_r20.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](8, _c5, seat_r20.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r20.isLower && seat_r20.isUpper && !seat_r20.isGangWay);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20.isGangWay || seat_r20.isUpperGangWay);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_Template, 4, 10, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r23, seat_r20));
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r20);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r23);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 98);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-slide", 99)(1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 60)(3, "div", 101)(4, "table", 102)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_tr_6_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_div_7_Template, 1, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonU);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_0_swiper_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_1_Template, 8, 2, "swiper-slide", 56)(2, SeatLayoutPage_ng_container_0_swiper_container_14_swiper_slide_2_Template, 8, 2, "swiper-slide", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.berthType === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.berthType === "upper");
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r27.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "td", 66)(2, "span")(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r25);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      const seat_r27 = ctx_r25.$implicit;
      const p_r28 = ctx_r25.index;
      const o_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.presentPopover($event, seat_r27, seat_r27.isReservable, o_r29, p_r28, ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_4_Template, 5, 0, "span", 68)(5, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_5_Template, 5, 0, "span", 70)(6, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_6_Template, 5, 0, "span", 69)(7, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_7_Template, 5, 0, "span", 71)(8, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_8_Template, 5, 0, "span", 72)(9, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_9_Template, 5, 0, "span", 73)(10, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_10_Template, 5, 0, "span", 74)(11, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_11_Template, 2, 3, "span", 75)(12, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_12_Template, 2, 3, "span", 77)(13, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_13_Template, 2, 3, "span", 76)(14, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_14_Template, 2, 3, "span", 78)(15, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_15_Template, 2, 3, "span", 79)(16, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_16_Template, 2, 3, "span", 80)(17, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_17_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](20, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_span_20_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c6, seat_r27.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r27.rowSpan)("colspan", seat_r27.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](24, _c11, seat_r27.isHorizontal, seat_r27.priceFiltered))("hidden", !(seat_r27.isLower && !seat_r27.isUpper && !seat_r27.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r27.isBerth && seat_r27.isReservable && !seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.object.isMaleOrFemale == "female" && !seat_r27.isBerth && seat_r27.isReservable && seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.object.isMaleOrFemale == "male" && !seat_r27.isBerth && seat_r27.isReservable && seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r27.isBerth && seat_r27.isReservable && !seat_r27.isLadiesSeat && seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r27.isBerth && seat_r27.isReservable && seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r27.isBerth && !seat_r27.isReservable && seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r27.isBerth && !seat_r27.isReservable && !seat_r27.isLadiesSeat && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isBerth && seat_r27.isReservable && !seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.object.isMaleOrFemale == "female" && seat_r27.isBerth && seat_r27.isReservable && seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.object.isMaleOrFemale == "male" && seat_r27.isBerth && seat_r27.isReservable && seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isBerth && seat_r27.isReservable && !seat_r27.isLadiesSeat && seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isBerth && seat_r27.isReservable && seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isSelected && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isBerth && !seat_r27.isReservable && seat_r27.isLadiesSeat && !seat_r27.isGentsSeat && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isBerth && !seat_r27.isReservable && !seat_r27.isLadiesSeat && !seat_r27.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](27, _c9, seat_r27.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r27.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27.isGangWay && seat_r27.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_ng_container_0_Template, 21, 29, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r27);
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r30);
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 112);
  }
}
function SeatLayoutPage_ng_container_0_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 108)(1, "table", 109)(2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_0_div_15_div_2_tr_3_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_0_div_15_div_2_div_4_Template, 1, 0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 55)(1, "ion-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_div_15_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_0_div_15_div_2_Template, 5, 2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c10, ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare ? "18%" : "9%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.hideShowBorder);
  }
}
function SeatLayoutPage_ng_container_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate4"]("", ctx_r1.bookseatcount[0], " , ", ctx_r1.bookseatcount[1], ", ", ctx_r1.bookseatcount[2], " + ", ctx_r1.bookseatcount.length - 3, " More");
  }
}
function SeatLayoutPage_ng_container_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.selectedSeatsNumbers);
  }
}
function SeatLayoutPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "ion-header", 2)(2, "div", 3)(3, "ion-buttons", 4)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, "Select Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_0_ion_row_7_Template, 9, 3, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, SeatLayoutPage_ng_container_0_ion_row_8_Template, 3, 1, "ion-row", 1)(9, SeatLayoutPage_ng_container_0_div_9_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "ion-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, SeatLayoutPage_ng_container_0_div_11_Template, 2, 1, "div", 10)(12, SeatLayoutPage_ng_container_0_div_12_Template, 11, 4, "div", 11)(13, SeatLayoutPage_ng_container_0_ion_row_13_Template, 4, 2, "ion-row", 12)(14, SeatLayoutPage_ng_container_0_swiper_container_14_Template, 3, 2, "swiper-container", 13)(15, SeatLayoutPage_ng_container_0_div_15_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "div", 14)(17, "ion-row", 15)(18, "ion-col", 16)(19, "div", 17)(20, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, SeatLayoutPage_ng_container_0_span_22_Template, 2, 4, "span", 19)(23, SeatLayoutPage_ng_container_0_span_23_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "div")(25, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_Template_div_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](30, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_0_Template_ion_col_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](33, "Select pick-up point");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "ion-bottom-drawer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("stateChange", function SeatLayoutPage_ng_container_0_Template_ion_bottom_drawer_stateChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.drawerState, $event) || (ctx_r1.drawerState = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](36, " Bottom Drawer Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](26, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](27, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.service_description != null && ctx_r1.service_description.trim() != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showLegend);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.serviceDetailsFull.all_fare_details && ctx_r1.subdomain.indexOf("abct") == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.selectedSeatsToBook.length > 0 ? "up" : "down");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.bookseatcount.length, " ", "Seat", "(s) |");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.bookseatcount.length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.bookseatcount.length <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", " " + ctx_r1.currencySym + " ", "", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](27, 23, ctx_r1.totalBookingAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !(ctx_r1.selectedSeatsToBook.length < 1))("disableDrag", ctx_r1.disableDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("state", ctx_r1.drawerState);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("minimumHeight", ctx_r1.minimumHeight)("dockedHeight", ctx_r1.dockedHeight)("shouldBounce", ctx_r1.shouldBounce)("distanceTop", ctx_r1.distanceTop);
  }
}
function SeatLayoutPage_ng_container_1_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row")(1, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r1.service_description, " ");
  }
}
function SeatLayoutPage_ng_container_1_div_12_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c3, seat_r33.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", seat_r33.name, " ");
  }
}
function SeatLayoutPage_ng_container_1_div_12_ion_col_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Blocked seat for social distancing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_12_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 43)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_1_div_12_ion_col_4_div_3_Template, 2, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 35)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_1_div_12_ion_col_3_Template, 4, 4, "ion-col", 36)(4, SeatLayoutPage_ng_container_1_div_12_ion_col_4_Template, 4, 3, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 38)(6, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_12_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.legendDetailsKeysStatic);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SeatLayoutPage_ng_container_1_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER BOARDING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.boardingStage.name + " ", "-", " " + ctx_r1.boardingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_1_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER DROPING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.droppingStage.name + " ", "-", " " + ctx_r1.droppingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46)(1, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_15_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_1_div_15_div_2_Template, 2, 0, "div", 48)(3, SeatLayoutPage_ng_container_1_div_15_div_3_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "ion-icon", 49)(5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_15_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectDropingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_1_div_15_div_7_Template, 2, 0, "div", 48)(8, SeatLayoutPage_ng_container_1_div_15_div_8_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "ion-icon", 49)(10, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.droppingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.droppingStage);
  }
}
function SeatLayoutPage_ng_container_1_ion_row_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 132)(2, "ion-segment", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("ngModelChange", function SeatLayoutPage_ng_container_1_ion_row_16_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.berthType, $event) || (ctx_r1.berthType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "ion-segment-button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_ion_row_16_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "ion-segment-button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_ion_row_16_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.berthType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Lower (" + ctx_r1.lowerCount + ")", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Upper (" + ctx_r1.upperCount + ")", " ");
  }
}
function SeatLayoutPage_ng_container_1_ion_row_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_ion_row_17_div_3_Template_div_click_0_listener() {
      const prices_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r37).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter(prices_r38.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prices_r38 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == prices_r38.toString() ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, " ", " " + prices_r38, " ");
  }
}
function SeatLayoutPage_ng_container_1_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_ion_row_17_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter("All"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_1_ion_row_17_div_3_Template, 2, 3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == "All" ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.costArray);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r42.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td")(1, "span", 66)(2, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r41);
      const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r42, seat_r42.isReservable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_3_Template, 5, 0, "span", 68)(4, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_4_Template, 5, 0, "span", 146)(5, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_5_Template, 5, 0, "span", 71)(6, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_6_Template, 5, 0, "span", 72)(7, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_7_Template, 5, 0, "span", 73)(8, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_8_Template, 5, 0, "span", 74)(9, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_9_Template, 2, 3, "span", 75)(10, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_10_Template, 2, 3, "span", 147)(11, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_11_Template, 2, 3, "span", 78)(12, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_12_Template, 2, 3, "span", 79)(13, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_13_Template, 2, 3, "span", 80)(14, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_14_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "span", 66)(16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r42.rowSpan)("colspan", seat_r42.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c5, seat_r42.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c6, seat_r42.isHorizontal))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](26, _c7, seat_r42.isHorizontal))("hidden", !(seat_r42.isLower && !seat_r42.isUpper && !seat_r42.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && seat_r42.isReservable && !seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && seat_r42.isReservable && seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && seat_r42.isReservable && !seat_r42.isLadiesSeat && seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && seat_r42.isReservable && seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && !seat_r42.isReservable && seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r42.isBerth && !seat_r42.isReservable && !seat_r42.isLadiesSeat && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && seat_r42.isReservable && !seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && seat_r42.isReservable && seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && seat_r42.isReservable && !seat_r42.isLadiesSeat && seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && seat_r42.isReservable && seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isSelected && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && !seat_r42.isReservable && seat_r42.isLadiesSeat && !seat_r42.isGentsSeat && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isBerth && !seat_r42.isReservable && !seat_r42.isLadiesSeat && !seat_r42.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](28, _c6, seat_r42.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](30, _c8, seat_r42.isBerth, seat_r42.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r42.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42.isGangWay || seat_r42.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_td_1_Template, 19, 33, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r43, seat_r42));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r42);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r43);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 98);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r45.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r44);
      const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_1_Template, 5, 0, "span", 68)(2, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_2_Template, 5, 0, "span", 146)(3, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_3_Template, 5, 0, "span", 71)(4, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_4_Template, 5, 0, "span", 72)(5, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_5_Template, 5, 0, "span", 73)(6, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_6_Template, 5, 0, "span", 74)(7, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_7_Template, 2, 3, "span", 75)(8, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_8_Template, 2, 3, "span", 147)(9, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_9_Template, 2, 3, "span", 78)(10, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_10_Template, 2, 3, "span", 79)(11, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_11_Template, 2, 3, "span", 80)(12, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_span_12_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](15, _c7, seat_r45.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && seat_r45.isReservable && !seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && seat_r45.isReservable && seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && seat_r45.isReservable && !seat_r45.isLadiesSeat && seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && seat_r45.isReservable && seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && !seat_r45.isReservable && seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isBerth && !seat_r45.isReservable && !seat_r45.isLadiesSeat && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && seat_r45.isReservable && !seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && seat_r45.isReservable && seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && seat_r45.isReservable && !seat_r45.isLadiesSeat && seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && seat_r45.isReservable && seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isSelected && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && !seat_r45.isReservable && seat_r45.isLadiesSeat && !seat_r45.isGentsSeat && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isBerth && !seat_r45.isReservable && !seat_r45.isLadiesSeat && !seat_r45.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](17, _c9, seat_r45.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r45.isSocialDistancing ? "X" : "");
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 66)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_button_2_Template, 15, 19, "button", 104)(3, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c6, seat_r45.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r45.rowSpan)("colspan", seat_r45.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](8, _c5, seat_r45.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r45.isLower && seat_r45.isUpper && !seat_r45.isGangWay);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45.isGangWay || seat_r45.isUpperGangWay);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_td_1_Template, 4, 10, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r46, seat_r45));
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r45);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r46);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 98);
  }
}
function SeatLayoutPage_ng_container_1_swiper_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-container", 138, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("swiperslidechange", function SeatLayoutPage_ng_container_1_swiper_container_18_Template_swiper_container_swiperslidechange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r39);
      const mySlider_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "swiper-slide", 139)(3, "ion-icon", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_swiper_container_18_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 141)(5, "div", 61)(6, "table", 142)(7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, SeatLayoutPage_ng_container_1_swiper_container_18_tr_8_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, SeatLayoutPage_ng_container_1_swiper_container_18_div_9_Template, 1, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "swiper-slide", 143)(11, "ion-icon", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_swiper_container_18_Template_ion_icon_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div", 141)(13, "div", 101)(14, "table", 145)(15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](16, SeatLayoutPage_ng_container_1_swiper_container_18_tr_16_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](17, SeatLayoutPage_ng_container_1_swiper_container_18_div_17_Template, 1, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonU);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r49.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "td", 66)(2, "span")(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r48);
      const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_4_Template, 5, 0, "span", 68)(5, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_5_Template, 5, 0, "span", 146)(6, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_6_Template, 5, 0, "span", 71)(7, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_7_Template, 5, 0, "span", 72)(8, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_8_Template, 5, 0, "span", 73)(9, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_9_Template, 5, 0, "span", 74)(10, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_10_Template, 2, 3, "span", 75)(11, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_11_Template, 2, 3, "span", 147)(12, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_12_Template, 2, 3, "span", 78)(13, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_13_Template, 2, 3, "span", 79)(14, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_14_Template, 2, 3, "span", 80)(15, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_15_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](20, _c6, seat_r49.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r49.rowSpan)("colspan", seat_r49.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](22, _c11, seat_r49.isHorizontal, seat_r49.priceFiltered))("hidden", !(seat_r49.isLower && !seat_r49.isUpper && !seat_r49.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && seat_r49.isReservable && !seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && seat_r49.isReservable && seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && seat_r49.isReservable && !seat_r49.isLadiesSeat && seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && seat_r49.isReservable && seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && !seat_r49.isReservable && seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r49.isBerth && !seat_r49.isReservable && !seat_r49.isLadiesSeat && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && seat_r49.isReservable && !seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && seat_r49.isReservable && seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && seat_r49.isReservable && !seat_r49.isLadiesSeat && seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && seat_r49.isReservable && seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isSelected && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && !seat_r49.isReservable && seat_r49.isLadiesSeat && !seat_r49.isGentsSeat && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isBerth && !seat_r49.isReservable && !seat_r49.isLadiesSeat && !seat_r49.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](25, _c9, seat_r49.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r49.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49.isGangWay || seat_r49.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_ng_container_0_Template, 19, 27, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r49);
  }
}
function SeatLayoutPage_ng_container_1_div_19_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_1_div_19_tr_5_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r50);
  }
}
function SeatLayoutPage_ng_container_1_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 112);
  }
}
function SeatLayoutPage_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 150)(1, "ion-icon", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_div_19_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 61)(3, "table", 152)(4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, SeatLayoutPage_ng_container_1_div_19_tr_5_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_1_div_19_div_6_Template, 1, 0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c10, ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare ? "18%" : "4%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 114)(3, "ion-buttons", 115)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, SeatLayoutPage_ng_container_1_ion_row_11_Template, 3, 1, "ion-row", 1)(12, SeatLayoutPage_ng_container_1_div_12_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, SeatLayoutPage_ng_container_1_div_14_Template, 2, 1, "div", 10)(15, SeatLayoutPage_ng_container_1_div_15_Template, 11, 4, "div", 11)(16, SeatLayoutPage_ng_container_1_ion_row_16_Template, 7, 3, "ion-row", 118)(17, SeatLayoutPage_ng_container_1_ion_row_17_Template, 4, 2, "ion-row", 118)(18, SeatLayoutPage_ng_container_1_swiper_container_18_Template, 18, 4, "swiper-container", 119)(19, SeatLayoutPage_ng_container_1_div_19_Template, 7, 5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "div", 121)(21, "div", 122)(22, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](26, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_Template_div_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "div")(28, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_1_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "div")(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](34, "DONE");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "ion-bottom-drawer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("stateChange", function SeatLayoutPage_ng_container_1_Template_ion_bottom_drawer_stateChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.drawerState, $event) || (ctx_r1.drawerState = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](37, " Bottom Drawer Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.origin == null ? null : ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination == null ? null : ctx_r1.destination.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.selectedRoute.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate4"]("", ctx_r1.dateFull.day + " ", "", " " + ctx_r1.dateFull.monthNameShort, " ", " '" + ctx_r1.dateFull && ctx_r1.dateFull.year ? ctx_r1.dateFull.year.toString().substr(2, 4) : "", " | ", ctx_r1.selectedRoute ? ctx_r1.selectedRoute.dep_time : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.service_description != null && ctx_r1.service_description.trim() != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showLegend);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.serviceDetailsFull.all_fare_details && ctx_r1.subdomain.indexOf("abct") == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.selectedSeatsToBook.length > 0 ? "up" : "down");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", "Seat", "(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](" " + ctx_r1.selectedSeatsNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", " " + ctx_r1.currencySym + " ", "", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](30, 27, ctx_r1.totalBookingAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !(ctx_r1.selectedSeatsToBook.length < 1))("disableDrag", ctx_r1.disableDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("state", ctx_r1.drawerState);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("minimumHeight", ctx_r1.minimumHeight)("dockedHeight", ctx_r1.dockedHeight)("shouldBounce", ctx_r1.shouldBounce)("distanceTop", ctx_r1.distanceTop);
  }
}
function SeatLayoutPage_ng_container_2_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row")(1, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r1.service_description, " ");
  }
}
function SeatLayoutPage_ng_container_2_div_10_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c3, seat_r53.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", seat_r53.name, " ");
  }
}
function SeatLayoutPage_ng_container_2_div_10_ion_col_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Blocked seat for social distancing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_10_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 43)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_2_div_10_ion_col_4_div_3_Template, 2, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 35)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_2_div_10_ion_col_3_Template, 4, 4, "ion-col", 36)(4, SeatLayoutPage_ng_container_2_div_10_ion_col_4_Template, 4, 3, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 38)(6, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_div_10_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.showLegend = !ctx_r1.showLegend);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.legendDetailsKeysStatic);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.commonStorage.localGet("serviceDetails").message);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER BOARDING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.boardingStage.name + " ", "-", " " + ctx_r1.boardingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER DROPING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.droppingStage.name + " ", "-", " " + ctx_r1.droppingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46)(1, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_13_div_1_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_2_Template, 2, 0, "div", 48)(3, SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_3_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "ion-icon", 49)(5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_13_div_1_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectDropingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_7_Template, 2, 0, "div", 48)(8, SeatLayoutPage_ng_container_2_ng_container_13_div_1_div_8_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "ion-icon", 49)(10, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.droppingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.droppingStage);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_13_div_1_Template, 11, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_div_3_Template_div_click_0_listener() {
      const prices_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r56).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter(prices_r57.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prices_r57 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == prices_r57.toString() ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, " ", " " + prices_r57, " ");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter("All"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " All Prices ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_div_3_Template, 2, 3, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == "All" ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.costArray);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "ion-card", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_2_ng_container_14_ion_row_2_Template, 4, 2, "ion-row", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.serviceDetailsFull.all_fare_details && ctx_r1.subdomain.indexOf("abct") == -1);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_15_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 165)(2, "ion-segment", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("ngModelChange", function SeatLayoutPage_ng_container_2_ng_container_15_ion_row_1_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.berthType, $event) || (ctx_r1.berthType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "ion-segment-button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_15_ion_row_1_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "ion-segment-button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_15_ion_row_1_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.berthType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Lower Deck", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Upper Deck", " ");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_15_ion_row_1_Template, 7, 3, "ion-row", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r63.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td")(1, "span", 66)(2, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r62);
      const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r63, seat_r63.isReservable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template, 5, 0, "span", 68)(4, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_4_Template, 5, 0, "span", 146)(5, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_5_Template, 5, 0, "span", 71)(6, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_6_Template, 5, 0, "span", 72)(7, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_7_Template, 5, 0, "span", 73)(8, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_8_Template, 5, 0, "span", 74)(9, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_9_Template, 2, 3, "span", 75)(10, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_10_Template, 2, 3, "span", 147)(11, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_11_Template, 2, 3, "span", 78)(12, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_12_Template, 2, 3, "span", 79)(13, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_13_Template, 2, 3, "span", 80)(14, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_14_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "span", 66)(16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r63.rowSpan)("colspan", seat_r63.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c5, seat_r63.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c6, seat_r63.isHorizontal))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](26, _c7, seat_r63.isHorizontal))("hidden", !(seat_r63.isLower && !seat_r63.isUpper && !seat_r63.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && seat_r63.isReservable && !seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && seat_r63.isReservable && seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && seat_r63.isReservable && !seat_r63.isLadiesSeat && seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && seat_r63.isReservable && seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && !seat_r63.isReservable && seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r63.isBerth && !seat_r63.isReservable && !seat_r63.isLadiesSeat && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && seat_r63.isReservable && !seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && seat_r63.isReservable && seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && seat_r63.isReservable && !seat_r63.isLadiesSeat && seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && seat_r63.isReservable && seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isSelected && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && !seat_r63.isReservable && seat_r63.isLadiesSeat && !seat_r63.isGentsSeat && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isBerth && !seat_r63.isReservable && !seat_r63.isLadiesSeat && !seat_r63.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](28, _c6, seat_r63.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](30, _c8, seat_r63.isBerth, seat_r63.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r63.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63.isGangWay || seat_r63.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_td_1_Template, 19, 33, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r64, seat_r63));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r63);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r64);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-slide", 172)(1, "ion-icon", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 60)(3, "div", 61)(4, "table", 62)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_tr_6_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r67.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r66);
      const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r67));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_1_Template, 5, 0, "span", 68)(2, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_2_Template, 5, 0, "span", 146)(3, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_3_Template, 5, 0, "span", 71)(4, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_4_Template, 5, 0, "span", 72)(5, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_5_Template, 5, 0, "span", 73)(6, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_6_Template, 5, 0, "span", 74)(7, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_7_Template, 2, 3, "span", 75)(8, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_8_Template, 2, 3, "span", 147)(9, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_9_Template, 2, 3, "span", 78)(10, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_10_Template, 2, 3, "span", 79)(11, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_11_Template, 2, 3, "span", 80)(12, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_span_12_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](15, _c7, seat_r67.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && seat_r67.isReservable && !seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && seat_r67.isReservable && seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && seat_r67.isReservable && !seat_r67.isLadiesSeat && seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && seat_r67.isReservable && seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && !seat_r67.isReservable && seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isBerth && !seat_r67.isReservable && !seat_r67.isLadiesSeat && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && seat_r67.isReservable && !seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && seat_r67.isReservable && seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && seat_r67.isReservable && !seat_r67.isLadiesSeat && seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && seat_r67.isReservable && seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isSelected && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && !seat_r67.isReservable && seat_r67.isLadiesSeat && !seat_r67.isGentsSeat && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isBerth && !seat_r67.isReservable && !seat_r67.isLadiesSeat && !seat_r67.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](17, _c9, seat_r67.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r67.isSocialDistancing ? "X" : "");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 66)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_button_2_Template, 15, 19, "button", 104)(3, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c6, seat_r67.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r67.rowSpan)("colspan", seat_r67.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](8, _c5, seat_r67.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r67.isLower && seat_r67.isUpper && !seat_r67.isGangWay);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67.isGangWay || seat_r67.isUpperGangWay);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_td_1_Template, 4, 10, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r68, seat_r67));
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r67);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r68);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-slide", 174)(1, "ion-icon", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 60)(3, "div", 101)(4, "table", 102)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_tr_6_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonU);
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-container", 169, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("swiperslidechange", function SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_Template_swiper_container_swiperslidechange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r59);
      const mySlider_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_2_Template, 7, 1, "swiper-slide", 170)(3, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_swiper_slide_3_Template, 7, 1, "swiper-slide", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.berthType === "lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.berthType === "upper");
  }
}
function SeatLayoutPage_ng_container_2_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_ng_container_16_swiper_container_1_Template, 4, 2, "swiper-container", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility);
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span")(2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r71.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "td", 66)(2, "span")(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r70);
      const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r71));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_4_Template, 5, 0, "span", 68)(5, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_5_Template, 5, 0, "span", 146)(6, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_6_Template, 5, 0, "span", 71)(7, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_7_Template, 5, 0, "span", 72)(8, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_8_Template, 5, 0, "span", 73)(9, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_9_Template, 5, 0, "span", 74)(10, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_10_Template, 2, 3, "span", 75)(11, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_11_Template, 2, 3, "span", 147)(12, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_12_Template, 2, 3, "span", 78)(13, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_13_Template, 2, 3, "span", 79)(14, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_14_Template, 2, 3, "span", 80)(15, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_15_Template, 2, 3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](20, _c6, seat_r71.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r71.rowSpan)("colspan", seat_r71.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](22, _c11, seat_r71.isHorizontal, seat_r71.priceFiltered))("hidden", !(seat_r71.isLower && !seat_r71.isUpper && !seat_r71.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && seat_r71.isReservable && !seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && seat_r71.isReservable && seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && seat_r71.isReservable && !seat_r71.isLadiesSeat && seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && seat_r71.isReservable && seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && !seat_r71.isReservable && seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r71.isBerth && !seat_r71.isReservable && !seat_r71.isLadiesSeat && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && seat_r71.isReservable && !seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && seat_r71.isReservable && seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && seat_r71.isReservable && !seat_r71.isLadiesSeat && seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && seat_r71.isReservable && seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isSelected && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && !seat_r71.isReservable && seat_r71.isLadiesSeat && !seat_r71.isGentsSeat && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isBerth && !seat_r71.isReservable && !seat_r71.isLadiesSeat && !seat_r71.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](25, _c9, seat_r71.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r71.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71.isGangWay || seat_r71.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_ng_container_0_Template, 19, 27, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r71);
  }
}
function SeatLayoutPage_ng_container_2_div_17_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_2_div_17_tr_5_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r72);
  }
}
function SeatLayoutPage_ng_container_2_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 112);
  }
}
function SeatLayoutPage_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 176)(1, "ion-icon", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_div_17_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.legendIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 61)(3, "table", 152)(4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, SeatLayoutPage_ng_container_2_div_17_tr_5_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_2_div_17_div_6_Template, 1, 0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c10, ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare ? "18%" : "10%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_2_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", "Seat", "(s):");
  }
}
function SeatLayoutPage_ng_container_2_div_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", " " + ctx_r1.currencySym + " ", "", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](2, 2, ctx_r1.totalBookingAmount, "1.2-2"), "");
  }
}
function SeatLayoutPage_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 177)(1, "ion-row", 178)(2, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_2_div_19_span_3_Template, 2, 1, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-col", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_2_div_19_span_7_Template, 3, 5, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeatsNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](" " + ctx_r1.selectedSeatsNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.totalBookingAmount);
  }
}
function SeatLayoutPage_ng_container_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "Select boarding & dropping points");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 153)(3, "ion-buttons", 115)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_2_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6, "Select seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, SeatLayoutPage_ng_container_2_ion_row_9_Template, 3, 1, "ion-row", 1)(10, SeatLayoutPage_ng_container_2_div_10_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "ion-content", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, SeatLayoutPage_ng_container_2_div_12_Template, 2, 1, "div", 10)(13, SeatLayoutPage_ng_container_2_ng_container_13_Template, 2, 1, "ng-container", 1)(14, SeatLayoutPage_ng_container_2_ng_container_14_Template, 3, 1, "ng-container", 1)(15, SeatLayoutPage_ng_container_2_ng_container_15_Template, 2, 1, "ng-container", 1)(16, SeatLayoutPage_ng_container_2_ng_container_16_Template, 2, 1, "ng-container", 1)(17, SeatLayoutPage_ng_container_2_div_17_Template, 7, 5, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "ion-footer", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](19, SeatLayoutPage_ng_container_2_div_19_Template, 8, 3, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](21, SeatLayoutPage_ng_container_2_div_21_Template, 4, 0, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "ion-bottom-drawer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("stateChange", function SeatLayoutPage_ng_container_2_Template_ion_bottom_drawer_stateChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.drawerState, $event) || (ctx_r1.drawerState = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](24, " Bottom Drawer Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.origin == null ? null : ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination == null ? null : ctx_r1.destination.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.service_description != null && ctx_r1.service_description.trim() != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showLegend);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showNon);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showNon == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showNon == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showNon == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.showNon == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeatsNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeatsToBook.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !(ctx_r1.selectedSeatsToBook.length < 1))("disableDrag", ctx_r1.disableDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("state", ctx_r1.drawerState);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("minimumHeight", ctx_r1.minimumHeight)("dockedHeight", ctx_r1.dockedHeight)("shouldBounce", ctx_r1.shouldBounce)("distanceTop", ctx_r1.distanceTop);
  }
}
function SeatLayoutPage_ng_container_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.journeyType == "onward" ? "\u00A0(Onward)" : "\u00A0(Return)");
  }
}
function SeatLayoutPage_ng_container_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SeatLayoutPage_ng_container_3_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER BOARDING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.boardingStage.name + " ", "-", " " + ctx_r1.boardingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_3_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "ENTER DROPING POINT");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r1.droppingStage.name + " ", "-", " " + ctx_r1.droppingStage.time, "");
  }
}
function SeatLayoutPage_ng_container_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46)(1, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_16_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r75);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_3_div_16_div_2_Template, 2, 0, "div", 48)(3, SeatLayoutPage_ng_container_3_div_16_div_3_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "ion-icon", 49)(5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_16_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r75);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectDropingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_3_div_16_div_7_Template, 2, 0, "div", 48)(8, SeatLayoutPage_ng_container_3_div_16_div_8_Template, 2, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "ion-icon", 49)(10, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.boardingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.droppingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.droppingStage);
  }
}
function SeatLayoutPage_ng_container_3_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 132)(2, "ion-segment", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("ngModelChange", function SeatLayoutPage_ng_container_3_ion_row_17_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.berthType, $event) || (ctx_r1.berthType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "ion-segment-button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_ion_row_17_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "ion-segment-button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_ion_row_17_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToSlide("mySlider", 1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.berthType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Lower (" + ctx_r1.lowerCount + ")", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Upper (" + ctx_r1.upperCount + ")", " ");
  }
}
function SeatLayoutPage_ng_container_3_div_18_ion_col_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 204)(1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "img", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](3, _c12, seat_r77.background, seat_r77.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("src", seat_r77.img, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r77.name);
  }
}
function SeatLayoutPage_ng_container_3_div_18_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-col", 208)(1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Blocked seat for social distancing");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](1, _c4));
  }
}
function SeatLayoutPage_ng_container_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 199)(1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Select your seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 201)(4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, SeatLayoutPage_ng_container_3_div_18_ion_col_5_Template, 5, 6, "ion-col", 202)(6, SeatLayoutPage_ng_container_3_div_18_ion_col_6_Template, 5, 2, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.legendDetailsKeysStaticOurBusTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.isSocialDistancing);
  }
}
function SeatLayoutPage_ng_container_3_ion_row_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_ion_row_19_div_3_Template_div_click_0_listener() {
      const prices_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r79).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter(prices_r80.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prices_r80 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == prices_r80.toString() ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", prices_r80, " ");
  }
}
function SeatLayoutPage_ng_container_3_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 131)(1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_ion_row_19_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r78);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectPriceFilter("All"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_3_ion_row_19_div_3_Template, 2, 3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.priceFilter == "All" ? "select" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.costArray);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 237)(3, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 241)(3, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 243)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 247)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 258)(3, "rect", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r84.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 263)(3, "rect", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r84.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r84.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td")(1, "span", 66)(2, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r83);
      const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r84, seat_r84.isReservable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_3_Template, 6, 2, "span", 217)(4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_4_Template, 6, 2, "span", 218)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_5_Template, 6, 2, "span", 219)(6, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_6_Template, 6, 2, "span", 220)(7, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_7_Template, 5, 0, "span", 221)(8, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_8_Template, 5, 0, "span", 222)(9, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_9_Template, 6, 5, "span", 223)(10, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_10_Template, 6, 5, "span", 224)(11, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_11_Template, 6, 5, "span", 225)(12, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_12_Template, 6, 5, "span", 226)(13, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_13_Template, 4, 3, "span", 227)(14, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_14_Template, 4, 3, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "span", 66)(16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r84.rowSpan)("colspan", seat_r84.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c5, seat_r84.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c6, seat_r84.isHorizontal))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](26, _c7, seat_r84.isHorizontal))("hidden", !(seat_r84.isLower && !seat_r84.isUpper && !seat_r84.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && seat_r84.isReservable && !seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && seat_r84.isReservable && seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && seat_r84.isReservable && !seat_r84.isLadiesSeat && seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && seat_r84.isReservable && seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && !seat_r84.isReservable && seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r84.isBerth && !seat_r84.isReservable && !seat_r84.isLadiesSeat && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && seat_r84.isReservable && !seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && seat_r84.isReservable && seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && seat_r84.isReservable && !seat_r84.isLadiesSeat && seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && seat_r84.isReservable && seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isSelected && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && !seat_r84.isReservable && seat_r84.isLadiesSeat && !seat_r84.isGentsSeat && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isBerth && !seat_r84.isReservable && !seat_r84.isLadiesSeat && !seat_r84.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](28, _c6, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](30, _c8, seat_r84.isBerth, seat_r84.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r84.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84.isGangWay || seat_r84.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_td_1_Template, 19, 33, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r85, seat_r84));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r84);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r85);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 269);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 237)(3, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 241)(3, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 243)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 247)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 258)(3, "rect", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r87.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.number);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 263)(3, "rect", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r87.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r87.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r86);
      const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_1_Template, 6, 2, "span", 217)(2, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_2_Template, 6, 2, "span", 218)(3, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_3_Template, 6, 2, "span", 219)(4, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_4_Template, 6, 2, "span", 220)(5, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_5_Template, 5, 0, "span", 221)(6, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_6_Template, 5, 0, "span", 222)(7, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_7_Template, 6, 5, "span", 223)(8, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_8_Template, 6, 5, "span", 224)(9, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_9_Template, 6, 5, "span", 225)(10, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_10_Template, 6, 5, "span", 226)(11, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_11_Template, 4, 3, "span", 227)(12, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_span_12_Template, 4, 3, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](15, _c7, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && seat_r87.isReservable && !seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && seat_r87.isReservable && seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && seat_r87.isReservable && !seat_r87.isLadiesSeat && seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && seat_r87.isReservable && seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && !seat_r87.isReservable && seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isBerth && !seat_r87.isReservable && !seat_r87.isLadiesSeat && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && seat_r87.isReservable && !seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && seat_r87.isReservable && seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && seat_r87.isReservable && !seat_r87.isLadiesSeat && seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && seat_r87.isReservable && seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isSelected && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && !seat_r87.isReservable && seat_r87.isLadiesSeat && !seat_r87.isGentsSeat && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isBerth && !seat_r87.isReservable && !seat_r87.isLadiesSeat && !seat_r87.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](17, _c9, seat_r87.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r87.isSocialDistancing ? "X" : "");
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 66)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_button_2_Template, 15, 19, "button", 104)(3, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c6, seat_r87.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r87.rowSpan)("colspan", seat_r87.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](8, _c5, seat_r87.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r87.isLower && seat_r87.isUpper && !seat_r87.isGangWay);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87.isGangWay || seat_r87.isUpperGangWay);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_td_1_Template, 4, 10, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r88, seat_r87));
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r87);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r88);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 269);
  }
}
function SeatLayoutPage_ng_container_3_swiper_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "swiper-container", 209, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("swiperslidechange", function SeatLayoutPage_ng_container_3_swiper_container_20_Template_swiper_container_swiperslidechange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r81);
      const mySlider_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "swiper-slide", 210)(3, "div", 211)(4, "ion-row", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](7, "ion-icon", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "div", 61)(9, "table", 62)(10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, SeatLayoutPage_ng_container_3_swiper_container_20_tr_11_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, SeatLayoutPage_ng_container_3_swiper_container_20_div_12_Template, 1, 0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "swiper-slide", 216)(14, "div", 211)(15, "ion-row", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](16, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](18, "ion-icon", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "div", 101)(20, "table", 102)(21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, SeatLayoutPage_ng_container_3_swiper_container_20_tr_22_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](23, SeatLayoutPage_ng_container_3_swiper_container_20_div_23_Template, 1, 0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonU);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 237)(3, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 241)(3, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 243)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 247)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 258)(3, "rect", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r92.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 263)(3, "rect", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r92.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r92.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td")(1, "span", 66)(2, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r91);
      const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r92, seat_r92.isReservable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_3_Template, 6, 2, "span", 217)(4, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_4_Template, 6, 2, "span", 218)(5, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_5_Template, 6, 2, "span", 219)(6, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_6_Template, 6, 2, "span", 220)(7, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_7_Template, 5, 0, "span", 221)(8, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_8_Template, 5, 0, "span", 222)(9, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_9_Template, 6, 5, "span", 223)(10, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_10_Template, 6, 5, "span", 224)(11, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_11_Template, 6, 5, "span", 225)(12, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_12_Template, 6, 5, "span", 226)(13, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_13_Template, 4, 3, "span", 227)(14, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_14_Template, 4, 3, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "span", 66)(16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r92.rowSpan)("colspan", seat_r92.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](22, _c5, seat_r92.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](24, _c6, seat_r92.isHorizontal))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](26, _c7, seat_r92.isHorizontal))("hidden", !(seat_r92.isLower && !seat_r92.isUpper && !seat_r92.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && seat_r92.isReservable && !seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && seat_r92.isReservable && seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && seat_r92.isReservable && !seat_r92.isLadiesSeat && seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && seat_r92.isReservable && seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && !seat_r92.isReservable && seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r92.isBerth && !seat_r92.isReservable && !seat_r92.isLadiesSeat && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && seat_r92.isReservable && !seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && seat_r92.isReservable && seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && seat_r92.isReservable && !seat_r92.isLadiesSeat && seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && seat_r92.isReservable && seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isSelected && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && !seat_r92.isReservable && seat_r92.isLadiesSeat && !seat_r92.isGentsSeat && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isBerth && !seat_r92.isReservable && !seat_r92.isLadiesSeat && !seat_r92.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](28, _c6, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](30, _c8, seat_r92.isBerth, seat_r92.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r92.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92.isGangWay || seat_r92.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_td_1_Template, 19, 33, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r93, seat_r92));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r92);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_21_tr_15_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r93);
  }
}
function SeatLayoutPage_ng_container_3_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 269);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 237)(3, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 241)(3, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 243)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 247)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 258)(3, "rect", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r95.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.number);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 263)(3, "rect", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r95.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r95.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r94);
      const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r95));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_1_Template, 6, 2, "span", 217)(2, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_2_Template, 6, 2, "span", 218)(3, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_3_Template, 6, 2, "span", 219)(4, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_4_Template, 6, 2, "span", 220)(5, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_5_Template, 5, 0, "span", 221)(6, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_6_Template, 5, 0, "span", 222)(7, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_7_Template, 6, 5, "span", 223)(8, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_8_Template, 6, 5, "span", 224)(9, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_9_Template, 6, 5, "span", 225)(10, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_10_Template, 6, 5, "span", 226)(11, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_11_Template, 4, 3, "span", 227)(12, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_span_12_Template, 4, 3, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](15, _c7, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && seat_r95.isReservable && !seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && seat_r95.isReservable && seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && seat_r95.isReservable && !seat_r95.isLadiesSeat && seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && seat_r95.isReservable && seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && !seat_r95.isReservable && seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isBerth && !seat_r95.isReservable && !seat_r95.isLadiesSeat && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && seat_r95.isReservable && !seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && seat_r95.isReservable && seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && seat_r95.isReservable && !seat_r95.isLadiesSeat && seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && seat_r95.isReservable && seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isSelected && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && !seat_r95.isReservable && seat_r95.isLadiesSeat && !seat_r95.isGentsSeat && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isBerth && !seat_r95.isReservable && !seat_r95.isLadiesSeat && !seat_r95.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](17, _c9, seat_r95.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r95.isSocialDistancing ? "X" : "");
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 66)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_button_2_Template, 15, 19, "button", 104)(3, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c6, seat_r95.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r95.rowSpan)("colspan", seat_r95.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](8, _c13, seat_r95.priceFiltered, !seat_r95.priceFiltered));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r95.isLower && seat_r95.isUpper && !seat_r95.isGangWay);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95.isGangWay || seat_r95.isUpperGangWay);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_td_1_Template, 4, 11, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const row_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.checkSeat(row_r96, seat_r95));
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r95);
  }
}
function SeatLayoutPage_ng_container_3_div_21_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_21_tr_28_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r96);
  }
}
function SeatLayoutPage_ng_container_3_div_21_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 269);
  }
}
function SeatLayoutPage_ng_container_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 270)(1, "swiper-container", 271, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("swiperslidechange", function SeatLayoutPage_ng_container_3_div_21_Template_swiper_container_swiperslidechange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r89);
      const mySlider_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r90));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 272)(4, "swiper-slide", 210)(5, "div", 273)(6, "ion-row", 274)(7, "ion-col", 275)(8, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](11, "ion-icon", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "div", 61)(13, "table", 62)(14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](15, SeatLayoutPage_ng_container_3_div_21_tr_15_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](16, SeatLayoutPage_ng_container_3_div_21_div_16_Template, 1, 0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "swiper-slide", 216)(18, "div", 277)(19, "ion-row", 274)(20, "ion-col", 275)(21, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](24, "ion-icon", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "div", 101)(26, "table", 102)(27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](28, SeatLayoutPage_ng_container_3_div_21_tr_28_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](29, SeatLayoutPage_ng_container_3_div_21_div_29_Template, 1, 0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("options", ctx_r1.slideOptsTwo);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Lower", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", "Upper", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonU);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_3_div_22_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ion-row", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "ion-col", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "img", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 237)(3, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 231)(3, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 241)(3, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_div_4_Template, 2, 1, "div", 233)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_div_5_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 243)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 247)(1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "rect", 245)(4, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r98.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 258)(3, "rect", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r98.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 250)(3, "rect", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r98.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r1.currencySym + seat_r98.base_fare_filter);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.number);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 263)(3, "rect", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_div_4_Template, 2, 1, "div", 252)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_div_5_Template, 2, 1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](3, _c6, seat_r98.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_fares_on_coach_layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_fares_on_coach_layout);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r98.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "rect", 266)(3, "rect", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c6, seat_r98.isHorizontal));
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "td", 66)(2, "span")(3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r97);
      const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.selectSeat(seat_r98));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_4_Template, 6, 2, "span", 217)(5, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_5_Template, 6, 2, "span", 218)(6, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_6_Template, 6, 2, "span", 219)(7, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_7_Template, 6, 2, "span", 220)(8, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_8_Template, 5, 0, "span", 221)(9, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_9_Template, 5, 0, "span", 222)(10, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_10_Template, 6, 5, "span", 223)(11, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_11_Template, 6, 5, "span", 224)(12, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_12_Template, 6, 5, "span", 225)(13, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_13_Template, 6, 5, "span", 226)(14, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_14_Template, 4, 3, "span", 227)(15, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_15_Template, 4, 3, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_span_18_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const seat_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](20, _c6, seat_r98.isHorizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("rowspan", seat_r98.rowSpan)("colspan", seat_r98.colSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](22, _c11, seat_r98.isHorizontal, seat_r98.priceFiltered))("hidden", !(seat_r98.isLower && !seat_r98.isUpper && !seat_r98.isGangWay));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && seat_r98.isReservable && !seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && seat_r98.isReservable && seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && seat_r98.isReservable && !seat_r98.isLadiesSeat && seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && seat_r98.isReservable && seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && !seat_r98.isReservable && seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !seat_r98.isBerth && !seat_r98.isReservable && !seat_r98.isLadiesSeat && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && seat_r98.isReservable && !seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && seat_r98.isReservable && seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && seat_r98.isReservable && !seat_r98.isLadiesSeat && seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && seat_r98.isReservable && seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isSelected && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && !seat_r98.isReservable && seat_r98.isLadiesSeat && !seat_r98.isGentsSeat && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isBerth && !seat_r98.isReservable && !seat_r98.isLadiesSeat && !seat_r98.isBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](25, _c9, seat_r98.isBerth));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](seat_r98.isSocialDistancing ? "X" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98.isGangWay || seat_r98.isLowerGangWay);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_ng_container_0_Template, 19, 27, "ng-container", 1);
  }
  if (rf & 2) {
    const seat_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", seat_r98);
  }
}
function SeatLayoutPage_ng_container_3_div_22_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, SeatLayoutPage_ng_container_3_div_22_tr_6_ng_template_1_Template, 1, 1, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", row_r99);
  }
}
function SeatLayoutPage_ng_container_3_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 112);
  }
}
function SeatLayoutPage_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 150)(1, "div", 279)(2, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, SeatLayoutPage_ng_container_3_div_22_ion_row_3_Template, 4, 0, "ion-row", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "table", 62)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_3_div_22_tr_6_Template, 2, 1, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, SeatLayoutPage_ng_container_3_div_22_div_7_Template, 1, 0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.coachLayoutJsonL.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r1.coachLayoutJsonL);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.drawerState == 1);
  }
}
function SeatLayoutPage_ng_container_3_div_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", "Seat", "(s)");
  }
}
function SeatLayoutPage_ng_container_3_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"]("Seat");
  }
}
function SeatLayoutPage_ng_container_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 282)(1, "div", 283)(2, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, SeatLayoutPage_ng_container_3_div_23_div_6_Template, 2, 1, "div", 286)(7, SeatLayoutPage_ng_container_3_div_23_div_7_Template, 2, 1, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "ion-col", 288)(11, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_div_23_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r100);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goToPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "ion-button", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](18, "Reserve Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20, " * Taxes will be calculated during payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r1.selectedSeatsToBook.length > 0 ? "up" : "down");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeatsToBook.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedSeatsToBook.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](" " + ctx_r1.selectedSeatsNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"]("PRICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", " " + ctx_r1.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](15, 7, ctx_r1.totalBookingAmount, "1.2-2"), "");
  }
}
function SeatLayoutPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "ion-header", 185)(2, "ion-toolbar", 114)(3, "ion-buttons", 115)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function SeatLayoutPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](7, "ion-icon", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](11, "img", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](13, SeatLayoutPage_ng_container_3_span_13_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "ion-content", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](15, SeatLayoutPage_ng_container_3_div_15_Template, 2, 1, "div", 10)(16, SeatLayoutPage_ng_container_3_div_16_Template, 11, 4, "div", 11)(17, SeatLayoutPage_ng_container_3_ion_row_17_Template, 7, 3, "ion-row", 118)(18, SeatLayoutPage_ng_container_3_div_18_Template, 7, 2, "div", 191)(19, SeatLayoutPage_ng_container_3_ion_row_19_Template, 4, 2, "ion-row", 118)(20, SeatLayoutPage_ng_container_3_swiper_container_20_Template, 24, 4, "swiper-container", 192)(21, SeatLayoutPage_ng_container_3_div_21_Template, 30, 7, "div", 193)(22, SeatLayoutPage_ng_container_3_div_22_Template, 8, 3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](23, SeatLayoutPage_ng_container_3_div_23_Template, 21, 10, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "ion-bottom-drawer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayListener"]("stateChange", function SeatLayoutPage_ng_container_3_Template_ion_bottom_drawer_stateChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayBindingSet"](ctx_r1.drawerState, $event) || (ctx_r1.drawerState = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26, " Bottom Drawer Content\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", ctx_r1.ourBusHeaderDate ? ctx_r1.ourBusHeaderDate.dep_time : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r1.ourBusHeaderDate ? ctx_r1.ourBusHeaderDate.arr_time : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate3"](" ", ctx_r1.dateFull.monthNameShort, " ", ctx_r1.leadingZero(ctx_r1.dateFull.day), " |\u00A0 ", ctx_r1.OurbusPassengerCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" \u00A0| ", ctx_r1.commaSeparate(ctx_r1.origin == null ? null : ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination == null ? null : ctx_r1.destination.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.allowBPDPFare && ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility && !ctx_r1.metaData.show_coach_layout_in_single_view);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.serviceDetailsFull.all_fare_details && ctx_r1.subdomain.indexOf("abct") == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility && !ctx_r1.metaData.show_coach_layout_in_single_view);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.upperAvalibility && ctx_r1.metaData.show_coach_layout_in_single_view);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.upperAvalibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.proceedBtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !(ctx_r1.selectedSeatsToBook.length < 1))("disableDrag", ctx_r1.disableDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtwoWayProperty"]("state", ctx_r1.drawerState);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("minimumHeight", ctx_r1.minimumHeight)("dockedHeight", ctx_r1.dockedHeight)("shouldBounce", ctx_r1.shouldBounce)("distanceTop", ctx_r1.distanceTop);
  }
}
class SeatLayoutPage {
  constructor(globalData, theme, apiFactory, commonStorage, route, commonService, loader, util, ex, navCtrl, dateService, router, modalController, alertController, authenticate, appData, popoverCtrl, zone, firebaseAnalyticsService, cdr, toastController) {
    this.globalData = globalData;
    this.theme = theme;
    this.apiFactory = apiFactory;
    this.commonStorage = commonStorage;
    this.route = route;
    this.commonService = commonService;
    this.loader = loader;
    this.util = util;
    this.ex = ex;
    this.navCtrl = navCtrl;
    this.dateService = dateService;
    this.router = router;
    this.modalController = modalController;
    this.alertController = alertController;
    this.authenticate = authenticate;
    this.appData = appData;
    this.popoverCtrl = popoverCtrl;
    this.zone = zone;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.cdr = cdr;
    this.toastController = toastController;
    this.swiperModules = [swiper_modules__WEBPACK_IMPORTED_MODULE_5__.EffectCube];
    this.slideOpts = {
      effect: 'fade'
    };
    this.legendDetails = [];
    this.legendDetailsKeys = [];
    this.colorr = '#b8e986';
    this.showView = true;
    this.priceFilter = 'All';
    this.berthType = 'lower';
    this.upperCount = 0;
    this.lowerCount = 0;
    this.lowerFilter = false;
    this.upperFilter = false;
    this.coachLayout = {
      upperAvalibility: false,
      coachLayoutJson: [],
      coachLayoutJsonU: [],
      coachLayoutJsonL: []
    };
    this.errorMessage = '';
    this.serviceDetailsFull = [];
    this.selectedSeatsToBook = [];
    this.coachTabs = 'seats';
    this.coachLayoutJson = [];
    this.coachLayoutJsonU = [];
    this.coachLayoutJsonL = [];
    this.originStageDetails = [];
    this.destinationStageDetails = [];
    this.origin = [];
    this.destination = [];
    this.selectedRoute = [];
    this.isAppDiscount = false;
    this.steeringWidth = 0;
    this.isReturn = false;
    this.isreturnTrip = false;
    this.mySlideOptions = {
      initialSlide: 0,
      loop: false
    };
    this.isGstApplicable = true;
    this.isSocialDistancing = false;
    this.shouldBounce = true;
    this.disableDrag = false;
    this.dockedHeight = 115;
    this.distanceTop = 0;
    this.drawerState = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState.Docked;
    this.states = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState;
    this.minimumHeight = 25;
    this.showLegend = false;
    this.dateFull = [];
    this.bp = false;
    this.dp = false;
    // loaclStorageSeat = {};
    this.loaclStorageSeat = {};
    this.PriceDetailsArray = [];
    this.service_description = "";
    this.subdomain = "";
    this.seat_number_Array = [];
    this.show_coach_layout_in_single_view = false;
    this.getamenitiesDetail = [];
    this.bookseatcount = [];
    this.hideShowBorder = false;
    this.showNon = false;
    this.slideOptsTwo = {
      slidesPerView: 1.1,
      scrollbar: true,
      loop: false,
      pager: false,
      allowTouchMove: false
    };
    this.journeyType = '';
    this.isRoundTrip = false;
    this.selectedTripSegment = 'oneway';
    this.proceedBtnShow = false;
    this.isIos = false;
    this.isNavigatingBack = false;
    this.naviagetPassengerDetails = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = this.commonStorage.getItem("metaData");
    this.selectedTripSegment = this.commonStorage.getItem('selectedTripSegment');
    this.journeyType = this.commonStorage.localGet("journeyType");
    this.legendDetailsKeysStatic = [{
      name: "Available",
      color: "#fff"
    }, {
      name: "Selected",
      color: "#52c328"
    }, {
      name: "Reserved",
      color: "#ccc"
    }, {
      name: "Reserved(L)",
      color: "#fbcb21"
    }, {
      name: "Available(G)",
      color: "#77f"
    }, {
      name: "Available(L)",
      color: "#ff8a9f"
    }];
    this.legendDetailsKeysStaticthemeone = [{
      name: "Selected Ladies",
      color: "#FFE2ED"
    }, {
      name: "Selected Gents",
      color: "#D9F8FF"
    }, {
      name: "Available",
      color: "#FFFFFF"
    }, {
      name: "Reserved",
      color: "#CCCCCC"
    }, {
      name: "Reserved(L)",
      color: "#fbcb21"
    }, {
      name: "Available(G)",
      color: "#00D1FF"
    }, {
      name: "Available(L)",
      color: "#FF71A4"
    }];
    this.legendDetailsKeysStaticOurBusTheme = [{
      name: "Available",
      color: "#2D2D2D",
      background: '',
      img: ''
    }, {
      name: "Unavailable",
      color: "#D9D9D9",
      background: '',
      img: ''
    }, {
      name: "For Women",
      color: "#D7008F",
      background: '',
      img: 'assets/icon/OurbusGenderFemale.svg'
    }, {
      name: "Selected",
      color: "#4CAF50",
      background: "#4CAF5040",
      img: ''
    }];
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
    this.loaclStorageSeat['selectedSeat'] = [];
    this.loaclStorageSeat['selectedSeatReturn'] = [];
    this.appData.newTheme = this.util.getNewTheme();
    // this.defaultCall();
  }
  onSlideChange() {
    if (!this.swiper) return;
    // Update berthType based on active slide
    const activeIndex = this.swiper.activeIndex;
    this.berthType = activeIndex === 0 ? 'lower' : 'upper';
  }
  goBack() {
    const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
    if (datafill) {
      this.navCtrl.navigateForward('tabs/home');
    } else {
      // this.router.navigate(['/available-routes']);
      let isreturnTrip;
      this.route.queryParams.subscribe(params => {
        isreturnTrip = params["is_return_trip"];
      });
      if (isreturnTrip) {
        let navigationExtras = {
          queryParams: {
            is_return_trip: true
          }
        };
        this.navCtrl.navigateForward('available-routes', navigationExtras);
      } else {
        this.router.navigate(['/available-routes']);
      }
    }
  }
  legendIconClick() {
    this.showLegend = true;
    setTimeout(() => {
      this.showLegend = false;
    }, 5000);
  }
  ngOnInit() {
    this.show_coach_layout_in_single_view = this.commonStorage.getItem("locale") && this.commonStorage.getItem("locale").show_coach_layout_in_single_view ? this.commonStorage.getItem("locale").show_coach_layout_in_single_view : false;
    this.subscription = this.commonService.on('call-parent').subscribe(() => this.parentFunction());
    this.openPopUp = this.commonService.on('call-open').subscribe(() => this.openPopupFullScreen());
    this.firebaseAnalyticsService.logCustomEvent('view_coach_layout', {
      page: 'Seat Layout Page'
    });
    this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
    this.loaclStorageSeat['selectedSeat'] = [];
    this.loaclStorageSeat['selectedSeatReturn'] = [];
    let bpdpReservationFare = this.commonStorage.localGet('bpdpReservationFare');
    console.log(this.bpdpReservationFare, 'bpdpReservationFare');
    if (bpdpReservationFare) {
      this.boardingStage = bpdpReservationFare.boardingStage;
      this.droppingStage = bpdpReservationFare.droppingStage;
    }
  }
  ngOnDestroy() {
    var _this$subscription;
    (_this$subscription = this.subscription) === null || _this$subscription === void 0 || _this$subscription.unsubscribe();
  }
  parentFunction() {
    this.drawerState = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState.Docked;
  }
  openPopupFullScreen() {
    if (this.drawerState == 1) {
      this.drawerState = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState.Top;
    } else if (this.drawerState == 0) {
      this.drawerState = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState.Docked;
    }
  }
  ionViewDidLoad() {}
  ionViewDidEnter() {
    this.getDeals();
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    this.defaultCall();
  }
  ionViewWillEnter() {
    this.commonStorage.localSet('concessionFlag', false);
  }
  defaultCall() {
    console.log("default call", this.globalData.SEARCH_DATA, this.isreturnTrip);
    this.service_description = this.commonStorage.localGet('SERVICE_DESCRIPTION');
    if (this.isreturnTrip) {
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.ourBusHeaderDate = this.globalData.SELECTED_ROUTE_RETURN;
        console.log("this.ourBusHeaderDate", this.ourBusHeaderDate);
      }
      this.isReturn = true;
      this.destination = this.commonStorage.localGet('origin');
      this.origin = this.commonStorage.localGet('destination');
      this.dateFull = this.globalData.DEPARTURE_DATE_RETURN;
      this.globalData.SELECTED_ROUTE_RETURN.reservation_id = this.commonStorage.localGet('RES_ID_RET');
      this.globalData.SELECTED_ROUTE_RETURN.origin_id = this.commonStorage.localGet('ORIGIN_ID_RET');
      this.globalData.SELECTED_ROUTE_RETURN.destination_id = this.commonStorage.localGet('DESTINATION_ID_RET');
      this.globalData.SELECTED_ROUTE_RETURN.boarding_point_details = this.commonStorage.localGet('BOARDING_DETAILS_RET');
      this.globalData.SELECTED_ROUTE_RETURN.drop_off_details = this.commonStorage.localGet('DROPPING_DETAILS_RET');
      this.selectedRoute = this.globalData.SELECTED_ROUTE_RETURN;
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID_RET'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID_RET'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID_RET'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS_RET'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS_RET'),
        "dep_time": this.commonStorage.localGet('DEP_TIME_RET')
      };
      this.reservationId = this.selectedRoute.reservation_id;
      this.commonStorage.setItem("returnResId", this.reservationId);
      this.isReturn = true;
      this.travelDate = this.globalData.DEPARTURE_DATE_RETURN.formattedDate;
    } else {
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.ourBusHeaderDate = this.globalData.SELECTED_ROUTE;
        console.log("this.ourBusHeaderDate", this.ourBusHeaderDate);
      }
      this.origin = this.commonStorage.localGet('origin');
      this.destination = this.commonStorage.localGet('destination');
      this.dateFull = this.globalData.DEPARTURE_DATE;
      this.globalData.SELECTED_ROUTE.reservation_id = this.commonStorage.localGet('RES_ID');
      this.globalData.SELECTED_ROUTE.origin_id = this.commonStorage.localGet('ORIGIN_ID');
      this.globalData.SELECTED_ROUTE.destination_id = this.commonStorage.localGet('DESTINATION_ID');
      this.globalData.SELECTED_ROUTE.boarding_point_details = this.commonStorage.localGet('BOARDING_DETAILS');
      this.globalData.SELECTED_ROUTE.drop_off_details = this.commonStorage.localGet('DROPPING_DETAILS');
      this.selectedRoute = this.globalData.SELECTED_ROUTE;
      this.selectedRoute = {
        "reservation_id": this.commonStorage.localGet('RES_ID'),
        "origin_id": this.commonStorage.localGet('ORIGIN_ID'),
        "destination_id": this.commonStorage.localGet('DESTINATION_ID'),
        "boarding_point_details": this.commonStorage.localGet('BOARDING_DETAILS'),
        "drop_off_details": this.commonStorage.localGet('DROPPING_DETAILS'),
        "dep_time": this.commonStorage.localGet('DEP_TIME')
      };
      this.reservationId = this.selectedRoute.reservation_id;
      this.commonStorage.setItem("onwardResId", this.reservationId);
      this.travelDate = this.globalData.DEPARTURE_DATE.formattedDate;
    }
    this.selectedSeatsToBook = [];
    this.loaclStorageSeat['selectedSeat'] = [];
    this.loaclStorageSeat['selectedSeatReturn'] = [];
    this.selectedSeatsNumbers = "";
    this.totalBookingAmount = 0;
    this.originStageDetails = [];
    this.destinationStageDetails = [];
    this.isChildFare = false;
    this.travelDate = this.commonStorage.getItem('travelDate').formattedDate;
    this.metaData = this.commonStorage.getItem("metaData");
    this.subdomain = this.metaData && this.metaData.operatorInternalUrl ? this.metaData.operatorInternalUrl.split('.')[0] : '';
    this.isAppDiscount = this.metaData.isAllowFirstBookingDiscount;
    this.currencySym = this.metaData && this.metaData.currencySym ? this.metaData.currencySym : "₹";
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.OurbusPassengerCount = this.commonStorage.localGet("ourbusPassengerCount");
      this.maxSeatsAllowedToBook = this.commonStorage.localGet("ourbusPassengerCount");
    } else {
      this.maxSeatsAllowedToBook = this.metaData.maxSeatsAllowedToBook;
    }
    this.boardingStage = null;
    this.droppingStage = null;
    this.isBPDP = this.metaData.allowBPDPFare;
    let bpdpReservationFare = this.commonStorage.localGet('bpdpReservationFare');
    console.log(this.bpdpReservationFare, 'bpdpReservationFare');
    if (bpdpReservationFare) {
      this.boardingStage = bpdpReservationFare.boardingStage;
      this.droppingStage = bpdpReservationFare.droppingStage;
    }
    this.commonStorage.setItem('selectedBoardingStage', null);
    this.commonStorage.setItem('selectedDroppingStage', null);
    this.bpdp();
  }
  accountDeRegisterAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this.authenticate.logout();
            _this.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      yield alert.present();
    })();
  }
  bpdp() {
    if (this.metaData.allowBPDPFare) {
      if (this.origin.id.toString().indexOf(':') > -1) {
        var fields = this.origin.id.split(':');
        var a = fields[0];
        if (parseInt(a) < 0) {
          this.bp = true;
        } else {
          for (var i = 0; i < this.selectedRoute.boarding_point_details.length; i++) {
            if (this.origin.name.split(',')[0] == this.selectedRoute.boarding_point_details[i].name) {
              this.boardingStage = this.selectedRoute.boarding_point_details[i];
              this.commonStorage.setItem('selectedBoardingStage', this.boardingStage);
            } else if (!this.commonStorage.getItem('selectedBoardingStage')) {
              this.commonStorage.setItem('selectedBoardingStage', null);
            }
          }
        }
      }
      if (this.destination.id.toString().indexOf(':') > -1) {
        var dfields = this.destination.id.split(':');
        var b = dfields[0];
        if (parseInt(b) < 0) {
          this.dp = true;
        } else {
          console.log("droping_point_details>>", this.selectedRoute.drop_off_details);
          for (var j = 0; j < this.selectedRoute.drop_off_details.length; j++) {
            if (this.destination.name.split(',')[0] == this.selectedRoute.drop_off_details[j].name) {
              this.droppingStage = this.selectedRoute.drop_off_details[j];
              this.commonStorage.setItem('selectedDroppingStage', this.droppingStage);
            } else if (!this.commonStorage.getItem('selectedDroppingStage')) {
              this.commonStorage.setItem('selectedDroppingStage', null);
            }
          }
        }
      }
    }
    this.loadService();
  }
  removeDuplicateFare(arr) {
    return arr.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    }).splice(0, 4);
  }
  loadService() {
    this.upperCount = 0;
    this.lowerCount = 0;
    if (!this.util.checkConnection()) {
      this.loader.hideLoadingDefault();
      return;
    }
    this.isBima = JSON.parse(localStorage.getItem('isBima'));
    if (this.isReturn) {
      if (this.commonStorage.localGet('selectedSeatReturn')) {
        for (var i = 0; i < this.commonStorage.localGet('selectedSeatReturn').length; i++) {
          if (this.commonStorage.localGet('selectedSeatReturn')[i].isSelected) {
            // let boardingStage = this.commonStorage.getItem('selectedBoardingStage');
            // let droppingStage = this.commonStorage.getItem('destinationStageDetailsReturn');
            let boardingStage = this.commonStorage.getItem('reservationDataReturn').boardingStage;
            let droppingStage = this.commonStorage.getItem('reservationDataReturn').droppingStage;
            this.boardingStage = boardingStage;
            this.droppingStage = droppingStage;
            this.cdr.detectChanges();
          }
        }
      }
    } else {
      if (this.commonStorage.localGet('selectedSeat')) {
        for (var i = 0; i < this.commonStorage.localGet('selectedSeat').length; i++) {
          if (this.commonStorage.localGet('selectedSeat')[i].isSelected) {
            let boardingStage = this.commonStorage.getItem('reservationData').boardingStage;
            let droppingStage = this.commonStorage.getItem('reservationData').droppingStage;
            this.boardingStage = boardingStage;
            this.droppingStage = droppingStage;
            this.cdr.detectChanges();
          }
        }
      }
    }
    this.apiFactory.getServiceDetails(this.reservationId, this.selectedRoute.origin_id, this.selectedRoute.destination_id, false, this.isBima, this.isBPDP).subscribe(serviceDetails => {
      this.loader.hideLoadingDefault();
      this.upperCount = 0;
      this.lowerCount = 0;
      try {
        console.log('D Details', serviceDetails);
        this.commonStorage.localSet('serviceDetails', serviceDetails);
        if (serviceDetails.via_city_detail) {
          this.showNon = false;
          this.commonStorage.localSet('via_city_detail', serviceDetails.via_city_detail);
        } else {
          this.globalData.VIACITY = null;
          this.commonStorage.localSet('via_city_detail', null);
        }
        this.isSocialDistancing = serviceDetails.social_distancing_guaranteed ? serviceDetails.social_distancing_guaranteed : false;
        this.coachLayoutJson = [];
        this.coachLayoutJsonU = [];
        this.coachLayoutJsonL = [];
        if (serviceDetails.popup_details) {
          this.commonStorage.setItem('popupDetails', serviceDetails.popup_details);
        }
        this.showView = true;
        if (serviceDetails.code && serviceDetails.code != 200) {
          this.showView = false;
          this.errorMessage = serviceDetails.message;
          this.showNon = true;
        } else {
          this.serviceDetailsFull = serviceDetails;
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.costArray = this.serviceDetailsFull.all_fare_details ? this.removeDuplicateFare(this.serviceDetailsFull.all_fare_details) : null;
          } else {
            const costs = this.serviceDetailsFull.cost.split(',');
            const validCosts = costs.filter(cost => cost.trim() !== '');
            const resultArray = [];
            validCosts.forEach(cost => resultArray.push(cost));
            this.costArray = resultArray;
          }
          this.serviceDetailsFull.all_fare_details = this.serviceDetailsFull.all_fare_details ? this.removeDuplicateFare(this.serviceDetailsFull.all_fare_details) : null;
          this.isChildFare = false;
          this.isSocialDistancing = serviceDetails.social_distancing_guaranteed ? serviceDetails.social_distancing_guaranteed : false;
          if (this.serviceDetailsFull && this.serviceDetailsFull.wake_up_call_applicable) {
            this.commonStorage.localSet('wake_up_call_applicable', true);
          } else {
            this.commonStorage.localSet('wake_up_call_applicable', false);
          }
          this.commonStorage.setItem('isChildFare', this.isChildFare);
          this.commonStorage.setItem('isSnackAvailable', serviceDetails.is_snack_available);
          let seatDetails = serviceDetails.coach_details.seat_details;
          if (this.isReturn) {
            this.globalData.SELECTED_SERVICE_RETURN = serviceDetails;
            this.commonStorage.localSet('SELECTED_SERVICE_RETURN', serviceDetails);
          } else {
            this.globalData.SELECTED_SERVICE = serviceDetails;
            this.commonStorage.localSet('SELECTED_SERVICE', serviceDetails);
          }
          this.commonStorage.setItem('seatDetails', seatDetails);
          let i = 0;
          let j = 0;
          for (let seat of seatDetails) {
            if (typeof this.coachLayoutJson[seat.row_id] == 'undefined') {
              this.coachLayoutJson[seat.row_id] = [];
              this.coachLayoutJsonU[seat.row_id] = [];
              this.coachLayoutJsonL[seat.row_id] = [];
            }
            let currentSeatJson = {};
            let berthTextPos = seat.type.toLowerCase().indexOf('berth') > -1 || seat.type.toLowerCase().indexOf('ub') > -1 || seat.type.toLowerCase().indexOf('lb') > -1;
            berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single lower') > -1 : berthTextPos;
            berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single upper') > -1 : berthTextPos;
            currentSeatJson.rowSpan = berthTextPos ? 2 : 1;
            currentSeatJson.rowSpan = seat.is_horizontal ? 1 : currentSeatJson.rowSpan;
            currentSeatJson.colSpan = seat.is_horizontal ? 2 : 1;
            currentSeatJson.isBerth = berthTextPos ? true : false;
            currentSeatJson.isReservable = seat.available;
            currentSeatJson.isUpper = seat.type.indexOf('Upper') !== -1 || seat.type.indexOf('UB') !== -1;
            if (currentSeatJson.isUpper) {
              this.upperAvalibility = currentSeatJson.isUpper;
            }
            currentSeatJson.isLower = !currentSeatJson.isUpper;
            seat.isMaleOrFemale = 'na';
            currentSeatJson.object = seat;
            currentSeatJson.number = seat.number;
            currentSeatJson.fare = seat.fare;
            currentSeatJson.inclusiveTranCharges = seat.inclusive_of_tc ? seat.inclusive_of_tc : 0;
            currentSeatJson.isLadiesSeat = seat.is_ladies_seat;
            currentSeatJson.isSeat = seat.is_seat;
            currentSeatJson.isGentsSeat = seat.is_gents_seat;
            currentSeatJson.isHorizontal = seat.is_horizontal;
            currentSeatJson.isGangWay = seat.type.indexOf('Gang') !== -1 || seat.is_gangway;
            currentSeatJson.isBreak = seat.type.indexOf('Break') !== -1;
            currentSeatJson.isSelected = false;
            currentSeatJson.isSocialDistancing = seat.is_social_distancing ? seat.is_social_distancing : false;
            currentSeatJson.base_fare_filter = seat.base_fare_filter ? seat.base_fare_filter : 0;
            // currentSeatJson.isUpperGangWay = false
            // currentSeatJson.isLowerGangWay = false
            currentSeatJson.isUpperGangWay = seat.gangway_type && seat.gangway_type.includes('upper') ? true : false;
            // currentSeatJson.isUpperGangWay = false
            currentSeatJson.isLowerGangWay = seat.gangway_type && seat.gangway_type.includes('lower') ? true : false;
            // currentSeatJson.isLowerGangWay = false
            //taxes
            this.isGstApplicable = serviceDetails.is_gst_applicable; // for gst tax
            this.serviceIncludeFare = serviceDetails.is_service_tax_applicable;
            this.resTransactionChargeType = serviceDetails.res_transaction_type;
            this.resTransactionChargeAmount = serviceDetails.res_transaction_amount;
            let convenienceChargePercentage = serviceDetails.convenience_charge_percent ? serviceDetails.convenience_charge_percent : 0;
            let serviceTaxPercentage = serviceDetails.st_percent ? serviceDetails.st_percent : 0;
            if (!this.isReturn) {
              this.commonStorage.setItem('isGstApplicable', this.isGstApplicable);
              this.commonStorage.setItem('isServiceTaxApplicable', this.serviceIncludeFare);
              this.commonStorage.localSet('isServiceTaxApplicable', this.serviceIncludeFare);
              this.commonStorage.setItem('resTransactionChargeType', this.resTransactionChargeType);
              this.commonStorage.setItem('resTransactionChargeAmount', this.resTransactionChargeAmount);
              this.commonStorage.setItem('taxCharges', {
                convenienceChargePercentage: parseFloat(convenienceChargePercentage),
                serviceTaxPercentage: parseFloat(serviceTaxPercentage)
              });
            } else {
              this.commonStorage.setItem('isGstApplicableReturn', this.isGstApplicable);
              this.commonStorage.setItem('isServiceTaxApplicableReturn', this.serviceIncludeFare);
              this.commonStorage.localSet('isServiceTaxApplicableReturn', this.serviceIncludeFare);
              this.commonStorage.setItem('resTransactionChargeTypeReturn', this.resTransactionChargeType);
              this.commonStorage.setItem('resTransactionChargeAmountReturn', this.resTransactionChargeAmount);
              this.commonStorage.setItem('taxChargesReturn', {
                convenienceChargePercentage: parseFloat(convenienceChargePercentage),
                serviceTaxPercentage: parseFloat(serviceTaxPercentage)
              });
            }
            this.coachLayoutJson[seat.row_id][seat.col_id] = currentSeatJson;
            if (currentSeatJson.isUpper || currentSeatJson.isGangWay) {
              if (currentSeatJson.isReservable) {
                this.upperCount += 1;
              }
              if (currentSeatJson.isLowerGangWay) {} else {
                this.coachLayoutJsonU[seat.row_id].push(currentSeatJson);
              }
            }
            if (currentSeatJson.isLower) {
              if (currentSeatJson.isReservable) {
                this.lowerCount += 1;
              }
              if (currentSeatJson.isUpperGangWay) {} else {
                this.coachLayoutJsonL[seat.row_id].push(currentSeatJson);
                this.hideShowBorder = true;
              }
            }
          }
          this.originStageDetails = [];
          this.destinationStageDetails = [];
          for (let val of serviceDetails.stage_details) {
            if (val.city_id === parseInt(serviceDetails.origin.id)) {
              this.originStageDetails.push(val);
            } else {
              this.destinationStageDetails.push(val);
            }
          }
          if (this.isReturn) {
            this.commonStorage.localSet('destinationStageDetailsReturn', this.destinationStageDetails);
            this.commonStorage.localSet('originStageDetailsReturn', this.originStageDetails);
          } else {
            this.commonStorage.localRemove('destinationStageDetails');
            this.commonStorage.localRemove('originStageDetails');
            this.commonStorage.localSet('destinationStageDetails', this.destinationStageDetails);
            this.commonStorage.localSet('originStageDetails', this.originStageDetails);
          }
        }
        this.legendDetails = serviceDetails.legend_details;
        console.log("this.legendDetails", this.legendDetails);
        this.legendDetailsKeys = Object.keys(this.legendDetails);
        if (this.isReturn) {
          if (this.commonStorage.localGet('selectedSeatReturn')) {
            this.selectedSeatsToBook = [];
            this.loaclStorageSeat['selectedSeatReturn'] = [];
            for (var i = 0; i < this.commonStorage.localGet('selectedSeatReturn').length; i++) {
              let currentSeatJson = this.coachLayoutJson[this.commonStorage.localGet('selectedSeatReturn')[i]["object"].row_id][this.commonStorage.localGet('selectedSeatReturn')[i]["object"].col_id];
              if (currentSeatJson["object"].available == this.commonStorage.localGet('selectedSeatReturn')[i]["object"].available) {
                this.selectSeat(this.commonStorage.localGet('selectedSeatReturn')[i]);
              }
            }
          }
        } else {
          if (this.commonStorage.localGet('selectedSeat')) {
            const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
            if (!datafill) {
              this.selectedSeatsToBook = [];
              this.loaclStorageSeat['selectedSeat'] = [];
              for (var i = 0; i < this.commonStorage.localGet('selectedSeat').length; i++) {
                let currentSeatJson = this.coachLayoutJson[this.commonStorage.localGet('selectedSeat')[i]["object"].row_id][this.commonStorage.localGet('selectedSeat')[i]["object"].col_id];
                if (currentSeatJson["object"].available == this.commonStorage.localGet('selectedSeat')[i]["object"].available) {
                  this.selectSeat(this.commonStorage.localGet('selectedSeat')[i]);
                }
              }
            }
          }
        }
        const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
        const seatnum_detail = this.commonStorage.localGet('ticketRecentData');
        if (datafill) {
          this.selectedSeatsToBook = [];
          let seatDetails = serviceDetails.coach_details.seat_details;
          this.seat_number_Array = seatnum_detail.result.passengerDetails.map(item => item.seatNumber);
          const commaSeparatedNames = this.seat_number_Array.join(', ');
          const desiredReservationId = commaSeparatedNames;
          let foundArray = null;
          let newarraa = [];
          newarraa = this.coachLayoutJsonL;
          const seatNumbers = desiredReservationId.split(',');
          //Filter seat array  code
          const filterSeatNumbers = (array, seatNumbers) => {
            // Flatten the array of arrays into a single array
            const flattenedArray = array.reduce((accumulator, innerArray) => {
              return accumulator.concat(innerArray);
            }, []);
            // Filter the objects where number is included in 'seatNumbers'
            return flattenedArray.filter(obj => seatNumbers.includes(obj.number));
          };
          // Filter seat numbers from both arrays
          const filteredObjects1 = filterSeatNumbers(this.coachLayoutJsonL, this.seat_number_Array);
          const filteredObjects2 = filterSeatNumbers(this.coachLayoutJsonU, this.seat_number_Array);
          const combinedFilteredObjects = [...filteredObjects1, ...filteredObjects2];
          // console.log(combinedFilteredObjects);
          //privios code ended
          for (var i = 0; i < combinedFilteredObjects.length; i++) {
            if (!combinedFilteredObjects[i].object.available) {
              this.util.showToast("Your privious seat is not available now, Please select new seat");
            } else {
              this.selectSeat(combinedFilteredObjects[i]);
            }
          }
        }
      } catch (e) {}
    }, error => {
      this.loader.hideLoadingDefault();
    });
  }
  selectPriceFilter(val) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.priceFilter = val;
      _this2.upperCount = 0;
      _this2.lowerCount = 0;
      if (val == "All") {
        _this2.upperFilter = false;
        _this2.lowerFilter = false;
        _this2.coachLayoutJson = [];
        _this2.coachLayoutJsonU = [];
        _this2.coachLayoutJsonL = [];
        let serviceDetails = _this2.serviceDetailsFull;
        let seatDetails = _this2.serviceDetailsFull.coach_details.seat_details;
        let i = 0;
        let j = 0;
        for (let seat of seatDetails) {
          if (typeof _this2.coachLayoutJson[seat.row_id] == 'undefined') {
            _this2.coachLayoutJson[seat.row_id] = [];
            _this2.coachLayoutJsonU[seat.row_id] = [];
            _this2.coachLayoutJsonL[seat.row_id] = [];
          }
          let currentSeatJson = {};
          let berthTextPos = seat.type.toLowerCase().indexOf('berth') > -1 || seat.type.toLowerCase().indexOf('ub') > -1 || seat.type.toLowerCase().indexOf('lb') > -1;
          berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single lower') > -1 : berthTextPos;
          berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single upper') > -1 : berthTextPos;
          currentSeatJson.rowSpan = berthTextPos ? 2 : 1;
          currentSeatJson.isBerth = berthTextPos ? true : false;
          currentSeatJson.isReservable = seat.available;
          currentSeatJson.isUpper = seat.type.indexOf('Upper') !== -1 || seat.type.indexOf('UB') !== -1;
          if (currentSeatJson.isUpper) {
            _this2.upperAvalibility = currentSeatJson.isUpper;
          }
          currentSeatJson.isLower = !currentSeatJson.isUpper;
          currentSeatJson.object = seat;
          currentSeatJson.number = seat.number;
          currentSeatJson.fare = seat.fare;
          currentSeatJson.priceFiltered = false;
          currentSeatJson.inclusiveTranCharges = seat.inclusive_of_tc ? seat.inclusive_of_tc : 0;
          currentSeatJson.isLadiesSeat = seat.is_ladies_seat;
          currentSeatJson.isSeat = seat.is_seat;
          currentSeatJson.isGentsSeat = seat.is_gents_seat;
          currentSeatJson.isHorizontal = seat.is_horizontal;
          currentSeatJson.isGangWay = seat.type.indexOf('Gang') !== -1 || seat.is_gangway;
          currentSeatJson.isBreak = seat.type.indexOf('Break') !== -1;
          currentSeatJson.base_fare_filter = seat.base_fare_filter ? seat.base_fare_filter : 0;
          if (seat.gangway_type && seat.gangway_type.indexOf('both') > -1) {
            currentSeatJson.isUpperGangWay = true;
            currentSeatJson.isLowerGangWay = true;
          } else {
            currentSeatJson.isUpperGangWay = seat.gangway_type && seat.gangway_type.indexOf('upper') > -1 ? true : false;
            currentSeatJson.isLowerGangWay = seat.gangway_type && seat.gangway_type.indexOf('lower') > -1 ? true : false;
          }
          // need to discuss this point
          currentSeatJson.isGangWay = seat.gangway_type && seat.gangway_type.includes('upper') ? false : currentSeatJson.isGangWay;
          // currentSeatJson.isUpperGangWay = false
          currentSeatJson.isGangWay = seat.gangway_type && seat.gangway_type.includes('lower') ? false : currentSeatJson.isGangWay;
          ////////////
          var h = _this2.selectedSeatsNumbers ? _this2.selectedSeatsNumbers.substr() : '';
          var m = h.toString().split(",");
          var x = [];
          for (var l = 0; l < m.length; l++) {
            if (m[l].trim() == seat.number) {
              x.push(m[l]);
            } else {}
          }
          if (x.length > 0) {
            currentSeatJson.isSelected = true;
          } else {
            currentSeatJson.isSelected = false;
          }
          //taxes
          _this2.isGstApplicable = serviceDetails.is_gst_applicable; // for gst tax
          _this2.serviceIncludeFare = serviceDetails.is_service_tax_applicable;
          _this2.resTransactionChargeType = serviceDetails.res_transaction_type;
          _this2.resTransactionChargeAmount = serviceDetails.res_transaction_amount;
          let convenienceChargePercentage = serviceDetails.convenience_charge_percent ? serviceDetails.convenience_charge_percent : 0;
          let serviceTaxPercentage = serviceDetails.st_percent ? serviceDetails.st_percent : 0;
          if (!_this2.isReturn) {
            _this2.commonStorage.setItem('isGstApplicable', _this2.isGstApplicable);
            _this2.commonStorage.setItem('isServiceTaxApplicable', _this2.serviceIncludeFare);
            _this2.commonStorage.localSet('isServiceTaxApplicable', _this2.serviceIncludeFare);
            _this2.commonStorage.setItem('resTransactionChargeType', _this2.resTransactionChargeType);
            _this2.commonStorage.setItem('resTransactionChargeAmount', _this2.resTransactionChargeAmount);
            _this2.commonStorage.setItem('taxCharges', {
              convenienceChargePercentage: parseFloat(convenienceChargePercentage),
              serviceTaxPercentage: parseFloat(serviceTaxPercentage)
            });
          } else {
            _this2.commonStorage.setItem('isGstApplicableReturn', _this2.isGstApplicable);
            _this2.commonStorage.setItem('isServiceTaxApplicableReturn', _this2.serviceIncludeFare);
            _this2.commonStorage.localSet('isServiceTaxApplicableReturn', _this2.serviceIncludeFare);
            _this2.commonStorage.setItem('resTransactionChargeTypeReturn', _this2.resTransactionChargeType);
            _this2.commonStorage.setItem('resTransactionChargeAmountReturn', _this2.resTransactionChargeAmount);
            _this2.commonStorage.setItem('taxChargesReturn', {
              convenienceChargePercentage: parseFloat(convenienceChargePercentage),
              serviceTaxPercentage: parseFloat(serviceTaxPercentage)
            });
          }
          _this2.coachLayoutJson[seat.row_id][seat.col_id] = currentSeatJson;
          if (currentSeatJson.isUpper || currentSeatJson.isGangWay) {
            if (currentSeatJson.isReservable) {
              _this2.upperCount += 1;
            }
            _this2.coachLayoutJsonU[seat.row_id].push(currentSeatJson);
          }
          if (currentSeatJson.isLower) {
            if (currentSeatJson.isReservable) {
              _this2.lowerCount += 1;
            }
            _this2.coachLayoutJsonL[seat.row_id].push(currentSeatJson);
            _this2.hideShowBorder = true;
          }
        }
      } else {
        _this2.coachLayoutJson = [];
        _this2.coachLayoutJsonU = [];
        _this2.coachLayoutJsonL = [];
        let serviceDetails = _this2.serviceDetailsFull;
        let seatDetails = _this2.serviceDetailsFull.coach_details.seat_details;
        if (_this2.isReturn) {
          const arrayseat = [];
          _this2.globalData.returnseatsarray = [];
          for (var l = 0; l < _this2.selectedSeatsToBook.length; l++) {
            arrayseat.push({
              seat_number: _this2.selectedSeatsToBook[l].number
            });
          }
          _this2.globalData.returnseatsarray = arrayseat;
        } else {
          _this2.globalData.onwardseatsarray = [];
          const arrayseat = [];
          _this2.globalData.returnseatsarray = [];
          for (var l = 0; l < _this2.selectedSeatsToBook.length; l++) {
            arrayseat.push({
              seat_number: _this2.selectedSeatsToBook[l].number
            });
          }
          _this2.globalData.onwardseatsarray = arrayseat;
        }
        let i = 0;
        let j = 0;
        for (let seat of seatDetails) {
          if (typeof _this2.coachLayoutJson[seat.row_id] == 'undefined') {
            _this2.coachLayoutJson[seat.row_id] = [];
            _this2.coachLayoutJsonU[seat.row_id] = [];
            _this2.coachLayoutJsonL[seat.row_id] = [];
          }
          let currentSeatJson = {};
          let berthTextPos = seat.type.toLowerCase().indexOf('berth') > -1 || seat.type.toLowerCase().indexOf('ub') > -1 || seat.type.toLowerCase().indexOf('lb') > -1;
          berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single lower') > -1 : berthTextPos;
          berthTextPos = !berthTextPos ? seat.type.toLowerCase().indexOf('window single upper') > -1 : berthTextPos;
          currentSeatJson.rowSpan = berthTextPos ? 2 : 1;
          currentSeatJson.isBerth = berthTextPos ? true : false;
          currentSeatJson.isReservable = seat.available;
          currentSeatJson.isUpper = seat.type.indexOf('Upper') !== -1 || seat.type.indexOf('UB') !== -1;
          if (currentSeatJson.isUpper) {
            _this2.upperAvalibility = currentSeatJson.isUpper;
          }
          currentSeatJson.isLower = !currentSeatJson.isUpper;
          currentSeatJson.object = seat;
          currentSeatJson.object.isMaleOrFemale = seat.isMaleOrFemale;
          currentSeatJson.number = seat.number;
          currentSeatJson.fare = seat.fare;
          if (_this2.metaData.msiteFolder == 'ourbustheme') {
            if (seat.base_fare && seat.base_fare == _this2.priceFilter || seat.base_fare_filter && seat.base_fare_filter == _this2.priceFilter) {
              currentSeatJson.priceFiltered = false;
            } else {
              currentSeatJson.priceFiltered = true;
            }
          } else {
            if (seat.base_fare && seat.base_fare == parseInt(_this2.priceFilter) || seat.base_fare_filter && seat.base_fare_filter == parseInt(_this2.priceFilter)) {
              currentSeatJson.priceFiltered = false;
            } else {
              currentSeatJson.priceFiltered = true;
            }
          }
          currentSeatJson.inclusiveTranCharges = seat.inclusive_of_tc ? seat.inclusive_of_tc : 0;
          currentSeatJson.isLadiesSeat = seat.is_ladies_seat;
          currentSeatJson.isSeat = seat.is_seat;
          currentSeatJson.isGentsSeat = seat.is_gents_seat;
          currentSeatJson.isHorizontal = seat.is_horizontal;
          currentSeatJson.isGangWay = seat.type.indexOf('Gang') !== -1 || seat.is_gangway;
          currentSeatJson.isBreak = seat.type.indexOf('Break') !== -1;
          currentSeatJson.base_fare_filter = seat.base_fare_filter ? seat.base_fare_filter : 0;
          if (seat.gangway_type && seat.gangway_type.indexOf('both') > -1) {
            currentSeatJson.isUpperGangWay = true;
            currentSeatJson.isLowerGangWay = true;
          } else {
            currentSeatJson.isUpperGangWay = seat.gangway_type && seat.gangway_type.indexOf('upper') > -1 ? true : false;
            currentSeatJson.isLowerGangWay = seat.gangway_type && seat.gangway_type.indexOf('lower') > -1 ? true : false;
          }
          // need to discuss
          currentSeatJson.isGangWay = seat.gangway_type && seat.gangway_type.includes('upper') ? false : currentSeatJson.isGangWay;
          // currentSeatJson.isUpperGangWay = false
          currentSeatJson.isGangWay = seat.gangway_type && seat.gangway_type.includes('lower') ? false : currentSeatJson.isGangWay;
          var h = _this2.selectedSeatsNumbers ? _this2.selectedSeatsNumbers.substr() : '';
          var a = h.toString().split(",");
          _this2.bookseatcount = h.toString().split(",");
          var b = [];
          for (var s = 0; s < a.length; s++) {
            if (a[s].trim() == seat.number) {
              b.push(a[s]);
            } else {}
          }
          if (b.length > 0) {
            currentSeatJson.isSelected = true;
          } else {
            currentSeatJson.isSelected = false;
          }
          a = [];
          //taxes
          _this2.isGstApplicable = serviceDetails.is_gst_applicable; // for gst tax
          _this2.serviceIncludeFare = serviceDetails.is_service_tax_applicable;
          _this2.resTransactionChargeType = serviceDetails.res_transaction_type;
          _this2.resTransactionChargeAmount = serviceDetails.res_transaction_amount;
          let convenienceChargePercentage = serviceDetails.convenience_charge_percent ? serviceDetails.convenience_charge_percent : 0;
          let serviceTaxPercentage = serviceDetails.st_percent ? serviceDetails.st_percent : 0;
          if (!_this2.isReturn) {
            _this2.commonStorage.setItem('isGstApplicable', _this2.isGstApplicable);
            _this2.commonStorage.setItem('isServiceTaxApplicable', _this2.serviceIncludeFare);
            _this2.commonStorage.localSet('isServiceTaxApplicable', _this2.serviceIncludeFare);
            _this2.commonStorage.setItem('resTransactionChargeType', _this2.resTransactionChargeType);
            _this2.commonStorage.setItem('resTransactionChargeAmount', _this2.resTransactionChargeAmount);
            _this2.commonStorage.setItem('taxCharges', {
              convenienceChargePercentage: parseFloat(convenienceChargePercentage),
              serviceTaxPercentage: parseFloat(serviceTaxPercentage)
            });
          } else {
            _this2.commonStorage.setItem('isGstApplicableReturn', _this2.isGstApplicable);
            _this2.commonStorage.setItem('isServiceTaxApplicableReturn', _this2.serviceIncludeFare);
            _this2.commonStorage.localSet('isServiceTaxApplicableReturn', _this2.serviceIncludeFare);
            _this2.commonStorage.setItem('resTransactionChargeTypeReturn', _this2.resTransactionChargeType);
            _this2.commonStorage.setItem('resTransactionChargeAmountReturn', _this2.resTransactionChargeAmount);
            _this2.commonStorage.setItem('taxChargesReturn', {
              convenienceChargePercentage: parseFloat(convenienceChargePercentage),
              serviceTaxPercentage: parseFloat(serviceTaxPercentage)
            });
          }
          _this2.coachLayoutJson[seat.row_id][seat.col_id] = currentSeatJson;
          if (currentSeatJson.isUpper || currentSeatJson.isGangWay) {
            if (currentSeatJson.isReservable) {
              _this2.upperCount += 1;
            }
            if (_this2.coachLayoutJson.isLowerGangWay) {} else {
              _this2.coachLayoutJsonU[seat.row_id].push(currentSeatJson);
            }
          }
          if (currentSeatJson.isLower) {
            if (currentSeatJson.isReservable) {
              _this2.lowerCount += 1;
            }
            if (_this2.coachLayoutJson.isUpperGangWay) {} else {
              _this2.coachLayoutJsonL[seat.row_id].push(currentSeatJson);
              _this2.hideShowBorder = true;
            }
          }
        }
        _this2.selectedSeatsToBook.forEach(element => {
          seatDetails.forEach(element1 => {
            if (element.number == element1.number) {
              element1.isMaleOrFemale = element.isMaleOrFemale;
            }
          });
        });
        _this2.upperFilter = _this2.upperCount == 0 ? true : false;
        _this2.lowerFilter = _this2.lowerCount == 0 ? true : false;
        if (_this2.upperFilter) {
          _this2.goToSlide('', 0, 'lower');
        }
        if (_this2.lowerFilter) {
          _this2.goToSlide('', 0, 'upper');
        }
        const result = _this2.countPriceFilteredValues(_this2.coachLayoutJsonL, _this2.coachLayoutJsonU, _this2.coachLayoutJson);
        if (result.falseCount == 0 && _this2.priceFilter != 'All') {
          _this2.util.showToast("No seats are available at this price");
          _this2.selectPriceFilter('All');
        } else {
          if (_this2.metaData.msiteFolder == 'ourbustheme') {
            if (_this2.upperAvalibility && !_this2.metaData.show_coach_layout_in_single_view) {
              if (result.falseCount != 0) {
                const result_lower = _this2.countPriceFilteredValues_single(_this2.coachLayoutJsonL);
                const result_upper = _this2.countPriceFilteredValues_single(_this2.coachLayoutJsonU);
                console.log("True count:", result_lower.trueCount);
                console.log("False count:", result_lower.falseCount);
                console.log("True count:", result_upper.trueCount);
                console.log("False count:", result_upper.falseCount);
                if (result_lower.falseCount != 0 || result_upper.falseCount != 0) {
                  if (result_lower.falseCount != 0) {
                    if (_this2.berthType == 'lower') {} else {
                      // await this.slides.slidePrev();
                      _this2.berthType = 'lower';
                    }
                  }
                  if (result_upper.falseCount != 0) {
                    if (_this2.berthType == 'upper') {} else {
                      // await this.slides.slideNext();
                      _this2.berthType = 'upper';
                    }
                  }
                } else {
                  _this2.util.showToast("No seats are available at this price");
                  _this2.selectPriceFilter('All');
                }
              } else {
                _this2.util.showToast("No seats are available at this price");
                _this2.selectPriceFilter('All');
              }
            } else {
              if (result.falseCount == 0) {
                _this2.util.showToast("No seats are available at this price");
                _this2.selectPriceFilter('All');
              }
            }
          }
        }
      }
    })();
  }
  countPriceFilteredValues_single(coachLayoutJsonL) {
    let trueCount = 0;
    let falseCount = 0;
    const allArrays = [...coachLayoutJsonL];
    allArrays.forEach(subArray => {
      if (Array.isArray(subArray)) {
        subArray.forEach(item => {
          if (item && item.hasOwnProperty('priceFiltered')) {
            if (item.priceFiltered === true) {
              trueCount++;
            } else if (item.priceFiltered === false) {
              falseCount++;
            }
          }
        });
      }
    });
    return {
      trueCount,
      falseCount
    };
  }
  countPriceFilteredValues(coachLayoutJsonL, coachLayoutJsonU, coachLayoutJson) {
    let trueCount = 0;
    let falseCount = 0;
    const allArrays = [...coachLayoutJsonL, ...coachLayoutJsonU, ...coachLayoutJson];
    allArrays.forEach(subArray => {
      if (Array.isArray(subArray)) {
        subArray.forEach(item => {
          if (item && item.hasOwnProperty('priceFiltered')) {
            if (item.priceFiltered === true) {
              trueCount++;
            } else if (item.priceFiltered === false) {
              falseCount++;
            }
          }
        });
      }
    });
    return {
      trueCount,
      falseCount
    };
  }
  selectSeat(seat, reservable = true) {
    this.cdr.detectChanges();
    this.naviagetPassengerDetails = false;
    if (this.metaData.allowBPDPFare) {
      if (this.boardingStage && this.droppingStage) {
        if (this.naviagetPassengerDetails) {
          this.naviagetPassengerDetails = false;
          this.commonStorage.localSet('naviagetPassengerDetails', false);
          return;
        }
        ;
        if (this.appData.isWEBAPP) {
          this.firebaseAnalyticsService.logCustomEvent('seat_selected', {
            page: 'Seat Layout Page'
          });
        }
        if (!seat.object.available) {} else {
          try {
            if (seat.isLadiesSeat && !seat.isSelected) {
              //  this.util.showToast('Berth (' + seat.number + ') ' + ('is reserved for ladies and it is available for booking. Please select it'))
            }
            let fareDetails = {};
            fareDetails.discountAmount = 0;
            this.discountAmount = 0;
            this.netBookingAmount = 0;
            let currentSeat = seat;
            let currentSeatJson = this.coachLayoutJson[currentSeat["object"].row_id][currentSeat["object"].col_id];
            if (this.isReturn) {
              let onwardSeatsSelected = this.commonStorage.localGet("reservationData").selectedSeatsToBook; //here getItem => localGet
              if (onwardSeatsSelected.length == this.selectedSeatsToBook.length && !currentSeatJson.isSelected) {
                this.util.showToast('Return journey seats cannot be more than onward journey seats');
                return;
              }
            }
            if (this.selectedSeatsToBook.length < this.maxSeatsAllowedToBook || currentSeatJson.isSelected) {
              currentSeatJson.isSelected = !currentSeatJson.isSelected;
              if (currentSeatJson.isSelected) {
                this.selectedSeatsToBook.push(seat.object);
                this.PriceDetailsArray.push({
                  seat_number: seat.object.number
                });
                if (this.isReturn) {
                  this.loaclStorageSeat['selectedSeatReturn'].push(seat);
                } else {
                  this.loaclStorageSeat['selectedSeat'].push(seat);
                }
              } else {
                this.selectedSeatsToBook.splice(this.selectedSeatsToBook.findIndex(item => {
                  if (item.number === seat.object.number) {
                    item.passengerName = '';
                    item.age = '';
                  }
                  return item.number === seat.object.number;
                }), 1);
                if (this.isReturn) {
                  this.loaclStorageSeat['selectedSeatReturn'].splice(this.loaclStorageSeat['selectedSeatReturn'].findIndex(item => {
                    if (item.number === seat.object.number) {
                      item.passengerName = '';
                      item.age = '';
                    }
                    return item.number === seat.object.number;
                  }), 1);
                } else {
                  this.loaclStorageSeat['selectedSeat'].splice(this.loaclStorageSeat['selectedSeat'].findIndex(item => {
                    if (item.number === seat.object.number) {
                      item.passengerName = '';
                      item.age = '';
                    }
                    return item.number === seat.object.number;
                  }), 1);
                }
              }
              this.totalBookingAmount = 0;
              this.inclTransactionChargesAmount = 0;
              this.inclGSTAmount = 0;
              this.baseFare = 0;
              this.selectedSeats = [];
              let E_TICKET_DISCOUNT = this.serviceDetailsFull.e_ticket_discount ? this.serviceDetailsFull.e_ticket_discount.toString().split('%')[0].trim() : 0;
              for (var i = 0; i < this.selectedSeatsToBook.length; i++) {
                var _this$metaData;
                // this.totalBookingAmount += this.selectedSeatsToBook[i].fare - this.inclusiveTransCharges(this.selectedSeatsToBook[i].inclusive_of_tc?this.selectedSeatsToBook[i].inclusive_of_tc:0);
                if ((_this$metaData = this.metaData) !== null && _this$metaData !== void 0 && _this$metaData.gst_tsrtc_enable) {
                  this.totalBookingAmount += this.selectedSeatsToBook[i].concession_fare;
                } else {
                  this.totalBookingAmount += this.selectedSeatsToBook[i].fare;
                }
                this.selectedSeats.push(this.selectedSeatsToBook[i].number);
                this.discountAmount += this.commonService.calculateAmountByPercentage(this.selectedSeatsToBook[i].fare, E_TICKET_DISCOUNT);
                // this.discountAmount += this.commonService.calculateAmountByPercentage(this.selectedSeatsToBook[i].fare + (this.selectedSeatsToBook[i].inclusive_of_st?this.selectedSeatsToBook[i].inclusive_of_st:0), E_TICKET_DISCOUNT);
                this.netBookingAmount += this.selectedSeatsToBook[i].net_amount;
                this.inclTransactionChargesAmount += this.inclusiveTransCharges(this.selectedSeatsToBook[i].inclusive_of_tc ? this.selectedSeatsToBook[i].inclusive_of_tc : 0);
                this.inclGSTAmount += this.inclusiveGSTCharges(this.selectedSeatsToBook[i].inclusive_of_st ? this.selectedSeatsToBook[i].inclusive_of_st : 0);
                this.baseFare += this.selectedSeatsToBook[i].base_fare;
              }
              this.selectedSeatsNumbers = this.selectedSeats.join(', ');
              // console.log("log", this.selectedSeatsNumbers)
              // if(this.selectedSeatsToBook.length != 0){
              // this.selectPriceFilter(seat.base_fare_filter)
              // }else{
              //   this.selectPriceFilter('All')
              // }
              if (this.priceFilter == seat.base_fare_filter) {
                if (this.selectedSeatsToBook.length != 0) {
                  this.selectPriceFilter(seat.base_fare_filter);
                } else {
                  this.selectPriceFilter('All');
                }
              } else {
                // if(this.selectedSeatsToBook.length != 0){
                //   this.selectPriceFilter(seat.base_fare_filter)
                // }else{
                if (this.metaData.gst_tsrtc_enable) {} else {
                  this.selectPriceFilter('All');
                }
                // }
              }
              // this.discountAmount = this.commonService.calculateAmountByPercentage(this.totalBookingAmount,this.metaData.discountPercentage);
              var serviceTaxableAmount = this.totalBookingAmount - this.discountAmount;
              if (this.serviceIncludeFare) {
                this.serviceTaxAmount = this.commonService.calculateAmountByPercentage(serviceTaxableAmount, this.metaData.serviceTaxPercentage);
              } else {
                this.serviceTaxAmount = 0;
              }
              this.convenienceChargesAmount = this.commonService.calculateAmountByPercentage(this.totalBookingAmount - this.discountAmount, this.metaData.convenienceChargePercentage);
              // this.netBookingAmount = this.totalBookingAmount + this.serviceTaxAmount + this.convenienceChargesAmount - this.discountAmount;
              if (this.metaData.transChargeType == 'Percentage') {
                this.transactionChargesAmount = this.commonService.calculateAmountByPercentage(this.netBookingAmount, this.metaData.transChargesVal);
              } else {
                this.transactionChargesAmount = this.metaData.transChargesVal;
              }
              // this.netBookingAmount += this.transactionChargesAmount;
              // -------------------- Fare charges details --------------------
              fareDetails.totalBookingAmount = this.totalBookingAmount;
              fareDetails.netBookingAmount = this.netBookingAmount;
              fareDetails.serviceTaxAmount = this.serviceTaxAmount;
              fareDetails.discountAmount += this.discountAmount;
              fareDetails.convenienceChargesAmount = this.convenienceChargesAmount;
              fareDetails.transactionChargesAmount = this.transactionChargesAmount;
              fareDetails.E_TICKET_DISCOUNT = E_TICKET_DISCOUNT;
              fareDetails.baseFare = this.baseFare;
              fareDetails.inclTransactionChargesAmount = this.inclTransactionChargesAmount;
              fareDetails.inclGSTAmount = this.inclGSTAmount;
              if (this.isReturn) {
                this.commonStorage.localSet("fareDetailsReturn", fareDetails);
              } else {
                this.commonStorage.localSet("fareDetails", fareDetails);
              }
            } else {
              if (this.maxSeatsAllowedToBook > 1) {
                const validInput = parseInt(this.maxSeatsAllowedToBook.toString().replace(/[^0-9]/g, ''), 10);
                this.util.showToast('You cannot select more than ' + validInput + ' seats.');
              } else {
                const validInput = parseInt(this.maxSeatsAllowedToBook.toString().replace(/[^0-9]/g, ''), 10);
                this.util.showToast('You cannot select more than ' + validInput + ' seat.');
              }
            }
            if (this.selectedSeatsToBook.length > 0) {
              // this.cdr.detectChanges()
              setTimeout(() => {
                this.proceedBtnShow = true;
                this.cdr.detectChanges();
              }, 100);
            }
          } catch (e) {
            this.ex.call('SelectseatsController_selectSeatFunction', 'selectSeat(seat:any)', e);
          }
        }
      } else {
        let title;
        if (!this.boardingStage) {
          title = 'CHOOSE YOUR BOARDING POINT';
        } else if (!this.droppingStage) {
          title = 'CHOOSE YOUR DROPPING POINT';
        }
        if (title) {
          this.selectBpDpToast(title);
        }
      }
    } else {
      if (this.naviagetPassengerDetails) {
        this.naviagetPassengerDetails = false;
        this.commonStorage.localSet('naviagetPassengerDetails', false);
        return;
      }
      ;
      if (this.appData.isWEBAPP) {
        this.firebaseAnalyticsService.logCustomEvent('seat_selected', {
          page: 'Seat Layout Page'
        });
      }
      if (!seat.object.available) {} else {
        try {
          if (seat.isLadiesSeat && !seat.isSelected) {
            //  this.util.showToast('Berth (' + seat.number + ') ' + ('is reserved for ladies and it is available for booking. Please select it'))
          }
          let fareDetails = {};
          fareDetails.discountAmount = 0;
          this.discountAmount = 0;
          this.netBookingAmount = 0;
          let currentSeat = seat;
          let currentSeatJson = this.coachLayoutJson[currentSeat["object"].row_id][currentSeat["object"].col_id];
          if (this.isReturn) {
            let onwardSeatsSelected = this.commonStorage.localGet("reservationData").selectedSeatsToBook; //here getItem => localGet
            if (onwardSeatsSelected.length == this.selectedSeatsToBook.length && !currentSeatJson.isSelected) {
              this.util.showToast('Return journey seats cannot be more than onward journey seats');
              return;
            }
          }
          if (this.selectedSeatsToBook.length < this.maxSeatsAllowedToBook || currentSeatJson.isSelected) {
            currentSeatJson.isSelected = !currentSeatJson.isSelected;
            if (currentSeatJson.isSelected) {
              this.selectedSeatsToBook.push(seat.object);
              this.PriceDetailsArray.push({
                seat_number: seat.object.number
              });
              if (this.isReturn) {
                this.loaclStorageSeat['selectedSeatReturn'].push(seat);
              } else {
                this.loaclStorageSeat['selectedSeat'].push(seat);
              }
            } else {
              this.selectedSeatsToBook.splice(this.selectedSeatsToBook.findIndex(item => {
                if (item.number === seat.object.number) {
                  item.passengerName = '';
                  item.age = '';
                }
                return item.number === seat.object.number;
              }), 1);
              if (this.isReturn) {
                this.loaclStorageSeat['selectedSeatReturn'].splice(this.loaclStorageSeat['selectedSeatReturn'].findIndex(item => {
                  if (item.number === seat.object.number) {
                    item.passengerName = '';
                    item.age = '';
                  }
                  return item.number === seat.object.number;
                }), 1);
              } else {
                this.loaclStorageSeat['selectedSeat'].splice(this.loaclStorageSeat['selectedSeat'].findIndex(item => {
                  if (item.number === seat.object.number) {
                    item.passengerName = '';
                    item.age = '';
                  }
                  return item.number === seat.object.number;
                }), 1);
              }
            }
            this.totalBookingAmount = 0;
            this.inclTransactionChargesAmount = 0;
            this.inclGSTAmount = 0;
            this.baseFare = 0;
            this.selectedSeats = [];
            let E_TICKET_DISCOUNT = this.serviceDetailsFull.e_ticket_discount ? this.serviceDetailsFull.e_ticket_discount.toString().split('%')[0].trim() : 0;
            for (var i = 0; i < this.selectedSeatsToBook.length; i++) {
              var _this$metaData2;
              // this.totalBookingAmount += this.selectedSeatsToBook[i].fare - this.inclusiveTransCharges(this.selectedSeatsToBook[i].inclusive_of_tc?this.selectedSeatsToBook[i].inclusive_of_tc:0);
              if ((_this$metaData2 = this.metaData) !== null && _this$metaData2 !== void 0 && _this$metaData2.gst_tsrtc_enable) {
                this.totalBookingAmount += this.selectedSeatsToBook[i].concession_fare;
              } else {
                this.totalBookingAmount += this.selectedSeatsToBook[i].fare;
              }
              this.selectedSeats.push(this.selectedSeatsToBook[i].number);
              this.discountAmount += this.commonService.calculateAmountByPercentage(this.selectedSeatsToBook[i].fare, E_TICKET_DISCOUNT);
              // this.discountAmount += this.commonService.calculateAmountByPercentage(this.selectedSeatsToBook[i].fare + (this.selectedSeatsToBook[i].inclusive_of_st?this.selectedSeatsToBook[i].inclusive_of_st:0), E_TICKET_DISCOUNT);
              this.netBookingAmount += this.selectedSeatsToBook[i].net_amount;
              this.inclTransactionChargesAmount += this.inclusiveTransCharges(this.selectedSeatsToBook[i].inclusive_of_tc ? this.selectedSeatsToBook[i].inclusive_of_tc : 0);
              this.inclGSTAmount += this.inclusiveGSTCharges(this.selectedSeatsToBook[i].inclusive_of_st ? this.selectedSeatsToBook[i].inclusive_of_st : 0);
              this.baseFare += this.selectedSeatsToBook[i].base_fare;
            }
            this.selectedSeatsNumbers = this.selectedSeats.join(', ');
            // console.log("log", this.selectedSeatsNumbers)
            // if(this.selectedSeatsToBook.length != 0){
            // this.selectPriceFilter(seat.base_fare_filter)
            // }else{
            //   this.selectPriceFilter('All')
            // }
            if (this.priceFilter == seat.base_fare_filter) {
              if (this.selectedSeatsToBook.length != 0) {
                this.selectPriceFilter(seat.base_fare_filter);
              } else {
                this.selectPriceFilter('All');
              }
            } else {
              // if(this.selectedSeatsToBook.length != 0){
              //   this.selectPriceFilter(seat.base_fare_filter)
              // }else{
              this.selectPriceFilter('All');
              // }
            }
            // this.discountAmount = this.commonService.calculateAmountByPercentage(this.totalBookingAmount,this.metaData.discountPercentage);
            var serviceTaxableAmount = this.totalBookingAmount - this.discountAmount;
            if (this.serviceIncludeFare) {
              this.serviceTaxAmount = this.commonService.calculateAmountByPercentage(serviceTaxableAmount, this.metaData.serviceTaxPercentage);
            } else {
              this.serviceTaxAmount = 0;
            }
            this.convenienceChargesAmount = this.commonService.calculateAmountByPercentage(this.totalBookingAmount - this.discountAmount, this.metaData.convenienceChargePercentage);
            // this.netBookingAmount = this.totalBookingAmount + this.serviceTaxAmount + this.convenienceChargesAmount - this.discountAmount;
            if (this.metaData.transChargeType == 'Percentage') {
              this.transactionChargesAmount = this.commonService.calculateAmountByPercentage(this.netBookingAmount, this.metaData.transChargesVal);
            } else {
              this.transactionChargesAmount = this.metaData.transChargesVal;
            }
            // this.netBookingAmount += this.transactionChargesAmount;
            // -------------------- Fare charges details --------------------
            fareDetails.totalBookingAmount = this.totalBookingAmount;
            fareDetails.netBookingAmount = this.netBookingAmount;
            fareDetails.serviceTaxAmount = this.serviceTaxAmount;
            fareDetails.discountAmount += this.discountAmount;
            fareDetails.convenienceChargesAmount = this.convenienceChargesAmount;
            fareDetails.transactionChargesAmount = this.transactionChargesAmount;
            fareDetails.E_TICKET_DISCOUNT = E_TICKET_DISCOUNT;
            fareDetails.baseFare = this.baseFare;
            fareDetails.inclTransactionChargesAmount = this.inclTransactionChargesAmount;
            fareDetails.inclGSTAmount = this.inclGSTAmount;
            if (this.isReturn) {
              this.commonStorage.localSet("fareDetailsReturn", fareDetails);
            } else {
              this.commonStorage.localSet("fareDetails", fareDetails);
            }
          } else {
            if (this.maxSeatsAllowedToBook > 1) {
              const validInput = parseInt(this.maxSeatsAllowedToBook.toString().replace(/[^0-9]/g, ''), 10);
              this.util.showToast('You cannot select more than ' + validInput + ' seats.');
            } else {
              const validInput = parseInt(this.maxSeatsAllowedToBook.toString().replace(/[^0-9]/g, ''), 10);
              this.util.showToast('You cannot select more than ' + validInput + ' seat.');
            }
          }
          if (this.selectedSeatsToBook.length > 0) {
            this.cdr.detectChanges();
            setTimeout(() => {
              this.proceedBtnShow = true;
              this.cdr.detectChanges();
            }, 100);
          }
        } catch (e) {
          this.ex.call('SelectseatsController_selectSeatFunction', 'selectSeat(seat:any)', e);
        }
      }
    }
  }
  selectBpDpToast(title) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: title,
        duration: 2000,
        // 2 seconds
        position: 'top' // 'top', 'middle', or 'bottom'
      });
      yield toast.present();
    })();
  }
  swiperReady() {
    // this.testswiper = this.testswiper?.nativeElement.swiper;
  }
  goToSlide(swiperContainer, slideIndex, tabName) {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("swiperContainer", swiperContainer, "slideIndex", slideIndex);
      if (swiperContainer && swiperContainer.swiper) {
        var _this4$swiperRef;
        // const swiper = swiperContainer.swiper as Swiper;
        (_this4$swiperRef = _this4.swiperRef) === null || _this4$swiperRef === void 0 || _this4$swiperRef.nativeElement.swiper.slideTo(slideIndex); // Move to the selected slide
      }
      if (tabName === 'lower') {
        var _this4$swiperRef2;
        yield (_this4$swiperRef2 = _this4.swiperRef) === null || _this4$swiperRef2 === void 0 ? void 0 : _this4$swiperRef2.nativeElement.swiper.slidePrev(500, false);
      } else if (tabName === 'upper') {
        var _this4$swiperRef3;
        yield (_this4$swiperRef3 = _this4.swiperRef) === null || _this4$swiperRef3 === void 0 ? void 0 : _this4$swiperRef3.nativeElement.swiper.slideNext(500, false);
      }
      _this4.berthType = tabName;
    })();
  }
  onSlideChanged(slides) {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const currentIndex = yield slides.swiper.activeIndex;
        console.log("currentIndex", currentIndex);
        switch (currentIndex) {
          case 0:
            _this5.berthType = "lower";
            break;
          case 1:
            _this5.berthType = "upper";
            break;
          default:
            _this5.berthType = "lower";
            break;
        }
      } catch (e) {}
    })();
  }
  checkSeat(row, seat) {
    return true;
  }
  checkSeats(seat) {
    if (seat.object.type == 'Gangwayclass' && seat.number != '') {
      return true;
    }
  }
  isChargesInclusive() {
    return this.metaData.chargesInclusive;
  }
  inclusiveTransCharges(incTrCharges) {
    if (this.isChargesInclusive()) {
      return incTrCharges;
    }
    return 0;
  }
  inclusiveGSTCharges(incGSTCharges) {
    if (this.isChargesInclusive()) {
      return incGSTCharges;
    }
    return 0;
  }
  goToPassengerDetails() {
    if (this.appData.isWEBAPP) {
      this.firebaseAnalyticsService.logCustomEvent('view_coach_layout', {
        page: 'Seat Layout Page'
      });
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (this.selectedSeatsToBook.length < this.maxSeatsAllowedToBook) {
        const validInput = parseInt(this.maxSeatsAllowedToBook.toString().replace(/[^0-9]/g, ''), 10);
        this.util.showToast('You cannot select less than ' + validInput + ' seats.');
        return;
      }
    }
    if (!this.util.checkConnection()) {
      return false;
    }
    //mano
    if (this.isReturn) {
      this.commonStorage.localSet("selectedSeatReturn", this.loaclStorageSeat['selectedSeatReturn']);
    } else {
      this.commonStorage.localSet("selectedSeat", this.loaclStorageSeat['selectedSeat']);
    }
    //end
    if (this.isReturn) {
      this.globalData.SELECTED_SEAT_DETAILS_RETURN = this.selectedSeatsToBook;
      // console.log('selected seats ss', this.globalData.SELECTED_SEAT_DETAILS_RETURN);
    } else {
      this.globalData.SELECTED_SEAT_DETAILS = this.selectedSeatsToBook;
      // console.log('selected seats ss', this.globalData.SELECTED_SEAT_DETAILS);
    }
    if (this.isReturn) {
      let onwardSeatsSelected = this.commonStorage.localGet("reservationData").selectedSeatsToBook;
      if (onwardSeatsSelected.length > this.selectedSeatsToBook.length) {
        this.util.showToast('Return journey seats cannot be less than onward journey seats');
        return false;
      }
    }
    try {
      //   if (this.formValidation()) {
      {
        let reservationData = {};
        reservationData.originId = this.origin.id;
        reservationData.destinationId = this.destination.id;
        reservationData.boardingStage = this.boardingStage;
        reservationData.droppingStage = this.droppingStage;
        reservationData.totalBookingAmount = this.totalBookingAmount;
        reservationData.inclTransactionChargesAmount = this.inclTransactionChargesAmount;
        reservationData.inclGSTAmount = this.inclGSTAmount;
        reservationData.netBookingAmount = this.netBookingAmount;
        reservationData.discountAmount = this.discountAmount;
        reservationData.convenienceChargesAmount = this.convenienceChargesAmount;
        reservationData.serviceTaxAmount = this.serviceTaxAmount;
        reservationData.transactionChargesAmount = this.transactionChargesAmount;
        reservationData.selectedSeatsToBook = this.selectedSeatsToBook;
        reservationData.reserveId = this.reservationId;
        reservationData.isBima = this.isBima ? this.isBima : false;
        reservationData.next_day_service = this.serviceDetailsFull.next_day_service;
        if (this.metaData.allowBPDPFare) {
          if (this.boardingStage && this.droppingStage) {
            if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate && !this.isreturnTrip) {
              let navigationExtras = {
                queryParams: {
                  is_return_trip: true
                }
              };
              this.commonStorage.setItem("reservationData", reservationData);
              this.commonStorage.localSet("reservationData", reservationData);
              this.navCtrl.navigateForward('available-routes', navigationExtras);
            } else {
              this.commonStorage.setItem('transactionCharges', 0);
              this.commonStorage.setItem('selectedRoute', this.selectedRoute);
              if (this.isReturn) {
                this.commonStorage.setItem("reservationDataReturn", reservationData);
                this.commonStorage.localSet("reservationDataReturn", reservationData);
                this.globalData.RESERVATION_DATA_RETURN = reservationData;
                let navigationExtras = {
                  queryParams: {
                    is_return_trip: true
                  }
                };
                this.navCtrl.navigateForward('passenger-details', navigationExtras);
              } else {
                this.commonStorage.setItem("reservationData", reservationData);
                this.commonStorage.localSet("reservationData", reservationData);
                this.globalData.RESERVATION_DATA = reservationData;
                this.navCtrl.navigateForward('passenger-details');
              }
            }
          } else {
            if (!this.boardingStage) {
              this.util.showToast("Please select boarding point");
            } else {
              this.util.showToast("Please select droping point");
            }
          }
        } else {
          this.commonStorage.setItem('transactionCharges', 0);
          this.commonStorage.setItem('selectedRoute', this.selectedRoute);
          if (this.isReturn) {
            this.commonStorage.setItem("reservationDataReturn", reservationData);
            this.commonStorage.localSet("reservationDataReturn", reservationData);
            this.globalData.RESERVATION_DATA_RETURN = reservationData;
            let navigationExtras = {
              queryParams: {
                is_return_trip: true
              }
            };
            // this.commonService.gTrack("Seat Layout")
            this.navCtrl.navigateForward('stage-details', navigationExtras);
          } else {
            this.commonStorage.setItem("reservationData", reservationData);
            this.commonStorage.localSet("reservationData", reservationData);
            this.globalData.RESERVATION_DATA = reservationData;
            // this.commonService.gTrack("Seat Layout")
            this.navCtrl.navigateForward('stage-details');
          }
        }
      }
    } catch (e) {
      this.ex.call('seat-layout.ts SelectseatsController_validateBookingFunction', ' goToPassengerDetails()', e);
    }
  }
  getDeals() {
    let travelDate;
    let travelDateReturn;
    travelDate = this.dateService.changeDateFormat(this.commonStorage.localGet('travelDate').formattedDate, "dd-mm-yyyy", "yyyy-mm-dd");
    if (this.isReturn) travelDateReturn = this.dateService.changeDateFormat(this.commonStorage.localGet('travelDateReturn').formattedDate, "dd-mm-yyyy", "yyyy-mm-dd");
    if (!this.util.checkConnection()) {
      return false;
    }
    this.apiFactory.getDealsWithDate(travelDate, travelDateReturn).subscribe(result => {
      let deals = {
        offerCoupon: [],
        promoCoupon: [],
        smartMiles: [],
        e_ticket_discount: []
      };
      if (result["Offer Coupons"]) {
        deals.offerCoupon = result["Offer Coupons"];
      }
      if (result["Promotion Coupons"]) {
        deals.promoCoupon = result["Promotion Coupons"];
      }
      if (result["Smart Miles"]) {
        deals.smartMiles = result["Smart Miles"];
      }
      if (result["E-Ticket Discount"]) {
        deals.e_ticket_discount = result["E-Ticket Discount"];
      }
      this.commonStorage.setItem('deals', deals);
      this.commonStorage.localSet('deals', deals);
      this.commonService.metaDataLoaded.next(this.commonStorage.localGet('metaData'));
    });
  }
  selectBoardingStage() {
    var _this6 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
        componentProps: {
          "list": 8,
          "bpdpList": _this6.selectedRoute.boarding_point_details,
          "title": 'Please select a boarding point'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this6.boardingStage = data;
        _this6.commonStorage.setItem('selectedBoardingStage', _this6.boardingStage);
        _this6.selectedSeatsToBook = [];
        _this6.loaclStorageSeat['selectedSeat'] = [];
        _this6.loaclStorageSeat['selectedSeatReturn'] = [];
        _this6.loadService();
      }
    })();
  }
  selectDropingStage() {
    var _this7 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
        componentProps: {
          "list": 5,
          "bpdpList": _this7.selectedRoute.drop_off_details
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this7.droppingStage = data;
        _this7.commonStorage.setItem('selectedDroppingStage', _this7.droppingStage);
        _this7.selectedSeatsToBook = [];
        _this7.loaclStorageSeat['selectedSeat'] = [];
        _this7.loaclStorageSeat['selectedSeatReturn'] = [];
        _this7.loadService();
      }
    })();
  }
  //manoranjan remover comma from origin, destination
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  roundoffVal(val) {
    return Math.round(val);
  }
  presentPopover(_x, _x2) {
    var _this8 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev, seat, reservable = true, j, i, theme) {
      if (!seat.isReservable) {} else if (seat.isSelected) {
        _this8.selectSeat(seat, reservable);
      } else if (seat.isLadiesSeat) {
        if (_this8.berthType == 'lower') {
          _this8.coachLayoutJsonL[j][i].object.isMaleOrFemale = 'female';
        } else if (_this8.berthType == 'upper') {
          _this8.coachLayoutJsonU[j][i].object.isMaleOrFemale = 'female';
        }
        _this8.selectSeat(seat, reservable);
      } else if (seat.isGentsSeat) {
        if (_this8.berthType == 'lower') {
          _this8.coachLayoutJsonL[j][i].object.isMaleOrFemale = 'male';
        } else if (_this8.berthType == 'upper') {
          _this8.coachLayoutJsonU[j][i].object.isMaleOrFemale = 'male';
        }
        _this8.selectSeat(seat, reservable);
      } else {
        const popop = yield _this8.popoverCtrl.create({
          component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_4__.PopoverPage,
          event: ev,
          cssClass: 'selectseatpopupcss'
        });
        yield popop.present();
        const {
          data
        } = yield popop.onDidDismiss();
        if (data) {
          _this8.zone.run(() => {
            if (_this8.berthType == 'lower') {
              _this8.coachLayoutJsonL[j][i].object.isMaleOrFemale = data;
              _this8.selectSeat(seat, reservable);
            } else if (_this8.berthType == 'upper') {
              _this8.coachLayoutJsonU[j][i].object.isMaleOrFemale = data;
              _this8.selectSeat(seat, reservable);
            }
          });
        }
      }
    }).apply(this, arguments);
  }
  callFarebreakup() {
    var _this9 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this9.modalController.create({
        component: _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_3__.PriceBreakupComponent,
        componentProps: {
          filData: _this9.globalData,
          isReturn: _this9.isReturn,
          idProof: false,
          phoneBooking: false,
          payFromWallet: false,
          checkCancelProtect: true,
          idProofCnt: 0,
          appliedOfferCoupon: '',
          promoCoupon: '',
          appliedcoupon1: false,
          appliedcoupon2: false,
          appliedCouponname: '',
          smartMilesDiscount: 0,
          smartMileCoupon: '',
          pnrDiscountAplied: false,
          quotePnrForm: {},
          privCardNumber: '',
          onwardSeatDetails: _this9.globalData.onwardseatsarray,
          returnSeatDetails: _this9.globalData.returnseatsarray,
          isFromCoachLayout: true
        },
        cssClass: 'custom-modal-class2',
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.3
      });
      modal.present().then(() => {
        const modalElement = document.querySelector('.custom-modal-class2 .modal-wrapper');
        // const contentElement = modalElement.querySelector('.modal-content') as HTMLElement;
        const contentElement = modalElement.querySelector('.modal-content');
        const contentHeight = contentElement.scrollHeight;
        // Set modal height to auto based on its content
        if (contentHeight > window.innerHeight * 0.7) {
          modalElement.style.maxHeight = '70vh'; // Set maximum height
        } else {
          modalElement.style.height = `${contentHeight}px`;
        }
      });
      // await modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      _this9.globalData.DEPARTURE_DATE = _this9.commonStorage.getItem("travelDate");
      _this9.globalData.DEPARTURE_DATE_RETURN = _this9.commonStorage.getItem("travelDateReturn");
      if (data && data != '') {
        _this9.defaultCall();
      }
    })();
  }
  leadingZero(day) {
    if (day == null) {
      // checks for both null and undefined
      return '00';
    }
    return day.toString().padStart(2, '0');
  }
  isLowerBerth() {
    return this.berthType === 'lower';
  }
  isUpperBerth() {
    return this.berthType === 'upper';
  }
}
_SeatLayoutPage = SeatLayoutPage;
_SeatLayoutPage.ɵfac = function SeatLayoutPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SeatLayoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_7__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_8__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_9__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_10__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_13__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_14__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_15__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_16__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_17__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ToastController));
};
_SeatLayoutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
  type: _SeatLayoutPage,
  selectors: [["app-seat-layout"]],
  viewQuery: function SeatLayoutPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
    }
  },
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["mySlider", ""], [4, "ngIf"], [3, "ngStyle"], ["mode", "md", 1, "themeone-seat-layout-header", 2, "display", "flex", "height", "50px"], ["slot", "start", 2, "position", "absolute", "height", "50px", "padding-left", "5px"], [2, "color", "#333333", 3, "click"], [1, "themeone-seat-layout-text", 2, "margin", "auto"], ["class", "", "style", "padding: 10px 0px 0px 0px;", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], [2, "--background", "white"], ["class", "center err-msg", 4, "ngIf"], ["style", "margin-right:15px", 4, "ngIf"], ["style", "justify-content: left;", "class", "center-hr", 4, "ngIf"], ["class", "themeone-seat-slide center-hr", 4, "ngIf"], ["ion-button", "", 1, "themeone-bottom", "theme1", 3, "ngClass"], [2, "width", "100%", "padding", "10px 20px 20px 20px"], ["size", "6"], [1, "themeone-seats"], [1, "themeone-seat-lbl"], ["class", "themeone-seat-val", 4, "ngIf"], [1, "themeone-totalvalue"], [3, "click"], [1, "themeone-viewbreakup"], ["size", "6", 1, "center-hr", 3, "click"], [1, "themeone-select-pickup-btn", 2, "border-radius", "5px", "background", "#FFBD16", "--background-activated", "#FFBD16", "font-size", "12px", "font-weight", "600"], [3, "stateChange", "hidden", "disableDrag", "state", "minimumHeight", "dockedHeight", "shouldBounce", "distanceTop"], [1, "drawer-content"], [1, "", 2, "padding", "10px 0px 0px 0px"], [1, "themeone-seat-segment"], ["mode", "md", 1, "theme-1-center", 2, "border-bottom", "1px solid #a9a9aa", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "theme-1-center", 3, "click"], [1, "theme-1-segmentLabel"], ["mode", "md", "value", "upper", 1, "theme-1-center", 3, "click"], ["text-wrap", "", 2, "background-color", "#E4E4E4", "color", "#4A4A4A", "padding", "5px 10px", "border-radius", "5px", "text-align", "center", "margin", "15px", "font-size", "12px", "width", "100%"], [1, "whole", "center", 3, "click"], [1, "legend-box", "center"], ["size", "4", "class", "center", 4, "ngFor", "ngForOf"], ["size", "12", "class", "center", 4, "ngIf"], [1, "bg-close", 2, "display", "none"], ["name", "close-outline", 1, "legend-close", 3, "click"], ["size", "4", 1, "center"], [1, "themeone-legend-seat", "center", 3, "ngStyle"], [1, "themeone-legend-txt"], ["size", "12", 1, "center"], ["class", "themeone-legend-txt", 4, "ngIf"], [1, "center", "err-msg"], [2, "margin-right", "15px"], [1, "ion-activatable", "ripple-parent", 3, "click"], ["ion-button", "", "class", "txt-main", 4, "ngIf"], ["name", "chevron-down-outline", "item-end", ""], ["ion-button", "", 1, "txt-main"], [1, "center-hr", 2, "justify-content", "left"], [1, "themeone-btn-price-filter", "center-hr", 2, "margin-left", "40px", 3, "click", "ngClass"], ["class", "themeone-btn-price-filter center-hr", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "themeone-btn-price-filter", "center-hr", 3, "click", "ngClass"], [1, "themeone-seat-slide", "center-hr"], ["id", "lower", "class", "themeone-seat-slide", 4, "ngIf"], ["id", "upper", "class", "themeone-seat-slide", 4, "ngIf"], ["id", "lower", 1, "themeone-seat-slide"], ["name", "information-circle-outline", "src", "./assets/icon/aboutusimg.svg", 1, "info-btn-align", 2, "width", "24px", "height", "24px", 3, "click"], [1, "seat-card-bg"], [1, "lower", "seat-layout-inner"], ["id", "seat-table", 1, ""], [4, "ngFor", "ngForOf"], ["style", "height: 60px;background-color: #f7f9fb;border: solid 1px #f7f9fb;", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "ngClass"], ["ion-item", "", "id", "click-trigger", 1, "text-white", 3, "click", "ngClass", "hidden"], ["class", "cur_point seat", 4, "ngIf"], ["class", "cur_point seat selected gents", 4, "ngIf"], ["class", "cur_point seat selected ladies", 4, "ngIf"], ["class", "cur_point seat gents", 4, "ngIf"], ["class", "cur_point seat ladies", 4, "ngIf"], ["class", "cur_point seat ladies-reserved", 4, "ngIf"], ["class", "cur_point seat reserved", 4, "ngIf"], ["class", "cur_point sleeper", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper selected gents", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper selected ladies", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper gents", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper ladies", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper ladies-reserved", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper  reserved", 3, "ngClass", 4, "ngIf"], [1, "seat-number", "v-small", 3, "ngClass"], [1, "cur_point", "seat"], [1, "cur_point", "seat", "selected", "gents"], [1, "cur_point", "seat", "selected", "ladies"], [1, "cur_point", "seat", "gents"], [1, "cur_point", "seat", "ladies"], [1, "cur_point", "seat", "ladies-reserved"], [1, "cur_point", "seat", "reserved"], [1, "cur_point", "sleeper", 3, "ngClass"], [1, "cur_point", "sleeper", "selected", "gents", 3, "ngClass"], [1, "cur_point", "sleeper", "selected", "ladies", 3, "ngClass"], [1, "cur_point", "sleeper", "gents", 3, "ngClass"], [1, "cur_point", "sleeper", "ladies", 3, "ngClass"], [1, "cur_point", "sleeper", "ladies-reserved", 3, "ngClass"], [1, "cur_point", "sleeper", "reserved", 3, "ngClass"], [1, "w30"], [2, "height", "60px", "background-color", "#f7f9fb", "border", "solid 1px #f7f9fb"], ["id", "upper", 1, "themeone-seat-slide"], ["src", "./assets/icon/aboutusimg.svg", "name", "information-circle-outline", 1, "info-btn-align", 2, "width", "24px", "height", "24px", 3, "click"], [1, "upper", "seat-layout-inner"], [1, ""], [3, "ngClass", 4, "ngIf"], ["ion-item", "", 3, "ngClass", "click", 4, "ngIf"], ["ion-item", "", 3, "click", "ngClass"], ["name", "information-circle-outline", "src", "./assets/icon/aboutusimg.svg", 1, "info-btn-align-2", 2, "width", "24px", "height", "24px", 3, "click", "ngStyle"], ["class", "lower seat-layout-inner", "style", "    border: 1px solid #dddddd;", 4, "ngIf"], [1, "lower", "seat-layout-inner", 2, "border", "1px solid #dddddd"], ["id", "seat-table", 1, "", 2, "background", "#fff", "margin", "7px", "border-radius", "4px"], ["style", "height: 80px;", 4, "ngIf"], ["ion-item", "", 1, "text-white", 3, "click", "ngClass", "hidden"], [2, "height", "80px"], [1, "themeone-seat-val"], ["mode", "md", 1, "bg-cl", "tlbr-center"], ["slot", "start"], [1, "hd-ln-1"], [1, "hd-ln-2"], ["class", "center-hr", 4, "ngIf"], ["class", "center", 3, "swiperslidechange", 4, "ngIf"], ["class", "seat-slide center-hr", 4, "ngIf"], ["ion-button", "", 1, "bottom", 3, "ngClass"], [1, "seats", "center-hr"], [1, "seat-lbl"], [1, "seat-val"], [1, "center-hr", "price", 3, "click"], [1, "value"], [1, "pay", "center", 3, "click"], [1, "legend-seat", "center", 3, "ngStyle"], [1, "legend-txt"], ["class", "legend-txt", 4, "ngIf"], [1, "center-hr"], [1, "seg-btn"], ["mode", "md", 1, "tabs", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "center", 2, "height", "30px", "padding-bottom", "0px !important", 3, "click"], ["mode", "md", "value", "upper", 1, "center", 2, "height", "30px", "padding-bottom", "0px !important", 3, "click"], [1, "btn-price-filter", "center-hr", 3, "click", "ngClass"], ["class", "btn-price-filter center-hr", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "center", 3, "swiperslidechange"], ["id", "lower", 1, "seat-slide", 2, "display", "flex", "justify-content", "center"], ["name", "information-circle-outline", "src", "./assets/icon/Info.svg", 1, "info-btn-align", 2, "width", "24px", "height", "24px", 3, "click"], [1, "seat-card-bg", 2, "width", "fit-content !important"], ["id", "seat-table", 1, "", 2, "margin-left", "20%"], ["id", "upper", 1, "seat-slide", 2, "display", "flex", "justify-content", "center"], ["src", "./assets/icon/Info.svg", "name", "information-circle-outline", 1, "info-btn-align", 2, "width", "24px", "height", "24px", 3, "click"], [1, "", 2, "margin-left", "20%"], ["class", "cur_point seat selected", 4, "ngIf"], ["class", "cur_point sleeper selected", 3, "ngClass", 4, "ngIf"], [1, "cur_point", "seat", "selected"], [1, "cur_point", "sleeper", "selected", 3, "ngClass"], [1, "seat-slide", "center-hr"], ["name", "information-circle-outline", "src", "./assets/icon/Info.svg", 1, "info-btn-align-2", 2, "width", "24px", "height", "24px", 3, "click", "ngStyle"], ["id", "seat-table", 1, "", 2, "background", "#fff", "margin", "7px", "border-radius", "4px", "border", "solid 1px #dddddd"], ["mode", "md", 1, "bg-cl"], [2, "font-weight", "bold"], [2, "color", "#999999", "font-size", "13px"], [2, "--background", "#F1F7FA"], ["class", "seabird-seat-slide center-hr", 4, "ngIf"], [2, "background", "#F1F7FA"], ["style", "margin: 0px 8px;", 4, "ngIf"], [1, "seabirdPayContainer"], ["class", "seabirdPay center", 3, "click", 4, "ngIf"], [1, "seaBird_card_1"], [1, "seabird-btn-price-filter", "center-hr", 2, "font-weight", "bold", 3, "click", "ngClass"], ["class", "seabird-btn-price-filter center-hr", "style", "font-weight: bold;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "seaBird-seg-btn"], ["mode", "md", "value", "lower", 1, "center", 2, "padding-bottom", "0px", 3, "click"], ["mode", "md", "value", "upper", 1, "center", 2, "padding-bottom", "0px", 3, "click"], ["class", "center", "style", "max-height: 68%;", "pager", "false", "options", "slideOpts", 3, "swiperslidechange", 4, "ngIf"], ["pager", "false", "options", "slideOpts", 1, "center", 2, "max-height", "68%", 3, "swiperslidechange"], ["id", "lower", "class", "seabird-seat-slide", "style", "background: #F1F7FA;", 4, "ngIf"], ["id", "upper", "class", "seabird-seat-slide", "style", "background: #F1F7FA;", 4, "ngIf"], ["id", "lower", 1, "seabird-seat-slide", 2, "background", "#F1F7FA"], ["name", "information-circle-outline", "src", "./assets/icon/Info.svg", 1, "info-btn-align", 2, "width", "24px", "height", "24px", "top", "23px", 3, "click"], ["id", "upper", 1, "seabird-seat-slide", 2, "background", "#F1F7FA"], ["src", "./assets/icon/Info.svg", "name", "information-circle-outline", 1, "info-btn-align", 2, "width", "24px", "height", "24px", "top", "23px", 3, "click"], [1, "seabird-seat-slide", "center-hr"], [2, "margin", "0px 8px"], [1, "seabird_fare_row"], ["class", "seabird_seatNum", 4, "ngIf"], [1, "seabird_seatNum"], ["size", "6", 2, "text-align", "end"], ["class", "seabird_fare", 4, "ngIf"], [1, "seabird_fare"], [1, "seabirdPay", "center", 3, "click"], [1, "ourbustheme"], [1, "hd-ln-1", 2, "text-align", "left", "margin-left", "10px", "font-size", "16px"], ["name", "arrow-forward-outline", 2, "margin-inline", "8px"], [1, "ourbus-hd-ln"], ["src", "./assets/icon/ourbus_header_person_icon.svg", 1, "ourbus-inline-icon"], [1, "ourbustheme", 2, "--background", "#f7f9fb"], ["class", "ourbus-scroll-container", 4, "ngIf"], ["class", "center", "pager", "false", "options", "slideOpts", 3, "swiperslidechange", 4, "ngIf"], ["class", "singleview_layout", 4, "ngIf"], ["style", "height: auto;display: block;", "ion-button", "", "class", "bottom  ", 3, "ngClass", 4, "ngIf"], [1, "drawer-content", "ourbustheme"], ["mode", "ios", 1, "tabs", 2, "--background", "#fff", 3, "ngModelChange", "ngModel"], ["value", "lower", 2, "--border-radius", "none", "padding", "10px 0px", 3, "click"], ["value", "upper", 2, "--border-radius", "none", "padding", "10px 0px", 3, "click"], [1, "ourbus-scroll-container"], [2, "color", "#2D2D2D", "text-align", "center", "font-size", "18px", "font-weight", "700"], [1, "ourbus-scroll-content", 2, "margin-left", "20px"], ["size", "3.5", "class", "ourbus-seat-col", 4, "ngFor", "ngForOf"], ["size", "12", "class", "ourbus-seat-col", 4, "ngIf"], ["size", "3.5", 1, "ourbus-seat-col"], [1, "ourbus-legend-seat", 3, "ngStyle"], [3, "src"], [1, "ourbus-legend-txt"], ["size", "12", 1, "ourbus-seat-col"], ["pager", "false", "options", "slideOpts", 1, "center", 3, "swiperslidechange"], ["id", "lower", 1, "seat-slide"], [1, "seat-card-bg", 2, "margin-bottom", "60% !important"], [2, "padding", "0px 2px"], ["size", "6", 2, "text-align", "right"], ["src", "./assets/icon/ic_driver_icon.SVG", 1, "lower_icon"], ["style", "height: 60px;border: solid 1px #f7f9fb;", 4, "ngIf"], ["id", "upper", 1, "seat-slide"], ["class", "cur_point seat", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point seat selected", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point seat gents", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point seat ladies", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point seat ladies-reserved", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point seat reserved", "style", "width: 32px;", 4, "ngIf"], ["class", "cur_point sleeper", "style", "border: none;width: 40px;", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper selected", "style", "width: 40px;background-color: #fff; border: none;", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper gents", "style", "width: 40px;background-color: #fff; border: none;", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper ladies", "style", "width: 40px;background-color: #fff; border: none;", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper ladies-reserved", "style", "width: 40px;background-color: #fff; border: none;", 3, "ngClass", 4, "ngIf"], ["class", "cur_point sleeper  reserved", "style", "width: 40px;background-color: #fff; border: none;", 3, "ngClass", 4, "ngIf"], [1, "cur_point", "seat", 2, "width", "32px"], ["width", "40", "height", "40", "viewBox", "0 0 46 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3.5", "y", "0.5", "width", "39", "height", "39", "rx", "3.5", "stroke", "#2D2D2D"], ["d", "M45 39V20.5C45 19.1193 43.8807 18 42.5 18C41.1193 18 40 19.1193 40 20.5V34.7639C40 36.2507 38.3937 37.3097 36.9708 36.8786C34.1582 36.0265 29.4345 35 23 35C16.5655 35 11.8418 36.0265 9.02922 36.8786C7.60632 37.3097 6 36.2507 6 34.7639V20.5C6 19.1193 4.88071 18 3.5 18C2.11929 18 1 19.1193 1 20.5V39C1 41.2091 2.79086 43 5 43H6.5H9H12H15H17.5H23H28.5H31H34H37H39.5H41C43.2091 43 45 41.2091 45 39Z", "fill", "#fff", "stroke", "#2D2D2D"], ["class", "our-bus-svg-text", 4, "ngIf"], [1, "our-bus-svg-text"], [1, "cur_point", "seat", "selected", 2, "width", "32px"], ["width", "40", "height", "40", "viewBox", "0 0 46 44", "fill", "#4CAF5040", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3.5", "y", "0.5", "width", "39", "height", "39", "rx", "3.5", "stroke", "#4CAF50"], ["d", "M45 39V20.5C45 19.1193 43.8807 18 42.5 18C41.1193 18 40 19.1193 40 20.5V34.7639C40 36.2507 38.3937 37.3097 36.9708 36.8786C34.1582 36.0265 29.4345 35 23 35C16.5655 35 11.8418 36.0265 9.02922 36.8786C7.60632 37.3097 6 36.2507 6 34.7639V20.5C6 19.1193 4.88071 18 3.5 18C2.11929 18 1 19.1193 1 20.5V39C1 41.2091 2.79086 43 5 43H6.5H9H12H15H17.5H23H28.5H31H34H37H39.5H41C43.2091 43 45 41.2091 45 39Z", "fill", "#4CAF50", "stroke", "#4CAF50"], [1, "cur_point", "seat", "gents", 2, "width", "32px"], [1, "cur_point", "seat", "ladies", 2, "width", "32px"], ["x", "3.5", "y", "0.5", "width", "39", "height", "39", "rx", "3.5", "stroke", "#D7008F"], ["d", "M45 39V20.5C45 19.1193 43.8807 18 42.5 18C41.1193 18 40 19.1193 40 20.5V34.7639C40 36.2507 38.3937 37.3097 36.9708 36.8786C34.1582 36.0265 29.4345 35 23 35C16.5655 35 11.8418 36.0265 9.02922 36.8786C7.60632 37.3097 6 36.2507 6 34.7639V20.5C6 19.1193 4.88071 18 3.5 18C2.11929 18 1 19.1193 1 20.5V39C1 41.2091 2.79086 43 5 43H6.5H9H12H15H17.5H23H28.5H31H34H37H39.5H41C43.2091 43 45 41.2091 45 39Z", "fill", "#fff", "stroke", "#D7008F"], [1, "cur_point", "seat", "ladies-reserved", 2, "width", "32px"], [2, "width", "40", "height", "40"], ["x", "3.5", "y", "0.5", "width", "39", "height", "39", "rx", "3.5", "stroke", "#D9D9D9"], ["d", "M45 39V20.5C45 19.1193 43.8807 18 42.5 18C41.1193 18 40 19.1193 40 20.5V34.7639C40 36.2507 38.3937 37.3097 36.9708 36.8786C34.1582 36.0265 29.4345 35 23 35C16.5655 35 11.8418 36.0265 9.02922 36.8786C7.60632 37.3097 6 36.2507 6 34.7639V20.5C6 19.1193 4.88071 18 3.5 18C2.11929 18 1 19.1193 1 20.5V39C1 41.2091 2.79086 43 5 43H6.5H9H12H15H17.5H23H28.5H31H34H37H39.5H41C43.2091 43 45 41.2091 45 39Z", "fill", "#fff", "stroke", "#D9D9D9"], [1, "cur_point", "seat", "reserved", 2, "width", "32px"], [1, "cur_point", "sleeper", 2, "border", "none", "width", "40px", 3, "ngClass"], ["width", "40", "height", "90", "viewBox", "0 0 40 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.5", "y", "0.5", "width", "39", "height", "87", "rx", "3.5", "stroke", "#2D2D2D"], ["x", "12.5", "y", "64.5", "width", "15", "height", "3", "rx", "1.5", "stroke", "#2D2D2D"], ["class", "our-bus-svg-text-slepper", 4, "ngIf"], ["class", "our-bus-svg-text-slepper", "style", "left: 52% !important", 4, "ngIf"], [1, "our-bus-svg-text-slepper"], [1, "our-bus-svg-text-slepper", 2, "left", "52% !important"], [1, "cur_point", "sleeper", "selected", 2, "width", "40px", "background-color", "#fff", "border", "none", 3, "ngClass"], ["width", "40", "height", "90", "viewBox", "0 0 40 90", "fill", "#4CAF5040", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.5", "y", "0.5", "width", "39", "height", "87", "rx", "3.5", "stroke", "#4CAF50"], ["x", "12.5", "y", "64.5", "width", "15", "height", "3", "rx", "1.5", "stroke", "#4CAF50"], [1, "cur_point", "sleeper", "gents", 2, "width", "40px", "background-color", "#fff", "border", "none", 3, "ngClass"], [1, "cur_point", "sleeper", "ladies", 2, "width", "40px", "background-color", "#fff", "border", "none", 3, "ngClass"], ["width", "40", "height", "90", "viewBox", "0 0 40 90", "fill", "#fff", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0.5", "y", "0.5", "width", "39", "height", "87", "rx", "3.5", "stroke", "#D7008F"], ["x", "12.5", "y", "64.5", "width", "15", "height", "3", "rx", "1.5", "stroke", "#D7008F"], [1, "cur_point", "sleeper", "ladies-reserved", 2, "width", "40px", "background-color", "#fff", "border", "none", 3, "ngClass"], ["x", "0.5", "y", "0.5", "width", "39", "height", "87", "rx", "3.5", "stroke", "#D9D9D9"], ["x", "12.5", "y", "64.5", "width", "15", "height", "3", "rx", "1.5", "stroke", "#D9D9D9"], [1, "cur_point", "sleeper", "reserved", 2, "width", "40px", "background-color", "#fff", "border", "none", 3, "ngClass"], [2, "height", "60px", "border", "solid 1px #f7f9fb"], [1, "singleview_layout"], ["pager", "false", 1, "center", 3, "swiperslidechange", "options"], [2, "overflow", "auto", "display", "-webkit-inline-box", "padding", "0px 16px !important"], [1, "seat-card-bg", 2, "margin-bottom", "60% !important", "padding", "0px 0px 26px 0px", "margin-right", "10px", "min-width", "100%"], [2, "border-bottom", "solid 1px #dddddd", "padding", "0px 4px"], ["size", "6", 2, "text-align", "left", "margin", "auto", "margin-top", "0%"], [2, "color", "#757575", "font-weight", "600"], [1, "seat-card-bg", 2, "margin-bottom", "60% !important", "padding", "0px 0px 26px 0px", "margin-left", "10px", "min-width", "100%"], ["src", "./assets/icon/ic_driver_icon.SVG", 1, "upper_icon"], [1, "lower", "seat-layout-inner", 2, "margin-bottom", "60% !important"], [2, "background", "#fff", "margin", "7px", "border-radius", "4px", "border", "solid 1px #dddddd"], ["style", "padding: 0px 2px;", 4, "ngIf"], ["ion-button", "", 1, "bottom", 2, "height", "auto", "display", "block", 3, "ngClass"], [2, "padding", "5px 15px 15px 15px"], [2, "color", "#000000", "font-weight", "700", "font-size", "16px", "margin-left", "5px"], ["size", "8"], ["class", "seat_text", 4, "ngIf"], [2, "color", "#000000", "font-weight", "700", "font-size", "14px"], ["size", "4", 2, "text-align", "end"], [2, "color", "#747474"], ["expand", "block", 1, "ourbus_btn"], [2, "text-align", "center", "color", "#747474", "font-size", "12px"], [1, "seat_text"]],
  template: function SeatLayoutPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, SeatLayoutPage_ng_container_0_Template, 37, 28, "ng-container", 1)(1, SeatLayoutPage_ng_container_1_Template, 38, 30, "ng-container", 1)(2, SeatLayoutPage_ng_container_2_Template, 25, 19, "ng-container", 1)(3, SeatLayoutPage_ng_container_3_Template, 27, 24, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonBackButton, modules_ion_bottom_drawer_ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_19__.IonBottomDrawerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DecimalPipe],
  styles: [".tlbr-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-right: 15px;\n}\n\nion-content {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.txt-main {\n  margin: 0 0 0 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #7e7e8c;\n}\n\n.lower_header {\n  background-color: white !important;\n  margin: 0px 15px 0px 15px !important;\n  padding: 9px 0px 7px 16px !important;\n}\n\n.lower_seat {\n  display: inline-block;\n  font-weight: 600;\n  color: #4a4a4a;\n}\n\n.segmentbtn {\n  margin: auto !important;\n}\n\n.seat-slide {\n  margin: 25px auto;\n  height: auto;\n  border-radius: 4px;\n  background-color: #f7f9fb;\n}\n.seat-slide .seat-card-bg {\n  padding: 26px 0px;\n  margin: 15px 20px;\n  border-radius: 4px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: auto;\n  height: auto;\n  min-width: 70%;\n}\n\n.seabird-seat-slide {\n  margin: 25px auto 0px auto;\n  height: auto;\n  border-radius: 4px;\n  background-color: #F1F7FA;\n}\n.seabird-seat-slide .seat-card-bg {\n  padding: 26px 30px;\n  margin: 15px 0px;\n  border-radius: 28px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: auto;\n  height: auto;\n}\n\ntd {\n  padding: 0px 3px !important;\n}\n\n.ios app-amenities-modal,\n.md app-amenities-modal {\n  background-color: #34495e !important;\n}\n.ios app-amenities-modal .content,\n.md app-amenities-modal .content {\n  padding: 20px;\n}\n\n.scroll-content {\n  contain: initial;\n}\n\n.gap {\n  transition: all linear 0.3s;\n  height: 0;\n}\n\nimg.cur_point:hover {\n  opacity: 0.7;\n}\n\n.h80 {\n  height: 80px;\n}\n\n.seaBird_card_1 {\n  display: flex;\n  padding: 16px;\n  justify-content: flex-start;\n  border: 1px solid #626262;\n  margin: 16px 16px;\n  background: white;\n  box-shadow: none;\n}\n\n.seaBird_card_2 {\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  border: 1px solid #626262;\n  margin: 12px 16px;\n  background: white;\n  box-shadow: none;\n}\n\n.cardPosition {\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  border: 1px solid #626262;\n  margin: 12px 16px;\n  background: white;\n  box-shadow: none;\n  position: relative;\n  top: 30%;\n}\n\n.w30 {\n  width: 30px;\n  height: 1px;\n}\n\ntd button.item.item-block {\n  background-color: transparent;\n}\n\nspan.legend {\n  display: inline-block;\n  width: 14px;\n  top: 1px;\n  height: 14px;\n  position: relative;\n}\nspan.legend.grey-o {\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\nspan.legend.green {\n  background-color: #52c328;\n}\nspan.legend.grey {\n  background-color: #ccc;\n}\nspan.legend.orange {\n  background-color: #fbcb21;\n}\nspan.legend.blue {\n  background-color: #77f;\n}\nspan.legend.pink {\n  background-color: #ff8a9f;\n}\n\nspan.cur_point.sleeper.horizontal {\n  width: 85px;\n  height: 42px;\n}\n\n.button_horizontal {\n  margin-right: 10px;\n  margin-left: 15px;\n}\n\n#seat-table button,\n.seat-layout-inner button {\n  padding: 0 !important;\n  margin: 5px 1px;\n  background: #fff;\n}\n#seat-table button .item-inner,\n.seat-layout-inner button .item-inner {\n  padding: 0 !important;\n  background-image: none !important;\n  border: 0 !important;\n}\n#seat-table .item-ios.activated,\n.seat-layout-inner .item-ios.activated {\n  border-radius: 4px;\n}\n\n#seat-table button.horizontal,\n.seat-layout-inner button.horizontal {\n  margin: 0 auto;\n}\n\n.seat-bg {\n  border-radius: 4px;\n  border: 2px solid #6c8cb1;\n  padding: 0 !important;\n  margin: 6px;\n}\n\nspan.cur_point.sleeper.horizontal span {\n  height: 80%;\n  width: 12%;\n}\n\nspan.cur_point.sleeper {\n  display: block;\n  width: 30px;\n  height: 65px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  position: relative;\n  background-color: #fff;\n}\nspan.cur_point.sleeper span {\n  display: block;\n  width: 80%;\n  position: absolute;\n  border: 1px solid #ccc;\n  bottom: 5px;\n  left: 10%;\n  height: 9px;\n  border-radius: 2px;\n  border: 2px solid #6c8cb1;\n  background-color: #fff;\n}\nspan.cur_point.sleeper.gents {\n  background-color: #778bef;\n}\nspan.cur_point.sleeper.reserved {\n  background-color: #ddd;\n}\nspan.cur_point.sleeper.ladies {\n  background-color: #f58eb1;\n}\nspan.cur_point.sleeper.ladies-reserved {\n  background-color: #fbcb21;\n}\nspan.cur_point.sleeper.selected {\n  background-color: #52c328;\n}\nspan.cur_point.sleeper + span {\n  color: #000;\n}\nspan.cur_point.sleeper.selected + span {\n  color: #fff;\n}\n\n.ourbustheme span.cur_point.sleeper {\n  display: block;\n  width: 30px;\n  height: 88px !important;\n}\n\nspan.cur_point.seat {\n  display: block;\n  width: 30px;\n  height: 27px;\n  position: relative;\n  margin: 0px 5px 0px -1px;\n}\nspan.cur_point.seat + span {\n  color: #000;\n}\nspan.cur_point.seat span {\n  background-color: #fff;\n}\nspan.cur_point.seat span:nth-child(1) {\n  width: 82%;\n  display: block;\n  height: 100%;\n  border: 1px solid #bbb;\n  position: absolute;\n  left: 16%;\n  border-radius: 2px;\n}\nspan.cur_point.seat span:nth-child(2) {\n  display: block;\n  width: 6px;\n  height: 18px;\n  border: 1px solid #bbb;\n  border-radius: 20%;\n  position: absolute;\n  background-color: #fff;\n  right: 0px;\n  top: 7px;\n}\nspan.cur_point.seat span:nth-child(3) {\n  display: block;\n  width: 6px;\n  height: 17px;\n  border: 1px solid #bbb;\n  border-radius: 20%;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n  background-color: #fff;\n}\nspan.cur_point.seat span:nth-child(4) {\n  display: block;\n  height: 7px;\n  width: 92%;\n  border: 1px solid #bbb;\n  border-radius: 20%;\n  position: absolute;\n  left: 9%;\n  background-color: #fff;\n  bottom: -4px;\n}\nspan.cur_point.seat.gents span {\n  background-color: #778bef;\n  border-color: #475b9f;\n}\nspan.cur_point.seat.reserved span {\n  background-color: #ddd;\n  border-color: #aaa;\n}\nspan.cur_point.seat.ladies span {\n  background-color: #f58eb1;\n  border-color: #b55e91;\n}\nspan.cur_point.seat.ladies-reserved span {\n  background-color: #fbcb21;\n  border-color: #bb9b01;\n}\nspan.cur_point.seat.selected span {\n  background-color: #52c328;\n  border-color: #329308;\n}\nspan.cur_point.seat.selected + span {\n  color: #fff;\n}\n\nion-slides {\n  height: auto;\n}\n\ntable img {\n  margin: 1px;\n}\ntable td,\ntable th {\n  position: relative;\n}\ntable td .seat-number,\ntable th .seat-number {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  margin-top: -8px;\n  left: 0;\n}\ntable td .seat-number.berth,\ntable th .seat-number.berth {\n  margin-top: -8;\n}\n\n.seat-slides {\n  overflow-y: scroll;\n  height: 100vh;\n  overflow-x: hidden;\n  width: 94vw;\n  left: 3vw;\n  margin: 0 auto;\n  position: fixed;\n  top: 160px;\n}\n.seat-slides .gap {\n  height: 165px;\n}\n.seat-slides .gap.h80 {\n  height: 235px;\n}\n.seat-slides.no-seg {\n  top: 115px;\n}\n.seat-slides.no-seg .gap {\n  height: 115px;\n}\n.seat-slides.no-seg .gap.h80 {\n  height: 185px;\n}\n.seat-slides .steering-image {\n  text-align: right;\n  height: 40px;\n  margin: 0 auto;\n  padding: 0 5px;\n  max-width: 100%;\n}\n.seat-slides .steering-image img {\n  height: 90%;\n  width: auto;\n}\n.seat-slides ion-slide {\n  padding-top: 15px;\n  padding-bottom: 20px;\n}\n.seat-slides table {\n  margin: 0 auto;\n}\n.seat-slides table img {\n  width: 45px;\n}\n\n.content-ios .swiper-container {\n  overflow: visible;\n}\n.content-ios ion-slides {\n  height: auto;\n}\n.content-ios .seg-tabs {\n  padding: 7px;\n  background-color: #fff;\n}\n.content-ios .no-seg .seg-tabs {\n  padding: 0;\n}\n.content-ios .seat-slides {\n  top: 160px;\n}\n.content-ios .seat-slides .gap {\n  height: 163px;\n}\n.content-ios .seat-slides .gap.h80 {\n  height: 235px;\n}\n.content-ios .seat-slides.no-seg {\n  top: 115px;\n}\n.content-ios .seat-slides.no-seg .gap {\n  height: 118px;\n}\n.content-ios .seat-slides.no-seg .gap.h80 {\n  height: 180px;\n}\n.content-ios .seats-info.no-seg {\n  height: 52px;\n  border-bottom: 0.4px solid #ccc;\n}\n\n.content-md .seg-tabs {\n  padding: 5px 0;\n  background-color: #fff;\n}\n.content-md .no-seg .seg-tabs {\n  padding: 0;\n}\n.content-md .seats-info.no-seg {\n  height: 52px;\n  border-bottom: 0.4px solid #ccc;\n}\n.content-md .seat-slides {\n  top: 160px;\n}\n.content-md .seat-slides .gap {\n  height: 165px;\n}\n.content-md .seat-slides .gap.h80 {\n  height: 235px;\n}\n.content-md .seat-slides.no-seg {\n  top: 74px;\n}\n.content-md .seat-slides.no-seg .gap {\n  height: 150px;\n}\n.content-md .seat-slides.no-seg .gap.h80 {\n  height: 198px;\n}\n\n.swiper-slide {\n  align-items: flex-start;\n}\n.swiper-slide table {\n  margin: 0 auto;\n}\n.swiper-slide table img {\n  width: 38px;\n}\n\n.seats-info {\n  background-color: #f5f5f5;\n  position: fixed;\n  width: 100%;\n  height: 95px;\n  border-bottom: 0.4px solid #ccc;\n  z-index: 10;\n}\n.seats-info.no-seg {\n  height: 55px;\n}\n.seats-info .seat-info {\n  padding: 5px;\n}\n.seats-info img {\n  width: 15px;\n  height: auto;\n  margin: 0 3px 0 0;\n}\n.seats-info ion-col {\n  padding: 1px;\n}\n\n.bottom {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 0;\n  background: #ffffff;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  box-shadow: 5px 10px 10px 10px #888888;\n}\n.bottom .label {\n  display: block;\n  margin-bottom: 3px;\n}\n.bottom .seats {\n  width: 50%;\n}\n.bottom .seats .seat-lbl {\n  font-size: 13px;\n  color: #4a4a4a;\n}\n.bottom .seats .seat-val {\n  margin: 0 0 0 5px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom .pay {\n  width: 25%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n}\n.bottom .price {\n  width: 25%;\n  height: 100%;\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--iconsAndButtonsColor);\n}\n.bottom .nt-txt {\n  font-size: 8px;\n}\n.bottom .seat-numbers {\n  height: 100%;\n  width: 50%;\n  display: block;\n}\n.bottom .amount {\n  height: 100%;\n  width: 50%;\n}\n.bottom .continue {\n  width: 15vw;\n  height: 15vw;\n  max-width: 45px;\n  max-height: 45px;\n  position: absolute;\n  bottom: 104%;\n  right: 12px;\n  border-radius: 50%;\n  transition: all linear 0.4s;\n  transition-delay: 0.2s;\n}\n.bottom .continue ion-icon {\n  color: #fff;\n  font-size: 4rem;\n  margin-left: 4px;\n}\n.bottom .continue.down {\n  width: 1vw;\n  height: 1vw;\n  bottom: -104%;\n}\n.bottom .continue.up {\n  width: 45px;\n  height: 45px;\n  bottom: 4%;\n}\n.bottom div {\n  padding: 2px 0;\n}\n.bottom .success {\n  color: #b8e986;\n}\n\n.seabird-seat-select {\n  color: black;\n  font-weight: bold;\n}\n\n.seabirdPay {\n  height: 42px;\n  width: 94%;\n  padding-bottom: 0px;\n  margin-left: 12px;\n  border-radius: 22px;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n  position: relative;\n  bottom: 2%;\n}\n\n.bottom.down {\n  bottom: -100px;\n}\n\n.bottom.up {\n  bottom: 0;\n  z-index: 20;\n}\n\n.stages {\n  margin-top: 15px;\n}\n.stages .boarding-stage {\n  border: 0.4px solid #ddd;\n  font-size: 1.3rem;\n  box-shadow: 1px 1px 2px rgba(240, 86, 48, 0.31);\n}\n.stages .boarding-stage .value {\n  padding: 11px 0;\n  font-size: 15px;\n}\n.stages .error {\n  border-color: #f00 !important;\n}\n.stages .label {\n  width: 80px;\n}\n\n.no-service {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin-top: 0;\n}\n.no-service p {\n  text-align: center;\n  flex: 1;\n}\n\n.hd-ln-1 {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 25px 0 0;\n}\n\n.hd-ln-2 {\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 2;\n  text-align: center;\n  margin: 0 25px 0 0;\n}\n\n.seg-btn {\n  width: 196px;\n  margin: 16px 0 0;\n  border-radius: 4px;\n}\n.seg-btn ion-segment {\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn ion-segment-button {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px !important;\n  text-transform: capitalize;\n}\n.seg-btn ion-segment-button.segment-button-checked {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.seaBird-seg-btn {\n  width: 350px;\n  height: 38px;\n  border-radius: 4px;\n}\n.seaBird-seg-btn ion-segment {\n  height: 38px;\n  border-radius: 4px;\n}\n.seaBird-seg-btn ion-segment-button {\n  font-size: 14px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px !important;\n  text-transform: capitalize;\n}\n.seaBird-seg-btn ion-segment-button.segment-button-checked {\n  border-bottom: 2px solid var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.err-msg {\n  color: #ed3237;\n  font-weight: bolder;\n  margin: 50px 0 0;\n}\n\nion-bottom-drawer {\n  transition: all 0.25s ease-in-out 0s;\n  border-radius: 10px;\n  touch-action: none;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transform: translateY(15px);\n}\n\n.btn-price-filter {\n  height: 24px;\n  width: auto;\n  min-width: 60px;\n  border-radius: 4px;\n  border: solid 1px #979797;\n  background-color: #ffffff;\n  font-size: 12px;\n  text-align: center;\n  margin: 18px 5px 0;\n  color: #4a4a4a;\n  padding: 5px 5px;\n}\n\n.btn-price-filter.select {\n  background-color: #4a4a4a !important;\n  font-weight: bolder !important;\n  color: #ffffff !important;\n}\n\n.seabird-btn-price-filter {\n  height: 24px;\n  width: auto;\n  min-width: 60px;\n  border-radius: 4px;\n  border: solid 1px #979797;\n  background: #DCEEFF;\n  font-size: 12px;\n  text-align: center;\n  margin: 0px 5px;\n  color: #4a4a4a;\n  padding: 5px 5px;\n}\n\n.seabird-btn-price-filter.select {\n  background: #F8D2D6 !important;\n  font-weight: bolder !important;\n  color: #000000 !important;\n}\n\n.info-btn-align {\n  position: absolute;\n  right: 5px;\n}\n\n.legend-box {\n  border-radius: 4px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n}\n\n.whole {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  padding: 25px;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.info-btn-align-2 {\n  position: absolute;\n  right: 2%;\n  top: 4%;\n}\n\n.legend-close {\n  margin: 15px;\n  font-size: 30px;\n  margin: 3px 2px 2px;\n  color: white;\n  font-weight: bolder;\n}\n\n.bg-close {\n  display: block;\n  background: rgba(100, 100, 100, 0.5);\n  border-radius: 100px;\n  margin: 10px;\n}\n\n.legend-seat {\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  border: solid 1px #7e7e8c;\n  font-size: 10px;\n  font-weight: bold;\n  color: #4a4a4a;\n  margin: 5px;\n}\n\n.legend-txt {\n  font-size: 14px;\n  color: #4a4a4a;\n  margin: 5px;\n  text-align: center;\n  width: auto;\n}\n\n.opacity-filter {\n  opacity: 0.25;\n}\n\n.ion-toolbar {\n  background: #FFFFFF !important;\n}\n\n.setseatType {\n  padding: 6px 10px !important;\n  max-width: 175px;\n  color: #00498C;\n  /* font-family: Inter; */\n  font-size: 12px;\n  /* font-style: normal; */\n  font-weight: 500;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.setseatTypeExit {\n  padding: 6px 10px !important;\n  max-width: 175px;\n  color: #343434;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.themeone-seat-layout-text {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 26px;\n  color: #191966;\n}\n\n.themeone-seat-segment {\n  width: -webkit-fill-available;\n}\n\n.themeone-btn-price-filter {\n  height: 24px;\n  width: auto;\n  min-width: 60px;\n  border-radius: 10px;\n  border: solid 1px #DFDFDF;\n  background-color: #ffffff;\n  font-size: 12px;\n  text-align: center;\n  margin: 18px 5px 0;\n  color: #191966;\n  padding: 5px 5px;\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px; /* 183.333% */\n}\n\n.themeone-btn-price-filter.select {\n  background-color: #FFBD16 !important;\n  font-weight: bolder !important;\n  color: #333333 !important;\n}\n\n.themeone-bottom {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: #191966;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-seats {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.themeone-seats .themeone-seat-lbl {\n  font-size: 12px;\n  color: #fff;\n}\n.themeone-seats .themeone-seat-val {\n  margin: 0 0 0 5px;\n  font-size: 12px;\n  font-weight: bolder;\n  color: #fff;\n}\n\n.themeone-totalvalue {\n  font-size: 16px;\n  color: #fff;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n}\n\n.themeone-select-pickup-btn {\n  --background: #FFBD16 !important;\n  color: #191966;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.themeone-viewbreakup {\n  color: #FFBD16;\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n}\n\n.theme-1-center .segment-button-checked {\n  --indicator-color: #191966 !important;\n  --indicator-color-checked: #191966 !important;\n  color: #191966 !important;\n}\n\n.theme-1-segmentLabel {\n  font-size: 14px;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.themeone-seat-slide {\n  margin: 25px auto;\n  height: auto;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n.themeone-seat-slide .seat-card-bg {\n  padding: 57px 0 16px;\n  border-radius: 4px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: auto;\n  height: auto;\n  min-width: 70%;\n  padding-left: 16px;\n}\n\n.themeone-legend-seat {\n  width: 32px;\n  height: 32px;\n  border-radius: 0px;\n  border: solid 1px #7e7e8c;\n  font-size: 10px;\n  font-weight: bold;\n  color: #4a4a4a;\n  margin: 5px;\n}\n\n.themeone-legend-txt {\n  font-size: 14px;\n  color: #4a4a4a;\n  margin: 5px;\n  text-align: center;\n  width: 200px;\n}\n\n.seabird_fare {\n  color: #00904B;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.seabird_fare_row {\n  border: 1px solid #626262;\n  border-radius: 10px;\n  background: white;\n  padding: 10px 5px;\n  margin-bottom: 12px;\n}\n\n.seabirdPayContainer {\n  padding-bottom: 20px;\n}\n\n.seabird_seatNum {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.ourbus-scroll-container {\n  width: 100%;\n  overflow-x: auto;\n  display: block;\n  margin-top: 12px;\n}\n\n.ourbus-scroll-content {\n  display: flex;\n  flex-wrap: nowrap;\n  width: max-content;\n  margin-top: 15px;\n}\n\n.ourbustheme ion-row {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.ourbus-seat-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.ourbus-legend-seat {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n}\n\n.ourbus-legend-txt {\n  font-size: 12px;\n}\n\n.ourbus_btn {\n  height: 50px;\n  box-shadow: none;\n  --border-radius: 8px;\n  font-size: 18px;\n  font-weight: 700;\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  --background-activated: var(--iconsAndButtonsColor) !important;\n}\n\n.ourbus-hd-ln {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #747474;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n.ourbus-inline-icon {\n  width: 15px;\n  height: 15px;\n  margin: 0 5px;\n  vertical-align: middle;\n}\n\n.singleview_layout #mySlider {\n  width: 94% !important;\n}\n.singleview_layout #lower {\n  width: 57% !important;\n  margin: 25px 0px;\n}\n.singleview_layout #upper {\n  width: 57% !important;\n  margin: 25px 0px;\n}\n\n.lower_icon {\n  width: 32px;\n  height: 28px;\n  top: 23px;\n  filter: invert(46%) sepia(6%) saturate(12%) hue-rotate(324deg) brightness(98%) contrast(84%);\n}\n\n.upper_icon {\n  width: 32px;\n  height: 28px;\n  top: 23px;\n  filter: invert(46%) sepia(6%) saturate(12%) hue-rotate(324deg) brightness(98%) contrast(84%);\n  visibility: hidden;\n}\n\n.our-bus-svg-text {\n  position: absolute;\n  top: 60%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  font-size: 10px;\n  color: #000;\n}\n\n.our-bus-svg-text-slepper {\n  position: absolute;\n  top: 60%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  font-size: 10px;\n  color: #000;\n}\n\n.ourbustheme .horizontal {\n  transform: rotate(270deg);\n  margin-top: 0px;\n  margin-left: -20px;\n}\n.ourbustheme .horizontal .our-bus-svg-text {\n  transform: rotate(45deg);\n  margin-top: 0px;\n  margin-left: -12px;\n}\n\n.drawer-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 0;\n}\n\n.pull-icon {\n  font-size: 24px;\n  color: #666; /* Adjust color as needed */\n}\n\n.seat_text {\n  text-transform: uppercase;\n  color: #747474;\n}\n\nion-segment-button {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n}"],
  encapsulation: 2
});

/***/ }),

/***/ 37762:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 61636);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ 2920).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 92920)).then(m => new m.GeolocationWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61636:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 64511:
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function (window, document, exportName, undefined) {
  'use strict';

  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;

  /**
   * set a timeout with a given scope
   * @param {Function} fn
   * @param {Number} timeout
   * @param {Object} context
   * @returns {number}
   */
  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }

  /**
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }

  /**
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }

  /**
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */
  function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function () {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);
      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }
      return method.apply(this, arguments);
    };
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */
  var assign;
  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  } else {
    assign = Object.assign;
  }

  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */
  var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }, 'extend', 'Use `assign`.');

  /**
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */
  var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');

  /**
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */
  function inherit(child, base, properties) {
    var baseP = base.prototype,
      childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      assign(childP, properties);
    }
  }

  /**
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }

  /**
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }

  /**
   * use the val2 when val1 is undefined
   * @param {*} val1
   * @param {*} val2
   * @returns {*}
   */
  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }

  /**
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }

  /**
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }

  /**
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  /**
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }

  /**
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }

  /**
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }

  /**
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }

  /**
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }

  /**
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */
  function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }

  /**
   * get a unique id
   * @returns {number} uniqueId
   */
  var _uniqueId = 1;
  function uniqueId() {
    return _uniqueId++;
  }

  /**
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */
  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }
  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = 'ontouchstart' in window;
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];

  /**
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }
  Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function () {},
    /**
     * bind the events
     */
    init: function () {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    /**
     * unbind the events
     */
    destroy: function () {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };

  /**
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */
  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new Type(manager, inputHandler);
  }

  /**
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }

  /**
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }

  /**
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
      deltaTime = input.timeStamp - last.timeStamp,
      velocity,
      velocityX,
      velocityY,
      direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }

  /**
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */
  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }

  /**
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */
  function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
      y = 0,
      i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }

  /**
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }

  /**
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }

  /**
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }

  /**
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
      y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  /**
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }

  /**
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }
  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

  /**
   * Mouse events input
   * @constructor
   * @extends Input
   */
  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
  }
  inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type];

      // on start we want to have the left mouse button down
      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }
      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      }

      // mouse must be down
      if (!this.pressed) {
        return;
      }
      if (eventType & INPUT_END) {
        this.pressed = false;
      }
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }
  });
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  };

  // in IE10 the pointer types is defined as an enum
  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

  // IE10 has prefixed support, and case-sensitive
  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }

  /**
   * Pointer events input
   * @constructor
   * @extends Input
   */
  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType == INPUT_TYPE_TOUCH;

      // get index of the event in the store
      var storeIndex = inArray(store, ev.pointerId, 'pointerId');

      // start and mouse must be down
      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      }

      // it not found, so the pointer hasn't been down (so it's probably a hover)
      if (storeIndex < 0) {
        return;
      }

      // update the event in the store
      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });
      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    }
  });
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Touch events input
   * @constructor
   * @extends Input
   */
  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }
  inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

      // should we handle the touch events?
      if (type === INPUT_START) {
        this.started = true;
      }
      if (!this.started) {
        return;
      }
      var touches = normalizeSingleTouches.call(this, ev, type);

      // when done, reset the started state
      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }
  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

  /**
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */
  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }
  inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);
      if (!touches) {
        return;
      }
      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });

  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */
  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
      targetTouches,
      changedTouches = toArray(ev.changedTouches),
      changedTargetTouches = [],
      target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }

      // cleanup removed touches
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [
    // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }

  /**
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */

  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
        isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
      if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
        return;
      }

      // when we're in a touch event, record touches to  de-dupe synthetic mouse event
      if (isTouch) {
        recordTouches.call(this, inputEvent, inputData);
      } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
        return;
      }
      this.callback(manager, inputEvent, inputData);
    },
    /**
     * remove the event listeners
     */
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }
  function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];
    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.lastTouches.push(lastTouch);
      var lts = this.lastTouches;
      var removeLastTouch = function () {
        var i = lts.indexOf(lastTouch);
        if (i > -1) {
          lts.splice(i, 1);
        }
      };
      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }
  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX,
      y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x),
        dy = Math.abs(y - t.y);
      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }
    return false;
  }
  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

  // magical touchAction value
  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();

  /**
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function (value) {
      // find out the touch-action by the event handlers
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }
      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }
      this.actions = value.toLowerCase().trim();
    },
    /**
     * just re-set the touchAction value
     */
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function () {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },
    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function (input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection;

      // if the touch action did prevented once this session
      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }
      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
      if (hasNone) {
        //do not prevent defaults if this is a tap gesture

        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;
        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }
      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }
      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    },
    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function (srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };

  /**
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */
  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }
  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }

  /**
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */
  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;

  /**
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */
  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},
    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function (options) {
      assign(this.options, options);

      // also update the touchAction, in case something changed about the directions/enabled state
      this.manager && this.manager.touchAction.update();
      return this;
    },
    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }
      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }
      return this;
    },
    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },
    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }
      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }
      return this;
    },
    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function (otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);
      if (index > -1) {
        this.requireFail.splice(index, 1);
      }
      return this;
    },
    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function (otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },
    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function (input) {
      var self = this;
      var state = this.state;
      function emit(event) {
        self.manager.emit(event, input);
      }

      // 'panstart' and 'panmove'
      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      }

      // panend and pancancel
      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    },
    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function (input) {
      if (this.canEmit()) {
        return this.emit(input);
      }
      // it's failing anyway
      this.state = STATE_FAILED;
    },
    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function () {
      var i = 0;
      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }
        i++;
      }
      return true;
    },
    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign({}, inputData);

      // is is enabled and allow recognizing?
      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      }

      // reset when we've reached the end
      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }
      this.state = this.process(inputDataClone);

      // the recognizer has recognized a gesture
      // so trigger an event
      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },
    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function (inputData) {},
    // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function () {},
    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function () {}
  };

  /**
   * get a usable string, used as event postfix
   * @param {Const} state
   * @returns {String} state
   */
  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }

  /**
   * direction cons to string
   * @param {Const} direction
   * @returns {String}
   */
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }

  /**
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }

  /**
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }
  inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
      /**
       * @type {Number}
       * @default 1
       */
      pointers: 1
    },
    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function (input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function (input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input);

      // on cancel input and we've recognized before, return STATE_CANCELLED
      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }
        return state | STATE_CHANGED;
      }
      return STATE_FAILED;
    }
  });

  /**
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function () {
      var direction = this.options.direction;
      var actions = [];
      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }
      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }
      return actions;
    },
    directionTest: function (input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY;

      // lock to axis?
      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }
      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function (input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    },
    emit: function (input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);
      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */
  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function (input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }
      this._super.emit.call(this, input);
    }
  });

  /**
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */
  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9 // a minimal movement is ok, but keep it low
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_AUTO];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input;

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function () {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }
      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */
  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });

  /**
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */
  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }
  inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function () {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function (input) {
      var direction = this.options.direction;
      var velocity;
      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }
      return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function (input) {
      var direction = directionStr(input.offsetDirection);
      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }
      this.manager.emit(this.options.event, input);
    }
  });

  /**
   * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */
  function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10 // a multi-tap can be a bit off the initial position
    },
    getTouchAction: function () {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function (input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();
      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      }

      // we only allow little movement
      // and we've reached an end event, so a tap is possible
      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }
        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;
        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }
        this._input = input;

        // if tap count matches we have recognized it,
        // else it has began recognizing...
        var tapCount = this.count % options.taps;
        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }
      return STATE_FAILED;
    },
    failTimeout: function () {
      this._timer = setTimeoutContext(function () {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });

  /**
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }

  /**
   * @const {string}
   */
  Hammer.VERSION = '2.0.7';

  /**
   * default settings
   * @namespace
   */
  Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,
    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,
    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,
    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,
    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,
    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
    // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
    [RotateRecognizer, {
      enable: false
    }], [PinchRecognizer, {
      enable: false
    }, ['rotate']], [SwipeRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }], [PanRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],
    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: 'none',
      /**
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: 'none',
      /**
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: 'none',
      /**
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: 'none',
      /**
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: 'none',
      /**
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;

  /**
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */
  function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
      var recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function (options) {
      assign(this.options, options);

      // Options that need a little more setup
      if (options.touchAction) {
        this.touchAction.update();
      }
      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }
      return this;
    },
    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function (force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },
    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function (inputData) {
      var session = this.session;
      if (session.stopped) {
        return;
      }

      // run the touch-action polyfill
      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers;

      // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`
      var curRecognizer = session.curRecognizer;

      // reset when the last recognizer is recognized
      // or when we're in a new session
      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        curRecognizer = session.curRecognizer = null;
      }
      var i = 0;
      while (i < recognizers.length) {
        recognizer = recognizers[i];

        // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.
        if (session.stopped !== FORCED_STOP && (
        // 1
        !curRecognizer || recognizer == curRecognizer ||
        // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        }

        // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer
        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }
        i++;
      }
    },
    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function (recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }
      var recognizers = this.recognizers;
      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }
      return null;
    },
    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function (recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      }

      // remove existing
      var existing = this.get(recognizer.options.event);
      if (existing) {
        this.remove(existing);
      }
      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },
    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function (recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }
      recognizer = this.get(recognizer);

      // let's make sure this recognizer exists
      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, recognizer);
        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function (events, handler) {
      if (events === undefined) {
        return;
      }
      if (handler === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },
    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function (events, handler) {
      if (events === undefined) {
        return;
      }
      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },
    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function (event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      }

      // no handlers, so skip it all
      var handlers = this.handlers[event] && this.handlers[event].slice();
      if (!handlers || !handlers.length) {
        return;
      }
      data.type = event;
      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };
      var i = 0;
      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },
    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function () {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };

  /**
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */
  function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
      return;
    }
    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);
      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || '';
      }
    });
    if (!add) {
      manager.oldCssProps = {};
    }
  }

  /**
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  });

  // this prevents errors when Hammer is loaded in the presence of an AMD
  //  style loader but by script tag, not by the loader.
  var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
  freeGlobal.Hammer = Hammer;
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Hammer;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, document, 'Hammer');

/***/ }),

/***/ 64698:
/*!***********************************************************!*\
  !*** ./src/app/seat-layout/seat-layout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeatLayoutPageRoutingModule: () => (/* binding */ SeatLayoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _seat_layout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seat-layout.page */ 10668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _SeatLayoutPageRoutingModule;




const routes = [{
  path: '',
  component: _seat_layout_page__WEBPACK_IMPORTED_MODULE_0__.SeatLayoutPage
}];
class SeatLayoutPageRoutingModule {}
_SeatLayoutPageRoutingModule = SeatLayoutPageRoutingModule;
_SeatLayoutPageRoutingModule.ɵfac = function SeatLayoutPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SeatLayoutPageRoutingModule)();
};
_SeatLayoutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _SeatLayoutPageRoutingModule
});
_SeatLayoutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SeatLayoutPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);