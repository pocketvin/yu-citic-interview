'use strict';
const CACHE='yu-citic-interview-b848ba1c264c';
const paths=["./","index.html","app-I2SECJDN.js","app-PZLZISZC.css","assets/advisorops.webp","assets/signalharness.webp","assets/kitchen.webp","assets/site-qr.png","assets/mark.svg"].map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(paths)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('yu-citic-interview-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;const u=new URL(e.request.url);u.search='';u.hash='';if(!paths.includes(u.href))return;e.respondWith(fetch(e.request).then(r=>{if(!r.ok)throw Error('unavailable');return r;}).catch(async()=>{const c=await caches.open(CACHE);return await c.match(u.href)||Response.error();}));});
