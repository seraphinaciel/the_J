var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Q={exports:{}},P={},X={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function ue(){if(J)return r;J=1;var l=Symbol.for("react.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),T=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;function v(e){return e===null||typeof e!="object"?null:(e=m&&e[m]||e["@@iterator"],typeof e=="function"?e:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,U={};function w(e,t,n){this.props=e,this.context=t,this.refs=U,this.updater=n||O}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W(){}W.prototype=w.prototype;function C(e,t,n){this.props=e,this.context=t,this.refs=U,this.updater=n||O}var $=C.prototype=new W;$.constructor=C,L($,w.prototype),$.isPureReactComponent=!0;var A=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,n){var u,o={},c=null,a=null;if(t!=null)for(u in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(c=""+t.key),t)V.call(t,u)&&!M.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var i=Array(s),h=0;h<s;h++)i[h]=arguments[h+2];o.children=i}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:l,type:e,key:c,ref:a,props:o,_owner:I.current}}function te(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function q(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function re(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var H=/\/+/g;function F(e,t){return typeof e=="object"&&e!==null&&e.key!=null?re(""+e.key):t.toString(36)}function g(e,t,n,u,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case l:case E:a=!0}}if(a)return a=e,o=o(a),e=u===""?"."+F(a,0):u,A(o)?(n="",e!=null&&(n=e.replace(H,"$&/")+"/"),g(o,t,n,"",function(h){return h})):o!=null&&(q(o)&&(o=te(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(H,"$&/")+"/")+e)),t.push(o)),1;if(a=0,u=u===""?".":u+":",A(e))for(var s=0;s<e.length;s++){c=e[s];var i=u+F(c,s);a+=g(c,t,n,i,o)}else if(i=v(e),typeof i=="function")for(e=i.call(e),s=0;!(c=e.next()).done;)c=c.value,i=u+F(c,s++),a+=g(c,t,n,i,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function x(e,t,n){if(e==null)return e;var u=[],o=0;return g(e,u,"","",function(c){return t.call(n,c,o++)}),u}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var p={current:null},j={transition:null},oe={ReactCurrentDispatcher:p,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};return r.Children={map:x,forEach:function(e,t,n){x(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return x(e,function(){t++}),t},toArray:function(e){return x(e,function(t){return t})||[]},only:function(e){if(!q(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=w,r.Fragment=b,r.Profiler=_,r.PureComponent=C,r.StrictMode=f,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=L({},e.props),o=e.key,c=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,a=I.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)V.call(t,i)&&!M.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){s=Array(i);for(var h=0;h<i;h++)s[h]=arguments[h+2];u.children=s}return{$$typeof:l,type:e.type,key:o,ref:c,props:u,_owner:a}},r.createContext=function(e){return e={$$typeof:T,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R,_context:e},e.Consumer=e},r.createElement=B,r.createFactory=function(e){var t=B.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:S,render:e}},r.isValidElement=q,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},r.memo=function(e,t){return{$$typeof:k,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return p.current.useCallback(e,t)},r.useContext=function(e){return p.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return p.current.useDeferredValue(e)},r.useEffect=function(e,t){return p.current.useEffect(e,t)},r.useId=function(){return p.current.useId()},r.useImperativeHandle=function(e,t,n){return p.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return p.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return p.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return p.current.useMemo(e,t)},r.useReducer=function(e,t,n){return p.current.useReducer(e,t,n)},r.useRef=function(e){return p.current.useRef(e)},r.useState=function(e){return p.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return p.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return p.current.useTransition()},r.version="18.2.0",r}X.exports=ue();var Z=X.exports;const le=K(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function ie(){if(z)return P;z=1;var l=Z,E=Symbol.for("react.element"),b=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,_=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function T(S,y,k){var d,m={},v=null,O=null;k!==void 0&&(v=""+k),y.key!==void 0&&(v=""+y.key),y.ref!==void 0&&(O=y.ref);for(d in y)f.call(y,d)&&!R.hasOwnProperty(d)&&(m[d]=y[d]);if(S&&S.defaultProps)for(d in y=S.defaultProps,y)m[d]===void 0&&(m[d]=y[d]);return{$$typeof:E,type:S,key:v,ref:O,props:m,_owner:_.current}}return P.Fragment=b,P.jsx=T,P.jsxs=T,P}Q.exports=ie();var pe=Q.exports,ee={exports:{}},D,Y;function ce(){if(Y)return D;Y=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return D=l,D}var N,G;function se(){if(G)return N;G=1;var l=ce();function E(){}function b(){}return b.resetWarningCache=E,N=function(){function f(T,S,y,k,d,m){if(m!==l){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}f.isRequired=f;function _(){return f}var R={array:f,bigint:f,bool:f,func:f,number:f,object:f,string:f,symbol:f,any:f,arrayOf:_,element:f,elementType:f,instanceOf:_,node:f,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:b,resetWarningCache:E};return R.PropTypes=R,R},N}ee.exports=se()();var fe=ee.exports;const ye=K(fe);export{ye as P,le as R,ae as c,K as g,pe as j,Z as r};
