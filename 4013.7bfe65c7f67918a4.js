"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4013],{

/***/ 39510:
/*!***************************************************!*\
  !*** ./src/app/pass-voucher/pass-voucher.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassVoucherPage: () => (/* binding */ PassVoucherPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/clipboard */ 46962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 89417);

var _PassVoucherPage;









function PassVoucherPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 42)(2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Departure Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 42)(7, "p", 45)(8, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Passenger Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 46)(14, "p", 47)(15, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p")(21, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 48)(27, "p")(28, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tlp: ", ctx_r0.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.seatNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.payType, " ", ctx_r0.totalFare, "");
  }
}
function PassVoucherPage_ion_img_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 49);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.imagesGet);
  }
}
function PassVoucherPage_ion_img_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 49);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.imagesGet1);
  }
}
function PassVoucherPage_ion_img_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 49);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.imagesGet2);
  }
}
function PassVoucherPage_ion_img_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 49);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.imagesGet3);
  }
}
function PassVoucherPage_p_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Payment through MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PassVoucherPage_p_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Payment through BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PassVoucherPage_p_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Payment through BRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PassVoucherPage_p_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Payment through BCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PassVoucherPage_div_83_div_16_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Insert your ATM card and select ENGLISH");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Enter PIN, then select ENTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select PAYMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select MULTI PAYMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter company code : 88908 (Xendit 88908), then press CORRECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Enter Virtual Account Number, then press CORRECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Enter the amount to transfer, then press CORRECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Customer details will be displayed. Choose number 1 according to the amount billed and then press YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Payment confirmation will be displayed. Select YES to proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Keep your receipt as a formal proof of payment from Mandiri Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Your transaction is successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_16_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Insert your card.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select your language.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Enter your ATM PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Other Transaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select Transfer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Select the type of account you are using to transfer (i.e. from Savings account).");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Choose Virtual Account Billing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Enter your Virtual Account Number (i.e.: 88089999XXXXXX).");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Confirm the transaction, if it\u2019s correct, continue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Your transaction is completed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_16_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Other Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Payment menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select BRIVA menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input your BRI Virtual Account. (Example: 26215-xxxxxxxxxxxx), then press Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Payment confirmation, select Yes if transaction details are correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_16_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input your ATM card and PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Menu Other Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select To Account BCA Virtual Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Input the Virtual Account Number, which is 7800 1010 0304 5353");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Choose Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Select Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Take your payment proof");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_83_div_16_ul_1_Template, 23, 0, "ul", 57)(2, PassVoucherPage_div_83_div_16_ul_2_Template, 21, 0, "ul", 57)(3, PassVoucherPage_div_83_div_16_ul_3_Template, 15, 0, "ul", 57)(4, PassVoucherPage_div_83_div_16_ul_4_Template, 19, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BCA");
  }
}
function PassVoucherPage_div_83_div_17_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Go to Mandiri Internet Banking website: https://ibank.bankmandiri.co.id/retail3/");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Login with your USER ID and PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Multi Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select My Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Select Xendit 88908 as service provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Select Virtual Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Enter your virtual account number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Go to confirmation page 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Click on TOTAL if all details are correct and then click on CONTINUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Go to confirmation page 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Enter Challenge Code from your Internet Banking Token, then click on Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "You will be directed to the confirmation page once your payment has been completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_17_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter the following address: https://ibank.bni.co.id and click Enter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Insert your User ID and Password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select the menu Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Virtual Account Billing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter your Virtual Account Number (i.e.: 88089999XXXXXX). And choose the type of account you are using to transfer. And press Continue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Reconfirm the transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Enter the authentication token code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Your transaction is completed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_17_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Payment menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select BRIVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select payment account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Input your BRI Virtual Account number. (Example: 26215-xxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Input your password and Mtoken");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_17_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Login Internet Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Fund Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to BCA Virtual Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Input the Virtual Account Number, which is 7800 1010 0304 5353");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Click Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input KeyBCA Appli Response 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Click Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Proof of payment is displayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_83_div_17_ul_1_Template, 27, 0, "ul", 57)(2, PassVoucherPage_div_83_div_17_ul_2_Template, 17, 0, "ul", 57)(3, PassVoucherPage_div_83_div_17_ul_3_Template, 15, 0, "ul", 57)(4, PassVoucherPage_div_83_div_17_ul_4_Template, 19, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BCA");
  }
}
function PassVoucherPage_div_83_div_18_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Log in Mobile Banking Mandiri Online (Install Mandiri Online by PT. Bank Mandiri (Persero Tbk.) from App Store: https://itunes.apple.com/id/app/mandiri-online/id1117312908?mt=8 or Play Store: https://play.google.com/store/apps/details?id=com.bankmandiri.mandirionline&hl=en)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Click Icon Menu in the top left side");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select Make New Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select Multi Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Select Xendit 88908 as service provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_18_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Access BNI Mobile Banking from your phone, and insert your user ID and password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select the menu Transfer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select the menu Virtual Account Billing and then choose debit account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Enter your Virtual Account Number (i.e.: 88089999XXXXXX) on the menu input new.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Confirm your billing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Your transaction is complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_18_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Log in to Mobile Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Payment menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select BRIVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Input your BRI Virtual Account number and the amount billed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Input your PIN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Press OK to continue your transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "The transaction is successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "A confirmation SMS will be sent to your phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_18_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Login Mobile Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select m-Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select BCA Virtual Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Input the Virtual Account Number, which is 7800 1010 0304 5353");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Click Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Virtual Account information will be displayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Click OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Input Mobile Banking PIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Proof of payment is displayed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_83_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_83_div_18_ul_1_Template, 13, 0, "ul", 57)(2, PassVoucherPage_div_83_div_18_ul_2_Template, 15, 0, "ul", 57)(3, PassVoucherPage_div_83_div_18_ul_3_Template, 17, 0, "ul", 57)(4, PassVoucherPage_div_83_div_18_ul_4_Template, 21, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BCA");
  }
}
function PassVoucherPage_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "ion-segment", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PassVoucherPage_div_83_Template_ion_segment_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.segmentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PassVoucherPage_div_83_Template_ion_segment_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.type, $event) || (ctx_r0.type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-segment-button", 52)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "ATM Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-segment-button", 53)(6, "p")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Internet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-segment-button", 54)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Mobile Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PassVoucherPage_div_83_div_16_Template, 5, 4, "div", 56)(17, PassVoucherPage_div_83_div_17_Template, 5, 4, "div", 56)(18, PassVoucherPage_div_83_div_18_Template, 5, 4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "atmBanking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "internetBanking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "mobileBanking");
  }
}
function PassVoucherPage_div_90_div_16_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select from saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select to other Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Bank Code followed by your Virtual Account number (Mandiri 008+virtual account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as Nominal Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_16_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select from saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select to other Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Bank Code followed by your Virtual Account number (BNI 009+xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as Transfer Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_16_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select from saving");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select to other Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Bank Code followed by your Virtual Account number (BRI 002+xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_90_div_16_ul_1_Template, 15, 0, "ul", 57)(2, PassVoucherPage_div_90_div_16_ul_2_Template, 15, 0, "ul", 57)(3, PassVoucherPage_div_90_div_16_ul_3_Template, 15, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
  }
}
function PassVoucherPage_div_90_div_17_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_17_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_17_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_90_div_17_ul_1_Template, 15, 0, "ul", 57)(2, PassVoucherPage_div_90_div_17_ul_2_Template, 15, 0, "ul", 57)(3, PassVoucherPage_div_90_div_17_ul_3_Template, 15, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
  }
}
function PassVoucherPage_div_90_div_18_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_18_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_18_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 58)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Input User ID and Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Transfer to other bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select bank destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter Virtual Account number (BRI xxxxxxxxxxxxxxx)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Input the amount billed as transfer amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Finish, transaction has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PassVoucherPage_div_90_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PassVoucherPage_div_90_div_18_ul_1_Template, 15, 0, "ul", 57)(2, PassVoucherPage_div_90_div_18_ul_2_Template, 15, 0, "ul", 57)(3, PassVoucherPage_div_90_div_18_ul_3_Template, 15, 0, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "MANDIRI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.bankCode == "BRI");
  }
}
function PassVoucherPage_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "ion-segment", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PassVoucherPage_div_90_Template_ion_segment_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.segmentChanged1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PassVoucherPage_div_90_Template_ion_segment_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.type1, $event) || (ctx_r0.type1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-segment-button", 59)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "ATM Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-segment-button", 60)(6, "p")(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Internet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-segment-button", 61)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Mobile Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PassVoucherPage_div_90_div_16_Template, 4, 3, "div", 56)(17, PassVoucherPage_div_90_div_17_Template, 4, 3, "div", 56)(18, PassVoucherPage_div_90_div_18_Template, 4, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.type1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r0.type1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "atmBanking1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "internetBanking1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "mobileBanking1");
  }
}
function PassVoucherPage_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Booking Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_div_109_Template_p_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.goToBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OKAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function PassVoucherPage_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 67)(2, "ion-row")(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_div_110_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PassVoucherPage_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 67)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Payment has not been confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_div_111_Template_p_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.gotoFailurePopop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
class PassVoucherPage {
  constructor(router, navCtrl, clipboard, commonStorage, apiFactory, loader) {
    this.router = router;
    this.navCtrl = navCtrl;
    this.clipboard = clipboard;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.loader = loader;
    this.ReadMore = true;
    this.visible = false;
    this.ReadMore1 = true;
    this.visible1 = false;
    this.ReadMore2 = true;
    this.visible2 = false;
    this.showColorLegends = false;
    this.CopyInputText = "";
    this.viewTicket = false;
    this.failurePopop = false;
    this.type = 'atmBanking';
    this.type1 = 'atmBanking1';
  }
  ngOnInit() {
    this.getData = ['pnr_number=KH30697', 'voucher_number=8808999950667004', 'bank_code=BNI'];
    this.getData = this.commonStorage.getItem('dataFetch');
    //console.log(this.commonStorage.getItem('dataFetch'),"myurl")
    this.metaData = this.commonStorage.getItem('locale');
    this.localData = this.commonStorage.localGet("metaData");
    this.payType = this.localData.currencySym;
    this.travelName = this.localData.operatorName;
    this.ticketDetails = this.commonStorage.localGet('ticketDetails');
    this.imagesGet = this.metaData.rb_virtual_banks[0].ImageUrl;
    this.imagesGet1 = this.metaData.rb_virtual_banks[1].ImageUrl;
    this.imagesGet2 = this.metaData.rb_virtual_banks[2].ImageUrl;
    this.imagesGet3 = this.metaData.rb_virtual_banks[3].ImageUrl;
    // console.log(this.imagesGet,"imageGet")
    let obj = [];
    for (let i = 0; i < this.getData.length; i++) {
      let [firname, secname] = this.getData[i].split('=');
      obj[firname] = secname;
    }
    this.pnrNumber = obj.pnr_number.split('_');
    if (!this.pnrNumber[1]) {
      this.splitPnr = this.pnrNumber[0];
    } else {
      this.splitPnr = this.pnrNumber[1];
    }
    this.voucherId = obj.voucher_number;
    this.bankCode = obj.bank_code;
    this.bustype = this.ticketDetails.bus_type;
    this.origin = this.ticketDetails.origin;
    this.destination = this.ticketDetails.destination;
    this.travelDate = this.ticketDetails.travel_date;
    this.totalFare = this.ticketDetails.ticket_fare;
    this.seatNum = this.ticketDetails.seat_numbers;
    this.age = this.ticketDetails.age;
    this.passengerDetails = this.ticketDetails.passenger_details;
    for (let i = 0; i < this.passengerDetails.length; i++) {
      this.telephone = this.passengerDetails[i].cus_mobile;
      this.name = this.passengerDetails[i].name;
    }
    //console.log(this.splitPnr,"dddddddddddd")
  }
  travelDetailReadMore() {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;
  }
  paymentDetailsReadmore() {
    this.ReadMore1 = !this.ReadMore1; //not equal to condition
    this.visible1 = !this.visible1;
  }
  paymentViaOtherBankReadmore() {
    this.ReadMore2 = !this.ReadMore2; //not equal to condition
    this.visible2 = !this.visible2;
  }
  ionViewDidEnter() {
    //Call start timer function 
    this.remainingTime = 2399;
    this.startTimer();
  }
  startTimer() {
    var counter = setTimeout(() => {
      this.time = this.getTimerClock(this.remainingTime);
      //  console.log(this.time);
      if (this.remainingTime > 0) {
        this.startTimer();
        this.remainingTime--;
      } else {
        this.showColorLegends = !this.showColorLegends;
        clearInterval(counter);
      }
    }, 1000);
  }
  getTimerClock(inputSeconds) {
    var sec_num = parseInt(inputSeconds.toString(), 10);
    this.remainingTime = sec_num; //Define variable
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = hours < 10 ? "0" + hours : hours.toString();
    minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
  initTimer(inputSeconds) {
    return this.getTimerClock(inputSeconds);
  }
  goToBack() {
    // this.navCtrl.navigateForward('tabs/home');
    this.navCtrl.navigateRoot('tabs/home');
    this.showColorLegends = !this.showColorLegends;
  }
  copyString() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard.write({
        string: _this.voucherId
      });
    })();
  }
  copyAmount() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard.write({
        string: _this2.totalFare.toString()
      });
    })();
  }
  paymentStatusCheck() {
    this.apiFactory.voucherPay(this.splitPnr).subscribe(result => {
      console.log(result[':do_print_ticket'], "successCheck");
      this.doPrintTicket = result[':do_print_ticket'];
      this.ticketNumber = result[':ticket_number'];
      if (this.doPrintTicket == false) {
        this.viewTicket = false;
        this.failurePopop = true;
      } else {
        this.apiFactory.getTicketDetails(this.ticketNumber).subscribe(result => {
          this.viewTicket = true;
          this.failurePopop = false;
          this.ticketDetailsnew = result;
        });
        // err => {
        // }
      }
    });
    // err => {
    //   this.loader.hideLoadingDefault()
    // }
  }
  viewTicketPage() {
    localStorage.setItem('bookingDetails', JSON.stringify(this.ticketDetailsnew));
    let navigationExtras = {
      queryParams: {
        new_booking: true,
        hideLocateTrackBus: true
      }
    };
    this.navCtrl.navigateRoot('booking-details', navigationExtras);
  }
  gotoFailurePopop() {
    this.failurePopop = false;
    console.log(this.failurePopop, "failure");
  }
  segmentChanged(event) {
    console.log('Segment changed:', event.detail.value);
  }
  segmentChanged1(event) {
    console.log('Segment changed:', event.detail.value);
  }
}
_PassVoucherPage = PassVoucherPage;
_PassVoucherPage.ɵfac = function PassVoucherPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassVoucherPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService));
};
_PassVoucherPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _PassVoucherPage,
  selectors: [["app-pass-voucher"]],
  standalone: false,
  decls: 112,
  vars: 28,
  consts: [[1, "header"], [1, "content"], [1, "setBg"], [1, "orderDiv"], [1, "oriToDesti"], [1, "originRow"], ["size", "1", 2, "display", "flex"], ["src", "././assets/icon/bus.svg", 2, "font-size", "23px"], ["size", "8"], [1, "seatDeatils"], ["size", "3", 1, "hideDetailsBtn"], ["type", "button", 3, "click"], [4, "ngIf"], [1, "timerDiv"], [1, "transferDiv"], [1, "transferText"], ["size", "6", 2, "padding-left", "16px", "padding-bottom", "0px"], [1, "title"], [1, "bankName"], ["size", "6", 1, "bankLogo"], [3, "src", 4, "ngIf"], ["size", "8", 2, "padding-left", "16px", "padding-top", "0px"], ["size", "4", 1, "copy"], [3, "click"], [1, "noteDiv"], [1, "transferDiv", 2, "padding-bottom", "1px"], [1, "middleDiv"], ["style", "padding-left: 10px;", 4, "ngIf"], [1, "upDownArrow", 3, "click"], [3, "name"], ["style", "margin: 10px;background: white;margin-top: 0px;", 4, "ngIf"], [2, "padding-left", "10px"], [1, "footerDiv"], [2, "display", "flex", "align-items", "baseline"], ["size", "1", 2, "font-size", "20px"], ["name", "checkmark-outline"], ["size", "11"], [1, "smallText"], [1, "btnAdd", 3, "click"], [1, "smallpara"], [2, "display", "block", "text-align", "center"], ["class", "whole center", 4, "ngIf"], [1, "telDiv"], [1, "telephone"], [1, "departuer"], [2, "margin-bottom", "0px"], [2, "display", "flex"], [2, "margin-right", "16px"], [2, "margin", "16px"], [3, "src"], [2, "margin", "10px", "background", "white", "margin-top", "0px"], ["mode", "md", "color", "danger", 1, "segmentScroll", 3, "ionChange", "ngModelChange", "ngModel"], ["value", "atmBanking", 1, "segmentbtn"], ["value", "internetBanking", 1, "segmentbtn"], ["value", "mobileBanking", 1, "segmentbtn"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "points", 4, "ngIf"], [1, "points"], ["value", "atmBanking1", 1, "segmentbtn"], ["value", "internetBanking1", 1, "segmentbtn"], ["value", "mobileBanking1", 1, "segmentbtn"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "width", "95% !important"], ["name", "bag-check-outline", 2, "color", "#4c4c4c", "font-size", "22px"], [2, "color", "#4c4c4c", "font-size", "14px"], [1, "okayBtn", 3, "click"], [1, "legend-box"], [1, "circle"], [1, "txt-msg"], ["size", "7"], ["size", "5", 1, "dwn-txt", 3, "click"], [1, "dwn-txt", 3, "click"]],
  template: function PassVoucherPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Voucher");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-content", 1)(4, "div", 2)(5, "div")(6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div")(9, "p", 4)(10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-row", 5)(19, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-col", 8)(22, "p", 9)(23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-col", 10)(29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_div_click_29_listener() {
        return ctx.travelDetailReadMore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PassVoucherPage_div_31_Template, 33, 6, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14)(36, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Details for Transfer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div")(39, "ion-card")(40, "ion-row")(41, "ion-col", 16)(42, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-col", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, PassVoucherPage_ion_img_47_Template, 1, 1, "ion-img", 20)(48, PassVoucherPage_ion_img_48_Template, 1, 1, "ion-img", 20)(49, PassVoucherPage_ion_img_49_Template, 1, 1, "ion-img", 20)(50, PassVoucherPage_ion_img_50_Template, 1, 1, "ion-img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-row")(52, "ion-col", 21)(53, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Virtual account payment code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ion-col", 22)(58, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_p_click_58_listener() {
        return ctx.copyString();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 21)(62, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Amount to Transfer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "ion-col", 22)(67, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_p_click_67_listener() {
        return ctx.copyAmount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 24)(70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Note:LLC,kliring,SKBNI transfers are not supported");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 14)(73, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "How To Pay?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 25)(76, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, PassVoucherPage_p_77_Template, 2, 0, "p", 27)(78, PassVoucherPage_p_78_Template, 2, 0, "p", 27)(79, PassVoucherPage_p_79_Template, 2, 0, "p", 27)(80, PassVoucherPage_p_80_Template, 2, 0, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_div_click_81_listener() {
        return ctx.paymentDetailsReadmore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "ion-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, PassVoucherPage_div_83_Template, 19, 5, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 25)(85, "div", 26)(86, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Payment Via Other Bank Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_div_click_88_listener() {
        return ctx.paymentViaOtherBankReadmore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "ion-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, PassVoucherPage_div_90_Template, 19, 5, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 32)(92, "ion-row", 33)(93, "ion-col", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "ion-icon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "ion-col", 36)(96, "p")(97, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "E-Ticket ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "will be automatically sent via SMS and Email once the payment is confirmed");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PassVoucherPage_Template_div_click_101_listener() {
        return ctx.paymentStatusCheck();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "I have completed my payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 39)(105, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "If you have made the payment tap on the button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "to know your payment status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, PassVoucherPage_div_109_Template, 7, 0, "div", 41)(110, PassVoucherPage_div_110_Template, 11, 0, "div", 41)(111, PassVoucherPage_div_111_Template, 6, 0, "div", 41);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Order Id: ", ctx.splitPnr, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.origin);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.destination);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.travelDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.travelName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.bustype);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.ReadMore ? "Details" : "Hide", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Complete Your Payment Within ", ctx.time, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.bankCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "MANDIRI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BNI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BRI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BCA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.voucherId);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.payType, " ", ctx.totalFare, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "MANDIRI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BNI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BRI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bankCode == "BCA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx.ReadMore1 ? "chevron-down-outline" : "chevron-up-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx.ReadMore2 ? "chevron-down-outline" : "chevron-up-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showColorLegends);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.viewTicket);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.failurePopop);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor],
  styles: [".header[_ngcontent-%COMP%] {\n  background-color: #D84E55 !important;\n  height: 60px;\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  padding-left: 16px;\n  \n\n  display: flex;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  --background:#f0f0f0;\n}\n\n.orderDiv[_ngcontent-%COMP%] {\n  text-align: end;\n  margin: 0px 16px;\n  border-bottom: 1px solid #c4c4c4;\n  padding: 16px 0 5px 0;\n  font-size: 14px;\n  font-weight: 400;\n  color: #4a4a4a;\n}\n\n.setBg[_ngcontent-%COMP%] {\n  background-color: white !important;\n  margin-top: 6px;\n  box-shadow: 0 4px 6px -6px #222;\n  padding-bottom: 10px;\n}\n\n.oriToDesti[_ngcontent-%COMP%] {\n  margin: 16px;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 0px;\n  margin-bottom: 0px;\n}\n\n.originRow[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  display: flex;\n  align-items: center;\n  margin-left: 16px;\n  margin-right: 16px;\n  \n\n  \n\n  margin-top: -14px;\n  padding-top: 0px;\n}\n\n.seatDeatils[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4a4a4a;\n}\n\n.hideDetailsBtn[_ngcontent-%COMP%] {\n  color: #1034D9 !important;\n  text-align: end;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.telDiv[_ngcontent-%COMP%] {\n  margin: 16px;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.departuer[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4c4c4c;\n}\n\n.telephone[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4a4a4a;\n}\n\n.timerDiv[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: #4a4a4a;\n  font-weight: 700;\n  background: #FDF28D;\n  padding: 1px;\n  margin-top: 10px;\n  border-top: 1px solid red;\n  border-bottom: 1px solid red;\n}\n\n.transferDiv[_ngcontent-%COMP%] {\n  margin: 8px;\n  \n\n  background: #DADADA;\n}\n\n.transferText[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #4a4a4a;\n  text-transform: uppercase;\n}\n\n.bankName[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 0px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a4a4a;\n  font-weight: 500;\n}\n\n.bankLogo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 30px;\n  padding-right: 16px;\n}\n\n.bankLogo[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding-right: 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1034D9;\n  text-transform: uppercase;\n}\n\n.noteDiv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ED3237;\n  font-weight: 500;\n  margin: 16px;\n}\n\n.upDownArrow[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 20px;\n}\n\n.middleDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  color: #4a4a4a;\n  text-transform: uppercase;\n  justify-content: space-between;\n}\n\n.points[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a4a4a;\n  font-weight: 700;\n}\n\n.footerDiv[_ngcontent-%COMP%] {\n  background: #8BC9FF;\n  margin: 8px;\n}\n\n.smallText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a4a4a;\n  font-weight: 500;\n}\n\n.smallpara[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a4a4a;\n  font-weight: 500;\n  padding-left: 20px;\n}\n\n.btnAdd[_ngcontent-%COMP%] {\n  background: #1034D9;\n  margin: 16px;\n  padding: 2px;\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-top: 0px;\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.okayBtn[_ngcontent-%COMP%] {\n  text-align: end;\n  color: red;\n  margin-right: 30px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  line-height: 25px;\n  text-align: center;\n  background: #52c328;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}"]
});

