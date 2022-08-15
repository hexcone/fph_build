'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "53b15858042ae0f1a6df861b7b1af91e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/google_fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/nav/logo.riv": "97bb6a8356bf9fe439351180c0ab81fa",
"assets/assets/nav/home.riv": "ffc312e9d393d0d0912c8f1a36b45044",
"assets/assets/nav/audio.riv": "6d049b4c04e077ed69db84ec25c7ae7e",
"assets/assets/ar/Tile_03.riv": "6a536dd0f76dbbe1e1d8cfeb2baf551f",
"assets/assets/ar/Tile_13.riv": "64a2ad0b19d5ae07cf6e250e225f9651",
"assets/assets/ar/Tile_09.riv": "1af9318615e6f651959008da6e27bec7",
"assets/assets/ar/Tile_07.riv": "f84239c8449bf1d24a9e04438cac44d4",
"assets/assets/ar/Tile_08.riv": "7b9876c995b79bb32b617b6d1464429a",
"assets/assets/ar/Tile_12.riv": "b8d7db7ff175d4333f72e45d8f9c2a78",
"assets/assets/ar/Tile_11.riv": "c5bdf3ca8a1387b9741efaea11978232",
"assets/assets/ar/Tile_10.riv": "8191c48c6ccdc2d84dad9c253b3ec1bb",
"assets/assets/ar/Tile_15.riv": "fa41ffcf2f19d537347ec275e52615d4",
"assets/assets/ar/Tile_05.riv": "a4e0ad7df5248989354666344b988019",
"assets/assets/ar/Tile_14.riv": "92d5b1d9024cacc9e1b90a2bd0c7eb66",
"assets/assets/ar/Tile_06.riv": "f2fb992dd5e5d49c57103c859b9aaf2e",
"assets/assets/ar/Tile_01.riv": "31bba4f789ed587e993fcd2bfc63b485",
"assets/assets/ar/Tile_02.riv": "d980ea81642abdd4ea0cb611ca48be4c",
"assets/assets/ar/Tile_04.riv": "829ba865c973cced802885d7c733b0ff",
"assets/assets/fishballoon.riv": "13d1977ac4b0708c6944526ca3d617bf",
"assets/assets/audio/HorizonSample.mp3": "f283788d8f6e63d13ffa88adb278b683",
"assets/assets/audio/ClickSample.wav": "57ae9b34e270e588a7f5b32e9fad1346",
"assets/assets/audio/NatureSample.mp3": "9664b04b506fa654cab4eb954e15d871",
"assets/assets/background.riv": "6bb9c4089763cf1488203d09a5a1be5a",
"assets/assets/dark_light_mode.riv": "673a5a7b8ddd0962fee5f53adc73ee49",
"assets/assets/winningstar.riv": "4008ec14e68890ade15734edc9e274a0",
"assets/assets/loader.riv": "fcd11722c75605f307ae75cc8b888bbb",
"assets/assets/difficulty/hard.riv": "b4292e92f06c5ca808e36c74280a2a50",
"assets/assets/difficulty/easy.riv": "4344a4443ed5ec7425d29ee3e6c2985f",
"assets/assets/difficulty/medium.riv": "d4433cac58b394a2f7d339f416d9fe7b",
"assets/assets/hi/Tile_03.riv": "d4bb05a4f835925d18849f7487449350",
"assets/assets/hi/Tile_13.riv": "da3b0ff06926dd7c363ef54da782123a",
"assets/assets/hi/Tile_09.riv": "c5492a89ee66c732742f07b6cfa0439b",
"assets/assets/hi/Tile_07.riv": "0023052f5a529dd8c0e56a766bcaa29e",
"assets/assets/hi/Tile_08.riv": "06cff25d33066b21894798c940d544a5",
"assets/assets/hi/Tile_12.riv": "bad334cd3587e3f8be22d8ff7c349a6b",
"assets/assets/hi/Tile_11.riv": "5b646e50bc9b689af3db0846382fb31f",
"assets/assets/hi/Tile_10.riv": "1899aeeffac00f8209c3a61f2cb282ec",
"assets/assets/hi/Tile_15.riv": "a64a3ee9527351304b9ac22162f3b3ab",
"assets/assets/hi/Tile_05.riv": "cf420c5ac59472a535cfb4cad172df85",
"assets/assets/hi/Tile_14.riv": "b0568c47f014a42059fd72de7c074fdf",
"assets/assets/hi/Tile_06.riv": "4cec3e4c9289c488f85bbcf2c743889e",
"assets/assets/hi/Tile_01.riv": "68d9e604735dbf0d93d0b5753d412bb0",
"assets/assets/hi/Tile_02.riv": "79d7c4f2a87c36f6452c67688277a042",
"assets/assets/hi/Tile_04.riv": "4a4ef59ff7ef3411db1a47494311cb9e",
"assets/assets/menu/cn.riv": "b7178a4bf733b8ac778193f1051a30de",
"assets/assets/menu/ar.riv": "d4a122528039deb29614996ecbcb55ac",
"assets/assets/menu/hi.riv": "5a87fa0c223f8325be842b50cc28c225",
"assets/assets/paratrooper.riv": "1056796500cf0b37aeb956274ccf1632",
"assets/assets/cn/Tile_03.riv": "2c423306d41c3d3823e99f49f8b9f246",
"assets/assets/cn/Tile_13.riv": "558a1e717a44eeed5c61dd16b4d694d0",
"assets/assets/cn/Tile_09.riv": "66351d8fde6c58ebaf8aa7a2ab07bc5c",
"assets/assets/cn/Tile_07.riv": "29b29f928e88f5efecb7a1296ec18557",
"assets/assets/cn/Tile_08.riv": "a755e72ad6388edaa31bd8e3931b61b4",
"assets/assets/cn/Tile_12.riv": "008ae7d52f6f2796da2940ef62d73115",
"assets/assets/cn/Tile_11.riv": "3a33bc2f1d7fbf5462cd6c1d9ea0778f",
"assets/assets/cn/Tile_10.riv": "ad2faab523e45bd202a15a43e9c233c5",
"assets/assets/cn/Tile_15.riv": "0edd90c19c1d98f352aae3dbe1db83b2",
"assets/assets/cn/Tile_05.riv": "c366c2769c1c438ddafc2ff8b7dd5147",
"assets/assets/cn/Tile_14.riv": "aa4f2e98d0aabf1ecfc6e86d3de37899",
"assets/assets/cn/Tile_06.riv": "3623bf51eeb3f0edf8fb3d0d64514a16",
"assets/assets/cn/Tile_01.riv": "1c5d653b28ac9d7224e5464590fe3d26",
"assets/assets/cn/Tile_02.riv": "2b43023576f62c7b819604cbf2ed3b67",
"assets/assets/cn/Tile_04.riv": "4e55cc860c3b069df3fc4b498d9e550b",
"assets/assets/border.riv": "4a3a929bd79239af6ba4313c134e9fc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "f3c25f2e0dc3acc81321fd475c7178b8",
"assets/NOTICES": "6db82c654e77c06478c98910e7842c63",
"favicon.png": "7dc68c415e5329b7b4ab45fed3f2fb15",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "550aef278b1087ac7ded6ca8b3fa5065",
"/": "550aef278b1087ac7ded6ca8b3fa5065"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
