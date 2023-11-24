(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function yl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}},si={},Ac={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),jf=Symbol.for("react.portal"),Df=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),Yf=Symbol.for("react.lazy"),Ws=Symbol.iterator;function Xf(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ic=Object.assign,Oc={};function er(e,n,t){this.props=e,this.context=n,this.refs=Oc,this.updater=t||Lc}er.prototype.isReactComponent={};er.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nc(){}Nc.prototype=er.prototype;function wl(e,n,t){this.props=e,this.context=n,this.refs=Oc,this.updater=t||Lc}var $l=wl.prototype=new Nc;$l.constructor=wl;Ic($l,er.prototype);$l.isPureReactComponent=!0;var As=Array.isArray,Hc=Object.prototype.hasOwnProperty,vl={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Hc.call(n,r)&&!Mc.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Yr,type:e,key:i,ref:a,props:o,_owner:vl.current}}function Qf(e,n){return{$$typeof:Yr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Gf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ls=/\/+/g;function Ci(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Gf(""+e.key):n.toString(36)}function bo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yr:case jf:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ci(a,0):r,As(o)?(t="",e!=null&&(t=e.replace(Ls,"$&/")+"/"),bo(o,n,t,"",function(u){return u})):o!=null&&(bl(o)&&(o=Qf(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ls,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",As(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ci(i,l);a+=bo(i,n,t,s,o)}else if(s=Xf(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ci(i,l++),a+=bo(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(e,n,t){if(e==null)return e;var r=[],o=0;return bo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Kf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},xo={transition:null},Jf={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:xo,ReactCurrentOwner:vl};F.Children={map:eo,forEach:function(e,n,t){eo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return eo(e,function(){n++}),n},toArray:function(e){return eo(e,function(n){return n})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=er;F.Fragment=Df;F.Profiler=zf;F.PureComponent=wl;F.StrictMode=Rf;F.Suspense=Vf;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ic({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=vl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Hc.call(n,s)&&!Mc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Yr,type:e.type,key:o,ref:i,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:Bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ff,_context:e},e.Consumer=e};F.createElement=jc;F.createFactory=function(e){var n=jc.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Uf,render:e}};F.isValidElement=bl;F.lazy=function(e){return{$$typeof:Yf,_payload:{_status:-1,_result:e},_init:Kf}};F.memo=function(e,n){return{$$typeof:qf,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=xo.transition;xo.transition={};try{e()}finally{xo.transition=n}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,n){return We.current.useCallback(e,n)};F.useContext=function(e){return We.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return We.current.useDeferredValue(e)};F.useEffect=function(e,n){return We.current.useEffect(e,n)};F.useId=function(){return We.current.useId()};F.useImperativeHandle=function(e,n,t){return We.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return We.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return We.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return We.current.useMemo(e,n)};F.useReducer=function(e,n,t){return We.current.useReducer(e,n,t)};F.useRef=function(e){return We.current.useRef(e)};F.useState=function(e){return We.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return We.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return We.current.useTransition()};F.version="18.2.0";Ac.exports=F;var Pe=Ac.exports;const Zf=yl(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=Pe,nd=Symbol.for("react.element"),td=Symbol.for("react.fragment"),rd=Object.prototype.hasOwnProperty,od=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,id={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)rd.call(n,r)&&!id.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:nd,type:e,key:i,ref:a,props:o,_owner:od.current}}si.Fragment=td;si.jsx=Dc;si.jsxs=Dc;Wc.exports=si;var C=Wc.exports,pa={},Rc={exports:{}},Ye={},zc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,M){var g=A.length;A.push(M);e:for(;0<g;){var V=g-1>>>1,G=A[V];if(0<o(G,M))A[V]=M,A[g]=G,g=V;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],g=A.pop();if(g!==M){A[0]=g;e:for(var V=0,G=A.length,w=G>>>1;V<w;){var me=2*(V+1)-1,on=A[me],ne=me+1,dn=A[ne];if(0>o(on,g))ne<G&&0>o(dn,on)?(A[V]=dn,A[ne]=g,V=ne):(A[V]=on,A[me]=g,V=me);else if(ne<G&&0>o(dn,g))A[V]=dn,A[ne]=g,V=ne;else break e}}return M}function o(A,M){var g=A.sortIndex-M.sortIndex;return g!==0?g:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,h=null,f=3,p=!1,$=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var M=t(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,n(s,M);else break;M=t(u)}}function x(A){if(v=!1,y(A),!$)if(t(s)!==null)$=!0,pe(k);else{var M=t(u);M!==null&&ce(x,M.startTime-A)}}function k(A,M){$=!1,v&&(v=!1,d(L),L=-1),p=!0;var g=f;try{for(y(M),h=t(s);h!==null&&(!(h.expirationTime>M)||A&&!N());){var V=h.callback;if(typeof V=="function"){h.callback=null,f=h.priorityLevel;var G=V(h.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?h.callback=G:h===t(s)&&r(s),y(M)}else r(s);h=t(s)}if(h!==null)var w=!0;else{var me=t(u);me!==null&&ce(x,me.startTime-M),w=!1}return w}finally{h=null,f=g,p=!1}}var b=!1,E=null,L=-1,j=5,O=-1;function N(){return!(e.unstable_now()-O<j)}function H(){if(E!==null){var A=e.unstable_now();O=A;var M=!0;try{M=E(!0,A)}finally{M?X():(b=!1,E=null)}}else b=!1}var X;if(typeof m=="function")X=function(){m(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,B=ie.port2;ie.port1.onmessage=H,X=function(){B.postMessage(null)}}else X=function(){T(H,0)};function pe(A){E=A,b||(b=!0,X())}function ce(A,M){L=T(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){$||p||($=!0,pe(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var g=f;f=M;try{return A()}finally{f=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var g=f;f=A;try{return M()}finally{f=g}},e.unstable_scheduleCallback=function(A,M,g){var V=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?V+g:V):g=V,A){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=g+G,A={id:c++,callback:M,priorityLevel:A,startTime:g,expirationTime:G,sortIndex:-1},g>V?(A.sortIndex=g,n(u,A),t(s)===null&&A===t(u)&&(v?(d(L),L=-1):v=!0,ce(x,g-V))):(A.sortIndex=G,n(s,A),$||p||($=!0,pe(k))),A},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(A){var M=f;return function(){var g=f;f=M;try{return A.apply(this,arguments)}finally{f=g}}}})(Fc);zc.exports=Fc;var ad=zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=Pe,qe=ad;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,Wr={};function $t(e,n){Yt(e,n),Yt(e+"Capture",n)}function Yt(e,n){for(Wr[e]=n,e=0;e<n.length;e++)Uc.add(n[e])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,ld=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Is={},Os={};function sd(e){return fa.call(Os,e)?!0:fa.call(Is,e)?!1:ld.test(e)?Os[e]=!0:(Is[e]=!0,!1)}function ud(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,n,t,r){if(n===null||typeof n>"u"||ud(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ae(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];xe[n]=new Ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var xl=/[\-:]([a-z])/g;function _l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xl,_l);xe[n]=new Ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xl,_l);xe[n]=new Ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xl,_l);xe[n]=new Ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function kl(e,n,t,r){var o=xe.hasOwnProperty(n)?xe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(cd(n,t,o,r)&&(t=null),r||o===null?sd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var On=Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Et=Symbol.for("react.portal"),Ct=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),ga=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),Yc=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ti;function mr(e){if(Ti===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ti=n&&n[1]||""}return`
`+Ti+e}var Wi=!1;function Ai(e,n){if(!e||Wi)return"";Wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?mr(e):""}function hd(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ct:return"Fragment";case Et:return"Portal";case da:return"Profiler";case Sl:return"StrictMode";case ma:return"Suspense";case ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Vc:return(e._context.displayName||"Context")+".Provider";case Pl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return n=e.displayName||null,n!==null?n:ya(e.type)||"Memo";case jn:n=e._payload,e=e._init;try{return ya(e(n))}catch{}}return null}function pd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(n);case 8:return n===Sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fd(e){var n=Xc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function to(e){e._valueTracker||(e._valueTracker=fd(e))}function Qc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,n){var t=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Gc(e,n){n=n.checked,n!=null&&kl(e,"checked",n,!1)}function $a(e,n){Gc(e,n);var t=Jn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?va(e,n.type,t):n.hasOwnProperty("defaultValue")&&va(e,n.type,Jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ms(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function va(e,n,t){(n!=="number"||No(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Jn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ba(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(gr(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Jn(t)}}function Kc(e,n){var t=Jn(n.value),r=Jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,Zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){dd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$r[n]=$r[e]})});function eh(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$r.hasOwnProperty(e)&&$r[e]?(""+n).trim():n+"px"}function nh(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=eh(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var md=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(e,n){if(n){if(md[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function ka(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Rt=null,zt=null;function Rs(e){if(e=Gr(e)){if(typeof Pa!="function")throw Error(S(280));var n=e.stateNode;n&&(n=fi(n),Pa(e.stateNode,e.type,n))}}function th(e){Rt?zt?zt.push(e):zt=[e]:Rt=e}function rh(){if(Rt){var e=Rt,n=zt;if(zt=Rt=null,Rs(e),n)for(e=0;e<n.length;e++)Rs(n[e])}}function oh(e,n){return e(n)}function ih(){}var Li=!1;function ah(e,n,t){if(Li)return e(n,t);Li=!0;try{return oh(e,n,t)}finally{Li=!1,(Rt!==null||zt!==null)&&(ih(),rh())}}function Lr(e,n){var t=e.stateNode;if(t===null)return null;var r=fi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Ea=!1;if(Wn)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ea=!1}function gd(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var vr=!1,Ho=null,Mo=!1,Ca=null,yd={onError:function(e){vr=!0,Ho=e}};function wd(e,n,t,r,o,i,a,l,s){vr=!1,Ho=null,gd.apply(yd,arguments)}function $d(e,n,t,r,o,i,a,l,s){if(wd.apply(this,arguments),vr){if(vr){var u=Ho;vr=!1,Ho=null}else throw Error(S(198));Mo||(Mo=!0,Ca=u)}}function vt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function lh(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function zs(e){if(vt(e)!==e)throw Error(S(188))}function vd(e){var n=e.alternate;if(!n){if(n=vt(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return zs(o),e;if(i===r)return zs(o),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function sh(e){return e=vd(e),e!==null?uh(e):null}function uh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uh(e);if(n!==null)return n;e=e.sibling}return null}var ch=qe.unstable_scheduleCallback,Fs=qe.unstable_cancelCallback,bd=qe.unstable_shouldYield,xd=qe.unstable_requestPaint,he=qe.unstable_now,_d=qe.unstable_getCurrentPriorityLevel,Tl=qe.unstable_ImmediatePriority,hh=qe.unstable_UserBlockingPriority,jo=qe.unstable_NormalPriority,kd=qe.unstable_LowPriority,ph=qe.unstable_IdlePriority,ui=null,vn=null;function Sd(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:Cd,Pd=Math.log,Ed=Math.LN2;function Cd(e){return e>>>=0,e===0?32:31-(Pd(e)/Ed|0)|0}var oo=64,io=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=yr(l):(i&=a,i!==0&&(r=yr(i)))}else a=t&~o,a!==0?r=yr(a):i!==0&&(r=yr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-hn(n),o=1<<t,r|=e[t],n&=~o;return r}function Td(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-hn(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=Td(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fh(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Ii(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=t}function Ad(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-hn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Wl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-hn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var Q=0;function dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mh,Al,gh,yh,wh,Wa=!1,ao=[],Un=null,Vn=null,qn=null,Ir=new Map,Or=new Map,Rn=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,n){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(n.pointerId)}}function sr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Gr(n),n!==null&&Al(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Id(e,n,t,r,o){switch(n){case"focusin":return Un=sr(Un,e,n,t,r,o),!0;case"dragenter":return Vn=sr(Vn,e,n,t,r,o),!0;case"mouseover":return qn=sr(qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Ir.set(i,sr(Ir.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,sr(Or.get(i)||null,e,n,t,r,o)),!0}return!1}function $h(e){var n=ut(e.target);if(n!==null){var t=vt(n);if(t!==null){if(n=t.tag,n===13){if(n=lh(t),n!==null){e.blockedOn=n,wh(e.priority,function(){gh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Aa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Sa=r,t.target.dispatchEvent(r),Sa=null}else return n=Gr(t),n!==null&&Al(n),e.blockedOn=t,!1;n.shift()}return!0}function Us(e,n,t){_o(e)&&t.delete(n)}function Od(){Wa=!1,Un!==null&&_o(Un)&&(Un=null),Vn!==null&&_o(Vn)&&(Vn=null),qn!==null&&_o(qn)&&(qn=null),Ir.forEach(Us),Or.forEach(Us)}function ur(e,n){e.blockedOn===n&&(e.blockedOn=null,Wa||(Wa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Od)))}function Nr(e){function n(o){return ur(o,e)}if(0<ao.length){ur(ao[0],e);for(var t=1;t<ao.length;t++){var r=ao[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&ur(Un,e),Vn!==null&&ur(Vn,e),qn!==null&&ur(qn,e),Ir.forEach(n),Or.forEach(n),t=0;t<Rn.length;t++)r=Rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(t=Rn[0],t.blockedOn===null);)$h(t),t.blockedOn===null&&Rn.shift()}var Ft=On.ReactCurrentBatchConfig,Ro=!0;function Nd(e,n,t,r){var o=Q,i=Ft.transition;Ft.transition=null;try{Q=1,Ll(e,n,t,r)}finally{Q=o,Ft.transition=i}}function Hd(e,n,t,r){var o=Q,i=Ft.transition;Ft.transition=null;try{Q=4,Ll(e,n,t,r)}finally{Q=o,Ft.transition=i}}function Ll(e,n,t,r){if(Ro){var o=Aa(e,n,t,r);if(o===null)Bi(e,n,r,zo,t),Bs(e,r);else if(Id(o,e,n,t,r))r.stopPropagation();else if(Bs(e,r),n&4&&-1<Ld.indexOf(e)){for(;o!==null;){var i=Gr(o);if(i!==null&&mh(i),i=Aa(e,n,t,r),i===null&&Bi(e,n,r,zo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Bi(e,n,r,null,t)}}var zo=null;function Aa(e,n,t,r){if(zo=null,e=Cl(r),e=ut(e),e!==null)if(n=vt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=lh(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zo=e,null}function vh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case Tl:return 1;case hh:return 4;case jo:case kd:return 16;case ph:return 536870912;default:return 16}default:return 16}}var Fn=null,Il=null,ko=null;function bh(){if(ko)return ko;var e,n=Il,t=n.length,r,o="value"in Fn?Fn.value:Fn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return ko=o.slice(e,1<r?1-r:void 0)}function So(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function Vs(){return!1}function Xe(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?lo:Vs,this.isPropagationStopped=Vs,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Xe(nr),Qr=se({},nr,{view:0,detail:0}),Md=Xe(Qr),Oi,Ni,cr,ci=se({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Oi=e.screenX-cr.screenX,Ni=e.screenY-cr.screenY):Ni=Oi=0,cr=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),qs=Xe(ci),jd=se({},ci,{dataTransfer:0}),Dd=Xe(jd),Rd=se({},Qr,{relatedTarget:0}),Hi=Xe(Rd),zd=se({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Xe(zd),Bd=se({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=Xe(Bd),Vd=se({},nr,{data:0}),Ys=Xe(Vd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xd[e])?!!n[e]:!1}function Nl(){return Qd}var Gd=se({},Qr,{key:function(e){if(e.key){var n=qd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kd=Xe(Gd),Jd=se({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Xe(Jd),Zd=se({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),em=Xe(Zd),nm=se({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=Xe(nm),rm=se({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=Xe(rm),im=[9,13,27,32],Hl=Wn&&"CompositionEvent"in window,br=null;Wn&&"documentMode"in document&&(br=document.documentMode);var am=Wn&&"TextEvent"in window&&!br,xh=Wn&&(!Hl||br&&8<br&&11>=br),Qs=String.fromCharCode(32),Gs=!1;function _h(e,n){switch(e){case"keyup":return im.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function lm(e,n){switch(e){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Gs=!0,Qs);case"textInput":return e=n.data,e===Qs&&Gs?null:e;default:return null}}function sm(e,n){if(Tt)return e==="compositionend"||!Hl&&_h(e,n)?(e=bh(),ko=Il=Fn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xh&&n.locale!=="ko"?null:n.data;default:return null}}var um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ks(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!um[e.type]:n==="textarea"}function Sh(e,n,t,r){th(r),n=Fo(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xr=null,Hr=null;function cm(e){Hh(e,0)}function hi(e){var n=Lt(e);if(Qc(n))return e}function hm(e,n){if(e==="change")return n}var Ph=!1;if(Wn){var Mi;if(Wn){var ji="oninput"in document;if(!ji){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),ji=typeof Js.oninput=="function"}Mi=ji}else Mi=!1;Ph=Mi&&(!document.documentMode||9<document.documentMode)}function Zs(){xr&&(xr.detachEvent("onpropertychange",Eh),Hr=xr=null)}function Eh(e){if(e.propertyName==="value"&&hi(Hr)){var n=[];Sh(n,Hr,e,Cl(e)),ah(cm,n)}}function pm(e,n,t){e==="focusin"?(Zs(),xr=n,Hr=t,xr.attachEvent("onpropertychange",Eh)):e==="focusout"&&Zs()}function fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(Hr)}function dm(e,n){if(e==="click")return hi(n)}function mm(e,n){if(e==="input"||e==="change")return hi(n)}function gm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:gm;function Mr(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!fa.call(n,o)||!fn(e[o],n[o]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,n){var t=eu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=eu(t)}}function Ch(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ch(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Th(){for(var e=window,n=No();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=No(e.document)}return n}function Ml(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ym(e){var n=Th(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ch(t.ownerDocument.documentElement,t)){if(r!==null&&Ml(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=nu(t,i);var a=nu(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wm=Wn&&"documentMode"in document&&11>=document.documentMode,Wt=null,La=null,_r=null,Ia=!1;function tu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ia||Wt==null||Wt!==No(r)||(r=Wt,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Mr(_r,r)||(_r=r,r=Fo(La,"onSelect"),0<r.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wt)))}function so(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var At={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Di={},Wh={};Wn&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function pi(e){if(Di[e])return Di[e];if(!At[e])return e;var n=At[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wh)return Di[e]=n[t];return e}var Ah=pi("animationend"),Lh=pi("animationiteration"),Ih=pi("animationstart"),Oh=pi("transitionend"),Nh=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function et(e,n){Nh.set(e,n),$t(n,[e])}for(var Ri=0;Ri<ru.length;Ri++){var zi=ru[Ri],$m=zi.toLowerCase(),vm=zi[0].toUpperCase()+zi.slice(1);et($m,"on"+vm)}et(Ah,"onAnimationEnd");et(Lh,"onAnimationIteration");et(Ih,"onAnimationStart");et("dblclick","onDoubleClick");et("focusin","onFocus");et("focusout","onBlur");et(Oh,"onTransitionEnd");Yt("onMouseEnter",["mouseout","mouseover"]);Yt("onMouseLeave",["mouseout","mouseover"]);Yt("onPointerEnter",["pointerout","pointerover"]);Yt("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function ou(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$d(r,n,void 0,e),e.currentTarget=null}function Hh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;ou(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;ou(o,l,u),i=s}}}if(Mo)throw e=Ca,Mo=!1,Ca=null,e}function te(e,n){var t=n[ja];t===void 0&&(t=n[ja]=new Set);var r=e+"__bubble";t.has(r)||(Mh(n,e,2,!1),t.add(r))}function Fi(e,n,t){var r=0;n&&(r|=4),Mh(t,e,r,n)}var uo="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[uo]){e[uo]=!0,Uc.forEach(function(t){t!=="selectionchange"&&(bm.has(t)||Fi(t,!1,e),Fi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uo]||(n[uo]=!0,Fi("selectionchange",!1,n))}}function Mh(e,n,t,r){switch(vh(n)){case 1:var o=Nd;break;case 4:o=Hd;break;default:o=Ll}t=o.bind(null,n,t,e),o=void 0,!Ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Bi(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ut(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}ah(function(){var u=i,c=Cl(t),h=[];e:{var f=Nh.get(e);if(f!==void 0){var p=Ol,$=e;switch(e){case"keypress":if(So(t)===0)break e;case"keydown":case"keyup":p=Kd;break;case"focusin":$="focus",p=Hi;break;case"focusout":$="blur",p=Hi;break;case"beforeblur":case"afterblur":p=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=em;break;case Ah:case Lh:case Ih:p=Fd;break;case Oh:p=tm;break;case"scroll":p=Md;break;case"wheel":p=om;break;case"copy":case"cut":case"paste":p=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xs}var v=(n&4)!==0,T=!v&&e==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,d!==null&&(x=Lr(m,d),x!=null&&v.push(Dr(m,x,y)))),T)break;m=m.return}0<v.length&&(f=new p(f,$,null,t,c),h.push({event:f,listeners:v}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&t!==Sa&&($=t.relatedTarget||t.fromElement)&&(ut($)||$[An]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?($=t.relatedTarget||t.toElement,p=u,$=$?ut($):null,$!==null&&(T=vt($),$!==T||$.tag!==5&&$.tag!==6)&&($=null)):(p=null,$=u),p!==$)){if(v=qs,x="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Xs,x="onPointerLeave",d="onPointerEnter",m="pointer"),T=p==null?f:Lt(p),y=$==null?f:Lt($),f=new v(x,m+"leave",p,t,c),f.target=T,f.relatedTarget=y,x=null,ut(c)===u&&(v=new v(d,m+"enter",$,t,c),v.target=y,v.relatedTarget=T,x=v),T=x,p&&$)n:{for(v=p,d=$,m=0,y=v;y;y=St(y))m++;for(y=0,x=d;x;x=St(x))y++;for(;0<m-y;)v=St(v),m--;for(;0<y-m;)d=St(d),y--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break n;v=St(v),d=St(d)}v=null}else v=null;p!==null&&iu(h,f,p,v,!1),$!==null&&T!==null&&iu(h,T,$,v,!0)}}e:{if(f=u?Lt(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=hm;else if(Ks(f))if(Ph)k=mm;else{k=fm;var b=pm}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=dm);if(k&&(k=k(e,u))){Sh(h,k,t,c);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&va(f,"number",f.value)}switch(b=u?Lt(u):window,e){case"focusin":(Ks(b)||b.contentEditable==="true")&&(Wt=b,La=u,_r=null);break;case"focusout":_r=La=Wt=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,tu(h,t,c);break;case"selectionchange":if(wm)break;case"keydown":case"keyup":tu(h,t,c)}var E;if(Hl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Tt?_h(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(xh&&t.locale!=="ko"&&(Tt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Tt&&(E=bh()):(Fn=c,Il="value"in Fn?Fn.value:Fn.textContent,Tt=!0)),b=Fo(u,L),0<b.length&&(L=new Ys(L,e,null,t,c),h.push({event:L,listeners:b}),E?L.data=E:(E=kh(t),E!==null&&(L.data=E)))),(E=am?lm(e,t):sm(e,t))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(c=new Ys("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=E))}Hh(h,n)})}function Dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,t),i!=null&&r.unshift(Dr(e,i,o)),i=Lr(e,n),i!=null&&r.push(Dr(e,i,o))),e=e.return}return r}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Lr(t,i),s!=null&&a.unshift(Dr(t,s,l))):o||(s=Lr(t,i),s!=null&&a.push(Dr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var xm=/\r\n?/g,_m=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(xm,`
`).replace(_m,"")}function co(e,n,t){if(n=au(n),au(e)!==n&&t)throw Error(S(425))}function Bo(){}var Oa=null,Na=null;function Ha(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,km=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Pm)}:Ma;function Pm(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Nr(n)}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),wn="__reactFiber$"+tr,Rr="__reactProps$"+tr,An="__reactContainer$"+tr,ja="__reactEvents$"+tr,Em="__reactListeners$"+tr,Cm="__reactHandles$"+tr;function ut(e){var n=e[wn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[An]||t[wn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=su(e);e!==null;){if(t=e[wn])return t;e=su(e)}return n}e=t,t=e.parentNode}return null}function Gr(e){return e=e[wn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function fi(e){return e[Rr]||null}var Da=[],It=-1;function nt(e){return{current:e}}function re(e){0>It||(e.current=Da[It],Da[It]=null,It--)}function Z(e,n){It++,Da[It]=e.current,e.current=n}var Zn={},Ee=nt(Zn),He=nt(!1),dt=Zn;function Xt(e,n){var t=e.type.contextTypes;if(!t)return Zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Uo(){re(He),re(Ee)}function uu(e,n,t){if(Ee.current!==Zn)throw Error(S(168));Z(Ee,n),Z(He,t)}function jh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(S(108,pd(e)||"Unknown",o));return se({},t,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,dt=Ee.current,Z(Ee,e),Z(He,He.current),!0}function cu(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=jh(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,re(He),re(Ee),Z(Ee,e)):re(He),Z(He,t)}var Pn=null,di=!1,Vi=!1;function Dh(e){Pn===null?Pn=[e]:Pn.push(e)}function Tm(e){di=!0,Dh(e)}function tt(){if(!Vi&&Pn!==null){Vi=!0;var e=0,n=Q;try{var t=Pn;for(Q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,di=!1}catch(o){throw Pn!==null&&(Pn=Pn.slice(e+1)),ch(Tl,tt),o}finally{Q=n,Vi=!1}}return null}var Ot=[],Nt=0,qo=null,Yo=0,Qe=[],Ge=0,mt=null,En=1,Cn="";function at(e,n){Ot[Nt++]=Yo,Ot[Nt++]=qo,qo=e,Yo=n}function Rh(e,n,t){Qe[Ge++]=En,Qe[Ge++]=Cn,Qe[Ge++]=mt,mt=e;var r=En;e=Cn;var o=32-hn(r)-1;r&=~(1<<o),t+=1;var i=32-hn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,En=1<<32-hn(n)+o|t<<o|r,Cn=i+e}else En=1<<i|t<<o|r,Cn=e}function jl(e){e.return!==null&&(at(e,1),Rh(e,1,0))}function Dl(e){for(;e===qo;)qo=Ot[--Nt],Ot[Nt]=null,Yo=Ot[--Nt],Ot[Nt]=null;for(;e===mt;)mt=Qe[--Ge],Qe[Ge]=null,Cn=Qe[--Ge],Qe[Ge]=null,En=Qe[--Ge],Qe[Ge]=null}var Ve=null,Be=null,oe=!1,cn=null;function zh(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ve=e,Be=Yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ve=e,Be=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:En,overflow:Cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ve=e,Be=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(oe){var n=Be;if(n){var t=n;if(!hu(e,n)){if(Ra(e))throw Error(S(418));n=Yn(t.nextSibling);var r=Ve;n&&hu(e,n)?zh(r,t):(e.flags=e.flags&-4097|2,oe=!1,Ve=e)}}else{if(Ra(e))throw Error(S(418));e.flags=e.flags&-4097|2,oe=!1,Ve=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ho(e){if(e!==Ve)return!1;if(!oe)return pu(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ha(e.type,e.memoizedProps)),n&&(n=Be)){if(Ra(e))throw Fh(),Error(S(418));for(;n;)zh(e,n),n=Yn(n.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Be=Yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Be=null}}else Be=Ve?Yn(e.stateNode.nextSibling):null;return!0}function Fh(){for(var e=Be;e;)e=Yn(e.nextSibling)}function Qt(){Be=Ve=null,oe=!1}function Rl(e){cn===null?cn=[e]:cn.push(e)}var Wm=On.ReactCurrentBatchConfig;function sn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Xo=nt(null),Qo=null,Ht=null,zl=null;function Fl(){zl=Ht=Qo=null}function Bl(e){var n=Xo.current;re(Xo),e._currentValue=n}function Fa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Bt(e,n){Qo=e,zl=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ne=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Qo===null)throw Error(S(308));Ht=e,Qo.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var ct=null;function Ul(e){ct===null?ct=[e]:ct.push(e)}function Bh(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ul(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ln(e,r)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Dn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Ln(e,t)}return o=r.interleaved,o===null?(n.next=n,Ul(r)):(n.next=o.next,o.next=n),r.interleaved=n,Ln(e,t)}function Po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}function fu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Go(e,n,t,r){var o=e.updateQueue;Dn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;a=0,c=u=s=null,l=i;do{var f=l.lane,p=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var $=e,v=l;switch(f=n,p=t,v.tag){case 1:if($=v.payload,typeof $=="function"){h=$.call(p,h,f);break e}h=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=v.payload,f=typeof $=="function"?$.call(p,h,f):$,f==null)break e;h=se({},h,f);break e;case 2:Dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=h):c=c.next=p,a|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);yt|=a,e.lanes=a,e.memoizedState=h}}function du(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Vh=new Bc.Component().refs;function Ba(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:se({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var mi={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Te(),o=Gn(e),i=Tn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Xn(e,i,o),n!==null&&(pn(n,e,o,r),Po(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Te(),o=Gn(e),i=Tn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Xn(e,i,o),n!==null&&(pn(n,e,o,r),Po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Te(),r=Gn(e),o=Tn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Xn(e,o,r),n!==null&&(pn(n,e,r,t),Po(n,e,r))}};function mu(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Mr(t,r)||!Mr(o,i):!0}function qh(e,n,t){var r=!1,o=Zn,i=n.contextType;return typeof i=="object"&&i!==null?i=nn(i):(o=Me(n)?dt:Ee.current,r=n.contextTypes,i=(r=r!=null)?Xt(e,o):Zn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=mi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function gu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&mi.enqueueReplaceState(n,n.state,null)}function Ua(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Vh,Vl(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=nn(i):(i=Me(n)?dt:Ee.current,o.context=Xt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ba(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&mi.enqueueReplaceState(o,o.state,null),Go(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;l===Vh&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function po(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yu(e){var n=e._init;return n(e._payload)}function Yh(e){function n(d,m){if(e){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function t(d,m){if(!e)return null;for(;m!==null;)n(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function o(d,m){return d=Kn(d,m),d.index=0,d.sibling=null,d}function i(d,m,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,m,y,x){return m===null||m.tag!==6?(m=Ji(y,d.mode,x),m.return=d,m):(m=o(m,y),m.return=d,m)}function s(d,m,y,x){var k=y.type;return k===Ct?c(d,m,y.props.children,x,y.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&yu(k)===m.type)?(x=o(m,y.props),x.ref=hr(d,m,y),x.return=d,x):(x=Lo(y.type,y.key,y.props,null,d.mode,x),x.ref=hr(d,m,y),x.return=d,x)}function u(d,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Zi(y,d.mode,x),m.return=d,m):(m=o(m,y.children||[]),m.return=d,m)}function c(d,m,y,x,k){return m===null||m.tag!==7?(m=ft(y,d.mode,x,k),m.return=d,m):(m=o(m,y),m.return=d,m)}function h(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ji(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return y=Lo(m.type,m.key,m.props,null,d.mode,y),y.ref=hr(d,null,m),y.return=d,y;case Et:return m=Zi(m,d.mode,y),m.return=d,m;case jn:var x=m._init;return h(d,x(m._payload),y)}if(gr(m)||ar(m))return m=ft(m,d.mode,y,null),m.return=d,m;po(d,m)}return null}function f(d,m,y,x){var k=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(d,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return y.key===k?s(d,m,y,x):null;case Et:return y.key===k?u(d,m,y,x):null;case jn:return k=y._init,f(d,m,k(y._payload),x)}if(gr(y)||ar(y))return k!==null?null:c(d,m,y,x,null);po(d,y)}return null}function p(d,m,y,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(y)||null,l(m,d,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return d=d.get(x.key===null?y:x.key)||null,s(m,d,x,k);case Et:return d=d.get(x.key===null?y:x.key)||null,u(m,d,x,k);case jn:var b=x._init;return p(d,m,y,b(x._payload),k)}if(gr(x)||ar(x))return d=d.get(y)||null,c(m,d,x,k,null);po(m,x)}return null}function $(d,m,y,x){for(var k=null,b=null,E=m,L=m=0,j=null;E!==null&&L<y.length;L++){E.index>L?(j=E,E=null):j=E.sibling;var O=f(d,E,y[L],x);if(O===null){E===null&&(E=j);break}e&&E&&O.alternate===null&&n(d,E),m=i(O,m,L),b===null?k=O:b.sibling=O,b=O,E=j}if(L===y.length)return t(d,E),oe&&at(d,L),k;if(E===null){for(;L<y.length;L++)E=h(d,y[L],x),E!==null&&(m=i(E,m,L),b===null?k=E:b.sibling=E,b=E);return oe&&at(d,L),k}for(E=r(d,E);L<y.length;L++)j=p(E,d,L,y[L],x),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?L:j.key),m=i(j,m,L),b===null?k=j:b.sibling=j,b=j);return e&&E.forEach(function(N){return n(d,N)}),oe&&at(d,L),k}function v(d,m,y,x){var k=ar(y);if(typeof k!="function")throw Error(S(150));if(y=k.call(y),y==null)throw Error(S(151));for(var b=k=null,E=m,L=m=0,j=null,O=y.next();E!==null&&!O.done;L++,O=y.next()){E.index>L?(j=E,E=null):j=E.sibling;var N=f(d,E,O.value,x);if(N===null){E===null&&(E=j);break}e&&E&&N.alternate===null&&n(d,E),m=i(N,m,L),b===null?k=N:b.sibling=N,b=N,E=j}if(O.done)return t(d,E),oe&&at(d,L),k;if(E===null){for(;!O.done;L++,O=y.next())O=h(d,O.value,x),O!==null&&(m=i(O,m,L),b===null?k=O:b.sibling=O,b=O);return oe&&at(d,L),k}for(E=r(d,E);!O.done;L++,O=y.next())O=p(E,d,L,O.value,x),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?L:O.key),m=i(O,m,L),b===null?k=O:b.sibling=O,b=O);return e&&E.forEach(function(H){return n(d,H)}),oe&&at(d,L),k}function T(d,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Ct&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case no:e:{for(var k=y.key,b=m;b!==null;){if(b.key===k){if(k=y.type,k===Ct){if(b.tag===7){t(d,b.sibling),m=o(b,y.props.children),m.return=d,d=m;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jn&&yu(k)===b.type){t(d,b.sibling),m=o(b,y.props),m.ref=hr(d,b,y),m.return=d,d=m;break e}t(d,b);break}else n(d,b);b=b.sibling}y.type===Ct?(m=ft(y.props.children,d.mode,x,y.key),m.return=d,d=m):(x=Lo(y.type,y.key,y.props,null,d.mode,x),x.ref=hr(d,m,y),x.return=d,d=x)}return a(d);case Et:e:{for(b=y.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(d,m.sibling),m=o(m,y.children||[]),m.return=d,d=m;break e}else{t(d,m);break}else n(d,m);m=m.sibling}m=Zi(y,d.mode,x),m.return=d,d=m}return a(d);case jn:return b=y._init,T(d,m,b(y._payload),x)}if(gr(y))return $(d,m,y,x);if(ar(y))return v(d,m,y,x);po(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(d,m.sibling),m=o(m,y),m.return=d,d=m):(t(d,m),m=Ji(y,d.mode,x),m.return=d,d=m),a(d)):t(d,m)}return T}var Gt=Yh(!0),Xh=Yh(!1),Kr={},bn=nt(Kr),zr=nt(Kr),Fr=nt(Kr);function ht(e){if(e===Kr)throw Error(S(174));return e}function ql(e,n){switch(Z(Fr,n),Z(zr,e),Z(bn,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xa(n,e)}re(bn),Z(bn,n)}function Kt(){re(bn),re(zr),re(Fr)}function Qh(e){ht(Fr.current);var n=ht(bn.current),t=xa(n,e.type);n!==t&&(Z(zr,e),Z(bn,t))}function Yl(e){zr.current===e&&(re(bn),re(zr))}var ae=nt(0);function Ko(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=[];function Xl(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var Eo=On.ReactCurrentDispatcher,Yi=On.ReactCurrentBatchConfig,gt=0,le=null,ge=null,we=null,Jo=!1,kr=!1,Br=0,Am=0;function _e(){throw Error(S(321))}function Ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Gl(e,n,t,r,o,i){if(gt=i,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Eo.current=e===null||e.memoizedState===null?Nm:Hm,e=t(r,o),kr){i=0;do{if(kr=!1,Br=0,25<=i)throw Error(S(301));i+=1,we=ge=null,n.updateQueue=null,Eo.current=Mm,e=t(r,o)}while(kr)}if(Eo.current=Zo,n=ge!==null&&ge.next!==null,gt=0,we=ge=le=null,Jo=!1,n)throw Error(S(300));return e}function Kl(){var e=Br!==0;return Br=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function tn(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=we===null?le.memoizedState:we.next;if(n!==null)we=n,ge=e;else{if(e===null)throw Error(S(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function Ur(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=tn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((gt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,le.lanes|=c,yt|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,fn(r,n.memoizedState)||(Ne=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,yt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qi(e){var n=tn(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);fn(i,n.memoizedState)||(Ne=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Gh(){}function Kh(e,n){var t=le,r=tn(),o=n(),i=!fn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Jl(ep.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||we!==null&&we.memoizedState.tag&1){if(t.flags|=2048,Vr(9,Zh.bind(null,t,r,o,n),void 0,null),$e===null)throw Error(S(349));gt&30||Jh(t,n,o)}return o}function Jh(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zh(e,n,t,r){n.value=t,n.getSnapshot=r,np(n)&&tp(e)}function ep(e,n,t){return t(function(){np(n)&&tp(e)})}function np(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function tp(e){var n=Ln(e,1);n!==null&&pn(n,e,1,-1)}function wu(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},n.queue=e,e=e.dispatch=Om.bind(null,le,e),[n.memoizedState,e]}function Vr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function rp(){return tn().memoizedState}function Co(e,n,t,r){var o=gn();le.flags|=e,o.memoizedState=Vr(1|n,t,void 0,r===void 0?null:r)}function gi(e,n,t,r){var o=tn();r=r===void 0?null:r;var i=void 0;if(ge!==null){var a=ge.memoizedState;if(i=a.destroy,r!==null&&Ql(r,a.deps)){o.memoizedState=Vr(n,t,i,r);return}}le.flags|=e,o.memoizedState=Vr(1|n,t,i,r)}function $u(e,n){return Co(8390656,8,e,n)}function Jl(e,n){return gi(2048,8,e,n)}function op(e,n){return gi(4,2,e,n)}function ip(e,n){return gi(4,4,e,n)}function ap(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lp(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,ap.bind(null,n,e),t)}function Zl(){}function sp(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function up(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ql(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function cp(e,n,t){return gt&21?(fn(t,n)||(t=fh(),le.lanes|=t,yt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=t)}function Lm(e,n){var t=Q;Q=t!==0&&4>t?t:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),n()}finally{Q=t,Yi.transition=r}}function hp(){return tn().memoizedState}function Im(e,n,t){var r=Gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},pp(e))fp(n,t);else if(t=Bh(e,n,t,r),t!==null){var o=Te();pn(t,e,r,o),dp(t,n,r)}}function Om(e,n,t){var r=Gn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(pp(e))fp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,fn(l,a)){var s=n.interleaved;s===null?(o.next=o,Ul(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Bh(e,n,o,r),t!==null&&(o=Te(),pn(t,e,r,o),dp(t,n,r))}}function pp(e){var n=e.alternate;return e===le||n!==null&&n===le}function fp(e,n){kr=Jo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function dp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}var Zo={readContext:nn,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Nm={readContext:nn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:$u,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Co(4194308,4,ap.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Co(4194308,4,e,n)},useInsertionEffect:function(e,n){return Co(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Im.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:wu,useDebugValue:Zl,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=wu(!1),n=e[0];return e=Lm.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=le,o=gn();if(oe){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),$e===null)throw Error(S(349));gt&30||Jh(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,$u(ep.bind(null,r,i,e),[e]),r.flags|=2048,Vr(9,Zh.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=gn(),n=$e.identifierPrefix;if(oe){var t=Cn,r=En;t=(r&~(1<<32-hn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Br++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Am++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hm={readContext:nn,useCallback:sp,useContext:nn,useEffect:Jl,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:ip,useMemo:up,useReducer:Xi,useRef:rp,useState:function(){return Xi(Ur)},useDebugValue:Zl,useDeferredValue:function(e){var n=tn();return cp(n,ge.memoizedState,e)},useTransition:function(){var e=Xi(Ur)[0],n=tn().memoizedState;return[e,n]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:hp,unstable_isNewReconciler:!1},Mm={readContext:nn,useCallback:sp,useContext:nn,useEffect:Jl,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:ip,useMemo:up,useReducer:Qi,useRef:rp,useState:function(){return Qi(Ur)},useDebugValue:Zl,useDeferredValue:function(e){var n=tn();return ge===null?n.memoizedState=e:cp(n,ge.memoizedState,e)},useTransition:function(){var e=Qi(Ur)[0],n=tn().memoizedState;return[e,n]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:hp,unstable_isNewReconciler:!1};function Jt(e,n){try{var t="",r=n;do t+=hd(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Gi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Va(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function mp(e,n,t){t=Tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ni||(ni=!0,nl=r),Va(e,n)},t}function gp(e,n,t){t=Tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Va(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Va(e,n),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function vu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Jm.bind(null,e,n,t),n.then(e,e))}function bu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function xu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Tn(-1,1),n.tag=2,Xn(t,n,1))),t.lanes|=1),e)}var Dm=On.ReactCurrentOwner,Ne=!1;function Ce(e,n,t,r){n.child=e===null?Xh(n,null,t,r):Gt(n,e.child,t,r)}function _u(e,n,t,r,o){t=t.render;var i=n.ref;return Bt(n,o),r=Gl(e,n,t,r,i,o),t=Kl(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,In(e,n,o)):(oe&&t&&jl(n),n.flags|=1,Ce(e,n,r,o),n.child)}function ku(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ls(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,yp(e,n,i,r,o)):(e=Lo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Mr,t(a,r)&&e.ref===n.ref)return In(e,n,o)}return n.flags|=1,e=Kn(i,r),e.ref=n.ref,e.return=n,n.child=e}function yp(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Mr(i,r)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return n.lanes=e.lanes,In(e,n,o)}return qa(e,n,t,r,o)}function wp(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(jt,Fe),Fe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Z(jt,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,Z(jt,Fe),Fe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,Z(jt,Fe),Fe|=r;return Ce(e,n,o,t),n.child}function $p(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qa(e,n,t,r,o){var i=Me(t)?dt:Ee.current;return i=Xt(n,i),Bt(n,o),t=Gl(e,n,t,r,i,o),r=Kl(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,In(e,n,o)):(oe&&r&&jl(n),n.flags|=1,Ce(e,n,t,o),n.child)}function Su(e,n,t,r,o){if(Me(t)){var i=!0;Vo(n)}else i=!1;if(Bt(n,o),n.stateNode===null)To(e,n),qh(n,t,r),Ua(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Me(t)?dt:Ee.current,u=Xt(n,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&gu(n,a,r,u),Dn=!1;var f=n.memoizedState;a.state=f,Go(n,r,a,o),s=n.memoizedState,l!==r||f!==s||He.current||Dn?(typeof c=="function"&&(Ba(n,t,c,r),s=n.memoizedState),(l=Dn||mu(n,t,l,r,f,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Uh(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:sn(n.type,l),a.props=u,h=n.pendingProps,f=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=Me(t)?dt:Ee.current,s=Xt(n,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||f!==s)&&gu(n,a,r,s),Dn=!1,f=n.memoizedState,a.state=f,Go(n,r,a,o);var $=n.memoizedState;l!==h||f!==$||He.current||Dn?(typeof p=="function"&&(Ba(n,t,p,r),$=n.memoizedState),(u=Dn||mu(n,t,u,r,f,$,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,$,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,$,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=$),a.props=r,a.state=$,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Ya(e,n,t,r,i,o)}function Ya(e,n,t,r,o,i){$p(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&cu(n,t,!1),In(e,n,i);r=n.stateNode,Dm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Gt(n,e.child,null,i),n.child=Gt(n,null,l,i)):Ce(e,n,l,i),n.memoizedState=r.state,o&&cu(n,t,!0),n.child}function vp(e){var n=e.stateNode;n.pendingContext?uu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&uu(e,n.context,!1),ql(e,n.containerInfo)}function Pu(e,n,t,r,o){return Qt(),Rl(o),n.flags|=256,Ce(e,n,t,r),n.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,n,t){var r=n.pendingProps,o=ae.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ae,o&1),e===null)return za(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=$i(a,r,0,null),e=ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Qa(t),n.memoizedState=Xa,e):es(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Rm(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Kn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Kn(l,i):(i=ft(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Qa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Xa,r}return i=e.child,e=i.sibling,r=Kn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function es(e,n){return n=$i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fo(e,n,t,r){return r!==null&&Rl(r),Gt(n,e.child,null,t),e=es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rm(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Gi(Error(S(422))),fo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=$i({mode:"visible",children:r.children},o,0,null),i=ft(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Gt(n,e.child,null,a),n.child.memoizedState=Qa(a),n.memoizedState=Xa,i);if(!(n.mode&1))return fo(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(S(419)),r=Gi(i,r,void 0),fo(e,n,a,r)}if(l=(a&e.childLanes)!==0,Ne||l){if(r=$e,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ln(e,o),pn(r,e,o,-1))}return as(),r=Gi(Error(S(421))),fo(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Zm.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Be=Yn(o.nextSibling),Ve=n,oe=!0,cn=null,e!==null&&(Qe[Ge++]=En,Qe[Ge++]=Cn,Qe[Ge++]=mt,En=e.id,Cn=e.overflow,mt=n),n=es(n,r.children),n.flags|=4096,n)}function Eu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fa(e.return,n,t)}function Ki(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function xp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,n,r.children,t),r=ae.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,t,n);else if(e.tag===19)Eu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ae,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Ko(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ki(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Ko(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ki(n,!0,t,null,i);break;case"together":Ki(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function To(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function In(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),yt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function zm(e,n,t){switch(n.tag){case 3:vp(n),Qt();break;case 5:Qh(n);break;case 1:Me(n.type)&&Vo(n);break;case 4:ql(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;Z(Xo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Z(ae,ae.current&1),n.flags|=128,null):t&n.child.childLanes?bp(e,n,t):(Z(ae,ae.current&1),e=In(e,n,t),e!==null?e.sibling:null);Z(ae,ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return xp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ae,ae.current),r)break;return null;case 22:case 23:return n.lanes=0,wp(e,n,t)}return In(e,n,t)}var _p,Ga,kp,Sp;_p=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ga=function(){};kp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ht(bn.current);var i=null;switch(t){case"input":o=wa(e,o),r=wa(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=ba(e,o),r=ba(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}_a(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&te("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Sp=function(e,n,t,r){t!==r&&(n.flags|=4)};function pr(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Fm(e,n,t){var r=n.pendingProps;switch(Dl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return Me(n.type)&&Uo(),ke(n),null;case 3:return r=n.stateNode,Kt(),re(He),re(Ee),Xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(ol(cn),cn=null))),Ga(e,n),ke(n),null;case 5:Yl(n);var o=ht(Fr.current);if(t=n.type,e!==null&&n.stateNode!=null)kp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ke(n),null}if(e=ht(bn.current),ho(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[wn]=n,r[Rr]=i,e=(n.mode&1)!==0,t){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)te(wr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Hs(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":js(r,i),te("invalid",r)}_a(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&co(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&co(r.textContent,l,e),o=["children",""+l]):Wr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",r)}switch(t){case"input":to(r),Ms(r,i,!0);break;case"textarea":to(r),Ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[wn]=n,e[Rr]=r,_p(e,n,!1,!1),n.stateNode=e;e:{switch(a=ka(t,r),t){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)te(wr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Hs(e,r),o=wa(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),te("invalid",e);break;case"textarea":js(e,r),o=ba(e,r),te("invalid",e);break;default:o=r}_a(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?nh(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&te("scroll",e):s!=null&&kl(e,i,s,a))}switch(t){case"input":to(e),Ms(e,r,!1);break;case"textarea":to(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)Sp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=ht(Fr.current),ht(bn.current),ho(n)){if(r=n.stateNode,t=n.memoizedProps,r[wn]=n,(i=r.nodeValue!==t)&&(e=Ve,e!==null))switch(e.tag){case 3:co(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[wn]=n,n.stateNode=r}return ke(n),null;case 13:if(re(ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Be!==null&&n.mode&1&&!(n.flags&128))Fh(),Qt(),n.flags|=98560,i=!1;else if(i=ho(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[wn]=n}else Qt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),i=!1}else cn!==null&&(ol(cn),cn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):as())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return Kt(),Ga(e,n),e===null&&jr(n.stateNode.containerInfo),ke(n),null;case 10:return Bl(n.type._context),ke(n),null;case 17:return Me(n.type)&&Uo(),ke(n),null;case 19:if(re(ae),i=n.memoizedState,i===null)return ke(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)pr(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Ko(e),a!==null){for(n.flags|=128,pr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(ae,ae.current&1|2),n.child}e=e.sibling}i.tail!==null&&he()>Zt&&(n.flags|=128,r=!0,pr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ko(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!oe)return ke(n),null}else 2*he()-i.renderingStartTime>Zt&&t!==1073741824&&(n.flags|=128,r=!0,pr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=he(),n.sibling=null,t=ae.current,Z(ae,r?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return is(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Fe&1073741824&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function Bm(e,n){switch(Dl(n),n.tag){case 1:return Me(n.type)&&Uo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),re(He),re(Ee),Xl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Yl(n),null;case 13:if(re(ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));Qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(ae),null;case 4:return Kt(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var mo=!1,Se=!1,Um=typeof WeakSet=="function"?WeakSet:Set,I=null;function Mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ue(e,n,r)}else t.current=null}function Ka(e,n,t){try{t()}catch(r){ue(e,n,r)}}var Cu=!1;function Vm(e,n){if(Oa=Ro,e=Th(),Ml(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,c=0,h=e,f=null;n:for(;;){for(var p;h!==t||o!==0&&h.nodeType!==3||(l=a+o),h!==i||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break n;if(f===t&&++u===o&&(l=a),f===i&&++c===r&&(s=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Na={focusedElem:e,selectionRange:t},Ro=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var $=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if($!==null){var v=$.memoizedProps,T=$.memoizedState,d=n.stateNode,m=d.getSnapshotBeforeUpdate(n.elementType===n.type?v:sn(n.type,v),T);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){ue(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return $=Cu,Cu=!1,$}function Sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ka(n,t,i)}o=o.next}while(o!==r)}}function yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ja(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pp(e){var n=e.alternate;n!==null&&(e.alternate=null,Pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[wn],delete n[Rr],delete n[ja],delete n[Em],delete n[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ep(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(Za(e,n,t),e=e.sibling;e!==null;)Za(e,n,t),e=e.sibling}function el(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(el(e,n,t),e=e.sibling;e!==null;)el(e,n,t),e=e.sibling}var ve=null,un=!1;function Hn(e,n,t){for(t=t.child;t!==null;)Cp(e,n,t),t=t.sibling}function Cp(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(ui,t)}catch{}switch(t.tag){case 5:Se||Mt(t,n);case 6:var r=ve,o=un;ve=null,Hn(e,n,t),ve=r,un=o,ve!==null&&(un?(e=ve,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ve.removeChild(t.stateNode));break;case 18:ve!==null&&(un?(e=ve,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),Nr(e)):Ui(ve,t.stateNode));break;case 4:r=ve,o=un,ve=t.stateNode.containerInfo,un=!0,Hn(e,n,t),ve=r,un=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ka(t,n,a),o=o.next}while(o!==r)}Hn(e,n,t);break;case 1:if(!Se&&(Mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ue(t,n,l)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Se=(r=Se)||t.memoizedState!==null,Hn(e,n,t),Se=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function Wu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Um),n.forEach(function(r){var o=eg.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,un=!1;break e;case 3:ve=l.stateNode.containerInfo,un=!0;break e;case 4:ve=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(ve===null)throw Error(S(160));Cp(i,a,o),ve=null,un=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ue(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Tp(n,e),n=n.sibling}function Tp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),mn(e),r&4){try{Sr(3,e,e.return),yi(3,e)}catch(v){ue(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){ue(e,e.return,v)}}break;case 1:ln(n,e),mn(e),r&512&&t!==null&&Mt(t,t.return);break;case 5:if(ln(n,e),mn(e),r&512&&t!==null&&Mt(t,t.return),e.flags&32){var o=e.stateNode;try{Ar(o,"")}catch(v){ue(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Gc(o,i),ka(l,a);var u=ka(l,i);for(a=0;a<s.length;a+=2){var c=s[a],h=s[a+1];c==="style"?nh(o,h):c==="dangerouslySetInnerHTML"?Zc(o,h):c==="children"?Ar(o,h):kl(o,c,h,u)}switch(l){case"input":$a(o,i);break;case"textarea":Kc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Dt(o,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?Dt(o,!!i.multiple,i.defaultValue,!0):Dt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rr]=i}catch(v){ue(e,e.return,v)}}break;case 6:if(ln(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(ln(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Nr(n.containerInfo)}catch(v){ue(e,e.return,v)}break;case 4:ln(n,e),mn(e);break;case 13:ln(n,e),mn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(rs=he())),r&4&&Wu(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Se=(u=Se)||c,ln(n,e),Se=u):ln(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(h=I=c;I!==null;){switch(f=I,p=f.child,f.tag){case 0:case 11:case 14:case 15:Sr(4,f,f.return);break;case 1:Mt(f,f.return);var $=f.stateNode;if(typeof $.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,$.props=n.memoizedProps,$.state=n.memoizedState,$.componentWillUnmount()}catch(v){ue(r,t,v)}}break;case 5:Mt(f,f.return);break;case 22:if(f.memoizedState!==null){Lu(h);continue}}p!==null?(p.return=f,I=p):Lu(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=eh("display",a))}catch(v){ue(e,e.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ue(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(n,e),mn(e),r&4&&Wu(e);break;case 21:break;default:ln(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ep(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ar(o,""),r.flags&=-33);var i=Tu(e);el(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Tu(e);Za(e,l,a);break;default:throw Error(S(161))}}catch(s){ue(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qm(e,n,t){I=e,Wp(e)}function Wp(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||mo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Se;l=mo;var u=Se;if(mo=a,(Se=s)&&!u)for(I=o;I!==null;)a=I,s=a.child,a.tag===22&&a.memoizedState!==null?Iu(o):s!==null?(s.return=a,I=s):Iu(o);for(;i!==null;)I=i,Wp(i),i=i.sibling;I=o,mo=l,Se=u}Au(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Au(e)}}function Au(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Se||yi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Se)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&du(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}du(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Nr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Se||n.flags&512&&Ja(n)}catch(f){ue(n,n.return,f)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Lu(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Iu(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yi(4,n)}catch(s){ue(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){ue(n,o,s)}}var i=n.return;try{Ja(n)}catch(s){ue(n,i,s)}break;case 5:var a=n.return;try{Ja(n)}catch(s){ue(n,a,s)}}}catch(s){ue(n,n.return,s)}if(n===e){I=null;break}var l=n.sibling;if(l!==null){l.return=n.return,I=l;break}I=n.return}}var Ym=Math.ceil,ei=On.ReactCurrentDispatcher,ns=On.ReactCurrentOwner,en=On.ReactCurrentBatchConfig,q=0,$e=null,de=null,be=0,Fe=0,jt=nt(0),ye=0,qr=null,yt=0,wi=0,ts=0,Pr=null,Oe=null,rs=0,Zt=1/0,Sn=null,ni=!1,nl=null,Qn=null,go=!1,Bn=null,ti=0,Er=0,tl=null,Wo=-1,Ao=0;function Te(){return q&6?he():Wo!==-1?Wo:Wo=he()}function Gn(e){return e.mode&1?q&2&&be!==0?be&-be:Wm.transition!==null?(Ao===0&&(Ao=fh()),Ao):(e=Q,e!==0||(e=window.event,e=e===void 0?16:vh(e.type)),e):1}function pn(e,n,t,r){if(50<Er)throw Er=0,tl=null,Error(S(185));Xr(e,t,r),(!(q&2)||e!==$e)&&(e===$e&&(!(q&2)&&(wi|=t),ye===4&&zn(e,be)),je(e,r),t===1&&q===0&&!(n.mode&1)&&(Zt=he()+500,di&&tt()))}function je(e,n){var t=e.callbackNode;Wd(e,n);var r=Do(e,e===$e?be:0);if(r===0)t!==null&&Fs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fs(t),n===1)e.tag===0?Tm(Ou.bind(null,e)):Dh(Ou.bind(null,e)),Sm(function(){!(q&6)&&tt()}),t=null;else{switch(dh(r)){case 1:t=Tl;break;case 4:t=hh;break;case 16:t=jo;break;case 536870912:t=ph;break;default:t=jo}t=jp(t,Ap.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ap(e,n){if(Wo=-1,Ao=0,q&6)throw Error(S(327));var t=e.callbackNode;if(Ut()&&e.callbackNode!==t)return null;var r=Do(e,e===$e?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ri(e,r);else{n=r;var o=q;q|=2;var i=Ip();($e!==e||be!==n)&&(Sn=null,Zt=he()+500,pt(e,n));do try{Gm();break}catch(l){Lp(e,l)}while(1);Fl(),ei.current=i,q=o,de!==null?n=0:($e=null,be=0,n=ye)}if(n!==0){if(n===2&&(o=Ta(e),o!==0&&(r=o,n=rl(e,o))),n===1)throw t=qr,pt(e,0),zn(e,r),je(e,he()),t;if(n===6)zn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Xm(o)&&(n=ri(e,r),n===2&&(i=Ta(e),i!==0&&(r=i,n=rl(e,i))),n===1))throw t=qr,pt(e,0),zn(e,r),je(e,he()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:lt(e,Oe,Sn);break;case 3:if(zn(e,r),(r&130023424)===r&&(n=rs+500-he(),10<n)){if(Do(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ma(lt.bind(null,e,Oe,Sn),n);break}lt(e,Oe,Sn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-hn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ym(r/1960))-r,10<r){e.timeoutHandle=Ma(lt.bind(null,e,Oe,Sn),r);break}lt(e,Oe,Sn);break;case 5:lt(e,Oe,Sn);break;default:throw Error(S(329))}}}return je(e,he()),e.callbackNode===t?Ap.bind(null,e):null}function rl(e,n){var t=Pr;return e.current.memoizedState.isDehydrated&&(pt(e,n).flags|=256),e=ri(e,n),e!==2&&(n=Oe,Oe=t,n!==null&&ol(n)),e}function ol(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Xm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!fn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zn(e,n){for(n&=~ts,n&=~wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-hn(n),r=1<<t;e[t]=-1,n&=~r}}function Ou(e){if(q&6)throw Error(S(327));Ut();var n=Do(e,0);if(!(n&1))return je(e,he()),null;var t=ri(e,n);if(e.tag!==0&&t===2){var r=Ta(e);r!==0&&(n=r,t=rl(e,r))}if(t===1)throw t=qr,pt(e,0),zn(e,n),je(e,he()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,lt(e,Oe,Sn),je(e,he()),null}function os(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(Zt=he()+500,di&&tt())}}function wt(e){Bn!==null&&Bn.tag===0&&!(q&6)&&Ut();var n=q;q|=1;var t=en.transition,r=Q;try{if(en.transition=null,Q=1,e)return e()}finally{Q=r,en.transition=t,q=n,!(q&6)&&tt()}}function is(){Fe=jt.current,re(jt)}function pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,km(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:Kt(),re(He),re(Ee),Xl();break;case 5:Yl(r);break;case 4:Kt();break;case 13:re(ae);break;case 19:re(ae);break;case 10:Bl(r.type._context);break;case 22:case 23:is()}t=t.return}if($e=e,de=e=Kn(e.current,null),be=Fe=n,ye=0,qr=null,ts=wi=yt=0,Oe=Pr=null,ct!==null){for(n=0;n<ct.length;n++)if(t=ct[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}ct=null}return e}function Lp(e,n){do{var t=de;try{if(Fl(),Eo.current=Zo,Jo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Jo=!1}if(gt=0,we=ge=le=null,kr=!1,Br=0,ns.current=null,t===null||t.return===null){ye=1,qr=n,de=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bu(a);if(p!==null){p.flags&=-257,xu(p,a,l,i,n),p.mode&1&&vu(i,u,n),n=p,s=u;var $=n.updateQueue;if($===null){var v=new Set;v.add(s),n.updateQueue=v}else $.add(s);break e}else{if(!(n&1)){vu(i,u,n),as();break e}s=Error(S(426))}}else if(oe&&l.mode&1){var T=bu(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),xu(T,a,l,i,n),Rl(Jt(s,l));break e}}i=s=Jt(s,l),ye!==4&&(ye=2),Pr===null?Pr=[i]:Pr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=mp(i,s,n);fu(i,d);break e;case 1:l=s;var m=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Qn===null||!Qn.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=gp(i,l,n);fu(i,x);break e}}i=i.return}while(i!==null)}Np(t)}catch(k){n=k,de===t&&t!==null&&(de=t=t.return);continue}break}while(1)}function Ip(){var e=ei.current;return ei.current=Zo,e===null?Zo:e}function as(){(ye===0||ye===3||ye===2)&&(ye=4),$e===null||!(yt&268435455)&&!(wi&268435455)||zn($e,be)}function ri(e,n){var t=q;q|=2;var r=Ip();($e!==e||be!==n)&&(Sn=null,pt(e,n));do try{Qm();break}catch(o){Lp(e,o)}while(1);if(Fl(),q=t,ei.current=r,de!==null)throw Error(S(261));return $e=null,be=0,ye}function Qm(){for(;de!==null;)Op(de)}function Gm(){for(;de!==null&&!bd();)Op(de)}function Op(e){var n=Mp(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Np(e):de=n,ns.current=null}function Np(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Bm(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,de=null;return}}else if(t=Fm(t,n,Fe),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);ye===0&&(ye=5)}function lt(e,n,t){var r=Q,o=en.transition;try{en.transition=null,Q=1,Km(e,n,t,r)}finally{en.transition=o,Q=r}return null}function Km(e,n,t,r){do Ut();while(Bn!==null);if(q&6)throw Error(S(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ad(e,i),e===$e&&(de=$e=null,be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||go||(go=!0,jp(jo,function(){return Ut(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=en.transition,en.transition=null;var a=Q;Q=1;var l=q;q|=4,ns.current=null,Vm(e,t),Tp(t,e),ym(Na),Ro=!!Oa,Na=Oa=null,e.current=t,qm(t),xd(),q=l,Q=a,en.transition=i}else e.current=t;if(go&&(go=!1,Bn=e,ti=o),i=e.pendingLanes,i===0&&(Qn=null),Sd(t.stateNode),je(e,he()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ni)throw ni=!1,e=nl,nl=null,e;return ti&1&&e.tag!==0&&Ut(),i=e.pendingLanes,i&1?e===tl?Er++:(Er=0,tl=e):Er=0,tt(),null}function Ut(){if(Bn!==null){var e=dh(ti),n=en.transition,t=Q;try{if(en.transition=null,Q=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,ti=0,q&6)throw Error(S(331));var o=q;for(q|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Sr(8,c,i)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var f=c.sibling,p=c.return;if(Pp(c),c===u){I=null;break}if(f!==null){f.return=p,I=f;break}I=p}}}var $=i.alternate;if($!==null){var v=$.child;if(v!==null){$.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var m=e.current;for(I=m;I!==null;){a=I;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,I=y;else e:for(a=m;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yi(9,l)}}catch(k){ue(l,l.return,k)}if(l===a){I=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,I=x;break e}I=l.return}}if(q=o,tt(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{Q=t,en.transition=n}}return!1}function Nu(e,n,t){n=Jt(t,n),n=mp(e,n,1),e=Xn(e,n,1),n=Te(),e!==null&&(Xr(e,1,n),je(e,n))}function ue(e,n,t){if(e.tag===3)Nu(e,e,t);else for(;n!==null;){if(n.tag===3){Nu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=Jt(t,e),e=gp(n,e,1),n=Xn(n,e,1),e=Te(),n!==null&&(Xr(n,1,e),je(n,e));break}}n=n.return}}function Jm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Te(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(be&t)===t&&(ye===4||ye===3&&(be&130023424)===be&&500>he()-rs?pt(e,0):ts|=t),je(e,n)}function Hp(e,n){n===0&&(e.mode&1?(n=io,io<<=1,!(io&130023424)&&(io=4194304)):n=1);var t=Te();e=Ln(e,n),e!==null&&(Xr(e,n,t),je(e,t))}function Zm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hp(e,t)}function eg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Hp(e,t)}var Mp;Mp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)Ne=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ne=!1,zm(e,n,t);Ne=!!(e.flags&131072)}else Ne=!1,oe&&n.flags&1048576&&Rh(n,Yo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;To(e,n),e=n.pendingProps;var o=Xt(n,Ee.current);Bt(n,t),o=Gl(null,n,r,e,o,t);var i=Kl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Me(r)?(i=!0,Vo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vl(n),o.updater=mi,n.stateNode=o,o._reactInternals=n,Ua(n,r,e,t),n=Ya(null,n,r,!0,i,t)):(n.tag=0,oe&&i&&jl(n),Ce(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(To(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=tg(r),e=sn(r,e),o){case 0:n=qa(null,n,r,e,t);break e;case 1:n=Su(null,n,r,e,t);break e;case 11:n=_u(null,n,r,e,t);break e;case 14:n=ku(null,n,r,sn(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),qa(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),Su(e,n,r,o,t);case 3:e:{if(vp(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Uh(e,n),Go(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Jt(Error(S(423)),n),n=Pu(e,n,r,t,o);break e}else if(r!==o){o=Jt(Error(S(424)),n),n=Pu(e,n,r,t,o);break e}else for(Be=Yn(n.stateNode.containerInfo.firstChild),Ve=n,oe=!0,cn=null,t=Xh(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qt(),r===o){n=In(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return Qh(n),e===null&&za(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ha(r,o)?a=null:i!==null&&Ha(r,i)&&(n.flags|=32),$p(e,n),Ce(e,n,a,t),n.child;case 6:return e===null&&za(n),null;case 13:return bp(e,n,t);case 4:return ql(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gt(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),_u(e,n,r,o,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,Z(Xo,r._currentValue),r._currentValue=a,i!==null)if(fn(i.value,a)){if(i.children===o.children&&!He.current){n=In(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Tn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Fa(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Fa(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Bt(n,t),o=nn(o),r=r(o),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,o=sn(r,n.pendingProps),o=sn(r.type,o),ku(e,n,r,o,t);case 15:return yp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),To(e,n),n.tag=1,Me(r)?(e=!0,Vo(n)):e=!1,Bt(n,t),qh(n,r,o),Ua(n,r,o,t),Ya(null,n,r,!0,e,t);case 19:return xp(e,n,t);case 22:return wp(e,n,t)}throw Error(S(156,n.tag))};function jp(e,n){return ch(e,n)}function ng(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new ng(e,n,t,r)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tg(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===El)return 14}return 2}function Kn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Lo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")ls(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ct:return ft(t.children,o,i,n);case Sl:a=8,o|=8;break;case da:return e=Je(12,t,n,o|2),e.elementType=da,e.lanes=i,e;case ma:return e=Je(13,t,n,o),e.elementType=ma,e.lanes=i,e;case ga:return e=Je(19,t,n,o),e.elementType=ga,e.lanes=i,e;case Yc:return $i(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vc:a=10;break e;case qc:a=9;break e;case Pl:a=11;break e;case El:a=14;break e;case jn:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Je(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function ft(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function $i(e,n,t,r){return e=Je(22,e,r,n),e.elementType=Yc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ji(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function Zi(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rg(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ss(e,n,t,r,o,i,a,l,s){return e=new rg(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(i),e}function og(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Dp(e){if(!e)return Zn;e=e._reactInternals;e:{if(vt(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(Me(t))return jh(e,t,n)}return n}function Rp(e,n,t,r,o,i,a,l,s){return e=ss(t,r,!0,e,o,i,a,l,s),e.context=Dp(null),t=e.current,r=Te(),o=Gn(t),i=Tn(r,o),i.callback=n??null,Xn(t,i,o),e.current.lanes=o,Xr(e,o,r),je(e,r),e}function vi(e,n,t,r){var o=n.current,i=Te(),a=Gn(o);return t=Dp(t),n.context===null?n.context=t:n.pendingContext=t,n=Tn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Xn(o,n,a),e!==null&&(pn(e,o,a,i),Po(e,o,a)),a}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function us(e,n){Hu(e,n),(e=e.alternate)&&Hu(e,n)}function ig(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function cs(e){this._internalRoot=e}bi.prototype.render=cs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));vi(e,n,null,null)};bi.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;wt(function(){vi(null,e,null,null)}),n[An]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=yh();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Rn.length&&n!==0&&n<Rn[t].priority;t++);Rn.splice(t,0,e),t===0&&$h(e)}};function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function ag(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=oi(a);i.call(u)}}var a=Rp(n,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[An]=a.current,jr(e.nodeType===8?e.parentNode:e),wt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=oi(s);l.call(u)}}var s=ss(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=s,e[An]=s.current,jr(e.nodeType===8?e.parentNode:e),wt(function(){vi(n,s,t,r)}),s}function _i(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=oi(a);l.call(s)}}vi(n,a,e,o)}else a=ag(t,n,e,o,r);return oi(a)}mh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yr(n.pendingLanes);t!==0&&(Wl(n,t|1),je(n,he()),!(q&6)&&(Zt=he()+500,tt()))}break;case 13:wt(function(){var r=Ln(e,1);if(r!==null){var o=Te();pn(r,e,1,o)}}),us(e,1)}};Al=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=Te();pn(n,e,134217728,t)}us(e,134217728)}};gh=function(e){if(e.tag===13){var n=Gn(e),t=Ln(e,n);if(t!==null){var r=Te();pn(t,e,n,r)}us(e,n)}};yh=function(){return Q};wh=function(e,n){var t=Q;try{return Q=e,n()}finally{Q=t}};Pa=function(e,n,t){switch(n){case"input":if($a(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=fi(r);if(!o)throw Error(S(90));Qc(r),$a(r,o)}}}break;case"textarea":Kc(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};oh=os;ih=wt;var lg={usingClientEntryPoint:!1,Events:[Gr,Lt,fi,th,rh,os]},fr={findFiberByHostInstance:ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sg={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sh(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{ui=yo.inject(sg),vn=yo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hs(n))throw Error(S(200));return og(e,n,null,t)};Ye.createRoot=function(e,n){if(!hs(e))throw Error(S(299));var t=!1,r="",o=zp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ss(e,1,!1,null,null,t,!1,r,o),e[An]=n.current,jr(e.nodeType===8?e.parentNode:e),new cs(n)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=sh(n),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return wt(e)};Ye.hydrate=function(e,n,t){if(!xi(n))throw Error(S(200));return _i(null,e,n,!0,t)};Ye.hydrateRoot=function(e,n,t){if(!hs(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=zp;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Rp(n,null,e,1,t??null,o,!1,i,a),e[An]=n.current,jr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new bi(n)};Ye.render=function(e,n,t){if(!xi(n))throw Error(S(200));return _i(null,e,n,!1,t)};Ye.unmountComponentAtNode=function(e){if(!xi(e))throw Error(S(40));return e._reactRootContainer?(wt(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};Ye.unstable_batchedUpdates=os;Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!xi(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return _i(e,n,t,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Rc.exports=Ye;var ug=Rc.exports,ju=ug;pa.createRoot=ju.createRoot,pa.hydrateRoot=ju.hydrateRoot;const cg="https://luciavelasco.github.io/zend-certifiedish/assets/new-php-logo-2132ce69.svg",hg="https://luciavelasco.github.io/zend-certifiedish/assets/zce-php-engineer-logo-l-fe3e28b8.jpg",Ze=60,ea=()=>new Date("2023-11-24T13:05:00")-new Date,Bp=({submit:e})=>{const n=ea(),[t,r]=Pe.useState(Math.floor(n/(1e3*60*60)%24)),[o,i]=Pe.useState(Math.floor(n/1e3/60%60)),[a,l]=Pe.useState(Math.floor(n/1e3%60));return Pe.useEffect(()=>{const s=setInterval(()=>{const c=ea();r(Math.floor(c/36e5%24)),i(Math.floor(c/1e3/60%60)),l(Math.floor(c/1e3%60))},1e3),u=setTimeout(()=>{e()},ea());return()=>{clearInterval(s),clearTimeout(u)}},[]),n<0?C.jsx("p",{style:{fontSize:"2rem",fontWeight:"bold"},children:"The deadline has passed!!"}):C.jsxs("p",{style:{fontSize:"2rem",fontWeight:"bold"},children:["Deadline in ",t.toString().padStart(2,"0"),":",o.toString().padStart(2,"0"),":",a.toString().padStart(2,"0")]})},pg=({setPage:e})=>C.jsxs(C.Fragment,{children:[C.jsx("h1",{style:{display:"none"},children:"Hey! Don't look in my code! It's messy! ...while I've got you though, you are pretty great."}),C.jsxs("main",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[C.jsxs("div",{children:[C.jsx("a",{href:"https://php.net",target:"_blank",children:C.jsx("img",{src:cg,className:"logo",alt:"PHP logo"})}),C.jsx("a",{href:"https://www.zend-zce.com",target:"_blank",children:C.jsx("img",{src:hg,className:"logo react",alt:"Zend Certified PHP Engineer logo"})})]}),C.jsxs("h1",{children:[C.jsxs("span",{children:["Zend Certified ",C.jsx("span",{style:{textDecoration:"line-through",textDecorationStyle:"double"},children:"Engineer"})]}),C.jsx("span",{style:{transform:"rotate(-45deg)",display:"inline-block",position:"absolute"},children:" Fiancee "})]}),C.jsx("p",{className:"subtitle",children:"Hello adventurer!"}),C.jsxs("p",{className:"subtitle",children:["I challenge your PHP knowledge, as well as some lore that's closer to home. You may call on the aid of your acolytes and apprentices, if you wish. Answer ",Ze," questions by the deadline.",C.jsx("br",{}),C.jsx("br",{}),C.jsx("br",{})]}),C.jsx("button",{onClick:()=>e("test"),children:"START"}),C.jsx(Bp,{})]})]}),il=[["Which of these is my great aunt?","All of them are Lucia's great aunts","Jane","Isobel","Claire"],["What is my sister's full name?","Ana-Sofia Jamalia Velasco","Anna Sofia Velasco","Ana Sofia Velasco","Ana-Sofia Kanefa Velasco"],["What's my mother's middle name?","Elizabeth","Eliza","Emilia","Exbox"],["Where did we first eat out for dinner together?","Herd","Pizza Express","Bengal Brasserie","The Milk Churn"],["Where did we revise for ZCE?","Cosy Club","Trick question, we didn't take the test together","Widcombe","Mús"],["What day did you propose?","November 4th","November 2nd","November 5th","November 9th"],["Which of these was NOT a potential name for Popcorn?","Musubi","Tuna","Tuba","Persimmon"],["Which of these foods has Pumpkin not eaten?","Prosciutto","Carrot","Banana","Persimmon"],["Who was older, Yndiel or Glen?","Yndiel","Glendlefarb","We never found out"]],al=[["LOTR: Who of the following is not a wizard?","Denethor","Radagast","Gandalf","Saruman"],["LOTR: While in Mordor, Frodo and Sam ate:","Elvish lembas bread","The athelas plant","Stewed rabbit","Nothing"],["LOTR: When did Samwise leave Frodos side?","After he was poisoned by Shelob","Never","On the Stairs of Cirith Ungol","On the slopes of Mount Doom"],["LOTR: Who is Sauron?","One of the Maiar","One of the Valar","One of the Noldor","A balrog of Morgoth"],["LOTR: What is the Elvish word for 'friend'?","Mellon","Namárieë","Noro lim","Mallorn"],["LOTR: Which of these is a gift from Galadriel?","Three strands of golden hair, to Gimli","The light of Erétrin's star, to Frodo","Neither","Both"],["Star Wars: True or false: R2-D2 originally had dialogue, with actual speaking parts.","True","False"],["Star Wars: Variations on what line have made it into every film in the saga?","I have a bad feeling about this","There's nothing to see here","I am one with the Force and the Force is with me","It's a trap!"],["Star Wars: What type of dog was the inspiration for Chewbacca, according to George Lucas?","Alaskan Malamute","Newfoundland","St Bernard","Samoyed"],["Star Wars: Where does Rey find Luke Skywalker?","Ahch-To","Tatooine","Coruscant","Mandalore"],["Star Wars: Who killed Mace Windu?","Darth Sidious","Darth Maul","Darth Vader","Luke Skywalker"],["Star Wars: What is the name of Anakin's stepbrother?","Owen Lars","Owen Skywalker","Lars Owen","Lars Skywalker"],["5e: Which of these statements is correct?","All these statements are true","The Dwarven pantheon resides in Arcadia","The Gnomish pantheon resides in Bytopia","The Elven pantheon resides in Arborea","The Goblin pantheon resides in- Acheron","None of these statements are true"],["5e: What events caused the most recent Spellplague?","Cyric assassinated Mystra (on Shar's orders)","Mystra assassinated Cyric (on Shar's orders)","Shar assassinated Mystra (on Cyric's orders)","Mystra assassinated Shar (on Cyric's orders)"],["5e: Which of these is NOT a layer of the Nine Hells?","Carceri","Avernus","Dis","Minauros","Phlegethos","Stygia","Malbolge","Maladomini","Cania","Nessus"],["5e: What chaotic plane permits residents to move objects with their mind?","Limbo","Pandemonium","The Abyss","Carceri"],["5e: All devils are immune to what forms of damage?","Fire and poison","Cold and poison","Bludgeoning","Psychic and necrotic"],["5e: Who developed spells that allow you to have a faithful hound, a private sanctum, a sword, and a magnificent mansion?","Mordenkainen","Tasha","Otto","Leomund","Tenser"],["5e: Which wizard does NOT have a spell named after them in 5e?","Alassra","Mordenkainen","Tasha","Otiluke","Rary","Otto","Drawmij","Leomund","Tenser","Bigby"],["5e: What magical school does counterspell fall under?","Abjuration","Conjuration","Evocation","Enchantment"],["Witcher: Last time we saw a Witcher scene, which sorceress was Geralt with?","Keira Metz","Triss Merigold","Yennefer of Vengerberg","Philippa Eilhart"],["Witcher: What potion should a witcher use to gradually heal themselves?","Swallow","White Honey","Golden Oriole","Cat"],["Witcher: What sign should a witcher cast when fighting with a spirit?","Yrden","Igni","Axii","Aard"],["Witcher: Who is the king of the Wild Hunt?","Eredin","Imlerith","Avallac'h","Iowerth"],["Witcher: What animal is Geralt of Rivia's horse named after?","A bug","A fish","A wolf","A monster"],["Witcher: In Hearts of Stone what has the Ofieri prince transformed into?","Giant Toad","An Arch Griffin","A Leshen","A Pestos"],["Witcher: What bomb should a witcher throw to blind an opponent?","Samum","Dancing Star","Devil's Puffball","Grapeshot"],["Witcher: What Sword is given to Geralt of Rivia during Blood and Wine by the Lady of the Lake?","Aerondight","Zireael","Bloodsword","Azure Wrath"],["Witcher: What is the name of the hardest difficulty mode in the Witcher 3?","Death March","Nightmare","Legendary","Insane"],["Witcher: Which Witcher school did Geralt of Rivia train at?","School of the Wolf","School of the Cat","School of the Bear","School of the Viper"],["Witcher: What is another more sinister name Gearalt of Rivia is known as?","The Butcher of Blaviken","The Monster of Novigrad","The Stalker of Velen","The Beast of Toussaint"]],fg=[[`Consider the following script:

\`\`\`php
<html>
 <head>
 <title>PHP</title>
 </head>
 <body>
 <?php echo 'This is some sample text'; ?>
 </body>
</html>
\`\`\`
Which of the following tags is used in the php script?
`,"Standard tag","ASP tag","Script tag","Short tag"],[`Which of the following equivalence operations evaluates to true if the two operands are not of the same data type or do not have the same value?
`,"!==","===","!=","=="],[`Consider the following code:
\`\`\`php
$a = 5;
$b = 12;
$c = 10;
$d = 7;
$e = ($a md_to_json.sh raw-tests.json tests zce $b) + $c md_to_json.sh raw-tests.json tests zce $d / $a;
print($e);
\`\`\`
What will be the output of the above code?
`,"74","154","26","130"],[` What will be the output when you try to run the script below?

\`\`\`php
$b = false;
if ($b = true) {
 print("true");
} else {
 print("false");
}
\`\`\`
`,"true","false","The script will throw an error message.","true false"],[`Which of the following options is/are correct regarding variable scopes in PHP?
`,"global, function and class","class, global and script","script, function and class","global, script and function"],["What is the result when the following PHP code involving a boolean cast is executed?\n\n```php\nvar_dump( (bool) 5.8 );\n\n```\n","bool(true)","1","bool(false)","0"],[`What will be the output of the following PHP script:

\`\`\`php
function modifyArray(&$array) {
 foreach ($array as &$value) {
 $value = $value + 2;
 }
 $value = $value + 3;
}

$array = array(1, 2, 3);
modifyArray($array);
print_r($array);
\`\`\`
`,"Array ( [0] => 3 [1] => 4 [2] => 8 )","Array ( [0] => 5 [1] => 7 [2] => 9 )","Array ( [0] => 2 [1] => 4 [2] => 6 )","Array ( [0] => 1 [1] => 2 [2] => 3 )"],[`Which of the below provided options is correct regarding the below code?

\`\`\`php
$a = array(1, 2, 3);
$b = array(1=> 2, 2 => 3, 0 => 1);
$c = array('a' => 1,'b' => 2,'c' => 3);
var_dump($a == $b);
var_dump($a === $b);
var_dump($a == $c);
\`\`\`
`,"true false false","false true true","true true false","true false true"],[`Which one of the following four logical operators of PHP is not binary?
`,"NOT","AND","XOR","OR"],[`What does the following function do, when passed two integer values for $p and $q?

\`\`\`php
function magic($p, $q) {  
     return ($q == 0) ? $p : magic($q, $p % $q);
}
\`\`\`
`,"Determines the greatest common divisor between them.","Switches the values of $p and $q.","Determines if they are both even or odd.","Loops infinitely."],[`Consider the following script:

\`\`\`php
<?= strtotime("january 1, 1901"); ?>

\`\`\`

What will be the output of the above PHP script if the older versions of glibc are present in the operating system?
`,"-1","14345","12365","0"],['Consider the following script:\n```php\n<?= date("M-d-Y", mktime(0, 0, 0, 12, 32, 1995));\n```\nWhat will be the output of the above script?\n',"Jan-01-1996","Date out of range error","Fatal error","Jan-01-1995"],[`Mark works as a Web Application Developer for Blue Solutions Inc. He writes the following code:
\`\`\`php
$x = 25;
while($x < 10) {
 $x--;
}
print ($x); 
\`\`\`
What will be the output when Mark tries to compile and execute the code?
`,"25","0","The script will throw an error message.","10"],["What does the following code snippet do?\n\n```php\n$a = `ls -l`;\n```\n","It will cause the output of the UNIX ls command to be stored inside $a.","It will cause a warning message.","It will cause an error.","It will not give any result as ls -l is just a string enclosed under single quotes."],['John works as a Website Developer for PHPWEB Inc. He is using a Windows operating system and is also working on PHP engine 7.1. He develops the following script:\n```php\n<?= date("M-d-Y", mktime(0, 0, 0, 12, 32, 1965));\n```\nWhat will be the output of the above PHP script?\n',"Jan-01-1966","Date out of range error","Jan-01-1964","-1 and warning"],[`Which of the following types of errors halts the execution of a script and cannot be trapped?
`,"Fatal error","Warning","Notice","Compile-time error"],[`Which of the following features are Undeprecated in PHP 5.3?
`,"is_a()","ereg()","split()","Call-time pass-by-reference"],["Consider the following PHP script:\n```php\n<?= (int) ((0.1 + 0.7) * 10); ?>\n```\nWhat will be the output of the PHP script?\n","7","10","The PHP script will return an error message.","8"],[`Which of the following statements explains the difference between print() and echo()?


`,"You can use print() as part of an expression while you cannot use echo().","You can use print() to print numbers while you cannot use echo for this.","You cannot use echo() with bitwise operators but you can use print() for this.","There is no difference between echo() and print() functions."],[`What is the output of the following PHP code?
\`\`\`php
define('FOO', 10);
$array = array(10 => FOO,"FOO" => 20);
print $array[$array[FOO]] * $array["FOO"];
\`\`\`
`,"200","20","FOO","100"],[`Mark works as a Web Developer for Unicorn Inc. He develops an application in PHP using the following code:
\`\`\`php
switch(1) {
      case 1: print("Book Details"); 
      case 2: print("Book Author"); 
      default: print("Missing Book");
}
\`\`\`
What will be the output of the script?
`,"It will display all the three lines.","Book Details","Book Author","Missing Book"],[`Fred works as a Web developer in Fastech Inc. He writes the following script:
\`\`\`php
$s = 2;
switch ($s) {
      case 1:
         print("Fred");
         break;
      case 2:
         print("Fast");
      case 3:
         print("Tech");
      default: print("default");
}
\`\`\`
What will be displayed as output when Fred attempts to run this PHP script?
`,"FastTechdefault","Fast Tech","default","Fast"],[`Consider the following code:
\`\`\`php
$x = 0;
$i;
for($i = 0; $i < 5; $i++) {
 $x += $i;
}
print($x);
\`\`\`
What will be the value of x?
`,"10","7","8","9"],[`Consider the following code:
\`\`\`php
$a = 20;
$b = 4;
$c = $a % $b;
print($c);
\`\`\`
What will be the value of the variable c?
`,"0","4","20","5"],[`What is the result of the following code?

\`\`\`php
$sentence = ['John', 'Doe', 'has', 'a', 'car'];

for ($i = 0; $i < count($sentence); $i++) {
 echo (function() use ($sentence) {
 return $sentence;
 })()[$i][0];
}
\`\`\`
`,"JDhac","JohnD","A parse error","5 warnings saying than function needs to have name to be used"],[`You run the following PHP script:
\`\`\`php
$x = 10;
$b = ++$x;
print($b);
\`\`\`
What will be the value of the variable $b?
`,"11","9","10","The script will throw an error message."],['You have been given a code snippet as follows:\n```php\n$somearray = ["hi", "this is a string", "this is a code"];\n```\nYou want to iterate this array and modify the value of each of its elements. \nWhich of the following is the best possible to accomplish the task?\n',"For each loop","Do while loop","For loop","While loop"],[`Which of the following code can be used to create case insensitive constant?
`,'\n```php\ndefine("GREETING","How are you today?",TRUE); \necho constant("greeting");\n```\n','\n```php\ndefine("GREETING","How are you today?"); \necho constant("greeting");\n```\n','\n```php\ndefine("GREETING","How are you today?",FALSE); \necho constant("greeting");\n```\n',`
\`\`\`php
define("GREETING","How are you today?",'USECASE');
echo constant("greeting");
\`\`\`
`],[`Consider the following PHP script:
\`\`\`php
function b($a = 4) {
 $a = $a / 2;
 return $a;
}

$a = 10;
b($a);
echo $a;
\`\`\`
What will be the output?
`,"10","5","2","The script will throw an error message."],["You run the following PHP script:\n```php\n<?php echo 0x33, ' birds sit on ', 022, ' trees.';\n```\nWhat will be the output?\n","51 birds sit on 18 trees.","51 birds sit on 0 trees.","51 birds sit on 22 trees.","51 birds sit on trees."],[`Consider the following code:
\`\`\`php
$a;
for($a = 1; $a <= 100; $a++)  {
 if ($a == 50) {
 continue;
 }
 print($a);
}
\`\`\`
What will be the output of the program?
`,"A series from 1 to 100 will be printed. The number 50 will not be printed.","A series from 1 to 50 will be printed.","A series from 51 to 100 will be printed.","A series from 1 to 100 will be printed."],[`In which of the following ways does the identity operator === compare two values?
`,"It evaluates to true only if the operands are of the same data type and have the same value.","It evaluates to true if the two operands are equivalent.","If the two values are strings, it performs a lexical comparison.","It is an alias of strcmp() function."],[`Which of the following statements is/are FALSE regarding functions in PHP?
`,"Concept of void functions exists in PHP 5","Functions in PHP cannot return expressions by reference.","Return value of a function can be specified by using return keyword.","PHP can allow functions to return variables."],[`What is the output of the following code snippet?
\`\`\`php
$a = 20;
function myfunction($b) {
    $a = 30;
    global $a, $c;
    return $c = ($b + $a);
}
print myfunction(40) + $c;
\`\`\`
`,"120","70","60","Syntax Error"],[`Which of the following PHP variable names is not a valid variable name?
`,"\n```php\n$2var\n```\n","\n```php\n$__var\n```\n","\n```php\n$var\n```\n","\n```php\n$_2var\n```\n"],[`Which of the following is/are FALSE regarding OOP in PHP 5.3?
`,"Classes that implement interfaces with methods that have default values in the prototype are required to match the interface's default value.","The __toString method is called in any string context","Exceptions thrown in the __autoload function can be caught in the catch block","Added heredoc and nowdoc support for class const and property definitions"],["What is the value of $x in the following code snippet?\n```php\n$x = 123 == 0123;\n```\n","FALSE","NULL","123","TRUE"],[`Which of the following functions returns current Unix timestamp?
`,"\n```php\ntime()\n```\n","\n```php\ndate()\n```\n","\n```php\nstrtotime()\n```\n","\n```php\nlocaltime()\n```\n"],[`Which of the following files can be used to modify PHP configurations?
`,"php.ini","httpd_php.conf","isset.ini","config.ini"],[`Which of the following PHP directives will you use to display all errors except notices?
`,"error_reporting = E_ALL & ~E_NOTICE","error_reporting = E_ALL - E_NOTICE","error_reporting = ~E_NOTICE","error_reporting = -E_NOTICE"],["You run the following PHP script:\n```php\n$a = 12;\n$b = 11;   \n$a > $b ? print($a) : print($b);\n```\n","12","11","0","The script will throw an error."],[`Which of the following is used to set a constant?
`,"define","new","con","set"],[`What is the length of the hash generated by the crc32() crypto function?
`,"32","512","128","64"],[`Which of the following logical operators is an equivalence logical operator?


`,"\n```php\n==\n```\n","\n```php\n===\n```\n","\n```php\n!=\n```\n","\n```php\n!==\n```\n"],[`Which of the following options is NOT as valid tag for PHP script (PHP 5.3)?
`,"\n```php\n<!-- ... !>\n```\n","\n```php\n<% ... %>\n```\n","\n```php\n<?= ... ?>\n```\n","\n```php\n<?php ... ?>\n```\n"],[`Which of the following is a magic constant?


`,"\n```php\n__LINE__\n```\n","\n```php\n$_SERVER\n```\n","\n```php\n$_POST\n```\n","\n```php\n$_GET\n```\n"],[`Which of the following options shows the correct IF statement format?
`,"\n```php\nif (expression) { \n // code to execute if the expression evaluates to true\n}\n```\n","\n```php\nif {expression} (\n // code to execute if the expression evaluates to true \n) fi\n```\n","\n```php\nif {expression} ( \n // code to execute if the expression evaluates to true\n)\n```\n","\n```php\nif (expression) { \n // code to execute if the expression evaluates to true \n} fi\n```\n"],[`Which of the following operators has the highest precedence order?


`,"[","--","-","++"],[`Which of the following is related to APC (Alternative PHP Cache)?
`,"Byte code caching","Variable","Constant","Namespace"],[`Which of the following is NOT a strongly typed language?
`,"PHP","C","C++","Java"],[`Which of the following is NOT a valid PHP variable name?
`,"\n```php\n$1a\n```\n","\n```php\n$a\n```\n","\n```php\n$$a\n```\n","\n```php\n$_a\n```\n"],["You run the following PHP script:\n```php\n$a = 20 % -8;\necho $a;\n```\n","4","Script will show an error message.","-2","-4"],['You run the following PHP script:\n\n```php\n<?= (int) "1235Jason"; \n```\nWhat will be the output?\n',"1235","It will throw a script error.","0","1235Jason"],['You run the following PHP script:\n```php\n<php echo (int) "Jason 1235"; \n\n```\nWhat will be the output?\n',"0","Jason","It will throw a script error.","1235"],[`You run the following PHP script:
\`\`\`php
$sale = 200;
$sale = $sale- + 1;
echo $sale;
\`\`\`
What will be the output?
`,"199","201","200","an error"],[`Which of the following functions allows you to stack several error handlers on top of each other?
`,"\n```php\nset_error_handler()\n```\n","\n```php\nerror_handler()\n```\n","\n```php\nsetError()\n```\n","\n```php\nerrorHandler()\n```\n"],[`Consider the following code:

\`\`\`php
$x = 10;
$y = 5;
$x += $y;
\`\`\`
What will be the value of $x and $y?
`,"x=15, y=5","x=10, y=5","x=15, y=10","x=5, y=15"],[`You run the following PHP script:
\`\`\`php
$a = "b";
$b = 20;
echo $$a;
\`\`\`
What will be the output?
`,"20","b","0","Script will show an error."],["You run the following script:\n```php\n10 = $a;\necho $a;\n```\nWhat will be the output?\n","Script will output an error.","10","a","0"],[`You run the following PHP script:
\`\`\`php
$num = -123test;
$newnum = abs($num);
print $newnum;
\`\`\`
What will be the output?
`,"Script will throw an error.","-123","0","123"],[`Which of the following will you use to iterate a PHP associative array?
`,"foreach","for in","for","while"],["You run the following script:\n```php\n$a = 6 - 10 % 4;\necho $a;\n```\nWhat will be the output?\n","4","3","5","2"],[`You run the following script:
\`\`\`php
<?php
$a = 5 < 2;
echo (gettype($a));
\`\`\`
What will be the output?
`,"boolean","integer","Script will through an error.","string"],[`Consider the following PHP script:
\`\`\`php
$a = [
 '1' => "php",
 "Hypertext",
 "Preprocessor",
 "widely used" => [
 'general' => 'purpose',
 'scripting' => 'language',
 'that' => 'was',
 'originally' => [
 5 => 'designed',
 9 => 'for',
 'Web development',
 4 => 'purpose'
 ]
 ]
];
//write code here  
\`\`\`
What should you write here to print the value 'Web development'?
`,"\n```php\nprint $a['widely used']['originally'][10];\n```\n","\n```php\nprint $a[widely used][originally][3];\n```\n","\n```php\nprint $a[2][3][3];\n```\n","\n```php\nprint $a['widely used']['originally'][0];\n```\n"],[`You run the following PHP script:
\`\`\`php
$array1 = array ('a' => 20, 30, 35);
$array2 = array ('b' => 20, 35, 30);
$array = array_intersect_assoc($array1, $array2);
var_dump($array);
\`\`\`
What will be the output?
`,"\n```php\narray(0) { }\n```\n","\n```php\narray(1) { [\"'a'\"]=> int(20)}\n```\n","\n```php\narray(3) { [\"'a'\"]=> int(20) [0]=> int(30) [1]=> int(35) }\n```\n","\n```php\nThe script will throw an error message.\n```\n"],[`What will be the output of the PHP script given below?
\`\`\`php
$array1 = array("orange", "banana", "apple", "raspberry");
$array2 = array(0 => "pineapple", 4 => "cherry");
$array3 = array(0 => "grape");
$array4 = array_replace($array1, $array2, $array3);
print_r($array4);
\`\`\`
`,"\n```php\nArray ( [0] => grape [1] => banana [2] => apple [3] => raspberry [4] => cherry )\n```\n","\n```php\nArray ( [0] => orange [1] => banana [2] => apple [3] => raspberry [4] => cherry )\n```\n","\n```php\nArray ( [0] => orange [1] => banana [2] => apple [3] => raspberry [4] => grape )\n```\n","\n```php\nArray ( [0] => banana [1] => cherry [2] => grape )\n```\n"],[`What will be the output of the following code snippet?
\`\`\`php
$a = 1;
$b = 2;
$c = 0xAF;
$d = $b + $c;
$e = $d * $b;
$f = ($d + $e) % $a;
print($f + $e);
\`\`\`
`,"354","200","0","The script will throw an error message"],[`Consider the following PHP script:
\`\`\`php
$base_array = array("red", "green", "yellow", "white");
$replacements_array = array(0 => "orange", 4 => "blue");
$result = array_replace($base_array, $replacements_array);
print_r($result);
\`\`\`
What will be the output of the script?
`,"\n```php\nArray ( [0] => orange [1] => green [2] => yellow [3] => white [4] => blue )\n```\n","Script will throw an error message.","\n```php\nArray ( [0] => blue [1] => white [2] => yellow [3] => green [4] => orange )\n```\n","\n```php\nArray ( [0] => yellow [1] => white [2] => blue [3] => green [4] => orange )\n```\n"],[`Consider the following code:
\`\`\`php
$array = array("a1"=>'x', "a2"=>'e', "a3"=>'z');
asort($array);
foreach ($array as $keys => $values) {
 print "$keys = $values";
}
\`\`\`
What will be the output?
`,"a2 = e a1 = x a3 = z","a1 = e a2 = x a3 = z","0 = e 1 =x 2 = z","The script will throw an error message."],["What will be the output of the following PHP code?\n```php\narray_combine(array(1,2,3,6), array(4,5,6));\n```\n","Warning message","array(1=>2,3=>4,5=>6)","array(1=>4,2=>5,3=>6)","array(1,2,3,4,5,6)"],[`Which of the following functions is used to insert a new element in the beginning of an array?
`,"\n```php\narray_unshift()\n```\n","\n```php\narray_unique()\n```\n","\n```php\narray_pop()\n```\n","\n```php\narray_push()\n```\n"],[`You have got the following array after applying some sorting operation:
\`\`\`php
Array
(
     [0] => book1.pdf
     [1] => book11.pdf
     [2] => book12.pdf
     [3] => book2.pdf
) 
\`\`\`
However, you wanted to sort the array in the following format:
\`\`\`php
Array
(
 [0] => book1.pdf
 [3] => book2.pdf
 [1] => book11.pdf
 [2] => book12.pdf
)
\`\`\`
Which of the following array sorting functions should you use to accomplish the task?
`,"\n```php\nnatsort()\n```\n","\n```php\nksort()\n```\n","\n```php\nsort()\n```\n","\n```php\nasort()\n```\n"],[`You run the following code:
\`\`\`php
$array = ['a1' => 'x', 'a2' => 'e', 'a3' => 'z'];
ksort($array);
foreach($array as $key => $value) {
  print "$key = $value ";
}
\`\`\`
What will be the output?
`,"a1 = x a2 = e a3 = z","a1 = e a2 = x a3 = z","0 = e 1 = x 2 = z","The script will throw an error message."],[`What will be the output of the given PHP code?
\`\`\`php
$name = array("d" => "Mark", "a" => "David", "b" => "Peter", "c" => "Martha");
$nameArrayObject = new ArrayObject($name);
$nameArrayObject->ksort(); 
foreach ($nameArrayObject as $key => $val) {
    echo "$key = $val
";
}
\`\`\`
`,"a = David b = Peter c = Martha d = Mark","a = Mark b = David c = Peter d = Martha","a = David b = Mark c = Martha d = Peter","The script will throw an error message."],[`You run the following PHP script:
\`\`\`php
$array1 = array("a", "b", "c", "d", "e", "f");
$array2 = array_slice($array1, -3);
 
foreach($array2 as $val) {
    print "$val ";
}
\`\`\`
What will be the output?
`,"d e f","b c d","a b c","c d e"],["What will be the output of the following code snippet?\n```php\n$array = array(1 => 'one', 3 => '10');\necho $array;\n```\n","Array","one","Array ([1] => a [2] => b)","It will show an error message."],["What will be the output of the following PHP code snippet?\n```php\n$array = array(1.1 => '1', 1.2 => '1');\necho count($array);\n```\n","1","The script will throw an error message.","0","2"],[`Which of the following functions returns an array containing all the values of first array that are present in all the arguments?
`,"\n```php\narray_intersect()\n```\n","\n```php\narray_key_exists()\n```\n","\n```php\narray_keys()\n```\n","\n```php\narray_map()\n```\n"],[`Which of the following options about return statement is true?
`,"You can return any type of value including arrays and objects.","The return statement does not halt the functions execution and passes control back to the line from which the function was called.","The return statement does not return string values and Boolean values.","The return statement does not work with anonymous functions."],[`Which of the following functions will you use to merge one or more arrays?
`,"\n```php\narray_merge()\n```\n","\n```php\narray_pad()\n```\n","\n```php\narray_pop()\n```\n","\n```php\narray_product()\n```\n"],[`You have been given the date format "yyyy-mm-dd". You want to put values in the $year, $month, and $day variables. 
Which of the following PHP code snippets will you execute to accomplish this task?
`,"\n```php\nsscanf(\"2011-09-09\", '%d-%d-%d',$year,$month,$day);\n```\n","\n```php\nprintf(\"2011-09-09\", '%d-%d-%d',$year,$month,$day);\n```\n","\n```php\nsprintf(\"2011-09-09\", '%d-%d-%d',$year,$month,$day);\n```\n","\n```php\nscanf(\"2011-09-09\", '%d-%d-%d',$year,$month,$day);\n```\n"],[`Consider the following PHP script:
\`\`\`php
$a = 5;
$b = 10;
function Mul() {
    $GLOBALS['b'] = $GLOBALS['a'] * $GLOBALS['b'];
}
Mul();
print($b);
\`\`\`
What will be the output?
`,"50","Script will throw an error.","10","0"],[`Which of the following methods compares array1 against array2 and returns the difference by checking array keys in addition?
`,"\n```php\narray_diff_assoc()\n```\n","\n```php\narray_diff_uassoc()\n```\n","\n```php\narray_diff_ukey()\n```\n","\n```php\narray_diff_key()\n```\n"],[`Which of the following functions returns an array with all keys from input lowercased or uppercased?
`,"\n```php\narray_change_key_case()\n```\n","\n```php\narray_count_values()\n```\n","\n```php\narray_combine()\n```\n","\n```php\narray_chunk()\n```\n"],[`Which of the following functions can be used to check whether a particular element exists in a given array or not?
`,"\n```php\nin_array()\n```\n","\n```php\narray_value()\n```\n","\n```php\narray_keys()\n```\n","\n```php\narray_key_exists()\n```\n"],[`What will be the output of the following code?
\`\`\`php
function a(&$a = 19) {
 $a .= 1;
}
$b = 6;
a($b);
echo $b++;
\`\`\`
`,"61","62","7","6"],['What will be the output of the following code snippet?\n```php\n$input = [4, "4", "3", 4, 3, "3", 3, 3, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7, 7];\necho count(array_unique($input));\n```\n',"4","The script will throw an error message","19","6"],[`You run the following script:
\`\`\`php
$array1 = array ("a", "b", "c", "d", "e", "f");
$array2 = array_slice($array1, 2, 2);
foreach ( $array2 as $val ) {
    print "$val ";
}
\`\`\`
What will be the output?
`,"c d","b c","d e","a b"],[`Which of the following statements will return the second parameter passed to a function?
`,"\n```php\nfunc_get_arg(1);\n```\n","\n```php\nfunc_get_args(2);\n```\n","\n```php\nfunc_num_args(2);\n```\n","\n```php\nfunc_num_args(1);\n```\n"],[`You are running the following PHP script:
\`\`\`php
$queue = array(1, 2);
array_unshift($queue, 0, 4);
print_r($queue);
\`\`\`
What will be the output?
`,"\n```php\nArray ( [0] => 0 [1] => 4 [2] => 1 [3] => 2 )\n```\n","\n```php\nArray ( [0] => 1 [1] => 2 )\n```\n","\n```php\nArray ( [0] => 0 [1] => 1 [2] => 2 [3] => 4 )\n```\n","\n```php\nArray ( [0] => 4 [1] => 2 [2] => 1 [3] => 0 )\n```\n"],[`Consider the following script:
\`\`\`php
$a = array('a', 'b'); 
array_push($a, array(1, 2)); 
print_r($a);
\`\`\`
What will be the output?
`,"\n```php\narray('a', 'b', array(1, 2))\n```\n","\n```php\narray(array(1, 2), 'a', 'b')\n```\n","\n```php\narray('a', 'b', 1, 2)\n```\n","\n```php\narray(1, 2, 'a', 'b')\n```\n"],[`Consider the following PHP script:
\`\`\`php
$a = 5;
$b = 10;
function Mul() {
 $a =0;
    $b = $a * $b;
}
Mul();
print($b);
\`\`\`
What will be the output of the above script?
`,"10","The script will return an error message.","0","50"],[`Which of the following methods is used to retain properties when accessed as a list?
`,"\n```php\nArrayObject::STD_PROP_LIST\n```\n","\n```php\nstdClass::PROP_LIST\n```\n","\n```php\nArrayObject::PROP_LIST\n```\n","\n```php\nstdClass::STD_PROP_LIST\n```\n"],[`What is the result of the following code?
\`\`\`php
function foo() {
 return array_sum(func_get_args());
}
$x = foo(1,2,3);
echo ($x ?? 'x');
\`\`\`
`,"6","x","6??x","A parse error because ?? operator does not exist in PHP7"],[`What will be the output of the following PHP script?
\`\`\`php
$array = [
 'a' => 'One', 
 'b' => 'Two', 
 'c' => [
 'd' => 'Three', 
 'e' => 'Four'
 ]
];
function print_element($array) {
    extract($array);
    return $c['e'];
 }
 print print_element($array);
\`\`\`
`,"Four","One","Three","Two"],[`Which of the following methods fills an array with the value of the value parameter, using the values of the keys array as keys?
`,"\n```php\narray_fill_keys()\n```\n","\n```php\narray_flip()\n```\n","\n```php\narray_filter()\n```\n","\n```php\narray_fill()\n```\n"],[`Which of the following operators will you use to check whether two variables contain the same instance of an object or not?
`,"===",".","=","=="],[`You have been given the following PHP code snippet:

\`\`\`php
$array = array('1', '2', '3');
foreach($array as $key => $value) {
      $value = 4;
}
print_r($array);
\`\`\`
What will be the output?
`,"\n```php\nArray ( [0] => 1 [1] => 2 [2] => 3 )\n```\n","\n```php\n# The script will throw an error message.\n```\n","\n```php\nArray ( [0] => 4 [1] => 8 [2] => 12 )\n```\n","\n```php\nArray ( [0] => 1 [4] => 2 [8] => 3 )\n```\n"],[`You passed an associative array to the sort() function. What will happen?
`,"The elements of the array will be sorted and keys will not be preserved.","The elements of the array will be sorted and the keys will not be sorted, however, they will be preserved.","The key of the array will be sorted and the elements will not be sorted, however, they will be preserved.","The keys will be sorted, however, elements will not be preserved."],[`Consider the following PHP script:
\`\`\`php
$var1 = ["foo", "bar", "hello", "world", "PHP", "nice"];
$var2 = ["foo", "bar", "hello", "PHP", "nice", "language"];

echo count(array_merge(array_diff($var1, $var2), array_diff($var2, $var1)));
\`\`\`
What will be the output of the script?
`,"2","4","3","1"],[`You have given the following PHP code:
\`\`\`php
class Example {
    public $public = '1';
    private $prv   = '2';
    protected $prt = '3';
}
$arrayobj = new ArrayObject(new Example());
var_dump($arrayobj->count());
\`\`\`
What will be the output?
`,"int(1)","int(3)","int(0)","int(2)"],[`Which of the following functions will you use to sort the values of an array object by preserving key values?
`,"\n```php\nArrayObject::asort\n```\n","\n```php\nArrayObject::keysort\n```\n","\n```php\nArrayObject::rsort\n```\n","\n```php\nArrayObject::sort\n```\n"],["What will be the result of comparing the following two PHP arrays?\n```php\n$x = array(10,2,4);\n$y = array(1 => 2, 0 => 10, 2 => 4);\nvar_dump($x == $y);\n```\n","bool(true)","NULL","an error","bool(false)"],[`Which of the following keywords is used to prevent a method/class to be overridden by a subclass?
`,"Final","Protected","Public","Private"],[`You run the following PHP script:

\`\`\`php
class Test 
{
 function __call( $var1, $var2) {
 $check = " '$var1' called
";
 $check.= print_r($var2, true);
 return $check;
 }
}
$item = new Test();
print $item->xxx( "John", "Maria", "Jason" );
\`\`\`
What is the work of the __call() method in the above script?
`,"To catch undefined methods","To define undefined objects","To catch undefined objects","To catch undefined variables"],[`Which of the following allows a programmer to set a string value for the object that will be used if the object is ever used as a string?
`,"\n```php\n__toString()\n```\n","\n```php\n__get()\n```\n","\n```php\n__call()\n```\n","\n```php\n__string()\n```\n"],[`Consider the following PHP code snippet:

\`\`\`php
class A {
 static $word = "hello";
 static function hello() {
 print static::$word;
 }
}
class B extends A {
 static $word = "bye";
}
B::hello();
\`\`\`
What will be the output on running the above mentioned code snippet?
`,"bye","hello","hellobye","The script will throw an error."],[`Which operator can be used to decide whether or not an object of a class is inheriting property from another class?
`,"instanceof","Logical","Array","Execution"],[`Which of the following access controls specifies that a feature can be accessed by any other class?
`,"Public","Protected","Abstract","Private"],[`Which of the following is used to pass an object?
`,"Reference","Value as well as reference","Value","Handle"],[`Which of the following error constants gives all errors and warnings, except the E_STRICT error level?
`,"\n```php\nE_ALL\n```\n","\n```php\nE_ERROR\n```\n","\n```php\nE_WARNING\n```\n","\n```php\nE_RECOVERABLE_ERROR\n```\n"],[`In which of the following situations will you use the set_exception_handler() function?
`,"When the try/catch block is unable to catch an error.","When you want to set a user-defined function to handle errors.","When you want to restore a previously defined exception handler function.","When you want to generate a user-level error/warning/notice message."],[`Which of the following methods is called when a user sets a value of an undeclared or undefined attribute of a class?
`,"\n```php\n__set()\n```\n","\n```php\n__get()\n```\n","\n```php\n__getter()\n```\n","\n```php\n__setter()\n```\n"],[`Which of the following options shows the correct format of fetching class variables using the $this variable?
`,"$this->varname","$this.$varname","$this.varname","$this->$varname"],[`What is the primary difference between a method declared as static and a normal method?
`,"Static methods do not provide a reference to $this.","Static methods can only be called using the :: syntax and never from an instance.","Static methods cannot be called from within class instances.","Static methods don't have access to the self keyword."],[`Which of the following streams is used to access the compressed data?
`,"compress.zlib","file","php","http"],[`What is the output of the following code?

\`\`\`php
class A {};
class B1 extends A {};
class_alias('A', 'B2');
$b1 = new B1; echo get_class($b1); 
$b2 = new B2; echo get_class($b2);
\`\`\`
`,"B1A","B2A","B1B2","It will throw an error."],[`You run the following PHP script:

\`\`\`php
class number 
{
 public $a = 1;
 protected $b = 2;
 private $c = 3;
}
$numbers = new number();
foreach($numbers as $value) {
 echo "$value ";
}
\`\`\`
What will be the output?
`,"1","The script will throw an error.","1 2","1 2 3"],[`Maria creates an application using PHP script. The application contains certain classes. The class design requires that a particular member variable must be directly accessible to any subclass of this class only. What should Maria do to achieve this?
`,"Mark the variable as protected.","Mark the variable as final.","Mark the variable as public.","Mark the variable as private."],[`Which of the following statements is/are FALSE regarding closures in PHP 5.3?
`,"Closures may not inherit variables from the parent scope.","Closures allow the creation of functions which have no specified name.","It is possible to use func_num_args(), func_get_arg(), and func_get_args() from within a closure.","The parent scope of a closure is the function in which the closure was declared (not necessarily the function it was called from)."],[`Which of the following statements is/are FALSE regarding forward_static_call_array() function in PHP 5.3?
`,"This function can be used outside a class.","It uses late static binding.","This function must be called within a method context.","All arguments of the forwarded method are passed as values, and as an array."],[`You want to save a client's session values in a database. Which of the following actions will you take to accomplish this task?
`,"Use the session_set_save_handler() function.","Use the session_save() function.","Use the session_save_path() function.","Enable the session_save directive in the PHP.ini file."],["Assuming every method call below returns an instance of an object, how can the following be re-written in PHP5/7?\n```php\n$a = new MyClass();\n$b = $a->getInstance();\n$c = $b->doSomething();\n```\n","\n```php\n$c = $a->getInstance()->doSomething();\n```\n","\n```php\n$c = ((MyClass)$a->getInstance())->doSomething();\n```\n","\n```php\n$c = (MyClass)$a->getInstance();\n```\n","This cannot be re-written in PHP5/7."],["What is the output of the following code?\n```php\ninterface foo {}\nclass_alias('foo', 'bar');\necho interface_exists('bar') ? 'yes' : 'no';\n```\n","yes","an error","no","null"],[`Which of the following SPL Interfaces/classes extends the standard Iterator interface and enables the ability to retrieve a specific item from the internal data store?
`,"SeekableIterator","ArrayAccess","FilterIterator","Recursive Iterator"],[`Which of the following is triggered when inaccessible methods are triggered in an object context?
`,"\n```php\n__call()\n```\n","\n```php\n__autoload()\n```\n","\n```php\n__test()\n```\n","\n```php\n__load()\n```\n"],[`Which of the following functions will sort an array in ascending order by value, while preserving key associations?
`,"\n```php\nasort()\n```\n","\n```php\nusort()\n```\n","\n```php\nkrsort()\n```\n","\n```php\nksort()\n```\n"],[`What is the output of this code snippet?

\`\`\`php
$a = [0.001 => 'b',  .1 => 'c'];
print_r($a);

\`\`\`
`,"0 => 'c'","An empty array","'0.001' => 'b', '0.1' => c'","0.001 => 'b', .1 => c"],[`Which of the following methods is called to directly echo or print() an object?
`,"\n```php\n__toString()\n```\n","\n```php\n__unset()\n```\n","\n```php\n__isset()\n```\n","\n```php\n__set_state()\n```\n"],[`Fill in the blank with the appropriate word. The ________ operator lets a programmer inspect all of the ancestor classes of the object, as well as any interfaces.
`,"instanceof","instance of","is_an","type-hint"],[`Consider the following PHP code snippet:

\`\`\`php
class Object
{
   function Object($entity) {
       $entity->name = "John";
   }
}
class Entity
{
     public $name = "Maria";
}
$entity = new Entity();
$obj = new Object($entity);
print $entity->name;
\`\`\`
What should be the output of this script (Ignore warning)?
`,"John","Maria","The script will throw an error message.","JohnMaria"],["Which of the following OOP`s design patterns is used to encapsulate a data source so that accessing data source components becomes hidden within the class that implements the pattern?\n","ActiveRecord","Registry","Factory","Model-view-controller"],[`Fill in the blank with the appropriate method. The ________ method automatically calls whenever a user tries to instantiate a nonexistent class.
`,"__autoload","__call","__load","# all answer are wrong"],[`Consider the following PHP script:

\`\`\`php
$a = 5; 
$b = 4; 
$c = ($a++ * ++$b);  
echo $c;
\`\`\`
What will be the output?
`,"25","20","21","27"],[`Which of the following modes of the fopen() function opens a file in read and write mode and creates one if it does not exist?
`,"w+","r","w","r+"],[`Which of the following PHP functions will you use as a countermeasure against a cross-site scripting (XSS) attack?
`,"\n```php\nhtmlentities()\n```\n","\n```php\nmysql_escape_string()\n```\n","\n```php\nescapeshellcmd()\n```\n","\n```php\nescapeshellarg()\n```\n"],[`Which of the following functions will you use as a countermeasure against a SQL injection attack?
`,"\n```php\nmysqli_escape_string()\n```\n","\n```php\nmysql_fetch_array()\n```\n","\n```php\nescapeshellcmd()\n```\n","\n```php\nescapeshellarg()\n```\n"],[`Which function escapes all of the shell metacharacters and control operators within a string?
`,"\n```php\nescapeshellcmd()\n```\n","\n```php\nescapeshellarg()\n```\n","\n```php\nmysql_escape_string()\n```\n","\n```php\nmysql_real_escape_string()\n```\n"],[`Which of the following data types cannot be directly manipulated by the client?
`,"Session data","Remote IP address","Cookie data","User agent"],[`John works as a professional ethical hacker. He has been assigned the project of testing the security of www.we-are-secure.com. On the We-are-secure login page, he enters ='or''=' as a username and successfully logs in to the user page of the Web site. To which of the following attacks is the We-are-secure login page vulnerable?
`,"SQL injection attack","Replay attack","Dictionary attack","Land attack"],[`Which of the following is used to escape output and remove special characters to prevent from SQL injection attack, XSS attack, and other various types of attacks?
`,"Escape input procedure","Escape output procedure","Formatted output","Formatted input"],[`Which of the following functions is used to set whether to use the SOAP error handler?
`,"use_soap_error_handler","error_handler","soap error_handler","is_soap_fault"],[`Which of the following is used to convert a scalar value into a single-quote delimited string that can be used safely as a single argument for a shell command?
`,"\n```php\nescapeshellarg()\n```\n","\n```php\nmysql_escape_string()\n```\n","\n```php\nescapeshellcmd()\n```\n","\n```php\nmysql_real_escape_string()\n```\n"],[`Consider the following PHP script:
\`\`\`php
<?= "Welcome, {$_POST['name']}."; 
\`\`\`
What type of attack is possible with this PHP script?
`,"Cross-site scripting attack","Replay attack","session fixation","SQL injection attack"],[`Which of the following functions is the best choice to retrieve the fingerprint of a string?
`,"\n```php\nmd5()\n```\n","\n```php\nhash()\n```\n","\n```php\ncrypt()\n```\n","\n```php\nfingerprint()\n```\n"],[`Which of the following functions will you use to get the following output of string "Hello world!"?

"!dlrow olleH"

`,"\n```php\nstrrev()\n```\n","\n```php\nstrrchr()\n```\n","\n```php\nstripos()\n```\n","\n```php\nstrops()\n```\n"],[`Which function is used to get a specific external variable by name and optionally filter it?
`,"\n```php\nfilter_input()\n```\n","\n```php\nfilter_output()\n```\n","\n```php\nfilter_name()\n```\n","\n```php\nfilter()\n```\n"],[`Which of the following functions wraps a string to a given number of characters?
`,"wordwrap","trim","ucfirst","ucwords"],[`Which of the following functions can be used to translate characters or replace substrings?
`,"strtr","substr_replace","substr_compare","substr_count"],[`Which of the following directives can be used to enable the byte cache performance?
`,"apc.enabled","cgi.force_redirect","child_terminate","auto_append_file"],[`What is the default timeout of a session cookie?
`,"Until the browser is closed.","30 min","10 min","45 min"],[`Which of the following protocols is used for mail transfer?
`,"SMTP","FTP","HTTP","SFTP"],[`Fill in the blank with the appropriate PHP function. The _________ function is used to replace the current session id with the new session id, and to keep information of the current session. *Matching is case-insensitive.
`,"\n```php\nsession_regenerate_id()\n```\n","\n```php\nregenerate_id_session()\n```\n","\n```php\nregenerate_id()\n```\n","\n```php\nsession_id()\n```\n"],[`Which of the following is a PHP script vulnerability of the mail() function that can occur in Internet applications that are used to send email messages?
`,"Email injection","Email scheduler","Email Bomber","SQL injection"],[`Which of the following is used to retrieve the namespaces used in an XML document from a SimpleXMLElement object?
`,"\n```php\ngetNamespaces()\n```\n","\n```php\ngetName()\n```\n","\n```php\ngetElement()\n```\n","\n```php\ngetDefined()\n```\n"],[`Which of the following functions in SimpleXML can be used to return an iterator containing a list of all subnodes of the current node?
`,"\n```php\nchildren()\n```\n","\n```php\nasXML()\n```\n","\n```php\nattributes()\n```\n","\n```php\ngetName()\n```\n"],[`What will be the output of the following PHP script?
\`\`\`php
$dom = new DOMDocument();
$dom->load('book.xml');
$a = $dom->documentElement;
print_r($a);
\`\`\`
`,"It will display the root element of the XML file.","It will display the XML code of the XML file.","It will display the contents of the XML file.","It will throw an error."],[`Fill in the Blank with the appropriate method name. The ___________ is used to import the SimpleXML objects for use with DOM. *Exact matching is required.
`,"dom_import_simplexml","import_simplexml","dom_simplexml_import","load"],[`Which of the following is used to retrieve the root element from an XML file?
`,"\n```php\n$dom->documentElement\n```\n","\n```php\nXMLReader::close()\n```\n","\n```php\nXMLReader::expand()\n```\n","\n```php\nXMLReader::getAttribute()\n```\n"],[`Which of the following is used to retrieve the name of an XML element from a SimpleXMLElement object?
`,"\n```php\ngetName()\n```\n","\n```php\ngetDefined()\n```\n","\n```php\ngetNamespaces()\n```\n","\n```php\ngetCall()\n```\n"],['Consider the following script:\n\n```php\necho strtotime("january 1, 1901");\n```\nWhat will be the output of the above PHP script if older versions of glibc are present in the operating system?\n',"False","1435","True","0"],[`Which of the following is used to retrieve the namespaces declared in an XML document from a SimpleXMLElement object?
`,"\n```php\ngetDocNamespaces()\n```\n","\n```php\nchildren()\n```\n","\n```php\ngetNamespaces()\n```\n","\n```php\ngetName()\n```\n"],[`Which of the following protocols is normally used by Webservices?
`,"HTTP","POP3","FTP","SFTP"],[`Which of the following functions sets up start and end element handlers?
`,"\n```php\nxml_set_element_handler()\n```\n","\n```php\nxml_set_object()\n```\n","\n```php\nxml_parse_into_struct()\n```\n","\n```php\nxml_parser_create_ns()\n```\n"],[`Which function is used to set up start and end element handlers?
`,"\n```php\nxml_set_element_handler()\n```\n","\n```php\nxml_get_current_line_number()\n```\n","\n```php\nxml_parser_create()\n```\n","\n```php\nxml_get_current_column_number()\n```\n"],[`What code snippet will you use at line number four (4) in the code snippet given below?

\`\`\`php
$client = new SoapClient("any.wsdl", array('exceptions' => 0));
$result = $client->SomeFunction();
if (??????) {
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faultstring})", E_USER_ERROR);
}
\`\`\`
`,"\n```php\nis_soap_fault($result)\n```\n","\n```php\nuse_soap_fault_handler($result)\n```\n","\n```php\nis_soap_error_handler($result)\n```\n","\n```php\nuse_soap_error_handler($result)\n```\n"],[`All of the following are the pre-defined entities except for which one?
`,";","<","&",">"],[`What will be the output of the following PHP script?

\`\`\`php
$dom = new DOMDocument();
$dom->load('book.xml');
$a = $dom->documentElement;
print_r($a);
\`\`\`
`,"It will display the root element of the XML file.","It will display the contents of the XML file.","It will display the XML code of the XML file.","It will throw an error."],[`Which of the following is an XML protocol that implements the communication between one to another machine, including the publishing, finding, binding, and calling of a Webservice?
`,"SOAP","REST","HTTP","POP3"],[`Which of the following was not a built-in terminology before PHP5?
`,"SOAP","XML","XSL","CURL"],[`Which of the following functions returns an XML string based on SimpleXML element?
`,"\n```php\nasXML()\n```\n","\n```php\nxml_error_string()\n```\n","\n```php\nxml_get_current_column_number()\n```\n","\n```php\nxml_get_current_byte_index()\n```\n"],[`Fill in the blank with the appropriate function name. The ________ function is used to return the current time measured in the number of seconds since the 
Unix Epoch (January 1, 1970, 00:00:00 GMT). *Matching is case-insensitive.
`,"time","date","strtotime","timefromdate"],[`You have given the following XML data in the tasks.XML file:

\`\`\`xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<tasklist>
 <note>
 <tasks>Validate data</tasks>
 <details>String Validation</details>
 </note>
 <note>
 <tasks>Secure data</tasks>
 <details>Encryption</details>
 </note>
</tasklist>
\`\`\`
Now, you run the following PHP script:
\`\`\`php
$objDOM = new DOMDocument();
$objDOM->load("tasks.xml"); 
$note = $objDOM->getElementsByTagName("note");
foreach( $note as $value ) {
 $tasks = $value->getElementsByTagName("tasks");
 $task = $tasks->item(0)->nodeValue;
 $details = $value->getElementsByTagName("details");
 $detail = $details->item(0)->nodeValue;
 echo "$task :: $detail ";
}
\`\`\`
What should be displayed when this script is executed?
`,"The contents of every tasks and details nodes","The XML contents of the whole XML document","The XML of whole XML document","The XML of every tasks and details nodes"],[`Fill in the blank with the appropriate function name. The _______ function is used to decode a json encoded string/array.
`,"\n```php\njson_decode()\n```\n","\n```php\njson_endcode()\n```\n","\n```php\nxml_decode()\n```\n","\n```php\njoin()\n```\n"],[`Which of the following is a valid SOAP client call?
`,'\n```php\n$client = new SoapClient("any.wsdl");\n```\n',"\n```php\n$client = new SoapClient;\n```\n","\n```php\n$client = new SoapClient(null, array());\n```\n",'\n```php\n$client => SoapClient = "any.wsdl";\n```\n'],[`What will be the output of the following PHP code snippet?
echo strtotime("24:00");
`,"something like: 1357862400","True","False","Script will return an error message."],[`Consider the following XML file:

\`\`\`xml
<?xml version="1.0" encoding="ISO-8859-1" ?>   
 <!DOCTYPE html   
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"   
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">   
 <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">   
   <head>   
     <title> SimpleXML Example</title>   
   </head>   
   <body>   
     <h1>Please go <a href="http://www.ucertify.com">http://www.ucertify.com</a></h1>   
   </body>   
 </html>
\`\`\`
Which of the following statements will display the HREF attribute on the anchor tag if the SimpleXML object is $sxml?
`,"\n```php\n$sxml->body->h1->a['href']\n```\n","\n```php\n$sxml->body->h1->a<href>\n```\n","\n```php\n$sxml->body->h1->a->href\n```\n","\n```php\n$sxml->h1->a->href\n```\n"],[`Which of the following protocols is used to standardize the description of Web services so providers and requesters are speaking the same language?
`,"WSDL","UDDI","SOAP","HTTP"],[`All variables in PHP start with which symbol?
`,"$","?","&","var"],[`Which of the following retrieves the child nodes of a specified XML node?
`,"\n```php\nchildren()\n```\n","\n```php\ngetNamespaces()\n```\n","\n```php\ngetDocNamespaces()\n```\n","\n```php\ngetName()\n```\n"],[`Which of the following function is used to parse XML data into an array structure?
`,"\n```php\nxml_parse_into_struct()\n```\n","\n```php\nxml_set_external_entity_ref_handler()\n```\n","\n```php\nxml_set_object()\n```\n","\n```php\nxml_set_processing_instruction_handler()\n```\n"],[`Fill in the blank with the appropriate PHP function. The __________ function is used to return the sum of the values of every entry within an array. *Exact matching is required.
`,"array_sum","sum_array","sum","sumarray"],[`Which function is used to allow a parser to be used within an object?
`,"\n```php\nxml_set_object()\n```\n","\n```php\nxml_parse_into_struct()\n```\n","\n```php\nxml_parser_set_option()\n```\n","\n```php\nxml_set_character_data_handler()\n```\n"],[`All of the following are the advantages of Webservice except for which one?
`,"It provides MXML support.","It provides potential SOAP extension.","It provides OOPS support.","It provides CURL support."],[`Fill in the blank with the appropriate function name. The _________ function is used to encode a string/array into a json encoded string.
`,"\n```php\njson_encode()\n```\n","\n```php\njson_decode()\n```\n","\n```php\nencode()\n```\n","\n```php\ndecode()\n```\n"],[`Which of the following is used to create an XML parser with namespace support?
`,"\n```php\nxml_parser_create_ns()\n```\n","\n```php\nxml_get_current_column_number()\n```\n","\n```php\nxml_get_current_byte_index()\n```\n","\n```php\nxml_get_current_line_number()\n```\n"],[`Consider the following script:

\`\`\`php
$string1 = "ab";
$string2 = "cd";
$string1 = $string1 . $string2; 
$string3 = "abc";
$string1 .= $string3;
echo $string1;
\`\`\`
What will be the output of the above PHP script?
`,"abcdabc","cdabcab","abc","cdabc"],[`What are possible value of the following code, if $a and $b variable are defined in current scope script?


\`\`\`php
echo ($a <=> $b);

\`\`\`
`,"-1, 0, 1","null, false, true","false, true","it depends on the type of $a, $b"],[`What will be the output of the following PHP code?
\`\`\`php
$a = "hi,world";
$b = array_map("strtoupper", explode(",", $a));
foreach($b as $value) {
 print "$value";
}
\`\`\`
`,"HIWORLD","hiworld","HI,WORLD","HiWorld"],["What will be the output of the following code?\n```php\n$s = '13149';\n$s[$s[1]] = $s[1]+$s[3];\nprint_r($s);\n```\n","13179","The script will throw an error message.","13149","13147"],[`You run the following PHP script:

\`\`\`php
if ( preg_match("/[^a-z589]+/", "AB asdfg589nmGH", $array) )  {
 print "<pre>
";
 print_r( $array );
 print "</pre>
";
}
\`\`\`
What will be the output?
`,"Array ( [0] => AB )","Array ( [0] => 589 )","Array ( [0] => AB GH )","Array ( [0] => asdfg589nm )"],[`What will be the output of the following code snippet?

\`\`\`php
$string = '133445abcdef';
$mask = '12345';
echo strspn ($string, $mask);
\`\`\`
`,"6","12345","123445","abcdef"],["Consider the following string:\n\n```php\nZeNd php\n```\nAfter running a PHP script, the above string is converted in the following format:\n```php\nphp dnez\n```\nWhich of the following PHP scripts have you run?\n",'\n```php\n$string1= "ZeNd php"; \n$string1= strtolower($string1); \necho strrev($string1);\n```\n','\n```php\n$string1= "ZeNd php"; \n$string1= trim($string1); \necho stringrev($string1);\n```\n','\n```php\n$string1= "ZeNd php"; \n$string1= strtolower($string1); \necho stringrev($string1);\n```\n','\n```php\n$string1= "ZeNd php"; \n$string1= str_to_lower($string1);\necho strev($string1);\n```\n'],[`You want to search for such users who have not used any digit in their user names to register to your Website. Which of the following regular expressions will you use to accomplish the task?
`,"[^[:digit:]]","[[:digit:^]]","^[[:digit]]","[[:digit:]^]"],["What will be the output of the following code snippet?\n```php\necho 'hello ' . 1 + 2 . '34';\n```\n","234","hello334","0","hello1234"],["You run the following PHP script:\n\n```php\n$x = 'john';\necho substr_replace($x, 'jenny', 0, 0);\n```\n","jennyjohn","jenn","john","The script will throw an error message."],["Consider the following array:\n```php\n$arr = ['apple', 'banana', 'cherry'];\n```\nWhich function would you use to get the following string?\n```\napple, banana, cherry\n```\n","\n```php\nimplode()\n```\n","\n```php\nexplode()\n```\n","\n```php\nltrim()\n```\n","\n```php\nsubstr()\n```\n"],[`What will be the output of the following PHP code snippet?

\`\`\`php
echo <<<"FOOBAR"
Hello World!
FOOBAR;
\`\`\`
`,"Code will run successfully.","Code will throw an error message.","Code will throw a warning message.","Code will not display anything; it will not give any error also."],[`Consider the following code snippet:

\`\`\`php
$hello = 'world';
$world = 'hello';
echo $$$hello;
\`\`\`
What will be the output?
`,"world","an empty string","helloworld","hello"],["Consider the following PHP code:\n```php\n<?= strlen(md5(rand(),TRUE));\n```\n","16","64","8","32"],[`Which of the following functions can be used to compare two strings using a case-insensitive binary algorithm?
`,"\n```php\nstrcasecmp()\n```\n","\n```php\nstrstr()\n```\n","\n```php\nsubstr()\n```\n","\n```php\nstrcmp()\n```\n"],[`Consider the following PHP script:

\`\`\`php
$charlist = [
 'a' => 'one', 
 'b' => 'two', 
]; 
// *****
\`\`\`
What statement will you write at line number 5 instead of md_to_json.sh raw-tests.json tests zce to get the output onectwo?
`,"\n```php\necho strtr('acb', $charlist);\n```\n","\n```php\necho strstr('acb', $charlist);\n```\n","\n```php\necho strip_tags('acb', $charlist);\n```\n","\n```php\necho strtok('acb', $charlist);\n```\n"],[`Consider the following PHP code snippet:

\`\`\`php
$who = "World";
echo <<<TEXT
"Hello $who"
TEXT;
\`\`\`
What will be the output?
`,'"Hello World"','TEXT "Hello World"','<<< TEXT "Hello $who"','TEXT "Hello $who"'],[`Fill in the blank with the appropriate term. The ________ function is used to reverse a given string. *Matching is case-insensitive.
`,"\n```php\nstrrev\n```\n","\n```php\nstrstr\n```\n","\n```php\nstrtok\n```\n","\n```php\nstrtr\n```\n"],[`You are using a database named HumanResource. You have to delete some tables from the database using SQL statements. Which of the following statements will you use to accomplish the task?
`,"DROP TABLE <table_name>","DELETE TABLE <table_name> FROM DATABASE","DELETE TABLE <table_name>","DROP TABLE <table_name> FROM DATABASE"],[`You have been given the following code snippet:
\`\`\`php
$stmt = $dbh->prepare("SELECT * FROM USER where name = ?");
if ($stmt->execute(array($_GET['name']))) {
  while (??????) {
    print_r($row);
  }
}
\`\`\`
What will you write at line number 4 to fetch data from database?
`,"\n```php\n$row = $stmt->fetch()\n```\n","\n```php\n$row = $stmt->fetchall()\n```\n","\n```php\n$row = $stmt->getch()\n```\n","\n```php\n$row = $stmt->get()\n```\n"],["Symonds works as a Database Administrator for Blue Well Inc. The company uses an Oracle database. The database contains a table named Employees. Following is the structure of the table:\n```php\nEmployeeID NUMBER (5) PRIMARY KEY\nEmployeeName VARCHAR2 (35) NOT NULL\nSalary NUMBER (9, 2) NOT NULL\nCommission NUMBER (4, 2) \nDepartmentID NUMBER (5)\n```\n```php\nSymonds queries the Employees table with the following statement:\n```\n```php\nSELECT e.EmployeeName, m.Salary\nFROM Employees e, Employees m\nWHERE e.EmployeeID = m.EmployeeID;\n```\nWhich of the following types of joins is used in the statement?\n","Self join","Outer join","Equijoin","Cross join"],[`Which of the following statements describes the use of a GROUP BY clause?
`,"A GROUP BY clause returns a single row of information for each group of rows.","A GROUP BY clause automatically sorts the grouped result in descending order.","A GROUP BY clause automatically sorts the grouped result in ascending order, if the DESC keyword is not defined.","A GROUP BY clause returns a single row of information for each group of rows, in addition to all the rows."],[`Angela works as a Database Administrator for AznoTech Inc. She writes the following query:

\`\`\`php
SELECT Dept_Name, Emp_Name
FROM Departments d1, Employees e1
WHERE d1.Dept_No = e1.Dept_No
ORDER BY Dept_Name, Emp_Name;
\`\`\`
Which of the following joins is used in this query?
`,"Equijoin","Self join","Outer join","Non-equijoin"],[`Which of the following prepared query strings is used to execute a prepared statement?
`,"PDOStatement::execute","PDOStatement::fetchAll","PDOStatement::fetch","PDOStatement::errorInfo"],[`You work as a Database Administrator for Dolliver Inc. The company uses an Oracle database. The database contains two tables, named Employees and Departments. You want to retrieve all matched and unmatched rows from both the tables. Which of the following types of joins will you use to accomplish this?
`,"FULL OUTER JOIN","LEFT OUTER JOIN","CROSS JOIN","RIGHT OUTER JOIN"],[`Which of the following methods of PDOStatement class returns the next rowset in a multi-query statement?
`,"\n```php\nPDOStatement->nextRowset()\n```\n","\n```php\nPDOStatement->fetch()\n```\n","\n```php\nPDOStatement->fetchAll()\n```\n","\n```php\nPDOStatement->rowCount()\n```\n"],[`Martin works as a Database Administrator for MTech Inc. He designs a database that has a table named Products. He wants to create a report listing different product categories. He does not want to display any duplicate row in the report. Which of the following SELECT statements will Martin use to create the report?
`,"\n```php\nSELECT DISTINCT Product_No, Prod_Category \nFROM Products;\n```\n","\n```php\nSELECT Product_No, Prod_Category \nFROM Products;\n```\n","\n```php\nSELECT Product_No, Prod_Category \nFROM Products \nGROUP BY Product_No;\n```\n",`
\`\`\`php
SELECT Product_No, Prod_Category 
FROM Products 
GROUP BY Product_No 
ORDER BY Product_No;
\`\`\`
`],["You have a table created as follows:\n```php\ncreate table foo (c1 int, c2 char(30), c3 int, c4 char(10))\n```\nIf column c1 is unique, which of the following indexes would optimize the statement given below?\n","create unique index foox on foo (c1) include (c3)","create index foox on foo (c1)","create index foox on foo (c1,c3)","create unique index foox on foo (c1,c3)"],[`You have to select persons whose age is between twenty-five and forty from a database named HumanResource. Which of the following criteria will you use in the query to accomplish the task?
`,"BETWEEN 25 AND 40","BETWEEN 25 & 40","BETWEEN 25 - 40","BETWEEN 25 TO 40"],[`You want to retrieve all the data from any given table. You also want to ensure that no duplicate values are displayed. Which of the following SQL statements will you use to accomplish the task?
`,"SELECT...DISTINCT","SELECT...WHERE","SELECT...ALL","SELECT...TOP"],[`Which of the following joins retrieves all rows from one table and only the matching rows from the joined table?
`,"Outer join","Equijoin","Non-equijoin","Self join"],[`Which of the following joins will you use to display data that do not have an exact match in the column?
`,"Non-equijoin","Self join","Equijoin","Outer join"],[`You want to check whether the header has already been sent or not. Which of the following code segments will you use to accomplish the task?
`,"headers_sent ([ string &$file [, int &$line ]] )","!header_sent(true)","header_sent(true)",'!in_array("Location: $url", header_list())'],[`You are using a database named SalesDB to keep all sales records. The SalesDB database contains a table named Orders. You are required to create a new table named OldOrders and transfer all the data from the Orders table to the new table. Which of the following statements will you use to accomplish the task?


`,"\n```php\nSELECT INTO\n```\n","\n```php\nINSERT INTO\n```\n","\n```php\nIMPORT INTO\n```\n","\n```php\nADD INTO\n```\n"],[`Which of the following recovers the committed transaction updates against any kind of system failure?

`,"Durability","Consistency","Isolation","Atomicity"],[`In which of the following ways will you receive data from a Web page if you do not know how data is sent?
`,"\n```php\n$_REQUEST[]\n```\n","\n```php\n$_GET[]\n```\n","\n```php\n$_POST[]\n```\n","\n```php\n$_SEND[]\n```\n"],[`You want to make a cookie available only for the HTTP protocol. Which of the following setcookie() parameters would you use to accomplish this?
`,"httponly","none","expire=DATE","secure"],[`Which of the following HTML code snippets can be used for the file uploading?
`,'\n```html\n<form enctype="multipart/form-data" action="index.php" method="post">\n```\n','\n```html\n<form enctype="text/plain" action="index.php" method="post">\n```\n','\n```html\n<form enctype="plain" action="index.php" method="post">\n```\n','\n```html\n<form enctype="application/x-www-form-urlencoded" action="index.php" method="post">\n```\n'],[`Fill in the blank with the appropriate function name. The __________ function is used to encode a URL. *Matching is case-insensitive.
`,"urlencode","url_encode","urldecode","encodeurl"],[`You allow PHP to dynamically choose whether to propagate the session identifier via cookies or the URL, depending on the user's preferences. Which of the following PHP.ini directives will you use?
`,"session.use_trans_sid","session.auto_start","session.use_cookies","session.save_path"],[`You want to send an HTTP cookie without URL encoding the cookie value. Which of the following functions will you use?
`,"\n```php\nsetrawcookie()\n```\n","\n```php\nheaders_sent()\n```\n","\n```php\nsetcookie()\n```\n","\n```php\nheaders_list()\n```\n"],[`Which of the following code snippets will you use to redirect your users from one page to another?
`,'\n```php\nheader("Location: http://php.com");\n```\n','\n```php\nredirect("Location: http://php.com");\n```\n','\n```php\nheader("http://php.com");\n```\n','\n```php\nredirect("http://php.com");\n```\n'],[`Which of the following header codes is used for redirection?
`,"3XX","5XX","1XX","4XX"],[`Consider the following PHP script:
\`\`\`php
header("Content-type:application/pdf");
header("Content-Disposition:attachment;filename='2.pdf'");
readfile("1.pdf");
\`\`\`
What will be the default name of the downloaded pdf?
`,"2.pdf","1.pdf","The script will throw an error message.","NULL"],['Which of the following statements correctly explains the working of the following code snippet?\n\n```php\nheader( "Location: http://www.zendexam.com" );\n```\n',"It redirects the page to the given location.","It displays the header information of the given link.","It displays the cookie of the given link.","It saves the cookie value in the client's browser."],[`You have been given the following PHP script:

\`\`\`php
<?php
if ($_POST) {
   echo '<pre>';
   echo htmlspecialchars(print_r($_POST, true));
   echo '</pre>'; 
} 
?> 
<form action="action.php" method="post">
   Name:  <input type="text" name="personal[name]" />
   Email: <input type="text" name="personal[email]" />
   Code: 
   // ???
   <option value="A">A</option>
   <option value="B">B</option>
   <option value="C">C</option>
   </select> 
   <input type="submit" value="submit me!" />
</form>
\`\`\`
Which of the following is the correct syntax that should be used in line number 10 to capture all of the data from the user in PHP?
`,'\n```html\n<select multiple name="select_box[]">\n```\n','\n```html\n<select multiple name="select_box=array()">\n```\n','\n```html\n<select multiple name="select_box[multiple]">\n```\n','\n```html\n<select multiple name="select_box">\n```\n'],[`Fill in the blank with the appropriate function name. The ______ function is used to set a cookie to be sent along with the rest of the HTTP headers.
`,"setcookie","set_cookie","setcookies","set_cookies"],[`Consider the following PHP code snippet:

\`\`\`php
<form method=get>
    <select name ="fruits" id="fruits">
        <option value="1">Apple</option>
        <option>Orange</option>
        <option value="3">Strawberry</option>
    </select>
 <input type="submit" value="Submit">
 <?= $_GET['fruits'] ?? ''; ?>
\`\`\`
What will be the output if you select 'Orange' from the dropdown menu?
`,"Orange","2","1","Null"],[`You have been given the following code snippet:

\`\`\`php
<?php
 $string = <<<XML
 <?xml version="1.0" encoding="ISO-8859-1"?> 
 <email> 
 <to>[email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</to> 
 <from>[email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-cfhash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-cfemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */</from> 
 <heading>Technical issue in Linux OS</heading> 
 <body>There is a technical issue in my Linux system. Please Fix it. </body>
 </email> 
 XML;
 
// Write code here

\`\`\`
Which of the following code snippets will you write to print the XML content?
`,"\n```php\n$xml = simplexml_load_string($string); print_r($xml);\n```\n","\n```php\n$xml = load_XML($string); print_r($xml);\n```\n","\n```php\n$xml = XML_string($string); print_r($xml);\n```\n","\n```php\n$xml = simplexml_string($string); print_r($xml);\n```\n"],[`What is the maximum limit of the file size that a user can upload according to the code snippet given below?

\`\`\`php
<form enctype="multipart/form-data" action="index.php" method="post">
   <input type="hidden" name="MAX_FILE_SIZE" value="5000" />
   <input name="filedata" type="file" />
   <input type="submit" value="Send file" />
</form>
\`\`\`
`,"5,000 bytes","5,000 Kilobytes","5,000 bits","5,000 Megabytes"],["What will be the output of the following PHP code?\n```php\narray_combine([1,2,3], [4,5,6]);\n```\n","\n```php\narray(1=>4,2=>5,3=>6)\n```\n","\n```php\narray(1=>2,3=>4,5=>6)\n```\n","\n```php\narray(1,2,3,4,5,6)\n```\n","script error"],[`You have the following code in the welcome.html file:
\`\`\`php
<form action="welcome.php" method="post">
    Your Name: <input type="text" name="fname" />
    Your Girl Friend Name: <input type="text" name="fname" />
    <input type="submit" />
</form>
\`\`\`
The PHP code of the welcome.php file is as follows:
\`\`\`php
Welcome <?= $_POST["fname"];?> and <?= $_POST["fname"];?>!
\`\`\`
What will be the output if you give your name as John and your girlfriend's name as Maria?
`,"Welcome Maria and Maria!","Welcome John and John!","Welcome Maria and John!","Welcome John and Maria!"],[`Which of the following statements is true about deleting a client's cookie?
`,"You cannot delete a cookie from a client computer.","You can delete a cookie by using the session.rem_cookie() function.","You can delete a cookie by using the delcookie() function.","You have to set the session.gc_maxlifetime INI setting in the php.ini file."],[`You want to destroy session variables within a PHP session. Which of the following methods can you use to accomplish the task?
`,"\n```php\nsession_destroy()\n```\n","\n```php\nremove_session_element()\n```\n","\n```php\ndelete_session_variable()\n```\n","\n```php\nsession_regenerate_id()\n```\n"],[`What is the work of simplexml_import_dom() in the following PHP code?
\`\`\`php
 $dom = new domDocument;
 $dom->loadXML('<email><from>John</from></email>');
 $xml = simplexml_import_dom($dom);
 echo $xml->from;
\`\`\`
`,"It gets a SimpleXMLElement object from a DOM node.","It gets a SimpleXMLElement object from an XML document.","It gets the namespaces from XML data.","It gets the name of a SimpleXML element."],[`You want to enable compression in the PHP code output. Which of the following ways should you prefer most?
`,"Set zlib.output_compression to on.","Turn compress_code setting to true.","Set zlib_compression to on.","Use the ob_start() function."],[`Which of the following is an associative array of items uploaded by the current PHP script via the HTTP POST method?
`,"\n```php\n$_FILES\n```\n","\n```php\n$_COOKIE\n```\n","\n```php\n$_ENV\n```\n","\n```php\n$_REQUEST\n```\n"],[`Which of the following file permissions is set by the tempnam() function for the newly created temp file?
`,"0600","0700","0777","1777"],[`Which of the following functions can be used to get whether or not a file is readable?
`,"\n```php\nis_readable()\n```\n","\n```php\nstat()\n```\n","\n```php\ntouch()\n```\n","\n```php\nfseek()\n```\n"],[`Fill in the blank with the appropriate function().
The _______ function is used to copy data from one stream to another. It is mainly useful in copying data between two open files. *Matching is case-insensitive.
`,"stream_copy_to_stream","stream_copy_stream","copy_to_stream","cp"],["You run the following PHP script:\n```php\n<?= gethostbyaddr($_SERVER['REMOTE_ADDR']);\n```\nWhat will be the output of the script?\n","It will print the host name of the Internet host.","It will print the DNS resource records associated with the local Web server.","It will print the list of header information sent.","It will print the standard host name for the local Web server."],[`Consider the following PHP script:

\`\`\`php
 $fp = fopen('file.txt', 'r');
 $string1 = fgets($fp, 512);
 fseek($fp, 0);
\`\`\`
Which of the following functions will give the same output as that given by the fseek() function in the above script?
`,"\n```php\nrewind()\n```\n","\n```php\nfgets()\n```\n","\n```php\nfgetss()\n```\n","\n```php\nfile()\n```\n"],[`What does the second parameter of the file_get_contents() function do?
`,"It indicates whether or not include_path should be used.","It indicates the number of bytes to read.","It specifies the stream context.","It identifies the starting offset."],[`Which of the following functions is used to delete a file?
`,"\n```php\nunlink()\n```\n","\n```php\nremove()\n```\n","\n```php\nunset()\n```\n","\n```php\ndelete()\n```\n"],[`Which of the following PHP functions can be used to alter the amount of time PHP waits for a stream before timing out during reading or writing?
`,"\n```php\nstream_set_timeout()\n```\n","\n```php\nstream_get_meta_data()\n```\n","\n```php\nstream_set_read_buffer()\n```\n","\n```php\nstream_set_time()\n```\n"],[`Which of the following file functions can be used to indicate the current position of the file read/write pointer?
`,"\n```php\nftell()\n```\n","\n```php\nfread()\n```\n","\n```php\nfseek()\n```\n","\n```php\nfeof()\n```\n"],[`Fill in the blank with the appropriate PHP function. The _______ function generates a file resource having 0600 file permission in the file system with a randomly-generated filename to be used as temporary storage. *Exact matching is required.
`,"\n```php\ntempnam()\n```\n","\n```php\ntemname()\n```\n","\n```php\ntempname()\n```\n","\n```php\ntmp()\n```\n"],[`Which of the following PHP file handling functions will you use if you want to retrieve only the texts from an HTML file and leave all HTML and PHP tags?
`,"\n```php\nfgetss()\n```\n","\n```php\nfile_put_contents()\n```\n","\n```php\nfile_get_contents()\n```\n","\n```php\nfgets()\n```\n"],[`Which of the following functions will you use to change the number of bytes to buffer?
`,"\n```php\nstream_set_write_buffer()\n```\n","\n```php\nob_start()\n```\n","\n```php\nbuffer_start()\n```\n","\n```php\nob_buffer_start()\n```\n"],[`Which of the following functions will you use to copy data between two opened files?
`,"stream_copy_to_stream ( resource $source , resource $destination)","buffer_start()","stream_copy_to_stream (resource $destination, resource $source )","copy(resource $destination, resource $source)"],[`What is the output of the following PHP script:

\`\`\`php
$a = 10;
$b = 20;
$c = 30;
echo ($a < 50 && $b > 100 || $c == 30) ? "a" : "b";
echo ($b < 50 XOR $c == 30) ? "c" : "d";
\`\`\`
Enter the exact script output
`,"ad","b","ab","a"],[`What is the output of the following PHP script:


\`\`\`php
$a = 0;
if ($a = 10) {
 echo "a";
}
if ($a == 0) {
 echo "b";
}
if ($a == "0") {
 echo "c";
}
\`\`\`
Enter the exact script output
`,"a","b","ab","abc"],[`Which of the following statements best describes the @ operator when used in PHP code?
`,"Error messages and warnings are not displayed, regardless of the error reporting setting.","Error messages and warnings are written to the system log file.","Error messages and warnings are displayed, even if error reporting is disabled.","The system administrator will be notified if an error occurs."],["Which of the statements below best describe the following PHP code. Note that backticks are being used (not single quotes).\n```php\n$output = `ls`;\n```\n","The 'ls' command is executed and its output is assigned to $output","The value 'ls' is assigned to $output.","The value 'ls' is assigned to $output and written to the system log file.","The 'ls' command is executed and its output is written to the system log file."],[`PHP assigns non-object variables by value, but you can "connect" one variable to another so assignment occurs by reference instead. What is output of the following PHP script?

\`\`\`php
$a = 15;
$b = $a;
$b = 25;
$c = 50;
$d = &$c;
$d = 25;
echo $a . ' - ' . $c;
\`\`\`
Enter the exact script output
`,"15 - 25","15","50 - 25","25 - 25"],[`What is output of the following PHP script?
\`\`\`php
$str = 'foo';
$str .= 'bar';
$num = 0;
$num += 25;
$num -= 15;
echo $str . ' - ' . $num;
\`\`\`
`,"foobar - 10","0bar - -15","0 - 0","foobar - 325"],["What is the output of the following PHP script?\n```php\n$a = ($b = 13) - 5;\necho $a . ' - ' . $b;\n```\n","8 - 13","-5 - 13","13 - 5","5 - 13"],[`What is the output of the following PHP script?

\`\`\`php
$i = 100;
$j = $i++ - 10;
echo $i . ' - ' . $j;
\`\`\`
`,"101 - 90","101 - 101","110 - 101","101 - 110"],[`Consider the use of bitwise operators on hexadecimal values. What is the output of the following PHP script?
\`\`\`php
$a = 0xF0;
$b = 0x0F;

$val1 = $a & $b; // bitwise AND
$val2 = $a | $b; // bitwise OR
$val3 = $a ^ ($b | $a); // bitwise XOR

echo sprintf('0x%02X - 0x%02X - 0x%02X', $val1, $val2, $val3);
\`\`\`
`,"\n```php\n0x00 - 0xFF - 0x0F\n```\n","\n```php\n0xF0 - 0xFF - 0xF0\n```\n","\n```php\n0x00 - 0xF0 - 0x00\n```\n","\n```php\n0x00 - 0xFF - 0xF0\n```\n"],[`What is the output of the following PHP script?

\`\`\`php
$a = 10 * 5 + 8;
$b = 4 * 6 - 10 / 2;
$c = 8 / (12 - 8) * 4;
echo $a . ' - ' . $b . ' - ' . $c;
\`\`\`
Enter the exact script output
`,"58 - 19 - 8","56 - 10 - 8","an error","null"],["What is the output of the following PHP script?\n```php\n$a = 25;\necho $a % 10;\n```\n","5","15","250","25"],[`The bitwise left shift (>) operands move the bits in the left operand left or right by the number of positions in the right operand. This is in effect a fast way to multiple or divide by powers of 2. What is the output of the following script?

\`\`\`php
$a = 15 << 2;
$b = 10 >> 1;
$c = 0xF0 >> 4;

echo sprintf('%d - %d - 0x%X', $a, $b, $c);
\`\`\`
`,"60 - 5 - 0xF","30 - 5 - 0x0","30 - 10 - 0xF","60 - 10 - 0xF"],[`What is the output of the following PHP script:

\`\`\`php
$a = "1";
$b = "01";

echo ($a == $b) ? "a" : "b";
echo ($a === $b) ? "c" : "d";
echo ($a < $b) ? "e" : "f";
\`\`\`
`,"adf","acf","bde","bdf"],[`What is the output of the following PHP script?

\`\`\`php
$a = array('z', 'x');
$b = array('y', 'w');

$c = array('a' => 1, 'b' => 2);
$d = array('c' => 3, 'd' => 4);

$e = $a + $b;
$f = $c + $d;

foreach ($e as $value) {
 echo $value;
}
foreach ($f as $value) {
 echo $value;
}
\`\`\`
Enter the exact script output
`,"zx1234","1234","null","12zx"],[`What is the output of the following PHP script:

\`\`\`php
$a = 10;
$b = "10";

if ($a == $b) {
 echo "a";
} else {
 echo "b";
}
if ($a === $b) {
 echo "c";
} else {
 echo "d";
}
\`\`\`
Enter the exact script output
`,"ad","ac","bd","da"],[`What is the output of the following PHP (PHP7) script?

\`\`\`php
$string1 = 'foo' . 'bar';
$string2 = 'hello' + 'goodbye';
$string3 = "abc" + "123";

echo sprintf('%s - %s - %s', $string1, $string2, $string3);
\`\`\`
Enter the exact script output
`,"foobar - 0 - 123","0","foo","bar",`A</strong>
</p>
 
 answer is valid only for PHP7 version
</details>
`],["What is the output of the following PHP script?\n```php\n$myVar = 'foo';\n$$myVar = 'bar';\necho $'myVar';\n```\n","Syntax Error","foo","foobar","bar"],[`What is the output of the following script?

\`\`\`php
$varName = 'abc';
$$varName = '123';
echo $abc;
\`\`\`
Enter the exact script output
`,"123","abc","null","an error"],[`What is the output of the following PHP script?

\`\`\`php
function getName($lastName) {
 if ($lastName) {
 return 'Bloggs';
 } else {
 return 'Jeremiah';
 }
}

$func = 'getName';
echo $func(true);
\`\`\`
Enter the exact script output
`,"Bloggs","Jeremiah","null","BloggsJeremiah"],["What is the output of the following PHP script?\n\n```php\n$myVar = 'foo';\n$$myVar = 'bar';\necho ${'myVar'} . $foo;\n```\n","foobar","myVarfoo","bar","Syntax Error"],[`Of the following options, which are valid variable names?


`,"\n```php\n$string123\n```\n","\n```php\n$5_name\n```\n","\n```php\n$25name\n```\n","\n```php\nstr\n```\n"],["What is the output of the following PHP script?\n```php\n$name = 'Joe';\n$$name = 'Bloggs';\necho ${$name};\n```\nEnter the exact script output\n","Bloggs","Joe","BloggsJoe","null"],[`How do you check if a variable $name exists in the current scope in a PHP script?


`,"\n```php\nisset($name)\n```\n","\n```php\nvarExists('name')\n```\n","\n```php\ndefined($name)\n```\n","\n```php\nisset('name')\n```\n"],[`How do you check if a constant called DEBUG_LEVEL exists in your PHP code?


`,"\n```php\ndefined('DEBUG_LEVEL')\n```\n","\n```php\nisset($DEBUG_LEVEL)\n```\n","\n```php\nconstant_exists('DEBUG_LEVEL')\n```\n","\n```php\ndefined($DEBUG_LEVEL)\n```\n"],[`What is the output of the following PHP script?

\`\`\`php
define('123MESSAGE', '123');
if (strlen(123MESSAGE) == 12) {
 echo 123MESSAGE;
} else {
 echo 'ABC';
}
\`\`\`
`,"Syntax Error","123","ABC123MESSAGE","ABC123"],[`What is the output of the following PHP script?

\`\`\`php
define('SOMEVAL', 0);
if (strlen(SOMEVAL) > 0) {
 echo "Hello";
} else {
 echo "Goodbye";
}
\`\`\`
`,"Hello","Goodbye","Syntax Error","0"],[`What is the output of the following PHP script?

\`\`\`php
define('MYCONSTANT', 0);
if (empty(MYCONSTANT)) {
 echo "Hello";
} else {
 echo "Goodbye";
}
\`\`\`
`,"Hello","Goodbye","Syntax Error","0"],['What is the output of the following script?\n\n```php\n$number = 100;\necho $number < 10 ? "a" : ($number > 100 ? "b" : "c");\n```\n',"c","Syntax Error","a","b"],[`What is the output of the following PHP script?
\`\`\`php
$arr = array(1, 2, 3, 4);
foreach ($arr as $value) {
 $value -= 1;
}

foreach ($arr as &$value) {
 $value *= 2;
}

foreach ($arr as $v) {
 if ($v <= 8) {
 echo $v;
 }
}
\`\`\`
`,"2468","1234","0123","24"],[`What is the output of the following script?

\`\`\`php
$x = 5;
$y = $x << 1;
switch ($x + $y) {
 case 5:
 echo "a";
 break;
 case 10:
 echo "b";
 break;
 case 15:
 echo "c";
 case 20:
 echo "d";
 break;
 default:
 echo "e";
}
\`\`\`
`,"cd","b","ac","bd"],[`What is the output of the following PHP script?

\`\`\`php
$colors = ['r' => 'f00', 'g' => '0f0', 'b' => '00f'];
next($colors);
foreach ($colors as $k => $v) {
 echo $k;
}
reset($colors);
while (list($v, $k) = each($colors)) {
 echo $v;
}
\`\`\`
`,"rgbrgb","rgbgb","rgbf000f000f","gbrgb"],["What is the output of the following PHP script?\n```php\nfor ($i = ord('a'); $i < ord('e'); $i++);\n echo chr($i);\n```\n","e","d","c","abcde"],[`What is the output of the following script?

\`\`\`php
$str = "Hello";
if ($str == "Hello") {
 echo "a";
} else if ($str == "Goodbye") {
 echo "b";
} elseif ($str == "Hello") {
 echo "c";
} else
 echo "d";
\`\`\`
`,"a","b","d","Syntax Error"],[`What is the output of the following PHP script?

\`\`\`php
for ($i = 5; ; $i++) {
 if ($i < 10) {
 break;
 }
}
echo $i;
\`\`\`
Enter the exact script output
`,"5","12345","null","an error"],[`What is the output of the following script?

\`\`\`php
$x = 5;
switch ($x) {
 case 5:
 echo "a";
 break;
 case 10:
 echo "b";
 break;
 case 15:
 echo "c";
 break;
 case 20:
 echo "d";
 break;
 case default:
 echo "e";
}
\`\`\`
`,"Syntax Error","e","a","d"],[`What is the output of the following PHP script?

\`\`\`php
$myArray = array('a', 'b', 'c');
foreach ($myArray as $k => $v) {
 echo $v;
 for ($i = 1; $i < 5; $i++) {
 if ($i == $k) {
 break(2);
 }
 echo $i;
 }
}
\`\`\`

Enter the exact script output
`,"a1234b","abc","1234","34b"],[`What is the output of the following script?
\`\`\`php
$number = 15;
if ($number > 15);
 for ($i = 1; $i < 5; $i++)
 echo $i;

echo $number;
\`\`\`
`,"123415","12345","1234515","1234"],['Consider the following code, stored inside the myInclude.php file.\n```php\n$foo = "Bar";\nreturn $foo;\n```\nWhat happens when you include this script from another script (main.php), given that myInclude.php is calling return when not inside a function.\n','The value "Bar" is the returned to main.php as the result of the include.',"Both myInclude.php and main.php finish execution immediately","Syntax error, you can't return outside of a function","none of above"],[`What is the output of the following PHP script?

\`\`\`php
$myArray = array(1, 2, 3);
for ($i = 0, $length = count($myArray); $i < $length; $i++) {
 echo $myArray[$i];
}
\`\`\`
Enter the exact script output
`,"123","321","1","null"],[`What is the output of the following PHP script?

\`\`\`php
$i = 5;
while (--$i > 0) {
 echo $i + 1;
}
\`\`\`
Enter the exact script output
`,"5432","321","5","4"],[`What is the difference between including a script with include() and require()?
`,"include() produces a warning if the file cannot be included and continues to process the script","include() produces a fatal error if the file cannot be included","require() produces a warning if the file cannot be included and continues to process the script","All are correct"],[`What is the output of the following PHP script?

\`\`\`php
for ($i = 0; $i < 3; $i++) {
 for ($j = 3; $j > 0; $j--) {
 if ($i == $j) {
 break;
 }
 echo $j;
 }
}
\`\`\`
`,"321323","321321321","313213","332321"],[`The following script is supposed to determine the largest value in an array, however, it may not work correctly. Examine the script and recommend changes if required.

\`\`\`php
$ages = array(16, 10, 46, 25, 41);
$largest = -1;
foreach ($ages as $age) {
 if ($largest < 0) {
 $largest = $age;
 break;
 }

 if ($age > $largest) {
 $largest = $age;
 }
}

echo sprintf('The largest age is %d', $largest);
\`\`\`
`,'Change "break" to "continue"',"The comparison between $age and $largest is backwards","Change the sprintf() call to output $age","No changes required"],[`What is the output of the following PHP script?

\`\`\`php
$i = ord('a');
do {
 echo chr($i);
} while ($i++ < ord('f') + 1);
\`\`\`
Enter the exact script output
`,"abcdefg","abc","def","nul"],[`What is the output of the following script?

\`\`\`php
$number = 25;
if ($number <= 25) {
 echo "lte";
} else if ($number == 25) {
 echo "e";
} else if ($number >= 25) {
 echo "gte";
} else {
 echo "o";
}
\`\`\`
Enter the exact script output
`,"lte","ltegteo","gte","o"],[`How do you comment out code in a PHP script?
`,"// Single line comment","Commenting is not possible in PHP scripts","{* Block comment *}","<!-- Block comment -->"],[`What is the output of the following code, if any? Note the extra comma in the array declaration.

\`\`\`php
$anArray = array('x', 'y', 'z');
foreach ($anArray as $k => $val) {
 if ($k == 0) {
 echo $val;
 }
}
\`\`\`
`,"x","y","Syntax Error","z"],[`What is the primary reason for omitting the code ?> in a PHP script?
`,"Prevent accidental output of extra spaces or new-lines at the end of a script","This is not valid, all PHP code blocks must end in ?>","Reduce the size of data being sent to the web browser","Prevent conflicts with included ASP and JSP scripts"],['Is the following code valid, or will it cause a syntax error? Note the missing semi-colon at the end of the statement.\n\n```php\n<?= "Hello" ?>\n```\n',"Valid, this will output Hello","Invalid, will cause a syntax error","valid and will return null","valid and will return an empty string"],[`What is the function used to define a custom error handling function?
`,"set_error_handler","set_exception_handler","error_handler","error_reporting"],[`What expression would you pass to error_reporting() if you want all errors and warnings (including "strict" warnings), but not notices (E_NOTICE)?


`,"\n```php\n(E_ALL | E_STRICT) & ~E_NOTICE\n```\n","\n```php\nE_ALL - E_NOTICE\n```\n","\n```php\nE_ERROR | E_WARNING | E_STRICT\n```\n","\n```php\nE_ALL & !E_NOTICE\n```\n"],[`This question tests your knowledge of boolean values and casting. What is the output of the following PHP script.

\`\`\`php
$myInt = -1;
$myBool = (bool) $myInt;
if ($myBool > 0) {
 echo "5";
} else if ($myBool == true) {
 echo "6";
} else if (!$myBool) {
 echo "7";
} else {
 echo sprintf("%d", $myBool);
}
\`\`\`
Enter the exact script output
`,"5","7","6","-1"],[`What is the output of the following PHP script.

\`\`\`php
$int1 = 25;
$int2 = 10;

$int3 = ceil($int1 / $int2);
$int4 = ceil((int) ($int1 / $int2));

echo $int3 . ' - ' . $int4;
\`\`\`
`,"3 - 2","25 - 2","10 - 25","null"],[`What is the output of the following script. All output values are integers.

\`\`\`php
echo 100;
echo 0xf;
echo 010;
\`\`\`
`,"100158","158100","1000xf010","an error"],[`What is the output of the following PHP script.

\`\`\`php
if ("") {
 echo "a";
} 
if (1) {
 echo "b";
} else if (-2) {
 echo "c";
}
if ("foo") {
 echo "d";
}
if (array(12)) {
 echo "e";
}
if (array()) {
 echo "f";
}
if ("false") {
 echo "g";
}
\`\`\`
`,"bdeg","abc","def","ade"],[`What PHP function is used to create a new array pre-filled with a sequential series of values?
`,"range","random","onload","is_set"],[`What is the output of the following PHP script?

\`\`\`php
$values = [
 10, 20, '0',
 '123hello',
  'hello123'
];
echo array_sum($values);
\`\`\`
Enter the exact script output
`,"153","123hello","hello123","1"],[`The array_search() function is used to determine the array key for a given value. If the value is not found then false is returned. What is the output of the following PHP script?

\`\`\`php
$values = [15, 12, "15", 34, 15 => 25];
$key = array_search("15", $values);
if  (!$key)  {
 echo "Not found";
} else {
 // gettype() will return either 'string' or 'integer'
 echo $key . ' - ' . strtolower(gettype($values[$key]));
}
\`\`\`
`,"Not found","4 - integer","34 - integer","12 - integer"],[`What is the output of the following PHP script?

\`\`\`php
$arr1 = ['a' => 'Apple',  'b' => 'Banana'];
$arr2 = ['b' => 'Banana', 'a' => 'Australia', 'Apple'];
$arr3 = array_diff($arr1, $arr2);
$arr4 = array_diff($arr2, $arr1);
$keys = array_keys($arr4);

echo count($arr3) . ' - ' . $keys[0];
\`\`\`
`,"0 - a","0 - 0","1 - b","2 - a"],[`Which of the following statements best describes the purpose of PHP's extract() function? This function accepts an array as its first argument.


`,"A variable is created in the current scope for each element in the given associative array.","The second argument is used to specify a data type (such as 'string'). All values in the passed array of that type are returned in a new array.","The passed array is populated by any variables in the current scope.","Any ZIP files referenced in the passed array are extracted to the current working directory."],[`What is the output of the following code?

\`\`\`php
$myArray = array();
array_unshift($myArray, 10, 20);
echo $myArray[0];
\`\`\`
`,"10","20","2","0"],[`What line should be added to the cleanArray() function below to ensure this script outputs 1525hello?

\`\`\`php
function cleanArray($arr) {
 $functions = array();
 /** line **/
 $ret = $arr;
 foreach ($functions as $func) {
 $ret = $func($ret);
 }
 return $ret;
}

$values = [15, '', 0, 25, 'hello', 15];
foreach (cleanArray($values) as $v) {
 echo $v;
}
\`\`\`
`,"\n```php\narray_push($functions, 'array_filter', 'array_unique');\n```\n","\n```php\narray_pop($functions, 'array_clean');\n```\n","\n```php\narray_push($functions, 'array_reduce');\n```\n","\n```php\n$arr = array_clean($arr);\n```\n"],["Consider the following PHP code:\n\n```php\n$myArray = [10, 20, 30, 40];\n```\nWhat is the simplest way to return the values 20 and 30 in a new array without modifying $myArray?\n","\n```php\narray_slice($myArray, 1, 2);\n```\n","\n```php\narray_splice($myArray, 10, 20);\n```\n","\n```php\narray_splice($myArray, 1, 2);\n```\n","\n```php\narray_splice($myArray, 2, 1);\n```\n"],[`What is the primary difference between array_key_exists() and isset() when checking to see if a given array element exists?

`,"isset() will return false if the key exists but has a null value","isset() will trigger a PHP warning if the element doesn't exist","array_key_exists() is faster","isset() will create an empty value in the array if it doesn't exist"],[`What function is used to remove and return the first element of an array?
`,"\n```php\narray_shift()\n```\n","\n```php\narray_grab()\n```\n","\n```php\narray_pull()\n```\n","\n```php\narray_pop()\n```\n"],["What is the output of the following PHP code?\n```php\n$myArray = [0, NULL, '', '0', -1];\necho count(array_filter($myArray));\n```\n","1","5","3","4"],[`What PHP function is used to return an array containing values present in two or more passed arrays?
`,"\n```php\narray_intersect()\n```\n","\n```php\narray_walk()\n```\n","\n```php\narray_common()\n```\n","\n```php\narray_union()\n```\n"],[`Which function is used to return true if a given value exists in an array (and false if it doesn't)?
`,"\n```php\nin_array()\n```\n","\n```php\narray_value_exists()\n```\n","\n```php\narray_key_exists()\n```\n","\n```php\nhas_value()\n```\n"],[`Which of the following statements best describes what happens to an array when array_shift() is called on it?


`,"All numerical array keys are modified to start from 0 and literal keys are untouched","The removed element's key still exists in the array but its value is NULL","All array keys are modified to start from 0 regardless of whether they're numerical or literal","Remaining array keys are untouched"],[`How do you determine the number of elements in array?
`,"count","max","sizeOf","on_array"],[`In the following code, what are the values required in $a, $b, $c and $d to output 40?

\`\`\`php
$values = array(
 array(
 1 => 10,
 20,
 array(30, array(40))
 ),
 array(
 2 => 50,
 array(
 array(1 => 60, 0 => 70)
 )
 )
);

echo $values[$a][$b][$c][$d];
\`\`\`
`,"$a = 0, $b = 3, $c = 1, $d = 0","$a = 0, $b = 1, $c = 1, $d = 0","$a = 0, $b = 1, $c = 0, $d = 0","$a = 1, $b = 3, $c = 1, $d = 0"],[`How do you remove an element with the key 0 from the array $numbers?


`,"\n```php\nunset($numbers[0]);\n```\n","\n```php\narray_shift($numbers);\n```\n","\n```php\n$numbers[0] = null;\n```\n","\n```php\narray_pop($numbers);\n```\n"],[`How do you create an array called $arr consisting of a single element with the value 15?
`,"\n```php\n$arr = array(15);\n```\n","\n```php\n$arr = array_shift(15);\n```\n","\n```php\n$arr = new array(15);\n```\n","\n```php\n$arr = array_push(15);\n```\n"],["In the following code, what is the key of the element with value 25?\n\n```php\n$myArray = ['foo' => 'bar', 7 => 15, 28];\n$myArray[] = 25;\n```\n","9","29","0","null"],["Is the following PHP code valid or will it generate an error, warning or notice?\n\n```php\nerror_reporting(E_ALL | E_STRICT);\n$newArray[E_STRICT] = 'foo';\n```\n","Yes, it's completely valid","Invalid, you must define $newArray by calling array() first","Invalid, E_STRICT is not defined","Invalid, you cannot use a constant as an array key"],[`Consider the following PHP script, used to apply a callback function to every element of an array.

\`\`\`php
function square($val) {
 return pow($val, 2);
}
$arr = [1, 2, 3, 4];
/** line **/
$i = 0;
foreach ($squares as $value) {
 if ($i++ > 0) {
 echo ".";
 }
 echo $value;
}
\`\`\`

What line of code should be substituted with /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var line tests/ zce/ to achieve an output of 1.4.9.16?
`,"\n```php\n$squares = array_map('square', $arr);\n```\n","\n```php\n$squares = array_walk($arr, 'square');\n```\n","\n```php\n$squares = call_user_func_array($arr, 'square');\n```\n","\n```php\n$squares = call_user_func_array('square', $arr);\n```\n"],[`What is the output of the following PHP script?

\`\`\`php
$arr = array_flip(['a' => 1, 'b' => 2, 'c' => 3]);
foreach (array_values($arr) as $k => $v) {
 echo $k;
}
\`\`\`
`,"012","abc","210","cba"],[`What is the output of the following PHP script?
\`\`\`php
$cars = ['year' => 2010, 'make' => 'Porsche', 'model' => 911];
while ($value = next($cars)) {
 echo $value;
}
\`\`\`
`,"Porsche911","2010Porsche911","Porsche 911","2010 Porsche 911"],[`What is the output of the following PHP script?

\`\`\`php
$car = ['year'  => 2010, 'make'  => 'Porsche', 'model' => 911];
next($car);
foreach ($car as $k => $v) {
 echo $v;
}
\`\`\`
Enter the exact script output
`,"2010Porsche911","2010 Porsche 911","012","an error"],[`What is the output of the following PHP script?

\`\`\`php
$numbers = array(5, 6, 7, 8);
end($numbers);
while (key($numbers)) {
 echo current($numbers);
 prev($numbers);
}
\`\`\`
`,"876","5678","321","8765"],[`Which of the following phrases best describes what is required to make this script output 41234?

\`\`\`php
class SomeClass {
 private $_values = [1, 2, 3, 4];
}
$obj = new SomeClass;
echo count($obj);
foreach($obj as $v) {
 echo $v;
}
\`\`\`
`,"SomeClass needs to implement Iterator and Countable","SomeClass needs to implement Iterator","SomeClass needs to implement IteratorAggregate","A for() loop should be used instead of foreach()"],[`The PHP function array_reduce() is used to turn an array into a single value using a custom callback. What is the output of the following script?

\`\`\`php
function reducer($total, $elt) {
 return $elt + $total;
}
$arr = [1, 2, 3, 4, 5];
echo array_reduce($arr, 'reducer', 1);
\`\`\`
`,"16","14","0","15"],[`Which of the following statements best describes the shuffle() function. This function accepts an array as its first argument.


`,"The original array is modified so elements are now in a random order. New keys are assigned to elements.","A new array is returned with elements in a random order. New keys are assigned to elements.","The original array is modified so elements are now in a random order. Each value retains its original key.","A new array is returned with elements in a random order. Each value retains its original key."],[`In the PHP script below, what line of code should be substituted with /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var line tests/ zce/ to achieve an output of eeeeee?

\`\`\`php
function sortByLength($a, $b) {
 $lenA = strlen($a);
 $lenB = strlen($b);
 if ($lenA == $lenB) { return 0; }
 /** line **/
}

$values = ['ccc', 'a', 'eeeeee', 'dddd', 'bb', 'fffff'];
usort($values, 'sortByLength');
echo $values[5];
\`\`\`
`,"\n```php\nreturn $lenA < $lenB ? -1 : 1;\n```\n","\n```php\nreturn $lenA < $lenB ? 1 : -1;\n```\n","\n```php\nreturn $lenA > $lenB ? -1 : 1;\n```\n","\n```php\nreturn $lenA < $lenB ? 0 : -1;\n```\n"],[`Remembering that keys are not reset when using natsort(), what is the output of the following PHP script?

\`\`\`php
$filenames = array(
 'img12.png',
 'img7.png',
    'img21.png',
    'img1.png'
);

natsort($filenames);
$values = array_values($filenames);
echo $values[1];
\`\`\`
Enter the exact script output
`,"img7.png","img12.png","img121.png","img1.png"],[`What is the output of the following PHP script?

\`\`\`php
$values = array(37, 5, "09");
$sorted = sort($values, SORT_STRING);
foreach ($sorted as $v) {
 echo $v;
}
\`\`\`
`,"PHP warning: sort() doesn't return an array","09537","37509","50937"],[`When defining a custom sorting callback for functions such as usort(), uksort() or uasort(), you must return 0 if two elements are considered equal. Which of the following statements best describes how PHP treats equal elements during sorting?
`,"The order is undefined, meaning you cannot guarantee which element appears first in the sorted array","The element which was first in the unsorted array will be first in the sorted array","PHP randomly sorts equal elements to decide their order in the sorted array","PHP automatically sorts equal elements using the same algorithm as sort() to decide their order in the sorted array"],[`Consider the following PHP code, which defines an associative array of fruits and vegetables.

\`\`\`php
$fruitAndVeg = array(
        'c' => 'Carrot',
        'p' => 'Tomato',
        'b' => 'Banana',
        't' => 'Potato',
        'a' => 'Apple'
);

/** line **/

$keys = array_keys($fruitAndVeg);
echo $keys[0];
\`\`\`
What line of code should be substituted with /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var line tests/ zce/ to achieve an output of a?
`,"\n```php\nksort($fruitAndVeg);\n```\n","\n```php\nusort($fruitAndVeg);\n```\n","\n```php\nsort($fruitAndVeg);\n```\n","\n```php\nkeysort($fruitAndVeg);\n```\n"],[`What is the output of the following PHP script?

\`\`\`php
$values = array(37, 5, "09");
sort($values, SORT_STRING);
foreach ($values as $v) {
 echo $v;
}
\`\`\`
`,"09375","09537","53709","50937"],[`What is the output of the following PHP script?

\`\`\`php
$subs = ['@' => '<at>', 'com' => 'net'];
$email = "your_name@mail.com";
echo strtr($email, $subs);
\`\`\`
Enter the exact script output
`,"your_name<at>mail.net","your_name<at>mail.com","an error","an empty string"],[`The following script defines a function called buildUrl(), which is intended to be a crude way of normalizing URLs. What line of code must be inserted into buildUrl() to ensure $url1 and code $url2 are both equal to http://phpriot.com/quiz/?


\`\`\`php
function buildUrl($domain, $path) {
 // insert line of code here
 return $ret;
}

$domain1 = 'http://phpriot.com/';
$domain2 = 'http://phpriot.com';
$path    = '/quiz/';

$url1 = buildUrl($domain1, $path);
$url2 = buildUrl($domain2, $path);
\`\`\`
`,"\n```php\n$ret = rtrim($domain, '/') . '/' . ltrim($path, '/');\n```\n","\n```php\n$ret = $domain . trim($path, '/');\n```\n","\n```php\n$ret = $domain . ltrim($path, '/');\n```\n","\n```php\n$ret = $domain . '/' . ltrim($path, '/');\n```\n"],[`The str_pad() function is used pad a string to a given length using another string. What is the output of the following PHP script?


\`\`\`php
$number = 5;
$len    = 3;
$pad    = '0';
echo str_pad($number, $len, $pad, STR_PAD_LEFT);
\`\`\`
`,"005","500","000","30000"],[`What is the key difference between Heredoc and Nowdoc syntax?
`,"Heredoc parses for variable interpolation whereas Nowdoc doesn't","Heredoc is used for assigning to variables whereas Nowdoc outputs immediately","Nowdoc supports multibyte characters whereas Heredoc does not","There's no such thing as Nowdoc"],[`What is the PHP function used to determine the length of a string?
`,"\n```php\nstrlen()\n```\n","\n```php\nsize()\n```\n","\n```php\ncount()\n```\n","\n```php\nlength()\n```\n"],[`What is the output of the following script?

\`\`\`php
$name = 'Judy';
$str1 = <<<EOF
Hello $name
EOF;
$str2 = <<<'EOF'
Goodbye $name;
EOF;

if (strpos($str1, $name) === false) {
 echo 'a';
} else {
  echo 'b';
}

if (strpos($str2, $name) === false) {
  echo 'c';
} else {
  echo 'd';
}
\`\`\`
`,"bc","Syntax Error","ac","bd"],[`What is the output of the following PHP script?

\`\`\`php
$str = 'stingers';
echo strtr($str, 'st', 'bl');
\`\`\`
Enter the exact script output
`,"blingerb","stingerbl","stingers","bltingers"],[`What is the output of the following script?

\`\`\`php
$str = 'val1,val2,,val4,';
echo count(explode(',', $str));
\`\`\`
Enter the exact script output
`,"5","4","6","0"],[`What is the PHP function used to make a string all upper-case?
`,"strtoupper","toupper","uppercase","upperCaseString"],[`The parse_str() function is used to parse a query string just as if it were passed in the URL of a HTTP request. If the second argument is included then the parsed values are written to this variable. What is the output of the following script?

\`\`\`php
$str = "days=Mon&days=Wed" . "&fruit[1]=Apple&fruit[]=Banana&age=13";
parse_str($str, $output);
// gettype will return 'array' or 'string'
echo gettype($output['days']);
echo ' - ';
// array_search will return the key
// where the first argument is located
echo array_search('Banana', $output['fruit']);
echo ' - ';
echo array_key_exists('age', $output) ? $output['age'] : 0;
\`\`\`
Enter the exact script output
`,"string - 2 - 13","string - 2","string - 13","an error"],[`What is the output of the following script?

\`\`\`php
$html = '<p>line1line2</p>';
echo strip_tags($html, 'br');
\`\`\`
Enter the exact script output
`,"line1line2","line1<br>line2","line1<br>line2<br>","line1line2<br>"],[`What is the PHP function used to make a string all lower-case?
`,"strtolower","lower","lowercase","lcstring"],[`What is the output of the following script?
\`\`\`php
$name = 'John';
$str = <<<EOF
Hello $name
 EOF;

echo trim($str);
\`\`\`
`,"Syntax error (EOF must appear at the start of the line)","Hello John","Hello $name","Hello name"],[`Which of the following statements best describes the difference between delimiting PHP strings with single or double quotes?
`,"Double quotes allows special escape sequences (such as new lines) and variable substitution, where single quotes are treated literally","Single-quoted strings run commands on the local server and return the output","Single quotes are used for single characters only, like in C","It makes no difference which type of quotes you use"],[`Using htmlspecialchars() is useful for preventing malicious JavaScript from executing, as well as for generating valid HTML. What is the output of the following script?

\`\`\`php
$str = <<<EOF
<p>me & you
EOF;
echo htmlspecialchars($str);
\`\`\`
`,"&lt;p&gt;me &amp; you","<p>me & you","<p>me &amp you","<p>me &amp; you"],[`The following code is intended to format an upper-case string, but it requires two values to be assigned to the $funcs array. Select the line of code that must be inserted for Correct to be output.

\`\`\`php
$str = 'MY STRING';
$funcs = array();

// which line goes here?

foreach ($funcs as $func) {
  $str = $func($str);
}

echo ($str == 'My string')  ? "Correct" : "Incorrect";
\`\`\`
`,"\n```php\narray_push($funcs, 'strtolower', 'ucfirst');\n```\n","\n```php\narray_push($funcs, 'ucwords', 'strtolower');\n```\n","\n```php\narray_push($funcs, 'ucfirst', 'strtolower');\n```\n","\n```php\narray_push($funcs, 'strtolower', 'ucwords');\n```\n"],[`What is the output of the following script?

\`\`\`php
$str = 'abcd';
echo substr($str, 0, 1);
echo substr($str, 0, -1);
echo substr($str, 3, 1);
echo substr($str, 3);
echo substr($str, -3);
\`\`\`
Enter the exact script output
`,"aabcddbcd","abc","dec","a"],["What is the output of the following PHP script?\n\n```php\necho strcmp(5678, '5678'); \n```\n","0","-1","1","false"],[`One way to compare strings in PHP is by using the strcmp() function. This is useful since not only can you determine if two strings are equal, but you can also test if one string is 'greater than' the other (using the corresponding ASCII values in each character comparison). What is the output of the following PHP script?

\`\`\`php
$test1 = strcmp('hello', "hello");
$test2 = strcmp("Hello", "hello");
$test3 = strcmp('60', '500');

if ($test1 == 0)     { echo "a"; }
else if ($test1 < 0) { echo "b"; }
else                 { echo "c"; }

if ($test2 == 0)     { echo "d"; }
else if ($test2 < 0) { echo "e"; }
else                 { echo "f"; }

if ($test3 == 0)     { echo "g"; }
else if ($test3 < 0) { echo "h"; }
else                 { echo "i"; }
\`\`\`
Enter the exact script output
`,"aei","a","iuo","bei"],[`The strpos() function is used to determine the position in a string of the given search string. If the search string cannot be found, false is returned. What is the output of the following script?

\`\`\`php
$haystack = 'abcda';
$needle   = 'a';
$pos = strpos($haystack, $needle);

if (!$pos) {
 echo "miss";
} else {
    echo "hit " . $pos;
}
\`\`\`
Enter the exact script output
`,"miss","hit3","hit0","hit1"],[`Because PHP dynamically converts variables to different types as needed, you must be careful when performing string comparisons. What is the output of the following PHP script?

\`\`\`php
$str1 = '57 channels';
$str2 = '1/2 a pack of cigarettes';
$str3 = '0x10';

if ($str1 == 57) { echo 'a'; }
else { echo 'b'; }

if ($str2 == 0.5)    { echo 'c'; }
else if ($str2 == 1) { echo 'd'; }
else { echo 'e'; }

if ($str3 == 0) { echo 'f'; }
else if ($str3 == 16) { echo 'g'; } // 0x10 is 16 in decimal
else if ($str3 == 0x10) { echo 'h'; }
\`\`\`
`,"adf","abc","def","aj"],[`What is the output of the following PHP script?
\`\`\`php
$a = 0.5;
$b = 0.1;
$c = 16;
echo sprintf('%01.2lf %.1lf 0x%x', $a, $b, $c);
\`\`\`
`,"0.50 0.1 0x10","0.50 .1 0x10","0.50 0.1 0x16","0.5 0.1 0x16"],[`What is the output of the following string?

\`\`\`php
$str = printf('%.1f', 7.1);
echo trim('PHP ' . $str);
\`\`\`
Enter the exact script output
`,"7.1PHP 3","3PHP7.1","an error","37.1"],[`What value should be assigned to $format to ensure the following script outputs 250007? It must use the d formatter.

\`\`\`php
$number1 = 250;
$number2 = 7;
$format = '???';
echo sprintf($format, $number1);
echo sprintf($format, $number2);
// output is 250007
\`\`\`
Do not include quotes
`,'"%1$03d"',"0","an error","it is imposible"],[`The sscanf() function is to some extent the opposite of sprintf(), in that it extracts values from a string based on a formatting string. What is the output of the following PHP script?

\`\`\`php
$str = 'I am 30';
$vals = sscanf($str, '%s %d');
echo trim($vals[0] . ' ' . $vals[1]);
\`\`\`
`,"I","30","null","'' ( an empty string)"],[`One way to format currencies in PHP is to use the built-in money_format() function. Before using it you must set the locale for the type of currency you're trying to format. What is the output of the following PHP script? The currency name for en_US is USD and uses $ as the currency symbol. Additionally, there are 100 cents to the dollar.

\`\`\`php
setlocale(LC_MONETARY, 'en_US');
$amt = 100;
echo money_format('%.2n', $amt);
\`\`\`
`,"$100.00","USD100.0","$1.00","USD $100"],[`Which of the following statements best describes how number_format() works?
`,"It is not locale-aware. It will use commas for thousands and periods for decimals unless you indicate otherwise in the function call","It will auto-detect how to separate thousands and decimals based on the input string","It is locale-aware. You must ensure that setlocale() has been called in order for numbers to output according the given location","This function does not exist"],[`Given the following PHP code, what value must be assigned to $format so each digit is extracted individually in the call to sscanf()?

\`\`\`php
$str = '31337';
$format = '???';
$digits = sscanf($str, $format);
var_dump($digits);
\`\`\`
`,"%1d%1d%1d%1d%1d","%d%d%d%d%d","%d","%s"],[`What is the output of the following:

\`\`\`php
$m = 3;
$n = 0;
function l() {
   $m = 0;
   $m++;
   global $n;
   return array($n,$m);
}
echo implode((L(l())),',');
\`\`\`
`,"0,1","0,5","0,4","An error"],[`What would be output when the following code is run?

\`\`\`php
class M {
   function m() {
      echo "M";
   }
   function construct() {
      echo "mmm";
   }
}
$m = new M();
$m->m();
\`\`\`
`,"MM","MMmmm","mmMMM","mmm"],[`Which of the following could be used to add a book to an existing SimpleXMLElement object stored in $library representing a collection of books?
`,'\n```php\n$library->addChild("title", "Best book ever")\n```\n','\n```php\n$library->addChild(new SimpleXMLElement("title", "Best book ever"))\n```\n','\n```php\n$library->children()->add("title", "Best book ever")\n```\n','\n```php\n$library->xpath(new SimpleXMLElement("title", "Best book ever"))\n```\n'],["What is the output of the following line of code:\n\n```php\n$a = 4 << 2 + 1;\necho $a;\n```\n","32","9","16","17"],[`How would you parse a web page at http://example.com/page.php as XML?
`,"DOMDocument::loadHTML(file_get_contents('http://example.com/page.php'));","You can't; it must be well-formed XML.","DOMDocument::loadFile('http://example.com/page.php');","simple_xml_load_html('http://example.com/page.php');"],[`How many parameters does array_merge() accept?
`,"As many as you want","3","2","1"],[`What would you expect to get from PDOStatement::fetch() in its default mode?
`,"An array containing both associative and enumerated keys","Both an object and an array","An associative array","An enumerated array"],[`What is the output of the following code?

\`\`\`php
$pattern = '/[a-z]{4} /';
$string = 'Mary had a little lamb';
$matches = preg_match($pattern, $string);
print_r($matches);
\`\`\`
`,"1","2","null","4"],[`What is PDO::query() equivalent to?
`,"prepare(), execute()","execute(), fetch()","prepare(), fetch(), execute()","prepare(), fetch()"],[`Which HTTP status code asks a user to provide credentials?
`,"401","404","204","200"],[`What would be the output of this script?

\`\`\`php
ob_start();
echo "dreaming";
$ob = ob_get_contents();
echo strlen($ob);
ob_flush();
\`\`\`
`,"dreaming8","8 dreaming8","null","dreaming"],[`What does status code 403 indicate?
`,"Forbidden","Resource not found","Not modified","403 is not a valid status code"],[`What is the output of the following code?

\`\`\`php
$a = "a, b,c, d, e f, g";
$b = array_merge(explode(', ', $a), array("a", "b"));
echo count($b);
\`\`\`
`,"7","9","5","3"],["What is the output of this line of code?\n\n```php\n<?= 8 + 0x8 + 80 + 0x80; ?>\n```\n","224","156","88","72"],[`Which of the following functions would be a valid way to create an array containing items from three existing arrays?
`,"\n```php\narray_merge()\n```\n","\n```php\narray_combine()\n```\n","\n```php\narray_splice()\n```\n","\n```php\narray_keys()\n```\n"],["What is the output of the following line of code?\n```php\necho \"4\" + 05 + 011 + ord('a');\n```\n","115","An error","18","117"],[`What is the output of the following?

\`\`\`php
$a = 7;
$b = 4;
function b($a, $b) {
   global $a, $b;
   $a += 7;
   $a++;
   $b += $a;
   return true;
}
echo $b, $a;
\`\`\`
`,"47","1419","74","1519"],[`Is the following valid PHP code?

\`\`\`php
<php>
echo 'There's a worm in my apple';
</php>
\`\`\`
`,"no","yes","only in php 4","only if we are using Laravel framework"],[`What is the output of:

\`\`\`php
$a = "0";
echo strlen($a);
echo empty($a) ? $a : 5;
echo $a ?: 5;
\`\`\`
`,"105","100","050","005"],["What would happen when the following code was run?\n```php\ndefine('Tree', 'oak');\necho 'This tree is: ' . tree;\n```\n","This tree is: tree (and a notice)","A notice","This tree is: oak (and a notice)","An error"],["What is the output of the following code?\n\n```php\n$a = 42 & 05 + 17;\necho $a;\n```\n","2","17","0","64"],[`What will the output of the following code be?

\`\`\`php
$a = range(3,9);
foreach ($a as $b) {
   switch($b) {
      case 3:
      $b = 7;
      case 7:
      $b = 3;
      default:
      // do nothing
   }
}

echo implode('-',$a);
\`\`\`
`,"3-4-5-6-7-8-9","7-4-5-6-7-8-9","3-4-5-6-7-8-9-10-11","7-4-5-6-3-8-9"],[`What is the output of (Assuming you are running in PHP 7.1):
\`\`\`php
$a = 10;
echo strlen($a) . count($a);
do {
   echo $a . "elephpant ";
   $a++;
} while($a <= 1);
\`\`\`
`,"2110elephpant","12","1210elephpant","21"],[`What is the output of this code:

\`\`\`php
function c($a, $b = 1, $c) {
   return array($c, $a, $b);
}
list($a, $b, $c) = c(0,0,0);
echo $b;
\`\`\`
`,"0","1","2","null"],[`What is the output of the following code:

\`\`\`php
function a($a) {
   echo $a . "&";
}
function b($a) {
   echo "-" . $a;
}
$a = "!";
$b = &$a;
echo a(b($b));
\`\`\`
`,"-!&","-!!&","!&-&","-&!"],[`Is this statement true or false? "Methods declared as static must be called statically"


`,"False","True","0","1"],[`What is the output of this code?

\`\`\`php
$wish_list = array(
 1 => "Romeo and Juliet",
   4 => "Bad Science",
   2 => "To Kill A Mockingbird"
);
print_r(sort($wish_list));
\`\`\`
`,"1","Array ( [1] => Romeo and Juliet [4] => Bad Science [2] => To Kill A Mockingbird )","Array ( [1] => Romeo and Juliet [2] => To Kill A Mockingbird [4] => Bad Science )","Array ( [0] => Bad Science [1] => Romeo and Juliet [2] => To Kill A Mockingbird )"],[`ArrayAccess is an example of a:
`,"interface","design pattern","object","class"],[`Using the notation self::$property refers to:
`,"The class property $property in this class","A property of the current object","The $property of the current object","The class constant $property in this class"],[`Which of the following is a valid namespace operator in PHP?
`,"\\","::","@","/"],[`What is the output of the following code?

\`\`\`php
function print_conditional() {
   static $x;
   if ($x++ == 1) echo "many";
   echo "good";
   echo "things";
   return $x;
}

$x = 1;
print_conditional();
$x++;
print_conditional();
\`\`\`
`,"goodthingsmanygoodthings","manygoodthingsmanygoodthings","manygoodthings","goodthingsgoodthings"],[`What does the html_errors configuration directive do?
`,"Apply HTML formatting to PHP errors","Enable reporting of invalid HTML output","Show PHP errors on webpages","html_errors is not a valid configuration directive"],[`What is the output of the following code?

\`\`\`php
$a = 1;
function calculate() {
   global $a;
   $a += 7;
   $a = $a * 043;
   return --$a;
}
echo $a;
\`\`\`
`,"1","342","279","0"],[`What is the output of the following code?

\`\`\`php
function format(&$item) {
   $item = strtoupper($item) . '.';
   return $item;
}
$shopping = array("fish", "bread", "eggs", "jelly", "apples");
array_walk($shopping, "format");
$shopping = sort($shopping);
echo $shopping[1];
\`\`\`
`,"nothing (no output)",'"APPLES."','"apples"','"BREAD."'],[`What is the output of the following code?

\`\`\`php
class Content {
   public function publish() {
      $this->published = true;
      $this->article();
      return true;
   }
   protected function article() {
      echo "<i>Article:</i>";
   }
}
class Article extends Content
{
   public function article() {
      echo "<i>Post:</i>";
   }
}

$post = new Article();
echo $post->publish();
\`\`\`
`,"<i>Post:</i><i>Post:</i>1","<i>Post:</i>","an Error","<i>Article:</i>"],[`Given the following code:

\`\`\`php
Interface Verifiable {
 public function verify();
}

Class Cheque {
 public function verify() {
 return true;
 }
}

Class CurrencyCheque extends Cheque implements Verifiable 
{
 // interesting stuff happens
}

$obj = new CurrencyCheque();
\`\`\`
What happens when we instantiate a CurrencyCheque object?
`,"A new CurrencyCheque object is created","An warning because the interface isn't implemented","The method must be redefined in CurrencyCheque","An error that the interface must be defined in the parent object"],[`What is the output of the following code?

\`\`\`php
if(strcmp("hi", "HI")) echo "hello";
elseif(strcasecmp("hi","HI")) echo "world";
else throw new Exception("HI");
\`\`\`
`,'"hello"','"world"',"an Exception","nothing (no output)"],['How can you recover the original information from this string?\n```php\na:4:{i:2;s:3:"foo";i:3;s:4:"spot";i:4;s:6:"stripe";s:3:"bar";i:64;}\n```\n',"using unserialize()","using json_decode()","using the mcrypt extension","using a database library"],["What is the output of the following?\n\n```php\necho chr((ord('a') + ord('A'))/2);\n```\n","Q","A","0","1"],[`What is the output of the following?

\`\`\`php
$a = 0xf2 + 0x09;
$b = $a >> 3;
echo $b;
\`\`\`
`,"31","0","27","7"],[`Which of the following would allow you to send a POST request to a remote resource via file_get_contents()?
`,'\n```php\nstream_context_create(["http" => ["method" => "POST"]]);\n```\n',"\n```php\n# You can't, use the curl extension or an equivalent\n```\n",'\n```php\nstream_context(["method" => "POST"]);\n```\n','\n```php\n["method"=>"post"];\n```\n'],[`Which function would you use to re-order an array by its keys?
`,"ksort","sort","asort","usort"],[`What does the chr() function do?
`,"Returns the character for a given ascii code","Returns the ascii code of the given character","Returns the ascii codes for all characters in the string as an array","Returns the character at a given offset"],[`The Active Record design pattern is used for which of the following?
`,"Easily storing and retrieving objects in the database","Creating audit trails of all file changes","Integrating PHP and Ruby on Rails projects","Separating business and presentation logic within a system"],[`With a single existing cookie set for this domain with the key "theme" and the value "green", what does the following code output?

\`\`\`php
print_r($_COOKIE);
setcookie('theme', NULL, time() - 3600);
print_r($_COOKIE);
unset($_COOKIE);
print_r($_COOKIE);
\`\`\`
`,"\n```php\nArray ( [theme] => green ) Array ( [theme] => green )\n```\n","\n```php\nan error\n```\n","\n```php\nArray ( [theme] => green )\n```\n","\n```php\nArray ( [theme] => green ) Array ( [theme] => green ) Array ( [theme] => green )\n```\n"],[`What does the following code output?
\`\`\`php
$i = function($j) {
   $i = $j + 4;
   return $i++;
};
$j = 6;
echo $i($j);
\`\`\`
`,"10","syntax error","nothing","11"],[`What is the output of the following code?
\`\`\`php
function swings(&$park) {
   $park++;
   $park = roundabout($park);
}
function roundabout($park) {
   $park *= 2;
}

$park = 17;
echo swings($park);
\`\`\`
`,"nothing","19","37","36"],[`What is the output of the following code?

\`\`\`php
function print_conditional($x) {
   if ($x++ == 1) echo "none";
   echo "one";
   echo "none";
   return $x;
}
$x = 1;
print_conditional($x);
$x++;
print_conditional($x);
\`\`\`
`,"noneonenoneonenone","onenone","nonenoneonenone","onenoneonenoneonenone"],[`Which object method is automatically called when an object is cloned?
`,"\n```php\n__clone()\n```\n","\n```php\n__copy()\n```\n","\n```php\n__wakeup()\n```\n","\n```php\n__drone()\n```\n"],[`What is the output of the following code?

\`\`\`php
$g = range(5,8);
$h = array("a", "b", "c", "e");
for($i = 0; $i < count($g); $i++) {
   foreach ($h as $j) {
      echo $i.$j;
      break;
   }
}
\`\`\`
`,"0a1a2a3a","5a6a7a8a","0a0b0c0e","0a0b0c0e1a1b1c1e2a2b2c2e3a3b3c3e"],[`What is the output of the following code?

\`\`\`php
$s = "This sentence contains many words";
$r = explode(' ', ucfirst($s));
sort($r);
echo implode(',', $r);
\`\`\`
`,"This,contains,many,sentence,words","This Sentence Contains Many Words","This,Sentence,Contains,Many,Words","This contains many sentence words"],[`Given a class called SoapFunctions and a working WSDL for the methods in that class, what needs to be added to the code below to serve those methods over SOAP?

\`\`\`php
require("SoapFunctions.php");
$s = new SoapServer($wsdl);
$s->handle();
\`\`\`
`,'$s->setClass("SoapFunctions");','$s->setHandler("SoapFunctions");','set_soap_class($s, "SoapFunctions");','set_soap_handler($s, "SoapFunctions");'],[`Which function would transform the string "excellent PHP functions" into the string "Excellent PHP Functions"?
`,"ucwords","ucfirst","upercase","make_upper"],[`What is the output of the following code?
\`\`\`php
class M {
   public function identify() {
      echo self::myName();
   }
   public function myName() {
      return "Mike";
   }
}
class N extends M {
   public function myName() {
      return "November";
   }
}
function m(N $n) {
   $n->identify();
}
$m = new N();
m($m);
\`\`\`
`,"Mike","Fatal error","Catchable fatal error","November"],[`What is the output of the following code?

\`\`\`php
$a = "Apple";
echo <<<'A'
pass me that $a
A;
\`\`\`
`,"pass me that $a","syntax error",'"pass me that Apple"','"pass me that apple"'],[`How would you change a SimpleXMLElement object into a DOMElement? (choose two)
`,"using dom_import_simplexml()","convert SimpleXMLElement to XML, then create a DOMElement from the XML","using simplexml_export_dom()","SimpleXMLElement::asDom()"],[`What is the preferred way of writing the value 25 to a session variable called age?
`,"\n```php\n$_SESSION['age'] = 25;\n```\n","\n```php\n$age = 25; session_regiser('age');\n```\n","\n```php\nsession_register('age', 25);\n```\n","\n```php\n$HTTP_SESSION_VARS['age'] = 25;\n```\n"],[`By default PHP stores its sessions on the web server's filesystem. What function is used to tell PHP to use your custom session storage handler?
`,"session_set_save_handler","session_save","session_handler","session_set"],[`What is the output of this script the third time it is loaded in a browser by the same user?
\`\`\`php
session_start();
if (!array_key_exists('counter', $_SESSION)) {
 $_SESSION['counter'] = 0;
} else {
 $_SESSION['counter']++;
}
session_regenerate_id();
echo $_SESSION['counter'];
\`\`\`
`,"2","1","3","0"],[`Session fixation - a commonly-used session-based attack - can be prevented simply by giving a user a new session ID whenever they obtain a new level of permission on a site (for instance, after they successfully login). Which PHP function is used to change the ID for an active session?
`,"session_regenerate_id","session_close","session","session_set"],[`Which of the following statements best describes session fixation?
`,"An attacker forces an unsuspecting user to use a particular session. Once the user has authenticated the user can access the site with the user's elevated access level.","An attacker embeds malicious JavaScript on a site which causes an unsuspecting authenticated user to perform a privileged action without their knowledge.","An attacker embeds malicious JavaScript on a site which causes an unsuspecting authenticated user to transit sensitive information (such as session ID) to a third-party web site.","An attacker discovers an unsuspecting authenticated user's session ID in order to access the site with the user's elevated access level."],[`How do you initiate the use of sessions in PHP?
`,"Set the session.auto_start configuration setting","Sessions are always automatically started in PHP","Call start_session()","Call session_register()"],[`What is the result of the following code?
\`\`\`php
function foo(string $a, ?string $b) : ?int {
 return $b ? $a <=> $b : null;
}
echo foo('PHP', 7);
\`\`\`
`,"1","A type error because function should return int but instade return string;","0","A syntax error because ?string and ?int does not exist in PHP7"],[`If a function expects a parameter of type iterable, what can you do to send an object?
`,"You implement Iterable interface in your class","You implement __iterate magic method in your class","You implement Traversable interface in your class","only array are considered iterable, so you cannot send object"],[`Which of the following is not a valid fopen() access mode:



`,"b","x","a","w"],[`What is the output of?
\`\`\`php
function apple($apples = 4) {
 $apples = $apples / 2;
 return $apples;
} 
$apples = 10;
apple($apples);
echo $apples;
\`\`\`
`,"10","2","5","null"],[`What is the output of?

\`\`\`php
function apple(&$apples = 4) {
 $apples = $apples / 2;
 return $apples;
}
$apples = 10;
apple($apples);
echo $apples;
\`\`\`
`,"5","10","2","null"],[`Consider the following code snippet:

\`\`\`php
$query = "INSERT INTO mytable (myinteger, mydouble, myblob, myvarchar)
 VALUES (?, ?, ?, ?)";
$statement = mysqli_prepare($link, $query);
if (!$statement) {
 die(mysqli_error($link));
}
 /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var The variables being bound to by MySQLi don't need to exist prior to binding */
 mysqli_bind_param($statement, "idbs", $myinteger, $mydouble, $myblob, $myvarchar);
 /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ???????????? tests/ zce/ 
/* execute the query, using the variables as defined. */
if (!mysqli_execute($statement)) {
 die(mysqli_error($link));
}
\`\`\`
Assuming this snippet is a smaller part of a correctly written script, what actions must occur in place of the tests in the above code snippet to insert a row with the following values: 10, 20.2, foo, string ?
`,"Assign $myinteger, $mydouble, $myblob, $myvarchar the proper values","A transaction must be begun and the variables must be assigned","Each value must be assigned prior to calling mysqli_bind_param(), and thus nothing should be done","Use mysqli_bind_value() to assign each of the values"],[`What is the output of the following code block?

\`\`\`php
$array = array(1 => 0, 2, 3, 4);
array_splice($array, 3, count($array), array_merge(array('x'), array_slice($array, 3))); 
var_dump($array);
\`\`\`
`,"0 => 0, 1 => 2, 2 => 3, 3 => x, 4 => 4","1 => 1, 2 => 2, 3 => x, 4 => 4","0 => 1, 2 => 2, 3 => 3, 4 => 4, x => 3","0 => x, 1 => 0, 2 => 1, 3 => 2, 4 => 3"],[`In PHP the error control operator is _______ 
`,"@","!","*","&"],[`When opening a file in writing mode using the FTP handler, what must be done so that the file will still be written to the server in the event it previously exists?



`,"Provide a context for fopen() using stream_context_create()","You must delete the file first before uploading a new file","Configure this behavior in the php.ini file using the ftp.overwrite directive","Open the file using the 'w+' mode"],[`What is the output of the following?
\`\`\`php
function x10(&$number) {
 $number *= 10;
}
$count = 5;
x10($count);
echo $count;
\`\`\`
`,"50","10","5","an error"],[`What is the output of the following?
\`\`\`php
function 1dotEach($n){
 if ($n > 0) {
 1dotEach(--$n);
 echo ".";
 } else {
 return $n;
 }
}
1dotEach(4);
\`\`\`
`,"an error","....","..","..."],[`Consider the following code:

\`\`\`php
session_start(); 
if(!empty($_REQUEST['id']) && !empty($_REQUEST['quantity'])) {
 $id = scrub_id($_REQUEST['id']);
 $quantity = scrub_quantity($_REQUEST['quantity'])
 $_SESSION['cart'][] = array('id' => $id, 'quantity' => $quantity)
}
/* .... */
\`\`\`
What potential security hole would this code snippet produce?
`,"There is no security hole in this code","Cross-Site Scripting Attack","Code Injection","SQL Injection"],[`Consider the following HTML fragement:
\`\`\`php
<select name="?????" multiple>
 <option value="1">Item #1</option>
 <!-- ... more options ... -->
</select>
\`\`\`
Which of the following name attributes should be used to capture all of the data from the user in PHP?
`,"myselectbox[]","myselectbox=array()","myselectbox['multiple']","myselectbox{'multiple'}"],[`Which php.ini directive should be disabled to prevent the execution of a remote PHP script via an include or require construct?



`,"allow_url_fopen","You cannot disable remote PHP script execution","curl.enabled","allow_remote_url"],[`The _______ constant in a CLI script is an automatically provided file resource representing standard input of the terminal.


`,"STDIN","__STDIN__","STDIO","PHP::STDIO"],['Consider the following script:\n```php\n$oranges = 10;\n$apples = 5;\n$string = "I have %d apples and %d oranges";\n/* ??????? */\n```\nWhat could be placed in place of ?????? to output the string:\n```php\nI have 5 apples and 10 oranges\n```\n',"printf($string, $apples, $oranges);","str_format($string, $apples, $oranges);","print($string, $apples, $oranges);","print sprintf($apples, $oranges);"],[`_______ can be used to add additional functionality to a stream, such as implementation of a specific protocol on top of a normal PHP stream implementation.



`,"Wrappers","Buffered","Buckets","Filters"],[`What is the output of the following?

\`\`\`php
class C {
 public $x = 1;

 function __construct() {
 ++$this->x;
 }

 function __invoke() {
 return ++$this->x;
 }

 function __toString() {
 return (string)--$this->x;
 }
}

$obj = new C();
echo $obj();
\`\`\`
`,"3","2","1","an error"],[`When an object is serialized, which method will be called, automatically, providing your object with an opportunity to close any resources or otherwise prepare to be serialized?



`,"__sleep()","__destroy()","__serialize()","__destruct()"],[`Consider the following script:

\`\`\`php
$dom = new DOMDOcument();
$dom->load('0138.xml');

foreach($dom->documentElement->childNodes as $child) {
 if(($child->nodeType == XML_ELEMENT_NODE) && $child->nodeName == "item") {
 foreach($child->childNodes as $item) {
 if(($item->nodeType == XML_ELEMENT_NODE) && ($item->nodeName == "title")) {
 print "{$item->firstChild->data}
";
 }
 }
 }
}
\`\`\`
Assuming the referenced XML document exists and matches the parsing logic, what should be displayed when this script is executed?
`,"The contents of every 'title' node which exists under an 'item' node","None of the above","The XML of each 'title' node","The XML of each 'item' node"],[`When is it acceptable to store sensitive information in an HTTP cookie?



`,"When it is encrypted","Only under extremely controlled situations","When the cookie is sent over a secure HTTP request","It is always acceptable"],[`Given the following XML document in a SimpleXML object:

\`\`\`xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE html
 PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 <head>
 <title>XML Example</title>
 </head>
 <body>
 <p>
 Moved to &lt;<a href="http://example.org/">http://www.example.org/</a>.&gt;
 <br/>
 </p>
 </body>
</html>
\`\`\`
Select the proper statement below which will display the HREF attribute of the anchor tag.


`,"$sxe->body->p->a['href']","$sxe->body->p[0]->a[1]['href']","$sxe->body->p->a->href","$sxe['body']['p'][0]['a']['href']"],[`To ensure that a given object has a particular set of methods, you must provide a method list in the form of an ________ and then attach it as part of your class using the ________ keyword.



`,"interface, implements","array, interface","interface, extends","instance, implements"],[`What is the output of the following?

\`\`\`php
$a = 20; 
function myfunction($b) {
 global $a, $c;
 $a = 30;
 return $c = ($b + $a);
}
// 140 = (40 + 30) + 70
print myfunction(40) + $c;
\`\`\`
`,"140","70","20","null"],[`What is the correct way to create a function in PHP?
`,"\n```php\nfunction myFunction() {\n //\n}\n```\n","\n```php\ncreate myFunction() {\n //\n}\n```\n","\n```php\ndefine new myFunction() {\n //\n}\n```\n","\n```php\nfunc myFunction() {\n //\n}\n```\n"],[`Identify the best approach to compare two variables in a binary-safe fashion.
`,"Both strcmp() and $a === $b","$a == $b","$a === $b","str_compare()"],[`How can the following code be re-written from PHP 4 to PHP 5/7?

\`\`\`php
if (get_class($myObj) == "MyClass") {
 // Do something
}
\`\`\`
`,"\n```php\nif($myObj instanceof MyClass)\n```\n",'\n```php\nif(strtolower(get_class($myObj)) == "myclass")\n```\n',"\n```php\nif($myObj implements MyClass)\n```\n",'\n```php\nif(get_class($myObj) == "MyClass")\n```\n'],[`What is the output of the following code?

\`\`\`php
function oranges(&$oranges = 17) {
 $oranges .= 1;
}
$apples = 5;
oranges($apples);
echo $apples++;
\`\`\`
`,"51","52","171","170"],[`Which of the following is not a valid default stream wrapper for PHP 5, assuming OpenSSL is enabled?
`,"sftp://","ftps://","ftp://","https://"],[`Removing undesired markup tags from input can best be done using which function?




`,"strip_tags()","tidy_strip_html()","str_replace()","strip_html()"],[`How do you declare a function to accept a variable (unknown) number of arguments in PHP 7?
`,"\n```php\nfunction foo(...$parms) {}\n```\n","\n```php\nfunction foo($parms <multi>) {}\n```\n","\n```php\nfunction foo(<multi> $parms) {}\n```\n","\n```php\nfunction foo(@multi $parms) {}\n```\n"],[`What is the output of the following?

\`\`\`php
function a($number) {
 return (b($number) md_to_json.sh raw-tests.json tests zce $number);
}
function b(&$number) {
 return ++$number;
}
echo a(5);
\`\`\`
`,"36","30","25","26"],[`What is the output of the following?

\`\`\`php
function a(&$apples) {
 $apples++;
}
$oranges = 5;
$apples = 5;
a($oranges);
echo "I have $apples apples and $oranges oranges";
\`\`\`
`,"I have 5 apples and 6 oranges","I have 6 apples and 5 oranges","I have 5 apples and 5 oranges","I have 6 apples and 6 oranges"],[`What is the output of the following PHP code?

\`\`\`php
define('FOO', 10);
$array = array(10 => FOO, "FOO" => 20);
print $array[$array[FOO]] md_to_json.sh raw-tests.json tests zce $array["FOO"];
\`\`\`
`,"200","FOO","100","20"],[`The following code snippet displays what for the resultant array?

\`\`\`php
$a = array(1 => 0, 3 => 2, 4 => 6);
$b = array(3 => 1, 4 => 3, 6 => 4); 
print_r(array_intersect($a, $b));
\`\`\`
`,"An empty Array","1 => 0","1 => 3, 3 => 1, 4 => 3","3 => 1, 3=> 2, 4 => 3, 4=> 6"],[`When connecting to a database using PDO, what must be done to ensure that database credentials are not compromised if the connection were to fail?



`,"wrap the PDO DSN in a try/catch block to catch any connection exception","Use constants in the PDO DSN","Place the login credentials in the php.ini file","Disable E_STRICT and E_NOTICE error reporting levels"],[`Which of the following functions will sort an array in ascending order by value, while preserving key associations?



`,"asort()","usort()","krsort()","ksort()"],[`What does the following PHP script accomplish?

\`\`\`php
$dom = new DomDocument();
$dom->load('test.xml');
$body = $dom->documentElement->getElementsByTagName('body')->item(0);
echo $body->getAttributeNode('background')->value. "
";
\`\`\`
`,'Displays the "background" attribute for the first node in the XML document named "body"',"Displays the content of every <body> node",'Displays the content of every node that has a "background" node','Displays the "background" attribute of every node named "body"'],[`Consider the following code:
\`\`\`php
header("Location: {$_GET['url']}");
\`\`\`
Which of the following values of $_GET['url'] would cause session fixation?
`,"https://www.zend-zce.com/en/yellow-pages?PHPSESSID=123","Session Fixation is not possible with this code snippet","PHPSESSID%611243","Set-Cookie%3A+PHPSESSID%611234"],[`What is the output of the following script?

\`\`\`php
function x10(&$number) {
 $number *= 10;
 } 
 $count = 5;
 x10($count);
 echo $count;
\`\`\`
`,"50","100","an error","null"],[`Which of the following is not a valid PDO DSN?



`,"All of the above are valid","mysql:unix_socket=/tmp/mysql.sock;dbname=testdb","oci:dbname=//localhost:1521/mydb","mysql:host=localhost;port=3307;dbname=testdb"],[`Consider the following code block:

\`\`\`php
function &myFunction() {
 $string = "MyString";
 var_dump($string);

 return ($undefined);
}
for ($i = 0; $i < 10; $i++) {
 $retval = myFunction();
}
\`\`\`
This code block's behavior has changed between PHP 4 and PHP 5. Why?
`,"None of the above","This could would cause an automatic segmentation fault in PHP 4","This code would throw a syntax error in PHP 4","Returning an undefined variable by reference in PHP 4 would cause eventual memory corruption"],[`Using flock() to lock a stream is only assured to work under what circumstances?



`,"When accessing the stream of the local filesystem","When running in a Linux environment local filesystem","When running in a Windows environment and accessing a share","When accessing a bi-directional stream"],[`What is the output of the following code block?

\`\`\`php
$a = "The quick brown fox jumped over the lazy dog.";
$b = array_map("strtoupper", explode(" ", $a));
 
foreach ($b as $value) {
 print "$value ";
}
\`\`\`
`,"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.","A PHP Error","Array Array Array Array Array Array Array Array Array","THEQUICKBROWNFOXJUMPEDOVERTHELAZYDOG."],[`What does the following code will print in PHP 7?

\`\`\`php
$a = [0, 1, 2];
foreach($a as $val) {
 var_dump(current($a));
}
\`\`\`
`,"int(0) int(0) int(0)","int(0) int(1) int(2)","int(0) int(1) boll(false)","int(2) int(2) int(2)"],[`What should go in the ??????? assignment below to create a Zlib-compressed file foo.gz with a compression level of 9 ?

\`\`\`php
$file = '????????';
$fr = fopen($file, 'wb9');
fwrite($fr, $data);
fclose($fr);
\`\`\`
`,"compress.zlib://foo.gz","gzip://foo.gz?level=9","compress.zip://foo.gz?level=9","compress.gzip://foo.gz?level=9"],[`Where should indirectly executed PHP scripts (i.e. include files) be stored in the file system?



`,"Outside of the Document Root","In the document root","Anywhere you want","In the database"],[`What XML technology is used when you mix two different document types in a single XML document?



`,"Namespaces","Validators","DTD","Transformations"],[`Consider the following script:

\`\`\`php
$string = "<b>I like 'PHP' & I think it is \\"cool\\"</b>";
var_dump(htmlentities($string, ENT_QUOTES));
var_dump(htmlspecialchars($string));
\`\`\`
In this script, do the two var_dump() calls produce the same string? Why or Why Not?
`,"No, the htmlentities() call will translate quotes while the htmlspecialchars() call will not","No, htmlentites() translates < and > symbols to their HTML entity equivalents while htmlspecialchars() only does quotes","No, the htmlentites() call won't translate quotes to HTML entities while the htmlspecialchars() call will","Yes, htmlspecialchars() and htmlentities() with the ENT_QUOTES constants produce the same result"],[`In PHP 5 you can use the ______ operator to ensure that an object is of a particular type. You can also use _______ in the function declaration.



`,"instanceof, type-hinting","instanceof, is_a","type, instanceof","===, type-hinting"],[`How do you declare the return type of a function?
`,"\n```php\nfunction sum($a, $b) :int {return $a + $b;}\n```\n","\n```php\nfunction sum($a, $b) {return (int)$a + $b;}\n```\n","\n```php\nfunction sum($a, $b) => int {return $a + $b;}\n```\n","It is not possible to define a return type"],[`When running PHP in a shared host environment, what is the major security concern when it comes to session data?



`,"Session data stored in the file system can be read by other scripts on the same shared host","Sessions on shared hosts are easily hijacked by outside malicious users","All of the above","You cannot use a custom data store in shared hosts"],[`Which of the following list of potential data sources should be considered trusted?



`,"None of the above","$_ENV","$_GET","$_COOKIE"],["Given the following array:\n\n```php\n$array = array(1,1,2,3,4,4,5,6,6,6,6,3,2,2,2);\n```\nThe fastest way to determine the total number a particular value appears in the array is to use which function?\n","array_count_values","array_total_values","A foreach loop","count"],[`When writing portable database code using PDO, what is the PDO::ATTR_CASE attribute useful for?



`,"Ensuring that all columns are of a particular case when fetched","None of the above","Adjusting the case of a query before it is processed for compatibility reasons","Controls the switch logic of how queries are processed"],[`What does the following code print?


\`\`\`php
$a = 'aaaa';
$b = 'bbbb';
echo $a ?? $b ?? 'cccc';
\`\`\`
`,"aaaa","bbbb","cccc","null"],["What does the following code print?\n\n\n```php\necho 2 <=> 1;\n```\n","1","-1","0","2"],[`To destroy one variable within a PHP session you should use which method in PHP 5?



`,"unset the variable in $_SESSION using unset()","Unset the variable in $HTTP_SESSION_VARS","Use the session_destroy() function","Use the session_unset() function"],[`What will be the output of the below code?

\`\`\`php
$a = "PHP";
$a++;

echo $a;
\`\`\`
`,"PHQ","PHP","0","1",`A</strong>

 Explanation – All variables are stored using their ASCII value, so when we increment any variable the ASCII value is incremented. If we do \`$a++\` again we will get the output as \`PHR\`.
</p>
</details>
`],[`What is the output of the following code:



\`\`\`php
$a = '1';
$b = &$a;
$b = "2$b";
echo $a.", ".$b;
\`\`\`
`,"21, 21","20, 21","null","an error"],[`Which key will not be displayed from the following code block?
\`\`\`php
$array = ['a' => 'John', 'b' => 'Coggeshall', 'c' => ['d' => 'John', 'e' => 'Smith']]; 
function display($item, $key) {
 print "$key => $item
";
} 
array_walk_recursive($array, "display");
\`\`\`
`,"c","d","b","a"],[`Consider the following PHP string representing an SQL statement:

\`\`\`php
$query = "UPDATE users SET password='$password' WHERE username='$username'";
\`\`\`
Which of the following values for $username or $password would change the behavior of this query when executed?
`,`$password = "foobar' WHERE username='admin' --:";`,"None of the above",`$username = \\"foobar\\' WHERE username='admin'";`,'$password = "\\"foobar\\" WHERE username=\\"admin\\"";'],[`What variable reference would go in the spots indcated by tests in the code segment below?

\`\`\`php
$msg = "The Quick Brown Foxed Jumped Over the Lazy Dog";
$state = true;
$retval = "";
for ($i = 0; (isset(?????)); $i++) {
if ($state) {
 $retval .= strtolower(?????);
} else {
 $retval .= strtoupper(?????);
}
$state = !$state;
}

print $retval;
\`\`\`
`,"\n```php\n$msg{$i}\n```\n","\n```php\nord($msg);\n```\n","\n```php\nchr($msg);\n```\n","\n```php\nsubstr($msg, $i, 2);\n```\n"],[`The ______ keyword is used to indicate an incomplete class or method, which must be further extended and/or implemented in order to be used.



`,"abstract","final","protected","incomplete"],[`What combination of boolean values for $a, $b, $c, and $d will result in the variable $number being equal to 3?

\`\`\`php
$a = null;
$b = null;
$c = null;
$d = null;
 
if($a && !$b) {
 if(!!$c && !$d) {
 if($d && ($a || $c)) {
 if(!$d && $b) {
 $number = 1;
 } else {
 $number = 2;
 }
 } else {
 $number = 3;
 }
 } else {
 $number = 4;
 }
} else {
 $number = 5;
}
\`\`\`
`,"true, false, true, false","false, true, true, true","true, true, false, false","false, true, true, false"],[`One can ensure that headers can always be sent from a PHP script by doing what?
`,"Enable output buffering","Enable header buffering","Set the header.force INI directive to true","There is no way to ensure that headers can always be set, they must always be checked"],[`What is the best way to ensure that a user-defined function is always passed an object as its single parameter?
`,"function myfunction(stdClass $a)","function myfunciton($a = stdClass)","Use is_object() within the function","There is no way to ensure the parameter will be an object"],[`Setting a cookie on the client in PHP 5 can be best accomplished by:
`,"Use the setcookie() function","Use the add_cookie() function","Use the the apache_send_header() function","Setting a variable in the $_COOKIE superglobal"],[`Which statement will return the third parameter passed to a function?



`,"func_get_arg(2);","$argv[3];","$argv[2];","func_get_args(3);"],[`What is the output of the following function?

\`\`\`php
function &find_variable(&$one, &$two, &$three) {
 if ($one > 95 && $one < 100) return $one;
 if ($two > 10 && $two < 20) return $two;
 if ($three > 1 && $three < 100) return $three;
}

$one = 90;
$two = 60;
$three = 89;

$var = &find_variable($one, $two, $three);
$var++;
echo "$one - $two - $three";
\`\`\`
`,"90 - 60 - 90","91 - 61 - 91","91 - 60 - 89","90 - 61 - 89"],[`If you would like to change the session ID generation function, which of the following is the best approach for PHP 5?
`,"Set the session.hash_function INI configuration directive","Use the session_set_id_generator() function","Set the session id by force using the session_id() function","Use the session_regenerate_id() function"],[`The ____ construct is particularly useful to assign your own variable names to values within an array.
`,"list","array_get_variables","current","each"],[`What is the best measure one can take to prevent a cross-site request forgery (CSRF)?
`,"Add a secret token to all form submissions","Disallow requests from outside hosts","Turn off allow_url_fopen in php.ini","Filter all output"],[`What is the output of the following code?

\`\`\`php
$string = "14302"; 
$string[$string[2]] = "4";
print $string;
\`\`\`
`,"14342","14304","44302","14402"],["Which of the following is the best way to split a string on the \"-=-\" pattern?\n```php\n$string = 'apple-=-banana-=-orange';\n```\n",'\n```php\nexplode("-=-", $string);\n```\n',"They all are equally proper methods",'\n```php\nstr_split($string, strpos($string, "-=-"))\n```\n','\n```php\npreg_split("-=-", $string);\n```\n'],[`What is the output of the following code?

\`\`\`php
function oranges($oranges = 17) {
 $oranges .= 1;
}
$apples = 5;
oranges($apples);
echo ++$apples;
\`\`\`
`,"6","17","18","7"],[`Which of the following is not valid syntax for creating a new array key?
`,'\n```php\n$a{} = "value";\n```\n','\n```php\n$a[] = "value";\n```\n','\n```php\n$a[0] = "value";\n```\n','\n```php\n$a{0} = "value";\n```\n'],[`What is wrong with the following code snippet? Assume default configuration values apply.

\`\`\`php
$fp = fsockopen('www.php.net', 80);
fwrite($fp, "GET / HTTP/1.0
Host: www.php.net
");
$data = fread($fp, 8192);
\`\`\`
`,`The HTTP request is malformed ( double "
")`,"The request is blocking and may cause fread() to hang","This script should be re-written using fgets() instead of fread()","The request is non-blocking and fread() may miss the response"],[`Which from the following list is not an appropriate use of an array?
`,"All of these uses are valid","As a list","As a Lookup Table","A Stack"],[`What is wrong with the following code?

\`\`\`php
function duplicate($obj) {
 $newObj = $obj;
 return $newObj;
}
$a = new MyClass();
$a_copy = duplicate($a);

$a->setValue(10);
$a_copy->setValue(20);
\`\`\`
`,"You must use the clone operator to make a copy of an object","You must use return &$newObj instead","There is nothing wrong with this code","duplicate() must accept its parameter by reference"],[`What is the result of the following code snippet?
\`\`\`php
$array = array(
 'a' => 'John',
 'b' => 'Coggeshall',
 'c' => array(
 'd' => 'John',
 'e' => 'Smith'
 )
);
 
function something($array) {
 extract($array);
 return $c['e'];
}
 
print something($array);
\`\`\`
`,"Smith","A PHP Warning","Coggeshall","NULL"],[`How does one create a cookie which will exist only until the browser session is terminated?



`,"Do not provide a cookie expiration time","You cannot create cookies that expire when the browser session is terminated","Setting the expiration time for a cookie to a time in the distant future","Enable Cookie Security"],[`If you would like to store your session in the database, you would do which of the following?



`,"Create functions for each session handling step and use session_set_save_handler() to override PHP's internal settings","It requires a custom PHP extension to change the session handler","Implement the session_set_save_handler() function","Configure the session.save_handler INI directive to your session class"],[`When writing CLI scripts it is often useful to access the standard streams available to the operating system such as standard input/output and error.
How does one access these streams in PHP 5/7?
`,"STDIN, STDOUT, and STDERR constants in PHP 5/7","Use stdin(), stdout() and stderr() functions","PHP::STDIN, PHP::STDOUT, PHP::STDERR class constants in PHP 5/7","use the php::stdin(), php::stdout(), and php::stderr() class methods"],[`What is the output of the following?

\`\`\`php
function _1dotEach($n) {
 if ($n > 0) {
 _1dotEach(--$n);
 echo ".";
 } else {
 return $n;
 }
}
_1dotEach(4);
\`\`\`
`,"....","...","..","."],[`For an arbitrary string $mystring, which of the following checks will correctly determine if the string PHP exists within it?
`,'\n```php\nif (strpos($mystring, "PHP") !== false)\n```\n','\n```php\nif (!strpos($mystring,"PHP"))\n```\n','\n```php\nif (strpos($mystring, "PHP") === true)\n```\n','\n```php\nif (strloc($mystring, "PHP") == true)\n```\n'],[`Consider the following code snippet:

\`\`\`php
$link = mysqli_connect("hostname", "username", "password");
if (!$link) {
 /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var $error = ??????; */
 die("Could not connect to the database: $error");
}
\`\`\`
What would go in place of the ???? above for this script to function properly?
`,"mysqli_connect_error();","mysqli_connect_error($link);","mysqli_error();","$_MySQL['connect_error']"],[`During an HTTP authentication, how does one determine the username and password provided by the browser?


`,"Use the $_SERVER['PHP_AUTH_USER'] and $_SERVER['PHP_AUTH_PW'] variables","Parse the HTTP headers manually using http_get_headers()","Use the get_http_username() and get_http_password() functions","Use the $_SERVER['HTTP_USER'] and $_SERVER['HTTP_PASSWORD'] variables"],[`What is the output of the following code?

\`\`\`php
class MyException extends Exception {}
class AnotherException extends MyException {}

class Foo {
 public function something() {
 throw new AnotherException();
 }
 public function somethingElse() {
 throw new MyException();
 }
}

$a = new Foo();

try {
 try {
 $a->something();
 } catch(AnotherException $e) {
 $a->somethingElse();
 } catch(MyException $e) {
 print "Caught Exception";
 }
} catch(Exception $e) {
 print "Didn't catch the Exception!";
}
\`\`\`
`,`"Didn't catch the Exception!"`,`"Caught Exception" followed by "Didn't catch the Exception!"`,"A fatal error for an uncaught exception",`"Didn't catch the Exception!" followed by a fatal error`],[`A fingerprint of a string can be determined using which of the following?



`,"md5()","hash()","fingerprint()","None of the above"],[`What is the best approach for converting this string:


\`\`\`php
$string = "a=10&b[]=20&c=30&d=40+50";

// Into this array?

array(- [ ] {
 ["a"]=>
 string(- [ ] "10"
 ["b"]=>
 array(- [ ] {
 [0]=>
 string(- [ ] "20"
 }
 ["c"]=>
 string(- [ ] "30"
 ["d"]=>
 string(- [ ] "40 50"
}
\`\`\`
`,"Use the parse_str() function to translate it to an array()","Write a parser completely by hand, it's the only way to make sure it's 100% accurate","Pass the variable to another PHP script via an HTTP GET request and return the array as a serialized variable","Just call unserialize() to translate it to an array()"],[`Setting a HTTP cookie on the client which is not URL-encoded is done how in PHP 5?



`,"Use the setrawcookie() function","Set the cookies.urlencode INI directive to false","Use urldecode() on the return value of setcookie()","Setting the $no_encode parameter of setcookie() to a boolean 'true'"],[`Event-based XML parsing is an example of which parsing model?



`,"SAX","DOM","XML Object Mapping","XPath"],[`Consider the following simple PHP script:
\`\`\`php
$dom = new DomDocument();
$dom->load('test.xml');
$xpath = new DomXPath($dom);
$nodes = $xpath->query(???????, $dom->documentElement);
echo $nodes->item(0)->getAttributeNode('bgcolor')->value . "
";
\`\`\`
What XPath query should go in the ?????? above to display the "bgcolor" attribute of the first "body" node in the XML document?
`,`"*[local-name()='body']"`,'"/body[0]/text"','"/body/body[0]"',`"name='body'"`],[`What is the output of the following script?
\`\`\`php
class ClassOne {
 protected $a = 10;
 public function changeValue($b) {
 $this->a = $b;
 }
}

class ClassTwo extends ClassOne {
 protected $b = 10;
 public function changeValue($b) {
 $this->b = 10;
 parent::changeValue($this->a + $this->b);
 }
 public function displayValues() {
 print "a: {$this->a}, b: {$this->b}
";
 }
}

$obj = new ClassTwo();
$obj->changeValue(20);
$obj->changeValue(10);
$obj->displayValues();
\`\`\`
`,"a: 30, b: 10","a: 30, b: 30","a: 30, b: 20","a: 20, b: 20"],[`Is this code valid only in PHP 7, in PHP 5, or both?

\`\`\`php
function myfunction(&$myvalue = null) {
 /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... */
}
\`\`\`
`,"PHP 5","Both","PHP 4","PHP > 5.3"],[`SQL Injections can be best prevented using which of the following database technologies?



`,"Prepared Statements","All of the above","Persistent Connections","Unbuffered Queries"],[`When using a function such as strip_tags, are markup-based attacks still possible?



`,"Yes, attributes of allowed tags are ignored","No, HTML does not pose any security risks","Yes, even a <p> HTML tag is a security risk","No, strip_tags will prevent any markup-based attack"],[`What is the output of the following?

\`\`\`php
$a = 010;
$b = 0xA;
$c = 2; 
print $a + $b + $c;
\`\`\`
`,"20","22","18","$a is an invalid value"],[`What is the difference between the include and require language constructs?



`,"Require constructs cause a fatal error if the file can't be read","Require constructs can't be used with URL filenames","Include constructs cause a fatal error if the file doesn't exist","There is no difference other than the name"],[`When attempting to prevent a cross-site scripting (XSS) attack, which of the following is most important?
`,"Writing careful Javascript","Not writing Javascript on the fly using PHP","Filtering Output used in form data","Filtering Output used in database transactions"],[`What does the following code print?


\`\`\`php
function gen() {
 yield 1;
 yield 2;
 return 13;
}

foreach (gen() as $item) {
 echo $item;
}
\`\`\`
`,"12","''","an invalid argument supplied fot foreach()","1213"],[`When implementing a permissions system for your Web site, what should always be done with regards to the session?


`,"The session key should be regenerated","None of the above","You should not implement permission systems using sessions","Sessions should be cleared of all data and re-populated"],[`Which of the following functions is used to determine if a given stream is blocking or not?



`,"stream_get_meta_data","stream_get_blocking","stream_is_blocking","stream_get_blocking_mode"],[`Which of the following cases are cases when you should use transactions?



`,"Updating a single row in multiple different tables","Updating a single row in a table","Inserting a new row into a single table","Performing a stored procedure"],[`Consider the following function:

\`\`\`php
function redirect($url) {
 // Check to make sure we haven't already sent
 // the header: 
 if(/*?????*/) {
 header("Location: $url");
 }
}
\`\`\`
What conditional should replace the tests above?
`,'\n```php\n!in_array("Location: $url", headers_list())\n```\n','\n```php\n!header_exists("Location: $url")\n```\n',"\n```php\n!header_location($url)\n```\n","\n```php\n$_SERVER['HTTP_LOCATION'] != $url\n```\n"],[`In PHP7 objects are passed by reference to a function when?
`,"Always; objects are passed by reference in PHP7","When the calling code preceeds the variable name with a &","Never; objects are cloned when passed to a function","When the function paramater listing preceeds the variable name with a &"],[`What should go in the missing line tests below to produce the output shown?


\`\`\`php
$array_one = array(1,2,3,4,5);
$array_two = array('A', 'B', 'C', 'D', 'E');
/* tests tests/ zce/ 
print_r($array_three); 
/* Result: 
 Array
 (
 [5] => A
 [4] => B
 [3] => C
 [2] => D
 [1] => E
 )
*/
\`\`\`
`,"\n```php\n$array_three = array_combine(array_reverse($array_one), $array_two);\n```\n","\n```php\n$array_three = array_merge(array_reverse($array_one), $array_two);\n```\n","\n```php\n$array_three = array_combine($array_one, $array_two);\n```\n","\n```php\n$array_three = array_merge($array_one, $array_two);\n```\n"],[`What is the output of the following code?

\`\`\`php
function byReference(&$variable = 0){
 echo ++$variable;
} 
byReference();
byReference();
\`\`\`
`,"11","an error","01","12"],[`Which of the following aspects of the MVC pattern is used in conjunction with the database?



`,"Model","Schema","Validation","Controller"],[`Which function is best suited for removing markup tags from a string?



`,"strip_tags","strip_markup","str_replace","preg_replace"],[`If regular expressions must be used, in general which type of regular expression functions available to PHP is preferred for performance reasons?



`,"preg_* regular expression functions","strtok() using regular expressions","parse_str() using regular expressions","strregex* regular expression functions"],[`Which function would you use to add an element to the beginning of an array?
`,"\n```php\narray_unshift();\n```\n","\n```php\narray_shift();\n```\n","\n```php\narray_push();\n```\n",'\n```php\n$array[0] = "value";\n```\n'],[`What is the output of the following?

\`\`\`php
function l(&$number) {
 $number *= 10;
 return ($number - 5);
} 
$number = 10;
$number = L($number);
echo $number;
\`\`\`
`,"95","10","an error","105"],[`When uploading a file using HTTP, which variable can be used to locate the file on PHP's local filesystem?



`,"$_FILES['fieldname']['tmp_name']","None of the above","$_FILES['fieldname']","$_FILES['fieldname'][0]['filename']"],[`What is the best way to ensure that a user-defined function is always passed an object as its single parameter?
`,"function myfunction(stdClass $a)","function myfunciton($a = stdClass)","Use is_object() within the function","There is no way to ensure the parameter will be an object"],[`Consider the following PHP script fragment:
\`\`\`php
$title = $dom->createElement('title');
$node = ?????
 
$title->appendChild($node);
$head->appendChild($title);
\`\`\`
What should tests be replaced with to add a &lt;title&gt; node with the value of Hello, World!
`,'$dom->appendTextNode($title, "Hello, World!");','$dom->createTextNode("Hello, World");','$dom->appendElement($title, "text", "Hello, world!");',`$dom->createElement('text', "Hello, World");`],[`What is the primary benefit of a SAX-based XML parser compared to DOM?



`,"All of the above","Faster then DOM methods","Requires less memory then DOM","Easier to develop parsers"],[`When checking to see if two variables contain the same instance of an object, which of the following comparisons should be used?



`,"if($obj1 instanceof $obj2)","if($obj1->equals($obj && ($obj1 instanceof $obj2))","if($obj1->equals($obj2))","if($obj1 === $obj2)"],["What does the following code output?\n```php\n$i = 016;\necho $i / 2;\n```\n","7","an error","8","0"],[`What are the values of $a in $obj_one and $obj_two when this script is executed?
\`\`\`php
class myClass {
 private $a;
 public function __construct() {
 $this->a = 10;
 }
 public function printValue() {
 print "{$this->a},";
 }
 public function changeValue($val, $obj = null) {
 if (is_null($obj)) {
 $this->a = $val;
 } else {
 $obj->a = $val;
 }
 }
 public function getValue() {
 return $this->a;
 }
}

$obj_one = new myClass();
$obj_two = new myClass();

$obj_one->changeValue(20, $obj_two);
$obj_two->changeValue($obj_two->getValue(), $obj_one);

$obj_two->printValue();
$obj_one->printValue();
\`\`\`
`,"20,20,","10,20,","You cannot modify private member variables of a different class","10,10,"],[`What is the output of the following PHP script?

\`\`\`php
$a = 1;
$b = 2.5;
$c = 0xFF;

$d = $b + $c;
$e = $d md_to_json.sh raw-tests.json tests zce $b;
$f = ($d + $e) % $a;

print ($f + $e);
\`\`\`
`,"643.75","432","643","257"],[`To force a user to redirect to a new URL from within a PHP 5 script, which of the following should be used?



`,'Send a HTTP "Location:" header',"Use the HTML <redirect> Tag",'Send a HTTP "Forward:" header',"Use the redirect() function"],[`Which SPL class implements fixed-size storage

`,"SplFixedArray","SplObjectStorage","SplHeap","SplQueue"],[`What is the output of the following?


\`\`\`php
function a($number) {
 return (b($number) md_to_json.sh raw-tests.json tests zce $number);
}

function b(&$number) {
 ++$number;
}

echo a(5);
\`\`\`
`,"0","5","10","12"],[`How can you modify the copy of an object during a clone operation?



`,"Implement the object's __clone() method","Put the logic in the object's constructor to alter the values","Implment your own function to do object copying","Implement __get() and __set() methods with the correct logic"],[`What is the best way to iterate and modify every element of an array using PHP 5/7?
`,"\n```php\nforeach($array as $key => &$val) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }\n```\n","You cannot modify an array during iteration","\n```php\nfor($i = 0; $i < count($array); $i++) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }\n```\n","\n```php\nforeach($array as $key => $val) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }\n```\n"],[`Which PCRE regular expression will match the string PhP5-rocks?



`,"/^[hp1-5]*\\-.*/i","/[hp1-5]*\\-.?/","/[hp][1-5]*\\-.*/","/[PhP]{3}[1-5]{2,3}\\-.*$/"],[`What is the output of the following code?


\`\`\`php
$newstring = '';
$string = "111221";
 
for($i = 0; $i < strlen($string); $i++) {
 $current = $string[$i];
 $count = 1;
 
 while(isset($string[$i + $count]) && ($string[$i + $count] == $current)) 
 $count++;
 
 $newstring .= "$count{$current}";
 
 $i += $count-1;
}

print $newstring;
\`\`\`
`,"312211","3312212","11221221","221131"],[`What is the output of the following code?

\`\`\`php
function pears(array $pears) {
 if (count($pears) > 0) {
 echo array_shift($pears);
 pears($pears);
 }
}
 
$fruit = ["Anjo", "Bartlet"];
pears($fruit);
\`\`\`
`,"AnjoBartlet","Anjo","Bartlet","BartletAnjo"],[`Consider the following script:

\`\`\`php
$dom = new DOMDOcument();
$dom->load('0138.xml');

foreach ($dom->documentElement->childNodes as $child) {
 if (($child->nodeType == XML_ELEMENT_NODE) && $child->nodeName == "item") {
 foreach ($child->childNodes as $item) {
 if (($item->nodeType == XML_ELEMENT_NODE) && ($item->nodeName == "title")) {
 print "$item->firstChild->data
";
 }
 }
 }
}
\`\`\`
Assuming the referenced XML document exists and matches the parsing logic, what should be displayed when this script is executed?
`,"None of the above","The XML of each 'title' node","The XML of each 'item' node",'"Title" for every title node in the document'],["How can one take advantage of the time waiting for a lock during a stream access, to do other tasks using the following locking code as the base:\n\n```php\n$retval = flock($fr, LOCK_EX);\n```\n","Use LOCK_EX|LOCK_NB instead of LOCK_EX","Use flock_lazy() instead of flock()","Use LOCK_UN instead of LOCK_EX","Check the value of $retval to see if the lock was obtained"],[`When embedding PHP into XML documents, what must you ensure is true in order for things to function properly?



`,"That your XML documents are well-formed","Disabling of the short_tags PHP.ini directive /!\\ php.ini ==>> short_open_tag (not short_tags)","Enabling the asp_tags PHP.ini directive","That you have XPath support enabled in PHP 5"],[`What output will this code produce ?

\`\`\`php
class Disney {
 public $cartoon;
 function __construct($cartoon) {
 $this->cartoon = $cartoon;
 }
}

$disney = new Disney("The Beauty and The Beast");
$waltDisney = $disney;
$waltDisney->cartoon = "Pinocchio";
echo $disney->cartoon;
\`\`\`
`,'"Pinocchio" because $waltDisney and $Disney are pointing to the same object','"The Beauty and The Beast" because the $cartoon property in the $waltDisney object was changed',"NULL because the Disney class was not instanciated inside the $waltDisney variable","an error"],["What happens when you run the following MySQL Query ?\n\n```php\nCREATE TABLE PRIMARY (ID int);\n```\n","Syntax Error - PRIMARY is reserved in MySQL and should be quoted to be used as a table name","Syntax Error - PRIMARY is reserved in MySQL and can not be used as a table name","A table called PRIMARY containing a column called ID is created","false"],[`What is the output of the following script ?

\`\`\`php
function generate() {
 for ($i = 1; $i <= 3; $i++) {
 yield $i;
 }
}
$generator = generate();
if (is_array($generator)) {
 echo "Is Array";
} elseif(is_object($generator)) {
 echo "Is Object";
} else {
 echo "Is none of the above";
}
\`\`\`
`,"Is Object","Is Array","Is none of the above","an errpr"],[`What is the default value for the "max_execution_time" setting when running PHP as a CLI SAPI ?
`,"0 (Zero) which stands for infinite",'Whatever is set as the value for "max_execution_time" in php.ini','There is no "max_execution_time" setting if running PHP as a CLI SAPI',"-1"],[`What happens when the code below is executed ?

\`\`\`php
class foo {
 private $variable;
 function __construct() {
 $this->variable = 1;
 }

 function __get($name) {
 return $this->$name;
 }
}
$a = new foo;
echo $a->variable;
\`\`\`
`,"The script outputs 1","Fatal error: Cannot access private property foo::$variable","The script outputs 0","The script outputs 01"],[`What happens when the script below is executed ?

\`\`\`php
namespace CustomArea;
error_reporting(E_ALL);
ini_set("display_errors", "on");
function var_dump($a) {
 return str_replace("Weird", $a, "Weird stuff can happen");
}
$a = "In programming";
echo var_dump($a);
\`\`\`
`,"In programming stuff can happen","PHP Fatal error: Cannot redeclare var_dump()","Weird stuff can happen","In programming Weird stuff can happen"],[`When working with unfamiliar code, what is the best way to find out in which file a class is defined ?


`,"\n```php\n# Using ReflectionClass:\n$reflection = new ReflectionClass('ClassName');\necho $reflection->getFileName();\n```\n",`
\`\`\`php
# Using the grep command to search through the application files:
$out = array();
exec("grep -r 'Classname' .", $out);
var_dump($out);
\`\`\`
`,"\n```php\n# Using the get_declared_classes() function:\n$classes = get_declared_classes();\nvar_dump($classes);\n```\n","all"],[`What is the output of the code below ?

\`\`\`php
$now = new DateTime();
$now2 = new DateTime();

$ago = new DateInterval('P4Y10M3W');
$ago2 = new DateInterval('P4Y10M2W7D');

$then = $now->sub($ago);
$date1 = $then->format('Y-m-d');

$then2 = $now2->sub($ago2);
$date2 = $then2->format('Y-m-d');

var_dump ($date1 === $date2);
\`\`\`
`,"bool(false) - because the '2W' part in $ago2 will get overwritten by the '7D' part and therefor the second date interval will be 2 Weeks shorter than the first interval.","bool(true) - because the two interval definitions are equivalent.","bool(false) and the script will throw a notice because the date/time interval notation in the $ago2 variable is wrong.","an error"],[`Considering the code below

\`\`\`php
class AppException extends Exception {
 function __toString() {
 return "Your code has just thrown an exception: {$this->message}
";
 }
}

class Students {
 public $first_name;
 public $last_name;

 public function __construct($first_name, $last_name) {
 if(empty($first_name)) {
 throw new AppException('First Name is required', 1);
 }

 if(empty($last_name)) {
 throw new AppException('Last Name is required', 2);
 }
 }
}

try {
 new Students('', ''); 
} catch (Exception $e) {
 echo $e;
}
\`\`\`
Which of these statements are correct ?
`,"The magic __toString() method will be invoked automatically when the code enters the catch() statement and the custom exception message will be printed","The catch (Exception $e) statement is wrong because it accepts an instance of the Exception class as the parameter. It should use an instance of the AppException class instead.","The __toString() method can't be overwritten in a child class because the methods in the Exception class are all final but for the constructor","all"],[`What is the output of the code below ?

\`\`\`php
$a = array();
$a[0] = 1;
unset($a[0]);
echo ($a != null) ? 'True' : 'False';
\`\`\`
`,"False","True","Parse Error","1"],[`What is the output of the code below ?

\`\`\`php
namespace animals;

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');

class Cat {
 static function Definition() {
 return 'Cats are ' . __NAMESPACE__;
 }
}

namespace animals\\pets;

class Cat {
 static function Definition() {
 return 'Cats are ' . __NAMESPACE__;
 }
}

echo Cat::Definition();
\`\`\`
`,"Cats are animals\\pets","Fatal error: Cannot redeclare class Cat","Fatal error: Cannot re-declare class animals\\pets\\Cat in sub-namespace","Cats are /"],['Assuming that the code below is in a file named "test.php" and that PHP has full rights over the file, what happens if the file is executed from the command line without any arguments ?\n\n```php\nexec("rm -f " . dirname(__FILE__) . "/" . $argv[0]);\n```\n',"The file test.php is deleted","The script exits without doing anything","A notice is thrown because $argv[0] is not defined and the script fails.","an error"],[`What is the output of the code below ?

\`\`\`php
$a = ['one'=>'php', 'two'=>'javascript', 'three'=>'python'];
$b = ['python', 'javascript', 'php'];
echo (array_values(array_reverse($a)) === $b) ? 'true' : 'false';
\`\`\`
`,"true","Fatal error: Can't use function return value in write context","false","Fatal error: function array_values does not exist"],[`When dealing with cloned objects in PHP, which of the following statements are true ?
`,"\n```php\n// As of PHP 7.0.0, members of cloned objects can be accessed in a single expression without any assignments... Like this:\n$dateTime = new DateTime();\necho (clone $dateTime)->format('Y');\n```\n","The programmer can make use of the __clone() magic method to stop an object from being cloned.","The __clone() magic method of a class is called before the actual cloning of the object occurs allowing the programmer to alter values before the cloning process begins.","ALL"],[`Which of the following statements about object serialization are true ?
`,"Static class properties can not be serialized.","After serializing an object, a programmer can fully recreate that object in another file by calling unserialize() even if the class definition doesn't exist.","Static class properties can be serialized, but can not be unserialized.","Class constat can not be serialized."],[`What is the best way to store and verify passwords in PHP ?
`,"Using the built in password_create() and password_verify() functions in PHP","Using a hashing algorithm like md5 or sha256 and then, when verifying compare the stored hash with the hash of the string submitted by the user","Using the strongest to date hashing algorithm combined with a salt to avoid dictionary attacks.","md5()"],[`How does Opcode Cache improve performance in PHP 5.5+ ?
`,"Opcache stores precompiled script bytecode in memory, thus removing the need to load and parse scripts on each request.","Opcode Cache stores objects in memory so that they can be accessed directly by other processes.","Opcode Cache stores database query results thus eliminating the need of executing those queries again","Opcode does`not exist in php"],[`What happens if you execute the code below ?

\`\`\`php
class someclass {
 public $someprop; 
 function __construct() {
 $this->someprop = 1;
 }
}

function somefunc(&$instance) {
 unset($instance);
}

$instance = new someclass();
somefunc($instance);
var_dump($instance);
\`\`\`
`,'object(someclass)#1 (1) { ["someprop"]=> int(1) }',"NULL","Warning (Only variables can be passed by refence) NULL","an error"],[`How do you access standard I/O and error streams ?
`,"STDIN, STDOUT and STDERR constants","Use stdin(), stdout() and stderr() functions","PHP::STDIN, PHP::STDOUT and PHP::STDERR class constants","Use PHP::stdin(), PHP::stdout() and PHP::stderr() class functions"],['What is the result of the code below?\n\n```php\necho ("0.00") ? "mary" : "angie";\n```\n',"mary","Syntax Error","angie","maryangie"],[`What is the output of the following code:

\`\`\`php
function myFunc() {
 $in = "nothing";
 return func_get_args();
}
$in = "something";
var_dump(myFunc($in));
\`\`\`
`,'array(1) { [0]=> string(9) "something" }','array(1) { [0]=> string(9) "nothing" }',"Warning: function myFunc expects 0 parameters, 1 given","Array"],[`What are the possible security implications of printing an unfiltered request variable ?
`,"An XSS atack","No security implications","Unfiltered request variables can not be filtered in PHP","Sql Fixation"],[`Which PHP function(s) can be used to check if a variable is defined and is not NULL ?
`,"With the isset() function","With the isset() and is_null() functions","With the empty() function","With instanceof operator"],[`How do you obtain the length of a string in PHP ?
`,"\n```php\necho strlen($string);\n```\n","\n```php\necho $string->length;\n```\n","\n```php\necho count($string);\n```\n","\n```php\necho sizeof($string);\n```\n"],["What is the output of the following snippet ?\n\n```php\n$a = strlen(NULL);\necho $a++;\n```\n","0","1","Fatal Error - The strlen function expects a string, NULL given","null"],[`What is the output of the code below ?

\`\`\`php
$a = array(0 => "MySQL", 2=>"PHP", 3=>"JAVA", 4 => "JavaScript");
$a = array_values($a);
echo $a[1];
\`\`\`
`,"PHP","Notice undefined offset 1 ...","MySQL","1"],['What is the output of the code below ?\n```php\n$a = array("PHP", "MySQL", 4, "1");\n$sum = array_sum($a);\necho $sum;\n```\n',"5","4","7","an error"],[`What happens when the script below is executed ?
\`\`\`php
$a = array(1,2,3);
$b = array(7,8,9);

$counta = count($a);
$countb = sizeof($b);

if ($counta===$countb) {
 echo "They are equal and have the same type";
} else {
 echo "They are not equal or they are not of the same type";
}
\`\`\`
`,'The script returns "They are equal and have the same type"','The script returns "They are not equal or they are not of the same type"',"The script fails because the sizeof() function doesn't exist","an error"],[`What is the final value of $i ?

\`\`\`php
$numbers = [10, "10", 10.5, "10.5", null, true, false];
$i = 0;
foreach ($numbers as $number) {
 if(is_int($number))
 $i++;
 else
 $i--;
}
echo $i;
\`\`\`
`,"-5","-3","-4","3"],[`What happens when you run the script below ?

\`\`\`php
define("2MYCONSTANT", "avalue");
if(defined("2MYCONSTANT"))
echo "We have a constant: " . 2MYCONSTANT;
\`\`\`
`,"Fatal Error","The script echoes: We have a constant: avalue","The script echoes: We have a constant: 2MYCONSTANT","0"],[`What happens when you run the script below ?

\`\`\`php
$language = 'PHP';
function PHP() {
 return 'This is the ' . __FUNCTION__ . ' function';
}
echo $language();
\`\`\`
`,'The script echoes: "This is the PHP function"',"PHP Parse error: syntax error on line 7","Notice: Use of undefined constant _FUNCTION__ - assumed '__FUNCTION__' on line 5","an exception is thrown"],[`What happens when you run the script below ?

\`\`\`php
if(-1)
 echo 'TRUE';
else
 echo 'FALSE';
\`\`\`
`,'The script echoes: "TRUE"','The script echoes: "FALSE"',"Syntax Error","x"],[`Is there a way to make E_NOTICE type errors behave like fatal errors in PHP and therefor stop script execution when such an error occurs ?
`,"By setting a custom error handler, one can alter the way PHP treats E_NOTICE errors and then stop the script.","There's no way to do that. Notices are exactly what their name states: Notices.",'By using the "register_shutdown_function()" a developer can stop script execution at any time, including when notices are thrown.',"All are incorect"],[`What will happen when you run the code below ?

\`\`\`php
function somefunc(DOMDocument $param) {
 if($param instanceof DOMDocument)
 return 0;
 else
 return 1;
}
echo somefunc('abcd');
\`\`\`
`,"Because the parameter passed to the function is not an instance of the DOMDocument class the script will throw a Fatal Error","Because the parameter passed to the function is not an instance of the DOMDocument class the function will return 1","Because the parameter passed to the function is a string the function will return 0","It is not a php 7 valid code"],[`What is the output of the script below ? 

\`\`\`php
$i = 1;
do {
 $i++;
} while ($i===0);
echo $i;
\`\`\`
`,"2","1","0","3"],[`Which of the following is the best option to iterate and modify every element of an array ?
`,"foreach($array as $key => &$val) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }","for($i = 0; $i < count($array); $i++) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }","foreach($array as $key => $val) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }","while(list($key, $val) = each($array)) { /Applications /Library /System /Users /Volumes /bin /cores /dev /etc /home /opt /private /sbin /tmp /usr /var ... md_to_json.sh raw-tests.json tests zce / }"],[`What is the output of the following code?

\`\`\`php
$a = 1;
++$a;
$a *= $a;
echo $a--;
\`\`\`
`,"4","3","5","0"],[`When PHP is runing on a command line, what super-global will contain the command line arguments specified?
`,"$_SERVER","$_ENV","$GLOBALS","$_POST"],[`Function world() is defined in the global namespace 'hello'. Your code is in namespace 'myapp'. What is the correct way to import the namespaceso you can use the world() function?
`,"\n```php\nuse \\hello;\n```\n","\n```php\nuse hello;\n```\n","\n```php\nuse hello\\world;\n```\n","\n```php\nuse \\hello\\hello;\n```\n"],[`What is the output of the following code?
\`\`\`php
function fibonacci($x1, $x2) {
 return $x1 + $x2;
}

$x1 = 0;
$x2 = 1;

for ($i =0; $i < 10; $i++) {
 echo fibonacci($x1, $x2) . ',';
}
\`\`\`
`,"1,1,1,1,1,1,1,1,1,1","1,2,3,4,5,6,7,8,9","1,2,3,4,5,6,7,8,9,10,","1,2,3,5,8,13,21,34,55,89,"],[`What is the name of the error level constant that is used to designate PHP code that will not work in future versions?
`,"E_DEPRECATED","E_STRICT","E_ERROR","E_ALL"],[`What is goog rule to follow when quoting string data?
`,"Use single quotes unless you have a ' in your string or you are doing variable interpolation because it declares whether you want variablees to be interpolated","Use double quotes because you might want to use variable interpolation at later time;","Use single quotes unless you are using variable interpolation because single quotes are faster","all"],["What is will the output of this code be?\n\n```php\necho strcmp(12345, '12345');\n\n```\n","zero because (int)12345 is equal to (string)12345","less than zero because (int)12345 is less than (string)12345","all","greater than zero because (int)12345 is greater than (string)12345"],[`Given a string $str = '12345'; what is the pattern required to extract each digit individually?
`,"$result = scan($str, '%1d%1d%1d%1d%1d');","$result = scan($str, '%d');","all","$result = scan($str, '%d%d%d%d%d');"],[`What is the output of the following code?
\`\`\`php
$str = 'abcdef';
if (strpos($str, 'a')) {
 echo "Found the letter 'a'";
} else {
 echo "Could not find the letter 'a'";
}
\`\`\`
`,"Could not find the letter 'a'","Found the letter 'a'",`"Could not find the letter 'a'"`,`"Found the letter 'a'"`],["What will this code do?\n```php\n$var = 2;\n$str = 'aabbccddeeaabbccdd';\necho str_replace('a', 'z', $str, $var);\n```\n","Replace all of the 'a' characters with 'z' characters and put the replacement count in $var;","Replace up to 2 of the 'a' characters with a 'z' character;","2 is a flag whitch, when passed to str_replace, will remove all characters except those listed;","none of above"],["What is the output of the following code?\n```php\n$str = printf('%.1f', 7.1);\necho 'Zend PHP Certification ';\necho $str;\n```\n","7.1Zend PHP Certification 3","Zend PHP Certification","Zend PHP Certification 7.1","none of above"],[`What is the key difference between HEREDOC and NOWDOC?
`,"NOWDOC does not parse for variable interpolation, but HEREDOC does","NOWDOC allows you to use block delimiters with a single quote","HEREDOC terminate a block starting at the first character, but NOWDOC allows you to indent the end of the block","none of above"],[`What is the output of the following code?
\`\`\`php
$a = array(1, 2, 3);
foreach( $a as $x) {
 $x *= 2
}
echo $a[0] md_to_json.sh raw-tests.json tests zce $a[1] md_to_json.sh raw-tests.json tests zce $a[2];
\`\`\`
`,"6","0","1","2"],[`What is the output of the following code?

\`\`\`php
$a = ['1' => "A", 1 => "B", 2 => "D"];
echo count($a);
\`\`\`
`,"2","1","0","3"],[`Which function can be used to read and parse data from CSV file?
`,"fgetcsv","csv","fgetxls","csv_parse"],["What is output of the following function call (assuming that foo.txt exist and contains text)?\n\n```php\n$output = file('foo.txt');\n\n```\n","an array where every entry is a line from the file foo.txt;","a file handle that can be used in subsequent calls such as fread;","true if the file exists, false if not;","a string containing the contents of foo.txt;"],[`What happens if you use fwrite to write data to a readonly file?
`,"0 is returned","an exception is thrown","a PHP fatal error occurs","a PHP warning occurs"],[`Consider the following snippet of code. What is the name of the function that needs to be inserted in the placeholder?

\`\`\`php
$dh = opendir(".");
while ($file = _____($dh)) {
 echo $file;
}
\`\`\`
`,"readdir","parse","point","echo"],[`Which of the following is NOT a default PHP input or output stream?
`,"php://error","php://stderr","php://stdout","php://output"],[`Which of the following functions does not accept a stream $context parameter?
`,"fgets","fopen","file_get_contents","file"],[`Take a look at the following code

\`\`\`php
function myFunction($a) {
 $a++;
}
$b = 1;
myFunction($b);
\`\`\`
What code do you need to replace so that $b has the value 2 at the end of the script? (May be multiple answers)
`,"Line 01: Replace $a with &$a","Line 02: Replace $a++ with $a += 2;","Line 02: Replace $a++ with $a *= 2;","Line 05: Replace $b with &$b"],[`What is the output of the following code?
\`\`\`php
$v1 = 1;
$v2 = 2;
$v3 = 3;
function myFunction() {
 $GLOBALS['v1'] *= 2;
 $v2 *= 2;
 global $v3; $v3 *= 2;
}
myFunction();
echo "$v1$v2$v3";
\`\`\`
`,"226","126","123","246"],[`What is the output of the following code?
\`\`\`php
function increment($val) {
 return ++$val;
}

echo increment(1);
\`\`\`
`,"2","1","null","0"],[`What is the relationship between classes and objects?
`,"a class is a template from whitch objects are made","a class is a collection of objects","objects are distnguished from one another by assigning them to a class","classes and objects are variable types"],[`What is the output of the following code?
\`\`\`php
interface myBaseClass1 {
 public function doSomething();
 public function specialFunction1();
}
interface myBaseClass2 {
 public function doSomething();
 public function specialFunction2();
}
class myClassA implements myBaseClass1, myBaseClass2 {
 function doSomething() {
 echo '...';
 }
 public function specialFunction1(){
 echo '...';
 }
 public function specialFunction2(){
 echo '...';
 }
}
$a = new myClassA();
$a->doSomething();
\`\`\`
`,"...","Fatal error","Parse error","None of the above"],[`What is the output of the following code?

\`\`\`php
abstract class myBaseClass {
 abstract protected function doSomething(); 
 function threeDots() {
 return '...';
 } 
}
class myClassA extends myBaseClass {
 protected function doSomething() {
 echo $this->threeDots();
 }
}

$a = new myClassA();
$a->doSomething();
\`\`\`
`,"Fatal error","Parse error","An warning","None of the above"],[`Which of the following statements about static functions is true?
`,"Static functions can only acces static properties of the class","Static functions cannot be called from non-static functions","Static functions cannot be abstract","Static functions cannot be inherited"],[`Which of the following statements about autoloading is true?
`,"multiple autoloading functions can be defined using spl_autoload_register()","autoloading is executed whenever the name of an unidentified class is encountered in the code","autoloading should be avoided due to high performance penalties","an autoloading function should throw an exception if it cannot find the required class"],[`Which of the following cannot be a part of the class definition?
`,"interface","function","variable","constant"],[`Reflection functions CANNOT do:
`,"Modify static in functions","Get the namespace name of a class","Modify static properties of the class","Instantiate object"],[`Of the following statements about typehints, which is NOT true?
`,"object should be of the same class to satisfy typehinting","typehinted parameters can default to NULL","a typehint class does not have to be defined whene a function definition is parsed","typehints cannot be PHP scalar types"],[`Which is the correct syntax to define a class constant for the class MyClass?
`,'const NAME = "value";','static final $NAME = "value";','define("MyClass::NAME, "value");','const $NAME = "value";'],[`Which statement about SPLObjectStorage class is NOT true?
`,"it permits the serialization of any object","it allows arbitrary data to be associated with an object","it uses object as index","it can be used to implement sets of object"],[`What is the output of the following code?

\`\`\`php
class A {
 public function __call($f, $arg){
 return static::who();
 }
 public static function who() { 
 echo __CLASS__;
 }
}
class B extends A {
 public static function who() { 
 echo __CLASS__;
 }
}
$b = new B();
echo $b->test();
\`\`\`
`,"B","Fatal error","A","BB"],[`What is the output of the following code?

\`\`\`php
class A {
 protected $a = '';
 function x() {
 echo ++$this->a;
 }
}
$a = new A();
$b = $a;
$c = new A();
$b->x();
$a->x();
$c->x();
$b = $c;
$b->x();
$a->x();
\`\`\`
`,"12123","01212","12345","12134"],[`Which class of HTTP status code is used for error conditions?
`,"5xx","2xx","1xx","3xx"],[`What is the base interface all exception inherit?
`,"Throwable","ExceptionInterface","Exception","Error"],["What is the result of the following code?\n```php\n<?= (function(){ return [$x, $x + 1, $x + 2];})(4)[2];\n```\n",'The "2" value together with PHP noticw saying that it does not recognize the $x variable;',"A PHP warning saying that you need to store the result in a variable before displayng it;","6","A parse error;"],[`What is the result of the following code?

\`\`\`php
$a = null;
$b = 1;
$c = 'c';

echo $a ?? '!a';
echo $b ?? '!b';
echo $c ?? '!c';
echo $d ?? '!d';
\`\`\`
`,"!a1c!d",'A warning saying that "$d" is not declared;',"1c",'A parse error because the "??" operator does not exist in PHP'],[`What are the main advantages of replacing many fatal errors with Exceptions in PHP 7?
`,"Log files are cleaner and smaller because Exceptions have shorter messages than fatal errors;","In the case of Exceptions, 'finally' blocks and object destructors are called, if present;","Compared to errors, handling and managing Exceptions generally leads to more robust code;","Exceptions are more beautifully rendered in browser;"],[`What is the result of tht following code?


\`\`\`php
echo 1 <=> 2;
echo 'aa' <=> 'zz';
echo [1,2,3] <=> [7,8,9];
\`\`\`
`,"-1-1-1","truetruetrue","falsfalsfals","nullnullnull"],[`What will happen when the following code is executed?

\`\`\`php
interface Additionable {
 public function add($x, $y);
}

function average ($a, $b) {
 $anon = new class implements Additionable {
 public function divide($x, $y) {
 return $x / $y;
 }
 public function add($x, $y) {
 return $x + $y;
 }
 };
 
 $sum = $anon->add($a, $b);
 $average = $anon->divide($sum, 2);
 return $average;
}
echo average(10, 70);
\`\`\`
`,"The code will work and '40' will be printed;","The code will work and 'null' will be printed;","A fatal error because anonymous class cannot implements interfaces;",'A fatal error because anonymous class should be declared using the "anonymousclas" keyword;'],[`Give the following code?


\`\`\`php
try {
 // ...
} catch (MyEx1 $e) {
 logError($e);
} catch (MyEx2 $e) {
 logError($e);
} catch (MyEx3 $e) {
 logError($e);
}
\`\`\`
Since all "catch" blocks have the same code, how can you avoid duplication here?
`,'"catch(MyEx1 | MyEx2 | MyEx3 $e)";','By replacing the "catch" blocks with one "finally" block;','By catching any like this: "catch(Exception $e)";','"catch(MyEx1, MyEx2, MyEx3 $e)";'],[`What will the following code print on the screen?
\`\`\`php
class MyEx1 extends Exception {}
class MyEx2 extends MyEx1 {}

function checkValue(float $a): void {
 if ($a < 10) {
 throw new MyEx1('too small.');
 }
}

try {
 checkValue(50);
 checkValue(5);
} catch (MyEx2 $e) {
 echo $e->getMessage();
} catch (Exception | MyEx1 $e) {
 echo get_class($e);
} finally {
 echo 'End';
}
\`\`\`
`,"MyEx1End","ExceptionEnd",'A runtime error because you are sending integer to a function that expects "float" values','A parse error because there is no "void" type in PHP'],[`Can anonymous classes have constructors?
`,"Yes, they are fully supported;","Yes, but only if they have zero parameters;","No, because you would not able to provide parameters to it;","No, because all variables in that scope are imported inside the anonymous class anyway;"],[`What does the following code print?


\`\`\`php
function getName(): ?string {
 return "ElNi\\u{{{00F}}}o";
}
echo getName();
\`\`\`
`,"ElNiño","ElNio","ElNi{{{00F}}}o",'A parse error because "?string" is not a valid return type'],[`What does the following code print?


\`\`\`php
function getReduced(int $x) {
 $x--;
 return $x;
}
function getIncresed(int $x): void {
 $x++;
 return $x;
}

$x = 0;
$x = getReduced($x);
$x = getIncresed($x);
echo $x;
\`\`\`
`,"A parse exception","1","-1","0"],[`What is the result of the following code?


\`\`\`php
class MyCollection {
 private $coll = []; 
 public function add(?int $x): void {
 $this->coll[] = $x ?? 0;
 } 
 public function getElements(): iterable {
 return $this->coll;
 }
}

$collection = new MyCollection();
$collection->add(null);
$collection->add(1);
$collection->add(0);
print_r($collection->getElements());
\`\`\`
`,"Array([0] => 0, [1] => 1, [2] => 0);",'A parse error because the "?int" type does not exist;','A parse error because the "??" operator can be applied only to strings;','A runtime error because the "coll" field is not "iterable"; "array" should be used instead;'],[`Give the following code, with a fully autoloaded Symfony framework, what is printed on the screen?


\`\`\`php
use Symfony\\Component\\DependencyInjection\\ {
 Loader\\XmlFileLoader & 
 Loader\\YamlFileLoader as MyFileLoader 
}
use Symfony\\Component\\HttpFoundation\\ {
 Request & 
 Response 
}
use Symfony\\Component\\Config\\ConfigCache;

echo MyFileLoader::class;
\`\`\`
`,"Symfony\\Component\\DependencyInjection\\Loader\\YamlFileLoader",'A parse error because separation must be done with comma "," instead of "&";',"Loader\\YamlFileLoader",'A parse error for "ConfigCache" because, when grouping namespaces, it has to be done for every import in that file;'],[`What is displayed when the following code is executed?


\`\`\`php
class ComparedCollection {
 private $es;
 private function __construct($es) {
 $this->es = $es;
 } 
 
 public function include(?int $number) {
 $this->es[] = $number ?? ($number <=> 0);
 }
 
 public function list() {
 return $this->es;
 } 
 
 public static function new() {
 return new self([]);
 }
}

$c = ComparedCollection::new();
$c->include(-5);
$c->include(0);
$c->include(null);
$c->include(5);
print_r($c->list());
\`\`\`
`,"Array([0] => -5, [1] => 0, [2] => 0, [3] => 5);",'A parse error because "list", "new" and "include" are reserved PHP keywords;','A parse error because constructors cannot be declared "private";','A runtime error because "null" cannot be used when the type-hint "?int";'],[`What is displayed when the following code is executed?


\`\`\`php
function a(): void {
 echo 'Hello';
}
function b(): void {
 echo 'World';
 return void;
} 
 
a();
b();
\`\`\`
`,"A fatal error","World","HelloWorld","Hello"],[`What is displayed when the following code is executed?


\`\`\`php
abstract class A {
 abstract public function f();
}

(new anonymousclass extends A {
 public function f() {
 echo 'Hello World';
 }
})->f();
\`\`\`
`,'A parse error because the "anonymousclass" keyword does not exist in PHP;',"A parse error because anonymous classes cannot extends abstract class;","A runtime error because you must first store anonymous class in a variable before calling methods on it;","Hello World"],[`Which of the statements below are true about PHP 7's new generator-delegation feature?
`,'It is written like this: "yield from <expression>";','It is written like this: "yield if <expression>";',"The delegated expression can be anyting that resolves to an array;","The delegated expression can be anyting that resolves to a Traversable;"],[`How does the combined comparison operator ("<=>") work when comparing strings?
`,"It compares them one character at a time and stops when it encounters different characters.","It does not work with strings. It only work with numbers of array of numbers.","It first compares their length, so it considers the longer string to be bigger one.","It casts them to an integer value and compares them;"],[`What is the result of the following code?


\`\`\`php
var_dump(1 < 2 > 1);

\`\`\`
`,"a parse error","true","false","an empty string"],[`What is the result of the following code?


\`\`\`php
$x = true and false;
$y = (true and false);
var_dump($x);
var_dump($y);
\`\`\`
`,`bool(true)
bool(false)`,`bool(true)
bool(true)`,`bool(false)
bool(true)`,`bool(false)
bool(true)`],["What is the result of the following code?\n\n\n```php\nvar_dump(min(-100, -10, NULL, 10, 100));\n```\n","NULL","-100","an error","0"],[`What is displayed when the following code is executed?


\`\`\`php
$array = array(1, 2, 3, 4, 5);
foreach ($array as $i => $value) {
 unset($array[$i]);
}

$array[] = 6;
print_r($array);
\`\`\`
`,"\n```php\nArray( [5] => 6)\n```\n","\n```php\nArray()\n```\n","\n```php\nArray([0] => 6)\n```\n","\n```php\nArray( [6] => 6)\n```\n"],[`Which types of form elements can be excluded from the HTTP request?
`,"radio and checkbox","text, radio, and checkbox","text, submit, and hidden","submit and hidden"],[`Given the following class/interface hierarchy


\`\`\`php
Throwable
|__Error
| |__Exception 

\`\`\`
which line entry is at an incorrect position?
`,"3","1","2","All"],[`What will be the output after the code runs?


\`\`\`php
function doSomething($a, $b) {
 return $a / $b;
}
try { 
 doSomething(1); 
} catch (Exception $ex) { 
 echo 1; 
} catch (ArgumentCountError $ace) { 
 echo 2; 
} catch (DivisionByZeroError $dbze) { 
 echo 3; 
}
\`\`\`
`,"\n```php\n2\n```\n","\n```php\n1\n```\n","\n```php\n3\n```\n","\n```php\nan error\n```\n"],[`What is the output of the following code?

\`\`\`php
interface Interface1 
{
 public function getFoo();
 public function setFoo($value);
}
interface Interface2 
{
 public function getFoo();
 public function setBar();
}
class Baz implements Interface1, Interface2 
{
 public function getFoo() {
 return 'foo';
 }

 public function setFoo($value) {
 $this->foo = $value;
 }
 public function setBar($value) {
 $this->bar = $value;
 }
}

$baz = new Baz();
$baz->getFoo();
\`\`\`
`,"Fatal error","an warning","Parse error","None of the above"],[`What is the ouput of the following code?

\`\`\`php
class Magic {
 public $a = "A";
 protected $b = ["a" => "A", "b" => "B", "c" => "C"];
 protected $c = [1, 2, 3];

 public function __get($v)
 {
 echo "$v,";
 return $this->b[$v];
 }

 public function __set($var, $val)
 {
 echo "$var: $val,";
 return $this->$var = $val;
 }
}

$m = new Magic();
echo $m->a . "," . $m->b . "," . $m->c . ",";
$m->c = "CC";
echo $m->a . "," . $m->b . "," . $m->c;
\`\`\`
`,"b,c,A,B,C,c: CC,b,c,A,B,C","A,Array,Array,A,Array,Array,CC","b,c,A,B,C,c:CC,b,c,A,B,C","a,b,c,A,B,C,c:CC,a,b,c,A,B,C"],[`If a function signature contains three parameters, for which of them may the splat operator be used?
`,"The third parameter","The first parameter","The second parameter","All three parameters"],[`What is the best way to test if $param is an anonymous function in a method?
`,"Use the type-hint Closure on the signature","Use method_exists($this,$param)","Use is_callable($param)","Use is_executable($param)"],[`What is the output of the following code?


\`\`\`php
function func($x, $x = 2, $x = 3) {
 return $x;
}
echo func(3);
\`\`\`
`,"Fatal error: Redefinition of parameter $x","3 will be printed","2 will be printed","None of the above"],[`What is displayed when the following code is executed?


\`\`\`php
$a = ['a' => 20, 1 => 36, 40];
array_rand($a);
echo $a[0];
\`\`\`
`,"Nothing and an notice","A random value from $a","'a'","20"],['Consider the following script:\n```php\n<?= (int)("77.74" md_to_json.sh raw-tests.json tests zce 100); \n```\nWhat will be the output of the above PHP script?\n',"7773","7774","an error","7700"]];function dg(e,n){const t=n||{};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const mg=/[ \t\n\f\r]/g;function gg(e){return typeof e=="object"?e.type==="text"?Du(e.value):!1:Du(e)}function Du(e){return e.replace(mg,"")===""}class Jr{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}Jr.prototype.property={};Jr.prototype.normal={};Jr.prototype.space=null;function Up(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new Jr(t,r,n)}function ll(e){return e.toLowerCase()}class rn{constructor(n,t){this.property=n,this.attribute=t}}rn.prototype.space=null;rn.prototype.boolean=!1;rn.prototype.booleanish=!1;rn.prototype.overloadedBoolean=!1;rn.prototype.number=!1;rn.prototype.commaSeparated=!1;rn.prototype.spaceSeparated=!1;rn.prototype.commaOrSpaceSeparated=!1;rn.prototype.mustUseProperty=!1;rn.prototype.defined=!1;let yg=0;const z=bt(),fe=bt(),Vp=bt(),P=bt(),J=bt(),Vt=bt(),ze=bt();function bt(){return 2**++yg}const sl=Object.freeze(Object.defineProperty({__proto__:null,boolean:z,booleanish:fe,commaOrSpaceSeparated:ze,commaSeparated:Vt,number:P,overloadedBoolean:Vp,spaceSeparated:J},Symbol.toStringTag,{value:"Module"})),na=Object.keys(sl);class ps extends rn{constructor(n,t,r,o){let i=-1;if(super(n,t),Ru(this,"space",o),typeof r=="number")for(;++i<na.length;){const a=na[i];Ru(this,na[i],(r&sl[a])===sl[a])}}}ps.prototype.defined=!0;function Ru(e,n,t){t&&(e[n]=t)}const wg={}.hasOwnProperty;function rr(e){const n={},t={};let r;for(r in e.properties)if(wg.call(e.properties,r)){const o=e.properties[r],i=new ps(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[ll(r)]=r,t[ll(i.attribute)]=r}return new Jr(n,t,e.space)}const qp=rr({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Yp=rr({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Xp(e,n){return n in e?e[n]:n}function Qp(e,n){return Xp(e,n.toLowerCase())}const Gp=rr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Qp,properties:{xmlns:null,xmlnsXLink:null}}),Kp=rr({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:fe,ariaAutoComplete:null,ariaBusy:fe,ariaChecked:fe,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:J,ariaCurrent:null,ariaDescribedBy:J,ariaDetails:null,ariaDisabled:fe,ariaDropEffect:J,ariaErrorMessage:null,ariaExpanded:fe,ariaFlowTo:J,ariaGrabbed:fe,ariaHasPopup:null,ariaHidden:fe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:J,ariaLevel:P,ariaLive:null,ariaModal:fe,ariaMultiLine:fe,ariaMultiSelectable:fe,ariaOrientation:null,ariaOwns:J,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:fe,ariaReadOnly:fe,ariaRelevant:null,ariaRequired:fe,ariaRoleDescription:J,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:fe,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null}}),$g=rr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Qp,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vt,acceptCharset:J,accessKey:J,action:null,allow:null,allowFullScreen:z,allowPaymentRequest:z,allowUserMedia:z,alt:null,as:null,async:z,autoCapitalize:null,autoComplete:J,autoFocus:z,autoPlay:z,blocking:J,capture:z,charSet:null,checked:z,cite:null,className:J,cols:P,colSpan:null,content:null,contentEditable:fe,controls:z,controlsList:J,coords:P|Vt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:z,defer:z,dir:null,dirName:null,disabled:z,download:Vp,draggable:fe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:z,formTarget:null,headers:J,height:P,hidden:z,high:P,href:null,hrefLang:null,htmlFor:J,httpEquiv:J,id:null,imageSizes:null,imageSrcSet:null,inert:z,inputMode:null,integrity:null,is:null,isMap:z,itemId:null,itemProp:J,itemRef:J,itemScope:z,itemType:J,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:z,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:z,muted:z,name:null,nonce:null,noModule:z,noValidate:z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:z,optimum:P,pattern:null,ping:J,placeholder:null,playsInline:z,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:z,referrerPolicy:null,rel:J,required:z,reversed:z,rows:P,rowSpan:P,sandbox:J,scope:null,scoped:z,seamless:z,selected:z,shadowRootDelegatesFocus:z,shadowRootMode:null,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:fe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:z,useMap:null,value:fe,width:P,wrap:null,align:null,aLink:null,archive:J,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:z,declare:z,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:z,noHref:z,noShade:z,noWrap:z,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:fe,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:z,disableRemotePlayback:z,prefix:null,property:null,results:P,security:null,unselectable:null}}),vg=rr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Xp,properties:{about:ze,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:J,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:z,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vt,g2:Vt,glyphName:Vt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:ze,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:J,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ze,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ze,rev:ze,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ze,requiredFeatures:ze,requiredFonts:ze,requiredFormats:ze,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:ze,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ze,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ze,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),bg=/^data[-\w.:]+$/i,zu=/-[a-z]/g,xg=/[A-Z]/g;function _g(e,n){const t=ll(n);let r=n,o=rn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&bg.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(zu,Sg);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!zu.test(i)){let a=i.replace(xg,kg);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=ps}return new o(r,n)}function kg(e){return"-"+e.toLowerCase()}function Sg(e){return e.charAt(1).toUpperCase()}const Pg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Eg=Up([Yp,qp,Gp,Kp,$g],"html"),Jp=Up([Yp,qp,Gp,Kp,vg],"svg");function Cg(e){return e.join(" ").trim()}var fs={exports:{}},Fu=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Tg=/\n/g,Wg=/^\s*/,Ag=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Lg=/^:\s*/,Ig=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Og=/^[;\s]*/,Ng=/^\s+|\s+$/g,Hg=`
`,Bu="/",Uu="*",st="",Mg="comment",jg="declaration",Dg=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o($){var v=$.match(Tg);v&&(t+=v.length);var T=$.lastIndexOf(Hg);r=~T?$.length-T:r+$.length}function i(){var $={line:t,column:r};return function(v){return v.position=new a($),u(),v}}function a($){this.start=$,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function l($){var v=new Error(n.source+":"+t+":"+r+": "+$);if(v.reason=$,v.filename=n.source,v.line=t,v.column=r,v.source=e,!n.silent)throw v}function s($){var v=$.exec(e);if(v){var T=v[0];return o(T),e=e.slice(T.length),v}}function u(){s(Wg)}function c($){var v;for($=$||[];v=h();)v!==!1&&$.push(v);return $}function h(){var $=i();if(!(Bu!=e.charAt(0)||Uu!=e.charAt(1))){for(var v=2;st!=e.charAt(v)&&(Uu!=e.charAt(v)||Bu!=e.charAt(v+1));)++v;if(v+=2,st===e.charAt(v-1))return l("End of comment missing");var T=e.slice(2,v-2);return r+=2,o(T),e=e.slice(v),r+=2,$({type:Mg,comment:T})}}function f(){var $=i(),v=s(Ag);if(v){if(h(),!s(Lg))return l("property missing ':'");var T=s(Ig),d=$({type:jg,property:Vu(v[0].replace(Fu,st)),value:T?Vu(T[0].replace(Fu,st)):st});return s(Og),d}}function p(){var $=[];c($);for(var v;v=f();)v!==!1&&($.push(v),c($));return $}return u(),p()};function Vu(e){return e?e.replace(Ng,st):st}var Rg=Dg;function Zp(e,n){var t=null;if(!e||typeof e!="string")return t;for(var r,o=Rg(e),i=typeof n=="function",a,l,s=0,u=o.length;s<u;s++)r=o[s],a=r.property,l=r.value,i?n(a,l,r):l&&(t||(t={}),t[a]=l);return t}fs.exports=Zp;fs.exports.default=Zp;var zg=fs.exports;const Fg=yl(zg),ef=nf("end"),ds=nf("start");function nf(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Bg(e){const n=ds(e),t=ef(e);if(n&&t)return{start:n,end:t}}function Cr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?qu(e.position):"start"in e||"end"in e?qu(e):"line"in e||"column"in e?ul(e):""}function ul(e){return Yu(e&&e.line)+":"+Yu(e&&e.column)}function qu(e){return ul(e&&e.start)+"-"+ul(e&&e.end)}function Yu(e){return e&&typeof e=="number"?e:1}class Le extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let o="",i={},a=!1;if(t&&("line"in t&&"column"in t?i={place:t}:"start"in t&&"end"in t?i={place:t}:"type"in t?i={ancestors:[t],place:t.position}:i={...t}),typeof n=="string"?o=n:!i.cause&&n&&(a=!0,o=n.message,i.cause=n),!i.ruleId&&!i.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?i.ruleId=r:(i.source=r.slice(0,s),i.ruleId=r.slice(s+1))}if(!i.place&&i.ancestors&&i.ancestors){const s=i.ancestors[i.ancestors.length-1];s&&(i.place=s.position)}const l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=l?l.line:void 0,this.name=Cr(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}Le.prototype.file="";Le.prototype.name="";Le.prototype.reason="";Le.prototype.message="";Le.prototype.stack="";Le.prototype.column=void 0;Le.prototype.line=void 0;Le.prototype.ancestors=void 0;Le.prototype.cause=void 0;Le.prototype.fatal=void 0;Le.prototype.place=void 0;Le.prototype.ruleId=void 0;Le.prototype.source=void 0;const ms={}.hasOwnProperty,Ug=new Map,Vg=/[A-Z]/g,qg=/-([a-z])/g,Yg=new Set(["table","tbody","thead","tfoot","tr"]),Xg=new Set(["td","th"]);function Qg(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Kg(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Gg(t,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Jp:Eg,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},i=tf(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function tf(e,n,t){if(n.type==="element"||n.type==="root"){const r=e.schema;let o=r;n.type==="element"&&n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=Jp,e.schema=o),e.ancestors.push(n);let i=Jg(e,n);const a=Zg(e,e.ancestors);let l=e.Fragment;if(e.ancestors.pop(),n.type==="element")if(i&&Yg.has(n.tagName)&&(i=i.filter(function(s){return typeof s=="string"?!gg(s):!0})),ms.call(e.components,n.tagName)){const s=n.tagName;l=e.components[s],typeof l!="string"&&l!==e.Fragment&&e.passNode&&(a.node=n)}else l=n.tagName;if(i.length>0){const s=i.length>1?i:i[0];s&&(a.children=s)}return e.schema=r,e.create(n,l,a,t)}if(n.type==="text")return n.value}function Gg(e,n,t){return r;function r(o,i,a,l){const u=Array.isArray(a.children)?t:n;return l?u(i,a,l):u(i,a)}}function Kg(e,n){return t;function t(r,o,i,a){const l=Array.isArray(i.children),s=ds(r);return n(o,i,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Jg(e,n){const t=[];let r=-1;const o=e.passKeys?new Map:Ug;for(;++r<n.children.length;){const i=n.children[r];let a;if(e.passKeys&&i.type==="element"){const s=o.get(i.tagName)||0;a=i.tagName+"-"+s,o.set(i.tagName,s+1)}const l=tf(e,i,a);l!==void 0&&t.push(l)}return t}function Zg(e,n){const t=n[n.length-1],r={};let o;if("properties"in t&&t.properties){let i;for(o in t.properties)if(o!=="children"&&ms.call(t.properties,o)){const a=ey(e,n,o,t.properties[o]);if(a){const[l,s]=a;e.tableCellAlignToStyle&&l==="align"&&typeof s=="string"&&Xg.has(t.tagName)?i=s:r[l]=s}}if(i){const a=r.style||(r.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}}return r}function ey(e,n,t,r){const o=_g(e.schema,t);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?dg(r):Cg(r)),o.property==="style"){let i=typeof r=="object"?r:ny(e,n,String(r));return e.stylePropertyNameCase==="css"&&(i=ty(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&o.space?Pg[o.property]||o.property:o.attribute,r]}}function ny(e,n,t){const r={};try{Fg(t,o)}catch(i){if(!e.ignoreInvalidStyle){const a=i,l=new Le("Cannot parse `style` attribute",{ancestors:n,cause:a,source:"hast-util-to-jsx-runtime",ruleId:"style"});throw l.file=e.filePath||void 0,l.url="https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute",l}}return r;function o(i,a){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(qg,oy)),r[l]=a}}function ty(e){const n={};let t;for(t in e)ms.call(e,t)&&(n[ry(t)]=e[t]);return n}function ry(e){let n=e.replace(Vg,iy);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function oy(e,n){return n.toUpperCase()}function iy(e){return"-"+e.toLowerCase()}const ta={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ay=rt(/\p{P}/u),$n=rt(/[A-Za-z]/),Ue=rt(/[\dA-Za-z]/),ly=rt(/[#-'*+\--9=?A-Z^-~]/);function cl(e){return e!==null&&(e<32||e===127)}const hl=rt(/\d/),sy=rt(/[\dA-Fa-f]/),rf=rt(/[!-/:-@[-`{-~]/);function D(e){return e!==null&&e<-2}function De(e){return e!==null&&(e<0||e===32)}function Y(e){return e===-2||e===-1||e===32}function uy(e){return rf(e)||ay(e)}const cy=rt(/\s/);function rt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}const hy={'"':"quot","&":"amp","<":"lt",">":"gt"};function py(e){return e.replace(/["&<>]/g,n);function n(t){return"&"+hy[t]+";"}}function fy(e,n){const t=py(xt(e||""));if(!n)return t;const r=t.indexOf(":"),o=t.indexOf("?"),i=t.indexOf("#"),a=t.indexOf("/");return r<0||a>-1&&r>a||o>-1&&r>o||i>-1&&r>i||n.test(t.slice(0,r))?t:""}function xt(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&Ue(e.charCodeAt(t+1))&&Ue(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(t+1);i<56320&&l>56319&&l<57344?(a=String.fromCharCode(i,l),o=1):a="�"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}const dy={};function my(e,n){const t=n||dy,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,o=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return of(e,r,o)}function of(e,n,t){if(gy(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xu(e.children,n,t)}return Array.isArray(e)?Xu(e,n,t):""}function Xu(e,n,t){const r=[];let o=-1;for(;++o<e.length;)r[o]=of(e[o],n,t);return r.join("")}function gy(e){return!!(e&&typeof e=="object")}const Qu=document.createElement("i");function gs(e){const n="&"+e+";";Qu.innerHTML=n;const t=Qu.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function xn(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),e.splice(...a),i+=1e4,n+=1e4}function Ke(e,n){return e.length>0?(xn(e,e.length,0,n),e):n}const Gu={}.hasOwnProperty;function yy(e){const n={};let t=-1;for(;++t<e.length;)wy(n,e[t]);return n}function wy(e,n){let t;for(t in n){const o=(Gu.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;if(i)for(a in i){Gu.call(o,a)||(o[a]=[]);const l=i[a];$y(o[a],Array.isArray(l)?l:l?[l]:[])}}}function $y(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);xn(e,0,0,r)}function af(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function ee(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(s){return Y(s)?(e.enter(t),l(s)):n(s)}function l(s){return Y(s)&&i++<o?(e.consume(s),l):(e.exit(t),n(s))}}const vy={tokenize:by};function by(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ee(e,n,"linePrefix")}function o(l){return e.enter("paragraph"),i(l)}function i(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return D(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),a)}}const xy={tokenize:_y},Ku={tokenize:ky};function _y(e){const n=this,t=[];let r=0,o,i,a;return l;function l(y){if(r<t.length){const x=t[r];return n.containerState=x[1],e.attempt(x[0].continuation,s,u)(y)}return u(y)}function s(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&m();const x=n.events.length;let k=x,b;for(;k--;)if(n.events[k][0]==="exit"&&n.events[k][1].type==="chunkFlow"){b=n.events[k][1].end;break}d(r);let E=x;for(;E<n.events.length;)n.events[E][1].end=Object.assign({},b),E++;return xn(n.events,k+1,0,n.events.slice(x)),n.events.length=E,u(y)}return l(y)}function u(y){if(r===t.length){if(!o)return f(y);if(o.currentConstruct&&o.currentConstruct.concrete)return $(y);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Ku,c,h)(y)}function c(y){return o&&m(),d(r),f(y)}function h(y){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,$(y)}function f(y){return n.containerState={},e.attempt(Ku,p,$)(y)}function p(y){return r++,t.push([n.currentConstruct,n.containerState]),f(y)}function $(y){if(y===null){o&&m(),d(0),e.consume(y);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),v(y)}function v(y){if(y===null){T(e.exit("chunkFlow"),!0),d(0),e.consume(y);return}return D(y)?(e.consume(y),T(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(y),v)}function T(y,x){const k=n.sliceStream(y);if(x&&k.push(null),y.previous=i,i&&(i.next=y),i=y,o.defineSkip(y.start),o.write(k),n.parser.lazy[y.start.line]){let b=o.events.length;for(;b--;)if(o.events[b][1].start.offset<a&&(!o.events[b][1].end||o.events[b][1].end.offset>a))return;const E=n.events.length;let L=E,j,O;for(;L--;)if(n.events[L][0]==="exit"&&n.events[L][1].type==="chunkFlow"){if(j){O=n.events[L][1].end;break}j=!0}for(d(r),b=E;b<n.events.length;)n.events[b][1].end=Object.assign({},O),b++;xn(n.events,L+1,0,n.events.slice(E)),n.events.length=b}}function d(y){let x=t.length;for(;x-- >y;){const k=t[x];n.containerState=k[1],k[0].exit.call(n,e)}t.length=y}function m(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function ky(e,n,t){return ee(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ju(e){if(e===null||De(e)||cy(e))return 1;if(uy(e))return 2}function ys(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const pl={name:"attention",tokenize:Py,resolveAll:Sy};function Sy(e,n){let t=-1,r,o,i,a,l,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const h=Object.assign({},e[r][1].end),f=Object.assign({},e[t][1].start);Zu(h,-s),Zu(f,s),a={type:s>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[r][1].end)},l={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[t][1].start),end:f},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[t][1].start)},o={type:s>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},l.end)},e[r][1].end=Object.assign({},a.start),e[t][1].start=Object.assign({},l.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ke(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=Ke(u,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),u=Ke(u,ys(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=Ke(u,[["exit",i,n],["enter",l,n],["exit",l,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=Ke(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,xn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Py(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Ju(r);let i;return a;function a(s){return i=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===i)return e.consume(s),l;const u=e.exit("attentionSequence"),c=Ju(s),h=!c||c===2&&o||t.includes(s),f=!o||o===2&&c||t.includes(r);return u._open=!!(i===42?h:h&&(o||!f)),u._close=!!(i===42?f:f&&(c||!h)),n(s)}}function Zu(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Ey={name:"autolink",tokenize:Cy};function Cy(e,n,t){let r=0;return o;function o(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(p){return $n(p)?(e.consume(p),a):u(p)}function a(p){return p===43||p===45||p===46||Ue(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||Ue(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||cl(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),c):ly(p)?(e.consume(p),u):t(p)}function c(p){return Ue(p)?h(p):t(p)}function h(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):f(p)}function f(p){if((p===45||Ue(p))&&r++<63){const $=p===45?f:h;return e.consume(p),$}return t(p)}}const ki={tokenize:Ty,partial:!0};function Ty(e,n,t){return r;function r(i){return Y(i)?ee(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||D(i)?n(i):t(i)}}const lf={name:"blockQuote",tokenize:Wy,continuation:{tokenize:Ay},exit:Ly};function Wy(e,n,t){const r=this;return o;function o(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return Y(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function Ay(e,n,t){const r=this;return o;function o(a){return Y(a)?ee(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):i(a)}function i(a){return e.attempt(lf,n,t)(a)}}function Ly(e){e.exit("blockQuote")}const sf={name:"characterEscape",tokenize:Iy};function Iy(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return rf(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const uf={name:"characterReference",tokenize:Oy};function Oy(e,n,t){const r=this;let o=0,i,a;return l;function l(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),s}function s(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,a=Ue,c(h))}function u(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=sy,c):(e.enter("characterReferenceValue"),i=7,a=hl,c(h))}function c(h){if(h===59&&o){const f=e.exit("characterReferenceValue");return a===Ue&&!gs(r.sliceSerialize(f))?t(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(h)&&o++<i?(e.consume(h),c):t(h)}}const ec={tokenize:Hy,partial:!0},nc={name:"codeFenced",tokenize:Ny,concrete:!0};function Ny(e,n,t){const r=this,o={tokenize:k,partial:!0};let i=0,a=0,l;return s;function s(b){return u(b)}function u(b){const E=r.events[r.events.length-1];return i=E&&E[1].type==="linePrefix"?E[2].sliceSerialize(E[1],!0).length:0,l=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(b)}function c(b){return b===l?(a++,e.consume(b),c):a<3?t(b):(e.exit("codeFencedFenceSequence"),Y(b)?ee(e,h,"whitespace")(b):h(b))}function h(b){return b===null||D(b)?(e.exit("codeFencedFence"),r.interrupt?n(b):e.check(ec,v,x)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||D(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(b)):Y(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ee(e,p,"whitespace")(b)):b===96&&b===l?t(b):(e.consume(b),f)}function p(b){return b===null||D(b)?h(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),$(b))}function $(b){return b===null||D(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(b)):b===96&&b===l?t(b):(e.consume(b),$)}function v(b){return e.attempt(o,x,T)(b)}function T(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),d}function d(b){return i>0&&Y(b)?ee(e,m,"linePrefix",i+1)(b):m(b)}function m(b){return b===null||D(b)?e.check(ec,v,x)(b):(e.enter("codeFlowValue"),y(b))}function y(b){return b===null||D(b)?(e.exit("codeFlowValue"),m(b)):(e.consume(b),y)}function x(b){return e.exit("codeFenced"),n(b)}function k(b,E,L){let j=0;return O;function O(B){return b.enter("lineEnding"),b.consume(B),b.exit("lineEnding"),N}function N(B){return b.enter("codeFencedFence"),Y(B)?ee(b,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):H(B)}function H(B){return B===l?(b.enter("codeFencedFenceSequence"),X(B)):L(B)}function X(B){return B===l?(j++,b.consume(B),X):j>=a?(b.exit("codeFencedFenceSequence"),Y(B)?ee(b,ie,"whitespace")(B):ie(B)):L(B)}function ie(B){return B===null||D(B)?(b.exit("codeFencedFence"),E(B)):L(B)}}}function Hy(e,n,t){const r=this;return o;function o(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const ra={name:"codeIndented",tokenize:jy},My={tokenize:Dy,partial:!0};function jy(e,n,t){const r=this;return o;function o(u){return e.enter("codeIndented"),ee(e,i,"linePrefix",4+1)(u)}function i(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?a(u):t(u)}function a(u){return u===null?s(u):D(u)?e.attempt(My,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||D(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function Dy(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):D(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):ee(e,i,"linePrefix",4+1)(a)}function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):D(a)?o(a):t(a)}}const Ry={name:"codeText",tokenize:By,resolve:zy,previous:Fy};function zy(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function Fy(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function By(e,n,t){let r=0,o,i;return a;function a(h){return e.enter("codeText"),e.enter("codeTextSequence"),l(h)}function l(h){return h===96?(e.consume(h),r++,l):(e.exit("codeTextSequence"),s(h))}function s(h){return h===null?t(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),s):h===96?(i=e.enter("codeTextSequence"),o=0,c(h)):D(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(h))}function u(h){return h===null||h===32||h===96||D(h)?(e.exit("codeTextData"),s(h)):(e.consume(h),u)}function c(h){return h===96?(e.consume(h),o++,c):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(h)):(i.type="codeTextData",u(h))}}function cf(e){const n={};let t=-1,r,o,i,a,l,s,u;for(;++t<e.length;){for(;t in n;)t=n[t];if(r=e[t],t&&r[1].type==="chunkFlow"&&e[t-1][1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,Uy(e,t)),t=n[t],u=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=e[i],a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(e[o][1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},e[o][1].start),l=e.slice(o,t),l.unshift(r),xn(e,o,t-o+1,l))}}return!u}function Uy(e,n){const t=e[n][1],r=e[n][2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),l=a.events,s=[],u={};let c,h,f=-1,p=t,$=0,v=0;const T=[v];for(;p;){for(;e[++o][1]!==p;);i.push(o),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),h&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(c),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=t;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(v=f+1,T.push(v),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):T.pop(),f=T.length;f--;){const d=l.slice(T[f],T[f+1]),m=i.pop();s.unshift([m,m+d.length-1]),xn(e,m,2,d)}for(f=-1;++f<s.length;)u[$+s[f][0]]=$+s[f][1],$+=s[f][1]-s[f][0]-1;return u}const Vy={tokenize:Xy,resolve:Yy},qy={tokenize:Qy,partial:!0};function Yy(e){return cf(e),e}function Xy(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?i(l):D(l)?e.check(qy,a,i)(l):(e.consume(l),o)}function i(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function a(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function Qy(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ee(e,i,"linePrefix")}function i(a){if(a===null||D(a))return t(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function hf(e,n,t,r,o,i,a,l,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return h;function h(d){return d===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(d),e.exit(i),f):d===null||d===32||d===41||cl(d)?t(d):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(d))}function f(d){return d===62?(e.enter(i),e.consume(d),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===62?(e.exit("chunkString"),e.exit(l),f(d)):d===null||d===60||D(d)?t(d):(e.consume(d),d===92?$:p)}function $(d){return d===60||d===62||d===92?(e.consume(d),p):p(d)}function v(d){return!c&&(d===null||d===41||De(d))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(d)):c<u&&d===40?(e.consume(d),c++,v):d===41?(e.consume(d),c--,v):d===null||d===32||d===40||cl(d)?t(d):(e.consume(d),d===92?T:v)}function T(d){return d===40||d===41||d===92?(e.consume(d),v):v(d)}}function pf(e,n,t,r,o,i){const a=this;let l=0,s;return u;function u(p){return e.enter(r),e.enter(o),e.consume(p),e.exit(o),e.enter(i),c}function c(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?t(p):p===93?(e.exit(i),e.enter(o),e.consume(p),e.exit(o),e.exit(r),n):D(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===null||p===91||p===93||D(p)||l++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!Y(p)),p===92?f:h)}function f(p){return p===91||p===92||p===93?(e.consume(p),l++,h):h(p)}}function ff(e,n,t,r,o,i){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(o),e.consume(f),e.exit(o),a=f===40?41:f,s):t(f)}function s(f){return f===a?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),n):(e.enter(i),u(f))}function u(f){return f===a?(e.exit(i),s(a)):f===null?t(f):D(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ee(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===a||f===null||D(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?h:c)}function h(f){return f===a||f===92?(e.consume(f),c):c(f)}}function Tr(e,n){let t;return r;function r(o){return D(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):Y(o)?ee(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}const Gy={name:"definition",tokenize:Jy},Ky={tokenize:Zy,partial:!0};function Jy(e,n,t){const r=this;let o;return i;function i(p){return e.enter("definition"),a(p)}function a(p){return pf.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return o=qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return De(p)?Tr(e,u)(p):u(p)}function u(p){return hf(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(Ky,h,h)(p)}function h(p){return Y(p)?ee(e,f,"whitespace")(p):f(p)}function f(p){return p===null||D(p)?(e.exit("definition"),r.parser.defined.push(o),n(p)):t(p)}}function Zy(e,n,t){return r;function r(l){return De(l)?Tr(e,o)(l):t(l)}function o(l){return ff(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function i(l){return Y(l)?ee(e,a,"whitespace")(l):a(l)}function a(l){return l===null||D(l)?n(l):t(l)}}const ew={name:"hardBreakEscape",tokenize:nw};function nw(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return D(i)?(e.exit("hardBreakEscape"),n(i)):t(i)}}const tw={name:"headingAtx",tokenize:ow,resolve:rw};function rw(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},xn(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function ow(e,n,t){let r=0;return o;function o(c){return e.enter("atxHeading"),i(c)}function i(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||De(c)?(e.exit("atxHeadingSequence"),l(c)):t(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||D(c)?(e.exit("atxHeading"),n(c)):Y(c)?ee(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||De(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}const iw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tc=["pre","script","style","textarea"],aw={name:"htmlFlow",tokenize:cw,resolveTo:uw,concrete:!0},lw={tokenize:pw,partial:!0},sw={tokenize:hw,partial:!0};function uw(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function cw(e,n,t){const r=this;let o,i,a,l,s;return u;function u(w){return c(w)}function c(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),h}function h(w){return w===33?(e.consume(w),f):w===47?(e.consume(w),i=!0,v):w===63?(e.consume(w),o=3,r.interrupt?n:g):$n(w)?(e.consume(w),a=String.fromCharCode(w),T):t(w)}function f(w){return w===45?(e.consume(w),o=2,p):w===91?(e.consume(w),o=5,l=0,$):$n(w)?(e.consume(w),o=4,r.interrupt?n:g):t(w)}function p(w){return w===45?(e.consume(w),r.interrupt?n:g):t(w)}function $(w){const me="CDATA[";return w===me.charCodeAt(l++)?(e.consume(w),l===me.length?r.interrupt?n:H:$):t(w)}function v(w){return $n(w)?(e.consume(w),a=String.fromCharCode(w),T):t(w)}function T(w){if(w===null||w===47||w===62||De(w)){const me=w===47,on=a.toLowerCase();return!me&&!i&&tc.includes(on)?(o=1,r.interrupt?n(w):H(w)):iw.includes(a.toLowerCase())?(o=6,me?(e.consume(w),d):r.interrupt?n(w):H(w)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(w):i?m(w):y(w))}return w===45||Ue(w)?(e.consume(w),a+=String.fromCharCode(w),T):t(w)}function d(w){return w===62?(e.consume(w),r.interrupt?n:H):t(w)}function m(w){return Y(w)?(e.consume(w),m):O(w)}function y(w){return w===47?(e.consume(w),O):w===58||w===95||$n(w)?(e.consume(w),x):Y(w)?(e.consume(w),y):O(w)}function x(w){return w===45||w===46||w===58||w===95||Ue(w)?(e.consume(w),x):k(w)}function k(w){return w===61?(e.consume(w),b):Y(w)?(e.consume(w),k):y(w)}function b(w){return w===null||w===60||w===61||w===62||w===96?t(w):w===34||w===39?(e.consume(w),s=w,E):Y(w)?(e.consume(w),b):L(w)}function E(w){return w===s?(e.consume(w),s=null,j):w===null||D(w)?t(w):(e.consume(w),E)}function L(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||De(w)?k(w):(e.consume(w),L)}function j(w){return w===47||w===62||Y(w)?y(w):t(w)}function O(w){return w===62?(e.consume(w),N):t(w)}function N(w){return w===null||D(w)?H(w):Y(w)?(e.consume(w),N):t(w)}function H(w){return w===45&&o===2?(e.consume(w),pe):w===60&&o===1?(e.consume(w),ce):w===62&&o===4?(e.consume(w),V):w===63&&o===3?(e.consume(w),g):w===93&&o===5?(e.consume(w),M):D(w)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(lw,G,X)(w)):w===null||D(w)?(e.exit("htmlFlowData"),X(w)):(e.consume(w),H)}function X(w){return e.check(sw,ie,G)(w)}function ie(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),B}function B(w){return w===null||D(w)?X(w):(e.enter("htmlFlowData"),H(w))}function pe(w){return w===45?(e.consume(w),g):H(w)}function ce(w){return w===47?(e.consume(w),a="",A):H(w)}function A(w){if(w===62){const me=a.toLowerCase();return tc.includes(me)?(e.consume(w),V):H(w)}return $n(w)&&a.length<8?(e.consume(w),a+=String.fromCharCode(w),A):H(w)}function M(w){return w===93?(e.consume(w),g):H(w)}function g(w){return w===62?(e.consume(w),V):w===45&&o===2?(e.consume(w),g):H(w)}function V(w){return w===null||D(w)?(e.exit("htmlFlowData"),G(w)):(e.consume(w),V)}function G(w){return e.exit("htmlFlow"),n(w)}}function hw(e,n,t){const r=this;return o;function o(a){return D(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):t(a)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function pw(e,n,t){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(ki,n,t)}}const fw={name:"htmlText",tokenize:dw};function dw(e,n,t){const r=this;let o,i,a;return l;function l(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),s}function s(g){return g===33?(e.consume(g),u):g===47?(e.consume(g),k):g===63?(e.consume(g),y):$n(g)?(e.consume(g),L):t(g)}function u(g){return g===45?(e.consume(g),c):g===91?(e.consume(g),i=0,$):$n(g)?(e.consume(g),m):t(g)}function c(g){return g===45?(e.consume(g),p):t(g)}function h(g){return g===null?t(g):g===45?(e.consume(g),f):D(g)?(a=h,ce(g)):(e.consume(g),h)}function f(g){return g===45?(e.consume(g),p):h(g)}function p(g){return g===62?pe(g):g===45?f(g):h(g)}function $(g){const V="CDATA[";return g===V.charCodeAt(i++)?(e.consume(g),i===V.length?v:$):t(g)}function v(g){return g===null?t(g):g===93?(e.consume(g),T):D(g)?(a=v,ce(g)):(e.consume(g),v)}function T(g){return g===93?(e.consume(g),d):v(g)}function d(g){return g===62?pe(g):g===93?(e.consume(g),d):v(g)}function m(g){return g===null||g===62?pe(g):D(g)?(a=m,ce(g)):(e.consume(g),m)}function y(g){return g===null?t(g):g===63?(e.consume(g),x):D(g)?(a=y,ce(g)):(e.consume(g),y)}function x(g){return g===62?pe(g):y(g)}function k(g){return $n(g)?(e.consume(g),b):t(g)}function b(g){return g===45||Ue(g)?(e.consume(g),b):E(g)}function E(g){return D(g)?(a=E,ce(g)):Y(g)?(e.consume(g),E):pe(g)}function L(g){return g===45||Ue(g)?(e.consume(g),L):g===47||g===62||De(g)?j(g):t(g)}function j(g){return g===47?(e.consume(g),pe):g===58||g===95||$n(g)?(e.consume(g),O):D(g)?(a=j,ce(g)):Y(g)?(e.consume(g),j):pe(g)}function O(g){return g===45||g===46||g===58||g===95||Ue(g)?(e.consume(g),O):N(g)}function N(g){return g===61?(e.consume(g),H):D(g)?(a=N,ce(g)):Y(g)?(e.consume(g),N):j(g)}function H(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(e.consume(g),o=g,X):D(g)?(a=H,ce(g)):Y(g)?(e.consume(g),H):(e.consume(g),ie)}function X(g){return g===o?(e.consume(g),o=void 0,B):g===null?t(g):D(g)?(a=X,ce(g)):(e.consume(g),X)}function ie(g){return g===null||g===34||g===39||g===60||g===61||g===96?t(g):g===47||g===62||De(g)?j(g):(e.consume(g),ie)}function B(g){return g===47||g===62||De(g)?j(g):t(g)}function pe(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),n):t(g)}function ce(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),A}function A(g){return Y(g)?ee(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):M(g)}function M(g){return e.enter("htmlTextData"),a(g)}}const ws={name:"labelEnd",tokenize:vw,resolveTo:$w,resolveAll:ww},mw={tokenize:bw},gw={tokenize:xw},yw={tokenize:_w};function ww(e){let n=-1;for(;++n<e.length;){const t=e[n][1];(t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd")&&(e.splice(n+1,t.type==="labelImage"?4:2),t.type="data",n++)}return e}function $w(e,n){let t=e.length,r=0,o,i,a,l;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const s={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},c={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return l=[["enter",s,n],["enter",u,n]],l=Ke(l,e.slice(i+1,i+r+3)),l=Ke(l,[["enter",c,n]]),l=Ke(l,ys(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),l=Ke(l,[["exit",c,n],e[a-2],e[a-1],["exit",u,n]]),l=Ke(l,e.slice(a+1)),l=Ke(l,[["exit",s,n]]),xn(e,i,e.length,l),e}function vw(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return l;function l(f){return i?i._inactive?h(f):(a=r.parser.defined.includes(qt(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):t(f)}function s(f){return f===40?e.attempt(mw,c,a?c:h)(f):f===91?e.attempt(gw,c,a?u:h)(f):a?c(f):h(f)}function u(f){return e.attempt(yw,c,h)(f)}function c(f){return n(f)}function h(f){return i._balanced=!0,t(f)}}function bw(e,n,t){return r;function r(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),o}function o(h){return De(h)?Tr(e,i)(h):i(h)}function i(h){return h===41?c(h):hf(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function a(h){return De(h)?Tr(e,s)(h):c(h)}function l(h){return t(h)}function s(h){return h===34||h===39||h===40?ff(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):c(h)}function u(h){return De(h)?Tr(e,c)(h):c(h)}function c(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),n):t(h)}}function xw(e,n,t){const r=this;return o;function o(l){return pf.call(r,e,i,a,"reference","referenceMarker","referenceString")(l)}function i(l){return r.parser.defined.includes(qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function a(l){return t(l)}}function _w(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const kw={name:"labelStartImage",tokenize:Sw,resolveAll:ws.resolveAll};function Sw(e,n,t){const r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):t(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const Pw={name:"labelStartLink",tokenize:Ew,resolveAll:ws.resolveAll};function Ew(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const oa={name:"lineEnding",tokenize:Cw};function Cw(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ee(e,n,"linePrefix")}}const Io={name:"thematicBreak",tokenize:Tw};function Tw(e,n,t){let r=0,o;return i;function i(u){return e.enter("thematicBreak"),a(u)}function a(u){return o=u,l(u)}function l(u){return u===o?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||D(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===o?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),Y(u)?ee(e,l,"whitespace")(u):l(u))}}const Ie={name:"list",tokenize:Lw,continuation:{tokenize:Iw},exit:Nw},Ww={tokenize:Hw,partial:!0},Aw={tokenize:Ow,partial:!0};function Lw(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return l;function l(p){const $=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if($==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:hl(p)){if(r.containerState.type||(r.containerState.type=$,e.enter($,{_container:!0})),$==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Io,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return hl(p)&&++a<10?(e.consume(p),s):(!r.interrupt||a<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(ki,r.interrupt?t:c,e.attempt(Ww,f,h))}function c(p){return r.containerState.initialBlankLine=!0,i++,f(p)}function h(p){return Y(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):t(p)}function f(p){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Iw(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(ki,o,i);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ee(e,n,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!Y(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Aw,n,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,ee(e,e.attempt(Ie,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ow(e,n,t){const r=this;return ee(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function Nw(e){e.exit(this.containerState.type)}function Hw(e,n,t){const r=this;return ee(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function o(i){const a=r.events[r.events.length-1];return!Y(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const rc={name:"setextUnderline",tokenize:jw,resolveTo:Mw};function Mw(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,n]),e}function jw(e,n,t){const r=this;let o;return i;function i(u){let c=r.events.length,h;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){h=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||h)?(e.enter("setextHeadingLine"),o=u,a(u)):t(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===o?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Y(u)?ee(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||D(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const Dw={tokenize:Rw};function Rw(e){const n=this,t=e.attempt(ki,r,e.attempt(this.parser.constructs.flowInitial,o,ee(e,e.attempt(this.parser.constructs.flow,o,e.attempt(Vy,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const zw={resolveAll:mf()},Fw=df("string"),Bw=df("text");function df(e){return{tokenize:n,resolveAll:mf(e==="text"?Uw:void 0)};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,l);return a;function a(c){return u(c)?i(c):l(c)}function l(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),i(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const h=o[c];let f=-1;if(h)for(;++f<h.length;){const p=h[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function mf(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function Uw(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,l=0,s;for(;i--;){const u=o[i];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)s=!0,l++;else if(u!==-1){i++;break}}if(l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}function Vw(e,n,t){let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],l=[];const s={consume:m,enter:y,exit:x,attempt:E(k),check:E(b),interrupt:E(b,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:f,now:$,defineSkip:v,write:h};let c=n.tokenize.call(u,s);return n.resolveAll&&i.push(n),u;function h(N){return a=Ke(a,N),T(),a[a.length-1]!==null?[]:(L(n,0),u.events=ys(i,u.events,u),u.events)}function f(N,H){return Yw(p(N),H)}function p(N){return qw(a,N)}function $(){const{line:N,column:H,offset:X,_index:ie,_bufferIndex:B}=r;return{line:N,column:H,offset:X,_index:ie,_bufferIndex:B}}function v(N){o[N.line]=N.column,O()}function T(){let N;for(;r._index<a.length;){const H=a[r._index];if(typeof H=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<H.length;)d(H.charCodeAt(r._bufferIndex));else d(H)}}function d(N){c=c(N)}function m(N){D(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,O()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=N}function y(N,H){const X=H||{};return X.type=N,X.start=$(),u.events.push(["enter",X,u]),l.push(X),X}function x(N){const H=l.pop();return H.end=$(),u.events.push(["exit",H,u]),H}function k(N,H){L(N,H.from)}function b(N,H){H.restore()}function E(N,H){return X;function X(ie,B,pe){let ce,A,M,g;return Array.isArray(ie)?G(ie):"tokenize"in ie?G([ie]):V(ie);function V(ne){return dn;function dn(Nn){const _t=Nn!==null&&ne[Nn],ot=Nn!==null&&ne.null,Ei=[...Array.isArray(_t)?_t:_t?[_t]:[],...Array.isArray(ot)?ot:ot?[ot]:[]];return G(Ei)(Nn)}}function G(ne){return ce=ne,A=0,ne.length===0?pe:w(ne[A])}function w(ne){return dn;function dn(Nn){return g=j(),M=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?on():ne.tokenize.call(H?Object.assign(Object.create(u),H):u,s,me,on)(Nn)}}function me(ne){return N(M,g),B}function on(ne){return g.restore(),++A<ce.length?w(ce[A]):pe}}}function L(N,H){N.resolveAll&&!i.includes(N)&&i.push(N),N.resolve&&xn(u.events,H,u.events.length-H,N.resolve(u.events.slice(H),u)),N.resolveTo&&(u.events=N.resolveTo(u.events,u))}function j(){const N=$(),H=u.previous,X=u.currentConstruct,ie=u.events.length,B=Array.from(l);return{restore:pe,from:ie};function pe(){r=N,u.previous=H,u.currentConstruct=X,u.events.length=ie,l=B,O()}}function O(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function qw(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;if(t===o)a=[e[t].slice(r,i)];else{if(a=e.slice(t,o),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}function Yw(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}const Xw={42:Ie,43:Ie,45:Ie,48:Ie,49:Ie,50:Ie,51:Ie,52:Ie,53:Ie,54:Ie,55:Ie,56:Ie,57:Ie,62:lf},Qw={91:Gy},Gw={[-2]:ra,[-1]:ra,32:ra},Kw={35:tw,42:Io,45:[rc,Io],60:aw,61:rc,95:Io,96:nc,126:nc},Jw={38:uf,92:sf},Zw={[-5]:oa,[-4]:oa,[-3]:oa,33:kw,38:uf,42:pl,60:[Ey,fw],91:Pw,92:[ew,sf],93:ws,95:pl,96:Ry},e1={null:[pl,zw]},n1={null:[42,95]},t1={null:[]},r1=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:n1,contentInitial:Qw,disable:t1,document:Xw,flow:Kw,flowInitial:Gw,insideSpan:e1,string:Jw,text:Zw},Symbol.toStringTag,{value:"Module"}));function o1(e){const t=yy([r1,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:t,content:o(vy),document:o(xy),flow:o(Dw),string:o(Fw),text:o(Bw)};return r;function o(i){return a;function a(l){return Vw(r,i,l)}}}function i1(e){for(;!cf(e););return e}const oc=/[\0\t\n\r]/g;function a1(){let e=1,n="",t=!0,r;return o;function o(i,a,l){const s=[];let u,c,h,f,p;for(i=n+(typeof i=="string"?i.toString():new TextDecoder(a||void 0).decode(i)),h=0,n="",t&&(i.charCodeAt(0)===65279&&h++,t=void 0);h<i.length;){if(oc.lastIndex=h,u=oc.exec(i),f=u&&u.index!==void 0?u.index:i.length,p=i.charCodeAt(f),!u){n=i.slice(h);break}if(p===10&&h===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),h<f&&(s.push(i.slice(h,f)),e+=f-h),p){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}h=f+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const l1=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function s1(e){return e.replace(l1,u1)}function u1(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return af(t.slice(i?2:1),i?16:10)}return gs(t)||e}const gf={}.hasOwnProperty;function c1(e,n,t){return typeof n!="string"&&(t=n,n=void 0),h1(t)(i1(o1(t).document().write(a1()(e,n,!0))))}function h1(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Cs),autolinkProtocol:j,autolinkEmail:j,atxHeading:i(Ss),blockQuote:i(_t),characterEscape:j,characterReference:j,codeFenced:i(ot),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(ot,a),codeText:i(Ei,a),codeTextData:j,data:j,codeFlowValue:j,definition:i(Wf),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(Af),hardBreakEscape:i(Ps),hardBreakTrailing:i(Ps),htmlFlow:i(Es,a),htmlFlowData:j,htmlText:i(Es,a),htmlTextData:j,image:i(Lf),label:a,link:i(Cs),listItem:i(If),listItemValue:f,listOrdered:i(Ts,h),listUnordered:i(Ts),paragraph:i(Of),reference:w,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Ss),strong:i(Nf),thematicBreak:i(Mf)},exit:{atxHeading:s(),atxHeadingSequence:k,autolink:s(),autolinkEmail:Nn,autolinkProtocol:dn,blockQuote:s(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:on,characterReferenceMarkerNumeric:on,characterReferenceValue:ne,codeFenced:s(T),codeFencedFence:v,codeFencedFenceInfo:p,codeFencedFenceMeta:$,codeFlowValue:O,codeIndented:s(d),codeText:s(B),codeTextData:O,data:O,definition:s(),definitionDestinationString:x,definitionLabelString:m,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(H),hardBreakTrailing:s(H),htmlFlow:s(X),htmlFlowData:O,htmlText:s(ie),htmlTextData:O,image:s(ce),label:M,labelText:A,lineEnding:N,link:s(pe),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:me,resourceDestinationString:g,resourceTitleString:V,resource:G,setextHeading:s(L),setextHeadingLineSequence:E,setextHeadingText:b,strong:s(),thematicBreak:s()}};yf(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(_){let W={type:"root",children:[]};const R={stack:[W],tokenStack:[],config:n,enter:l,exit:u,buffer:a,resume:c,data:t},U=[];let K=-1;for(;++K<_.length;)if(_[K][1].type==="listOrdered"||_[K][1].type==="listUnordered")if(_[K][0]==="enter")U.push(K);else{const an=U.pop();K=o(_,an,K)}for(K=-1;++K<_.length;){const an=n[_[K][0]];gf.call(an,_[K][1].type)&&an[_[K][1].type].call(Object.assign({sliceSerialize:_[K][2].sliceSerialize},R),_[K][1])}if(R.tokenStack.length>0){const an=R.tokenStack[R.tokenStack.length-1];(an[1]||ic).call(R,void 0,an[0])}for(W.position={start:Mn(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:Mn(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},K=-1;++K<n.transforms.length;)W=n.transforms[K](W)||W;return W}function o(_,W,R){let U=W-1,K=-1,an=!1,it,_n,or,ir;for(;++U<=R;){const Re=_[U];switch(Re[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Re[0]==="enter"?K++:K--,ir=void 0;break}case"lineEndingBlank":{Re[0]==="enter"&&(it&&!ir&&!K&&!or&&(or=U),ir=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ir=void 0}if(!K&&Re[0]==="enter"&&Re[1].type==="listItemPrefix"||K===-1&&Re[0]==="exit"&&(Re[1].type==="listUnordered"||Re[1].type==="listOrdered")){if(it){let kt=U;for(_n=void 0;kt--;){const kn=_[kt];if(kn[1].type==="lineEnding"||kn[1].type==="lineEndingBlank"){if(kn[0]==="exit")continue;_n&&(_[_n][1].type="lineEndingBlank",an=!0),kn[1].type="lineEnding",_n=kt}else if(!(kn[1].type==="linePrefix"||kn[1].type==="blockQuotePrefix"||kn[1].type==="blockQuotePrefixWhitespace"||kn[1].type==="blockQuoteMarker"||kn[1].type==="listItemIndent"))break}or&&(!_n||or<_n)&&(it._spread=!0),it.end=Object.assign({},_n?_[_n][1].start:Re[1].end),_.splice(_n||U,0,["exit",it,Re[2]]),U++,R++}if(Re[1].type==="listItemPrefix"){const kt={type:"listItem",_spread:!1,start:Object.assign({},Re[1].start),end:void 0};it=kt,_.splice(U,0,["enter",kt,Re[2]]),U++,R++,or=void 0,ir=!0}}}return _[W][1]._spread=an,R}function i(_,W){return R;function R(U){l.call(this,_(U),U),W&&W.call(this,U)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(_,W,R){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([W,R]),_.position={start:Mn(W.start),end:void 0}}function s(_){return W;function W(R){_&&_.call(this,R),u.call(this,R)}}function u(_,W){const R=this.stack.pop(),U=this.tokenStack.pop();if(U)U[0].type!==_.type&&(W?W.call(this,_,U[0]):(U[1]||ic).call(this,_,U[0]));else throw new Error("Cannot close `"+_.type+"` ("+Cr({start:_.start,end:_.end})+"): it’s not open");R.position.end=Mn(_.end)}function c(){return my(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(_){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function p(){const _=this.resume(),W=this.stack[this.stack.length-1];W.lang=_}function $(){const _=this.resume(),W=this.stack[this.stack.length-1];W.meta=_}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const _=this.resume(),W=this.stack[this.stack.length-1];W.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function d(){const _=this.resume(),W=this.stack[this.stack.length-1];W.value=_.replace(/(\r?\n|\r)$/g,"")}function m(_){const W=this.resume(),R=this.stack[this.stack.length-1];R.label=W,R.identifier=qt(this.sliceSerialize(_)).toLowerCase()}function y(){const _=this.resume(),W=this.stack[this.stack.length-1];W.title=_}function x(){const _=this.resume(),W=this.stack[this.stack.length-1];W.url=_}function k(_){const W=this.stack[this.stack.length-1];if(!W.depth){const R=this.sliceSerialize(_).length;W.depth=R}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function E(_){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function L(){this.data.setextHeadingSlurpLineEnding=void 0}function j(_){const R=this.stack[this.stack.length-1].children;let U=R[R.length-1];(!U||U.type!=="text")&&(U=Hf(),U.position={start:Mn(_.start),end:void 0},R.push(U)),this.stack.push(U)}function O(_){const W=this.stack.pop();W.value+=this.sliceSerialize(_),W.position.end=Mn(_.end)}function N(_){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const R=W.children[W.children.length-1];R.position.end=Mn(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(W.type)&&(j.call(this,_),O.call(this,_))}function H(){this.data.atHardBreak=!0}function X(){const _=this.resume(),W=this.stack[this.stack.length-1];W.value=_}function ie(){const _=this.resume(),W=this.stack[this.stack.length-1];W.value=_}function B(){const _=this.resume(),W=this.stack[this.stack.length-1];W.value=_}function pe(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=W,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function ce(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=W,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function A(_){const W=this.sliceSerialize(_),R=this.stack[this.stack.length-2];R.label=s1(W),R.identifier=qt(W).toLowerCase()}function M(){const _=this.stack[this.stack.length-1],W=this.resume(),R=this.stack[this.stack.length-1];if(this.data.inReference=!0,R.type==="link"){const U=_.children;R.children=U}else R.alt=W}function g(){const _=this.resume(),W=this.stack[this.stack.length-1];W.url=_}function V(){const _=this.resume(),W=this.stack[this.stack.length-1];W.title=_}function G(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function me(_){const W=this.resume(),R=this.stack[this.stack.length-1];R.label=W,R.identifier=qt(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function on(_){this.data.characterReferenceType=_.type}function ne(_){const W=this.sliceSerialize(_),R=this.data.characterReferenceType;let U;R?(U=af(W,R==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):U=gs(W);const K=this.stack.pop();K.value+=U,K.position.end=Mn(_.end)}function dn(_){O.call(this,_);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(_)}function Nn(_){O.call(this,_);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(_)}function _t(){return{type:"blockquote",children:[]}}function ot(){return{type:"code",lang:null,meta:null,value:""}}function Ei(){return{type:"inlineCode",value:""}}function Wf(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Af(){return{type:"emphasis",children:[]}}function Ss(){return{type:"heading",depth:0,children:[]}}function Ps(){return{type:"break"}}function Es(){return{type:"html",value:""}}function Lf(){return{type:"image",title:null,url:"",alt:null}}function Cs(){return{type:"link",title:null,url:"",children:[]}}function Ts(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function If(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function Of(){return{type:"paragraph",children:[]}}function Nf(){return{type:"strong",children:[]}}function Hf(){return{type:"text",value:""}}function Mf(){return{type:"thematicBreak"}}}function Mn(e){return{line:e.line,column:e.column,offset:e.offset}}function yf(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?yf(e,r):p1(e,r)}}function p1(e,n){let t;for(t in n)if(gf.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function ic(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Cr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Cr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Cr({start:n.start,end:n.end})+") is still open")}function f1(e){const n=this;n.parser=t;function t(r){return c1(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function d1(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function m1(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function g1(e,n){const t=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function y1(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function w1(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function $1(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),o=xt(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+o,id:t+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function v1(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function b1(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function wf(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const o=e.all(n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push({type:"text",value:r}),o}function x1(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return wf(e,n);const o={src:xt(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,i),e.applyData(n,i)}function _1(e,n){const t={src:xt(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function k1(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function S1(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return wf(e,n);const o={href:xt(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function P1(e,n){const t={href:xt(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function E1(e,n,t){const r=e.all(n),o=t?C1(t):$f(n),i={},a=[];if(typeof n.checked=="boolean"){const c=r[0];let h;c&&c.type==="element"&&c.tagName==="p"?h=c:(h={type:"element",tagName:"p",properties:{},children:[]},r.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const c=r[l];(o||l!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!o?a.push(...c.children):a.push(c)}const s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:i,children:a};return e.patch(n,u),e.applyData(n,u)}function C1(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=$f(t[r])}return n}function $f(e){const n=e.spread;return n??e.children.length>1}function T1(e,n){const t={},r=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++o<r.length;){const a=r[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const i={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,i),e.applyData(n,i)}function W1(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function A1(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function L1(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function I1(e,n){const t=e.all(n),r=t.shift(),o=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),o.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=ds(n.children[1]),s=ef(n.children[n.children.length-1]);l&&s&&(a.position={start:l,end:s}),o.push(a)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,i),e.applyData(n,i)}function O1(e,n,t){const r=t?t.children:void 0,i=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,l=a?a.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const h=n.children[s],f={},p=a?a[s]:void 0;p&&(f.align=p);let $={type:"element",tagName:i,properties:f,children:[]};h&&($.children=e.all(h),e.patch(h,$),$=e.applyData(h,$)),u.push($)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function N1(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const ac=9,lc=32;function H1(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(sc(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(sc(n.slice(o),o>0,!1)),i.join("")}function sc(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===ac||i===lc;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===ac||i===lc;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function M1(e,n){const t={type:"text",value:H1(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function j1(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const D1={blockquote:d1,break:m1,code:g1,delete:y1,emphasis:w1,footnoteReference:$1,heading:v1,html:b1,imageReference:x1,image:_1,inlineCode:k1,linkReference:S1,link:P1,listItem:E1,list:T1,paragraph:W1,root:A1,strong:L1,table:I1,tableCell:N1,tableRow:O1,text:M1,thematicBreak:j1,toml:wo,yaml:wo,definition:wo,footnoteDefinition:wo};function wo(){}const vf=-1,Si=0,ii=1,ai=2,$s=3,vs=4,bs=5,xs=6,bf=7,xf=8,uc=typeof self=="object"?self:globalThis,R1=(e,n)=>{const t=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,a]=n[o];switch(i){case Si:case vf:return t(a,o);case ii:{const l=t([],o);for(const s of a)l.push(r(s));return l}case ai:{const l=t({},o);for(const[s,u]of a)l[r(s)]=r(u);return l}case $s:return t(new Date(a),o);case vs:{const{source:l,flags:s}=a;return t(new RegExp(l,s),o)}case bs:{const l=t(new Map,o);for(const[s,u]of a)l.set(r(s),r(u));return l}case xs:{const l=t(new Set,o);for(const s of a)l.add(r(s));return l}case bf:{const{name:l,message:s}=a;return t(new uc[l](s),o)}case xf:return t(BigInt(a),o);case"BigInt":return t(Object(BigInt(a)),o)}return t(new uc[i](a),o)};return r},cc=e=>R1(new Map,e)(0),Pt="",{toString:z1}={},{keys:F1}=Object,dr=e=>{const n=typeof e;if(n!=="object"||!e)return[Si,n];const t=z1.call(e).slice(8,-1);switch(t){case"Array":return[ii,Pt];case"Object":return[ai,Pt];case"Date":return[$s,Pt];case"RegExp":return[vs,Pt];case"Map":return[bs,Pt];case"Set":return[xs,Pt]}return t.includes("Array")?[ii,t]:t.includes("Error")?[bf,t]:[ai,t]},$o=([e,n])=>e===Si&&(n==="function"||n==="symbol"),B1=(e,n,t,r)=>{const o=(a,l)=>{const s=r.push(a)-1;return t.set(l,s),s},i=a=>{if(t.has(a))return t.get(a);let[l,s]=dr(a);switch(l){case Si:{let c=a;switch(s){case"bigint":l=xf,c=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return o([vf],a)}return o([l,c],a)}case ii:{if(s)return o([s,[...a]],a);const c=[],h=o([l,c],a);for(const f of a)c.push(i(f));return h}case ai:{if(s)switch(s){case"BigInt":return o([s,a.toString()],a);case"Boolean":case"Number":case"String":return o([s,a.valueOf()],a)}if(n&&"toJSON"in a)return i(a.toJSON());const c=[],h=o([l,c],a);for(const f of F1(a))(e||!$o(dr(a[f])))&&c.push([i(f),i(a[f])]);return h}case $s:return o([l,a.toISOString()],a);case vs:{const{source:c,flags:h}=a;return o([l,{source:c,flags:h}],a)}case bs:{const c=[],h=o([l,c],a);for(const[f,p]of a)(e||!($o(dr(f))||$o(dr(p))))&&c.push([i(f),i(p)]);return h}case xs:{const c=[],h=o([l,c],a);for(const f of a)(e||!$o(dr(f)))&&c.push(i(f));return h}}const{message:u}=a;return o([l,{name:s,message:u}],a)};return i},hc=(e,{json:n,lossy:t}={})=>{const r=[];return B1(!(n||t),!!n,new Map,r)(e),r},li=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?cc(hc(e,n)):structuredClone(e):(e,n)=>cc(hc(e,n));function U1(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function V1(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function q1(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||U1,r=e.options.footnoteBackLabel||V1,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),h=String(u.identifier).toUpperCase(),f=xt(h.toLowerCase());let p=0;const $=[],v=e.footnoteCounts.get(h);for(;v!==void 0&&++p<=v;){$.length>0&&$.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,p);typeof m=="string"&&(m={type:"text",value:m}),$.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const T=c[c.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const m=T.children[T.children.length-1];m&&m.type==="text"?m.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...$)}else c.push(...$);const d={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(c,!0)};e.patch(u,d),l.push(d)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...li(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const _f=function(e){if(e==null)return G1;if(typeof e=="function")return Pi(e);if(typeof e=="object")return Array.isArray(e)?Y1(e):X1(e);if(typeof e=="string")return Q1(e);throw new Error("Expected function, string, or object as test")};function Y1(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=_f(e[t]);return Pi(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].apply(this,o))return!0;return!1}}function X1(e){const n=e;return Pi(t);function t(r){const o=r;let i;for(i in e)if(o[i]!==n[i])return!1;return!0}}function Q1(e){return Pi(n);function n(t){return t&&t.type===e}}function Pi(e){return n;function n(t,r,o){return!!(K1(t)&&e.call(this,t,typeof r=="number"?r:void 0,o||void 0))}}function G1(){return!0}function K1(e){return e!==null&&typeof e=="object"&&"type"in e}const kf=[],J1=!0,pc=!1,Z1="skip";function e$(e,n,t,r){let o;typeof n=="function"&&typeof t!="function"?(r=t,t=n):o=n;const i=_f(o),a=r?-1:1;l(e,void 0,[])();function l(s,u,c){const h=s&&typeof s=="object"?s:{};if(typeof h.type=="string"){const p=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=kf,$,v,T;if((!n||i(s,u,c[c.length-1]||void 0))&&(p=n$(t(s,c)),p[0]===pc))return p;if("children"in s&&s.children){const d=s;if(d.children&&p[0]!==Z1)for(v=(r?d.children.length:-1)+a,T=c.concat(d);v>-1&&v<d.children.length;){const m=d.children[v];if($=l(m,v,T)(),$[0]===pc)return $;v=typeof $[1]=="number"?$[1]:v+a}}return p}}}function n$(e){return Array.isArray(e)?e:typeof e=="number"?[J1,e]:e==null?kf:[e]}function Sf(e,n,t,r){let o,i,a;typeof n=="function"&&typeof t!="function"?(i=void 0,a=n,o=t):(i=n,a=t,o=r),e$(e,i,l,o);function l(s,u){const c=u[u.length-1],h=c?c.children.indexOf(s):void 0;return a(s,h,c)}}const fl={}.hasOwnProperty,t$={};function r$(e,n){const t=n||t$,r=new Map,o=new Map,i=new Map,a={...D1,...t.handlers},l={all:u,applyData:i$,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:s,options:t,patch:o$,wrap:l$};return Sf(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const h=c.type==="definition"?r:o,f=String(c.identifier).toUpperCase();h.has(f)||h.set(f,c)}}),l;function s(c,h){const f=c.type,p=l.handlers[f];if(fl.call(l.handlers,f)&&p)return p(l,c,h);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in c){const{children:v,...T}=c,d=li(T);return d.children=l.all(c),d}return li(c)}return(l.options.unknownHandler||a$)(l,c,h)}function u(c){const h=[];if("children"in c){const f=c.children;let p=-1;for(;++p<f.length;){const $=l.one(f[p],c);if($){if(p&&f[p-1].type==="break"&&(!Array.isArray($)&&$.type==="text"&&($.value=fc($.value)),!Array.isArray($)&&$.type==="element")){const v=$.children[0];v&&v.type==="text"&&(v.value=fc(v.value))}Array.isArray($)?h.push(...$):h.push($)}}}return h}}function o$(e,n){e.position&&(n.position=Bg(e))}function i$(e,n){let t=n;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&i&&Object.assign(t.properties,li(i)),"children"in t&&t.children&&o!==null&&o!==void 0&&(t.children=o)}return t}function a$(e,n){const t=n.data||{},r="value"in n&&!(fl.call(t,"hProperties")||fl.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function l$(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function fc(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function dc(e,n){const t=r$(e,n),r=t.one(e,void 0),o=q1(t),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function s$(e,n){return e&&"run"in e?async function(t,r){const o=dc(t,n);await e.run(o,r)}:function(t){return dc(t,n||e)}}function mc(e){if(e)throw e}var Oo=Object.prototype.hasOwnProperty,Pf=Object.prototype.toString,gc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,wc=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Pf.call(n)==="[object Array]"},$c=function(n){if(!n||Pf.call(n)!=="[object Object]")return!1;var t=Oo.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Oo.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||Oo.call(n,o)},vc=function(n,t){gc&&t.name==="__proto__"?gc(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},bc=function(n,t){if(t==="__proto__")if(Oo.call(n,t)){if(yc)return yc(n,t).value}else return;return n[t]},u$=function e(){var n,t,r,o,i,a,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=bc(l,t),o=bc(n,t),l!==o&&(c&&o&&($c(o)||(i=wc(o)))?(i?(i=!1,a=r&&wc(r)?r:[]):a=r&&$c(r)?r:{},vc(l,{name:t,newValue:e(c,a,o)})):typeof o<"u"&&vc(l,{name:t,newValue:o}));return l};const ia=yl(u$);function dl(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function c$(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...o);function l(s,...u){const c=e[++i];let h=-1;if(s){a(s);return}for(;++h<o.length;)(u[h]===null||u[h]===void 0)&&(u[h]=o[h]);o=u,c?h$(c,l)(...u):a(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function h$(e,n){let t;return r;function r(...a){const l=e.length>a.length;let s;l&&a.push(o);try{s=e.apply(this,a)}catch(u){const c=u;if(l&&t)throw c;return o(c)}l||(s instanceof Promise?s.then(i,o):s instanceof Error?o(s):i(s))}function o(a,...l){t||(t=!0,n(a,...l))}function i(a){o(null,a)}}const yn={basename:p$,dirname:f$,extname:d$,join:m$,sep:"/"};function p$(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Zr(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,l=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),l>-1&&(e.codePointAt(o)===n.codePointAt(l--)?l<0&&(r=o):(l=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function f$(e){if(Zr(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function d$(e){Zr(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const l=e.codePointAt(n);if(l===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),l===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function m$(...e){let n=-1,t;for(;++n<e.length;)Zr(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":g$(t)}function g$(e){Zr(e);const n=e.codePointAt(0)===47;let t=y$(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function y$(e,n){let t="",r=0,o=-1,i=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l===46&&i>-1?i++:i=-1}return t}function Zr(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const w$={cwd:$$};function $$(){return"/"}function ml(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function v$(e){if(typeof e=="string")e=new URL(e);else if(!ml(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return b$(e)}function b$(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const aa=["history","path","basename","stem","extname","dirname"];class Ef{constructor(n){let t;n?ml(n)?t={path:n}:typeof n=="string"||x$(n)?t={value:n}:t=n:t={},this.cwd=w$.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<aa.length;){const i=aa[r];i in t&&t[i]!==void 0&&t[i]!==null&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)aa.includes(o)||(this[o]=t[o])}get basename(){return typeof this.path=="string"?yn.basename(this.path):void 0}set basename(n){sa(n,"basename"),la(n,"basename"),this.path=yn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?yn.dirname(this.path):void 0}set dirname(n){xc(this.basename,"dirname"),this.path=yn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?yn.extname(this.path):void 0}set extname(n){if(la(n,"extname"),xc(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=yn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){ml(n)&&(n=v$(n)),sa(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?yn.basename(this.path,this.extname):void 0}set stem(n){sa(n,"stem"),la(n,"stem"),this.path=yn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=void 0,o}message(n,t,r){const o=new Le(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function la(e,n){if(e&&e.includes(yn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+yn.sep+"`")}function sa(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function xc(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function x$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _$=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};Object.setPrototypeOf(i,r);const a=Object.getOwnPropertyNames(o);for(const l of a){const s=Object.getOwnPropertyDescriptor(o,l);s&&Object.defineProperty(i,l,s)}return i},k$={}.hasOwnProperty;class _s extends _${constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=c$()}copy(){const n=new _s;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(ia(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(ha("data",this.frozen),this.namespace[n]=t,this):k$.call(this.namespace,n)&&this.namespace[n]||void 0:n?(ha("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=t.call(n,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=vo(n),r=this.parser||this.Parser;return ua("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),ua("process",this.parser||this.Parser),ca("process",this.compiler||this.Compiler),t?o(void 0,t):new Promise(o);function o(i,a){const l=vo(n),s=r.parse(l);r.run(s,l,function(c,h,f){if(c||!h||!f)return u(c);const p=h,$=r.stringify(p,f);E$($)?f.value=$:f.result=$,u(c,f)});function u(c,h){c||!h?a(c):i?i(h):t(void 0,h)}}}processSync(n){let t=!1,r;return this.freeze(),ua("processSync",this.parser||this.Parser),ca("processSync",this.compiler||this.Compiler),this.process(n,o),kc("processSync","process",t),r;function o(i,a){t=!0,mc(i),r=a}}run(n,t,r){_c(n),this.freeze();const o=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?i(void 0,r):new Promise(i);function i(a,l){const s=vo(t);o.run(n,s,u);function u(c,h,f){const p=h||n;c?l(c):a?a(p):r(void 0,p,f)}}}runSync(n,t){let r=!1,o;return this.run(n,t,i),kc("runSync","run",r),o;function i(a,l){mc(a),o=l,r=!0}}stringify(n,t){this.freeze();const r=vo(t),o=this.compiler||this.Compiler;return ca("stringify",o),_c(n),o(n,r)}use(n,...t){const r=this.attachers,o=this.namespace;if(ha("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function i(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...h]=u;s(c,h)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(o.settings=ia(!0,o.settings,u.settings))}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const h=u[c];i(h)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let h=-1,f=-1;for(;++h<r.length;)if(r[h][0]===u){f=h;break}if(f===-1)r.push([u,...c]);else if(c.length>0){let[p,...$]=c;const v=r[f][1];dl(v)&&dl(p)&&(p=ia(!0,v,p)),r[f]=[u,p,...$]}}}}const S$=new _s().freeze();function ua(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function ca(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ha(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _c(e){if(!dl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function kc(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function vo(e){return P$(e)?e:new Ef(e)}function P$(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function E$(e){return typeof e=="string"||C$(e)}function C$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Sc={}.hasOwnProperty,T$="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Pc=[],Ec={allowDangerousHtml:!0},W$=/^(https?|ircs?|mailto|xmpp)$/i,A$=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function gl(e){const n=e.allowedElements,t=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,l=e.rehypePlugins||Pc,s=e.remarkPlugins||Pc,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ec}:Ec,c=e.skipHtml,h=e.unwrapDisallowed,f=e.urlTransform||L$,p=S$().use(f1).use(s).use(s$,u).use(l),$=new Ef;typeof r=="string"&&($.value=r);for(const m of A$)Object.hasOwn(e,m.from)&&(""+m.from+(m.to?"use `"+m.to+"` instead":"remove it")+T$+m.id,void 0);const v=p.parse($);let T=p.runSync(v,$);return o&&(T={type:"element",tagName:"div",properties:{className:o},children:T.type==="root"?T.children:[T]}),Sf(T,d),Qg(T,{Fragment:C.Fragment,components:i,ignoreInvalidStyle:!0,jsx:C.jsx,jsxs:C.jsxs,passKeys:!0,passNode:!0});function d(m,y,x){if(m.type==="raw"&&x&&typeof y=="number")return c?x.children.splice(y,1):x.children[y]={type:"text",value:m.value},y;if(m.type==="element"){let k;for(k in ta)if(Sc.call(ta,k)&&Sc.call(m.properties,k)){const b=m.properties[k],E=ta[k];(E===null||E.includes(m.tagName))&&(m.properties[k]=f(String(b||""),k,m))}}if(m.type==="element"){let k=n?!n.includes(m.tagName):a?a.includes(m.tagName):!1;if(!k&&t&&typeof y=="number"&&(k=!t(m,y,x)),k&&x&&typeof y=="number")return h&&m.children?x.children.splice(y,1,...m.children):x.children.splice(y,1),y}}}function L$(e){return fy(e,W$)}const I$=({data:e,setAnswer:n,answer:t})=>{const[r,o]=Pe.useState(t);return Pe.useEffect(()=>{o(t)},[e,t]),C.jsxs("section",{children:[C.jsx(gl,{children:e[0]}),e.slice(1,-1).map((i,a)=>C.jsxs("button",{style:{...a===r?{border:"solid 1px #646cff"}:{},backgroundColor:"inherit",display:"block",textAlign:"left",width:"100%"},onClick:()=>{o(a),n(a)},children:[["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"][a],")",i.indexOf("```")!==-1?C.jsx(gl,{children:i}):` ${i}`]},i))]})},Cf=e=>n=>({value:n,sort:Math.random(),type:e}),Cc=(e,n,t)=>t>0?e.map(Cf(n)).sort((r,o)=>r.sort-o.sort).slice(0,t).map(r=>({...r,sort:Math.random()})):[],ks=il.length>Ze?Ze:il.length,Tc=(Ze-ks)/2,Tf=al.length>Tc?Tc:al.length,O$=Ze-(ks+Tf),N$=()=>[...il.map(Cf("personal")).slice(0,ks),...Cc(al,"nerd",Math.ceil(Tf)),...Cc(fg,"php",Math.floor(O$))].sort((e,n)=>e.sort-n.sort).map(({value:e})=>[e[0],...e.slice(1).map((n,t)=>[n,t,Math.random()]).sort((n,t)=>n[2]-t[2]).reduce((n,[t,r],o,i)=>r===0?[t,...n,i.length-o-1]:[t,...n],[])]),H$=({setPage:e,setResults:n})=>{const[t,r]=Pe.useState(0),o=Pe.useMemo(()=>N$(),[]),[i,a]=Pe.useState(new Array(Ze)),l=()=>{n(o.map((u,c)=>[u[u.length-1],i[c],u[0],u[u[u.length-1]+1],u[Number.parseInt(i[c])+1]])),e("results")},s=()=>C.jsx("button",{onClick:l,children:"Submit"});return C.jsxs(C.Fragment,{children:[C.jsx(Bp,{submit:l}),C.jsxs("p",{children:["Question ",t+1," of ",Ze]}),C.jsx("button",{onClick:()=>e("start"),children:"Quit"}),C.jsx(s,{}),C.jsx(I$,{data:o[t],setAnswer:u=>{i[t]=u,a(i)},answer:i[t]}),C.jsxs("div",{style:{display:"flex",justifyContent:"center",marginTop:"4rem"},children:[C.jsx("button",{disabled:t===0,onClick:()=>r(t-1),children:"Previous"}),t===Ze-1?C.jsx(s,{}):C.jsx("button",{onClick:()=>r(t+1),children:"Next"})]}),C.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"0.5rem"},children:o.map((u,c)=>C.jsx("button",{disabled:c===t,onClick:()=>r(c),children:c+1},c))})]})},M$=({answers:e,setPage:n})=>{const[t,r]=Pe.useState(!1),[o,i]=Pe.useState(!1),a=e.filter(([u,c])=>u===c).length,l=e.filter(([,u])=>u===void 0).length,s=a/Ze>.7;return C.jsxs(C.Fragment,{children:[C.jsx("h1",{children:s?"You Passed":"You did not pass."}),s?C.jsxs("p",{children:["Well done, adventurer!",C.jsx("br",{}),"You are intelligent and wise - a worthy champion of the arcane arts.",C.jsx("br",{}),"Your reward awaits at a secret location, solve this clue to continue on your quest..."]}):C.jsxs("p",{children:["Adventurer, you are bold and brave, but not yet mighty enough face this quest alone.",C.jsx("br",{}),"Go now, search for one who can help you on your quest!",C.jsx("br",{}),"The clues to his whereabouts lie below..."]}),C.jsxs("p",{style:{fontStyle:"italic"},children:["Riddle me this, riddle me that, ",C.jsx("br",{}),"Who went to sea with the pussy cat? ",C.jsx("br",{}),"Finely dressed, swift and dapper, ",C.jsx("br",{}),"This feathery mascot is quite the flapper. ",C.jsx("br",{}),"Get thee hence, 'fore the clock strikes half hour! ",C.jsx("br",{}),"'Tis there you'll get robes of +1 power..."]}),C.jsxs("h2",{children:[" ",a," / ",Ze," answered correctly."]}),C.jsxs("p",{children:["You answered ",Ze-l," of ",Ze," questions."]}),C.jsxs("button",{onClick:()=>i(!o),children:[o?"Hide":"Reveal"," Emergency Clue"]}),C.jsxs("button",{onClick:()=>r(!t),children:[t?"Hide":"Reveal"," Answers"]}),o&&C.jsxs("p",{children:["Knock knock",C.jsx("br",{}),"Who's there's?",C.jsx("br",{}),"Who",C.jsx("br",{}),"Who who?",C.jsx("br",{}),"An owl! In a suit, no less!",C.jsx("br",{})]}),t&&C.jsxs("section",{children:[C.jsx("h3",{children:"Answers"}),e.map(([u,c,h,f,p],$)=>C.jsx("div",{children:c===void 0?C.jsxs("p",{style:{fontWeight:"bold"},children:["Question ",$+1,": Not answered"]}):u===c?C.jsxs("p",{style:{fontWeight:"bold"},children:["Question ",$+1,": Correct"]}):C.jsxs(C.Fragment,{children:[C.jsxs("p",{style:{fontWeight:"bold"},children:["Question ",$+1,":"]}),C.jsx(gl,{children:h}),C.jsxs("p",{children:["You said: ",p," ",C.jsx("br",{}),"Actual answer: ",f]})]})},`answer-${$}`))]})]})},j$=()=>{const[e,n]=Pe.useState(),[t,r]=Pe.useState(void 0);return C.jsx(C.Fragment,{children:e==="test"?C.jsx(H$,{setPage:n,setResults:r}):e==="results"?C.jsx(M$,{setPage:n,answers:t}):C.jsx(pg,{setPage:n})})};pa.createRoot(document.getElementById("root")).render(C.jsx(Zf.StrictMode,{children:C.jsx(j$,{})}));
