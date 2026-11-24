"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[32],{

/***/ 60032
/*!***********************************************!*\
  !*** ./src/app/map-search/map-search.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapSearchPage: () => (/* binding */ MapSearchPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 59361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/plugin.service */ 65765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 89417);
var _MapSearchPage;







const _c0 = ["mapCanvas"];
class MapSearchPage {
  constructor(doc, platform, router, route, geolocation, navParams, modalCtrl, loader, locationProvider) {
    this.doc = doc;
    this.platform = platform;
    this.router = router;
    this.route = route;
    this.geolocation = geolocation;
    this.navParams = navParams;
    this.modalCtrl = modalCtrl;
    this.loader = loader;
    this.locationProvider = locationProvider;
    this.mapData = [];
    this.selectedLocation = {};
    this.title = "Map";
    this.path = [];
    this.boardingPoint = '';
    this.destination = new google.maps.LatLng({
      "lat": parseFloat('12.937582391777447'),
      "lng": parseFloat('77.63376279394532')
    });
    this.boardingPoint = "Vidhan soudha";
    this.title = navParams.get('title');
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.destination = {
      "lat": parseFloat('12.937582391777447'),
      "lng": parseFloat('77.63376279394532')
    };
    this.destination = {
      "lat": parseFloat(this.navParams.get('latitude')),
      "lng": parseFloat(this.navParams.get('longitude'))
    };
    this.loadMap();
  }
  loadMap() {
    setTimeout(() => {
      var map_options = {
        zoom: 5,
        disableDefaultUI: true,
        center: this.destination,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, map_options);
      new google.maps.event.addListenerOnce(this.map, 'idle', () => {
        this.mapElement.nativeElement.classList.add('show-map');
      });
      this.map.setZoom(15);
      var tthis = this;
      navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        lat = tthis.navParams.get('lat');
        lon = tthis.navParams.get('long');
        tthis.def_lat = lat;
        tthis.def_lon = lon;
        var latLong = new google.maps.LatLng(lat, lon);
        this.destination = latLong;
        this.map.setCenter(this.destination);
        this.currentLocMarker = new google.maps.Marker({
          position: this.destination,
          title: this.boardingPoint,
          // label: this.boardingPoint,import { Geolocation } from '@ionic-native/geolocation/ngx';
          // icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          map: this.map
        });
      }, err => {});
    }, 100);
    var iw = new google.maps.InfoWindow({
      content: this.boardingPoint,
      maxWidth: 300,
      infoBoxClearance: new google.maps.Size(1, 1),
      disableAutoPan: false
    });
    google.maps.event.addListener(this.currentLocMarker, "click", e => {
      // var latLong = new google.maps.LatLng(12.937582391777447, 77.63376279394532);
      //    this.map.setCenter(this.destination);
      iw.open(this.map, this);
    });
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'data': this.destination,
      'dismissed': true
    });
  }
  // not in use anywhere
  // getDirection() {
  //   this.loader.showLoadingDefault();
  //   this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 }).then((resp :any) => {
  //     this.currentLocMarker.setMap(null);
  //     this.loader.hideLoadingDefault();
  //     this.origin = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     var pointA = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     var pointB = this.destination;
  //     var directionsService = new google.maps.DirectionsService;
  //     var directionsDisplay = new google.maps.DirectionsRenderer({
  //       map: this.map
  //     });
  //     directionsService.route({
  //       origin: pointA,
  //       destination: pointB,
  //       travelMode: google.maps.TravelMode.DRIVING
  //     }, function (response :any, status :any) {
  //       if (status == google.maps.DirectionsStatus.OK) {
  //         directionsDisplay.setDirections(response);
  //       } else {
  //       }
  //     });
  //     this.map.panTo(this.origin);
  //     this.map.setZoom(12);
  //   }).catch((error :any) => {
  //     this.loader.hideLoadingDefault();
  //   });
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data :any) => {
  //   });
  // }
  // getCurrentLocation() {
  //   this.loader.showLoadingDefault();
  //   this.locationProvider.checkLocationEnabled().then(res => {
  //     this.loader.hideLoadingDefault();
  //     this.currentLocMarker.setMap(null);
  //     this.origin = new google.maps.LatLng(res['latitude'], res['longitude']);
  //     var pointA = new google.maps.LatLng(res['latitude'], res['longitude']);
  //     var pointB = this.destination;
  //     var directionsService = new google.maps.DirectionsService;
  //     var directionsDisplay = new google.maps.DirectionsRenderer({
  //       map: this.map
  //     });
  //     directionsService.route({
  //       origin: pointA,
  //       destination: pointB,
  //       travelMode: google.maps.TravelMode.DRIVING
  //     }, function (response :any, status :any) {
  //       if (status == google.maps.DirectionsStatus.OK) {
  //         this.selectedLocation = response;
  //         directionsDisplay.setDirections(response);
  //       } else {
  //       }
  //     });
  //     this.map.panTo(this.origin);
  //     this.map.setZoom(12);
  //     let watch = this.geolocation.watchPosition();
  //     watch.subscribe((data) => {
  //     });
  //   })
  // }
  ionViewWillLeave() {
    new google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.mapElement.nativeElement.classList.remove('show-map');
    });
  }
  ionViewLoaded() {
    let elem = document.getElementsByClassName('searchbar-input')[0];
  }
  getAddress(place) {
    var tthis = this;
    var request = {
      query: this.address,
      fields: ['name', 'geometry']
    };
    this.clearMarker();
    var service = new google.maps.places.PlacesService(this.map);
    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        tthis.selectedLocation = results[0].geometry.location;
        for (var i = 0; i < results.length; i++) {
          tthis.createMarker(results[i]);
        }
        tthis.destination = results[0].geometry.location;
        tthis.map.setCenter(results[0].geometry.location);
      }
    });
  }
  clearMarker() {
    var tthis = this;
    var marker = new google.maps.Marker({
      map: tthis.map,
      position: null
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(null);
      infowindow.open(tthis.map, tthis);
    });
  }
  createMarker(place) {
    var tthis = this;
    var marker = new google.maps.Marker({
      map: tthis.map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(tthis.map, tthis);
    });
  }
}
_MapSearchPage = MapSearchPage;
_MapSearchPage.ɵfac = function MapSearchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapSearchPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Geolocation), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_plugin_service__WEBPACK_IMPORTED_MODULE_6__.PluginProvider));
};
_MapSearchPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _MapSearchPage,
  selectors: [["app-map-search"]],
  viewQuery: function MapSearchPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  inputs: {
    destination: "destination",
    boardingPoint: "boardingPoint"
  },
  standalone: false,
  decls: 12,
  vars: 2,
  consts: [["mapCanvas", ""], ["mode", "md", 1, "h50"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", "color", "default"], [1, "head"], [3, "ngModelChange", "search", "ngModel"], [1, "map-canvas"], [1, "centerMarker"]],
  template: function MapSearchPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapSearchPage_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.dismiss());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content")(8, "ion-searchbar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MapSearchPage_Template_ion_searchbar_ngModelChange_8_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.address, $event) || (ctx.address = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function MapSearchPage_Template_ion_searchbar_search_8_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.getAddress($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.address);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor],
  styles: [".map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  z-index: 10;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 20px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n#mapCanvas[_ngcontent-%COMP%]   .centerMarker[_ngcontent-%COMP%] {\n  position: fixed;\n  \n\n  background: url(\"http://maps.gstatic.com/mapfiles/markers2/marker.png\") no-repeat;\n  \n\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  \n\n  z-index: 100;\n  margin-left: -10px;\n  margin-top: -34px;\n  \n\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}"]
});

/***/ }

}]);