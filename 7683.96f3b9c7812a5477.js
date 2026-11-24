"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7683],{

/***/ 40052
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/definitions.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 46962
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/index.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 64872
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/clipboard/dist/esm/web.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipboardWeb: () => (/* binding */ ClipboardWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class ClipboardWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  write(options) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ },

/***/ 77946
/*!*************************************************************!*\
  !*** ./src/app/offer-coupon/offer-coupon-routing.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferCouponPageRoutingModule: () => (/* binding */ OfferCouponPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _offer_coupon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-coupon.page */ 55820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _OfferCouponPageRoutingModule;




const routes = [{
  path: '',
  component: _offer_coupon_page__WEBPACK_IMPORTED_MODULE_1__.OfferCouponPage
}];
class OfferCouponPageRoutingModule {}
_OfferCouponPageRoutingModule = OfferCouponPageRoutingModule;
_OfferCouponPageRoutingModule.ɵfac = function OfferCouponPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OfferCouponPageRoutingModule)();
};
_OfferCouponPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _OfferCouponPageRoutingModule
});
_OfferCouponPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OfferCouponPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 67683
/*!*****************************************************!*\
  !*** ./src/app/offer-coupon/offer-coupon.module.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferCouponPageModule: () => (/* binding */ OfferCouponPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _offer_coupon_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-coupon-routing.module */ 77946);
/* harmony import */ var _offer_coupon_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offer-coupon.page */ 55820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _OfferCouponPageModule;






class OfferCouponPageModule {}
_OfferCouponPageModule = OfferCouponPageModule;
_OfferCouponPageModule.ɵfac = function OfferCouponPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OfferCouponPageModule)();
};
_OfferCouponPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _OfferCouponPageModule
});
_OfferCouponPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _offer_coupon_routing_module__WEBPACK_IMPORTED_MODULE_3__.OfferCouponPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OfferCouponPageModule, {
    declarations: [_offer_coupon_page__WEBPACK_IMPORTED_MODULE_4__.OfferCouponPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _offer_coupon_routing_module__WEBPACK_IMPORTED_MODULE_3__.OfferCouponPageRoutingModule]
  });
})();

/***/ },

/***/ 55820
/*!***************************************************!*\
  !*** ./src/app/offer-coupon/offer-coupon.page.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferCouponPage: () => (/* binding */ OfferCouponPage)
/* harmony export */ });
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/clipboard */ 46962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication */ 82491);
var _OfferCouponPage;











