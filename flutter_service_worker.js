'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fdd09066ae1076447f64f8d655aa660b",
"assets/AssetManifest.json": "2fa04411be62b37d6c0e94c00387cb25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b47ca360edf8a5e5e185e5d74a0bdff6",
"assets/image/icons8-cyber-security-80%2520(1).png": "07c30c142bb7431a4dbe33a68eb68077",
"assets/image/icons8-cyber-security-80%2520(2).png": "371a4808ab506b5618b7ccfc23b8be5a",
"assets/image/icons8-id-verified-80%2520(1).png": "ce9f119c0a7624313d103f584f383aaf",
"assets/image/icons8-id-verified-80.png": "c7c744150a7aa3eb8653f58c698bdd98",
"assets/image/icons8-indoor-camera-80%2520(1).png": "9e2b533cc6f4f02a68363e7b1f295011",
"assets/image/icons8-indoor-camera-80%2520(2).png": "5dda4c68d218716fb3029340fe32e39d",
"assets/image/icons8-lock-80%2520(1).png": "97f9fa03458b4c7334b26173d0a3783c",
"assets/image/icons8-lock-80%2520(2).png": "716f23d32b1b1293d3c71887a27e1900",
"assets/image/icons8-lock-80%2520(3).png": "b1148537bdedcb95a6fb7417f603a129",
"assets/image/icons8-lock-80.png": "a60c41c89f38e6fc0fd3d52d5a00d9ab",
"assets/image/icons8-mobile-shop-log-out-80%2520(1).png": "6a5050e67f4bf492de23db4bc719fd50",
"assets/image/icons8-mobile-shop-log-out-80.png": "81004dc8fa19fe03f02e14ae00962515",
"assets/image/icons8-noise-80%2520(1).png": "2be9fb48e3fdff2b9248d47098a12dd9",
"assets/image/icons8-noise-80%2520(2).png": "ebb63f7c1d487333b2ec0c7d16267bc6",
"assets/image/icons8-noise-80%2520(3).png": "76e4dd2e13f57a6de293bf4caf815d16",
"assets/image/icons8-noise-80.png": "7ecadc59451e0bf1e7afa4dda819c9a3",
"assets/image/icons8-password-80%2520(1).png": "7f7117b45d418768f7d78fb42afb2788",
"assets/image/icons8-password-80.png": "f982e8378c5862b9335b98f05a5fe0df",
"assets/image/icons8-security-configuration-80%2520(1).png": "5e334c5f9c75dc44693446d285e38a67",
"assets/image/icons8-security-configuration-80.png": "d95b5585a55236abb6173c34e452b2b8",
"assets/image/icons8-unlock-80%2520(1).png": "1074670ce5d50585f893762c5cc5ea71",
"assets/image/icons8-unlock-80%2520(2).png": "091b5c9e17eb24215294b41eaa4c00c2",
"assets/image/icons8-unlock-80%2520(3).png": "763f582f730d5ffc4a154814033a6b9d",
"assets/image/icons8-unlock-80.png": "77147f4d46ca3ca74a0ba2b10073d8ce",
"assets/image/icons8-warning-shield-80%2520(1).png": "813cd45e2e3a041ba1c360c191cbe764",
"assets/image/icons8-warning-shield-80%2520(2).png": "b8bad5fdf507acc18704f3c249363a4c",
"assets/image/icons8-warning-shield-80%2520(3).png": "bf672db6420f1507d64c3f27a3d98fe5",
"assets/image/icons8-warning-shield-80.png": "21dda41a9d79bb09418da0415a378140",
"assets/image/logo-1.png": "ba12b12430e8c29d7729991a4931fbb7",
"assets/image/logo.png": "c40ededb5af093623e8ff23b503a3c80",
"assets/image/logo_blue.png": "13b80d38dd4da77f62e795a408447178",
"assets/image/logo_red.png": "13b80d38dd4da77f62e795a408447178",
"assets/NOTICES": "6679195ce6d4b2ea35c2bf3687d77e43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "8cfba0d702862286318145b23e068d1d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "13542f4602523bfbafbb770f7f5dd85c",
"icons/Icon-512.png": "17d3dbf6b1db3549490ec77ed68373f4",
"icons/Icon-maskable-192.png": "13542f4602523bfbafbb770f7f5dd85c",
"icons/Icon-maskable-512.png": "17d3dbf6b1db3549490ec77ed68373f4",
"index.html": "8d0dd278ed5145fb1d1e9f54b561c673",
"/": "8d0dd278ed5145fb1d1e9f54b561c673",
"main.dart.js": "4f711ca569229638abb284a1cc48af5c",
"manifest.json": "9d4d3c389e49b1adfbf72d732b9714dc",
"version.json": "7196ca2705f1218c0c6b1a417a525ca7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
