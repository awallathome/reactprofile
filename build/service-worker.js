"use strict";var precacheConfig=[["/index.html","b3ade9efc9ef9ea59c77ea462fdbe075"],["/static/css/main.f824c2cd.css","f737185a6e0432f4bc3a7f531bff3d34"],["/static/js/main.70f82ac9.js","8c66d7111d5da801e3696b0aa26c3d41"],["/static/media/crosslines@2X.19a0025f.png","19a0025f738f4c3f595cae8efd5943d0"],["/static/media/lablocator1.4ef0b4c6.jpg","4ef0b4c69e00a31a02ff4fad77a11c42"],["/static/media/lablocator2.684afeaa.jpg","684afeaad0b7d1182c2deb4e53b7e00d"],["/static/media/lablocator3.a8678523.jpg","a8678523fe66764fa595e051c2978ea2"],["/static/media/lablocator4.b2178162.jpg","b2178162254fb9efe627703b7e047cb5"],["/static/media/onthefly1.affa2eda.png","affa2eda0dcad9fdbdeecc6080b4887a"],["/static/media/onthefly2.d5e426b1.png","d5e426b149c7b20bdb27a307cf61f0a0"],["/static/media/onthefly3.3167bda0.png","3167bda03c7d06eeb05a19cb5a3ab59c"],["/static/media/onthefly4.85c802c8.png","85c802c8d3d70743682ff95a85a874f1"],["/static/media/onthefly5.2d1a50fe.png","2d1a50fe2a7d29508e8ee86c708130bf"],["/static/media/signature.3d408a6d.jpg","3d408a6db5a21198095a1f353f3122e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});