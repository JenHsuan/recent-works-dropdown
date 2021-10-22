/*! For license information please see remoteEntry.js.LICENSE.txt */
var RecentWorksDropDown;!function(){"use strict";var e,t,r,n,o,u,i,c,a,f,l={418:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var i,c,a=o(e),f=1;f<arguments.length;f++){for(var l in i=Object(arguments[f]))r.call(i,l)&&(a[l]=i[l]);if(t){c=t(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(a[c[s]]=i[c[s]])}}return a}},408:function(e,t,r){var n=r(418),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,a=60112;t.Suspense=60113;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),u=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),i=s("react.provider"),c=s("react.context"),a=s("react.forward_ref"),t.Suspense=s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var g=b.prototype=new m;g.constructor=b,n(g,v.prototype),g.isPureReactComponent=!0;var w={current:null},_=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,u={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,n)&&!S.hasOwnProperty(n)&&(u[n]=t[n]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];u.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===u[n]&&(u[n]=a[n]);return{$$typeof:o,type:e,key:i,ref:c,props:u,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case u:a=!0}}if(a)return i=i(a=e),e=""===n?"."+E(a,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+E(c=e[f],f);a+=C(c,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(c=e.next()).done;)a+=C(c=c.value,t,r,l=n+E(c,f++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function $(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function x(){var e=R.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error(d(143));return e}},t.Component=v,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var u=n({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)_.call(t,l)&&!S.hasOwnProperty(l)&&(u[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)u.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:o,type:e.type,key:i,ref:c,props:u,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.2"},294:function(e,t,r){e.exports=r(408)},526:function(e,t,r){var n={"./RecentWorksDropDown":function(){return r.e(777).then((function(){return function(){return r(777)}}))}},o=function(e,t){return r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t},u=function(e,t){if(r.S){var n=r.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[o]=e,r.I(o,t)}};r.d(t,{get:function(){return o},init:function(){return u}})}},s={};function p(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,exports:{}};return l[e](r,r.exports,p),r.exports}p.m=l,p.c=s,p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,{a:t}),t},p.d=function(e,t){for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce((function(t,r){return p.f[r](e,t),t}),[]))},p.u=function(e){return e+".js"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="recent-works-dropdown:",p.l=function(r,n,o,u){if(e[r])e[r].push(n);else{var i,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var s=function(t,n){i.onerror=i.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){p.S={};var e={},t={};p.I=function(r,n){n||(n=[]);var o,u,i,c=t[r];if(c||(c=t[r]={}),!(n.indexOf(c)>=0)){if(n.push(c),e[r])return e[r];p.o(p.S,r)||(p.S[r]={});var a=p.S[r],f="recent-works-dropdown",l=[];return"default"===r&&(o="17.0.2",u=a.react=a.react||{},(!(i=u[o])||!i.loaded&&(0!=!i.eager||f>i.from))&&(u[o]={get:function(){return function(){return p(294)}},from:f,eager:!0})),e[r]=l.length?Promise.all(l).then((function(){return e[r]=1})):1}}}(),function(){var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e}(),r=function(e){var t=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=function(e,t){e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],u=(typeof o)[0];if(n>=t.length)return"u"==u;var i=t[n],c=(typeof i)[0];if(u!=c)return"o"==u&&"n"==c||"s"==c||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;n++}},o=function(e,t){var r=e[t];return(t=Object.keys(r).reduce((function(e,t){return!e||n(e,t)?t:e}),0))&&r[t]},u=function(e){return e.loaded=1,e.get()},i=function(e){return function(t,r,n,o){var u=p.I(t);return u&&u.then?u.then(e.bind(e,t,p.S[t],r,n,o)):e(0,p.S[t],r,n)}}((function(e,t,r,n){return t&&p.o(t,r)?u(o(t,r)):n()})),c={},a={27:function(){return i("default","react",(function(){return function(){return p(294)}}))}},f={777:[27]},p.f.consumes=function(e,t){p.o(f,e)&&f[e].forEach((function(e){if(p.o(c,e))return t.push(c[e]);var r=function(t){c[e]=0,p.m[e]=function(r){delete p.c[e],r.exports=t()}},n=function(t){delete c[e],p.m[e]=function(r){throw delete p.c[e],t}};try{var o=a[e]();o.then?t.push(c[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}))},function(){var e={575:0};p.f.j=function(t,r){var n=p.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var u=p.p+p.u(t),i=new Error;p.l(u,(function(r){if(p.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,n[1](i)}}),"chunk-"+t,t)}};var t=function(t,r){var n,o,u=r[0],i=r[1],c=r[2],a=0;if(u.some((function(t){return 0!==e[t]}))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);c&&c(p)}for(t&&t(r);a<u.length;a++)o=u[a],p.o(e,o)&&e[o]&&e[o][0](),e[u[a]]=0},r=self.webpackChunkrecent_works_dropdown=self.webpackChunkrecent_works_dropdown||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var d=p(526);RecentWorksDropDown=d}();