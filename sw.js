'use strict';
const CACHE='yu-citic-interview-09425a79cecc';
const paths=["./","index.html","app-ISLIJGYK.js","app-I5XFOG2Y.css"].map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(paths)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('yu-citic-interview-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;const u=new URL(e.request.url);u.search='';u.hash='';if(!paths.includes(u.href))return;e.respondWith(fetch(e.request).then(r=>{if(!r.ok)throw Error('unavailable');return r;}).catch(async()=>{const c=await caches.open(CACHE);return await c.match(u.href)||Response.error();}));});
