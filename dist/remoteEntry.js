var RecentWorksDropDown;!function(){"use strict";var n,e,r,t,o,u,i,f,c,a,l,s,d,p,h={526:function(n,e,r){var t={"./RecentWorksDropDown":function(){return r.e(777).then((function(){return function(){return r(777)}}))}},o=function(n,e){return r.R=e,e=r.o(t,n)?t[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),r.R=void 0,e},u=function(n,e){if(r.S){var t=r.S.default,o="default";if(t&&t!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[o]=n,r.I(o,e)}};r.d(e,{get:function(){return o},init:function(){return u}})}},v={};function g(n){var e=v[n];if(void 0!==e)return e.exports;var r=v[n]={id:n,exports:{}};return h[n](r,r.exports,g),r.exports}g.m=h,g.c=v,g.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return g.d(e,{a:e}),e},g.d=function(n,e){for(var r in e)g.o(e,r)&&!g.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},g.f={},g.e=function(n){return Promise.all(Object.keys(g.f).reduce((function(e,r){return g.f[r](n,e),e}),[]))},g.u=function(n){return n+".index.js"},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},n={},e="recent-works-dropdown:",g.l=function(r,t,o,u){if(n[r])n[r].push(t);else{var i,f;if(void 0!==o)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+o){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",e+o),i.src=r),n[r]=[t];var s=function(e,t){i.onerror=i.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(n){return n(t)})),e)return e(t)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},g.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){g.S={};var n={},e={};g.I=function(r,t){t||(t=[]);var o,u,i,f,c=e[r];if(c||(c=e[r]={}),!(t.indexOf(c)>=0)){if(t.push(c),n[r])return n[r];g.o(g.S,r)||(g.S[r]={});var a=g.S[r],l="recent-works-dropdown",s=[];return"default"===r&&(o="17.0.2",i=a.react=a.react||{},(!(f=i[o])||!f.loaded&&(1!=!f.eager?u:l>f.from))&&(i[o]={get:function(){return g.e(976).then((function(){return function(){return g(294)}}))},from:l,eager:!1})),n[r]=s.length?Promise.all(s).then((function(){return n[r]=1})):1}}}(),function(){var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n}(),r=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),t=r[1]?e(r[1]):[];return r[2]&&(t.length++,t.push.apply(t,e(r[2]))),r[3]&&(t.push([]),t.push.apply(t,e(r[3]))),t},t=function(n,e){n=r(n),e=r(e);for(var t=0;;){if(t>=n.length)return t<e.length&&"u"!=(typeof e[t])[0];var o=n[t],u=(typeof o)[0];if(t>=e.length)return"u"==u;var i=e[t],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;t++}},o=function(n){var e=n[0],r="";if(1===n.length)return"*";if(e+.5){r+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var t=1,u=1;u<n.length;u++)t--,r+="u"==(typeof(f=n[u]))[0]?"-":(t>0?".":"")+(t=2,f);return r}var i=[];for(u=1;u<n.length;u++){var f=n[u];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():o(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(n,e){if(0 in n){e=r(e);var t=n[0],o=t<0;o&&(t=-t-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<n.length?(typeof n[f])[0]:"";if(i>=e.length||"o"==(l=(typeof(a=e[i]))[0]))return!c||("u"==s?f>t&&!o:""==s!=o);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=t){if(a!=n[f])return!1}else{if(o?a>n[f]:a<n[f])return!1;a!=n[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(o||f<=t)return!1;c=!1,f--}else{if(f<=t||l<s!=o)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<n.length;i++){var h=n[i];d.push(1==h?p()|p():2==h?p()&p():h?u(h,e):!p())}return!!p()},i=function(n,e){var r=n[e];return Object.keys(r).reduce((function(n,e){return!n||!r[n].loaded&&t(n,e)?e:n}),0)},f=function(n,e,r){return"Unsatisfied version "+e+" of shared singleton module "+n+" (required "+o(r)+")"},c=function(n,e,r,t){var o=i(n,r);return u(t,o)||"undefined"!=typeof console&&console.warn&&console.warn(f(r,o,t)),a(n[r][o])},a=function(n){return n.loaded=1,n.get()},l=function(n){return function(e,r,t,o){var u=g.I(e);return u&&u.then?u.then(n.bind(n,e,g.S[e],r,t,o)):n(0,g.S[e],r,t,o)}}((function(n,e,r,t,o){return e&&g.o(e,r)?c(e,0,r,t):o()})),s={},d={950:function(){return l("default","react",[1,17,0,2],(function(){return g.e(294).then((function(){return function(){return g(294)}}))}))}},p={777:[950]},g.f.consumes=function(n,e){g.o(p,n)&&p[n].forEach((function(n){if(g.o(s,n))return e.push(s[n]);var r=function(e){s[n]=0,g.m[n]=function(r){delete g.c[n],r.exports=e()}},t=function(e){delete s[n],g.m[n]=function(r){throw delete g.c[n],e}};try{var o=d[n]();o.then?e.push(s[n]=o.then(r).catch(t)):r(o)}catch(n){t(n)}}))},function(){var n={575:0};g.f.j=function(e,r){var t=g.o(n,e)?n[e]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise((function(r,o){t=n[e]=[r,o]}));r.push(t[2]=o);var u=g.p+g.u(e),i=new Error;g.l(u,(function(r){if(g.o(n,e)&&(0!==(t=n[e])&&(n[e]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,t[1](i)}}),"chunk-"+e,e)}};var e=function(e,r){var t,o,u=r[0],i=r[1],f=r[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(t in i)g.o(i,t)&&(g.m[t]=i[t]);f&&f(g)}for(e&&e(r);c<u.length;c++)o=u[c],g.o(n,o)&&n[o]&&n[o][0](),n[u[c]]=0},r=self.webpackChunkrecent_works_dropdown=self.webpackChunkrecent_works_dropdown||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var m=g(526);RecentWorksDropDown=m}();