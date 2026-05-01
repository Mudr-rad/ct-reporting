(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))J(E);new MutationObserver(E=>{for(const w of E)if(w.type==="childList")for(const V of w.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&J(V)}).observe(document,{childList:!0,subtree:!0});function _(E){const w={};return E.integrity&&(w.integrity=E.integrity),E.referrerPolicy&&(w.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?w.credentials="include":E.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function J(E){if(E.ep)return;E.ep=!0;const w=_(E);fetch(E.href,w)}})();var zo={exports:{}},ki={},To={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function Om(){if(Tc)return Y;Tc=1;var C=Symbol.for("react.element"),R=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),V=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),ve=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),X=Symbol.iterator;function U(u){return u===null||typeof u!="object"?null:(u=X&&u[X]||u["@@iterator"],typeof u=="function"?u:null)}var Pe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,H={};function B(u,y,K){this.props=u,this.context=y,this.refs=H,this.updater=K||Pe}B.prototype.isReactComponent={},B.prototype.setState=function(u,y){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,y,"setState")},B.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ve(){}Ve.prototype=B.prototype;function xe(u,y,K){this.props=u,this.context=y,this.refs=H,this.updater=K||Pe}var x=xe.prototype=new Ve;x.constructor=xe,ee(x,B.prototype),x.isPureReactComponent=!0;var G=Array.isArray,A=Object.prototype.hasOwnProperty,F={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function ke(u,y,K){var Z,q={},Q=null,ae=null;if(y!=null)for(Z in y.ref!==void 0&&(ae=y.ref),y.key!==void 0&&(Q=""+y.key),y)A.call(y,Z)&&!re.hasOwnProperty(Z)&&(q[Z]=y[Z]);var ne=arguments.length-2;if(ne===1)q.children=K;else if(1<ne){for(var ue=Array(ne),Ge=0;Ge<ne;Ge++)ue[Ge]=arguments[Ge+2];q.children=ue}if(u&&u.defaultProps)for(Z in ne=u.defaultProps,ne)q[Z]===void 0&&(q[Z]=ne[Z]);return{$$typeof:C,type:u,key:Q,ref:ae,props:q,_owner:F.current}}function It(u,y){return{$$typeof:C,type:u.type,key:y,ref:u.ref,props:u.props,_owner:u._owner}}function kt(u){return typeof u=="object"&&u!==null&&u.$$typeof===C}function Wt(u){var y={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(K){return y[K]})}var dt=/\/+/g;function Ye(u,y){return typeof u=="object"&&u!==null&&u.key!=null?Wt(""+u.key):y.toString(36)}function rt(u,y,K,Z,q){var Q=typeof u;(Q==="undefined"||Q==="boolean")&&(u=null);var ae=!1;if(u===null)ae=!0;else switch(Q){case"string":case"number":ae=!0;break;case"object":switch(u.$$typeof){case C:case R:ae=!0}}if(ae)return ae=u,q=q(ae),u=Z===""?"."+Ye(ae,0):Z,G(q)?(K="",u!=null&&(K=u.replace(dt,"$&/")+"/"),rt(q,y,K,"",function(Ge){return Ge})):q!=null&&(kt(q)&&(q=It(q,K+(!q.key||ae&&ae.key===q.key?"":(""+q.key).replace(dt,"$&/")+"/")+u)),y.push(q)),1;if(ae=0,Z=Z===""?".":Z+":",G(u))for(var ne=0;ne<u.length;ne++){Q=u[ne];var ue=Z+Ye(Q,ne);ae+=rt(Q,y,K,ue,q)}else if(ue=U(u),typeof ue=="function")for(u=ue.call(u),ne=0;!(Q=u.next()).done;)Q=Q.value,ue=Z+Ye(Q,ne++),ae+=rt(Q,y,K,ue,q);else if(Q==="object")throw y=String(u),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return ae}function pt(u,y,K){if(u==null)return u;var Z=[],q=0;return rt(u,Z,"","",function(Q){return y.call(K,Q,q++)}),Z}function we(u){if(u._status===-1){var y=u._result;y=y(),y.then(function(K){(u._status===0||u._status===-1)&&(u._status=1,u._result=K)},function(K){(u._status===0||u._status===-1)&&(u._status=2,u._result=K)}),u._status===-1&&(u._status=0,u._result=y)}if(u._status===1)return u._result.default;throw u._result}var _e={current:null},N={transition:null},O={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:N,ReactCurrentOwner:F};function z(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:pt,forEach:function(u,y,K){pt(u,function(){y.apply(this,arguments)},K)},count:function(u){var y=0;return pt(u,function(){y++}),y},toArray:function(u){return pt(u,function(y){return y})||[]},only:function(u){if(!kt(u))throw Error("React.Children.only expected to receive a single React element child.");return u}},Y.Component=B,Y.Fragment=_,Y.Profiler=E,Y.PureComponent=xe,Y.StrictMode=J,Y.Suspense=j,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Y.act=z,Y.cloneElement=function(u,y,K){if(u==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+u+".");var Z=ee({},u.props),q=u.key,Q=u.ref,ae=u._owner;if(y!=null){if(y.ref!==void 0&&(Q=y.ref,ae=F.current),y.key!==void 0&&(q=""+y.key),u.type&&u.type.defaultProps)var ne=u.type.defaultProps;for(ue in y)A.call(y,ue)&&!re.hasOwnProperty(ue)&&(Z[ue]=y[ue]===void 0&&ne!==void 0?ne[ue]:y[ue])}var ue=arguments.length-2;if(ue===1)Z.children=K;else if(1<ue){ne=Array(ue);for(var Ge=0;Ge<ue;Ge++)ne[Ge]=arguments[Ge+2];Z.children=ne}return{$$typeof:C,type:u.type,key:q,ref:Q,props:Z,_owner:ae}},Y.createContext=function(u){return u={$$typeof:V,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},u.Provider={$$typeof:w,_context:u},u.Consumer=u},Y.createElement=ke,Y.createFactory=function(u){var y=ke.bind(null,u);return y.type=u,y},Y.createRef=function(){return{current:null}},Y.forwardRef=function(u){return{$$typeof:te,render:u}},Y.isValidElement=kt,Y.lazy=function(u){return{$$typeof:ce,_payload:{_status:-1,_result:u},_init:we}},Y.memo=function(u,y){return{$$typeof:ve,type:u,compare:y===void 0?null:y}},Y.startTransition=function(u){var y=N.transition;N.transition={};try{u()}finally{N.transition=y}},Y.unstable_act=z,Y.useCallback=function(u,y){return _e.current.useCallback(u,y)},Y.useContext=function(u){return _e.current.useContext(u)},Y.useDebugValue=function(){},Y.useDeferredValue=function(u){return _e.current.useDeferredValue(u)},Y.useEffect=function(u,y){return _e.current.useEffect(u,y)},Y.useId=function(){return _e.current.useId()},Y.useImperativeHandle=function(u,y,K){return _e.current.useImperativeHandle(u,y,K)},Y.useInsertionEffect=function(u,y){return _e.current.useInsertionEffect(u,y)},Y.useLayoutEffect=function(u,y){return _e.current.useLayoutEffect(u,y)},Y.useMemo=function(u,y){return _e.current.useMemo(u,y)},Y.useReducer=function(u,y,K){return _e.current.useReducer(u,y,K)},Y.useRef=function(u){return _e.current.useRef(u)},Y.useState=function(u){return _e.current.useState(u)},Y.useSyncExternalStore=function(u,y,K){return _e.current.useSyncExternalStore(u,y,K)},Y.useTransition=function(){return _e.current.useTransition()},Y.version="18.3.1",Y}var Ic;function Mo(){return Ic||(Ic=1,To.exports=Om()),To.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function Dm(){if(bc)return ki;bc=1;var C=Mo(),R=Symbol.for("react.element"),_=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,E=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function V(te,j,ve){var ce,X={},U=null,Pe=null;ve!==void 0&&(U=""+ve),j.key!==void 0&&(U=""+j.key),j.ref!==void 0&&(Pe=j.ref);for(ce in j)J.call(j,ce)&&!w.hasOwnProperty(ce)&&(X[ce]=j[ce]);if(te&&te.defaultProps)for(ce in j=te.defaultProps,j)X[ce]===void 0&&(X[ce]=j[ce]);return{$$typeof:R,type:te,key:U,ref:Pe,props:X,_owner:E.current}}return ki.Fragment=_,ki.jsx=V,ki.jsxs=V,ki}var Ec;function Vm(){return Ec||(Ec=1,zo.exports=Dm()),zo.exports}var h=Vm(),it=Mo(),Er={},Io={exports:{}},Ke={},bo={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function wm(){return Rc||(Rc=1,(function(C){function R(N,O){var z=N.length;N.push(O);e:for(;0<z;){var u=z-1>>>1,y=N[u];if(0<E(y,O))N[u]=O,N[z]=y,z=u;else break e}}function _(N){return N.length===0?null:N[0]}function J(N){if(N.length===0)return null;var O=N[0],z=N.pop();if(z!==O){N[0]=z;e:for(var u=0,y=N.length,K=y>>>1;u<K;){var Z=2*(u+1)-1,q=N[Z],Q=Z+1,ae=N[Q];if(0>E(q,z))Q<y&&0>E(ae,q)?(N[u]=ae,N[Q]=z,u=Q):(N[u]=q,N[Z]=z,u=Z);else if(Q<y&&0>E(ae,z))N[u]=ae,N[Q]=z,u=Q;else break e}}return O}function E(N,O){var z=N.sortIndex-O.sortIndex;return z!==0?z:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;C.unstable_now=function(){return w.now()}}else{var V=Date,te=V.now();C.unstable_now=function(){return V.now()-te}}var j=[],ve=[],ce=1,X=null,U=3,Pe=!1,ee=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,Ve=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var O=_(ve);O!==null;){if(O.callback===null)J(ve);else if(O.startTime<=N)J(ve),O.sortIndex=O.expirationTime,R(j,O);else break;O=_(ve)}}function G(N){if(H=!1,x(N),!ee)if(_(j)!==null)ee=!0,we(A);else{var O=_(ve);O!==null&&_e(G,O.startTime-N)}}function A(N,O){ee=!1,H&&(H=!1,Ve(ke),ke=-1),Pe=!0;var z=U;try{for(x(O),X=_(j);X!==null&&(!(X.expirationTime>O)||N&&!Wt());){var u=X.callback;if(typeof u=="function"){X.callback=null,U=X.priorityLevel;var y=u(X.expirationTime<=O);O=C.unstable_now(),typeof y=="function"?X.callback=y:X===_(j)&&J(j),x(O)}else J(j);X=_(j)}if(X!==null)var K=!0;else{var Z=_(ve);Z!==null&&_e(G,Z.startTime-O),K=!1}return K}finally{X=null,U=z,Pe=!1}}var F=!1,re=null,ke=-1,It=5,kt=-1;function Wt(){return!(C.unstable_now()-kt<It)}function dt(){if(re!==null){var N=C.unstable_now();kt=N;var O=!0;try{O=re(!0,N)}finally{O?Ye():(F=!1,re=null)}}else F=!1}var Ye;if(typeof xe=="function")Ye=function(){xe(dt)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=dt,Ye=function(){pt.postMessage(null)}}else Ye=function(){B(dt,0)};function we(N){re=N,F||(F=!0,Ye())}function _e(N,O){ke=B(function(){N(C.unstable_now())},O)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(N){N.callback=null},C.unstable_continueExecution=function(){ee||Pe||(ee=!0,we(A))},C.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):It=0<N?Math.floor(1e3/N):5},C.unstable_getCurrentPriorityLevel=function(){return U},C.unstable_getFirstCallbackNode=function(){return _(j)},C.unstable_next=function(N){switch(U){case 1:case 2:case 3:var O=3;break;default:O=U}var z=U;U=O;try{return N()}finally{U=z}},C.unstable_pauseExecution=function(){},C.unstable_requestPaint=function(){},C.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=U;U=N;try{return O()}finally{U=z}},C.unstable_scheduleCallback=function(N,O,z){var u=C.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?u+z:u):z=u,N){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=z+y,N={id:ce++,callback:O,priorityLevel:N,startTime:z,expirationTime:y,sortIndex:-1},z>u?(N.sortIndex=z,R(ve,N),_(j)===null&&N===_(ve)&&(H?(Ve(ke),ke=-1):H=!0,_e(G,z-u))):(N.sortIndex=y,R(j,N),ee||Pe||(ee=!0,we(A))),N},C.unstable_shouldYield=Wt,C.unstable_wrapCallback=function(N){var O=U;return function(){var z=U;U=O;try{return N.apply(this,arguments)}finally{U=z}}}})(Eo)),Eo}var Mc;function Hm(){return Mc||(Mc=1,bo.exports=wm()),bo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function jm(){if(Lc)return Ke;Lc=1;var C=Mo(),R=Hm();function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J=new Set,E={};function w(e,t){V(e,t),V(e+"Capture",t)}function V(e,t){for(E[e]=t,e=0;e<t.length;e++)J.add(t[e])}var te=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,ve=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ce={},X={};function U(e){return j.call(X,e)?!0:j.call(ce,e)?!1:ve.test(e)?X[e]=!0:(ce[e]=!0,!1)}function Pe(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ee(e,t,n,i){if(t===null||typeof t>"u"||Pe(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,i,r,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ve=/[\-:]([a-z])/g;function xe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ve,xe);B[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ve,xe);B[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ve,xe);B[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function x(e,t,n,i){var r=B.hasOwnProperty(t)?B[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ee(t,n,r,i)&&(n=null),i||r===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var G=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),F=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),It=Symbol.for("react.profiler"),kt=Symbol.for("react.provider"),Wt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),N=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,u;function y(e){if(u===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);u=t&&t[1]||""}return`
`+u+e}var K=!1;function Z(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var i=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){i=p}e.call(t.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==a[l]){var s=`
`+r[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function q(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function Q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case F:return"Portal";case It:return"Profiler";case ke:return"StrictMode";case Ye:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wt:return(e.displayName||"Context")+".Consumer";case kt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pt:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=ue(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=Ge(e))}function Lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ue(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mr(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xo(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ne(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oo(e,t){t=t.checked,t!=null&&x(e,"checked",t,!1)}function Lr(e,t){Oo(e,t);var n=ne(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xr(e,t.type,n):t.hasOwnProperty("defaultValue")&&xr(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Do(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xr(e,t,n){(t!=="number"||Ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function cn(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ne(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Or(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(xn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ne(n)}}function wo(e,t){var n=ne(t.value),i=ne(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Ho(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,Bo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Fo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Uo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fo(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var jc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vr(e,t){if(t){if(jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function wr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hr=null;function jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,un=null,mn=null;function Ko(e){if(e=ri(e)){if(typeof Br!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Yi(t),Br(e.stateNode,e.type,t))}}function Yo(e){un?mn?mn.push(e):mn=[e]:un=e}function Go(){if(un){var e=un,t=mn;if(mn=un=null,Ko(e),t)for(e=0;e<t.length;e++)Ko(t[e])}}function Zo(e,t){return e(t)}function Wo(){}var Fr=!1;function Jo(e,t,n){if(Fr)return e(t,n);Fr=!0;try{return Zo(e,t,n)}finally{Fr=!1,(un!==null||mn!==null)&&(Wo(),Go())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var i=Yi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ur=!1;if(te)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Ur=!1}function Bc(e,t,n,i,r,a,o,l,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(f){this.onError(f)}}var Hn=!1,Ci=null,Pi=!1,Kr=null,Fc={onError:function(e){Hn=!0,Ci=e}};function Uc(e,t,n,i,r,a,o,l,s){Hn=!1,Ci=null,Bc.apply(Fc,arguments)}function Kc(e,t,n,i,r,a,o,l,s){if(Uc.apply(this,arguments),Hn){if(Hn){var p=Ci;Hn=!1,Ci=null}else throw Error(_(198));Pi||(Pi=!0,Kr=p)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Jt(e)!==e)throw Error(_(188))}function Yc(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Qo(r),e;if(a===i)return Qo(r),t;a=a.sibling}throw Error(_(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=a;break}if(l===i){o=!0,i=r,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,i=r;break}if(l===i){o=!0,i=a,n=r;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==i)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function $o(e){return e=Yc(e),e!==null?Xo(e):null}function Xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xo(e);if(t!==null)return t;e=e.sibling}return null}var el=R.unstable_scheduleCallback,tl=R.unstable_cancelCallback,Gc=R.unstable_shouldYield,Zc=R.unstable_requestPaint,ye=R.unstable_now,Wc=R.unstable_getCurrentPriorityLevel,Yr=R.unstable_ImmediatePriority,nl=R.unstable_UserBlockingPriority,Ai=R.unstable_NormalPriority,Jc=R.unstable_LowPriority,il=R.unstable_IdlePriority,zi=null,_t=null;function qc(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Xc,Qc=Math.log,$c=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Qc(e)/$c|0)|0}var Ti=64,Ii=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=jn(l):(a&=o,a!==0&&(i=jn(a)))}else o=n&~r,o!==0?i=jn(o):a!==0&&(i=jn(a));if(i===0)return 0;if(t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-at(t),r=1<<n,i|=e[n],t&=~r;return i}function eu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-at(a),l=1<<o,s=r[o];s===-1?((l&n)===0||(l&i)!==0)&&(r[o]=eu(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Gr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rl(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function Zr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function nu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-at(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function Wr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-at(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var ie=0;function al(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ol,Jr,ll,sl,cl,qr=!1,Ei=[],bt=null,Et=null,Rt=null,Fn=new Map,Un=new Map,Mt=[],iu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Kn(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=ri(t),t!==null&&Jr(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function ru(e,t,n,i,r){switch(t){case"focusin":return bt=Kn(bt,e,t,n,i,r),!0;case"dragenter":return Et=Kn(Et,e,t,n,i,r),!0;case"mouseover":return Rt=Kn(Rt,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Fn.set(a,Kn(Fn.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Un.set(a,Kn(Un.get(a)||null,e,t,n,i,r)),!0}return!1}function ml(e){var t=qt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=qo(n),t!==null){e.blockedOn=t,cl(e.priority,function(){ll(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$r(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hr=i,n.target.dispatchEvent(i),Hr=null}else return t=ri(n),t!==null&&Jr(t),e.blockedOn=n,!1;t.shift()}return!0}function dl(e,t,n){Ri(e)&&n.delete(t)}function au(){qr=!1,bt!==null&&Ri(bt)&&(bt=null),Et!==null&&Ri(Et)&&(Et=null),Rt!==null&&Ri(Rt)&&(Rt=null),Fn.forEach(dl),Un.forEach(dl)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,qr||(qr=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,au)))}function Gn(e){function t(r){return Yn(r,e)}if(0<Ei.length){Yn(Ei[0],e);for(var n=1;n<Ei.length;n++){var i=Ei[n];i.blockedOn===e&&(i.blockedOn=null)}}for(bt!==null&&Yn(bt,e),Et!==null&&Yn(Et,e),Rt!==null&&Yn(Rt,e),Fn.forEach(t),Un.forEach(t),n=0;n<Mt.length;n++)i=Mt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)ml(n),n.blockedOn===null&&Mt.shift()}var dn=G.ReactCurrentBatchConfig,Mi=!0;function ou(e,t,n,i){var r=ie,a=dn.transition;dn.transition=null;try{ie=1,Qr(e,t,n,i)}finally{ie=r,dn.transition=a}}function lu(e,t,n,i){var r=ie,a=dn.transition;dn.transition=null;try{ie=4,Qr(e,t,n,i)}finally{ie=r,dn.transition=a}}function Qr(e,t,n,i){if(Mi){var r=$r(e,t,n,i);if(r===null)ha(e,t,i,Li,n),ul(e,i);else if(ru(r,e,t,n,i))i.stopPropagation();else if(ul(e,i),t&4&&-1<iu.indexOf(e)){for(;r!==null;){var a=ri(r);if(a!==null&&ol(a),a=$r(e,t,n,i),a===null&&ha(e,t,i,Li,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else ha(e,t,i,null,n)}}var Li=null;function $r(e,t,n,i){if(Li=null,e=jr(i),e=qt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Li=e,null}function pl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Yr:return 1;case nl:return 4;case Ai:case Jc:return 16;case il:return 536870912;default:return 16}default:return 16}}var Lt=null,Xr=null,xi=null;function _l(){if(xi)return xi;var e,t=Xr,n=t.length,i,r="value"in Lt?Lt.value:Lt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return xi=r.slice(e,1<i?1-i:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function hl(){return!1}function Ze(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Di:hl,this.isPropagationStopped=hl,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Ze(pn),Zn=z({},pn,{view:0,detail:0}),su=Ze(Zn),ta,na,Wn,Vi=z({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(ta=e.screenX-Wn.screenX,na=e.screenY-Wn.screenY):na=ta=0,Wn=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),vl=Ze(Vi),cu=z({},Vi,{dataTransfer:0}),uu=Ze(cu),mu=z({},Zn,{relatedTarget:0}),ia=Ze(mu),du=z({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),pu=Ze(du),_u=z({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hu=Ze(_u),vu=z({},pn,{data:0}),yl=Ze(vu),yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ku[e])?!!t[e]:!1}function ra(){return gu}var Nu=z({},Zn,{key:function(e){if(e.key){var t=yu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Su=Ze(Nu),Cu=z({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fl=Ze(Cu),Pu=z({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Au=Ze(Pu),zu=z({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=Ze(zu),Iu=z({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bu=Ze(Iu),Eu=[9,13,27,32],aa=te&&"CompositionEvent"in window,Jn=null;te&&"documentMode"in document&&(Jn=document.documentMode);var Ru=te&&"TextEvent"in window&&!Jn,kl=te&&(!aa||Jn&&8<Jn&&11>=Jn),gl=" ",Nl=!1;function Sl(e,t){switch(e){case"keyup":return Eu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Mu(e,t){switch(e){case"compositionend":return Cl(t);case"keypress":return t.which!==32?null:(Nl=!0,gl);case"textInput":return e=t.data,e===gl&&Nl?null:e;default:return null}}function Lu(e,t){if(_n)return e==="compositionend"||!aa&&Sl(e,t)?(e=_l(),xi=Xr=Lt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kl&&t.locale!=="ko"?null:t.data;default:return null}}var xu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xu[e.type]:t==="textarea"}function Al(e,t,n,i){Yo(i),t=Fi(t,"onChange"),0<t.length&&(n=new ea("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var qn=null,Qn=null;function Ou(e){Ul(e,0)}function wi(e){var t=kn(e);if(Lo(t))return e}function Du(e,t){if(e==="change")return t}var zl=!1;if(te){var oa;if(te){var la="oninput"in document;if(!la){var Tl=document.createElement("div");Tl.setAttribute("oninput","return;"),la=typeof Tl.oninput=="function"}oa=la}else oa=!1;zl=oa&&(!document.documentMode||9<document.documentMode)}function Il(){qn&&(qn.detachEvent("onpropertychange",bl),Qn=qn=null)}function bl(e){if(e.propertyName==="value"&&wi(Qn)){var t=[];Al(t,Qn,e,jr(e)),Jo(Ou,t)}}function Vu(e,t,n){e==="focusin"?(Il(),qn=t,Qn=n,qn.attachEvent("onpropertychange",bl)):e==="focusout"&&Il()}function wu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(Qn)}function Hu(e,t){if(e==="click")return wi(t)}function ju(e,t){if(e==="input"||e==="change")return wi(t)}function Bu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Bu;function $n(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!j.call(t,r)||!ot(e[r],t[r]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rl(e,t){var n=El(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=El(n)}}function Ml(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ml(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ll(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fu(e){var t=Ll(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ml(n.ownerDocument.documentElement,n)){if(i!==null&&sa(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Rl(n,a);var o=Rl(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uu=te&&"documentMode"in document&&11>=document.documentMode,hn=null,ca=null,Xn=null,ua=!1;function xl(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||hn==null||hn!==Ni(i)||(i=hn,"selectionStart"in i&&sa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xn&&$n(Xn,i)||(Xn=i,i=Fi(ca,"onSelect"),0<i.length&&(t=new ea("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},ma={},Ol={};te&&(Ol=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function ji(e){if(ma[e])return ma[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ol)return ma[e]=t[n];return e}var Dl=ji("animationend"),Vl=ji("animationiteration"),wl=ji("animationstart"),Hl=ji("transitionend"),jl=new Map,Bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){jl.set(e,t),w(t,[e])}for(var da=0;da<Bl.length;da++){var pa=Bl[da],Ku=pa.toLowerCase(),Yu=pa[0].toUpperCase()+pa.slice(1);xt(Ku,"on"+Yu)}xt(Dl,"onAnimationEnd"),xt(Vl,"onAnimationIteration"),xt(wl,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(Hl,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gu=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Fl(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Kc(i,t,void 0,e),e.currentTarget=null}function Ul(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],s=l.instance,p=l.currentTarget;if(l=l.listener,s!==a&&r.isPropagationStopped())break e;Fl(r,l,p),a=s}else for(o=0;o<i.length;o++){if(l=i[o],s=l.instance,p=l.currentTarget,l=l.listener,s!==a&&r.isPropagationStopped())break e;Fl(r,l,p),a=s}}}if(Pi)throw e=Kr,Pi=!1,Kr=null,e}function le(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var i=e+"__bubble";n.has(i)||(Kl(t,e,2,!1),n.add(i))}function _a(e,t,n){var i=0;t&&(i|=4),Kl(n,e,i,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[Bi]){e[Bi]=!0,J.forEach(function(n){n!=="selectionchange"&&(Gu.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,_a("selectionchange",!1,t))}}function Kl(e,t,n,i){switch(pl(t)){case 1:var r=ou;break;case 4:r=lu;break;default:r=Qr}n=r.bind(null,t,n,e),r=void 0,!Ur||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ha(e,t,n,i,r){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;o=o.return}for(;l!==null;){if(o=qt(l),o===null)return;if(s=o.tag,s===5||s===6){i=a=o;continue e}l=l.parentNode}}i=i.return}Jo(function(){var p=a,f=jr(n),k=[];e:{var v=jl.get(e);if(v!==void 0){var S=ea,T=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":S=Su;break;case"focusin":T="focus",S=ia;break;case"focusout":T="blur",S=ia;break;case"beforeblur":case"afterblur":S=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Au;break;case Dl:case Vl:case wl:S=pu;break;case Hl:S=Tu;break;case"scroll":S=su;break;case"wheel":S=bu;break;case"copy":case"cut":case"paste":S=hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=fl}var I=(t&4)!==0,fe=!I&&e==="scroll",m=I?v!==null?v+"Capture":null:v;I=[];for(var c=p,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,m!==null&&(g=Vn(c,m),g!=null&&I.push(ni(c,g,d)))),fe)break;c=c.return}0<I.length&&(v=new S(v,T,null,n,f),k.push({event:v,listeners:I}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==Hr&&(T=n.relatedTarget||n.fromElement)&&(qt(T)||T[gt]))break e;if((S||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,S?(T=n.relatedTarget||n.toElement,S=p,T=T?qt(T):null,T!==null&&(fe=Jt(T),T!==fe||T.tag!==5&&T.tag!==6)&&(T=null)):(S=null,T=p),S!==T)){if(I=vl,g="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(I=fl,g="onPointerLeave",m="onPointerEnter",c="pointer"),fe=S==null?v:kn(S),d=T==null?v:kn(T),v=new I(g,c+"leave",S,n,f),v.target=fe,v.relatedTarget=d,g=null,qt(f)===p&&(I=new I(m,c+"enter",T,n,f),I.target=d,I.relatedTarget=fe,g=I),fe=g,S&&T)t:{for(I=S,m=T,c=0,d=I;d;d=yn(d))c++;for(d=0,g=m;g;g=yn(g))d++;for(;0<c-d;)I=yn(I),c--;for(;0<d-c;)m=yn(m),d--;for(;c--;){if(I===m||m!==null&&I===m.alternate)break t;I=yn(I),m=yn(m)}I=null}else I=null;S!==null&&Yl(k,v,S,I,!1),T!==null&&fe!==null&&Yl(k,fe,T,I,!0)}}e:{if(v=p?kn(p):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var b=Du;else if(Pl(v))if(zl)b=ju;else{b=wu;var M=Vu}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=Hu);if(b&&(b=b(e,p))){Al(k,b,n,f);break e}M&&M(e,v,p),e==="focusout"&&(M=v._wrapperState)&&M.controlled&&v.type==="number"&&xr(v,"number",v.value)}switch(M=p?kn(p):window,e){case"focusin":(Pl(M)||M.contentEditable==="true")&&(hn=M,ca=p,Xn=null);break;case"focusout":Xn=ca=hn=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,xl(k,n,f);break;case"selectionchange":if(Uu)break;case"keydown":case"keyup":xl(k,n,f)}var L;if(aa)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else _n?Sl(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(kl&&n.locale!=="ko"&&(_n||D!=="onCompositionStart"?D==="onCompositionEnd"&&_n&&(L=_l()):(Lt=f,Xr="value"in Lt?Lt.value:Lt.textContent,_n=!0)),M=Fi(p,D),0<M.length&&(D=new yl(D,e,null,n,f),k.push({event:D,listeners:M}),L?D.data=L:(L=Cl(n),L!==null&&(D.data=L)))),(L=Ru?Mu(e,n):Lu(e,n))&&(p=Fi(p,"onBeforeInput"),0<p.length&&(f=new yl("onBeforeInput","beforeinput",null,n,f),k.push({event:f,listeners:p}),f.data=L))}Ul(k,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Vn(e,n),a!=null&&i.unshift(ni(e,a,r)),a=Vn(e,t),a!=null&&i.push(ni(e,a,r))),e=e.return}return i}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yl(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var l=n,s=l.alternate,p=l.stateNode;if(s!==null&&s===i)break;l.tag===5&&p!==null&&(l=p,r?(s=Vn(n,a),s!=null&&o.unshift(ni(n,s,l))):r||(s=Vn(n,a),s!=null&&o.push(ni(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zu=/\r\n?/g,Wu=/\u0000|\uFFFD/g;function Gl(e){return(typeof e=="string"?e:""+e).replace(Zu,`
`).replace(Wu,"")}function Ui(e,t,n){if(t=Gl(t),Gl(e)!==t&&n)throw Error(_(425))}function Ki(){}var va=null,ya=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,Ju=typeof clearTimeout=="function"?clearTimeout:void 0,Zl=typeof Promise=="function"?Promise:void 0,qu=typeof queueMicrotask=="function"?queueMicrotask:typeof Zl<"u"?function(e){return Zl.resolve(null).then(e).catch(Qu)}:ka;function Qu(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Gn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Gn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),ht="__reactFiber$"+fn,ii="__reactProps$"+fn,gt="__reactContainer$"+fn,Na="__reactEvents$"+fn,$u="__reactListeners$"+fn,Xu="__reactHandles$"+fn;function qt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wl(e);e!==null;){if(n=e[ht])return n;e=Wl(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[ht]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Yi(e){return e[ii]||null}var Sa=[],gn=-1;function Dt(e){return{current:e}}function se(e){0>gn||(e.current=Sa[gn],Sa[gn]=null,gn--)}function oe(e,t){gn++,Sa[gn]=e.current,e.current=t}var Vt={},Ee=Dt(Vt),He=Dt(!1),Qt=Vt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function je(e){return e=e.childContextTypes,e!=null}function Gi(){se(He),se(Ee)}function Jl(e,t,n){if(Ee.current!==Vt)throw Error(_(168));oe(Ee,t),oe(He,n)}function ql(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(_(108,ae(e)||"Unknown",r));return z({},n,i)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,Qt=Ee.current,oe(Ee,e),oe(He,He.current),!0}function Ql(e,t,n){var i=e.stateNode;if(!i)throw Error(_(169));n?(e=ql(e,t,Qt),i.__reactInternalMemoizedMergedChildContext=e,se(He),se(Ee),oe(Ee,e)):se(He),oe(He,n)}var Nt=null,Wi=!1,Ca=!1;function $l(e){Nt===null?Nt=[e]:Nt.push(e)}function em(e){Wi=!0,$l(e)}function wt(){if(!Ca&&Nt!==null){Ca=!0;var e=0,t=ie;try{var n=Nt;for(ie=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Nt=null,Wi=!1}catch(r){throw Nt!==null&&(Nt=Nt.slice(e+1)),el(Yr,wt),r}finally{ie=t,Ca=!1}}return null}var Sn=[],Cn=0,Ji=null,qi=0,Qe=[],$e=0,$t=null,St=1,Ct="";function Xt(e,t){Sn[Cn++]=qi,Sn[Cn++]=Ji,Ji=e,qi=t}function Xl(e,t,n){Qe[$e++]=St,Qe[$e++]=Ct,Qe[$e++]=$t,$t=e;var i=St;e=Ct;var r=32-at(i)-1;i&=~(1<<r),n+=1;var a=32-at(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,St=1<<32-at(t)+r|n<<r|i,Ct=a+e}else St=1<<a|n<<r|i,Ct=e}function Pa(e){e.return!==null&&(Xt(e,1),Xl(e,1,0))}function Aa(e){for(;e===Ji;)Ji=Sn[--Cn],Sn[Cn]=null,qi=Sn[--Cn],Sn[Cn]=null;for(;e===$t;)$t=Qe[--$e],Qe[$e]=null,Ct=Qe[--$e],Qe[$e]=null,St=Qe[--$e],Qe[$e]=null}var We=null,Je=null,me=!1,lt=null;function es(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Je=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Je=null,!0):!1;default:return!1}}function za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(me){var t=Je;if(t){var n=t;if(!ts(e,t)){if(za(e))throw Error(_(418));t=Ot(n.nextSibling);var i=We;t&&ts(e,t)?es(i,n):(e.flags=e.flags&-4097|2,me=!1,We=e)}}else{if(za(e))throw Error(_(418));e.flags=e.flags&-4097|2,me=!1,We=e}}}function ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Qi(e){if(e!==We)return!1;if(!me)return ns(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=Je)){if(za(e))throw is(),Error(_(418));for(;t;)es(e,t),t=Ot(t.nextSibling)}if(ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=We?Ot(e.stateNode.nextSibling):null;return!0}function is(){for(var e=Je;e;)e=Ot(e.nextSibling)}function Pn(){Je=We=null,me=!1}function Ia(e){lt===null?lt=[e]:lt.push(e)}var tm=G.ReactCurrentBatchConfig;function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var i=n.stateNode}if(!i)throw Error(_(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=r.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function $i(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rs(e){var t=e._init;return t(e._payload)}function as(e){function t(m,c){if(e){var d=m.deletions;d===null?(m.deletions=[c],m.flags|=16):d.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function i(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function r(m,c){return m=Gt(m,c),m.index=0,m.sibling=null,m}function a(m,c,d){return m.index=d,e?(d=m.alternate,d!==null?(d=d.index,d<c?(m.flags|=2,c):d):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,d,g){return c===null||c.tag!==6?(c=go(d,m.mode,g),c.return=m,c):(c=r(c,d),c.return=m,c)}function s(m,c,d,g){var b=d.type;return b===re?f(m,c,d.props.children,g,d.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===we&&rs(b)===c.type)?(g=r(c,d.props),g.ref=ai(m,c,d),g.return=m,g):(g=Sr(d.type,d.key,d.props,null,m.mode,g),g.ref=ai(m,c,d),g.return=m,g)}function p(m,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=No(d,m.mode,g),c.return=m,c):(c=r(c,d.children||[]),c.return=m,c)}function f(m,c,d,g,b){return c===null||c.tag!==7?(c=sn(d,m.mode,g,b),c.return=m,c):(c=r(c,d),c.return=m,c)}function k(m,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=go(""+c,m.mode,d),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case A:return d=Sr(c.type,c.key,c.props,null,m.mode,d),d.ref=ai(m,null,c),d.return=m,d;case F:return c=No(c,m.mode,d),c.return=m,c;case we:var g=c._init;return k(m,g(c._payload),d)}if(xn(c)||O(c))return c=sn(c,m.mode,d,null),c.return=m,c;$i(m,c)}return null}function v(m,c,d,g){var b=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return b!==null?null:l(m,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case A:return d.key===b?s(m,c,d,g):null;case F:return d.key===b?p(m,c,d,g):null;case we:return b=d._init,v(m,c,b(d._payload),g)}if(xn(d)||O(d))return b!==null?null:f(m,c,d,g,null);$i(m,d)}return null}function S(m,c,d,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(d)||null,l(c,m,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case A:return m=m.get(g.key===null?d:g.key)||null,s(c,m,g,b);case F:return m=m.get(g.key===null?d:g.key)||null,p(c,m,g,b);case we:var M=g._init;return S(m,c,d,M(g._payload),b)}if(xn(g)||O(g))return m=m.get(d)||null,f(c,m,g,b,null);$i(c,g)}return null}function T(m,c,d,g){for(var b=null,M=null,L=c,D=c=0,Te=null;L!==null&&D<d.length;D++){L.index>D?(Te=L,L=null):Te=L.sibling;var $=v(m,L,d[D],g);if($===null){L===null&&(L=Te);break}e&&L&&$.alternate===null&&t(m,L),c=a($,c,D),M===null?b=$:M.sibling=$,M=$,L=Te}if(D===d.length)return n(m,L),me&&Xt(m,D),b;if(L===null){for(;D<d.length;D++)L=k(m,d[D],g),L!==null&&(c=a(L,c,D),M===null?b=L:M.sibling=L,M=L);return me&&Xt(m,D),b}for(L=i(m,L);D<d.length;D++)Te=S(L,m,D,d[D],g),Te!==null&&(e&&Te.alternate!==null&&L.delete(Te.key===null?D:Te.key),c=a(Te,c,D),M===null?b=Te:M.sibling=Te,M=Te);return e&&L.forEach(function(Zt){return t(m,Zt)}),me&&Xt(m,D),b}function I(m,c,d,g){var b=O(d);if(typeof b!="function")throw Error(_(150));if(d=b.call(d),d==null)throw Error(_(151));for(var M=b=null,L=c,D=c=0,Te=null,$=d.next();L!==null&&!$.done;D++,$=d.next()){L.index>D?(Te=L,L=null):Te=L.sibling;var Zt=v(m,L,$.value,g);if(Zt===null){L===null&&(L=Te);break}e&&L&&Zt.alternate===null&&t(m,L),c=a(Zt,c,D),M===null?b=Zt:M.sibling=Zt,M=Zt,L=Te}if($.done)return n(m,L),me&&Xt(m,D),b;if(L===null){for(;!$.done;D++,$=d.next())$=k(m,$.value,g),$!==null&&(c=a($,c,D),M===null?b=$:M.sibling=$,M=$);return me&&Xt(m,D),b}for(L=i(m,L);!$.done;D++,$=d.next())$=S(L,m,D,$.value,g),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?D:$.key),c=a($,c,D),M===null?b=$:M.sibling=$,M=$);return e&&L.forEach(function(xm){return t(m,xm)}),me&&Xt(m,D),b}function fe(m,c,d,g){if(typeof d=="object"&&d!==null&&d.type===re&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case A:e:{for(var b=d.key,M=c;M!==null;){if(M.key===b){if(b=d.type,b===re){if(M.tag===7){n(m,M.sibling),c=r(M,d.props.children),c.return=m,m=c;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===we&&rs(b)===M.type){n(m,M.sibling),c=r(M,d.props),c.ref=ai(m,M,d),c.return=m,m=c;break e}n(m,M);break}else t(m,M);M=M.sibling}d.type===re?(c=sn(d.props.children,m.mode,g,d.key),c.return=m,m=c):(g=Sr(d.type,d.key,d.props,null,m.mode,g),g.ref=ai(m,c,d),g.return=m,m=g)}return o(m);case F:e:{for(M=d.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(m,c.sibling),c=r(c,d.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=No(d,m.mode,g),c.return=m,m=c}return o(m);case we:return M=d._init,fe(m,c,M(d._payload),g)}if(xn(d))return T(m,c,d,g);if(O(d))return I(m,c,d,g);$i(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(m,c.sibling),c=r(c,d),c.return=m,m=c):(n(m,c),c=go(d,m.mode,g),c.return=m,m=c),o(m)):n(m,c)}return fe}var An=as(!0),os=as(!1),Xi=Dt(null),er=null,zn=null,ba=null;function Ea(){ba=zn=er=null}function Ra(e){var t=Xi.current;se(Xi),e._currentValue=t}function Ma(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){er=e,ba=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(er===null)throw Error(_(308));zn=e,er.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var en=null;function La(e){en===null?en=[e]:en.push(e)}function ls(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,La(t)):(n.next=r.next,r.next=n),t.interleaved=n,Pt(e,i)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(W&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Pt(e,n)}return r=i.interleaved,r===null?(t.next=t,La(i)):(t.next=r.next,r.next=t),i.interleaved=t,Pt(e,n)}function tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Wr(e,n)}}function cs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nr(e,t,n,i){var r=e.updateQueue;Ht=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,p=s.next;s.next=null,o===null?a=p:o.next=p,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=p:l.next=p,f.lastBaseUpdate=s))}if(a!==null){var k=r.baseState;o=0,f=p=s=null,l=a;do{var v=l.lane,S=l.eventTime;if((i&v)===v){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=e,I=l;switch(v=t,S=n,I.tag){case 1:if(T=I.payload,typeof T=="function"){k=T.call(S,k,v);break e}k=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=I.payload,v=typeof T=="function"?T.call(S,k,v):T,v==null)break e;k=z({},k,v);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=r.effects,v===null?r.effects=[l]:v.push(l))}else S={eventTime:S,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(p=f=S,s=k):f=f.next=S,o|=v;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;v=l,l=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(!0);if(f===null&&(s=k),r.baseState=s,r.firstBaseUpdate=p,r.lastBaseUpdate=f,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=k}}function us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_(191,r));r.call(i)}}}var oi={},vt=Dt(oi),li=Dt(oi),si=Dt(oi);function tn(e){if(e===oi)throw Error(_(174));return e}function Oa(e,t){switch(oe(si,t),oe(li,e),oe(vt,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dr(t,e)}se(vt),oe(vt,t)}function In(){se(vt),se(li),se(si)}function ms(e){tn(si.current);var t=tn(vt.current),n=Dr(t,e.type);t!==n&&(oe(li,e),oe(vt,n))}function Da(e){li.current===e&&(se(vt),se(li))}var de=Dt(0);function ir(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=[];function wa(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var rr=G.ReactCurrentDispatcher,Ha=G.ReactCurrentBatchConfig,nn=0,pe=null,Se=null,Ae=null,ar=!1,ci=!1,ui=0,nm=0;function Re(){throw Error(_(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Ba(e,t,n,i,r,a){if(nn=a,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rr.current=e===null||e.memoizedState===null?om:lm,e=n(i,r),ci){a=0;do{if(ci=!1,ui=0,25<=a)throw Error(_(301));a+=1,Ae=Se=null,t.updateQueue=null,rr.current=sm,e=n(i,r)}while(ci)}if(rr.current=sr,t=Se!==null&&Se.next!==null,nn=0,Ae=Se=pe=null,ar=!1,t)throw Error(_(300));return e}function Fa(){var e=ui!==0;return ui=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function et(){if(Se===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ae===null?pe.memoizedState:Ae.next;if(t!==null)Ae=t,Se=e;else{if(e===null)throw Error(_(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function mi(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=et(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var i=Se,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var l=o=null,s=null,p=a;do{var f=p.lane;if((nn&f)===f)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var k={lane:f,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(l=s=k,o=i):s=s.next=k,pe.lanes|=f,rn|=f}p=p.next}while(p!==null&&p!==a);s===null?o=i:s.next=l,ot(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=s,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,pe.lanes|=a,rn|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=et(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);ot(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ds(){}function ps(e,t){var n=pe,i=et(),r=t(),a=!ot(i.memoizedState,r);if(a&&(i.memoizedState=r,Be=!0),i=i.queue,Ya(vs.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,di(9,hs.bind(null,n,i,r,t),void 0,null),ze===null)throw Error(_(349));(nn&30)!==0||_s(n,t,r)}return r}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,i){t.value=n,t.getSnapshot=i,ys(t)&&fs(e)}function vs(e,t,n){return n(function(){ys(t)&&fs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function fs(e){var t=Pt(e,1);t!==null&&mt(t,e,1,-1)}function ks(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,pe,e),[t.memoizedState,e]}function di(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function gs(){return et().memoizedState}function or(e,t,n,i){var r=yt();pe.flags|=e,r.memoizedState=di(1|t,n,void 0,i===void 0?null:i)}function lr(e,t,n,i){var r=et();i=i===void 0?null:i;var a=void 0;if(Se!==null){var o=Se.memoizedState;if(a=o.destroy,i!==null&&ja(i,o.deps)){r.memoizedState=di(t,n,a,i);return}}pe.flags|=e,r.memoizedState=di(1|t,n,a,i)}function Ns(e,t){return or(8390656,8,e,t)}function Ya(e,t){return lr(2048,8,e,t)}function Ss(e,t){return lr(4,2,e,t)}function Cs(e,t){return lr(4,4,e,t)}function Ps(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function As(e,t,n){return n=n!=null?n.concat([e]):null,lr(4,4,Ps.bind(null,t,e),n)}function Ga(){}function zs(e,t){var n=et();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=et();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Is(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(ot(n,t)||(n=rl(),pe.lanes|=n,rn|=n,e.baseState=!0),t)}function im(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var i=Ha.transition;Ha.transition={};try{e(!1),t()}finally{ie=n,Ha.transition=i}}function bs(){return et().memoizedState}function rm(e,t,n){var i=Kt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e))Rs(t,n);else if(n=ls(e,t,n,i),n!==null){var r=De();mt(n,e,i,r),Ms(n,t,i)}}function am(e,t,n){var i=Kt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))Rs(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(r.hasEagerState=!0,r.eagerState=l,ot(l,o)){var s=t.interleaved;s===null?(r.next=r,La(t)):(r.next=s.next,s.next=r),t.interleaved=r;return}}catch{}finally{}n=ls(e,t,r,i),n!==null&&(r=De(),mt(n,e,i,r),Ms(n,t,i))}}function Es(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Rs(e,t){ci=ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Wr(e,n)}}var sr={readContext:Xe,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},om={readContext:Xe,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Ns,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,or(4194308,4,Ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return or(4194308,4,e,t)},useInsertionEffect:function(e,t){return or(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=yt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=rm.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:Ga,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=im.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=pe,r=yt();if(me){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ze===null)throw Error(_(349));(nn&30)!==0||_s(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Ns(vs.bind(null,i,a,e),[e]),i.flags|=2048,di(9,hs.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=ze.identifierPrefix;if(me){var n=Ct,i=St;n=(i&~(1<<32-at(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lm={readContext:Xe,useCallback:zs,useContext:Xe,useEffect:Ya,useImperativeHandle:As,useInsertionEffect:Ss,useLayoutEffect:Cs,useMemo:Ts,useReducer:Ua,useRef:gs,useState:function(){return Ua(mi)},useDebugValue:Ga,useDeferredValue:function(e){var t=et();return Is(t,Se.memoizedState,e)},useTransition:function(){var e=Ua(mi)[0],t=et().memoizedState;return[e,t]},useMutableSource:ds,useSyncExternalStore:ps,useId:bs,unstable_isNewReconciler:!1},sm={readContext:Xe,useCallback:zs,useContext:Xe,useEffect:Ya,useImperativeHandle:As,useInsertionEffect:Ss,useLayoutEffect:Cs,useMemo:Ts,useReducer:Ka,useRef:gs,useState:function(){return Ka(mi)},useDebugValue:Ga,useDeferredValue:function(e){var t=et();return Se===null?t.memoizedState=e:Is(t,Se.memoizedState,e)},useTransition:function(){var e=Ka(mi)[0],t=et().memoizedState;return[e,t]},useMutableSource:ds,useSyncExternalStore:ps,useId:bs,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Za(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cr={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=De(),r=Kt(e),a=At(i,r);a.payload=t,n!=null&&(a.callback=n),t=jt(e,a,r),t!==null&&(mt(t,e,r,i),tr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=De(),r=Kt(e),a=At(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=jt(e,a,r),t!==null&&(mt(t,e,r,i),tr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),i=Kt(e),r=At(n,i);r.tag=2,t!=null&&(r.callback=t),t=jt(e,r,i),t!==null&&(mt(t,e,i,n),tr(t,e,i))}};function Ls(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,i)||!$n(r,a):!0}function xs(e,t,n){var i=!1,r=Vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Xe(a):(r=je(t)?Qt:Ee.current,i=t.contextTypes,a=(i=i!=null)?Nn(e,r):Vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Os(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},xa(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=Xe(a):(a=je(t)?Qt:Ee.current,r.context=Nn(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Za(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&cr.enqueueReplaceState(r,r.state,null),nr(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",i=t;do n+=q(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){vr||(vr=!0,mo=i),qa(e,t)},n}function Vs(e,t,n){n=At(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){qa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){qa(e,t),typeof i!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ws(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cm;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Cm.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,i,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var um=G.ReactCurrentOwner,Be=!1;function Oe(e,t,n,i){t.child=e===null?os(t,null,n,i):An(t,e.child,n,i)}function Bs(e,t,n,i,r){n=n.render;var a=t.ref;return Tn(t,r),i=Ba(e,t,n,i,a,r),n=Fa(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,zt(e,t,r)):(me&&n&&Pa(t),t.flags|=1,Oe(e,t,i,r),t.child)}function Fs(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!ko(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,i,r)):(e=Sr(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&r)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,i)&&e.ref===t.ref)return zt(e,t,r)}return t.flags|=1,e=Gt(a,i),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if($n(a,i)&&e.ref===t.ref)if(Be=!1,t.pendingProps=i=a,(e.lanes&r)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,zt(e,t,r)}return Qa(e,t,n,i,r)}function Ks(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Rn,qe),qe|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Rn,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,oe(Rn,qe),qe|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,oe(Rn,qe),qe|=i;return Oe(e,t,r,n),t.child}function Ys(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,i,r){var a=je(n)?Qt:Ee.current;return a=Nn(t,a),Tn(t,r),n=Ba(e,t,n,i,a,r),i=Fa(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,zt(e,t,r)):(me&&i&&Pa(t),t.flags|=1,Oe(e,t,n,r),t.child)}function Gs(e,t,n,i,r){if(je(n)){var a=!0;Zi(t)}else a=!1;if(Tn(t,r),t.stateNode===null)mr(e,t),xs(t,n,i),Wa(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Xe(p):(p=je(n)?Qt:Ee.current,p=Nn(t,p));var f=n.getDerivedStateFromProps,k=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||s!==p)&&Os(t,o,i,p),Ht=!1;var v=t.memoizedState;o.state=v,nr(t,i,o,r),s=t.memoizedState,l!==i||v!==s||He.current||Ht?(typeof f=="function"&&(Za(t,n,f,i),s=t.memoizedState),(l=Ht||Ls(t,n,l,i,v,s,p))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),o.props=i,o.state=s,o.context=p,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,ss(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:st(t.type,l),o.props=p,k=t.pendingProps,v=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xe(s):(s=je(n)?Qt:Ee.current,s=Nn(t,s));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==k||v!==s)&&Os(t,o,i,s),Ht=!1,v=t.memoizedState,o.state=v,nr(t,i,o,r);var T=t.memoizedState;l!==k||v!==T||He.current||Ht?(typeof S=="function"&&(Za(t,n,S,i),T=t.memoizedState),(p=Ht||Ls(t,n,p,i,v,T,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,T,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,T,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),o.props=i,o.state=T,o.context=s,i=p):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),i=!1)}return $a(e,t,n,i,a,r)}function $a(e,t,n,i,r,a){Ys(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&Ql(t,n,!1),zt(e,t,a);i=t.stateNode,um.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=An(t,e.child,null,a),t.child=An(t,null,l,a)):Oe(e,t,l,a),t.memoizedState=i.state,r&&Ql(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?Jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jl(e,t.context,!1),Oa(e,t.containerInfo)}function Ws(e,t,n,i,r){return Pn(),Ia(r),t.flags|=256,Oe(e,t,n,i),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Js(e,t,n){var i=t.pendingProps,r=de.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),oe(de,r&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Cr(o,i,0,null),e=sn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=eo(n),t.memoizedState=Xa,e):to(t,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return mm(e,t,o,i,l,r,n);if(a){a=i.fallback,o=t.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:i.children};return(o&1)===0&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=s,t.deletions=null):(i=Gt(r,s),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=Gt(l,a):(a=sn(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Xa,i}return a=e.child,e=a.sibling,i=Gt(a,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function to(e,t){return t=Cr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ur(e,t,n,i){return i!==null&&Ia(i),An(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n,i,r,a,o){if(n)return t.flags&256?(t.flags&=-257,i=Ja(Error(_(422))),ur(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=Cr({mode:"visible",children:i.children},r,0,null),a=sn(a,r,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,(t.mode&1)!==0&&An(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=Xa,a);if((t.mode&1)===0)return ur(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(_(419)),i=Ja(a,i,void 0),ur(e,t,o,i)}if(l=(o&e.childLanes)!==0,Be||l){if(i=ze,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Pt(e,r),mt(i,e,r,-1))}return fo(),i=Ja(Error(_(421))),ur(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Je=Ot(r.nextSibling),We=t,me=!0,lt=null,e!==null&&(Qe[$e++]=St,Qe[$e++]=Ct,Qe[$e++]=$t,St=e.id,Ct=e.overflow,$t=t),t=to(t,i.children),t.flags|=4096,t)}function qs(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ma(e.return,t,n)}function no(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Qs(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(Oe(e,t,i.children,n),i=de.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qs(e,n,t);else if(e.tag===19)qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(oe(de,i),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ir(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),no(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ir(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}no(t,!0,n,null,a);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dm(e,t,n){switch(t.tag){case 3:Zs(t),Pn();break;case 5:ms(t);break;case 1:je(t.type)&&Zi(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;oe(Xi,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(oe(de,de.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Js(e,t,n):(oe(de,de.current&1),e=zt(e,t,n),e!==null?e.sibling:null);oe(de,de.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Qs(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(de,de.current),i)break;return null;case 22:case 23:return t.lanes=0,Ks(e,t,n)}return zt(e,t,n)}var $s,io,Xs,ec;$s=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},io=function(){},Xs=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,tn(vt.current);var a=null;switch(n){case"input":r=Mr(e,r),i=Mr(e,i),a=[];break;case"select":r=z({},r,{value:void 0}),i=z({},i,{value:void 0}),a=[];break;case"textarea":r=Or(e,r),i=Or(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ki)}Vr(n,i);var o;n=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var l=r[p];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(E.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in i){var s=i[p];if(l=r!=null?r[p]:void 0,i.hasOwnProperty(p)&&s!==l&&(s!=null||l!=null))if(p==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(E.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&le("scroll",e),a||l===s||(a=[])):(a=a||[]).push(p,s))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}},ec=function(e,t,n,i){n!==i&&(t.flags|=4)};function pi(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function pm(e,t,n){var i=t.pendingProps;switch(Aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return je(t.type)&&Gi(),Me(t),null;case 3:return i=t.stateNode,In(),se(He),se(Ee),wa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lt!==null&&(ho(lt),lt=null))),io(e,t),Me(t),null;case 5:Da(t);var r=tn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)Xs(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(_(166));return Me(t),null}if(e=tn(vt.current),Qi(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[ht]=t,i[ii]=a,e=(t.mode&1)!==0,n){case"dialog":le("cancel",i),le("close",i);break;case"iframe":case"object":case"embed":le("load",i);break;case"video":case"audio":for(r=0;r<ei.length;r++)le(ei[r],i);break;case"source":le("error",i);break;case"img":case"image":case"link":le("error",i),le("load",i);break;case"details":le("toggle",i);break;case"input":xo(i,a),le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},le("invalid",i);break;case"textarea":Vo(i,a),le("invalid",i)}Vr(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ui(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ui(i.textContent,l,e),r=["children",""+l]):E.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",i)}switch(n){case"input":gi(i),Do(i,a,!0);break;case"textarea":gi(i),Ho(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ki)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[ht]=t,e[ii]=i,$s(e,t,!1,!1),t.stateNode=e;e:{switch(o=wr(n,i),n){case"dialog":le("cancel",e),le("close",e),r=i;break;case"iframe":case"object":case"embed":le("load",e),r=i;break;case"video":case"audio":for(r=0;r<ei.length;r++)le(ei[r],e);r=i;break;case"source":le("error",e),r=i;break;case"img":case"image":case"link":le("error",e),le("load",e),r=i;break;case"details":le("toggle",e),r=i;break;case"input":xo(e,i),r=Mr(e,i),le("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=z({},i,{value:void 0}),le("invalid",e);break;case"textarea":Vo(e,i),r=Or(e,i),le("invalid",e);break;default:r=i}Vr(n,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Uo(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bo(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(E.hasOwnProperty(a)?s!=null&&a==="onScroll"&&le("scroll",e):s!=null&&x(e,a,s,o))}switch(n){case"input":gi(e),Do(e,i,!1);break;case"textarea":gi(e),Ho(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ne(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?cn(e,!!i.multiple,a,!1):i.defaultValue!=null&&cn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(_(166));if(n=tn(si.current),tn(vt.current),Qi(t)){if(i=t.stateNode,n=t.memoizedProps,i[ht]=t,(a=i.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Ui(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ht]=t,t.stateNode=i}return Me(t),null;case 13:if(se(de),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&Je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)is(),Pn(),t.flags|=98560,a=!1;else if(a=Qi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[ht]=t}else Pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else lt!==null&&(ho(lt),lt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(de.current&1)!==0?Ce===0&&(Ce=3):fo())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return In(),io(e,t),e===null&&ti(t.stateNode.containerInfo),Me(t),null;case 10:return Ra(t.type._context),Me(t),null;case 17:return je(t.type)&&Gi(),Me(t),null;case 19:if(se(de),a=t.memoizedState,a===null)return Me(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)pi(a,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ir(e),o!==null){for(t.flags|=128,pi(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(de,de.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Mn&&(t.flags|=128,i=!0,pi(a,!1),t.lanes=4194304)}else{if(!i)if(e=ir(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!me)return Me(t),null}else 2*ye()-a.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,i=!0,pi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=de.current,oe(de,i?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return yo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function _m(e,t){switch(Aa(t),t.tag){case 1:return je(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),se(He),se(Ee),wa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(se(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(de),null;case 4:return In(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var dr=!1,Le=!1,hm=typeof WeakSet=="function"?WeakSet:Set,P=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){he(e,t,i)}else n.current=null}function ro(e,t,n){try{n()}catch(i){he(e,t,i)}}var tc=!1;function vm(e,t){if(va=Mi,e=Ll(),sa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,p=0,f=0,k=e,v=null;t:for(;;){for(var S;k!==n||r!==0&&k.nodeType!==3||(l=o+r),k!==a||i!==0&&k.nodeType!==3||(s=o+i),k.nodeType===3&&(o+=k.nodeValue.length),(S=k.firstChild)!==null;)v=k,k=S;for(;;){if(k===e)break t;if(v===n&&++p===r&&(l=o),v===a&&++f===i&&(s=o),(S=k.nextSibling)!==null)break;k=v,v=k.parentNode}k=S}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:e,selectionRange:n},Mi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var T=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var I=T.memoizedProps,fe=T.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:st(t.type,I),fe);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(g){he(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return T=tc,tc=!1,T}function _i(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&ro(t,n,a)}r=r.next}while(r!==i)}}function pr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function ao(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[ii],delete t[Na],delete t[$u],delete t[Xu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(i!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function lo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var Ie=null,ct=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:Le||En(n,t);case 6:var i=Ie,r=ct;Ie=null,Bt(e,t,n),Ie=i,ct=r,Ie!==null&&(ct?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ct?(e=Ie,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Gn(e)):ga(Ie,n.stateNode));break;case 4:i=Ie,r=ct,Ie=n.stateNode.containerInfo,ct=!0,Bt(e,t,n),Ie=i,ct=r;break;case 0:case 11:case 14:case 15:if(!Le&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&ro(n,t,o),r=r.next}while(r!==i)}Bt(e,t,n);break;case 1:if(!Le&&(En(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){he(n,t,l)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Le=(i=Le)||n.memoizedState!==null,Bt(e,t,n),Le=i):Bt(e,t,n);break;default:Bt(e,t,n)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hm),t.forEach(function(i){var r=Am.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,ct=!1;break e;case 3:Ie=l.stateNode.containerInfo,ct=!0;break e;case 4:Ie=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ie===null)throw Error(_(160));ac(a,o,r),Ie=null,ct=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(p){he(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),ft(e),i&4){try{_i(3,e,e.return),pr(3,e)}catch(I){he(e,e.return,I)}try{_i(5,e,e.return)}catch(I){he(e,e.return,I)}}break;case 1:ut(t,e),ft(e),i&512&&n!==null&&En(n,n.return);break;case 5:if(ut(t,e),ft(e),i&512&&n!==null&&En(n,n.return),e.flags&32){var r=e.stateNode;try{On(r,"")}catch(I){he(e,e.return,I)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Oo(r,a),wr(l,o);var p=wr(l,a);for(o=0;o<s.length;o+=2){var f=s[o],k=s[o+1];f==="style"?Uo(r,k):f==="dangerouslySetInnerHTML"?Bo(r,k):f==="children"?On(r,k):x(r,f,k,p)}switch(l){case"input":Lr(r,a);break;case"textarea":wo(r,a);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?cn(r,!!a.multiple,S,!1):v!==!!a.multiple&&(a.defaultValue!=null?cn(r,!!a.multiple,a.defaultValue,!0):cn(r,!!a.multiple,a.multiple?[]:"",!1))}r[ii]=a}catch(I){he(e,e.return,I)}}break;case 6:if(ut(t,e),ft(e),i&4){if(e.stateNode===null)throw Error(_(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(I){he(e,e.return,I)}}break;case 3:if(ut(t,e),ft(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(I){he(e,e.return,I)}break;case 4:ut(t,e),ft(e);break;case 13:ut(t,e),ft(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(uo=ye())),i&4&&oc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(p=Le)||f,ut(t,e),Le=p):ut(t,e),ft(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!f&&(e.mode&1)!==0)for(P=e,f=e.child;f!==null;){for(k=P=f;P!==null;){switch(v=P,S=v.child,v.tag){case 0:case 11:case 14:case 15:_i(4,v,v.return);break;case 1:En(v,v.return);var T=v.stateNode;if(typeof T.componentWillUnmount=="function"){i=v,n=v.return;try{t=i,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(I){he(i,n,I)}}break;case 5:En(v,v.return);break;case 22:if(v.memoizedState!==null){uc(k);continue}}S!==null?(S.return=v,P=S):uc(k)}f=f.sibling}e:for(f=null,k=e;;){if(k.tag===5){if(f===null){f=k;try{r=k.stateNode,p?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=k.stateNode,s=k.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Fo("display",o))}catch(I){he(e,e.return,I)}}}else if(k.tag===6){if(f===null)try{k.stateNode.nodeValue=p?"":k.memoizedProps}catch(I){he(e,e.return,I)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;f===k&&(f=null),k=k.return}f===k&&(f=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ut(t,e),ft(e),i&4&&oc(e);break;case 21:break;default:ut(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ic(n)){var i=n;break e}n=n.return}throw Error(_(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(On(r,""),i.flags&=-33);var a=rc(e);lo(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=rc(e);oo(e,l,o);break;default:throw Error(_(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e,t,n){P=e,sc(e)}function sc(e,t,n){for(var i=(e.mode&1)!==0;P!==null;){var r=P,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dr;if(!o){var l=r.alternate,s=l!==null&&l.memoizedState!==null||Le;l=dr;var p=Le;if(dr=o,(Le=s)&&!p)for(P=r;P!==null;)o=P,s=o.child,o.tag===22&&o.memoizedState!==null?mc(r):s!==null?(s.return=o,P=s):mc(r);for(;a!==null;)P=a,sc(a),a=a.sibling;P=r,dr=l,Le=p}cc(e)}else(r.subtreeFlags&8772)!==0&&a!==null?(a.return=r,P=a):cc(e)}}function cc(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||pr(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Le)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&us(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}us(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var f=p.memoizedState;if(f!==null){var k=f.dehydrated;k!==null&&Gn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Le||t.flags&512&&ao(t)}catch(v){he(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function uc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pr(4,t)}catch(s){he(t,n,s)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(s){he(t,r,s)}}var a=t.return;try{ao(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{ao(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var fm=Math.ceil,_r=G.ReactCurrentDispatcher,so=G.ReactCurrentOwner,tt=G.ReactCurrentBatchConfig,W=0,ze=null,ge=null,be=0,qe=0,Rn=Dt(0),Ce=0,hi=null,rn=0,hr=0,co=0,vi=null,Fe=null,uo=0,Mn=1/0,Tt=null,vr=!1,mo=null,Ft=null,yr=!1,Ut=null,fr=0,yi=0,po=null,kr=-1,gr=0;function De(){return(W&6)!==0?ye():kr!==-1?kr:kr=ye()}function Kt(e){return(e.mode&1)===0?1:(W&2)!==0&&be!==0?be&-be:tm.transition!==null?(gr===0&&(gr=rl()),gr):(e=ie,e!==0||(e=window.event,e=e===void 0?16:pl(e.type)),e)}function mt(e,t,n,i){if(50<yi)throw yi=0,po=null,Error(_(185));Bn(e,n,i),((W&2)===0||e!==ze)&&(e===ze&&((W&2)===0&&(hr|=n),Ce===4&&Yt(e,be)),Ue(e,i),n===1&&W===0&&(t.mode&1)===0&&(Mn=ye()+500,Wi&&wt()))}function Ue(e,t){var n=e.callbackNode;tu(e,t);var i=bi(e,e===ze?be:0);if(i===0)n!==null&&tl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&tl(n),t===1)e.tag===0?em(pc.bind(null,e)):$l(pc.bind(null,e)),qu(function(){(W&6)===0&&wt()}),n=null;else{switch(al(i)){case 1:n=Yr;break;case 4:n=nl;break;case 16:n=Ai;break;case 536870912:n=il;break;default:n=Ai}n=Nc(n,dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dc(e,t){if(kr=-1,gr=0,(W&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var i=bi(e,e===ze?be:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Nr(e,i);else{t=i;var r=W;W|=2;var a=hc();(ze!==e||be!==t)&&(Tt=null,Mn=ye()+500,on(e,t));do try{Nm();break}catch(l){_c(e,l)}while(!0);Ea(),_r.current=a,W=r,ge!==null?t=0:(ze=null,be=0,t=Ce)}if(t!==0){if(t===2&&(r=Gr(e),r!==0&&(i=r,t=_o(e,r))),t===1)throw n=hi,on(e,0),Yt(e,i),Ue(e,ye()),n;if(t===6)Yt(e,i);else{if(r=e.current.alternate,(i&30)===0&&!km(r)&&(t=Nr(e,i),t===2&&(a=Gr(e),a!==0&&(i=a,t=_o(e,a))),t===1))throw n=hi,on(e,0),Yt(e,i),Ue(e,ye()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(_(345));case 2:ln(e,Fe,Tt);break;case 3:if(Yt(e,i),(i&130023424)===i&&(t=uo+500-ye(),10<t)){if(bi(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){De(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ka(ln.bind(null,e,Fe,Tt),t);break}ln(e,Fe,Tt);break;case 4:if(Yt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-at(i);a=1<<o,o=t[o],o>r&&(r=o),i&=~a}if(i=r,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fm(i/1960))-i,10<i){e.timeoutHandle=ka(ln.bind(null,e,Fe,Tt),i);break}ln(e,Fe,Tt);break;case 5:ln(e,Fe,Tt);break;default:throw Error(_(329))}}}return Ue(e,ye()),e.callbackNode===n?dc.bind(null,e):null}function _o(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Nr(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&ho(t)),e}function ho(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ot(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~co,t&=~hr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),i=1<<n;e[n]=-1,t&=~i}}function pc(e){if((W&6)!==0)throw Error(_(327));Ln();var t=bi(e,0);if((t&1)===0)return Ue(e,ye()),null;var n=Nr(e,t);if(e.tag!==0&&n===2){var i=Gr(e);i!==0&&(t=i,n=_o(e,i))}if(n===1)throw n=hi,on(e,0),Yt(e,t),Ue(e,ye()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Fe,Tt),Ue(e,ye()),null}function vo(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Mn=ye()+500,Wi&&wt())}}function an(e){Ut!==null&&Ut.tag===0&&(W&6)===0&&Ln();var t=W;W|=1;var n=tt.transition,i=ie;try{if(tt.transition=null,ie=1,e)return e()}finally{ie=i,tt.transition=n,W=t,(W&6)===0&&wt()}}function yo(){qe=Rn.current,se(Rn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ju(n)),ge!==null)for(n=ge.return;n!==null;){var i=n;switch(Aa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gi();break;case 3:In(),se(He),se(Ee),wa();break;case 5:Da(i);break;case 4:In();break;case 13:se(de);break;case 19:se(de);break;case 10:Ra(i.type._context);break;case 22:case 23:yo()}n=n.return}if(ze=e,ge=e=Gt(e.current,null),be=qe=t,Ce=0,hi=null,co=hr=rn=0,Fe=vi=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}en=null}return e}function _c(e,t){do{var n=ge;try{if(Ea(),rr.current=sr,ar){for(var i=pe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ar=!1}if(nn=0,Ae=Se=pe=null,ci=!1,ui=0,so.current=null,n===null||n.return===null){Ce=1,hi=t,ge=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,f=l,k=f.tag;if((f.mode&1)===0&&(k===0||k===11||k===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Hs(o);if(S!==null){S.flags&=-257,js(S,o,l,a,t),S.mode&1&&ws(a,p,t),t=S,s=p;var T=t.updateQueue;if(T===null){var I=new Set;I.add(s),t.updateQueue=I}else T.add(s);break e}else{if((t&1)===0){ws(a,p,t),fo();break e}s=Error(_(426))}}else if(me&&l.mode&1){var fe=Hs(o);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),js(fe,o,l,a,t),Ia(bn(s,l));break e}}a=s=bn(s,l),Ce!==4&&(Ce=2),vi===null?vi=[a]:vi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Ds(a,s,t);cs(a,m);break e;case 1:l=s;var c=a.type,d=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ft===null||!Ft.has(d)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=Vs(a,l,t);cs(a,g);break e}}a=a.return}while(a!==null)}yc(n)}catch(b){t=b,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function hc(){var e=_r.current;return _r.current=sr,e===null?sr:e}function fo(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),ze===null||(rn&268435455)===0&&(hr&268435455)===0||Yt(ze,be)}function Nr(e,t){var n=W;W|=2;var i=hc();(ze!==e||be!==t)&&(Tt=null,on(e,t));do try{gm();break}catch(r){_c(e,r)}while(!0);if(Ea(),W=n,_r.current=i,ge!==null)throw Error(_(261));return ze=null,be=0,Ce}function gm(){for(;ge!==null;)vc(ge)}function Nm(){for(;ge!==null&&!Gc();)vc(ge)}function vc(e){var t=gc(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?yc(e):ge=t,so.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pm(n,t,qe),n!==null){ge=n;return}}else{if(n=_m(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ce===0&&(Ce=5)}function ln(e,t,n){var i=ie,r=tt.transition;try{tt.transition=null,ie=1,Sm(e,t,n,i)}finally{tt.transition=r,ie=i}return null}function Sm(e,t,n,i){do Ln();while(Ut!==null);if((W&6)!==0)throw Error(_(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nu(e,a),e===ze&&(ge=ze=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yr||(yr=!0,Nc(Ai,function(){return Ln(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=tt.transition,tt.transition=null;var o=ie;ie=1;var l=W;W|=4,so.current=null,vm(e,n),lc(n,e),Fu(ya),Mi=!!va,ya=va=null,e.current=n,ym(n),Zc(),W=l,ie=o,tt.transition=a}else e.current=n;if(yr&&(yr=!1,Ut=e,fr=r),a=e.pendingLanes,a===0&&(Ft=null),qc(n.stateNode),Ue(e,ye()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vr)throw vr=!1,e=mo,mo=null,e;return(fr&1)!==0&&e.tag!==0&&Ln(),a=e.pendingLanes,(a&1)!==0?e===po?yi++:(yi=0,po=e):yi=0,wt(),null}function Ln(){if(Ut!==null){var e=al(fr),t=tt.transition,n=ie;try{if(tt.transition=null,ie=16>e?16:e,Ut===null)var i=!1;else{if(e=Ut,Ut=null,fr=0,(W&6)!==0)throw Error(_(331));var r=W;for(W|=4,P=e.current;P!==null;){var a=P,o=a.child;if((P.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var p=l[s];for(P=p;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:_i(8,f,a)}var k=f.child;if(k!==null)k.return=f,P=k;else for(;P!==null;){f=P;var v=f.sibling,S=f.return;if(nc(f),f===p){P=null;break}if(v!==null){v.return=S,P=v;break}P=S}}}var T=a.alternate;if(T!==null){var I=T.child;if(I!==null){T.child=null;do{var fe=I.sibling;I.sibling=null,I=fe}while(I!==null)}}P=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:_i(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,P=m;break e}P=a.return}}var c=e.current;for(P=c;P!==null;){o=P;var d=o.child;if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,P=d;else e:for(o=c;P!==null;){if(l=P,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:pr(9,l)}}catch(b){he(l,l.return,b)}if(l===o){P=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,P=g;break e}P=l.return}}if(W=r,wt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(zi,e)}catch{}i=!0}return i}finally{ie=n,tt.transition=t}}return!1}function fc(e,t,n){t=bn(n,t),t=Ds(e,t,1),e=jt(e,t,1),t=De(),e!==null&&(Bn(e,1,t),Ue(e,t))}function he(e,t,n){if(e.tag===3)fc(e,e,n);else for(;t!==null;){if(t.tag===3){fc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ft===null||!Ft.has(i))){e=bn(n,e),e=Vs(t,e,1),t=jt(t,e,1),e=De(),t!==null&&(Bn(t,1,e),Ue(t,e));break}}t=t.return}}function Cm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(be&n)===n&&(Ce===4||Ce===3&&(be&130023424)===be&&500>ye()-uo?on(e,0):co|=n),Ue(e,t)}function kc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var n=De();e=Pt(e,t),e!==null&&(Bn(e,t,n),Ue(e,n))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kc(e,n)}function Am(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(_(314))}i!==null&&i.delete(t),kc(e,n)}var gc;gc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,dm(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,me&&(t.flags&1048576)!==0&&Xl(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;mr(e,t),e=t.pendingProps;var r=Nn(t,Ee.current);Tn(t,n),r=Ba(null,t,i,e,r,n);var a=Fa();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(i)?(a=!0,Zi(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xa(t),r.updater=cr,t.stateNode=r,r._reactInternals=t,Wa(t,i,e,n),t=$a(null,t,i,!0,a,n)):(t.tag=0,me&&a&&Pa(t),Oe(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(mr(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=Tm(i),e=st(i,e),r){case 0:t=Qa(null,t,i,e,n);break e;case 1:t=Gs(null,t,i,e,n);break e;case 11:t=Bs(null,t,i,e,n);break e;case 14:t=Fs(null,t,i,st(i.type,e),n);break e}throw Error(_(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),Qa(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),Gs(e,t,i,r,n);case 3:e:{if(Zs(t),e===null)throw Error(_(387));i=t.pendingProps,a=t.memoizedState,r=a.element,ss(e,t),nr(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=bn(Error(_(423)),t),t=Ws(e,t,i,n,r);break e}else if(i!==r){r=bn(Error(_(424)),t),t=Ws(e,t,i,n,r);break e}else for(Je=Ot(t.stateNode.containerInfo.firstChild),We=t,me=!0,lt=null,n=os(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),i===r){t=zt(e,t,n);break e}Oe(e,t,i,n)}t=t.child}return t;case 5:return ms(t),e===null&&Ta(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,fa(i,r)?o=null:a!==null&&fa(i,a)&&(t.flags|=32),Ys(e,t),Oe(e,t,o,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return Js(e,t,n);case 4:return Oa(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=An(t,null,i,n):Oe(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),Bs(e,t,i,r,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,o=r.value,oe(Xi,i._currentValue),i._currentValue=o,a!==null)if(ot(a.value,o)){if(a.children===r.children&&!He.current){t=zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===i){if(a.tag===1){s=At(-1,n&-n),s.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var f=p.pending;f===null?s.next=s:(s.next=f.next,f.next=s),p.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ma(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ma(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Oe(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Tn(t,n),r=Xe(r),i=i(r),t.flags|=1,Oe(e,t,i,n),t.child;case 14:return i=t.type,r=st(i,t.pendingProps),r=st(i.type,r),Fs(e,t,i,r,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:st(i,r),mr(e,t),t.tag=1,je(i)?(e=!0,Zi(t)):e=!1,Tn(t,n),xs(t,i,r),Wa(t,i,r,n),$a(null,t,i,!0,e,n);case 19:return Qs(e,t,n);case 22:return Ks(e,t,n)}throw Error(_(156,t.tag))};function Nc(e,t){return el(e,t)}function zm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,i){return new zm(e,t,n,i)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tm(e){if(typeof e=="function")return ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===pt)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sr(e,t,n,i,r,a){var o=2;if(i=e,typeof e=="function")ko(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case re:return sn(n.children,r,a,t);case ke:o=8,r|=8;break;case It:return e=nt(12,n,t,r|2),e.elementType=It,e.lanes=a,e;case Ye:return e=nt(13,n,t,r),e.elementType=Ye,e.lanes=a,e;case rt:return e=nt(19,n,t,r),e.elementType=rt,e.lanes=a,e;case _e:return Cr(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kt:o=10;break e;case Wt:o=9;break e;case dt:o=11;break e;case pt:o=14;break e;case we:o=16,i=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=nt(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function sn(e,t,n,i){return e=nt(7,e,i,t),e.lanes=n,e}function Cr(e,t,n,i){return e=nt(22,e,i,t),e.elementType=_e,e.lanes=n,e.stateNode={isHidden:!1},e}function go(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Im(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function So(e,t,n,i,r,a,o,l,s){return e=new Im(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=nt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(a),e}function bm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return Vt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(je(n))return ql(e,n,t)}return t}function Cc(e,t,n,i,r,a,o,l,s){return e=So(n,i,!0,e,r,a,o,l,s),e.context=Sc(null),n=e.current,i=De(),r=Kt(n),a=At(i,r),a.callback=t??null,jt(n,a,r),e.current.lanes=r,Bn(e,r,i),Ue(e,i),e}function Pr(e,t,n,i){var r=t.current,a=De(),o=Kt(r);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=jt(r,t,o),e!==null&&(mt(e,r,o,a),tr(e,r,o)),o}function Ar(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Co(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function Em(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Po(e){this._internalRoot=e}zr.prototype.render=Po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Pr(e,t,null,null)},zr.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Pr(null,e,null,null)}),t[gt]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=sl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&ml(e)}};function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function Rm(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var p=Ar(o);a.call(p)}}var o=Cc(t,i,e,0,null,!1,!1,"",zc);return e._reactRootContainer=o,e[gt]=o.current,ti(e.nodeType===8?e.parentNode:e),an(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var p=Ar(s);l.call(p)}}var s=So(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=s,e[gt]=s.current,ti(e.nodeType===8?e.parentNode:e),an(function(){Pr(t,s,n,i)}),s}function Ir(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var l=r;r=function(){var s=Ar(o);l.call(s)}}Pr(t,o,e,r)}else o=Rm(n,t,e,r,i);return Ar(o)}ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Wr(t,n|1),Ue(t,ye()),(W&6)===0&&(Mn=ye()+500,wt()))}break;case 13:an(function(){var i=Pt(e,1);if(i!==null){var r=De();mt(i,e,1,r)}}),Co(e,1)}},Jr=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}Co(e,134217728)}},ll=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var i=De();mt(n,e,t,i)}Co(e,t)}},sl=function(){return ie},cl=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}},Br=function(e,t,n){switch(t){case"input":if(Lr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=Yi(i);if(!r)throw Error(_(90));Lo(i),Lr(i,r)}}}break;case"textarea":wo(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},Zo=vo,Wo=an;var Mm={usingClientEntryPoint:!1,Events:[ri,kn,Yi,Yo,Go,vo]},fi={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{zi=br.inject(Lm),_t=br}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm,Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ao(t))throw Error(_(200));return bm(e,t,null,n)},Ke.createRoot=function(e,t){if(!Ao(e))throw Error(_(299));var n=!1,i="",r=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,i,r),e[gt]=t.current,ti(e.nodeType===8?e.parentNode:e),new Po(t)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=$o(t),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return an(e)},Ke.hydrate=function(e,t,n){if(!Tr(t))throw Error(_(200));return Ir(null,e,t,!0,n)},Ke.hydrateRoot=function(e,t,n){if(!Ao(e))throw Error(_(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cc(t,null,e,1,n??null,r,!1,a,o),e[gt]=t.current,ti(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new zr(t)},Ke.render=function(e,t,n){if(!Tr(t))throw Error(_(200));return Ir(null,e,t,!1,n)},Ke.unmountComponentAtNode=function(e){if(!Tr(e))throw Error(_(40));return e._reactRootContainer?(an(function(){Ir(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1},Ke.unstable_batchedUpdates=vo,Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Tr(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ir(e,t,n,!1,i)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var xc;function Bm(){if(xc)return Io.exports;xc=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(R){console.error(R)}}return C(),Io.exports=jm(),Io.exports}var Oc;function Fm(){if(Oc)return Er;Oc=1;var C=Bm();return Er.createRoot=C.createRoot,Er.hydrateRoot=C.hydrateRoot,Er}var Um=Fm();const Km={en:{appTitle:"CT REPORTING",appSubtitle:"Search Pattern + Template · Evidence-based",evidenceLabel:"Evidence:",dontMiss:"Don't miss:",searchTab:"Search",templateTab:"Template",mismatchTitle:"Template vs. Search Mismatch",searchEvidenceLabel:"Search evidence:",protocolTitle:"Ordered Search Protocol — Execute Before Writing",legendCritical:"Critical",legendHigh:"High",legendStandard:"Standard",formatNote:"Delete-down format · pre-populated normals",copyButton:"Copy",copiedButton:"✓ Copied",usageNote:"Normal findings pre-filled — delete what is abnormal and annotate it. Fill only ___ fields.",criticalNote:"⚠ findings require immediate clinical communication.",guidanceRow1:"ASPECTS · ICH · Fisher · Rotterdam · AAST · Hinchey",guidanceRow2:"Fleischner · Lung-RADS · UIP · ITMIG · RECIST · ESC"},cs:{appTitle:"CT REPORTING",appSubtitle:"Systematika hodnocení + Šablona · Na důkazech založeno",evidenceLabel:"Reference:",dontMiss:"Nepřehlédni:",searchTab:"Systematika",templateTab:"Šablona",mismatchTitle:"Nesoulad šablony a systematiky hodnocení",searchEvidenceLabel:"Reference k systematice:",protocolTitle:"Doporučený postup hodnocení — provést před diktováním",legendCritical:"Kritický",legendHigh:"Prioritní",legendStandard:"Standardní",formatNote:"Formát mazání · předvyplněný normální nález",copyButton:"Kopírovat",copiedButton:"✓ Zkopírováno",usageNote:"Normální nález je předvyplněn — smažte vše, co neplatí, a doplňte patologický nález. Vyplňujte pouze pole označená ___.",criticalNote:"⚠ nálezy vyžadují okamžité sdělení klinikovi.",guidanceRow1:"ASPECTS · ICH skóre · Fisher · Rotterdam · AAST · Hinchey",guidanceRow2:"Fleischner · Lung-RADS · UIP · ITMIG · RECIST · ESC"}},Ym={en:{abdomen:"ABDOMEN",head:"HEAD",chest:"CHEST",spine:"SPINE",oncology:"ONCOLOGY",routine:"ROUTINE"},cs:{abdomen:"BŘICHO",head:"HLAVA",chest:"HRUDNÍK",spine:"PÁTEŘ",oncology:"ONKOLOGIE",routine:"RUTINA"}},Gm={en:{surgical:"Surgical",trauma:"Trauma",oncology:"Oncology",urological:"Urological",vascular:"Vascular",neuro:"Neuro",chest:"Chest",spine:"Spine",routine_neuro:"Neurology",routine_chest:"Chest",routine_vascular:"Vascular",routine_abdominal:"Abdomen",routine_spine:"Spine",routine_onco:"Oncology",routine_head_neck:"Head & Neck"},cs:{surgical:"Chirurgie",trauma:"Trauma",oncology:"Onkologie",urological:"Urologie",vascular:"Vaskulární",neuro:"Neuro",chest:"Hrudník",spine:"Páteř",routine_neuro:"Neurologie",routine_chest:"Hrudník",routine_vascular:"Cévní",routine_abdominal:"Břicho",routine_spine:"Páteř",routine_onco:"Onkologie",routine_head_neck:"Hlava a krk"}},Rr=[{key:"abdomen",color:"amber",categories:{surgical:{text:"text-amber-400",badge:"bg-amber-500/15 text-amber-300 border-amber-500/25",border:"border-amber-500/25",bg:"bg-amber-500/8"},trauma:{text:"text-red-400",badge:"bg-red-500/15 text-red-300 border-red-500/25",border:"border-red-500/25",bg:"bg-red-500/8"},oncology:{text:"text-sky-400",badge:"bg-sky-500/15 text-sky-300 border-sky-500/25",border:"border-sky-500/25",bg:"bg-sky-500/8"},urological:{text:"text-teal-400",badge:"bg-teal-500/15 text-teal-300 border-teal-500/25",border:"border-teal-500/25",bg:"bg-teal-500/8"},vascular:{text:"text-orange-400",badge:"bg-orange-500/15 text-orange-300 border-orange-500/25",border:"border-orange-500/25",bg:"bg-orange-500/8"}},tabStyle:{active:"bg-amber-500/15 text-amber-300 border-amber-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"}},{key:"head",color:"violet",categories:{neuro:{text:"text-violet-400",badge:"bg-violet-500/15 text-violet-300 border-violet-500/25",border:"border-violet-500/25",bg:"bg-violet-500/8"}},tabStyle:{active:"bg-violet-500/15 text-violet-300 border-violet-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"}},{key:"chest",color:"sky",categories:{chest:{text:"text-sky-400",badge:"bg-sky-500/15 text-sky-300 border-sky-500/25",border:"border-sky-500/25",bg:"bg-sky-500/8"}},tabStyle:{active:"bg-sky-500/15 text-sky-300 border-sky-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"}},{key:"spine",color:"emerald",categories:{spine:{text:"text-emerald-400",badge:"bg-emerald-500/15 text-emerald-300 border-emerald-500/25",border:"border-emerald-500/25",bg:"bg-emerald-500/8"}},tabStyle:{active:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"}},{key:"routine",color:"zinc",categories:{routine_neuro:{text:"text-violet-400",badge:"bg-violet-500/15 text-violet-300 border-violet-500/25",border:"border-violet-500/25",bg:"bg-violet-500/8"},routine_chest:{text:"text-sky-400",badge:"bg-sky-500/15 text-sky-300 border-sky-500/25",border:"border-sky-500/25",bg:"bg-sky-500/8"},routine_vascular:{text:"text-orange-400",badge:"bg-orange-500/15 text-orange-300 border-orange-500/25",border:"border-orange-500/25",bg:"bg-orange-500/8"},routine_abdominal:{text:"text-amber-400",badge:"bg-amber-500/15 text-amber-300 border-amber-500/25",border:"border-amber-500/25",bg:"bg-amber-500/8"},routine_spine:{text:"text-emerald-400",badge:"bg-emerald-500/15 text-emerald-300 border-emerald-500/25",border:"border-emerald-500/25",bg:"bg-emerald-500/8"},routine_onco:{text:"text-rose-400",badge:"bg-rose-500/15 text-rose-300 border-rose-500/25",border:"border-rose-500/25",bg:"bg-rose-500/8"},routine_head_neck:{text:"text-teal-400",badge:"bg-teal-500/15 text-teal-300 border-teal-500/25",border:"border-teal-500/25",bg:"bg-teal-500/8"}},tabStyle:{active:"bg-zinc-700/40 text-zinc-200 border-zinc-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"}},{key:"oncology",color:"rose",categories:{},tabStyle:{active:"bg-rose-500/15 text-rose-300 border-rose-500/30",inactive:"text-zinc-600 hover:text-zinc-300 border-transparent"},isOncology:!0}],Zm=[{id:"appendicitis",category:"surgical",en:{label:"Appendicitis",evidence:"ACR + ESGAR consensus; Hlibczuk 2010 meta-analysis CT diagnostic criteria; Rao et al. 1997",criticalFindings:["Perforation signs","Pericaecal abscess","Portal venous gas"],searchEvidence:"Rao 1997 CT graded compression; Doria 2006 meta-analysis; Lameris 2009 — RIF-tracing technique vs systematic survey",searchMismatch:"Templates are anatomy-ordered. Correct search is RIF-centric and appendix-first, not organ-by-organ.",searchPattern:[{step:1,priority:"critical",title:"W/L Setup & Scout",detail:"Soft tissue W400/L40. Scroll coronal first for global orientation — dilated bowel, free fluid, RIF density change visible in 5 seconds.",time:"5s"},{step:2,priority:"critical",title:"Locate Caecum → Trace Appendix",detail:"Find caecum (gas + ileocaecal valve) on axials. Trace appendix from base — it always originates here. Follow it to tip. Do NOT start by looking for a 'round structure in RIF'.",time:"45s"},{step:3,priority:"critical",title:"Appendix Not Found? Systematic RIF",detail:"Retrocaecal (most common), retroileal, pelvic, subhepatic positions. Absence of visualisation ≠ normal. Look for fat stranding without appendix — perforation/abscess until proven otherwise.",time:"30s"},{step:4,priority:"high",title:"Characterise Appendix",detail:"Diameter, wall thickening, surrounding fat stranding, appendicolith. Diameter >6mm + stranding = appendicitis. Extraluminal appendicolith = perforation.",time:"20s"},{step:5,priority:"high",title:"Complications Sweep",detail:"Switch to lung windows — free air? Abscess in RIF? Portal venous gas (rare but critical). Peritoneal fluid distribution.",time:"20s"},{step:6,priority:"normal",title:"Alternative Diagnosis [if appendix normal]",detail:"Right ovary and adnexa. Terminal ileum (Crohn, Meckel). Caecum wall. Right ureter/calculus. Mesenteric nodes. Only after appendix is confirmed normal.",time:"30s"},{step:7,priority:"normal",title:"Standard Organ Survey",detail:"Liver, spleen, kidneys, remaining bowel. Incidentals. This comes LAST.",time:"30s"}],template:`CT ABDOMEN & PELVIS — ACUTE APPENDICITIS
Indication: [acute RIF pain / clinical suspicion appendicitis]
Technique: Portal venous phase ± oral contrast

APPENDIX
Visualised: Yes / No
Diameter: ___ mm  (normal <6mm)
Wall thickening: No / Yes — ___ mm
Periappendiceal fat stranding: Absent / Mild / Moderate / Severe
Appendicolith: Absent / Present — location ___
Perforation signs:
  Free air adjacent to appendix: No / Yes
  Periappendiceal abscess: No / Yes — size ___ mm, location ___
  Phlegmon: No / Yes — extent ___
  Extraluminal appendicolith: No / Yes [implies perforation]

COMPLICATIONS
Free intraperitoneal air: No / Yes
Free fluid: No / Yes — location ___, simple / complex
Portal venous gas: No / Yes [CRITICAL]

ALTERNATIVE DIAGNOSIS [complete only if appendix confirmed normal]
Ovarian pathology: None / Cyst ___ mm / TOC / Torsion
Meckel diverticulitis: No / Yes
Mesenteric lymphadenitis: No / Yes — nodes up to ___ mm
Caecal pathology: No / Yes ___
Crohn disease: No / Yes ___
Ureteric calculus: No / Yes — ___ mm at ___
Other: ___

ANCILLARY FINDINGS
Liver: Normal parenchyma. No focal lesion.
Spleen: Normal.
Kidneys: Symmetric enhancement. No hydronephrosis.
Bowel: No obstruction elsewhere.
Lymph nodes: No significant lymphadenopathy.

IMPRESSION
[Acute appendicitis / Perforated appendicitis with abscess / No appendicitis — alternative: ___]
Surgical urgency: Routine / Urgent / Emergency`},cs:{label:"Apendicitida",evidence:"ACR + ESGAR konsensus; Hlibczuk 2010 metaanalýza CT diagnostických kritérií; Rao et al. 1997",criticalFindings:["Perforace appendixu","Periappendikální absces","Plyn v portální žíle"],searchEvidence:"Rao 1997 CT graded compression; Doria 2006 metaanalýza; Lameris 2009 — technika sledování appendixu od céka",searchMismatch:"Šablony jsou řazeny anatomicky. Správná systematika je zaměřena na PDK a appendix jako první — ne orgán po orgánu.",searchPattern:[{step:1,priority:"critical",title:"Nastavení oken + scout",detail:"Měkkotkáňová okna W400/L40. Nejdříve koronální rekonstrukce — dilatace střeva, volná tekutina a densitní změny v PDK viditelné do 5 sekund.",time:"5s"},{step:2,priority:"critical",title:"Lokalizace céka → sledování appendixu",detail:"Najděte cékum (plyn + Bauhinská chlopeň) na axiálních řezech. Appendix sledujte od jeho baze — vždy začíná zde. Sledujte až ke špičce. NEZAČÍNEJTE hledáním 'kulatého útvaru v PDK'.",time:"45s"},{step:3,priority:"critical",title:"Appendix nezobrazitelný? Systematické prohledání PDK",detail:"Retrocékální poloha (nejčastější), retroileální, pánevní, subhepatální. Nezobrazení appendixu ≠ normální nález. Infiltrace tuku bez appendixu = perforace/absces, dokud není vyloučeno jinak.",time:"30s"},{step:4,priority:"high",title:"Hodnocení appendixu",detail:"Průměr, ztluštění stěny, infiltrace okolního tuku, appendikolit. Průměr >6 mm + infiltrace tuku = apendicitida. Extraluminální appendikolit = perforace.",time:"20s"},{step:5,priority:"high",title:"Komplikace — plicní okna",detail:"Přepnutí na plicní okna — volný vzduch? Absces v PDK? Plyn v portální žíle (vzácný, ale kritický). Distribuce volné tekutiny.",time:"20s"},{step:6,priority:"normal",title:"Alternativní diagnóza [pouze při normálním appendixu]",detail:"Pravý ovarium a adnexa. Terminální ileum (Crohnova choroba, Meckelův divertikl). Stěna céka. Pravý močovod/konkrement. Mezenteriální uzliny. Pouze po potvrzení normálního appendixu.",time:"30s"},{step:7,priority:"normal",title:"Celkový přehled orgánů",detail:"Játra, slezina, ledviny, zbytek střeva. Vedlejší nálezy. Toto je POSLEDNÍ krok.",time:"30s"}],template:`CT BŘICHA A PÁNVE — AKUTNÍ APENDICITIDA
Indikace: [bolest v PDK / klinické podezření na apendicitidu]
Technika: Portální fáze ± perorální kontrast

NÁLEZ

Appendix
Zobrazení: Ano / Ne
Průměr: ___ mm (norma <6 mm)
Ztluštění stěny: Ne / Ano — ___ mm
Infiltrace periappendikálního tuku: Nepřítomna / Mírná / Střední / Výrazná
Appendikolit: Nepřítomen / Přítomen — lokalizace ___
Známky perforace:
  Volný vzduch v okolí appendixu: Ne / Ano
  Periappendikální absces: Ne / Ano — velikost ___ mm, lokalizace ___
  Flegmóna: Ne / Ano — rozsah ___
  Extraluminální appendikolit: Ne / Ano [svědčí pro perforaci]

Komplikace
Volný vzduch v peritoneální dutině: Ne / Ano
Volná tekutina: Ne / Ano — lokalizace ___, charakter prostý/komplexní
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]

Alternativní diagnóza [vyplnit pouze při normálním appendixu]
Ovariální patologie: Bez nálezu / Cysta ___ mm / Tuboovariální komplex / Torze
Meckelův divertikl: Ne / Ano
Mezenteriální lymfadenitida: Ne / Ano — uzliny do ___ mm
Patologie céka: Ne / Ano ___
Crohnova choroba: Ne / Ano ___
Urolitiáza: Ne / Ano — ___ mm v oblasti ___

Doplňkový nález
Játra jsou homogenní parenchymatózní struktury, bez ložiskových změn.
Slezina bez patologického nálezu.
Ledviny symetricky enhancují, bez hydronefrózy.
Střevní pasáž bez průkazu obstrukce.
Lymfatické uzliny bez patologického zvětšení.

ZÁVĚR
[Akutní apendicitida / Perforovaná apendicitida s abscesem / Bez průkazu apendicitidy — alternativní diagnóza: ___]
Naléhavost: Plánovaná / Urgentní / Emergentní`}},{id:"obstruction",category:"surgical",en:{label:"Bowel Obstruction",evidence:"Bologna Guidelines 2017 (WSES); Maung et al. EAST 2012; Mallo et al. systematic review closed-loop CT criteria",criticalFindings:["Closed-loop","Pneumatosis intestinalis","Portal venous gas","Absent wall enhancement"],searchEvidence:"Mallo et al. 2005 — closed-loop CT criteria validation; Taylor et al. 2001 — transition point identification; Catena 2011 WSES",searchMismatch:"Anatomy-ordered templates miss the critical step: find the transition point FIRST by retrograde tracing. Most radiologists start at proximal dilated bowel — this is slower and less reliable.",searchPattern:[{step:1,priority:"critical",title:"Scout + Global Gestalt",detail:"Coronal reconstruction first. SBO pattern (central, small calibre) vs LBO (peripheral, haustral). Caecal diameter — if ≥9cm, flag immediately.",time:"10s"},{step:2,priority:"critical",title:"Find Transition Point — Retrograde Tracing",detail:"Start at COLLAPSED bowel and trace PROXIMALLY until dilation. Transition point = where collapsed meets dilated. Identify cause at transition (adhesion band, hernia neck, mass).",time:"60s"},{step:3,priority:"critical",title:"Closed-Loop Assessment",detail:"C/U-shaped loop? Two adjacent transition points? Radial mesenteric vessels converging? ANY = closed loop = surgical emergency.",time:"30s"},{step:4,priority:"critical",title:"Ischaemia Signs — Dedicated Pass",detail:"Bowel wall enhancement. Mesenteric oedema. Then lung windows — pneumatosis, portal venous gas.",time:"45s"},{step:5,priority:"high",title:"Cause Characterisation",detail:"Adhesion, hernia (check all sites), mass, volvulus (whirl sign), intussusception (target sign).",time:"30s"},{step:6,priority:"normal",title:"Full Bowel Survey + Organs",detail:"Remaining bowel for synchronous pathology. Solid organs, free fluid, lymph nodes.",time:"30s"}],template:`CT ABDOMEN & PELVIS — BOWEL OBSTRUCTION
Indication: [clinical obstruction / distension]
Technique: Portal venous phase

OBSTRUCTION CHARACTERISATION
Type: Small bowel / Large bowel / Combined
Degree: Partial / High-grade partial / Complete
Transition point: Identified / Not identified
  Location: ___
  Cause: Adhesion / Hernia (___) / Mass / Volvulus / Intussusception / Gallstone / Not identified

CALIBRE
Proximal diameter: ___ mm  (SBO normal <25mm; colon <60mm; caecum <90mm)
Small bowel faeces sign: Absent / Present [high-grade obstruction]

CLOSED-LOOP [complete for every SBO — surgical emergency if present]
Closed-loop: No / Yes
  C/U-shaped loop: No / Yes
  Radial mesenteric vessels: No / Yes
  Two adjacent transition points: No / Yes

ISCHAEMIA SIGNS
Wall enhancement: Normal / Reduced / Absent [absent = transmural infarction]
Wall thickening: No / Yes — location ___
Mesenteric oedema: No / Yes
Pneumatosis intestinalis: No / Yes — location ___ [CRITICAL]
Portal venous gas: No / Yes [CRITICAL]
Free fluid: No / Simple / Complex / Haemorrhagic — volume ___
Free air: No / Yes

ANCILLARY FINDINGS
Liver: Normal.
Solid organs: Normal.
Other: ___

IMPRESSION
[Type] bowel obstruction, [degree], transition at [location], cause [___].
Ischaemia signs: Absent / Present — [specify]
Closed-loop: No / Yes
Urgency: Elective / Urgent / Emergency`},cs:{label:"Ileus / Střevní neprůchodnost",evidence:"Boloňské guidelines 2017 (WSES); Maung et al. EAST 2012; Mallo et al. systematický přehled CT kritérií uzavřené kličky",criticalFindings:["Uzavřená klička (closed-loop)","Pneumatosis intestinalis","Plyn v portální žíle","Absence sycení stěny"],searchEvidence:"Mallo et al. 2005 — validace CT kritérií uzavřené kličky; Taylor et al. 2001 — metodika určení přechodové zóny",searchMismatch:"Anatomické šablony opomíjejí klíčový krok: přechodová zóna musí být nalezena JAKO PRVNÍ retrográdním sledováním. Většina radiologů začíná u dilatovaného střeva — to je pomalejší a méně spolehlivé.",searchPattern:[{step:1,priority:"critical",title:"Scout + celkový přehled",detail:"Nejdříve koronální rekonstrukce. Distribuce dilatovaného vs. kolabovaného střeva do 10 sekund. Vzor tenkého střeva (centrální, malý průměr) vs. tlustého (periferní, haustra). Průměr céka ≥9 cm = okamžitý záznam.",time:"10s"},{step:2,priority:"critical",title:"Přechodová zóna — retrográdní sledování",detail:"Začněte u KOLABOVANÉHO střeva a sledujte PROXIMÁLNĚ až k dilataci. Přechodová zóna = místo, kde kolabované navazuje na dilatované. Určete příčinu v přechodové zóně (adheze, hrdlo kýly, tumor).",time:"60s"},{step:3,priority:"critical",title:"Hodnocení uzavřené kličky",detail:"Konfigurace C nebo U? Dvě sousedící přechodové zóny? Radiální uspořádání mezenteriálních cév? COKOLI z toho = uzavřená klička = chirurgická emergentní situace.",time:"30s"},{step:4,priority:"critical",title:"Ischemické změny — cílené hodnocení",detail:"Sycení stěny střeva. Edém mezenteria. Poté plicní okna — pneumatosis intestinalis, plyn v portální žíle.",time:"45s"},{step:5,priority:"high",title:"Příčina obstrukce",detail:"Adheze, kýla (prohledejte všechna místa — tříselná, stehenní, pupeční, vnitřní), tumor, volvulus (whirl sign), invaginace (target sign).",time:"30s"},{step:6,priority:"normal",title:"Celkový přehled střeva + orgánů",detail:"Zbytek střeva — synchronní patologie. Parenchymatózní orgány, volná tekutina, uzliny.",time:"30s"}],template:`CT BŘICHA A PÁNVE — ILEUS / STŘEVNÍ NEPRŮCHODNOST
Indikace: [klinický obraz ileu / distenze]
Technika: Portální fáze

NÁLEZ

Charakter obstrukce
Typ: Tenké střevo / Tlusté střevo / Kombinovaný
Stupeň: Parciální / Vysokostupňový parciální / Kompletní
Přechodová zóna: Identifikována / Neidentifikována
  Lokalizace: ___
  Příčina: Adheze / Kýla (___) / Tumor / Volvulus / Invaginace / Žlučový konkrement / Nezjištěna

Kalibr střeva
Průměr proximálně: ___ mm (tenké střevo norma <25 mm; tlusté <60 mm; cékum <90 mm)
Příznak střevní stolice (faeces sign): Nepřítomen / Přítomen [svědčí pro vysokostupňový ileus]

Uzavřená klička [vyplnit u každého ileu tenkého střeva]
Uzavřená klička: Ne / Ano
  Konfigurace C/U: Ne / Ano
  Radiální uspořádání mezenteriálních cév: Ne / Ano
  Dvě sousedící přechodové zóny: Ne / Ano

Ischemické změny
Sycení stěny střeva: Normální / Redukované / Chybí [chybí = transmurální infarkt]
Ztluštění stěny: Ne / Ano — lokalizace ___
Edém mezenteria: Ne / Ano
Pneumatosis intestinalis: Ne / Ano — lokalizace ___ [KRITICKÝ NÁLEZ]
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]
Volná tekutina: Ne / Prostá / Komplexní / Hemoragická — množství ___
Volný vzduch: Ne / Ano

Doplňkový nález
Játra bez patologického nálezu.
Parenchymatózní orgány bez patologického nálezu.
Ostatní: ___

ZÁVĚR
Ileus [tenkého/tlustého] střeva, [stupeň], přechodová zóna v oblasti [___], příčina [___].
Ischemické změny: Nepřítomny / Přítomny — [specifikovat]
Uzavřená klička: Ne / Ano
Naléhavost: Plánovaná / Urgentní / Emergentní`}},{id:"pancreatitis",category:"surgical",en:{label:"Pancreatitis",evidence:"Revised Atlanta 2012 (Banks et al. Gut 2013); Modified CTSI — Mortele et al. 2004; ACR appropriateness criteria",criticalFindings:["Necrosis >30%","Infected collection (gas)","Portal/SMV thrombosis","Pseudoaneurysm"],searchEvidence:"Thoeni 2012 — phase-specific CT search; Balthazar 2002 — systematic pancreatic assessment; ESGAR consensus on protocol",searchMismatch:"Portal-venous-only CT misses necrosis assessment (needs non-contrast comparison) and vascular complications (needs arterial). Search must follow protocol phases explicitly.",searchPattern:[{step:1,priority:"critical",title:"Non-Contrast Phase First",detail:"Pancreatic parenchymal density ~40-50 HU. High density = haemorrhage. Note low-density areas for comparison with contrast phases.",time:"20s"},{step:2,priority:"critical",title:"Portal Venous — Necrosis Assessment",detail:"Non-enhancing parenchyma = necrosis. Estimate extent: <30%, 30-50%, >50%. Drives CTSI and Revised Atlanta severity.",time:"45s"},{step:3,priority:"critical",title:"Vascular Assessment",detail:"Portal vein, SMV, splenic vein patency. Arterial phase — pseudoaneurysm (round enhancing structure near collection).",time:"30s"},{step:4,priority:"high",title:"Classify Collections — Revised Atlanta",detail:"APFC vs ANC (<4 weeks), Pseudocyst vs WOPN (>4 weeks). Homogeneous = fluid. Heterogeneous = necrotic debris. Gas = infected.",time:"45s"},{step:5,priority:"high",title:"Biliary Survey",detail:"CBD diameter. Choledocholithiasis — determines ERCP urgency.",time:"20s"},{step:6,priority:"normal",title:"Complications Sweep",detail:"Pleural effusions (bilateral = severe sign). Ascites. Splenic complications.",time:"20s"}],template:`CT ABDOMEN — ACUTE PANCREATITIS
Indication: [confirmed/suspected pancreatitis, day ___ of illness]
Technique: Pancreatic protocol (non-contrast + arterial + portal venous) / PV only

PANCREATIC PARENCHYMA
Enlargement: No / Focal / Diffuse
Enhancement: Homogeneous / Heterogeneous
Necrosis: Absent / Present — extent <30% / 30-50% / >50%, location ___
Pancreatic duct: Normal / Dilated ___ mm / Disrupted
Peripancreatic stranding: Absent / Mild / Moderate / Severe

REVISED ATLANTA 2012 SEVERITY
Mild: No necrosis, no organ failure, no complications
Moderately Severe: Local complications ± transient organ failure <48h
Severe: Persistent organ failure >48h ± necrosis
→ Severity: ___

MODIFIED CTSI [Mortele 2004 — validated]
Balthazar: A(0) / B(1) / C(2) / D(3) / E(4) = ___ pts
Necrosis: None(0) / <30%(2) / 30-50%(4) / >50%(6) = ___ pts
CTSI Total: ___ /10  (≥7: severe, mortality ~17%)

FLUID COLLECTIONS [Revised Atlanta — classify precisely]
Collection 1:
  Type: APFC / Pseudocyst / ANC / WOPN
  Location: ___  Size: ___ mm
  Gas within: No / Yes [infected — CRITICAL]
Collection 2: ___

VASCULAR
Portal vein: Patent / Thrombosed
SMV: Patent / Thrombosed [CRITICAL]
Splenic vein: Patent / Occluded
Pseudoaneurysm: No / Yes — vessel ___, size ___

BILIARY
CBD: ___ mm  Choledocholithiasis: No / Yes
Gallbladder: Normal / Stones / Cholecystitis

COMPLICATIONS
Pleural effusion: No / R / L / Bilateral — volume ___
Ascites: No / Yes — volume ___
Splenic complications: None / Infarct / Rupture

IMPRESSION
Acute [interstitial oedematous / necrotising] pancreatitis.
Revised Atlanta: [Mild / Moderately severe / Severe]
CTSI: ___ /10
[Collections, vascular complications, infected necrosis concern]`},cs:{label:"Akutní pankreatitida",evidence:"Revidovaná atlantská klasifikace 2012 (Banks et al. Gut 2013); Modifikované CTSI — Mortele et al. 2004; ACR appropriateness criteria",criticalFindings:["Nekróza >30 %","Infekce kolekce (plyn)","Trombóza v. portae/VMH","Pseudoaneuryzma"],searchEvidence:"Thoeni 2012 — fázově specifická CT systematika; Balthazar 2002 — systematické hodnocení pankreatu; konsensus ESGAR",searchMismatch:"Portální fáze samotná je nedostatečná — hodnocení nekrózy vyžaduje porovnání s nativní fází, cévní komplikace vyžadují arteriální fázi. Systematika musí respektovat jednotlivé fáze.",searchPattern:[{step:1,priority:"critical",title:"Nativní fáze jako první",detail:"Denzita parenchymu slinivky ~40–50 HU. Vysoká denzita = hemoragie. Zaznamenat hypodenzní oblasti pro porovnání s kontrastními fázemi.",time:"20s"},{step:2,priority:"critical",title:"Portální fáze — hodnocení nekrózy",detail:"Nesycující se parenchym = nekróza. Odhadněte rozsah: <30 %, 30–50 %, >50 %. Lokalizace: hlava/tělo/ocas. Toto ovlivňuje CTSI a závažnost dle revidované atlantské klasifikace.",time:"45s"},{step:3,priority:"critical",title:"Cévní hodnocení",detail:"Průchodnost v. portae, VMH, v. lienalis. Arteriální fáze — pseudoaneuryzma (kulatá enhancující struktura v/u kolekce).",time:"30s"},{step:4,priority:"high",title:"Klasifikace kolekcí — Revidovaná Atlanta",detail:"APFC vs. ANC (<4 týdny), pseudocysta vs. WOPN (>4 týdny). Homogenní = tekutina. Heterogenní = nekrotický obsah. Plyn = infekce.",time:"45s"},{step:5,priority:"high",title:"Biliární systém",detail:"Průměr ductus choledochus. Choledocholitiáza — určuje naléhavost ERCP.",time:"20s"},{step:6,priority:"normal",title:"Komplikace",detail:"Pleurální výpotky (oboustranný = příznak těžké pankreatitidy). Ascites. Komplikace na slezině.",time:"20s"}],template:`CT BŘICHA — AKUTNÍ PANKREATITIDA
Indikace: [potvrzená/suspektní pankreatitida, den ___ onemocnění]
Technika: Pankreatický protokol (nativní + arteriální + portální fáze) / pouze portální fáze

NÁLEZ

Parenchym slinivky
Zvětšení: Ne / Fokální / Difúzní
Sycení: Homogenní / Heterogenní
Nekróza: Nepřítomna / Přítomna — rozsah <30 % / 30–50 % / >50 %, lokalizace ___
Pankreatický vývod: Normální / Dilatovaný ___ mm / Přerušen
Infiltrace peripankreatického tuku: Nepřítomna / Mírná / Střední / Výrazná

Závažnost dle Revidované atlantské klasifikace 2012
Mírná: Bez nekrózy, bez orgánového selhání, bez komplikací
Středně těžká: Lokální komplikace ± přechodné orgánové selhání <48 h
Těžká: Přetrvávající orgánové selhání >48 h ± nekróza
→ Závažnost: ___

Modifikované CTSI [Mortele 2004 — validováno]
Balthazar: A(0) / B(1) / C(2) / D(3) / E(4) = ___ bodů
Nekróza: Žádná(0) / <30 %(2) / 30–50 %(4) / >50 %(6) = ___ bodů
CTSI celkem: ___ /10  (≥7: těžká forma, mortalita ~17 %)

Tekutinové kolekce [Revidovaná Atlanta — klasifikovat přesně]
Kolekce 1:
  Typ: APFC / Pseudocysta / ANC / WOPN
  Lokalizace: ___  Velikost: ___ mm
  Plyn v kolekci: Ne / Ano [infekce — KRITICKÝ NÁLEZ]
Kolekce 2: ___

Cévní nález
V. portae: Průchodná / Trombóza
VMH: Průchodná / Trombóza [KRITICKÝ NÁLEZ]
V. lienalis: Průchodná / Okludovaná
Pseudoaneuryzma: Ne / Ano — céva ___, velikost ___

Biliární systém
Ductus choledochus: ___ mm  Choledocholitiáza: Ne / Ano
Žlučník: Bez patologického nálezu / Konkrementy / Cholecystitida

Doplňkový nález
Pleurální výpotek: Ne / Vpravo / Vlevo / Oboustranně — množství ___
Ascites: Ne / Ano — množství ___
Komplikace na slezině: Žádné / Infarkt / Ruptura

ZÁVĚR
Akutní [intersticiální edematózní / nekrotizující] pankreatitida.
Závažnost dle Revidované Atlanty: [Mírná / Středně těžká / Těžká]
CTSI: ___ /10
[Kolekce, cévní komplikace, podezření na infekci nekrózy]`}},{id:"diverticulitis",category:"surgical",en:{label:"Diverticulitis",evidence:"Modified Hinchey (Wasvary 1999); ESCP Birmingham Consensus 2023; Ambrosetti 2006 CT-outcome correlation",criticalFindings:["Free air","Distant abscess","Fistula","Underlying mass"],searchEvidence:"Ambrosetti 2006 — CT findings predict outcome; Sartelli WSES 2015 — CT classification drives management",searchMismatch:"Common error: searching for fat stranding first. Correct: find the INFLAMED DIVERTICULUM as epicentre. Also — exclude underlying mass BEFORE reporting diverticulitis.",searchPattern:[{step:1,priority:"critical",title:"Find the Epicentre",detail:"Identify densest fat stranding region. Within it, find the inflamed diverticulum. Fat stranding alone is non-specific — the diverticulum must be the source.",time:"30s"},{step:2,priority:"critical",title:"Free Air — Lung Windows Now",detail:"Switch to lung windows immediately. Free intraperitoneal air? Contained vs free perforation determines Hinchey staging and urgency.",time:"15s"},{step:3,priority:"critical",title:"Exclude Underlying Mass",detail:"Is this diverticulitis or perforated carcinoma? Asymmetric wall thickening, mass, lymphadenopathy → consider carcinoma. Never assume.",time:"30s"},{step:4,priority:"high",title:"Hinchey Staging — Abscess",detail:"Pericolic only (Ia), abscess (Ib), distant abscess (II). Size, gas, drainage route available?",time:"30s"},{step:5,priority:"high",title:"Fistula Search — Coronals",detail:"Air in bladder = colovesical. Trace tract on coronals. Easy to miss on axials alone.",time:"20s"},{step:6,priority:"normal",title:"Full Colon Survey",detail:"Remainder of colon. Appendix. Gynaecological structures.",time:"20s"}],template:`CT ABDOMEN & PELVIS — ACUTE DIVERTICULITIS
Indication: [LIF pain / suspected diverticulitis]
Technique: Portal venous phase

DIVERTICULAR DISEASE
Acute segment: Location ___, length ___ cm
Wall thickening: ___ mm
Pericolonic fat stranding: Mild / Moderate / Severe, extent ___
Inflamed diverticulum identified: Yes / No
Underlying mass excluded: Yes / Uncertain — describe ___

MODIFIED HINCHEY CLASSIFICATION
Stage 0:  Thickening only, no complications
Stage Ia: Confined pericolic phlegmon
Stage Ib: Pericolic / mesenteric abscess
Stage II: Pelvic / retroperitoneal / distant abscess
Stage III: Purulent peritonitis
Stage IV: Faecal peritonitis (free perforation)
→ STAGE: ___

ABSCESS [Ib or higher]
Present: No / Yes
Location: Pericolic / Mesenteric / Pelvic / Distant
Size: ___ × ___ mm
Gas within abscess: No / Yes
Drainage route available: Yes / No ___

PERFORATION
Free air: No / Yes — volume ___, distribution ___
Free fluid: No / Simple / Complex — location ___

COMPLICATIONS
Fistula: No / Yes — Colovesical / Colovaginal / Coloenteric
  Air in bladder: No / Yes
Obstruction: No / Yes — degree ___

ANCILLARY
Appendix: Normal / Abnormal ___
Gynaecological: Normal / Abnormal ___

IMPRESSION
Acute [left/right]-sided diverticulitis, Modified Hinchey Stage [___].
[Complications]
Urgency: Conservative / IV antibiotics / Percutaneous drainage / Surgical
Note: Colonoscopy recommended 6-8 weeks post-resolution (exclude carcinoma)`},cs:{label:"Akutní divertikulitida",evidence:"Modifikovaná Hincheyho klasifikace (Wasvary 1999); konsensus ESCP Birmingham 2023; Ambrosetti 2006 korelace CT a klinického výstupu",criticalFindings:["Volný vzduch","Vzdálený absces","Fistula","Suspektní tumor v podkladí"],searchEvidence:"Ambrosetti 2006 — CT predikuje klinický výstup; Sartelli WSES 2015 — CT klasifikace určuje management",searchMismatch:"Časté chyby: hledání infiltrace tuku jako prvního kroku. Správně: najděte ZANÍCENÝ DIVERTIKL jako epicentrum. Dále — vyloučte tumor v podkladí PŘED hodnocením divertikulitidy.",searchPattern:[{step:1,priority:"critical",title:"Nalezení epicentra zánětu",detail:"Identifikujte oblast s nejhustší infiltrací tuku. V ní najděte zanícený divertikl jako epicentrum. Samotná infiltrace tuku je nespecifická — divertikl musí být zdrojem.",time:"30s"},{step:2,priority:"critical",title:"Volný vzduch — okamžitě plicní okna",detail:"Přepněte na plicní okna. Volný vzduch v dutině peritoneální? Lokalizovaná vs. volná perforace určuje stadium Hinchey a naléhavost výkonu.",time:"15s"},{step:3,priority:"critical",title:"Vyloučení tumoru v podkladí",detail:"Jedná se o divertikulitidu nebo o perforovaný karcinom? Asymetrické/nepravidelné ztluštění stěny, tumor, lymfadenitida → zvažte karcinom. Nikdy nepředpokládejte.",time:"30s"},{step:4,priority:"high",title:"Stagování dle Hinchey — absces",detail:"Pouze perikolický zánět (Ia), absces (Ib), vzdálený/pánevní absces (II). Velikost, plyn v abscesu, přístupnost k drenáži?",time:"30s"},{step:5,priority:"high",title:"Hledání fistuly — koronální rekonstrukce",detail:"Vzduch v močovém měchýři = kolovezikální fistula. Fistulózní trakt sledujte na koronálních rekonstrukcích. Na axiálních řezech snadno přehlédnutelné.",time:"20s"},{step:6,priority:"normal",title:"Přehled zbytku tlustého střeva",detail:"Zbytek kolon. Appendix. Gynekologické orgány.",time:"20s"}],template:`CT BŘICHA A PÁNVE — AKUTNÍ DIVERTIKULITIDA
Indikace: [bolest v LDK / klinické podezření na divertikulitidu]
Technika: Portální fáze

NÁLEZ

Divertikulární onemocnění
Akutní segment: Lokalizace ___, délka ___ cm
Ztluštění stěny: ___ mm
Infiltrace perikolického tuku: Mírná / Střední / Výrazná, rozsah ___
Zanícený divertikl identifikován: Ano / Ne
Tumor v podkladí vyloučen: Ano / Nejisté — popis ___

Modifikovaná Hincheyho klasifikace
Stadium 0:  Ztluštění stěny, bez komplikací
Stadium Ia: Ohraničená perikolická flegmóna
Stadium Ib: Perikolický / mezenteriální absces
Stadium II: Pánevní / retroperitoneální / vzdálený absces
Stadium III: Purulentní peritonitida
Stadium IV: Fekální peritonitida (volná perforace)
→ STADIUM: ___

Absces [stadium Ib a výše]
Přítomen: Ne / Ano
Lokalizace: Perikolicky / Mezenteriálně / V pánvi / Vzdáleně
Velikost: ___ × ___ mm
Plyn v abscesu: Ne / Ano
Perkutánní drenáž možná: Ano / Ne ___

Perforace
Volný vzduch: Ne / Ano — množství ___, distribuce ___
Volná tekutina: Ne / Prostá / Komplexní — lokalizace ___

Komplikace
Fistula: Ne / Ano — Kolovezikální / Kolovaginální / Koloenterická
  Vzduch v měchýři: Ne / Ano
Obstrukce: Ne / Ano — stupeň ___

Doplňkový nález
Appendix: Normální / Patologický ___
Gynekologické orgány: Normální / Patologický nález ___

ZÁVĚR
Akutní divertikulitida [vlevo/vpravo], modifikované stadium Hinchey [___].
[Komplikace]
Naléhavost: Konzervativní postup / Intravenózní ATB / Perkutánní drenáž / Chirurgická intervence
Poznámka: Doporučujeme kolonoskopii 6–8 týdnů po odeznění zánětu (vyloučení karcinomu)`}},{id:"cholecystitis",category:"surgical",en:{label:"Cholecystitis",evidence:"Tokyo Guidelines 2018 (TG18); Shakespear et al. 2010 CT meta-analysis; Fidler 1996 emphysematous cholecystitis",criticalFindings:["Emphysematous cholecystitis","Perforation","Gangrenous changes","Mirizzi syndrome"],searchEvidence:"Shakespear 2010 — CT sensitivity 91%; Grayson 2002 — gangrenous CT criteria; TG18 severity validation",searchMismatch:"Standard organ-survey approach misses emphysematous and gangrenous subtypes requiring active dedicated search. Mortality >10% without surgery — cannot be found passively.",searchPattern:[{step:1,priority:"critical",title:"Lung Windows — Gas in GB Wall",detail:"Before anything else: lung windows, look at gallbladder. Gas in wall = emphysematous = surgical emergency (mortality 15-25%). Invisible on soft tissue windows.",time:"10s"},{step:2,priority:"critical",title:"GB Assessment — Wall Enhancement",detail:"Distension, wall thickening, then wall enhancement pattern. Reduced/absent = gangrenous = urgent surgery.",time:"30s"},{step:3,priority:"critical",title:"Gangrene Signs — Active Search",detail:"Irregular wall. Intraluminal membranes (sloughed mucosa — highly specific). Absent enhancement. Any one = gangrenous.",time:"30s"},{step:4,priority:"high",title:"Biliary Survey — CBD + Mirizzi",detail:"CBD diameter. Choledocholithiasis. Mirizzi: stone at GB neck compressing CHD.",time:"20s"},{step:5,priority:"high",title:"Perforation Assessment",detail:"Focal wall defect. Pericholecystic abscess. Free perforation.",time:"20s"},{step:6,priority:"normal",title:"Liver + Remainder",detail:"Hepatic abscess. Pancreas head. Remaining survey.",time:"20s"}],template:`CT ABDOMEN — ACUTE CHOLECYSTITIS
Indication: [RUQ pain / fever / suspected cholecystitis]
Technique: Portal venous phase

GALLBLADDER
Distension: No (≤4cm) / Yes — ___ × ___ cm
Wall thickening: No (<3mm) / Yes — ___ mm
Wall enhancement: Normal / Increased / Decreased [decreased = gangrene risk]
Pericholecystic fluid: Absent / Present
Pericholecystic stranding: Absent / Mild / Severe
Gallstones: No / Yes — largest ___ mm
Impacted cystic duct stone: No / Yes — ___ mm

CRITICAL SUBTYPES
Gangrenous cholecystitis:
  Irregular/asymmetric wall: No / Yes
  Intraluminal membranes: No / Yes
  Absent wall enhancement: No / Yes
  → Gangrenous: No / Suspected / Yes — URGENT SURGERY

Emphysematous cholecystitis:
  Gas in GB wall: No / Yes [EMERGENCY]
  → Emphysematous: No / Yes — EMERGENCY SURGERY

Perforation:
  Focal wall defect: No / Yes
  Pericholecystic abscess: No / Yes — ___ mm
  Free perforation: No / Yes
  Type: I (abscess) / II (free) / III (into organ)

BILIARY
CBD: ___ mm  IHBD: No / Yes
Choledocholithiasis: No / Yes
Mirizzi: No / Yes

TOKYO 2018 SEVERITY
Grade I / Grade II / Grade III
→ Grade: ___

IMPRESSION
[Acute calculous / acalculous] cholecystitis [subtype].
TG18 Grade: ___
Urgency: Elective / Urgent / Emergency`},cs:{label:"Akutní cholecystitida",evidence:"Tokyovské guidelines 2018 (TG18); Shakespear et al. 2010 CT metaanalýza; Fidler 1996 emfyzematózní cholecystitida",criticalFindings:["Emfyzematózní cholecystitida","Perforace","Gangrenózní změny","Mirizziho syndrom"],searchEvidence:"Shakespear 2010 — senzitivita CT 91 %; Grayson 2002 — CT kritéria gangrenózní cholecystitidy; validace závažnosti TG18",searchMismatch:"Standardní přehled orgánů přehlíží emfyzematózní a gangrenózní subtypy, které vyžadují aktivní cílené hledání. Mortalita >10 % bez operace — pasivně nelze nalézt.",searchPattern:[{step:1,priority:"critical",title:"Plicní okna — plyn ve stěně žlučníku",detail:"Jako úplně první: plicní okna, podívejte se na žlučník. Plyn ve stěně = emfyzematózní cholecystitida = chirurgická emergentní situace (mortalita 15–25 %). Na měkkotkáňových oknech neviditelné.",time:"10s"},{step:2,priority:"critical",title:"Hodnocení žlučníku — sycení stěny",detail:"Distenze, ztluštění stěny, poté vzorec sycení stěny. Redukované/chybějící sycení = gangrenózní cholecystitida = urgentní operace.",time:"30s"},{step:3,priority:"critical",title:"Gangrenózní změny — aktivní vyhledávání",detail:"Nepravidelná stěna. Intraluminální membrány (odloučená sliznice — vysoce specifické). Absence sycení stěny. Byť jeden z příznaků = gangrenózní cholecystitida.",time:"30s"},{step:4,priority:"high",title:"Biliární systém — DCH + Mirizzi",detail:"Průměr ductus choledochus. Choledocholitiáza. Mirizziho syndrom: konkrement v hrdle žlučníku komprimující DCH.",time:"20s"},{step:5,priority:"high",title:"Hodnocení perforace",detail:"Fokální defekt stěny. Pericholecy stický absces. Volná perforace.",time:"20s"},{step:6,priority:"normal",title:"Játra + doplňkový přehled",detail:"Jaterní absces. Hlava pankreatu. Celkový přehled.",time:"20s"}],template:`CT BŘICHA — AKUTNÍ CHOLECYSTITIDA
Indikace: [bolest v PPK / horečka / klinické podezření na cholecystitidu]
Technika: Portální fáze

NÁLEZ

Žlučník
Distenze: Ne (≤4 cm) / Ano — ___ × ___ cm
Ztluštění stěny: Ne (<3 mm) / Ano — ___ mm
Sycení stěny: Normální / Zvýšené / Snížené [snížené = riziko gangrény]
Pericholecy stická tekutina: Nepřítomna / Přítomna
Infiltrace pericholecy stického tuku: Nepřítomna / Mírná / Výrazná
Konkrementy: Ne / Ano — největší ___ mm
Inkarcerovaný konkrement v hrdle: Ne / Ano — ___ mm

Kritické subtypy [aktivně vyloučit každý]
Gangrenózní cholecystitida:
  Nepravidelná/asymetrická stěna: Ne / Ano
  Intraluminální membrány: Ne / Ano
  Absence sycení stěny: Ne / Ano
  → Gangrenózní: Ne / Suspektní / Ano — URGENTNÍ OPERACE

Emfyzematózní cholecystitida:
  Plyn ve stěně žlučníku: Ne / Ano [EMERGENTNÍ SITUACE]
  → Emfyzematózní: Ne / Ano — EMERGENTNÍ OPERACE

Perforace:
  Fokální defekt stěny: Ne / Ano
  Pericholecy stický absces: Ne / Ano — ___ mm
  Volná perforace: Ne / Ano
  Typ: I (absces) / II (volná) / III (do okolního orgánu)

Biliární systém
DCH: ___ mm  Dilatace IJCH: Ne / Ano
Choledocholitiáza: Ne / Ano
Mirizziho syndrom: Ne / Ano

Závažnost dle Tokyovských guidelines 2018
Stupeň I (mírná) / Stupeň II (středně těžká) / Stupeň III (těžká)
→ Stupeň: ___

ZÁVĚR
Akutní [kalkulózní / akalkulózní] cholecystitida [subtyp].
Stupeň TG18: ___
Naléhavost: Plánovaná / Urgentní / Emergentní`}},{id:"ischaemia",category:"surgical",en:{label:"Mesenteric Ischaemia",evidence:"ESVS Guidelines 2023; Bala et al. WSES 2017; Luther et al. systematic review 2014; Menke 2010 meta-analysis CTA",criticalFindings:["Pneumatosis","Portal venous gas","Non-enhancing bowel","Free air"],searchEvidence:"Menke 2010 — CTA sensitivity 93.3%; ESVS 2023 — vascular-first assessment mandated; Bala WSES 2017 — search sequence recommendations",searchMismatch:"CRITICAL: templates are bowel-first. Correct search is VASCULAR-FIRST on arterial phase. Assessing bowel before vessels is the most common search error in AMI.",searchPattern:[{step:1,priority:"critical",title:"ARTERIAL PHASE — SMA Origin",detail:"Open arterial phase ONLY first. SMA origin at L1. Patent? Filling defect (embolus)? Thrombosis? Highest-value 30 seconds in abdominal radiology.",time:"30s"},{step:2,priority:"critical",title:"Trace SMA + Branches",detail:"Follow SMA distally. Where does filling stop? Defines ischaemic territory. Use MIP reconstructions if available.",time:"30s"},{step:3,priority:"critical",title:"Venous Assessment",detail:"Portal venous phase: SMV, portal vein, splenic vein thrombosis.",time:"20s"},{step:4,priority:"critical",title:"Lung Windows — Pneumatosis + Portal Gas",detail:"Before bowel detail: lung windows. Portal venous gas and pneumatosis intestinalis — highest-mortality CT signs. Both invisible on soft tissue windows.",time:"15s"},{step:5,priority:"high",title:"Bowel Viability",detail:"Wall enhancement. Absent = transmural infarction. Location corresponds to vascular territory.",time:"30s"},{step:6,priority:"normal",title:"Extent + Complications",detail:"Ischaemic segment length. Free fluid. Free air (perforation).",time:"20s"}],template:`CTA ABDOMEN — ACUTE MESENTERIC ISCHAEMIA
Indication: [severe pain out of proportion / suspected AMI]
Technique: CTA — arterial + portal venous [PV-only inadequate]

VASCULAR — ARTERIAL PHASE [report first]
SMA:
  Patency: Patent / Occluded / Stenosed
  Occlusion location: ___ cm from origin
  Type: Embolic / Thrombotic / Dissection / Vasospasm (NOMI)
  Collateral filling: No / Yes
Coeliac: Patent / Occluded / Stenosed
IMA: Patent / Occluded / Stenosed
SMV: Patent / Occluded — extent ___
Portal vein: Patent / Thrombosed
Splenic vein: Patent / Occluded

AETIOLOGY
Arterial embolism: No / Yes
Arterial thrombosis: No / Yes
Venous thrombosis: No / Yes
NOMI: No / Yes
Mechanical strangulation: No / Yes

ISCHAEMIA SEVERITY
Pneumatosis intestinalis: No / Yes — location ___ [CRITICAL]
Portal venous gas: No / Yes [CRITICAL]
Free intraperitoneal air: No / Yes
Non-enhancing bowel: No / Yes — location ___, extent ___ cm
Mesenteric oedema: Absent / Present
Ascites: No / Yes — simple / haemorrhagic

BOWEL
Territory: Jejunum / Ileum / Right colon / Transverse / Left colon
Extent: ___ cm
Viability: Viable / Threatened / Infarcted

IMPRESSION
[Occlusive / Non-occlusive] acute mesenteric ischaemia.
Vessel: [SMA/SMV/portal] — [type]
Viability: Viable / Threatened / Infarcted
Urgency: EMERGENCY — immediate vascular/surgical notification`},cs:{label:"Akutní mesenterická ischémie",evidence:"Guidelines ESVS 2023; Bala et al. WSES 2017; Luther et al. systematický přehled 2014; Menke 2010 metaanalýza CTA",criticalFindings:["Pneumatosis intestinalis","Plyn v portální žíle","Chybějící sycení stěny střeva","Volný vzduch"],searchEvidence:"Menke 2010 — senzitivita CTA 93,3 %; ESVS 2023 — nařizuje přístup cévní-první; Bala WSES 2017 — doporučení k pořadí systematiky",searchMismatch:"KRITICKÉ: šablony jsou zaměřeny na střevo jako první. Správná systematika je CÉVNÍ JAKO PRVNÍ v arteriální fázi. Hodnocení střeva před cévami je nejčastější chybou v systematice AMI.",searchPattern:[{step:1,priority:"critical",title:"ARTERIÁLNÍ FÁZE — odstup AMS",detail:"Otevřete POUZE arteriální fázi jako první. Odstup AMS na úrovni L1. Průchodná? Výplňový defekt (embolus)? Trombóza? Nejcennějších 30 sekund v břišní radiologii.",time:"30s"},{step:2,priority:"critical",title:"Sledování AMS a větví",detail:"Sledujte AMS distálně. Kde se plnění zastavuje? Tím je definováno ischemické teritorium. Pokud jsou dostupné MIP rekonstrukce, využijte je.",time:"30s"},{step:3,priority:"critical",title:"Hodnocení žil",detail:"Portální fáze: trombóza VMH, v. portae, v. lienalis.",time:"20s"},{step:4,priority:"critical",title:"Plicní okna — pneumatosis + plyn v portální žíle",detail:"Před podrobným hodnocením střeva: plicní okna. Plyn v portální žíle a pneumatosis intestinalis jsou CT nálezy s nejvyšší mortalitou. Na měkkotkáňových oknech oba neviditelné.",time:"15s"},{step:5,priority:"high",title:"Viabilita střeva",detail:"Sycení stěny střeva. Chybějící sycení = transmurální infarkt. Lokalizace odpovídá cévnímu teritoriu.",time:"30s"},{step:6,priority:"normal",title:"Rozsah + komplikace",detail:"Délka ischemického segmentu. Volná tekutina. Volný vzduch (perforace).",time:"20s"}],template:`CTA BŘICHA — AKUTNÍ MESENTERICKÁ ISCHÉMIE
Indikace: [silná bolest neodpovídající klinickému nálezu / podezření na AMI]
Technika: CTA — arteriální + portální fáze [pouze portální fáze je nedostatečná]

NÁLEZ

Cévní nález — arteriální fáze [uvést jako první]
AMS:
  Průchodnost: Průchodná / Okludovaná / Stenotická
  Lokalizace okluze: ___ cm od odstupu
  Typ: Embolická (výplňový defekt) / Trombotická / Disekce / Vazospazmus (NOMI)
  Kolaterální plnění: Ne / Ano
Truncus coeliacus: Průchodný / Okludovaný / Stenotický
AMI: Průchodná / Okludovaná / Stenotická
VMH: Průchodná / Okludovaná — rozsah ___
V. portae: Průchodná / Trombózovaná
V. lienalis: Průchodná / Okludovaná

Etiologie
Arteriální embolie: Ne / Ano
Arteriální trombóza: Ne / Ano
Venózní trombóza: Ne / Ano
NOMI (neokluzivní): Ne / Ano
Mechanická strangulace: Ne / Ano

Závažnost ischémie
Pneumatosis intestinalis: Ne / Ano — lokalizace ___ [KRITICKÝ NÁLEZ]
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]
Volný vzduch v peritoneální dutině: Ne / Ano
Chybějící sycení stěny střeva: Ne / Ano — lokalizace ___, délka ___ cm
Edém mezenteria: Nepřítomen / Přítomen
Ascites: Ne / Ano — prostý/hemoragický

Střevo
Postižené teritorium: Jejunum / Ileum / Pravé tračník / Transverzum / Levé tračník
Rozsah: ___ cm
Viabilita: Životaschopné / Ohrožené / Infarkt

ZÁVĚR
Akutní mesenterická ischémie [okluzivní/neokluzivní].
Postižená céva: [AMS/VMH/v. portae] — [typ]
Viabilita střeva: Životaschopné / Ohrožené / Infarkt
URGENTNÍ NÁLEZ — nutná okamžitá konzultace chirurgie/vaskulární chirurgie`}},{id:"perforation",category:"surgical",en:{label:"GI Perforation",evidence:"Hainaux et al. 2006 CT sensitivity 92%; Langell & Mulvihill 2008; ACR Appropriateness Criteria",criticalFindings:["Free air volume","Faecal peritonitis","Perforation site"],searchEvidence:"Hainaux 2006 — lung windows mandatory; Stapakis 1992 — subdiaphragmatic air detection; Maniatis 2000 — CT localisation",searchMismatch:"Template lists free air as a finding. Correct: open lung windows BEFORE soft tissue windows. Free air invisible on W400/L40 — most common technical miss.",searchPattern:[{step:1,priority:"critical",title:"Lung Windows FIRST — Every Case",detail:"W1500/L-600 before soft tissue. Entire abdomen. Subdiaphragmatic, perihepatic, perisplenic, mesenteric, pelvic. One bubble changes everything.",time:"20s"},{step:2,priority:"critical",title:"Localise from Air Distribution",detail:"Subphrenic anterior = gastroduodenal. Perisplenic = gastric. Central mesenteric = small bowel. Pericolonic = colonic.",time:"20s"},{step:3,priority:"critical",title:"Find the Wall Defect",detail:"Soft tissue windows at suspected site. Focal defect, extraluminal contrast, perilesional inflammation.",time:"30s"},{step:4,priority:"high",title:"Peritoneal Contamination",detail:"Free fluid: simple vs complex/dense (pus/faecal) vs haemorrhagic. Localised vs diffuse.",time:"20s"},{step:5,priority:"high",title:"Causative Pathology",detail:"Peptic ulcer, diverticular, tumour, Meckel, stercoral, ischaemic.",time:"30s"},{step:6,priority:"normal",title:"Contained vs Free + Organs",detail:"Abscess/phlegmon vs free contamination. Standard survey.",time:"20s"}],template:`CT ABDOMEN — GI PERFORATION
Indication: [peritonism / suspected perforation]
Technique: Portal venous (no oral contrast if perforation suspected)

FREE AIR
Free intraperitoneal air: No / Yes
  Volume: Trace / Small / Moderate / Large
  Distribution: Subdiaphragmatic R/L / Perihepatic / Perisplenic / Pelvic / Diffuse
Retroperitoneal air: No / Yes — location ___

PERFORATION SITE
Most likely: Gastroduodenal / Small bowel / Appendix / Colon / Unclear
Wall defect: No / Yes — location ___
Extraluminal contrast: No / Yes

PERITONEAL CONTAMINATION
Free fluid: No / Simple / Complex / Haemorrhagic / Faeculent
Distribution: Localised (___) / Diffuse
Peritoneal enhancement: No / Yes

CONTAINED vs FREE
Contained — abscess: No / Yes — ___ mm
Contained — phlegmon: No / Yes

CAUSATIVE PATHOLOGY
Peptic ulcer: No / Suspected ___
Diverticular: No / Yes — Hinchey ___
Tumour: No / Yes ___
Ischaemic / Stercoral: No / Yes

IMPRESSION
[Free / Contained] GI perforation, [volume] pneumoperitoneum.
Site: ___  Cause: ___
Contamination: Localised / Diffuse
Urgency: Emergency / Urgent`},cs:{label:"Perforace GIT",evidence:"Hainaux et al. 2006 senzitivita CT 92 %; Langell & Mulvihill 2008; ACR Appropriateness Criteria",criticalFindings:["Množství volného vzduchu","Fekální peritonitida","Místo perforace"],searchEvidence:"Hainaux 2006 — plicní okna jsou povinná; Stapakis 1992 — detekce subdiafragmatického vzduchu; Maniatis 2000 — CT lokalizace perforace",searchMismatch:"Šablona uvádí volný vzduch jako nález. Správně: otevřete plicní okna DŘÍVE než měkkotkáňová. Volný vzduch je na W400/L40 neviditelný — nejčastější technická chyba.",searchPattern:[{step:1,priority:"critical",title:"NEJDŘÍVE plicní okna — každý případ",detail:"W1500/L-600 před měkkotkáňovými okny. Celé břicho. Subdiafragmaticky, perihepatálně, perilenálně, mezenteriálně, pánevně. Jedna vzduchová bublina mění vše.",time:"20s"},{step:2,priority:"critical",title:"Lokalizace dle distribuce vzduchu",detail:"Subdiafragmaticky vpředu = gastroduodenální. Perienálně = žaludek. Centrálně mezenteriálně = tenké střevo. Perikolicky = tlusté střevo.",time:"20s"},{step:3,priority:"critical",title:"Nalezení defektu stěny",detail:"Měkkotkáňová okna v místě suspektní perforace. Fokální defekt, extraluminální kontrast, perilesionální zánět.",time:"30s"},{step:4,priority:"high",title:"Kontaminace peritoneální dutiny",detail:"Volná tekutina: prostá vs. komplexní/denzní (hnis/střevní obsah) vs. hemoragická. Lokalizovaná vs. difuzní.",time:"20s"},{step:5,priority:"high",title:"Příčina perforace",detail:"Peptický vřed, divertikulární onemocnění, tumor, Meckelův divertikl, stercorální perforace, ischemie.",time:"30s"},{step:6,priority:"normal",title:"Ohraničená vs. volná perforace + orgány",detail:"Absces/flegmóna vs. volná kontaminace. Celkový přehled orgánů.",time:"20s"}],template:`CT BŘICHA — PERFORACE GIT
Indikace: [peritonismus / podezření na perforaci]
Technika: Portální fáze (bez perorálního kontrastu při podezření na perforaci)

NÁLEZ

Volný vzduch
Volný vzduch v peritoneální dutině: Ne / Ano
  Množství: Stopy / Malé / Střední / Velké
  Distribuce: Subdiafragmaticky vpravo/vlevo / Perihepatálně / Perienálně / Pánevně / Difuzně
Retroperitoneální vzduch: Ne / Ano — lokalizace ___

Místo perforace
Nejpravděpodobnější lokalizace: Gastroduodenální / Tenké střevo / Appendix / Tlusté střevo / Nejasná
Defekt stěny: Ne / Ano — lokalizace ___
Extraluminální kontrast: Ne / Ano

Kontaminace peritoneální dutiny
Volná tekutina: Ne / Prostá / Komplexní / Hemoragická / Střevní obsah
Distribuce: Lokalizovaná (___) / Difuzní
Sycení pobřišnice: Ne / Ano [svědčí pro peritonitidu]

Ohraničení
Absces: Ne / Ano — ___ mm
Flegmóna: Ne / Ano

Příčina perforace
Peptický vřed: Ne / Suspektní ___
Divertikulární onemocnění: Ne / Ano — Hinchey ___
Tumor: Ne / Ano ___
Ischemie / Stercorální: Ne / Ano

ZÁVĚR
[Volná / Ohraničená] perforace GIT, pneumoperitoneum [množství].
Místo: ___  Příčina: ___
Kontaminace: Lokalizovaná / Difuzní
Naléhavost: Emergentní / Urgentní`}},{id:"trauma",category:"trauma",en:{label:"Abdominal Trauma",evidence:"AAST Organ Injury Scales (validated); EAST guidelines 2012; WSES trauma guidelines 2020; Dreizin 2020 CT search patterns",criticalFindings:["Active extravasation","Grade IV-V organ injury","Mesenteric injury","Diaphragm tear"],searchEvidence:"Dreizin 2020 — systematic search reduces missed injuries; Boscak 2013 — extravasation detection; WSES 2020 — priority-ordered assessment",searchMismatch:"Standard organ-by-organ survey misses time-critical findings. Correct trauma search is priority-ordered: extravasation first, then organs by severity, hollow viscus last.",searchPattern:[{step:1,priority:"critical",title:"Arterial Phase — Extravasation Hunt",detail:"Arterial phase ONLY first. Bright foci >90 HU = active arterial extravasation. Single finding most urgently changing management.",time:"30s"},{step:2,priority:"critical",title:"Haemoperitoneum Distribution",detail:"Coronal: perihepatic, perisplenic, pelvic, paracolic. Dense fluid >30 HU = haemoperitoneum. Points to injury source.",time:"15s"},{step:3,priority:"critical",title:"Solid Organs — AAST Grade",detail:"Liver → Spleen → Kidneys → Pancreas. For each: laceration depth, haematoma extent, devascularisation, AAST grade.",time:"90s"},{step:4,priority:"critical",title:"Lung Windows — Free Air + Pneumatosis",detail:"Free intraperitoneal air (hollow viscus injury). Retroperitoneal air. Pneumatosis.",time:"15s"},{step:5,priority:"high",title:"Hollow Viscus + Mesentery",detail:"Free fluid WITHOUT solid organ injury = bowel/mesenteric injury. Bowel wall haematoma. Bladder rupture.",time:"45s"},{step:6,priority:"high",title:"Diaphragm — Coronals",detail:"Trace entire diaphragm on coronals. Left more common. Missed constantly on axials.",time:"20s"},{step:7,priority:"normal",title:"Vascular + Bones",detail:"Aorta, IVC. Spine, pelvis, ribs.",time:"30s"}],template:`CT TRAUMA — BŘICHO A PÁNEV
Mechanism: [blunt/penetrating]  Haemodynamics: [stable/unstable]
Technique: Arterial + portal venous

⚠ CRITICAL FINDINGS [report first]
Active extravasation: No / Yes — location ___
Haemoperitoneum: No / Yes — volume ___
Pneumoperitoneum: No / Yes

SOLID ORGANS
LIVER [AAST I-VI]
Injury: No / Yes
  Laceration: depth ___ cm, extent ___ %
  Subcapsular haematoma: No / Yes — ___ %
  Extravasation: No / Yes
  AAST Grade: I / II / III / IV / V / VI

SPLEEN [AAST I-V]
Injury: No / Yes
  Laceration / Subcapsular haematoma — ___ %
  Devascularisation: No / Yes
  Extravasation: No / Yes
  AAST Grade: I / II / III / IV / V

KIDNEY R / L [AAST I-V]
Injury: No / Yes
  Laceration — collecting system ___
  Urinary extravasation: No / Yes
  AAST Grade: I / II / III / IV / V

PANCREAS [AAST I-V]
Injury: No / Yes  Main duct: No / Suspected / Yes
AAST Grade: I / II / III / IV / V

HOLLOW VISCUS & MESENTERY
Free air: No / Yes  Bowel haematoma: No / Yes
Mesenteric haematoma: No / Yes
Free fluid without solid organ injury: No / Yes [HIGH suspicion]
Bladder: Intact / Intraperitoneal rupture / Extraperitoneal rupture

VASCULAR
Aorta: Normal / Injury  IVC: Normal / Injury

DIAPHRAGM
Right: Intact / Defect ___  Left: Intact / Defect ___

HAEMOPERITONEUM
Perihepatic / Perisplenic / Pelvic / Paracolic: ___
Total: Small / Moderate / Large (>500ml)

BONES
Spine: ___  Pelvis: ___  Ribs: ___

IMPRESSION
1. ___  2. ___  3. ___
Extravasation: Present / Absent
Intervention: Angioembolisation / Operative / Conservative`},cs:{label:"Trauma břicha",evidence:"AAST škály orgánového poranění (validované); guidelines EAST 2012; guidelines WSES pro trauma 2020; Dreizin 2020 CT systematika",criticalFindings:["Aktivní extravazace","Poranění orgánu AAST IV-V","Poranění mezenteria","Ruptura bránice"],searchEvidence:"Dreizin 2020 — systematika snižuje počet přehlédnutých poranění; Boscak 2013 — detekce extravazace; WSES 2020 — prioritní hodnocení",searchMismatch:"Standardní hodnocení orgán po orgánu přehlíží časově kritické nálezy. Správná traumatická systematika je prioritně řazená: extravazace první, pak orgány dle závažnosti, dutá střeva jako poslední.",searchPattern:[{step:1,priority:"critical",title:"Arteriální fáze — hledání extravazace",detail:"Nejdříve POUZE arteriální fáze. Světlá ložiska >90 HU = aktivní arteriální extravazace. Nález, který nejnaléhavěji mění management.",time:"30s"},{step:2,priority:"critical",title:"Distribuce hemoperitonea",detail:"Koronální rekonstrukce: perihepatálně, perienálně, pánevně, parakolicky. Denzní tekutina >30 HU = hemoperitoneum. Ukazuje na zdroj poranění.",time:"15s"},{step:3,priority:"critical",title:"Parenchymatózní orgány — AAST staging",detail:"Játra → slezina → ledviny → pankreas. Pro každý orgán: hloubka lacerace, rozsah hematomu, devaskularizace, stupeň AAST.",time:"90s"},{step:4,priority:"critical",title:"Plicní okna — volný vzduch + pneumatosis",detail:"Volný vzduch v peritoneální dutině (poranění dutého orgánu). Retroperitoneální vzduch. Pneumatosis intestinalis.",time:"15s"},{step:5,priority:"high",title:"Dutá střeva + mezenterium",detail:"Volná tekutina BEZ poranění parenchymatózního orgánu = poranění střeva/mezenteria. Hematom stěny střeva. Ruptura močového měchýře.",time:"45s"},{step:6,priority:"high",title:"Bránice — koronální rekonstrukce",detail:"Sledujte celou bránici na koronálních řezech. Vlevo častěji. Na axiálních řezech trvale přehlíží.",time:"20s"},{step:7,priority:"normal",title:"Cévy + kosti",detail:"Aorta, DDŽ. Páteř, pánev, žebra.",time:"30s"}],template:`CT TRAUMA — BŘICHO A PÁNEV
Mechanismus: [tupé/penetrující]  Hemodynamika: [stabilní/nestabilní]
Technika: Arteriální + portální fáze

NÁLEZ

⚠ KRITICKÉ NÁLEZY [uvést jako první]
Aktivní extravazace: Ne / Ano — lokalizace ___
Hemoperitoneum: Ne / Ano — množství ___
Pneumoperitoneum: Ne / Ano

Parenchymatózní orgány

JÁTRA [AAST I–VI]
Poranění: Ne / Ano
  Lacerace: hloubka ___ cm, rozsah ___ %
  Subkapsulární hematom: Ne / Ano — ___ %
  Extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V / VI

SLEZINA [AAST I–V]
Poranění: Ne / Ano
  Lacerace / Subkapsulární hematom — ___ %
  Devaskularizace: Ne / Ano
  Extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V

LEDVINY vpravo / vlevo [AAST I–V]
Poranění: Ne / Ano
  Lacerace — vývodný systém ___
  Urinózní extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V

PANKREAS [AAST I–V]
Poranění: Ne / Ano  Hlavní vývod: Ne / Suspektní / Ano
Stupeň AAST: I / II / III / IV / V

Dutá střeva + mezenterium
Volný vzduch: Ne / Ano  Hematom stěny: Ne / Ano
Mezenteriální hematom: Ne / Ano
Volná tekutina bez poranění parenchymatózního orgánu: Ne / Ano [VYSOKÉ podezření]
Močový měchýř: Intaktní / Intraperitoneální ruptura / Extraperitoneální ruptura

Cévy
Aorta: Bez nálezu / Poranění  DDŽ: Bez nálezu / Poranění

Bránice
Vpravo: Intaktní / Defekt ___  Vlevo: Intaktní / Defekt ___

Hemoperitoneum
Perihepatálně / Perienálně / Pánevně / Parakolicky: ___
Celkem: Malé / Střední / Velké (>500 ml)

Kosti
Páteř: ___  Pánev: ___  Žebra: ___

ZÁVĚR
1. ___  2. ___  3. ___
Extravazace: Přítomna / Nepřítomna
Intervence: Angioembola / Operační / Konzervativní`}},{id:"oncology",category:"oncology",en:{label:"Oncology Follow-up",evidence:"RECIST 1.1 (Eisenhauer et al. Eur J Cancer 2009); iRECIST 2017; Schwartz et al. inter-observer variability",criticalFindings:["New lesions","Progressive disease","Treatment complications"],searchEvidence:"Eisenhauer 2009 RECIST 1.1; Nishino 2014 — systematic RECIST reduces variability; ESGAR structured oncology reporting 2016",searchMismatch:"Critical error: assessing images without reading prior report first. RECIST reproducibility requires intentional target lesion identification before opening images.",searchPattern:[{step:1,priority:"critical",title:"Read Prior Report BEFORE Images",detail:"Open prior report. Target lesions, baseline sum, prior response. ONLY THEN open images.",time:"60s"},{step:2,priority:"critical",title:"Measure Target Lesions",detail:"Find each prior target. Measure longest diameter. Calculate sum. Compare to baseline AND nadir.",time:"90s"},{step:3,priority:"critical",title:"New Lesions Survey — Before Anything Else",detail:"Any new lesion = PD regardless of target behaviour. Check liver, peritoneum, lung bases, bones, nodes.",time:"60s"},{step:4,priority:"high",title:"Non-Target Lesions",detail:"Stable / Non-CR-Non-PD / Unequivocal progression.",time:"30s"},{step:5,priority:"high",title:"Treatment Complications",detail:"Immunotherapy colitis. Targeted therapy hepatotoxicity/pneumatosis. Surgical complications.",time:"30s"},{step:6,priority:"normal",title:"Incidentals + Final RECIST",detail:"Adrenal, bony findings. Calculate response category.",time:"20s"}],template:`CT ABDOMEN — ONCOLOGY RESPONSE ASSESSMENT
Primary: ___  Treatment: ___  Cycle: ___  Prior CT: ___
Technique: Portal venous ± arterial

⚠ RESPONSE SUMMARY [complete last, report first]
RECIST 1.1: CR / PR / SD / PD
New lesions: No / Yes — ___

TARGET LESIONS [max 5 total, max 2/organ, ≥10mm; nodes ≥15mm SA]
1. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
2. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
3. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
Sum: Current ___ mm / Prior ___ mm / Baseline ___ mm / Nadir ___ mm
Change from baseline: ___ %

NON-TARGET LESIONS
Present: No / Yes
Response: CR / Non-CR Non-PD / Unequivocal progression

NEW LESIONS [any = PD]
None / Yes — location ___, size ___

ORGAN ASSESSMENT
Liver: No mets / Mets — number ___, largest ___ mm
Peritoneum: No / Disease — distribution ___
Nodes: Retroperitoneal ___ mm / Mesenteric ___ mm
Bones: No / Lesions — location ___

PRIMARY SITE
Size: ___ × ___ mm (prior ___ × ___)

TREATMENT COMPLICATIONS
Bowel: None / Colitis / Obstruction / Perforation
Liver: None / Steatosis / Congestion
Thrombosis: None / DVT / Portal
Immunotherapy colitis: No / Yes — grade ___

RECIST 1.1
CR / PR (≥30% ↓ from baseline) / PD (≥20% ↑ from nadir + new lesion) / SD
→ Response: ___

IMPRESSION
[Tumour], [treatment], cycle ___.
RECIST 1.1: [response]  Sum: ___ mm ([±]___ % from baseline)
Next assessment: ___`},cs:{label:"Onkologické sledování",evidence:"RECIST 1.1 (Eisenhauer et al. Eur J Cancer 2009); iRECIST 2017; Schwartz et al. variabilita mezi hodnotiteli",criticalFindings:["Nové léze","Progrese onemocnění","Komplikace léčby"],searchEvidence:"Eisenhauer 2009 RECIST 1.1; Nishino 2014 — systematické hodnocení snižuje variabilitu; konsensus ESGAR pro onkologické hlášení 2016",searchMismatch:"Kritická chyba: hodnocení snímků bez předchozího přečtení starého protokolu. Reprodukovatelnost RECIST vyžaduje záměrnou identifikaci cílových lézí před otevřením snímků.",searchPattern:[{step:1,priority:"critical",title:"Nejdříve přečíst starý protokol",detail:"Otevřete předchozí protokol. Cílové léze, výchozí součet, předchozí odpověď. TEPRVE POTÉ otevřete snímky.",time:"60s"},{step:2,priority:"critical",title:"Změření cílových lézí",detail:"Najděte každou předchozí cílovou lézi. Změřte nejdelší průměr. Vypočítejte součet. Porovnejte s výchozím stavem I nejnižší hodnotou.",time:"90s"},{step:3,priority:"critical",title:"Přehled nových lézí — jako první",detail:"Jakákoli nová léze = progrese bez ohledu na chování cílových lézí. Prohledejte játra, peritoneum, baze plic, kosti, uzliny.",time:"60s"},{step:4,priority:"high",title:"Necílové léze",detail:"Stabilní / Neplná remise bez progrese / Jednoznačná progrese.",time:"30s"},{step:5,priority:"high",title:"Komplikace léčby",detail:"Kolitida při imunoterapii. Hepatotoxicita/pneumatosis při cílené terapii. Chirurgické komplikace.",time:"30s"},{step:6,priority:"normal",title:"Vedlejší nálezy + závěrečné RECIST",detail:"Nadledviny, kostní nálezy. Výpočet kategorie odpovědi.",time:"20s"}],template:`CT BŘICHA — ONKOLOGICKÉ SLEDOVÁNÍ / HODNOCENÍ ODPOVĚDI
Primární tumor: ___  Léčba: ___  Cyklus: ___  Předchozí CT: ___
Technika: Portální ± arteriální fáze

NÁLEZ

⚠ SOUHRN ODPOVĚDI [vyplnit na závěr, uvést na začátku]
RECIST 1.1: CR / PR / SD / PD
Nové léze: Ne / Ano — ___

Cílové léze [max. 5 celkem, max. 2 na orgán, ≥10 mm; uzliny ≥15 mm v krátké ose]
1. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
2. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
3. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
Součet: Aktuálně ___ mm / Dříve ___ mm / Výchozí ___ mm / Minimum ___ mm
Změna od výchozího stavu: ___ %

Necílové léze
Přítomny: Ne / Ano
Odpověď: CR / Neplná remise bez progrese / Jednoznačná progrese

Nové léze [jakákoli = PD]
Žádné / Ano — lokalizace ___, velikost ___

Hodnocení orgánů
Játra: Bez metastáz / Metastázy — počet ___, největší ___ mm
Peritoneum: Bez nálezu / Postižení — distribuce ___
Uzliny: Retroperitoneální ___ mm / Mezenteriální ___ mm
Kosti: Bez nálezu / Léze — lokalizace ___

Primární tumor
Velikost: ___ × ___ mm (dříve ___ × ___)

Komplikace léčby
Střevo: Žádné / Kolitida / Obstrukce / Perforace
Játra: Žádné / Steatóza / Kongesce
Trombóza: Žádná / HŽT / Portální žíla
Kolitida při imunoterapii: Ne / Ano — stupeň ___

Kategorizace RECIST 1.1
CR / PR (↓≥30 % od výchozího stavu) / PD (↑≥20 % od minima + nová léze) / SD
→ Odpověď: ___

ZÁVĚR
[Tumor], [léčba], cyklus ___.
RECIST 1.1: [odpověď]  Součet: ___ mm ([±]___ % od výchozího stavu)
Příští hodnocení: ___`}},{id:"renalcolic",category:"urological",en:{label:"Renal Colic",evidence:"EAU Urolithiasis Guidelines 2023; Türk et al. low-dose CT validation; Brisbane et al. 2016 HU stone composition; Smith 1995 original unenhanced CT protocol",criticalFindings:["High-grade obstruction","Infected obstructed kidney","AAA mimicking colic","Urothelial tumour"],searchEvidence:"EAU 2023 — unenhanced CT gold standard (sensitivity 96%, specificity 98%); Blandino 2006 CT criteria; HU composition — Brisbane 2016",searchMismatch:"Stone found → report written. Critical error: finding the stone is only step 1. Degree of obstruction, secondary signs, and AAA exclusion are missed when search stops at the stone.",searchPattern:[{step:1,priority:"critical",title:"AAA Exclusion First — Aorta",detail:"Before stone search: look at aorta. AAA rupture mimics renal colic. Diameter >3cm = aneurysm. Periaortic haematoma = rupture. 10 seconds. Mandatory for males >50.",time:"10s"},{step:2,priority:"critical",title:"Find the Stone — Trace Full Ureter",detail:"Trace ureter from renal pelvis to bladder. Impaction sites: PUJ, iliac vessel crossing, VUJ. Measure in two dimensions. HU value: <500 = likely uric acid (dissolvable).",time:"45s"},{step:3,priority:"critical",title:"Obstruction Degree — Secondary Signs",detail:"Hydronephrosis grade 0-3. Hydroureter. Perinephric stranding (confirms obstruction). Renal enlargement.",time:"20s"},{step:4,priority:"critical",title:"Infected Obstructed Kidney",detail:"Gas in collecting system = emphysematous pyelonephritis = emergency. Renal abscess. Thickened urothelium + stranding + fever = pyonephrosis = urgent drainage.",time:"15s"},{step:5,priority:"high",title:"Stone Characterisation",detail:"Size (passage probability: <4mm 80%, 4-6mm 50%, >6mm <20%). HU. Skin-to-stone distance for ESWL.",time:"20s"},{step:6,priority:"high",title:"Contralateral Kidney + Bladder",detail:"Contralateral stones/hydronephrosis. Solitary kidney changes urgency.",time:"15s"},{step:7,priority:"normal",title:"Alternative Pathology",detail:"Ovarian pathology. Appendix. Incidental renal lesions (Bosniak).",time:"20s"}],template:`CT-KUB (UNENHANCED) — RENAL COLIC
Indication: [flank pain / suspected urolithiasis]
Technique: Unenhanced CT, low-dose protocol (EAU 2023)

AORTA [exclude AAA — mandatory males >50]
Diameter: ___ mm  (normal <30mm)
Periaortic haematoma: No / Yes [AAA EMERGENCY]
→ AAA excluded: Yes / No ___

URETERIC STONE
Stone identified: No / Yes
  Location: PUJ / Proximal ureter / Mid ureter / Iliac crossing / Distal ureter / VUJ
  Side: Right / Left / Bilateral
  Size: ___ × ___ mm
  HU value: ___ HU  (<500 = likely uric acid; >1000 = calcium stone)
  Skin-to-stone distance: ___ mm
Multiple stones: No / Yes — locations ___

OBSTRUCTION
Hydronephrosis: No / Grade 1 / Grade 2 / Grade 3
Hydroureter: No / Yes — to level ___
Perinephric stranding: Absent / Present [confirms obstruction]

INFECTED OBSTRUCTION
Gas in collecting system: No / Yes [EMERGENCY]
Renal abscess: No / Yes — ___ mm
Pyonephrosis features: No / Yes [urgent drainage]

PASSAGE PROBABILITY (EAU 2023)
<4mm ~80% / 4-6mm ~50% / >6mm <20%
→ Probability: High / Moderate / Low

CONTRALATERAL KIDNEY
Stones: No / Yes  Hydronephrosis: No / Yes
Solitary kidney: No / Yes [changes urgency]

BLADDER
Normal / Stone / Wall thickening / Mass ___

INCIDENTAL RENAL LESIONS
Cysts: No / Yes — Bosniak ___ / Size ___
Solid lesion: No / Yes ___

IMPRESSION
[Right/left] ureteric stone, [location], [size] mm, [HU] HU.
Obstruction: [Grade/None]  Infected: No / Yes
Passage probability: [High/Moderate/Low]
Urgency: Routine / Urgent / Emergency`},cs:{label:"Renální kolika / Urolitiáza",evidence:"Guidelines EAU pro urolitiázu 2023; validace low-dose CT — Türk et al.; složení konkrementů dle HU — Brisbane et al. 2016; Smith 1995 původní protokol nativního CT",criticalFindings:["Vysokostupňová obstrukce","Infikovaná obstruovaná ledvina","AAA napodobující koliku","Uroteliální tumor"],searchEvidence:"EAU 2023 — nativní CT je zlatý standard (senzitivita 96 %, specificita 98 %); kritéria CT Blandino 2006; složení dle HU — Brisbane 2016",searchMismatch:"Konkrement nalezen → protokol dopsán. Kritická chyba: nalezení konkrementu je pouze první krok. Stupeň obstrukce, sekundární příznaky a vyloučení AAA jsou přehlíženy, jakmile se systematika zastaví u konkrementu.",searchPattern:[{step:1,priority:"critical",title:"Nejdříve vyloučit AAA — aorta",detail:"Před hledáním konkrementu: pohled na aortu. Ruptura AAA dokonale napodobuje renální koliku. Průměr >3 cm = aneuryzma. Periortální hematom = ruptura. 10 sekund. Povinné u mužů >50 let.",time:"10s"},{step:2,priority:"critical",title:"Nalezení konkrementu — sledování celého močovodu",detail:"Sledujte močovod od pyelonu až k měchýři. Nejčastější místa uvíznutí: pyeloureterální přechod, přechod přes ilické cévy, ureterovezikální přechod. Měřte ve dvou rovinách. HU: <500 = pravděpodobně kyselina močová (možná dissoluce).",time:"45s"},{step:3,priority:"critical",title:"Stupeň obstrukce — sekundární příznaky",detail:"Stupeň hydronefrózy 0–3. Hydroureter. Infiltrace perirenálního tuku (potvrzuje obstrukci). Zvětšení ledviny.",time:"20s"},{step:4,priority:"critical",title:"Infikovaná obstruovaná ledvina",detail:"Plyn v dutém systému = emfyzematózní pyelonefritida = emergentní situace. Renální absces. Ztluštění urotelu + infiltrace tuku + horečka = pyonefróza = urgentní drenáž.",time:"15s"},{step:5,priority:"high",title:"Charakteristika konkrementu",detail:"Velikost (pravděpodobnost spontánního odchodu: <4 mm 80 %, 4–6 mm 50 %, >6 mm <20 %). HU hodnota. Vzdálenost kůže–konkrement pro ESWL.",time:"20s"},{step:6,priority:"high",title:"Kontralaterální ledvina + měchýř",detail:"Konkrementy/hydronefróza kontralaterálně. Soliterní ledvina mění naléhavost.",time:"15s"},{step:7,priority:"normal",title:"Alternativní patologie",detail:"Ovariální patologie. Appendix. Incidentální renální léze (Bosniakova klasifikace).",time:"20s"}],template:`CT LEDVINY–MOČOVODY–MĚCHÝŘ (CT-LMM) — RENÁLNÍ KOLIKA / UROLITIÁZA
Indikace: [bolest v boku / klinické podezření na urolitiázu]
Technika: Nativní CT, low-dose protokol (EAU 2023)

NÁLEZ

Aorta [vyloučit AAA — povinné u mužů >50 let]
Průměr aorty: ___ mm (norma <30 mm)
Periortální hematom: Ne / Ano [RUPTURA AAA — EMERGENTNÍ SITUACE]
→ AAA vyloučena: Ano / Ne ___

Konkrement v močovodu
Konkrement nalezen: Ne / Ano
  Lokalizace: Pyeloureterální přechod / Proximální močovod / Střední močovod / Přechod přes ilické cévy / Distální močovod / Ureterovezikální přechod
  Strana: Vpravo / Vlevo / Oboustranně
  Velikost: ___ × ___ mm
  HU hodnota: ___ HU  (<500 = pravděpodobně kyselina močová; >1000 = kalciový konkrement)
  Vzdálenost kůže–konkrement: ___ mm
Mnohočetné konkrementy: Ne / Ano — lokalizace ___

Obstrukce
Hydronefróza: Ne / Stupeň 1 / Stupeň 2 / Stupeň 3
Hydroureter: Ne / Ano — po úroveň ___
Infiltrace perirenálního tuku: Nepřítomna / Přítomna [potvrzuje obstrukci]

Infikovaná obstrukce [aktivně vyloučit]
Plyn v dutém systému: Ne / Ano [EMERGENTNÍ SITUACE]
Renální absces: Ne / Ano — ___ mm
Příznaky pyonefrózy: Ne / Ano [urgentní drenáž]

Pravděpodobnost spontánního odchodu (EAU 2023)
<4 mm ~80 % / 4–6 mm ~50 % / >6 mm <20 %
→ Pravděpodobnost: Vysoká / Střední / Nízká

Kontralaterální ledvina
Konkrementy: Ne / Ano  Hydronefróza: Ne / Ano
Soliterní ledvina: Ne / Ano [mění naléhavost]

Močový měchýř
Bez patologického nálezu / Konkrement / Ztluštění stěny / Expanze ___

Incidentální renální léze
Cysty: Ne / Ano — Bosniakova klasifikace ___ / Velikost ___
Solidní léze: Ne / Ano ___

ZÁVĚR
Konkrement v [pravém/levém] močovodu, lokalizace [___], velikost ___ mm, HU ___.
Obstrukce: [stupeň/bez obstrukce]  Infekce: Ne / Ano
Pravděpodobnost spontánního odchodu: [Vysoká/Střední/Nízká]
Aorta: Normální nález / AAA ___
Naléhavost: Plánovaná / Urgentní / Emergentní`}},{id:"aaa",category:"vascular",en:{label:"AAA / Aortic Surveillance",evidence:"ESVS AAA Guidelines 2019; UKSAT 5.5cm threshold (1998); EVAR-1/DREAM trials; White endoleak classification (1997); SVS reporting standards",criticalFindings:["Rapid growth >5mm/6mo","Endoleak type I/III","Rupture signs","Juxta/suprarenal extent"],searchEvidence:"ESVS 2019 — perpendicular-to-centreline measurement mandate; Cayne 2004 endoleak CT criteria; EVAR-1 surveillance protocol",searchMismatch:"Most radiologists measure maximum axial diameter and stop. Critical errors: (1) axial overestimates true diameter by up to 20% — must measure perpendicular to centreline. (2) Post-EVAR: endoleak needs arterial AND delayed phases. (3) Iliac aneurysms systematically under-reported.",searchPattern:[{step:1,priority:"critical",title:"Rupture Signs First",detail:"Periaortic haematoma, retroperitoneal haematoma, draped aorta sign (posterior wall loss against vertebrae = contained rupture). Emergency surgery without further CT if present.",time:"15s"},{step:2,priority:"critical",title:"Measure Perpendicular to Centreline",detail:"NOT axial — overestimates 5-8mm in tortuous aorta. MPR perpendicular to lumen centreline. Outer wall to outer wall. ESVS-mandated method.",time:"30s"},{step:3,priority:"critical",title:"Post-EVAR: Endoleak — Two Phases",detail:"Arterial: Type I (seal zones), Type III (midgraft defect). Delayed: Type II (IMA, lumbar — fills late, missed on arterial alone). Type I and III = reintervention.",time:"60s"},{step:4,priority:"critical",title:"Growth Rate — Compare to Prior",detail:"Threshold: ≥5.5cm men, ≥5.0cm women. Growth >5mm/6mo = rapid = surgical referral regardless of size.",time:"20s"},{step:5,priority:"high",title:"Extent — Neck and Iliac",detail:"Proximal neck: infrarenal vs juxta vs pararenal vs suprarenal. Neck length, diameter, angulation. Iliac: >18mm = aneurysmal.",time:"30s"},{step:6,priority:"high",title:"Post-EVAR Graft",detail:"Migration? Limb kinking/thrombosis. Sac change >5mm without endoleak = Type V.",time:"30s"},{step:7,priority:"normal",title:"Visceral Vessels + Thrombus",detail:"Renal arteries. SMA/coeliac. Mural thrombus. Venous anomalies.",time:"20s"}],template:`CTA ABDOMEN — AAA / AORTIC SURVEILLANCE
Indication: [surveillance / pre-operative / post-EVAR follow-up]
Technique: Non-contrast + arterial + delayed phases [delayed mandatory post-EVAR]

RUPTURE SIGNS [before measurement]
Periaortic haematoma: No / Yes
Retroperitoneal haematoma: No / Yes — extent ___
Draped aorta sign: No / Yes
→ Rupture: No / Contained / Free — EMERGENCY if present

MEASUREMENT [perpendicular to centreline — ESVS mandate]
Max diameter: ___ mm AP × ___ mm transverse
Prior: ___ mm (___) → Growth: ___ mm over ___ months
Growth: Stable / Slow / Rapid (>5mm/6mo) [rapid = surgical referral]
Threshold reached: No / Yes (≥55mm men / ≥50mm women)

AORTIC EXTENT
Proximal: Infrarenal / Juxtarenal / Pararenal / Suprarenal
Infrarenal neck: Length ___ mm / Diameter ___ mm / Angulation ___ °
  Thrombus in neck: No / Yes  Calcification: No / Focal / Circumferential
Distal: Above bifurcation / At bifurcation / Involving iliac ___

ILIAC ARTERIES
Right CIA: ___ mm  Left CIA: ___ mm  (normal <18mm)
Right IIA: Patent / Aneurysmal ___ mm
Left IIA: Patent / Aneurysmal ___ mm

MURAL THROMBUS
Extent: None / Eccentric / Circumferential  Max thickness: ___ mm

POST-EVAR [complete if graft present]
Graft migration: No / Proximal ___ mm / Distal ___
Limb patency: R patent / R thrombosed  ·  L patent / L thrombosed

ENDOLEAK [White 1997 — arterial + delayed phases required]
Type I (seal zone, arterial): No / Yes — Ia / Ib
Type II (branch vessel, delayed): No / Yes — IMA / Lumbar
Type III (graft defect, arterial): No / Yes
Type V (endotension — sac growth, no leak): No / Yes
→ Endoleak: No / Type ___ — Action: Observe / Reintervene

SAC (post-EVAR)
Current: ___ mm  Prior: ___ mm  Change: ___

VISCERAL VESSELS
Coeliac: Patent / Stenosed  SMA: Patent / Stenosed
Right renal: Patent / Stenosed ___  Left renal: Patent / Stenosed ___

IMPRESSION
[Infrarenal/Juxta/Suprarenal] AAA, max ___ mm.
Growth: [Stable / +___ mm / Rapid]  Threshold: [Below / Reached]
Post-EVAR: Endoleak [None / Type ___]  Sac: [Stable / Regressing / Enlarging]
Next surveillance: [per ESVS]`},cs:{label:"AAA / Sledování aorty",evidence:"Guidelines ESVS pro AAA 2019; práh 5,5 cm UKSAT (1998); studie EVAR-1/DREAM; Whiteova klasifikace endoleaků (1997); SVS standardy hlášení",criticalFindings:["Rychlý růst >5 mm/6 měs.","Endoleak typu I/III","Příznaky ruptury","Juxta/suprarenální rozsah"],searchEvidence:"ESVS 2019 — měření kolmo na osu aorty je závazné; CT kritéria endoleaků Cayne 2004; sledovací protokol EVAR-1",searchMismatch:"Většina radiologů změří maximální axiální průměr a skončí. Kritické chyby: (1) axiální měření nadhodnocuje skutečný průměr až o 20 % — nutno měřit kolmo na osu; (2) po EVAR je k detekci endoleaku nutná arteriální A odložená fáze; (3) iliakální aneuryzmata jsou systematicky nezaznamenávána.",searchPattern:[{step:1,priority:"critical",title:"Nejdříve příznaky ruptury",detail:"Periortální hematom, retroperitoneální hematom, příznak draped aorta (ztráta kontury zadní stěny oproti obratlům = krytá ruptura). Při pozitivním nálezu = emergentní operace bez dalšího CT.",time:"15s"},{step:2,priority:"critical",title:"Měření kolmo na osu aorty",detail:"NE axiální řez — nadhodnocuje 5–8 mm u tortuózní aorty. MPR kolmo na osu lumenu. Zevní stěna k zevní stěně. Závazná metoda dle ESVS.",time:"30s"},{step:3,priority:"critical",title:"Po EVAR: endoleak — dvě fáze",detail:"Arteriální: typ I (místa přiložení protézy), typ III (defekt středního segmentu). Odložená fáze: typ II (AIM, lumbální tepny — plní se pozdě, v arteriální fázi přehlédnutelný). Typy I a III = reintervence.",time:"60s"},{step:4,priority:"critical",title:"Rychlost růstu — porovnání s předchozím",detail:"Práh pro operaci: ≥5,5 cm (muži), ≥5,0 cm (ženy). Růst >5 mm/6 měsíců = rychlý růst = indikace k operaci bez ohledu na absolutní velikost.",time:"20s"},{step:5,priority:"high",title:"Rozsah — krček a iliakální cévy",detail:"Proximální rozsah: infrarenální vs. juxtrarenální vs. pararenální vs. suprarenální. Délka, průměr a angulace krčku. Iliakální tepny: >18 mm = aneuryzmatické rozšíření.",time:"30s"},{step:6,priority:"high",title:"Hodnocení EVAR protézy",detail:"Migrace? Zákrut/trombóza raménka. Nárůst vaku >5 mm bez endoleaku = typ V (endotenze).",time:"30s"},{step:7,priority:"normal",title:"Viscerální cévy + trombus",detail:"Renální tepny. AMS/truncus coeliacus. Nástěnný trombus. Žilní anomálie.",time:"20s"}],template:`CTA BŘICHA — AAA / SLEDOVÁNÍ AORTY
Indikace: [sledování / předoperační plánování / kontrola po EVAR]
Technika: Nativní + arteriální + odložená fáze [odložená fáze povinná po EVAR]

NÁLEZ

Příznaky ruptury [hodnotit před měřením]
Periortální hematom: Ne / Ano
Retroperitoneální hematom: Ne / Ano — rozsah ___
Příznak draped aorta: Ne / Ano
→ Ruptura: Ne / Krytá / Volná — EMERGENTNÍ SITUACE při pozitivitě

Měření [kolmo na osu aorty — závazná metoda ESVS]
Maximální průměr: ___ mm AP × ___ mm transverzálně
Předchozí: ___ mm (datum ___) → Růst: ___ mm za ___ měsíců
Dynamika: Stabilní / Pomalý růst / Rychlý růst (>5 mm/6 měs.) [rychlý = indikace k operaci]
Operační práh dosažen: Ne / Ano (≥55 mm muži / ≥50 mm ženy)

Rozsah aneuryzmatu
Proximálně: Infrarenální / Juxtrarenální / Pararenální / Suprarenální
Infrarenální krček: Délka ___ mm / Průměr ___ mm / Angulace ___ °
  Trombus v krčku: Ne / Ano  Kalcifikace: Ne / Fokální / Cirkulární
Distálně: Nad bifurkací / Na bifurkaci / Zasahuje do iliakálních tepen ___

Iliakální tepny
Pravá AIC: ___ mm  Levá AIC: ___ mm  (norma <18 mm)
Pravá AII: Průchodná / Aneuryzmatická ___ mm
Levá AII: Průchodná / Aneuryzmatická ___ mm

Nástěnný trombus
Rozsah: Bez trombu / Excentrický / Cirkulární  Maximální tloušťka: ___ mm

Hodnocení EVAR protézy [vyplnit při přítomnosti protézy]
Migrace protézy: Ne / Proximální ___ mm / Distální ___
Průchodnost ramének: Pravé průchodné / Pravé trombózované  ·  Levé průchodné / Levé trombózované

Endoleak [Whiteova klasifikace — nutná arteriální + odložená fáze]
Typ I (místo přiložení, arteriální fáze): Ne / Ano — Ia / Ib
Typ II (větevní cévy, odložená fáze): Ne / Ano — AIM / Lumbální tepny
Typ III (defekt protézy, arteriální fáze): Ne / Ano
Typ V (endotenze — růst vaku bez prokazatelného endoleaku): Ne / Ano
→ Endoleak: Ne / Typ ___ — Postup: Sledování / Reintervence

Vak po EVAR
Aktuálně: ___ mm  Dříve: ___ mm  Změna: ___

Viscerální cévy
Truncus coeliacus: Průchodný / Stenotický  AMS: Průchodná / Stenotická
Pravá renální tepna: Průchodná / Stenóza ___  Levá renální tepna: Průchodná / Stenóza ___

ZÁVĚR
AAA [infrarenální/juxtrarenální/suprarenální], maximální průměr ___ mm.
Dynamika: [Stabilní / +___ mm / Rychlý růst]  Operační práh: [Nedosažen / Dosažen]
Po EVAR: Endoleak [Nepřítomen / Typ ___]  Vak: [Stabilní / Regredující / Zvětšující se]
Doporučení: [Sledovací interval dle ESVS / Indikace k operaci/EVAR / Emergentní situace]`}}],Wm=[{id:"stroke",category:"neuro",en:{label:"Stroke / Ischaemia",evidence:"ASPECTS (Barber et al. Lancet 2000); ESO/AHA stroke guidelines 2023; Powers et al. AHA 2019 early ischaemia CT signs",criticalFindings:["Large vessel occlusion","ASPECTS <6","Haemorrhagic transformation","Malignant MCA infarct signs"],searchEvidence:"Mair et al. 2015 — early ischaemia CT sign detection; Barber 2000 ASPECTS validation; ESO guidelines mandate ASPECTS before thrombectomy",searchMismatch:"Fatal error: reading brain windows only. ASPECTS must be scored BEFORE looking for vessel occlusion — anchoring on the vessel causes under-scoring of infarct extent.",searchPattern:[{step:1,priority:"critical",title:"Stroke Windows (W30/L30) — Early Signs",detail:"Open narrow stroke windows first. Insular ribbon sign, obscuration of lentiform nucleus, cortical sulcal effacement. Invisible on standard W80/L35.",time:"45s"},{step:2,priority:"critical",title:"ASPECTS Scoring — Before Vessel Assessment",detail:"10 regions: caudate, putamen, internal capsule, insular cortex, M1-M6. Subtract 1 per ischaemic region. ASPECTS <6 = poor outcome with thrombectomy.",time:"60s"},{step:3,priority:"critical",title:"CTA — Large Vessel Occlusion",detail:"ICA terminus, M1, M2, basilar. Dense MCA sign on NCCT = M1 occlusion. Hyperdense basilar = basilar thrombosis.",time:"30s"},{step:4,priority:"critical",title:"Exclude Haemorrhage",detail:"Haemorrhagic transformation (ECASS: HI1/HI2/PH1/PH2) changes thrombolysis eligibility immediately.",time:"20s"},{step:5,priority:"high",title:"Malignant MCA Infarct Signs",detail:">50% MCA territory, midline shift, ipsilateral ventricle compression. Predict malignant oedema.",time:"20s"},{step:6,priority:"high",title:"CTP Assessment",detail:"Core (rCBF <30%) vs penumbra (Tmax >6s). Mismatch ratio >1.8 = salvageable tissue.",time:"30s"},{step:7,priority:"normal",title:"Full Brain Survey",detail:"Posterior fossa, white matter changes, old infarcts, atrophy.",time:"30s"}],template:`CT BRAIN ± CTA — ACUTE STROKE
Indication: [acute neurological deficit, onset ___ h ago]
Technique: NCCT ± CTA ± CTP

EARLY ISCHAEMIA SIGNS [W30/L30]
Insular ribbon sign: Absent / Present R / L
Lentiform nucleus obscuration: Absent / Present R / L
Dense MCA sign: Absent / Present R / L
Cortical sulcal effacement: Absent / Present — region ___
Hyperdense basilar: Absent / Present

ASPECTS SCORE [before vessel assessment]
Caudate: 1/0  Putamen: 1/0  Internal capsule: 1/0  Insular cortex: 1/0
M1: 1/0  M2: 1/0  M3: 1/0  M4: 1/0  M5: 1/0  M6: 1/0
ASPECTS: ___ /10  (≥6: consider thrombectomy; <6: poor outcome)
Side: Right / Left

HAEMORRHAGE
ICH: No / Yes — type ___, location ___
Haemorrhagic transformation: No / Yes — ECASS: HI1 / HI2 / PH1 / PH2

LVO [CTA]
ICA intracranial: Patent / Occluded R/L
M1: Patent / Occluded R/L
M2: Patent / Occluded R/L
Basilar: Patent / Occluded — extent ___
Collateral grade: Good / Moderate / Poor

CTP [if performed]
Core: ___ ml (rCBF <30%)  Penumbra: ___ ml (Tmax >6s)
Mismatch ratio: ___ (>1.8 = salvageable)

MALIGNANT INFARCT
MCA territory: <50% / >50%
Midline shift: No / Yes — ___ mm
Basal cisterns: Patent / Compressed

ANCILLARY
Leukoaraiosis: None / Fazekas ___  Old infarcts: No / Yes ___
Atrophy: Age-appropriate / Disproportionate

IMPRESSION
[Ischaemic stroke / No early CT changes]
Territory: [ICA/MCA/ACA/PCA/Posterior/Lacunar]
ASPECTS: ___ /10  LVO: No / Yes — [vessel]
Thrombectomy eligibility: [comment]
Urgency: EMERGENCY — stroke team notification`},cs:{label:"Akutní ischemická CMP",evidence:"ASPECTS (Barber et al. Lancet 2000); guidelines ESO/AHA pro CMP 2023; Powers et al. AHA 2019 časné CT příznaky ischémie",criticalFindings:["Okluze velké cévy","ASPECTS <6","Hemoragická transformace","Maligní infarkt MCA"],searchEvidence:"Mair et al. 2015 — detekce časných CT příznaků ischémie; validace ASPECTS Barber 2000; guidelines ESO nařizují skórování ASPECTS před rozhodnutím o trombektomii",searchMismatch:"Fatální chyba: hodnocení pouze v mozkovém okně. ASPECTS musí být skórováno PŘED hledáním okluze cévy — primování na cévu vede k podhodnocení rozsahu infarktu.",searchPattern:[{step:1,priority:"critical",title:"Mozková okna pro CMP (W30/L30) — časné příznaky",detail:"Nejdříve úzká okna pro CMP. Příznak ztráty insulárního lemu, zastření nucleus lentiformis, vymizení kortikálních sulků. Na standardním W80/L35 neviditelné.",time:"45s"},{step:2,priority:"critical",title:"Skórování ASPECTS — před hodnocením cév",detail:"10 oblastí: nc. caudatus, putamen, capsula interna, insula, M1–M6. Odečtěte 1 bod za každou ischemickou oblast. ASPECTS <6 = špatný výsledek při trombektomii.",time:"60s"},{step:3,priority:"critical",title:"CTA — okluze velké cévy",detail:"Intrakraniální ICA, M1, M2, bazilární tepna. Hyperdenzní střední mozková tepna na NCCT = okluze M1. Hyperdenzní bazilární tepna = trombóza.",time:"30s"},{step:4,priority:"critical",title:"Vyloučení hemoragie",detail:"Hemoragická transformace (ECASS: HI1/HI2/PH1/PH2) okamžitě mění způsobilost k trombolýze.",time:"20s"},{step:5,priority:"high",title:"Příznaky maligního infarktu MCA",detail:"Postižení >50 % teritoria MCA, deviace střední čáry, komprese ipsilaterální komory. Předpovídají maligní edém.",time:"20s"},{step:6,priority:"high",title:"CT perfuze",detail:"Jádro infarktu (rCBF <30 %) vs. penumbra (Tmax >6 s). Poměr nesouladu >1,8 = zachranitelná tkáň.",time:"30s"},{step:7,priority:"normal",title:"Celkový přehled mozku",detail:"Zadní jáma, změny bílé hmoty, staré infarkty, atrofie.",time:"30s"}],template:`CT MOZKU ± CTA — AKUTNÍ ISCHEMICKÁ CMP
Indikace: [akutní neurologický deficit, začátek před ___ h]
Technika: NCCT ± CTA ± CT perfuze

NÁLEZ

Časné příznaky ischémie [okna W30/L30]
Příznak ztráty insulárního lemu: Nepřítomen / Přítomen vpravo / vlevo
Zastření nc. lentiformis: Nepřítomno / Přítomno vpravo / vlevo
Hyperdenzní střední mozková tepna: Nepřítomna / Přítomna vpravo / vlevo
Vymizení kortikálních sulků: Nepřítomno / Přítomno — oblast ___
Hyperdenzní bazilární tepna: Nepřítomna / Přítomna

Skóre ASPECTS [hodnotit před posouzením cév]
Nc. caudatus: 1/0  Putamen: 1/0  Capsula interna: 1/0  Insula: 1/0
M1: 1/0  M2: 1/0  M3: 1/0  M4: 1/0  M5: 1/0  M6: 1/0
ASPECTS: ___ /10  (≥6: zvážit trombektomii; <6: špatná prognóza)
Strana: Pravá / Levá

Krvácení
ICH: Ne / Ano — typ ___, lokalizace ___
Hemoragická transformace: Ne / Ano — ECASS: HI1 / HI2 / PH1 / PH2

Okluze velké cévy [CTA]
Intrakraniální ICA: Průchodná / Okludovaná vpravo/vlevo
M1: Průchodná / Okludovaná vpravo/vlevo
M2: Průchodná / Okludovaná vpravo/vlevo
Bazilární tepna: Průchodná / Okludovaná — rozsah ___
Kolaterální oběh: Dobrý / Střední / Slabý

CT perfuze [pokud provedena]
Jádro infarktu: ___ ml (rCBF <30 %)  Penumbra: ___ ml (Tmax >6 s)
Poměr nesouladu: ___ (>1,8 = zachranitelná tkáň)

Příznaky maligního infarktu
Postižení teritoria MCA: <50 % / >50 %
Deviace střední čáry: Ne / Ano — ___ mm
Bazální cisterny: Volné / Stlačené

Doplňkový nález
Leukoaraióza: Žádná / Fazekas ___  Staré infarkty: Ne / Ano ___
Atrofie: Přiměřená věku / Nepřiměřeně výrazná

ZÁVĚR
[Akutní ischemická CMP / Bez CT průkazu časných ischemických změn — CMP nelze CT vyloučit]
Teritorium: [ICA/MCA/ACA/PCA/Zadní povodí/Lakunární]
ASPECTS: ___ /10  Okluze velké cévy: Ne / Ano — [céva]
Způsobilost k trombektomii: [komentář dle ASPECTS + okluze + časové okno]
URGENTNÍ NÁLEZ — nutné okamžité předání neurologickému týmu`}},{id:"ich",category:"neuro",en:{label:"Intracranial Haemorrhage",evidence:"ICH Score (Hemphill et al. Stroke 2001); Broderick 1993 ABC/2 volume method; AHA/ASA ICH guidelines 2022",criticalFindings:["Spot sign (haematoma expansion)","Intraventricular extension","Herniation","Underlying mass"],searchEvidence:"Delong 2010 — spot sign predicts expansion; Tuhrim 1999 IVH score; AHA 2022 search sequence",searchMismatch:"Volume estimation skipped or eyeballed. ABC/2 must be done for every ICH — it drives ICH score and management. Spot sign frequently not looked for on CTA.",searchPattern:[{step:1,priority:"critical",title:"Location Determines Aetiology",detail:"Putaminal/thalamic = hypertensive. Lobar = amyloid/mass/AVM. Cerebellar = hypertensive/AVM. Brainstem = hypertensive (very high mortality). SAH = aneurysm.",time:"20s"},{step:2,priority:"critical",title:"Volume — ABC/2 Mandatory",detail:"A × B × C/2. >30ml = surgical consideration. >60ml = high mortality. Every time, not optional.",time:"30s"},{step:3,priority:"critical",title:"Spot Sign — CTA",detail:"Enhancing foci within haematoma on arterial phase = active bleeding = 3-6× expansion risk. Look actively — subtle 1-2mm foci.",time:"30s"},{step:4,priority:"critical",title:"IVH + Hydrocephalus",detail:"Which ventricles? Graeb IVH score. Temporal horn dilation = early obstructive hydrocephalus. EVD decision.",time:"20s"},{step:5,priority:"critical",title:"Herniation",detail:"Midline shift (septum pellucidum). Subfalcine, uncal, transtentorial. Basal cisterns.",time:"20s"},{step:6,priority:"high",title:"Underlying Cause",detail:"Atypical location, disproportionate oedema, heterogeneous density → underlying mass/AVM.",time:"30s"},{step:7,priority:"normal",title:"ICH Score Calculation",detail:"GCS + volume + IVH + infratentorial + age. Max 6. Document in impression.",time:"15s"}],template:`CT BRAIN ± CTA — INTRACRANIAL HAEMORRHAGE
Indication: [acute headache / focal deficit / decreased GCS]
Technique: NCCT ± CTA

HAEMATOMA
Location: Putaminal / Thalamic / Lobar (___ lobe) / Cerebellar / Brainstem / Other ___
Side: Right / Left
Density: Homogeneous hyperdense / Heterogeneous [heterogeneous = expansion risk]

VOLUME [ABC/2 — mandatory]
A: ___ cm  B: ___ cm  C: ___ cm
Volume: ___ ml  (>30ml surgical consideration; >60ml high mortality)

EXPANSION RISK
Spot sign (CTA): No / Yes — number ___ [HIGH expansion risk]
Irregular margins: No / Yes  Satellite haematomas: No / Yes

IVH
Present: No / Yes — Right lateral / Left lateral / 3rd / 4th
Graeb IVH Score: ___ /12
Hydrocephalus: No / Yes — temporal horns ___ mm

HERNIATION
Midline shift: No / Yes — ___ mm
Subfalcine: No / Yes  Uncal: No / Yes
Basal cisterns: Patent / Compressed / Obliterated

AETIOLOGY
Hypertensive (typical location): Yes / No
Amyloid angiopathy (lobar, elderly): No / Possible / Yes
Underlying mass: No / Suspected ___
AVM/vascular malformation: No / Suspected ___

ICH SCORE [Hemphill 2001]
GCS 3-4=2 / 5-12=1 / 13-15=0: ___
Volume ≥30ml=1 / <30=0: ___
IVH present=1 / absent=0: ___
Infratentorial=1 / supratentorial=0: ___
Age ≥80=1 / <80=0: ___
ICH Score: ___ /6  (0→0%, 2→26%, 3→72%, 4→97% 30-day mortality)

IMPRESSION
[Location] ICH, volume ___ ml.
ICH Score: ___ /6 (___ % predicted mortality)
IVH: No / Yes (Graeb ___)  Spot sign: No / Yes
Midline shift: No / ___ mm
Aetiology: [Hypertensive / Amyloid / Suspected underlying lesion / Unknown]
Urgency: EMERGENCY — neurosurgical notification`},cs:{label:"Intrakraniální krvácení",evidence:"ICH skóre (Hemphill et al. Stroke 2001); metoda ABC/2 Broderick 1993; guidelines AHA/ASA pro ICH 2022",criticalFindings:["Spot sign (riziko expanze hematomu)","Rozšíření do komor","Herniace","Tumor v podkladí"],searchEvidence:"Delong 2010 — spot sign predikuje expanzi; IVH skóre Tuhrim 1999; systematika dle AHA 2022",searchMismatch:"Odhad objemu je vynecháván nebo prováděn od oka. Metoda ABC/2 musí být provedena u každého ICH — ovlivňuje ICH skóre a management. Spot sign na CTA je často přehlízen.",searchPattern:[{step:1,priority:"critical",title:"Lokalizace určuje etiologii",detail:"Putaminální/talamická = hypertenzní. Lobární = amyloidová angiopatie/tumor/AVM. Mozečková = hypertenzní/AVM. Kmen = hypertenzní (velmi vysoká mortalita). SAK = aneuryzma.",time:"20s"},{step:2,priority:"critical",title:"Objem — metoda ABC/2 povinně",detail:"A × B × C/2. >30 ml = zvažovat chirurgii. >60 ml = vysoká mortalita. Povinné u každého ICH, nelze vynechat.",time:"30s"},{step:3,priority:"critical",title:"Spot sign — CTA",detail:"Enhancující ložiska uvnitř hematomu v arteriální fázi = aktivní krvácení = 3–6× vyšší riziko expanze. Hledejte aktivně — drobná ložiska 1–2 mm.",time:"30s"},{step:4,priority:"critical",title:"IVH + hydrocefalus",detail:"Které komory jsou postiženy? Graebovo IVH skóre. Dilatace temporálních rohů = časný obstruktivní hydrocefalus. Rozhodnutí o EVD.",time:"20s"},{step:5,priority:"critical",title:"Herniace",detail:"Deviace střední čáry (septum pellucidum). Subfalcinní, unkální, transtentoriální herniace. Bazální cisterny.",time:"20s"},{step:6,priority:"high",title:"Příčina krvácení",detail:"Atypická lokalizace, nepřiměřený edém, heterogenní denzita → tumor/AVM v podkladí.",time:"30s"},{step:7,priority:"normal",title:"Výpočet ICH skóre",detail:"GCS + objem + IVH + infratentoriální lokalizace + věk. Maximum 6. Uvést v závěru.",time:"15s"}],template:`CT MOZKU ± CTA — INTRAKRANIÁLNÍ KRVÁCENÍ
Indikace: [akutní bolest hlavy / ložiskový neurologický deficit / pokles GCS]
Technika: NCCT ± CTA

NÁLEZ

Hematom
Lokalizace: Putaminální / Talamická / Lobární (___lalok) / Mozečková / Mozkový kmen / Jiná ___
Strana: Vpravo / Vlevo
Denzita: Homogenně hyperdenzní / Heterogenní [heterogenní = riziko expanze]

Objem [metoda ABC/2 — povinně]
A: ___ cm  B: ___ cm  C: ___ cm
Objem: ___ ml  (>30 ml zvažovat chirurgii; >60 ml vysoká mortalita)

Riziko expanze hematomu
Spot sign (CTA): Ne / Ano — počet ___ [VYSOKÉ riziko expanze]
Nepravidelné okraje: Ne / Ano  Satelitní hemotomy: Ne / Ano

Intraventrikulární krvácení (IVH)
Přítomno: Ne / Ano — Pravá postranní / Levá postranní / III. komora / IV. komora
Graebovo IVH skóre: ___ /12
Hydrocefalus: Ne / Ano — temporální rohy ___ mm

Herniace
Deviace střední čáry: Ne / Ano — ___ mm
Subfalcinní: Ne / Ano  Unkální: Ne / Ano
Bazální cisterny: Volné / Stlačené / Obliterovány

Etiologie
Hypertenzní (typická lokalizace): Ano / Ne
Amyloidová angiopatie (lobární, vyšší věk): Ne / Možná / Ano
Tumor v podkladí: Ne / Suspektní ___
AVM / cévní malformace: Ne / Suspektní ___

ICH skóre [Hemphill 2001]
GCS 3–4 = 2 b / 5–12 = 1 b / 13–15 = 0 b: ___
Objem ≥30 ml = 1 b / <30 ml = 0 b: ___
IVH přítomno = 1 b / nepřítomno = 0 b: ___
Infratentoriální lokalizace = 1 b / supratentoriální = 0 b: ___
Věk ≥80 let = 1 b / <80 let = 0 b: ___
ICH skóre celkem: ___ /6  (0 → 0 %, 2 → 26 %, 3 → 72 %, 4 → 97 % mortalita za 30 dní)

ZÁVĚR
Intrakraniální krvácení [lokalizace], objem ___ ml.
ICH skóre: ___ /6 (předpokládaná mortalita ___ %)
IVH: Ne / Ano (Graeb ___)  Spot sign: Ne / Ano
Deviace střední čáry: Ne / ___ mm
Etiologie: [Hypertenzní / Amyloidová angiopatie / Suspektní tumor v podkladí / Nezjištěna]
URGENTNÍ NÁLEZ — nutná konzultace neurochirurgie`}},{id:"sah",category:"neuro",en:{label:"Subarachnoid Haem.",evidence:"Modified Fisher Grade (Frontera 2006); Ottawa SAH Rule Perry 2011; ISUIA aneurysm rupture risk data",criticalFindings:["Aneurysm on CTA","Hydrocephalus","Modified Fisher grade","Parenchymal haematoma"],searchEvidence:"Frontera 2006 Modified Fisher validation; ISAT/ISUIA aneurysm data; blood distribution predicts aneurysm location",searchMismatch:"Most radiologists report SAH distribution then look for aneurysm. Correct: use blood distribution to PREDICT aneurysm location FIRST, then go there on CTA.",searchPattern:[{step:1,priority:"critical",title:"Confirm SAH — All Cisterns",detail:"Sylvian fissures, basal cisterns, interhemispheric fissure, prepontine, sulci.",time:"20s"},{step:2,priority:"critical",title:"Distribution → Predict Aneurysm Location",detail:"Sylvian = MCA. Interhemispheric/anterior = AComm. Prepontine = basilar. Perisellar = ICA/PComm. Go there on CTA first.",time:"20s"},{step:3,priority:"critical",title:"CTA — Targeted Aneurysm Hunt",detail:"Predicted location first. Saccular outpouching, daughter sac (rupture indicator). If negative, survey full Circle of Willis.",time:"60s"},{step:4,priority:"critical",title:"Hydrocephalus",detail:"Temporal horn dilation (normal <2mm). Third ventricle rounding. Acute hydrocephalus = EVD.",time:"20s"},{step:5,priority:"high",title:"Modified Fisher Grade",detail:"1: focal/thin SAH no IVH. 2: thin + IVH. 3: thick no IVH. 4: thick + IVH. Grade 3/4 = highest vasospasm risk.",time:"15s"},{step:6,priority:"high",title:"Parenchymal Haematoma",detail:"Associated ICH? Location correlates with aneurysm (sylvian haematoma = MCA).",time:"15s"},{step:7,priority:"normal",title:"Full Brain Survey",detail:"Parenchyma, cerebral oedema, infarction (vasospasm if delayed).",time:"20s"}],template:`CT BRAIN + CTA — SUBARACHNOID HAEMORRHAGE
Indication: [thunderclap headache / reduced GCS]
Technique: NCCT + CTA circle of Willis ± CTV

SAH
Confirmed: Yes / No
Distribution:
  Basal cisterns: No / Trace / Thick
  Sylvian fissure R: No / Thin / Thick  L: No / Thin / Thick
  Interhemispheric: No / Yes
  Prepontine: No / Yes  Cortical sulci: No / Yes ___
  IVH: No / Yes — ventricles ___

MODIFIED FISHER GRADE [Frontera 2006]
Grade 1: Focal/thin, no IVH (vasospasm 24%)
Grade 2: Thin + IVH (33%)
Grade 3: Thick, no IVH (33%)
Grade 4: Thick + IVH (40%)
→ Grade: ___

ANEURYSM [CTA]
Identified: No / Yes
  Location: AComm / PComm R/L / MCA R/L / ICA / Basilar / PICA / Other ___
  Size: ___ mm  Neck: ___ mm
  Morphology: Saccular / Irregular / Daughter sac [rupture indicator]
Multiple: No / Yes ___
Perimesencephalic (non-aneurysmal): No / Yes

HYDROCEPHALUS
Temporal horns: R ___ mm  L ___ mm  (normal <2mm)
3rd ventricle: Normal / Dilated  Acute: No / Yes [EVD]

PARENCHYMAL
ICH: No / Yes — ___ ml  Oedema: No / Yes  Infarction: No / Yes ___

IMPRESSION
SAH, [distribution].
Modified Fisher Grade: ___
Aneurysm: Not identified / [location, size, morphology]
Hydrocephalus: No / Yes
Urgency: EMERGENCY — neurosurgical/IR notification`},cs:{label:"Subarachnoidální krvácení",evidence:"Modifikovaný Fisherův stupeň (Frontera 2006); Ottawská pravidla pro SAK Perry 2011; data ISUIA o riziku ruptury aneuryzmatu",criticalFindings:["Aneuryzma na CTA","Hydrocefalus","Modifikovaný Fisherův stupeň","Parenchymatózní hematom"],searchEvidence:"Validace modifikovaného Fisherova stupně Frontera 2006; data ISAT/ISUIA; distribuce krve předpovídá lokalizaci aneuryzmatu",searchMismatch:"Většina radiologů popíše distribuci SAK a pak hledá aneuryzma. Správně: použijte distribuci krve k PŘEDPOVĚDI lokalizace aneuryzmatu NEJDŘÍVE, a pak tam jděte na CTA.",searchPattern:[{step:1,priority:"critical",title:"Potvrzení SAK — všechny cisterny",detail:"Silviovská rýha, bazální cisterny, interhemisférická rýha, prepontální cisterna, kortikální sulky.",time:"20s"},{step:2,priority:"critical",title:"Distribuce → předpověď lokalizace aneuryzmatu",detail:"Silviovská rýha = MCA. Interhemisféricky/anteriorně = AComm. Prepontálně = bazilární tepna. Periselárně = ICA/PComm. Na CTA jděte nejdříve tam.",time:"20s"},{step:3,priority:"critical",title:"CTA — cílené hledání aneuryzmatu",detail:"Nejdříve předpovídaná lokalizace. Sakulární výchlipka, dceřiný vak (příznak ruptury). Při negativitě systematické projití celého Willisova okruhu.",time:"60s"},{step:4,priority:"critical",title:"Hydrocefalus",detail:"Dilatace temporálních rohů (norma <2 mm). Zaoblení III. komory. Akutní hydrocefalus = EVD.",time:"20s"},{step:5,priority:"high",title:"Modifikovaný Fisherův stupeň",detail:"1: fokální/tenká vrstva SAK bez IVH. 2: tenká vrstva + IVH. 3: silná vrstva bez IVH. 4: silná vrstva + IVH. Stupeň 3/4 = nejvyšší riziko vazospazmu.",time:"15s"},{step:6,priority:"high",title:"Parenchymatózní hematom",detail:"Přidružené ICH? Lokalizace odpovídá aneuryzmatu (hematom v Silviovské rýze = MCA).",time:"15s"},{step:7,priority:"normal",title:"Celkový přehled mozku",detail:"Parenchym, edém, infarkt (vazospazmus při opožděné prezentaci).",time:"20s"}],template:`CT MOZKU + CTA — SUBARACHNOIDÁLNÍ KRVÁCENÍ
Indikace: [hrom bouřkové bolesti hlavy / snížení GCS]
Technika: NCCT + CTA Willisova okruhu ± CTV

NÁLEZ

Subarachnoidální krvácení (SAK)
Potvrzeno: Ano / Ne
Distribuce:
  Bazální cisterny: Ne / Stopy / Silná vrstva
  Silviovská rýha vpravo: Ne / Tenká vrstva / Silná vrstva  vlevo: Ne / Tenká / Silná
  Interhemisférická rýha: Ne / Ano
  Prepontální cisterna: Ne / Ano  Kortikální sulky: Ne / Ano ___
  IVH: Ne / Ano — komory ___

Modifikovaný Fisherův stupeň [Frontera 2006]
Stupeň 1: Fokální/tenká vrstva SAK bez IVH (riziko vazospazmu 24 %)
Stupeň 2: Tenká vrstva + IVH (33 %)
Stupeň 3: Silná vrstva bez IVH (33 %)
Stupeň 4: Silná vrstva + IVH (40 %)
→ Stupeň: ___

Aneuryzma [CTA]
Identifikováno: Ne / Ano
  Lokalizace: AComm / PComm vpravo/vlevo / MCA vpravo/vlevo / ICA / Bazilární tepna / PICA / Jiné ___
  Velikost: ___ mm  Krček: ___ mm
  Morfologie: Sakulární / Nepravidelné / Dceřiný vak [příznak ruptury]
Mnohočetná aneuryzmata: Ne / Ano ___
Perimezencefalický vzorec (nearteryzmatické): Ne / Ano

Hydrocefalus
Temporální rohy: Vpravo ___ mm  Vlevo ___ mm  (norma <2 mm)
III. komora: Normální / Dilatovaná  Akutní hydrocefalus: Ne / Ano [EVD]

Parenchymatózní nález
ICH: Ne / Ano — ___ ml  Edém: Ne / Ano  Infarkt: Ne / Ano ___

ZÁVĚR
Subarachnoidální krvácení, [distribuce].
Modifikovaný Fisherův stupeň: ___
Aneuryzma: Neidentifikováno / [lokalizace, velikost, morfologie]
Hydrocefalus: Ne / Ano
URGENTNÍ NÁLEZ — nutná konzultace neurochirurgie/intervenční neuroradiologie`}},{id:"headtrauma",category:"neuro",en:{label:"Head Trauma",evidence:"Rotterdam Score (Maas 2005); Marshall CT Classification 1991; NICE head injury guidelines 2023",criticalFindings:["Epidural haematoma","Midline shift >5mm","Absent basal cisterns","Herniation"],searchEvidence:"Maas 2005 Rotterdam validation; Marshall 1991 outcome correlation; NICE 2023 systematic search mandate",searchMismatch:"Bone windows looked at last or skipped. Correct: bone windows SECOND (after haemorrhage check), before detailed parenchyma. EDH most reliably found on bone windows. Temporal bone fractures invisible on brain windows.",searchPattern:[{step:1,priority:"critical",title:"Brain Windows — Haemorrhage",detail:"EDH (biconvex, no suture crossing), SDH (crescent), SAH (sulcal), contusions (frontal/temporal poles), DAI (grey-white junction, corpus callosum).",time:"30s"},{step:2,priority:"critical",title:"Bone Windows — Skull + Base",detail:"Vault fractures — especially temporal (MMA = EDH risk). Skull base, temporal bone, cribriform plate. Depressed fractures.",time:"30s"},{step:3,priority:"critical",title:"Midline Shift + Herniation",detail:"Shift at septum pellucidum. >5mm = surgical consideration. Uncal herniation — ipsilateral suprasellar cistern. Basal cisterns (drives Rotterdam).",time:"20s"},{step:4,priority:"critical",title:"EDH — Expansion Risk",detail:"Heterogeneous density = active bleeding = emergency even if small. Biconvex >1cm, >30ml, or >5mm shift = operative.",time:"20s"},{step:5,priority:"high",title:"Contusions + DAI",detail:"Frontal/temporal poles. Corpus callosum, dorsolateral brainstem = DAI (subtle on CT, MRI needed).",time:"20s"},{step:6,priority:"high",title:"Rotterdam Score",detail:"Basal cisterns(0-2) + midline shift(0-1) + epidural mass(0-1) + IVH/SAH(0-1). Score ≥4 = mortality >50%.",time:"15s"},{step:7,priority:"normal",title:"Soft Tissue + Sinuses",detail:"Scalp haematoma (impact point). Pneumocephalus. Sinuses (fluid = skull base fracture).",time:"20s"}],template:`CT BRAIN — HEAD TRAUMA
Mechanism: [___]  GCS: ___  Lateralising signs: No / Yes ___
Technique: NCCT ± CTA if vascular injury suspected

HAEMORRHAGE
EDH: No / Yes
  Location: ___  Volume: ___ ml  Thickness: ___ mm
  Density: Homogeneous / Heterogeneous [heterogeneous = active bleeding]
  Crossing sutures: No / Yes [reconsider diagnosis]

SDH: No / Yes
  Acute / Subacute / Chronic / Mixed
  Location: Convexity R/L / Interhemispheric / Tentorial
  Thickness: ___ mm

SAH: No / Yes — ___  IVH: No / Yes — ventricles ___
Contusions: No / Yes — location ___, size ___
DAI: No / Suspected — [corpus callosum / grey-white / brainstem]
ICH: No / Yes — location ___, volume ___ ml

MASS EFFECT & HERNIATION
Midline shift: No / Yes — ___ mm
Subfalcine: No / Yes  Uncal: No / Yes
Basal cisterns: Patent / Compressed / Absent [Rotterdam]
Transtentorial: No / Yes

SKULL FRACTURES [bone windows]
Vault: None / Linear / Depressed ___ mm / Diastatic
  Location: ___  Crossing meningeal groove: No / Yes [EDH risk]
Skull base: None / Yes — ___  Temporal bone: Intact / Fracture ___

ROTTERDAM SCORE [Maas 2005]
Basal cisterns: Normal(0) / Compressed(1) / Absent(2): ___
Midline shift ≤5mm(0) / >5mm(1): ___
Epidural mass: Present(0) / Absent(1): ___
IVH/SAH: Absent(0) / Present(1): ___
Rotterdam: ___ + 1 = ___ /6  (≥4: mortality >50%)

ANCILLARY
Pneumocephalus: No / Yes  Scalp haematoma: ___
Sinuses: Clear / Opacified ___

IMPRESSION
[Injuries in severity order]
Rotterdam: ___ /6  Midline shift: No / ___ mm
Urgency: Non-operative / Neurosurgical consultation / Emergency OR`},cs:{label:"Kraniocerebrální trauma",evidence:"Rotterdamské skóre (Maas 2005); Marshallova CT klasifikace 1991; guidelines NICE pro poranění hlavy 2023",criticalFindings:["Epidurální hematom","Deviace střední čáry >5 mm","Absence bazálních cisteren","Herniace"],searchEvidence:"Validace rotterdamského skóre Maas 2005; korelace výsledků Marshallova CT 1991; povinná systematika dle NICE 2023",searchMismatch:"Kostní okna jsou hodnocena jako poslední nebo vynechána. Správně: kostní okna JAKO DRUHÁ (po přehledu krvácení), před podrobným hodnocením parenchymu. EDH nejspolehlivěji viditelný v kostním okně. Zlomeniny spánkové kosti neviditelné v mozkovém okně.",searchPattern:[{step:1,priority:"critical",title:"Mozková okna — krvácení",detail:"EDH (bikonvexní, nepřekračuje sutury), SDH (srpovitý), SAK (v kortikálních sulcích), kontuze (frontální/temporální póly), DAI (rozhraní šedé a bílé hmoty, corpus callosum).",time:"30s"},{step:2,priority:"critical",title:"Kostní okna — kalva + spodina",detail:"Zlomeniny klenby — zejména temporální (a. meningea media = riziko EDH). Spodina lební, spánková kost, cribriformní ploténka. Depresi zlomeniny.",time:"30s"},{step:3,priority:"critical",title:"Deviace střední čáry + herniace",detail:"Deviace na úrovni septum pellucidum. >5 mm = zvažovat chirurgii. Unkální herniace — supraselární cisterna. Bazální cisterny (klíčové pro rotterdamské skóre).",time:"20s"},{step:4,priority:"critical",title:"EDH — riziko expanze",detail:"Heterogenní denzita = aktivní krvácení = emergentní situace i při malém objemu. Bikonvexní >1 cm, >30 ml nebo deviace >5 mm = operační indikace.",time:"20s"},{step:5,priority:"high",title:"Kontuze + DAI",detail:"Frontální/temporální póly. Corpus callosum, dorzolaterální mozkový kmen = DAI (na CT subtilní, nutné MRI).",time:"20s"},{step:6,priority:"high",title:"Rotterdamské skóre",detail:"Bazální cisterny (0–2) + deviace střední čáry (0–1) + epidurální expanze (0–1) + IVH/SAK (0–1). Skóre ≥4 = mortalita >50 %.",time:"15s"},{step:7,priority:"normal",title:"Měkké tkáně + dutiny",detail:"Hematom skalpu (místo dopadu). Pneumocefalus. Paranazální dutiny (tekutina = zlomenina spodiny).",time:"20s"}],template:`CT MOZKU — KRANIOCEREBRÁLNÍ TRAUMA
Mechanismus: [___]  GCS: ___  Lateralizační příznaky: Ne / Ano ___
Technika: NCCT ± CTA při podezření na cévní poranění

NÁLEZ

Krvácení
Epidurální hematom (EDH): Ne / Ano
  Lokalizace: ___  Objem: ___ ml  Tloušťka: ___ mm
  Denzita: Homogenní / Heterogenní [heterogenní = aktivní krvácení]
  Překračuje sutury: Ne / Ano [přehodnotit diagnózu]

Subdurální hematom (SDH): Ne / Ano
  Akutní / Subakutní / Chronický / Smíšený
  Lokalizace: Konvexita vpravo/vlevo / Interhemisféricky / Tentoriálně
  Tloušťka: ___ mm

SAK: Ne / Ano — ___  IVH: Ne / Ano — komory ___
Kontuze: Ne / Ano — lokalizace ___, velikost ___
DAI: Ne / Suspektní — [corpus callosum / rozhraní šedé a bílé hmoty / mozkový kmen]
ICH: Ne / Ano — lokalizace ___, objem ___ ml

Expanze + herniace
Deviace střední čáry: Ne / Ano — ___ mm
Subfalcinní herniace: Ne / Ano  Unkální herniace: Ne / Ano
Bazální cisterny: Volné / Stlačené / Obliterovány [klíčové pro rotterdamské skóre]
Transtentoriální herniace: Ne / Ano

Zlomeniny kalvy a spodiny lební [kostní okna]
Kalva: Bez zlomeniny / Lineární / Deprimovaná ___ mm / Diastáza
  Lokalizace: ___  Přechod přes drážku a. meningea media: Ne / Ano [riziko EDH]
Spodina lební: Bez zlomeniny / Ano — oblast ___  Spánková kost: Intaktní / Zlomenina ___

Rotterdamské skóre [Maas 2005]
Bazální cisterny: Normální(0) / Stlačené(1) / Obliterovány(2): ___
Deviace střední čáry ≤5 mm(0) / >5 mm(1): ___
Epidurální expanze: Přítomna(0) / Nepřítomna(1): ___
IVH/SAK: Nepřítomno(0) / Přítomno(1): ___
Rotterdam celkem: ___ + 1 = ___ /6  (≥4: mortalita >50 %)

Doplňkový nález
Pneumocefalus: Ne / Ano  Hematom skalpu: ___
Paranazální dutiny: Volné / Opacifikovány ___

ZÁVĚR
[Poranění seřazena dle závažnosti]
Rotterdamské skóre: ___ /6  Deviace střední čáry: Ne / ___ mm
Naléhavost: Konzervativní / Konzultace neurochirurgie / Emergentní operace`}},{id:"braintumor",category:"neuro",en:{label:"Brain Mass / Tumour",evidence:"WHO CNS Classification 2021; EANO glioma guidelines 2021; RANO criteria; Cha 2006 CT characterisation",criticalFindings:["Herniation","Haemorrhage into mass","Hydrocephalus","Leptomeningeal spread"],searchEvidence:"Cha 2006 systematic CT characterisation; WHO 2021 integrated diagnosis; EANO 2021 structured reporting",searchMismatch:"Single-phase CT inadequate for brain tumour characterisation — always flag MRI need. On CT: single vs multiple changes differential entirely. Herniation/hydrocephalus = acute management determinants.",searchPattern:[{step:1,priority:"critical",title:"Number of Lesions",detail:"Multiple grey-white junction = metastases. Periventricular = lymphoma/GBM. Single ring-enhancing: GBM/metastasis/abscess/lymphoma.",time:"20s"},{step:2,priority:"critical",title:"Herniation + Hydrocephalus",detail:"Before detailed characterisation: mass effect, shift, herniation, ventricular obstruction. Determines emergency management.",time:"20s"},{step:3,priority:"high",title:"Lesion Characterisation",detail:"Intra-axial vs extra-axial (changes differential completely). Density. Enhancement. Oedema. Necrosis. Haemorrhage.",time:"45s"},{step:4,priority:"high",title:"Distribution Pattern",detail:"Cortical/grey-white = metastases. Periventricular = lymphoma/GBM. Corpus callosum = GBM butterfly. Extra-axial + dural tail = meningioma.",time:"20s"},{step:5,priority:"high",title:"Leptomeningeal Disease",detail:"Sulcal enhancement, ependymal enhancement, cranial nerve enhancement.",time:"20s"},{step:6,priority:"normal",title:"Bone Windows",detail:"Calvarial invasion, hyperostosis, skull base erosion, lytic/sclerotic metastases.",time:"15s"}],template:`CT BRAIN WITH CONTRAST — BRAIN MASS
Indication: [headache / seizure / focal deficit / known malignancy]
Technique: NCCT + CECT  [Note: MRI brain with contrast required for definitive characterisation]

LESION
Number: Single / Multiple
Location: Intra-axial / Extra-axial [critical distinction]
  Lobe: Frontal / Temporal / Parietal / Occipital / PF / Corpus callosum / Brainstem
  Side: R / L / Midline
  Grey-white junction: No / Yes  Periventricular: No / Yes

Size: ___ × ___ × ___ mm
Density (NCCT): Hyperdense / Isodense / Hypodense / Heterogeneous / Calcified
Enhancement: No / Solid / Ring / Heterogeneous / Dural tail
Necrosis: No / Yes  Haemorrhage: No / Yes
Oedema: Absent / Mild / Moderate / Severe — ___ cm beyond lesion

MASS EFFECT
Midline shift: No / Yes — ___ mm
Hydrocephalus: No / Yes
Herniation: No / Subfalcine / Uncal / Transtentorial
Basal cisterns: Patent / Compressed / Obliterated

DIFFERENTIAL
Single ring-enhancing: GBM / Metastasis / Abscess / Lymphoma
Multiple (grey-white junction): Metastases
Extra-axial + dural tail: Meningioma
Butterfly (corpus callosum): GBM / Lymphoma
→ Working differential: ___

LEPTOMENINGEAL
Sulcal enhancement: No / Yes  Ependymal: No / Yes

BONES
Skull: Normal / Hyperostosis / Invasion ___

IMPRESSION
[Single/multiple] [intra/extra]-axial lesion(s), [location].
Working differential: ___
Mass effect: [describe]  Herniation: No / Yes
MRI brain with contrast required for definitive characterisation.`},cs:{label:"Expanzivní proces mozku",evidence:"WHO klasifikace CNS 2021; guidelines EANO pro gliomy 2021; kritéria RANO; CT charakterizace Cha 2006",criticalFindings:["Herniace","Krvácení do expanze","Hydrocefalus","Leptomeningeální šíření"],searchEvidence:"Systematická CT charakterizace Cha 2006; integrovaná diagnóza WHO 2021; strukturované hlášení EANO 2021",searchMismatch:"Jednofázové CT je nedostatečné pro charakterizaci mozkového tumoru — vždy indikujte MRI. Na CT: počet lézí zcela mění diferenciální diagnózu. Herniace/hydrocefalus = akutní management.",searchPattern:[{step:1,priority:"critical",title:"Počet lézí",detail:"Mnohočetné na rozhraní šedé a bílé hmoty = metastázy. Periventrikulárně = lymfom/GBM. Solitární prstencové sycení: GBM/metastáza/absces/lymfom.",time:"20s"},{step:2,priority:"critical",title:"Herniace + hydrocefalus",detail:"Před podrobnou charakterizací: expanze, deviace, herniace, obstrukce komor. Určuje potřebu akutního managementu.",time:"20s"},{step:3,priority:"high",title:"Charakterizace léze",detail:"Intraxiální vs. extraaxiální (zcela mění diferenciální diagnózu). Denzita. Sycení. Edém. Nekróza. Krvácení.",time:"45s"},{step:4,priority:"high",title:"Distribuční vzorec",detail:"Kortikálně/rozhraní šedé a bílé hmoty = metastázy. Periventrikulárně = lymfom/GBM. Corpus callosum = GBM motýlkový vzorec. Extraaxiální + durální přívěsek = meningeom.",time:"20s"},{step:5,priority:"high",title:"Leptomeningeální postižení",detail:"Sycení sulků, ependymální sycení, sycení hlavových nervů.",time:"20s"},{step:6,priority:"normal",title:"Kostní okna",detail:"Invaze klenby, hyperostóza, destrukce spodiny, lytické/sklerotické metastázy.",time:"15s"}],template:`CT MOZKU S KONTRASTEM — EXPANZIVNÍ PROCES
Indikace: [bolest hlavy / epileptický záchvat / ložiskový deficit / onkologická anamnéza]
Technika: NCCT + CECT  [Poznámka: pro definitivní charakterizaci je nutné MRI mozku s kontrastem]

NÁLEZ

Expanzivní proces
Počet: Solitární / Mnohočetný
Lokalizace: Intraxiální / Extraaxiální [klíčové rozlišení]
  Lalok: Frontální / Temporální / Parietální / Okcipitální / Zadní jáma / Corpus callosum / Mozkový kmen
  Strana: Vpravo / Vlevo / Středočárově
  Rozhraní šedé a bílé hmoty: Ne / Ano  Periventrikulárně: Ne / Ano

Velikost: ___ × ___ × ___ mm
Denzita (NCCT): Hyperdenzní / Izodenzní / Hypodenzní / Heterogenní / Kalcifikace
Sycení: Bez sycení / Solidní / Prstencové / Heterogenní / Durální přívěsek
Nekróza: Ne / Ano  Krvácení: Ne / Ano
Perifokální edém: Nepřítomen / Mírný / Střední / Výrazný — ___ cm od léze

Expanzivní účinek
Deviace střední čáry: Ne / Ano — ___ mm
Hydrocefalus: Ne / Ano
Herniace: Ne / Subfalcinní / Unkální / Transtentoriální
Bazální cisterny: Volné / Stlačené / Obliterovány

Diferenciální diagnóza
Solitární prstencové sycení: GBM / Metastáza / Absces / Lymfom
Mnohočetné (rozhraní šedé a bílé hmoty): Metastázy
Extraaxiální + durální přívěsek: Meningeom
Motýlkový vzorec (corpus callosum): GBM / Lymfom
→ Pracovní diferenciální diagnóza: ___

Leptomeningeální postižení
Sycení sulků: Ne / Ano  Ependymální sycení: Ne / Ano

Kostní nález
Kalva: Normální / Hyperostóza / Invaze ___

ZÁVĚR
[Solitární/mnohočetná] [intra/extra]axiální expanze, [lokalizace].
Pracovní diferenciální diagnóza: ___
Expanzivní účinek: [popis]  Herniace: Ne / Ano
Pro definitivní charakterizaci doporučujeme MRI mozku s gadoliniem.`}},{id:"venousthrombosis",category:"neuro",en:{label:"Venous Sinus Thrombosis",evidence:"EFNS/EAN CVT guidelines 2017; Ferro et al. ISCVT 2004; Dmytriw 2018 CT diagnosis systematic review",criticalFindings:["Haemorrhagic infarction","Bilateral thalamic involvement","Posterior fossa thrombosis"],searchEvidence:"Dmytriw 2018 — NCCT sensitivity 33%, CTV 75-100%; EFNS 2017 mandate CTV; cord/dense triangle sign detection",searchMismatch:"CVT most missed intracranial emergency. NCCT alone misses 65% of cases. Dense triangle/cord signs require active search. Always request CTV when CVT suspected.",searchPattern:[{step:1,priority:"critical",title:"Dense Triangle / Cord Signs",detail:"Hyperdense SSS (dense triangle, posterior 1/3). Hyperdense transverse sinus. Cord sign (cortical vein thrombosis). Require narrow windowing and active search.",time:"30s"},{step:2,priority:"critical",title:"Bilateral Thalamic Oedema",detail:"Bilateral symmetric thalamic hypodensity = deep CVT (internal cerebral veins/straight sinus). Trigger immediate CTV.",time:"15s"},{step:3,priority:"critical",title:"Haemorrhagic Infarction — Atypical Location",detail:"Not respecting arterial territory, parasagittal or cortical = CVT. Cortical SAH.",time:"20s"},{step:4,priority:"critical",title:"Empty Delta Sign — Post-Contrast",detail:"Filling defect in posterior SSS = empty delta. Specific for CVT.",time:"20s"},{step:5,priority:"high",title:"CTV — All Sinuses",detail:"SSS, transverse (bilateral), sigmoid, straight, vein of Galen, internal cerebral veins, cortical veins.",time:"45s"},{step:6,priority:"normal",title:"Brain Parenchyma",detail:"Oedema, infarction, haemorrhage location.",time:"20s"}],template:`CT BRAIN + CTV — CEREBRAL VENOUS THROMBOSIS
Indication: [headache / papilloedema / seizure / focal deficit with normal CTA]
Technique: NCCT + CTV [NCCT alone insufficient — sensitivity 33%]

NCCT DIRECT SIGNS
Dense triangle (SSS): No / Yes
Cord sign (cortical vein): No / Yes — location ___
Dense transverse sinus: No / Yes — R / L
Straight sinus hyperdensity: No / Yes

NCCT INDIRECT SIGNS
Bilateral thalamic oedema/haemorrhage: No / Yes [deep CVT]
Parasagittal haemorrhagic infarction: No / Yes
Cortical SAH: No / Yes
Oedema not following arterial territory: No / Yes

CTV
Empty delta sign (SSS): No / Yes
SSS: Patent / Thrombosed — extent ___
R transverse: Patent / Thrombosed / Hypoplastic
L transverse: Patent / Thrombosed / Hypoplastic
Sigmoid R/L: Patent / Thrombosed
Straight sinus: Patent / Thrombosed
Internal cerebral veins: Patent / Thrombosed
Vein of Galen: Patent / Thrombosed
Cortical veins: None / Thrombosis — location ___

PARENCHYMA
Oedema: No / Yes — location ___  Bilateral thalamic: ___
Haemorrhagic infarction: No / Yes — location ___

IMPRESSION
[CVT confirmed / Suspected — CTV required / No CVT on CT]
Sinus involved: ___
Parenchymal complication: [specify]
Note: Negative NCCT does NOT exclude CVT
Urgency: Urgent — anticoagulation decision`},cs:{label:"Trombóza mozkových žil a splavů",evidence:"Guidelines EFNS/EAN pro CVT 2017; Ferro et al. ISCVT 2004; systematický přehled CT diagnostiky CVT Dmytriw 2018",criticalFindings:["Hemoragický infarkt","Oboustranné postižení thalamu","Trombóza zadní jámy"],searchEvidence:"Dmytriw 2018 — senzitivita NCCT 33 %, CTV 75–100 %; EFNS 2017 nařizuje CTV; metodika detekce příznaku cord a dense triangle",searchMismatch:"CVT je nejčastěji přehlíženou intrakraniální urgentní diagnózou. Samotné NCCT přehlíží 65 % případů. Příznaky dense triangle a cord vyžadují aktivní cílené hledání. Při podezření na CVT vždy indikujte CTV.",searchPattern:[{step:1,priority:"critical",title:"Příznak dense triangle + příznak cord",detail:"Hyperdenzní SSS (dense triangle, zadní třetina). Hyperdenzní transverzální splav. Příznak cord (trombóza kortikální žíly — hyperdenzní kortikální žíla). Vyžaduje úzká okna a aktivní hledání.",time:"30s"},{step:2,priority:"critical",title:"Oboustranný edém thalamu",detail:"Oboustranná symetrická hypodenzita thalamu = hluboká CVT (vv. cerebri internae/přímý splav). Okamžitá indikace CTV.",time:"15s"},{step:3,priority:"critical",title:"Hemoragický infarkt — atypická lokalizace",detail:"Nerespektuje arteriální teritorium, parasagitálně nebo kortikálně = CVT. Kortikální SAK.",time:"20s"},{step:4,priority:"critical",title:"Příznak empty delta — po kontrastní látce",detail:"Výplňový defekt v zadní části SSS = příznak empty delta. Specifický pro CVT.",time:"20s"},{step:5,priority:"high",title:"CTV — všechny splavu a žíly",detail:"SSS, transverzální splav (oboustranně), sigmoidální splav, přímý splav, v. Galeni, vv. cerebri internae, kortikální žíly.",time:"45s"},{step:6,priority:"normal",title:"Parenchym mozku",detail:"Edém, infarkt, lokalizace krvácení.",time:"20s"}],template:`CT MOZKU + CTV — TROMBÓZA MOZKOVÝCH ŽIL A SPLAVŮ
Indikace: [bolest hlavy / papilledém / epilepsie / ložiskový deficit při normální CTA]
Technika: NCCT + CTV [samotné NCCT nedostatečné — senzitivita 33 %]

NÁLEZ

Přímé CT příznaky na NCCT
Příznak dense triangle (SSS): Ne / Ano
Příznak cord (kortikální žíla): Ne / Ano — lokalizace ___
Hyperdenzní transverzální splav: Ne / Ano — vpravo/vlevo
Hyperdenzita přímého splavu: Ne / Ano

Nepřímé CT příznaky na NCCT
Oboustranný edém/krvácení thalamu: Ne / Ano [hluboká CVT]
Parasagitální hemoragický infarkt: Ne / Ano
Kortikální SAK: Ne / Ano
Edém nerespektující arteriální teritorium: Ne / Ano

CTV — hodnocení splavů a žil
Příznak empty delta (SSS): Ne / Ano
SSS: Průchodný / Trombóza — rozsah ___
Pravý transverzální splav: Průchodný / Trombóza / Hypoplazie
Levý transverzální splav: Průchodný / Trombóza / Hypoplazie
Sigmoidální splav vpravo/vlevo: Průchodný / Trombóza
Přímý splav: Průchodný / Trombóza
Vv. cerebri internae: Průchodné / Trombóza [oboustranné postižení thalamu]
V. Galeni: Průchodná / Trombóza
Kortikální žíly: Bez trombózy / Trombóza — lokalizace ___

Parenchymatózní nález
Edém: Ne / Ano — lokalizace ___  Oboustranný thalamický: ___
Hemoragický infarkt: Ne / Ano — lokalizace ___

ZÁVĚR
[Potvrzena CVT / Suspektní CVT — nutné CTV / Bez průkazu CVT na CT]
Postižené splavu/žíly: ___
Parenchymatózní komplikace: [specifikovat]
Poznámka: Negativní NCCT nevylučuje CVT — při klinickém podezření nutné CTV
Naléhavost: Urgentní — rozhodnutí o antikoagulaci (neurologie/hematologie)`}}],Jm=[{id:"pe",category:"chest",en:{label:"Pulmonary Embolism",evidence:"ESC PE Guidelines 2019; PIOPED II (Stein et al. NEJM 2006); RV/LV ratio — Quiroz 2004; Qanadli obstruction index",criticalFindings:["Saddle embolus","RV strain (RV/LV >1)","Right heart thrombus","Pulmonary infarction"],searchEvidence:"Stein PIOPED II 2006 — CT-PA accuracy; Quiroz 2004 RV/LV mortality prediction; ESC 2019 imaging algorithm",searchMismatch:"Most radiologists report PE then incidentals. Critical error: RV/LV ratio must be assessed IMMEDIATELY after PE confirmation — determines high/intermediate/low risk and thrombolysis decision.",searchPattern:[{step:1,priority:"critical",title:"Pulmonary Arteries — Systematic",detail:"Main PA → right/left PA → lobar → segmental → subsegmental. Filling defect: complete vs partial. Note most proximal level. Saddle = highest risk.",time:"60s"},{step:2,priority:"critical",title:"RV Strain — Immediately After PE Confirmed",detail:"Four-chamber axial: RV/LV ratio at widest point. >1.0 = dilation. >1.5 = severe. IVS bowing left = elevated RV pressure. Right heart thrombus. IVC/hepatic reflux.",time:"30s"},{step:3,priority:"critical",title:"Qanadli Obstruction Index",detail:"Obstructed vessels out of 40 (2 pts complete, 1 pt partial). >40% correlates with haemodynamic compromise.",time:"20s"},{step:4,priority:"high",title:"Pulmonary Infarction",detail:"Hampton's hump (peripheral wedge consolidation). Ipsilateral pleural effusion.",time:"20s"},{step:5,priority:"high",title:"DVT Signs",detail:"IVC, iliac veins for thrombus. Main PA diameter >29mm = chronic PH.",time:"15s"},{step:6,priority:"normal",title:"Lung Parenchyma + Mediastinum",detail:"Incidental nodules (apply Fleischner), consolidation, mass.",time:"30s"}],template:`CT PULMONARY ANGIOGRAPHY — PULMONARY EMBOLISM
Indication: [suspected PE, Wells ___, D-dimer ___]
Technique: CT-PA (bolus tracking)

PULMONARY EMBOLISM
PE confirmed: No / Yes
  Main PA: No / Yes — R / L / Saddle [CRITICAL]
  Lobar: No / Yes — R upper / R middle / R lower / L upper / L lower
  Segmental: No / Yes — ___
  Subsegmental: No / Yes — ___
Most proximal level: Main PA / Lobar / Segmental / Subsegmental
Acute (central) / Chronic (eccentric, wall-adherent, webs)

QANADLI: ___ /40 = ___ %

RV STRAIN [assess immediately after PE confirmed]
RV: ___ mm  LV: ___ mm  RV/LV ratio: ___
  (<1.0 normal; >1.0 dilation; >1.5 severe)
IVS bowing left: No / Yes
Right heart thrombus: No / Yes — location ___
IVC/hepatic reflux: No / Yes
Main PA: ___ mm (>29mm = chronic PH)

ESC 2019 RISK
High: Haemodynamic instability + any PE
Intermediate-high: RV dysfunction (CT) + biomarkers +
Intermediate-low: RV dysfunction OR biomarkers (not both)
Low: None
→ CT-based risk: ___

PULMONARY INFARCTION
Hampton's hump: No / Yes — location ___
Pleural effusion: No / Yes — R / L — volume ___

LUNG PARENCHYMA
Consolidation: No / Yes  Nodules: No / Yes → [Fleischner]
Pleural: No / R / L / Bilateral

IMPRESSION
[Acute / Chronic / No] PE. Level: [most proximal]
Bilateral: Yes / No  Saddle: Yes / No
RV/LV: ___  RV strain: Absent / Present
ESC risk (CT): [High / Intermediate / Low]`},cs:{label:"Plicní embolie",evidence:"Guidelines ESC pro PE 2019; PIOPED II (Stein et al. NEJM 2006); RV/LV ratio — Quiroz 2004; Qanadliho obstrukční index",criticalFindings:["Sedlová embolie","Přetížení pravé komory (RV/LV >1)","Trombus v pravostranných srdečních oddílech","Plicní infarkt"],searchEvidence:"Stein PIOPED II 2006 — přesnost CT-PA; predikce mortality RV/LV ratio Quiroz 2004; zobrazovací algoritmus ESC 2019",searchMismatch:"Většina radiologů popíše PE a pak přejde na vedlejší nálezy. Kritická chyba: poměr RV/LV musí být hodnocen OKAMŽITĚ po potvrzení PE — určuje vysoké/střední/nízké riziko a rozhodnutí o trombolýze.",searchPattern:[{step:1,priority:"critical",title:"Plicní tepny — systematicky",detail:"Hlavní plicní tepna → pravostranné/levostranné → lobární → segmentární → subsegmentární. Výplňový defekt: kompletní vs. parciální. Zaznamejte nejproximalnejší úroveň. Sedlová embolie = nejvyšší riziko.",time:"60s"},{step:2,priority:"critical",title:"Přetížení PK — okamžitě po potvrzení PE",detail:"Axiální čtyřdutinová projekce: poměr PK/LK v nejširším místě. >1,0 = dilatace. >1,5 = závažné přetížení. Vybočení septa vlevo = zvýšený tlak v PK. Trombus v pravých srdečních oddílech. Reflux kontrastu do DDŽ/jaterních žil.",time:"30s"},{step:3,priority:"critical",title:"Qanadliho obstrukční index",detail:"Počet obstruovaných cév z 40 (2 body za kompletní, 1 bod za parciální). >40 % koreluje s hemodynamickým kompromisem.",time:"20s"},{step:4,priority:"high",title:"Plicní infarkt",detail:"Hamptonův hrb (periferní klínovitá konsolidace). Ipsilaterální pleurální výpotek.",time:"20s"},{step:5,priority:"high",title:"Příznaky HŽT",detail:"DDŽ, ilické žíly — trombus. Průměr hlavní plicní tepny >29 mm = chronická plicní hypertenze.",time:"15s"},{step:6,priority:"normal",title:"Plicní parenchym + mediastinum",detail:"Incidentální uzliny (aplikovat Fleischnerova doporučení), konsolidace, masa.",time:"30s"}],template:`CT PULMONÁLNÍ ANGIOGRAFIE — PLICNÍ EMBOLIE
Indikace: [podezření na PE, Wellsovo skóre ___, D-dimery ___]
Technika: CT-PA (bolus tracking)

NÁLEZ

Plicní embolie
PE potvrzena: Ne / Ano
  Hlavní plicní tepna: Ne / Ano — vpravo / vlevo / Sedlová [KRITICKÝ NÁLEZ]
  Lobární větve: Ne / Ano — pravý horní / pravý střední / pravý dolní / levý horní / levý dolní
  Segmentární větve: Ne / Ano — ___
  Subsegmentární větve: Ne / Ano — ___
Nejproximalnejší úroveň: Hlavní tepna / Lobární / Segmentární / Subsegmentární
Akutní (centrální výplňový defekt) / Chronická (excentrická, adherující ke stěně, septa)

Qanadliho index: ___ /40 = ___ %

Přetížení pravé komory [hodnotit okamžitě po potvrzení PE]
Průměr PK: ___ mm  Průměr LK: ___ mm  Poměr PK/LK: ___
  (<1,0 normální; >1,0 dilatace; >1,5 závažné přetížení)
Vybočení mezikomorového septa vlevo: Ne / Ano
Trombus v pravostranných srdečních oddílech: Ne / Ano — lokalizace ___
Reflux kontrastu do DDŽ/jaterních žil: Ne / Ano
Hlavní plicní tepna: ___ mm (>29 mm = chronická plicní hypertenze)

Stratifikace rizika dle ESC 2019
Vysoké: Hemodynamická nestabilita + jakákoli PE
Středně vysoké: Dysfunkce PK (CT) + pozitivní biomarkery
Středně nízké: Dysfunkce PK NEBO biomarkery (nikoli obojí)
Nízké: Žádné z výše uvedeného
→ CT příspěvek ke stratifikaci rizika: ___

Plicní infarkt
Hamptonův hrb: Ne / Ano — lokalizace ___
Pleurální výpotek: Ne / Ano — vpravo / vlevo — množství ___

Plicní parenchym
Konsolidace: Ne / Ano  Uzliny: Ne / Ano → [Fleischnerova doporučení]
Pleurální nález: Ne / Vpravo / Vlevo / Oboustranně

ZÁVĚR
[Akutní / Chronická / Bez průkazu] plicní embolie.
Nejproximalnejší úroveň: [___]  Oboustranná: Ano / Ne  Sedlová: Ano / Ne
Poměr PK/LK: ___  Přetížení PK: Nepřítomno / Přítomno
Stratifikace rizika (CT): [Vysoké / Střední / Nízké]`}},{id:"aorta",category:"chest",en:{label:"Aortic Emergency",evidence:"Stanford/DeBakey classification; ESC Aortic Guidelines 2023; Penn Classification (Lombardi 2009); ADD-RS",criticalFindings:["Type A dissection","Malperfusion","Rupture / tamponade","Haemothorax"],searchEvidence:"Lombardi 2009 Penn classification; ESC 2014 search sequence; Clough 2012 malperfusion CT signs",searchMismatch:"CRITICAL: searching chest then abdomen. Correct: classify Type A vs B FIRST, then trace extent, THEN malperfusion. Malperfusion drives mortality — most missed finding.",searchPattern:[{step:1,priority:"critical",title:"Type A vs B — Immediate",detail:"Does flap involve ascending aorta (proximal to innominate)? Any involvement = Type A = emergency surgery. Binary decision in first 30 seconds.",time:"20s"},{step:2,priority:"critical",title:"Rupture / Tamponade Signs",detail:"Haemopericardium. Haemothorax. Periaortic haematoma. Mediastinal haematoma. Any = impending rupture = immediate surgical notification.",time:"20s"},{step:3,priority:"critical",title:"Trace Dissection Extent",detail:"Where does flap begin/end? True lumen (smaller, anterolateral, higher density). Which major vessels from true vs false lumen?",time:"60s"},{step:4,priority:"critical",title:"Malperfusion — Most Missed",detail:"Brain (ICA), spinal cord (intercostal), mesenteric (SMA/coeliac), renal (asymmetric nephrogram), limb (iliac). Low-density bowel, renal cortical defects.",time:"45s"},{step:5,priority:"high",title:"Aortic Measurements",detail:"Sinuses of Valsalva, sinotubular junction, mid-ascending, arch, descending T4/T8/T12, abdominal.",time:"30s"},{step:6,priority:"normal",title:"Cardiac + Other",detail:"Coronary ostia (Type A). Aortic valve. Incidentals.",time:"20s"}],template:`CTA CHEST/ABDOMEN — AORTIC EMERGENCY
Indication: [tearing pain / suspected dissection]
Technique: Non-contrast + arterial (ECG-gated if available) + portal venous

CLASSIFICATION
Stanford: A (ascending — surgical emergency) / B (descending only)
DeBakey: I / II / III
Type: Classic dissection / IMH / PAU

RUPTURE SIGNS [before detailed analysis]
Haemopericardium: No / Yes — volume ___
Haemothorax: No / Yes — R / L
Periaortic haematoma: No / Yes
Mediastinal haematoma: No / Yes

PENN CLASS [Lombardi 2009]
A: No malperfusion  B: Peripheral malperfusion
C: Visceral malperfusion  BC: Both
→ Class: ___

DISSECTION
Intimal flap: Identified / Not identified
Entry tear: Location ___, size ___ mm
IMH: No / Yes — max thickness ___ mm
PAU: No / Yes — location ___, depth ___

TRUE / FALSE LUMEN
True: [anterolateral / compressed / higher density]
False lumen thrombosis: Complete / Partial / Patent

EXTENT
Proximal: ___  Distal: ___
Major vessels — T (true) or F (false):
  Innominate: T/F  LCCA: T/F  LSC: T/F
  Coeliac: T/F  SMA: T/F  R renal: T/F  L renal: T/F
  R iliac: T/F  L iliac: T/F

MALPERFUSION [highest priority after classification]
Brain: No / Yes — ___  Spinal cord: No / Yes — ___
Mesenteric: No / Yes — ___  Renal: No / Yes — ___
Limb: No / Yes — ___

MEASUREMENTS
Sinuses: ___ mm  STJ: ___ mm  Mid-ascending: ___ mm
Arch: ___ mm  Desc T4: ___ mm  At diaphragm: ___ mm
Max: ___ mm at ___

IMPRESSION
Stanford Type [A/B] [dissection/IMH/PAU].
Rupture signs: [specify]  Penn: ___
Malperfusion: None / [specify]
Entry tear: ___  Extent: ___
Urgency: EMERGENCY TYPE A / URGENT TYPE B`},cs:{label:"Akutní onemocnění aorty",evidence:"Stanfordská/DeBakeyho klasifikace; guidelines ESC pro aortu 2023; Pennova klasifikace (Lombardi 2009); ADD-RS",criticalFindings:["Disekce typu A","Malperúze orgánů","Ruptura / tamponáda","Hemotorax"],searchEvidence:"Pennova klasifikace Lombardi 2009; systematika ESC 2014; CT příznaky malperúze Clough 2012",searchMismatch:"KRITICKÉ: hodnocení hrudníku a pak břicha. Správně: nejdříve klasifikace typ A vs. B, pak rozsah, a POTÉ malperúze. Malperúze orgánů je hlavní determinantou mortality — nejčastěji přehlížený nález.",searchPattern:[{step:1,priority:"critical",title:"Typ A vs. B — okamžitě",detail:"Zasahuje intimální chlopeň vzestupnou aortu (proximálně od truncus brachiocephalicus)? Jakékoli postižení = typ A = emergentní kardiochirurgie. Binární rozhodnutí do 30 sekund.",time:"20s"},{step:2,priority:"critical",title:"Příznaky ruptury / tamponády",detail:"Hemoperikard. Hemotorax. Periortální hematom. Mediastinální hematom. Cokoli z toho = hrozící ruptura = okamžitá notifikace chirurga.",time:"20s"},{step:3,priority:"critical",title:"Sledování rozsahu disekce",detail:"Kde intimální chlopeň začíná/končí? Pravé lumen (menší, anterolaterální, vyšší denzita). Které velké cévy odstupují z pravého vs. falešného lumenu?",time:"60s"},{step:4,priority:"critical",title:"Malperúze orgánů — nejčastěji přehlížený nález",detail:"Mozek (ICA), mícha (mezižeberní tepny), mezenterium (AMS/truncus coeliacus), ledviny (asymetrická nefrogramová fáze), dolní končetiny (ilické tepny). Hypodenzní střevo, kortikální defekty ledvin.",time:"45s"},{step:5,priority:"high",title:"Měření aorty",detail:"Sinus aorty, sinotubulární přechod, vzestupná aorta, oblouk, sestupná aorta na úrovni Th4/Th8/Th12, abdominální úsek.",time:"30s"},{step:6,priority:"normal",title:"Srdce + doplňkový nález",detail:"Koronární odstupy (typ A). Aortální chlopeň. Incidentální nálezy.",time:"20s"}],template:`CTA HRUDNÍKU/BŘICHA — AKUTNÍ ONEMOCNĚNÍ AORTY
Indikace: [trhavá bolest / podezření na disekci aorty]
Technika: Nativní + arteriální fáze (EKG-gated pokud dostupné) + portální fáze

NÁLEZ

Klasifikace
Stanford: A (vzestupná aorta — emergentní kardiochirurgie) / B (pouze sestupná)
DeBakey: I / II / III
Typ: Klasická disekce / Intramurální hematom (IMH) / Penetrující aortální vřed (PAV)

Příznaky ruptury [hodnotit před detailní analýzou]
Hemoperikard: Ne / Ano — množství ___
Hemotorax: Ne / Ano — vpravo / vlevo
Periortální hematom: Ne / Ano
Mediastinální hematom: Ne / Ano

Pennova klasifikace [Lombardi 2009]
A: Bez malperúze  B: Periferní malperúze (končetiny/ledviny/mezenterium)
C: Viscerální malperúze (mozek/srdce/mícha)  BC: Obojí
→ Třída: ___

Disekce / IMH / PAV
Intimální chlopeň: Identifikována / Neidentifikována
Vstupní trhlina: Lokalizace ___, velikost ___ mm
IMH: Ne / Ano — maximální tloušťka ___ mm
PAV: Ne / Ano — lokalizace ___, hloubka ___

Pravé a falešné lumen
Pravé lumen: [anterolaterální / komprimované / vyšší denzita]
Trombóza falešného lumenu: Kompletní / Parciální / Průchodné

Rozsah
Proximálně: ___  Distálně: ___
Velké cévy — pravé (P) nebo falešné (F) lumen:
  Tr. brachiocephalicus: P/F  L. karotida: P/F  L. subklavia: P/F
  Truncus coeliacus: P/F  AMS: P/F  Pravá renální: P/F  Levá renální: P/F
  Pravá ilická: P/F  Levá ilická: P/F

Malperúze orgánů [nejvyšší priorita po klasifikaci]
Mozek: Ne / Ano — ___  Mícha: Ne / Ano — ___
Mezenterium: Ne / Ano — ___  Ledviny: Ne / Ano — ___
Dolní končetiny: Ne / Ano — ___

Měření aorty
Sinus aorty: ___ mm  Sinotubulární přechod: ___ mm  Vzestupná aorta: ___ mm
Oblouk: ___ mm  Sestupná na Th4: ___ mm  Na bránici: ___ mm
Maximum: ___ mm v oblasti ___

ZÁVĚR
Stanfordský typ [A/B] [disekce/IMH/PAV].
Příznaky ruptury: [specifikovat]  Pennova třída: ___
Malperúze: Žádná / [specifikovat orgány]
Vstupní trhlina: ___  Rozsah: ___
Naléhavost: EMERGENTNÍ TYP A — kardiochirurgie / URGENTNÍ TYP B — vaskulární chirurgie/IR`}},{id:"pneumonia",category:"chest",en:{label:"Pneumonia / Infection",evidence:"ATS/IDSA CAP Guidelines 2019; Hansell 2008 HRCT nomenclature; Fleischner OP guidelines 2014",criticalFindings:["Lung abscess","Empyema","Necrotising pneumonia","Septic emboli"],searchEvidence:"Hansell 2008 — HRCT nomenclature; ATS/IDSA 2019 CT role in CAP; Tarver 1996 systematic HRCT search",searchMismatch:"Most describe consolidation then read the rest. Correct: characterise DISTRIBUTION first — lobar/segmental vs bilateral GGO vs centrilobular nodules — because this drives the aetiological differential.",searchPattern:[{step:1,priority:"critical",title:"Complications First — Empyema + Abscess",detail:"Pleural fluid lenticular/loculated = empyema. Lung abscess (cavity with air-fluid level). Necrotising pneumonia (non-enhancing areas). Changes management to drainage/surgery.",time:"20s"},{step:2,priority:"critical",title:"Distribution Pattern — Drives Differential",detail:"Lobar/segmental = bacterial. Bilateral GGO = atypical/viral/PCP. Centrilobular + tree-in-bud = endobronchial (TB, NTM). Peribronchovascular/subpleural = OP.",time:"30s"},{step:3,priority:"high",title:"Systematic Lobar Survey",detail:"Upper, middle/lingula, lower. GGO, consolidation, nodules, tree-in-bud, cavitation. Don't miss posterior lower lobes.",time:"45s"},{step:4,priority:"high",title:"Pleural Assessment",detail:"Effusion character: simple vs complex vs split pleura sign (empyema). Pneumothorax.",time:"20s"},{step:5,priority:"high",title:"Airways",detail:"Endobronchial lesion (post-obstructive). Bronchiectasis. Mucus plugging.",time:"20s"},{step:6,priority:"normal",title:"Mediastinum + Nodes",detail:"Lymphadenopathy (lymphoma, sarcoid, TB). Hilar nodes.",time:"15s"}],template:`CT CHEST — PNEUMONIA / PULMONARY INFECTION
Indication: [fever / cough / consolidation on CXR / immunocompromised]
Technique: Portal venous / HRCT

DISTRIBUTION [primary differential driver]
Lobar/segmental: RUL / RML / RLL / LUL / Lingula / LLL
Bilateral GGO: No / Yes [atypical/viral/PCP]
Centrilobular + tree-in-bud: No / Yes [TB/NTM/aspiration]
Peribronchovascular + subpleural: No / Yes [OP]
Random nodules: No / Yes [haematogenous/septic emboli]

CONSOLIDATION
Location: ___  Air bronchograms: No / Yes
Enhancement: Homogeneous / Heterogeneous [heterogeneous = necrotising]

COMPLICATIONS
Lung abscess: No / Yes — ___ mm, air-fluid level ___
Necrotising: No / Yes — location ___
Empyema:
  Effusion: No / Yes — R / L
  Character: Simple / Loculated / Split pleura sign [= empyema]
  Volume: ___  Drainage: Consider / Yes
Pneumothorax: No / Yes — R / L

GGO PATTERN [if present]
Crazy paving: No / Yes [PCP / oedema]
Halo sign: No / Yes [angioinvasive aspergillus]
Reversed halo: No / Yes [OP]

AIRWAYS
Endobronchial lesion: No / Yes — ___
Bronchiectasis: No / Yes  Tree-in-bud: No / Yes

MEDIASTINUM
Lymphadenopathy: No / Yes — ___ mm  Hilar: Normal / R / L

IMPRESSION
[Type] pneumonia / infection.
Distribution: [pattern]  Complications: [specify]
Aetiology: [Typical bacterial / Atypical / Viral / PCP / TB / OP / Other]
Follow-up: CT at 6-8 weeks if consolidation in smoker >40y or persistent`},cs:{label:"Pneumonie / Plicní infekce",evidence:"Guidelines ATS/IDSA pro komunitní pneumonii 2019; nomenklatura HRCT Hansell 2008; Fleischnerova doporučení pro OP 2014",criticalFindings:["Plicní absces","Empyém","Nekrotizující pneumonie","Septická embolie"],searchEvidence:"Hansell 2008 — nomenklatura HRCT; role CT v komunitní pneumonii ATS/IDSA 2019; systematika HRCT Tarver 1996",searchMismatch:"Většina radiologů popíše konsolidaci a pak přejde na zbytek. Správně: nejdříve charakterizujte DISTRIBUCI — lobární/segmentární vs. oboustranné GGO vs. centrilolbulární uzliny — protože to řídí etiologickou diferenciální diagnózu.",searchPattern:[{step:1,priority:"critical",title:"Komplikace jako první — empyém + absces",detail:"Pleurální tekutina čočkovitého tvaru/lokalizovaná = empyém. Plicní absces (dutina s hladinkou). Nekrotizující pneumonie (nesycené oblasti). Mění management na drenáž/operaci.",time:"20s"},{step:2,priority:"critical",title:"Distribuční vzorec — řídí diferenciální diagnózu",detail:"Lobární/segmentární = bakteriální. Oboustranné GGO = atypická/virová/PCP. Centrilobulárně + tree-in-bud = endobronchiální šíření (TBC, NTM). Peribronkovaskulárně/subpleurálně = OP.",time:"30s"},{step:3,priority:"high",title:"Systematický přehled laloků",detail:"Horní, střední/lingula, dolní. GGO, konsolidace, uzliny, tree-in-bud, kavitace. Nezapomínat na zadní dolní laloky.",time:"45s"},{step:4,priority:"high",title:"Hodnocení pleury",detail:"Charakter výpotku: prostý vs. komplexní vs. příznak split pleura (empyém). Pneumotorax.",time:"20s"},{step:5,priority:"high",title:"Dýchací cesty",detail:"Endobronchiální léze (postobstrukční pneumonie). Bronchiektázie. Hlenové zátky.",time:"20s"},{step:6,priority:"normal",title:"Mediastinum + uzliny",detail:"Lymfadenopatie (lymfom, sarkoidóza, TBC). Hilové uzliny.",time:"15s"}],template:`CT HRUDNÍKU — PNEUMONIE / PLICNÍ INFEKCE
Indikace: [horečka / kašel / konsolidace na RTG / imunodeficience]
Technika: Portální fáze / HRCT

NÁLEZ

Distribuční vzorec [primárně určuje diferenciální diagnózu]
Lobární/segmentární: Pravý horní / Pravý střední / Pravý dolní / Levý horní / Lingula / Levý dolní
Oboustranné GGO: Ne / Ano [atypická/virová/PCP]
Centrilobulárně + tree-in-bud: Ne / Ano [TBC/NTM/aspirace]
Peribronkovaskulárně + subpleurálně: Ne / Ano [organizující se pneumonie]
Náhodné uzliny: Ne / Ano [hematogenní/septická embolie]

Konsolidace
Lokalizace: ___  Vzdušné bronchogramy: Ne / Ano
Sycení: Homogenní / Heterogenní [heterogenní = nekrotizující]

Komplikace
Plicní absces: Ne / Ano — ___ mm, hladinka ___
Nekrotizující pneumonie: Ne / Ano — lokalizace ___
Empyém:
  Pleurální výpotek: Ne / Ano — vpravo / vlevo
  Charakter: Prostý / Lokalizovaný / Příznak split pleura [= empyém]
  Množství: ___  Drenáž: Zvážit / Indikována
Pneumotorax: Ne / Ano — vpravo / vlevo

Vzorec GGO [pokud přítomno]
Crazy paving (GGO + ztluštění interlobulárních sept): Ne / Ano [PCP / edém]
Příznak halo: Ne / Ano [angioinvazivní aspergilóza]
Obrácený příznak halo (atoll sign): Ne / Ano [organizující se pneumonie]

Dýchací cesty
Endobronchiální léze: Ne / Ano — ___
Bronchiektázie: Ne / Ano  Tree-in-bud: Ne / Ano

Mediastinum
Lymfadenopatie: Ne / Ano — ___ mm  Hilové uzliny: Normální / Zvětšené vpravo/vlevo

ZÁVĚR
[Typ] pneumonie / plicní infekce.
Distribuce: [vzorec]  Komplikace: [specifikovat]
Etiologie: [Typická bakteriální / Atypická / Virová / PCP / TBC / OP / Jiná]
Kontrola: CT hrudníku za 6–8 týdnů po léčbě při konsolidaci u kuřáka >40 let nebo přetrvávání nálezu`}},{id:"nodule",category:"chest",en:{label:"Lung Nodule / Mass",evidence:"Fleischner 2017 (MacMahon et al. Radiology 2017); Lung-RADS 2022 (ACR); BTS 2015; NLST/NELSON screening data",criticalFindings:["Lung-RADS 4X","Mediastinal invasion","Malignant effusion","N3 disease"],searchEvidence:"MacMahon 2017 Fleischner validation; Lung-RADS 2022 validation; NLST/NELSON CT screening trials",searchMismatch:"Nodule found → measure → recommend. Missing: (1) classify solid/subsolid FIRST — different tables. (2) For mass: full staging before biopsy recommendation.",searchPattern:[{step:1,priority:"critical",title:"Classify: Solid / Part-Solid / Pure GGN",detail:"Determines Fleischner table. Solid = entirely soft tissue. Part-solid = both GGO and solid — measure BOTH. Pure GGN = entirely ground-glass.",time:"15s"},{step:2,priority:"critical",title:"Measure Correctly",detail:"Fleischner 2017: average of long + short axis. Part-solid: total size AND solid component separately. Use lung windows for GGO.",time:"20s"},{step:3,priority:"critical",title:"Mass (>3cm): Staging Survey First",detail:"Mediastinal nodes (SA >10mm). Pleural effusion. Adrenal. Bone. Liver. Staging may obviate biopsy site choice.",time:"45s"},{step:4,priority:"high",title:"Morphology — Malignancy Risk",detail:"Spiculated (high), lobulated, smooth (lower). Pleural tethering. Upper lobe. Cavitation. Calcification: popcorn/central/diffuse = benign; eccentric/amorphous = malignant.",time:"20s"},{step:5,priority:"high",title:"Apply Fleischner / Lung-RADS",detail:"Fleischner for incidental. Lung-RADS for screening. Do not mix. State recommendation explicitly.",time:"15s"},{step:6,priority:"normal",title:"Background Lung + Mediastinum",detail:"Emphysema (increases lung cancer risk). Bronchiectasis. Mediastinal shift.",time:"15s"}],template:`CT CHEST — LUNG NODULE / MASS
Indication: [incidental / screening / known malignancy]
Technique: HRCT / Low-dose CT

CLASSIFICATION [determines Fleischner table]
Type: Solid / Part-solid / Pure GGN
Number: Single / Multiple — ___
Location: RUL / RML / RLL / LUL / Lingula / LLL
Segment: ___  Central / Peripheral / Subpleural

MEASUREMENTS [Fleischner 2017]
Total: ___ × ___ mm → Average: ___ mm
[Part-solid] Solid component: ___ × ___ mm → Average: ___ mm

MORPHOLOGY
Margins: Smooth / Lobulated / Spiculated / Irregular
Pleural tethering: No / Yes
Calcification: No / Yes — Benign (popcorn/central/diffuse) / Suspicious (eccentric/amorphous)
Cavitation: No / Yes — wall ___ mm (<4 benign, >15 malignant)
Upper lobe: No / Yes [higher risk]

FLEISCHNER 2017 [incidental — MacMahon 2017]
Risk: Low / High
Solid:
  <6mm: No f/u (low) / Optional 12m (high)
  6-8mm: 6-12m then 18-24m (low) / 3-6m then 18-24m (high)
  >8mm: 3m CT or PET or biopsy
Subsolid:
  Pure GGN <6mm: No f/u  ≥6mm: 6-12m, then 2y, 4y
  Part-solid <6mm: No f/u  ≥6mm: 3-6m, if persistent annual ×5y
→ Recommendation: ___

LUNG-RADS 2022 [screening only]
Category: 1 / 2 / 3 / 4A / 4B / 4X / 0
→ Lung-RADS: ___  Action: ___

STAGING [masses >3cm]
Mediastinal nodes: No / Yes — station ___, SA ___ mm
Hilar: Normal / R / L  Pleural: No / Yes  Adrenal: Normal / ___
Liver: Normal  Bone: Normal / ___
Invasion: Chest wall: No / Yes  Mediastinum: No / Yes
T descriptor: T1a/b/c / T2a/b / T3 / T4

BACKGROUND LUNG
Emphysema: None / Mild / Moderate / Severe
Bronchiectasis: No / Yes  Other nodules: No / Yes ___

IMPRESSION
[Solid/part-solid/GGN] [nodule/mass], [location], [size].
Morphology: [risk]
[Fleischner OR Lung-RADS recommendation]`},cs:{label:"Plicní uzlina / masa",evidence:"Fleischnerova doporučení 2017 (MacMahon et al. Radiology 2017); Lung-RADS 2022 (ACR); BTS 2015; data screeningových studií NLST/NELSON",criticalFindings:["Lung-RADS 4X","Invaze mediastina","Maligní výpotek","Postižení N3"],searchEvidence:"Validace Fleischnera 2017 MacMahon; validace Lung-RADS 2022; screeningové studie NLST/NELSON",searchMismatch:"Uzlina nalezena → změření → doporučení. Chybí: (1) klasifikace solidní/subsolidní NEJDŘÍVE — různé tabulky. (2) U mas: staging před doporučením biopsie.",searchPattern:[{step:1,priority:"critical",title:"Klasifikace: Solidní / Částečně solidní / Čistě GGO",detail:"Určuje Fleischnerovu tabulku. Solidní = zcela měkkotkáňová denzita. Částečně solidní = GGO i solidní složka — měřte OBOJÍ. Čistě GGO = zcela mléčné sklo.",time:"15s"},{step:2,priority:"critical",title:"Správné měření",detail:"Fleischner 2017: průměr z dlouhé + krátké osy. Částečně solidní: celková velikost A velikost solidní složky zvlášť. Pro GGO používejte plicní okna.",time:"20s"},{step:3,priority:"critical",title:"Masa (>3 cm): nejdříve staging",detail:"Mediastinální uzliny (krátká osa >10 mm). Pleurální výpotek. Nadledviny. Kosti. Játra. Staging může ovlivnit výběr místa biopsie.",time:"45s"},{step:4,priority:"high",title:"Morfologie — riziko malignity",detail:"Spikulace (vysoké riziko), lobulace, hladký okraj (nižší riziko). Pleurální tah. Horní lalok. Kavitace. Kalcifikace: popcorn/centrální/difuzní = benigní; excentrická/amorfní = maligní.",time:"20s"},{step:5,priority:"high",title:"Fleischner / Lung-RADS doporučení",detail:"Fleischner pro incidentální nálezy. Lung-RADS pro screeningovou populaci. Nemixujte. Doporučení uveďte explicitně.",time:"15s"},{step:6,priority:"normal",title:"Plicní parenchym + mediastinum",detail:"Emfyzém (zvyšuje riziko karcinomu plic). Bronchiektázie. Deviace mediastina.",time:"15s"}],template:`CT HRUDNÍKU — PLICNÍ UZLINA / MASA
Indikace: [incidentální nález / screening / onkologická anamnéza]
Technika: HRCT / Low-dose CT

NÁLEZ

Klasifikace [určuje Fleischnerovu tabulku]
Typ: Solidní / Částečně solidní / Čistě GGO (mléčné sklo)
Počet: Solitární / Mnohočetné — ___
Lokalizace: Pravý horní / Pravý střední / Pravý dolní / Levý horní / Lingula / Levý dolní
Segment: ___  Centrální / Periferní / Subpleurální

Měření [metoda Fleischner 2017]
Celková velikost: ___ × ___ mm → Průměrný průměr: ___ mm
[Částečně solidní] Solidní složka: ___ × ___ mm → Průměr: ___ mm

Morfologie
Ohraničení: Hladké / Lobulované / Spikulované / Nepravidelné
Pleurální tah: Ne / Ano
Kalcifikace: Ne / Ano — Benigní (popcorn/centrální/difuzní) / Suspektní (excentrická/amorfní)
Kavitace: Ne / Ano — tloušťka stěny ___ mm (<4 mm benigní, >15 mm maligní)
Horní lalok: Ne / Ano [vyšší riziko]

Fleischnerova doporučení 2017 [incidentální uzliny — MacMahon 2017]
Riziková skupina: Nízké riziko / Vysoké riziko
Solidní uzliny:
  <6 mm: Bez sledování (nízké) / Volitelně CT za 12 měs. (vysoké)
  6–8 mm: CT za 6–12 měs., poté za 18–24 měs. (nízké) / CT za 3–6 měs., poté za 18–24 měs. (vysoké)
  >8 mm: CT za 3 měs. nebo PET-CT nebo biopsie
Subsolidní uzliny:
  Čistě GGO <6 mm: Bez sledování  ≥6 mm: CT za 6–12 měs., poté za 2 a 4 roky
  Částečně solidní <6 mm: Bez sledování  ≥6 mm: CT za 3–6 měs., při perzistenci ročně ×5 let
→ Doporučení: ___

Lung-RADS 2022 [pouze pro screeningovou populaci]
Kategorie: 1 / 2 / 3 / 4A / 4B / 4X / 0 (neúplné)
→ Lung-RADS: ___  Postup: ___

Staging [u mas >3 cm]
Mediastinální uzliny: Ne / Ano — stanice ___, krátká osa ___ mm
Hilové uzliny: Normální / Zvětšené vpravo/vlevo
Pleurální výpotek: Ne / Ano  Nadledviny: Normální / ___
Játra: Normální  Kosti: Normální / ___
Invaze: Hrudní stěna: Ne / Ano  Mediastinum: Ne / Ano
T deskriptor: T1a/b/c / T2a/b / T3 / T4

Plicní parenchym
Emfyzém: Bez / Mírný / Střední / Těžký
Bronchiektázie: Ne / Ano  Ostatní uzliny: Ne / Ano ___

ZÁVĚR
[Solidní/částečně solidní/GGO] [uzlina/masa], [lokalizace], [velikost].
Morfologie: [rizikové znaky]
[Doporučení dle Fleischnera nebo Lung-RADS]`}},{id:"ild",category:"chest",en:{label:"ILD / Diffuse Lung",evidence:"Fleischner ILD guidelines 2018 (Lynch et al.); ATS/ERS UIP criteria 2022; Hansell 2008 HRCT nomenclature",criticalFindings:["UIP pattern (IPF)","Acute exacerbation","Honeycombing","Traction bronchiectasis"],searchEvidence:"Lynch 2018 Fleischner; Raghu 2022 ATS/ERS UIP update; Travis 2013 multidisciplinary classification; Hansell 2008",searchMismatch:"Most describe findings then pattern-match. Correct HRCT search: characterise each finding type separately (GGO, reticulation, honeycombing, traction bronchiectasis), then distribution, THEN pattern assignment.",searchPattern:[{step:1,priority:"critical",title:"Honeycombing vs Traction Bronchiectasis",detail:"Most critical ILD distinction. True honeycombing (clustered cysts, shared walls, subpleural, basal) vs traction bronchiectasis. Honeycombing = probable UIP. Drives IPF diagnosis.",time:"30s"},{step:2,priority:"critical",title:"Distribution — Upper/Lower, Central/Peripheral",detail:"Basal + subpleural = UIP/NSIP. Upper lobe = HP, sarcoid, smoking. Peribronchovascular = sarcoid, HP.",time:"20s"},{step:3,priority:"critical",title:"Acute Exacerbation Signs",detail:"In known ILD: new bilateral GGO on chronic fibrosis = AE-IPF until proven otherwise.",time:"15s"},{step:4,priority:"high",title:"Systematic Characterisation",detail:"GGO / Reticulation / Honeycombing / Traction bronchiectasis / Consolidation / Centrilobular nodules / Cysts / Mosaic.",time:"45s"},{step:5,priority:"high",title:"UIP Pattern (ATS/ERS 2022)",detail:"Typical: honeycombing, basal/subpleural ± traction bronchiectasis. Features against: upper/mid predominance, peribronchovascular, extensive GGO, profuse micronodules.",time:"20s"},{step:6,priority:"normal",title:"Complications",detail:"PA diameter >29mm (PH). Lung cancer (IPF risk). Pleural effusion (against UIP).",time:"20s"}],template:`HRCT CHEST — ILD / DIFFUSE LUNG DISEASE
Indication: [breathlessness / ILD follow-up / suspected fibrosis]
Technique: HRCT (1mm, inspiratory ± expiratory)

SYSTEMATIC FINDINGS [characterise each before pattern assignment]
GGO: Absent / Present — distribution ___ — extent ___ %
Reticulation: Absent / Present — distribution ___
Honeycombing: Absent / Present — subpleural/basal/upper — layers: single/multiple
Traction bronchiectasis: Absent / Present / Severe — ___
Consolidation: Absent / Present — ___
Centrilobular nodules: Absent / Present — ___
Cysts: Absent / Present — size ___, walls [thin=LAM/LCH]
Mosaic / Air trapping: Absent / Present

DISTRIBUTION
Predominance: Upper / Mid / Lower / Diffuse
Axial: Central / Peripheral (subpleural) / Diffuse
Gradient: Basal / Diffuse / Apical

ATS/ERS 2022 UIP ASSESSMENT
Typical UIP: Honeycombing, basal+subpleural, ± traction: Yes / No
Probable UIP: Reticular + traction, basal+subpleural, no honeycombing: Yes / No
Features AGAINST UIP:
  Upper/mid predominance: No/Yes  Peribronchovascular: No/Yes
  Extensive GGO: No/Yes  Profuse micronodules: No/Yes
  Cysts away from honeycombing: No/Yes  Diffuse mosaic: No/Yes
→ UIP Pattern: Typical / Probable / Indeterminate / Alternative

PATTERN DIFFERENTIAL
Typical UIP → IPF (clinical-radiological-pathological correlation required)
Probable UIP → IPF possible
NSIP (GGO+reticulation, lower, subpleural sparing) → CTD-ILD
HP (upper, centrilobular, mosaic) → Hypersensitivity pneumonitis
Sarcoid (perilymphatic, peribronchovascular, upper) → Sarcoidosis
→ Working pattern: ___

COMPLICATIONS
PA: ___ mm  Ao: ___ mm  PA:Ao: ___ (>1 = PH)
RV enlargement: No / Yes  Lung cancer: No / Suspected ___
Pleural effusion: No / Yes [against UIP]

IMPRESSION
HRCT pattern: [Typical UIP / Probable UIP / Indeterminate / Alternative ___]
Working diagnosis: ___
AE signs: No / Yes
Recommendation: Multidisciplinary ILD team discussion`},cs:{label:"ILD / Difuzní postižení plic",evidence:"Fleischnerova doporučení pro HRCT ILD 2018 (Lynch et al.); kritéria UIP ATS/ERS 2022; nomenklatura HRCT Hansell 2008",criticalFindings:["Vzorec UIP (IPF)","Akutní exacerbace","Honeycombing","Trakční bronchiektázie"],searchEvidence:"Fleischner Lynch 2018; aktualizace UIP ATS/ERS Raghu 2022; multidisciplinární klasifikace Travis 2013; Hansell 2008",searchMismatch:"Většina radiologů popisuje nálezy a pak přiřazuje vzorec. Správná HRCT systematika: nejdříve charakterizujte každý typ nálezu zvlášť (GGO, retikulace, honeycombing, trakční bronchiektázie), pak distribuci, POTÉ přiřazení vzorce.",searchPattern:[{step:1,priority:"critical",title:"Honeycombing vs. trakční bronchiektázie",detail:"Nejkritičtější rozlišení v ILD. Pravý honeycombing (seskupené cysty se sdílenými stěnami, subpleurálně, bazálně) vs. trakční bronchiektázie. Honeycombing = pravděpodobný UIP. Řídí diagnózu IPF.",time:"30s"},{step:2,priority:"critical",title:"Distribuce — horní/dolní, centrální/periferní",detail:"Bazálně + subpleurálně = UIP/NSIP. Horní laloky = HP, sarkoidóza, kuřácká plicní nemoc. Peribronkovaskulárně = sarkoidóza, HP.",time:"20s"},{step:3,priority:"critical",title:"Příznaky akutní exacerbace",detail:"Při známém ILD: nové oboustranné GGO na podkladě chronické fibrózy = akutní exacerbace IPF dokud není prokázán opak.",time:"15s"},{step:4,priority:"high",title:"Systematická charakterizace",detail:"GGO / Retikulace / Honeycombing / Trakční bronchiektázie / Konsolidace / Centrilobulární uzliny / Cysty / Mozaikovitá denzita.",time:"45s"},{step:5,priority:"high",title:"Hodnocení vzorce UIP (ATS/ERS 2022)",detail:"Typický: honeycombing, bazálně+subpleurálně ± trakční bronchiektázie. Znaky proti UIP: predominance horních/středních laloků, peribronkovaskulárně, rozsáhlé GGO, profuzní mikronoduly.",time:"20s"},{step:6,priority:"normal",title:"Komplikace",detail:"Průměr plicnice >29 mm (plicní hypertenze). Karcinom plic (zvýšené riziko u IPF). Pleurální výpotek (svědčí proti UIP).",time:"20s"}],template:`HRCT HRUDNÍKU — ILD / DIFUZNÍ POSTIŽENÍ PLIC
Indikace: [dušnost / sledování ILD / podezření na fibrózu]
Technika: HRCT (1 mm řezy, nádech ± výdech)

NÁLEZ

Systematická charakterizace [každý typ nálezu zvlášť — před přiřazením vzorce]
GGO (mléčné sklo): Nepřítomno / Přítomno — distribuce ___ — rozsah ___ %
Retikulace: Nepřítomna / Přítomna — distribuce ___
Honeycombing: Nepřítomen / Přítomen — subpleurálně/bazálně/horní — vrstvy: jednoduchá/mnohočetné
Trakční bronchiektázie: Nepřítomna / Přítomna / Výrazná — ___
Konsolidace: Nepřítomna / Přítomna — ___
Centrilobulární uzliny: Nepřítomny / Přítomny — ___
Cysty: Nepřítomny / Přítomny — velikost ___, stěny [tenká = LAM/LCH]
Mozaikovitá denzita / vzduchová past: Nepřítomna / Přítomna

Distribuce
Predominance: Horní laloky / Střední / Dolní / Difuzní (bez predominance)
Axiálně: Centrální (peribronkovaskulárně) / Periferní (subpleurálně) / Difuzní
Gradient: Bazální / Difuzní / Apikální

Hodnocení vzorce UIP (ATS/ERS 2022)
Typický UIP: Honeycombing, bazálně+subpleurálně, ± trakční bronchiektázie: Ano / Ne
Pravděpodobný UIP: Retikulace + trakční bronchiektázie, bazálně+subpleurálně, bez honeycombing: Ano / Ne
Znaky PROTI UIP:
  Predominance horních/středních laloků: Ne/Ano  Peribronkovaskulárně: Ne/Ano
  Rozsáhlé GGO: Ne/Ano  Profuzní mikronoduly: Ne/Ano
  Cysty mimo honeycombing: Ne/Ano  Difuzní mozaikovitá denzita: Ne/Ano
→ Vzorec UIP: Typický / Pravděpodobný / Neurčitý / Alternativní diagnóza

Diferenciální diagnóza vzorce
Typický UIP → IPF (nutná klinicko-radiologicko-patologická korelace)
Pravděpodobný UIP → IPF možný
NSIP (GGO+retikulace, dolní laloky, ušetření subpleurálně) → CTD-ILD
HP (horní laloky, centrilobulárně, mozaikovitá denzita) → Hypersenzitivní pneumonitida
Sarkoidóza (perilymfaticky, peribronkovaskulárně, horní laloky) → Sarkoidóza
→ Pracovní vzorec: ___

Komplikace
Plicnice: ___ mm  Aorta: ___ mm  Poměr: ___ (>1 = plicní hypertenze)
Dilatace PK: Ne / Ano  Karcinom plic: Ne / Suspektní ___
Pleurální výpotek: Ne / Ano [svědčí proti vzorci UIP]

ZÁVĚR
Vzorec HRCT: [Typický UIP / Pravděpodobný UIP / Neurčitý / Alternativní — ___]
Pracovní diagnóza: ___
Příznaky akutní exacerbace: Ne / Ano
Doporučení: Multidisciplinární tým pro ILD`}},{id:"chesttrauma",category:"chest",en:{label:"Chest Trauma",evidence:"WSES chest trauma 2017; EAST blunt cardiac guidelines; AAST thoracic aorta classification; Mayberry 2004 rib management",criticalFindings:["Aortic injury","Tension pneumothorax","Tracheobronchial injury","Haemopericardium"],searchEvidence:"Dreizin 2020 systematic CT trauma search; WSES 2017 priority assessment; Gavelli 2004 blunt aortic injury CTA",searchMismatch:"Ribs found and counted first. Critical error: aortic injury and pneumothorax are life-threatening and must be first. Also: mediastinal haematoma on non-contrast must precede CTA review.",searchPattern:[{step:1,priority:"critical",title:"Pneumothorax — Lung Windows",detail:"Anterior PTX on supine — look at anterior pleural space. Tension signs: mediastinal shift, depressed diaphragm.",time:"15s"},{step:2,priority:"critical",title:"Aorta — Non-Contrast Then CTA",detail:"Non-contrast: mediastinal haematoma, periaortic fat stranding. CTA: wall irregularity, pseudoaneurysm, intimal flap. Isthmus most common site.",time:"30s"},{step:3,priority:"critical",title:"Tracheobronchial Injury",detail:"Pneumomediastinum. Fallen lung sign (bronchial transection). Persistent PTX despite drainage.",time:"15s"},{step:4,priority:"critical",title:"Haemothorax",detail:"Density >35HU = haemothorax. Volume estimate. Clotted = heterogeneous high density.",time:"15s"},{step:5,priority:"high",title:"Pulmonary Contusion / Laceration",detail:"Contusion: GGO not conforming to lobe. Laceration: round lucency, AAST types 1-4. Worsen 24-48h.",time:"20s"},{step:6,priority:"high",title:"Cardiac + Diaphragm",detail:"Haemopericardium. Pneumopericardium. Trace entire diaphragm on coronals.",time:"15s"},{step:7,priority:"normal",title:"Ribs + Bones",detail:"Bone windows: count fractures, flail segment (3+ consecutive ribs, 2+ sites). Sternum. Thoracic spine.",time:"30s"}],template:`CT CHEST — THORACIC TRAUMA
Mechanism: [blunt/penetrating]  Haemodynamics: [stable/unstable]
Technique: Non-contrast + CTA

⚠ CRITICAL [assess first]
Aortic injury: No / Yes  Tension PTX: No / Yes
Tracheobronchial: No / Yes  Haemopericardium: No / Yes

PNEUMOTHORAX
R: No / Yes — depth ___ mm  L: No / Yes — depth ___ mm
Tension: No / Yes — mediastinal shift, depressed diaphragm

HAEMOTHORAX
R: No / Yes — ___ HU, volume ___  L: No / Yes — ___

AORTIC INJURY
Non-contrast: Periaortic haematoma: No/Yes  Mediastinal: No/Yes
CTA: Normal / Intimal irregularity / Pseudoaneurysm / Flap
Location: Isthmus / Ascending / Arch / Descending
AAST Grade: I / II / III / IV

TRACHEOBRONCHIAL
Trachea: Normal / Injury  Bronchi: Normal / Injury R/L
Pneumomediastinum: No / Yes  Fallen lung: No / Yes

PULMONARY
Contusion: No / Yes — location ___, extent ___
Laceration: No / Yes — size ___  AAST: ___

CARDIAC
Haemopericardium: No / Yes — ___  Pneumopericardium: No / Yes

DIAPHRAGM [coronals]
R: Intact / Defect ___  L: Intact / Defect ___

RIBS [bone windows]
Right: ___  Left: ___
Consecutive: No / Yes — ribs ___ to ___
Flail segment: No / Yes — location ___

STERNAL / THORACIC SPINE
Sternum: Intact / Fracture ___  Spine: Intact / Fracture ___

IMPRESSION
[Findings in severity order]
Aortic: No / AAST ___  PTX: No / Yes [tension]
Flail: No / Yes
Urgency: [per findings]`},cs:{label:"Trauma hrudníku",evidence:"WSES trauma hrudníku 2017; guidelines EAST pro tupé poranění srdce; AAST klasifikace poranění hrudní aorty; Mayberry 2004 management zlomenin žeber",criticalFindings:["Poranění aorty","Tenzní pneumotorax","Poranění tracheobronchiálního stromu","Hemoperikard"],searchEvidence:"Systematická CT traumatická systematika Dreizin 2020; prioritní hodnocení WSES 2017; CTA při tupém poranění aorty Gavelli 2004",searchMismatch:"Zlomeniny žeber jsou hledány a počítány jako první. Kritická chyba: poranění aorty a pneumotorax jsou život ohrožující a musí být hodnoceny jako první. Mediastinální hematom na nativním CT musí předcházet CTA.",searchPattern:[{step:1,priority:"critical",title:"Pneumotorax — plicní okna",detail:"Anteriorní pneumotorax na CT v leže — pohled na přední pleurální prostor, ne na apex. Tenzní příznaky: deviace mediastina, deprese bránice.",time:"15s"},{step:2,priority:"critical",title:"Aorta — nejdříve nativní, pak CTA",detail:"Nativní CT: mediastinální hematom, infiltrace periortálního tuku. CTA: nepravidelnost stěny, pseudoaneuryzma, intimální chlopeň. Nejčastější místo: isthmus (lig. arteriosum).",time:"30s"},{step:3,priority:"critical",title:"Poranění tracheobronchiálního stromu",detail:"Pneumomediastinum. Příznak padajícího plíce (tracheobronchiální transekce). Přetrvávající pneumotorax navzdory drenáži.",time:"15s"},{step:4,priority:"critical",title:"Hemotorax",detail:"Denzita pleurální tekutiny >35 HU = hemotorax. Odhad množství. Zkrvácení = heterogenní vysoká denzita.",time:"15s"},{step:5,priority:"high",title:"Plicní kontuze / lacerace",detail:"Kontuze: GGO nerespektující lalok. Lacerace: kulatá lucence, typy 1–4 (AAST). Zhoršení za 24–48 h.",time:"20s"},{step:6,priority:"high",title:"Srdce + bránice",detail:"Hemoperikard. Pneumoperikard. Sledujte celou bránici na koronálních rekonstrukcích.",time:"15s"},{step:7,priority:"normal",title:"Žebra + kosti",detail:"Kostní okna: počet zlomenin, vlající hrudník (3+ sousední žebra, 2+ místa zlomeniny). Sternum. Hrudní páteř.",time:"30s"}],template:`CT HRUDNÍKU — TRAUMA HRUDNÍKU
Mechanismus: [tupé/penetrující]  Hemodynamika: [stabilní/nestabilní]
Technika: Nativní + CTA

NÁLEZ

⚠ KRITICKÉ NÁLEZY [hodnotit jako první]
Poranění aorty: Ne / Ano  Tenzní pneumotorax: Ne / Ano
Poranění tracheobronchiálního stromu: Ne / Ano  Hemoperikard: Ne / Ano

Pneumotorax
Vpravo: Ne / Ano — hloubka ___ mm  Vlevo: Ne / Ano — hloubka ___ mm
Tenzní příznaky: Ne / Ano — deviace mediastina, deprese bránice

Hemotorax
Vpravo: Ne / Ano — ___ HU, množství ___  Vlevo: Ne / Ano — ___

Poranění aorty
Nativní CT: Periortální hematom: Ne/Ano  Mediastinální hematom: Ne/Ano
CTA: Normální / Nepravidelnost intimy / Pseudoaneuryzma / Intimální chlopeň
Lokalizace: Isthmus / Vzestupná aorta / Oblouk / Sestupná aorta
Stupeň AAST: I / II / III / IV

Tracheobronchiální strom
Trachea: Normální / Poranění  Bronchy: Normální / Poranění vpravo/vlevo
Pneumomediastinum: Ne / Ano  Příznak padajícího plíce: Ne / Ano

Plicní parenchym
Kontuze: Ne / Ano — lokalizace ___, rozsah ___
Lacerace: Ne / Ano — velikost ___  Stupeň AAST: ___

Srdce a osrdečník
Hemoperikard: Ne / Ano — množství ___  Pneumoperikard: Ne / Ano

Bránice [koronální rekonstrukce]
Vpravo: Intaktní / Defekt ___  Vlevo: Intaktní / Defekt ___

Žebra [kostní okna]
Vpravo: ___  Vlevo: ___
Sousední: Ne / Ano — žebra ___ až ___
Vlající hrudník: Ne / Ano — lokalizace ___

Sternum / Hrudní páteř
Sternum: Intaktní / Zlomenina ___  Páteř: Intaktní / Zlomenina ___

ZÁVĚR
[Poranění seřazena dle závažnosti]
Aorta: Bez poranění / Stupeň AAST ___  Pneumotorax: Ne / Ano [tenzní]
Vlající hrudník: Ne / Ano
Naléhavost: [dle nálezu — specifikovat chirurgické/IR/konzervativní]`}},{id:"mediastinum",category:"chest",en:{label:"Mediastinal Mass",evidence:"ITMIG compartment classification 2014 (Carter); WHO thymoma classification; ACR Appropriateness Criteria; Duwe 2005 mediastinal mass review",criticalFindings:["Airway compression","SVC syndrome","Cardiac invasion","Malignant effusion"],searchEvidence:"Carter 2014 ITMIG validation; Duwe 2005 differential by compartment; compartment-based differential reduces unnecessary biopsy",searchMismatch:"Most describe mass then list differential. Correct: determine COMPARTMENT FIRST (ITMIG 2014) — narrows differential from 100+ to 3-4. Most common mediastinal reporting error.",searchPattern:[{step:1,priority:"critical",title:"Airway + Vascular Compression",detail:"Tracheal deviation/compression? SVC compression (collaterals)? Cardiac compression? These determine urgency — same mass, different treatment speed.",time:"15s"},{step:2,priority:"critical",title:"ITMIG Compartment — Determines Differential",detail:"Prevascular: thymoma/GCT/lymphoma/thyroid. Visceral (middle): pericardial cyst/lymphoma/oesophageal/foregut cyst. Paravertebral: neurogenic tumour.",time:"20s"},{step:3,priority:"high",title:"Characterise Mass",detail:"Solid/cystic/fat/mixed. Calcification. Enhancement. Encapsulation. Fat planes (invasion vs displacement).",time:"30s"},{step:4,priority:"high",title:"Invasion Assessment",detail:"Pericardial. Great vessel encasement (>180° = invasion). Pleural. Chest wall. Spine.",time:"20s"},{step:5,priority:"high",title:"Nodes + Staging",detail:"Mediastinal, hilar, supraclavicular. Pleural/pericardial effusion.",time:"20s"},{step:6,priority:"normal",title:"Full Lung Survey",detail:"Pulmonary metastases. Sternal/rib erosion.",time:"15s"}],template:`CT CHEST — MEDIASTINAL MASS
Indication: [incidental / symptoms / known malignancy]
Technique: CECT chest

COMPARTMENT [ITMIG 2014 — determines differential]
Prevascular (anterior): Yes/No → Thymoma / GCT / Lymphoma / Thyroid
Visceral (middle): Yes/No → Lymphoma / Pericardial cyst / Oesophageal / Foregut cyst
Paravertebral (posterior): Yes/No → Neurogenic / Meningocele

MASS
Location: ___ compartment, region ___
Size: ___ × ___ × ___ mm
Density: Solid / Cystic / Fat / Mixed / Calcified — HU ___
Fat content: No / Yes [teratoma/lipoma]
Enhancement: No / Homogeneous / Heterogeneous / Rim
Encapsulation: Well-defined / Ill-defined

INVASION
Pericardium: Fat plane preserved / Effusion / Invasion
Aorta: No contact / <180° / >180° encasement
SVC: Patent / Compressed / Invaded — collaterals: No / Yes
Chest wall: Preserved / Invaded  Spine: Preserved / Foraminal ___
Pleura: Normal / Thickening / Nodules / Effusion

LYMPH NODES
Prevascular / Paratracheal / Hilar / Lower mediastinal: Normal / Enlarged ___
Supraclavicular: Normal / Enlarged

PLEURAL / PERICARDIAL
Pericardial effusion: No / Yes  Pleural effusion: No / Yes

ITMIG DIFFERENTIAL
Prevascular: Thymoma / Thymic Ca / GCT / Lymphoma / Thyroid / Parathyroid
Visceral: Lymphoma / Pericardial cyst / Bronchogenic cyst / Oesophageal
Paravertebral: Schwannoma / Neurofibroma / Ganglioneuroma / Meningocele
→ Working differential: 1.___ 2.___ 3.___

COMPLICATIONS
Tracheal lumen: ___ mm  SVC syndrome: No / Yes

IMPRESSION
[Compartment] mediastinal mass, [size], [characteristics].
Working differential: ___
Invasion: No / [specify]
Recommendation: [Biopsy / Surgical / PET-CT / MDT]`},cs:{label:"Mediastinální masa",evidence:"ITMIG klasifikace mediastina 2014 (Carter); WHO klasifikace thymomů; ACR Appropriateness Criteria; přehled mediastinálních mas Duwe 2005",criticalFindings:["Komprese dýchacích cest","Syndrom horní duté žíly","Invaze srdce","Maligní výpotek"],searchEvidence:"Validace ITMIG Carter 2014; diferenciální diagnóza dle kompartmentu Duwe 2005; kompartmentová diferenciální diagnóza snižuje počet zbytečných biopsií",searchMismatch:"Většina radiologů popíše masu a pak uvede diferenciální diagnózu. Správně: nejdříve určete KOMPARTMENT (ITMIG 2014) — zužuje diferenciální diagnózu ze 100+ na 3–4. Nejčastější chyba při hlášení mediastinálních mas.",searchPattern:[{step:1,priority:"critical",title:"Komprese dýchacích cest + cév",detail:"Deviace/komprese trachey? Komprese HDŽ (kolaterální oběh)? Komprese srdce? To určuje naléhavost — stejná masa, jiná rychlost léčby.",time:"15s"},{step:2,priority:"critical",title:"ITMIG kompartment — určuje diferenciální diagnózu",detail:"Prevaskulární: tymom/GCT/lymfom/štítná žláza. Viscerální (střední): perikardiální cysta/lymfom/jícnová patologie/bronchocelární cysta. Paravertebrální: neurogenní tumor.",time:"20s"},{step:3,priority:"high",title:"Charakterizace masy",detail:"Solidní/cystická/tukový obsah/smíšená. Kalcifikace. Sycení. Pouzdro. Tukové vrstvy (invaze vs. dislokace).",time:"30s"},{step:4,priority:"high",title:"Hodnocení invaze",detail:"Perikard. Obalení velkých cév (>180° = invaze). Pleura. Hrudní stěna. Páteř.",time:"20s"},{step:5,priority:"high",title:"Uzliny + staging",detail:"Mediastinální, hilové, supraklavikulární uzliny. Pleurální/perikardiální výpotek.",time:"20s"},{step:6,priority:"normal",title:"Celkový přehled plic",detail:"Plicní metastázy. Eroze sterna/žeber.",time:"15s"}],template:`CT HRUDNÍKU — MEDIASTINÁLNÍ MASA
Indikace: [incidentální nález / příznaky / onkologická anamnéza]
Technika: CECT hrudníku

NÁLEZ

Mediastinální kompartment [ITMIG 2014 — určuje diferenciální diagnózu]
Prevaskulární (přední): Ano/Ne → Tymom / GCT / Lymfom / Štítná žláza
Viscerální (střední): Ano/Ne → Lymfom / Perikardiální cysta / Jícnová patologie / Bronchocelární cysta
Paravertebrální (zadní): Ano/Ne → Neurogenní tumor / Laterální meningokéla

Masa
Lokalizace: ___ kompartment, oblast ___
Velikost: ___ × ___ × ___ mm
Denzita: Solidní / Cystická / Tukový obsah / Smíšená / Kalcifikace — HU ___
Tuk: Ne / Ano [teratom/lipom/tymolipom]
Sycení: Bez / Homogenní / Heterogenní / Prstencové
Ohraničení: Dobře ohraničená / Špatně ohraničená

Hodnocení invaze
Perikard: Tukové vrstvy zachovány / Výpotek / Přímá invaze
Aorta: Bez kontaktu / <180° / >180° obalení
HDŽ: Průchodná / Komprimovaná / Infilrovaná — kolaterály: Ne / Ano
Hrudní stěna: Zachovány tukové vrstvy / Invaze  Páteř: Zachovány / Foraminální šíření ___
Pleura: Normální / Ztluštění / Uzlíky / Výpotek

Uzliny
Prevaskulární / Paratracheální / Hilové / Dolní mediastinum: Normální / Zvětšené ___
Supraklavikulární: Normální / Zvětšené

Pleurální / perikardiální nález
Perikardiální výpotek: Ne / Ano  Pleurální výpotek: Ne / Ano

Diferenciální diagnóza dle ITMIG
Prevaskulární: Tymom / Thymic Ca / GCT / Lymfom / Struma / Příštítné tělísko
Viscerální: Lymfom / Perikardiální cysta / Bronchocelární cysta / Jícnová patologie
Paravertebrální: Schwannom / Neurofibrom / Ganglioneuromsarkoid / Meningokéla
→ Pracovní diferenciální diagnóza: 1.___ 2.___ 3.___

Komplikace
Průsvit trachey: ___ mm  Syndrom HDŽ: Ne / Ano

ZÁVĚR
Mediastinální masa [kompartment], [velikost], [charakteristiky].
Pracovní diferenciální diagnóza: ___
Invaze: Ne / [specifikovat]
Doporučení: [CT-biopsie / Chirurgická resekce / PET-CT / Multidisciplinární tým]`}},{id:"thoracicaorta",category:"chest",en:{label:"Thoracic Aorta Follow-up",evidence:"ESC Aortic Guidelines 2023; Hiratzka 2010 ACCF/AHA thoracic aorta guidelines; Davies 2006 growth rate data; Erbel 2014 measurement standardisation",criticalFindings:["Rapid growth >5mm/year","Diameter at threshold","New dissection/IMH","Haemopericardium"],searchEvidence:"ESC 2023 ECG-gated measurement standards; Davies 2006 natural history; Erbel 2014 standardised positions; Booher 2011 IRAD reproducibility",searchMismatch:"Critical errors: (1) measurements at non-standardised landmarks — comparing different levels between studies is meaningless. (2) ECG-gating required for ascending — pulsation artefact causes 2-4mm overestimation. (3) Growth rate must use precise time interval.",searchPattern:[{step:1,priority:"critical",title:"New Complication — Dissection / IMH / Rupture",detail:"New intimal flap, new crescentic density (IMH), haemopericardium, haemothorax, periaortic haematoma. New Type A on surveillance = emergency regardless of prior diameter.",time:"20s"},{step:2,priority:"critical",title:"Six Standardised Measurement Positions",detail:"(1) Sinuses of Valsalva, (2) sinotubular junction, (3) mid-ascending (at PA), (4) arch, (5) proximal descending, (6) mid-descending (T8). Perpendicular to centreline. Same positions every study.",time:"60s"},{step:3,priority:"critical",title:"Growth Rate Calculation",detail:"Growth = (current - prior) / months × 12. >5mm/year = rapid = referral. >3mm/year = accelerated = shorten interval.",time:"20s"},{step:4,priority:"critical",title:"Surgical Threshold",detail:"ESC 2023: ascending ≥5.5cm general; ≥5.0cm with bicuspid AV/Marfan/family history/rapid growth. Descending ≥6.0cm (≥5.5cm CTD).",time:"15s"},{step:5,priority:"high",title:"Aortic Valve",detail:"Bicuspid AV: fusion pattern, lower intervention thresholds, different growth pattern.",time:"15s"},{step:6,priority:"high",title:"Periaortic + Pericardium",detail:"Pericardial effusion (haemopericardium). Periaortic stranding. Pleural effusion.",time:"15s"},{step:7,priority:"normal",title:"Branch Vessels + Incidentals",detail:"Coronary ostia (root aneurysm). Great vessel origins. Lung incidentals.",time:"15s"}],template:`CTA CHEST — THORACIC AORTA SURVEILLANCE
Indication: [known TAA / post-dissection / connective tissue disorder]
Technique: ECG-gated CTA (mandatory for ascending)
Aetiology: Degenerative / Bicuspid AV / Marfan / Loeys-Dietz / Post-dissection / ___

NEW COMPLICATIONS [before measurements]
New intimal flap: No / Yes [EMERGENCY if Type A]
New IMH: No / Yes — location ___
Haemopericardium: No / Yes  Haemothorax: No / Yes

STANDARDISED MEASUREMENTS [perpendicular to centreline, outer-to-outer — ESC 2023]
                            Current | Prior | Date | Growth/yr
Sinuses of Valsalva:        ___ mm  | ___   | ___  | ___ mm/yr
Sinotubular junction:       ___ mm  | ___   | ___  | ___ mm/yr
Mid-ascending (at PA):      ___ mm  | ___   | ___  | ___ mm/yr
Proximal arch:              ___ mm  | ___   | ___  | ___ mm/yr
Proximal descending:        ___ mm  | ___   | ___  | ___ mm/yr
Mid-descending (T8):        ___ mm  | ___   | ___  | ___ mm/yr
Maximum overall: ___ mm at ___

GROWTH
Fastest segment: ___ — ___ mm/year
Stable (<3mm/yr): Yes / No
Accelerated (3-5mm/yr): No / Yes — [segment]
Rapid (>5mm/yr): No / Yes — SURGICAL REFERRAL

ESC 2023 THRESHOLDS
Ascending — General: ≥55mm → Current: ___ → Reached: No/Yes
Ascending — Risk factors (bicuspid/Marfan/family history/rapid growth): ≥50mm → Reached: No/Yes
Descending: ≥60mm (≥55mm CTD) → Reached: No/Yes
→ SUMMARY: Below / Approaching (<5mm) / Reached — refer

POST-DISSECTION [if applicable]
False lumen: Thrombosed / Partial / Patent
Sac change: Stable / Enlarging / Regressing

AORTIC VALVE
Trileaflet / Bicuspid (fusion: R-L / R-N / L-N) / Prosthetic

PERICARDIUM / PLEURA
Pericardial effusion: No / Yes  Pleural: No / Yes

IMPRESSION
TAA, max ___ mm at [location].
Growth: [Stable / Accelerated / Rapid] — [fastest, rate]
ESC threshold: Below / Approaching / Reached
New complication: No / Yes — [specify]
Next CT: [stable <45mm: 2-3y / 45-50mm: 1-2y / >50mm: annual / rapid: 6-monthly]`},cs:{label:"Sledování hrudní aorty",evidence:"Guidelines ESC pro aortu 2023; guidelines ACCF/AHA pro hrudní aortu Hiratzka 2010; data o rychlosti růstu Davies 2006; standardizace měření Erbel 2014",criticalFindings:["Rychlý růst >5 mm/rok","Dosažení operačního prahu","Nová disekce/IMH","Hemoperikard"],searchEvidence:"Standardy EKG-gated měření ESC 2023; přirozený průběh Davies 2006; standardizované polohy měření Erbel 2014; reprodukovatelnost IRAD Booher 2011",searchMismatch:"Kritické chyby: (1) měření na nestandardizovaných anatomických landmarcích — porovnávání různých úrovní mezi studiemi je bezcenné; (2) EKG-gating je povinné pro vzestupnou aortu — artefakt pulsace způsobuje nadhodnocení o 2–4 mm; (3) rychlost růstu musí respektovat přesný časový interval.",searchPattern:[{step:1,priority:"critical",title:"Nové komplikace — disekce / IMH / ruptura",detail:"Nová intimální chlopeň, nová srpovitá denzita (IMH), hemoperikard, hemotorax, periortální hematom. Nový typ A při sledovací studii = emergentní situace bez ohledu na předchozí průměr.",time:"20s"},{step:2,priority:"critical",title:"Šest standardizovaných měřicích poloh",detail:"(1) Sinus aorty, (2) sinotubulární přechod, (3) vzestupná aorta (úroveň plicnice), (4) oblouk, (5) proximální sestupná aorta, (6) střední sestupná aorta (Th8). Kolmo na osu. Stejné polohy při každém vyšetření.",time:"60s"},{step:3,priority:"critical",title:"Výpočet rychlosti růstu",detail:"Růst = (aktuální − předchozí) / počet měsíců × 12. >5 mm/rok = rychlý růst = indikace k operaci. >3 mm/rok = akcelerovaný = zkrátit interval sledování.",time:"20s"},{step:4,priority:"critical",title:"Operační práh",detail:"ESC 2023: vzestupná aorta ≥5,5 cm obecně; ≥5,0 cm u bikuspidální AK/Marfanův syndrom/rodinná anamnéza/rychlý růst. Sestupná ≥6,0 cm (≥5,5 cm při CTD).",time:"15s"},{step:5,priority:"high",title:"Aortální chlopeň",detail:"Bikuspidální AK: typ fúze, nižší operační prahy, odlišný vzorec růstu.",time:"15s"},{step:6,priority:"high",title:"Periortální tkáň + perikard",detail:"Perikardiální výpotek (hemoperikard). Infiltrace periortálního tuku. Pleurální výpotek.",time:"15s"},{step:7,priority:"normal",title:"Větevní cévy + doplňkové nálezy",detail:"Koronární odstupy (při aneuryzmatu kořene). Odstupy velkých cév. Incidentální plicní nálezy.",time:"15s"}],template:`CTA HRUDNÍKU — SLEDOVÁNÍ HRUDNÍ AORTY
Indikace: [známé TAA / po disekci / pojivová tkáňová choroba]
Technika: EKG-gated CTA (povinné pro vzestupnou aortu)
Etiologie: Degenerativní / Bikuspidální AK / Marfanův syndrom / Loeys-Dietz / Po disekci / ___

NÁLEZ

Nové komplikace [hodnotit před měřením]
Nová intimální chlopeň: Ne / Ano [EMERGENTNÍ SITUACE při typu A]
Nový IMH: Ne / Ano — lokalizace ___
Hemoperikard: Ne / Ano  Hemotorax: Ne / Ano

Standardizovaná měření [kolmo na osu, zevní stěna k zevní stěně — ESC 2023]
                               Aktuálně | Dříve  | Datum | Růst/rok
Sinus aorty:                   ___ mm   | ___    | ___   | ___ mm/rok
Sinotubulární přechod:         ___ mm   | ___    | ___   | ___ mm/rok
Vzestupná aorta (úr. plicnice): ___ mm  | ___    | ___   | ___ mm/rok
Proximální oblouk:             ___ mm   | ___    | ___   | ___ mm/rok
Proximální sestupná aorta:     ___ mm   | ___    | ___   | ___ mm/rok
Střední sestupná aorta (Th8):  ___ mm   | ___    | ___   | ___ mm/rok
Maximum celkově: ___ mm v oblasti ___

Dynamika růstu
Nejrychleji rostoucí segment: ___ — ___ mm/rok
Stabilní (<3 mm/rok): Ano / Ne
Akcelerovaný (3–5 mm/rok): Ne / Ano — [segment] — zkrátit interval sledování
Rychlý (>5 mm/rok): Ne / Ano — INDIKACE K OPERACI

Operační prahy dle ESC 2023
Vzestupná aorta — obecná populace: ≥55 mm → Aktuálně: ___ → Dosaženo: Ne/Ano
Vzestupná aorta — rizikoví pacienti (bikuspidální AK / Marfan / rod. anamnéza / rychlý růst): ≥50 mm → Dosaženo: Ne/Ano
Sestupná aorta: ≥60 mm (≥55 mm při CTD) → Dosaženo: Ne/Ano
→ SOUHRN: Pod prahem / Blíží se (<5 mm) / Práh dosažen — indikace k operaci

Po disekci [pokud relevantní]
Falešné lumen: Trombózované / Parciálně trombózované / Průchodné
Změna vaku: Stabilní / Zvětšující se / Regredující

Aortální chlopeň
Trikuspidální / Bikuspidální (fúze: P-L / P-N / L-N) / Protéza

Perikard / Pleura
Perikardiální výpotek: Ne / Ano  Pleurální výpotek: Ne / Ano

ZÁVĚR
TAA, maximum ___ mm v oblasti [lokalizace].
Dynamika: [Stabilní / Akcelerovaný / Rychlý růst] — [nejrychlejší segment, rychlost]
Operační práh ESC: Pod prahem / Blíží se / Dosažen
Nová komplikace: Ne / Ano — [specifikovat]
Příští CT: [stabilní <45 mm: za 2–3 roky / 45–50 mm: za 1–2 roky / >50 mm: ročně / rychlý růst: za 6 měsíců]`}}],qm=[{id:"spinetrauma",category:"spine",en:{label:"Spine Trauma",evidence:"AO Spine TL Classification (Vaccaro 2013); TLICS Score (Vaccaro 2005); AO Spine subaxial cervical (Vaccaro 2015); NEXUS/Canadian C-Spine Rule",criticalFindings:["Unstable fracture","Canal compromise","Distraction injury","PLC disruption"],searchEvidence:"Vaccaro 2013 AO Spine TL validation; Patel 2007 TLICS reliability; Inaba 2013 systematic CT spine search; ATLS spinal clearance",searchMismatch:"Most describe the obvious fracture and move on. Critical errors: (1) multilevel injuries missed — up to 20% are non-contiguous. (2) Stability requires explicit PLC assessment. (3) Canal compromise measurement mandatory but frequently omitted.",searchPattern:[{step:1,priority:"critical",title:"Alignment Survey — All Levels",detail:"Sagittal reconstructions first. ALL levels: height loss, kyphosis, listhesis. Classic miss: C7-T1 junction. Trace from occiput to sacrum.",time:"45s"},{step:2,priority:"critical",title:"Canal Compromise — Measure",detail:"For each fracture: retropulsed fragment? % canal compromise (fragment AP / normal canal AP × 100). >50% = high neurological risk.",time:"30s"},{step:3,priority:"critical",title:"AO Spine Classification",detail:"A (compression): A0-A4. B (tension band): B1-B3. C (translational — any translation = C). Higher type = more instability.",time:"30s"},{step:4,priority:"critical",title:"PLC — Indirect CT Signs",detail:"CT cannot directly visualise PLC. Indirect: widened interspinous distance (>1.5× adjacent), facet widening/dislocation, spinous process avulsion, translation >2mm. Any = MRI recommended.",time:"20s"},{step:5,priority:"critical",title:"Multilevel Injury Search",detail:"Continue survey after primary fracture. Non-contiguous in 15-20%. Check cervicothoracic and thoracolumbar junctions specifically.",time:"30s"},{step:6,priority:"high",title:"TLICS Score (Thoracolumbar)",detail:"Morphology (1-3pts) + PLC (0-3pts) + neurology (0-4pts). ≤3 = non-op. 4 = equivocal. ≥5 = operative.",time:"15s"},{step:7,priority:"normal",title:"Prevertebral / Paravertebral Soft Tissue",detail:"Prevertebral haematoma (cervical airway). Epidural haematoma. Pneumorrhachis.",time:"15s"}],template:`CT SPINE — TRAUMA
Region: Cervical / Thoracic / Lumbar / Whole spine
Mechanism: [___]  GCS/Neurology: ___
Technique: Thin-slice axial + sagittal + coronal MPR

ALIGNMENT [sagittal — all levels]
Cervical: Normal / Kyphosis / Listhesis ___
Cervicothoracic (C7-T1): Normal / Abnormal ___
Thoracic: Normal / Kyphosis ___ ° / Listhesis ___
Thoracolumbar (T12-L2): Normal / Abnormal ___
Lumbar: Normal / Listhesis ___

PRIMARY FRACTURE
Level: ___

AO SPINE TYPE:
A — Compression:
  A0: Minor (transverse/spinous process)
  A1: Wedge compression
  A2: Split/pincer
  A3: Incomplete burst (posterior wall, unilateral pedicle)
  A4: Complete burst (posterior wall, both pedicles)
B — Tension band:
  B1: Bony posterior TBD  B2: PLC disruption  B3: Hyperextension
C — Translation/rotation (ANY translation = C — highly unstable)
→ AO Type: ___

FRACTURE DETAILS
Anterior height: ___ mm (normal ___) → Loss ___ %
Posterior height: ___ mm → Loss ___ %
Kyphosis at fracture: ___ °
Retropulsed fragment: No / Yes — ___ mm
Canal compromise: ___ % (>25% significant; >50% severe)
Facets: Intact / Subluxed / Dislocated R/L

PLC INDIRECT SIGNS [MRI for definitive]
Interspinous distance: ___ mm (adjacent ___) [>1.5× = disruption]
Spinous avulsion: No / Yes
Facet widening/dislocation: No / Yes
Translation: No / Yes — ___ mm
→ PLC: Intact / Disruption suspected (MRI) / Disrupted

TLICS [thoracolumbar — Vaccaro 2005]
Morphology: A0/A1/A2=1 / A3/A4/B1=2 / B2/B3/C=3: ___
PLC: Intact=0 / Suspected=2 / Disrupted=3: ___
Neurology: Intact=0 / Root=2 / Complete=2 / Incomplete=3 / Cauda=3: ___
TLICS: ___  (≤3 non-op; 4 equivocal; ≥5 operative)

CANAL
Canal AP at fracture: ___ mm (normal C >13, T >12, L >15mm)
Epidural haematoma: No / Yes — ___
Pneumorrhachis: No / Yes

MULTILEVEL
Secondary fracture: No / Yes — ___ type ___
Sacral fracture: No / Yes

CERVICAL SPECIFIC
C1: Normal / Jefferson / Posterior arch ___
C2: Normal / Odontoid (I/II/III) / Hangman ___
ADI: ___ mm (normal <3mm)
Foramen transversarium: Intact / Disrupted R/L [vertebral artery risk]

SOFT TISSUE
Prevertebral haematoma: No / Yes — level ___, AP ___ mm
Epidural haematoma: No / Yes — levels ___

IMPRESSION
[Level] fracture, AO Type [___].
Canal compromise: None / ___ %
TLICS: ___ ([non-op / equivocal / operative])
PLC: Intact / Suspected disruption / Disrupted
Multilevel: No / Yes — ___
Stability: Stable / Likely unstable / Unstable
Urgency: Routine / Urgent / Emergency`},cs:{label:"Trauma páteře",evidence:"AO Spine TL klasifikace (Vaccaro 2013); TLICS skóre (Vaccaro 2005); AO Spine subaxiální cervikální klasifikace (Vaccaro 2015)",criticalFindings:["Nestabilní zlomenina","Kompromitace páteřního kanálu","Distrakční poranění","Poranění PLC"],searchEvidence:"Validace AO Spine TL Vaccaro 2013; spolehlivost TLICS Patel 2007; systematika CT páteře Inaba 2013; páteřní clearance ATLS",searchMismatch:"Většina radiologů popíše zjevnou zlomeninu a skončí. Kritické chyby: (1) víceúrovňová poranění přehlídnuta — až 20 % jsou nekontiguitní; (2) stabilita vyžaduje explicitní hodnocení PLC; (3) měření kompromitace kanálu je povinné, ale často vynecháváno.",searchPattern:[{step:1,priority:"critical",title:"Hodnocení osy — všechny úrovně",detail:"Nejdříve sagitální rekonstrukce. VŠECHNY úrovně: ztráta výšky, kyfóza, anterolistéza. Klasicky přehlížené místo: přechod C7/Th1. Sledujte od okcipitu ke kosti křížové.",time:"45s"},{step:2,priority:"critical",title:"Kompromitace páteřního kanálu — měření",detail:"U každé zlomeniny: retropulzní fragment? % kompromitace kanálu (AP fragment / normální AP kanálu × 100). >50 % = vysoké neurologické riziko.",time:"30s"},{step:3,priority:"critical",title:"AO Spine klasifikace",detail:"A (komprese): A0–A4. B (zadní napěťová zóna): B1–B3. C (translace — jakákoli = C). Vyšší typ = větší nestabilita.",time:"30s"},{step:4,priority:"critical",title:"PLC — nepřímé CT příznaky",detail:"CT neumožňuje přímou vizualizaci PLC. Nepřímé příznaky: rozšíření interspinózního prostoru (>1,5× sousední úroveň), dislokace fazetového kloubu, avulze trnového výběžku, translace >2 mm. Cokoli z toho = MRI.",time:"20s"},{step:5,priority:"critical",title:"Hledání víceúrovňového poranění",detail:"Pokračujte v hodnocení i po nalezení primární zlomeniny. Nekontiguitní u 15–20 %. Zejména prohledejte cervikotorakální a torakolumbální přechod.",time:"30s"},{step:6,priority:"high",title:"TLICS skóre (torakolumbální)",detail:"Morfologie (1–3 b) + PLC (0–3 b) + neurologie (0–4 b). ≤3 = konzervativně. 4 = hraniční. ≥5 = operačně.",time:"15s"},{step:7,priority:"normal",title:"Prevertebrální / paravertebrální měkké tkáně",detail:"Prevertebrální hematom (cervikálně — ohrožení dýchacích cest). Epidurální hematom. Pneumorachis.",time:"15s"}],template:`CT PÁTEŘE — TRAUMA
Oblast: Krční / Hrudní / Bederní / Celá páteř
Mechanismus: [___]  GCS/neurologický stav: ___
Technika: Tenkovrstvé axiální + sagitální + koronální MPR

NÁLEZ

Osa páteře [sagitální — všechny úrovně]
Krční páteř: Normální / Kyfóza / Anterolistéza ___
Cervikotorakální přechod (C7/Th1): Normální / Patologický ___
Hrudní páteř: Normální / Kyfóza ___ ° / Anterolistéza ___
Torakolumbální přechod (Th12/L2): Normální / Patologický ___
Bederní páteř: Normální / Anterolistéza ___

Primární zlomenina
Úroveň: ___

Typ dle AO Spine:
A — Komprese:
  A0: Minoritní (příčný/trnový výběžek)
  A1: Klínovitá komprese
  A2: Štěpná/klíšťová
  A3: Neúplná burstová (zadní stěna, jednostranný pedikl)
  A4: Kompletní burstová (zadní stěna, oba pedikly)
B — Poranění zadní napěťové zóny:
  B1: Kostní poranění zadní TZ  B2: Poranění PLC  B3: Hyperextenzní
C — Translace/rotace (JAKÁKOLI translace = C — vysoce nestabilní)
→ Typ AO: ___

Detaily zlomeniny
Přední výška: ___ mm (norma ___) → Ztráta ___ %
Zadní výška: ___ mm → Ztráta ___ %
Kyfotická angulace v místě zlomeniny: ___ °
Retropulzní fragment: Ne / Ano — ___ mm
Kompromitace kanálu: ___ % (>25 % = signifikantní; >50 % = závažná)
Fazetové klouby: Intaktní / Subluxace / Luxace vpravo/vlevo

Nepřímé CT příznaky poranění PLC [MRI pro definitivní hodnocení]
Interspinózní vzdálenost: ___ mm (sousední ___ mm) [>1,5× = poranění PLC]
Avulze trnového výběžku: Ne / Ano
Rozšíření/luxace fazetového kloubu: Ne / Ano
Translace: Ne / Ano — ___ mm
→ PLC: Intaktní / Poranění suspektní (nutné MRI) / Poranění prokázáno

TLICS skóre [torakolumbální — Vaccaro 2005]
Morfologie: A0/A1/A2=1 b / A3/A4/B1=2 b / B2/B3/C=3 b: ___
PLC: Intaktní=0 b / Suspektní=2 b / Poranění=3 b: ___
Neurologie: Intaktní=0 b / Kořenové=2 b / Kompletní=2 b / Inkompletní=3 b / Cauda=3 b: ___
TLICS celkem: ___  (≤3 konzervativně; 4 hraniční; ≥5 operačně)

Páteřní kanál
AP průměr kanálu v místě zlomeniny: ___ mm (norma: krční >13 mm, hrudní >12 mm, bederní >15 mm)
Epidurální hematom: Ne / Ano — ___
Pneumorachis: Ne / Ano

Víceúrovňové poranění
Sekundární zlomenina: Ne / Ano — úroveň ___, typ ___
Zlomenina kosti křížové: Ne / Ano

Cervikální specifika
C1: Normální / Jeffersonova zlomenina / Zlomenina zadního oblouku ___
C2: Normální / Zlomenina zubu (typ I/II/III) / Hangmanův typ ___
Atlantodentalní interval: ___ mm (norma <3 mm)
Foramen transversarium: Intaktní / Porušeno vpravo/vlevo [riziko poranění a. vertebralis]

Měkké tkáně
Prevertebrální hematom: Ne / Ano — úroveň ___, AP ___ mm
Epidurální hematom: Ne / Ano — úrovně ___

ZÁVĚR
Zlomenina [úroveň], typ AO [___].
Kompromitace kanálu: Žádná / ___ %
TLICS: ___ ([konzervativně / hraniční / operačně])
PLC: Intaktní / Poranění suspektní — MRI / Poranění prokázáno
Víceúrovňové poranění: Ne / Ano — ___
Stabilita: Stabilní / Pravděpodobně nestabilní / Nestabilní
Naléhavost: Plánovaná / Urgentní / Emergentní`}},{id:"spinedegen",category:"spine",en:{label:"Degenerative Spine",evidence:"NASS nomenclature 2014 (Fardon); Fardon 2014 disc pathology nomenclature; Ulrich 1991 foraminal grading; Schizas 2010 lumbar stenosis CT/MRI",criticalFindings:["Severe central stenosis","Cauda equina compression","Malignant cord compression","Discitis-osteomyelitis"],searchEvidence:"Fardon 2014 NASS nomenclature standardisation; Andreisek 2013 systematic lumbar CT; Boden 1990 asymptomatic disc pathology prevalence",searchMismatch:"CT reports list level-by-level with disc + foramina. Wrong structure: clinician asks 'what is compressing this nerve root'. Search symptom-directed first. Also: bone windows for metastases/infection are consistently skipped.",searchPattern:[{step:1,priority:"critical",title:"Bone Windows — Metastases / Infection",detail:"Before any disc: systematic bone window review. Lytic/sclerotic lesions. Endplate erosion/destruction = discitis. Epidural collection. A missed spinal metastasis causing instability is a medicolegal event.",time:"30s"},{step:2,priority:"critical",title:"Canal Stenosis — Symptomatic Level First",detail:"Identify clinically relevant level from referral. Measure AP diameter. Grade: >12mm normal, 10-12mm relative, <10mm absolute. Trefoil canal. Ligamentum flavum hypertrophy.",time:"30s"},{step:3,priority:"critical",title:"Cauda Equina Compression",detail:"Severe stenosis + symptoms = cauda equina syndrome until proven otherwise. Obliteration of epidural fat. Packed roots without CSF separation. Surgical emergency.",time:"15s"},{step:4,priority:"high",title:"Disc — Correct Nomenclature (Fardon 2014)",detail:"Bulge (<25% circumference). Protrusion (base > apex). Extrusion (apex > base OR sequestered). Direction: central/paracentral/foraminal/extraforaminal.",time:"45s"},{step:5,priority:"high",title:"Foraminal Stenosis — Both Sides",detail:"Ulrich: 0=normal fat, 1=partial obliteration, 2=complete obliteration, 3=nerve deformation. Far lateral disc — causes same-level ipsilateral radiculopathy, easily missed.",time:"30s"},{step:6,priority:"normal",title:"Level-by-Level Survey",detail:"Disc height, osteophytes, Modic changes, facet arthrosis, listhesis, pars defect, scoliosis.",time:"30s"}],template:`CT LUMBAR/THORACIC/CERVICAL SPINE — DEGENERATIVE
Indication: [back pain / radiculopathy level ___ / myelopathy]
Technique: Axial + sagittal + coronal MPR, bone + soft tissue windows

BONE WINDOWS [malignancy / infection — BEFORE disc assessment]
Vertebral bodies: Normal / Lytic ___ / Sclerotic ___ / Mixed ___
Endplates: Normal / Erosion/destruction ___ [discitis — CRITICAL]
Epidural collection: No / Yes — ___
Pedicles: Normal / Destruction ___
→ Malignant/infective pathology: No / Suspected — [describe — PRIORITISE]

CENTRAL CANAL [symptomatic level first]
Level    AP (mm)    Grade                              Cause
___      ___        Normal/>12 / Relative 10-12 / Absolute <10    ___
___      ___        ___                                ___
Cauda equina compression: No / Yes — level ___ [SURGICAL URGENCY]
Trefoil configuration: No / Yes — ___

DISC PATHOLOGY [Fardon 2014 NASS nomenclature]
L5/S1:
  Height: Preserved / Reduced ___ %
  Type: Normal / Bulge (<25%) / Protrusion (base>apex) / Extrusion (apex>base) / Sequestration
  Direction: Central / Paracentral R/L / Foraminal R/L / Extraforaminal R/L
  Canal effect: None / Mild indentation / Moderate / Severe compression
L4/L5:  [same format]
L3/L4:  [same format]
L2/L3:  [same format]
L1/L2:  [same format]

FORAMINAL STENOSIS [Ulrich — both sides]
Grade: 0=normal  1=partial obliteration  2=complete obliteration  3=nerve deformation
Level    Right    Left    Cause
L5/S1:   ___      ___     ___
L4/L5:   ___      ___     ___
L3/L4:   ___      ___     ___
Far lateral disc: No / Yes — level ___, side ___

FACET JOINTS
Most symptomatic: Hypertrophy: No/Mild/Mod/Severe  Effusion: No/Yes  Vacuum: No/Yes
Subluxation: No / Yes

ALIGNMENT
Spondylolisthesis: No / Yes
  Type: Degenerative / Isthmic (pars defect)
  Level: ___  Grade: I (<25%) / II / III / IV
  Direction: Antero / Retro
Pars defect (spondylolysis): No / Yes — level ___, R/L/Bilateral
Scoliosis: No / Yes — Cobb ___ °

POSTERIOR ELEMENTS
Ligamentum flavum: Normal / Hypertrophy — level ___, ___ mm (>4mm significant)
Epidural lipomatosis: No / Yes

IMPRESSION
Most significant findings:
1. [Level] — [disc + canal/foraminal grade]
2. ___  3. ___
Canal stenosis: None / Relative / Absolute — worst at ___
Nerve root: L___ / S___ — [left/right] — [canal/foraminal]
Malignant/infective: None / [specify urgently]
Note: CT underestimates ligamentous contribution — MRI if clinical mismatch`},cs:{label:"Degenerativní onemocnění páteře",evidence:"Nomenklatura NASS 2014 (Fardon); nomenklatura diskové patologie Fardon 2014; foraminální stenóza Ulrich 1991; CT/MRI korelace bederní stenózy Schizas 2010",criticalFindings:["Závažná centrální stenóza","Komprese cauda equina","Maligní komprese míchy","Spondylodiscitida"],searchEvidence:"Standardizace nomenklatury NASS Fardon 2014; systematické CT bederní páteře Andreisek 2013; prevalence asymptomatické diskové patologie Boden 1990",searchMismatch:"CT protokoly páteře obsahují popis každé úrovně s diskem a forameny. Nesprávná struktura: klinik se ptá 'co komprimuje tento nervový kořen'. Nejdříve hodnoťte klinicky relevantní úroveň. Kostní okna pro metastázy/infekci jsou systematicky vynechávána.",searchPattern:[{step:1,priority:"critical",title:"Kostní okna — metastázy / infekce",detail:"Před hodnocením disku: systematická revize v kostním okně. Lytické/sklerotické léze. Eroze/destrukce krycích ploch = spondylodiscitida. Epidurální kolekce. Přehlédnuté metastázy způsobující nestabilitu jsou medicolegalní problém.",time:"30s"},{step:2,priority:"critical",title:"Stenóza páteřního kanálu — klinicky relevantní úroveň",detail:"Identifikujte klinicky relevantní úroveň z indikace. Měřte AP průměr. Klasifikace: >12 mm normální, 10–12 mm relativní stenóza, <10 mm absolutní stenóza. Trojúhelníkový kanál. Hypertrofie lig. flavum.",time:"30s"},{step:3,priority:"critical",title:"Komprese cauda equina",detail:"Závažná stenóza + příznaky = syndrom cauda equina dokud není vyloučeno. Obliterace epidurálního tuku. Nervové kořeny bez oddělení CSF. Chirurgická emergentní situace.",time:"15s"},{step:4,priority:"high",title:"Disk — správná nomenklatura (Fardon 2014)",detail:"Bulging (<25 % obvodu). Protruze (baze > hrot). Extruze (hrot > baze NEBO sekvestrace). Směr: centrálně/paracentralně/foraminálně/extraforaminálně.",time:"45s"},{step:5,priority:"high",title:"Foraminální stenóza — obě strany",detail:"Ulrichova stupnice: 0=normální tuk, 1=parciální obliterace, 2=kompletní obliterace, 3=deformace nervu. Extrémně laterální výhřez — způsobuje ipsilaterální radikulopatii stejné úrovně, snadno přehlédnutelný.",time:"30s"},{step:6,priority:"normal",title:"Systematický přehled každé úrovně",detail:"Výška disku, osteofyty, Modicovy změny, artróza fazetových kloubů, anterolistéza, spondylolýza, skolióza.",time:"30s"}],template:`CT BEDERNÍ/HRUDNÍ/KRČNÍ PÁTEŘE — DEGENERATIVNÍ ONEMOCNĚNÍ
Indikace: [bolest zad / radikulopatie úrovně ___ / myelopatie]
Technika: Axiální + sagitální + koronální MPR, kostní + měkkotkáňová okna

NÁLEZ

Kostní okna [malignita / infekce — PŘED hodnocením disku]
Obratlová těla: Normální / Lytická léze ___ / Sklerotická ___ / Smíšená ___
Krycí plochy: Normální / Eroze/destrukce ___ [spondylodiscitida — KRITICKÝ NÁLEZ]
Epidurální kolekce: Ne / Ano — ___
Pedikly: Normální / Destrukce ___
→ Maligní/infekční patologie: Ne / Suspektní — [popsat — PRIORITNÍ]

Páteřní kanál [nejdříve klinicky symptomatická úroveň]
Úroveň    AP (mm)    Stupeň stenózy                          Příčina
___       ___        Normální/>12 / Relativní 10-12 / Absolutní <10    ___
___       ___        ___                                      ___
Komprese cauda equina: Ne / Ano — úroveň ___ [CHIRURGICKÁ URGENCE]
Trojúhelníkový kanál: Ne / Ano — ___

Disková patologie [nomenklatura NASS Fardon 2014]
L5/S1:
  Výška disku: Zachována / Snížena o ___ %
  Typ: Normální / Bulging (<25 %) / Protruze (baze>hrot) / Extruze (hrot>baze) / Sekvestrace
  Směr: Centrálně / Paracentralně vpravo/vlevo / Foraminálně vpravo/vlevo / Extraforaminálně vpravo/vlevo
  Vliv na kanál: Žádný / Mírné vtlačení / Střední komprese / Závažná komprese
L4/L5:  [stejný formát]
L3/L4:  [stejný formát]
L2/L3:  [stejný formát]
L1/L2:  [stejný formát]

Foraminální stenóza [Ulrichova stupnice — obě strany]
Stupeň: 0=normální tuk  1=parciální obliterace  2=kompletní obliterace  3=deformace nervu
Úroveň    Vpravo    Vlevo    Příčina
L5/S1:    ___       ___      ___
L4/L5:    ___       ___      ___
L3/L4:    ___       ___      ___
Extrémně laterální výhřez: Ne / Ano — úroveň ___, strana ___

Fazetové klouby
Nejsymptomatičtější úroveň: Hypertrofie: Ne/Mírná/Střední/Výrazná  Výpotek: Ne/Ano  Vakuový fenomén: Ne/Ano
Subluxace: Ne / Ano

Osa páteře
Anterolistéza/spondylolistéza: Ne / Ano
  Typ: Degenerativní / Istmická (spondylolýza)
  Úroveň: ___  Stupeň: I (<25 %) / II / III / IV
  Směr: Antero / Retro
Spondylolýza (defekt pars interarticularis): Ne / Ano — úroveň ___, vpravo/vlevo/oboustranně
Skolióza: Ne / Ano — Cobbův úhel ___ °

Zadní elementy
Lig. flavum: Normální / Hypertrofie — úroveň ___, ___ mm (>4 mm = signifikantní)
Epidurální lipomatóza: Ne / Ano

ZÁVĚR
Nejvýznamnější nálezy:
1. [Úroveň] — [diskové postižení + stupeň stenózy kanálu/foramina]
2. ___  3. ___
Stenóza páteřního kanálu: Žádná / Relativní / Absolutní — nejzávažnější na úrovni ___
Kompromitace nervového kořene: L___ / S___ — [vlevo/vpravo] — [kanál/foramen]
Maligní/infekční patologie: Nezjištěna / [specifikovat urgentně]
Poznámka: CT podhodnocuje příspěvek vazivových struktur — MRI při nesouladu kliniky a zobrazení`}}],Qm=[{id:"ct_mozku",category:"routine_neuro",en:{label:"Brain CT (native)",evidence:"ACR Appropriateness; NICE head injury 2023; standard non-contrast brain CT protocol",criticalFindings:["Intracranial haemorrhage","Midline shift","Hydrocephalus","Herniation"],searchEvidence:"Non-contrast brain CT: systematic review in all windows. Bone windows mandatory for skull fractures.",searchMismatch:"Single window only. Brain windows miss skull fractures, calcifications in wrong density range, and subtle subarachnoid blood. Always review bone and brain windows.",searchPattern:[{step:1,priority:"critical",title:"Haemorrhage — All Compartments",detail:"ICH, SDH, EDH, SAH, IVH. Use brain windows (W80/L35) then lung windows for calcifications/air.",time:"30s"},{step:2,priority:"critical",title:"Mass Effect + Herniation",detail:"Midline shift at septum pellucidum. Basal cisterns. Uncal, subfalcine herniation.",time:"20s"},{step:3,priority:"high",title:"Parenchyma — Cortex and White Matter",detail:"Cortical hypodensities (ischaemia), periventricular changes, mass lesions.",time:"30s"},{step:4,priority:"high",title:"Ventricles + CSF Spaces",detail:"Size, symmetry, hydrocephalus pattern (obstructive vs communicating).",time:"15s"},{step:5,priority:"normal",title:"Bone Windows — Skull",detail:"Vault, skull base, sinuses, mastoids. Mandatory after any trauma.",time:"20s"},{step:6,priority:"normal",title:"Sellar Region + Posterior Fossa",detail:"Sella size. Cerebellum, brainstem, foramen magnum.",time:"15s"}],template:`CT BRAIN — NON-CONTRAST
Indication: [___]
Previous: [___]
Technique: Non-contrast CT

FINDINGS
Intracranial haemorrhage: None
Ventricular system: Symmetric, normal calibre, midline.
Brain parenchyma: No focal lesions. Normal grey-white differentiation.
  White matter: No pathological hypodensities.
Midline shift: None.
Subarachnoid spaces: Preserved, age-appropriate.
Basal cisterns: Patent.
Sella: Not enlarged.
Posterior fossa: Cerebellum and brainstem unremarkable.
Paranasal sinuses: Aerated.
Skull: No fractures, no focal bony lesions.
Other: ___

IMPRESSION
Normal non-contrast brain CT.`},cs:{label:"CT mozku nativně",evidence:"ACR Appropriateness; NICE poranění hlavy 2023; standardní nativní protokol CT mozku",criticalFindings:["Intrakraniální krvácení","Přesun středočarových struktur","Hydrocefalus","Herniace"],searchEvidence:"Nativní CT mozku: systematické hodnocení ve všech oknech. Kostní okna jsou povinná pro zlomeniny kalvy.",searchMismatch:"Hodnocení pouze v jednom okně. Mozková okna nezachytí zlomeniny kalvy, kalcifikace mimo denzitní rozsah a diskrétní subarachnoidální krvácení. Vždy hodnotit v mozkovém i kostním okně.",searchPattern:[{step:1,priority:"critical",title:"Krvácení — všechny kompartmenty",detail:"ICH, SDH, EDH, SAK, IVH. Mozková okna (W80/L35), pak plicní pro kalcifikace/vzduch.",time:"30s"},{step:2,priority:"critical",title:"Expanzivní chování + herniace",detail:"Přesun střední čáry na úrovni septum pellucidum. Bazální cisterny. Unkální, subfalcinní herniace.",time:"20s"},{step:3,priority:"high",title:"Parenchym — kůra a bílá hmota",detail:"Kortikální hypodenzity (ischémie), periventrikulární změny, expanzivní ložiska.",time:"30s"},{step:4,priority:"high",title:"Komorový systém + SA prostory",detail:"Velikost, symetrie, vzorec hydrocefalu (obstrukční vs. komunikující).",time:"15s"},{step:5,priority:"normal",title:"Kostní okna — kalva",detail:"Klenba, spodina, dutiny, mastoidální sklípky. Povinné po jakémkoli traumatu.",time:"20s"},{step:6,priority:"normal",title:"Selární oblast + zadní jáma",detail:"Velikost selly. Mozeček, mozkový kmen, velké týlní foramen.",time:"15s"}],template:`CT MOZKU
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno nativně.

NÁLEZ
Intrakraniální krvácení: Nediferencuji.
Komorový systém: Symetrický, přiměřené šíře, ve střední čáře.
Mozkový parenchym: Bez ložiskových změn. Zachovalá diferenciace bílé a šedé hmoty.
  Bílá hmota: Bez patologických hypodenzit.
Přesun středočarových struktur: Ne.
SA prostory: Zachované, věku přiměřené.
Bazální cisterny: Volné.
Sella: Nezvětšena.
Zadní jáma: Mozeček a mozkový kmen bez patologického nálezu.
Vedlejší dutiny nosní: Vzdušné.
Skelet neurokrania: Bez zlomenin, bez ložiskových změn.
Jiné: ___

ZÁVĚR
Přiměřený nativní CT nález mozku.`}},{id:"ct_mozku_cta",category:"routine_neuro",en:{label:"Brain CT + CTA (intra/extracranial)",evidence:"ESO stroke guidelines 2023; ASPECTS; CT angiography for LVO detection",criticalFindings:["Large vessel occlusion","Intracranial haemorrhage","ASPECTS <6","Sinus thrombosis"],searchEvidence:"Combined NCCT + CTA: NCCT first for haemorrhage exclusion and ASPECTS, then CTA for vessel patency. Use narrow stroke windows (W30/L30) for early ischaemia signs.",searchMismatch:"Vessels assessed before ASPECTS. Correct: ASPECTS must be scored on NCCT first, then vessel status. Anchoring on the vessel leads to under-scoring of infarct extent.",searchPattern:[{step:1,priority:"critical",title:"NCCT — Haemorrhage + ASPECTS",detail:"Exclude haemorrhage. Score ASPECTS in stroke windows W30/L30 before any vessel assessment.",time:"60s"},{step:2,priority:"critical",title:"CTA — Circle of Willis",detail:"ICA, M1, M2, basilar, PCA. Dense MCA sign on NCCT.",time:"45s"},{step:3,priority:"critical",title:"Extracranial Vessels",detail:"Carotid bifurcations, vertebral origins. Stenosis grade.",time:"30s"},{step:4,priority:"high",title:"Venous Sinuses",detail:"Dense sinus sign. Active search for sinus thrombosis if indicated.",time:"20s"},{step:5,priority:"normal",title:"Parenchyma + Structures",detail:"Chronic changes, atrophy, ventricles.",time:"20s"}],template:`CT MOZKU + CT AG INTRA/EXTRAKRANIÁLNÍCH TEPEN
Indication: [___]
Previous: [___]
Technique: Non-contrast CT + CTA (IV contrast ___ ml)

NCCT — BRAIN
Intracranial haemorrhage: None
ASPECTS: ___ /10  (regions affected: ___)
Parenchyma: No early ischaemia signs. Normal grey-white differentiation.
Ventricular system: Symmetric, midline.
Other: ___

CTA — VESSELS
Aortic arch: Normal.
Common carotids: Normal.
Carotid siphons: Normal bilaterally.
Intracranial ICA: Patent bilaterally.
Anterior cerebral arteries: Normal.
Middle cerebral arteries (M1/M2): Patent bilaterally. No hyperdense MCA sign.
Posterior cerebral arteries: Normal.
Vertebral arteries: Normal. [Left vertebral hypoplastic — variant]
Basilar artery: Normal.
Venous sinuses: Normal.

IMPRESSION
No intracranial haemorrhage.  ASPECTS ___ /10.
No large vessel occlusion.`},cs:{label:"CT mozku + CT AG tepen zásobujících mozek",evidence:"Guidelines ESO pro CMP 2023; ASPECTS; CT angiografie pro detekci okluze velké cévy",criticalFindings:["Okluze velké cévy","Intrakraniální krvácení","ASPECTS <6","Trombóza splavu"],searchEvidence:"NCCT + CTA: nejdříve NCCT pro vyloučení krvácení a ASPECTS, pak CTA pro průchodnost cév. Úzká okna (W30/L30) pro časné ischemické změny.",searchMismatch:"Cévy hodnoceny před ASPECTS. Správně: ASPECTS musí být skórováno na NCCT jako první, pak stav cév. Primování na cévu vede k podhodnocení rozsahu infarktu.",searchPattern:[{step:1,priority:"critical",title:"NCCT — krvácení + ASPECTS",detail:"Vyloučit krvácení. Skórovat ASPECTS v cévních oknech W30/L30 před hodnocením cév.",time:"60s"},{step:2,priority:"critical",title:"CTA — Willisův okruh",detail:"ICA, M1, M2, bazilární tepna, PCA. Hyperdenzní MCA příznak na NCCT.",time:"45s"},{step:3,priority:"critical",title:"Extrakraniální cévy",detail:"Karotické bifurkace, odstupy vertebrálních tepen. Stupeň stenózy.",time:"30s"},{step:4,priority:"high",title:"Žilní splavu",detail:"Hyperdenzní splav. Aktivní hledání trombózy splavu při indikaci.",time:"20s"},{step:5,priority:"normal",title:"Parenchym + struktury",detail:"Chronické změny, atrofie, komorový systém.",time:"20s"}],template:`CT MOZKU + CT AG INTRA/EXTRAKRANIÁLNÍCH TEPEN
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno nativně a postkontrastně po i.v. aplikaci ___ ml Iomeronu 400, bez nežádoucí reakce.

NÁLEZ

Intrakraniální hemoragie: Nediferencuji.
ASPECTS: ___ /10  (postižené oblasti: ___)
Mozkový parenchym: Bez průkazu časné ischémie. Zachovalá diferenciace bílé a šedé hmoty.
Komorový systém: Symetrický, ve střední čáře.
Jiné: ___

Aortální oblouk: Normální.
Karotické tepny: Normální.
Obě vnitřní karotidy: Přiměřené.
Přední mozkové tepny: Normální.
Střední mozkové tepny: Průchodné bilaterálně. Hyperdenzní MCA příznak: Nediferencuji.
Zadní mozkové tepny: Normální.
Vertebrální tepny: Normální. [Hypoplastický intrakraniální průběh AV vlevo — varianta]
Bazilární tepna: Normální.
Flebogramy: V rámci variací.

ZÁVĚR
Intrakraniální krvácení nediferencuji. ASPECTS ___ /10.
Okluzi velké cévy nediferencuji.`}},{id:"hrct_pyramidy",category:"routine_neuro",en:{label:"HRCT Temporal Bones",evidence:"Mafee et al. temporal bone CT; Swartz 2001 systematic CT approach to temporal bone",criticalFindings:["Ossicular chain disruption","Labyrinthine fistula","Cholesteatoma","Facial canal erosion"],searchEvidence:"Bilateral review mandatory. Always compare both sides. Check each structure in order: EAC, tympanic membrane, ossicular chain, labyrinth, mastoid, facial canal, IAC.",searchMismatch:"Random searching of temporal bones. Must be systematic: EAC → tympanic membrane → ossicles → labyrinth → mastoid → facial canal → IAC. Bilateral comparison at each step.",searchPattern:[{step:1,priority:"critical",title:"Ossicular Chain — Both Sides",detail:"Malleus, incus, stapes. Continuity, position, erosion. Compare symmetry.",time:"30s"},{step:2,priority:"critical",title:"Soft Tissue Density — Cholesteatoma?",detail:"Soft tissue in Prussak's space, epitympanum, antrum = cholesteatoma until proven otherwise. Bone erosion confirms.",time:"20s"},{step:3,priority:"high",title:"Labyrinth — Cochlea, Vestibule, SCCs",detail:"Otosclerosis (fissula ante fenestram hypodensity). Labyrinthine fistula.",time:"20s"},{step:4,priority:"high",title:"Mastoid Pneumatisation",detail:"Well-pneumatised vs sclerotic vs opacified. Fluid vs soft tissue.",time:"15s"},{step:5,priority:"normal",title:"Facial Canal + IAC + Vascular",detail:"Facial canal integrity. IAC symmetry. Carotid canal, jugular bulb.",time:"15s"}],template:`HRCT TEMPORAL BONES
Indication: [___]
Previous: [___]
Technique: Non-contrast HRCT, temporal bones.

RIGHT:
External auditory canal: Normal.
Scutum: Normal.
Tympanic membrane: Normal.
Epitympanum: Clear.
Mesotympanum: Clear.
Hypotympanum: Clear.
Ossicular chain: Normal.
Bony labyrinth (cochlea, vestibule, SCCs): Normal.
Oval / round windows: Normal. Fissula ante fenestram: Normal.
Mastoid cells: Well-pneumatised, clear.
Facial canal: Intact.
Carotid canal / jugular bulb: Normal.
Internal auditory canal: Normal.

LEFT:
[same format — mirror of above]

IMPRESSION
Normal HRCT of temporal bones bilaterally.`},cs:{label:"HRCT pyramid",evidence:"Mafee et al. CT spánkových kostí; systematický přístup Swartz 2001",criticalFindings:["Přerušení ossikulárního řetězce","Labyrintová fistula","Cholesteatom","Eroze canalis nervi facialis"],searchEvidence:"Povinné oboustranné hodnocení. Vždy porovnávat obě strany. Hodnotit každou strukturu v pořadí: zevní zvukovod, bubínek, kůstky, labyrint, mastoid, facialis kanál, vnitřní zvukovod.",searchMismatch:"Náhodné prohledávání pyramid. Musí být systematické: ZZ → bubínek → kůstky → labyrint → mastoid → facialis → VZ. Oboustranné srovnání při každém kroku.",searchPattern:[{step:1,priority:"critical",title:"Ossikulární řetězec — obě strany",detail:"Malleus, incus, stapes. Kontinuita, poloha, eroze. Porovnat symetrii.",time:"30s"},{step:2,priority:"critical",title:"Měkkotkáňová denzita — cholesteatom?",detail:"Měkká tkáň v Prussackově prostoru, epitympanu, antru = cholesteatom, dokud není vyloučen. Kostní eroze potvrzuje.",time:"20s"},{step:3,priority:"high",title:"Labyrint — cochlea, vestibulum, PKK",detail:"Otoskleróza (hypodenzita ve fissula ante fenestram). Labyrintová fistula.",time:"20s"},{step:4,priority:"high",title:"Mastoidální pneumatizace",detail:"Dobře pneumatizovaný vs sklerotický vs vyplněný. Tekutina vs měkká tkáň.",time:"15s"},{step:5,priority:"normal",title:"Facialis kanál + VZ + cévní",detail:"Integrita facialis kanálu. Symetrie vnitřních zvukovodů. Karotický kanál, bulbus jugularis.",time:"15s"}],template:`HRCT PYRAMID
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno nativně, v rozsahu skalních kostí.

NÁLEZ vpravo:
Zevní zvukovod: V normě.
Scutum: V normě.
Membrana tympani: V normě.
Epitympanum: V normě.
Mezotympanum: V normě.
Hypotympanum: V normě.
Sluchové kůstky: V normě.
Kostěnný labyrint (cochlea, vestibulum, polokruhovité kanálky): V normě.
Okénka (oválné, kulaté): V normě. Oblast fissula ante fenestram: V normě.
Mastoidální sklípky: V normě, vzdušné.
Canalis nervi facialis: V normě.
Canalis caroticus, bulbus jugularis: V normě.
Vnitřní zvukovod: V normě.

NÁLEZ vlevo:
Zevní zvukovod: V normě.
Scutum: V normě.
Membrana tympani: V normě.
Epitympanum: V normě.
Mezotympanum: V normě.
Hypotympanum: V normě.
Sluchové kůstky: V normě.
Kostěnný labyrint (cochlea, vestibulum, polokruhovité kanálky): V normě.
Okénka (oválné, kulaté): V normě. Oblast fissula ante fenestram: V normě.
Mastoidální sklípky: V normě, vzdušné.
Canalis nervi facialis: V normě.
Canalis caroticus, bulbus jugularis: V normě.
Vnitřní zvukovod: V normě.

ZÁVĚR
Přiměřený nativní CT nález obou pyramid.`}},{id:"ct_vdn",category:"routine_neuro",en:{label:"CT Paranasal Sinuses (CT VDN)",evidence:"EPOS 2020 rhinosinusitis guidelines; ACR sinus CT protocol",criticalFindings:["Orbital cellulitis / abscess","Intracranial extension","Erosion of sinus walls","Suspected malignancy"],searchEvidence:"Review in bone and soft tissue windows. Check ostiomeatal complex first — obstructed OMC explains downstream pathology. Always review orbits and skull base.",searchMismatch:"Sinus-by-sinus description without assessing OMC. The ostiomeatal complex drives most rhinosinusitis — assess it first, then individual sinuses.",searchPattern:[{step:1,priority:"critical",title:"Orbit + Skull Base — Complications",detail:"Orbital periostitis, subperiosteal abscess. Anterior skull base erosion. Intracranial extension.",time:"20s"},{step:2,priority:"high",title:"Ostiomeatal Complex Bilaterally",detail:"Infundibulum, hiatus semilunaris, middle meatus, uncinate process. Obstruction = downstream disease.",time:"20s"},{step:3,priority:"high",title:"Maxillary Sinuses",detail:"Mucosal thickening (any), fluid level, opacification, polyps, retention cysts.",time:"15s"},{step:4,priority:"high",title:"Ethmoid + Sphenoid + Frontal",detail:"Posterior ethmoids — closest to orbit and brain. Sphenoid — adjacent to optic nerve and cavernous sinus.",time:"20s"},{step:5,priority:"normal",title:"Nasal Septum + Turbinates",detail:"Deviation, hypertrophy, concha bullosa (variant that can obstruct OMC).",time:"10s"}],template:`CT PARANASAL SINUSES (CT VDN)
Indication: [___]
Previous: [___]
Technique: Non-contrast CT, paranasal sinuses.

FINDINGS
Nasal cavity: Symmetric nasal passages. Septum midline [/ deviated ___].
Inferior and middle turbinates: Normal. [Right middle turbinate — concha bullosa]
Ostiomeatal complex: Patent bilaterally.
Maxillary sinuses: Aerated, normal mucosal lining bilaterally.
Ethmoid sinuses: Aerated, normal bilaterally.
Frontal sinuses: Aerated. [Left frontal hypoplastic / right not developed — variant]
Sphenoid sinuses: Aerated. Lateral recesses: Normal.
Mastoid cells: Aerated.
Orbits: Normal bilaterally.
Skull base: Intact.
Brain (partially imaged): No obvious pathology.

IMPRESSION
Normal CT of paranasal sinuses.`},cs:{label:"CT vedlejších dutin nosních (CT VDN)",evidence:"Doporučení EPOS 2020 pro rinosinusitidu; protokol ACR pro CT dutin",criticalFindings:["Orbitocelulitida / absces","Intrakraniální šíření","Eroze stěny dutiny","Podezření na malignitu"],searchEvidence:"Hodnocení v kostním i měkkotkáňovém okně. Nejdříve ostiomeatální komplex — obstrukce OMC vysvětluje distální patologii. Vždy zkontrolovat orbity a spodinu lební.",searchMismatch:"Popis dutiny po dutině bez hodnocení OMC. Ostiomeatální komplex je klíčový pro většinu rinosinusitid — hodnotit jako první, pak jednotlivé dutiny.",searchPattern:[{step:1,priority:"critical",title:"Orbita + spodina lební — komplikace",detail:"Orbitální periostitis, subperiostální absces. Eroze přední spodiny lební. Intrakraniální šíření.",time:"20s"},{step:2,priority:"high",title:"Ostiomeatální komplex oboustranně",detail:"Infundibulum, hiatus semilunaris, střední průduch, uncus. Obstrukce = distální postižení.",time:"20s"},{step:3,priority:"high",title:"Maxilární dutiny",detail:"Slizniční změny, hladinka, opacifikace, polypy, retrakční cysty.",time:"15s"},{step:4,priority:"high",title:"Etmoidy + sfenoid + frontální dutiny",detail:"Zadní etmoidy — nejblíže orbita a mozek. Sfenoid — sousedí s n. opticus a kavernózním splav.",time:"20s"},{step:5,priority:"normal",title:"Nosní přepážka + konchy",detail:"Deviace, hypertrofie, concha bullosa (varianta blokující OMC).",time:"10s"}],template:`CT VEDLEJŠÍCH DUTIN NOSNÍCH
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetřeno nativně.

NÁLEZ
Nosní průduchy: Relativně symetrické. Nosní přepážka bez deviace [/ deviována ___].
Dolní a střední skořepy: Normálně konfigurovány s přiměřeným slizničním lemem.
Ostiomeatální jednotka: Volná bilaterálně.
Maxilární dutiny: Vzdušné, slizniční lem přiměřený bilat.
Ethmoidální sklípky: Vzdušné, bez patologie bilat.
Frontální dutiny: Vzdušné. [Hypoplazie front. sinu vlevo / vpravo nevyvínut — varianta]
Sfenoidální dutiny: Vzdušné. Laterální recessy vyvinuty.
Mastoidální sklípky: Vzdušné.
Orbity: Normální bilaterálně.
Spodina lební: Intaktní.
Zobrazený mozkový parenchym: Přiměřený.

ZÁVĚR
Normální nález na CT vedlejších dutin nosních.`}},{id:"ct_ag_plicnice",category:"routine_chest",en:{label:"CT Pulmonary Angiography (CT-PA)",evidence:"ESC PE Guidelines 2019; PIOPED II 2006; Qanadli obstruction index",criticalFindings:["Saddle embolus","RV/LV ratio >1","Haemodynamic compromise","Pulmonary infarction"],searchEvidence:"PIOPED II: CT-PA sensitivity 83%, specificity 96%. Always assess RV/LV ratio immediately after PE confirmation — this determines risk stratification.",searchMismatch:"Reporting PE then moving to incidentals. Critical error: RV/LV ratio must be the second thing after PE confirmation — it determines immediate management.",searchPattern:[{step:1,priority:"critical",title:"Pulmonary Arteries — Systematic",detail:"Main → lobar → segmental → subsegmental. Note most proximal level of filling defect.",time:"60s"},{step:2,priority:"critical",title:"RV Strain — Immediately After PE Confirmed",detail:"RV/LV ratio at widest point on axial. >1.0 = dilation. IVS bowing left. Right heart thrombus.",time:"30s"},{step:3,priority:"high",title:"Pulmonary Infarction",detail:"Hampton's hump (peripheral wedge consolidation). Ipsilateral pleural effusion.",time:"15s"},{step:4,priority:"normal",title:"Lung Parenchyma + Incidentals",detail:"Nodules (Fleischner), consolidation. Mediastinal nodes.",time:"30s"}],template:`CT PULMONARY ANGIOGRAPHY — CT-PA
Indication: [suspected PE / Wells score ___ / D-dimer ___]
Previous: [___]
Technique: CTA (bolus tracking), IV contrast ___ ml, no adverse reaction.

PULMONARY ARTERIES
Pulmonary embolism: Not demonstrated.
Main pulmonary artery: Patent. Width: ___ mm.
Right pulmonary artery: Patent.
Left pulmonary artery: Patent.
Lobar arteries: Patent bilaterally.
Segmental / subsegmental: Patent bilaterally.

CARDIAC / RV STRAIN
RV: ___ mm  LV: ___ mm  RV/LV ratio: ___ (normal <1.0)
IVS bowing: No.
Right heart thrombus: Not demonstrated.
IVC / hepatic vein reflux: No.

AORTA: Normal, no dilatation. Homogeneous opacification.
HEART: Normal.
PLEURA: No effusion.
LUNG: Expanded, no focal lesions or infiltration.
BRONCHI: Patent.
MEDIASTINUM: Normal configuration, no enlarged lymph nodes.
SKELETON: No pathological lesions.
INCIDENTAL (epigastrium): [Normal / ___]

IMPRESSION
Pulmonary embolism not demonstrated.
No signs of right heart strain.`},cs:{label:"CT AG plicnice (CT-PA)",evidence:"Guidelines ESC pro PE 2019; PIOPED II 2006; Qanadliho obstrukční index",criticalFindings:["Sedlová embolie","RV/LV ratio >1","Hemodynamický kompromis","Plicní infarkt"],searchEvidence:"PIOPED II: senzitivita CT-PA 83 %, specificita 96 %. Poměr RV/LV hodnotit okamžitě po potvrzení PE — určuje stratifikaci rizika.",searchMismatch:"Popis PE a pak vedlejší nálezy. Kritická chyba: poměr RV/LV musí být druhou věcí po potvrzení PE — určuje okamžitý management.",searchPattern:[{step:1,priority:"critical",title:"Plicní tepny — systematicky",detail:"Hlavní → lalokové → segmentární → subsegmentární. Zaznamenat nejproximalnejší úroveň výplňového defektu.",time:"60s"},{step:2,priority:"critical",title:"Přetížení PK — okamžitě po potvrzení PE",detail:"Poměr PK/LK v nejširším místě na axiálním řezu. >1,0 = dilatace. Vybočení septa vlevo. Trombus v pravém srdci.",time:"30s"},{step:3,priority:"high",title:"Plicní infarkt",detail:"Hamptonův hrb (periferní klínovitá konsolidace). Ipsilaterální pleurální výpotek.",time:"15s"},{step:4,priority:"normal",title:"Plicní parenchym + vedlejší nálezy",detail:"Uzliny (Fleischner), konsolidace. Mediastinální uzliny.",time:"30s"}],template:`CT HRUDNÍKU — CT AG PLICNICE
Klinické informace: [k vyloučení PE / Wellsovo skóre ___ / D-dimery ___]
Předchozí vyšetření: [___]
Vyšetření provedeno postkontrastně, bez reakce.
___ ml Iomeron 400 i.v., aplikace injektorem.

NÁLEZ
Plicní arterie: Plní homogenně v celém rozsahu, bez známek embolizace.
Kmen plicnice: šíře ___ mm.
Pravá plicní tepna: Průchodná.
Levá plicní tepna: Průchodná.
Lalokové větve: Průchodné bilaterálně.
Segmentární / subsegmentární: Průchodné bilaterálně.

Pravá komora: ___ mm  Levá komora: ___ mm  Poměr PK/LK: ___ (norma <1,0)
Vybočení mezikomorového septa vlevo: Ne.
Trombus v pravých srdečních oddílech: Nediferencuji.
Reflux k.l. do DDŽ/jaterních žil: Ne.

Aorta: Bez dilatace, má homogenní náplň.
Srdce: Normální.
Pleurální dutiny: Bez tekutiny.
Plíce: Rozepjaty, bez ložisek či infiltrace.
Bronchiální strom: Volný.
Mediastinum: Přiměřené konfigurace, bez zvětšených lymfatických uzlin.
Skelet: Bez patologických ložisek.
Zachycené epigastrium: [V normě / ___]

ZÁVĚR
Plicní embolie neprokázána.
Nepřímé známky přetížení pravé komory: Ne.`}},{id:"ct_hrudniku",category:"routine_chest",en:{label:"CT Chest (contrast)",evidence:"HRCT nomenclature Hansell 2008; Fleischner Society 2017 nodule guidelines; ACR chest CT protocol",criticalFindings:["Pulmonary mass","Mediastinal widening","Aortic pathology","Airway compromise"],searchEvidence:"Systematic chest CT review: lung windows first (parenchyma, nodules), then soft tissue windows (mediastinum, pleura), then bone windows (ribs, spine).",searchMismatch:"Soft tissue windows first. Lung windows must be reviewed first — mediastinal windows miss the majority of parenchymal pathology (nodules, early infiltrates, small effusions).",searchPattern:[{step:1,priority:"critical",title:"Lung Windows — Full Parenchyma",detail:"Upper, middle/lingula, lower. All five lobes. Nodules, consolidation, GGO, fibrosis.",time:"45s"},{step:2,priority:"critical",title:"Soft Tissue — Mediastinum + Pleura",detail:"Nodes (SA >10mm), masses, aorta, heart, pleural effusion.",time:"30s"},{step:3,priority:"high",title:"Airways",detail:"Trachea, main bronchi, lobar bronchi. Endobronchial lesions, mucus plugging.",time:"15s"},{step:4,priority:"normal",title:"Bone Windows",detail:"Ribs, sternum, thoracic spine, shoulder girdle. Metastases, fractures.",time:"20s"}],template:`CT CHEST
Indication: [___]
Previous: [___]
Technique: Portal venous phase, IV contrast ___ ml, no adverse reaction.

FINDINGS
Pulmonary parenchyma: Normal.
Pleural cavities: No effusion.
Airways: Patent trachea and bronchi.
Mediastinum: Normal configuration, no enlarged lymph nodes.
Thoracic aorta and pulmonary trunk: Normal.
Heart: Normal size and configuration.
Pericardium: No effusion.
Chest wall: Normal.
Skeleton: No pathological lesions.
Other:
Partially imaged epigastrium: [Normal / ___]

IMPRESSION
Normal chest CT.`},cs:{label:"CT hrudníku",evidence:"Nomenklatura HRCT Hansell 2008; doporučení Fleischner Society 2017 pro uzliny; protokol ACR pro CT hrudníku",criticalFindings:["Plicní masa","Rozšíření mediastina","Patologie aorty","Kompromitace dýchacích cest"],searchEvidence:"Systematické hodnocení CT hrudníku: nejdříve plicní okna (parenchym, uzliny), pak měkkotkáňová okna (mediastinum, pleura), pak kostní okna (žebra, páteř).",searchMismatch:"Měkkotkáňová okna jako první. Plicní okna musí být hodnocena jako první — měkkotkáňová okna nepodchytí většinu parenchymové patologie (uzliny, časné infiltráty, malé výpotky).",searchPattern:[{step:1,priority:"critical",title:"Plicní okna — celý parenchym",detail:"Horní, střední/lingula, dolní. Všechny pět laloků. Uzliny, konsolidace, GGO, fibróza.",time:"45s"},{step:2,priority:"critical",title:"Měkká tkáň — mediastinum + pleura",detail:"Uzliny (KO >10 mm), masy, aorta, srdce, pleurální výpotek.",time:"30s"},{step:3,priority:"high",title:"Dýchací cesty",detail:"Trachea, hlavní bronchy, lalokové bronchy. Endobronchiální léze, hlenové zátky.",time:"15s"},{step:4,priority:"normal",title:"Kostní okna",detail:"Žebra, sternum, hrudní páteř, pletence ramenní. Metastázy, zlomeniny.",time:"20s"}],template:`CT HRUDNÍKU
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno postkontrastně, bez reakce.
___ ml Iomeron 400 i.v., aplikace injektorem.

NÁLEZ
Plicní parenchym: V normě.
Pleurální dutiny: Bez tekutiny.
Bronchiální strom: Volný.
Mediastinum: Přiměřené konfigurace, bez zvětšených lymfatických uzlin.
Hrudní aorta a kmen plicnice: Normální.
Srdce: Normální velikosti a konfigurace.
Perikard: Bez tekutiny.
Hrudní stěna: V normě.
Skelet: Bez patologických ložisek.
Jiné: ___
Zachycené epigastrium: [V normě / ___]

ZÁVĚR
Přiměřený nález na CT hrudníku.`}},{id:"cta_aorty",category:"routine_vascular",en:{label:"CTA Aorta (thoracic + abdominal)",evidence:"ESC Aortic Guidelines 2023; Stanford/DeBakey classification; SVS aortic reporting standards",criticalFindings:["Aortic dissection","Aneurysm at surgical threshold","Rupture signs","Malperfusion"],searchEvidence:"ESC 2023: measure perpendicular to centreline, outer-to-outer. ECG-gating reduces pulsation artefact for ascending aorta. Document measurements at standardised landmarks.",searchMismatch:"Axial diameter only. Must measure perpendicular to centreline at standardised positions. Axial measurement overestimates tortuous aorta by 5-8mm.",searchPattern:[{step:1,priority:"critical",title:"Dissection — Intimal Flap",detail:"Ascending first (Type A = surgical emergency). Then descending. Any flap = dissection.",time:"20s"},{step:2,priority:"critical",title:"Rupture Signs",detail:"Periaortic haematoma, haemothorax, haemopericardium, draped aorta sign.",time:"15s"},{step:3,priority:"critical",title:"Standardised Measurements",detail:"Sinuses of Valsalva, STJ, mid-ascending, arch, descending T4/T8/T12, abdominal.",time:"45s"},{step:4,priority:"high",title:"Branch Vessel Origins",detail:"Arch vessels, coeliac, SMA, renal arteries, iliacs. Stenosis, occlusion.",time:"30s"},{step:5,priority:"normal",title:"Mural Thrombus + Calcification",detail:"Extent, thickness. Wall integrity.",time:"15s"}],template:`CTA AORTA (THORACIC + ABDOMINAL)
Indication: [___]
Previous: [___]
Technique: Non-contrast + arterial phase (ECG-gated), IV contrast ___ ml.

AORTA — DISSECTION
Intimal flap: Not demonstrated.
Type A / Type B: Not applicable.

MEASUREMENTS (perpendicular to centreline, outer-to-outer)
Sinuses of Valsalva: ___ mm
Sinotubular junction: ___ mm
Mid-ascending (at PA level): ___ mm
Aortic arch: ___ mm
Proximal descending: ___ mm
Mid-descending (T8): ___ mm
At diaphragm: ___ mm
Abdominal (at coeliac): ___ mm
Abdominal (at renal): ___ mm
Bifurcation: ___ mm

AORTIC VALVE: Tricuspid / Bicuspid — cusps: normal / calcified.

BRANCH VESSELS
Arch: Brachiocephalic / LCCA / LSA — normal origin, patent.
Coeliac trunk: Patent, normal origin.
SMA: Patent, normal origin.
Right renal artery: Patent.  Left renal artery: Patent.
Right iliac: Normal.  Left iliac: Normal.

MURAL CHANGES
Atheromatous plaques: Absent / Present — [severity, location]
Mural thrombus: Absent / Present — [thickness, location]

LUNG (partially imaged): Normal.
PERICARDIUM: Normal.
ABDOMINAL ORGANS: Normal (arterial phase).

IMPRESSION
No aortic dissection.
Aortic measurements within normal limits.
Atherosclerotic disease: [none / mild / moderate / severe].`},cs:{label:"CTA aorty (hrudní + břišní)",evidence:"Guidelines ESC pro aortu 2023; Stanfordská/DeBakeyho klasifikace; SVS standardy hlášení aorty",criticalFindings:["Disekce aorty","Aneuryzma na operačním prahu","Příznaky ruptury","Malperúze"],searchEvidence:"ESC 2023: měřit kolmo na osu aorty, zevní stěna k zevní stěně. EKG-gating snižuje artefakt pulsace u vzestupné aorty. Dokumentovat měření na standardizovaných landmarcích.",searchMismatch:"Pouze axiální průměr. Nutno měřit kolmo na osu na standardizovaných pozicích. Axiální měření nadhodnocuje tortuózní aortu o 5–8 mm.",searchPattern:[{step:1,priority:"critical",title:"Disekce — intimální chlopeň",detail:"Nejdříve vzestupná (typ A = kardiochirurgická emergentní situace). Pak sestupná. Jakákoli chlopeň = disekce.",time:"20s"},{step:2,priority:"critical",title:"Příznaky ruptury",detail:"Periortální hematom, hemotorax, hemoperikard, příznak draped aorta.",time:"15s"},{step:3,priority:"critical",title:"Standardizovaná měření",detail:"Sinus aorty, STJ, vzestupná (u plicnice), oblouk, sestupná Th4/Th8/Th12, abdominální.",time:"45s"},{step:4,priority:"high",title:"Odstupy větevních cév",detail:"Tepny oblouku, truncus coeliacus, AMS, renální tepny, ilické tepny. Stenóza, okluze.",time:"30s"},{step:5,priority:"normal",title:"Nástěnný trombus + kalcifikace",detail:"Rozsah, tloušťka. Integrita stěny.",time:"15s"}],template:`CTA AORTY
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno nativně a postkontrastně v arteriální fázi (EKG-gated).
I.v. KL Iomeron 400, aplikováno ___ ml, bez reakce.

NÁLEZ

Disekce aorty: Nediferencuji.
Typ A / typ B: Netýká se.

Měření (kolmo na osu, zevní stěna—zevní stěna)
Sinus aorty: ___ mm
Sinotubulární přechod: ___ mm
Vzestupná aorta (u plicnice): ___ mm
Aortální oblouk: ___ mm
Proximální sestupná: ___ mm
Střední sestupná (Th8): ___ mm
Na bránici: ___ mm
Abdominální (u truncu): ___ mm
Abdominální (u renálních tepen): ___ mm
Bifurkace: ___ mm

Aortální chlopeň: 3 cípá / Bikuspidální — cípy: jemné / kalcifikace.

Odstupy tepen:
Aortální oblouk: Tr. brachiocephalicus / ACI l.sin. / A. subclavia l.sin. — typické, volné.
Truncus coeliacus: Průchodný, normální odstup.
A. mesenterica sup.: Průchodná, normální odstup.
Pravá renální tepna: Průchodná. Levá renální tepna: Průchodná.
Pánevní tepny: Normální bilaterálně.

Nástěnné změny:
Aterosklerotické pláty: Bez pátů / Pláty — [závažnost, lokalizace]
Nástěnný trombus: Nepřítomen / Přítomen — [tloušťka, lokalizace]

Zachycený plicní parenchym: V normě.
Perikard: V normě.
Zachycené orgány dutiny břišní: V normě (arteriální fáze).

ZÁVĚR
Disekci aorty nediferencuji.
Měření aorty v mezích normy.
Aterosklerotické změny: [bez / mírné / střední / pokročilé].`}},{id:"ct_ag_dkk",category:"routine_vascular",en:{label:"CTA Lower Limb Arteries",evidence:"ESVS peripheral arterial disease guidelines 2017; TASC II classification; Fontaine/Rutherford staging",criticalFindings:["Acute occlusion","Critical limb ischaemia — no distal run-off","Aneurysm","Pseudo-aneurysm"],searchEvidence:"Bilateral lower limb CTA: assess aorta to pedal vessels. Systematic proximal-to-distal, bilateral comparison at each level.",searchMismatch:"Reporting unilateral only. Lower limb disease is bilateral in majority — systematic bilateral comparison at each segment is mandatory.",searchPattern:[{step:1,priority:"critical",title:"Acute Occlusion — Any Segment",detail:"Abrupt cut-off, no collaterals, surrounding soft tissue oedema = acute. Alter management urgency.",time:"20s"},{step:2,priority:"high",title:"Aorta + Iliac Arteries Bilateral",detail:"Aortic bifurcation, common iliacs, internal iliacs, external iliacs. TASC A-D lesions.",time:"30s"},{step:3,priority:"high",title:"Femoral Arteries Bilateral",detail:"CFA, SFA (Hunter's canal — most common occlusion site), deep femoral.",time:"30s"},{step:4,priority:"high",title:"Popliteal + Trifurcation",detail:"Popliteal aneurysm? Tibio-peroneal trunk, anterior tibial, posterior tibial, peroneal.",time:"30s"},{step:5,priority:"normal",title:"Runoff Vessels + Collaterals",detail:"Distal vessel quality for bypass planning. Collateral pathways.",time:"20s"}],template:`CTA LOWER LIMB ARTERIES
Indication: [___]
Previous: [___]
Technique: CTA from abdominal aorta to feet, IV contrast ___ ml.

AORTA (distal): Normal. No significant stenosis.
Aortic bifurcation: Normal.

RIGHT SIDE:
Common iliac artery: Patent, no significant stenosis.
Internal iliac artery: Patent.
External iliac artery: Patent.
Common femoral artery: Patent.
Superficial femoral artery: Patent along its entire length.
Deep femoral artery: Patent.
Popliteal artery: Patent, no aneurysm.
Tibioperoneal trunk: Patent.
Anterior tibial artery: Patent.
Posterior tibial artery: Patent.
Peroneal artery: Patent.

LEFT SIDE:
Common iliac artery: Patent, no significant stenosis.
Internal iliac artery: Patent.
External iliac artery: Patent.
Common femoral artery: Patent.
Superficial femoral artery: Patent along its entire length.
Deep femoral artery: Patent.
Popliteal artery: Patent, no aneurysm.
Tibioperoneal trunk: Patent.
Anterior tibial artery: Patent.
Posterior tibial artery: Patent.
Peroneal artery: Patent.

OTHER: Atherosclerotic changes: None / Mild / Moderate [locations ___]

IMPRESSION
Patent lower limb arteries bilaterally, no significant stenosis.`},cs:{label:"CT AG dolních končetin",evidence:"Guidelines ESVS pro periferní arteriální onemocnění 2017; klasifikace TASC II; stagingové systémy Fontaine/Rutherford",criticalFindings:["Akutní okluze","Kritická ischémie — bez distálního odtoku","Aneuryzma","Pseudoaneuryzma"],searchEvidence:"CTA DKK bilaterálně: hodnotit od aorty po pedální cévy. Systematicky proximodistálně, bilaterální porovnání na každé úrovni.",searchMismatch:"Popis pouze jedné strany. Onemocnění DKK je v majoritě bilaterální — systematické bilaterální srovnání na každém segmentu je povinné.",searchPattern:[{step:1,priority:"critical",title:"Akutní okluze — jakýkoli segment",detail:"Náhlé ukončení náplně, bez kolaterál, edém okolních tkání = akutní. Mění naléhavost managementu.",time:"20s"},{step:2,priority:"high",title:"Aorta + ilické tepny bilat.",detail:"Bifurkace aorty, AIC, AII, AIE. Léze TASC A–D.",time:"30s"},{step:3,priority:"high",title:"Femorální tepny bilat.",detail:"AFC, AFS (Hunterův kanál — nejčastější místo okluze), AHP.",time:"30s"},{step:4,priority:"high",title:"Zákolenní tepna + trifurkace",detail:"Aneuryzma zákolenní tepny? Tr. tibioperoneus, přední/zadní tibiální tepna, peroneální tepna.",time:"30s"},{step:5,priority:"normal",title:"Výtokové cévy + kolaterály",detail:"Kvalita distálních cév pro bypass. Kolaterální dráhy.",time:"20s"}],template:`CT AG DOLNÍCH KONČETIN
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno postkontrastně po i.v. aplikaci ___ ml Iomeronu 400, bez nežádoucí reakce.

NÁLEZ
Aorta distální: Normální. Bez significant stenózy.
Bifurkace aorty: Normální.

VPRAVO:
A. iliaca communis: Průchodná, bez significant stenózy.
A. iliaca interna: Průchodná.
A. iliaca externa: Průchodná.
A. femoralis communis: Průchodná.
A. femoralis superficialis: Průchodná v celém průběhu.
A. femoralis profunda: Průchodná.
A. poplitea: Průchodná, bez aneuryzmatu.
Truncus tibioperoneus: Průchodný.
A. tibialis anterior: Průchodná.
A. tibialis posterior: Průchodná.
A. peronea: Průchodná.

VLEVO:
A. iliaca communis: Průchodná, bez significant stenózy.
A. iliaca interna: Průchodná.
A. iliaca externa: Průchodná.
A. femoralis communis: Průchodná.
A. femoralis superficialis: Průchodná v celém průběhu.
A. femoralis profunda: Průchodná.
A. poplitea: Průchodná, bez aneuryzmatu.
Truncus tibioperoneus: Průchodný.
A. tibialis anterior: Průchodná.
A. tibialis posterior: Průchodná.
A. peronea: Průchodná.

JINÉ: Aterosklerotické změny: Bez / Mírné / Střední [lokalizace ___]

ZÁVĚR
Tepny dolních končetin průchodné bilaterálně, bez significant stenózy.`}},{id:"ct_ag_panve",category:"routine_vascular",en:{label:"CTA Pelvis / Inguinal Region",evidence:"ESVS PAD guidelines 2017; pre-operative vascular mapping",criticalFindings:["Iliac occlusion","Pelvic mass displacing vessels","Haemorrhage","Pseudoaneurysm"],searchEvidence:"Pelvic CTA: assess iliac vessels, inguinal region, identify collateral pathways. Review soft tissues for compressive pathology.",searchMismatch:"Vessel-only assessment. Soft tissues must be reviewed — pelvic masses, lymph nodes, and post-operative changes frequently explain vascular findings.",searchPattern:[{step:1,priority:"critical",title:"Acute Changes — Haemorrhage / Thrombosis",detail:"Active extravasation, acute thrombus, pseudoaneurysm.",time:"20s"},{step:2,priority:"high",title:"Iliac Arteries Bilateral",detail:"AIC, AIE, AII — patency, stenosis severity, calcification, aneurysm.",time:"30s"},{step:3,priority:"high",title:"Inguinal Region",detail:"Femoral vessels. Lymph nodes. Post-operative changes, collections.",time:"20s"},{step:4,priority:"normal",title:"Soft Tissues + Pelvis",detail:"Pelvic organs, lymph nodes, bone.",time:"20s"}],template:`CTA PELVIS AND INGUINAL REGION
Indication: [___]
Previous: [___]
Technique: Arterial phase CTA, IV contrast ___ ml.

AORTA (distal abdominal): Normal.
Aortic bifurcation: Normal.

RIGHT:
Common iliac: Patent. [Width ___ mm]
Internal iliac: Patent.
External iliac: Patent.
Common femoral: Patent. [Width ___ mm]
Inguinal region: No abnormal collection, no lymphadenopathy.

LEFT:
Common iliac: Patent. [Width ___ mm]
Internal iliac: Patent.
External iliac: Patent.
Common femoral: Patent. [Width ___ mm]
Inguinal region: No abnormal collection, no lymphadenopathy.

SOFT TISSUES: Normal.
PELVIC ORGANS: Normal (arterial phase).
LYMPH NODES: Not enlarged.
SKELETON: No pathological lesions.

IMPRESSION
Patent pelvic and femoral arteries bilaterally.
No vascular complications demonstrated.`},cs:{label:"CT AG pánve a třísel",evidence:"Guidelines ESVS pro PAD 2017; předoperační cévní mapování",criticalFindings:["Okluze ilické tepny","Pánevní masa stlačující cévy","Krvácení","Pseudoaneuryzma"],searchEvidence:"CTA pánve: hodnotit ilické cévy, třísla, identifikovat kolaterální dráhy. Přehled měkkých tkání pro kompresivní patologii.",searchMismatch:"Hodnocení pouze cév. Měkké tkáně musí být hodnoceny — pánevní masy, uzliny a pooperační změny často vysvětlují cévní nálezy.",searchPattern:[{step:1,priority:"critical",title:"Akutní změny — krvácení / trombóza",detail:"Aktivní extravazace, akutní trombus, pseudoaneuryzma.",time:"20s"},{step:2,priority:"high",title:"Ilické tepny bilaterálně",detail:"AIC, AIE, AII — průchodnost, stupeň stenózy, kalcifikace, aneuryzma.",time:"30s"},{step:3,priority:"high",title:"Třísla",detail:"Femorální cévy. Uzliny. Pooperační změny, kolekce.",time:"20s"},{step:4,priority:"normal",title:"Měkké tkáně + pánev",detail:"Pánevní orgány, uzliny, kosti.",time:"20s"}],template:`CT AG PÁNVE A TŘÍSEL
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetřeno v arteriální fázi po podání ___ ml kontrastní látky Iomeron 400.

NÁLEZ
Aorta distální: Normální.
Bifurkace aorty: Normální.

VPRAVO:
A. iliaca communis: Průchodná. [šíře ___ mm]
A. iliaca interna: Průchodná.
A. iliaca externa: Průchodná.
A. femoralis communis: Průchodná. [šíře ___ mm]
Oblast třísla: Bez patologické kolekce, bez lymfadenopatie.

VLEVO:
A. iliaca communis: Průchodná. [šíře ___ mm]
A. iliaca interna: Průchodná.
A. iliaca externa: Průchodná.
A. femoralis communis: Průchodná. [šíře ___ mm]
Oblast třísla: Bez patologické kolekce, bez lymfadenopatie.

Měkké tkáně: Normální.
Pánevní orgány: Normální (arteriální fáze).
Lymfatické uzliny: Nezvětšeny.
Skelet: Bez patologických ložisek.

ZÁVĚR
Tepny DKK průchodné bilaterálně, bez known stenózy.
Cévní komplikace nediferencuji.`}},{id:"ct_bricha_panve",category:"routine_abdominal",en:{label:"CT Abdomen + Pelvis",evidence:"ESGAR structured reporting 2016; ACR abdomen CT appropriateness",criticalFindings:["Free air","Active extravasation","Bowel obstruction","Acute organ ischaemia"],searchEvidence:"Systematic survey: liver → biliary → pancreas → spleen → adrenals → kidneys → bowel → vessels → nodes → skeleton. Lung windows mandatory for free air.",searchMismatch:"Soft tissue windows only throughout. Free air, pneumatosis, and portal gas require lung windows. Must be checked in every abdominal CT before finalising report.",searchPattern:[{step:1,priority:"critical",title:"Lung Windows — Free Air / Gas",detail:"Free intraperitoneal air, portal venous gas, pneumatosis intestinalis. Missed on soft tissue windows.",time:"15s"},{step:2,priority:"critical",title:"Vascular — Aorta, Mesenteric Vessels",detail:"Aortic diameter, SMA/SMV patency. Active extravasation (bright focus >90HU on arterial).",time:"20s"},{step:3,priority:"high",title:"Solid Organs — Liver + Pancreas First",detail:"Focal lesions, duct dilation, organ enlargement, enhancement pattern.",time:"45s"},{step:4,priority:"high",title:"Bowel + Peritoneum",detail:"Obstruction (transition point), wall thickening, free fluid, mesenteric changes.",time:"30s"},{step:5,priority:"normal",title:"Kidneys + Pelvis + Nodes + Bones",detail:"Hydronephrosis, pelvic organs, retroperitoneal nodes, bone lesions.",time:"30s"}],template:`CT ABDOMEN AND PELVIS
Indication: [___]
Previous: [___]
Technique: Portal venous phase [± oral contrast], IV contrast ___ ml, no adverse reaction.

FINDINGS
Liver: Normal parenchyma and enhancement. No focal lesions.
Biliary tract: CBD ___ mm (normal). No IHBD dilation. Gallbladder: [present, normal / post-cholecystectomy].
Portal vein: Patent.
Pancreas: Normal size, contour and enhancement. No ductal dilation.
Spleen: Normal.
Adrenal glands: Normal bilaterally.
Kidneys: Normal size, shape and enhancement bilaterally. No hydronephrosis. No calculi.
Urinary bladder: Normal, homogeneous content, smooth walls.
Bowel: No obstruction. No wall thickening. No free air.
Mesentery: Normal.
Peritoneal cavity: No free fluid or gas.
Vascular structures: Normal.
Lymph nodes:
  - Mesenteric: Not enlarged.
  - Retroperitoneal: Not enlarged.
  - Inguinal: Not enlarged.
Uterus / Prostate: Normal. [Prostate ___ mm]
Skeleton: No pathological lesions.
Other: ___
Partially imaged lung bases: [Normal / ___]

IMPRESSION
Normal CT of abdomen and pelvis.`},cs:{label:"CT břicha a pánve",evidence:"Strukturované hlášení ESGAR 2016; vhodnost CT břicha ACR",criticalFindings:["Volný vzduch","Aktivní extravazace","Ileus","Akutní ischémie orgánu"],searchEvidence:"Systematický přehled: játra → žluč → pankreas → slezina → nadledviny → ledviny → střevo → cévy → uzliny → skelet. Plicní okna jsou povinná pro volný vzduch.",searchMismatch:"Pouze měkkotkáňová okna. Volný vzduch, pneumatosis a plyn v portální žíle vyžadují plicní okna. Musí být zkontrolováno u každého CT břicha před finalizací protokolu.",searchPattern:[{step:1,priority:"critical",title:"Plicní okna — volný vzduch / plyn",detail:"Volný vzduch v dutině peritoneální, plyn v portální žíle, pneumatosis intestinalis. Na měkkotkáňových oknech přehlédnutelné.",time:"15s"},{step:2,priority:"critical",title:"Cévy — aorta, mezenteriální cévy",detail:"Průměr aorty, průchodnost AMS/VMH. Aktivní extravazace (jasná ložiska >90 HU v arteriální fázi).",time:"20s"},{step:3,priority:"high",title:"Parenchymatózní orgány — játra + pankreas nejdříve",detail:"Ložiskové léze, dilatace vývodu, zvětšení orgánu, vzorec sycení.",time:"45s"},{step:4,priority:"high",title:"Střevo + peritoneum",detail:"Ileus (přechodová zóna), ztluštění stěny, volná tekutina, mezenteriální změny.",time:"30s"},{step:5,priority:"normal",title:"Ledviny + pánev + uzliny + kosti",detail:"Hydronefróza, pánevní orgány, retroperitoneální uzliny, kostní léze.",time:"30s"}],template:`CT BŘICHA A PÁNVE
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno postkontrastně [± perorální kontrast], bez reakce.
___ ml Iomeron 400 i.v., aplikace injektorem.

NÁLEZ
Játra: V normě, homogenní parenchym. Bez ložiskových změn.
Žlučové cesty: D. choledochus šíře do ___ mm. Intrahepatální žlučovody nerozšířeny. Žlučník: [přiměřený / st.p. CHCE].
Porta: Normální.
Pankreas: Normální velikosti, kontury a sycení. Bez dilatace vývodu.
Slezina: Normální.
Nadledviny: Normální bilaterálně.
Ledviny: Normální tvaru a velikosti bilat. Bez hydronefrózy. Bez konkrementů.
Močový měchýř: Normální, homogenního obsahu, hladkých stěn.
Trávicí trubice: Bez průkazu obstrukce. Bez ztluštění stěny. Bez volného vzduchu.
Mezenterium: Normální.
Peritoneální dutina: Bez volné tekutiny ani vzduchu.
Cévní struktury: V normě.
Lymfatické uzliny:
  - Mezenteriální: Nezvětšeny.
  - Retroperitoneální: Nezvětšeny.
  - Tříselné: Nezvětšeny.
Děloha / Prostata: Normální. [Prostata ___ mm]
Skelet: Bez patologických ložisek.
Jiné: ___
Zachycené plicní baze: [V normě / ___]

ZÁVĚR
Přiměřený nález na CT břicha a pánve.`}},{id:"ct_ledvin_nativni",category:"routine_abdominal",en:{label:"CT Kidneys Native (urolithiasis / CT-KUB)",evidence:"EAU Urolithiasis Guidelines 2023; Smith 1995 unenhanced CT protocol; Brisbane 2016 HU stone composition",criticalFindings:["AAA mimicking colic","Infected obstructed kidney","High-grade obstruction","Urothelial mass"],searchEvidence:"Unenhanced CT: sensitivity 96%, specificity 98% (EAU 2023). Mandatory AAA exclusion in males >50. Trace full ureter — do not just search for stone.",searchMismatch:"Stone found → report written. Fatal error: finding the stone is step one only. Degree of obstruction, secondary signs, and AAA are missed when the search stops at the stone.",searchPattern:[{step:1,priority:"critical",title:"Aorta First — Exclude AAA",detail:"Before stone search: aortic diameter. >30mm = aneurysm. Periaortic haematoma = rupture. 10 seconds. Mandatory males >50.",time:"10s"},{step:2,priority:"critical",title:"Trace Full Ureter",detail:"PUJ → proximal → iliac crossing → distal → VUJ. Both sides.",time:"45s"},{step:3,priority:"critical",title:"Obstruction + Infected Kidney",detail:"Hydronephrosis grade. Perinephric stranding. Gas in collecting system = emphysematous pyelonephritis = emergency.",time:"20s"},{step:4,priority:"high",title:"Stone Characterisation",detail:"Size, HU (<500 = uric acid, dissolvable). Skin-to-stone distance. Passage probability.",time:"20s"},{step:5,priority:"normal",title:"Incidental Findings",detail:"Renal lesions (Bosniak), adrenal, bowel, spine.",time:"20s"}],template:`CT KUB — NON-CONTRAST (UROLITHIASIS)
Indication: [flank pain / suspected urolithiasis]
Previous: [___]
Technique: Non-contrast CT, low-dose protocol (EAU 2023).

AORTA [AAA exclusion — mandatory males >50]
Aortic diameter: ___ mm (normal <30mm). No periaortic haematoma.

RIGHT KIDNEY AND URETER
Kidney: Normal size and shape. No hydronephrosis.
Perinephric fat: No stranding.
Ureter: No calculi. No dilation.

LEFT KIDNEY AND URETER
Kidney: Normal size and shape. No hydronephrosis.
Perinephric fat: No stranding.
Ureter: No calculi. No dilation.

URINARY BLADDER: Normal. No calculi.

OTHER INCIDENTAL FINDINGS
Spine: [Normal / Degenerative changes]
Bowel: No obstruction.
Lymph nodes: Not enlarged.
Bone lesions: None.

IMPRESSION
No ureteric calculi demonstrated.
No hydronephrosis.
No signs of infected obstruction.`},cs:{label:"CT ledviny-močovody-měchýř nativně (urolitiáza)",evidence:"Guidelines EAU pro urolitiázu 2023; Smith 1995 nativní CT protokol; složení konkrementů dle HU Brisbane 2016",criticalFindings:["AAA napodobující koliku","Infikovaná obstruovaná ledvina","Vysokostupňová obstrukce","Urothelová masa"],searchEvidence:"Nativní CT: senzitivita 96 %, specificita 98 % (EAU 2023). Povinné vyloučení AAA u mužů >50 let. Sledovat celý průběh ureteru — nehledat jen konkrement.",searchMismatch:"Konkrement nalezen → protokol dopsán. Fatální chyba: nalezení konkrementu je jen první krok. Stupeň obstrukce, sekundární příznaky a AAA jsou přehlíženy, jakmile se systematika zastaví.",searchPattern:[{step:1,priority:"critical",title:"Nejdříve aorta — vyloučit AAA",detail:"Před hledáním konkrementu: průměr aorty. >30 mm = aneuryzma. Periortální hematom = ruptura. 10 sekund. Povinné u mužů >50 let.",time:"10s"},{step:2,priority:"critical",title:"Sledování celého průběhu ureteru",detail:"PUJ → proximální → přechod přes ilické cévy → distální → UVJ. Obě strany.",time:"45s"},{step:3,priority:"critical",title:"Obstrukce + infikovaná ledvina",detail:"Stupeň hydronefrózy. Infiltrace perirenálního tuku. Plyn v dutém systému = emfyzematózní pyelonefritida = emergentní situace.",time:"20s"},{step:4,priority:"high",title:"Charakteristika konkrementu",detail:"Velikost, HU (<500 = kyselina močová, rozpustitelná). Vzdálenost kůže–konkrement. Pravděpodobnost spontánního odchodu.",time:"20s"},{step:5,priority:"normal",title:"Vedlejší nálezy",detail:"Renální léze (Bosniakova klasifikace), nadledviny, střevo, páteř.",time:"20s"}],template:`CT LEDVINY-MOČOVODY-MĚCHÝŘ (NATIVNÍ — UROLITIÁZA)
Klinické informace: [bolest v boku / podezření na urolitiázu]
Předchozí vyšetření: [___]
Vyšetřeno nativně, low-dose technikou (EAU 2023).

NÁLEZ

Aorta [vyloučení AAA — povinné u mužů >50 let]
Průměr aorty: ___ mm (norma <30 mm). Periortální hematom: Nediferencuji.

Pravá ledvina a ureter
Ledvina: Normálního tvaru a velikosti. Bez hydronefrózy.
Perirenální tuk: Bez infiltrace.
Ureter: Konkrementy nediferencuji. Ureter nerozšířen.

Levá ledvina a ureter
Ledvina: Normálního tvaru a velikosti. Bez hydronefrózy.
Perirenální tuk: Bez infiltrace.
Ureter: Konkrementy nediferencuji. Ureter nerozšířen.

Močový měchýř: Normální. Konkrementy nediferencuji.

Doplňkový nález
Páteř: [V normě / Degenerativní změny]
Střevní pasáž: Bez obstrukce.
Lymfatické uzliny: Nezvětšeny.
Kostní léze: Nediferencuji.

ZÁVĚR
Ureterolitiázu nediferencuji.
Hydronefróza neprokázána.
Známky infekce obstruované ledviny nediferencuji.`}},{id:"ct_ls_patere",category:"routine_spine",en:{label:"CT Lumbar Spine",evidence:"NASS nomenclature 2014 (Fardon); Fardon 2014 disc pathology; Ulrich foraminal grading",criticalFindings:["Absolute central stenosis <10mm","Cauda equina syndrome signs","Fracture","Malignant lesion"],searchEvidence:"Bone windows first for fractures and metastases — then soft tissue windows for disc and canal. Fardon 2014 nomenclature mandatory for disc description.",searchMismatch:"Soft tissue windows only. Bone windows must be reviewed first in every lumbar spine CT — subtle lytic metastases and fractures are invisible on soft tissue windows.",searchPattern:[{step:1,priority:"critical",title:"Bone Windows — Fracture / Malignancy",detail:"All vertebral bodies, pedicles, posterior elements. Lytic/sclerotic lesions. Endplate erosion = discitis.",time:"30s"},{step:2,priority:"critical",title:"Central Canal — Symptomatic Level First",detail:"AP diameter. >12mm normal, 10-12mm relative, <10mm absolute stenosis.",time:"30s"},{step:3,priority:"high",title:"Disc Pathology — Fardon Nomenclature",detail:"Bulge (<25%), protrusion (base>apex), extrusion (apex>base). Direction: central/paracentral/foraminal.",time:"45s"},{step:4,priority:"high",title:"Foraminal Stenosis — Bilateral",detail:"Ulrich 0-3. Far lateral disc = same-level radiculopathy.",time:"30s"},{step:5,priority:"normal",title:"Alignment + Facet Joints",detail:"Spondylolisthesis, spondylolysis, facet arthrosis, ligamentum flavum hypertrophy.",time:"20s"}],template:`CT LUMBAR SPINE
Indication: [low back pain / radiculopathy level ___]
Previous: [___]
Technique: Non-contrast CT, axial + sagittal + coronal MPR.

ALIGNMENT
Lumbar lordosis: Normal [/ straightened].
No spondylolisthesis.
No scoliosis.

VERTEBRAL BODIES
Heights preserved. No compression fractures.
Endplates: Normal. No erosion.
Bone structure: Normal. No lytic or sclerotic lesions.

DISCS AND CANAL (L1/2 to L5/S1)
L1/2: Normal disc height. No herniation. Canal: ___ mm AP. Foramina: Free bilaterally.
L2/3: Normal disc height. No herniation. Canal: ___ mm AP. Foramina: Free bilaterally.
L3/4: Normal disc height. [Bulge ___ mm.] Canal: ___ mm AP. Foramina: Free bilaterally.
L4/5: Normal disc height. [Bulge ___ mm.] Canal: ___ mm AP. Foramina: Free bilaterally.
L5/S1: Normal disc height. [Osteochondrosis. Bulge/protrusion ___ mm.] Canal: ___ mm AP. Foramina: [Free / Narrowing ___].

FACET JOINTS: Normal bilaterally [/ arthrosis at ___].
LIGAMENTA FLAVA: Normal thickness [/ hypertrophy at ___].
SACROILIAC JOINTS: Normal [/ arthrosis bilaterally].
SOFT TISSUES: Normal.

IMPRESSION
[Age-appropriate degenerative changes / multilevel spondylosis].
Most significant level: [___]
Canal stenosis: None / Relative / Absolute at [___]
Note: CT underestimates ligamentous contribution — MRI if clinical-imaging mismatch.`},cs:{label:"CT LS páteře",evidence:"Nomenklatura NASS 2014 (Fardon); diskové patologie Fardon 2014; foraminální stenóza Ulrich",criticalFindings:["Absolutní stenóza kanálu <10 mm","Příznaky syndromu cauda equina","Zlomenina","Maligní léze"],searchEvidence:"Nejdříve kostní okna pro zlomeniny a metastázy — pak měkkotkáňová okna pro disk a kanál. Nomenklatura Fardon 2014 je závazná pro popis diskové patologie.",searchMismatch:"Pouze měkkotkáňová okna. Kostní okna musí být hodnocena jako první u každého CT páteře — subtilní lytické metastázy a zlomeniny jsou na měkkotkáňových oknech neviditelné.",searchPattern:[{step:1,priority:"critical",title:"Kostní okna — zlomenina / malignita",detail:"Všechna obratlová těla, pedikly, zadní elementy. Lytické/sklerotické léze. Eroze krycích ploch = spondylodiscitida.",time:"30s"},{step:2,priority:"critical",title:"Centrální kanál — klinicky symptomatická úroveň nejdříve",detail:"AP průměr. >12 mm normální, 10–12 mm relativní, <10 mm absolutní stenóza.",time:"30s"},{step:3,priority:"high",title:"Disková patologie — nomenklatura Fardon",detail:"Bulging (<25 %), protruze (baze>hrot), extruze (hrot>baze). Směr: centrálně/paracentralně/foraminálně.",time:"45s"},{step:4,priority:"high",title:"Foraminální stenóza — oboustranně",detail:"Ulrich 0–3. Extrémně laterální výhřez = radikulopatie stejné úrovně.",time:"30s"},{step:5,priority:"normal",title:"Osa + fazetové klouby",detail:"Anterolistéza, spondylolýza, artróza fazetových kloubů, hypertrofie ligg. flava.",time:"20s"}],template:`CT LS PÁTEŘE
Klinické informace: [bolesti zad / radikulopatie úrovně ___]
Předchozí vyšetření: [___]
Vyšetřeno nativně.

NÁLEZ
Bederní lordóza: Přiměřená [/ napřímená].
Anterolistéza: Nediferencuji.
Skolióza: Nediferencuji.

Obratlová těla:
Výšky zachovány. Bez kompresivních fraktur.
Krycí plochy: Normální. Bez eroze.
Kostní struktura: Normální. Bez lytických ani sklerotických ložisek.

Disky a kanál (L1/2 až L5/S1):
L1/2: Výška disku zachována. Hernii nediferencuji. Kanál: ___ mm AP. Foramina: Volná bilat.
L2/3: Výška disku zachována. Hernii nediferencuji. Kanál: ___ mm AP. Foramina: Volná bilat.
L3/4: Výška disku zachována. [Bulging do ___ mm.] Kanál: ___ mm AP. Foramina: Volná bilat.
L4/5: Výška disku zachována. [Bulging do ___ mm.] Kanál: ___ mm AP. Foramina: Volná bilat.
L5/S1: Výška disku zachována. [Osteochondróza. Protruze/bulging do ___ mm.] Kanál: ___ mm AP. Foramina: [Volná / Stenóza ___].

Fazetové klouby: Normální bilat. [/ Artróza v etáži ___].
Ligg. flava: Přiměřené tloušťky [/ Hypertrofie v ___].
Sakroiliakální skloubení: Normální [/ Artróza bilat.].
Měkké tkáně: V normě.

ZÁVĚR
[Věku přiměřené degenerativní změny / Multietážová osteochondróza se spondylózou].
Nejvýznamnější úroveň: [___]
Stenóza páteřního kanálu: Bez / Relativní / Absolutní v etáži [___]
Poznámka: CT podhodnocuje příspěvek vazivových struktur — MRI při klinicko-zobrazovacím nesouladu.`}},{id:"ct_c_patere",category:"routine_spine",en:{label:"CT Cervical Spine",evidence:"AO Spine subaxial classification 2015; NEXUS/Canadian C-Spine Rule; ATLS spinal clearance",criticalFindings:["C1/C2 fracture (dens fracture)","ADI widening >3mm","Foramen transversarium fracture","Cord compression signs"],searchEvidence:"Cervicothoracic junction (C7-T1) is the most commonly missed level. Bone windows mandatory. Foramen transversarium fracture = vertebral artery injury risk.",searchMismatch:"C1-T1 assessment on brain windows. Bone windows are mandatory for cervical spine CT. Brain/soft tissue windows miss nearly all cervical fractures.",searchPattern:[{step:1,priority:"critical",title:"Alignment — Sagittal Reconstructions",detail:"Lordosis, listhesis, facet alignment. From occiput to T1.",time:"30s"},{step:2,priority:"critical",title:"C1-C2 — Jefferson, Dens, Hangman",detail:"C1 ring, lateral masses. Dens axis — type I/II/III fracture. C2 pars fracture.",time:"30s"},{step:3,priority:"critical",title:"Foramen Transversarium",detail:"Fracture through foramen = vertebral artery injury risk → CTA.",time:"20s"},{step:4,priority:"high",title:"Subaxial C3-T1 — Each Level",detail:"Vertebral body, posterior elements, disc height, canal compromise.",time:"45s"},{step:5,priority:"normal",title:"Soft Tissue + Prevertebral",detail:"Prevertebral haematoma (AP measurement at each level).",time:"15s"}],template:`CT CERVICAL SPINE
Indication: [neck pain / trauma / myelopathy]
Previous: [___]
Technique: Non-contrast CT, axial + sagittal + coronal MPR.

ALIGNMENT
Cervical lordosis: Normal [/ straightened].
No anterolisthesis.
Atlantodental interval (ADI): ___ mm (normal ≤3mm).

C1 (Atlas): Normal ring. Lateral masses symmetric.
C2 (Axis): Dens intact, normal position. No pars fracture.
C3: Normal. No fracture.
C4: Normal. No fracture.
C5: Normal. No fracture.
C6: Normal. No fracture.
C7: Normal. No fracture.
Cervicothoracic junction (C7/T1): Normal.

CANAL: Not compromised at any level. AP diameter: ___ mm (normal >13mm).
FORAMINA TRANSVERSARIA: Intact bilaterally. No evidence of vertebral artery injury.

DISC HEIGHTS: Preserved. [Osteochondrosis C5/6, C6/7 — age-appropriate]
FACET JOINTS: Normal. [/ Uncovertebral arthrosis multilevel]
PREVERTEBRAL SOFT TISSUE: Normal.
SKELETON: No lytic or sclerotic lesions.

IMPRESSION
No acute fracture or dislocation.
[Age-appropriate degenerative changes, maximum at C5/6 and C6/7.]`},cs:{label:"CT C páteře",evidence:"AO Spine subaxiální klasifikace 2015; NEXUS/kanadská pravidla pro C páteř; páteřní clearance ATLS",criticalFindings:["Zlomenina C1/C2 (zlomenina zubu)","Rozšíření ADI >3 mm","Zlomenina foramen transversarium","Příznaky komprese míchy"],searchEvidence:"Přechod C7/T1 je nejčastěji přehlíženou úrovní. Kostní okna jsou povinná. Zlomenina foramen transversarium = riziko poranění arteria vertebralis.",searchMismatch:"Hodnocení C1–T1 v mozkových oknech. Kostní okna jsou povinná pro CT C páteře. Mozková/měkkotkáňová okna nepodchytí téměř žádné zlomeniny C páteře.",searchPattern:[{step:1,priority:"critical",title:"Osa — sagitální rekonstrukce",detail:"Lordóza, anterolistéza, fazetové klouby. Od okcipitu po T1.",time:"30s"},{step:2,priority:"critical",title:"C1–C2 — Jeffersonova zlomenina, zub, Hangman",detail:"Oblouk C1, laterální masy. Dens axis — typ I/II/III. Zlomenina pars interarticularis C2.",time:"30s"},{step:3,priority:"critical",title:"Foramen transversarium",detail:"Zlomenina procházející foramen = riziko poranění a. vertebralis → CTA.",time:"20s"},{step:4,priority:"high",title:"Subaxiální C3–T1 — každá úroveň",detail:"Obratlové tělo, zadní elementy, výška disku, kompromitace kanálu.",time:"45s"},{step:5,priority:"normal",title:"Měkké tkáně + prevertebrálně",detail:"Prevertebrální hematom (AP měření na každé úrovni).",time:"15s"}],template:`CT C PÁTEŘE
Klinické informace: [bolesti krku / trauma / myelopatie]
Předchozí vyšetření: [___]
Vyšetřeno nativně.

NÁLEZ
Krční lordóza: Přiměřená [/ napřímená].
Anterolistéza: Nediferencuji.
Atlantodentální interval (ADI): ___ mm (norma ≤3 mm).

C1 (atlas): Oblouk intaktní. Laterální masy symetrické.
C2 (axis): Dens axis intaktní, normální poloha. Bez zlomeniny pars interarticularis.
C3: V normě. Bez zlomeniny.
C4: V normě. Bez zlomeniny.
C5: V normě. Bez zlomeniny.
C6: V normě. Bez zlomeniny.
C7: V normě. Bez zlomeniny.
Cervikotorakální přechod (C7/T1): Normální.

Páteřní kanál: Bez kompromitace. AP průměr: ___ mm (norma >13 mm).
Foramina transversaria: Intaktní bilaterálně. Bez průkazu poranění a. vertebralis.

Výšky disků: Zachovány. [Osteochondróza C5/6, C6/7 — věku přiměřené]
Fazetové klouby: Normální. [/ Unkovertebrální artróza multietážově]
Prevertebrální měkké tkáně: Normální.
Skelet: Bez lytických ani sklerotických ložisek.

ZÁVĚR
Bez průkazu akutní zlomeniny ani dislokace.
[Věku přiměřené degenerativní změny, maximum v etážích C5/6 a C6/7.]`}},{id:"ct_celotelesne_myelom",category:"routine_onco",en:{label:"Whole-Body Low-Dose CT (Myeloma)",evidence:"IMWG 2019 whole-body CT guidelines; Hillengass 2019 WBLDCT vs PET; sensitivity for lytic lesions >5mm",criticalFindings:["Lytic lesions at surgical threshold","Vertebral compression fracture","Cord compression","Extramedullary plasmacytoma"],searchEvidence:"IMWG 2019: WBLDCT recommended over skeletal survey. Sensitivity for lytic lesions >5mm ~98%. Systematic bone-by-bone review mandatory. Soft tissue compartments for extramedullary disease.",searchMismatch:"Organ-based reporting from whole-body CT. WBLDCT must be reviewed bone-by-bone in bone windows — liver/spleen/lungs are secondary. The primary finding is the skeleton.",searchPattern:[{step:1,priority:"critical",title:"Skull + Cervical Spine",detail:"Calvarium, skull base, mandible. C1-T1. Lytic foci, dens fracture.",time:"30s"},{step:2,priority:"critical",title:"Thoracic Spine + Ribs + Sternum",detail:"T1-T12, posterior elements. All ribs bilaterally. Sternum. Compression fractures.",time:"45s"},{step:3,priority:"critical",title:"Lumbar Spine + Pelvis",detail:"L1-S5, sacrum, iliac wings, acetabula, pubic/ischial rami.",time:"30s"},{step:4,priority:"high",title:"Long Bones",detail:"Proximal femora, humeri. Cortical involvement — impending fracture risk.",time:"20s"},{step:5,priority:"normal",title:"Soft Tissues + Organs",detail:"Extramedullary plasmacytoma. Pneumonia, effusions (infection risk). Incidentals.",time:"30s"}],template:`WHOLE-BODY LOW-DOSE CT (MYELOMA)
Indication: [multiple myeloma / MGUS — staging / response / follow-up]
Previous: [___]
Technique: Non-contrast, low-dose whole-body CT.

SKELETON [primary assessment — bone windows]

SKULL: No lytic lesions. [Lytic foci: ___]
CERVICAL SPINE (C1-T1): Normal height and structure. No fractures. No lytic lesions.
THORACIC SPINE: [Normal height / Compression at ___]. No lytic lesions. [Lytic at ___]
RIBS: No lytic lesions bilaterally. [Lytic rib ___]
STERNUM: Normal. No lytic lesion.
CLAVICLES / SCAPULAE: Normal bilaterally.
LUMBAR SPINE: [Normal height / Compression at ___]. No lytic lesions.
PELVIS: No lytic lesions. Iliac wings, acetabula, pubic bones — intact.
SACRUM: Normal. No lytic lesions.
PROXIMAL FEMORA: Normal bilaterally. No cortical lesion.
PROXIMAL HUMERI: Normal bilaterally.

BONE STRUCTURE: [Diffusely heterogeneous, consistent with myeloma / Unremarkable]

SOFT TISSUES AND ORGANS
Lung bases: Normal. [/ Effusion ___]
Liver: Normal. Spleen: Normal.
Lymph nodes: Not enlarged.
Extramedullary disease: Not demonstrated. [/ Plasmacytoma ___]
Bowel (incidental): Normal. Abdominal aorta: Normal.
Other: ___

IMPRESSION
[No new lytic lesions compared to prior. / New lytic lesions at ___ — see description.]
[Compression fractures: stable / new at ___]
[Extramedullary disease: not demonstrated / present at ___]`},cs:{label:"Celotělové nízkodávkové CT (mnohočetný myelom)",evidence:"Doporučení IMWG 2019 pro celotělové CT; Hillengass 2019 WBLDCT vs PET; senzitivita pro lytická ložiska >5 mm",criticalFindings:["Lytická ložiska na operačním prahu","Kompresivní fraktura obratle","Komprese míchy","Extramedulární plazmocytom"],searchEvidence:"IMWG 2019: WBLDCT doporučeno před skeletálním přehledem. Senzitivita pro lytická ložiska >5 mm ~98 %. Povinné systematické hodnocení kost po kosti. Měkkotkáňové kompartmenty pro extramedulární postižení.",searchMismatch:"Orgánové hlášení z celotělového CT. WBLDCT musí být hodnoceno kost po kosti v kostním okně — játra/slezina/plíce jsou sekundární. Primárním nálezem je skelet.",searchPattern:[{step:1,priority:"critical",title:"Kalva + C páteř",detail:"Klenba, spodina lební, mandibula. C1–T1. Lytická ložiska, zlomenina zubu.",time:"30s"},{step:2,priority:"critical",title:"Hrudní páteř + žebra + sternum",detail:"Th1–Th12, zadní elementy. Všechna žebra bilaterálně. Sternum. Kompresivní fraktury.",time:"45s"},{step:3,priority:"critical",title:"Bederní páteř + pánev",detail:"L1–S5, sacrum, ilia, acetabula, stydké/sedací kosti.",time:"30s"},{step:4,priority:"high",title:"Dlouhé kosti",detail:"Proximální femury, humery. Kortikální postižení — riziko hrozící fraktury.",time:"20s"},{step:5,priority:"normal",title:"Měkké tkáně + orgány",detail:"Extramedulární plazmocytom. Pneumonie, výpotky (riziko infekce). Vedlejší nálezy.",time:"30s"}],template:`CELOTĚLOVÉ NÍZKODÁVKOVÉ CT
Předchozí vyšetření: [___]
Klinické informace: [Mnohočetný myelom / MGUS — staging / kontrola vývoje]
Vyšetřeno nativně, nízkodávkovou technikou.

NÁLEZ

Skelet [primární hodnocení — kostní okna]

Lebka: Bez osteolytických ložisek. [Lytická ložiska: ___]
Krční páteř (C1–T1): Přiměřená výška a struktura. Bez zlomenin. Bez lytických ložisek.
Hrudní páteř: [Normální výška / Komprese v etáži ___]. Bez lytických ložisek. [Lytické v ___]
Žebra: Bez lytických ložisek bilaterálně. [Lytické žebro ___]
Sternum: Normální. Bez lytického ložiska.
Klíční kosti / lopatky: Normální bilaterálně.
Bederní páteř: [Normální výška / Komprese v etáži ___]. Bez lytických ložisek.
Pánev: Bez lytických ložisek. Ilia, acetabula, stydké kosti — intaktní.
Sacrum: Normální. Bez lytických ložisek.
Proximální femury: Normální bilaterálně. Bez kortikálního postižení.
Proximální humery: Normální bilaterálně.

Kostní struktura: [Difuzně nehomogenní při postižení myelomem / Přiměřená]

Měkké tkáně a orgány
Plicní baze: V normě. [/ Výpotek ___]
Játra: Normální. Slezina: Normální.
Lymfatické uzliny: Nezvětšeny.
Extramedulární postižení: Nediferencuji. [/ Plazmocytom ___]
Střevo (incidentálně): Normální. Abdominální aorta: Normální.
Jiné: ___

ZÁVĚR
[V porovnání s předchozím vyšetřením bez nových lytických ložisek. / Nová lytická ložiska v oblasti ___ — viz popis.]
[Kompresivní fraktury: stacionární / nová v etáži ___]
[Extramedulární postižení: nediferencuji / přítomno v oblasti ___]`}},{id:"ct_krku",category:"routine_head_neck",en:{label:"CT Neck (with contrast)",evidence:"AHNS neck dissection classification; ACR neck CT protocol; EPOS neck mass guidelines",criticalFindings:["Airway compromise","Carotid encasement","Peritonsillar / parapharyngeal abscess","Malignant mass"],searchEvidence:"Systematic neck CT: pharynx first (airway), then lymph node chains, then salivary glands, thyroid, vessels. Bone windows for skull base and mandible.",searchMismatch:"Node-focused reporting misses the primary mucosal lesion. Always assess the pharyngeal mucosa first — the node tells you where to look but the primary is in the mucosa.",searchPattern:[{step:1,priority:"critical",title:"Airway — Patent?",detail:"Trachea, glottis, subglottis. Any extrinsic compression or intrinsic lesion narrowing airway.",time:"15s"},{step:2,priority:"critical",title:"Pharyngeal Mucosa — Primary",detail:"Nasopharynx, oropharynx, hypopharynx, larynx. Asymmetry, mass, submucosal thickening.",time:"30s"},{step:3,priority:"high",title:"Lymph Node Chains — Bilateral",detail:"Levels I-VI both sides. SA diameter ≥10mm or round = suspicious. Central necrosis = metastasis.",time:"45s"},{step:4,priority:"high",title:"Salivary Glands + Thyroid",detail:"Parotids, submandibular. Thyroid — nodules, enlargement.",time:"20s"},{step:5,priority:"normal",title:"Vascular + Skull Base + Bone",detail:"Carotids, IJV. Skull base erosion. Cervical spine.",time:"20s"}],template:`CT NECK (WITH CONTRAST)
Indication: [___]
Previous: [___]
Technique: Portal venous phase, IV contrast ___ ml.

FINDINGS
Nasopharynx: Normal.
Oropharynx: Normal.
Hypopharynx: Normal.
Larynx: Normal. Airway: Patent.
Trachea (cervical): Patent.

SALIVARY GLANDS
Parotid glands: Normal bilaterally.
Submandibular glands: Normal bilaterally.
Sublingual glands: Normal.

THYROID GLAND: Normal [size / homogeneous / no nodules].

LYMPH NODES (levels I-VI bilateral)
Level Ia/Ib: Not enlarged bilaterally.
Level IIa/IIb: Not enlarged bilaterally.
Level III: Not enlarged bilaterally.
Level IV: Not enlarged bilaterally.
Level V: Not enlarged bilaterally.
Level VI: Not enlarged.
Retropharyngeal: Not enlarged.
Other: ___

VASCULAR
Carotid arteries: Normal bilaterally.
Jugular veins: Patent bilaterally.

MUSCULOSKELETAL
Cervical spine: [Normal / Degenerative changes].
Skull base (partially imaged): Intact.

IMPRESSION
No significant pathology on CT neck.`},cs:{label:"CT krku s kontrastem",evidence:"Klasifikace disekce krku AHNS; protokol ACR pro CT krku; doporučení EPOS pro hmoty krku",criticalFindings:["Kompromitace dýchacích cest","Obalení karotické tepny","Peritonzilární / parafaryngeální absces","Maligní masa"],searchEvidence:"Systematické CT krku: nejdříve farynx (dýchací cesty), pak lymfatické uzliny, slinné žlázy, štítná žláza, cévy. Kostní okna pro spodinu lební a mandibulu.",searchMismatch:"Hodnocení zaměřené na uzliny přehlíží primární slizniční lézi. Vždy nejdříve hodnotit faryngeální sliznici — uzlina říká, kde hledat, ale primární léze je ve sliznici.",searchPattern:[{step:1,priority:"critical",title:"Dýchací cesty — průchodné?",detail:"Trachea, glottis, subglottis. Jakákoli zevní komprese nebo vnitřní léze zužující dýchací cestu.",time:"15s"},{step:2,priority:"critical",title:"Faryngeální sliznice — primum",detail:"Nasofary nx, orofary nx, hypofary nx, larynx. Asymetrie, masa, submukózní ztluštění.",time:"30s"},{step:3,priority:"high",title:"Lymfatické uzliny — bilaterálně",detail:"Úrovně I–VI oboustranně. KO ≥10 mm nebo kulatý tvar = suspektní. Centrální nekróza = metastáza.",time:"45s"},{step:4,priority:"high",title:"Slinné žlázy + štítná žláza",detail:"Příušní, submandibulární. Štítná žláza — uzly, zvětšení.",time:"20s"},{step:5,priority:"normal",title:"Cévy + spodina lební + kosti",detail:"Karotidy, VJI. Eroze spodiny lební. Krční páteř.",time:"20s"}],template:`CT KRKU S KONTRASTEM
Klinické informace: [___]
Předchozí vyšetření: [___]
Vyšetření provedeno postkontrastně, bez reakce.
___ ml Iomeron 400 i.v., aplikace injektorem.

NÁLEZ
Nasofarynx: Normální.
Orofarynx: Normální.
Hypofarynx: Normální.
Larynx: Normální. Dýchací cesty: Průchodné.
Trachea krční: Průchodná.

Slinné žlázy
Příušní slinné žlázy: Normální bilaterálně.
Submandibulární slinné žlázy: Normální bilaterálně.
Sublingvální slinné žlázy: Normální.

Štítná žláza: Normální [velikosti / homogenní / bez uzlů].

Lymfatické uzliny (úrovně I–VI bilaterálně)
Úroveň Ia/Ib: Nezvětšeny bilat.
Úroveň IIa/IIb: Nezvětšeny bilat.
Úroveň III: Nezvětšeny bilat.
Úroveň IV: Nezvětšeny bilat.
Úroveň V: Nezvětšeny bilat.
Úroveň VI: Nezvětšeny.
Retrofaryngeální: Nezvětšeny.
Jiné: ___

Cévní struktury
Karotické tepny: Normální bilaterálně.
Jugulární žíly: Průchodné bilaterálně.

Skelet
Krční páteř: [Normální / Degenerativní změny].
Spodina lební (zachycena): Intaktní.

Submandibulární a příušní slinné žlázy normální.
Naso, oro i hypofarynx normální. Larynx normální.
Trachea v krčním úseku normální.
Štítná žláza normální.

ZÁVĚR
Přiměřený nález na CT krku.`}}],Dc={abdomen:Zm,head:Wm,chest:Jm,spine:qm,routine:Qm},$m=[{id:"colorectal",validExtents:["ap","cap"],en:{label:"Colorectal",staging:{evidence:"TNM 8th (AJCC/UICC 2017); ESMO colorectal guidelines 2023; Fong clinical risk score; ESMO liver mets resectability consensus 2016",criticalFindings:["T4 invasion","Peritoneal deposits","Liver mets resectability","Obstructing primary"],searchEvidence:"ESMO 2023 — primary first; Fong 1999 liver mets resectability; Adam 2004 future liver remnant",searchMismatch:"Most assess liver mets first. Correct: primary tumour T stage FIRST — drives surgical approach. Liver mets resectability second, with structured criteria not just 'multiple bilateral'.",classification:"TNM 8th (AJCC/UICC 2017); ESMO liver mets resectability 2023",searchPattern:[{step:1,priority:"critical",title:"Primary Tumour — T Stage",detail:"Wall thickening location, circumferential vs partial. T3: through muscularis into pericolorectal fat. T4a: visceral peritoneum (fat nodularity/tethering). T4b: invading adjacent organ. Drives surgical approach.",time:"45s"},{step:2,priority:"critical",title:"Liver Metastases — Resectability",detail:"Per lesion: segment, distance to hepatic veins, PV, bile ducts. FLR ≥20-25% required. Bilobar ≠ automatically unresectable — assess per ESMO.",time:"60s"},{step:3,priority:"critical",title:"Peritoneal Disease",detail:"Omentum, small bowel mesentery, right subphrenic, pelvis. Peritoneal disease = contraindication to liver resection.",time:"30s"},{step:4,priority:"high",title:"Regional Lymph Nodes",detail:"Mesorectal, pericolonic, superior rectal, inferior mesenteric. SA >9mm OR round OR irregular = suspicious.",time:"20s"},{step:5,priority:"high",title:"Distant Disease Survey",detail:"Liver, lung bases, retroperitoneal nodes, adrenal, ovarian, bone.",time:"30s"},{step:6,priority:"normal",title:"Chest (C+A+P)",detail:"Pulmonary metastases. Mediastinal nodes. Simultaneous resectability?",time:"20s"}],template:{tumorSpecific:`PRIMARY TUMOUR
Location: Caecum / Ascending / Transverse / Descending / Sigmoid / Rectum — ___ cm from anal verge
Wall thickening: ___ mm  Circumferential: No / Yes
Obstruction: No / Partial / Complete

T STAGE
T3: Through muscularis into pericolorectal fat — depth ___ mm
T4a: Visceral peritoneum (fat nodularity/tethering): No / Yes
T4b: Adjacent organ invasion: No / Yes — organ ___
→ CT T stage: T___

MESORECTAL FASCIA [rectal]
MRF: Clear (≥1mm) / Threatened (<1mm) / Involved  Distance: ___ mm
EMVI: No / Yes — vessel ___

LIVER METASTASES [ESMO resectability]
Liver mets: No / Yes — number ___, bilobar: No / Yes
Lesion 1: Segment ___, ___ mm, HV ___ mm, PV ___ mm, BD ___ mm
Lesion 2: Segment ___, ___ mm  Lesion 3: ___
Background: Normal / Steatosis / Cirrhosis
FLR estimate: ___ %  (need ≥20-25%)
→ Resectability: Resectable / Potentially resectable / Unresectable

PERITONEAL [confirm absent for liver resection]
Deposits: No / Yes — location ___  Omental caking: No / Yes
Small bowel mesentery: Clear / Involved  Right subphrenic: Clear / Deposits
→ Peritoneal: Absent / Present`,abdomen:`REGIONAL NODES
Pericolonic/mesorectal: Normal / Enlarged — ___ mm SA  N stage: N0/N1/N2
Lateral pelvic [rectal]: Normal / R ___ mm / L ___ mm

DISTANT — ABDOMINAL
Adrenal: Normal / R/L ___  Ovaries: Normal / Mass ___
Retroperitoneal nodes: Normal / ___  Ascites: No / Yes`,chest:`CHEST
Pulmonary mets: No / Yes — ___, simultaneous resection: Yes / No / Assess
Mediastinal nodes: Normal / ___  Pleural: No / Yes`,impression:`IMPRESSION — COLORECTAL STAGING
Primary: [location], T___, [MRF if rectal]  Nodes: N___
Liver: [resectable/potentially/unresectable] — ___ lesions
Peritoneum: Absent / Present  M: M0/M1a/M1b/M1c
→ Stage: ___  Resectability: Resectable / MDT / Unresectable`}},response:{evidence:"RECIST 1.1 (Eisenhauer 2009); ESMO liver mets response 2023; secondary resectability after downstaging",criticalFindings:["New peritoneal deposits","New liver lesions","Progression","Treatment complications"],searchEvidence:"Eisenhauer 2009; ESMO 2023 secondary resectability; structured response reduces variability",searchMismatch:"Response stops at RECIST. Critical additional step: reassess liver resectability after RECIST — downstaging to resectability is the therapeutic goal for many patients.",criteria:"RECIST 1.1; liver resectability reassessment per ESMO 2023",searchPattern:[{step:1,priority:"critical",title:"Prior Report First",detail:"Targets, baseline sum, liver resectability status. Was downstaging the goal?",time:"60s"},{step:2,priority:"critical",title:"New Peritoneal Deposits First",detail:"New peritoneal = immediately unresectable. Check omentum, subphrenic, mesentery before measuring targets.",time:"30s"},{step:3,priority:"critical",title:"Liver — RECIST + Resectability",detail:"Measure targets. Then reassess ESMO resectability: FLR ≥25%? Lesions clear of vessels?",time:"60s"},{step:4,priority:"high",title:"Full RECIST",detail:"All targets. Sum. Change from baseline and nadir.",time:"45s"},{step:5,priority:"high",title:"Primary Response",detail:"Wall thickening reduction. Obstruction improved?",time:"20s"},{step:6,priority:"high",title:"Treatment Complications",detail:"Anti-VEGF perforation risk. Immunotherapy colitis. FOLFOX steatosis.",time:"20s"}],template:{tumorSpecific:`LIVER RESPONSE + RESECTABILITY REASSESSMENT
FLR now: ___ %  Lesions near vessels: Improved / Unchanged / Worsened
→ Resectability: Now resectable / Borderline MDT / Still unresectable

PERITONEAL [new = unresectable]
Current: No new deposits / New — location ___ [CRITICAL]
Omentum: Clear / Thickening / Nodularity

PRIMARY RESPONSE
Wall thickening: ___ mm (prior ___ mm)  Obstruction: Resolved / Improved / Unchanged`,abdomen:`RECIST 1.1 [max 5 targets, ≥10mm; nodes ≥15mm SA]
1. ___ current ___ mm (prior ___ mm, Δ ___ %)
2. ___ current ___ mm (prior ___ mm, Δ ___ %)
3. ___ current ___ mm (prior ___ mm, Δ ___ %)
Sum: ___ mm / Prior ___ mm / Baseline ___ mm  Change: ___ %
Non-targets: CR / Non-CR Non-PD / Progression
New lesions: None / Yes ___
→ RECIST: CR / PR / SD / PD

COMPLICATIONS
Bowel: None / Colitis / Perforation risk  Liver: None / Steatosis
Anti-VEGF: Normal / Pneumatosis / Fistula  Thrombosis: None / ___`,chest:`CHEST
Pulmonary: Stable / PR / PD  New: No / Yes ___`,impression:`IMPRESSION — COLORECTAL RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Liver resectability: Now resectable / Borderline MDT / Unresectable
Peritoneum: Clear / New deposits [change plan]
Complications: None / [specify]`}}},cs:{label:"Kolorektální karcinom",staging:{evidence:"TNM 8. vydání (AJCC/UICC 2017); guidelines ESMO 2023; Fongovo skóre; konsensus ESMO pro resekabilní jaterní metastázy 2016",criticalFindings:["Invaze T4","Peritoneální depozita","Resekabilita jaterních metastáz","Obstrukující primární tumor"],searchEvidence:"ESMO 2023 — nejdříve primární tumor; Fong 1999 resekabilita jaterních mets; Adam 2004 budoucí jaterní zbytek",searchMismatch:"Většina hodnotí nejdříve jaterní metastázy. Správně: T stadium primárního tumoru JAKO PRVNÍ — určuje chirurgický přístup. Resekabilita jaterních mets jako druhá, se strukturovanými kritérii.",classification:"TNM 8. vydání (AJCC/UICC 2017); kritéria resekability jaterních mets ESMO 2023",searchPattern:[{step:1,priority:"critical",title:"Primární tumor — T stadium",detail:"Lokalizace ztluštění, cirkulární vs. parciální. T3: přes muscularis propria. T4a: viscerální peritoneum. T4b: invaze do sousedního orgánu.",time:"45s"},{step:2,priority:"critical",title:"Jaterní metastázy — resekabilita",detail:"Pro každou lézi: segment, vzdálenost k jaterním žilám, VP, žlučovodům. FLR ≥20–25 %. Bilaterální ≠ automaticky neresekabilní.",time:"60s"},{step:3,priority:"critical",title:"Peritoneální postižení",detail:"Omentum, mezenterium TT, pravý subdiafragmatický prostor, pánev. Peritoneální postižení = kontraindikace resekce jater.",time:"30s"},{step:4,priority:"high",title:"Regionální mízní uzliny",detail:"Mezorektální, perikolické, superirorní rektální, inf. mezenteriální. KO >9 mm nebo kulaté nebo nepravidelné = suspektní.",time:"20s"},{step:5,priority:"high",title:"Přehled vzdálených metastáz",detail:"Játra, baze plic, retroperitoneální uzliny, nadledviny, ovaria, kosti.",time:"30s"},{step:6,priority:"normal",title:"Hrudník (H+B+P)",detail:"Plicní metastázy. Mediastinální uzliny. Simultánní resekabilita?",time:"20s"}],template:{tumorSpecific:`PRIMÁRNÍ TUMOR
Lokalizace: Cékum / Vzestupný / Příčný / Sestupný tračník / Sigma / Rektum — ___ cm od řitního otvoru
Ztluštění stěny: ___ mm  Cirkulární: Ne / Ano  Obstrukce: Ne / Parciální / Kompletní

T STADIUM
T3: Průnik do perikolického tuku — hloubka ___ mm
T4a: Viscerální peritoneum: Ne / Ano  T4b: Invaze orgán: Ne / Ano — ___
→ CT T stadium: T___

MEZOREKTÁLNÍ FASCIA [rektum]
MRF: Volná (≥1 mm) / Ohrožená (<1 mm) / Postižená  Vzdálenost: ___ mm
EMVI: Ne / Ano — céva ___

JATERNÍ METASTÁZY [ESMO resekabilita]
Mets: Ne / Ano — počet ___, bilaterálně: Ne / Ano
Léze 1: Segment ___, ___ mm, HŽ ___ mm, VP ___ mm  Léze 2: ___ Léze 3: ___
Parenchym: Normální / Steatóza / Cirhóza  FLR: ___ %  (potřeba ≥20–25 %)
→ Resekabilita: Resekabilní / Potenciálně resekabilní / Neresekabilní

PERITONEUM [potvrdit nepřítomnost pro resekci jater]
Depozita: Ne / Ano  Omentální cake: Ne / Ano
Mezenterium TT: Volné / Postiženo  Pravý subdiafragmatický: Volný / Depozita
→ Peritoneum: Nepřítomno / Přítomno`,abdomen:`REGIONÁLNÍ UZLINY
Perikolické/mezorektální: Normální / Zvětšené — ___ mm KO  N stadium: N0/N1/N2
Laterální pánevní [rektum]: Normální / Vpravo ___ mm / Vlevo ___ mm

VZDÁLENÉ — BŘICHO
Nadledviny: Norm. / V/L ___  Ovaria: Norm. / Expanze ___
Retroperitoneální uzliny: Norm. / ___  Ascites: Ne / Ano`,chest:`HRUDNÍK
Plicní mets: Ne / Ano — ___, simult. resekce: Ano / Ne / Hodnotit
Mediastinální uzliny: Normální / ___  Pleura: Ne / Ano`,impression:`ZÁVĚR — STAGING KOLOREKTÁLNÍHO KARCINOMU
Primář: [lokalizace], T___, [MRF u rekta]  Uzliny: N___
Játra: [resekabilní/potenciálně/neresekabilní] — ___ lézí
Peritoneum: Nepřítomno / Přítomno  M: M0/M1a/M1b/M1c
→ Stadium: ___  Resekabilita: Resekabilní / MDT / Neresekabilní`}},response:{evidence:"RECIST 1.1 (Eisenhauer 2009); hodnocení odpovědi jaterních mets ESMO 2023; sekundární resekabilita po downstagingu",criticalFindings:["Nová peritoneální depozita","Nové jaterní léze","Progrese","Komplikace léčby"],searchEvidence:"Eisenhauer 2009; sekundární resekabilita ESMO 2023",searchMismatch:"Hodnocení se zastaví u RECIST. Kritický krok navíc: přehodnotit resekabilitu jater po RECIST — downstaging do resekability je terapeutickým cílem.",criteria:"RECIST 1.1; přehodnocení resekability dle ESMO 2023",searchPattern:[{step:1,priority:"critical",title:"Nejdříve starý protokol",detail:"Cíle, výchozí součet, stav resekability jater. Byl cílem downstaging?",time:"60s"},{step:2,priority:"critical",title:"Nejdříve nová peritoneální depozita",detail:"Nová peritoneální = okamžitě neresekabilní. Zkontrolujte omentum, subdiafragmaticky, mezenterium před měřením cílů.",time:"30s"},{step:3,priority:"critical",title:"Játra — RECIST + resekabilita",detail:"Změřte cíle. Pak přehodnoťte ESMO resekabilitu: FLR ≥25 %? Léze volné od cév?",time:"60s"},{step:4,priority:"high",title:"Kompletní RECIST",detail:"Všechny cíle. Součet. Změna od výchozího a minima.",time:"45s"},{step:5,priority:"high",title:"Odpověď primárního tumoru",detail:"Redukce ztluštění stěny. Obstrukce zlepšena?",time:"20s"},{step:6,priority:"high",title:"Komplikace léčby",detail:"Riziko perforace anti-VEGF. Kolitida při imunoterapii. Steatóza FOLFOX.",time:"20s"}],template:{tumorSpecific:`ODPOVĚĎ JATER + PŘEHODNOCENÍ RESEKABILITY
FLR nyní: ___ %  Léze u cév: Zlepšeno / Nezměněno / Zhoršeno
→ Resekabilita: Nyní resekabilní / Hraniční MDT / Stále neresekabilní

PERITONEUM [nová = neresekabilní]
Aktuálně: Bez nových depozit / Nová — ___ [KRITICKÝ NÁLEZ]
Omentum: Volné / Ztluštění / Nodularita

ODPOVĚĎ PRIMÁRNÍHO TUMORU
Ztluštění: ___ mm (dříve ___ mm)  Obstrukce: Ustoupila / Zlepšena / Nezměněna`,abdomen:`RECIST 1.1 [max 5 cílů, ≥10 mm; uzliny ≥15 mm KO]
1. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
2. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
3. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
Součet: ___ mm / Dříve ___ mm / Výchozí ___ mm  Změna: ___ %
Necílové: CR / Neplná remise bez prog. / Progrese  Nové: Žádné / Ano ___
→ RECIST: CR / PR / SD / PD

KOMPLIKACE
Střevo: Žádné / Kolitida / Riziko perf.  Játra: Žádné / Steatóza
Anti-VEGF: Normální / Pneumatosis / Fistula  Trombóza: Žádná / ___`,chest:`HRUDNÍK
Plicní: Stabilní / PR / PD  Nové: Ne / Ano ___`,impression:`ZÁVĚR — ODPOVĚĎ KOLOREKTÁLNÍHO KARCINOMU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Resekabilita jater: Nyní resekabilní / Hraniční MDT / Neresekabilní
Peritoneum: Volné / Nová depozita [změna plánu]
Komplikace: Žádné / [specifikovat]`}}}},{id:"pancreatic",validExtents:["ap","cap"],en:{label:"Pancreatic",staging:{evidence:"TNM 8th (AJCC/UICC 2017); NCCN Pancreatic 2024; AHPBA/SSO/SSAT borderline consensus 2009; Isaji 2018 international consensus",criticalFindings:["SMA contact >180°","Coeliac involvement","Unreconstructable SMV/PV","Distant metastases"],searchEvidence:"NCCN 2024 vascular arc assessment; Isaji 2018 international consensus; Al-Hawary 2014 standardised CT reporting",searchMismatch:"CRITICAL: most describe the mass then mention vascular involvement. Correct: systematic five-vessel assessment with arc IN DEGREES is the primary finding. Without arc measurements the report is insufficient for surgical planning. Vessels FIRST.",classification:"TNM 8th (AJCC/UICC 2017); NCCN 2024 resectability criteria",searchPattern:[{step:1,priority:"critical",title:"Five-Vessel Assessment — Primary Finding",detail:"In order: (1) SMA arc in degrees. (2) Coeliac including CHA. (3) PV/SMV confluence — arc, contour, length. (4) Portal vein. (5) SMV. Do not assess mass until all five vessels are done.",time:"90s"},{step:2,priority:"critical",title:"Apply NCCN Resectability",detail:"Resectable: no arterial contact, SMV/PV ≤180° no contour. Borderline: SMV/PV >180° reconstructable OR SMA ≤180°. Locally advanced: SMA >180°, coeliac >180°, unreconstructable SMV/PV.",time:"20s"},{step:3,priority:"critical",title:"Distant — Liver + Peritoneum",detail:"Liver mets (most common M1). Peritoneal deposits. Both = palliative intent.",time:"30s"},{step:4,priority:"high",title:"Mass Characterisation",detail:"Location, size, duct dilation, double duct sign, parenchymal atrophy.",time:"30s"},{step:5,priority:"high",title:"Lymph Nodes",detail:"Peripancreatic, coeliac, SMA origin, portocaval, para-aortic. Para-aortic = M1.",time:"20s"},{step:6,priority:"normal",title:"Biliary + Chest",detail:"CBD. Stent. Chest if C+A+P.",time:"20s"}],template:{tumorSpecific:`PANCREATIC MASS
Location: Head / Neck / Body / Tail  Size: ___ × ___ mm
Wirsung duct: Normal / Dilated ___ mm, abrupt cutoff: No / Yes
CBD: Normal / Dilated ___ mm  [Double duct sign: No / Yes]
Parenchymal atrophy: No / Yes

FIVE-VESSEL ASSESSMENT [NCCN 2024 — primary finding]
1. SMA: Contact: No / Arc ___ °  Contour: Normal / Deformed  >180°: No / Yes
2. Coeliac: No / Arc ___ °  CHA: No / Arc ___ °, reconstructable: Yes / No
3. PV/SMV confluence: No / Arc ___ °, length ___ mm  Contour: Normal / Irregular  Reconstructable: Yes / No
4. Portal vein: No / Arc ___ °  Occlusion: No / Yes
5. SMV: No / Arc ___ °  Occlusion: No / Yes

NCCN RESECTABILITY [Isaji 2018]
Resectable: No arterial contact; SMV/PV ≤180°, normal contour
Borderline resectable: SMV/PV >180° reconstructable OR SMA ≤180° OR CHA short segment reconstructable
Locally advanced: SMA >180° OR coeliac >180° OR unreconstructable SMV/PV
→ RESECTABILITY: Resectable / Borderline resectable / Locally advanced`,abdomen:`LYMPH NODES
Peripancreatic: Normal / ___ mm  Coeliac/SMA: Normal / ___ mm
Portocaval: Normal / ___  Para-aortic: Normal / ___ mm [M1]

DISTANT
Liver: No mets / Mets — ___, ___ mm [M1]
Peritoneal: No / Yes — ___ [M1]  Ascites: No / Yes

BILIARY
CBD: ___ mm  Stent: No / Yes — position ___  IHBD: No / Yes`,chest:`CHEST
Pulmonary mets: No / Yes [M1]  Pleural: No / Yes`,impression:`IMPRESSION — PANCREATIC STAGING
Mass: [location], ___ mm  Vascular: SMA ___ °, Coeliac ___ °, CHA ___ °, PV/SMV ___ °
Nodes: Regional N0/N1/N2 / Para-aortic [M1]  M: M0/M1
→ RESECTABILITY: Resectable / Borderline resectable / Locally advanced
T___ N___ M___  Recommendation: [upfront surgery / neoadjuvant / palliative]`}},response:{evidence:"RECIST 1.1 (Eisenhauer 2009); NCCN 2024 restaging after neoadjuvant; Al-Hawary 2014 post-treatment CT",criticalFindings:["Conversion to resectable","New distant mets","Vascular response","Post-treatment pancreatitis"],searchEvidence:"Al-Hawary 2014 post-neoadjuvant CT; NCCN 2024 restaging; size unchanged ≠ treatment failure in PDAC",searchMismatch:"RECIST alone misleading in PDAC — size may not change with response. Critical question: has resectability changed? Vascular arc may decrease without size change. Always reassess all five vessels.",criteria:"RECIST 1.1; vascular restaging per NCCN 2024 — resectability is the primary endpoint",searchPattern:[{step:1,priority:"critical",title:"Prior Vascular Status — Read First",detail:"What were the five vessel arcs? What was resectability category? Baseline for restaging.",time:"60s"},{step:2,priority:"critical",title:"Five-Vessel Reassessment",detail:"Arc measurements in degrees for all five. Any decrease? Contour irregularity resolved? Primary endpoint.",time:"90s"},{step:3,priority:"critical",title:"New Distant Disease First",detail:"New liver mets or peritoneal = palliative pivot. Check before mass.",time:"20s"},{step:4,priority:"high",title:"Mass Size — RECIST with Caveats",detail:"Measure but contextualise. Fibrosis without size change is common. Decreased density may = response.",time:"30s"},{step:5,priority:"high",title:"Stent + Biliary",detail:"Stent position/function. IHBD re-dilation.",time:"10s"},{step:6,priority:"normal",title:"Complications",detail:"Post-treatment pancreatitis. Portal/SMV thrombosis.",time:"15s"}],template:{tumorSpecific:`VASCULAR RESTAGING [primary endpoint — NCCN 2024]
Prior: SMA ___ °, Coeliac ___ °, CHA ___ °, PV/SMV ___ °

FIVE-VESSEL REASSESSMENT
1. SMA: Prior ___ ° → Current ___ °  Change: Decreased/Stable/Increased  Contour: Normal/Deformed
2. Coeliac/CHA: Prior ___ ° → Current ___ °
3. PV/SMV: Prior ___ ° → Current ___ °  Contour: Normal/Improved/Unchanged
4. PV: Prior ___ ° → Current ___ °
5. SMV: Prior ___ ° → Current ___ °

Prior resectability: ___
→ CURRENT RESECTABILITY: Resectable / Borderline resectable / Locally advanced / Unresectable (M1)
Change: Downstaged to resectable / Downstaged to borderline / Unchanged / Progressed

MASS SIZE
Prior ___ × ___ mm → Current ___ × ___ mm
Density: Unchanged / Decreased (possible response) / Heterogeneous
Note: Stable size ≠ treatment failure in PDAC

NEW DISTANT
Liver: No new / New ___  Peritoneal: Clear / New ___`,abdomen:`RECIST
Mass: Prior ___ mm → ___ mm (Δ ___ %)
Other targets: 1. ___ mm (prior ___) Δ ___ %
Sum: ___ mm / Prior ___  RECIST: CR/PR/SD/PD [size unreliable in PDAC]
Para-aortic: Absent / Present [M1]
Complications: Post-treatment pancreatitis: No/Yes — CTSI ___  Thrombosis: No/Yes ___`,chest:`CHEST [C+A+P]
Pulmonary mets: No new / New ___`,impression:`IMPRESSION — PANCREATIC RESTAGING
RECIST: [PR/SD/PD]  Mass: ___ mm ([±]___ %)
Vascular: SMA ___ ° (prior ___), Coeliac ___ ° (prior ___), PV/SMV ___ ° (prior ___)
→ RESECTABILITY: Downstaged — resectable / Borderline / Unchanged / Progressed (M1)
Recommendation: [proceed to surgery / extend neoadjuvant / MDT / palliative]`}}},cs:{label:"Karcinom slinivky",staging:{evidence:"TNM 8. vydání; NCCN 2024; konsensus AHPBA/SSO/SSAT 2009; mezinárodní konsensus Isaji 2018",criticalFindings:["Kontakt AMS >180°","Postižení truncus coeliacus","Nerekonstruovatelná VMH/VP","Vzdálené metastázy"],searchEvidence:"NCCN 2024 oblouk kontaktu; mezinárodní konsensus Isaji 2018; standardizované hlášení Al-Hawary 2014",searchMismatch:"KRITICKÉ: většina popíše masu a zmíní cévní invazi. Správně: systematické hodnocení pěti cév s obloukem VE STUPNÍCH je primárním nálezem. Bez oblouků je protokol nedostatečný pro chirurgy. Nejdříve cévy.",classification:"TNM 8. vydání; kritéria resekability NCCN 2024",searchPattern:[{step:1,priority:"critical",title:"Hodnocení pěti cév — primární nález",detail:"V pořadí: (1) oblouk AMS ve stupních. (2) Truncus coeliacus vč. AHC. (3) Konfluens VP/VMH. (4) Vrátnicová žíla. (5) VMH. Nepokračujte u masy, dokud nejsou hodnoceny všechny.",time:"90s"},{step:2,priority:"critical",title:"Klasifikace resekability NCCN",detail:"Resekabilní: bez kontaktu tepen; VMH/VP ≤180° bez deformace. Hraničně: VMH/VP >180° rekonstruovatelné NEBO AMS ≤180°. Lokálně pokročilý: AMS >180°, truncus >180°, nerekonstruovatelné.",time:"20s"},{step:3,priority:"critical",title:"Vzdálené — játra + peritoneum",detail:"Jaterní mets (nejčastější M1). Peritoneální depozita. Obojí = paliativní záměr.",time:"30s"},{step:4,priority:"high",title:"Charakterizace masy",detail:"Lokalizace, velikost, dilatace vývodu, double duct sign, atrofie parenchymu.",time:"30s"},{step:5,priority:"high",title:"Mízní uzliny",detail:"Peripankreatické, celiakální, odstup AMS, portokavální, paraaortální. Paraaortální = M1.",time:"20s"},{step:6,priority:"normal",title:"Biliární systém + hrudník",detail:"DCH. Stent. Hrudník při H+B+P.",time:"20s"}],template:{tumorSpecific:`MASA SLINIVKY
Lokalizace: Hlava / Krček / Tělo / Ocas  Velikost: ___ × ___ mm
Wirsungův vývod: Normální / Dilatovaný ___ mm, náhlé přerušení: Ne / Ano
DCH: Normální / Dilatovaný ___ mm  [Double duct sign: Ne / Ano]
Atrofie parenchymu: Ne / Ano

HODNOCENÍ PĚTI CÉV [NCCN 2024 — primární nález]
1. AMS: Kontakt: Ne / Oblouk ___ °  Kontura: Normální / Deformovaná  >180°: Ne / Ano
2. Truncus coeliacus: Ne / Oblouk ___ °  AHC: Ne / Oblouk ___ °, rekonstruovatelná: Ano / Ne
3. Konfluens VP/VMH: Ne / Oblouk ___ °, délka ___ mm  Kontura: Norm./Neprav.  Rekonstruovatelné: Ano/Ne
4. Vrátnicová žíla: Ne / Oblouk ___ °  Okluze: Ne / Ano
5. VMH: Ne / Oblouk ___ °  Okluze: Ne / Ano

KLASIFIKACE RESEKABILITY [Isaji 2018]
Resekabilní: Bez kontaktu tepen; VMH/VP ≤180°, normální kontura
Hraničně resekabilní: VMH/VP >180° rekonstruovatelné NEBO AMS ≤180° NEBO AHC krátký segment
Lokálně pokročilý: AMS >180° NEBO truncus >180° NEBO nerekonstruovatelné VMH/VP
→ RESEKABILITA: Resekabilní / Hraničně resekabilní / Lokálně pokročilý`,abdomen:`MÍZNÍ UZLINY
Peripankreatické: Norm. / ___ mm  Celiakální/AMS: Norm. / ___ mm
Portokavální: Norm. / ___  Paraaortální: Norm. / ___ mm [M1]

VZDÁLENÉ
Játra: Bez mets / Mets — ___, ___ mm [M1]
Peritoneum: Ne / Ano — ___ [M1]  Ascites: Ne / Ano

BILIÁRNÍ
DCH: ___ mm  Stent: Ne / Ano — poloha ___  IJCH: Ne / Ano`,chest:`HRUDNÍK
Plicní mets: Ne / Ano [M1]  Pleura: Ne / Ano`,impression:`ZÁVĚR — STAGING KARCINOMU SLINIVKY
Masa: [lokalizace], ___ mm  Cévy: AMS ___ °, truncus ___ °, AHC ___ °, VP/VMH ___ °
Uzliny: Regionální N0/N1/N2 / Paraaortální [M1]  M: M0/M1
→ RESEKABILITA: Resekabilní / Hraničně resekabilní / Lokálně pokročilý
T___ N___ M___  Doporučení: [přímá operace / neoadjuvantní / paliativní]`}},response:{evidence:"RECIST 1.1; NCCN 2024 restaging po neoadjuvantní léčbě; CT po léčbě Al-Hawary 2014",criticalFindings:["Konverze na resekabilní","Nové vzdálené mets","Cévní odpověď","Postléčebná pankreatitida"],searchEvidence:"Al-Hawary 2014 CT po neoadjuvantní léčbě; NCCN 2024 restaging; stabilní velikost ≠ selhání u PDAC",searchMismatch:"Samotný RECIST je u PDAC zavádějící. Kritická otázka: změnil se status resekability? Oblouk se může zmenšit bez změny velikosti. Vždy přehodnoťte všech pět cév.",criteria:"RECIST 1.1; cévní restaging NCCN 2024 — resekabilita je primárním cílem",searchPattern:[{step:1,priority:"critical",title:"Předchozí cévní status — nejdříve přečíst",detail:"Jaké byly oblouky pěti cév? Jaká byla resekabilita? Výchozí bod pro restaging.",time:"60s"},{step:2,priority:"critical",title:"Přehodnocení pěti cév",detail:"Oblouky ve stupních pro všechny. Zmenšil se některý? Ustoupila deformace? Primární ukazatel.",time:"90s"},{step:3,priority:"critical",title:"Nejdříve nové vzdálené postižení",detail:"Nové jaterní mets nebo peritoneum = paliativní přechod. Zkontrolujte před masou.",time:"20s"},{step:4,priority:"high",title:"Velikost masy — RECIST s výhradami",detail:"Změřte, ale kontextualizujte. Fibróza bez změny velikosti je běžná. Snížená denzita může = odpověď.",time:"30s"},{step:5,priority:"high",title:"Stent + biliární systém",detail:"Poloha/funkce stentu. Nová dilatace IJCH.",time:"10s"},{step:6,priority:"normal",title:"Komplikace",detail:"Postléčebná pankreatitida. Trombóza VP/VMH.",time:"15s"}],template:{tumorSpecific:`CÉVNÍ RESTAGING [primární ukazatel — NCCN 2024]
Dříve: AMS ___ °, truncus ___ °, AHC ___ °, VP/VMH ___ °

PŘEHODNOCENÍ PĚTI CÉV
1. AMS: Dříve ___ ° → Aktuálně ___ °  Změna: Zmenšení/Stabilní/Nárůst  Kontura: Norm./Def.
2. Truncus/AHC: Dříve ___ ° → ___ °
3. VP/VMH: Dříve ___ ° → ___ °  Kontura: Norm./Zlepšena/Nezměněna
4. VP: Dříve ___ ° → ___ °   5. VMH: Dříve ___ ° → ___ °

Předchozí resekabilita: ___
→ AKTUÁLNÍ RESEKABILITA: Resekabilní / Hraničně / Lok. pokročilý / Neresekabilní (M1)
Změna: Downstaging na resekabilní / Na hraničně / Nezměněno / Progrese

VELIKOST MASY
Dříve ___ × ___ mm → Aktuálně ___ × ___ mm
Denzita: Nezměněna / Snížena (možná odpověď) / Heterogenní
Poznámka: Stabilní velikost ≠ selhání u PDAC

NOVÉ VZDÁLENÉ POSTIŽENÍ
Játra: Žádné nové / Nové ___  Peritoneum: Volné / Nová ___`,abdomen:`RECIST
Masa: Dříve ___ mm → ___ mm (Δ ___ %)
Další cíle: 1. ___ mm (dříve ___) Δ ___ %
Součet: ___ mm / Dříve ___  RECIST: CR/PR/SD/PD [velikost u PDAC nespolehlivá]
Paraaortální: Nepřítomny / Přítomny [M1]
Komplikace: Postléčebná pankreatitida: Ne/Ano — CTSI ___  Trombóza: Ne/Ano ___`,chest:`HRUDNÍK [H+B+P]
Plicní mets: Žádné nové / Nové ___`,impression:`ZÁVĚR — RESTAGING KARCINOMU SLINIVKY
RECIST: [PR/SD/PD]  Masa: ___ mm ([±]___ %)
Cévy: AMS ___ ° (dříve ___), truncus ___ ° (dříve ___), VP/VMH ___ ° (dříve ___)
→ RESEKABILITA: Downstaging — resekabilní / Hraničně / Nezměněno / Progrese (M1)
Doporučení: [přistoupit k operaci / prodloužit neoadjuvantní / MDT / paliativní]`}}}},{id:"rcc",validExtents:["ap","cap"],en:{label:"Renal Cell Ca.",staging:{evidence:"TNM 8th (AJCC/UICC 2017); Neves IVC classification 1987 (levels I-IV); RENAL nephrometry score; EAU RCC guidelines 2024",criticalFindings:["IVC thrombus level (Neves)","Contralateral kidney","Adrenal involvement","Extension above diaphragm"],searchEvidence:"Neves 1987 IVC classification; EAU 2024 CT staging; Hallscheidt 2005 CT vs surgical IVC level",searchMismatch:"Most describe the mass then mention IVC thrombus. Critical error: IVC thrombus LEVEL (Neves I-IV) with precision determines if cardiac bypass is needed. Level IV = cardiothoracic surgeon required. Assess IVC from renal vein to RA before anything else.",classification:"TNM 8th (AJCC/UICC 2017); Neves IVC classification",searchPattern:[{step:1,priority:"critical",title:"Renal Vein + IVC — Neves Level First",detail:"Invaded renal vein? If yes: trace UP IVC. I: below hepatic veins. II: to hepatic veins below diaphragm. III: above diaphragm below RA. IV: into RA (cardiac surgery). Level determines surgical team.",time:"45s"},{step:2,priority:"critical",title:"Contralateral Kidney",detail:"Normal = safe radical nephrectomy. Absent/non-functioning/masses = nephron-sparing mandatory.",time:"15s"},{step:3,priority:"critical",title:"Adrenal — Direct vs Metastatic",detail:"Direct invasion (contiguous = T4) vs separate nodule (M1). Changes T vs M stage.",time:"15s"},{step:4,priority:"high",title:"Primary Tumour",detail:"Size, location, enhancement. RENAL nephrometry score.",time:"30s"},{step:5,priority:"high",title:"Nodal + Distant",detail:"Retroperitoneal, hilar, para-aortic nodes. Liver. Bone (lytic). Lung bases.",time:"20s"},{step:6,priority:"normal",title:"Chest (C+A+P)",detail:"Pulmonary metastases.",time:"15s"}],template:{tumorSpecific:`PRIMARY RENAL MASS
Side: R / L  Location: Upper / Mid / Lower pole  Ant / Post / Mesial
Size: ___ × ___ × ___ mm  Enhancement: Homo / Hetero / Solid / Cystic
Bosniak [if cystic]: ___  Renal sinus fat: No / Yes [T3a]
Perinephric fat: No / Yes — ___ mm beyond capsule [T3a]  Gerota's: Intact / Breached [T4]
Adjacent organ: No / Yes — ___ [T4]

IVC THROMBUS [Neves — assess before staging]
Renal vein: Normal / Thrombus — extent ___  IVC: No / Yes
  NEVES: I (below hepatic veins) / II (to hepatic veins, below diaphragm)
         III (above diaphragm, below RA) / IV (in RA — cardiac surgery)
  → NEVES LEVEL: ___
Thrombus enhancement: No [bland] / Yes [tumour thrombus]
Contralateral renal vein: Patent / Thrombus

ADRENAL
Ipsilateral: Normal / Direct invasion [T4] / Separate nodule [M1] — ___ mm
Contralateral: Normal / Lesion ___`,abdomen:`LYMPH NODES
Hilar (ipsilateral): Normal / ___ mm  Retroperitoneal: Normal / ___ mm
Para-aortic/caval: Normal / ___

DISTANT
Liver: No / Yes ___  Contralateral kidney: Normal / [pathology — nephron-sparing]
Bone: No / Lytic — ___

T STAGE
T1a ≤4cm / T1b >4-7cm / T2a >7-10cm / T2b >10cm (all limited to kidney)
T3a: Renal vein OR perinephric/sinus fat  T3b: IVC below diaphragm (Neves I-II)
T3c: IVC above diaphragm or RA (Neves III-IV)  T4: Gerota's / ipsilateral adrenal direct
→ T___ N___ M___`,chest:`CHEST
Pulmonary mets: No / Yes ___  Mediastinal: Normal / ___`,impression:`IMPRESSION — RCC STAGING
Primary: [side, pole], ___ mm  IVC: No involvement / Neves Level ___ [cardiac if III-IV]
Adrenal: Not involved / Direct invasion T4 / Metastasis M1  Nodes: N0/N1
M: M0/M1  → Stage: T___ N___ M___
Contralateral kidney: Normal / [pathology — nephron-sparing required]`}},response:{evidence:"RECIST 1.1; iRECIST 2017 for immunotherapy; EAU 2024; pseudo-progression in immunotherapy",criticalFindings:["New IVC thrombus","New bone mets (weight-bearing)","Immunotherapy complications","Bilateral adrenal"],searchEvidence:"Eisenhauer 2009; Seymour 2017 iRECIST; TKI: necrosis without size change is response",searchMismatch:"RCC on TKI often shows necrosis without size reduction — RECIST underestimates response. Always note density changes in addition to size. Immunotherapy: pseudo-progression possible.",criteria:"RECIST 1.1 (TKI); iRECIST (immunotherapy)",searchPattern:[{step:1,priority:"critical",title:"Treatment Context",detail:"TKI (expect necrosis — density change = response), immunotherapy (pseudo-progression possible), mTOR.",time:"10s"},{step:2,priority:"critical",title:"New IVC Thrombus / Level Extension",detail:"New or extended IVC thrombus = highest priority progression finding.",time:"20s"},{step:3,priority:"critical",title:"New Bone Mets — Weight-Bearing",detail:"Femoral neck, vertebral body = impending fracture = orthopaedic urgency.",time:"20s"},{step:4,priority:"high",title:"Target Lesions — Size + Density",detail:"RECIST size. PLUS density change (necrosis on TKI = response even if stable size).",time:"45s"},{step:5,priority:"high",title:"Immunotherapy Complications",detail:"Nephritis (bilateral cortical changes), colitis, adrenalitis, thyroiditis.",time:"20s"},{step:6,priority:"normal",title:"Chest",detail:"Pulmonary response.",time:"15s"}],template:{tumorSpecific:`PRIMARY / NEPHRECTOMY BED
[Primary in situ]: Size: Prior ___ mm → ___ mm  Density: Unchanged / Increased necrosis [TKI response]
IVC thrombus: Prior level ___ → Current level ___ [extension = progression]
[Post-nephrectomy]: Bed: No recurrence / Recurrence — ___ mm

BONE METS [most common RCC progression site]
New lytic: No / Yes — ___ [weight-bearing: No / Yes — ortho urgency]
Known lesions: Stable / Progressed / Sclerotic response`,abdomen:`RECIST 1.1 / iRECIST
1. ___ current ___ mm (prior ___) Δ ___ %  Density: ___ HU (prior ___) Necrosis↑: No/Yes
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm / Prior ___  Change: ___ %  Response: CR/PR/SD/PD
[Immunotherapy: enlargement → iUPD, confirm at 4 weeks]

IMMUNOTHERAPY COMPLICATIONS
Nephritis: No / Yes — bilateral cortical change ___  Colitis: No / Yes ___
Adrenalitis: No / Yes — bilateral enlargement  Thyroiditis: No / Yes`,chest:`CHEST
Pulmonary: Stable / PR / PD  New: No / Yes ___
Pneumonitis: No / Yes — distribution ___`,impression:`IMPRESSION — RCC RESPONSE
Therapy: [TKI / Immunotherapy / Other]  Criteria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD]  Sum: ___ mm
IVC: Unchanged / Extended to Level ___ [progression]
New bone: No / Yes [weight-bearing: ortho consult]
Immunotherapy complications: None / [specify]
Response note: [necrosis on TKI = possible PR despite stable size]`}}},cs:{label:"Karcinom ledviny (RCC)",staging:{evidence:"TNM 8. vydání; klasifikace trombu DDŽ Neves 1987 (stupně I–IV); RENAL skóre nefrometrie; guidelines EAU 2024",criticalFindings:["Stupeň trombu DDŽ (Neves)","Kontralaterální ledvina","Postižení nadledviny","Propagace nad bránici"],searchEvidence:"Klasifikace Neves 1987; staging CT EAU 2024; korelace CT a chirurgické úrovně Hallscheidt 2005",searchMismatch:"Většina popíše masu a zmíní trombus DDŽ. Kritická chyba: STUPEŇ trombu DDŽ (Neves I–IV) přesně určuje nutnost kardiálního bypassu. Stupeň IV = kardiochirurg. Hodnoťte DDŽ od renální žíly k pravé síni jako první.",classification:"TNM 8. vydání; klasifikace DDŽ dle Nevese",searchPattern:[{step:1,priority:"critical",title:"Renální žíla + DDŽ — stupeň Neves jako první",detail:"Invaze renální žíly? Pokud ano: sledujte proximálně v DDŽ. I: pod jaterními žilami. II: k jaterním žilám, pod bránicí. III: nad bránicí pod pravou síní. IV: do pravé síně (kardiochirurgie). Stupeň určuje chirurgický tým.",time:"45s"},{step:2,priority:"critical",title:"Kontralaterální ledvina",detail:"Normální = bezpečná radikální nefrektomie. Chybějící/nefunkční/expanze = nutná nefrony šetřící operace.",time:"15s"},{step:3,priority:"critical",title:"Nadledvina — přímá invaze vs. metastáza",detail:"Přímá invaze (kontaktní = T4) vs. samostatný uzel (M1). Mění T vs. M stadium.",time:"15s"},{step:4,priority:"high",title:"Primární tumor",detail:"Velikost, lokalizace, sycení. RENAL nefrometrické skóre.",time:"30s"},{step:5,priority:"high",title:"Uzliny + vzdálené postižení",detail:"Retroperitoneální, hilové, paraaortální. Játra. Kosti (lytické). Baze plic.",time:"20s"},{step:6,priority:"normal",title:"Hrudník (H+B+P)",detail:"Plicní metastázy.",time:"15s"}],template:{tumorSpecific:`PRIMÁRNÍ RENÁLNÍ MASA
Strana: P/L  Lokalizace: Horní/Střední/Dolní pól  Přední/Zadní/Mesiální
Velikost: ___ × ___ × ___ mm  Sycení: Homo/Hetero/Solidní/Cystická
Bosniakova klas. [cystická]: ___  Tuk renálního sinu: Ne/Ano [T3a]
Perirenální tuk: Ne/Ano — ___ mm za pouzdrem [T3a]  Gerotova fascie: Intaktní/Porušena [T4]
Sousední orgán: Ne/Ano — ___ [T4]

TROMBUS DDŽ [Neves — hodnotit před stagingem]
Renální žíla: Normální / Trombus — rozsah ___  DDŽ: Ne / Ano
  NEVES: I (pod jaterními žilami) / II (k jaterním žilám, pod bránicí)
         III (nad bránicí, pod PS) / IV (v pravé síni — kardiochirurgie)
  → STUPEŇ NEVES: ___
Sycení trombu: Ne [blandní] / Ano [nádorový]
Kontralaterální renální žíla: Průchodná / Trombus

NADLEDVINY
Ipsilaterální: Normální / Přímá invaze [T4] / Samostatný uzel [M1] — ___ mm
Kontralaterální: Normální / Léze ___`,abdomen:`MÍZNÍ UZLINY
Hilové: Norm. / ___ mm  Retroperitoneální: Norm. / ___ mm
Paraaortální/parakaválně: Norm. / ___

VZDÁLENÉ
Játra: Ne / Ano ___  Kontralaterální ledvina: Normální / [patologie — nefrony šetřící]
Kosti: Ne / Lytická — ___

T STADIUM
T1a ≤4 cm / T1b >4–7 cm / T2a >7–10 cm / T2b >10 cm (vše omezeno na ledvinu)
T3a: Renální žíla NEBO perirenální/sinusový tuk  T3b: DDŽ pod bránicí (Neves I–II)
T3c: DDŽ nad bránicí nebo PS (Neves III–IV)  T4: Gerotova fascie / přímá invaze nadledviny
→ T___ N___ M___`,chest:`HRUDNÍK
Plicní mets: Ne / Ano ___  Mediastinální: Normální / ___`,impression:`ZÁVĚR — STAGING KARCINOMU LEDVINY
Primář: [strana, pól], ___ mm  DDŽ: Bez postižení / Neves stupeň ___ [kardiochirurgie při III–IV]
Nadledvina: Nepostižena / Přímá invaze T4 / Metastáza M1  Uzliny: N0/N1
M: M0/M1  → Stadium: T___ N___ M___
Kontralaterální ledvina: Normální / [patologie — nutná nefrony šetřící operace]`}},response:{evidence:"RECIST 1.1; iRECIST 2017 pro imunoterapii; EAU 2024; pseudoprogrese při imunoterapii",criticalFindings:["Nový trombus DDŽ","Nové kostní mets (nosná kost)","Komplikace imunoterapie","Bilaterální nadledviny"],searchEvidence:"Eisenhauer 2009; Seymour 2017 iRECIST; TKI: nekróza bez změny velikosti = odpověď",searchMismatch:"RCC na TKI často vykazuje nekrózu bez zmenšení — RECIST podhodnocuje odpověď. Vždy uveďte změny denzity. Imunoterapie: možná pseudoprogrese.",criteria:"RECIST 1.1 (TKI); iRECIST (imunoterapie)",searchPattern:[{step:1,priority:"critical",title:"Kontext léčby",detail:"TKI (očekávejte nekrózu — změna denzity = odpověď), imunoterapie (možná pseudoprogrese), inhibitor mTOR.",time:"10s"},{step:2,priority:"critical",title:"Nový trombus DDŽ / propagace",detail:"Nový nebo rozšiřující se trombus DDŽ = nejvyšší priorita progrese.",time:"20s"},{step:3,priority:"critical",title:"Nové kostní mets — nosná kost",detail:"Krček femuru, obratlové tělo = hrozící fraktura = ortopedická urgence.",time:"20s"},{step:4,priority:"high",title:"Cílové léze — velikost + denzita",detail:"Velikost RECIST. PLUS změna denzity (nekróza při TKI = odpověď i při stabilní velikosti).",time:"45s"},{step:5,priority:"high",title:"Komplikace imunoterapie",detail:"Nefritida (oboustranné kortikální změny), kolitida, adrenalitida, tyroiditida.",time:"20s"},{step:6,priority:"normal",title:"Hrudník",detail:"Plicní odpověď.",time:"15s"}],template:{tumorSpecific:`PRIMÁŘ / LŮŽKO PO NEFREKTOMII
[Primář in situ]: Vel.: Dříve ___ mm → ___ mm  Denzita: Nezměněna / Zvýšená nekróza [TKI]
DDŽ: Dříve stupeň ___ → Aktuálně stupeň ___ [propagace = progrese]
[Po nefrektomii]: Lůžko: Bez recidivy / Recidiva — ___ mm

KOSTNÍ METS [nejčastější místo progrese RCC]
Nové lytické: Ne / Ano — ___ [nosná kost: Ne / Ano — ortop. urgence]
Známé: Stabilní / Progredující / Sklerotická odpověď`,abdomen:`RECIST 1.1 / iRECIST
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %  Denzita: ___ HU (dříve ___) Nekróza↑: Ne/Ano
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm / Dříve ___  Změna: ___ %  Odpověď: CR/PR/SD/PD
[Imunoterapie: zvětšení → iUPD, potvrdit za 4 týdny]

KOMPLIKACE IMUNOTERAPIE
Nefritida: Ne / Ano — obostr. kortikální změny ___  Kolitida: Ne / Ano ___
Adrenalitida: Ne / Ano — obostr. zvětšení  Tyroiditida: Ne / Ano`,chest:`HRUDNÍK
Plicní: Stabilní / PR / PD  Nové: Ne / Ano ___
Pneumonitida: Ne / Ano — distribuce ___`,impression:`ZÁVĚR — ODPOVĚĎ KARCINOMU LEDVINY
Léčba: [TKI / Imunoterapie / Jiná]  Kritéria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD]  Součet: ___ mm
DDŽ: Nezměněno / Propagace na stupeň ___ [progrese]
Nové kostní mets: Ne / Ano [nosná kost: ortop. konzultace]
Komplikace: Žádné / [specifikovat]`}}}},{id:"lymphoma",validExtents:["cap","ncap"],en:{label:"Lymphoma",staging:{evidence:"Lugano Classification 2014 (Cheson JCO 2014); Ann Arbor/Cotswolds; ESMO lymphoma guidelines 2023",criticalFindings:["Mediastinal bulk >10cm","Airway compromise","Spinal cord compression","Pericardial involvement"],searchEvidence:"Cheson 2014 Lugano CT criteria; Cotswolds Ann Arbor; ESMO 2023 CT protocol; bulk disease definition",searchMismatch:"Critical error: applying RECIST to lymphoma. RECIST is NOT used. Correct: Lugano criteria, SPD method, nodal territories. Also: assess ALL territories systematically, not just bulk disease.",classification:"Lugano 2014; Ann Arbor/Cotswolds staging",searchPattern:[{step:1,priority:"critical",title:"Mediastinal Bulk + Airway",detail:">10cm = bulk (worse prognosis, different RT). Tracheal compression — measure lumen. SVC compression. Pericardial involvement.",time:"20s"},{step:2,priority:"critical",title:"All Nodal Territories — Systematic",detail:"Waldeyer's (if N+C), cervical, supraclavicular, axillary, mediastinal, hilar, coeliac, portal, splenic, mesenteric, para-aortic, iliac, inguinal. SA >10mm (>15mm mediastinal). Each territory.",time:"90s"},{step:3,priority:"critical",title:"Spleen",detail:"Splenomegaly (>13cm CC). Focal lesions = Stage IV. Homogeneous vs nodular.",time:"15s"},{step:4,priority:"high",title:"Extranodal Sites (E-lesions)",detail:"Bone, liver focal, lung, renal, other. Each = Stage IV.",time:"20s"},{step:5,priority:"high",title:"Bulk Measurement",detail:"Single largest mass ×3 dimensions. >10cm = bulk (HL and DLBCL).",time:"15s"},{step:6,priority:"normal",title:"Neck (N+C+A+P)",detail:"Cervical levels I-VI. Waldeyer's (not visible on CT — flag for PET).",time:"20s"}],template:{tumorSpecific:`TYPE: ___  [HL / DLBCL / FL / MCL / Other ___]

MEDIASTINUM [assess first]
Mass: No / Yes — ___ × ___ × ___ mm  Bulk (>10cm): No / Yes
Tracheal lumen: ___ mm  SVC: Patent / Compressed — collaterals: No / Yes
Pericardium: No / Yes  Pleura: No / Yes — R/L

SPLEEN
Size (CC): ___ cm (normal ≤13)  Splenomegaly: No / Yes
Focal lesions: No / Yes — ___, ___

EXTRANODAL (E-lesions — each = Stage IV)
Bone: No / Yes — ___  Liver focal: No / Yes — ___
Lung: No / Yes — ___  Renal: No / Yes — ___  Other: ___`,abdomen:`ABDOMINAL/PELVIC NODAL TERRITORIES
Coeliac/Porta: No / Yes — ___ mm  Mesenteric: No / Yes — ___ mm
Para-aortic: No / Yes — ___ mm  Iliac: No / Yes — R ___ / L ___ mm
Inguinal: No / Yes — R ___ / L ___ mm

LIVER: Homo enlargement: No / Yes — ___ cm  Focal: No / Yes ___

ANN ARBOR / LUGANO STAGE
I: Single nodal region  II: ≥2 same side diaphragm  III: Both sides ± spleen
IV: Diffuse extranodal  X: Bulk >10cm  E: Contiguous extranodal
→ Stage: ___ [I/II/III/IV] [A/B]`,chest:`CHEST TERRITORIES
Mediastinal: [above]  Hilar R/L: No / Yes — ___ mm
Axillary: No / Yes — R ___ / L ___ mm  Internal mammary: No / Yes

LUNG
Nodules: No / Yes — pattern: peribronchial/subpleural/random
Consolidation: No / Yes  Pleural: [above]`,neck:`CERVICAL TERRITORIES [N+C+A+P]
Levels Ia/Ib: No/Yes ___  IIa/IIb: No/Yes ___  III: No/Yes ___
IV: No/Yes ___  V: No/Yes ___  VI: No/Yes ___
Supraclavicular: No / Yes ___
Waldeyer's: Not assessable on CT [PET/MRI required]`,impression:`IMPRESSION — LYMPHOMA STAGING
Type: ___  Nodal territories: [list]
Mediastinal bulk: No / Yes (___ cm)
Spleen: Normal / Enlarged / Focal  E-sites: None / [specify]
→ Lugano/Ann Arbor: ___ [A/B]  Bulk: Yes / No
Note: PET-CT required for definitive Lugano staging`}},response:{evidence:"Lugano response criteria 2014 (Cheson JCO 2014); NOT RECIST; SPD method; ESMO 2023",criticalFindings:["New disease sites","Bulky residual mass","Transformation signs","Need for PET confirmation"],searchEvidence:"Cheson 2014 Lugano response CT; residual mediastinal mass HL = usually fibrosis; PET for definitive CR",searchMismatch:"RECIST not used. Lugano SPD for ≤6 nodes. Residual mediastinal mass in HL = usually fibrosis on CT — DO NOT call 'residual disease' without PET. CT cannot distinguish disease from fibrosis.",criteria:"Lugano response 2014 (NOT RECIST); SPD method; PET for CR confirmation",searchPattern:[{step:1,priority:"critical",title:"Prior Report — Lugano Baseline",detail:"6 target nodes, their SPD, prior stage. Interim or end-of-treatment?",time:"60s"},{step:2,priority:"critical",title:"New Disease Sites",detail:"New nodal territories or new extranodal sites = progression.",time:"30s"},{step:3,priority:"critical",title:"Mediastinal Residual — Do Not Overcall",detail:"Up to 80% of HL have residual CT mass after treatment — usually fibrosis. Cannot distinguish on CT. Flag for PET.",time:"20s"},{step:4,priority:"high",title:"SPD — 6 Target Nodes",detail:"Longest × perpendicular for each. Sum. CR: all <1.5cm AND SPD ≥75% decrease. PR: ≥50% decrease.",time:"60s"},{step:5,priority:"high",title:"Extranodal + Spleen Response",detail:"E-sites resolved/decreased/stable/increased. Spleen size change.",time:"20s"},{step:6,priority:"normal",title:"Treatment Complications",detail:"Post-RT changes. Opportunistic infections.",time:"15s"}],template:{tumorSpecific:`RESPONSE CONTEXT
Timing: Interim (after ___ cycles) / End of treatment  Prior SPD: ___ mm²

MEDIASTINAL RESIDUAL [do NOT overcall — PET required]
Prior: ___ × ___ mm  Current: ___ × ___ mm
Character: Soft tissue / Likely fibrotic (low density)
→ CT interpretation: Possible residual / Likely fibrosis — PET-CT for definitive CR

SPLEEN: Prior ___ cm → Current ___ cm  Focal: Prior ___ / Current ___

NEW DISEASE: New territories: No / Yes ___  New E-sites: No / Yes ___`,abdomen:`LUGANO SPD — 6 TARGET NODES [longest × perpendicular]
1. ___ current ___ × ___ mm = ___ mm² (prior ___)
2. ___ current ___ × ___ mm = ___ mm² (prior ___)
3. ___ current ___ × ___ mm = ___ mm² (prior ___)
4. ___ current ___ × ___ mm = ___ mm² (prior ___)
5. ___ current ___ × ___ mm = ___ mm² (prior ___)
6. ___ current ___ × ___ mm = ___ mm² (prior ___)
SPD: ___ mm² (prior ___)  Change: ___ %  (CR threshold ≥75%; PR ≥50%)

NON-MEASURABLE: Resolved / Decreased / Stable / Increased
EXTRANODAL: Bone: ___  Liver focal: ___  Other: ___

LUGANO CT RESPONSE
CT CR: All nodes <1.5cm AND SPD ≥75% AND no new lesions
CT PR: SPD ≥50% decrease
CT SD: Neither  CT PD: SPD ≥50% increase OR new lesion
→ CT response: ___  Note: definitive CR requires PET (Deauville 1-2)`,chest:`CHEST
Mediastinal: [tumour-specific]  Hilar: Resolved / Residual ___
Lung: Cleared / Residual ___  Post-RT: No / Yes ___`,neck:`NECK [N+C+A+P]
Cervical: Resolved / Residual — level ___, ___ mm`,impression:`IMPRESSION — LYMPHOMA RESPONSE
Timing: [Interim / End of treatment]
SPD: ___ mm² (prior ___, ___ % change)  CT response: [CR/PR/SD/PD]
Residual mediastinal: No / Yes [likely fibrosis / PET required]
New disease: None / [specify]
PET-CT: Recommended for definitive response assessment`}}},cs:{label:"Lymfom",staging:{evidence:"Luganská klasifikace 2014 (Cheson JCO 2014); Ann Arbor/Cotswolds; guidelines ESMO 2023",criticalFindings:["Bulky mediastinum >10 cm","Kompromitace dýchacích cest","Komprese míchy","Postižení perikardu"],searchEvidence:"Cheson 2014 Lugano CT kritéria; Cotswolds; ESMO 2023 CT protokol",searchMismatch:"Kritická chyba: aplikace RECIST na lymfom. RECIST se NEPOUŽÍVÁ. Správně: Luganská kritéria, metoda SPD, uzlinová teritoria. Systematicky hodnoťte VŠECHNA teritoria.",classification:"Lugano 2014; Ann Arbor/Cotswolds",searchPattern:[{step:1,priority:"critical",title:"Mediastinální bulky + dýchací cesty",detail:">10 cm = bulky. Komprese trachey — změřte průsvit. Komprese HDŽ. Postižení perikardu.",time:"20s"},{step:2,priority:"critical",title:"Všechna uzlinová teritoria — systematicky",detail:"Waldeyerův okruh (K+H), cervikální, supraklavikulární, axilární, mediastinální, hilové, celiakální, portální, splenické, mezenteriální, paraaortální, ilické, inguinální. KO >10 mm (>15 mm mediastinálně).",time:"90s"},{step:3,priority:"critical",title:"Slezina",detail:"Splenomegalie (>13 cm KK). Fokální léze = stadium IV. Homogenní vs. nodulární.",time:"15s"},{step:4,priority:"high",title:"Extranodální místa (E-léze)",detail:"Kosti, fokální játra, plíce, ledviny, jiné. Každé = stadium IV.",time:"20s"},{step:5,priority:"high",title:"Měření bulky",detail:"Jedna největší masa ×3 rozměry. >10 cm = bulky (HL a DLBCL).",time:"15s"},{step:6,priority:"normal",title:"Krk (K+H+B+P)",detail:"Cervikální úrovně I–VI. Waldeyerův okruh (na CT neviditelný — upozornit na PET).",time:"20s"}],template:{tumorSpecific:`TYP: ___  [HL / DLBCL / FL / MCL / Jiný ___]

MEDIASTINUM [hodnotit jako první]
Masa: Ne / Ano — ___ × ___ × ___ mm  Bulky (>10 cm): Ne / Ano
Průsvit trachey: ___ mm  HDŽ: Průchodná / Komprimovaná — kolaterály: Ne / Ano
Perikard: Ne / Ano  Pleura: Ne / Ano — vpravo/vlevo

SLEZINA
Vel. (KK): ___ cm (norma ≤13)  Splenomegalie: Ne / Ano
Fokální léze: Ne / Ano — ___, ___

EXTRANODÁLNÍ (E-léze — každé = stadium IV)
Kosti: Ne / Ano — ___  Fokální játra: Ne / Ano — ___
Plíce: Ne / Ano — ___  Ledviny: Ne / Ano — ___  Jiné: ___`,abdomen:`BŘIŠNÍ/PÁNEVNÍ UZLINOVÁ TERITORIA
Celiakální/Porta: Ne / Ano — ___ mm  Mezenteriální: Ne / Ano — ___ mm
Paraaortální: Ne / Ano — ___ mm  Ilické: Ne / Ano — P ___ / L ___ mm
Inguinální: Ne / Ano — P ___ / L ___ mm

JÁTRA: Homog. zvětšení: Ne / Ano — ___ cm  Fokální: Ne / Ano ___

STAGINGOVÁ KLASIFIKACE ANN ARBOR / LUGANO
I: Jedno teritorium  II: ≥2 stejná strana bránice  III: Obě strany ± slezina
IV: Difuzní extranodální  X: Bulky >10 cm  E: Sousedící extranodální
→ Stadium: ___ [I/II/III/IV] [A/B]`,chest:`HRUDNÍ TERITORIA
Mediastinální: [výše]  Hilové P/L: Ne / Ano — ___ mm
Axilární: Ne / Ano — P ___ / L ___ mm  Parasternální: Ne / Ano

PLÍCE
Uzlíky: Ne / Ano — vzorec: peribronchiální/subpleurální/náhodný
Konsolidace: Ne / Ano  Pleura: [výše]`,neck:`CERVIKÁLNÍ TERITORIA [K+H+B+P]
Úrovně Ia/Ib: Ne/Ano ___  IIa/IIb: Ne/Ano ___  III: Ne/Ano ___
IV: Ne/Ano ___  V: Ne/Ano ___  VI: Ne/Ano ___
Supraklavikulárně: Ne / Ano ___
Waldeyerův okruh: Na CT nehodnotitelný [nutné PET/MRI]`,impression:`ZÁVĚR — STAGING LYMFOMU
Typ: ___  Uzlinová teritoria: [seznam]
Mediastinální bulky: Ne / Ano (___ cm)
Slezina: Norm. / Zvětšena / Fokální postižení  E-místa: Žádná / [specifikovat]
→ Lugano/Ann Arbor: ___ [A/B]  Bulky: Ano / Ne
Poznámka: Pro definitivní staging nutné PET-CT`}},response:{evidence:"Luganská kritéria odpovědi 2014 (Cheson JCO 2014); NE RECIST; metoda SPD; ESMO 2023",criticalFindings:["Nová místa onemocnění","Bulky reziduální masa","Nutnost PET potvrzení"],searchEvidence:"Cheson 2014 Lugano odpověď CT; reziduální masa HL = obvykle fibróza; PET pro definitivní CR",searchMismatch:"RECIST se nepoužívá. Lugano SPD pro ≤6 uzlin. Reziduální mediastinální masa u HL = obvykle fibróza — NENAZVĚTE 'reziduální onemocnění' bez PET.",criteria:"Luganská kritéria odpovědi 2014 (NE RECIST); metoda SPD; PET pro potvrzení CR",searchPattern:[{step:1,priority:"critical",title:"Předchozí protokol — výchozí stav Lugano",detail:"6 cílových uzlin, jejich SPD, předchozí stadium. Interim nebo závěrečné?",time:"60s"},{step:2,priority:"critical",title:"Nová místa onemocnění",detail:"Nová uzlinová teritoria nebo nová extranodální místa = progrese.",time:"30s"},{step:3,priority:"critical",title:"Mediastinální reziduum — nepřehodnoťte",detail:"Až 80 % HL má reziduální CT masu po léčbě — obvykle fibróza. Na CT nelze odlišit. Doporučte PET.",time:"20s"},{step:4,priority:"high",title:"SPD — 6 cílových uzlin",detail:"Nejdelší × kolmý pro každou. Součet. CR: všechny <1,5 cm A SPD ≥75 %. PR: ≥50 %.",time:"60s"},{step:5,priority:"high",title:"Extranodální + slezina",detail:"E-místa ustoupila/zmenšila/stabilní/zvětšila. Změna sleziny.",time:"20s"},{step:6,priority:"normal",title:"Komplikace léčby",detail:"Změny po RT. Oportunní infekce.",time:"15s"}],template:{tumorSpecific:`KONTEXT ODPOVĚDI
Načasování: Interim (po ___ cyklech) / Závěrečné  Předchozí SPD: ___ mm²

MEDIASTINÁLNÍ REZIDUUM [nepřehodnoťte — nutné PET]
Dříve: ___ × ___ mm  Aktuálně: ___ × ___ mm
Charakter: Měkkotkáňový / Pravděpodobně fibrotický (nízká denzita)
→ CT interpretace: Možné reziduum / Pravděpodobně fibróza — PET-CT pro CR

SLEZINA: Dříve ___ cm → Aktuálně ___ cm  Fokální: Dříve ___ / Aktuálně ___

NOVÁ ONEMOCNĚNÍ: Nová teritoria: Ne / Ano ___  Nová E-místa: Ne / Ano ___`,abdomen:`LUGANSKÉ SPD — 6 CÍLOVÝCH UZLIN [nejdelší × kolmý]
1. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
2. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
3. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
4. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
5. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
6. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
SPD: ___ mm² (dříve ___)  Změna: ___ %  (práh CR ≥75 %; PR ≥50 %)

NEMEASURABLE: Ustoupily / Zmenšily / Stabilní / Zvětšily
EXTRANODÁLNÍ: Kosti: ___  Fokální játra: ___  Jiné: ___

LUGANSKÁ CT ODPOVĚĎ
CT CR: Všechny <1,5 cm A SPD ≥75 % A bez nových
CT PR: SPD ≥50 % pokles  CT SD: Ani jedno  CT PD: SPD ≥50 % nárůst NEBO nová léze
→ CT odpověď: ___  Poznámka: definitivní CR vyžaduje PET (Dewauville 1–2)`,chest:`HRUDNÍK
Mediastinální: [specifická část]  Hilové: Ustoupily / Reziduální ___
Plíce: Ustoupily / Reziduální ___  Po RT: Ne / Ano ___`,neck:`KRK [K+H+B+P]
Cervikální: Ustoupily / Reziduální — úroveň ___, ___ mm`,impression:`ZÁVĚR — ODPOVĚĎ LYMFOMU
Načasování: [Interim / Závěrečné]
SPD: ___ mm² (dříve ___, ___ % změna)  CT odpověď: [CR/PR/SD/PD]
Reziduální mediastinum: Ne / Ano [pravděpodobně fibróza / nutné PET]
Nové onemocnění: Žádné / [specifikovat]
PET-CT: Doporučeno pro definitivní hodnocení odpovědi`}}}}],Xm=[{id:"hcc",validExtents:["ap","cap"],en:{label:"HCC",staging:{evidence:"LI-RADS v2018 (ACR); BCLC 2022 (Reig et al. J Hepatol 2022); TNM 8th; EASL HCC guidelines 2022",criticalFindings:["Portal vein tumour thrombus (PVTT)","LI-RADS 5 features","Extrahepatic spread","Background liver disease severity"],searchEvidence:"LI-RADS v2018 ACR; Reig 2022 BCLC update; EASL 2022 CT staging; Forner 2010 diagnostic criteria without biopsy",searchMismatch:"Common error: applying standard tumour staging. HCC staging is inseparable from liver disease (Child-Pugh, MELD). CT must report: (1) tumour features (LI-RADS), (2) portal vein, (3) extrahepatic, (4) background liver — all four required.",classification:"LI-RADS v2018; BCLC 2022; TNM 8th",searchPattern:[{step:1,priority:"critical",title:"Portal Vein — PVTT Changes BCLC Immediately",detail:"Main PV, right/left branches. Bland thrombus (no enhancement) vs tumour thrombus (enhancing, expanded vein). PVTT = BCLC C minimum.",time:"20s"},{step:2,priority:"critical",title:"LI-RADS Per Lesion ≥10mm",detail:"Major features: APHE, washout appearance (PVP/delayed hypoenhancement), enhancing capsule, growth ≥50%/6mo. LI-RADS 5 = HCC in cirrhosis/HBV. LI-RADS M = malignant uncertain type.",time:"60s"},{step:3,priority:"critical",title:"Extrahepatic Disease",detail:"Portocaval, coeliac, para-aortic nodes. Lung (hepatic vein route). Bone. Adrenal.",time:"20s"},{step:4,priority:"high",title:"Background Liver — Operability Context",detail:"Cirrhosis morphology (nodular surface, caudate hypertrophy). Portal hypertension (splenomegaly, varices, ascites). Same tumour in Child-A vs C = completely different management.",time:"20s"},{step:5,priority:"high",title:"Hepatic Vein + FLR",detail:"HV proximity to tumour. FLR estimate for resection. Variant arterial anatomy for TACE planning.",time:"20s"},{step:6,priority:"normal",title:"Chest (C+A+P)",detail:"Pulmonary metastases. Pleural effusion (hydrothorax vs metastatic).",time:"15s"}],template:{tumorSpecific:`PORTAL VEIN [assess first — PVTT changes BCLC immediately]
Main PV: Patent / Thrombus — bland (no enhancement) / Tumour thrombus (enhancing, expanded)
Right PV: Patent / Thrombus ___  Left PV: Patent / Thrombus ___
→ PVTT: Absent / Present [BCLC C minimum]

LESION(S) — LI-RADS v2018
Lesion 1: Segment ___, ___ mm
  APHE: No / Yes  Washout (PVP/delayed hypo): No / Yes
  Enhancing capsule: No / Yes  Growth ≥50%/6mo: No / Yes / Unknown
  LI-RADS: 1 / 2 / 3 / 4 / 5 / M / TIV
Lesion 2: Segment ___, ___ mm  LI-RADS: ___
Total: Solitary / 2-3 / >3 lesions  Max: ___ mm

HEPATIC VEINS
Proximity to tumour: >10mm / 5-10mm / <5mm — vessel ___
MHV/LHV/RHV involvement: No / Yes — ___

BACKGROUND LIVER
Surface: Smooth / Nodular [cirrhosis]  Caudate hypertrophy: No / Yes
Splenomegaly: No / Yes — ___ cm  Varices: Absent / GEJ / Other ___
Ascites: No / Yes — volume ___  → Cirrhosis: No / Possible / Probable / Definite`,abdomen:`EXTRAHEPATIC
Portocaval: Normal / ___ mm  Coeliac/para-aortic: Normal / ___
Adrenal: Normal / ___  Peritoneum: Clear / Deposits ___

BCLC [Reig 2022 — correlate with PS and Child-Pugh]
0 (Very early): Single <2cm, PS 0, Child-A  A (Early): ≤3 lesions ≤3cm, Child-A/B
B (Intermediate): Multinodular, PS 0, Child-A/B  C (Advanced): PVTT or extrahepatic, PS 1-2
D (Terminal): PS 3-4, Child-C
→ CT-based BCLC: ___ [definitive requires PS + Child-Pugh]`,chest:`CHEST
Pulmonary mets: No / Yes ___  Pleural: No / Yes [hydrothorax vs metastatic]`,impression:`IMPRESSION — HCC STAGING
Tumour: ___ lesion(s), max ___ mm, LI-RADS ___
Portal vein: No PVTT / PVTT [bland / tumour thrombus]
Extrahepatic: Absent / Present — ___
Background liver: [cirrhosis severity]
→ CT-based BCLC: ___  [Definitive needs PS + Child-Pugh]
Note: [resection / TACE / systemic / transplant — correlate with liver function]`}},response:{evidence:"mRECIST (Lencioni & Llovet 2010 — validated for HCC); NOT RECIST 1.1; LI-RADS Treatment Response v2018 (LR-TR)",criticalFindings:["Viable tumour (APHE) in treated lesion","New HCC lesions","PVTT development","Liver decompensation"],searchEvidence:"Lencioni 2010 mRECIST validation; LI-RADS TRA v2018; RECIST 1.1 overestimates failure by measuring necrotic tissue",searchMismatch:"RECIST 1.1 NOT appropriate for HCC. mRECIST measures only VIABLE (enhancing) portion on arterial phase. Post-TACE necrosis = treatment success. Using RECIST calls treated necrosis 'stable disease' instead of 'complete response'.",criteria:"mRECIST (Lencioni & Llovet 2010); LI-RADS Treatment Response v2018",searchPattern:[{step:1,priority:"critical",title:"Viable Tumour — APHE Only",detail:"For each treated lesion: residual APHE? Only enhancing viable component is the mRECIST target. Non-enhancing = necrosis = response.",time:"45s"},{step:2,priority:"critical",title:"New HCC Lesions",detail:"New APHE + washout = new HCC = PD. Check ALL segments.",time:"30s"},{step:3,priority:"critical",title:"PVTT Status",detail:"New or extension = major progression.",time:"15s"},{step:4,priority:"high",title:"LR-TR Classification",detail:"LR-TR Nonviable: no APHE. LR-TR Equivocal: intermediate. LR-TR Viable: definite APHE in treated zone.",time:"30s"},{step:5,priority:"high",title:"Liver Decompensation",detail:"Ascites change. Splenomegaly. New varices.",time:"20s"},{step:6,priority:"normal",title:"Chest",detail:"Pulmonary mets. New pleural effusion.",time:"15s"}],template:{tumorSpecific:`mRECIST [Lencioni & Llovet 2010 — viable tumour only]
Lesion 1: Segment ___, treatment: [TACE/ablation/SBRT/systemic]
  APHE: Absent [necrosis/response] / Present — ___ mm
  LR-TR: Nonviable / Equivocal / Viable
  Total: ___ mm  Viable: ___ mm
Lesion 2: ___  LR-TR: ___  Viable: ___ mm

mRECIST viable sum: ___ mm (prior ___) Change: ___ %

NEW HCC [APHE + washout = new HCC = PD]
None / Yes — LI-RADS ___, segment ___, ___ mm

PVTT: Prior ___ → Current: Unchanged / New / Extended / Resolved

mRECIST CATEGORIES
CR: No viable tumour (no APHE all lesions)  PR: ≥30% decrease viable sum
SD: Neither  PD: ≥20% increase OR new HCC OR PVTT
→ mRECIST: ___`,abdomen:`LIVER DISEASE
Ascites: Prior ___ → Current ___ [increase = decompensation]
Spleen: Prior ___ cm → Current ___  Varices: Unchanged / New ___
Extrahepatic: Nodes: Stable / New ___  Peritoneum: Clear / Deposits ___`,chest:`CHEST [C+A+P]
Pulmonary mets: No new / New ___  Pleural: Unchanged / New ___`,impression:`IMPRESSION — HCC RESPONSE
Treatment: [TACE/ablation/sorafenib/immunotherapy]
mRECIST: [CR/PR/SD/PD]  Viable sum: ___ mm (prior ___; ___ %)
LR-TR: Lesion 1: [Nonviable/Equivocal/Viable]
New HCC: None / Yes [PD]  PVTT: Absent / Present [new/unchanged/resolved]
Liver decompensation: No / Signs — ___`}}},cs:{label:"Hepatocelulární karcinom (HCC)",staging:{evidence:"LI-RADS v2018 (ACR); BCLC 2022 (Reig et al. J Hepatol 2022); TNM 8. vydání; guidelines EASL 2022",criticalFindings:["PVTT","Znaky LI-RADS 5","Extrahepatální šíření","Závažnost základního jaterního onemocnění"],searchEvidence:"LI-RADS v2018; aktualizace BCLC Reig 2022; EASL 2022; Forner 2010 diagnostická kritéria bez biopsie",searchMismatch:"Časté: aplikace standardního stagingového přístupu. Staging HCC je neoddělitelný od jaterního onemocnění. CT musí hlásit: LI-RADS, vrátnicová žíla, extrahepatální, základní jaterní — všechny čtyři.",classification:"LI-RADS v2018; BCLC 2022; TNM 8. vydání",searchPattern:[{step:1,priority:"critical",title:"Vrátnicová žíla — PVTT okamžitě mění BCLC",detail:"Kmen, pravá/levá větev. Blandní (bez sycení) vs. nádorový trombus (sycení, rozšíření). PVTT = minimálně BCLC C.",time:"20s"},{step:2,priority:"critical",title:"LI-RADS pro každou lézi ≥10 mm",detail:"Hlavní znaky: APHE, washout, sycené pouzdro, růst ≥50 %/6 měs. LI-RADS 5 = HCC u cirhózy/HBV. LI-RADS M = malignita, nejasný typ.",time:"60s"},{step:3,priority:"critical",title:"Extrahepatální postižení",detail:"Portokavální, celiakální, paraaortální uzliny. Plíce. Kosti. Nadledviny.",time:"20s"},{step:4,priority:"high",title:"Základní jaterní onemocnění — kontext operability",detail:"Morfologie cirhózy (nodulární povrch, hypertrofie kaudátu). Portální hypertenze. Stejný tumor u Child-A vs. C = zcela jiný management.",time:"20s"},{step:5,priority:"high",title:"Jaterní žíly + FLR",detail:"Vztah jaterních žil k tumoru. Budoucí jaterní zbytek. Variantní cévní anatomie pro TACE.",time:"20s"},{step:6,priority:"normal",title:"Hrudník (H+B+P)",detail:"Plicní metastázy. Pleurální výpotek (hepatální hydrotorax vs. metastatický).",time:"15s"}],template:{tumorSpecific:`VRÁTNICOVÁ ŽÍLA [hodnotit jako první — PVTT okamžitě mění BCLC]
Kmen VP: Průchodný / Trombus — blandní / Nádorový (sycení, rozšíření)
Pravá VP: Průchodná / Trombus ___  Levá VP: Průchodná / Trombus ___
→ PVTT: Nepřítomen / Přítomen [minimálně BCLC C]

LÉZE — LI-RADS v2018
Léze 1: Segment ___, ___ mm
  APHE: Ne / Ano  Washout: Ne / Ano  Sycené pouzdro: Ne / Ano  Růst ≥50 %: Ne/Ano/Neznámo
  LI-RADS: 1 / 2 / 3 / 4 / 5 / M / TIV
Léze 2: Segment ___, ___ mm  LI-RADS: ___
Celkem: Solitární / 2–3 / >3 lézí  Maximum: ___ mm

JATERNÍ ŽÍLY
Vzdálenost od tumoru: >10 mm / 5–10 mm / <5 mm — žíla ___
Postižení SJŽ/LJŽ/PJŽ: Ne / Ano — ___

ZÁKLADNÍ JATERNÍ ONEMOCNĚNÍ
Povrch: Hladký / Nodulární [cirhóza]  Hypertrofie kaudátu: Ne / Ano
Splenomegalie: Ne / Ano — ___ cm  Varixy: Nepřítomny / GEJ / Jiné ___
Ascites: Ne / Ano  → Cirhóza: Ne / Možná / Pravděpodobná / Jednoznačná`,abdomen:`EXTRAHEPATÁLNÍ
Portokavální: Norm. / ___ mm  Celiakální/paraaortální: Norm. / ___
Nadledviny: Norm. / ___  Peritoneum: Volné / Depozita ___

BCLC [Reig 2022 — korelovat s PS a Child-Pughem]
0: Solitární <2 cm, PS 0, Child-A  A: ≤3 léze ≤3 cm, Child-A/B
B: Multinodulární, PS 0  C: PVTT nebo extrahepatální, PS 1–2  D: PS 3–4, Child-C
→ CT-based BCLC: ___ [definitivní vyžaduje PS + Child-Pugh]`,chest:`HRUDNÍK
Plicní mets: Ne / Ano ___  Pleura: Ne / Ano [hepatální hydrotorax vs. metastatický]`,impression:`ZÁVĚR — STAGING HCC
Tumor: ___ léze/í, max. ___ mm, LI-RADS ___
Vrátnicová žíla: Bez PVTT / PVTT [blandní / nádorový trombus]
Extrahepatální: Nepřítomno / Přítomno — ___
Základní jaterní: [závažnost cirhózy]
→ CT-based BCLC: ___  [Definitivní vyžaduje PS + Child-Pugh]
Poznámka: [resekce / TACE / systémová / transplantace — korelovat s funkcí jater]`}},response:{evidence:"mRECIST (Lencioni & Llovet 2010); NE RECIST 1.1; LI-RADS Léčebná odpověď v2018 (LR-TR)",criticalFindings:["Viabilní tumor (APHE) v léčené lézi","Nové léze HCC","Vznik PVTT","Dekompenzace jater"],searchEvidence:"Validace mRECIST Lencioni 2010; LI-RADS TRA v2018; RECIST 1.1 nadhodnocuje selhání měřením nekrotické tkáně",searchMismatch:"RECIST 1.1 NENÍ vhodný pro HCC. mRECIST měří pouze VIABILNÍ (enhancující) část v arteriální fázi. Nekróza po TACE = léčebná odpověď. RECIST by označil nekrózu za 'stabilní onemocnění'.",criteria:"mRECIST (Lencioni & Llovet 2010); LI-RADS Léčebná odpověď v2018",searchPattern:[{step:1,priority:"critical",title:"Viabilní tumor — pouze APHE",detail:"Pro každou léčenou lézi: reziduální APHE? Pouze enhancující viabilní komponenta = cíl mRECIST. Bez sycení = nekróza = odpověď.",time:"45s"},{step:2,priority:"critical",title:"Nové léze HCC",detail:"Nové APHE + washout = nové HCC = PD. Zkontrolujte VŠECHNY segmenty.",time:"30s"},{step:3,priority:"critical",title:"Stav vrátnicové žíly",detail:"Nový nebo rozšiřující se = zásadní progrese.",time:"15s"},{step:4,priority:"high",title:"LR-TR klasifikace",detail:"LR-TR Nonviable: bez APHE. LR-TR Equivocal: přechodné. LR-TR Viable: jednoznačný APHE.",time:"30s"},{step:5,priority:"high",title:"Dekompenzace jater",detail:"Změna ascitu. Splenomegalie. Nové varixy.",time:"20s"},{step:6,priority:"normal",title:"Hrudník",detail:"Plicní mets. Nový pleurální výpotek.",time:"15s"}],template:{tumorSpecific:`mRECIST [Lencioni & Llovet 2010 — pouze viabilní tumor]
Léze 1: Segment ___, léčba: [TACE/ablace/SBRT/systémová]
  APHE: Nepřítomen [nekróza/odpověď] / Přítomen — ___ mm
  LR-TR: Nonviable / Equivocal / Viable
  Celkem: ___ mm  Viabilní: ___ mm
Léze 2: ___  LR-TR: ___  Viabilní: ___ mm

Součet viabilní (mRECIST): ___ mm (dříve ___) Změna: ___ %

NOVÉ LÉZE HCC [APHE + washout = nové HCC = PD]
Žádné / Ano — LI-RADS ___, segment ___, ___ mm

VP: Dříve ___ → Aktuálně: Nezměněno / Nový / Rozšíření / Ustoupil

KATEGORIE mRECIST
CR: Bez viabilního tumoru  PR: ≥30 % pokles viabilního součtu
SD: Ani jedno  PD: ≥20 % nárůst NEBO nové HCC NEBO PVTT
→ mRECIST: ___`,abdomen:`JATERNÍ ONEMOCNĚNÍ
Ascites: Dříve ___ → Aktuálně ___ [nárůst = dekompenzace]
Slezina: Dříve ___ cm → Aktuálně ___  Varixy: Nezměněno / Nové ___
Extrahepatální: Uzliny: Stabilní / Nové ___  Peritoneum: Volné / Depozita ___`,chest:`HRUDNÍK [H+B+P]
Plicní mets: Žádné nové / Nové ___  Pleura: Nezměněno / Nový výpotek ___`,impression:`ZÁVĚR — ODPOVĚĎ HCC
Léčba: [TACE/ablace/sorafenib/imunoterapie]
mRECIST: [CR/PR/SD/PD]  Viabilní součet: ___ mm (dříve ___; ___ %)
LR-TR: Léze 1: [Nonviable/Equivocal/Viable]
Nové HCC: Žádné / Ano [PD]  PVTT: Nepřítomen / Přítomen [nový/nezměněný/ustoupil]
Dekompenzace: Ne / Příznaky — ___`}}}},{id:"melanoma",validExtents:["ap","cap","ncap"],en:{label:"Melanoma",staging:{evidence:"TNM 8th AJCC Melanoma (Gershenwald 2017); ESMO melanoma guidelines 2023",criticalFindings:["Brain mets (CT insensitive — MRI required)","In-transit metastases","Cardiac involvement","Bilateral adrenal"],searchEvidence:"Gershenwald 2017 AJCC 8th; ESMO 2023; melanoma metastasises to any organ including unusual sites",searchMismatch:"Standard templates miss: (1) in-transit metastases (subcutaneous between primary and nodes), (2) unusual sites (heart, bowel wall, spleen), (3) brain — CT cannot exclude brain mets. Must search every tissue compartment.",classification:"TNM 8th AJCC Melanoma (Gershenwald 2017)",searchPattern:[{step:1,priority:"critical",title:"Brain — Flag CT Limitation",detail:"CT insensitive for small melanoma brain mets. Always flag in impression that MRI brain is recommended.",time:"10s"},{step:2,priority:"critical",title:"Wide Field — Every Compartment",detail:"Subcutaneous (in-transit/satellite), ALL nodal territories, solid organs (liver, spleen, adrenal, kidney), bowel wall, cardiac, lung, bone.",time:"90s"},{step:3,priority:"critical",title:"In-Transit + Satellite Lesions",detail:"Subcutaneous nodules ≥3mm between primary and first nodal basin = Stage III. Review skin/subcut layer on bone windows.",time:"30s"},{step:4,priority:"high",title:"All Nodal Territories",detail:"Regional (depends on primary). Non-regional = M1a. Pay attention to unusual: mesenteric, retrocrural, diaphragmatic.",time:"20s"},{step:5,priority:"high",title:"Visceral Metastases",detail:"Liver, lung, adrenal (very common in melanoma), spleen (common — unusual in other tumours), bowel wall, cardiac, renal.",time:"30s"},{step:6,priority:"normal",title:"Neck (N+C+A+P)",detail:"Cervical levels. Parotid. Soft tissue.",time:"20s"}],template:{tumorSpecific:`BRAIN
CT brain: Not performed / Performed — No mets / Suspicious ___
→ MRI brain: Recommended [CT insensitive for melanoma brain mets]

IN-TRANSIT / SATELLITE [Stage III if present]
Subcutaneous nodules between primary and nodal basin: No / Yes — ___, ___
→ In-transit: Absent / Present [Stage III]

UNUSUAL SITES [actively check in melanoma]
Cardiac: Normal / Pericardial effusion / Intracardiac mass ___
Bowel wall: Normal / Nodular thickening ___ [bleed risk]
Spleen: Normal / Hypodense nodules ___
Adrenal R/L: Normal / Nodule ___ mm [very common]
Renal: Normal / Lesion ___`,abdomen:`ABDOMINAL NODES [all territories]
Retroperitoneal: No / Yes — ___ mm  Mesenteric: No / Yes — ___ mm
Para-aortic/iliac: No / Yes ___  Inguinal: No / Yes — R ___ / L ___ mm

SOLID ORGANS
Liver: No / Yes — ___  Spleen: Normal / Nodules ___
Peritoneal: No / Yes  Ascites: No / Yes  Bone (lytic): No / Yes — ___`,chest:`CHEST NODES
Mediastinal: No / Yes — ___, ___  Hilar: No / Yes  Axillary: No / Yes — R ___ / L ___ mm

LUNG: Nodules: No / Yes — ___, distribution ___  Pleural: No / Yes

CARDIAC
Pericardial effusion: No / Yes  Cardiac mass: No / Yes — ___`,neck:`NECK [N+C+A+P]
Levels I-VI: No / Yes — level ___, ___ mm  Parotid: Normal / Nodule ___
Posterior triangle: No / Yes  Soft tissue: Normal / Nodule ___`,impression:`IMPRESSION — MELANOMA STAGING
In-transit/satellite: Absent / Present [Stage III]
Nodal: [regional = N; non-regional = M1a]
Visceral: M0/M1a(skin/SQ/distant nodes)/M1b(lung only)/M1c(non-CNS visceral)/M1d(brain)
Adrenal: Normal / Involved [common site]
→ AJCC 8th Stage: ___
Note: MRI brain required for complete staging (CT insensitive)`}},response:{evidence:"RECIST 1.1 (non-immunotherapy); iRECIST 2017 (immunotherapy); ESMO 2023; pseudo-progression ~10% with immunotherapy",criticalFindings:["Pseudo-progression vs true progression","New brain mets","Bilateral adrenal insufficiency risk","Immunotherapy complications"],searchEvidence:"Seymour 2017 iRECIST; Wolchok 2009 immune-related criteria; bilateral adrenal = insufficiency risk",searchMismatch:"Melanoma + immunotherapy = highest pseudo-progression rate. Enlargement in first 12 weeks may be pseudo-progression. Confirm at 4-week follow-up (iUPD). Bilateral adrenal enlargement = adrenal insufficiency — flag clinically.",criteria:"RECIST 1.1 (non-immuno); iRECIST 2017 (immunotherapy — confirm PD at 4 weeks)",searchPattern:[{step:1,priority:"critical",title:"Immunotherapy? — Criteria Change",detail:"PD-1/CTLA-4: use iRECIST. Enlargement ≤12 weeks = possible pseudo-progression. New lesions ≠ automatic PD. Non-immuno: RECIST 1.1.",time:"10s"},{step:2,priority:"critical",title:"New Brain Mets",detail:"Changes treatment significantly. CT inadequate — MRI brain if new symptoms or prior brain disease.",time:"10s"},{step:3,priority:"critical",title:"Bilateral Adrenal — Insufficiency Risk",detail:"Both enlarging = adrenal function at risk. Flag in report.",time:"15s"},{step:4,priority:"high",title:"Wide Field — Same Compartments",detail:"Subcutaneous, cardiac, bowel wall, spleen. Do not use abbreviated survey.",time:"60s"},{step:5,priority:"high",title:"Immunotherapy Complications",detail:"Colitis (colon wall thickening, loss of haustra). Pneumonitis (GGO). Hepatitis (periportal oedema). Nephritis (bilateral cortical). Sarcoid reaction (mediastinal nodes).",time:"30s"},{step:6,priority:"normal",title:"RECIST / iRECIST",detail:"Targets, sum, response. iRECIST: enlargement → iUPD, confirm at next scan.",time:"30s"}],template:{tumorSpecific:`TREATMENT CONTEXT
Therapy: [Immunotherapy PD-1/CTLA-4 / BRAF+MEK / Other ___]
Criteria: RECIST 1.1 / iRECIST [immunotherapy]
Pseudo-progression consideration: No / Yes [new/enlarging ≤12 weeks on immunotherapy]

BRAIN: No new / Cannot exclude — MRI brain recommended
Bilateral adrenal: R ___ mm  L ___ mm  Both enlarged: No / Yes [adrenal insufficiency risk]

IN-TRANSIT / SOFT TISSUE RESPONSE
Prior deposits: ___  Current: Resolved / Decreased / Stable / Increased / New ___

CARDIAC / BOWEL
Pericardial: Unchanged / New effusion  Bowel wall: Normal / New thickening ___`,abdomen:`RECIST 1.1 / iRECIST
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Change: ___ %  Response: CR/PR/SD/PD
[iRECIST: enlargement → iUPD — confirm at 4 weeks]

SOLID ORGANS
Liver: Stable/PR/PD ___  New: No/Yes ___  Spleen nodules: Stable/New ___

IMMUNOTHERAPY COMPLICATIONS
Colitis: No / Yes — ___, wall ___, haustra loss: No/Yes
Hepatitis: No / Yes — periportal oedema ___  Nephritis: No / Yes — bilateral cortical ___
Sarcoid reaction: No / Yes — mediastinal/hilar LAP ___`,chest:`CHEST
Pulmonary: Stable/PR/PD  New: No/Yes ___
Pneumonitis: No / Yes — GGO/consolidation, distribution ___
Axillary/mediastinal: Stable / New [may be sarcoid reaction] ___`,neck:`NECK [N+C+A+P]
Cervical: Stable/PR/PD — ___  New: No/Yes ___`,impression:`IMPRESSION — MELANOMA RESPONSE
Therapy: [immunotherapy/targeted]  Criteria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD/iUPD]  Sum: ___ mm (prior ___; ___ %)
New sites: None / [specify — brain: CT inadequate, MRI recommended]
Bilateral adrenal: No / Yes — adrenal function check warranted
Immunotherapy complications: None / [colitis/pneumonitis/hepatitis/nephritis/sarcoid]
[iRECIST: if iUPD — confirm at 4-week follow-up]`}}},cs:{label:"Melanom",staging:{evidence:"TNM 8. vydání AJCC Melanom (Gershenwald 2017); guidelines ESMO 2023",criticalFindings:["Mozkové mets (CT necitlivé — nutné MRI)","In-transit metastázy","Postižení srdce","Bilaterální nadledviny"],searchEvidence:"Gershenwald 2017 AJCC 8.; ESMO 2023; melanom metastazuje do jakéhokoli orgánu",searchMismatch:"Standardní šablony přehlíží: (1) in-transit metastázy, (2) neobvyklá místa (srdce, stěna střeva, slezina), (3) mozek — CT nevylučuje mozkové mets. Nutno prohledat každý tkáňový kompartment.",classification:"TNM 8. vydání AJCC Melanom (Gershenwald 2017)",searchPattern:[{step:1,priority:"critical",title:"Mozek — upozornit na omezení CT",detail:"CT je málo citlivé pro mozkové mets melanomu. Vždy doporučte MRI mozku v závěru.",time:"10s"},{step:2,priority:"critical",title:"Přehled širokého pole — každý kompartment",detail:"Subkutánně (in-transit/satelitní), VŠECHNA uzlinová teritoria, parenchymatózní orgány (játra, slezina, nadledviny, ledviny), stěna střeva, srdce, plíce, kosti.",time:"90s"},{step:3,priority:"critical",title:"In-transit + satelitní léze",detail:"Subkutánní uzlíky ≥3 mm mezi primárním nádorem a uzlinovým bazénem = stadium III. Revizia kůže/subkutánní vrstvy v kostním okně.",time:"30s"},{step:4,priority:"high",title:"Všechna uzlinová teritoria",detail:"Regionální (závisí na lokalizaci primáru). Neregionální = M1a. Pozor na neobvyklé: mezenteriální, retrocrurální, diafragmatické.",time:"20s"},{step:5,priority:"high",title:"Viscerální metastázy",detail:"Játra, plíce, nadledviny (velmi časté), slezina (časté), stěna střeva, srdce, ledviny.",time:"30s"},{step:6,priority:"normal",title:"Krk (K+H+B+P)",detail:"Cervikální úrovně. Příušnice. Měkké tkáně.",time:"20s"}],template:{tumorSpecific:`MOZEK
CT mozku: Neprovedeno / Provedeno — Bez mets / Suspektní ___
→ MRI mozku: Doporučeno [CT necitlivé pro mozkové mets melanomu]

IN-TRANSIT / SATELITNÍ [stadium III při přítomnosti]
Subkutánní uzlíky mezi primárním a uzlinovým bazénem: Ne / Ano — ___, ___
→ In-transit: Nepřítomny / Přítomny [stadium III]

NEOBVYKLÁ MÍSTA [u melanomu aktivně hledat]
Srdce: Normální / Perikardiální výpotek / Intrakardiální masa ___
Stěna střeva: Normální / Nodulární ztluštění ___ [riziko krvácení]
Slezina: Normální / Hypodenzní uzlíky ___
Nadledviny P/L: Normální / Uzel ___ mm [velmi časté]
Ledviny: Normální / Léze ___`,abdomen:`BŘIŠNÍ UZLINY [všechna teritoria]
Retroperitoneální: Ne / Ano — ___ mm  Mezenteriální: Ne / Ano — ___ mm
Paraaortální/ilické: Ne / Ano ___  Inguinální: Ne / Ano — P ___ / L ___ mm

PARENCHYMATÓZNÍ ORGÁNY
Játra: Ne / Ano — ___  Slezina: Normální / Uzlíky ___
Peritoneum: Ne / Ano  Ascites: Ne / Ano  Kosti (lytické): Ne / Ano — ___`,chest:`HRUDNÍ UZLINY
Mediastinální: Ne / Ano — ___, ___  Hilové: Ne / Ano  Axilární: Ne / Ano — P ___ / L ___ mm

PLÍCE: Uzlíky: Ne / Ano — ___, distribuce ___  Pleura: Ne / Ano

SRDCE
Perikardiální výpotek: Ne / Ano  Intrakardiální masa: Ne / Ano — ___`,neck:`KRK [K+H+B+P]
Úrovně I–VI: Ne / Ano — úroveň ___, ___ mm  Příušnice: Normální / Uzel ___
Zadní trojúhelník: Ne / Ano  Měkké tkáně: Normální / Uzel ___`,impression:`ZÁVĚR — STAGING MELANOMU
In-transit/satelitní: Nepřítomny / Přítomny [stadium III]
Uzliny: [regionální = N; neregionální = M1a]
Viscerální: M0/M1a/M1b(pouze plíce)/M1c(viscerální bez CNS)/M1d(mozek)
Nadledviny: Normální / Postiženy [časté místo]
→ Stadium AJCC 8.: ___
Poznámka: MRI mozku nutné pro kompletní staging (CT necitlivé)`}},response:{evidence:"RECIST 1.1 (non-imunoterapie); iRECIST 2017 (imunoterapie); ESMO 2023; pseudoprogrese ~10 % při imunoterapii",criticalFindings:["Pseudoprogrese vs. skutečná progrese","Nové mozkové mets","Riziko adrenální insuficience","Komplikace imunoterapie"],searchEvidence:"Seymour 2017 iRECIST; bilaterální nadledviny = riziko insuficience",searchMismatch:"Melanom + imunoterapie = nejvyšší míra pseudoprogrese. Zvětšení v prvních 12 týdnech = možná pseudoprogrese. Potvrdit za 4 týdny (iUPD). Bilaterální nadledvinné postižení = upozornit klinicky.",criteria:"RECIST 1.1 (non-imunoterapie); iRECIST 2017 (potvrdit PD za 4 týdny)",searchPattern:[{step:1,priority:"critical",title:"Imunoterapie? — mění kritéria",detail:"PD-1/CTLA-4: použijte iRECIST. Zvětšení ≤12 týdnů = možná pseudoprogrese. Nové léze ≠ automatická PD. Non-imunoterapie: RECIST 1.1.",time:"10s"},{step:2,priority:"critical",title:"Nové mozkové mets",detail:"Výrazně mění léčbu. CT nedostatečné — MRI při nových příznacích nebo předchozím postižením mozku.",time:"10s"},{step:3,priority:"critical",title:"Bilaterální nadledviny — riziko insuficience",detail:"Obě zvětšující se = riziko funkce nadledvin. Upozornit v protokolu.",time:"15s"},{step:4,priority:"high",title:"Přehled širokého pole — stejné kompartmenty",detail:"Subkutánně, srdce, stěna střeva, slezina. Nezkracujte přehled.",time:"60s"},{step:5,priority:"high",title:"Komplikace imunoterapie",detail:"Kolitida (ztluštění stěny tlustého střeva, ztráta haustr). Pneumonitida (GGO). Hepatitida (periportální edém). Nefritida (oboustranně kortikálně). Sarkoidní reakce (mediastinální uzliny).",time:"30s"},{step:6,priority:"normal",title:"RECIST / iRECIST",detail:"Cíle, součet, odpověď. iRECIST: zvětšení → iUPD, potvrdit na dalším snímku.",time:"30s"}],template:{tumorSpecific:`KONTEXT LÉČBY
Léčba: [Imunoterapie PD-1/CTLA-4 / BRAF+MEK / Jiná ___]
Kritéria: RECIST 1.1 / iRECIST [imunoterapie]
Pseudoprogrese: Ne / Ano [nová/zvětšující ≤12 týdnů na imunoterapii]

MOZEK: Žádné nové / Na CT nelze vyloučit — doporučujeme MRI mozku
Bilaterální nadledviny: P ___ mm  L ___ mm  Obě zvětšeny: Ne / Ano [riziko insuficience]

IN-TRANSIT / MĚKKÉ TKÁNĚ
Dříve: ___  Aktuálně: Ustoupily / Zmenšily / Stabilní / Zvětšily / Nové ___

SRDCE / STŘEVO
Perikard: Nezměněno / Nový výpotek  Stěna střeva: Normální / Nové ztluštění ___`,abdomen:`RECIST 1.1 / iRECIST
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Změna: ___ %  Odpověď: CR/PR/SD/PD
[iRECIST: zvětšení → iUPD — potvrdit za 4 týdny]

PARENCHYMATÓZNÍ ORGÁNY
Játra: Stabilní/PR/PD ___  Nové: Ne/Ano ___  Slezina: Stabilní/Nové uzlíky ___

KOMPLIKACE IMUNOTERAPIE
Kolitida: Ne / Ano — ___, stěna ___, haustra: Ne/Ano
Hepatitida: Ne / Ano — periportální edém ___  Nefritida: Ne / Ano — obostr. kortikálně ___
Sarkoidní reakce: Ne / Ano — mediastinální/hilová LAP ___`,chest:`HRUDNÍK
Plicní: Stabilní/PR/PD  Nové: Ne/Ano ___
Pneumonitida: Ne / Ano — GGO/konsolidace, distribuce ___
Axilární/mediastinální: Stabilní / Nové [může být sarkoidní reakce] ___`,neck:`KRK [K+H+B+P]
Cervikální: Stabilní/PR/PD — ___  Nové: Ne/Ano ___`,impression:`ZÁVĚR — ODPOVĚĎ MELANOMU
Léčba: [imunoterapie/cílená]  Kritéria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD/iUPD]  Součet: ___ mm (dříve ___; ___ %)
Nová místa: Žádná / [specifikovat — mozek: CT nedostatečné, doporučit MRI]
Bilaterální nadledviny: Ne / Ano — indikováno vyšetření funkce
Komplikace imunoterapie: Žádné / [kolitida/pneumonitida/hepatitida/nefritida/sarkoidní]
[iRECIST: při iUPD — potvrdit za 4 týdny]`}}}},{id:"gastric",validExtents:["ap","cap"],en:{label:"Gastric",staging:{evidence:"TNM 8th (AJCC/UICC 2017); ESMO gastric guidelines 2022; Borrmann classification",criticalFindings:["Peritoneal metastases (CT sensitivity 30-50%)","Pancreatic invasion T4b","Coeliac nodes","Liver metastases"],searchEvidence:"ESMO 2022 CT staging gastric; Borrmann CT correlation; Sano 2017 peritoneal staging",searchMismatch:"Peritoneal disease is the most important finding and most commonly missed. Omentum, mesentery, pelvic peritoneum must be reviewed before nodal assessment. T stage on CT unreliable without EUS — always note this.",classification:"TNM 8th (AJCC/UICC 2017); Borrmann classification",searchPattern:[{step:1,priority:"critical",title:"Peritoneal Disease — Most Important, Most Missed",detail:"Omentum, mesentery, Douglas pouch, right subphrenic, pelvic peritoneum. CT sensitivity only 30-50% — flag. Ascites without obvious cause = peritoneal until proven otherwise.",time:"30s"},{step:2,priority:"critical",title:"Primary — T Stage Limitation",detail:"T4b signs: loss of fat plane with pancreas, colon, liver. Borrmann type. EUS more accurate for T1-T3.",time:"30s"},{step:3,priority:"critical",title:"Liver Metastases",detail:"Hypovascular on PVP. Bilobar.",time:"15s"},{step:4,priority:"high",title:"Lymph Node Stations",detail:"Perigastric N1, coeliac/hepatoduodenal N2, para-aortic M1.",time:"20s"},{step:5,priority:"high",title:"T4b Adjacent Organs",detail:"Pancreas (posterior), colon, spleen hilum, liver left lobe. Each = T4b.",time:"20s"},{step:6,priority:"normal",title:"Chest (C+A+P)",detail:"Pulmonary mets. Lower mediastinal nodes.",time:"15s"}],template:{tumorSpecific:`PRIMARY TUMOUR
Location: Cardia (GEJ) / Fundus / Body / Antrum / Pylorus / Whole stomach
Borrmann: I (polypoid) / II (fungating) / III (ulcerated infiltrating) / IV (linitis plastica)
Wall thickening: ___ mm  Length: ___ cm  Lumen: Normal / Partial / Severe compromise

T STAGE ON CT [EUS superior for T1-T3]
T3: Through serosa into pericolonic fat — stranding: No / Yes
T4a: Visceral peritoneum: No / Yes
T4b: Pancreas fat plane: Preserved / Lost [T4b]  Colon: Preserved / Lost [T4b]
      Spleen hilum: No / Yes [T4b]  Liver LLoL: No / Yes [T4b]
→ CT T: ___ (EUS more accurate for T1-T3)

PERITONEAL [most critical — CT sensitivity 30-50%]
Omental: No / Yes ___  Mesenteric nodules: No / Yes ___
Douglas pouch: No / Yes  Pelvic: Clear / Deposits ___  Ascites: No / Yes ___
→ CT peritoneal: Absent / Suspected / Present
Note: Staging laparoscopy recommended if peritoneal suspected`,abdomen:`LYMPH NODES
Perigastric N1: No / Yes — ___ mm  Coeliac/hepatoduodenal N2: No / Yes — ___ mm
Para-aortic [M1]: No / Yes — ___ mm  Portocaval: No / Yes ___

LIVER: No mets / Mets — ___, ___ mm, bilobar: No/Yes  Enhancement: Hypovascular

STAGE: CT T: ___  CT N: N0/N1/N2/N3  CT M: M0/M1
Note: CT understages 30-50% — particularly peritoneal and early nodal`,chest:`CHEST
Pulmonary: No / Yes ___  Lower mediastinal: Normal / Enlarged ___`,impression:`IMPRESSION — GASTRIC STAGING
Primary: [location], Borrmann [type], T4b: No / Yes [organ]
Peritoneum: Absent on CT / Suspected / Present [CT sensitivity 30-50%]
Liver: No / Mets ___  Nodes: N___ [coeliac/para-aortic]
→ T___ N___ M___  [Resectable / Borderline / Unresectable]
Recommendation: [resection / neoadjuvant / staging laparoscopy / palliative]`}},response:{evidence:"RECIST 1.1; ESMO 2022; peritoneal response not reliably assessable on CT",criticalFindings:["New peritoneal deposits","Liver progression","Obstruction","Treatment complications"],searchEvidence:"ESMO 2022; CT limitation for peritoneal response",searchMismatch:"Peritoneal response essentially unassessable on CT. Most important response indicators: measurable liver mets and nodes. Primary tumour wall reduction is a surrogate, not a RECIST target.",criteria:"RECIST 1.1; note peritoneal limitation",searchPattern:[{step:1,priority:"critical",title:"New Peritoneal Disease",detail:"New deposits or ascites increase = progression.",time:"20s"},{step:2,priority:"critical",title:"Prior Report + Targets",detail:"Primarily liver mets and nodes as RECIST targets.",time:"60s"},{step:3,priority:"high",title:"Liver + Nodal Response",detail:"RECIST measurement.",time:"45s"},{step:4,priority:"high",title:"Primary Response",detail:"Wall thickening reduction. Obstruction.",time:"20s"},{step:5,priority:"high",title:"Treatment Complications",detail:"Immunotherapy colitis/hepatitis. Surgical complications.",time:"20s"},{step:6,priority:"normal",title:"Chest",detail:"Pulmonary response.",time:"10s"}],template:{tumorSpecific:`PERITONEAL [critical — ascites increase = possible progression]
Omentum: Clear / Stable / New ___  Ascites: Prior ___ → Current ___
Pelvic: Clear / Stable / New ___
Note: CT cannot reliably assess peritoneal response

PRIMARY RESPONSE
Wall: Prior ___ mm → Current ___ mm  Lumen: Improved / Unchanged / Obstructed`,abdomen:`RECIST 1.1
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Response: CR/PR/SD/PD

NODES: Coeliac/perigastric: Stable/Decreased/Increased/New ___
LIVER: Stable/PR/PD ___  New: No/Yes ___

COMPLICATIONS
Immunotherapy: Colitis/Hepatitis ___  Surgical: Normal / Collection / Anastomosis ___`,chest:`CHEST
Pulmonary: Stable / New ___  Mediastinal: Stable / New ___`,impression:`IMPRESSION — GASTRIC RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Peritoneal: Unchanged / Progressed [new deposits / ascites increase]
Note: Peritoneal response not assessable on CT
Complications: None / [specify]`}}},cs:{label:"Karcinom žaludku",staging:{evidence:"TNM 8. vydání; guidelines ESMO 2022; Borrmannova klasifikace",criticalFindings:["Peritoneální mets (citlivost CT 30–50 %)","Invaze do pankreatu T4b","Celiakální uzliny","Jaterní mets"],searchEvidence:"ESMO 2022 CT staging žaludek; Borrmann CT korelace; Sano 2017 peritoneální staging",searchMismatch:"Peritoneální postižení = nejdůležitější a nejčastěji přehlídané. Omentum, mezenterium, pánevní peritoneum nutno hodnotit před uzlinami. T stadium na CT nespolehlivé bez EUS — vždy uvést.",classification:"TNM 8. vydání; Borrmannova klasifikace",searchPattern:[{step:1,priority:"critical",title:"Peritoneální postižení — nejdůležitější, nejčastěji přehlídané",detail:"Omentum, mezenterium, Douglasův prostor, pravý subdiafragmatický prostor, pánevní peritoneum. Citlivost CT pouze 30–50 % — uvést. Ascites bez zjevné příčiny = peritoneální postižení.",time:"30s"},{step:2,priority:"critical",title:"Primář — omezení T stadia",detail:"Příznaky T4b: ztráta tukové vrstvy s pankreatem, tračníkem, játry. Borrmannův typ. EUS přesnější pro T1–T3.",time:"30s"},{step:3,priority:"critical",title:"Jaterní metastázy",detail:"Hypovaskulární v portální fázi. Bilaterální.",time:"15s"},{step:4,priority:"high",title:"Uzlinové stanice",detail:"Perigastrické N1, celiakální/hepatoduodenální N2, paraaortální M1.",time:"20s"},{step:5,priority:"high",title:"T4b sousední orgány",detail:"Pankreas (zadní), tračník, hilus sleziny, levý jaterní lalok. Každé = T4b.",time:"20s"},{step:6,priority:"normal",title:"Hrudník (H+B+P)",detail:"Plicní mets. Dolní mediastinální uzliny.",time:"15s"}],template:{tumorSpecific:`PRIMÁRNÍ TUMOR
Lokalizace: Kardie (GEJ) / Fundus / Tělo / Antrum / Pylorus / Celý žaludek
Borrmann: I (polypoidní) / II (fungující) / III (ulcerující infiltrativní) / IV (linitis plastica)
Ztluštění: ___ mm  Délka: ___ cm  Lumen: Normální / Parciálně / Závažně zúžen

T STADIUM NA CT [EUS superiornější pro T1–T3]
T3: Přes sérózu do tuku — infiltrace: Ne / Ano  T4a: Viscerální peritoneum: Ne / Ano
T4b: Pankreas: Zachovány / Ztraceny [T4b]  Tračník: Zachovány / Ztraceny [T4b]
      Hilus sleziny: Ne / Ano [T4b]  Levý jaterní lalok: Ne / Ano [T4b]
→ CT T: ___ (EUS přesnější pro T1–T3)

PERITONEUM [nejkritičtější — citlivost CT 30–50 %]
Omentum: Ne / Ano ___  Mezenteriální: Ne / Ano ___
Douglasův prostor: Ne / Ano  Pánevní: Volné / Depozita ___  Ascites: Ne / Ano ___
→ CT peritoneum: Nepřítomno / Suspektní / Přítomno
Poznámka: Doporučujeme stagingovou laparoskopii při podezření`,abdomen:`MÍZNÍ UZLINY
Perigastrické N1: Ne / Ano — ___ mm  Celiakální/hepatoduodenální N2: Ne / Ano — ___ mm
Paraaortální [M1]: Ne / Ano — ___ mm  Portokavální: Ne / Ano ___

JÁTRA: Bez mets / Mets — ___, ___ mm, bilat.: Ne/Ano  Sycení: Hypovaskulární

STADIUM: CT T: ___  CT N: N0/N1/N2/N3  CT M: M0/M1
Poznámka: CT podhodnocuje 30–50 % — zejm. peritoneální a časné uzlinové`,chest:`HRUDNÍK
Plicní: Ne / Ano ___  Dolní mediastinální: Normální / Zvětšené ___`,impression:`ZÁVĚR — STAGING KARCINOMU ŽALUDKU
Primář: [lokalizace], Borrmann [typ], T4b: Ne / Ano [orgán]
Peritoneum: Nepřítomno na CT / Suspektní / Přítomno [citlivost 30–50 %]
Játra: Ne / Mets ___  Uzliny: N___ [celiakální/paraaortální]
→ T___ N___ M___  [Resekabilní / Hraničně / Neresekabilní]
Doporučení: [resekce / neoadjuvantní / stagingová laparoskopie / paliativní]`}},response:{evidence:"RECIST 1.1; ESMO 2022; peritoneální odpověď na CT nespolehlivě hodnotitelná",criticalFindings:["Nová peritoneální depozita","Progrese jater","Obstrukce","Komplikace léčby"],searchEvidence:"ESMO 2022; omezení CT pro peritoneální odpověď",searchMismatch:"Peritoneální odpověď na CT prakticky nehodnotitelná. Nejdůležitější ukazatele: měřitelné jaterní mets a uzliny. Primární tumor není cílem RECIST.",criteria:"RECIST 1.1; poznámka k peritoneálnímu omezení",searchPattern:[{step:1,priority:"critical",title:"Nové peritoneální postižení",detail:"Nová depozita nebo nárůst ascitu = progrese.",time:"20s"},{step:2,priority:"critical",title:"Starý protokol + cíle",detail:"Primárně jaterní mets a uzliny jako cíle RECIST.",time:"60s"},{step:3,priority:"high",title:"Odpověď jater + uzlin",detail:"Měření RECIST.",time:"45s"},{step:4,priority:"high",title:"Odpověď primárního tumoru",detail:"Ztluštění stěny. Obstrukce.",time:"20s"},{step:5,priority:"high",title:"Komplikace léčby",detail:"Kolitida/hepatitida při imunoterapii. Chirurgické komplikace.",time:"20s"},{step:6,priority:"normal",title:"Hrudník",detail:"Plicní odpověď.",time:"10s"}],template:{tumorSpecific:`PERITONEUM [kritické — nárůst ascitu = možná progrese]
Omentum: Volné / Stabilní / Nové ___  Ascites: Dříve ___ → Aktuálně ___
Pánevní: Volné / Stabilní / Nové ___
Poznámka: CT nedokáže spolehlivě hodnotit peritoneální odpověď

ODPOVĚĎ PRIMÁRNÍHO TUMORU
Ztluštění: Dříve ___ mm → Aktuálně ___ mm  Lumen: Zlepšen / Nezměněn / Obturován`,abdomen:`RECIST 1.1
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Odpověď: CR/PR/SD/PD

UZLINY: Celiakální/perigastrické: Stabilní/Zmenšení/Nárůst/Nové ___
JÁTRA: Stabilní/PR/PD ___  Nové: Ne/Ano ___

KOMPLIKACE
Imunoterapie: Kolitida/Hepatitida ___  Chirurgické: Normální/Kolekce/Anastomóza ___`,chest:`HRUDNÍK
Plicní: Stabilní / Nové ___  Mediastinální: Stabilní / Nové ___`,impression:`ZÁVĚR — ODPOVĚĎ KARCINOMU ŽALUDKU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Peritoneum: Nezměněno / Progredovalo [nová depozita / nárůst ascitu]
Poznámka: Peritoneální odpověď na CT nehodnotitelná
Komplikace: Žádné / [specifikovat]`}}}},{id:"ovarian",validExtents:["ap","cap"],en:{label:"Ovarian",staging:{evidence:"FIGO 2014 (Prat 2015); ESGO/ESMO 2023; Chi peritoneal mapping; Bristow resectability criteria",criticalFindings:["Diaphragm involvement >2cm","Small bowel mesentery","Porta hepatis deposits","Spleen surface"],searchEvidence:"Prat 2015 FIGO 2014; ESGO/ESMO 2023; Bristow 2002 CT prediction optimal cytoreduction; Chi 2012 peritoneal mapping",searchMismatch:"Standard approach misses the key surgical question: CAN THIS PATIENT BE OPTIMALLY CYTOREDUCED? Depends on peritoneal distribution, not just presence. Diaphragm, spleen surface, small bowel mesentery root, porta hepatis predict surgical outcome.",classification:"FIGO 2014 staging; TNM 8th",searchPattern:[{step:1,priority:"critical",title:"Diaphragm — Bilateral, Most Important Predictor",detail:"Right subphrenic: liver-diaphragm space. Left: spleen-diaphragm. Coronals. >2cm implants = high risk suboptimal cytoreduction.",time:"20s"},{step:2,priority:"critical",title:"Spleen Surface + Hilum",detail:"Surface implants = FIGO IIIC. Hilar involvement requires splenectomy. Parenchymal = FIGO IV.",time:"15s"},{step:3,priority:"critical",title:"Small Bowel Mesentery Root",detail:"Strongest predictor of suboptimal cytoreduction. Nodular thickening, retraction, spoked wheel. Multiple SB serosal implants.",time:"20s"},{step:4,priority:"critical",title:"Porta Hepatis + Coeliac",detail:"Deposits >2cm = high cytoreduction risk. Gastrohepatic ligament.",time:"15s"},{step:5,priority:"high",title:"Primary Tumour + Pelvis",detail:"Adnexal mass. Uterus/bladder/rectum. Pelvic side wall. Douglas pouch.",time:"20s"},{step:6,priority:"high",title:"Omentum + Peritoneal Survey",detail:"Greater omentum caking. Paracolic gutters. Morrison's pouch. Parietal peritoneum.",time:"20s"}],template:{tumorSpecific:`PRIMARY TUMOUR
R adnexa: Normal / Mass — ___ mm, solid/cystic/mixed
L adnexa: Normal / Mass — ___ mm, solid/cystic
Uterus: Normal / Involved  Bladder: Clear / Involved
Rectosigmoid: Clear / Involved — length ___  Pelvic side wall: Clear / R / L
Douglas pouch: Clear / Deposits ___

DIAPHRAGM [most important cytoreduction predictor]
R subphrenic (liver-diaphragm): Clear / Deposits — ___ mm
  Diaphragm implants: None / <2cm / >2cm [>2cm = high suboptimal risk]
L subphrenic (spleen-diaphragm): Clear / Deposits ___

SPLEEN
Surface implants: None / Yes — ___, ___ mm [FIGO IIIC]
Hilar: No / Yes [splenectomy required]  Parenchymal: No / Yes [FIGO IV]

SMALL BOWEL MESENTERY [strong cytoreduction predictor]
Root: Clear / Nodular thickening / Retraction / Spoked wheel
SB serosal: None / <3 sites / Multiple — extent ___

PORTA HEPATIS / COELIAC
Porta hepatis: Clear / Deposits — ___ mm [>2cm = difficult resection]
Coeliac: Normal / ___  Gastrohepatic ligament: Clear / Involved`,abdomen:`OMENTUM
Greater omentum: Normal / Caking — extent ___, thickness ___
Lesser omentum: Normal / Involved

PERITONEAL MAPPING
R paracolic: Clear / Deposits ___  L paracolic: Clear / Deposits ___
Morrison's (hepatorenal): Clear / Deposits ___
Anterior parietal: Clear / Deposits ___  Pelvic parietal: Clear / Deposits ___
Ascites: No / Yes — volume ___, character ___

LYMPH NODES
Pelvic (iliac/obturator): No / Yes — ___ mm
Para-aortic: No / Yes — ___ mm [FIGO IIIC if regional]
Mediastinal/supraclavicular: No / Yes [FIGO IVB]

LIVER
Capsular deposits: No / Yes — ___ mm [FIGO IIIC]
Parenchymal: No / Yes [FIGO IV]

FIGO 2014
I: Confined to ovaries/tubes  II: Pelvic extension
IIIA: Microscopic peritoneal or retroperitoneal nodes
IIIB: Peritoneal implants ≤2cm ± retroperitoneal nodes
IIIC: Peritoneal >2cm ± nodes (including liver/spleen surface)
IVA: Pleural effusion positive cytology  IVB: Parenchymal mets / extra-abdominal nodes
→ CT FIGO stage: ___`,chest:`CHEST
Pleural effusion: No / Yes — R/L [cytology required for FIGO IVA]
Pulmonary mets: No / Yes [FIGO IVB]  Mediastinal: Normal / Enlarged [FIGO IVB]`,impression:`IMPRESSION — OVARIAN STAGING
Primary: [bilateral/unilateral], solid/cystic, ___
Diaphragm: None / <2cm / >2cm [cytoreduction predictor]
Spleen: Surface [IIIC] / Parenchymal [IV]
SB mesentery: Clear / Involved [cytoreduction predictor]
Porta hepatis: Clear / >2cm deposits
→ CT FIGO Stage: ___
Cytoreduction likelihood: Favourable / Borderline / Unlikely
Recommendation: [upfront surgery / neoadjuvant + interval / laparoscopy]`}},response:{evidence:"RECIST 1.1 (Eisenhauer 2009); GCIG CA-125 criteria (Rustin 2011); ESGO/ESMO 2023; CT peritoneal sensitivity limitations",criticalFindings:["New peritoneal deposits","Bowel obstruction","Diaphragm/spleen recurrence","Pelvic recurrence"],searchEvidence:"Eisenhauer 2009; Rustin 2011 GCIG CA-125; CT very insensitive for small implants (<5mm)",searchMismatch:"CT very insensitive for small peritoneal implants. Response must combine CT + CA-125 + symptoms. Do not over-call CT CR — most cases have residual microscopic disease.",criteria:"RECIST 1.1 for measurable; GCIG CA-125 criteria; note CT peritoneal limitation",searchPattern:[{step:1,priority:"critical",title:"Bowel Obstruction Signs",detail:"SBO/LBO from recurrent disease = immediate communication.",time:"15s"},{step:2,priority:"critical",title:"Prior Report + Targets",detail:"Liver mets, lymph nodes, large measurable deposits (>10mm).",time:"60s"},{step:3,priority:"critical",title:"Peritoneal Survey",detail:"Same sites as staging. New = progression. Ascites change.",time:"30s"},{step:4,priority:"high",title:"Diaphragm + Spleen Response",detail:"Most sensitive recurrence sites post-cytoreduction.",time:"15s"},{step:5,priority:"high",title:"Pelvic Recurrence",detail:"Anastomotic recurrence. Pelvic side wall. Vaginal vault.",time:"20s"},{step:6,priority:"normal",title:"RECIST + CA-125",detail:"Discordant RECIST SD / CA-125 PD = progressive by GCIG.",time:"15s"}],template:{tumorSpecific:`PERITONEAL RESPONSE [CT insensitive — note limitation]
Omental: Resolved / Decreased / Stable / Increased / New ___
Diaphragm: Resolved / Decreased / Stable / Increased / New ___
Pelvic: Resolved / Decreased / Stable / Increased / New ___
Ascites: Prior ___ → Current ___
Note: CT CR for peritoneal unreliable — residual microscopic disease possible

PELVIC / SURGICAL BED
Vaginal vault: Normal / Recurrence ___  Anastomosis: Normal / Recurrence ___
Pelvic side wall: Clear / Recurrence ___`,abdomen:`RECIST 1.1
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Response: CR/PR/SD/PD

LIVER: Capsular: Resolved/Stable/Progressed ___  Parenchymal: ___
NODES: Para-aortic: Stable/Decreased/Increased/New ___

BOWEL [obstruction risk]
Obstruction: No / Partial / Complete — location ___
SB tethering: No / Yes — partial obstruction risk

COMPLICATIONS
Bevacizumab: Bowel: Normal / Perforation risk / Fistula
Surgical: Normal / Anastomotic / Lymphocele ___ / Hernia ___`,chest:`CHEST
Pleural: No / R / L — change ___  Pulmonary: Stable / New ___`,impression:`IMPRESSION — OVARIAN RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Peritoneal: Responding / Stable / Progressing [CT limited — CA-125 correlation required]
Diaphragm: Resolved / Stable / Progressed
Obstruction: No / Yes — [location, urgency]
Note: GCIG criteria: CA-125 ≥2× nadir = PD regardless of RECIST`}}},cs:{label:"Ovariální karcinom",staging:{evidence:"FIGO 2014 (Prat 2015); ESGO/ESMO 2023; peritoneální mapování Chi; kritéria resekability Bristow",criticalFindings:["Postižení bránice >2 cm","Mezenterium TT","Depozita v porta hepatis","Povrch sleziny"],searchEvidence:"Prat 2015 FIGO 2014; ESGO/ESMO 2023; Bristow 2002 CT predikce; Chi 2012 mapování peritonea",searchMismatch:"Standardní přístup přehlíží klíčovou chirurgickou otázku: MŮŽE BÝT OPTIMÁLNĚ CYTOREDUKOVATELNÁ? Závisí na distribuci peritoneálního postižení. Bránice, povrch sleziny, kořen mezenteria TT, porta hepatis predikují chirurgický výsledek.",classification:"FIGO 2014; TNM 8. vydání",searchPattern:[{step:1,priority:"critical",title:"Bránice — oboustranně, nejdůležitější prediktor",detail:"Pravý subdiafragmatický prostor: játra–bránice. Levý: slezina–bránice. Koronální rekonstrukce. Implantáty >2 cm = vysoké riziko suboptimální cytoredukce.",time:"20s"},{step:2,priority:"critical",title:"Povrch sleziny + hilus",detail:"Implantáty = FIGO IIIC. Postižení hilu = nutná splenektomie. Parenchymatózní = FIGO IV.",time:"15s"},{step:3,priority:"critical",title:"Kořen mezenteria TT",detail:"Nejsilnější prediktor suboptimální cytoredukce. Nodulární ztluštění, retrakce, spoked wheel. Mnohočetné serosal implantáty.",time:"20s"},{step:4,priority:"critical",title:"Porta hepatis + celiakální oblast",detail:"Depozita >2 cm = vysoké cytoreduktivní riziko. Hepatogastrické ligamentum.",time:"15s"},{step:5,priority:"high",title:"Primární tumor + pánev",detail:"Adnexální masa. Děloha/měchýř/rektum. Pánevní stěna. Douglasův prostor.",time:"20s"},{step:6,priority:"high",title:"Omentum + přehled peritonea",detail:"Omentální cake. Parakolické žlábky. Morrisonova kapsa. Parietální peritoneum.",time:"20s"}],template:{tumorSpecific:`PRIMÁRNÍ TUMOR
P adnex: Normální / Masa — ___ mm, solidní/cystická/smíšená
L adnex: Normální / Masa — ___ mm
Děloha: Normální / Postižena  Měchýř: Volný / Postižen
Rektosigma: Volné / Postiženo — délka ___  Pánevní stěna: Volná / P/L
Douglasův prostor: Volný / Depozita ___

BRÁNICE [nejdůležitější prediktor cytoredukce]
P subdiafragmaticky (játra–bránice): Volný / Depozita — ___ mm
  Implantáty bránice: Žádné / <2 cm / >2 cm [>2 cm = vysoké riziko]
L subdiafragmaticky (slezina–bránice): Volný / Depozita ___

SLEZINA
Povrchové implantáty: Žádné / Ano — ___, ___ mm [FIGO IIIC]
Hilus: Ne / Ano [nutná splenektomie]  Parenchymatózní: Ne / Ano [FIGO IV]

MEZENTERIUM TT [silný prediktor cytoredukce]
Kořen: Volný / Nodulární ztluštění / Retrakce / Spoked wheel
Serosal TT: Žádné / <3 místa / Mnohočetné — rozsah ___

PORTA HEPATIS / CELIAKÁLNÍ
Porta hepatis: Volná / Depozita — ___ mm [>2 cm = obtížná resekce]
Celiakální: Normální / ___  Hepatogastrické ligamentum: Volné / Postiženo`,abdomen:`OMENTUM
Velké: Normální / Cake — rozsah ___, tloušťka ___  Malé: Normální / Postiženo

MAPOVÁNÍ PERITONEA
P parakolický žlábek: Volný / Depozita ___  L parakolický: Volný / Depozita ___
Morrisonova kapsa: Volná / Depozita ___
Přední parietální peritoneum: Volné / Depozita ___  Pánevní: Volné / Depozita ___
Ascites: Ne / Ano — množství ___, charakter ___

MÍZNÍ UZLINY
Pánevní (ilické/obturátorové): Ne / Ano — ___ mm
Retroperitoneální/paraaortální: Ne / Ano — ___ mm [FIGO IIIC]
Mediastinální/supraklavikulární: Ne / Ano [FIGO IVB]

JÁTRA
Kapsulární depozita: Ne / Ano — ___ mm [FIGO IIIC]  Parenchymatózní: Ne / Ano [FIGO IV]

FIGO 2014
I: Ohraničen na ovaria  II: Pánevní šíření
IIIA: Mikroskopické peritoneální nebo retroperitoneální uzliny
IIIB: Peritoneální implantáty ≤2 cm ± uzliny
IIIC: Peritoneální >2 cm ± uzliny (vč. povrchu jater/sleziny)
IVA: Pleurální výpotek pozitivní cytologie  IVB: Parenchymatózní / extraabdominální uzliny
→ CT FIGO stadium: ___`,chest:`HRUDNÍK
Pleurální výpotek: Ne / Ano — P/L [cytologie pro FIGO IVA]
Plicní mets: Ne / Ano [FIGO IVB]  Mediastinální: Normální / Zvětšené [FIGO IVB]`,impression:`ZÁVĚR — STAGING OVARIÁLNÍHO KARCINOMU
Primář: [bilat./unilat.], solidní/cystický, ___
Bránice: Bez postižení / <2 cm / >2 cm [prediktor cytoredukce]
Slezina: Povrch [IIIC] / Parenchym [IV]
Mezenterium TT: Volné / Postiženo [prediktor]  Porta hepatis: Volná / >2 cm
→ CT FIGO stadium: ___
Pravděpodobnost optimální cytoredukce: Příznivá / Hraniční / Nepravděpodobná
Doporučení: [primární operace / neoadjuvantní + intervalová / laparoskopie]`}},response:{evidence:"RECIST 1.1; kritéria CA-125 GCIG (Rustin 2011); ESGO/ESMO 2023; CT necitlivé pro malé implantáty",criticalFindings:["Nová peritoneální depozita","Střevní obstrukce","Recidiva bránice/sleziny","Pánevní recidiva"],searchEvidence:"Eisenhauer 2009; Rustin 2011 GCIG CA-125; CT velmi necitlivé pro implantáty <5 mm",searchMismatch:"CT velmi necitlivé pro malé peritoneální implantáty. Odpověď musí kombinovat CT + CA-125 + příznaky. Nepřehodnoťte CT CR — většina případů má reziduální mikroskopické onemocnění.",criteria:"RECIST 1.1 pro měřitelné; kritéria CA-125 GCIG; poznámka k peritoneálnímu omezení",searchPattern:[{step:1,priority:"critical",title:"Příznaky střevní obstrukce",detail:"SBO/LBO z recidivujícího onemocnění = okamžité sdělení.",time:"15s"},{step:2,priority:"critical",title:"Starý protokol + cíle",detail:"Jaterní mets, uzliny, velká měřitelná depozita (>10 mm).",time:"60s"},{step:3,priority:"critical",title:"Přehled peritonea",detail:"Stejná místa jako při stagingu. Nová = progrese. Změna ascitu.",time:"30s"},{step:4,priority:"high",title:"Odpověď bránice + sleziny",detail:"Nejcitlivější místa recidivy po cytoredukci.",time:"15s"},{step:5,priority:"high",title:"Pánevní recidiva",detail:"Anastomotická recidiva. Pánevní stěna. Poševní pahýl.",time:"20s"},{step:6,priority:"normal",title:"RECIST + CA-125",detail:"Diskordance RECIST SD / CA-125 PD = progrese dle GCIG.",time:"15s"}],template:{tumorSpecific:`PERITONEÁLNÍ ODPOVĚĎ [CT necitlivé — poznamenat omezení]
Omentum: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Bránice: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Pánevní: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Ascites: Dříve ___ → Aktuálně ___
Poznámka: CT CR pro peritoneum nespolehlivé — možné reziduální mikroskopické onemocnění

PÁNEVNĚ / CHIR. LŮŽKO
Poševní pahýl: Normální / Recidiva ___  Anastomóza: Normální / Recidiva ___
Pánevní stěna: Volná / Recidiva ___`,abdomen:`RECIST 1.1
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Odpověď: CR/PR/SD/PD

JÁTRA: Kapsulárně: Ustoupilo/Stabilní/Progredovalo ___  Parenchymatózně: ___
UZLINY: Paraaortální: Stabilní/Zmenšení/Nárůst/Nové ___

STŘEVO [riziko obstrukce]
Obstrukce: Ne / Parciální / Kompletní — lokalizace ___
Trakce TT: Ne / Ano — riziko parciální obstrukce

KOMPLIKACE
Bevacizumab: Střevo: Normální / Riziko perforace / Fistula
Chirurgické: Normální / Anastomotické / Lymfokéla ___ / Kýla ___`,chest:`HRUDNÍK
Pleura: Ne / P/L — změna ___  Plicní: Stabilní / Nové ___`,impression:`ZÁVĚR — ODPOVĚĎ OVARIÁLNÍHO KARCINOMU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Peritoneum: Odpovídá / Stabilní / Progreduje [CT omezené — nutná korelace s CA-125]
Bránice: Ustoupila / Stabilní / Progredovala
Obstrukce: Ne / Ano — [lokalizace, naléhavost]
Poznámka: GCIG kritéria: CA-125 ≥2× minimum = PD bez ohledu na RECIST`}}}}],Ro=[...$m,...Xm],Vc={en:{selectTumour:"Select tumour type",clinicalQuestion:"Clinical question",staging:"Staging",response:"Response assessment",scanExtent:"Scan extent",extents:{ap:"Abdomen & Pelvis",cap:"Chest + Abdomen + Pelvis",ncap:"Neck + Chest + Abdomen + Pelvis"},classificationLabel:"Classification:",criteriaLabel:"Response criteria:",stagingNote:"Staging search differs from response — primary tumour assessment first, then nodal and distant disease.",responseNote:"Response search: prior report before images, target lesions before new lesion survey.",templateSections:{tumorSpecific:"TUMOUR-SPECIFIC ASSESSMENT",abdomen:"ABDOMEN & PELVIS",chest:"CHEST",neck:"NECK",impression:"IMPRESSION"}},cs:{selectTumour:"Vyberte typ nádoru",clinicalQuestion:"Klinická otázka",staging:"Staging",response:"Hodnocení odpovědi",scanExtent:"Rozsah vyšetření",extents:{ap:"Břicho a pánev",cap:"Hrudník + břicho + pánev",ncap:"Krk + hrudník + břicho + pánev"},classificationLabel:"Klasifikace:",criteriaLabel:"Kritéria odpovědi:",stagingNote:"Systematika stagingu se liší od hodnocení odpovědi — nejdříve primární tumor, pak uzlinové a vzdálené postižení.",responseNote:"Systematika odpovědi: nejdříve starý protokol, pak cílové léze, pak přehled nových lézí.",templateSections:{tumorSpecific:"SPECIFICKÉ HODNOCENÍ NÁDORU",abdomen:"BŘICHO A PÁNEV",chest:"HRUDNÍK",neck:"KRK",impression:"ZÁVĚR"}}},ed={en:{colorectal:"Colorectal",pancreatic:"Pancreatic",rcc:"Renal Cell Ca.",lymphoma:"Lymphoma",hcc:"HCC",melanoma:"Melanoma",gastric:"Gastric",ovarian:"Ovarian"},cs:{colorectal:"Kolorektální",pancreatic:"Pankreatický",rcc:"Karcinom ledviny",lymphoma:"Lymfom",hcc:"HCC",melanoma:"Melanom",gastric:"Žaludeční",ovarian:"Ovariální"}},Ne="#fb7185",td={critical:{dot:"#f87171",label:"#f87171",border:"#f87171",pill:"rgba(248,113,113,0.12)",pillText:"#f87171"},high:{dot:"#fbbf24",label:"#fbbf24",border:"#fbbf24",pill:"rgba(251,191,36,0.12)",pillText:"#fbbf24"},normal:{dot:"#6b7280",label:"#9ca3af",border:"#374151",pill:"rgba(107,114,128,0.10)",pillText:"#9ca3af"}},wc={ap:["tumorSpecific","abdomen","impression"],cap:["tumorSpecific","chest","abdomen","impression"],ncap:["tumorSpecific","neck","chest","abdomen","impression"]};function nd(C,R,_){const J=wc[R]||wc.ap,E=C.template;return J.filter(w=>E[w]).map(w=>{const V=_[w];return!V||w==="tumorSpecific"?E[w]:`
${"─".repeat(60)}
${V}
${"─".repeat(60)}
${E[w]}`}).join(`
`)}function id({lang:C,ui:R}){var G;const[_,J]=it.useState(null),[E,w]=it.useState("staging"),[V,te]=it.useState("cap"),[j,ve]=it.useState("search"),[ce,X]=it.useState(!1),U=Vc[C],Pe=ed[C],ee=Ro.find(A=>A.id===_),H=(G=ee==null?void 0:ee[C])==null?void 0:G[E],B=(ee==null?void 0:ee.validExtents)||["ap","cap"],Ve=it.useMemo(()=>H?nd(H,V,U.templateSections):"",[H,V,U]),xe=()=>{navigator.clipboard.writeText(Ve),X(!0),setTimeout(()=>X(!1),2e3)},x=A=>{const F=Ro.find(re=>re.id===A);J(A),F&&!F.validExtents.includes(V)&&te(F.validExtents[0]),ve("search"),X(!1)};return _?h.jsxs("div",{style:{maxWidth:"820px"},children:[h.jsx("div",{style:{background:"var(--card)",border:`1px solid ${Ne}25`,borderTop:`3px solid ${Ne}`,borderRadius:"10px",padding:"20px 22px",marginBottom:"20px"},children:h.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"},children:[h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",flexWrap:"wrap"},children:[h.jsx("button",{onClick:()=>J(null),style:{fontSize:"12px",padding:"4px 10px",borderRadius:"6px",border:"1px solid var(--border-md)",background:"transparent",color:"var(--text-2)",cursor:"pointer"},children:"← back"}),h.jsx("h1",{style:{margin:0,fontSize:"18px",fontWeight:700,color:"#f0f2f7"},children:ee[C].label})]}),H&&h.jsxs("p",{style:{margin:0,fontSize:"13px",color:"var(--text-2)",lineHeight:1.6},children:[h.jsxs("span",{style:{color:"#9ca3af",fontWeight:600},children:[R.evidenceLabel," "]}),H.evidence]}),h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"14px"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"var(--text-3)",textTransform:"uppercase",marginBottom:"6px"},children:U.clinicalQuestion}),h.jsx("div",{style:{display:"flex",gap:"4px"},children:["staging","response"].map(A=>h.jsx("button",{onClick:()=>{w(A),ve("search")},style:{fontSize:"12px",fontWeight:E===A?700:500,padding:"5px 14px",borderRadius:"6px",cursor:"pointer",border:E===A?`1px solid ${Ne}40`:"1px solid var(--border-md)",background:E===A?`${Ne}15`:"transparent",color:E===A?Ne:"var(--text-2)",transition:"all 0.15s"},children:A==="staging"?U.staging:U.response},A))})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"var(--text-3)",textTransform:"uppercase",marginBottom:"6px"},children:U.scanExtent}),h.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:B.map(A=>h.jsx("button",{onClick:()=>te(A),style:{fontSize:"12px",fontWeight:V===A?700:500,padding:"5px 14px",borderRadius:"6px",cursor:"pointer",border:V===A?`1px solid ${Ne}40`:"1px solid var(--border-md)",background:V===A?`${Ne}15`:"transparent",color:V===A?Ne:"var(--text-2)",transition:"all 0.15s"},children:U.extents[A]},A))})]})]}),H&&h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"14px",alignItems:"center"},children:[h.jsx("span",{style:{fontSize:"11px",color:"var(--text-2)",marginRight:"2px"},children:R.dontMiss}),H.criticalFindings.map(A=>h.jsxs("span",{style:{fontSize:"11px",fontWeight:600,padding:"2px 9px",borderRadius:"4px",background:"rgba(248,113,113,0.1)",border:"1px solid rgba(248,113,113,0.25)",color:"#f87171"},children:["⚠ ",A]},A))]})]}),h.jsx("div",{style:{display:"flex",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"8px",padding:"3px",flexShrink:0,alignSelf:"flex-start"},children:[["search",R.searchTab],["template",R.templateTab]].map(([A,F])=>h.jsx("button",{onClick:()=>ve(A),style:{fontSize:"12px",fontWeight:j===A?700:500,padding:"6px 16px",borderRadius:"6px",cursor:"pointer",border:j===A?`1px solid ${Ne}35`:"1px solid transparent",background:j===A?`${Ne}18`:"transparent",color:j===A?Ne:"var(--text-2)",transition:"all 0.15s"},children:F},A))})]})}),j==="search"&&H&&h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderLeft:"3px solid #fbbf24",borderRadius:"10px",padding:"16px 18px"},children:[h.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"#fbbf24",textTransform:"uppercase",marginBottom:"8px"},children:R.mismatchTitle}),h.jsx("p",{style:{margin:0,fontSize:"14px",color:"var(--text)",lineHeight:1.65},children:H.searchMismatch}),h.jsx("div",{style:{marginTop:"10px"},children:h.jsxs("span",{style:{fontSize:"12px",fontWeight:600,padding:"3px 10px",borderRadius:"20px",background:`${Ne}15`,border:`1px solid ${Ne}30`,color:Ne},children:[E==="staging"?U.classificationLabel:U.criteriaLabel," ",E==="staging"?H.classification:H.criteria]})}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-2)",margin:"10px 0 0",lineHeight:1.6},children:[h.jsxs("span",{style:{color:"#9ca3af",fontWeight:600},children:[R.searchEvidenceLabel," "]}),H.searchEvidence]})]}),h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"10px",overflow:"hidden"},children:[h.jsx("div",{style:{padding:"12px 18px",borderBottom:"1px solid var(--border)",background:"var(--elevated)",fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"var(--text-2)",textTransform:"uppercase"},children:R.protocolTitle}),H.searchPattern.map((A,F)=>{const re=td[A.priority],ke=F===H.searchPattern.length-1;return h.jsxs("div",{style:{display:"flex",gap:"14px",padding:"16px 18px",borderBottom:ke?"none":"1px solid var(--border)",borderLeft:`3px solid ${re.border}`,background:F%2===0?"transparent":"rgba(255,255,255,0.015)"},children:[h.jsx("div",{style:{flexShrink:0,width:"24px",height:"24px",borderRadius:"6px",background:re.pill,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:re.pillText,fontFamily:"monospace"},children:A.step}),h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"10px",marginBottom:"5px",flexWrap:"wrap"},children:[h.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:re.label},children:A.title}),h.jsx("span",{style:{fontSize:"11px",color:"var(--text-3)",background:"var(--elevated)",borderRadius:"4px",padding:"1px 6px",fontFamily:"monospace"},children:A.time})]}),h.jsx("p",{style:{fontSize:"13px",color:"var(--text-2)",margin:0,lineHeight:1.65},children:A.detail})]})]},A.step)})]}),h.jsx("div",{style:{display:"flex",gap:"20px",padding:"0 4px"},children:[["#f87171",R.legendCritical],["#fbbf24",R.legendHigh],["#6b7280",R.legendStandard]].map(([A,F])=>h.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"var(--text-2)"},children:[h.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:A,flexShrink:0}}),F]},F))})]}),j==="template"&&H&&h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"10px",overflow:"hidden"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:"1px solid var(--border)",background:"var(--elevated)"},children:[h.jsxs("span",{style:{fontSize:"12px",color:"var(--text-2)"},children:[R.formatNote," · ",U.extents[V]]}),h.jsx("button",{onClick:xe,style:{fontSize:"12px",fontWeight:600,padding:"5px 14px",borderRadius:"6px",cursor:"pointer",border:`1px solid ${ce?Ne:"rgba(255,255,255,0.12)"}`,background:ce?`${Ne}20`:"transparent",color:ce?Ne:"var(--text-2)",transition:"all 0.15s"},children:ce?R.copiedButton:R.copyButton})]}),h.jsx("pre",{style:{margin:0,padding:"20px",fontFamily:"'JetBrains Mono','Cascadia Code','Fira Code',monospace",fontSize:"12.5px",lineHeight:1.9,color:"#c9d1e0",overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:Ve})]}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-2)",padding:"0 4px",lineHeight:1.6,margin:0},children:[R.usageNote," ",h.jsx("span",{style:{color:"#f87171"},children:R.criticalNote})]})]})]}):h.jsxs("div",{style:{maxWidth:"820px"},children:[h.jsxs("div",{style:{background:"var(--card)",border:`1px solid ${Ne}25`,borderTop:`3px solid ${Ne}`,borderRadius:"10px",padding:"20px 22px",marginBottom:"24px"},children:[h.jsx("h1",{style:{margin:"0 0 6px",fontSize:"18px",fontWeight:700,color:"#f0f2f7"},children:U.selectTumour}),h.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--text-2)"},children:"Select a tumour type below, then choose clinical question and scan extent."})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(170px, 1fr))",gap:"10px"},children:Ro.map(A=>h.jsxs("button",{onClick:()=>x(A.id),style:{textAlign:"left",padding:"16px",background:"var(--card)",border:"1px solid var(--border)",borderRadius:"10px",cursor:"pointer",transition:"all 0.15s"},onMouseEnter:F=>{F.currentTarget.style.borderColor=`${Ne}40`,F.currentTarget.style.background="var(--elevated)"},onMouseLeave:F=>{F.currentTarget.style.borderColor="var(--border)",F.currentTarget.style.background="var(--card)"},children:[h.jsx("div",{style:{fontSize:"14px",fontWeight:600,color:"var(--text)",marginBottom:"5px"},children:Pe[A.id]}),h.jsx("div",{style:{fontSize:"11px",color:"var(--text-2)"},children:A.validExtents.map(F=>Vc[C].extents[F]).join(" · ")})]},A.id))})]})}function rd(C,R){const _=Rr.find(J=>J.key===C);return(_==null?void 0:_.categories[R])||(_==null?void 0:_.categories[Object.keys(_.categories)[0]])}const ad={critical:{dot:"#f87171",label:"#f87171",border:"#f87171",pill:"rgba(248,113,113,0.12)",pillText:"#f87171"},high:{dot:"#fbbf24",label:"#fbbf24",border:"#fbbf24",pill:"rgba(251,191,36,0.12)",pillText:"#fbbf24"},normal:{dot:"#6b7280",label:"#9ca3af",border:"#374151",pill:"rgba(107,114,128,0.10)",pillText:"#9ca3af"}};function od({template:C,lang:R,ui:_}){const J=C[R];return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderLeft:"3px solid #fbbf24",borderRadius:"10px",padding:"16px 18px"},children:[h.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"#fbbf24",textTransform:"uppercase",marginBottom:"8px"},children:"Common search mistake"}),h.jsx("p",{style:{fontSize:"14px",color:"var(--text)",lineHeight:1.65,margin:0},children:J.searchMismatch}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-2)",margin:"10px 0 0",lineHeight:1.6},children:[h.jsxs("span",{style:{color:"#9ca3af",fontWeight:600},children:[_.searchEvidenceLabel," "]}),J.searchEvidence]})]}),h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"10px",overflow:"hidden"},children:[h.jsx("div",{style:{padding:"12px 18px",borderBottom:"1px solid var(--border)",background:"var(--elevated)",fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"var(--text-2)",textTransform:"uppercase"},children:_.protocolTitle}),J.searchPattern.map((E,w)=>{const V=ad[E.priority],te=w===J.searchPattern.length-1;return h.jsxs("div",{style:{display:"flex",gap:"14px",padding:"16px 18px",borderBottom:te?"none":"1px solid var(--border)",borderLeft:`3px solid ${V.border}`,background:w%2===0?"transparent":"rgba(255,255,255,0.015)"},children:[h.jsx("div",{style:{flexShrink:0,width:"24px",height:"24px",borderRadius:"6px",background:V.pill,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:V.pillText,fontFamily:"monospace"},children:E.step}),h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"10px",marginBottom:"5px",flexWrap:"wrap"},children:[h.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:V.label},children:E.title}),h.jsx("span",{style:{fontSize:"11px",color:"var(--text-3)",background:"var(--elevated)",borderRadius:"4px",padding:"1px 6px",fontFamily:"monospace"},children:E.time})]}),h.jsx("p",{style:{fontSize:"13px",color:"var(--text-2)",margin:0,lineHeight:1.65},children:E.detail})]})]},E.step)})]}),h.jsx("div",{style:{display:"flex",gap:"20px",padding:"0 4px"},children:[["critical","#f87171",_.legendCritical],["high","#fbbf24",_.legendHigh],["normal","#6b7280",_.legendStandard]].map(([E,w,V])=>h.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"var(--text-2)"},children:[h.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:w,flexShrink:0}}),V]},E))})]})}function ld({template:C,lang:R,ui:_,accentColor:J}){const[E,w]=it.useState(!1),V=C[R],te=()=>{navigator.clipboard.writeText(V.template),w(!0),setTimeout(()=>w(!1),2e3)};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[h.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"10px",overflow:"hidden"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:"1px solid var(--border)",background:"var(--elevated)"},children:[h.jsx("span",{style:{fontSize:"12px",color:"var(--text-2)"},children:_.formatNote}),h.jsx("button",{onClick:te,style:{fontSize:"12px",fontWeight:600,padding:"5px 14px",borderRadius:"6px",cursor:"pointer",border:`1px solid ${E?J:"rgba(255,255,255,0.12)"}`,background:E?`${J}20`:"transparent",color:E?J:"var(--text-2)",transition:"all 0.15s"},children:E?_.copiedButton:_.copyButton})]}),h.jsx("pre",{style:{margin:0,padding:"20px",fontFamily:"'JetBrains Mono','Cascadia Code','Fira Code',monospace",fontSize:"12.5px",lineHeight:1.9,color:"#c9d1e0",overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:V.template})]}),h.jsxs("p",{style:{fontSize:"12px",color:"var(--text-2)",padding:"0 4px",lineHeight:1.6,margin:0},children:[_.usageNote," ",h.jsx("span",{style:{color:"#f87171"},children:_.criticalNote})]})]})}function sd(){const[C,R]=it.useState("en"),[_,J]=it.useState("abdomen"),[E,w]=it.useState("appendicitis"),[V,te]=it.useState("search"),j=Km[C],ve=Ym[C],ce=Gm[C],X=Rr.find(x=>x.key===_),U=X==null?void 0:X.isOncology,Pe=Dc[_]||[],ee=Pe.find(x=>x.id===E)||Pe[0];U||rd(_,ee==null?void 0:ee.category);const H={abdomen:"#f59e0b",head:"#a78bfa",chest:"#38bdf8",spine:"#34d399",oncology:"#fb7185"},B=H[_]||"#a78bfa",Ve=x=>{var A;J(x);const G=Rr.find(F=>F.key===x);G!=null&&G.isOncology||w(((A=(Dc[x]||[])[0])==null?void 0:A.id)||""),te("search")},xe=U?{}:Pe.reduce((x,G)=>(x[G.category]||(x[G.category]=[]),x[G.category].push(G),x),{});return h.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",color:"var(--text)"},children:[h.jsxs("nav",{style:{position:"sticky",top:0,zIndex:50,background:"rgba(13,14,16,0.85)",backdropFilter:"blur(12px)",borderBottom:"1px solid var(--border)",padding:"0 20px",display:"flex",alignItems:"center",gap:"12px",height:"52px"},children:[h.jsxs("div",{style:{flexShrink:0,marginRight:"8px"},children:[h.jsx("div",{style:{fontSize:"13px",fontWeight:700,letterSpacing:"0.05em",color:"#f0f2f7"},children:"CT REPORTING"}),h.jsx("div",{style:{fontSize:"10px",color:"var(--text-2)",marginTop:"1px"},children:"Evidence-based · Bilingual"})]}),h.jsx("div",{style:{display:"flex",gap:"2px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"8px",padding:"3px",marginLeft:"4px"},children:Rr.map(x=>{const G=_===x.key,A=H[x.key];return h.jsx("button",{onClick:()=>Ve(x.key),style:{fontSize:"12px",fontWeight:G?700:500,padding:"5px 14px",borderRadius:"6px",cursor:"pointer",border:G?`1px solid ${A}30`:"1px solid transparent",background:G?`${A}18`:"transparent",color:G?A:"var(--text-2)",transition:"all 0.15s"},children:ve[x.key]},x.key)})}),h.jsx("div",{style:{flex:1}}),h.jsx("div",{style:{display:"flex",gap:"2px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"7px",padding:"3px"},children:["en","cs"].map(x=>h.jsx("button",{onClick:()=>R(x),style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.06em",padding:"4px 12px",borderRadius:"5px",cursor:"pointer",border:"none",background:C===x?"var(--elevated)":"transparent",color:C===x?"var(--text)":"var(--text-2)",textTransform:"uppercase",transition:"all 0.15s"},children:x},x))})]}),h.jsxs("div",{style:{display:"flex",maxWidth:"1280px",margin:"0 auto",minHeight:"calc(100vh - 52px)"},children:[!U&&h.jsx("aside",{style:{width:"210px",flexShrink:0,borderRight:"1px solid var(--border)",padding:"16px 10px",overflowY:"auto",position:"sticky",top:"52px",height:"calc(100vh - 52px)"},children:Object.entries(xe).map(([x,G])=>{const A=Object.keys(xe).length>1;return h.jsxs("div",{style:{marginBottom:"8px"},children:[A&&h.jsx("div",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.1em",color:"var(--text-3)",textTransform:"uppercase",padding:"8px 10px 4px"},children:ce[x]}),G.map(F=>{const re=F.id===E;return h.jsx("button",{onClick:()=>{w(F.id),te("search")},style:{width:"100%",textAlign:"left",padding:"8px 12px",borderRadius:"7px",cursor:"pointer",fontSize:"13px",fontWeight:re?600:400,border:re?`1px solid ${B}35`:"1px solid transparent",background:re?`${B}12`:"transparent",color:re?B:"var(--text-2)",marginBottom:"1px",transition:"all 0.12s",display:"block"},onMouseEnter:ke=>{re||(ke.currentTarget.style.background="var(--elevated)",ke.currentTarget.style.color="var(--text)")},onMouseLeave:ke=>{re||(ke.currentTarget.style.background="transparent",ke.currentTarget.style.color="var(--text-2)")},children:F[C].label},F.id)})]},x)})}),h.jsx("main",{style:{flex:1,minWidth:0,padding:"24px 28px",overflowY:"auto"},children:U?h.jsx(id,{lang:C,ui:j}):ee?h.jsxs("div",{style:{maxWidth:"820px"},children:[h.jsx("div",{style:{background:"var(--card)",border:`1px solid ${B}25`,borderTop:`3px solid ${B}`,borderRadius:"10px",padding:"20px 22px",marginBottom:"20px"},children:h.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"},children:[h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",flexWrap:"wrap"},children:[h.jsx("h1",{style:{margin:0,fontSize:"18px",fontWeight:700,color:"#f0f2f7"},children:ee[C].label}),h.jsx("span",{style:{fontSize:"11px",fontWeight:600,padding:"2px 9px",borderRadius:"20px",background:`${B}18`,border:`1px solid ${B}30`,color:B},children:ce[ee.category]})]}),h.jsxs("p",{style:{margin:0,fontSize:"13px",color:"var(--text-2)",lineHeight:1.6},children:[h.jsxs("span",{style:{color:"#9ca3af",fontWeight:600},children:[j.evidenceLabel," "]}),ee[C].evidence]}),h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"12px",alignItems:"center"},children:[h.jsx("span",{style:{fontSize:"11px",color:"var(--text-2)",marginRight:"2px"},children:j.dontMiss}),ee[C].criticalFindings.map(x=>h.jsxs("span",{style:{fontSize:"11px",fontWeight:600,padding:"2px 9px",borderRadius:"4px",background:"rgba(248,113,113,0.1)",border:"1px solid rgba(248,113,113,0.25)",color:"#f87171"},children:["⚠ ",x]},x))]})]}),h.jsx("div",{style:{display:"flex",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"8px",padding:"3px",flexShrink:0},children:[["search",j.searchTab],["template",j.templateTab]].map(([x,G])=>h.jsx("button",{onClick:()=>te(x),style:{fontSize:"12px",fontWeight:V===x?700:500,padding:"6px 16px",borderRadius:"6px",cursor:"pointer",border:V===x?`1px solid ${B}35`:"1px solid transparent",background:V===x?`${B}18`:"transparent",color:V===x?B:"var(--text-2)",transition:"all 0.15s"},children:G},x))})]})}),V==="search"?h.jsx(od,{template:ee,lang:C,ui:j}):h.jsx(ld,{template:ee,lang:C,ui:j,accentColor:B})]}):null})]})]})}Um.createRoot(document.getElementById("root")).render(h.jsx(it.StrictMode,{children:h.jsx(sd,{})}));
