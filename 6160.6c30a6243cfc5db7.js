"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6160],{

/***/ 40052:
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/definitions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

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

/***/ 52233:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Share: () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 92871);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ 1227).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 91227)).then(m => new m.ShareWeb())
});


//# sourceMappingURL=index.js.map

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

/***/ }),

/***/ 66160:
/*!***********************************************!*\
  !*** ./src/app/refer-earn/refer-earn.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferEarnPage: () => (/* binding */ ReferEarnPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/clipboard */ 46962);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 52233);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 45564);

var _ReferEarnPage;










const _c0 = () => ({
  "margin-top": "15%"
});
const _c1 = () => ({});
function ReferEarnPage_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_0_div_2_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closepage_cbu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6)(6, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Refer Your Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Earn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 6)(20, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Your Referral Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "ion-row", 13)(23, "ion-col", 14)(24, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_0_div_2_Template_ion_col_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.copyTextToClipboard(ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 6)(30, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Or share code by");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 6)(34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_0_div_2_Template_ion_col_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.whatsappshare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_0_div_2_Template_ion_col_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.messageshare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_0_div_2_Template_ion_col_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.gmailshare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "br")(44, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 24)(46, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "How It's Works?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "ion-row", 26)(49, "ion-col", 27)(50, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ion-col", 30)(53, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Invite your friends & family");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "ion-row", 26)(56, "ion-col", 27)(57, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "ion-col", 30)(60, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "They book a bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "ion-row", 26)(63, "ion-col", 27)(64, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "ion-col", 30)(67, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_amount, " Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("You will get 100 points once payment is done. ", ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.how_it_works, "");
  }
}
function ReferEarnPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ReferEarnPage_ng_container_0_div_2_Template, 69, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.hasReferalCode && ctx_r1.doneAPICall);
  }
}
function ReferEarnPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-spinner", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReferEarnPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReferEarnPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Invite your Friends to our app");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_1_div_10_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.know_more());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Know more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 47)(9, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Your referral code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "div", 47)(14, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_1_div_10_Template_img_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.copyTextToClipboard(ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 51)(18, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_1_div_10_Template_ion_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.share());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Share Invitation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_code);
  }
}
function ReferEarnPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "ion-buttons", 58)(4, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_1_div_11_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.knowMore = !ctx_r1.knowMore);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.social_networking_sites);
  }
}
function ReferEarnPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 34)(3, "ion-buttons", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Refer and Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ReferEarnPage_ng_container_1_div_8_Template, 2, 0, "div", 38)(9, ReferEarnPage_ng_container_1_div_9_Template, 2, 0, "div", 0)(10, ReferEarnPage_ng_container_1_div_10_Template, 22, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ReferEarnPage_ng_container_1_div_11_Template, 8, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-footer")(13, "div")(14, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_1_Template_span_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.referTC());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Read T&C");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.doneAPICall);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hasReferalCode && ctx_r1.doneAPICall);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.hasReferalCode && ctx_r1.doneAPICall);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.knowMore);
  }
}
function ReferEarnPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 61)(2, "div", 62)(3, "ion-row", 63)(4, "ion-col", 27)(5, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_2_Template_ion_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.gotoBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-col", 65)(7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Refer A Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h1", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Refer a Friend & Earn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Discounts with OurBus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-content", 69)(17, "ion-card", 70)(18, "ion-row", 71)(19, "ion-col", 72)(20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Your unique referral code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReferEarnPage_ng_container_2_Template_ion_col_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.share());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 76)(27, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Here is a step by step on how to get your reward! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-card", 70)(30, "ion-row", 71)(31, "ion-col", 27)(32, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "ion-col", 72)(35, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Your friend creates an OurBus account using your referral code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ion-col", 72)(39, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "The code must be used during the registration procress or will not be valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "ion-card", 70)(42, "ion-row", 71)(43, "ion-col", 27)(44, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "ion-col", 72)(47, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Your friend makes their first purchase on OurBus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "ion-card", 70)(50, "ion-row", 71)(51, "ion-col", 27)(52, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "ion-col", 72)(55, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.how_it_works, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("You receive \u20B9", ctx_r1.referResponse == null ? null : ctx_r1.referResponse.data == null ? null : ctx_r1.referResponse.data.referral_amount, " directly to your OurBus Wallet which can be used in any purchase on our website or app.");
  }
}
class ReferEarnPage {
  constructor(apiFactory, navCtrl, commonStorage, platform, modalCtrl, popupctrl, appData, util
  // public inAppBrowser:InAppBrowser
  ) {
    this.apiFactory = apiFactory;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.modalCtrl = modalCtrl;
    this.popupctrl = popupctrl;
    this.appData = appData;
    this.util = util;
    this.knowMore = false;
    this.doneAPICall = false;
    this.hasReferalCode = false;
    this.selectedRadioGroup = null;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = this.commonStorage.getItem('metaData');
    this.defaultCall();
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
  }
  know_more() {
    this.knowMore = true;
  }
  defaultCall() {
    this.apiFactory.referAndEarn().subscribe(res => {
      this.referResponse = res;
      this.doneAPICall = true;
      if (this.referResponse.data && this.referResponse.data.referral_amount != "0" && this.referResponse.data.referral_amount != "0.0" && this.referResponse.data.referral_amount != "") {
        this.hasReferalCode = true;
      } else {
        this.hasReferalCode = false;
      }
    }, error => {});
  }
  referTC() {
    this.commonStorage.setItem("refer_TC", this.referResponse.data.terms_and_conditions);
    this.navCtrl.navigateForward('term-conditions-refer');
  }
  copyInputMessage(inputElement) {
    var copyText = document.getElementsByClassName('referCode')[0];
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  copyTextToClipboard(text) {
    if (!text) {
      this.util.showToast("Nothing to copy!");
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      this.util.showToast("Text copied to clipboard");
    }, err => {
      this.util.showToast("Failed to copy text");
    });
  }
  copyTextUsingClipboardAPI(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.util.showToast("Code copied to clipboard: " + text);
      }, err => {
        this.util.showToast("'Error copying text: ", err);
      });
    } else {}
  }
  copyTextFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.util.showToast('Code copied to clipboard' + text);
      } else {
        this.util.showToast('Failed to copy code to clipboard');
      }
    } catch (err) {
      console.error('Error copying text:', err);
      this.util.showToast("Error copying text: " + err);
    }
    document.body.removeChild(textArea);
  }
  copyString(code) {
    if (this.platform.is('ios') || this.platform.is('android')) {
      _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_1__.Clipboard.write({
        string: code
      }).then(rs => {
        this.util.showToast("Code copied to clipboard");
      }).catch(error => {
        console.error("Error copying to clipboard:", error);
      });
    } else {
      return false;
    }
  }
  share() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this$referResponse;
        const shareOptions = {
          title: 'Share this app',
          text: 'Check out this app!',
          url: (_this$referResponse = _this.referResponse) === null || _this$referResponse === void 0 || (_this$referResponse = _this$referResponse.data) === null || _this$referResponse === void 0 ? void 0 : _this$referResponse.social_networking_sites,
          // Ensure this is a valid URL or text
          dialogTitle: 'Share via'
        };
        yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share(shareOptions);
        _this.util.showToast('App shared successfully!');
      } catch (error) {
        console.error('Share failed:', error);
        _this.util.showToast('Failed to share app.');
      }
    })();
  }
  whatsappshare() {
    var _this$referResponse2;
    const shareOptions = {
      title: 'Share this app',
      text: 'Check out this app!',
      url: (_this$referResponse2 = this.referResponse) === null || _this$referResponse2 === void 0 || (_this$referResponse2 = _this$referResponse2.data) === null || _this$referResponse2 === void 0 ? void 0 : _this$referResponse2.social_networking_sites,
      dialogTitle: 'Share via'
    };
    _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share(shareOptions).then(() => {}).catch(error => {
      const whatsappShareUrl = this.generateWhatsAppShareUrl(this.referResponse.data.social_networking_sites);
      window.open(whatsappShareUrl, '_blank');
    });
    // }
  }
  generateWhatsAppShareUrl(text) {
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/?text=${encodedText}`;
  }
  messageshare() {
    const phoneNumber = '';
    const uri = `sms:${phoneNumber}?body=${encodeURIComponent(this.referResponse.data.social_networking_sites)}`;
    // this.inAppBrowser.create(uri, '_system');
  }
  generateMailToUrl(subject, body, to) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }
  gmailshare() {
    var _this$referResponse3;
    const shareOptions = {
      title: 'Share this app',
      text: 'Check out this app!',
      url: (_this$referResponse3 = this.referResponse) === null || _this$referResponse3 === void 0 || (_this$referResponse3 = _this$referResponse3.data) === null || _this$referResponse3 === void 0 ? void 0 : _this$referResponse3.social_networking_sites,
      dialogTitle: 'Share via'
    };
    _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share(shareOptions).then(() => {
      this.util.showToast("Shared via email ");
    }).catch(error => {
      const mailToUrl = this.generateMailToUrl('', this.referResponse.data.social_networking_sites, '');
      window.open(mailToUrl, '_blank');
    });
  }
  closepage() {
    this.navCtrl.navigateForward('/tabs/more');
  }
  closepage_cbu() {
    this.modalCtrl.dismiss();
  }
  gotoBack() {
    this.navCtrl.navigateBack('/home');
  }
}
_ReferEarnPage = ReferEarnPage;
_ReferEarnPage.ɵfac = function ReferEarnPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferEarnPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider));
};
_ReferEarnPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _ReferEarnPage,
  selectors: [["app-refer-earn"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["padding", "", 1, "theme1"], [2, "text-align", "end", "margin-top", "5%", "margin-right", "5%", 3, "ngStyle"], ["alt", "", "src", "./assets/icon/close_icon.svg", 3, "click"], [2, "text-align", "center"], ["alt", "", "src", "./assets/icon/refer.gif"], [2, "text-align", "center", "margin-top", "5%"], [1, "themeone_lable"], ["item-content", "", 2, "display", "flex", "justify-content", "space-between", "width", "100%", "margin-top", "10px", "align-items", "center"], [2, "flex-grow", "1", "text-align", "end", "color", "#191966", "font-size", "18px"], ["alt", "", "src", "././assets/icon/moneypoint.svg", 2, "height", "25px", "width", "25px"], [2, "flex-grow", "1", "text-align", "start", "color", "#191966", "font-size", "18px"], [1, "lable2"], [1, "themeone_referal_code_css"], ["size", "9", 2, "text-align", "start"], [2, "color", "#191966", "font-size", "18px", "font-weight", "500", "margin-left", "15px"], ["size", "3", 3, "click"], [2, "color", "#191966", "font-size", "18px", "text-decoration", "underline"], ["size", "3"], ["size", "2", 3, "click"], ["alt", "", "src", "./assets/icon/whatsappshare.svg"], ["alt", "", "src", "./assets/icon/messageshare.svg"], ["alt", "", "src", "./assets/icon/gmailshare.svg"], [2, "border", "1px solid #DADEE3", "height", "0px", "margin-left", "15px", "margin-right", "15px"], [2, "text-align", "center", "margin-top", "5%", "margin-right", "20px", "margin-bottom", "20px"], [2, "font-weight", "bold", "text-align", "left", "margin-left", "30px", "font-size", "18px"], [2, "margin-left", "24px", "margin-right", "15px"], ["size", "2"], [2, "display", "grid"], ["alt", "", "src", "./assets/icon/step1.svg"], ["size", "10", 1, "themeone_lbl_col"], [1, "themeone_lbl"], ["alt", "", "src", "./assets/icon/step2.svg"], ["alt", "", "src", "./assets/icon/step3.svg"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], ["padding", ""], ["style", "text-align: center;", 4, "ngIf"], ["class", "referal_body", 4, "ngIf"], ["class", "whole center", 4, "ngIf"], [1, "readTC", 3, "click"], ["name", "bubbles"], ["alt", "", "src", "./assets/icon/ic_launching_soon.png", 2, "position", "absolute", "top", "45%", "transform", "translate(0, -45%)", "width", "100%"], [1, "referal_body"], [1, "invite"], [3, "click"], [1, "center"], [2, "padding-right", "30px", "color", "#383a3e"], [1, "referCode"], ["alt", "", "src", "./assets/icon/copy.png", "alt", "", 2, "position", "absolute", "right", "50px", 3, "click"], [2, "padding", "10px"], ["mode", "md", "expand", "block", "type", "button", 1, "login-btn", 3, "click"], [1, "sidewalk"], ["alt", "", "src", "./assets/icon/sidewalk.png"], [1, "whole", "center"], [1, "legend-box-1"], [2, "width", "100%", "height", "100%"], ["slot", "end", 2, "margin-top", "-32px", "margin-right", "-20px", "float", "right"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["src", "./assets/icon/Cross.svg", "name", "close", "item-start", ""], [1, "ourbustheme"], [1, "referEarnBg"], [1, "header-row"], ["name", "arrow-back", 1, "ourbus-icon-size", 2, "height", "25px", "width", "25px", "margin-left", "10px", 3, "click"], ["size", "8", 2, "text-align", "center", "font-weight", "700"], [2, "font-size", "20px"], [2, "font-size", "26px", "margin", "0px", "font-weight", "700"], [2, "margin", "8px auto", "font-weight", "500"], [1, "ourbustheme", 2, "--background", "#F2F2F2"], [1, "ourbus-card"], [1, "text_center"], ["size", "10"], [2, "color", "#2D2D2D"], [1, "ourbus-referal-code"], ["src", "././assets/icon/ourbus_referral_codecopy.svg", 2, "height", "40px"], [2, "text-align", "center", "font-size", "14px"], [2, "color", "#747474"], [1, "ourbus_round_div"], [1, "ourbus-step-text"], [1, "ourbus-step-subtext"]],
  template: function ReferEarnPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ReferEarnPage_ng_container_0_Template, 3, 1, "ng-container", 0)(1, ReferEarnPage_ng_container_1_Template, 16, 4, "ng-container", 0)(2, ReferEarnPage_ng_container_2_Template, 57, 3, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.invite[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-left: 14px;\n  padding-top: 10px;\n  margin-bottom: 5px;\n  font-weight: bolder;\n  color: var(--sectionHeaderTextColor);\n}\n.invite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  cursor: pointer;\n  color: rgba(56, 58, 62, 0.6509803922);\n  font-size: 14px;\n}\n.invite[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 50%;\n}\n\n.referCode[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 5px;\n  padding: 10px;\n  width: 45%;\n  padding-left: 50px;\n}\n\n.sidewalk[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding-top: 35px;\n}\n\n.readTC[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  color: var(--iconsAndButtonsColor);\n  float: right;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n}\n\n.legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: auto;\n  background-repeat: no-repeat;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 0;\n  height: 45px;\n  border-radius: 4px;\n}\n\n.themeone_lable[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #5F5F5F;\n  font-size: 16px;\n}\n\n.lable1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #191966;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.themeone_lable2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #5F5F5F;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.themeone_referal_code_css[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #F3F3F7;\n  margin-left: 25px;\n  margin-right: 25px;\n  border: 2px dotted #191966;\n  border-radius: 15px;\n  margin-top: 15px;\n}\n\n.themeone_lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #5F5F5F;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.themeone_lbl_col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.referEarnBg[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('ourbus_referearn_back.0ee018f056d0f28f.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 250px;\n  font-weight: 600;\n  padding: 75px 14px 0px;\n  color: white;\n  -webkit-backface-visibility: 0.3;\n          backface-visibility: 0.3;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 2%;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n}\n\n.text_center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ourbus_btn[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: none;\n  --border-radius: 8px;\n  font-size: 18px;\n  font-weight: 700;\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  margin: 10px;\n}\n\n.ourbus_round_div[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  color: #397D32;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n}\n\n.ourbus-step-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2D2D2D;\n}\n\n.ourbus-step-subtext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #747474;\n  margin-top: -14px;\n}\n\n.ourbus-card[_ngcontent-%COMP%] {\n  background: #FFF;\n  margin-inline: 10px;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n.ourbus-referal-code[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-size: 22px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.ourbus-share-code[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-weight: 700;\n  font-size: 16px;\n  margin-left: 5px;\n  margin-top: 8px;\n}\n\n.ourbus-icon-size[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-left: 10px;\n}"]
});

/***/ }),

/***/ 92871:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ })

}]);