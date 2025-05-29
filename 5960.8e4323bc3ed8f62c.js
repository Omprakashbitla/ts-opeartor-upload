"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5960],{

/***/ 867:
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 17516:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 85960:
/*!***************************************************!*\
  !*** ./src/app/cities-modal/cities-modal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitiesModalPage: () => (/* binding */ CitiesModalPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
var _CitiesModalPage;








function CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_0_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const city_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityTapped($event, city_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", city_r4.name + " ", " ", city_r4.time ? " -" + city_r4.time : " ", " ");
  }
}
function CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_1_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const city_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityTapped($event, city_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const city_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", city_r4.flags.svg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", city_r4.name, " (", city_r4.cca2, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", city_r4.idd, " ");
  }
}
function CitiesModalPage_ng_container_0_div_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_0_Template, 2, 2, "ion-item", 14)(1, CitiesModalPage_ng_container_0_div_13_ng_template_2_ion_item_1_Template, 7, 4, "ion-item", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.listNum != 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.listNum == 9);
  }
}
function CitiesModalPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CitiesModalPage_ng_container_0_div_13_ng_template_2_Template, 2, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 1, ctx_r1.cities, "name", ctx_r1.searchKey), "name"));
  }
}
function CitiesModalPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-buttons", 2)(4, "ion-back-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_0_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-buttons", 5)(8, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_0_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-content", 8)(11, "div", 9)(12, "ion-searchbar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function CitiesModalPage_ng_container_0_Template_ion_searchbar_ionInput_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.searchCities($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CitiesModalPage_ng_container_0_div_13_Template, 5, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.subdomain.includes("cbus") ? "content" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showCities);
  }
}
function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_img_1_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onImageError(city_r8.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "https://www.ourbus.in/web_assets/cities/" + city_r8.name + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityTapped($event, city_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_img_1_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.imageAvailability[city_r8.name] !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", city_r8.name + " ", " ", city_r8.time ? " -" + city_r8.time : " ", " ");
  }
}
function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_1_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityTapped($event, city_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", city_r8.flags.svg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", city_r8.name, " (", city_r8.cca2, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", city_r8.idd, " ");
  }
}
function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_2_Template_ion_item_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityTapped($event, city_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const city_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", city_r8.flags, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", city_r8.name, " (", city_r8.cca2, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", city_r8.idd, " ");
  }
}
function CitiesModalPage_ng_container_1_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_0_Template, 3, 3, "ion-item", 30)(1, CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_1_Template, 7, 4, "ion-item", 31)(2, CitiesModalPage_ng_container_1_div_14_ng_template_2_ion_item_2_Template, 7, 4, "ion-item", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.listNum != 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.listNum == 9 && !ctx_r1.isOurbus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.listNum == 9 && ctx_r1.isOurbus);
  }
}
function CitiesModalPage_ng_container_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "ion-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CitiesModalPage_ng_container_1_div_14_ng_template_2_Template, 3, 3, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 1, ctx_r1.cities, "name", ctx_r1.searchKey), "name"));
  }
}
function CitiesModalPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 19)(2, "ion-toolbar", 20)(3, "ion-row")(4, "ion-col", 21)(5, "ion-buttons")(6, "ion-back-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CitiesModalPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 22)(8, "ion-title", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Choose your location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 24)(12, "div", 25)(13, "ion-searchbar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function CitiesModalPage_ng_container_1_Template_ion_searchbar_ionInput_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.searchCities($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CitiesModalPage_ng_container_1_div_14_Template, 5, 8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showCities);
  }
}
class CitiesModalPage {
  constructor(commonStorage, util, params, modalController) {
    this.commonStorage = commonStorage;
    this.util = util;
    this.params = params;
    this.modalController = modalController;
    this.showCities = true;
    this.subdomain = '';
    this.isOurbus = false;
    this.imageAvailability = {};
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = commonStorage.localGet('metaData');
    this.subdomain = this.metaData && this.metaData.operatorInternalUrl ? this.metaData.operatorInternalUrl.split('.')[0] : '';
    this.listNum = this.params.get('list');
    let listName = this.params.get('name');
    if (this.listNum == 1) {
      this.cities = this.commonStorage.getItem(listName);
      this.title = 'Please Select Source';
    } else if (this.listNum == 2) {
      let originId = params.get('originId');
      this.cities = this.commonStorage.getItem(listName)[originId];
      const seen = {};
      this.cities = this.cities.filter(a => {
        if (!seen[a.name]) {
          seen[a.name] = true;
          return true;
        }
        return false;
      });
      this.title = 'Please Select Destination';
    } else if (this.listNum == 3) {
      this.cities = this.commonStorage.localGet(listName);
      this.title = 'Please select a city';
    } else if (this.listNum == 4) {
      let destinatinList = params.get('destinationList');
      this.cities = destinatinList;
      this.title = 'Please select a destination';
    } else if (this.listNum == 5) {
      this.cities = params.get('bpdpList');
      this.title = 'Please select a dropping point';
    } else if (this.listNum == 6) {
      this.cities = this.commonStorage.getItem(listName);
      this.title = 'Please Select Destination';
    } else if (this.listNum == 7) {
      let destinationId = params.get('destinationId');
      this.cities = this.commonStorage.getItem(listName)[destinationId];
      this.title = 'Please Select Origin';
    } else if (this.listNum == 8) {
      this.cities = params.get('bpdpList');
      this.title = params.get('title');
    } else if (this.listNum == 9) {
      let destinatinList = params.get('destinationList');
      this.isOurbus = params.get('isOurbus');
      this.cities = destinatinList;
      this.title = 'Please select a country code';
    }
    this.searchKey = "";
    setTimeout(() => {
      this.showCities = true;
    }, 100);
  }
  onImageError(cityName) {
    // Set the specific city's image availability to false
    this.imageAvailability[cityName] = false;
  }
  searchCities(ev) {
    this.searchKey = ev.target.value;
  }
  cityTapped(event, city) {
    // That's right, we're pushing to ourselves!
    this.modalController.dismiss(city);
  }
  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss("");
  }
}
_CitiesModalPage = CitiesModalPage;
_CitiesModalPage.ɵfac = function CitiesModalPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CitiesModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_1__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController));
};
_CitiesModalPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _CitiesModalPage,
  selectors: [["app-cities-modal"]],
  standalone: false,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["mode", "md", 3, "ngClass"], ["slot", "start"], [3, "click"], ["slot", "start", 1, "head"], ["slot", "end"], ["mode", "md", 3, "click"], ["src", "./assets/icon/Cross.svg", "name", "close", "item-start", ""], [2, "--background", "white"], [1, "fixed-top"], ["autofocus", "", "placeholder", "Search", 3, "ionInput"], ["class", "cities-list", 4, "ngIf"], [1, "cities-list"], ["ngFor", "", 3, "ngForOf"], ["class", "fnt-14", 3, "click", 4, "ngIf"], ["class", "fnt-14", "lines", "none", 3, "click", 4, "ngIf"], [1, "fnt-14", 3, "click"], ["lines", "none", 1, "fnt-14", 3, "click"], [2, "height", "22px", "width", "22px", 3, "src"], [1, "ourbustheme"], ["mode", "md"], ["size", "2"], ["size", "8", 2, "text-align", "center"], [1, "head"], [1, "ourbustheme", 2, "--background", "#FCFCFC"], [1, "fixed-top", "ourbustheme", 2, "background-color", "#FFF"], ["mode", "ios", "autofocus", "", "placeholder", "Search here ..", 3, "ionInput"], ["class", "cities-list", "style", "background-color:#FCFCFC", 4, "ngIf"], [1, "cities-list", 2, "background-color", "#FCFCFC"], [2, "background", "#FCFCFC"], ["class", "fnt-14-ourbus", 3, "click", 4, "ngIf"], ["class", "fnt-14-ourbus", "lines", "none", 3, "click", 4, "ngIf"], [1, "fnt-14-ourbus", 3, "click"], ["style", "filter: drop-shadow(0 0 .01px black); width: 30px; height: 30px; margin-right: 5px;", 3, "src", "error", 4, "ngIf"], [2, "filter", "drop-shadow(0 0 .01px black)", "width", "30px", "height", "30px", "margin-right", "5px", 3, "error", "src"], ["lines", "none", 1, "fnt-14-ourbus", 3, "click"]],
  template: function CitiesModalPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CitiesModalPage_ng_container_0_Template, 14, 3, "ng-container", 0)(1, CitiesModalPage_ng_container_1_Template, 15, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderbyPipe],
  styles: ["@charset \"UTF-8\";\nbutton.item-block.item.item-md[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dedede;\n}\n\n.fixed-top[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  top: 55px;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background-color: white;\n}\n\n.cities-list[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  list-style-type: none;\n  overflow-y: scroll;\n  height: 100vh;\n  padding-bottom: 110px;\n  background-color: #fff;\n}\n.cities-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.cities-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .item-ios[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.cities-list[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .item-ios[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.content-ios[_ngcontent-%COMP%]   .fixed-top[_ngcontent-%COMP%] {\n  top: 64px;\n}\n\n.ct-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  margin-top: -20px;\n  margin-left: -14px;\n}\n\nion-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: #444;\n  fill: #222;\n  z-index: -1;\n}\n\n.fnt-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  --background: #191966;\n}\n\n.searchbar-input-container.sc-ion-searchbar-ios[_ngcontent-%COMP%] {\n  background-color: #f5f5f5 !important;\n  border-radius: 10px !important;\n  padding: 10px !important;\n  border: 1px solid #D9D9D9 !important;\n}\n\n.fnt-14-ourbus[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-family: \"Test S\u00F6hne\" !important;\n  --background:#FCFCFC;\n}\n\n.sc-ion-searchbar-ios-h[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 10px 7px 7px 14px;\n  width: 93%;\n}"]
});

/***/ })

}]);