if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.2b6a57f9.css",revision:null},{url:"assets/_...all_.d97bd2a4.js",revision:null},{url:"assets/404.6cbb5980.css",revision:null},{url:"assets/404.a6b2dbf2.js",revision:null},{url:"assets/app.0abeb68a.js",revision:null},{url:"assets/app.f2d65a8e.css",revision:null},{url:"assets/Faq.56d0e849.js",revision:null},{url:"assets/Faq.5975d731.css",revision:null},{url:"assets/index.4652eccb.js",revision:null},{url:"assets/index.8725283b.js",revision:null},{url:"assets/index.a20dfb36.css",revision:null},{url:"assets/index.bc12c923.css",revision:null},{url:"assets/index.c506e812.css",revision:null},{url:"assets/index.ff7e9b18.js",revision:null},{url:"assets/ProductSpec.c0123ba0.css",revision:null},{url:"assets/ProductSpec.cda05ece.js",revision:null},{url:"assets/virtual_pwa-register.0e447193.js",revision:null},{url:"back-office.html",revision:"4a0244f9d3fd51e59a8fe717a4677dcd"},{url:"engine.html",revision:"834ccc52ebb9f722db1fcea65449bafe"},{url:"index.html",revision:"61aad1dd090a5f8291480181a859f72e"},{url:"support.html",revision:"db873715c873cca99733c2aa5b9246a0"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
