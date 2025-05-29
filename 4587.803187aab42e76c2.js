"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4587],{

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

/***/ 8452:
/*!***************************************************!*\
  !*** @awesome-cordova-plugins/in-app-browser/ngx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InAppBrowser: () => (/* binding */ InAppBrowser),
/* harmony export */   InAppBrowserObject: () => (/* binding */ InAppBrowserObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 67991);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 71985);





var InAppBrowserObject = /** @class */function () {
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param {string} url     The URL to load.
   * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
   *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
   *                 _blank: Opens in the InAppBrowser.
   *                 _system: Opens in the system's web browser.
   * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   */
  function InAppBrowserObject(url, target, options) {
    try {
      if (options && typeof options !== 'string') {
        options = Object.keys(options).map(function (key) {
          return key + "=" + options[key];
        }).join(',');
      }
      this._objectInstance = cordova.InAppBrowser.open(url, target, options);
    } catch (e) {
      if (typeof window !== 'undefined') {
        window.open(url, target);
      }
      console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
    }
  }
  InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.show = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.hide = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", {
      "sync": true
    }, arguments);
  };
  InAppBrowserObject.prototype.executeScript = function (script) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments);
  };
  InAppBrowserObject.prototype.insertCSS = function (css) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments);
  };
  InAppBrowserObject.prototype.on = function (event) {
    var _this = this;
    return function () {
      if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          _this._objectInstance.addEventListener(event, observer.next.bind(observer));
          return function () {
            return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
          };
        });
      }
    }();
  };
  return InAppBrowserObject;
}();

var InAppBrowser = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InAppBrowser, _super);
  function InAppBrowser() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
   *
   * @param  url {string}     The URL to load.
   * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
   * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
   *                 The options string must not contain any blank space, and each feature's
   *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
   * @returns {InAppBrowserObject}
   */
  InAppBrowser.prototype.create = function (url, target, options) {
    return new InAppBrowserObject(url, target, options);
  };
  InAppBrowser.ɵfac = /* @__PURE__ */(() => {
    let ɵInAppBrowser_BaseFactory;
    return function InAppBrowser_Factory(__ngFactoryType__) {
      return (ɵInAppBrowser_BaseFactory || (ɵInAppBrowser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InAppBrowser)))(__ngFactoryType__ || InAppBrowser);
    };
  })();
  InAppBrowser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InAppBrowser,
    factory: InAppBrowser.ɵfac
  });
  InAppBrowser.pluginName = "InAppBrowser";
  InAppBrowser.plugin = "cordova-plugin-inappbrowser";
  InAppBrowser.pluginRef = "cordova.InAppBrowser";
  InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
  InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
  InAppBrowser = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([], InAppBrowser);
  return InAppBrowser;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);

