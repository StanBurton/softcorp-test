!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(t){const e=document.querySelector(".news-block"),n=document.createElement("h1");if(n.textContent=t.title,e.appendChild(n),t.img&&t.img.length>0){const n=document.createElement("div");n.setAttribute("class","img-block"),[t.img].forEach(t=>{const e=document.createElement("img");e.setAttribute("src",t),e.setAttribute("alt","picture"),n.appendChild(e)}),e.appendChild(n)}const r=document.createElement("p");r.setAttribute("class","lead news-description"),r.textContent=t.description,e.appendChild(r)};var o=function(t){const e=document.querySelector(".parse-app"),n=document.createElement("ul");n.setAttribute("class","list-group"),e.appendChild(n),t.forEach(t=>{const e=document.createElement("li");e.setAttribute("class","list-group-item");const r=document.createElement("h3");r.setAttribute("class","news-title"),r.textContent=t.title,e.appendChild(r);const o=document.createElement("p");o.setAttribute("class","lead news-description"),o.textContent=t.description.length>200?t.description.substring(0,200)+"...":t.description,e.appendChild(o);const i=document.createElement("div");i.setAttribute("class","btn-block");const c=document.createElement("a");c.setAttribute("role","button"),c.setAttribute("href",`./news/${t.id}`),c.setAttribute("class","btn btn-outline-success float-right"),c.textContent="Подробнее",i.appendChild(c),e.appendChild(i),n.appendChild(e)})};document.querySelector(".parse-app")?o(window.news):r(window.news)}]);