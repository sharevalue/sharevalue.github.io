if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"9898c55df92bd4de9e78e27be1495d05"},{url:"assets/_...all_.579dc006.js",revision:null},{url:"assets/_...all_.5e6c6c65.css",revision:null},{url:"assets/404.18429afe.js",revision:null},{url:"assets/404.8ca2f87d.css",revision:null},{url:"assets/404.dc9633ec.js",revision:null},{url:"assets/404.f02705b8.css",revision:null},{url:"assets/app.1c01ad93.js",revision:null},{url:"assets/app.7176e3b3.css",revision:null},{url:"assets/Faq.565631e5.js",revision:null},{url:"assets/Faq.809c5712.css",revision:null},{url:"assets/index.2ad927af.css",revision:null},{url:"assets/index.45b25d4b.js",revision:null},{url:"assets/index.8a27ce9c.js",revision:null},{url:"assets/index.a8791106.css",revision:null},{url:"assets/index.be284654.js",revision:null},{url:"assets/index.edc765f3.css",revision:null},{url:"assets/ProductSpec.5f589c06.css",revision:null},{url:"assets/ProductSpec.8c269ba3.js",revision:null},{url:"assets/route-block.67f66939.js",revision:null},{url:"assets/virtual_pwa-register.0e447193.js",revision:null},{url:"back-office.html",revision:"d55f9103e1712f768e60151fa8bbd948"},{url:"engine.html",revision:"8cefe950d5751bc09ccb78dac710b6a0"},{url:"index.html",revision:"e8e02ccb2c01e3ba14d7f3d81af3976a"},{url:"support.html",revision:"231d59a0b9e3b144695e003ae34e6359"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
