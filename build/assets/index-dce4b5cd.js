function jy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ep={exports:{}},ks={},kp={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),Uy=Symbol.for("react.strict_mode"),Fy=Symbol.for("react.profiler"),zy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),Hy=Symbol.for("react.suspense"),Vy=Symbol.for("react.memo"),Wy=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Ky(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bp=Object.assign,Ip={};function ui(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||Sp}ui.prototype.isReactComponent={};ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=ui.prototype;function dc(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||Sp}var fc=dc.prototype=new Cp;fc.constructor=dc;bp(fc,ui.prototype);fc.isPureReactComponent=!0;var Yd=Array.isArray,Np=Object.prototype.hasOwnProperty,hc={current:null},Tp={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Np.call(t,r)&&!Tp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ta,type:e,key:a,ref:o,props:i,_owner:hc.current}}function Yy(e,t){return{$$typeof:Ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ta}function Gy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gd=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gy(""+e.key):t.toString(36)}function ko(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ta:case Dy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+il(o,0):r,Yd(i)?(n="",e!=null&&(n=e.replace(Gd,"$&/")+"/"),ko(i,t,n,"",function(u){return u})):i!=null&&(pc(i)&&(i=Yy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Yd(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+il(a,s);o+=ko(a,t,n,l,i)}else if(l=Ky(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+il(a,s++),o+=ko(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(e,t,n){if(e==null)return e;var r=[],i=0;return ko(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Qy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},So={transition:null},qy={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:So,ReactCurrentOwner:hc};G.Children={map:Qa,forEach:function(e,t,n){Qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qa(e,function(){t++}),t},toArray:function(e){return Qa(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=ui;G.Fragment=My;G.Profiler=Fy;G.PureComponent=dc;G.StrictMode=Uy;G.Suspense=Hy;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=hc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Np.call(t,l)&&!Tp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ta,type:e.type,key:i,ref:a,props:r,_owner:o}};G.createContext=function(e){return e={$$typeof:$y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zy,_context:e},e.Consumer=e};G.createElement=Pp;G.createFactory=function(e){var t=Pp.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:By,render:e}};G.isValidElement=pc;G.lazy=function(e){return{$$typeof:Wy,_payload:{_status:-1,_result:e},_init:Qy}};G.memo=function(e,t){return{$$typeof:Vy,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return He.current.useCallback(e,t)};G.useContext=function(e){return He.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return He.current.useDeferredValue(e)};G.useEffect=function(e,t){return He.current.useEffect(e,t)};G.useId=function(){return He.current.useId()};G.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return He.current.useMemo(e,t)};G.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};G.useRef=function(e){return He.current.useRef(e)};G.useState=function(e){return He.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return He.current.useTransition()};G.version="18.2.0";kp.exports=G;var b=kp.exports;const Ss=_p(b),Xy=jy({__proto__:null,default:Ss},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=b,Zy=Symbol.for("react.element"),e0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,n0=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)t0.call(t,r)&&!r0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zy,type:e,key:a,ref:o,props:i,_owner:n0.current}}ks.Fragment=e0;ks.jsx=Rp;ks.jsxs=Rp;Ep.exports=ks;var c=Ep.exports,Kl={},Op={exports:{}},nt={},Ap={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var B=R.length;R.push(M);e:for(;0<B;){var X=B-1>>>1,ae=R[X];if(0<i(ae,M))R[X]=M,R[B]=ae,B=X;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],B=R.pop();if(B!==M){R[0]=B;e:for(var X=0,ae=R.length,sn=ae>>>1;X<sn;){var At=2*(X+1)-1,vi=R[At],Lt=At+1,fe=R[Lt];if(0>i(vi,B))Lt<ae&&0>i(fe,vi)?(R[X]=fe,R[Lt]=B,X=Lt):(R[X]=vi,R[At]=B,X=At);else if(Lt<ae&&0>i(fe,B))R[X]=fe,R[Lt]=B,X=Lt;else break e}}return M}function i(R,M){var B=R.sortIndex-M.sortIndex;return B!==0?B:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],d=1,f=null,g=3,w=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function p(R){if(x=!1,v(R),!y)if(n(l)!==null)y=!0,on(k);else{var M=n(u);M!==null&&Ot(p,M.startTime-R)}}function k(R,M){y=!1,x&&(x=!1,m(P),P=-1),w=!0;var B=g;try{for(v(M),f=n(l);f!==null&&(!(f.expirationTime>M)||R&&!Pe());){var X=f.callback;if(typeof X=="function"){f.callback=null,g=f.priorityLevel;var ae=X(f.expirationTime<=M);M=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),v(M)}else r(l);f=n(l)}if(f!==null)var sn=!0;else{var At=n(u);At!==null&&Ot(p,At.startTime-M),sn=!1}return sn}finally{f=null,g=B,w=!1}}var C=!1,N=null,P=-1,z=5,U=-1;function Pe(){return!(e.unstable_now()-U<z)}function qe(){if(N!==null){var R=e.unstable_now();U=R;var M=!0;try{M=N(!0,R)}finally{M?kt():(C=!1,N=null)}}else C=!1}var kt;if(typeof h=="function")kt=function(){h(qe)};else if(typeof MessageChannel<"u"){var Wn=new MessageChannel,ye=Wn.port2;Wn.port1.onmessage=qe,kt=function(){ye.postMessage(null)}}else kt=function(){S(qe,0)};function on(R){N=R,C||(C=!0,kt())}function Ot(R,M){P=S(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,on(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var B=g;g=M;try{return R()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=g;g=R;try{return M()}finally{g=B}},e.unstable_scheduleCallback=function(R,M,B){var X=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=B+ae,R={id:d++,callback:M,priorityLevel:R,startTime:B,expirationTime:ae,sortIndex:-1},B>X?(R.sortIndex=B,t(u,R),n(l)===null&&R===n(u)&&(x?(m(P),P=-1):x=!0,Ot(p,B-X))):(R.sortIndex=ae,t(l,R),y||w||(y=!0,on(k))),R},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(R){var M=g;return function(){var B=g;g=M;try{return R.apply(this,arguments)}finally{g=B}}}})(Lp);Ap.exports=Lp;var i0=Ap.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=b,tt=i0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dp=new Set,ea={};function _r(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(ea[e]=t,e=0;e<t.length;e++)Dp.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},qd={};function o0(e){return Yl.call(qd,e)?!0:Yl.call(Qd,e)?!1:a0.test(e)?qd[e]=!0:(Qd[e]=!0,!1)}function s0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function l0(e,t,n,r){if(t===null||typeof t>"u"||s0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mc,gc);je[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mc,gc);je[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mc,gc);je[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(l0(t,n,i,r)&&(n=null),r||i===null?o0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),br=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),Xd=Symbol.iterator;function Ei(e){return e===null||typeof e!="object"?null:(e=Xd&&e[Xd]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,al;function Li(e){if(al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||""}return`
`+al+e}var ol=!1;function sl(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Li(e):""}function u0(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ir:return"Fragment";case br:return"Portal";case Gl:return"Profiler";case yc:return"StrictMode";case Ql:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Up:return(e.displayName||"Context")+".Consumer";case Mp:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function c0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function d0(e){var t=zp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xa(e){e._valueTracker||(e._valueTracker=d0(e))}function $p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bp(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function Zl(e,t){Bp(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ji=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ef(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ji(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function Hp(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ja,Wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ja.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ta(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){f0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function Kp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var h0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(h0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function iu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,Hr=null,Vr=null;function nf(e){if(e=Oa(e)){if(typeof ou!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ts(t),ou(e.stateNode,e.type,t))}}function Gp(e){Hr?Vr?Vr.push(e):Vr=[e]:Hr=e}function Qp(){if(Hr){var e=Hr,t=Vr;if(Vr=Hr=null,nf(e),t)for(e=0;e<t.length;e++)nf(t[e])}}function qp(e,t){return e(t)}function Xp(){}var ll=!1;function Jp(e,t,n){if(ll)return e(t,n);ll=!0;try{return qp(e,t,n)}finally{ll=!1,(Hr!==null||Vr!==null)&&(Xp(),Qp())}}function na(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var su=!1;if(Kt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){su=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{su=!1}function p0(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Bi=!1,Bo=null,Ho=!1,lu=null,m0={onError:function(e){Bi=!0,Bo=e}};function g0(e,t,n,r,i,a,o,s,l){Bi=!1,Bo=null,p0.apply(m0,arguments)}function v0(e,t,n,r,i,a,o,s,l){if(g0.apply(this,arguments),Bi){if(Bi){var u=Bo;Bi=!1,Bo=null}else throw Error(T(198));Ho||(Ho=!0,lu=u)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rf(e){if(Er(e)!==e)throw Error(T(188))}function y0(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return rf(i),e;if(a===r)return rf(i),t;a=a.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function em(e){return e=y0(e),e!==null?tm(e):null}function tm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tm(e);if(t!==null)return t;e=e.sibling}return null}var nm=tt.unstable_scheduleCallback,af=tt.unstable_cancelCallback,w0=tt.unstable_shouldYield,x0=tt.unstable_requestPaint,Se=tt.unstable_now,_0=tt.unstable_getCurrentPriorityLevel,Ec=tt.unstable_ImmediatePriority,rm=tt.unstable_UserBlockingPriority,Vo=tt.unstable_NormalPriority,E0=tt.unstable_LowPriority,im=tt.unstable_IdlePriority,bs=null,Nt=null;function k0(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(bs,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:I0,S0=Math.log,b0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(S0(e)/b0|0)|0}var Za=64,eo=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Di(s):(a&=o,a!==0&&(r=Di(a)))}else o=n&~i,o!==0?r=Di(o):a!==0&&(r=Di(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function C0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-xt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=C0(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function am(){var e=Za;return Za<<=1,!(Za&4194240)&&(Za=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function T0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function om(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sm,Sc,lm,um,cm,cu=!1,to=[],kn=null,Sn=null,bn=null,ra=new Map,ia=new Map,mn=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(t.pointerId)}}function Si(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R0(e,t,n,r,i){switch(t){case"focusin":return kn=Si(kn,e,t,n,r,i),!0;case"dragenter":return Sn=Si(Sn,e,t,n,r,i),!0;case"mouseover":return bn=Si(bn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ra.set(a,Si(ra.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ia.set(a,Si(ia.get(a)||null,e,t,n,r,i)),!0}return!1}function dm(e){var t=Zn(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=Zp(n),t!==null){e.blockedOn=t,cm(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=Oa(n),t!==null&&Sc(t),e.blockedOn=n,!1;t.shift()}return!0}function sf(e,t,n){bo(e)&&n.delete(t)}function O0(){cu=!1,kn!==null&&bo(kn)&&(kn=null),Sn!==null&&bo(Sn)&&(Sn=null),bn!==null&&bo(bn)&&(bn=null),ra.forEach(sf),ia.forEach(sf)}function bi(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,O0)))}function aa(e){function t(i){return bi(i,e)}if(0<to.length){bi(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&bi(kn,e),Sn!==null&&bi(Sn,e),bn!==null&&bi(bn,e),ra.forEach(t),ia.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&mn.shift()}var Wr=en.ReactCurrentBatchConfig,Ko=!0;function A0(e,t,n,r){var i=J,a=Wr.transition;Wr.transition=null;try{J=1,bc(e,t,n,r)}finally{J=i,Wr.transition=a}}function L0(e,t,n,r){var i=J,a=Wr.transition;Wr.transition=null;try{J=4,bc(e,t,n,r)}finally{J=i,Wr.transition=a}}function bc(e,t,n,r){if(Ko){var i=du(e,t,n,r);if(i===null)wl(e,t,r,Yo,n),of(e,r);else if(R0(i,e,t,n,r))r.stopPropagation();else if(of(e,r),t&4&&-1<P0.indexOf(e)){for(;i!==null;){var a=Oa(i);if(a!==null&&sm(a),a=du(e,t,n,r),a===null&&wl(e,t,r,Yo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Yo=null;function du(e,t,n,r){if(Yo=null,e=_c(r),e=Zn(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function fm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Ec:return 1;case rm:return 4;case Vo:case E0:return 16;case im:return 536870912;default:return 16}default:return 16}}var xn=null,Ic=null,Io=null;function hm(){if(Io)return Io;var e,t=Ic,n=t.length,r,i="value"in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Io=i.slice(e,1<r?1-r:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function lf(){return!1}function rt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?no:lf,this.isPropagationStopped=lf,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=rt(ci),Ra=ve({},ci,{view:0,detail:0}),j0=rt(Ra),cl,dl,Ii,Is=ve({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(cl=e.screenX-Ii.screenX,dl=e.screenY-Ii.screenY):dl=cl=0,Ii=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),uf=rt(Is),D0=ve({},Is,{dataTransfer:0}),M0=rt(D0),U0=ve({},Ra,{relatedTarget:0}),fl=rt(U0),F0=ve({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=rt(F0),$0=ve({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=rt($0),H0=ve({},ci,{data:0}),cf=rt(H0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function Nc(){return Y0}var G0=ve({},Ra,{key:function(e){if(e.key){var t=V0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=rt(G0),q0=ve({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=rt(q0),X0=ve({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),J0=rt(X0),Z0=ve({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=rt(Z0),t1=ve({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=rt(t1),r1=[9,13,27,32],Tc=Kt&&"CompositionEvent"in window,Hi=null;Kt&&"documentMode"in document&&(Hi=document.documentMode);var i1=Kt&&"TextEvent"in window&&!Hi,pm=Kt&&(!Tc||Hi&&8<Hi&&11>=Hi),ff=String.fromCharCode(32),hf=!1;function mm(e,t){switch(e){case"keyup":return r1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function a1(e,t){switch(e){case"compositionend":return gm(t);case"keypress":return t.which!==32?null:(hf=!0,ff);case"textInput":return e=t.data,e===ff&&hf?null:e;default:return null}}function o1(e,t){if(Cr)return e==="compositionend"||!Tc&&mm(e,t)?(e=hm(),Io=Ic=xn=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pm&&t.locale!=="ko"?null:t.data;default:return null}}var s1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s1[e.type]:t==="textarea"}function vm(e,t,n,r){Gp(r),t=Go(t,"onChange"),0<t.length&&(n=new Cc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vi=null,oa=null;function l1(e){Nm(e,0)}function Cs(e){var t=Pr(e);if($p(t))return e}function u1(e,t){if(e==="change")return t}var ym=!1;if(Kt){var hl;if(Kt){var pl="oninput"in document;if(!pl){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),pl=typeof mf.oninput=="function"}hl=pl}else hl=!1;ym=hl&&(!document.documentMode||9<document.documentMode)}function gf(){Vi&&(Vi.detachEvent("onpropertychange",wm),oa=Vi=null)}function wm(e){if(e.propertyName==="value"&&Cs(oa)){var t=[];vm(t,oa,e,_c(e)),Jp(l1,t)}}function c1(e,t,n){e==="focusin"?(gf(),Vi=t,oa=n,Vi.attachEvent("onpropertychange",wm)):e==="focusout"&&gf()}function d1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(oa)}function f1(e,t){if(e==="click")return Cs(t)}function h1(e,t){if(e==="input"||e==="change")return Cs(t)}function p1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:p1;function sa(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yf(e,t){var n=vf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vf(n)}}function xm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _m(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m1(e){var t=_m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xm(n.ownerDocument.documentElement,n)){if(r!==null&&Pc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=yf(n,a);var o=yf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g1=Kt&&"documentMode"in document&&11>=document.documentMode,Nr=null,fu=null,Wi=null,hu=!1;function wf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Nr==null||Nr!==$o(r)||(r=Nr,"selectionStart"in r&&Pc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&sa(Wi,r)||(Wi=r,r=Go(fu,"onSelect"),0<r.length&&(t=new Cc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},ml={},Em={};Kt&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ns(e){if(ml[e])return ml[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Em)return ml[e]=t[n];return e}var km=Ns("animationend"),Sm=Ns("animationiteration"),bm=Ns("animationstart"),Im=Ns("transitionend"),Cm=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Cm.set(e,t),_r(t,[e])}for(var gl=0;gl<xf.length;gl++){var vl=xf[gl],v1=vl.toLowerCase(),y1=vl[0].toUpperCase()+vl.slice(1);Un(v1,"on"+y1)}Un(km,"onAnimationEnd");Un(Sm,"onAnimationIteration");Un(bm,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Im,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function _f(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,v0(r,t,void 0,e),e.currentTarget=null}function Nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;_f(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;_f(i,s,u),a=l}}}if(Ho)throw e=lu,Ho=!1,lu=null,e}function se(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var r=e+"__bubble";n.has(r)||(Tm(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Tm(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[io]){e[io]=!0,Dp.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,yl("selectionchange",!1,t))}}function Tm(e,t,n,r){switch(fm(t)){case 1:var i=A0;break;case 4:i=L0;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Zn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Jp(function(){var u=a,d=_c(n),f=[];e:{var g=Cm.get(e);if(g!==void 0){var w=Cc,y=e;switch(e){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":w=Q0;break;case"focusin":y="focus",w=fl;break;case"focusout":y="blur",w=fl;break;case"beforeblur":case"afterblur":w=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=J0;break;case km:case Sm:case bm:w=z0;break;case Im:w=e1;break;case"scroll":w=j0;break;case"wheel":w=n1;break;case"copy":case"cut":case"paste":w=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=df}var x=(t&4)!==0,S=!x&&e==="scroll",m=x?g!==null?g+"Capture":null:g;x=[];for(var h=u,v;h!==null;){v=h;var p=v.stateNode;if(v.tag===5&&p!==null&&(v=p,m!==null&&(p=na(h,m),p!=null&&x.push(ua(h,p,v)))),S)break;h=h.return}0<x.length&&(g=new w(g,y,null,n,d),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==au&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[Yt]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Zn(y):null,y!==null&&(S=Er(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(x=uf,p="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=df,p="onPointerLeave",m="onPointerEnter",h="pointer"),S=w==null?g:Pr(w),v=y==null?g:Pr(y),g=new x(p,h+"leave",w,n,d),g.target=S,g.relatedTarget=v,p=null,Zn(d)===u&&(x=new x(m,h+"enter",y,n,d),x.target=v,x.relatedTarget=S,p=x),S=p,w&&y)t:{for(x=w,m=y,h=0,v=x;v;v=kr(v))h++;for(v=0,p=m;p;p=kr(p))v++;for(;0<h-v;)x=kr(x),h--;for(;0<v-h;)m=kr(m),v--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=kr(x),m=kr(m)}x=null}else x=null;w!==null&&Ef(f,g,w,x,!1),y!==null&&S!==null&&Ef(f,S,y,x,!0)}}e:{if(g=u?Pr(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var k=u1;else if(pf(g))if(ym)k=h1;else{k=d1;var C=c1}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=f1);if(k&&(k=k(e,u))){vm(f,k,n,d);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&eu(g,"number",g.value)}switch(C=u?Pr(u):window,e){case"focusin":(pf(C)||C.contentEditable==="true")&&(Nr=C,fu=u,Wi=null);break;case"focusout":Wi=fu=Nr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,wf(f,n,d);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":wf(f,n,d)}var N;if(Tc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cr?mm(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pm&&n.locale!=="ko"&&(Cr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cr&&(N=hm()):(xn=d,Ic="value"in xn?xn.value:xn.textContent,Cr=!0)),C=Go(u,P),0<C.length&&(P=new cf(P,e,null,n,d),f.push({event:P,listeners:C}),N?P.data=N:(N=gm(n),N!==null&&(P.data=N)))),(N=i1?a1(e,n):o1(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(d=new cf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=N))}Nm(f,t)})}function ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=na(e,n),a!=null&&r.unshift(ua(e,a,i)),a=na(e,t),a!=null&&r.push(ua(e,a,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=na(n,a),l!=null&&o.unshift(ua(n,l,s))):i||(l=na(n,a),l!=null&&o.push(ua(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var x1=/\r\n?/g,_1=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(_1,"")}function ao(e,t,n){if(t=kf(t),kf(e)!==t&&n)throw Error(T(425))}function Qo(){}var pu=null,mu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(e){return Sf.resolve(null).then(e).catch(S1)}:vu;function S1(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),aa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);aa(t)}function In(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),It="__reactFiber$"+di,ca="__reactProps$"+di,Yt="__reactContainer$"+di,yu="__reactEvents$"+di,b1="__reactListeners$"+di,I1="__reactHandles$"+di;function Zn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bf(e);e!==null;){if(n=e[It])return n;e=bf(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[It]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ts(e){return e[ca]||null}var wu=[],Rr=-1;function Fn(e){return{current:e}}function ue(e){0>Rr||(e.current=wu[Rr],wu[Rr]=null,Rr--)}function oe(e,t){Rr++,wu[Rr]=e.current,e.current=t}var Ln={},Fe=Fn(Ln),Ye=Fn(!1),ur=Ln;function ei(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function qo(){ue(Ye),ue(Fe)}function If(e,t,n){if(Fe.current!==Ln)throw Error(T(168));oe(Fe,t),oe(Ye,n)}function Pm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,c0(e)||"Unknown",i));return ve({},n,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,ur=Fe.current,oe(Fe,e),oe(Ye,Ye.current),!0}function Cf(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Pm(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,ue(Ye),ue(Fe),oe(Fe,e)):ue(Ye),oe(Ye,n)}var Ut=null,Ps=!1,_l=!1;function Rm(e){Ut===null?Ut=[e]:Ut.push(e)}function C1(e){Ps=!0,Rm(e)}function zn(){if(!_l&&Ut!==null){_l=!0;var e=0,t=J;try{var n=Ut;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ps=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),nm(Ec,zn),i}finally{J=t,_l=!1}}return null}var Or=[],Ar=0,Jo=null,Zo=0,ot=[],st=0,cr=null,zt=1,$t="";function Qn(e,t){Or[Ar++]=Zo,Or[Ar++]=Jo,Jo=e,Zo=t}function Om(e,t,n){ot[st++]=zt,ot[st++]=$t,ot[st++]=cr,cr=e;var r=zt;e=$t;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var a=32-xt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-xt(t)+i|n<<i|r,$t=a+e}else zt=1<<a|n<<i|r,$t=e}function Rc(e){e.return!==null&&(Qn(e,1),Om(e,1,0))}function Oc(e){for(;e===Jo;)Jo=Or[--Ar],Or[Ar]=null,Zo=Or[--Ar],Or[Ar]=null;for(;e===cr;)cr=ot[--st],ot[st]=null,$t=ot[--st],ot[st]=null,zt=ot[--st],ot[st]=null}var Ze=null,Je=null,de=!1,yt=null;function Am(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=In(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:zt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(de){var t=Je;if(t){var n=t;if(!Nf(e,t)){if(xu(e))throw Error(T(418));t=In(n.nextSibling);var r=Ze;t&&Nf(e,t)?Am(r,n):(e.flags=e.flags&-4097|2,de=!1,Ze=e)}}else{if(xu(e))throw Error(T(418));e.flags=e.flags&-4097|2,de=!1,Ze=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function oo(e){if(e!==Ze)return!1;if(!de)return Tf(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=Je)){if(xu(e))throw Lm(),Error(T(418));for(;t;)Am(e,t),t=In(t.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=In(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?In(e.stateNode.nextSibling):null;return!0}function Lm(){for(var e=Je;e;)e=In(e.nextSibling)}function ti(){Je=Ze=null,de=!1}function Ac(e){yt===null?yt=[e]:yt.push(e)}var N1=en.ReactCurrentBatchConfig;function mt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var es=Fn(null),ts=null,Lr=null,Lc=null;function jc(){Lc=Lr=ts=null}function Dc(e){var t=es.current;ue(es),e._currentValue=t}function Eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kr(e,t){ts=e,Lc=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Lc!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ts===null)throw Error(T(308));Lr=e,ts.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var er=null;function Mc(e){er===null?er=[e]:er.push(e)}function jm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Mc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}function Pf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var i=e.updateQueue;pn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,d=u=l=null,s=a;do{var g=s.lane,w=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(g=t,w=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(w,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(w,f,g):y,g==null)break e;f=ve({},f,g);break e;case 2:pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=w,l=f):d=d.next=w,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fr|=o,e.lanes=o,e.memoizedState=f}}function Rf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Mm=new jp.Component().refs;function ku(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Tn(e),a=Vt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(_t(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Tn(e),a=Vt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(_t(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=Tn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(_t(t,e,r,n),No(t,e,r))}};function Of(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!sa(n,r)||!sa(i,a):!0}function Um(e,t,n){var r=!1,i=Ln,a=t.contextType;return typeof a=="object"&&a!==null?a=ct(a):(i=Ge(t)?ur:Fe.current,r=t.contextTypes,a=(r=r!=null)?ei(e,i):Ln),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Af(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mm,Uc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ct(a):(a=Ge(t)?ur:Fe.current,i.context=ei(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ku(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rs.enqueueReplaceState(i,i.state,null),ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Mm&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lf(e){var t=e._init;return t(e._payload)}function Fm(e){function t(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Pn(m,h),m.index=0,m.sibling=null,m}function a(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,v,p){return h===null||h.tag!==6?(h=Nl(v,m.mode,p),h.return=m,h):(h=i(h,v),h.return=m,h)}function l(m,h,v,p){var k=v.type;return k===Ir?d(m,h,v.props.children,p,v.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&Lf(k)===h.type)?(p=i(h,v.props),p.ref=Ci(m,h,v),p.return=m,p):(p=Lo(v.type,v.key,v.props,null,m.mode,p),p.ref=Ci(m,h,v),p.return=m,p)}function u(m,h,v,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Tl(v,m.mode,p),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function d(m,h,v,p,k){return h===null||h.tag!==7?(h=sr(v,m.mode,p,k),h.return=m,h):(h=i(h,v),h.return=m,h)}function f(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Nl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qa:return v=Lo(h.type,h.key,h.props,null,m.mode,v),v.ref=Ci(m,null,h),v.return=m,v;case br:return h=Tl(h,m.mode,v),h.return=m,h;case hn:var p=h._init;return f(m,p(h._payload),v)}if(ji(h)||Ei(h))return h=sr(h,m.mode,v,null),h.return=m,h;so(m,h)}return null}function g(m,h,v,p){var k=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(m,h,""+v,p);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:return v.key===k?l(m,h,v,p):null;case br:return v.key===k?u(m,h,v,p):null;case hn:return k=v._init,g(m,h,k(v._payload),p)}if(ji(v)||Ei(v))return k!==null?null:d(m,h,v,p,null);so(m,v)}return null}function w(m,h,v,p,k){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(v)||null,s(h,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qa:return m=m.get(p.key===null?v:p.key)||null,l(h,m,p,k);case br:return m=m.get(p.key===null?v:p.key)||null,u(h,m,p,k);case hn:var C=p._init;return w(m,h,v,C(p._payload),k)}if(ji(p)||Ei(p))return m=m.get(v)||null,d(h,m,p,k,null);so(h,p)}return null}function y(m,h,v,p){for(var k=null,C=null,N=h,P=h=0,z=null;N!==null&&P<v.length;P++){N.index>P?(z=N,N=null):z=N.sibling;var U=g(m,N,v[P],p);if(U===null){N===null&&(N=z);break}e&&N&&U.alternate===null&&t(m,N),h=a(U,h,P),C===null?k=U:C.sibling=U,C=U,N=z}if(P===v.length)return n(m,N),de&&Qn(m,P),k;if(N===null){for(;P<v.length;P++)N=f(m,v[P],p),N!==null&&(h=a(N,h,P),C===null?k=N:C.sibling=N,C=N);return de&&Qn(m,P),k}for(N=r(m,N);P<v.length;P++)z=w(N,m,P,v[P],p),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?P:z.key),h=a(z,h,P),C===null?k=z:C.sibling=z,C=z);return e&&N.forEach(function(Pe){return t(m,Pe)}),de&&Qn(m,P),k}function x(m,h,v,p){var k=Ei(v);if(typeof k!="function")throw Error(T(150));if(v=k.call(v),v==null)throw Error(T(151));for(var C=k=null,N=h,P=h=0,z=null,U=v.next();N!==null&&!U.done;P++,U=v.next()){N.index>P?(z=N,N=null):z=N.sibling;var Pe=g(m,N,U.value,p);if(Pe===null){N===null&&(N=z);break}e&&N&&Pe.alternate===null&&t(m,N),h=a(Pe,h,P),C===null?k=Pe:C.sibling=Pe,C=Pe,N=z}if(U.done)return n(m,N),de&&Qn(m,P),k;if(N===null){for(;!U.done;P++,U=v.next())U=f(m,U.value,p),U!==null&&(h=a(U,h,P),C===null?k=U:C.sibling=U,C=U);return de&&Qn(m,P),k}for(N=r(m,N);!U.done;P++,U=v.next())U=w(N,m,P,U.value,p),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?P:U.key),h=a(U,h,P),C===null?k=U:C.sibling=U,C=U);return e&&N.forEach(function(qe){return t(m,qe)}),de&&Qn(m,P),k}function S(m,h,v,p){if(typeof v=="object"&&v!==null&&v.type===Ir&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:e:{for(var k=v.key,C=h;C!==null;){if(C.key===k){if(k=v.type,k===Ir){if(C.tag===7){n(m,C.sibling),h=i(C,v.props.children),h.return=m,m=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hn&&Lf(k)===C.type){n(m,C.sibling),h=i(C,v.props),h.ref=Ci(m,C,v),h.return=m,m=h;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===Ir?(h=sr(v.props.children,m.mode,p,v.key),h.return=m,m=h):(p=Lo(v.type,v.key,v.props,null,m.mode,p),p.ref=Ci(m,h,v),p.return=m,m=p)}return o(m);case br:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Tl(v,m.mode,p),h.return=m,m=h}return o(m);case hn:return C=v._init,S(m,h,C(v._payload),p)}if(ji(v))return y(m,h,v,p);if(Ei(v))return x(m,h,v,p);so(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,v),h.return=m,m=h):(n(m,h),h=Nl(v,m.mode,p),h.return=m,m=h),o(m)):n(m,h)}return S}var ni=Fm(!0),zm=Fm(!1),Aa={},Tt=Fn(Aa),da=Fn(Aa),fa=Fn(Aa);function tr(e){if(e===Aa)throw Error(T(174));return e}function Fc(e,t){switch(oe(fa,t),oe(da,e),oe(Tt,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}ue(Tt),oe(Tt,t)}function ri(){ue(Tt),ue(da),ue(fa)}function $m(e){tr(fa.current);var t=tr(Tt.current),n=nu(t,e.type);t!==n&&(oe(da,e),oe(Tt,n))}function zc(e){da.current===e&&(ue(Tt),ue(da))}var me=Fn(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function $c(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var To=en.ReactCurrentDispatcher,kl=en.ReactCurrentBatchConfig,dr=0,ge=null,Ce=null,Re=null,is=!1,Ki=!1,ha=0,T1=0;function De(){throw Error(T(321))}function Bc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,a){if(dr=a,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?A1:L1,e=n(r,i),Ki){a=0;do{if(Ki=!1,ha=0,25<=a)throw Error(T(301));a+=1,Re=Ce=null,t.updateQueue=null,To.current=j1,e=n(r,i)}while(Ki)}if(To.current=as,t=Ce!==null&&Ce.next!==null,dr=0,Re=Ce=ge=null,is=!1,t)throw Error(T(300));return e}function Vc(){var e=ha!==0;return ha=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=e:Re=Re.next=e,Re}function dt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Re===null?ge.memoizedState:Re.next;if(t!==null)Re=t,Ce=e;else{if(e===null)throw Error(T(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ge.memoizedState=Re=e:Re=Re.next=e}return Re}function pa(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=dt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var d=u.lane;if((dr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,ge.lanes|=d,fr|=d}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Et(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ge.lanes|=a,fr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=dt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Et(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bm(){}function Hm(e,t){var n=ge,r=dt(),i=t(),a=!Et(r.memoizedState,i);if(a&&(r.memoizedState=i,Ke=!0),r=r.queue,Wc(Km.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,ma(9,Wm.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(T(349));dr&30||Vm(n,t,i)}return i}function Vm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wm(e,t,n,r){t.value=n,t.getSnapshot=r,Ym(t)&&Gm(e)}function Km(e,t,n){return n(function(){Ym(t)&&Gm(e)})}function Ym(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Gm(e){var t=Gt(e,1);t!==null&&_t(t,e,1,-1)}function jf(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t.queue=e,e=e.dispatch=O1.bind(null,ge,e),[t.memoizedState,e]}function ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qm(){return dt().memoizedState}function Po(e,t,n,r){var i=bt();ge.flags|=e,i.memoizedState=ma(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var i=dt();r=r===void 0?null:r;var a=void 0;if(Ce!==null){var o=Ce.memoizedState;if(a=o.destroy,r!==null&&Bc(r,o.deps)){i.memoizedState=ma(t,n,a,r);return}}ge.flags|=e,i.memoizedState=ma(1|t,n,a,r)}function Df(e,t){return Po(8390656,8,e,t)}function Wc(e,t){return Os(2048,8,e,t)}function qm(e,t){return Os(4,2,e,t)}function Xm(e,t){return Os(4,4,e,t)}function Jm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zm(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,Jm.bind(null,t,e),n)}function Kc(){}function eg(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tg(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ng(e,t,n){return dr&21?(Et(n,t)||(n=am(),ge.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function P1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{J=n,kl.transition=r}}function rg(){return dt().memoizedState}function R1(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ig(e))ag(t,n);else if(n=jm(e,t,n,r),n!==null){var i=Be();_t(n,e,r,i),og(n,t,r)}}function O1(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(e))ag(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Et(s,o)){var l=t.interleaved;l===null?(i.next=i,Mc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jm(e,t,i,r),n!==null&&(i=Be(),_t(n,e,r,i),og(n,t,r))}}function ig(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function ag(e,t){Ki=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function og(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}var as={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},A1={readContext:ct,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Df,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,Jm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:jf,useDebugValue:Kc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=jf(!1),t=e[0];return e=P1.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=bt();if(de){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Oe===null)throw Error(T(349));dr&30||Vm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Df(Km.bind(null,r,a,e),[e]),r.flags|=2048,ma(9,Wm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=bt(),t=Oe.identifierPrefix;if(de){var n=$t,r=zt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ha++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L1={readContext:ct,useCallback:eg,useContext:ct,useEffect:Wc,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Xm,useMemo:tg,useReducer:Sl,useRef:Qm,useState:function(){return Sl(pa)},useDebugValue:Kc,useDeferredValue:function(e){var t=dt();return ng(t,Ce.memoizedState,e)},useTransition:function(){var e=Sl(pa)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:rg,unstable_isNewReconciler:!1},j1={readContext:ct,useCallback:eg,useContext:ct,useEffect:Wc,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Xm,useMemo:tg,useReducer:bl,useRef:Qm,useState:function(){return bl(pa)},useDebugValue:Kc,useDeferredValue:function(e){var t=dt();return Ce===null?t.memoizedState=e:ng(t,Ce.memoizedState,e)},useTransition:function(){var e=bl(pa)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Hm,useId:rg,unstable_isNewReconciler:!1};function ii(e,t){try{var n="",r=t;do n+=u0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var D1=typeof WeakMap=="function"?WeakMap:Map;function sg(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ss||(ss=!0,ju=r),bu(e,t)},n}function lg(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){bu(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new D1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=q1.bind(null,e,t,n),t.then(e,e))}function Uf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ff(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var M1=en.ReactCurrentOwner,Ke=!1;function $e(e,t,n,r){t.child=e===null?zm(t,null,n,r):ni(t,e.child,n,r)}function zf(e,t,n,r,i){n=n.render;var a=t.ref;return Kr(t,i),r=Hc(e,t,n,r,a,i),n=Vc(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&n&&Rc(t),t.flags|=1,$e(e,t,r,i),t.child)}function $f(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ed(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ug(e,t,a,r,i)):(e=Lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=Pn(a,r),e.ref=t.ref,e.return=t,t.child=e}function ug(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(sa(a,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return Iu(e,t,n,r,i)}function cg(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Dr,Xe),Xe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Dr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,oe(Dr,Xe),Xe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,oe(Dr,Xe),Xe|=r;return $e(e,t,i,n),t.child}function dg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,i){var a=Ge(n)?ur:Fe.current;return a=ei(t,a),Kr(t,i),n=Hc(e,t,n,r,a,i),r=Vc(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(de&&r&&Rc(t),t.flags|=1,$e(e,t,n,i),t.child)}function Bf(e,t,n,r,i){if(Ge(n)){var a=!0;Xo(t)}else a=!1;if(Kr(t,i),t.stateNode===null)Ro(e,t),Um(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ge(n)?ur:Fe.current,u=ei(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Af(t,o,r,u),pn=!1;var g=t.memoizedState;o.state=g,ns(t,r,o,i),l=t.memoizedState,s!==r||g!==l||Ye.current||pn?(typeof d=="function"&&(ku(t,n,d,r),l=t.memoizedState),(s=pn||Of(t,n,s,r,g,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Dm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:mt(t.type,s),o.props=u,f=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ge(n)?ur:Fe.current,l=ei(t,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||g!==l)&&Af(t,o,r,l),pn=!1,g=t.memoizedState,o.state=g,ns(t,r,o,i);var y=t.memoizedState;s!==f||g!==y||Ye.current||pn?(typeof w=="function"&&(ku(t,n,w,r),y=t.memoizedState),(u=pn||Of(t,n,u,r,g,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,a,i)}function Cu(e,t,n,r,i,a){dg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Cf(t,n,!1),Qt(e,t,a);r=t.stateNode,M1.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ni(t,e.child,null,a),t.child=ni(t,null,s,a)):$e(e,t,s,a),t.memoizedState=r.state,i&&Cf(t,n,!0),t.child}function fg(e){var t=e.stateNode;t.pendingContext?If(e,t.pendingContext,t.pendingContext!==t.context):t.context&&If(e,t.context,!1),Fc(e,t.containerInfo)}function Hf(e,t,n,r,i){return ti(),Ac(i),t.flags|=256,$e(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function hg(e,t,n){var r=t.pendingProps,i=me.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(me,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=js(o,r,0,null),e=sr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Tu(n),t.memoizedState=Nu,e):Yc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return U1(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Pn(s,a):(a=sr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Tu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Nu,r}return a=e.child,e=a.sibling,r=Pn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yc(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lo(e,t,n,r){return r!==null&&Ac(r),ni(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U1(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(T(422))),lo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=js({mode:"visible",children:r.children},i,0,null),a=sr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ni(t,e.child,null,o),t.child.memoizedState=Tu(o),t.memoizedState=Nu,a);if(!(t.mode&1))return lo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(T(419)),r=Il(a,r,void 0),lo(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ke||s){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Gt(e,i),_t(r,e,i,-1))}return Zc(),r=Il(Error(T(421))),lo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=X1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Je=In(i.nextSibling),Ze=t,de=!0,yt=null,e!==null&&(ot[st++]=zt,ot[st++]=$t,ot[st++]=cr,zt=e.id,$t=e.overflow,cr=t),t=Yc(t,r.children),t.flags|=4096,t)}function Vf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eu(e.return,t,n)}function Cl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function pg(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if($e(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vf(e,n,t);else if(e.tag===19)Vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,a);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F1(e,t,n){switch(t.tag){case 3:fg(t),ti();break;case 5:$m(t);break;case 1:Ge(t.type)&&Xo(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?hg(e,t,n):(oe(me,me.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,cg(e,t,n)}return Qt(e,t,n)}var mg,Pu,gg,vg;mg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};gg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(Tt.current);var a=null;switch(n){case"input":i=Jl(e,i),r=Jl(e,r),a=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":i=tu(e,i),r=tu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}ru(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};vg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ni(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z1(e,t,n){var r=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ge(t.type)&&qo(),Me(t),null;case 3:return r=t.stateNode,ri(),ue(Ye),ue(Fe),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Uu(yt),yt=null))),Pu(e,t),Me(t),null;case 5:zc(t);var i=tr(fa.current);if(n=t.type,e!==null&&t.stateNode!=null)gg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Me(t),null}if(e=tr(Tt.current),oo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[ca]=a,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Mi.length;i++)se(Mi[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Jd(r,a),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},se("invalid",r);break;case"textarea":ef(r,a),se("invalid",r)}ru(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ao(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ao(r.textContent,s,e),i=["children",""+s]):ea.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Xa(r),Zd(r,a,!0);break;case"textarea":Xa(r),tf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[ca]=r,mg(e,t,!1,!1),t.stateNode=e;e:{switch(o=iu(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mi.length;i++)se(Mi[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Jd(e,r),i=Jl(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),se("invalid",e);break;case"textarea":ef(e,r),i=tu(e,r),se("invalid",e);break;default:i=r}ru(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Yp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wp(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(e,l):typeof l=="number"&&ta(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ea.hasOwnProperty(a)?l!=null&&a==="onScroll"&&se("scroll",e):l!=null&&vc(e,a,l,o))}switch(n){case"input":Xa(e),Zd(e,r,!1);break;case"textarea":Xa(e),tf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Br(e,!!r.multiple,a,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)vg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=tr(fa.current),tr(Tt.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Me(t),null;case 13:if(ue(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Je!==null&&t.mode&1&&!(t.flags&128))Lm(),ti(),t.flags|=98560,a=!1;else if(a=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[It]=t}else ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else yt!==null&&(Uu(yt),yt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ne===0&&(Ne=3):Zc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return ri(),Pu(e,t),e===null&&la(t.stateNode.containerInfo),Me(t),null;case 10:return Dc(t.type._context),Me(t),null;case 17:return Ge(t.type)&&qo(),Me(t),null;case 19:if(ue(me),a=t.memoizedState,a===null)return Me(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Ni(a,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rs(e),o!==null){for(t.flags|=128,Ni(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>ai&&(t.flags|=128,r=!0,Ni(a,!1),t.lanes=4194304)}else{if(!r)if(e=rs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ni(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!de)return Me(t),null}else 2*Se()-a.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,Ni(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function $1(e,t){switch(Oc(t),t.tag){case 1:return Ge(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),ue(Ye),ue(Fe),$c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(ue(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(me),null;case 4:return ri(),null;case 10:return Dc(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var uo=!1,Ue=!1,B1=typeof WeakSet=="function"?WeakSet:Set,L=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){we(e,t,r)}}var Wf=!1;function H1(e,t){if(pu=Ko,e=_m(),Pc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break t;if(g===n&&++u===i&&(s=o),g===a&&++d===r&&(l=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},Ko=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:mt(t.type,x),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(p){we(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Wf,Wf=!1,y}function Yi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ru(t,n,a)}i=i.next}while(i!==r)}}function As(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yg(e){var t=e.alternate;t!==null&&(e.alternate=null,yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[ca],delete t[yu],delete t[b1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wg(e){return e.tag===5||e.tag===3||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}function Lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}var Ae=null,gt=!1;function cn(e,t,n){for(n=n.child;n!==null;)xg(e,t,n),n=n.sibling}function xg(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(bs,n)}catch{}switch(n.tag){case 5:Ue||jr(n,t);case 6:var r=Ae,i=gt;Ae=null,cn(e,t,n),Ae=r,gt=i,Ae!==null&&(gt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(gt?(e=Ae,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),aa(e)):xl(Ae,n.stateNode));break;case 4:r=Ae,i=gt,Ae=n.stateNode.containerInfo,gt=!0,cn(e,t,n),Ae=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ru(n,t,o),i=i.next}while(i!==r)}cn(e,t,n);break;case 1:if(!Ue&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,cn(e,t,n),Ue=r):cn(e,t,n);break;default:cn(e,t,n)}}function Yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B1),t.forEach(function(r){var i=J1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ae=s.stateNode,gt=!1;break e;case 3:Ae=s.stateNode.containerInfo,gt=!0;break e;case 4:Ae=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(Ae===null)throw Error(T(160));xg(a,o,i),Ae=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_g(t,e),t=t.sibling}function _g(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),St(e),r&4){try{Yi(3,e,e.return),As(3,e)}catch(x){we(e,e.return,x)}try{Yi(5,e,e.return)}catch(x){we(e,e.return,x)}}break;case 1:pt(t,e),St(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(pt(t,e),St(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var i=e.stateNode;try{ta(i,"")}catch(x){we(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Bp(i,a),iu(s,o);var u=iu(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Yp(i,f):d==="dangerouslySetInnerHTML"?Wp(i,f):d==="children"?ta(i,f):vc(i,d,f,u)}switch(s){case"input":Zl(i,a);break;case"textarea":Hp(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?Br(i,!!a.multiple,w,!1):g!==!!a.multiple&&(a.defaultValue!=null?Br(i,!!a.multiple,a.defaultValue,!0):Br(i,!!a.multiple,a.multiple?[]:"",!1))}i[ca]=a}catch(x){we(e,e.return,x)}}break;case 6:if(pt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){we(e,e.return,x)}}break;case 3:if(pt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(x){we(e,e.return,x)}break;case 4:pt(t,e),St(e);break;case 13:pt(t,e),St(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(qc=Se())),r&4&&Yf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||d,pt(t,e),Ue=u):pt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(g=L,w=g.child,g.tag){case 0:case 11:case 14:case 15:Yi(4,g,g.return);break;case 1:jr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){we(r,n,x)}}break;case 5:jr(g,g.return);break;case 22:if(g.memoizedState!==null){Qf(f);continue}}w!==null?(w.return=g,L=w):Qf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Kp("display",o))}catch(x){we(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){we(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pt(t,e),St(e),r&4&&Yf(e);break;case 21:break;default:pt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wg(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var a=Kf(e);Lu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Kf(e);Au(e,s,o);break;default:throw Error(T(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V1(e,t,n){L=e,Eg(e)}function Eg(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ue;s=uo;var u=Ue;if(uo=o,(Ue=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?qf(i):l!==null?(l.return=o,L=l):qf(i);for(;a!==null;)L=a,Eg(a),a=a.sibling;L=i,uo=s,Ue=u}Gf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,L=a):Gf(e)}}function Gf(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||As(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Rf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||t.flags&512&&Ou(t)}catch(g){we(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Qf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function qf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{As(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){we(t,i,l)}}var a=t.return;try{Ou(t)}catch(l){we(t,a,l)}break;case 5:var o=t.return;try{Ou(t)}catch(l){we(t,o,l)}}}catch(l){we(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var W1=Math.ceil,os=en.ReactCurrentDispatcher,Gc=en.ReactCurrentOwner,ut=en.ReactCurrentBatchConfig,q=0,Oe=null,be=null,Le=0,Xe=0,Dr=Fn(0),Ne=0,ga=null,fr=0,Ls=0,Qc=0,Gi=null,We=null,qc=0,ai=1/0,Mt=null,ss=!1,ju=null,Nn=null,co=!1,_n=null,ls=0,Qi=0,Du=null,Oo=-1,Ao=0;function Be(){return q&6?Se():Oo!==-1?Oo:Oo=Se()}function Tn(e){return e.mode&1?q&2&&Le!==0?Le&-Le:N1.transition!==null?(Ao===0&&(Ao=am()),Ao):(e=J,e!==0||(e=window.event,e=e===void 0?16:fm(e.type)),e):1}function _t(e,t,n,r){if(50<Qi)throw Qi=0,Du=null,Error(T(185));Pa(e,n,r),(!(q&2)||e!==Oe)&&(e===Oe&&(!(q&2)&&(Ls|=n),Ne===4&&gn(e,Le)),Qe(e,r),n===1&&q===0&&!(t.mode&1)&&(ai=Se()+500,Ps&&zn()))}function Qe(e,t){var n=e.callbackNode;N0(e,t);var r=Wo(e,e===Oe?Le:0);if(r===0)n!==null&&af(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&af(n),t===1)e.tag===0?C1(Xf.bind(null,e)):Rm(Xf.bind(null,e)),k1(function(){!(q&6)&&zn()}),n=null;else{switch(om(r)){case 1:n=Ec;break;case 4:n=rm;break;case 16:n=Vo;break;case 536870912:n=im;break;default:n=Vo}n=Pg(n,kg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kg(e,t){if(Oo=-1,Ao=0,q&6)throw Error(T(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var r=Wo(e,e===Oe?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=us(e,r);else{t=r;var i=q;q|=2;var a=bg();(Oe!==e||Le!==t)&&(Mt=null,ai=Se()+500,or(e,t));do try{G1();break}catch(s){Sg(e,s)}while(1);jc(),os.current=a,q=i,be!==null?t=0:(Oe=null,Le=0,t=Ne)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=Mu(e,i))),t===1)throw n=ga,or(e,0),gn(e,r),Qe(e,Se()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!K1(i)&&(t=us(e,r),t===2&&(a=uu(e),a!==0&&(r=a,t=Mu(e,a))),t===1))throw n=ga,or(e,0),gn(e,r),Qe(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:qn(e,We,Mt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=qc+500-Se(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu(qn.bind(null,e,We,Mt),t);break}qn(e,We,Mt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-xt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){e.timeoutHandle=vu(qn.bind(null,e,We,Mt),r);break}qn(e,We,Mt);break;case 5:qn(e,We,Mt);break;default:throw Error(T(329))}}}return Qe(e,Se()),e.callbackNode===n?kg.bind(null,e):null}function Mu(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=us(e,t),e!==2&&(t=We,We=n,t!==null&&Uu(t)),e}function Uu(e){We===null?We=e:We.push.apply(We,e)}function K1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Et(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Qc,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Xf(e){if(q&6)throw Error(T(327));Yr();var t=Wo(e,0);if(!(t&1))return Qe(e,Se()),null;var n=us(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=ga,or(e,0),gn(e,t),Qe(e,Se()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qn(e,We,Mt),Qe(e,Se()),null}function Xc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(ai=Se()+500,Ps&&zn())}}function hr(e){_n!==null&&_n.tag===0&&!(q&6)&&Yr();var t=q;q|=1;var n=ut.transition,r=J;try{if(ut.transition=null,J=1,e)return e()}finally{J=r,ut.transition=n,q=t,!(q&6)&&zn()}}function Jc(){Xe=Dr.current,ue(Dr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E1(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:ri(),ue(Ye),ue(Fe),$c();break;case 5:zc(r);break;case 4:ri();break;case 13:ue(me);break;case 19:ue(me);break;case 10:Dc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(Oe=e,be=e=Pn(e.current,null),Le=Xe=t,Ne=0,ga=null,Qc=Ls=fr=0,We=Gi=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}er=null}return e}function Sg(e,t){do{var n=be;try{if(jc(),To.current=as,is){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}is=!1}if(dr=0,Re=Ce=ge=null,Ki=!1,ha=0,Gc.current=null,n===null||n.return===null){Ne=1,ga=t,be=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Uf(o);if(w!==null){w.flags&=-257,Ff(w,o,s,a,t),w.mode&1&&Mf(a,u,t),t=w,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Mf(a,u,t),Zc();break e}l=Error(T(426))}}else if(de&&s.mode&1){var S=Uf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ff(S,o,s,a,t),Ac(ii(l,s));break e}}a=l=ii(l,s),Ne!==4&&(Ne=2),Gi===null?Gi=[a]:Gi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=sg(a,l,t);Pf(a,m);break e;case 1:s=l;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var p=lg(a,s,t);Pf(a,p);break e}}a=a.return}while(a!==null)}Cg(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function bg(){var e=os.current;return os.current=as,e===null?as:e}function Zc(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Oe===null||!(fr&268435455)&&!(Ls&268435455)||gn(Oe,Le)}function us(e,t){var n=q;q|=2;var r=bg();(Oe!==e||Le!==t)&&(Mt=null,or(e,t));do try{Y1();break}catch(i){Sg(e,i)}while(1);if(jc(),q=n,os.current=r,be!==null)throw Error(T(261));return Oe=null,Le=0,Ne}function Y1(){for(;be!==null;)Ig(be)}function G1(){for(;be!==null&&!w0();)Ig(be)}function Ig(e){var t=Tg(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Cg(e):be=t,Gc.current=null}function Cg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$1(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,be=null;return}}else if(n=z1(n,t,Xe),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ne===0&&(Ne=5)}function qn(e,t,n){var r=J,i=ut.transition;try{ut.transition=null,J=1,Q1(e,t,n,r)}finally{ut.transition=i,J=r}return null}function Q1(e,t,n,r){do Yr();while(_n!==null);if(q&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(T0(e,a),e===Oe&&(be=Oe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,Pg(Vo,function(){return Yr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ut.transition,ut.transition=null;var o=J;J=1;var s=q;q|=4,Gc.current=null,H1(e,n),_g(n,e),m1(mu),Ko=!!pu,mu=pu=null,e.current=n,V1(n),x0(),q=s,J=o,ut.transition=a}else e.current=n;if(co&&(co=!1,_n=e,ls=i),a=e.pendingLanes,a===0&&(Nn=null),k0(n.stateNode),Qe(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ss)throw ss=!1,e=ju,ju=null,e;return ls&1&&e.tag!==0&&Yr(),a=e.pendingLanes,a&1?e===Du?Qi++:(Qi=0,Du=e):Qi=0,zn(),null}function Yr(){if(_n!==null){var e=om(ls),t=ut.transition,n=J;try{if(ut.transition=null,J=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,ls=0,q&6)throw Error(T(331));var i=q;for(q|=4,L=e.current;L!==null;){var a=L,o=a.child;if(L.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Yi(8,d,a)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var g=d.sibling,w=d.return;if(yg(d),d===u){L=null;break}if(g!==null){g.return=w,L=g;break}L=w}}}var y=a.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}L=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,L=o;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Yi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,L=m;break e}L=a.return}}var h=e.current;for(L=h;L!==null;){o=L;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,L=v;else e:for(o=h;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:As(9,s)}}catch(k){we(s,s.return,k)}if(s===o){L=null;break e}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}if(q=i,zn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(bs,e)}catch{}r=!0}return r}finally{J=n,ut.transition=t}}return!1}function Jf(e,t,n){t=ii(n,t),t=sg(e,t,1),e=Cn(e,t,1),t=Be(),e!==null&&(Pa(e,1,t),Qe(e,t))}function we(e,t,n){if(e.tag===3)Jf(e,e,n);else for(;t!==null;){if(t.tag===3){Jf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=ii(n,e),e=lg(t,e,1),t=Cn(t,e,1),e=Be(),t!==null&&(Pa(t,1,e),Qe(t,e));break}}t=t.return}}function q1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Le&n)===n&&(Ne===4||Ne===3&&(Le&130023424)===Le&&500>Se()-qc?or(e,0):Qc|=n),Qe(e,t)}function Ng(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=Be();e=Gt(e,t),e!==null&&(Pa(e,t,n),Qe(e,n))}function X1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ng(e,n)}function J1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Ng(e,n)}var Tg;Tg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,F1(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,de&&t.flags&1048576&&Om(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var i=ei(t,Fe.current);Kr(t,n),i=Hc(null,t,r,e,i,n);var a=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(a=!0,Xo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(t),i.updater=Rs,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Cu(null,t,r,!0,a,n)):(t.tag=0,de&&a&&Rc(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ew(r),e=mt(r,e),i){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=Bf(null,t,r,e,n);break e;case 11:t=zf(null,t,r,e,n);break e;case 14:t=$f(null,t,r,mt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Bf(e,t,r,i,n);case 3:e:{if(fg(t),e===null)throw Error(T(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Dm(e,t),ns(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ii(Error(T(423)),t),t=Hf(e,t,r,n,i);break e}else if(r!==i){i=ii(Error(T(424)),t),t=Hf(e,t,r,n,i);break e}else for(Je=In(t.stateNode.containerInfo.firstChild),Ze=t,de=!0,yt=null,n=zm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===i){t=Qt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return $m(t),e===null&&_u(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,gu(r,i)?o=null:a!==null&&gu(r,a)&&(t.flags|=32),dg(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&_u(t),null;case 13:return hg(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ni(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),zf(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,oe(es,r._currentValue),r._currentValue=o,a!==null)if(Et(a.value,o)){if(a.children===i.children&&!Ye.current){t=Qt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Eu(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(T(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Eu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kr(t,n),i=ct(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),$f(e,t,r,i,n);case 15:return ug(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ro(e,t),t.tag=1,Ge(r)?(e=!0,Xo(t)):e=!1,Kr(t,n),Um(t,r,i),Su(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return pg(e,t,n);case 22:return cg(e,t,n)}throw Error(T(156,t.tag))};function Pg(e,t){return nm(e,t)}function Z1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Z1(e,t,n,r)}function ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ew(e){if(typeof e=="function")return ed(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===xc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")ed(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ir:return sr(n.children,i,a,t);case yc:o=8,i|=8;break;case Gl:return e=lt(12,n,t,i|2),e.elementType=Gl,e.lanes=a,e;case Ql:return e=lt(13,n,t,i),e.elementType=Ql,e.lanes=a,e;case ql:return e=lt(19,n,t,i),e.elementType=ql,e.lanes=a,e;case Fp:return js(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mp:o=10;break e;case Up:o=9;break e;case wc:o=11;break e;case xc:o=14;break e;case hn:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=lt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function sr(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Fp,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(e,t,n,r,i,a,o,s,l){return e=new tw(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=lt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(a),e}function nw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rg(e){if(!e)return Ln;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ge(n))return Pm(e,n,t)}return t}function Og(e,t,n,r,i,a,o,s,l){return e=td(n,r,!0,e,i,a,o,s,l),e.context=Rg(null),n=e.current,r=Be(),i=Tn(n),a=Vt(r,i),a.callback=t??null,Cn(n,a,i),e.current.lanes=i,Pa(e,i,r),Qe(e,r),e}function Ds(e,t,n,r){var i=t.current,a=Be(),o=Tn(i);return n=Rg(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(_t(e,i,o,a),No(e,i,o)),o}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nd(e,t){Zf(e,t),(e=e.alternate)&&Zf(e,t)}function rw(){return null}var Ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function rd(e){this._internalRoot=e}Ms.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ds(e,t,null,null)};Ms.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){Ds(null,e,null,null)}),t[Yt]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&dm(e)}};function id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eh(){}function iw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=cs(o);a.call(u)}}var o=Og(t,r,e,0,null,!1,!1,"",eh);return e._reactRootContainer=o,e[Yt]=o.current,la(e.nodeType===8?e.parentNode:e),hr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=cs(l);s.call(u)}}var l=td(e,0,!1,null,null,!1,!1,"",eh);return e._reactRootContainer=l,e[Yt]=l.current,la(e.nodeType===8?e.parentNode:e),hr(function(){Ds(t,l,n,r)}),l}function Fs(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=cs(o);s.call(l)}}Ds(t,o,e,i)}else o=iw(n,t,e,i,r);return cs(o)}sm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Di(t.pendingLanes);n!==0&&(kc(t,n|1),Qe(t,Se()),!(q&6)&&(ai=Se()+500,zn()))}break;case 13:hr(function(){var r=Gt(e,1);if(r!==null){var i=Be();_t(r,e,1,i)}}),nd(e,1)}};Sc=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Be();_t(t,e,134217728,n)}nd(e,134217728)}};lm=function(e){if(e.tag===13){var t=Tn(e),n=Gt(e,t);if(n!==null){var r=Be();_t(n,e,t,r)}nd(e,t)}};um=function(){return J};cm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ou=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ts(r);if(!i)throw Error(T(90));$p(r),Zl(r,i)}}}break;case"textarea":Hp(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};qp=Xc;Xp=hr;var aw={usingClientEntryPoint:!1,Events:[Oa,Pr,Ts,Gp,Qp,Xc]},Ti={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ow={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=em(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{bs=fo.inject(ow),Nt=fo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(t))throw Error(T(200));return nw(e,t,null,n)};nt.createRoot=function(e,t){if(!id(e))throw Error(T(299));var n=!1,r="",i=Ag;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=td(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,la(e.nodeType===8?e.parentNode:e),new rd(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=em(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return hr(e)};nt.hydrate=function(e,t,n){if(!Us(t))throw Error(T(200));return Fs(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!id(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Og(t,null,e,1,n??null,i,!1,a,o),e[Yt]=t.current,la(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ms(t)};nt.render=function(e,t,n){if(!Us(t))throw Error(T(200));return Fs(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Us(e))throw Error(T(40));return e._reactRootContainer?(hr(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};nt.unstable_batchedUpdates=Xc;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Us(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Fs(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function Lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg)}catch(e){console.error(e)}}Lg(),Op.exports=nt;var sw=Op.exports,th=sw;Kl.createRoot=th.createRoot,Kl.hydrateRoot=th.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var Ee;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ee||(Ee={}));const nh="popstate";function lw(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return va("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mr(i)}return cw(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uw(){return Math.random().toString(36).substr(2,8)}function rh(e,t){return{usr:e.state,key:e.key,idx:t}}function va(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:n,key:t&&t.key||r||uw()})}function mr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Ee.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(pe({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=Ee.Pop;let S=d(),m=S==null?null:S-u;u=S,l&&l({action:s,location:x.location,delta:m})}function g(S,m){s=Ee.Push;let h=va(x.location,S,m);n&&n(h,S),u=d()+1;let v=rh(h,u),p=x.createHref(h);try{o.pushState(v,"",p)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(p)}a&&l&&l({action:s,location:x.location,delta:1})}function w(S,m){s=Ee.Replace;let h=va(x.location,S,m);n&&n(h,S),u=d();let v=rh(h,u),p=x.createHref(h);o.replaceState(v,"",p),a&&l&&l({action:s,location:x.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:mr(S);return K(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nh,f),l=S,()=>{i.removeEventListener(nh,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:w,go(S){return o.go(S)}};return x}var ke;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ke||(ke={}));const dw=new Set(["lazy","caseSensitive","path","id","index","children"]);function fw(e){return e.index===!0}function Fu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),fw(i)){let l=pe({},i,t(i),{id:s});return r[s]=l,l}else{let l=pe({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Fu(i.children,t,o,r)),l}})}function Mr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?tn(t):t,i=fi(r.pathname||"/",n);if(i==null)return null;let a=jg(e);pw(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=kw(a[s],Iw(i));return o}function hw(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function jg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wt([r,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(K(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jg(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:_w(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Dg(a.path))i(a,o,l)}),t}function Dg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Dg(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function pw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ew(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mw=/^:\w+$/,gw=3,vw=2,yw=1,ww=10,xw=-2,ih=e=>e==="*";function _w(e,t){let n=e.split("/"),r=n.length;return n.some(ih)&&(r+=xw),t&&(r+=vw),n.filter(i=>!ih(i)).reduce((i,a)=>i+(mw.test(a)?gw:a===""?yw:ww),r)}function Ew(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function kw(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Sw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;a.push({params:r,pathname:Wt([i,d.pathname]),pathnameBase:Pw(Wt([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Wt([i,d.pathnameBase]))}return a}function Sw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let g=s[f]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=Cw(s[f]||"",d),u},{}),pathname:a,pathnameBase:o,pattern:e}}function bw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),pr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Iw(e){try{return decodeURI(e)}catch(t){return pr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cw(e,t){try{return decodeURIComponent(e)}catch(n){return pr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function fi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Nw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?tn(e):e;return{pathname:n?n.startsWith("/")?n:Tw(n,t):t,search:Rw(r),hash:Ow(i)}}function Tw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function La(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=tn(e):(i=pe({},e),K(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let f=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?t[f]:"/"}let l=Nw(i,s),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Pw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ow=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ad{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Mg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ug=["post","put","patch","delete"],Aw=new Set(Ug),Lw=["get",...Ug],jw=new Set(Lw),Dw=new Set([301,302,303,307,308]),Mw=new Set([307,308]),Rl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Uw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Pi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fw=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),zg="remix-router-transitions";function zw(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let _=e.detectErrorBoundary;i=E=>({hasErrorBoundary:_(E)})}else i=Fw;let a={},o=Fu(e.routes,i,void 0,a),s,l=e.basename||"/",u=pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,g=null,w=null,y=null,x=e.hydrationData!=null,S=Mr(o,e.history.location,l),m=null;if(S==null){let _=at(404,{pathname:e.history.location.pathname}),{matches:E,route:I}=fh(o);S=E,m={[I.id]:_}}let h=!S.some(_=>_.route.lazy)&&(!S.some(_=>_.route.loader)||e.hydrationData!=null),v,p={historyAction:e.history.action,location:e.history.location,matches:S,initialized:h,navigation:Rl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},k=Ee.Pop,C=!1,N,P=!1,z=new Map,U=null,Pe=!1,qe=!1,kt=[],Wn=[],ye=new Map,on=0,Ot=-1,R=new Map,M=new Set,B=new Map,X=new Map,ae=new Map,sn=!1;function At(){if(d=e.history.listen(_=>{let{action:E,location:I,delta:A}=_;if(sn){sn=!1;return}pr(ae.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=Bd({currentLocation:p.location,nextLocation:I,historyAction:E});if(V&&A!=null){sn=!0,e.history.go(A*-1),Ya(V,{state:"blocked",location:I,proceed(){Ya(V,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),e.history.go(A)},reset(){let H=new Map(p.blockers);H.set(V,Pi),fe({blockers:H})}});return}return Kn(E,I)}),n){Xw(t,z);let _=()=>Jw(t,z);t.addEventListener("pagehide",_),U=()=>t.removeEventListener("pagehide",_)}return p.initialized||Kn(Ee.Pop,p.location),v}function vi(){d&&d(),U&&U(),f.clear(),N&&N.abort(),p.fetchers.forEach((_,E)=>Xs(E)),p.blockers.forEach((_,E)=>$d(E))}function Lt(_){return f.add(_),()=>f.delete(_)}function fe(_,E){p=pe({},p,_),f.forEach(I=>I(p,{unstable_viewTransitionOpts:E}))}function yi(_,E){var I,A;let V=p.actionData!=null&&p.navigation.formMethod!=null&&vt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((I=_.state)==null?void 0:I._isRedirect)!==!0,H;E.actionData?Object.keys(E.actionData).length>0?H=E.actionData:H=null:V?H=p.actionData:H=null;let W=E.loaderData?dh(p.loaderData,E.loaderData,E.matches||[],E.errors):p.loaderData,F=p.blockers;F.size>0&&(F=new Map(F),F.forEach((he,Q)=>F.set(Q,Pi)));let D=C===!0||p.navigation.formMethod!=null&&vt(p.navigation.formMethod)&&((A=_.state)==null?void 0:A._isRedirect)!==!0;s&&(o=s,s=void 0),Pe||k===Ee.Pop||(k===Ee.Push?e.history.push(_,_.state):k===Ee.Replace&&e.history.replace(_,_.state));let te;if(k===Ee.Pop){let he=z.get(p.location.pathname);he&&he.has(_.pathname)?te={currentLocation:p.location,nextLocation:_}:z.has(_.pathname)&&(te={currentLocation:_,nextLocation:p.location})}else if(P){let he=z.get(p.location.pathname);he?he.add(_.pathname):(he=new Set([_.pathname]),z.set(p.location.pathname,he)),te={currentLocation:p.location,nextLocation:_}}fe(pe({},E,{actionData:H,loaderData:W,historyAction:k,location:_,initialized:!0,navigation:Rl,revalidation:"idle",restoreScrollPosition:Vd(_,E.matches||p.matches),preventScrollReset:D,blockers:F}),te),k=Ee.Pop,C=!1,P=!1,Pe=!1,qe=!1,kt=[],Wn=[]}async function jd(_,E){if(typeof _=="number"){e.history.go(_);return}let I=zu(p.location,p.matches,l,u.v7_prependBasename,_,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:A,submission:V,error:H}=ah(u.v7_normalizeFormMethod,!1,I,E),W=p.location,F=va(p.location,A,E&&E.state);F=pe({},F,e.history.encodeLocation(F));let D=E&&E.replace!=null?E.replace:void 0,te=Ee.Push;D===!0?te=Ee.Replace:D===!1||V!=null&&vt(V.formMethod)&&V.formAction===p.location.pathname+p.location.search&&(te=Ee.Replace);let he=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Q=Bd({currentLocation:W,nextLocation:F,historyAction:te});if(Q){Ya(Q,{state:"blocked",location:F,proceed(){Ya(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),jd(_,E)},reset(){let ne=new Map(p.blockers);ne.set(Q,Pi),fe({blockers:ne})}});return}return await Kn(te,F,{submission:V,pendingError:H,preventScrollReset:he,replace:E&&E.replace,enableViewTransition:E&&E.unstable_viewTransition})}function Sy(){if(qs(),fe({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Kn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Kn(k||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Kn(_,E,I){N&&N.abort(),N=null,k=_,Pe=(I&&I.startUninterruptedRevalidation)===!0,Oy(p.location,p.matches),C=(I&&I.preventScrollReset)===!0,P=(I&&I.enableViewTransition)===!0;let A=s||o,V=I&&I.overrideNavigation,H=Mr(A,E,l);if(!H){let ne=at(404,{pathname:E.pathname}),{matches:_e,route:Yn}=fh(A);Js(),yi(E,{matches:_e,loaderData:{},errors:{[Yn.id]:ne}});return}if(p.initialized&&!qe&&Ww(p.location,E)&&!(I&&I.submission&&vt(I.submission.formMethod))){yi(E,{matches:H});return}N=new AbortController;let W=Oi(e.history,E,N.signal,I&&I.submission),F,D;if(I&&I.pendingError)D={[Ur(H).route.id]:I.pendingError};else if(I&&I.submission&&vt(I.submission.formMethod)){let ne=await by(W,E,I.submission,H,{replace:I.replace});if(ne.shortCircuited)return;F=ne.pendingActionData,D=ne.pendingActionError,V=Ol(E,I.submission),W=new Request(W.url,{signal:W.signal})}let{shortCircuited:te,loaderData:he,errors:Q}=await Iy(W,E,H,V,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,F,D);te||(N=null,yi(E,pe({matches:H},F?{actionData:F}:{},{loaderData:he,errors:Q})))}async function by(_,E,I,A,V){V===void 0&&(V={}),qs();let H=Qw(E,I);fe({navigation:H});let W,F=Bu(A,E);if(!F.route.action&&!F.route.lazy)W={type:ke.error,error:at(405,{method:_.method,pathname:E.pathname,routeId:F.route.id})};else if(W=await Ri("action",_,F,A,a,i,l),_.signal.aborted)return{shortCircuited:!0};if(Gr(W)){let D;return V&&V.replace!=null?D=V.replace:D=W.location===p.location.pathname+p.location.search,await wi(p,W,{submission:I,replace:D}),{shortCircuited:!0}}if(qi(W)){let D=Ur(A,F.route.id);return(V&&V.replace)!==!0&&(k=Ee.Push),{pendingActionData:{},pendingActionError:{[D.route.id]:W.error}}}if(nr(W))throw at(400,{type:"defer-action"});return{pendingActionData:{[F.route.id]:W.data}}}async function Iy(_,E,I,A,V,H,W,F,D){let te=A||Ol(E,V),he=V||H||mh(te),Q=s||o,[ne,_e]=oh(e.history,p,I,he,E,qe,kt,Wn,B,M,Q,l,F,D);if(Js(Z=>!(I&&I.some(ht=>ht.route.id===Z))||ne&&ne.some(ht=>ht.route.id===Z)),Ot=++on,ne.length===0&&_e.length===0){let Z=Fd();return yi(E,pe({matches:I,loaderData:{},errors:D||null},F?{actionData:F}:{},Z?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!Pe){_e.forEach(ht=>{let un=p.fetchers.get(ht.key),rl=Ai(void 0,un?un.data:void 0);p.fetchers.set(ht.key,rl)});let Z=F||p.actionData;fe(pe({navigation:te},Z?Object.keys(Z).length===0?{actionData:null}:{actionData:Z}:{},_e.length>0?{fetchers:new Map(p.fetchers)}:{}))}_e.forEach(Z=>{ye.has(Z.key)&&ln(Z.key),Z.controller&&ye.set(Z.key,Z.controller)});let Yn=()=>_e.forEach(Z=>ln(Z.key));N&&N.signal.addEventListener("abort",Yn);let{results:Gn,loaderResults:xi,fetcherResults:Zs}=await Md(p.matches,I,ne,_e,_);if(_.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Yn),_e.forEach(Z=>ye.delete(Z.key));let jt=hh(Gn);if(jt){if(jt.idx>=ne.length){let Z=_e[jt.idx-ne.length].key;M.add(Z)}return await wi(p,jt.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Dt,errors:Ga}=ch(p,I,ne,xi,D,_e,Zs,X);X.forEach((Z,ht)=>{Z.subscribe(un=>{(un||Z.done)&&X.delete(ht)})});let el=Fd(),tl=zd(Ot),nl=el||tl||_e.length>0;return pe({loaderData:Dt,errors:Ga},nl?{fetchers:new Map(p.fetchers)}:{})}function Dd(_){return p.fetchers.get(_)||Uw}function Cy(_,E,I,A){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ye.has(_)&&ln(_);let V=s||o,H=zu(p.location,p.matches,l,u.v7_prependBasename,I,E,A==null?void 0:A.relative),W=Mr(V,H,l);if(!W){Ka(_,E,at(404,{pathname:H}));return}let{path:F,submission:D,error:te}=ah(u.v7_normalizeFormMethod,!0,H,A);if(te){Ka(_,E,te);return}let he=Bu(W,F);if(C=(A&&A.preventScrollReset)===!0,D&&vt(D.formMethod)){Ny(_,E,F,he,W,D);return}B.set(_,{routeId:E,path:F}),Ty(_,E,F,he,W,D)}async function Ny(_,E,I,A,V,H){if(qs(),B.delete(_),!A.route.action&&!A.route.lazy){let Ie=at(405,{method:H.formMethod,pathname:I,routeId:E});Ka(_,E,Ie);return}let W=p.fetchers.get(_),F=qw(H,W);p.fetchers.set(_,F),fe({fetchers:new Map(p.fetchers)});let D=new AbortController,te=Oi(e.history,I,D.signal,H);ye.set(_,D);let he=on,Q=await Ri("action",te,A,V,a,i,l);if(te.signal.aborted){ye.get(_)===D&&ye.delete(_);return}if(Gr(Q))if(ye.delete(_),Ot>he){let Ie=Sr(void 0);p.fetchers.set(_,Ie),fe({fetchers:new Map(p.fetchers)});return}else{M.add(_);let Ie=Ai(H);return p.fetchers.set(_,Ie),fe({fetchers:new Map(p.fetchers)}),wi(p,Q,{fetcherSubmission:H})}if(qi(Q)){Ka(_,E,Q.error);return}if(nr(Q))throw at(400,{type:"defer-action"});let ne=p.navigation.location||p.location,_e=Oi(e.history,ne,D.signal),Yn=s||o,Gn=p.navigation.state!=="idle"?Mr(Yn,p.navigation.location,l):p.matches;K(Gn,"Didn't find any matches after fetcher action");let xi=++on;R.set(_,xi);let Zs=Ai(H,Q.data);p.fetchers.set(_,Zs);let[jt,Dt]=oh(e.history,p,Gn,H,ne,qe,kt,Wn,B,M,Yn,l,{[A.route.id]:Q.data},void 0);Dt.filter(Ie=>Ie.key!==_).forEach(Ie=>{let _i=Ie.key,Wd=p.fetchers.get(_i),Ly=Ai(void 0,Wd?Wd.data:void 0);p.fetchers.set(_i,Ly),ye.has(_i)&&ln(_i),Ie.controller&&ye.set(_i,Ie.controller)}),fe({fetchers:new Map(p.fetchers)});let Ga=()=>Dt.forEach(Ie=>ln(Ie.key));D.signal.addEventListener("abort",Ga);let{results:el,loaderResults:tl,fetcherResults:nl}=await Md(p.matches,Gn,jt,Dt,_e);if(D.signal.aborted)return;D.signal.removeEventListener("abort",Ga),R.delete(_),ye.delete(_),Dt.forEach(Ie=>ye.delete(Ie.key));let Z=hh(el);if(Z){if(Z.idx>=jt.length){let Ie=Dt[Z.idx-jt.length].key;M.add(Ie)}return wi(p,Z.result)}let{loaderData:ht,errors:un}=ch(p,p.matches,jt,tl,void 0,Dt,nl,X);if(p.fetchers.has(_)){let Ie=Sr(Q.data);p.fetchers.set(_,Ie)}let rl=zd(xi);p.navigation.state==="loading"&&xi>Ot?(K(k,"Expected pending action"),N&&N.abort(),yi(p.navigation.location,{matches:Gn,loaderData:ht,errors:un,fetchers:new Map(p.fetchers)})):(fe(pe({errors:un,loaderData:dh(p.loaderData,ht,Gn,un)},rl||Dt.length>0?{fetchers:new Map(p.fetchers)}:{})),qe=!1)}async function Ty(_,E,I,A,V,H){let W=p.fetchers.get(_),F=Ai(H,W?W.data:void 0);p.fetchers.set(_,F),fe({fetchers:new Map(p.fetchers)});let D=new AbortController,te=Oi(e.history,I,D.signal);ye.set(_,D);let he=on,Q=await Ri("loader",te,A,V,a,i,l);if(nr(Q)&&(Q=await Hg(Q,te.signal,!0)||Q),ye.get(_)===D&&ye.delete(_),te.signal.aborted)return;if(Gr(Q))if(Ot>he){let _e=Sr(void 0);p.fetchers.set(_,_e),fe({fetchers:new Map(p.fetchers)});return}else{M.add(_),await wi(p,Q);return}if(qi(Q)){let _e=Ur(p.matches,E);p.fetchers.delete(_),fe({fetchers:new Map(p.fetchers),errors:{[_e.route.id]:Q.error}});return}K(!nr(Q),"Unhandled fetcher deferred data");let ne=Sr(Q.data);p.fetchers.set(_,ne),fe({fetchers:new Map(p.fetchers)})}async function wi(_,E,I){let{submission:A,fetcherSubmission:V,replace:H}=I===void 0?{}:I;E.revalidate&&(qe=!0);let W=va(_.location,E.location,{_isRedirect:!0});if(K(W,"Expected a location on the redirect navigation"),n){let ne=!1;if(E.reloadDocument)ne=!0;else if(Fg.test(E.location)){const _e=e.history.createURL(E.location);ne=_e.origin!==t.location.origin||fi(_e.pathname,l)==null}if(ne){H?t.location.replace(E.location):t.location.assign(E.location);return}}N=null;let F=H===!0?Ee.Replace:Ee.Push,{formMethod:D,formAction:te,formEncType:he}=_.navigation;!A&&!V&&D&&te&&he&&(A=mh(_.navigation));let Q=A||V;if(Mw.has(E.status)&&Q&&vt(Q.formMethod))await Kn(F,W,{submission:pe({},Q,{formAction:E.location}),preventScrollReset:C});else{let ne=Ol(W,A);await Kn(F,W,{overrideNavigation:ne,fetcherSubmission:V,preventScrollReset:C})}}async function Md(_,E,I,A,V){let H=await Promise.all([...I.map(D=>Ri("loader",V,D,E,a,i,l)),...A.map(D=>D.matches&&D.match&&D.controller?Ri("loader",Oi(e.history,D.path,D.controller.signal),D.match,D.matches,a,i,l):{type:ke.error,error:at(404,{pathname:D.path})})]),W=H.slice(0,I.length),F=H.slice(I.length);return await Promise.all([ph(_,I,W,W.map(()=>V.signal),!1,p.loaderData),ph(_,A.map(D=>D.match),F,A.map(D=>D.controller?D.controller.signal:null),!0)]),{results:H,loaderResults:W,fetcherResults:F}}function qs(){qe=!0,kt.push(...Js()),B.forEach((_,E)=>{ye.has(E)&&(Wn.push(E),ln(E))})}function Ka(_,E,I){let A=Ur(p.matches,E);Xs(_),fe({errors:{[A.route.id]:I},fetchers:new Map(p.fetchers)})}function Xs(_){let E=p.fetchers.get(_);ye.has(_)&&!(E&&E.state==="loading"&&R.has(_))&&ln(_),B.delete(_),R.delete(_),M.delete(_),p.fetchers.delete(_)}function ln(_){let E=ye.get(_);K(E,"Expected fetch controller: "+_),E.abort(),ye.delete(_)}function Ud(_){for(let E of _){let I=Dd(E),A=Sr(I.data);p.fetchers.set(E,A)}}function Fd(){let _=[],E=!1;for(let I of M){let A=p.fetchers.get(I);K(A,"Expected fetcher: "+I),A.state==="loading"&&(M.delete(I),_.push(I),E=!0)}return Ud(_),E}function zd(_){let E=[];for(let[I,A]of R)if(A<_){let V=p.fetchers.get(I);K(V,"Expected fetcher: "+I),V.state==="loading"&&(ln(I),R.delete(I),E.push(I))}return Ud(E),E.length>0}function Py(_,E){let I=p.blockers.get(_)||Pi;return ae.get(_)!==E&&ae.set(_,E),I}function $d(_){p.blockers.delete(_),ae.delete(_)}function Ya(_,E){let I=p.blockers.get(_)||Pi;K(I.state==="unblocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="proceeding"||I.state==="blocked"&&E.state==="unblocked"||I.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+E.state);let A=new Map(p.blockers);A.set(_,E),fe({blockers:A})}function Bd(_){let{currentLocation:E,nextLocation:I,historyAction:A}=_;if(ae.size===0)return;ae.size>1&&pr(!1,"A router only supports one blocker at a time");let V=Array.from(ae.entries()),[H,W]=V[V.length-1],F=p.blockers.get(H);if(!(F&&F.state==="proceeding")&&W({currentLocation:E,nextLocation:I,historyAction:A}))return H}function Js(_){let E=[];return X.forEach((I,A)=>{(!_||_(A))&&(I.cancel(),E.push(A),X.delete(A))}),E}function Ry(_,E,I){if(g=_,y=E,w=I||null,!x&&p.navigation===Rl){x=!0;let A=Vd(p.location,p.matches);A!=null&&fe({restoreScrollPosition:A})}return()=>{g=null,y=null,w=null}}function Hd(_,E){return w&&w(_,E.map(A=>hw(A,p.loaderData)))||_.key}function Oy(_,E){if(g&&y){let I=Hd(_,E);g[I]=y()}}function Vd(_,E){if(g){let I=Hd(_,E),A=g[I];if(typeof A=="number")return A}return null}function Ay(_){a={},s=Fu(_,i,void 0,a)}return v={get basename(){return l},get state(){return p},get routes(){return o},get window(){return t},initialize:At,subscribe:Lt,enableScrollRestoration:Ry,navigate:jd,fetch:Cy,revalidate:Sy,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:Dd,deleteFetcher:Xs,dispose:vi,getBlocker:Py,deleteBlocker:$d,_internalFetchControllers:ye,_internalActiveDeferreds:X,_internalSetRoutes:Ay},v}function $w(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function zu(e,t,n,r,i,a,o){let s,l;if(a!=null&&o!=="path"){s=[];for(let d of t)if(s.push(d),d.route.id===a){l=d;break}}else s=t,l=t[t.length-1];let u=zs(i||".",La(s).map(d=>d.pathnameBase),fi(e.pathname,n)||e.pathname,o==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!od(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Wt([n,u.pathname])),mr(u)}function ah(e,t,n,r){if(!r||!$w(r))return{path:n};if(r.formMethod&&!Gw(r.formMethod))return{path:n,error:at(405,{method:r.formMethod})};let i=()=>({path:n,error:at(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),s=Bg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(o))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,y)=>{let[x,S]=y;return""+w+x+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!vt(o))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}K(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=$u(r.formData),u=r.formData;else if(r.body instanceof FormData)l=$u(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=uh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=uh(l)}catch{return i()}let d={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(vt(d.formMethod))return{path:n,submission:d};let f=tn(n);return t&&f.search&&od(f.search)&&l.append("index",""),f.search="?"+l,{path:mr(f),submission:d}}function Bw(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function oh(e,t,n,r,i,a,o,s,l,u,d,f,g,w){let y=w?Object.values(w)[0]:g?Object.values(g)[0]:void 0,x=e.createURL(t.location),S=e.createURL(i),m=w?Object.keys(w)[0]:void 0,v=Bw(n,m).filter((k,C)=>{if(k.route.lazy)return!0;if(k.route.loader==null)return!1;if(Hw(t.loaderData,t.matches[C],k)||o.some(z=>z===k.route.id))return!0;let N=t.matches[C],P=k;return sh(k,pe({currentUrl:x,currentParams:N.params,nextUrl:S,nextParams:P.params},r,{actionResult:y,defaultShouldRevalidate:a||x.pathname+x.search===S.pathname+S.search||x.search!==S.search||$g(N,P)}))}),p=[];return l.forEach((k,C)=>{if(!n.some(Pe=>Pe.route.id===k.routeId))return;let N=Mr(d,k.path,f);if(!N){p.push({key:C,routeId:k.routeId,path:k.path,matches:null,match:null,controller:null});return}let P=t.fetchers.get(C),z=Bu(N,k.path),U=!1;u.has(C)?U=!1:s.includes(C)?U=!0:P&&P.state!=="idle"&&P.data===void 0?U=a:U=sh(z,pe({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:a})),U&&p.push({key:C,routeId:k.routeId,path:k.path,matches:N,match:z,controller:new AbortController})}),[v,p]}function Hw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function $g(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function sh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function lh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];K(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";pr(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!dw.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,pe({},t(i),{lazy:void 0}))}async function Ri(e,t,n,r,i,a,o,s){s===void 0&&(s={});let l,u,d,f=y=>{let x,S=new Promise((m,h)=>x=h);return d=()=>x(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:s.requestContext}),S])};try{let y=n.route[e];if(n.route.lazy)if(y){let x,S=await Promise.all([f(y).catch(m=>{x=m}),lh(n.route,a,i)]);if(x)throw x;u=S[0]}else if(await lh(n.route,a,i),y=n.route[e],y)u=await f(y);else if(e==="action"){let x=new URL(t.url),S=x.pathname+x.search;throw at(405,{method:t.method,pathname:S,routeId:n.route.id})}else return{type:ke.data,data:void 0};else if(y)u=await f(y);else{let x=new URL(t.url),S=x.pathname+x.search;throw at(404,{pathname:S})}K(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){l=ke.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(Yw(u)){let y=u.status;if(Dw.has(y)){let m=u.headers.get("Location");if(K(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Fg.test(m))m=zu(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!s.isStaticRequest){let h=new URL(t.url),v=m.startsWith("//")?new URL(h.protocol+m):new URL(m),p=fi(v.pathname,o)!=null;v.origin===h.origin&&p&&(m=v.pathname+v.search+v.hash)}if(s.isStaticRequest)throw u.headers.set("Location",m),u;return{type:ke.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===ke.error?ke.error:ke.data,response:u};let x,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?x=await u.json():x=await u.text(),l===ke.error?{type:l,error:new ad(y,u.statusText,x),headers:u.headers}:{type:ke.data,data:x,statusCode:u.status,headers:u.headers}}if(l===ke.error)return{type:l,error:u};if(Kw(u)){var g,w;return{type:ke.deferred,deferredData:u,statusCode:(g=u.init)==null?void 0:g.status,headers:((w=u.init)==null?void 0:w.headers)&&new Headers(u.init.headers)}}return{type:ke.data,data:u}}function Oi(e,t,n,r){let i=e.createURL(Bg(t)).toString(),a={signal:n};if(r&&vt(r.formMethod)){let{formMethod:o,formEncType:s}=r;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(r.json)):s==="text/plain"?a.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?a.body=$u(r.formData):a.body=r.formData}return new Request(i,a)}function $u(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function uh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Vw(e,t,n,r,i){let a={},o=null,s,l=!1,u={};return n.forEach((d,f)=>{let g=t[f].route.id;if(K(!Gr(d),"Cannot handle redirect results in processLoaderData"),qi(d)){let w=Ur(e,g),y=d.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[w.route.id]==null&&(o[w.route.id]=y),a[g]=void 0,l||(l=!0,s=Mg(d.error)?d.error.status:500),d.headers&&(u[g]=d.headers)}else nr(d)?(i.set(g,d.deferredData),a[g]=d.deferredData.data):a[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(s=d.statusCode),d.headers&&(u[g]=d.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:u}}function ch(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=Vw(t,n,r,i,s);for(let d=0;d<a.length;d++){let{key:f,match:g,controller:w}=a[d];K(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let y=o[d];if(!(w&&w.signal.aborted))if(qi(y)){let x=Ur(e.matches,g==null?void 0:g.route.id);u&&u[x.route.id]||(u=pe({},u,{[x.route.id]:y.error})),e.fetchers.delete(f)}else if(Gr(y))K(!1,"Unhandled fetcher revalidation redirect");else if(nr(y))K(!1,"Unhandled fetcher deferred data");else{let x=Sr(y.data);e.fetchers.set(f,x)}}return{loaderData:l,errors:u}}function dh(e,t,n,r){let i=pe({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Ur(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function fh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function at(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new ad(e||500,o,new Error(s),!0)}function hh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Gr(n))return{result:n,idx:t}}}function Bg(e){let t=typeof e=="string"?tn(e):e;return mr(pe({},t,{hash:""}))}function Ww(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function nr(e){return e.type===ke.deferred}function qi(e){return e.type===ke.error}function Gr(e){return(e&&e.type)===ke.redirect}function Kw(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Yw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Gw(e){return jw.has(e.toLowerCase())}function vt(e){return Aw.has(e.toLowerCase())}async function ph(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),d=u!=null&&!$g(u,l)&&(a&&a[l.route.id])!==void 0;if(nr(s)&&(i||d)){let f=r[o];K(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Hg(s,f,i).then(g=>{g&&(n[o]=g||n[o])})}}}async function Hg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ke.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:e.deferredData.data}}}function od(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Bu(e,t){let n=typeof t=="string"?tn(t).search:t.search;if(e[e.length-1].route.index&&od(n||""))return e[e.length-1];let r=La(e);return r[r.length-1]}function mh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ol(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Qw(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ai(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function qw(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Sr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Xw(e,t){try{let n=e.sessionStorage.getItem(zg);if(n){let r=JSON.parse(n);for(let[i,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function Jw(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(zg,JSON.stringify(n))}catch(r){pr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}const $s=b.createContext(null),Vg=b.createContext(null),hi=b.createContext(null),Bs=b.createContext(null),nn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Wg=b.createContext(null);function Zw(e,t){let{relative:n}=t===void 0?{}:t;pi()||K(!1);let{basename:r,navigator:i}=b.useContext(hi),{hash:a,pathname:o,search:s}=Yg(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function pi(){return b.useContext(Bs)!=null}function ja(){return pi()||K(!1),b.useContext(Bs).location}function Kg(e){b.useContext(hi).static||b.useLayoutEffect(e)}function sd(){let{isDataRoute:e}=b.useContext(nn);return e?fx():ex()}function ex(){pi()||K(!1);let e=b.useContext($s),{basename:t,navigator:n}=b.useContext(hi),{matches:r}=b.useContext(nn),{pathname:i}=ja(),a=JSON.stringify(La(r).map(l=>l.pathnameBase)),o=b.useRef(!1);return Kg(()=>{o.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=zs(l,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Wt([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,a,i,e])}const tx=b.createContext(null);function nx(e){let t=b.useContext(nn).outlet;return t&&b.createElement(tx.Provider,{value:e},t)}function Yg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(nn),{pathname:i}=ja(),a=JSON.stringify(La(r).map(o=>o.pathnameBase));return b.useMemo(()=>zs(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function rx(e,t,n){pi()||K(!1);let{navigator:r}=b.useContext(hi),{matches:i}=b.useContext(nn),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=ja(),u;if(t){var d;let x=typeof t=="string"?tn(t):t;s==="/"||(d=x.pathname)!=null&&d.startsWith(s)||K(!1),u=x}else u=l;let f=u.pathname||"/",g=s==="/"?f:f.slice(s.length)||"/",w=Mr(e,{pathname:g}),y=lx(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:Wt([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Wt([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?b.createElement(Bs.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ee.Pop}},y):y}function ix(){let e=dx(),t=Mg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}const ax=b.createElement(ix,null);class ox extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(nn.Provider,{value:this.props.routeContext},b.createElement(Wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sx(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext($s);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(nn.Provider,{value:t},r)}function lx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||K(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||ax);let g=t.concat(a.slice(0,u+1)),w=()=>{let y;return d?y=f:l.route.Component?y=b.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,b.createElement(sx,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(ox,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:w(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):w()},null)}var Gg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gg||{}),oi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oi||{});function ux(e){let t=b.useContext($s);return t||K(!1),t}function Qg(e){let t=b.useContext(Vg);return t||K(!1),t}function cx(e){let t=b.useContext(nn);return t||K(!1),t}function ld(e){let t=cx(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function ud(){let e=Qg(oi.UseLoaderData),t=ld(oi.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function dx(){var e;let t=b.useContext(Wg),n=Qg(oi.UseRouteError),r=ld(oi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fx(){let{router:e}=ux(Gg.UseNavigateStable),t=ld(oi.UseNavigateStable),n=b.useRef(!1);return Kg(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ds({fromRouteId:t},a)))},[e,t])}function hx(e){let{to:t,replace:n,state:r,relative:i}=e;pi()||K(!1);let{matches:a}=b.useContext(nn),{pathname:o}=ja(),s=sd(),l=zs(t,La(a).map(d=>d.pathnameBase),o,i==="path"),u=JSON.stringify(l);return b.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function px(e){return nx(e.context)}function mx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ee.Pop,navigator:a,static:o=!1}=e;pi()&&K(!1);let s=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=tn(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:w="default"}=r,y=b.useMemo(()=>{let x=fi(u,s);return x==null?null:{location:{pathname:x,search:d,hash:f,state:g,key:w},navigationType:i}},[s,u,d,f,g,w,i]);return y==null?null:b.createElement(hi.Provider,{value:l},b.createElement(Bs.Provider,{children:n,value:y}))}new Promise(()=>{});function gx(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}function vx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wx(e,t){return e.button===0&&(!t||t==="_self")&&!yx(e)}const xx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function _x(e,t){return zw({basename:t==null?void 0:t.basename,future:ya({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:lw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Ex(),routes:e,mapRouteProperties:gx,window:t==null?void 0:t.window}).initialize()}function Ex(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ya({},t,{errors:kx(t.errors)})),t}function kx(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new ad(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const Sx=b.createContext({isTransitioning:!1}),bx="startTransition",gh=Xy[bx];function Ix(e){gh?gh(e):e()}let Cx=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Nx(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=b.useState(n.state),[o,s]=b.useState(),[l,u]=b.useState({isTransitioning:!1}),[d,f]=b.useState(),[g,w]=b.useState(),[y,x]=b.useState(),{v7_startTransition:S}=r||{},m=b.useCallback(C=>{S?Ix(C):C()},[S]),h=b.useCallback((C,N)=>{let{unstable_viewTransitionOpts:P}=N;!P||n.window==null||typeof n.window.document.startViewTransition!="function"?m(()=>a(C)):g&&d?(d.resolve(),g.skipTransition(),x({state:C,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(s(C),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[m,g,d,n.window]);b.useLayoutEffect(()=>n.subscribe(h),[n,h]),b.useEffect(()=>{l.isTransitioning&&f(new Cx)},[l.isTransitioning]),b.useEffect(()=>{if(d&&o&&n.window){let C=o,N=d.promise,P=n.window.document.startViewTransition(async()=>{m(()=>a(C)),await N});P.finished.finally(()=>{f(void 0),w(void 0),s(void 0),u({isTransitioning:!1})}),w(P)}},[m,o,d,n.window]),b.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,g,i.location,o]),b.useEffect(()=>{!l.isTransitioning&&y&&(s(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),x(void 0))},[l.isTransitioning,y]);let v=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,N,P)=>n.navigate(C,{state:N,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(C,N,P)=>n.navigate(C,{replace:!0,state:N,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[n]),p=n.basename||"/",k=b.useMemo(()=>({router:n,navigator:v,static:!1,basename:p}),[n,v,p]);return b.createElement(b.Fragment,null,b.createElement($s.Provider,{value:k},b.createElement(Vg.Provider,{value:i},b.createElement(Sx.Provider,{value:l},b.createElement(mx,{basename:p,location:i.location,navigationType:i.historyAction,navigator:v},i.initialized?b.createElement(Tx,{routes:n.routes,state:i}):t)))),null)}function Tx(e){let{routes:t,state:n}=e;return rx(t,void 0,n)}const Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ee=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,g=vx(t,xx),{basename:w}=b.useContext(hi),y,x=!1;if(typeof u=="string"&&Rx.test(u)&&(y=u,Px))try{let v=new URL(window.location.href),p=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=fi(p.pathname,w);p.origin===v.origin&&k!=null?u=k+p.search+p.hash:x=!0}catch{}let S=Zw(u,{relative:i}),m=Ox(u,{replace:o,state:s,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function h(v){r&&r(v),v.defaultPrevented||m(v)}return b.createElement("a",ya({},g,{href:y||S,onClick:x||a?r:h,ref:n,target:l}))});var vh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vh||(vh={}));var yh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yh||(yh={}));function Ox(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=sd(),u=ja(),d=Yg(e,{relative:o});return b.useCallback(f=>{if(wx(f,n)){f.preventDefault();let g=r!==void 0?r:mr(u)===mr(d);l(e,{replace:g,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,d,r,i,n,e,a,o,s])}const qg="/assets/food-9cea8349.jpg";function wh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wh(Object(n),!0).forEach(function(r){Te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function Ax(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lx(e,t,n){return t&&xh(e.prototype,t),n&&xh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cd(e,t){return Dx(e)||Ux(e,t)||Xg(e,t)||zx()}function Da(e){return jx(e)||Mx(e)||Xg(e)||Fx()}function jx(e){if(Array.isArray(e))return Hu(e)}function Dx(e){if(Array.isArray(e))return e}function Mx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ux(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Xg(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _h=function(){},dd={},Jg={},Zg=null,ev={mark:_h,measure:_h};try{typeof window<"u"&&(dd=window),typeof document<"u"&&(Jg=document),typeof MutationObserver<"u"&&(Zg=MutationObserver),typeof performance<"u"&&(ev=performance)}catch{}var $x=dd.navigator||{},Eh=$x.userAgent,kh=Eh===void 0?"":Eh,jn=dd,ce=Jg,Sh=Zg,ho=ev;jn.document;var rn=!!ce.documentElement&&!!ce.head&&typeof ce.addEventListener=="function"&&typeof ce.createElement=="function",tv=~kh.indexOf("MSIE")||~kh.indexOf("Trident/"),po,mo,go,vo,yo,qt="___FONT_AWESOME___",Vu=16,nv="fa",rv="svg-inline--fa",gr="data-fa-i2svg",Wu="data-fa-pseudo-element",Bx="data-fa-pseudo-element-pending",fd="data-prefix",hd="data-icon",bh="fontawesome-i2svg",Hx="async",Vx=["HTML","HEAD","STYLE","SCRIPT"],iv=function(){try{return!0}catch{return!1}}(),le="classic",xe="sharp",pd=[le,xe];function Ma(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var wa=Ma((po={},Te(po,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Te(po,xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),po)),xa=Ma((mo={},Te(mo,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Te(mo,xe,{solid:"fass",regular:"fasr",light:"fasl"}),mo)),_a=Ma((go={},Te(go,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Te(go,xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),go)),Wx=Ma((vo={},Te(vo,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Te(vo,xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),vo)),Kx=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,av="fa-layers-text",Yx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Gx=Ma((yo={},Te(yo,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Te(yo,xe,{900:"fass",400:"fasr",300:"fasl"}),yo)),ov=[1,2,3,4,5,6,7,8,9,10],Qx=ov.concat([11,12,13,14,15,16,17,18,19,20]),qx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ea=new Set;Object.keys(xa[le]).map(Ea.add.bind(Ea));Object.keys(xa[xe]).map(Ea.add.bind(Ea));var Xx=[].concat(pd,Da(Ea),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rr.GROUP,rr.SWAP_OPACITY,rr.PRIMARY,rr.SECONDARY]).concat(ov.map(function(e){return"".concat(e,"x")})).concat(Qx.map(function(e){return"w-".concat(e)})),Xi=jn.FontAwesomeConfig||{};function Jx(e){var t=ce.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ce&&typeof ce.querySelector=="function"){var e_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];e_.forEach(function(e){var t=cd(e,2),n=t[0],r=t[1],i=Zx(Jx(n));i!=null&&(Xi[r]=i)})}var sv={styleDefault:"solid",familyDefault:"classic",cssPrefix:nv,replacementClass:rv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);var si=O(O({},sv),Xi);si.autoReplaceSvg||(si.observeMutations=!1);var j={};Object.keys(sv).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){si[e]=n,Ji.forEach(function(r){return r(j)})},get:function(){return si[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(t){si.cssPrefix=t,Ji.forEach(function(n){return n(j)})},get:function(){return si.cssPrefix}});jn.FontAwesomeConfig=j;var Ji=[];function t_(e){return Ji.push(e),function(){Ji.splice(Ji.indexOf(e),1)}}var dn=Vu,Ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n_(e){if(!(!e||!rn)){var t=ce.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ce.head.insertBefore(t,r),e}}var r_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ka(){for(var e=12,t="";e-- >0;)t+=r_[Math.random()*62|0];return t}function mi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function md(e){return e.classList?mi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function lv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(lv(e[n]),'" ')},"").trim()}function Hs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gd(e){return e.size!==Ct.size||e.x!==Ct.x||e.y!==Ct.y||e.rotate!==Ct.rotate||e.flipX||e.flipY}function a_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function o_(e){var t=e.transform,n=e.width,r=n===void 0?Vu:n,i=e.height,a=i===void 0?Vu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&tv?l+="translate(".concat(t.x/dn-r/2,"em, ").concat(t.y/dn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/dn,"em), calc(-50% + ").concat(t.y/dn,"em)) "):l+="translate(".concat(t.x/dn,"em, ").concat(t.y/dn,"em) "),l+="scale(".concat(t.size/dn*(t.flipX?-1:1),", ").concat(t.size/dn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var s_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function uv(){var e=nv,t=rv,n=j.cssPrefix,r=j.replacementClass,i=s_;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ih=!1;function Al(){j.autoAddCss&&!Ih&&(n_(uv()),Ih=!0)}var l_={mixout:function(){return{dom:{css:uv,insertCss:Al}}},hooks:function(){return{beforeDOMElementCreation:function(){Al()},beforeI2svg:function(){Al()}}}},Xt=jn||{};Xt[qt]||(Xt[qt]={});Xt[qt].styles||(Xt[qt].styles={});Xt[qt].hooks||(Xt[qt].hooks={});Xt[qt].shims||(Xt[qt].shims=[]);var wt=Xt[qt],cv=[],u_=function e(){ce.removeEventListener("DOMContentLoaded",e),hs=1,cv.map(function(t){return t()})},hs=!1;rn&&(hs=(ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ce.readyState),hs||ce.addEventListener("DOMContentLoaded",u_));function c_(e){rn&&(hs?setTimeout(e,0):cv.push(e))}function Ua(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?lv(e):"<".concat(t," ").concat(i_(r),">").concat(a.map(Ua).join(""),"</").concat(t,">")}function Ch(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var d_=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Ll=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?d_(n,i):n,l,u,d;for(r===void 0?(l=1,d=t[a[0]]):(l=0,d=r);l<o;l++)u=a[l],d=s(d,t[u],u,t);return d};function f_(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ku(e){var t=f_(e);return t.length===1?t[0].toString(16):null}function h_(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Nh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Nh(t);typeof wt.hooks.addPack=="function"&&!i?wt.hooks.addPack(e,Nh(t)):wt.styles[e]=O(O({},wt.styles[e]||{}),a),e==="fas"&&Yu("fa",t)}var wo,xo,_o,Fr=wt.styles,p_=wt.shims,m_=(wo={},Te(wo,le,Object.values(_a[le])),Te(wo,xe,Object.values(_a[xe])),wo),vd=null,dv={},fv={},hv={},pv={},mv={},g_=(xo={},Te(xo,le,Object.keys(wa[le])),Te(xo,xe,Object.keys(wa[xe])),xo);function v_(e){return~Xx.indexOf(e)}function y_(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!v_(i)?i:null}var gv=function(){var t=function(a){return Ll(Fr,function(o,s,l){return o[l]=Ll(s,a,{}),o},{})};dv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),fv=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),mv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Fr||j.autoFetchSvg,r=Ll(p_,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});hv=r.names,pv=r.unicodes,vd=Vs(j.styleDefault,{family:j.familyDefault})};t_(function(e){vd=Vs(e.styleDefault,{family:j.familyDefault})});gv();function yd(e,t){return(dv[e]||{})[t]}function w_(e,t){return(fv[e]||{})[t]}function ir(e,t){return(mv[e]||{})[t]}function vv(e){return hv[e]||{prefix:null,iconName:null}}function x_(e){var t=pv[e],n=yd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dn(){return vd}var wd=function(){return{prefix:null,iconName:null,rest:[]}};function Vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=wa[r][e],a=xa[r][e]||xa[r][i],o=e in wt.styles?e:null;return a||o||null}var Th=(_o={},Te(_o,le,Object.keys(_a[le])),Te(_o,xe,Object.keys(_a[xe])),_o);function Ws(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Te(t,le,"".concat(j.cssPrefix,"-").concat(le)),Te(t,xe,"".concat(j.cssPrefix,"-").concat(xe)),t),o=null,s=le;(e.includes(a[le])||e.some(function(u){return Th[le].includes(u)}))&&(s=le),(e.includes(a[xe])||e.some(function(u){return Th[xe].includes(u)}))&&(s=xe);var l=e.reduce(function(u,d){var f=y_(j.cssPrefix,d);if(Fr[d]?(d=m_[s].includes(d)?Wx[s][d]:d,o=d,u.prefix=d):g_[s].indexOf(d)>-1?(o=d,u.prefix=Vs(d,{family:s})):f?u.iconName=f:d!==j.replacementClass&&d!==a[le]&&d!==a[xe]&&u.rest.push(d),!i&&u.prefix&&u.iconName){var g=o==="fa"?vv(u.iconName):{},w=ir(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||w||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!Fr.far&&Fr.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},wd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===xe&&(Fr.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=ir(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Dn()||"fas"),l}var __=function(){function e(){Ax(this,e),this.definitions={}}return Lx(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Yu(s,o[s]);var l=_a[le][s];l&&Yu(l,o[s]),gv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Ph=[],zr={},Qr={},E_=Object.keys(Qr);function k_(e,t){var n=t.mixoutsTo;return Ph=e,zr={},Object.keys(Qr).forEach(function(r){E_.indexOf(r)===-1&&delete Qr[r]}),Ph.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),fs(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){zr[o]||(zr[o]=[]),zr[o].push(a[o])})}r.provides&&r.provides(Qr)}),n}function Gu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=zr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=zr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Jt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Qr[e]?Qr[e].apply(null,t):void 0}function Qu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Dn();if(t)return t=ir(n,t)||t,Ch(yv.definitions,n,t)||Ch(wt.styles,n,t)}var yv=new __,S_=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,vr("noAuto")},b_={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rn?(vr("beforeI2svg",t),Jt("pseudoElements2svg",t),Jt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,c_(function(){C_({autoReplaceSvgRoot:n}),vr("watch",t)})}},I_={icon:function(t){if(t===null)return null;if(fs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ir(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vs(t[0]);return{prefix:r,iconName:ir(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.cssPrefix,"-"))>-1||t.match(Kx))){var i=Ws(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Dn(),iconName:ir(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Dn();return{prefix:a,iconName:ir(a,t)||t}}}},it={noAuto:S_,config:j,dom:b_,parse:I_,library:yv,findIconDefinition:Qu,toHtml:Ua},C_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ce:n;(Object.keys(wt.styles).length>0||j.autoFetchSvg)&&rn&&j.autoReplaceSvg&&it.dom.i2svg({node:r})};function Ks(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ua(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rn){var r=ce.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function N_(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gd(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Hs(O(O({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function T_(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(j.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function xd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,f=e.extra,g=e.watchable,w=g===void 0?!1:g,y=r.found?r:n,x=y.width,S=y.height,m=i==="fak",h=[j.replacementClass,a?"".concat(j.cssPrefix,"-").concat(a):""].filter(function(z){return f.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(f.classes).join(" "),v={children:[],attributes:O(O({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(S)})},p=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/S*16*.0625,"em")}:{};w&&(v.attributes[gr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(d||ka())},children:[l]}),delete v.attributes.title);var k=O(O({},v),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},p),f.styles)}),C=r.found&&n.found?Jt("generateAbstractMask",k)||{children:[],attributes:{}}:Jt("generateAbstractIcon",k)||{children:[],attributes:{}},N=C.children,P=C.attributes;return k.children=N,k.attributes=P,s?T_(k):N_(k)}function Rh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[gr]="");var d=O({},o.styles);gd(i)&&(d.transform=o_({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=Hs(d);f.length>0&&(u.style=f);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function P_(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Hs(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jl=wt.styles;function qu(e){var t=e[0],n=e[1],r=e.slice(4),i=cd(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(rr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(rr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(rr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var R_={found:!1,width:512,height:512};function O_(e,t){!iv&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xu(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=Dn()),new Promise(function(r,i){if(Jt("missingIconAbstract"),n==="fa"){var a=vv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&jl[t]&&jl[t][e]){var o=jl[t][e];return r(qu(o))}O_(e,t),r(O(O({},R_),{},{icon:j.showMissingIcons&&e?Jt("missingIconAbstract")||{}:{}}))})}var Oh=function(){},Ju=j.measurePerformance&&ho&&ho.mark&&ho.measure?ho:{mark:Oh,measure:Oh},Ui='FA "6.4.2"',A_=function(t){return Ju.mark("".concat(Ui," ").concat(t," begins")),function(){return wv(t)}},wv=function(t){Ju.mark("".concat(Ui," ").concat(t," ends")),Ju.measure("".concat(Ui," ").concat(t),"".concat(Ui," ").concat(t," begins"),"".concat(Ui," ").concat(t," ends"))},_d={begin:A_,end:wv},jo=function(){};function Ah(e){var t=e.getAttribute?e.getAttribute(gr):null;return typeof t=="string"}function L_(e){var t=e.getAttribute?e.getAttribute(fd):null,n=e.getAttribute?e.getAttribute(hd):null;return t&&n}function j_(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function D_(){if(j.autoReplaceSvg===!0)return Do.replace;var e=Do[j.autoReplaceSvg];return e||Do.replace}function M_(e){return ce.createElementNS("http://www.w3.org/2000/svg",e)}function U_(e){return ce.createElement(e)}function xv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?M_:U_:n;if(typeof e=="string")return ce.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(xv(o,{ceFn:r}))}),i}function F_(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Do={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(xv(i),n)}),n.getAttribute(gr)===null&&j.keepOriginalSource){var r=ce.createComment(F_(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~md(n).indexOf(j.replacementClass))return Do.replace(t);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ua(s)}).join(`
`);n.setAttribute(gr,""),n.innerHTML=o}};function Lh(e){e()}function _v(e,t){var n=typeof t=="function"?t:jo;if(e.length===0)n();else{var r=Lh;j.mutateApproach===Hx&&(r=jn.requestAnimationFrame||Lh),r(function(){var i=D_(),a=_d.begin("mutate");e.map(i),a(),n()})}}var Ed=!1;function Ev(){Ed=!0}function Zu(){Ed=!1}var ps=null;function jh(e){if(Sh&&j.observeMutations){var t=e.treeCallback,n=t===void 0?jo:t,r=e.nodeCallback,i=r===void 0?jo:r,a=e.pseudoElementsCallback,o=a===void 0?jo:a,s=e.observeMutationsRoot,l=s===void 0?ce:s;ps=new Sh(function(u){if(!Ed){var d=Dn();mi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ah(f.addedNodes[0])&&(j.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Ah(f.target)&&~qx.indexOf(f.attributeName))if(f.attributeName==="class"&&L_(f.target)){var g=Ws(md(f.target)),w=g.prefix,y=g.iconName;f.target.setAttribute(fd,w||d),y&&f.target.setAttribute(hd,y)}else j_(f.target)&&i(f.target)})}}),rn&&ps.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z_(){ps&&ps.disconnect()}function $_(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function B_(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ws(md(e));return i.prefix||(i.prefix=Dn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=w_(i.prefix,e.innerText)||yd(i.prefix,Ku(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function H_(e){var t=mi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||ka()):(t["aria-hidden"]="true",t.focusable="false")),t}function V_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=B_(e),r=n.iconName,i=n.prefix,a=n.rest,o=H_(e),s=Gu("parseNodeAttributes",{},e),l=t.styleParser?$_(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var W_=wt.styles;function kv(e){var t=j.autoReplaceSvg==="nest"?Dh(e,{styleParser:!1}):Dh(e);return~t.extra.classes.indexOf(av)?Jt("generateLayersText",e,t):Jt("generateSvgReplacementMutation",e,t)}var Mn=new Set;pd.map(function(e){Mn.add("fa-".concat(e))});Object.keys(wa[le]).map(Mn.add.bind(Mn));Object.keys(wa[xe]).map(Mn.add.bind(Mn));Mn=Da(Mn);function Mh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rn)return Promise.resolve();var n=ce.documentElement.classList,r=function(f){return n.add("".concat(bh,"-").concat(f))},i=function(f){return n.remove("".concat(bh,"-").concat(f))},a=j.autoFetchSvg?Mn:pd.map(function(d){return"fa-".concat(d)}).concat(Object.keys(W_));a.includes("fa")||a.push("fa");var o=[".".concat(av,":not([").concat(gr,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(gr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=mi(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=_d.begin("onTree"),u=s.reduce(function(d,f){try{var g=kv(f);g&&d.push(g)}catch(w){iv||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,f){Promise.all(u).then(function(g){_v(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),f(g)})})}function K_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kv(e).then(function(n){n&&_v([n],t)})}function Y_(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Qu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Qu(i||{})),e(r,O(O({},n),{},{mask:i}))}}var G_=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ct:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,f=n.title,g=f===void 0?null:f,w=n.titleId,y=w===void 0?null:w,x=n.classes,S=x===void 0?[]:x,m=n.attributes,h=m===void 0?{}:m,v=n.styles,p=v===void 0?{}:v;if(t){var k=t.prefix,C=t.iconName,N=t.icon;return Ks(O({type:"icon"},t),function(){return vr("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(g?h["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(y||ka()):(h["aria-hidden"]="true",h.focusable="false")),xd({icons:{main:qu(N),mask:l?qu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:O(O({},Ct),i),symbol:o,title:g,maskId:d,titleId:y,extra:{attributes:h,styles:p,classes:S}})})}},Q_={mixout:function(){return{icon:Y_(G_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mh,n.nodeCallback=K_,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ce:r,a=n.callback,o=a===void 0?function(){}:a;return Mh(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,f=r.maskId,g=r.extra;return new Promise(function(w,y){Promise.all([Xu(i,s),d.iconName?Xu(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var S=cd(x,2),m=S[0],h=S[1];w([n,xd({icons:{main:m,mask:h},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Hs(s);l.length>0&&(i.style=l);var u;return gd(o)&&(u=Jt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},q_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ks({type:"layer"},function(){vr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(Da(a)).join(" ")},children:o}]})}}}},X_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Ks({type:"counter",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),P_({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(Da(s))}})})}}}},J_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ct:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,f=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return Ks({type:"text",content:n},function(){return vr("beforeDOMElementCreation",{content:n,params:r}),Rh({content:n,transform:O(O({},Ct),a),title:s,extra:{attributes:f,styles:w,classes:["".concat(j.cssPrefix,"-layers-text")].concat(Da(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(tv){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rh({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Z_=new RegExp('"',"ug"),Uh=[1105920,1112319];function eE(e){var t=e.replace(Z_,""),n=h_(t,0),r=n>=Uh[0]&&n<=Uh[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ku(i?t[0]:t),isSecondary:r||i}}function Fh(e,t){var n="".concat(Bx).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=mi(e.children),o=a.filter(function(N){return N.getAttribute(Wu)===t})[0],s=jn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yx),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var f=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?xe:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xa[g][l[2].toLowerCase()]:Gx[g][u],y=eE(f),x=y.value,S=y.isSecondary,m=l[0].startsWith("FontAwesome"),h=yd(w,x),v=h;if(m){var p=x_(x);p.iconName&&p.prefix&&(h=p.iconName,w=p.prefix)}if(h&&!S&&(!o||o.getAttribute(fd)!==w||o.getAttribute(hd)!==v)){e.setAttribute(n,v),o&&e.removeChild(o);var k=V_(),C=k.extra;C.attributes[Wu]=t,Xu(h,w).then(function(N){var P=xd(O(O({},k),{},{icons:{main:N,mask:wd()},prefix:w,iconName:v,extra:C,watchable:!0})),z=ce.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=P.map(function(U){return Ua(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function tE(e){return Promise.all([Fh(e,"::before"),Fh(e,"::after")])}function nE(e){return e.parentNode!==document.head&&!~Vx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zh(e){if(rn)return new Promise(function(t,n){var r=mi(e.querySelectorAll("*")).filter(nE).map(tE),i=_d.begin("searchPseudoElements");Ev(),Promise.all(r).then(function(){i(),Zu(),t()}).catch(function(){i(),Zu(),n()})})}var rE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ce:r;j.searchPseudoElements&&zh(i)}}},$h=!1,iE={mixout:function(){return{dom:{unwatch:function(){Ev(),$h=!0}}}},hooks:function(){return{bootstrap:function(){jh(Gu("mutationObserverCallbacks",{}))},noAuto:function(){z_()},watch:function(n){var r=n.observeMutationsRoot;$h?Zu():jh(Gu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},aE={mixout:function(){return{parse:{transform:function(n){return Bh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Bh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:f,path:g};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},Dl={x:0,y:0,width:"100%",height:"100%"};function Hh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function oE(e){return e.tag==="g"?e.children:[e]}var sE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ws(i.split(" ").map(function(o){return o.trim()})):wd();return a.prefix||(a.prefix=Dn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,d=a.icon,f=o.width,g=o.icon,w=a_({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:O(O({},Dl),{},{fill:"white"})},x=d.children?{children:d.children.map(Hh)}:{},S={tag:"g",attributes:O({},w.inner),children:[Hh(O({tag:d.tag,attributes:O(O({},d.attributes),w.path)},x))]},m={tag:"g",attributes:O({},w.outer),children:[S]},h="mask-".concat(s||ka()),v="clip-".concat(s||ka()),p={tag:"mask",attributes:O(O({},Dl),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:oE(g)},p]};return r.push(k,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Dl)}),{children:r,attributes:i}}}},lE={provides:function(t){var n=!1;jn.matchMedia&&(n=jn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},uE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},cE=[l_,Q_,q_,X_,J_,rE,iE,aE,sE,lE,uE];k_(cE,{mixoutsTo:it});it.noAuto;it.config;it.library;it.dom;var ec=it.parse;it.findIconDefinition;it.toHtml;var dE=it.icon;it.layer;it.text;it.counter;var Sv={exports:{}},fE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hE=fE,pE=hE;function bv(){}function Iv(){}Iv.resetWarningCache=bv;var mE=function(){function e(r,i,a,o,s,l){if(l!==pE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Iv,resetWarningCache:bv};return n.PropTypes=n,n};Sv.exports=mE();var gE=Sv.exports;const Y=_p(gE);function Vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function En(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vh(Object(n),!0).forEach(function(r){$r(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yE(e,t){if(e==null)return{};var n=vE(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tc(e){return wE(e)||xE(e)||_E(e)||EE()}function wE(e){if(Array.isArray(e))return nc(e)}function xE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _E(e,t){if(e){if(typeof e=="string")return nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nc(e,t)}}function nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function EE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kE(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,d=e.spinReverse,f=e.pulse,g=e.fixedWidth,w=e.inverse,y=e.border,x=e.listItem,S=e.flip,m=e.size,h=e.rotation,v=e.pull,p=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":g,"fa-inverse":w,"fa-border":y,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},$r(t,"fa-".concat(m),typeof m<"u"&&m!==null),$r(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),$r(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),$r(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map(function(k){return p[k]?k:null}).filter(function(k){return k})}function SE(e){return e=e-0,e===e}function Cv(e){return SE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var bE=["style"];function IE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function CE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Cv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[IE(i)]=a:t[i]=a,t},{})}function Nv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Nv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=CE(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Cv(u)]=d}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=yE(n,bE);return i.attrs.style=En(En({},i.attrs.style),o),e.apply(void 0,[t.tag,En(En({},i.attrs),s)].concat(tc(r)))}var Tv=!1;try{Tv=!0}catch{}function NE(){if(!Tv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wh(e){if(e&&ms(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ec.icon)return ec.icon(e);if(e===null)return null;if(e&&ms(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ml(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$r({},e,t):{}}var re=Ss.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=Wh(n),d=Ml("classes",[].concat(tc(kE(e)),tc(a.split(" ")))),f=Ml("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform),g=Ml("mask",Wh(r)),w=dE(u,En(En(En(En({},d),f),g),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!w)return NE("Could not find icon",u),null;var y=w.abstract,x={ref:t};return Object.keys(e).forEach(function(S){re.defaultProps.hasOwnProperty(S)||(x[S]=e[S])}),TE(y[0],x)});re.displayName="FontAwesomeIcon";re.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};re.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var TE=Nv.bind(null,Ss.createElement);var Kh={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},PE={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},RE={prefix:"fas",iconName:"bag-shopping",icon:[448,512,["shopping-bag"],"f290","M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},OE={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Jn={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Pv={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},AE={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"]},LE={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Yh=LE,jE={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},DE=jE,Gh={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},ME={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},UE=ME,Rv={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},FE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=a>>2,f=(a&3)<<4|s>>4;let g=(s&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(n[d],n[f],n[g],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ov(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):FE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new zE;const g=a<<2|s>>4;if(r.push(g),u!==64){const w=s<<4&240|u>>2;if(r.push(w),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $E=function(e){const t=Ov(e);return Av.encodeByteArray(t,!0)},Lv=function(e){return $E(e).replace(/\./g,"")},jv=function(e){try{return Av.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=()=>BE().__FIREBASE_DEFAULTS__,VE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},WE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jv(e[1]);return t&&JSON.parse(t)},kd=()=>{try{return HE()||VE()||WE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},KE=e=>{var t,n;return(n=(t=kd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Dv=()=>{var e;return(e=kd())===null||e===void 0?void 0:e.config},Mv=e=>{var t;return(t=kd())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function QE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function qE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XE(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function JE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="FirebaseError";class $n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ek,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?tk(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new $n(i,s,r)}}function tk(e,t){return e.replace(nk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nk=/\{\$([^}]+)}/g;function rk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function gs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(Qh(a)&&Qh(o)){if(!gs(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Fi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function zi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ik(e,t){const n=new ak(e,t);return n.subscribe.bind(n)}class ak{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ok(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ul),i.error===void 0&&(i.error=Ul),i.complete===void 0&&(i.complete=Ul);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ok(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ul(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){return e&&e._delegate?e._delegate:e}class li{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new YE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uk(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lk(e){return e===Xn?void 0:e}function uk(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const dk={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},fk=ie.INFO,hk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},pk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uv{constructor(t){this.name=t,this._logLevel=fk,this._logHandler=pk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const mk=(e,t)=>t.some(n=>e instanceof n);let qh,Xh;function gk(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vk(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,rc=new WeakMap,zv=new WeakMap,Fl=new WeakMap,Sd=new WeakMap;function yk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Rn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fv.set(n,e)}).catch(()=>{}),Sd.set(t,e),t}function wk(e){if(rc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});rc.set(e,t)}let ic={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function xk(e){ic=e(ic)}function _k(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zl(this),t,...n);return zv.set(r,t.sort?t.sort():[t]),Rn(r)}:vk().includes(e)?function(...t){return e.apply(zl(this),t),Rn(Fv.get(this))}:function(...t){return Rn(e.apply(zl(this),t))}}function Ek(e){return typeof e=="function"?_k(e):(e instanceof IDBTransaction&&wk(e),mk(e,gk())?new Proxy(e,ic):e)}function Rn(e){if(e instanceof IDBRequest)return yk(e);if(Fl.has(e))return Fl.get(e);const t=Ek(e);return t!==e&&(Fl.set(e,t),Sd.set(t,e)),t}const zl=e=>Sd.get(e);function kk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const Sk=["get","getKey","getAll","getAllKeys","count"],bk=["put","add","delete","clear"],$l=new Map;function Jh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($l.get(t))return $l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sk.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return $l.set(t,a),a}xk(e=>({...e,get:(t,n,r)=>Jh(t,n)||e.get(t,n,r),has:(t,n)=>!!Jh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ck(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ck(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ac="@firebase/app",Zh="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Uv("@firebase/app"),Nk="@firebase/app-compat",Tk="@firebase/analytics-compat",Pk="@firebase/analytics",Rk="@firebase/app-check-compat",Ok="@firebase/app-check",Ak="@firebase/auth",Lk="@firebase/auth-compat",jk="@firebase/database",Dk="@firebase/database-compat",Mk="@firebase/functions",Uk="@firebase/functions-compat",Fk="@firebase/installations",zk="@firebase/installations-compat",$k="@firebase/messaging",Bk="@firebase/messaging-compat",Hk="@firebase/performance",Vk="@firebase/performance-compat",Wk="@firebase/remote-config",Kk="@firebase/remote-config-compat",Yk="@firebase/storage",Gk="@firebase/storage-compat",Qk="@firebase/firestore",qk="@firebase/firestore-compat",Xk="firebase",Jk="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="[DEFAULT]",Zk={[ac]:"fire-core",[Nk]:"fire-core-compat",[Pk]:"fire-analytics",[Tk]:"fire-analytics-compat",[Ok]:"fire-app-check",[Rk]:"fire-app-check-compat",[Ak]:"fire-auth",[Lk]:"fire-auth-compat",[jk]:"fire-rtdb",[Dk]:"fire-rtdb-compat",[Mk]:"fire-fn",[Uk]:"fire-fn-compat",[Fk]:"fire-iid",[zk]:"fire-iid-compat",[$k]:"fire-fcm",[Bk]:"fire-fcm-compat",[Hk]:"fire-perf",[Vk]:"fire-perf-compat",[Wk]:"fire-rc",[Kk]:"fire-rc-compat",[Yk]:"fire-gcs",[Gk]:"fire-gcs-compat",[Qk]:"fire-fst",[qk]:"fire-fst-compat","fire-js":"fire-js",[Xk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map,sc=new Map;function eS(e,t){try{e.container.addComponent(t)}catch(n){yr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sa(e){const t=e.name;if(sc.has(t))return yr.debug(`There were multiple attempts to register component ${t}.`),!1;sc.set(t,e);for(const n of vs.values())eS(n,e);return!0}function $v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new Fa("app","Firebase",tS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=Jk;function Bv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:oc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=Dv()),!n)throw On.create("no-options");const a=vs.get(i);if(a){if(gs(n,a.options)&&gs(r,a.config))return a;throw On.create("duplicate-app",{appName:i})}const o=new ck(i);for(const l of sc.values())o.addComponent(l);const s=new nS(n,r,o);return vs.set(i,s),s}function rS(e=oc){const t=vs.get(e);if(!t&&e===oc&&Dv())return Bv();if(!t)throw On.create("no-app",{appName:e});return t}function qr(e,t,n){var r;let i=(r=Zk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yr.warn(s.join(" "));return}Sa(new li(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="firebase-heartbeat-database",aS=1,ba="firebase-heartbeat-store";let Bl=null;function Hv(){return Bl||(Bl=kk(iS,aS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ba)}}}).catch(e=>{throw On.create("idb-open",{originalErrorMessage:e.message})})),Bl}async function oS(e){try{return await(await Hv()).transaction(ba).objectStore(ba).get(Vv(e))}catch(t){if(t instanceof $n)yr.warn(t.message);else{const n=On.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yr.warn(n.message)}}}async function ep(e,t){try{const r=(await Hv()).transaction(ba,"readwrite");await r.objectStore(ba).put(t,Vv(e)),await r.done}catch(n){if(n instanceof $n)yr.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function Vv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=1024,lS=30*24*60*60*1e3;class uS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tp();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=lS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tp(),{heartbeatsToSend:r,unsentEntries:i}=cS(this._heartbeatsCache.heartbeats),a=Lv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function tp(){return new Date().toISOString().substring(0,10)}function cS(e,t=sS){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),np(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),np(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ep(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function np(e){return Lv(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(e){Sa(new li("platform-logger",t=>new Ik(t),"PRIVATE")),Sa(new li("heartbeat",t=>new uS(t),"PRIVATE")),qr(ac,Zh,e),qr(ac,Zh,"esm2017"),qr("fire-js","")}fS("");function bd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=Wv,Kv=new Fa("auth","Firebase",Wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Uv("@firebase/auth");function pS(e,...t){ys.logLevel<=ie.WARN&&ys.warn(`Auth (${$a}): ${e}`,...t)}function Mo(e,...t){ys.logLevel<=ie.ERROR&&ys.error(`Auth (${$a}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,...t){throw Id(e,...t)}function Pt(e,...t){return Id(e,...t)}function Yv(e,t,n){const r=Object.assign(Object.assign({},hS()),{[t]:n});return new Fa("auth","Firebase",r).create(t,{appName:e.name})}function mS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ft(e,"argument-error"),Yv(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Id(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kv.create(e,...t)}function $(e,t,...n){if(!e)throw Id(t,...n)}function Bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mo(t),new Error(t)}function Zt(e,t){e||Bt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function gS(){return rp()==="http:"||rp()==="https:"}function rp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gS()||QE()||"connection"in navigator)?navigator.onLine:!0}function yS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zt(n>t,"Short delay should be less than long delay!"),this.isMobile=GE()||qE()}get(){return vS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(e,t){Zt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new Ba(3e4,6e4);function Bn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hn(e,t,n,r,i={}){return Qv(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=za(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Gv.fetch()(qv(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Qv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wS),t);try{const i=new ES(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Eo(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yv(e,d,u);ft(e,d)}}catch(i){if(i instanceof $n)throw i;ft(e,"network-request-failed",{message:String(i)})}}async function Ha(e,t,n,r,i={}){const a=await Hn(e,t,n,r,i);return"mfaPendingCredential"in a&&ft(e,"multi-factor-auth-required",{_serverResponse:a}),a}function qv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Cd(e.config,i):`${e.config.apiScheme}://${i}`}function _S(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ES{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function ip(e){return e!==void 0&&e.enterprise!==void 0}class kS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return _S(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function SS(e,t){return Hn(e,"GET","/v2/recaptchaConfig",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(e,t){return Hn(e,"POST","/v1/accounts:delete",t)}async function IS(e,t){return Hn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CS(e,t=!1){const n=an(e),r=await n.getIdToken(t),i=Nd(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Zi(Hl(i.auth_time)),issuedAtTime:Zi(Hl(i.iat)),expirationTime:Zi(Hl(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Hl(e){return Number(e)*1e3}function Nd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=jv(n);return i?JSON.parse(i):(Mo("Failed to decode base64 JWT payload"),null)}catch(i){return Mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NS(e){const t=Nd(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $n&&TS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function TS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ia(e,IS(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?AS(a.providerUserInfo):[],s=OS(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),d=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Xv(a.createdAt,a.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function RS(e){const t=an(e);await ws(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function OS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function AS(e){return e.map(t=>{var{providerId:n}=t,r=bd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(e,t){const n=await Qv(e,{},async()=>{const r=za({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=qv(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Gv.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jS(e,t){return Hn(e,"POST","/v2/accounts:revokeToken",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):NS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await LS(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new Ca;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&($(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ca,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class lr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=bd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Xv(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return CS(this,t)}reload(){return RS(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new lr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ia(this,bS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:p,isAnonymous:k,providerData:C,stsTokenManager:N}=n;$(v&&N,t,"internal-error");const P=Ca.fromJSON(this.name,N);$(typeof v=="string",t,"internal-error"),fn(f,t.name),fn(g,t.name),$(typeof p=="boolean",t,"internal-error"),$(typeof k=="boolean",t,"internal-error"),fn(w,t.name),fn(y,t.name),fn(x,t.name),fn(S,t.name),fn(m,t.name),fn(h,t.name);const z=new lr({uid:v,auth:t,email:g,emailVerified:p,displayName:f,isAnonymous:k,photoURL:y,phoneNumber:w,tenantId:x,stsTokenManager:P,createdAt:m,lastLoginAt:h});return C&&Array.isArray(C)&&(z.providerData=C.map(U=>Object.assign({},U))),S&&(z._redirectEventId=S),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ca;i.updateFromServerResponse(n);const a=new lr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ws(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;function Ht(e){Zt(e instanceof Function,"Expected a class definition");let t=ap.get(e);return t?(Zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ap.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Jv.type="NONE";const op=Jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e,t,n){return`firebase:${e}:${t}:${n}`}class Xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Uo(this.userKey,i.apiKey,a),this.fullPersistenceKey=Uo("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Xr(Ht(op),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Ht(op);const o=Uo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const d=await u._get(o);if(d){const f=lr._fromJSON(t,d);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new Xr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new Xr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ty(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ry(t))return"Blackberry";if(iy(t))return"Webos";if(Td(t))return"Safari";if((t.includes("chrome/")||ey(t))&&!t.includes("edge/"))return"Chrome";if(ny(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zv(e=ze()){return/firefox\//i.test(e)}function Td(e=ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ey(e=ze()){return/crios\//i.test(e)}function ty(e=ze()){return/iemobile/i.test(e)}function ny(e=ze()){return/android/i.test(e)}function ry(e=ze()){return/blackberry/i.test(e)}function iy(e=ze()){return/webos/i.test(e)}function Ys(e=ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function DS(e=ze()){var t;return Ys(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function MS(){return XE()&&document.documentMode===10}function ay(e=ze()){return Ys(e)||ny(e)||iy(e)||ry(e)||/windows phone/i.test(e)||ty(e)}function US(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e,t=[]){let n;switch(e){case"Browser":n=sp(ze());break;case"Worker":n=`${sp(ze())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(e,t={}){return Hn(e,"GET","/v2/passwordPolicy",Bn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=6;class BS{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$S,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ws(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?an(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await zS(this),n=new BS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fa("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ht(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if($(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&pS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vn(e){return an(e)}class lp{constructor(t){this.auth=t,this.observer=null,this.addObserver=ik(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function sy(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=Pt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",VS().appendChild(r)})}function WS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const KS="https://www.google.com/recaptcha/enterprise.js?render=",YS="recaptcha-enterprise",GS="NO_RECAPTCHA";class QS{constructor(t){this.type=YS,this.auth=Vn(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{SS(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new kS(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;ip(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(GS)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&ip(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sy(KS+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function up(e,t,n,r=!1){const i=new QS(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await up(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await up(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(e,t){const n=$v(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(gs(a,t??{}))return i;ft(i,"already-initialized")}return n.initialize({options:t})}function XS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function JS(e,t,n){const r=Vn(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=ly(t),{host:o,port:s}=ZS(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||e2()}function ly(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ZS(e){const t=ly(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:cp(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:cp(o)}}}function cp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function e2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(t){return Bt("not implemented")}_linkToIdToken(t,n){return Bt("not implemented")}_getReauthenticationResolver(t){return Bt("not implemented")}}async function t2(e,t){return Hn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(e,t){return Ha(e,"POST","/v1/accounts:signInWithPassword",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(e,t){return Ha(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))}async function i2(e,t){return Ha(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Pd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Na(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Na(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(t,n,"signInWithPassword",n2);case"emailLink":return r2(t,{email:this._email,oobCode:this._password});default:ft(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(t,r,"signUpPassword",t2);case"emailLink":return i2(t,{idToken:n,email:this._email,oobCode:this._password});default:ft(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t){return Ha(e,"POST","/v1/accounts:signInWithIdp",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="http://localhost";class wr extends Pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=bd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wr(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Jr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Jr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Jr(t,n)}buildRequest(){const t={requestUri:a2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=za(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s2(e){const t=Fi(zi(e)).link,n=t?Fi(zi(t)).deep_link_id:null,r=Fi(zi(e)).deep_link_id;return(r?Fi(zi(r)).link:null)||r||n||t||e}class Rd{constructor(t){var n,r,i,a,o,s;const l=Fi(zi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=o2((i=l.mode)!==null&&i!==void 0?i:null);$(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=s2(t);try{return new Rd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.providerId=gi.PROVIDER_ID}static credential(t,n){return Na._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Rd.parseLink(n);return $(r,"argument-error"),Na._fromEmailAndCode(t,r.code,r.tenantId)}}gi.PROVIDER_ID="password";gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Va{constructor(){super("facebook.com")}static credential(t){return wr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wr._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Va{constructor(){super("github.com")}static credential(t){return wr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yn.credential(t.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Va{constructor(){super("twitter.com")}static credential(t,n){return wr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(e,t){return Ha(e,"POST","/v1/accounts:signUp",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await lr._fromIdTokenResponse(t,r,i),o=dp(r);return new xr({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=dp(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function dp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends $n{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xs(t,n,r,i)}}function uy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(e,a,t,r):a})}async function u2(e,t,n=!1){const r=await Ia(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await Ia(e,uy(r,i,t,e),n);$(a.idToken,r,"internal-error");const o=Nd(a.idToken);$(o,r,"internal-error");const{sub:s}=o;return $(e.uid===s,r,"user-mismatch"),xr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(e,t,n=!1){const r="signIn",i=await uy(e,r,t),a=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function d2(e,t){return cy(Vn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(e){const t=Vn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function f2(e,t,n){const r=Vn(e),o=await uc(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dy(e),l}),s=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function h2(e,t,n){return d2(an(e),gi.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dy(e),r})}function p2(e,t,n,r){return an(e).onIdTokenChanged(t,n,r)}function m2(e,t,n){return an(e).beforeAuthStateChanged(t,n)}function g2(e,t,n,r){return an(e).onAuthStateChanged(t,n,r)}function v2(e){return an(e).signOut()}const _s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(){const e=ze();return Td(e)||Ys(e)}const w2=1e3,x2=10;class hy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=y2()&&US(),this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);MS()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,x2):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},w2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}hy.type="LOCAL";const _2=hy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}py.type="SESSION";const my=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Gs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await E2(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Ad("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(g.data.response);break;default:clearTimeout(d),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function S2(e){Rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function b2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I2(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function C2(){return gy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="firebaseLocalStorageDb",N2=1,Es="firebaseLocalStorage",yy="fbase_key";class Wa{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qs(e,t){return e.transaction([Es],t?"readwrite":"readonly").objectStore(Es)}function T2(){const e=indexedDB.deleteDatabase(vy);return new Wa(e).toPromise()}function cc(){const e=indexedDB.open(vy,N2);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Es,{keyPath:yy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Es)?t(r):(r.close(),await T2(),t(await cc()))})})}async function fp(e,t,n){const r=Qs(e,!0).put({[yy]:t,value:n});return new Wa(r).toPromise()}async function P2(e,t){const n=Qs(e,!1).get(t),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function hp(e,t){const n=Qs(e,!0).delete(t);return new Wa(n).toPromise()}const R2=800,O2=3;class wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>O2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(C2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await b2(),!this.activeServiceWorker)return;this.sender=new k2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||I2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cc();return await fp(t,_s,"1"),await hp(t,_s),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>P2(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Qs(i,!1).getAll();return new Wa(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wy.type="LOCAL";const A2=wy;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(e,t){return t?Ht(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Pd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Jr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function L2(e){return cy(e.auth,new Ld(e),e.bypassAuthState)}function j2(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),c2(n,new Ld(e),e.bypassAuthState)}async function D2(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),u2(n,new Ld(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return L2;case"linkViaPopup":case"linkViaRedirect":return D2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:ft(this.auth,"internal-error")}}resolve(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new Ba(2e3,1e4);async function U2(e,t,n){const r=Vn(e);mS(e,t,Od);const i=xy(r,n);return new ar(r,"signInViaPopup",t,i).executeNotNull()}class ar extends _y{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const t=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,M2.get())};t()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2="pendingRedirect",Fo=new Map;class z2 extends _y{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Fo.get(this.auth._key());if(!t){try{const r=await $2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Fo.set(this.auth._key(),t)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $2(e,t){const n=V2(t),r=H2(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function B2(e,t){Fo.set(e._key(),t)}function H2(e){return Ht(e._redirectPersistence)}function V2(e){return Uo(F2,e.config.apiKey,e.name)}async function W2(e,t,n=!1){const r=Vn(e),i=xy(r,t),o=await new z2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=10*60*1e3;class Y2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!G2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ey(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=K2&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(t))}saveEventToCache(t){this.cachedEventUids.add(pp(t)),this.lastProcessedEventTime=Date.now()}}function pp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ey({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function G2(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ey(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(e,t={}){return Hn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X2=/^https?/;async function J2(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Q2(e);for(const n of t)try{if(Z2(n))return}catch{}ft(e,"unauthorized-domain")}function Z2(e){const t=lc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!X2.test(n))return!1;if(q2.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new Ba(3e4,6e4);function mp(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function tb(e){return new Promise((t,n)=>{var r,i,a;function o(){mp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mp(),n(Pt(e,"network-request-failed"))},timeout:eb.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Rt().gapi)===null||a===void 0)&&a.load)o();else{const s=WS("iframefcb");return Rt()[s]=()=>{gapi.load?o():n(Pt(e,"network-request-failed"))},sy(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw zo=null,t})}let zo=null;function nb(e){return zo=zo||tb(e),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new Ba(5e3,15e3),ib="__/auth/iframe",ab="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lb(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Cd(t,ab):`https://${e.config.authDomain}/${ib}`,r={apiKey:t.apiKey,appName:e.name,v:$a},i=sb.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${za(r).slice(1)}`}async function ub(e){const t=await nb(e),n=Rt().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:lb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(e,"network-request-failed"),s=Rt().setTimeout(()=>{a(o)},rb.get());function l(){Rt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,fb=600,hb="_blank",pb="http://localhost";class gp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(e,t,n,r=db,i=fb){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},cb),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ze().toLowerCase();n&&(s=ey(u)?hb:n),Zv(u)&&(t=t||pb,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[w,y])=>`${g}${w}=${y},`,"");if(DS(u)&&s!=="_self")return gb(t||"",s),new gp(null);const f=window.open(t||"",s,d);$(f,e,"popup-blocked");try{f.focus()}catch{}return new gp(f)}function gb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="__/auth/handler",yb="emulator/auth/handler",wb=encodeURIComponent("fac");async function vp(e,t,n,r,i,a){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$a,eventId:i};if(t instanceof Od){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",rk(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(a||{}))o[d]=f}if(t instanceof Va){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const d of Object.keys(s))s[d]===void 0&&delete s[d];const l=await e._getAppCheckToken(),u=l?`#${wb}=${encodeURIComponent(l)}`:"";return`${xb(e)}?${za(s).slice(1)}${u}`}function xb({config:e}){return e.emulator?Cd(e,yb):`https://${e.authDomain}/${vb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=W2,this._overrideRedirectResult=B2}async _openPopup(t,n,r,i){var a;Zt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await vp(t,n,r,lc(),i);return mb(t,o,Ad())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await vp(t,n,r,lc(),i);return S2(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ub(t),r=new Y2(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vl,{type:Vl},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Vl];o!==void 0&&n(!!o),ft(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ay()||Td()||Ys()}}const Eb=_b;var yp="@firebase/auth",wp="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bb(e){Sa(new li("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(e)},u=new HS(r,i,a,l);return XS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Sa(new li("auth-internal",t=>{const n=Vn(t.getProvider("auth").getImmediate());return(r=>new kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qr(yp,wp,Sb(e)),qr(yp,wp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=5*60,Cb=Mv("authIdTokenMaxAge")||Ib;let xp=null;const Nb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cb)return;const i=n==null?void 0:n.token;xp!==i&&(xp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tb(e=rS()){const t=$v(e,"auth");if(t.isInitialized())return t.getImmediate();const n=qS(e,{popupRedirectResolver:Eb,persistence:[A2,_2,my]}),r=Mv("authTokenSyncURL");if(r){const a=Nb(r);m2(n,a,()=>a(n.currentUser)),p2(n,o=>a(o))}const i=KE("auth");return i&&JS(n,`http://${i}`),n}bb("Browser");var Pb="firebase",Rb="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr(Pb,Rb,"app");const Ob={apiKey:"AIzaSyBTYjM3OMR7oy76ykTxjkEXFv4geZLZD7E",authDomain:"food-order-a389a.firebaseapp.com",projectId:"food-order-a389a",storageBucket:"food-order-a389a.appspot.com",messagingSenderId:"153579530978",appId:"1:153579530978:web:8a74539a36191d52c5ccbb"},Ab=Bv(Ob),et=b.createContext(),Lb=({children:e})=>{const[t,n]=b.useState([]),r=S=>{const m=[...t,S];return n(m),r},[i,a]=b.useState([]),o=S=>{const m=[...i,S];return a(m),o},s=S=>{const m=i.filter(h=>h.category_id!==S);return a(m),s},l=Tb(Ab),[u,d]=b.useState(null),f=()=>{v2(l).then(()=>{d(null)}).catch(()=>{d(null)})},g=(S,m)=>(U2(l,S).then(h=>{h.user,m("/home")}).catch(h=>console.error("error",h)),g),w=(S,m)=>f2(l,S,m),y=(S,m)=>h2(l,S,m);b.useEffect(()=>{const S=g2(l,m=>(d(m),()=>S))},[]);const x={items:t,findFoods:r,findfoodlength:o,itemlength:i,hendeldelete:s,user:u,hendlegooglesingin:g,logOut:f,createUser:w,signin:y};return c.jsx("div",{children:c.jsx(et.Provider,{value:x,children:e})})},jb=()=>{const{itemlength:e}=b.useContext(et),[t,n]=b.useState(!1),{user:r}=b.useContext(et),{logOut:i}=b.useContext(et);return c.jsxs("section",{className:" header",children:[c.jsxs("main",{className:" text-black md:w-5/6  md:mx-auto  ",children:[c.jsxs("div",{className:" bg-red-600   md:flex hidden justify-between p-2 md:rounded  ",children:[c.jsxs("div",{className:" w-12 flex items-center",children:[c.jsx("img",{className:"rounded",src:qg,alt:""}),c.jsx("p",{children:c.jsx(ee,{to:"/",className:" text-white ml-8 text-xl ",children:"Home"})})]}),c.jsxs("div",{className:" ml-10 flex items-center gap-4  ",children:[c.jsx("img",{className:"w-8 rounded-full",src:r==null?void 0:r.photoURL,alt:""}),r!=null&&r.email?c.jsx("p",{className:"text-white font-bold ",onClick:()=>i(),children:"LogOut"}):c.jsxs("p",{children:[" ",c.jsx(ee,{to:"/login",className:"text-white  ",children:"Log in"})]})]})]}),c.jsx("nav",{className:" bg-slate-200",children:c.jsxs("div",{className:" md:flex items-center justify-around  h-16",children:[c.jsxs("div",{className:"  flex justify-between p-2 ",children:[c.jsxs("div",{className:"  text-black relative   flex items-center",children:[c.jsx("input",{className:" bg-slate-100  px-2  py-2 rounded ",type:"text",placeholder:"search foods  "}),c.jsx(re,{className:"absolute right-3",icon:UE})]}),c.jsx("div",{children:c.jsx("p",{onClick:()=>n(!t),className:"text-2xl md:hidden",children:t?c.jsx(re,{icon:Rv}):c.jsx(re,{icon:PE})})})]}),c.jsxs("div",{className:"md:flex hidden ml-10  ",children:[c.jsxs("div",{className:"group ",children:[c.jsxs("p",{className:"font-semibold zoom",children:[" category ",c.jsx(re,{icon:Gh})]}),c.jsxs("div",{className:"absolute top-30 bg-slate-300 p-5 rounded hidden group-hover:block hover:block",children:[c.jsx("p",{children:c.jsx(ee,{className:"text-black",children:" BreakFast"})}),c.jsx("p",{children:c.jsx(ee,{className:"text-black",children:" Lunce"})}),c.jsx("p",{children:c.jsx(ee,{className:"text-black",children:" Dinner"})}),c.jsx("p",{children:c.jsx(ee,{className:"text-black",children:" Drinks"})}),c.jsx("p",{children:c.jsx(ee,{className:"text-black",children:" Dessert"})})]})]}),c.jsxs("div",{children:[c.jsx(ee,{to:"/about",className:"py-7 px-4 text-black",children:" About "}),c.jsx(ee,{to:"/servise",className:"py-7 px-4 text-black ",children:"Servise"})]})]}),c.jsx("div",{className:"md:flex hidden relative",children:c.jsxs(ee,{to:"/order",children:[c.jsxs("p",{className:"absolute bottom-6 bg-white text-center  px-2  rounded-full left-5",children:[" ",e.length,"     "]}),c.jsx(re,{className:"text-red-500 text-3xl ",icon:Yh})]})}),c.jsx("div",{className:`md:hidden bg-slate-300   relative  duration-700 ${t?"left-0":"left-[-720px]"} } `,children:c.jsxs("div",{className:"px-2 py-4  gap-3",children:[c.jsxs("div",{className:"group ",children:[c.jsx("div",{className:" ",children:c.jsxs("p",{className:"font-semibold ",children:["Category ",c.jsx(re,{icon:Gh})]})}),c.jsxs("div",{className:" top-10 left-2 pl-4 rounded  bg-slate-300 hidden group-hover:block hover:block ",children:[c.jsxs(ee,{to:"",className:" text-black",children:[" ",c.jsx(re,{icon:Jn})," BreakFast"]}),c.jsx("br",{}),c.jsxs(ee,{to:"",className:" text-black",children:[c.jsx(re,{icon:Jn})," Lunce"]}),c.jsx("br",{}),c.jsxs(ee,{to:"",className:" text-black",children:[" ",c.jsx(re,{icon:Jn})," Dinner"]}),c.jsx("br",{}),c.jsxs(ee,{to:"",className:" text-black",children:[" ",c.jsx(re,{icon:Jn}),"Drinks"]}),c.jsx("br",{}),c.jsxs(ee,{to:"",className:" text-black",children:[" ",c.jsx(re,{icon:Jn})," Dessert"]})]})]}),c.jsx(ee,{to:"/about",className:" text-black",children:" About "}),c.jsx("br",{}),c.jsx(ee,{to:"/servise",className:" text-black ",children:"Servise"})]})})]})})]}),c.jsxs("main",{className:"nav-sm  bg-red-600   flex md:hidden justify-between px-10 py-2 md:rounded ",children:[c.jsx("div",{children:c.jsx(ee,{to:"/",className:"text-white text-2xl",children:c.jsx(re,{icon:DE})})}),c.jsxs("div",{className:"relative",children:[c.jsxs("p",{className:"absolute bg-white text-black rounded-full px-2 bottom-4 left-4",children:["  ",e.length,"     "]}),c.jsx(ee,{to:"/order",className:"text-white text-2xl",children:c.jsx(re,{icon:Yh})})]}),c.jsxs("div",{className:"flex",children:[c.jsx("img",{className:"w-12 rounded-full",src:r==null?void 0:r.photoURL,alt:""}),r!=null&&r.email?c.jsx("p",{className:"text-white",onClick:()=>i(),children:"LogOut"}):c.jsx(ee,{to:"/login",className:"text-white text-2xl",children:c.jsx(re,{icon:OE})})]})]})]})};function Db(){return c.jsxs("main",{className:" text-white bg-slate-900 rounded md:w-5/6 mx-auto mb-20 md:my-5",children:[c.jsxs("div",{className:"md:w-4/6 md:mx-auto md:grid grid-cols-2 p-4",children:[c.jsx("div",{className:"mt-3",children:c.jsxs("div",{children:[c.jsx("div",{children:c.jsx("img",{className:"w-36 h-12 rounded",src:qg,alt:""})}),c.jsxs("div",{className:"flex mt-3  gap-5",children:[c.jsx("div",{className:"",children:c.jsx("p",{className:"font-semibold text-yellow-400",children:"Chife_Details:"})}),c.jsxs("div",{children:[c.jsxs("p",{children:["Hade chife ",c.jsx("small",{children:"Anna torri"})," "]}),c.jsx("p",{children:"Email: chife@gmail.com"})]})]}),c.jsxs("div",{className:"flex gap-3 mt-3",children:[c.jsx("p",{className:"font-semibold text-yellow-400",children:"Category: "}),c.jsx("p",{className:"ml-8",children:"lauce lauce lauce lauce"})]})]})}),c.jsxs("div",{className:"",children:[c.jsx("p",{className:"font-semibold mt-3 ",children:"Sent Us A Messages  "}),c.jsxs("div",{className:" md:p-3",children:[c.jsx("div",{className:"flex gap-3 w-full",children:c.jsx("input",{r:!0,className:" rounded p-1 w-full",type:"text",placeholder:"First && Last Name"})}),c.jsx("div",{className:"mt-3 w-full  ",children:c.jsx("input",{className:"rounded  p-1 w-full",type:"text",placeholder:"Email adderss "})}),c.jsx("div",{className:"w-full h-full mt-3",children:c.jsx("input",{className:" rounded w-full h-20 p-1",type:"text",placeholder:"Details"})}),c.jsx("p",{className:"text-end mt-3",children:c.jsx("button",{className:"bg-yellow-400 ",children:"Sent Messges"})})]})]})]}),c.jsxs("p",{className:"text-center",children:["Create by ",c.jsx(re,{className:"text-yellow-400",icon:Pv})," AS SABBIR (copyright @2023))"]})]})}function Mb(){return c.jsxs("div",{children:[c.jsx(jb,{}),c.jsx(px,{}),c.jsx(Db,{})]})}const Ub=()=>{const e=ud();return c.jsx("section",{className:"md:w-5/6  m-auto",children:c.jsxs("main",{className:"  text-black rounded bg-white mt-10",children:[c.jsx("p",{className:"text-center font-bold text-2xl ",children:"Our top 6 Resturant hear  !"}),c.jsx("div",{className:" mt-10 p-5",children:c.jsx("div",{className:"md:grid grid-cols-3 gap-5  ",children:e.map(t=>c.jsx("div",{className:"bg-slate-100 rounded mt-5",children:c.jsxs(ee,{className:"text-black",to:`${t.id}`,children:[c.jsx("img",{className:"w-full md:h-52 rounded",src:t.img,alt:""}),c.jsxs("div",{className:"flex justify-between px-5 py-2",children:[c.jsx("p",{children:t.name}),c.jsx("p",{children:"Show_details"})]})]})},t.id))})})]})})},ky=()=>{const e=b.useContext(et),{findfoodlength:t}=b.useContext(et),[n,r]=b.useState(e.items);b.useEffect(()=>{r(e.items)},[e.items]);const[i,a]=b.useState([]),o=s=>{a(s),t(s),r([])};return c.jsx("div",{children:n.map(s=>c.jsx("div",{className:" group fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex",children:c.jsxs("div",{className:"bg-white md:grid grid-cols-2 p-3 rounded gap-3 md:h-4/6 md:w-4/6 relative ",children:[c.jsx("div",{children:c.jsx("img",{className:"h-full w-full rounded",src:s.image_url,alt:""})}),c.jsxs("div",{className:" text-black items-start p-2",children:[c.jsxs("p",{className:"font-bold text-2xl",children:[s.details," "]}),c.jsxs("div",{className:"flex justify-center mt-2 bg-slate-100 rounded-full w-28 p-1",children:[c.jsx("small",{className:"text-blue-400",children:"Stock :"}),"   ",c.jsx("small",{className:"text-red-500 ml-1",children:"available"})]}),c.jsxs("p",{className:"text-3xl mt-2 font-semibold",children:[" $ ",s.price]}),c.jsxs("div",{className:"md:flex items-center justify-between mt-4",children:[c.jsx("p",{className:"font-medium",children:"Quality : Fresh_Food"}),c.jsxs("div",{className:"mt-4  md:w-4/6",children:[c.jsx("button",{className:"bg-blue-400 md:w-4/5 ",onClick:()=>o(s),children:" Add to cart"}),c.jsxs("button",{className:"md:absolute top-0 right-0  hover:bg-red-500 hover:text-white ml-8",onClick:()=>r([]),children:[" ",c.jsx(re,{icon:Rv})]})]})]}),c.jsx("div",{className:"flex items-center justify-center mt-10",children:c.jsxs("p",{className:"text-red-600",children:["Eat healthy food ",c.jsx(re,{icon:Pv})," to be always good"]})})]})]})},s.category_id))})};function Fb(){const{findFoods:e}=b.useContext(et),n=ud().option,[r,i]=b.useState([]);b.useEffect(()=>{fetch("http://localhost:5000/items").then(o=>o.json()).then(o=>i(o))},[]);const a=o=>{e(o)};return c.jsxs("main",{className:"bg-white w-5/6 mx-auto md:my-4 md:p-10 ",children:[c.jsx("div",{className:"text-black md:grid grid-cols-3 md:gap-4  ",children:n.map(o=>c.jsxs("div",{onClick:()=>a(o),className:"md:m-5 my-4 bg-slate-100 rounded ",children:[c.jsx("img",{className:"w-full h-52 rounded",src:o.image_url,alt:""}),c.jsxs("div",{className:"flex items-center justify-between py-2 px-4 ",children:[c.jsx("div",{className:"flex items-center",children:c.jsx("p",{className:"",children:o.details})}),c.jsx("div",{children:c.jsxs("p",{className:"text-red-600 font-bold",children:[o.price," $ ",c.jsx(re,{icon:Jn})]})})]}),c.jsx("div",{className:"text-center bg-red-300 p-2 hover:bg-red-400",children:c.jsx("p",{className:"font-semibold",children:"Order"})})]},o.details))}),c.jsx(ky,{})]})}const zb=()=>{let e=0;const{itemlength:t}=b.useContext(et),{hendeldelete:n}=b.useContext(et);for(const r of t){const i=parseFloat(r.price);e=e+i}return c.jsxs("div",{className:"w-5/6 bg-white text-black mx-auto p-5 ",children:[c.jsxs("div",{className:"md:bg-slate-200 rounded md:w-4/6 md:p-6 md:m-auto",children:[c.jsxs("div",{className:"bg-white p-2 flex items-center rounded",children:[c.jsxs("p",{children:[" ",c.jsx(re,{icon:AE})," "]}),c.jsx("p",{className:"text-2xl md:ml-2 font-semibold",children:"  Foods order cart "})]}),t.length===0&&c.jsx("div",{className:"flex items-center justify-center h-52",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex items-center justify-center ",children:c.jsx("p",{className:"text-4xl bg-blue-200 text-blue-500 rounded-full px-6 py-5",children:c.jsx(re,{icon:RE})})}),c.jsxs("div",{className:"text-center md:w-5/6 m-auto",children:[c.jsx("p",{className:"text-2xl md:font-semibold",children:"Opps !!! Your cart is empty"}),c.jsxs("p",{children:["No items added in your cart. Please add product to your cart list. ",c.jsx(ee,{to:"/",className:"text-blue-500",children:" Back to Home"})]})]})]})}),c.jsxs("div",{children:[t.map(r=>c.jsxs("div",{className:" md:grid grid-cols-2 hidden w-full  m-auto mt-5 p-2  rounded bg-white  ",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{children:c.jsx("img",{className:"md:h-28 md:w-28 rounded",src:r.image_url,alt:""})}),c.jsxs("div",{className:"ml-10",children:[c.jsxs("p",{className:"text-xl",children:[" Name: ",r.details]}),c.jsxs("p",{className:"text-xl",children:[" Price: ",r.price," ",c.jsx("small",{className:"text-xl text-red-700",children:"$"})]})]})]}),c.jsx("div",{className:"flex items-center justify-end ",children:c.jsxs("p",{onClick:()=>n(r.category_id),className:"bg-white p-2 rounded-full hover:text-red-600 text-red-500 text-4xl",children:[" ",c.jsx(re,{icon:Kh})]})})]},r.details)),c.jsxs("div",{className:"md:flex hidden text-white items-center justify-between bg-blue-500 mt-5 p-5 rounded ",children:[c.jsx("p",{children:"Proceed To Checkout"}),c.jsxs("p",{className:"bg-white p-2 text-black rounded",children:["Amount ",e," $"]})]})]})]}),c.jsxs("div",{className:"mb-10",children:[t.map(r=>c.jsxs("div",{className:"md:hidden mt-5 mb-4  bg-slate-100 rounded",children:[c.jsx("div",{children:c.jsx("img",{className:"rounded",src:r.image_url,alt:""})}),c.jsxs("div",{className:"flex items-center justify-between px-4 py-2",children:[c.jsxs("div",{children:[c.jsxs("p",{className:"text-xl",children:[" Name: ",r.details]}),c.jsxs("p",{className:"text-xl",children:[" Price: ",r.price," ",c.jsx("small",{className:"text-xl text-red-700",children:"$"})]})]}),c.jsx("div",{className:" ",children:c.jsxs("p",{onClick:()=>n(r.category_id),className:"bg-slate-100 hover:text-red-700 text-red-500 text-2xl ",children:[" ",c.jsx(re,{icon:Kh})]})})]})]},r.details)),c.jsxs("div",{className:"flex md:hidden text-white items-center justify-between bg-blue-500 mt-5 p-5 rounded ",children:[c.jsx("p",{children:"Proceed To Checkout"}),c.jsxs("p",{className:"bg-white md:p-2 p-1 text-black rounded",children:["Amount ",e," $"]})]})]})]})},$b="/assets/depositphotos_254046202-stock-photo-happy-male-indian-chef-in-012bed13.jpg";function Bb(){return c.jsxs("main",{className:"md:w-5/6 mx-auto",children:[c.jsx("div",{className:"  mt-5 rounded md:p-5 md:bg-base-200 ",children:c.jsxs("div",{className:" md:flex gap-5 px-5  ",children:[c.jsx("div",{className:"  bg-white flex p-5 items-center justify-center rounded",children:c.jsx("img",{className:" w-full",src:$b,alt:""})}),c.jsx("div",{className:"text-black flex items-center justify-center",children:c.jsxs("div",{children:[c.jsxs("div",{className:"",children:[c.jsx("h1",{className:"md:text-4xl text-2xl  font-semibold",children:"Chife Office News  !"}),c.jsx("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."})]}),c.jsx(ee,{to:"/home",children:c.jsx("button",{className:" text-black bg-red-300 hover:bg-red-400",children:"Get Started"})})]})})]})}),c.jsxs("div",{className:"text-black p-5",children:[c.jsxs("div",{className:"md:text-center",children:[c.jsxs("p",{className:"text-3xl font-semibold",children:["Enjoy the best items // ",c.jsx("span",{className:"text-red-400",children:"discount available"})]}),c.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur ",c.jsx("br",{})," adipisicing elit. Odit repellendus iste, possimus iusto quidem nam amet ",c.jsx("br",{})," quae aliquam a illo."]})]}),c.jsx("div",{className:"",children:c.jsxs("div",{className:"my-5 md:flex gap-5 justify-around  w-full",children:[c.jsx("img",{className:"w-80 md:h-80 h-52 mt-4 rounded-lg",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgfGfepDkXNsQySUQnDei9k3_Odj7QYU4bg&usqp=CAU",alt:""}),c.jsx("img",{className:"w-80 md:h-80 h-52 mt-4 rounded-lg",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2CQmJ0dCFCt7pi79VmcKg4QOXHXZDvDIdg&usqp=CAU",alt:""}),c.jsx("img",{className:"w-80 md:h-80 h-52 mt-4 rounded-lg",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpUIOOGHCVLL4vJKgexWWbBPN9EcXbD0bPA&usqp=CAU",alt:""})]})})]})]})}function Hb(){return c.jsx("div",{children:c.jsx("p",{children:"Inventory"})})}function Vb(){const[e,t]=b.useState([]);return b.useEffect(()=>{fetch("http://localhost:5000/servises").then(n=>n.json()).then(n=>t(n))},[]),c.jsxs("div",{className:" w-5/6 m-auto text-black my-5  ",children:[c.jsxs("div",{className:"md:text-center md:w-1/2 m-auto",children:[c.jsx("p",{className:" text-red-400 font-bold",children:"Servises"}),c.jsx("p",{className:"md:text-5xl text-3xl  font-semibold",children:" Our Servise Area"}),c.jsx("p",{className:"mt-8",children:"Counter service is food ordered by the customer at the counter and either picked up at the counter by the customer or delivered to the table by restaurant staff "})]}),c.jsx("div",{className:"md:grid grid-cols-3 md:gap-4",children:e.map(n=>c.jsxs("div",{className:"md:m-5 my-4 bg-slate-100 rounded ",children:[c.jsx("img",{className:"w-full h-52 rounded",src:n.img,alt:""}),c.jsxs("div",{className:"flex items-center justify-between py-2 px-4 ",children:[c.jsx("div",{className:"flex items-center",children:c.jsx("p",{className:"font-semiboldx",children:n.name})}),c.jsx("div",{children:c.jsxs("p",{className:" bg-red-400 hover:animate-bounce p-1 rounded    ",children:[c.jsx(ee,{to:`${n.id}`,className:"text-black hover:text-black",children:"Checout"})," ",c.jsx(re,{icon:Jn})," "]})})]})]},n.id))})]})}function Wb(){const{hendlegooglesingin:e}=b.useContext(et),{signin:t}=b.useContext(et),n=new Ft,r=sd(),i=()=>{e(n,r)},a=o=>{o.preventDefault();const s=o.target,l=s.email.value,u=s.password.value;console.log(l,u),t(l,u).then(d=>{d.user,r("/home"),s.reset()}).catch(d=>console.error("error",d))};return c.jsx("div",{className:"flex justify-center bg-slate-200 rounded md:w-3/6 h-4/4 mx-auto mt-4 md:p-5 p-2 text-black ",children:c.jsxs("form",{onSubmit:a,className:" md:w-4/6 m-auto",children:[c.jsx("p",{className:"text-4xl text-center font-bold text-blue-600",children:"Welcome "}),c.jsx("p",{className:"text-center font-bold",children:"to our food servise. please login"}),c.jsxs("div",{className:"mt-5",children:[c.jsx("p",{className:"mt-1",children:"Email:"}),c.jsx("input",{className:"w-full p-2 rounded",type:"email",name:"email",id:"",placeholder:" Your Email ",required:!0})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("p",{className:"mt-1",children:"Password:"}),c.jsx("input",{className:"w-full p-2 rounded",type:"password",name:"password",id:"",placeholder:"Your password",required:!0})]}),c.jsxs("div",{className:"my-5 text-white",children:[c.jsx("input",{className:" p-2 rounded w-full hover:bg-blue-600 bg-blue-500",type:"submit",value:"Login"}),c.jsxs("p",{className:"text-black",children:["Don't have an acount ",c.jsxs(ee,{to:"/register",children:[" ",c.jsx("small",{className:"text-blue-600 font-bold",children:"please register"})," "]})," "]})]}),c.jsxs("div",{onClick:()=>i(),className:"bg-white flex items-center justify-center my-10",children:[c.jsx("p",{className:"text-xl text-blue-600 font-bold",children:"G"}),c.jsx("p",{className:" p-2",children:"Login with Google"})]})]})})}function Kb(){const[e,t]=b.useState(),{createUser:n}=b.useContext(et),r=i=>{i.preventDefault();const a=i.target,o=a.email.value,s=a.password.value,l=a.confirm.value;if(s.length<6&&t("password should be 6 characters long "),s!==l){t("password did nit match");return}n(o,s).then(u=>{const d=u.user;console.log(d),a.reset()}).catch(u=>console.error("error",u))};return c.jsx("div",{className:"flex justify-center bg-slate-200 md:w-3/6 h-4/4 mx-auto mt-4 md:p-5 p-2 text-black rounded ",children:c.jsxs("form",{onSubmit:r,className:" md:w-4/6 m-auto",children:[c.jsx("p",{className:"text-4xl text-center font-bold text-blue-600",children:"Welcome "}),c.jsx("p",{className:"text-center font-bold",children:"to our food servise. please register"}),c.jsxs("div",{className:"mt-5",children:[c.jsx("p",{className:"mt-1",children:"Email:"}),c.jsx("input",{className:"w-full p-2 rounded",type:"email",name:"email",placeholder:" Your Email ",required:!0})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("p",{className:"mt-1",children:"Password:"}),c.jsx("input",{className:"w-full p-2 rounded",type:"password",name:"password",placeholder:"Your password",required:!0})]}),c.jsxs("div",{className:"mt-4",children:[c.jsx("p",{className:"mt-1",children:"re-type Password:"}),c.jsx("input",{className:"w-full p-2 rounded",type:"confirm-password",name:"confirm",placeholder:"re-type password",required:!0})]}),c.jsxs("div",{className:"my-5 text-white",children:[c.jsx("input",{className:" p-2 rounded w-full hover:bg-blue-600 bg-blue-500",type:"submit",value:"Register"}),c.jsxs("p",{className:"text-black",children:["Alredy have an acount  ",c.jsxs(ee,{to:"/login",children:["  ",c.jsx("small",{className:"text-blue-600 font-bold",children:"please login"})," "]})," "]})]}),c.jsx("p",{className:"text-red-600 mb-10",children:e})]})})}const Wl=({children:e})=>{const{user:t}=b.useContext(et);return t?e:c.jsx(hx,{to:"/login"})};function Yb(){return c.jsxs("main",{className:"w-5/6 m-auto text-black",children:[c.jsx("div",{className:"header1 text-black flex items-center justify-center mt-10 ",children:c.jsx("div",{className:" flex items-center justify-center",children:c.jsxs("div",{children:[c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-4xl font-bold ",children:"WELCOME TO ROODFRISS"}),c.jsx("p",{className:"text-1xl font-semibold text-center mt-2",children:"SERVE ONLY THE FERSHEST INGREDIENTS"})]}),c.jsx("div",{className:"flex items-center justify-center mt-5",children:c.jsxs("button",{className:"border-green-700 bg-green-500 hover:bg-green-600 ",children:[" ",c.jsxs(ee,{to:"/home",className:" text-black hover:text-black",children:[" ",c.jsx("span",{className:"hover:animate-bounce",children:"Seen Our items"})]})]})})]})})}),c.jsxs("div",{className:"md:grid grid-cols-2 gap-2 my-20 mt-5",children:[c.jsx("div",{className:"bg-slate-50 rounded flex items-center justify-center p-5 h-80  ",children:c.jsxs("div",{children:[c.jsxs("div",{className:"text-center",children:[c.jsx("p",{children:" Sometimes you lose a battle. But mischief always wins the war"}),c.jsx("p",{className:"font-bold text-xl",children:' "Be the chife but never the lord"'})]}),c.jsx("div",{className:" flex justify-center mt-10 ",children:c.jsx("img",{className:" chife-pic rounded-full w-36 h-32  ",src:"https://st4.depositphotos.com/1017986/25404/i/450/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg",alt:""})}),c.jsx("p",{className:"text-center text-2xl text-red-600",children:"Anna Toylor"}),c.jsx("p",{className:"text-center ",children:"Head Chife"})]})}),c.jsx("div",{className:"w-full md:flex hidden   ",children:c.jsx("img",{className:"w-full h-80 rounded ",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZcKVams1fnVL3224ZJ2xEtBeUs6P_ZJiZw&usqp=CAU",alt:""})})]})]})}const Gb="/assets/download-removebg-preview-d6c0a9ba.png";function Qb(){const e=ud(),t=e.option;let n=0;for(const r of t){const i=parseFloat(r.price);n=n+i}return console.log(t),c.jsxs("main",{className:"md:w-5/6 mx-auto bg-slate-200 p-2 my-6 text-black ",children:[c.jsxs("div",{className:"flex items-center justify-between w-5/6 mx-auto bg-white rounded px-4 py-2 my-6",children:[c.jsx("h3",{className:"text-black font-bold ",children:e.name}),c.jsx("img",{className:"w-16",src:Gb,alt:""})]}),c.jsxs("div",{className:"w-5/6 m-auto  ",children:[c.jsxs("div",{className:"bg-white  p-4 ",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("p",{children:"Chackout List"}),c.jsxs("p",{className:"bg-red-400 p-1 rounded hover:bg-red-500",children:[" ",c.jsx(ee,{to:"/servise",className:"text-black hover:text-black",children:" Go Back"})]})]}),c.jsx("hr",{className:"w-full mt-2 "}),t.map(r=>c.jsxs("div",{className:"md:grid grid-cols-2",children:[c.jsxs("div",{className:"grid grid-cols-2  justify-between mt-4",children:[c.jsx("div",{className:"flex justify-center items-center",children:c.jsx("img",{className:"md:w-1/2 h-5/6",src:r.img,alt:""})}),c.jsxs("div",{className:"text-start ml-2",children:[c.jsx("p",{className:"font-bold",children:r.name}),c.jsx("span",{className:"text-1xl",children:"Lorem ipsum dolor sit  Qui, dicta."}),c.jsxs("p",{className:"text-red-500 font-semibold",children:[r.price," $"]})]})]}),c.jsx("div",{className:"md:flex hidden items-center justify-center",children:c.jsx("p",{children:"Servise on time"})})]},r.id)),c.jsx("hr",{className:"w-full"})]}),c.jsx("div",{className:"bg-red-500 mt-5 rounded  py-5",children:c.jsxs("div",{className:"flex justify-between w-5/6 mx-auto",children:[c.jsx("p",{className:"font-semibold",children:"Checkout Total"}),c.jsxs("p",{className:" bg-white py-1 px-3 rounded ",children:["Amount ",c.jsxs("span",{children:[n,"$"]})]})]})})]})]})}function qb(){const e=_x([{path:"/",element:c.jsx(Mb,{}),children:[{path:"/",element:c.jsx(Yb,{})},{path:"home",loader:()=>fetch("http://localhost:5000/food-restaurants"),element:c.jsxs(Wl,{children:[" ",c.jsx(Ub,{})]})},{path:"home/:id",loader:({params:t})=>fetch(`http://localhost:5000/foods/${t.id}`),element:c.jsxs(Wl,{children:["  ",c.jsx(Fb,{})," "]})},{path:"cart",element:c.jsx(ky,{})},{path:"order",element:c.jsxs(Wl,{children:["  ",c.jsx(zb,{})," "]})},{path:"about",element:c.jsx(Bb,{})},{path:"inventory",element:c.jsx(Hb,{})},{path:"servise",element:c.jsx(Vb,{})},{path:"servise/:id",loader:({params:t})=>fetch(`http://localhost:5000/checout/${t.id}`),element:c.jsx(Qb,{})},{path:"login",element:c.jsx(Wb,{})},{path:"register",element:c.jsx(Kb,{})}]}]);return c.jsx("div",{className:"app",children:c.jsx(Nx,{router:e})})}Kl.createRoot(document.getElementById("root")).render(c.jsx(Ss.StrictMode,{children:c.jsx(Lb,{children:c.jsx(qb,{})})}));