(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InAppBrowser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLWJyb3dzZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8scUVBQXNFLE1BQU0sK0JBQStCLENBQUM7QUFDbkgsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7O0lBbUoxQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILDRCQUFZLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBc0M7UUFDOUUsSUFBSTtZQUNGLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUMzQixHQUFHLENBQUMsVUFBQyxHQUFXLElBQUssT0FBRyxHQUFHLFNBQUssT0FBK0IsQ0FBQyxHQUFHLENBQUcsRUFBakQsQ0FBaUQsQ0FBQztxQkFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQ1YscUdBQXFHLENBQ3RHLENBQUM7U0FDSDtJQUNILENBQUM7SUFRRCxpREFBb0IsYUFBQyxNQUFjO0lBT25DLGlDQUFJO0lBTUosa0NBQUs7SUFPTCxpQ0FBSTtJQVdKLDBDQUFhLGFBQUMsTUFBd0M7SUFhdEQsc0NBQVMsYUFBQyxHQUFxQztJQVcvQywrQkFBRSxhQUFDLEtBQTRCOzs7c0RBQWlDO2dCQUM5RCxPQUFPLElBQUksVUFBVSxDQUFvQixVQUFDLFFBQXFDO29CQUM3RSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxPQUFPLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE3RSxDQUE2RSxDQUFDO2dCQUM3RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7NkJBdFBIOzs7O0lBa1NrQyxnQ0FBMEI7Ozs7SUFDMUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsNkJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxNQUFlLEVBQUUsT0FBc0M7UUFDekUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs4R0FiVSxZQUFZO2tIQUFaLFlBQVk7Ozs7OztJQUFaLFlBQVksa0JBQVosWUFBWTt1QkFsU3pCO0VBa1NrQywwQkFBMEI7U0FBL0MsWUFBWTs0RkFBWixZQUFZO2tCQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnIHwgJ25vJztcbiAgLyoqICBzZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBlbnRpcmUgbG9jYWwgc3RvcmFnZSBjbGVhcmVkIChjb29raWVzLCBIVE1MNSBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIsIGV0Yy4pIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQgKi9cbiAgY2xlYXJkYXRhPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBzZXNzaW9uIGNvb2tpZSBjYWNoZSBjbGVhcmVkIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQuXG4gICAqIEZvciBXS1dlYlZpZXcsIHJlcXVpcmVzIGlPUyAxMSsgb24gdGFyZ2V0IGRldmljZS5cbiAgICovXG4gIGNsZWFyc2Vzc2lvbmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkICYgV2luZG93cyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gbmF2aWdhdGUgYmFja3dhcmRzIHRocm91Z2ggdGhlIEluQXBwQnJvd3NlcidzIGhpc3RvcnkuXG4gICAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHBhZ2UsIHRoZSBJbkFwcEJyb3dzZXIgd2lsbCBjbG9zZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgeWVzLCBzbyB5b3UgbXVzdCBzZXQgaXQgdG8gbm8gaWYgeW91IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNpbXBseSBjbG9zZSB0aGUgSW5BcHBCcm93c2VyLlxuICAgKi9cbiAgaGFyZHdhcmViYWNrPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgYW5kIGxvYWQgdGhlIHBhZ2UsIGJ1dCBub3Qgc2hvdyBpdC4gVGhlIGxvYWRzdG9wIGV2ZW50IGZpcmVzIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cbiAgICogT21pdCBvciBzZXQgdG8gbm8gKGRlZmF1bHQpIHRvIGhhdmUgdGhlIGJyb3dzZXIgb3BlbiBhbmQgbG9hZCBub3JtYWxseS5cbiAgICovXG4gIGhpZGRlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIHRvb2xiYXIgbmF2aWdhdGlvbiBidXR0b25zIG9uIG9yIG9mZiAoZGVmYXVsdHMgdG8gbm8pLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIGhpZGVzcGlubmVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiAqL1xuICBoaWRldXJsYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG9wZW4gdGhlIGtleWJvYXJkIHdoZW4gZm9ybSBlbGVtZW50cyByZWNlaXZlIGZvY3VzIHZpYSBKYXZhU2NyaXB0J3MgZm9jdXMoKSBjYWxsIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIG5hdmlnYXRpb24gYnV0dG9ucyBnbyB0byB0aGUgbGVmdCBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSByaWdodC5cbiAgICogKGlPUykgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIGNsb3NlIGJ1dHRvbiBnb2VzIHRvIHRoZSByaWdodCBhbmQgbmF2aWdhdGlvbiBidXR0b25zIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgbGVmdHRvcmlnaHQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuXG4gICAqL1xuICBtZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyQWN0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIGJvdGggbmF2aWdhdGlvbiBidXR0b25zIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMgYW5kIG5vdCBoaWRlbmF2aWdhdGlvbmJ1dHRvbnMgc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgbmF2aWdhdGlvbiBidXR0b25zIGFyZSB2aXNpYmxlLlxuICAgKi9cbiAgbmF2aWdhdGlvbmJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gcGFnZXNoZWV0LCBmb3Jtc2hlZXQgb3IgZnVsbHNjcmVlbiB0byBzZXQgdGhlIHByZXNlbnRhdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gZnVsbHNjcmVlbikuICovXG4gIHByZXNlbnRhdGlvbnN0eWxlPzogJ3BhZ2VzaGVldCcgfCAnZm9ybXNoZWV0JyB8ICdmdWxsc2NyZWVuJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gbWFrZSBJbkFwcEJyb3dzZXIgV2ViVmlldyB0byBwYXVzZS9yZXN1bWUgd2l0aCB0aGUgYXBwIHRvIHN0b3AgYmFja2dyb3VuZCBhdWRpbyAodGhpcyBtYXkgYmUgcmVxdWlyZWQgdG8gYXZvaWQgR29vZ2xlIFBsYXkgaXNzdWVzKSAqL1xuICBzaG91bGRQYXVzZU9uU3VzcGVuZD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBvbiBvciBvZmYgZm9yIHRoZSBJbkFwcEJyb3dzZXIgKGRlZmF1bHRzIHRvIHllcykgKi9cbiAgdG9vbGJhcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciB0aGUgdG9vbGJhciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIHRvb2xiYXJjb2xvcj86IHN0cmluZztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHRvcCBvciBib3R0b20gKGRlZmF1bHQgaXMgYm90dG9tKS4gQ2F1c2VzIHRoZSB0b29sYmFyIHRvIGJlIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB3aW5kb3cuICovXG4gIHRvb2xiYXJwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gbWFrZSB0aGUgdG9vbGJhciB0cmFuc2x1Y2VudChzZW1pLXRyYW5zcGFyZW50KSAoZGVmYXVsdHMgdG8geWVzKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiAqL1xuICB0b29sYmFydHJhbnNsdWNlbnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBmbGlwaG9yaXpvbnRhbCwgY3Jvc3NkaXNzb2x2ZSBvciBjb3ZlcnZlcnRpY2FsIHRvIHNldCB0aGUgdHJhbnNpdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gY292ZXJ2ZXJ0aWNhbCkuICovXG4gIHRyYW5zaXRpb25zdHlsZT86ICdmbGlwaG9yaXpvbnRhbCcgfCAnY3Jvc3NkaXNzb2x2ZScgfCAnY292ZXJ2ZXJ0aWNhbCc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSBXS1dlYlZpZXcgZW5naW5lIGZvciB0aGUgSW5hcHBCcm93c2VyLiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gdXNlIFVJV2ViVmlldy4gKi9cbiAgdXNld2t3ZWJ2aWV3PzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IEFuZHJvaWQgYnJvd3NlcidzIHpvb20gY29udHJvbHMsIHNldCB0byBubyB0byBoaWRlIHRoZW0uIERlZmF1bHQgdmFsdWUgaXMgeWVzLiAqL1xuICB6b29tPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJbkFwcEJyb3dzZXJFdmVudFR5cGUgPVxuICB8ICdsb2Fkc3RhcnQnXG4gIHwgJ2xvYWRzdG9wJ1xuICB8ICdsb2FkZXJyb3InXG4gIHwgJ2V4aXQnXG4gIHwgJ2JlZm9yZWxvYWQnXG4gIHwgJ21lc3NhZ2UnXG4gIHwgJ2N1c3RvbXNjaGVtZSdcbiAgfCBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqIHRoZSBldmVudCBuYW1lICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIHRoZSBVUkwgdGhhdCB3YXMgbG9hZGVkLiAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIHRoZSBlcnJvciBjb2RlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogdGhlIGVycm9yIG1lc3NhZ2UsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiB0aGUgcG9zdE1lc3NhZ2UgZGF0YSwgb25seSBpbiB0aGUgY2FzZSBvZiBtZXNzYWdlLiAqL1xuICBkYXRhOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXQ9XCJzZWxmXCJdICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqICAgICAgICAgICAgICAgICBfc2VsZjogT3BlbnMgaW4gdGhlIFdlYlZpZXcgaWYgdGhlIFVSTCBpcyBpbiB0aGUgd2hpdGUgbGlzdCwgb3RoZXJ3aXNlIGl0IG9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfYmxhbms6IE9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfc3lzdGVtOiBPcGVucyBpbiB0aGUgc3lzdGVtJ3Mgd2ViIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHRhcmdldD86IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICpcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEBwYXJhbSBzY3JpcHQuZmlsZVxuICAgKiBAcGFyYW0gc2NyaXB0LmNvZGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBleGVjdXRlU2NyaXB0KHNjcmlwdDogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIENTUyBpbnRvIHRoZSBJbkFwcEJyb3dzZXIgd2luZG93LlxuICAgKlxuICAgKiBAcGFyYW0gY3NzIHtPYmplY3R9IERldGFpbHMgb2YgdGhlIHNjcmlwdCB0byBydW4sIHNwZWNpZnlpbmcgZWl0aGVyIGEgZmlsZSBvciBjb2RlIGtleS5cbiAgICogQHBhcmFtIGNzcy5maWxlXG4gICAqIEBwYXJhbSBjc3MuY29kZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGluc2VydENTUyhjc3M6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQge0luQXBwQnJvd3NlckV2ZW50VHlwZX0gTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb24oZXZlbnQ6IEluQXBwQnJvd3NlckV2ZW50VHlwZSk6IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+KChvYnNlcnZlcjogT2JzZXJ2ZXI8SW5BcHBCcm93c2VyRXZlbnQ+KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgIHJldHVybiAoKSA9PiB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQG5hbWUgSW4gQXBwIEJyb3dzZXJcbiAqIEBwcmVtaWVyIGluYXBwYnJvd3NlclxuICogQGRlc2NyaXB0aW9uIExhdW5jaGVzIGluIGFwcCBCcm93c2VyXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICpcbiAgICogQHBhcmFtICB1cmwge3N0cmluZ30gICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtICB0YXJnZXQge3N0cmluZ30gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogQHBhcmFtICBvcHRpb25zIHtzdHJpbmd9IE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKiBAcmV0dXJucyB7SW5BcHBCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHVybDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zKTogSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IEluQXBwQnJvd3Nlck9iamVjdCh1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 14587:
/*!*******************************************************************************!*\
  !*** ./src/app/stage-details-apply-bp-dp/stage-details-apply-bp-dp.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsApplyBpDpPageModule: () => (/* binding */ StageDetailsApplyBpDpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _stage_details_apply_bp_dp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage-details-apply-bp-dp-routing.module */ 52402);
/* harmony import */ var _stage_details_apply_bp_dp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage-details-apply-bp-dp.page */ 96404);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser */ 8452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _StageDetailsApplyBpDpPageModule;










class StageDetailsApplyBpDpPageModule {}
_StageDetailsApplyBpDpPageModule = StageDetailsApplyBpDpPageModule;
_StageDetailsApplyBpDpPageModule.ɵfac = function StageDetailsApplyBpDpPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsApplyBpDpPageModule)();
};
_StageDetailsApplyBpDpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _StageDetailsApplyBpDpPageModule
});
_StageDetailsApplyBpDpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _stage_details_apply_bp_dp_routing_module__WEBPACK_IMPORTED_MODULE_0__.StageDetailsApplyBpDpPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](StageDetailsApplyBpDpPageModule, {
    declarations: [_stage_details_apply_bp_dp_page__WEBPACK_IMPORTED_MODULE_1__.StageDetailsApplyBpDpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _stage_details_apply_bp_dp_routing_module__WEBPACK_IMPORTED_MODULE_0__.StageDetailsApplyBpDpPageRoutingModule, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
  });
})();

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

