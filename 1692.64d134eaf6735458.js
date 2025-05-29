"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1692],{

/***/ 37762:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 65765:
/*!********************************************!*\
  !*** ./src/app/services/plugin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginProvider: () => (/* binding */ PluginProvider)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);

var _PluginProvider;


class PluginProvider {
  constructor() {
    this.locationCoords = {};
  }
  // To check whether Location Service is enabled or Not
  locationStatus() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission first
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        // Check if permission is granted
        if (permissionStatus.location === 'granted') {
          try {
            const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
            return true;
          } catch (error) {
            console.error('Error getting location:', error);
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error checking location status:', error);
        return false;
      }
    })();
  }
  checkLocationEnabled() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          try {
            // Attempt to get the current position to confirm location is enabled
            const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
            return true;
          } catch (error) {
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error checking location status:', error);
        return false;
      }
    })();
  }
  // Check if application has GPS access permission
  checkGPSPermission() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          // If permission is granted, proceed with checking if GPS is enabled
          return _this.askToTurnOnGPS();
        } else {
          return _this.requestGPSPermission();
        }
      } catch (error) {
        console.error('Error checking GPS permission:', error);
        return false;
      }
    })();
  }
  // Simulating askToTurnOnGPS method for enabling GPS
  askToTurnOnGPS() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // We can attempt to get the location as a method to trigger GPS enabling
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        return true;
      } catch (error) {
        return false;
      }
    })();
  }
  // Simulating requestGPSPermission method for requesting location permissions
  requestGPSPermission() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request location permission again if it was not granted
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
        if (permissionStatus.location === 'granted') {
          return _this2.askToTurnOnGPS();
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error requesting GPS permission:', error);
        return false;
      }
    })();
  }
  getLocationCoordinates() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get the current position
        const resp = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        // Store the coordinates in locationCoords object
        _this3.locationCoords.latitude = resp.coords.latitude;
        _this3.locationCoords.longitude = resp.coords.longitude;
        _this3.locationCoords.accuracy = resp.coords.accuracy;
        _this3.locationCoords.timestamp = resp.timestamp;
        return _this3.locationCoords;
      } catch (error) {
        console.error('Error getting location:', error);
        alert('Error getting location');
        return false; // You can return false or handle error accordingly
      }
    })();
  }
}
_PluginProvider = PluginProvider;
_PluginProvider.ɵfac = function PluginProvider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PluginProvider)();
};
_PluginProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _PluginProvider,
  factory: _PluginProvider.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 71692:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPage: () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 59361);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plugin.service */ 65765);

var _MapPage;







const _c0 = ["mapCanvas"];
class MapPage {
  constructor(doc, platform, router, route, navParams, modalCtrl, loader, locationProvider) {
    this.doc = doc;
    this.platform = platform;
    this.router = router;
    this.route = route;
    this.navParams = navParams;
    this.modalCtrl = modalCtrl;
    this.loader = loader;
    this.locationProvider = locationProvider;
    this.mapData = [];
    this.title = "Map";
    this.path = [];
    this.destination = navParams.get('destination');
    this.boardingPoint = navParams.get('boardingPoint');
    this.title = navParams.get('title');
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.loadMap();
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  loadMap() {
    setTimeout(() => {
      const map_options = {
        zoom: 5,
        disableDefaultUI: true,
        center: this.destination,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, map_options);
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        this.mapElement.nativeElement.classList.add('show-map');
      });
      this.map.setZoom(15);
      this.currentLocMarker = new google.maps.Marker({
        position: this.destination,
        title: this.boardingPoint,
        map: this.map
      });
      const iw = new google.maps.InfoWindow({
        content: this.boardingPoint,
        maxWidth: 300,
        disableAutoPan: false
      });
      // Use an arrow function to preserve the correct `this` context.
      google.maps.event.addListener(this.currentLocMarker, "click", e => {
        iw.open(this.map, this.currentLocMarker);
      });
    }, 100);
  }
  getDirection() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loader.showLoadingDefault();
      try {
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 3600
        });
        const {
          latitude,
          longitude
        } = position.coords;
        _this.currentLocMarker.setMap(null);
        _this.loader.hideLoadingDefault();
        _this.origin = new google.maps.LatLng(latitude, longitude);
        const pointA = new google.maps.LatLng(latitude, longitude);
        const pointB = _this.destination;
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({
          map: _this.map
        });
        directionsService.route({
          origin: pointA,
          destination: pointB,
          travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            console.error('Directions request failed due to', status);
          }
        });
        _this.map.panTo(_this.origin);
        _this.map.setZoom(12);
      } catch (error) {
        _this.loader.hideLoadingDefault();
        console.error('Error getting location:', error);
      }
      const watchId = _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.watchPosition({}, (data, err) => {
        if (err) {
          console.error('Error watching position:', err);
        } else if (data) {}
      });
    })();
  }
  getCurrentLocation() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.loader.showLoadingDefault();
        // Ensure location is enabled
        const isLocationEnabled = yield _this2.locationProvider.checkLocationEnabled();
        if (!isLocationEnabled) {
          throw new Error('Location services are disabled.');
        }
        // Get the current position
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        if (!position || !position.coords) {
          throw new Error('Unable to fetch current location.');
        }
        // Extract latitude and longitude
        const {
          latitude,
          longitude
        } = position.coords;
        // Remove existing marker
        if (_this2.currentLocMarker) {
          _this2.currentLocMarker.setMap(null);
        }
        // Set origin and map details
        _this2.origin = new google.maps.LatLng(latitude, longitude);
        const pointA = _this2.origin;
        const pointB = _this2.destination;
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({
          map: _this2.map
        });
        // Request route
        directionsService.route({
          origin: pointA,
          destination: pointB,
          travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            console.error('Directions request failed due to:', status);
          }
        });
        // Pan and zoom the map
        _this2.map.panTo(_this2.origin);
        _this2.map.setZoom(12);
        // Watch position updates
        _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.watchPosition({}, (data, err) => {
          if (err) {
            console.error('Error watching position:', err);
          } else if (data && data.coords) {}
        });
      } catch (error) {
        _this2.loader.hideLoadingDefault();
        console.error('Error in getCurrentLocation:', error);
      }
    })();
  }
  ionViewWillLeave() {
    new google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.mapElement.nativeElement.classList.remove('show-map');
    });
  }
}
_MapPage = MapPage;
_MapPage.ɵfac = function MapPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_plugin_service__WEBPACK_IMPORTED_MODULE_3__.PluginProvider));
};
_MapPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _MapPage,
  selectors: [["app-map"]],
  viewQuery: function MapPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  inputs: {
    destination: "destination",
    boardingPoint: "boardingPoint"
  },
  standalone: false,
  decls: 13,
  vars: 1,
  consts: [["mapCanvas", ""], ["mode", "md", 1, "h50"], ["slot", "start"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "arrow-back", "color", "default"], [1, "head"], [1, "map-canvas"], ["padding", ""], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"]],
  template: function MapPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.dismiss());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 6, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MapPage_Template_ion_button_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.getCurrentLocation());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Get directions from your location");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar],
  styles: [".map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 20px;\n  height: 50px;\n  border-radius: 4px;\n}"]
});

/***/ })

}]);