const _c0 = a0 => ({
  "margin-bottom": a0
});
const _c1 = () => [1, 2, 3];
function OfferCouponPage_ng_container_0_ion_header_1_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons")(1, "ion-back-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_0_ion_header_1_ion_buttons_2_Template_ion_back_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OfferCouponPage_ng_container_0_ion_header_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OfferCouponPage_ng_container_0_ion_header_1_ion_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OfferCouponPage_ng_container_0_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 3)(1, "ion-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OfferCouponPage_ng_container_0_ion_header_1_ion_buttons_2_Template, 2, 0, "ion-buttons", 0)(3, OfferCouponPage_ng_container_0_ion_header_1_div_3_Template, 2, 0, "div", 5)(4, OfferCouponPage_ng_container_0_ion_header_1_ion_title_4_Template, 2, 0, "ion-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.storePage !== "offer-coupon" || !ctx_r1.storePage) && ctx_r1.metaData.msiteFolder == "seabirdTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.storePage && ctx_r1.storePage !== "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.storePage == "more" || !ctx_r1.storePage);
  }
}
function OfferCouponPage_ng_container_0_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 10)(2, "ion-buttons", 11)(3, "ion-back-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_0_ion_header_2_Template_ion_back_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, (coupon_r4.coupon_code ? coupon_r4.coupon_code : coupon_r4.title) === "Refer and Earn" ? "20px" : "5px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coupon_r4.coupon_code ? coupon_r4.coupon_code : coupon_r4.title, "");
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r4.description);
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Valid till: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r4.valid_till);
  }
}
function OfferCouponPage_ng_container_0_ion_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 14)(1, "ion-row", 15)(2, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OfferCouponPage_ng_container_0_ion_card_5_ion_icon_3_Template, 1, 0, "ion-icon", 17)(4, OfferCouponPage_ng_container_0_ion_card_5_ion_icon_4_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OfferCouponPage_ng_container_0_ion_card_5_p_6_Template, 2, 4, "p", 20)(7, OfferCouponPage_ng_container_0_ion_card_5_p_7_Template, 2, 1, "p", 21)(8, OfferCouponPage_ng_container_0_ion_card_5_p_8_Template, 4, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r4.coupon_type == "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r4.coupon_type != "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r4.coupon_code ? coupon_r4.coupon_code : coupon_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r4.valid_till);
  }
}
function OfferCouponPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferCouponPage_ng_container_0_ion_header_1_Template, 5, 3, "ion-header", 1)(2, OfferCouponPage_ng_container_0_ion_header_2_Template, 6, 0, "ion-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-content")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OfferCouponPage_ng_container_0_ion_card_5_Template, 9, 5, "ion-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "seabirdTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder != "seabirdTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.couponList);
  }
}
function OfferCouponPage_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_1_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OfferCouponPage_ng_container_1_ng_container_8_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-skeleton-text", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 44)(5, "ion-skeleton-text", 45)(6, "ion-skeleton-text", 46)(7, "ion-skeleton-text", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("animated", true);
  }
}
function OfferCouponPage_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferCouponPage_ng_container_1_ng_container_8_article_1_Template, 8, 5, "article", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
  }
}
function OfferCouponPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Something went wrong. Please try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_h2_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r6.title);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r6.description);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59)(1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_1_ng_container_10_article_1_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const coupon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.copyCode(coupon_r6.coupon_code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r6.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Copy code " + coupon_r6.coupon_code);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Valid till ", coupon_r6.valid_till, "");
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 52)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OfferCouponPage_ng_container_1_ng_container_10_article_1_ion_icon_2_Template, 1, 0, "ion-icon", 17)(3, OfferCouponPage_ng_container_1_ng_container_10_article_1_ion_icon_3_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OfferCouponPage_ng_container_1_ng_container_10_article_1_h2_5_Template, 2, 1, "h2", 53)(6, OfferCouponPage_ng_container_1_ng_container_10_article_1_p_6_Template, 2, 1, "p", 54)(7, OfferCouponPage_ng_container_1_ng_container_10_article_1_div_7_Template, 6, 2, "div", 55)(8, OfferCouponPage_ng_container_1_ng_container_10_article_1_p_8_Template, 2, 1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.coupon_type == "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.coupon_type != "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r6.valid_till);
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No offers available right now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OfferCouponPage_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferCouponPage_ng_container_1_ng_container_10_article_1_Template, 9, 6, "article", 50)(2, OfferCouponPage_ng_container_1_ng_container_10_p_2_Template, 2, 0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.couponList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.couponList.length === 0);
  }
}
function OfferCouponPage_ng_container_1_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 65)(1, "div", 66)(2, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Credited to Seabird Wallet after their first trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_1_section_11_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.sbInvite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Refer a friend, both get ", ctx_r1.sbReferAmount, "");
  }
}
function OfferCouponPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 29)(2, "ion-toolbar", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OfferCouponPage_ng_container_1_button_4_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OfferCouponPage_ng_container_1_ng_container_8_Template, 2, 2, "ng-container", 0)(9, OfferCouponPage_ng_container_1_div_9_Template, 4, 0, "div", 35)(10, OfferCouponPage_ng_container_1_ng_container_10_Template, 3, 2, "ng-container", 0)(11, OfferCouponPage_ng_container_1_section_11_Template, 8, 1, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbShowBack);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbOffersState === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbOffersState === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbOffersState === "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sbReferAmount);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 78);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 79);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r10.title);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r10.description);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Valid till: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r10.valid_till);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 14)(1, "ion-row", 15)(2, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OfferCouponPage_ng_container_2_div_8_ion_card_1_ion_icon_3_Template, 1, 0, "ion-icon", 75)(4, OfferCouponPage_ng_container_2_div_8_ion_card_1_ion_icon_4_Template, 1, 0, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OfferCouponPage_ng_container_2_div_8_ion_card_1_p_6_Template, 2, 1, "p", 77)(7, OfferCouponPage_ng_container_2_div_8_ion_card_1_p_7_Template, 2, 1, "p", 21)(8, OfferCouponPage_ng_container_2_div_8_ion_card_1_p_8_Template, 4, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.coupon_type == "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.coupon_type != "refer_earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.coupon_code ? coupon_r10.coupon_code : coupon_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.valid_till);
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_2_ion_row_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 87)(1, "ion-col", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coupon_r10.description, " ");
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_2_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 89)(1, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", "Exp Date: ", " ", coupon_r10.valid_till, " ");
  }
}
function OfferCouponPage_ng_container_2_div_8_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card")(1, "ion-row", 81)(2, "ion-col", 82)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 83)(6, "div")(7, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_2_div_8_ion_card_2_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.copyCode(coupon_r10.coupon_code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OfferCouponPage_ng_container_2_div_8_ion_card_2_ion_row_8_Template, 3, 1, "ion-row", 85)(9, OfferCouponPage_ng_container_2_div_8_ion_card_2_ion_row_9_Template, 3, 2, "ion-row", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](coupon_r10.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.valid_till);
  }
}
function OfferCouponPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferCouponPage_ng_container_2_div_8_ion_card_1_Template, 9, 5, "ion-card", 74)(2, OfferCouponPage_ng_container_2_div_8_ion_card_2_Template, 10, 3, "ion-card", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !coupon_r10.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r10.coupon_code);
  }
}
function OfferCouponPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 70)(2, "ion-toolbar", 71)(3, "ion-buttons", 11)(4, "ion-back-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_2_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "My coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OfferCouponPage_ng_container_2_div_8_Template, 3, 2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.couponList[0]);
  }
}
function OfferCouponPage_ng_container_3_ng_container_9_ion_card_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_3_ng_container_9_ion_card_1_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const coupon_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleMore(coupon_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.showMore ? "View less" : "View more");
  }
}
function OfferCouponPage_ng_container_3_ng_container_9_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 99)(1, "ion-card-header", 100)(2, "ion-card-title")(3, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Coupon Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content", 103)(8, "div", 104)(9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OfferCouponPage_ng_container_3_ng_container_9_ion_card_1_div_15_Template, 2, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "span")(18, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Apply above mentioned code to avail this offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*T&C Applies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const coupon_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](" " + coupon_r14.coupon_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.splitCouponString(coupon_r14.description).part1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.splitCouponString(coupon_r14.description).part2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx_r1.isLongText(ctx_r1.splitCouponString(coupon_r14.description).part3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.splitCouponString(coupon_r14.description).part3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isLongText(ctx_r1.splitCouponString(coupon_r14.description).part3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("noDescription", !coupon_r14.description);
  }
}
function OfferCouponPage_ng_container_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferCouponPage_ng_container_3_ng_container_9_ion_card_1_Template, 22, 9, "ion-card", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const coupon_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", coupon_r14.coupon_code);
  }
}
function OfferCouponPage_ng_container_3_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 111)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No offers available at the moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function OfferCouponPage_ng_container_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "ion-row")(3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_3_div_11_Template_ion_row_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.showDisc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "OK", " ");
  }
}
function OfferCouponPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 91)(2, "ion-toolbar", 92)(3, "ion-buttons", 93)(4, "ion-back-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferCouponPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 95)(8, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OfferCouponPage_ng_container_3_ng_container_9_Template, 2, 1, "ng-container", 73)(10, OfferCouponPage_ng_container_3_ng_container_10_Template, 4, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OfferCouponPage_ng_container_3_div_11_Template, 8, 2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("noCoupons", ctx_r1.couponList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.couponList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.couponList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showMore);
  }
}
class OfferCouponPage {
  constructor(apiFactory, loaderService, appData, commonStorage, util, platform, router, location, authenticate, navCtrl) {
    this.apiFactory = apiFactory;
    this.loaderService = loaderService;
    this.appData = appData;
    this.commonStorage = commonStorage;
    this.util = util;
    this.platform = platform;
    this.router = router;
    this.location = location;
    this.authenticate = authenticate;
    this.navCtrl = navCtrl;
    this.couponList = [];
    this.storePage = '';
    this.showMore = false;
    this.sbShowBack = false;
    // seabirdThemeNew first-load state: skeleton while 'loading', empty message only when 'ready' with no offers, error block on 'error'.
    this.sbOffersState = 'loading';
    // seabirdThemeNew referral banner: amount from the existing refer_and_earn.json (apiFactory.referAndEarn()).
    // null = banner hidden (not loaded yet, logged out, API error, or no referral amount — as the Refer & Earn page).
    this.sbReferAmount = null;
    this.sbReferToken = null; // token the amount was loaded for (avoids repeat calls)
  }
  ngOnInit() {
    var _this$router$getCurre, _this$router$getCurre2;
    this.metaData = this.commonStorage.getItem('metaData');
    const sbUrl = ((_this$router$getCurre = (_this$router$getCurre2 = this.router.getCurrentNavigation()) === null || _this$router$getCurre2 === void 0 ? void 0 : _this$router$getCurre2.finalUrl) !== null && _this$router$getCurre !== void 0 ? _this$router$getCurre : this.router.parseUrl(this.router.url)).toString();
    this.sbShowBack = !sbUrl.startsWith('/tabs/');
    this.OfferCouponPage();
    setTimeout(() => {
      this.storePage = this.commonStorage.getItem('tabSelected');
    }, 100);
  }
  ionViewWillEnter() {
    if (this.metaData && this.metaData.msiteFolder === 'seabirdThemeNew') {
      this.sbLoadReferral();
    }
  }
  // seabirdThemeNew: one referAndEarn() call per logged-in token; same "no referral" rule as ReferEarnPage.defaultCall().
  sbLoadReferral() {
    const token = this.authenticate.isLoggedIn() ? this.authenticate.token : null;
    if (!token || !(this.metaData && this.metaData.is_wallet_promotional)) {
      this.sbReferAmount = null;
      this.sbReferToken = null;
      return;
    }
    if (this.sbReferToken === token) {
      return; // already loaded (or loading) for this user
    }
    this.sbReferToken = token;
    this.sbReferAmount = null;
    this.apiFactory.referAndEarn().subscribe(res => {
      if (this.sbReferToken !== token) {
        return;
      } // user changed while loading
      const raw = res && res.data ? res.data.referral_amount : null;
      const amount = raw !== null && raw !== undefined && raw !== '' ? Number(raw) : NaN;
      if (raw != '0' && raw != '0.0' && raw !== '' && isFinite(amount) && amount > 0) {
        const sym = this.metaData && this.metaData.currencySym ? this.metaData.currencySym : '₹';
        this.sbReferAmount = sym + (Number.isInteger(amount) ? String(amount) : amount.toFixed(2));
      } else {
        this.sbReferAmount = null;
      }
    }, () => {
      if (this.sbReferToken === token) {
        this.sbReferAmount = null;
        this.sbReferToken = null; // allow a retry on the next visit
      }
    });
  }
  sbInvite() {
    this.navCtrl.navigateForward('refer-earn'); // same route as More → Refer and Earn
  }
  ngOnDestroy() {
    this.storePage = '';
  }
  OfferCouponPage() {
    var _this$metaData;
    let platformNumber;
    if (!this.appData.isANDROID && !this.appData.isIOS && this.appData.isWEBAPP) {
      platformNumber = 'web';
    } else if (!this.appData.isANDROID && this.appData.isIOS && !this.appData.isWEBAPP) {
      platformNumber = 'ios';
    } else if (this.appData.isANDROID && !this.appData.isIOS && !this.appData.isWEBAPP) {
      platformNumber = 'android';
    }
    // seabirdThemeNew shows skeleton cards instead of the "Please wait…" popup on this load.
    const sbNew = ((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'seabirdThemeNew';
    if (!sbNew) {
      this.loaderService.showLoadingDefault();
    }
    this.sbOffersState = 'loading';
    this.apiFactory.offerCoupon(platformNumber).subscribe(coupon => {
      if (!sbNew) {
        this.loaderService.hideLoadingDefault();
      }
      this.sbOffersState = (coupon === null || coupon === void 0 ? void 0 : coupon.code) == 200 ? 'ready' : 'error';
      if (coupon.code == 200) {
        // Expecting coupon.result to be an array of offer objects.
        // If it's already an array, assign directly; if not, wrap.
        const data = coupon.result;
        if (Array.isArray(data)) {
          this.couponList = data;
        } else {
          // Log unexpected shape for debugging
          console.warn('OfferCoupon API result not array:', data);
          this.couponList = data ? [data] : [];
        }
        // Debug one sample to verify available keys
        if (this.couponList.length) {
          const sample = this.couponList[0];
          console.log('Sample offer keys:', Object.keys(sample));
        }
      }
    }, err => {
      if (!sbNew) {
        this.loaderService.hideLoadingDefault();
      }
      this.sbOffersState = 'error';
    });
  }
  copyTextToClipboard(text) {
    if (this.platform.is('cordova')) {
      _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_0__.Clipboard.write({
        string: text
      }).then(() => {
        this.util.showToast("Code copied to clipboard: " + text);
      }, err => {
        console.error('Error copying text:', err);
        this.util.showToast("'Error copying text: " + err);
      });
    } else {
      this.copyTextUsingClipboardAPI(text);
    }
  }
  copyTextUsingClipboardAPI(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.util.showToast("Code copied to clipboard: " + text);
      }, err => {
        console.error('Error copying text:', err);
        this.util.showToast("'Error copying text: ", err);
      });
    } else {}
  }
  copyCode(couponCode) {
    if (this.platform.is('cordova')) {
      _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_0__.Clipboard.write({
        string: couponCode
      }).then(() => {
        this.util.showToast('Code copied to clipboard');
      }).catch(error => {
        this.util.showToast("'Error copying code");
      });
    } else {
      this.copyToBrowserClipboard(couponCode);
    }
  }
  copyToBrowserClipboard(couponCode) {
    const textArea = document.createElement('textarea');
    textArea.value = couponCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.util.showToast('Code copied to clipboard');
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
  splitCouponString(text) {
    const match = text.match(/(\d+(\.\d+)?)%/);
    if (!match) {
      return {
        part1: text,
        part2: '',
        part3: ''
      };
    }
    const percentage = match[0];
    let num = parseFloat(percentage.replace('%', ''));
    let percent = Number.isInteger(num) ? `${num}%` : `${num}%`;
    const index = match.index;
    const beforePercentage = text.substring(0, index - 1).trim();
    const percentageTrimmed = percent.trim();
    const afterPercentage = text.substring(index + percentage.length).replace(/^[^\w]+/, '').trim();
    return {
      part1: beforePercentage,
      part2: percentageTrimmed,
      part3: afterPercentage
    };
  }
  /**
   * Apply a coupon (placeholder implementation until backend integration).
   * Shows toast feedback and could be extended to trigger fare recomputation.
   */
  applyCoupon(coupon) {
    if (!coupon) {
      return;
    }
    const code = coupon.coupon_code || coupon.title || 'Coupon';
    // Placeholder: store selected coupon code in common storage if needed for later fare break-up usage.
    try {
      this.commonStorage.setItem('selectedCoupon', code);
    } catch (e) {/* storage fail silently */}
    this.util.showToast(code + ' applied');
  }
  /** Resolve a coupon code from varying possible API field names */
  resolveCouponCode(coupon) {
    if (!coupon) return 'CODE';
    return coupon.coupon_code || coupon.code || coupon.promo_code || coupon.coupon || coupon.offer_coupon || coupon.title || 'CODE';
  }
  isLongText(text) {
    return text && text.length > 40; // you can change the limit
  }
  toggleMore(coupon = null) {
    if (!this.showMore) {
      this.showMore = !this.showMore;
      this.showDisc = coupon.description;
    } else {
      this.showMore = !this.showMore;
      this.showDisc = "";
    }
  }
}
_OfferCouponPage = OfferCouponPage;
_OfferCouponPage.ɵfac = function OfferCouponPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OfferCouponPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_4__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController));
};
_OfferCouponPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _OfferCouponPage,
  selectors: [["app-offer-coupon"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], ["class", "background-cl", 4, "ngIf"], ["style", "border: 1px solid #D3E1FE;margin: 10px 16px;", 4, "ngFor", "ngForOf"], [1, "background-cl"], ["mode", "md", 1, "background-cl"], ["class", "toolbar-title-sea", 4, "ngIf"], ["class", "seabirdOffers", 4, "ngIf"], [2, "color", "var(--placeholderColor)", 3, "click"], [1, "toolbar-title-sea"], [1, "seabirdOffers"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [3, "click"], [1, "head"], [2, "border", "1px solid #D3E1FE", "margin", "10px 16px"], [2, "display", "flex", "align-items", "center"], ["size", "2", 2, "text-align", "center"], ["style", "font-size: 50px;", "src", "././assets/icon/referEarnNew.svg", 4, "ngIf"], ["style", "font-size: 50px;", "src", "././assets/icon/Flat.svg", 4, "ngIf"], ["size", "10"], ["class", "refer", 3, "ngStyle", 4, "ngIf"], ["class", "earnFriend", 4, "ngIf"], ["class", "valid", 4, "ngIf"], ["src", "././assets/icon/referEarnNew.svg", 2, "font-size", "50px"], ["src", "././assets/icon/Flat.svg", 2, "font-size", "50px"], [1, "refer", 3, "ngStyle"], [1, "earnFriend"], [1, "valid"], [2, "color", "#000"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["type", "button", "class", "sb-icon-btn", "aria-label", "Back", 3, "click", 4, "ngIf"], [1, "sb-trips-title"], [1, "sb-offers"], ["class", "sb-results-empty sb-results-error", "role", "alert", 4, "ngIf"], ["class", "sb-refer-banner", 4, "ngIf"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], ["class", "sb-coupon sb-coupon--skeleton", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "sb-coupon", "sb-coupon--skeleton"], [1, "sb-coupon__stub"], [1, "sb-skel", "sb-skel--icon", 3, "animated"], [1, "sb-coupon__body"], [1, "sb-skel", "sb-skel--title", 3, "animated"], [1, "sb-skel", "sb-skel--line", 3, "animated"], [1, "sb-skel", "sb-skel--code", 3, "animated"], [1, "sb-skel", "sb-skel--line-short", 3, "animated"], ["role", "alert", 1, "sb-results-empty", "sb-results-error"], ["name", "alert-circle-outline", "aria-hidden", "true"], ["class", "sb-coupon", 4, "ngFor", "ngForOf"], ["class", "sb-trips-empty", 4, "ngIf"], [1, "sb-coupon"], ["class", "sb-coupon__title", 4, "ngIf"], ["class", "sb-coupon__sub", 4, "ngIf"], ["class", "sb-coupon__code-row", 4, "ngIf"], ["class", "sb-coupon__valid", 4, "ngIf"], [1, "sb-coupon__title"], [1, "sb-coupon__sub"], [1, "sb-coupon__code-row"], [1, "sb-coupon__code"], ["type", "button", 1, "sb-coupon__copy", 3, "click"], ["src", "./assets/seabird-new/copy_icon.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-coupon__valid"], [1, "sb-trips-empty"], [1, "sb-refer-banner"], [1, "sb-refer-banner__text"], [1, "sb-refer-banner__title"], [1, "sb-refer-banner__body"], ["type", "button", 1, "sb-refer-banner__btn", 3, "click"], [1, "theme2"], ["mode", "md", 1, "h50"], [1, "head", 2, "margin-left", "28%", "font-size", "16px"], [4, "ngFor", "ngForOf"], ["style", "border: 1px solid #D3E1FE;margin: 10px 16px;", 4, "ngIf"], ["style", "font-size: 30px;", "src", "././assets/icon/referEarnNew.svg", 4, "ngIf"], ["style", "font-size: 35px;", "src", "././assets/icon/Flat.svg", 4, "ngIf"], ["class", "refer", 4, "ngIf"], ["src", "././assets/icon/referEarnNew.svg", 2, "font-size", "30px"], ["src", "././assets/icon/Flat.svg", 2, "font-size", "35px"], [1, "refer"], [1, "copyRow"], ["size", "6", 1, "titleShow"], ["size", "6", 2, "text-align", "end"], ["src", "././assets/icon/ourbusCopy.svg", 1, "copyCode", 3, "click"], ["style", "padding: 8px;", 4, "ngIf"], ["style", "padding: 8px;text-align: end;", 4, "ngIf"], [2, "padding", "8px"], ["size", "10", 2, "font-size", "14px", "font-weight", "300", "color", "#747474"], [2, "padding", "8px", "text-align", "end"], ["size", "12", 2, "font-size", "14px", "font-weight", "300", "color", "#747474"], [1, "offers-header", "shyamoli-header"], ["mode", "md", 1, "offers-toolbar", "shyamoli-toolbar"], ["slot", "start", 2, "position", "absolute"], [1, "offers-title", "shyamoli-title", 2, "text-align", "center", "font-weight", "600"], [1, "offers-content", "shyamolitheme"], [1, "offers-wrapper"], ["class", "whole center", 4, "ngIf"], ["class", "offer-card", "style", "background: url('./assets/icon/shyamoli-offers1.svg') no-repeat center top;", 4, "ngIf"], [1, "offer-card", 2, "background", "url('./assets/icon/shyamoli-offers1.svg') no-repeat center top"], [1, "offer-card-header", 2, "background", "url('./assets/icon/shyamoli-offer-title.svg') no-repeat center top"], [1, "offer-card-label"], [1, "offer-card-code"], [1, "offer-card-body"], [1, "offer-body-inner"], [1, "offer-label-text"], [1, "offer-percent"], ["class", "view-more", 3, "click", 4, "ngIf"], [1, "offer-note"], [1, "offer-tnc"], [1, "view-more", 3, "click"], [1, "no-offers"], [1, "whole", "center"], [1, "legend-box"], [1, "circle"], [2, "text-align", "center", "color", "var(--iconsAndButtonsColor)", "margin", "20px 0px 0px"]],
  template: function OfferCouponPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OfferCouponPage_ng_container_0_Template, 6, 3, "ng-container", 0)(1, OfferCouponPage_ng_container_1_Template, 12, 5, "ng-container", 0)(2, OfferCouponPage_ng_container_2_Template, 9, 1, "ng-container", 0)(3, OfferCouponPage_ng_container_3_Template, 12, 5, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder != "ourbustheme" && ctx.metaData.msiteFolder != "shyamolitheme" && ctx.metaData.msiteFolder != "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton],
  styles: [".refer[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 2px;\n}\n\n.earnFriend[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0px;\n  margin-right: 2px;\n  margin-bottom: 4px;\n}\n\n.valid[_ngcontent-%COMP%] {\n  color: #5F5F5F;\n  font-size: 12px;\n  font-weight: 400;\n  margin: 2px;\n}\n\n.copyRow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 8px;\n  background: #EFEFEF;\n  border-radius: 4px;\n  padding: 8px;\n}\n\n.titleShow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n\n.copyCode[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  padding: 12px;\n  border-radius: 8px;\n  width: 24px;\n  height: 24px;\n}\n\n.background-cl[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n  --background: var(--primary) !important;\n}\n\n  .shyamolitheme ion-header.offers-header {\n  background: #000;\n}\n  .shyamolitheme .offers-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #fff;\n  text-align: center;\n  margin: 0;\n}\n  .shyamolitheme ion-content.offers-content {\n  --background: #f8f8f8;\n}\n  .shyamolitheme .offers-wrapper {\n  height: 32%;\n}\n  .shyamolitheme .offer-card {\n  box-shadow: none;\n  height: 130%;\n  margin: 5px;\n}\n  .shyamolitheme .offer-card.ios {\n  height: 150% !important;\n}\n  .shyamolitheme .offer-card::before {\n  left: -13px;\n}\n  .shyamolitheme .offer-card::after {\n  right: -13px;\n}\n  .shyamolitheme .offer-card-header {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #fff;\n  position: relative;\n  top: 3%;\n  padding: 16px;\n}\n  .shyamolitheme .offer-card-label {\n  color: #fff;\n  font-size: 16px;\n  opacity: 0.85;\n}\n  .shyamolitheme .offer-card-code {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n}\n  .shyamolitheme .offer-card-body {\n  text-align: center;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 18px;\n}\n  .shyamolitheme .offer-toptext {\n  font-size: 24px;\n  font-weight: 700;\n  color: #111;\n}\n  .shyamolitheme .offer-percent {\n  font-size: 70px;\n  font-weight: 900;\n  color: #ff7a00;\n  line-height: 1;\n  margin-top: 10px;\n}\n  .shyamolitheme .offer-label-text {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000;\n  margin-top: 13px;\n  line-height: 18px;\n  margin-left: 8px;\n  padding: 0px 30px;\n  text-align: center;\n  padding-top: 5px;\n}\n  .shyamolitheme .offer-note {\n  font-size: 12px;\n  font-weight: 600;\n  color: #444;\n  margin-top: 5px;\n}\n  .shyamolitheme .offer-tnc {\n  font-weight: 500;\n  font-size: 11px;\n  color: #FF7945;\n  margin-top: 5px;\n}\n@media (hover: hover) {\n    .shyamolitheme .offer-card:hover {\n    transform: translateY(-4px);\n    transition: all 0.25s ease;\n  }\n}\n\n.toolbar-title-sea[_ngcontent-%COMP%] {\n  color: var(--placeholderColor);\n  font-weight: bold;\n  margin-left: 20px;\n}\n\n.offer-label-text.collapsed[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.view-more[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 4px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 96%;\n  height: auto;\n  font-family: \"Gilroy-Medium\", sans-serif;\n  font-size: 16px;\n  text-align: center;\n}\n\n.noDescription[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 25%;\n}\n\n.no-offers[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  color: #555555;\n}\n\n.noCoupons[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.seabirdOffers[_ngcontent-%COMP%] {\n  color: var(--placeholderColor);\n  position: absolute;\n  top: 27%;\n  left: 10%;\n  font-weight: bold;\n}"]
});

/***/ }

}]);