/***/ }),

/***/ 40052:
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/definitions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 44013:
/*!*****************************************************!*\
  !*** ./src/app/pass-voucher/pass-voucher.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassVoucherPageModule: () => (/* binding */ PassVoucherPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _pass_voucher_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-voucher-routing.module */ 59135);
/* harmony import */ var _pass_voucher_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pass-voucher.page */ 39510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassVoucherPageModule;






class PassVoucherPageModule {}
_PassVoucherPageModule = PassVoucherPageModule;
_PassVoucherPageModule.ɵfac = function PassVoucherPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassVoucherPageModule)();
};
_PassVoucherPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PassVoucherPageModule
});
_PassVoucherPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _pass_voucher_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassVoucherPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PassVoucherPageModule, {
    declarations: [_pass_voucher_page__WEBPACK_IMPORTED_MODULE_1__.PassVoucherPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _pass_voucher_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassVoucherPageRoutingModule]
  });
})();

/***/ }),

/***/ 46962:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Clipboard: () => (/* binding */ Clipboard)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 64872);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 40052);


const Clipboard = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Clipboard', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.ClipboardWeb()
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59135:
/*!*************************************************************!*\
  !*** ./src/app/pass-voucher/pass-voucher-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassVoucherPageRoutingModule: () => (/* binding */ PassVoucherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _pass_voucher_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pass-voucher.page */ 39510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassVoucherPageRoutingModule;




