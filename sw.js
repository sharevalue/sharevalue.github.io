if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"e937e6d195742a37eed98eb021e3649d"},{url:"assets/_...all_.5e6c6c65.css",revision:null},{url:"assets/_...all_.b3b28b5e.js",revision:null},{url:"assets/404.39724f37.js",revision:null},{url:"assets/404.772315aa.js",revision:null},{url:"assets/404.8ca2f87d.css",revision:null},{url:"assets/404.f02705b8.css",revision:null},{url:"assets/app.6ed6c981.js",revision:null},{url:"assets/app.d353373e.css",revision:null},{url:"assets/Faq.809c5712.css",revision:null},{url:"assets/Faq.a6162095.js",revision:null},{url:"assets/index.2ad927af.css",revision:null},{url:"assets/index.a6be1436.js",revision:null},{url:"assets/index.a8791106.css",revision:null},{url:"assets/index.d7d0720b.js",revision:null},{url:"assets/index.edc765f3.css",revision:null},{url:"assets/index.fd2c2388.js",revision:null},{url:"assets/ProductSpec.3928c8c4.js",revision:null},{url:"assets/ProductSpec.5f589c06.css",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.9b01f6a2.js",revision:null},{url:"back-office.html",revision:"5c2bd2afcd5a903cb67aae1f23101e9a"},{url:"engine.html",revision:"751789bcc5d21b935a4842e0530be30e"},{url:"index.html",revision:"6ba95bb28a2283db819fee80ac00f197"},{url:"support.html",revision:"679ad3e360a161d7036b6b30673d7ded"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
