if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),c={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>c[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.2b6a57f9.css",revision:null},{url:"assets/_...all_.86c0f101.js",revision:null},{url:"assets/404.3d588d24.js",revision:null},{url:"assets/404.6cbb5980.css",revision:null},{url:"assets/app.1df06af7.js",revision:null},{url:"assets/app.62e9cd05.css",revision:null},{url:"assets/Faq.737bf5a9.css",revision:null},{url:"assets/Faq.f4cf429c.js",revision:null},{url:"assets/index.084ef7d3.css",revision:null},{url:"assets/index.6ae81954.css",revision:null},{url:"assets/index.a1d4cfdc.js",revision:null},{url:"assets/index.c5b66e49.js",revision:null},{url:"assets/index.de23cca7.css",revision:null},{url:"assets/index.e166d8bb.js",revision:null},{url:"assets/ProductSpec.9d681c31.js",revision:null},{url:"assets/ProductSpec.c0123ba0.css",revision:null},{url:"assets/virtual_pwa-register.0e447193.js",revision:null},{url:"back-office.html",revision:"da84eeb66af6dfb5ed306c90821782e4"},{url:"engine.html",revision:"367cf7257ddc673d75ce99ec9d8a6511"},{url:"index.html",revision:"c6773e73925595005052611265d9c855"},{url:"support.html",revision:"a54786a91010f8b5a220f5ae922c8ca7"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
