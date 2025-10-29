'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f97b07510e96a024e4d9aba4720daad",
"version.json": "ecf788f2a50ac2d867fa44658fdabd09",
"index.html": "03c566fb44caf1ea099d960efc8ddb9e",
"/": "03c566fb44caf1ea099d960efc8ddb9e",
"main.dart.js": "971c5f879e31a5b0fa8a6b98577ad133",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42e84b070b22a0940a07bd049a3e79d3",
"assets/AssetManifest.json": "7dce3156cb437488374216e623af07c7",
"assets/NOTICES": "7c6ea45f310e65299e9c51cc5fa134f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3ac6e7b9a3a5ba2d924b5158d32f0ada",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1f8428af79153833b803b739627c7684",
"assets/fonts/MaterialIcons-Regular.otf": "d57a13ad9b0c711eea55c36a4f3d8220",
"assets/assets/launcher/icon.png": "1fd7fe443a16a2febd742647ae38eee3",
"assets/assets/launcher/splash.png": "ca10ac7d0deaf366173693e805e08fdf",
"assets/assets/images/gear.png": "4b9e53bdaa7465457d2a79dd9a0e275a",
"assets/assets/images/checkmark.svg": "7726ac72b127cb3935c57593ff197b17",
"assets/assets/images/active_history.png": "ada84900c22eceecf57c1779e2f87ff0",
"assets/assets/images/booking.png": "de3221b88c270af895086b465b5f17f1",
"assets/assets/images/qr-code.png": "408a9c0513f23d9bb86e028925e87678",
"assets/assets/images/logout.png": "cf40a2c4a479c0efe349916f92b03844",
"assets/assets/images/search_icon.png": "74e904d3e9671cf27498ceb7ab20170c",
"assets/assets/images/active_billing.png": "f61c2763ff334eb92b0551cdd37cb1cf",
"assets/assets/images/account.png": "02d00f3a5ea184f54fe9d480442a37ce",
"assets/assets/images/active_vehicle.png": "28278ef913444cfb3c7381ff4964e3cb",
"assets/assets/images/info.svg": "1be5f730424efa22cea1b45edc2e8d09",
"assets/assets/images/swap.png": "59e1dc2f689ddeb4720c6cb5dd75b43b",
"assets/assets/images/history.png": "ed87cb24b1cb13c81c23d983069d81f4",
"assets/assets/images/avatar.png": "a5e81f19cf2c587876fd1bb08ae0249f",
"assets/assets/images/menu.png": "55774823e091de1c8c18507642bebffd",
"assets/assets/images/billing_sprite_icon1.png": "ce3ae4aaeeb613c256f2857a3b69326e",
"assets/assets/images/password.png": "adeb7cfaadea87bc703921b6fb89da1f",
"assets/assets/images/active_booking.png": "9083c0fbf9e2eb5d73128ecfd36cb8ad",
"assets/assets/images/details_sprite_icon.png": "3eb1ea2c5f593388cbd4a95fd10e3244",
"assets/assets/images/menu1.png": "030810e19acc92dd66a8d897c69bbfd8",
"assets/assets/images/logo.png": "40fdc64262985f56e86a56f4b2735ee3",
"assets/assets/images/notifications.png": "032bab3c67d7891a57b09a5683157fbd",
"assets/assets/images/cross.png": "3dbcd22fc01b81a00ce95e62f5b1d2ce",
"assets/assets/images/billing_sprite_icon.png": "4d578572c228514c21b461152aadf901",
"assets/assets/images/print_icon.png": "fb4341bb89422e346ce4d0b31d1be510",
"assets/assets/images/exclamation_mark_icon.png": "0ff12c0ff8fe45af914ac8364ba77375",
"assets/assets/images/calendar.svg": "91fdd0187d61f52313eac8bbf71cb9f1",
"assets/assets/images/check_mark.png": "7442a8cf04725cfaed2679b62c29ea9a",
"assets/assets/images/billing.png": "fc75e942aac77711114681775499c965",
"assets/assets/images/vehicle.png": "28f28b63f28be488aaab9b0b52724493",
"assets/assets/i18n/en.json": "61bf52a9a753c861e6b62d6e7d991292",
"assets/assets/i18n/id.json": "c23b6ccc195b1dd0bbdf12bd751bd6f3",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
