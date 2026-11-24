"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8176],{

/***/ 48176
/*!***************************************************************!*\
  !*** ./src/app/auto-signup-dialog/auto-signup-dialog.page.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSignupDialogPage: () => (/* binding */ AutoSignupDialogPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);

var _AutoSignupDialogPage;












function AutoSignupDialogPage_div_1_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_ion_col_13_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.editField("name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.name || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "././assets/icon/ic_edit.svg");
  }
}
function AutoSignupDialogPage_div_1_ion_col_14_ion_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AutoSignupDialogPage_div_1_ion_col_14_ion_input_1_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.name, $event) || (ctx_r2.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.name);
  }
}
function AutoSignupDialogPage_div_1_ion_col_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AutoSignupDialogPage_div_1_ion_col_14_ion_input_1_Template, 1, 1, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["name"]);
  }
}
function AutoSignupDialogPage_div_1_ion_col_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_ion_col_18_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.editField("phone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.phone || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "././assets/icon/ic_edit.svg");
  }
}
function AutoSignupDialogPage_div_1_ion_col_19_ion_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AutoSignupDialogPage_div_1_ion_col_19_ion_input_1_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.phone, $event) || (ctx_r2.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AutoSignupDialogPage_div_1_ion_col_19_ion_input_1_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.phone);
  }
}
function AutoSignupDialogPage_div_1_ion_col_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AutoSignupDialogPage_div_1_ion_col_19_ion_input_1_Template, 1, 1, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["phone"]);
  }
}
function AutoSignupDialogPage_div_1_ion_col_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_ion_col_23_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.editField("email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.email || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "././assets/icon/ic_edit.svg");
  }
}
function AutoSignupDialogPage_div_1_ion_col_24_ion_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AutoSignupDialogPage_div_1_ion_col_24_ion_input_1_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.email, $event) || (ctx_r2.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.email);
  }
}
function AutoSignupDialogPage_div_1_ion_col_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AutoSignupDialogPage_div_1_ion_col_24_ion_input_1_Template, 1, 1, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["email"]);
  }
}
function AutoSignupDialogPage_div_1_ion_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_ion_button_27_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onSkip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Skip");
  }
}
function AutoSignupDialogPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "ion-row", 4)(2, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row")(7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "ion-row", 4)(11, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AutoSignupDialogPage_div_1_ion_col_13_Template, 4, 2, "ion-col", 11)(14, AutoSignupDialogPage_div_1_ion_col_14_Template, 2, 1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row", 4)(16, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AutoSignupDialogPage_div_1_ion_col_18_Template, 4, 2, "ion-col", 11)(19, AutoSignupDialogPage_div_1_ion_col_19_Template, 2, 1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row", 4)(21, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AutoSignupDialogPage_div_1_ion_col_23_Template, 4, 2, "ion-col", 11)(24, AutoSignupDialogPage_div_1_ion_col_24_Template, 2, 1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-row", 13)(26, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AutoSignupDialogPage_div_1_ion_button_27_Template, 2, 1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-col", 14)(29, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 17)(32, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_1_Template_ion_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onSignUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editing["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editing["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editing["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showSkipButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Sign Up & Proceed");
  }
}
function AutoSignupDialogPage_div_2_ion_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_2_ion_button_18_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.signUpUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " LOGIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AutoSignupDialogPage_div_2_ion_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_2_ion_button_19_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.loginOtpUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " LOGIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AutoSignupDialogPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "ion-row", 4)(2, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AutoSignupDialogPage_div_2_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.modalCtrl.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row")(9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 4)(12, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "OTP:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 22)(15, "ion-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AutoSignupDialogPage_div_2_Template_ion_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.sendOtp, $event) || (ctx_r2.sendOtp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AutoSignupDialogPage_div_2_ion_button_18_Template, 2, 0, "ion-button", 37)(19, AutoSignupDialogPage_div_2_ion_button_19_Template, 2, 0, "ion-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("OTP Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", "Please enter OTP received to ", "", ctx_r2.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.sendOtp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isSignUpOTPShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isLoginOTPShown);
  }
}
class AutoSignupDialogPage {
  constructor(router, modalCtrl, apiFactory, util, loader, commonStorage, authenticationService, commonService, globalData, navCtrl) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.apiFactory = apiFactory;
    this.util = util;
    this.loader = loader;
    this.commonStorage = commonStorage;
    this.authenticationService = authenticationService;
    this.commonService = commonService;
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.icon = '';
    this.title = '';
    this.message = '';
    this.name = '';
    this.phone = '';
    this.email = '';
    this.sendOtp = '';
    this.showSkipButton = true;
    this.loginType = '';
    this.editing = {
      name: false,
      phone: false,
      email: false
    };
    this.isOtpShown = false;
    this.otpKey = '';
    this.isSignUpOTPShown = false;
    this.isLoginOTPShown = false;
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem("metaData");
    this.configureDialog();
  }
  configureDialog() {
    if (this.loginType === 'Auto') {
      this.showSkipButton = true;
      this.icon = 'assets/icon/ic_right_icon.svg';
      this.title = 'Create Login';
      this.message = `Do you want to create login for ` + this.metaData.head_office_name + ` with the details provided by you.` + `\n\nYou can edit details if required.\nSelect desired option to proceed.`;
    } else if (this.loginType === 'Forced') {
      this.showSkipButton = false;
      this.icon = 'assets/icon/error-svgrepo-com.svg';
      this.title = 'Login / Signup';
      this.message = `Please login to proceed for booking.\n\nIf no login is present, create an account with your booking details.`;
    } else {
      this.title = 'Info';
      this.icon = 'assets/icon/info.svg';
      this.message = 'No login type specified.';
    }
  }
  editField(field) {
    this.editing[field] = true;
    if (this.editing[field]) {
      this.setFocusOnField(field);
    }
  }
  onSkip() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.ValidateField()) {
        _this.modalCtrl.dismiss({
          action: 'skip'
        });
      }
    })();
  }
  onLogin() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.ValidateField()) {
        _this2.loader.showLoadingDefault();
        _this2.apiFactory.loginwithOTP(_this2.phone).subscribe(result => {
          _this2.loader.hideLoadingDefault();
          if (result.code == 200) {
            _this2.util.showToast("OTP sent successfully");
            _this2.isOtpShown = true;
            _this2.isLoginOTPShown = true;
            _this2.setFocusOnField('otp');
            _this2.loginOtpKey = result.body.key;
          } else {
            _this2.util.showToast(result.message);
            _this2.modalCtrl.dismiss();
          }
        }, error => {
          _this2.loader.hideLoadingDefault();
        });
      }
    })();
  }
  onSignUp() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.ValidateField()) {
        _this3.loader.showLoadingDefault();
        _this3.apiFactory.forcedLoginWithOtp(_this3.phone).subscribe(result => {
          _this3.loader.hideLoadingDefault();
          if (result.code == 200) {
            _this3.util.showToast("OTP sent successfully");
            _this3.isOtpShown = true;
            _this3.otpKey = result.otp_key;
            _this3.isSignUpOTPShown = true;
            _this3.setFocusOnField('otp');
          } else {
            var _result$body;
            _this3.util.showToast((result === null || result === void 0 ? void 0 : result.message) || (result === null || result === void 0 || (_result$body = result.body) === null || _result$body === void 0 ? void 0 : _result$body.message));
          }
        }, error => {
          _this3.loader.hideLoadingDefault();
        });
      }
    })();
  }
  isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  ValidateField() {
    if (!this.name) {
      this.util.showToast('Please enter name');
      if (!this.editing['name']) this.editing['name'] = true;
      this.setFocusOnField('name');
      return false;
    } else if (this.phone && this.phone.length < 10 || !this.phone) {
      this.util.showToast('Please enter a valid phone number');
      if (!this.editing['phone']) this.editing['phone'] = true;
      this.setFocusOnField('phone');
      return false;
    } else if (this.email && !this.isEmailValid(this.email) || !this.email) {
      this.util.showToast('Please enter a valid email');
      if (!this.editing['email']) this.editing['email'] = true;
      this.setFocusOnField('email');
      return false;
    } else {
      return true;
    }
  }
  signUpUser() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.isSignUpOTPShown && _this4.sendOtp) {
        let user = {};
        user = {
          "email": _this4.email,
          "password": _this4.phone,
          "password_confirmation": _this4.phone,
          "first_name": _this4.name,
          "mobile_number": _this4.phone,
          "otp_key": _this4.otpKey,
          "otp": _this4.sendOtp
        };
        let signUpdata = {};
        signUpdata = {
          "user": user
          //  "is_mobile": true
        };
        _this4.loader.showLoadingDefault();
        _this4.authenticationService.signup(signUpdata, '').subscribe(result => {
          _this4.loader.hideLoadingDefault();
          try {
            if (result !== null && result !== void 0 && result.success) {
              _this4.authenticationService.login(_this4.email, _this4.phone).subscribe(result => {
                // if(this.metaData.msiteFolder == 'ourbustheme'){
                //   this.onUserLogin(result.body.customer.first_name,result.body.customer.last_name,result.body.customer.email,result.body.customer.mobile_number);
                // }
                _this4.globalData.IS_GST = false;
                _this4.loader.hideLoadingDefault();
                if (result !== null && result !== void 0 && result.success) {
                  // this.commonService.gTrack('login', 'Login successful');
                  _this4.util.showToast('Login Success', 'center');
                  // this.loader.showLoadingDefault();
                  // this.apiFactory.getMetaAppData()
                  //   .subscribe(
                  //     loginResponse => {
                  //       if (!loginResponse.code) {
                  //         let localData = loginResponse[0];
                  //         this.commonService.setMetaApp(localData);
                  //       }
                  //     }
                  //   );
                  let body = result.body;
                  let token = body.authentication_token || body.customer.authentication_token;
                  // localStorage.setItem('tokenNum',token);
                  localStorage.setItem('currentUser', JSON.stringify({
                    email: body.customer.email,
                    token: token,
                    userFull: body.customer,
                    user: _this4.authenticationService.setUser(body.customer)
                  }));
                  _this4.modalCtrl.dismiss({
                    action: 'proceed'
                  });
                } else {
                  _this4.util.showToast(result.body.message);
                }
              }, error => {
                // this.commonService.gTrack('login', 'Login failed');
                _this4.loader.hideLoadingDefault();
                _this4.util.showAlertMessage("Failed", "Login failed try again later");
              });
            } else {
              _this4.util.showAlertMessage('FAILED', result.body.message);
            }
          } catch (e) {}
        }, error => {
          _this4.loader.hideLoadingDefault();
          _this4.util.showAlertMessage('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
        });
      } else if (_this4.isLoginOTPShown && _this4.sendOtp) {
        _this4.authenticationService.login(_this4.email, _this4.phone).subscribe(result => {
          // if(this.metaData.msiteFolder == 'ourbustheme'){
          //   this.onUserLogin(result.body.customer.first_name,result.body.customer.last_name,result.body.customer.email,result.body.customer.mobile_number);
          // }
          _this4.globalData.IS_GST = false;
          _this4.loader.hideLoadingDefault();
          if (result !== null && result !== void 0 && result.success) {
            // this.commonService.gTrack('login', 'Login successful');
            _this4.util.showToast('Login Success', 'center');
            _this4.loader.showLoadingDefault();
            // this.apiFactory.getMetaAppData()
            //   .subscribe(
            //     loginResponse => {
            //     this.loader.hideLoadingDefault();
            //       if (!loginResponse.code) {
            //         let localData = loginResponse[0];
            //         this.commonService.setMetaApp(localData);
            //       }
            //     }
            //   );
            let body = result.body;
            let token = body.authentication_token || body.customer.authentication_token;
            // localStorage.setItem('tokenNum',token);
            localStorage.setItem('currentUser', JSON.stringify({
              email: body.customer.email,
              token: token,
              userFull: body.customer,
              user: _this4.authenticationService.setUser(body.customer)
            }));
            _this4.modalCtrl.dismiss({
              action: 'proceed'
            });
            _this4.modalCtrl.dismiss({
              action: 'proceed'
            });
          } else {
            _this4.util.showToast(result.body.message);
          }
        }, error => {
          // this.commonService.gTrack('login', 'Login failed');
          _this4.loader.hideLoadingDefault();
          _this4.util.showAlertMessage("Failed", "Login failed try again later");
        });
      } else {
        if (!_this4.sendOtp && (_this4.isLoginOTPShown || _this4.isSignUpOTPShown)) {
          _this4.util.showToast('Please enter OTP');
        }
      }
    })();
  }
  resendOtp() {
    if (this.isLoginOTPShown) {
      this.onLogin();
    } else if (this.isSignUpOTPShown) {
      this.onSignUp();
    }
  }
  onPhoneChange(event) {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    value = value.substring(0, 10);
    this.phone = value;
  }
  setFocusOnField(field) {
    setTimeout(() => {
      var _document$getElementB;
      const ele = (_document$getElementB = document.getElementById(field)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getElementsByTagName('input')[0];
      ele === null || ele === void 0 || ele.focus();
    }, 500);
  }
  loginOtpUser() {
    var _this$loginOtpKey;
    if (!this.sendOtp) {
      this.util.showToast("Please enter OTP");
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.validateOtpLogin(this.sendOtp, (_this$loginOtpKey = this.loginOtpKey) !== null && _this$loginOtpKey !== void 0 ? _this$loginOtpKey : this.loginOtpKey, this.phone).subscribe(result => {
      this.loader.hideLoadingDefault();
      if (result !== null && result !== void 0 && result.success || (result === null || result === void 0 ? void 0 : result.code) == 200) {
        this.util.showToast("Login Success", "center");
        let body = result.body;
        let token = body.authentication_token || body.customer.authentication_token;
        this.authenticationService.token = token;
        // localStorage.setItem('tokenNum',token);
        localStorage.setItem('currentUser', JSON.stringify({
          email: body.email,
          token: token,
          userFull: body,
          user: this.authenticationService.setUser(body)
        }));
        this.modalCtrl.dismiss({
          action: "proceed"
        });
      } else {
        var _result$body2;
        this.util.showToast((result === null || result === void 0 ? void 0 : result.message) || (result === null || result === void 0 || (_result$body2 = result.body) === null || _result$body2 === void 0 ? void 0 : _result$body2.message) || "Invalid OTP");
      }
    }, error => {
      this.loader.hideLoadingDefault();
      this.util.showToast("Login failed. Try again later.");
    });
  }
}
_AutoSignupDialogPage = AutoSignupDialogPage;
_AutoSignupDialogPage.ɵfac = function AutoSignupDialogPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoSignupDialogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_8__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_9__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_11__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController));
};
_AutoSignupDialogPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AutoSignupDialogPage,
  selectors: [["app-auto-signup-dialog"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[1, "ion-padding", 3, "scrollY"], ["class", "dialog-container", "style", "height: 100%;", 4, "ngIf"], ["class", "dialog-container", 4, "ngIf"], [1, "dialog-container", 2, "height", "100%"], [1, "row_flex"], ["size", "1.5"], [1, "dialog-img", 3, "src"], ["size", "10.5", 2, "font-weight", "bold", "color", "#7e7e8c"], [1, "dialog-message"], [1, "scrollable-fields"], ["size", "3", 1, "label"], ["size", "9", 3, "click", 4, "ngIf"], ["size", "9", 4, "ngIf"], ["size", "12", 1, "button-row"], ["size", "2"], ["fill", "clear", "class", "skip", 3, "click", 4, "ngIf"], ["fill", "clear", 1, "login", 3, "click"], ["size", "8"], ["fill", "clear", 1, "signUp", 2, "padding-left", "20px", 3, "click"], ["size", "9", 3, "click"], [1, "filled_details"], [3, "src"], ["size", "9"], ["id", "name", "type", "text", "placeholder", "Enter Name", "label", "Name", "labelPlacement", "floating", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "name", "type", "text", "placeholder", "Enter Name", "label", "Name", "labelPlacement", "floating", 3, "ngModelChange", "ngModel"], ["id", "phone", "type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "Enter Phone Number", "label", "Mobile Number", "labelPlacement", "floating", 3, "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["id", "phone", "type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "Enter Phone Number", "label", "Mobile Number", "labelPlacement", "floating", 3, "ngModelChange", "keyup", "ngModel"], ["id", "email", "type", "email", "placeholder", "Enter Email", "label", "Email", "labelPlacement", "floating", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["id", "email", "type", "email", "placeholder", "Enter Email", "label", "Email", "labelPlacement", "floating", 3, "ngModelChange", "ngModel"], ["fill", "clear", 1, "skip", 3, "click"], [1, "dialog-container"], ["src", "assets/icon/ic_right_icon.svg", 1, "dialog-img"], ["size", "9", 2, "font-weight", "bold", "color", "#7e7e8c"], ["size", "1.5", 3, "click"], ["src", "assets/icon/Cross.svg", 1, "dialog-img"], ["id", "otp", "type", "tel", "label", "OTP", "labelPlacement", "floating", "placeholder", "Enter OTP", 3, "ngModelChange", "ngModel"], ["size", "12", 2, "text-align", "end"], ["fill", "clear", "class", "verify", 3, "click", 4, "ngIf"], ["fill", "clear", 1, "verify", 3, "click"]],
  template: function AutoSignupDialogPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AutoSignupDialogPage_div_1_Template, 34, 12, "div", 1)(2, AutoSignupDialogPage_div_2_Template, 20, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOtpShown);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOtpShown);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor],
  styles: [".dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.scrollable-fields[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 350px); \n\n  flex-grow: 1;\n  \n\n}\n@media (min-height: 800px) {\n  .scrollable-fields[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 300px);\n  }\n}\n@media (min-height: 1000px) {\n  .scrollable-fields[_ngcontent-%COMP%] {\n    max-height: none; \n\n    overflow-y: visible;\n  }\n}\n\n.dialog-img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.row_flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.row_flex[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #3e3e52;\n}\n.row_flex[_ngcontent-%COMP%]   .filled_details[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.row_flex[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n}\n.button-row[_ngcontent-%COMP%]   .skip[_ngcontent-%COMP%], \n.button-row[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #3e3e52;\n  margin: 0px 10px;\n}\n.button-row[_ngcontent-%COMP%]   .signUp[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ed3237;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  margin: 0px;\n}\n\n.resend[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #3e3e52;\n  text-decoration: underline;\n}\n\n.verify[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ed3237;\n}"]
});

/***/ }

}]);