/***/ 52402:
/*!***************************************************************************************!*\
  !*** ./src/app/stage-details-apply-bp-dp/stage-details-apply-bp-dp-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsApplyBpDpPageRoutingModule: () => (/* binding */ StageDetailsApplyBpDpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _stage_details_apply_bp_dp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage-details-apply-bp-dp.page */ 96404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _StageDetailsApplyBpDpPageRoutingModule;




const routes = [{
  path: '',
  component: _stage_details_apply_bp_dp_page__WEBPACK_IMPORTED_MODULE_0__.StageDetailsApplyBpDpPage
}];
class StageDetailsApplyBpDpPageRoutingModule {}
_StageDetailsApplyBpDpPageRoutingModule = StageDetailsApplyBpDpPageRoutingModule;
_StageDetailsApplyBpDpPageRoutingModule.ɵfac = function StageDetailsApplyBpDpPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsApplyBpDpPageRoutingModule)();
};
_StageDetailsApplyBpDpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _StageDetailsApplyBpDpPageRoutingModule
});
_StageDetailsApplyBpDpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StageDetailsApplyBpDpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96404:
/*!*****************************************************************************!*\
  !*** ./src/app/stage-details-apply-bp-dp/stage-details-apply-bp-dp.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StageDetailsApplyBpDpPage: () => (/* binding */ StageDetailsApplyBpDpPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _map_search_map_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map-search/map-search.page */ 60032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser */ 8452);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/filter.pipe */ 17516);

var _StageDetailsApplyBpDpPage;

