const routes = [{
  path: '',
  component: _pass_voucher_page__WEBPACK_IMPORTED_MODULE_0__.PassVoucherPage
}];
class PassVoucherPageRoutingModule {}
_PassVoucherPageRoutingModule = PassVoucherPageRoutingModule;
_PassVoucherPageRoutingModule.ɵfac = function PassVoucherPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassVoucherPageRoutingModule)();
};
_PassVoucherPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PassVoucherPageRoutingModule
});
_PassVoucherPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PassVoucherPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 64872:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/web.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipboardWeb: () => (/* binding */ ClipboardWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class ClipboardWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  write(options) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard) {
        throw _this.unavailable('Clipboard API not available in this browser');
      }
      if (options.string !== undefined) {
        yield _this.writeText(options.string);
      } else if (options.url) {
        yield _this.writeText(options.url);
      } else if (options.image) {
        if (typeof ClipboardItem !== 'undefined') {
          try {
            const blob = yield (yield fetch(options.image)).blob();
            const clipboardItemInput = new ClipboardItem({
              [blob.type]: blob
            });
            yield navigator.clipboard.write([clipboardItemInput]);
          } catch (err) {
            throw new Error('Failed to write image');
          }
        } else {
          throw _this.unavailable('Writing images to the clipboard is not supported in this browser');
        }
      } else {
        throw new Error('Nothing to write');
      }
    })();
  }
  read() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard) {
        throw _this2.unavailable('Clipboard API not available in this browser');
      }
      if (typeof ClipboardItem !== 'undefined') {
        try {
          const clipboardItems = yield navigator.clipboard.read();
          const type = clipboardItems[0].types[0];
          const clipboardBlob = yield clipboardItems[0].getType(type);
          const data = yield _this2._getBlobData(clipboardBlob, type);
          return {
            value: data,
            type
          };
        } catch (err) {
          return _this2.readText();
        }
      } else {
        return _this2.readText();
      }
    })();
  }
  readText() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard || !navigator.clipboard.readText) {
        throw _this3.unavailable('Reading from clipboard not supported in this browser');
      }
      const text = yield navigator.clipboard.readText();
      return {
        value: text,
        type: 'text/plain'
      };
    })();
  }
  writeText(text) {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.clipboard || !navigator.clipboard.writeText) {
        throw _this4.unavailable('Writting to clipboard not supported in this browser');
      }
      yield navigator.clipboard.writeText(text);
    })();
  }
  _getBlobData(clipboardBlob, type) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (type.includes('image')) {
        reader.readAsDataURL(clipboardBlob);
      } else {
        reader.readAsText(clipboardBlob);
      }
      reader.onloadend = () => {
        const r = reader.result;
        resolve(r);
      };
      reader.onerror = e => {
        reject(e);
      };
    });
  }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);