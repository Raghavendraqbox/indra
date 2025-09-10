'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2796bf48df1007486e9868334b816545",
".git/config": "7b9b19ed09c478afe4b53274fc50b9fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bbd751211f69ae698b26b43cba813da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5080e9d9489df2caf69540ded4dbf0ee",
".git/logs/refs/heads/gh-pages": "ac7c3f63c9cc9261d4e51259ff1226c7",
".git/logs/refs/remotes/origin/gh-pages": "283afe62d6b5716c971b5199a6b69378",
".git/objects/09/fb3ad7d765b29488a8082768af3b380eb89802": "cd7908b78c03b53f982d057675914f3e",
".git/objects/0d/9aef5c024306bbad54d8ffb5bc8e4032326ea3": "596b8b055c636e91c2b0c61365cf1394",
".git/objects/19/194763e927791b974dac1431dcf097c0a96130": "93d2e6c0b9f49d018e02432cbc980d34",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/32/6d29ed01c448a87aba0309c8e0b37b95ecad7e": "52ce00929c01cdb178ff12c9eb430cfd",
".git/objects/3b/d830c0bce7fd76692087682a2fb9b97cdbfce7": "1bd6bae567310f1a519bc0590ed64a6f",
".git/objects/44/6bae0378c3a2ba2b8625e1349b52054d93d5ca": "261aa239811fdf601579100c8ed67680",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bdfaed9136e8c96b3c72d5c1cc9a5cb05c7ae1": "a0524afe6457aac12c8b1d1f62ed2c79",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/f7d6724a4fa21daf40145812204d9a595b5847": "5f2303fd9525c31ed29bf5d291ca0ff3",
".git/objects/51/df1101f1d0b296710e80b5d2d7f5a1a9d13777": "65fc64141cc1c9d88971edd7672f83be",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5c/441cdff3a36f02c389f8743f207cf1a0a0740a": "68ed855d47dbad61cd323796c31da2a8",
".git/objects/5d/e53435f65566ccd3dcfaa131b6ac26b40474d9": "6d19d2b90ea077db0e34eeca53905345",
".git/objects/6a/1fe68572399e49f50f764253cd4f6499fb54f9": "1c45b10e2eef53df84678ac71c4cc24f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/451be4cc75f16b0042a4083c61773535dd3041": "97fc17f0450a39b8929aa1f3dc8e8780",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/85/f299e5d48307a9dea76e28323bb3895b1df591": "e71469da2ba7c6fafb470d58b316d74c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/667e04120b7d66efda3373fcdea003661993e7": "7d5a10c347274978319c41788d479d00",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/99/a8091366e2ac7f301452706d5cfdff5e320a0d": "f6756174186e60296ce2d8156547fbe1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/b5bb3511ba03018447994617bde5807fc45ea0": "88c851ae4210eb7c6aa5f4f1bfad0ebe",
".git/objects/a6/b066c2f6c50b7357391e71313de05d3fca2eb8": "ff6fe8ff302442ac5c22494b23764dba",
".git/objects/ae/fed40de4575b0c9d76e3fad6ece9de05c95300": "36b5c2186ed0e1023e618c622c4d4d59",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5fe91fa29f9ff2712ed755e3aa5c2771d1b2e8": "da385cfbe0cad581ae92c2e97eb451ca",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/5ee6e77355c698f7cb60a17b997b1190bbc956": "639616dc36d34534ad510ec530004bde",
".git/objects/bf/6642dfbb762db7d85dadd4181cb77015524193": "6cc73388b07cf8be60b69b4ff10d81af",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/45e57d1dd25a5e6d457cad47d448e8e431a1cb": "470520c8d42390771373ed8b2b338f0b",
".git/objects/ce/b3091028f33fae57b149a33c339f8327aa9635": "44b80d0333c36d2fb6923d7a426e03d6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/cd53bd601c35a80c87ffc88b8531e0131ad235": "6fc02ad0a64d1b613a08575a2f9378fb",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/f7c1158100339b6ecc2b050eb9241acf0ea145": "39543ca418aadeed8cc25e2291873644",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/408e440bdb4c9fa4b97ea6608a7e2fca791475": "cb0c33aa891dea46f01ae6d32ff4d0d0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/a2eccf416e2da68a8e63e4f165ef5f65c161fc": "1ec30551965bc3f13994326a59d67e0d",
".git/refs/heads/gh-pages": "1ba105a4e56d8ba318840679af9f04ab",
".git/refs/remotes/origin/gh-pages": "1ba105a4e56d8ba318840679af9f04ab",
"assets/AssetManifest.bin": "18fdf2f894fc2d2ec9b8797ac0fcf445",
"assets/AssetManifest.bin.json": "354e5cef785534f7cfb1615b8ce9922f",
"assets/AssetManifest.json": "efe1ddb5f278cc07e567d28c365f9abd",
"assets/assets/images/login/Google__G__logo-removebg-preview.png": "9445246704cf6e0e419890a80cec1925",
"assets/assets/images/login/Platform=Facebook,%2520Shape=Original,%2520Colored=True.png": "b92c6db6f0463731dea85ab1bae47e4e",
"assets/assets/images/onboarding/slide1.png": "aee05eafe0de732472f71c446140aadb",
"assets/assets/images/onboarding/slide2.png": "26f541369eb871fb9ad924ef2e2b96e1",
"assets/assets/images/onboarding/slide3.png": "aee05eafe0de732472f71c446140aadb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "97bc76588dc11c78e5cfd98843d4d2a4",
"assets/NOTICES": "35381613268501e397f93222bca41d2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bc4b68291eec2bb37afffad3ff1d7674",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77100ef65785cc6fc60c3f1e4bbe34ee",
"/": "77100ef65785cc6fc60c3f1e4bbe34ee",
"main.dart.js": "bb6b72e9ed9ebc65bf68139d050bf73b",
"manifest.json": "9d26a9494cec75692e27a4122fdcb5dd",
"version.json": "1cb3faeb23cbc778349182d28301f4c9"};
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