const _c0 = ["mySlider"];
const _c1 = (a0, a1) => ({
  "seabird_point_selected": a0,
  "seabird_point": a1
});
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r5.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r5.contact_numbers, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_span_1_Template, 2, 1, "span", 36)(2, StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_div_2_Template, 5, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r5.contact_numbers != "" && stage_r5.contact_numbers != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r5.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "ion-row")(2, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_Template_ion_col_click_2_listener() {
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-radio", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-col", 25)(6, "div", 26)(7, "ion-item", 27)(8, "ion-label", 28)(9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_Template_div_click_9_listener() {
      const stage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(stage_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_14_Template, 2, 1, "div", 32)(15, StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_div_15_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const stage_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", stage_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r5.name + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](" " + stage_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r5.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r5.contact_numbers != "" && stage_r5.contact_numbers != null || stage_r5.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(stage_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r10.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(stage_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r10.contact_numbers, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(stage_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_span_1_Template, 2, 1, "span", 36)(2, StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_div_2_Template, 5, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r10.contact_numbers != "" && stage_r10.contact_numbers != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r10.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "ion-row")(2, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_Template_ion_col_click_2_listener() {
      const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(stage_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-radio", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-col", 25)(6, "div", 26)(7, "ion-item", 27)(8, "ion-label", 28)(9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_Template_div_click_9_listener() {
      const stage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(stage_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_14_Template, 2, 1, "div", 32)(15, StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_div_15_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const stage_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", stage_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", stage_r10.name + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](" " + stage_r10.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r10.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", stage_r10.contact_numbers != "" && stage_r10.contact_numbers != null || stage_r10.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-common-header", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ion-content", 8, 0)(6, "div", 9)(7, "div", 10)(8, "ion-segment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_segment_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_segment_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Select Pick-up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Select Drop-off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "swiper-container", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("swiperslidechange", function StageDetailsApplyBpDpPage_ng_container_0_Template_swiper_container_swiperslidechange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const mySlider_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "swiper-slide", 15)(16, "ion-searchbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInput", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_searchbar_ionInput_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.searchStage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "ion-list", 17)(18, "ion-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_radio_group_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedBp, $event) || (ctx_r1.selectedBp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, StageDetailsApplyBpDpPage_ng_container_0_ng_template_19_Template, 16, 5, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "swiper-slide", 20)(23, "ion-searchbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInput", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_searchbar_ionInput_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.searchStageDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ion-list", 17)(25, "ion-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_0_Template_ion_radio_group_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDp, $event) || (ctx_r1.selectedDp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, StageDetailsApplyBpDpPage_ng_container_0_ng_template_26_Template, 16, 5, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "orderby");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("title", "", ctx_r1.origin.name, " - ", ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate3"]("subtitle", "", ctx_r1.dateFull.day, " ", ctx_r1.dateFull.monthNameShort, " - ", ctx_r1.globalData.SELECTED_ROUTE.bus_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedBp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](21, 16, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](20, 12, ctx_r1.boardingPoints, "name", ctx_r1.searchKey), "time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](28, 23, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](27, 19, ctx_r1.droppingPoints, "name", ctx_r1.searchKeyDrop), "time"));
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r18.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r18.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_ion_item_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r18.distance + " ", " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_ion_item_9_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_ion_item_9_div_5_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_Template_div_click_0_listener() {
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item")(2, "ion-label")(3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_div_7_Template, 4, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ion-radio", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_ion_item_9_Template, 6, 1, "ion-item", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r18.name + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](" " + i_r18.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r18.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r18.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-radio-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedBp, $event) || (ctx_r1.selectedBp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_div_2_Template, 10, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedBp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.filteredBoardingPoints);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 75)(1, "ion-label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Boarding Point not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r22.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r22.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_ion_item_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r22.distance + " ", " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_ion_item_9_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_ion_item_9_div_5_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpDp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_Template_div_click_0_listener() {
      const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(i_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item")(2, "ion-label")(3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_div_7_Template, 4, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ion-radio", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_ion_item_9_Template, 6, 1, "ion-item", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r22.name + " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](" " + i_r22.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r22.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r22.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-radio-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDp, $event) || (ctx_r1.selectedDp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_div_2_Template, 10, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDroppingPoints);
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 75)(1, "ion-label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Dropping Point not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function StageDetailsApplyBpDpPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 44)(3, "ion-buttons", 45)(4, "ion-back-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-content")(10, "ion-segment", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_segment_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-segment-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_segment_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-col", 51)(13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "ion-segment-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_segment_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "ion-col", 51)(20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "swiper-container", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("swiperslidechange", function StageDetailsApplyBpDpPage_ng_container_1_Template_swiper_container_swiperslidechange_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const mySlider_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "swiper-slide", 15)(28, "ion-item-divider")(29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Select Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "ion-input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.boardingSearch, $event) || (ctx_r1.boardingSearch = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInput", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_input_ionInput_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.filterBoardingPoints($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ion-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, StageDetailsApplyBpDpPage_ng_container_1_ng_container_35_Template, 3, 2, "ng-container", 59)(36, StageDetailsApplyBpDpPage_ng_container_1_ng_template_36_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "swiper-slide", 20)(39, "ion-item-divider")(40, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Select Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.droppingSearch, $event) || (ctx_r1.droppingSearch = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInput", function StageDetailsApplyBpDpPage_ng_container_1_Template_ion_input_ionInput_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.filterDroppingPoints($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ion-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, StageDetailsApplyBpDpPage_ng_container_1_ng_container_46_Template, 3, 2, "ng-container", 59)(47, StageDetailsApplyBpDpPage_ng_container_1_ng_template_47_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const noBoarding_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](37);
    const noDropping_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](48);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.origin.name, " - ", ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.globalData.SELECTED_ROUTE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedBp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](17, 13, ctx_r1.selectedBp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r1.isSlideGo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedDp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](24, 17, ctx_r1.selectedDp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.boardingSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.filteredBoardingPoints && (ctx_r1.filteredBoardingPoints == null ? null : ctx_r1.filteredBoardingPoints.length) > 0)("ngIfElse", noBoarding_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.droppingSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.filteredDroppingPoints && ctx_r1.filteredDroppingPoints.length > 0)("ngIfElse", noDropping_r25);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_33_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r29.landmark);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 101)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, StageDetailsApplyBpDpPage_ng_container_2_div_33_div_8_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r29.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r29.landmark);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_33_ion_item_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r29.distance, " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_33_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_div_33_ion_item_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_2_div_33_ion_item_10_div_5_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_div_33_Template_div_click_0_listener() {
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(i_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item", 93)(2, "div", 94)(3, "div", 95)(4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, StageDetailsApplyBpDpPage_ng_container_2_div_33_div_8_Template, 4, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-radio", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, StageDetailsApplyBpDpPage_ng_container_2_div_33_ion_item_10_Template, 6, 1, "ion-item", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r29.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r29.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r29.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_39_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r32.landmark);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 101)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, StageDetailsApplyBpDpPage_ng_container_2_div_39_div_8_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r32.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r32.landmark);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_39_ion_item_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r32.distance, " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_39_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_div_39_ion_item_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_2_div_39_ion_item_10_div_5_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpDp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_div_39_Template_div_click_0_listener() {
      const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(i_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item", 93)(2, "div", 94)(3, "div", 95)(4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, StageDetailsApplyBpDpPage_ng_container_2_div_39_div_8_Template, 4, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-radio", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, StageDetailsApplyBpDpPage_ng_container_2_div_39_ion_item_10_Template, 6, 1, "ion-item", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r32.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r32.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r32.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header")(2, "div", 77)(3, "div", 78)(4, "ion-buttons", 79)(5, "ion-back-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_back_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Select boarding & dropping points");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-content", 82)(13, "ion-segment", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_segment_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ion-segment-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_segment_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " Boarding Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "ion-segment-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_segment_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, " Dropping Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "swiper-container", 87, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("swiperslidechange", function StageDetailsApplyBpDpPage_ng_container_2_Template_swiper_container_swiperslidechange_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const mySlider_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r1.onSlideChanged(mySlider_r27);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "swiper-slide", 15)(29, "ion-list", 88)(30, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, " Select your boarding point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "ion-radio-group", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_radio_group_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedBp, $event) || (ctx_r1.selectedBp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, StageDetailsApplyBpDpPage_ng_container_2_div_33_Template, 11, 5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "swiper-slide", 20)(35, "ion-list", 88)(36, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, " Select your dropping point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "ion-radio-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_2_Template_ion_radio_group_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDp, $event) || (ctx_r1.selectedDp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, StageDetailsApplyBpDpPage_ng_container_2_div_39_Template, 11, 5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.origin.name, " - ", ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.globalData.SELECTED_ROUTE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](20, _c1, ctx_r1.tabName === "lower", ctx_r1.tabName !== "lower"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedBp ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](19, 12, ctx_r1.selectedBp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](23, _c1, ctx_r1.tabName === "upper", ctx_r1.tabName !== "upper"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedDp ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](25, 16, ctx_r1.selectedDp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedBp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.boardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.droppingPoints);
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE ? ctx_r1.globalData.SELECTED_ROUTE.arr_time : "", " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.SELECTED_ROUTE_RETURN ? ctx_r1.globalData.SELECTED_ROUTE_RETURN.dep_time : "", " - ", ctx_r1.globalData.SELECTED_ROUTE_RETURN ? ctx_r1.globalData.SELECTED_ROUTE_RETURN.arr_time : "", " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.journeyType == "onward" ? "\u00A0(Onward)" : "\u00A0(Return)");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r37.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r37.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_38_ion_col_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r37.distance + " ", " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_38_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_div_38_ion_col_13_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_3_div_38_ion_col_13_div_5_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_div_38_Template_div_click_0_listener() {
      const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectBoarding(i_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item")(2, "ion-row", 39)(3, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-radio", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-col", 123)(6, "ion-label")(7, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, StageDetailsApplyBpDpPage_ng_container_3_div_38_div_9_Template, 4, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "ion-col", 124)(11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, StageDetailsApplyBpDpPage_ng_container_3_div_38_ion_col_13_Template, 6, 1, "ion-col", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r37.name + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r37.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r37.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r37.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_45_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](i_r40.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r40.landmark, " ");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_45_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r1.formatteddate(i_r40.travel_date), ")");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_45_ion_col_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r40.distance + " ", " Kms");
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_45_ion_col_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-col", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_div_45_ion_col_14_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.gotoMaps(i_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_3_div_45_ion_col_14_div_5_Template, 2, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.helpBp);
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_div_45_Template_div_click_0_listener() {
      const i_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.selectDropping(i_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-item")(2, "ion-row", 39)(3, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-radio", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-col", 123)(6, "ion-label")(7, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, StageDetailsApplyBpDpPage_ng_container_3_div_45_div_9_Template, 4, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "ion-col", 124)(11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, StageDetailsApplyBpDpPage_ng_container_3_div_45_span_13_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, StageDetailsApplyBpDpPage_ng_container_3_div_45_ion_col_14_Template, 6, 1, "ion-col", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", i_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r40.name + " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r40.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", i_r40.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r40.is_next_day != null && i_r40.is_next_day == "YES_LABEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r40.latitude != null);
  }
}
function StageDetailsApplyBpDpPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-header", 109)(2, "ion-toolbar", 44)(3, "ion-buttons", 45)(4, "ion-back-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StageDetailsApplyBpDpPage_ng_container_3_div_5_Template, 2, 2, "div", 110)(6, StageDetailsApplyBpDpPage_ng_container_3_div_6_Template, 2, 2, "div", 110)(7, StageDetailsApplyBpDpPage_ng_container_3_div_7_Template, 2, 2, "div", 110)(8, StageDetailsApplyBpDpPage_ng_container_3_div_8_Template, 2, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, StageDetailsApplyBpDpPage_ng_container_3_span_13_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ion-content", 109)(15, "ion-segment", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_segment_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.tabName, $event) || (ctx_r1.tabName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "ion-segment-button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_segment_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(0, "lower"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "ion-col", 115)(18, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "ion-segment-button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_segment_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.goToSlide(1, "upper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "ion-col", 115)(25, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Dropping");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "swiper-container", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("swiperslidechange", function StageDetailsApplyBpDpPage_ng_container_3_Template_swiper_container_swiperslidechange_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const mySlider_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r1.onSlideChanged(mySlider_r35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "swiper-slide", 15)(33, "ion-item-divider")(34, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Select Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "ion-list", 17)(37, "ion-radio-group", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_radio_group_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedBp, $event) || (ctx_r1.selectedBp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, StageDetailsApplyBpDpPage_ng_container_3_div_38_Template, 14, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "swiper-slide", 20)(40, "ion-item-divider")(41, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Select Dropping Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ion-list", 17)(44, "ion-radio-group", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function StageDetailsApplyBpDpPage_ng_container_3_Template_ion_radio_group_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDp, $event) || (ctx_r1.selectedDp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, StageDetailsApplyBpDpPage_ng_container_3_div_45_Template, 15, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "oneway");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway" && ctx_r1.journeyType != "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", ctx_r1.dateFull.monthNameShort, " ", ctx_r1.leadingZero(ctx_r1.dateFull.day), " |\u00A0 ", ctx_r1.OurbusPassengerCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" \u00A0| ", ctx_r1.origin.name, " - ", ctx_r1.destination.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.tabName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedBp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](22, 18, ctx_r1.selectedBp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r1.isSlideGo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](!ctx_r1.selectedDp ? "Select" : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](29, 22, ctx_r1.selectedDp, 0, 12) + "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedBp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.boardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.droppingPoints);
  }
}
class StageDetailsApplyBpDpPage {
  constructor(commonStorage, theme, globalData, navCtrl, modalController, util,
  // private geolocation: Geolocation,
  route, loader, router, inAppBrowser, platform, appData) {
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
    this.filteredBoardingPoints = [];
    this.filteredDroppingPoints = [];
    this.boardingSearch = '';
    this.droppingSearch = '';
    this.appData.newTheme = this.util.getNewTheme();
    console.log("this.seatDetails =", this.globalData.SELECTED_SEAT_DETAILS);
    console.log("this.returnSeatDetails =", this.globalData.SELECTED_SEAT_DETAILS_RETURN);
    this.returnSeatDetails = this.globalData.SELECTED_SEAT_DETAILS_RETURN;
    console.log("return res data", this.commonStorage.localGet("reservationDataReturn"));
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
      this.router.navigate(['/available-routes']);
    }
  }
  ionViewWillEnter() {
    //mano
    this.commonStorage.localRemove('passengerDetails');
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (this.isreturnTrip) {
      var _this$boardingPoints;
      if (this.metaData.allowBPDPFare) {
        let selectedRoute = this.commonStorage.localGet("SELECTED_ROUTE_RETURN");
        this.boardingPoints = selectedRoute.boarding_point_details;
        this.droppingPoints = selectedRoute.drop_off_details;
      } else {
        this.boardingPoints = this.commonStorage.localGet('originStageDetailsReturn');
        this.droppingPoints = this.commonStorage.localGet('destinationStageDetailsReturn');
      }
      this.filteredBoardingPoints = [...this.boardingPoints];
      this.filteredDroppingPoints = [...this.droppingPoints];
      // this.selectedBp = this.boardingPoints[0].name;
      // this.BP = this.boardingPoints[0];
      this.commonStorage.setItem('boardingStage', (_this$boardingPoints = this.boardingPoints) === null || _this$boardingPoints === void 0 ? void 0 : _this$boardingPoints[0]);
      // this.origin = this.globalData.SEARCH_DATA.destCity;
      // this.destination = this.globalData.SEARCH_DATA.originCity;
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
      if (this.metaData.allowBPDPFare) {
        let selectedRoute = this.commonStorage.localGet("SELECTED_ROUTE");
        this.boardingPoints = selectedRoute.boarding_point_details;
        this.droppingPoints = selectedRoute.drop_off_details;
      } else {
        this.boardingPoints = this.commonStorage.localGet('originStageDetails');
        this.droppingPoints = this.commonStorage.localGet('destinationStageDetails');
      }
      this.filteredBoardingPoints = [...this.boardingPoints];
      this.filteredDroppingPoints = [...this.droppingPoints];
      // this.selectedBp = this.boardingPoints[0].name;
      // this.BP = this.boardingPoints[0];
      this.commonStorage.setItem('boardingStage', this.boardingPoints[0]);
      // console.log(this.droppingPoints, 'dddd');
      console.log(this.boardingPoints, 'dddd');
      if (this.isreturnTrip == undefined) {
        this.journeyType = 'onward';
      }
      this.selectedRoute = this.globalData.SELECTED_ROUTE;
      console.log("this.selectedRoute", this.selectedRoute);
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
    ;
  }
  preZero(val) {
    // Prepend zero if smaller than 10
    return +val < 10 ? '0' + val : val.toString();
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
    if (google && google.maps && google.maps.geometry) {
      // console.log("test")
      // console.log("Maps", google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(myPos), new google.maps.LatLng(myLatLng1)));
      //console.log("Maps", google.maps.geometry.spherical.computeDistanceBetween(myLatLng1, myLatLng2));
    } else if (google && google.maps) {
      // console.log('Maps 2', google.maps);
    } else {
      // console.log('Maps error');
    }
    // var origin1 = new google.maps.LatLng(55.930385, -3.118425);
    // var origin2 = 'Greenwich, England';
    // var destinationA = 'Stockholm, Sweden';
    // var destinationB = new google.maps.LatLng(50.087692, 14.421150);
    // var service = new google.maps.DistanceMatrixService();
    // service.getDistanceMatrix(
    //   {
    //     origins: [origin1, origin2],
    //     destinations: [destinationA, destinationB],
    //     travelMode: 'DRIVING',
    //     transitOptions: {},
    //     drivingOptions: {
    //       departureTime: new Date(Date.now() + 0),  // for the time N milliseconds from now.
    //       trafficModel: 'optimistic'
    //     },
    //     unitSystem: '',
    //     avoidHighways: false,
    //     avoidTolls: false,
    //   }, (res) => {
    //   }, err => {
    //   });
  }
  goToSlide(slideNum, tabName) {
    const swiperEl = this.mySlider.nativeElement;
    const swiper = swiperEl.swiper;
    if (tabName === 'lower') {
      swiper === null || swiper === void 0 || swiper.slidePrev();
    } else if (tabName === "upper") {
      swiper === null || swiper === void 0 || swiper.slideNext();
    }
    this.content.scrollToTop();
    this.tabName = tabName;
  }
  onSlideChanged(slides) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const currentIndex = yield slides.getActiveIndex();
        // console.log('zed', currentIndex);
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
      } catch (e) {
        // console.log("onSlideChanged ex", e)
      }
    })();
  }
  selectBoarding(stage) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonStorage.setItem('boardingStage', stage);
      _this2.commonStorage.localSet('boardingTime', stage.time);
      console.log("Boarding Stage", stage);
      _this2.selectedBp = stage.name;
      _this2.BP = stage;
      if (!_this2.DP) {
        var _this2$contents;
        // ✅ Get actual Swiper instance
        const swiperEl = _this2.mySlider.nativeElement;
        const swiper = swiperEl.swiper;
        swiper === null || swiper === void 0 || swiper.slideNext();
        _this2.tabName = 'upper';
        const content = (_this2$contents = _this2.contents) === null || _this2$contents === void 0 ? void 0 : _this2$contents.first;
        if (content) {
          content.scrollToTop(500);
        }
      } else {
        _this2.gotoPassengerdetailsPage();
      }
      _this2.isSlideGo = !!_this2.BP;
    })();
  }
  selectDropping(stage) {
    this.commonStorage.setItem('droppingStage', stage);
    this.commonStorage.localSet('droppingTime', stage === null || stage === void 0 ? void 0 : stage.time);
    this.date1 = new Date(this.commonStorage.localGet('boardingTime'));
    this.date2 = new Date(this.commonStorage.localGet('droppingTime'));
    const timeDifference = this.date2.getTime() - this.date1.getTime();
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
    console.log("Dropping Stage", stage);
    console.log(this.BP);
    this.selectedDp = stage.name;
    this.DP = stage;
    if (!this.BP) {
      var _this$contents;
      const swiperEl = this.mySlider.nativeElement;
      const swiper = swiperEl.swiper;
      swiper === null || swiper === void 0 || swiper.slidePrev();
      const content = (_this$contents = this.contents) === null || _this$contents === void 0 ? void 0 : _this$contents.first;
      content === null || content === void 0 || content.scrollToTop();
      return;
    }
    this.gotoPassengerdetailsPage();
  }
  gotoPassengerdetailsPage() {
    if (this.isreturnTrip) {
      // var res = this.commonStorage.localGet('reservationDataReturn');
      let res = {};
      res.boardingStage = this.BP;
      res.droppingStage = this.DP;
      // this.commonStorage.localSet('reservationDataReturn', res)
      this.commonStorage.localSet('bpdpReservationFare', res);
      this.commonStorage.localSet('selectedBoardingStage', this.BP);
      this.commonStorage.localSet('selectedDroppingStage', this.DP);
    } else {
      // var res = this.commonStorage.localGet('reservationData');
      let res = {};
      res.boardingStage = this.BP;
      res.droppingStage = this.DP;
      // this.commonStorage.localSet('reservationData', res)
      this.commonStorage.localSet('bpdpReservationFare', res);
      this.commonStorage.localSet('selectedBoardingStage', this.BP);
      this.commonStorage.localSet('selectedDroppingStage', this.DP);
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
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
    // console.log("aft dp selection", this.commonStorage.localGet('reservationData'));
    if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate && !this.isreturnTrip) {
      // this.globalData.SEARCH_DATA_RETURN.originCity = this.globalData.SEARCH_DATA.destCity;
      // this.globalData.SEARCH_DATA_RETURN.destCity = this.globalData.SEARCH_DATA.originCity;
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      if (this.metaData.allowBPDPFare) {
        this.navCtrl.navigateForward('seat-layout');
      } else {
        this.navCtrl.navigateForward('available-routes', navigationExtras);
      }
    } else if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate && this.isreturnTrip) {
      if (this.globalData.DEPARTURE_DATE_RETURN && this.isreturnTrip) {
        console.log("no departure return");
        let navigationExtras = {
          queryParams: {
            is_return_trip: true
          }
        };
        if (this.metaData.allowBPDPFare) {
          this.navCtrl.navigateForward('seat-layout', navigationExtras);
        } else {
          this.navCtrl.navigateForward('available-routes', navigationExtras);
        }
      } else {
        console.log("stage details sent true");
        let navigationExtras = {
          queryParams: {
            is_return_trip: true
          }
        };
        // this.navCtrl.navigateForward('seat-layout');
        this.navCtrl.navigateForward('passenger-details', navigationExtras);
        // if(this.metaData.allowBPDPFare){
        //   this.navCtrl.navigateForward('seat-layout');
        // }else{
        // this.navCtrl.navigateForward('passenger-details', navigationExtras)
        // }
      }
    } else if (this.globalData.DEPARTURE_DATE_RETURN && this.isreturnTrip) {
      // console.log("stage details sent true")
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('passenger-details', navigationExtras);
    } else {
      // console.log("stage details sent false")
      if (this.metaData.allowBPDPFare) {
        // this.navCtrl.navigateForward('available-routes');
        this.navCtrl.navigateForward('seat-layout');
      } else {
        this.navCtrl.navigateForward('passenger-details');
      }
    }
  }
  gotoMap(event, type) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // if (type == 2) {
      //   this.util.showToast('No latitude langitude found', 'center');
      //   return false;
      // }
      event.stopPropagation();
      var title = "";
      if (type == 1) {
        title = "Search for closet place to Board ";
      } else {
        title = "Search for closet place to Drop ";
      }
      const modal = yield _this3.modalController.create({
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
      // console.log("selected loc", data.data);
      if (data !== undefined && typeof data === 'object' && Object.keys(data).length !== 0) {
        // if (data != {} || data != undefined) {
        if (type == 1) {
          _this3.helpBp = true;
          _this3.mapCalBp(data.data);
        } else {
          _this3.helpDp = true;
          _this3.mapCalDp(data.data);
        }
      }
    })();
  }
  mapCalBp(pos) {
    // console.log("pos BP", pos);
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
    // console.log(this.droppingPoints, 'mapp');
    for (var i = 0; i < this.droppingPoints.length; i++) {
      if (this.droppingPoints[i].latitude && this.droppingPoints[i].longitude) {
        myLatLng1 = {
          lat: parseFloat(this.droppingPoints[i].latitude),
          lng: parseFloat(this.droppingPoints[i].longitude)
        };
        if (google && google.maps && google.maps.geometry) {
          // console.log("dp lat long", myPos, myLatLng1)
          var dist = google.maps.geometry.spherical.computeDistanceBetween(myPos, new google.maps.LatLng(myLatLng1));
          // console.log("latlong res", dist);
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
    // console.log(stage,'k',this.platform.is('ios'));
    // "http://maps.google.com/maps?q=loc:$lat,$long ($title)"
    // this.loader.showLoadingDefault()
    // this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 }).then((resp) => {
    //   console.log("currentlocation", resp.coords.latitude, resp.coords.longitude);
    //   this.loader.hideLoadingDefault()
    //   let lat = resp.coords.latitude
    //   let long = resp.coords.longitude
    //   let latB = stage.latitude
    //   let longB = stage.longitude
    //   console.log(latB,longB);
    // var url = 'https://www.google.com/maps/dir/?api=1&origin=' + lat + ',' + long + '&destination=' + latB + ',' + longB
    // window.open(url, '_system')
    // http://maps.google.com/maps?q=loc:$lat,$long ($title)
    // var url = 'http://maps.google.com/maps?q=loc:' + stage.latitude + ',' + stage.longitude+'(test)';
    // window.open(url, '_system')
    // if (window.navigator.platform.toLowerCase().includes('iphone')) {
    // var url = 'http://maps.apple.com/maps?q=' + stage.latitude + ',' + stage.longitude;
    // window.open(url, '_system');
    if (this.platform.is('ios')) {
      const url = `http://maps.apple.com/maps?q=${stage.latitude},${stage.longitude}`;
      const browser = this.inAppBrowser.create(url, '_system');
      browser.show();
    } else {
      var url = 'http://maps.google.com/maps?q=loc:' + stage.latitude + ',' + stage.longitude;
      window.open(url, '_system');
    }
    // } else {
    //     var url = 'http://maps.google.com/maps?q=loc:' + stage.latitude + ',' + stage.longitude;
    //     window.open(url, '_system');
    // }
    // }).catch((error) => {
    //   this.loader.hideLoadingDefault()
    //   console.log('Error getting location', error);
    // });
  }
  // console.log(stage);
  // const modal = await this.modalController.create({
  //       component: MapPage,
  //       componentProps: {
  //         destination: { "lat": parseFloat(stage.latitude), "lng": parseFloat(stage.longitude) },
  //         boardingPoint: stage.landmark,
  //         title: type == 1 ? "Boarding point" : "Droping point"
  //       }
  //     });
  //     return await modal.present();
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
  // filterBoardingPoints() {
  //   const val = this.boardingSearch?.toLowerCase()?.trim() || '';
  //   if (!val) {
  //     this.filteredBoardingPoints = [...this.boardingPoints];
  //   } else {
  //     this.filteredBoardingPoints = this.boardingPoints.filter(bp =>
  //       bp.name?.toLowerCase().includes(val) ||
  //       bp.address?.toLowerCase().includes(val) ||
  //       bp.landmark?.toLowerCase().includes(val)
  //     );
  //   }
  // }
  // filterDroppingPoints() {
  //   const val = this.droppingSearch?.toLowerCase()?.trim() || '';
  //   if (!val) {
  //     this.filteredDroppingPoints = [...this.droppingPoints];
  //   } else {
  //     this.filteredDroppingPoints = this.droppingPoints.filter(dp =>
  //       dp.name?.toLowerCase().includes(val) ||
  //       dp.address?.toLowerCase().includes(val) ||
  //       dp.landmark?.toLowerCase().includes(val)
  //     );
  //   }
  // }
  filterBoardingPoints(value) {
    var _value$toLowerCase;
    const val = (value === null || value === void 0 || (_value$toLowerCase = value.toLowerCase()) === null || _value$toLowerCase === void 0 ? void 0 : _value$toLowerCase.trim()) || '';
    if (!val) {
      this.filteredBoardingPoints = [...this.boardingPoints];
    } else {
      this.filteredBoardingPoints = this.boardingPoints.filter(bp => {
        var _bp$name;
        return (_bp$name = bp.name) === null || _bp$name === void 0 ? void 0 : _bp$name.toLowerCase().includes(val);
      });
    }
  }
  filterDroppingPoints(value) {
    var _value$toLowerCase2;
    const val = (value === null || value === void 0 || (_value$toLowerCase2 = value.toLowerCase()) === null || _value$toLowerCase2 === void 0 ? void 0 : _value$toLowerCase2.trim()) || '';
    if (!val) {
      this.filteredDroppingPoints = [...this.droppingPoints];
    } else {
      this.filteredDroppingPoints = this.droppingPoints.filter(dp => {
        var _dp$name;
        return (_dp$name = dp.name) === null || _dp$name === void 0 ? void 0 : _dp$name.toLowerCase().includes(val);
      });
    }
  }
}
_StageDetailsApplyBpDpPage = StageDetailsApplyBpDpPage;
_StageDetailsApplyBpDpPage.ɵfac = function StageDetailsApplyBpDpPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StageDetailsApplyBpDpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_5__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_8__.AppData));
};
_StageDetailsApplyBpDpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _StageDetailsApplyBpDpPage,
  selectors: [["app-stage-details-apply-bp-dp"]],
  viewQuery: function StageDetailsApplyBpDpPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.mySlider = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.contents = _t);
    }
  },
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["content", ""], ["mySlider", ""], ["noBoarding", ""], ["noDropping", ""], [4, "ngIf"], [1, "ion-no-border", "theme1"], ["showsubTxt", "true", "showsubtitle", "true", 3, "title", "subtitle"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [2, "position", "absolute", "z-index", "8888", "top", "70px", "--background", "transparent"], [1, "themeone-bg-page", "theme1", 2, "padding-bottom", "75px"], [1, "themeone-center"], ["mode", "md", 1, "themeone-segment", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 3, "click"], ["mode", "md", "value", "upper", 3, "click"], ["pagination", "false", "options", "slideOpts", 2, "padding-top", "15px", "overflow-y", "scroll", 3, "swiperslidechange"], ["id", "lower", 1, "slide"], ["placeholder", "Search location", "mode", "md", 1, "themeone-search-stage", 2, "padding", "8px 16px", 3, "ionInput"], ["lines", "none"], ["mode", "md", 3, "ngModelChange", "ngModel"], ["ngFor", "", 3, "ngForOf"], ["id", "upper", 1, "slide"], [1, "themeone-stage-card"], ["size", "1", 3, "click"], [2, "margin-top", "4px"], ["slot", "start", 2, "color", "#191966", "--color-checked", "#191966", 3, "value"], ["size", "11"], [2, "width", "108%"], [2, "padding-right", "15px"], [1, "themeone-stage-card-label"], [1, "themeone-label-head", 3, "click"], [1, "themeone-txt-bp-name"], [1, "themeone-txt-rt"], ["class", "txt-bp-adrss", "style", "color: #5F5F5F;    padding-top: 5px;margin-right: 25%;", 3, "click", 4, "ngIf"], ["class", "themeone-label-foot", 4, "ngIf"], [1, "txt-bp-adrss", 2, "color", "#5F5F5F", "padding-top", "5px", "margin-right", "25%", 3, "click"], [1, "themeone-label-foot"], ["class", "themeone-dis-txt", 3, "click", 4, "ngIf"], ["style", " width: 100%;", 4, "ngIf"], [1, "themeone-dis-txt", 3, "click"], [2, "width", "100%"], [2, "display", "inline-flex", "float", "right", 3, "click"], ["src", "./assets/icon/cbuslocation.svg", "item-start", "", 2, "height", "20px", "width", "20px"], [1, "themeone-viewmap-txt"], [2, "margin-top", "12px"], ["mode", "md", 1, "bg-cl", "tlbr-center"], ["slot", "start"], [3, "click"], [1, "hd-ln-1"], [1, "hd-ln-2"], ["mode", "md", "color", "red", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 2, "background-color", "#fff", "padding-bottom", "10px", 3, "click"], [2, "text-align", "start", "margin-top", "10px", "margin-bottom", "10px"], [1, "lbl-hd1"], [1, "lbl-hd2"], ["mode", "md", "value", "upper", 2, "background-color", "#fff", "border-left", "2px solid #f3f3f3", "padding-bottom", "10px", 3, "click", "disabled"], [1, "selectBPDP"], [1, "search-bar"], ["name", "search-outline", "slot", "start"], ["placeholder", "Search boarding point", "clearInput", "", 3, "ngModelChange", "ionInput", "ngModel"], [4, "ngIf", "ngIfElse"], ["placeholder", "Search dropping point", "clearInput", "", 3, "ngModelChange", "ionInput", "ngModel"], ["style", "border-bottom:1px solid rgba(128,128,128,0.3);", 3, "click", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid rgba(128,128,128,0.3)", 3, "click"], [1, "txt-bp-name", 2, "width", "250px"], [1, "txt-rt"], ["class", "txt-bp-adrss", 4, "ngIf"], ["color", "red", "slot", "start", 3, "value"], ["style", "height: 30px;padding-left: 6px;", 4, "ngIf"], [1, "txt-bp-adrss"], [2, "height", "30px", "padding-left", "6px"], [2, "display", "flex", "align-items", "center", "margin-top", "-31px", 3, "click"], ["src", "./assets/icon/maps-and-flags.png", "alt", "", 2, "width", "15px", "height", "15px", "margin-right", "5px"], [2, "font-size", "12px", "margin-left", "10px", "color", "#3880ff"], ["class", "dis-txt", 4, "ngIf"], [1, "dis-txt"], [1, "no-data-item"], [1, "no-data-label"], [1, "seabird_header-content"], [1, "seabird_title-container"], ["mode", "md", "slot", "start"], [1, "seabird_main-title"], [1, "seabird_origin-destination"], [1, "seabird_content"], ["mode", "md", 1, "seabird_segment", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "seabird_seg_button", 2, "background-color", "#fff", "text-transform", "capitalize", 3, "click"], [3, "ngClass"], ["mode", "md", "value", "upper", 2, "background-color", "#fff", "text-transform", "capitalize", 3, "click"], ["pagination", "false", "options", "slideOpts", 3, "swiperslidechange"], ["lines", "none", 1, "seabird_list"], [1, "seabird_item_heading"], ["mode", "md", "color", "red", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", 3, "ngModelChange", "ngModel"], ["class", "seabird_item", 3, "click", 4, "ngFor", "ngForOf"], [1, "seabird_item", 3, "click"], [1, "seabird_item_content"], [1, "seabird_item_text"], [1, "seabird_item_time_name"], [1, "seabird_item_time"], [1, "seabird_item_name"], ["class", "seabird_item_address", 4, "ngIf"], ["color", "red", "slot", "end", 1, "seabird_radio", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", 3, "value"], ["class", "seabird_map_item", 4, "ngIf"], [1, "seabird_item_address"], [1, "seabird_map_item"], [1, "seabird_map_content", 3, "click"], ["src", "./assets/icon/maps-and-flags.png", "alt", "", 1, "seabird_map_icon"], [1, "seabird_map_link"], ["class", "seabird_map_distance", 4, "ngIf"], [1, "seabird_map_distance"], ["color", "red", "slot", "end", 1, "seabird_radio_button", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important", 3, "value"], [1, "ourbustheme"], ["class", "hd-ln-1", "style", "text-align: left;margin-left: 10px;font-size: 16px;", 4, "ngIf"], [1, "ourbus-hd-ln"], ["src", "./assets/icon/ourbus_header_person_icon.svg", 1, "ourbus-inline-icon"], ["mode", "md", 1, "ourbus-segment", 3, "ngModelChange", "ngModel"], ["mode", "md", "value", "lower", 1, "ourbus-segment-button", 3, "click"], [1, "ourbus-segment-col"], [1, "lbl-hd1", 2, "color", "var(--iconsAndButtonsColor)"], [1, "lbl-hd2", 2, "color", "var(--iconsAndButtonsColor)"], ["mode", "md", "value", "upper", 1, "ourbus-segment-button", 3, "click", "disabled"], ["mode", "md", 1, "ourbus-ion-radio", 3, "ngModelChange", "ngModel"], [1, "hd-ln-1", 2, "text-align", "left", "margin-left", "10px", "font-size", "16px"], ["size", "1.5", 1, "ion-col", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "ourbus-ion-radio", 3, "value"], ["size", "8", 1, "ion-col"], ["size", "2.5", 1, "ion-col"], [1, "txt-rt", 2, "text-align", "end", "font-size", "14px"], ["style", "padding-top: 0px;", "class", "ion-col", "size", "12", 4, "ngIf"], ["size", "12", 1, "ion-col", 2, "padding-top", "0px"], [2, "display", "flex", "align-items", "center", 3, "click"], ["src", "./assets/icon/maps-and-flags.png", "alt", "", 2, "width", "15px", "height", "15px", "margin-left", "5px"], [2, "font-size", "12px", "margin-left", "20px"]],
  template: function StageDetailsApplyBpDpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, StageDetailsApplyBpDpPage_ng_container_0_Template, 29, 26, "ng-container", 4)(1, StageDetailsApplyBpDpPage_ng_container_1_Template, 49, 21, "ng-container", 4)(2, StageDetailsApplyBpDpPage_ng_container_2_Template, 40, 26, "ng-container", 4)(3, StageDetailsApplyBpDpPage_ng_container_3_Template, 46, 26, "ng-container", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_9__.CommonHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe, _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_10__.OrderbyPipe, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__.FilterPipe],
  styles: [".hd-ln-1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 25px 0 0;\n}\n\n.hd-ln-2[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 2;\n  text-align: center;\n  margin: 0 25px 0 0;\n}\n\n.tlbr-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-right: 15px;\n  height: 74px;\n}\n\n.slide[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #f7f9fb;\n  display: flex;\n  flex-direction: column;\n  justify-content: initial;\n}\n\n.lbl-hd1[_ngcontent-%COMP%] {\n  text-transform: unset;\n  font-family: NotoSans;\n  font-size: 16px;\n  color: #747f8d;\n}\n\n.lbl-hd2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 13px;\n  color: #3e3e53;\n  text-transform: capitalize;\n  margin: -4px 0;\n}\n\n.img-lbl[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 30px;\n  object-fit: contain;\n}\n\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 8%;\n}\n\n.txt-bp-name[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n}\n\n.txt-rt[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.dis-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  color: blue;\n}\n\n.txt-bp-adrss[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: 500;\n  color: #989898;\n}\n\n.loc-hd1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n\n.loc-hd2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  color: #4a4a4a;\n}\n\n.crd-bp[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  text-align: left;\n  box-shadow: 0 0 0;\n}\n\nion-item-divider[_ngcontent-%COMP%]   .selectBPDP[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  color: var(--iconsAndButtonsColor);\n  font-weight: bold;\n  font-size: 15px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  bottom: 4px;\n}\n\n.item.sc-ion-label-md-h[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%] {\n  --color: initial;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  \n\n  \n\n  overflow: hidden;\n  box-sizing: border-box;\n  text-overflow: unset;\n  white-space: unset;\n}\n\n.themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\n.themeone-search-stage[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --border-radius: 5px;\n  background: #ffffff;\n  text-align: initial;\n}\n\n.themeone-segment[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-bottom: 1px solid #a9a9aa;\n}\n.themeone-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  color: #191966 !important;\n  --indicator-color: #191966 !important;\n}\n.themeone-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 2px;\n  font-size: 14px;\n  text-transform: inherit;\n  display: inline-table;\n  color: #5F5F5F;\n  font-weight: 600;\n}\n\n.themeone-stage-card[_ngcontent-%COMP%] {\n  margin: 0px 16px;\n}\n\n.themeone-stage-card-label[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px 0px 11px 0px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.themeone-label-head[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  font-weight: 600;\n}\n\n.themeone-txt-bp-name[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #333;\n  font-size: 12px;\n  width: 75%;\n}\n\n.themeone-txt-rt[_ngcontent-%COMP%] {\n  color: #333;\n  width: 25%;\n  text-align: right;\n  font-size: 12px;\n}\n\n.themeone-label-foot[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n.themeone-dis-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  color: #191966;\n  font-size: 12px;\n  width: 50%;\n  margin-top: auto;\n  font-weight: 500;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n}\n\n.seabird_header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.seabird_title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n\n.seabird_main-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.seabird_origin-destination[_ngcontent-%COMP%] {\n  margin-left: 48px;\n  font-size: 10px;\n  color: #999999;\n  transform: translateY(-19px);\n  text-align: left;\n}\n\n.seabird_content[_ngcontent-%COMP%] {\n  --background: #F1F7FA;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.seabird_segment[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0.5px solid #626262;\n  margin-top: 10px;\n  border-radius: 8px;\n  padding: 16px 10px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-top: 23px;\n  padding-bottom: 0px;\n}\n\n.seabird_point[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  color: #000000;\n  border: 0.5px solid #626262;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #fff;\n  width: 150px;\n}\n\n.seabird_point_selected[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 10px;\n  text-align: center;\n  color: #000000;\n  border: 0.5px solid #626262;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: #DCEEFF;\n  width: 150px;\n}\n\n.seabird_header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.seabird_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.seabird_item_text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.seabird_item_time_name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.seabird_item_time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 8px;\n}\n\n.seabird_item_name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  flex: 1;\n}\n\n.seabird_item_address[_ngcontent-%COMP%] {\n  font-size: 10px;\n  width: 100%;\n  font-weight: 400;\n  color: #999999;\n}\n\n.seabird_map_item[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 6px;\n  padding: 0;\n  display: flex;\n}\n\n.seabird_map_content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.seabird_map_icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n}\n\n.seabird_map_link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 10px;\n  text-align: center;\n}\n\n.seabird_map_distance[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  border: solid 1px gray;\n  border-radius: 10px;\n}\n\n.seabird_item_heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.3);\n}\n\n.seabird_radio[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin: 0px;\n}\n\n.ourbus-hd-ln[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #747474;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #757575;\n  --indicator-color: transparent;\n}\n\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --color: var(--iconsAndButtonsColor) !important;\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n}\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .lbl-hd1[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n.ourbus-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   .lbl-hd2[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  --color:var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.ourbus-segment-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-bottom: 10px;\n}\n\n.ourbus-segment-col[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.ion-col[_ngcontent-%COMP%] {\n  padding-inline-end: 0px;\n  padding-inline-start: 0px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 9px 16px;\n  width: auto;\n  height: 46px;\n}\n.search-bar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.search-bar[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}"]
});

/***/ })

}]);