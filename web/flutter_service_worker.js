'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "eff9bce956305d3e09a69074d21eeee4",
"index.html": "5743252b230f30056e2b8e2a9a8e9b07",
"/": "5743252b230f30056e2b8e2a9a8e9b07",
"main.dart.js": "1ee8863751eeea8ef6c2c81051b566ea",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b48bf35b6cc68a0dc0f2f5e788c03888",
"assets/AssetManifest.json": "1098541dff242b2511a8fd0c46c1a323",
"assets/NOTICES": "765c6a8938ec1f17d6630ef60f346c99",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fd8e2fb8370f72cfb6de7f135d60dcff",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/open_peeps/assets/atoms/accessories/Sunglasses%25202.svg": "9238cf6d10d06ffe8674fde6224ccfcc",
"assets/packages/open_peeps/assets/atoms/accessories/Glasses.svg": "157cc1e9326070a3a8420e27fd33cd36",
"assets/packages/open_peeps/assets/atoms/accessories/Glasses%25202.svg": "cbd4f75a32300dae22b9e7593c29aec7",
"assets/packages/open_peeps/assets/atoms/accessories/Glasses%25203.svg": "43da34d86bc3331f846e0ebafbc50453",
"assets/packages/open_peeps/assets/atoms/accessories/Eyepatch.svg": "6266f3242e3fc39b0b4eca44f4170700",
"assets/packages/open_peeps/assets/atoms/accessories/Glasses%25204.svg": "cbf8fde8bdff5fefd8fcfbdd906cadaa",
"assets/packages/open_peeps/assets/atoms/accessories/Sunglasses.svg": "37b351c00be9d0cff98e79d885264979",
"assets/packages/open_peeps/assets/atoms/accessories/Glasses%25205.svg": "00e0838f9fd269e70fb344ad9bb40e2b",
"assets/packages/open_peeps/assets/atoms/accessories/*%2520None.svg": "4bbfba20ab644fc350114b2b3cf62e90",
"assets/packages/open_peeps/assets/atoms/face/Old.svg": "833aca1acfb3d241ee24073aaa3b6620",
"assets/packages/open_peeps/assets/atoms/face/Cheeky.svg": "f2e04702643db324ae79cf12396191b0",
"assets/packages/open_peeps/assets/atoms/face/Smile%2520Teeth%2520Gap.svg": "275e09dee2d20b07f8542515c5d7ef04",
"assets/packages/open_peeps/assets/atoms/face/Explaining.svg": "6ff70fd20155ae80cc2bb00100205b98",
"assets/packages/open_peeps/assets/atoms/face/Serious.svg": "7dcc83049a924a5b680e34a89e58cde5",
"assets/packages/open_peeps/assets/atoms/face/Eyes%2520Closed.svg": "0ceb87e6d13cd428da89598a0ff84354",
"assets/packages/open_peeps/assets/atoms/face/Awe.svg": "fd7e0697202b40b38bf6779ef67b1b72",
"assets/packages/open_peeps/assets/atoms/face/Eating%2520Happy.svg": "d024c80e8ec151790738330d3b94a7b9",
"assets/packages/open_peeps/assets/atoms/face/Blank.svg": "c84b4da726cc680ad4f44835a319b40a",
"assets/packages/open_peeps/assets/atoms/face/Loving%2520Grin%25201.svg": "c339f7ff264e00a043174d1b6a9670a4",
"assets/packages/open_peeps/assets/atoms/face/Loving%2520Grin%25202.svg": "73370a083fbbcdbec4386218486e2487",
"assets/packages/open_peeps/assets/atoms/face/Hectic.svg": "39a291098d7000ba49e2d6c0accae7d5",
"assets/packages/open_peeps/assets/atoms/face/Rage.svg": "94a0833b6c11f4aaf62f70fe1a5e9da2",
"assets/packages/open_peeps/assets/atoms/face/Suspicious.svg": "40775d35de8d2c067ff356e06852ac48",
"assets/packages/open_peeps/assets/atoms/face/Smile.svg": "2c017c0722f87d959d1ed5d7a81f16d6",
"assets/packages/open_peeps/assets/atoms/face/Very%2520Angry.svg": "9706854750be53216dcde781e71ed722",
"assets/packages/open_peeps/assets/atoms/face/Monster.svg": "c374415dfe659c36cc6bbbba2e2925c0",
"assets/packages/open_peeps/assets/atoms/face/Smile%2520Big.svg": "5615fa688cc9e4b05510dd17925999d5",
"assets/packages/open_peeps/assets/atoms/face/Contempt.svg": "07b2c639e5aea2ccfe8ee17bf3d96a6f",
"assets/packages/open_peeps/assets/atoms/face/Cute.svg": "07e256963b6ce653f3d2ae8790d510cb",
"assets/packages/open_peeps/assets/atoms/face/Concerned.svg": "ca05c9eeecc6ed9fff6349c718ffada7",
"assets/packages/open_peeps/assets/atoms/face/Tired.svg": "df62ef6f138157b6e80a5206e6056160",
"assets/packages/open_peeps/assets/atoms/face/Calm.svg": "f273693891cd1f915a754150acf1a809",
"assets/packages/open_peeps/assets/atoms/face/Cyclops.svg": "0849df34254534929ca156573fa7d925",
"assets/packages/open_peeps/assets/atoms/face/Driven.svg": "460a6077a8908894c19fdeaf70af3f3e",
"assets/packages/open_peeps/assets/atoms/face/Solemn.svg": "4518ac1f1be0a762cc642a1edb8f8398",
"assets/packages/open_peeps/assets/atoms/face/Concerned%2520Fear.svg": "9c2f48c517f52c8f49660e862f2c16d9",
"assets/packages/open_peeps/assets/atoms/face/Fear.svg": "1602b7c5a660edad7dedfd61f0b6c955",
"assets/packages/open_peeps/assets/atoms/face/Angry%2520with%2520Fang.svg": "3a8a93b8f51e813899f5e100a1301af0",
"assets/packages/open_peeps/assets/atoms/face/Smile%2520LOL.svg": "c4d2f26e9917223f20cb1a1c0913540f",
"assets/packages/open_peeps/assets/atoms/body/Sweater%2520Dots.svg": "bfc57144c7db698cd939af6dc51e8799",
"assets/packages/open_peeps/assets/atoms/body/Tee%25202.svg": "69136c14f71a375491164e0eb2f14bae",
"assets/packages/open_peeps/assets/atoms/body/Striped%2520Tee.svg": "f9c362543eb6c3bb894d256fad37e479",
"assets/packages/open_peeps/assets/atoms/body/Pointing%2520Up.svg": "395e035e097b13fdbe5d6620e20d689c",
"assets/packages/open_peeps/assets/atoms/body/Blazer%2520Black%2520Tee.svg": "d4ca398d02d358fd88054cdfa0696b5c",
"assets/packages/open_peeps/assets/atoms/body/Tee%25201.svg": "8723b01f8dc557c9f30a4958f0f3caa3",
"assets/packages/open_peeps/assets/atoms/body/Explaining.svg": "c71d91cb4108a8a2bbb1a89e42556e82",
"assets/packages/open_peeps/assets/atoms/body/Gaming.svg": "791cccfea41caca210445877643cbcda",
"assets/packages/open_peeps/assets/atoms/body/Polo%2520and%2520Sweater.svg": "02536ed1d991f5e0bd623d3eec5a5291",
"assets/packages/open_peeps/assets/atoms/body/Shirt%2520and%2520Coat.svg": "7e9c699eeb4e27338737ffa057a7706a",
"assets/packages/open_peeps/assets/atoms/body/Polka%2520Dot%2520Jacket.svg": "12ab00198050196c7abe889bf846fc5d",
"assets/packages/open_peeps/assets/atoms/body/Striped%2520Pocket%2520Tee.svg": "ac56a71782c240a70a5dfdfb920d36cb",
"assets/packages/open_peeps/assets/atoms/body/Tee%2520Arms%2520Crossed.svg": "db72f7df59d7b2861eb952388818b94d",
"assets/packages/open_peeps/assets/atoms/body/Coffee.svg": "32e70ce89760e42a6cabbdcc87dc3cfd",
"assets/packages/open_peeps/assets/atoms/body/Whatever.svg": "1839db28f02b7683465cdbf138f4d112",
"assets/packages/open_peeps/assets/atoms/body/Paper.svg": "505e1154980b52376a48ac565957a845",
"assets/packages/open_peeps/assets/atoms/body/Hoodie.svg": "3e12d0d376a71583a6c8f1f9d2acf558",
"assets/packages/open_peeps/assets/atoms/body/Dress.svg": "cd2295178a253e03b348ebf100f37cff",
"assets/packages/open_peeps/assets/atoms/body/Sporty%2520Tee.svg": "2b1f8897084d3b8c46bdd3b849786913",
"assets/packages/open_peeps/assets/atoms/body/Sweater.svg": "8d1168096cc421571cc8024fa3ec65e1",
"assets/packages/open_peeps/assets/atoms/body/Macbook.svg": "11e10c73c3ad10482f41492ae5474b17",
"assets/packages/open_peeps/assets/atoms/body/Device.svg": "1947965b06d3e9688c2709d12ef582c4",
"assets/packages/open_peeps/assets/atoms/body/Button%2520Shirt%25202.svg": "038f29004b46a3bc45ed56d77fa43638",
"assets/packages/open_peeps/assets/atoms/body/Fur%2520Jacket.svg": "ef2f6481f0f65dac21337b74b2d6a4a2",
"assets/packages/open_peeps/assets/atoms/body/Button%2520Shirt%25201.svg": "561468c5e6173339fce95c1d968712ed",
"assets/packages/open_peeps/assets/atoms/body/Tee%2520Selena.svg": "8b4c09a51c9c628573063681cfb6f65c",
"assets/packages/open_peeps/assets/atoms/body/Gym%2520Shirt.svg": "cd910c4ce0972ab5bc338410cf0ba3f4",
"assets/packages/open_peeps/assets/atoms/body/Killer.svg": "35f3929185dba0d72c6d79a5a33d661f",
"assets/packages/open_peeps/assets/atoms/body/Thunder%2520T-Shirt.svg": "19e5bf1a38390510506fd9269173ab07",
"assets/packages/open_peeps/assets/atoms/body/Turtleneck.svg": "82c25287d369bdd3d9e0f2b24888b0da",
"assets/packages/open_peeps/assets/atoms/head/Bantu%2520Knots.svg": "cf125b255cf704d0bf4bf10ee407c6d7",
"assets/packages/open_peeps/assets/atoms/head/Medium%25201.svg": "014616c145626f9211cd0f27736999f2",
"assets/packages/open_peeps/assets/atoms/head/Shaved%25201.svg": "b759294e0f7dca899f3c28a9f7dc5f61",
"assets/packages/open_peeps/assets/atoms/head/Pomp.svg": "e0f8ce3c3056ce3c49c3c8383b09d46d",
"assets/packages/open_peeps/assets/atoms/head/Shaved%25203.svg": "2bcb2a849251dc09ecf2720ffd3f7078",
"assets/packages/open_peeps/assets/atoms/head/Cornrows%25202.svg": "9f73e7bdbfd15088b0848e85a39a5192",
"assets/packages/open_peeps/assets/atoms/head/Medium%25202.svg": "b6f82b340c8553784023cc1253b5f4be",
"assets/packages/open_peeps/assets/atoms/head/Medium%25203.svg": "7e555c50ce11dbc7cfb3183129299f49",
"assets/packages/open_peeps/assets/atoms/head/Shaved%25202.svg": "771eefec972bf6000347912da212aa35",
"assets/packages/open_peeps/assets/atoms/head/Long%2520Curly.svg": "3f4ac12a508e98a650c93c77a8dbd21f",
"assets/packages/open_peeps/assets/atoms/head/Mohawk%25202.svg": "d5bd103a9d45271a6858f543a18c96e1",
"assets/packages/open_peeps/assets/atoms/head/Hijab.svg": "6cdf4f4883819654cc117a33a90585b6",
"assets/packages/open_peeps/assets/atoms/head/Bangs%25202.svg": "f1ae3ce2f5ab3681461dc724df1cbb2b",
"assets/packages/open_peeps/assets/atoms/head/Turban.svg": "299022c2ffa1841d0cea88dc7e394251",
"assets/packages/open_peeps/assets/atoms/head/Bun%25202.svg": "4a460e22d843e38bce22a398e2b86f3a",
"assets/packages/open_peeps/assets/atoms/head/Bangs.svg": "499b88fc3a8e28821e030c8d710ba08b",
"assets/packages/open_peeps/assets/atoms/head/Twists%25202.svg": "d9cbd593a836b99500fc00736bbcbf9b",
"assets/packages/open_peeps/assets/atoms/head/Medium%2520Bangs%25203.svg": "719631b5eae18b794186dee63a208074",
"assets/packages/open_peeps/assets/atoms/head/Cornrows.svg": "e488e805835b578ae7846f121e46dfd8",
"assets/packages/open_peeps/assets/atoms/head/Medium%2520Bangs%25202.svg": "d00ac697581e9ee49624707d0f1cbab8",
"assets/packages/open_peeps/assets/atoms/head/Medium%2520Bangs.svg": "6fccd0acb7a90d5977792a19045b4d89",
"assets/packages/open_peeps/assets/atoms/head/Gray%2520Short.svg": "8b7ef2fcd9c23f5d4732a56c61ed671c",
"assets/packages/open_peeps/assets/atoms/head/Mohawk.svg": "65b05c2132226ce481c104642d3cff3f",
"assets/packages/open_peeps/assets/atoms/head/hat-hip.svg": "3d736067ee71685b48dc1860ebedf611",
"assets/packages/open_peeps/assets/atoms/head/Medium%2520Straight.svg": "d76227a4bc6c9617954864a020c2195f",
"assets/packages/open_peeps/assets/atoms/head/Bun.svg": "bca4a8baec3b587ea3a3280f8139ced6",
"assets/packages/open_peeps/assets/atoms/head/Bear.svg": "516fa533268c9523d9cee2164d09b379",
"assets/packages/open_peeps/assets/atoms/head/No%2520Hair%25201.svg": "2ed7876c16814631b420ab0d4ddf4648",
"assets/packages/open_peeps/assets/atoms/head/hat-beanie.svg": "02f8602a2565510c9f598741616c8192",
"assets/packages/open_peeps/assets/atoms/head/Short%25204.svg": "7e6a9195aedce9574bb9d7d34932afea",
"assets/packages/open_peeps/assets/atoms/head/No%2520Hair%25203.svg": "b84401faa5516ba3979031784b28b996",
"assets/packages/open_peeps/assets/atoms/head/No%2520Hair%25202.svg": "8f68a5fc3589a92ffeeb20f3e07a3d90",
"assets/packages/open_peeps/assets/atoms/head/Long.svg": "62793f49563246f9507dd24121cefb93",
"assets/packages/open_peeps/assets/atoms/head/Short%25205.svg": "64166d342bb8a039a25ba1a30bd3163d",
"assets/packages/open_peeps/assets/atoms/head/Short%25201.svg": "fff340c15a040015081a87b79aaa529f",
"assets/packages/open_peeps/assets/atoms/head/Short%25202.svg": "42a408b6ae537744158a1bc52d623f72",
"assets/packages/open_peeps/assets/atoms/head/Short%25203.svg": "f253133e6f6503994f580f062e0b328f",
"assets/packages/open_peeps/assets/atoms/head/Afro.svg": "56b3f2bbc42d930dc458568986e87755",
"assets/packages/open_peeps/assets/atoms/head/Buns.svg": "8ba1dfd64313eb6f064be29f1548a0d8",
"assets/packages/open_peeps/assets/atoms/head/Gray%2520Medium.svg": "8d9d53679f448885bf13acbbc4851291",
"assets/packages/open_peeps/assets/atoms/head/Flat%2520Top%2520Long.svg": "fb9596e45b7de0396f79b390ca3b4240",
"assets/packages/open_peeps/assets/atoms/head/Flat%2520Top.svg": "ecafadc7e8f3052995398c2a32aaa8ac",
"assets/packages/open_peeps/assets/atoms/head/Long%2520Afro.svg": "f657c58278bab0a2155108e5c0ce9c17",
"assets/packages/open_peeps/assets/atoms/head/Twists.svg": "24dd01a84570f0040f50589d07569659",
"assets/packages/open_peeps/assets/atoms/head/Gray%2520Bun.svg": "312c2553789f0b953448cdde0cdbc4a8",
"assets/packages/open_peeps/assets/atoms/head/Long%2520Bangs.svg": "b2658eebb2e5b7136e539324dc9d2209",
"assets/packages/open_peeps/assets/atoms/facial-hair/Goatee%25201.svg": "5a6904cba137e8505ec4bfe0f742b2fc",
"assets/packages/open_peeps/assets/atoms/facial-hair/Goatee%25202.svg": "27b3aab73cc43e37767b6afd66d89acd",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25202.svg": "fc5236697b8c36675aac69ade8edcd54",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25203.svg": "4a01fda434d1efd3a04981127952765b",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25201.svg": "bbb339167258b55ee90e4e0b7f11f12e",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25204.svg": "3c49969e8b8f8d2b6eaaae7cf0ea1008",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25205.svg": "b8ce0127fb5c6333fd3c168b75bc8729",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25207.svg": "d29b6a46b25726ea1ebcf752d91722cc",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25206.svg": "4dc8aba5f90ba3f0bf4f77f46556ce46",
"assets/packages/open_peeps/assets/atoms/facial-hair/Full.svg": "075041ac27a354412f3547e8dd3c4053",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25208.svg": "22ed74339db11bb10c2bd241b294c6cc",
"assets/packages/open_peeps/assets/atoms/facial-hair/Moustache%25209.svg": "fe2f6da671ab41d2fa35df0a9915a691",
"assets/packages/open_peeps/assets/atoms/facial-hair/*%2520None.svg": "0ef88d2c22cb851603d8c52902a6ea89",
"assets/packages/open_peeps/assets/atoms/facial-hair/Full%25204.svg": "15480a33279b883783963cc265793ae2",
"assets/packages/open_peeps/assets/atoms/facial-hair/Full%25203.svg": "b89a16251a0705dab3af7bea2cb1bd1f",
"assets/packages/open_peeps/assets/atoms/facial-hair/Chin.svg": "ebbb2a48124fd82c9812cfbcf09436f4",
"assets/packages/open_peeps/assets/atoms/facial-hair/Full%25202.svg": "20e7be77b7df7582200730879794e2e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ba8de2fa79ed9fa27e79da4852332555",
"assets/fonts/MaterialIcons-Regular.otf": "8e9ab8ee28c6606c7931fab764fd7624",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/dogs.png": "01dbefac9b5486ae79f04cccc4d6807c",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/fishs.png": "2ee3a46fc5db178de971418661eee2e5",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/profile.png": "9daa222eb791c158f43021a8c53952ba",
"assets/assets/images/sola.png": "643618f6a0c830744856fe480be749a6",
"assets/assets/images/parrots.png": "af63283cb3c1cc72402931ebd47d41db",
"assets/assets/images/Paw_Print.svg": "ed5fe8fa38650fb69ad0740f0b65fe42",
"assets/assets/animation/loading.zip": "4946293f035b91dcf20e421c473130c1",
"assets/assets/animation/no-data.zip": "664fb820a5b0a64aa6d21d773dfcb4f0",
"assets/assets/icon/icon.jpg": "0743f6505927177b4001fddde80c60d2",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
