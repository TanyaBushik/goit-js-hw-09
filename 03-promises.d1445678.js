var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var r=n("iQIUW");const i=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function a(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector('button[type="submit"]').addEventListener("submit",(function(e){e.preventDefault();let o=Number(u.value),t=Number(l.value),n=Number(s.value);for(let e=1;e<=n;e+=1)o+=t,a(e,o).then((({position:e,delay:o})=>{console.log(success.message),r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(error.message),r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),i.reset()}));
//# sourceMappingURL=03-promises.d1445678.js.map
