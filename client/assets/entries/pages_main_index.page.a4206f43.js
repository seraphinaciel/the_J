import{r as m,P as v,j as n}from"../chunks/chunk-a7a1a7a3.js";import{b as ee,S as Y,W as j}from"../chunks/chunk-a77b6982.js";import{g as S,S as G,T as N,C as w,a as D}from"../chunks/chunk-0b6e19a6.js";import{T as te}from"../chunks/chunk-df2c6ce7.js";import{V as H}from"../chunks/chunk-2e5b6ab5.js";import{u as se}from"../chunks/chunk-c6c7910c.js";import{L as re,a as ne}from"../chunks/chunk-d4373d21.js";import{S as ie,u as _,n as ae,a as B,i as W,t as oe,j as ce,e as le,r as q,d as ue,b as T,v as he,k as de}from"../chunks/chunk-e6d0d429.js";class pe extends ie{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),z(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,c=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),_(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const i=this.hasListeners();i&&V(this.currentQuery,c,this.options,r)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==c||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();i&&(this.currentQuery!==c||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return me(this,r,e)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(ae)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),B||this.currentResult.isStale||!W(this.options.staleTime))return;const t=oe(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(B||this.options.enabled===!1||!W(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||ce.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,c=this.options,i=this.currentResult,o=this.currentResultState,l=this.currentResultOptions,p=e!==r,u=p?e.state:this.currentQueryInitialState,h=p?this.currentResult:this.previousQueryResult,{state:a}=e;let{dataUpdatedAt:d,error:R,errorUpdatedAt:g,fetchStatus:f,status:y}=a,M=!1,A=!1,b;if(t._optimisticResults){const x=this.hasListeners(),P=!x&&z(e,t),$=x&&V(e,r,t,c);(P||$)&&(f=le(e.options.networkMode)?"fetching":"paused",d||(y="loading")),t._optimisticResults==="isRestoring"&&(f="idle")}if(t.keepPreviousData&&!a.dataUpdatedAt&&h!=null&&h.isSuccess&&y!=="error")b=h.data,d=h.dataUpdatedAt,y=h.status,M=!0;else if(t.select&&typeof a.data<"u")if(i&&a.data===(o==null?void 0:o.data)&&t.select===this.selectFn)b=this.selectResult;else try{this.selectFn=t.select,b=t.select(a.data),b=q(i==null?void 0:i.data,b,t),this.selectResult=b,this.selectError=null}catch(x){this.selectError=x}else b=a.data;if(typeof t.placeholderData<"u"&&typeof b>"u"&&y==="loading"){let x;if(i!=null&&i.isPlaceholderData&&t.placeholderData===(l==null?void 0:l.placeholderData))x=i.data;else if(x=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof x<"u")try{x=t.select(x),this.selectError=null}catch(P){this.selectError=P}typeof x<"u"&&(y="success",b=q(i==null?void 0:i.data,x,t),A=!0)}this.selectError&&(R=this.selectError,b=this.selectResult,g=Date.now(),y="error");const I=f==="fetching",O=y==="loading",k=y==="error";return{status:y,fetchStatus:f,isLoading:O,isSuccess:y==="success",isError:k,isInitialLoading:O&&I,data:b,dataUpdatedAt:d,error:R,errorUpdatedAt:g,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>u.dataUpdateCount||a.errorUpdateCount>u.errorUpdateCount,isFetching:I,isRefetching:I&&!O,isLoadingError:k&&a.dataUpdatedAt===0,isPaused:f==="paused",isPlaceholderData:A,isPreviousData:M,isRefetchError:k&&a.dataUpdatedAt!==0,isStale:U(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,_(r,t))return;this.currentResult=r;const c={cache:!0},i=()=>{if(!t)return!0;const{notifyOnChangeProps:o}=this.options,l=typeof o=="function"?o():o;if(l==="all"||!l&&!this.trackedProps.size)return!0;const p=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&p.add("error"),Object.keys(this.currentResult).some(u=>{const h=u;return this.currentResult[h]!==t[h]&&p.has(h)})};(e==null?void 0:e.listeners)!==!1&&i()&&(c.listeners=!0),this.notify({...c,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!ue(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){T.batch(()=>{if(e.onSuccess){var t,r,c,i;(t=(r=this.options).onSuccess)==null||t.call(r,this.currentResult.data),(c=(i=this.options).onSettled)==null||c.call(i,this.currentResult.data,null)}else if(e.onError){var o,l,p,u;(o=(l=this.options).onError)==null||o.call(l,this.currentResult.error),(p=(u=this.options).onSettled)==null||p.call(u,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function fe(s,e){return e.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&e.retryOnMount===!1)}function z(s,e){return fe(s,e)||s.state.dataUpdatedAt>0&&F(s,e,e.refetchOnMount)}function F(s,e,t){if(e.enabled!==!1){const r=typeof t=="function"?t(s):t;return r==="always"||r!==!1&&U(s,e)}return!1}function V(s,e,t,r){return t.enabled!==!1&&(s!==e||r.enabled===!1)&&(!t.suspense||s.state.status!=="error")&&U(s,t)}function U(s,e){return s.isStaleByTime(e.staleTime)}function me(s,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!_(s.getCurrentResult(),e)}var J={exports:{}},L={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K;function ge(){if(K)return L;K=1;var s=m;function e(a,d){return a===d&&(a!==0||1/a===1/d)||a!==a&&d!==d}var t=typeof Object.is=="function"?Object.is:e,r=s.useState,c=s.useEffect,i=s.useLayoutEffect,o=s.useDebugValue;function l(a,d){var R=d(),g=r({inst:{value:R,getSnapshot:d}}),f=g[0].inst,y=g[1];return i(function(){f.value=R,f.getSnapshot=d,p(f)&&y({inst:f})},[a,R,d]),c(function(){return p(f)&&y({inst:f}),a(function(){p(f)&&y({inst:f})})},[a]),o(R),R}function p(a){var d=a.getSnapshot;a=a.value;try{var R=d();return!t(a,R)}catch{return!0}}function u(a,d){return d()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:l;return L.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:h,L}J.exports=ge();var ye=J.exports;const ve=ye.useSyncExternalStore,X=m.createContext(!1),xe=()=>m.useContext(X);X.Provider;function Re(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}const be=m.createContext(Re()),Se=()=>m.useContext(be);function je(s,e){return typeof s=="function"?s(...e):!!s}const we=(s,e)=>{(s.suspense||s.useErrorBoundary)&&(e.isReset()||(s.retryOnMount=!1))},Ee=s=>{m.useEffect(()=>{s.clearReset()},[s])},Te=({result:s,errorResetBoundary:e,useErrorBoundary:t,query:r})=>s.isError&&!e.isReset()&&!s.isFetching&&je(t,[s.error,r]),Ce=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},Qe=(s,e)=>s.isLoading&&s.isFetching&&!e,Ne=(s,e,t)=>(s==null?void 0:s.suspense)&&Qe(e,t),Ie=(s,e,t)=>e.fetchOptimistic(s).then(({data:r})=>{s.onSuccess==null||s.onSuccess(r),s.onSettled==null||s.onSettled(r,null)}).catch(r=>{t.clearReset(),s.onError==null||s.onError(r),s.onSettled==null||s.onSettled(void 0,r)});function Oe(s,e){const t=he({context:s.context}),r=xe(),c=Se(),i=t.defaultQueryOptions(s);i._optimisticResults=r?"isRestoring":"optimistic",i.onError&&(i.onError=T.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=T.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=T.batchCalls(i.onSettled)),Ce(i),we(i,c),Ee(c);const[o]=m.useState(()=>new e(t,i)),l=o.getOptimisticResult(i);if(ve(m.useCallback(p=>{const u=r?()=>{}:o.subscribe(T.batchCalls(p));return o.updateResult(),u},[o,r]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),m.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),Ne(i,l,r))throw Ie(i,o,c);if(Te({result:l,errorResetBoundary:c,useErrorBoundary:i.useErrorBoundary,query:o.getCurrentQuery()}))throw l.error;return i.notifyOnChangeProps?l:o.trackResult(l)}function ke(s,e,t){const r=de(s,e,t);return Oe(r,pe)}S.gsap.registerPlugin(G.ScrollTrigger);const Pe={content:v.string,className:v.string,container:v.string,children:v.node,tagName:v.string,location:v.string,keyword:v.arrayOf(v.string)};function Q({content:s,className:e,tagName:t="p",keyword:r,location:c}){const i=t,o=m.useRef();m.useEffect(()=>{let u=S.gsap.context(()=>{const h=o.current;S.gsap.from(S.gsap.utils.toArray(".split-words .word"),{ease:"circ.out",y:h.offsetHeight,opacity:0,stagger:.2,scrollTrigger:{trigger:h,toggleActions:"restart pause resume reverse"}})},o);return()=>u.revert()},[s]);const l=s.split(" "),p=Array.isArray(r)?r:[r];return n.jsx(i,{ref:o,className:`split-words ${e}`,children:l.map((u,h)=>p.includes(u)?n.jsx("a",{href:c,className:"word",children:u},h):n.jsx("span",{className:"word",children:u},h))})}Q.propTypes=Pe;S.gsap.registerPlugin(G.ScrollTrigger);const Le={smaller:["inset(0%)","inset(40%)"]};function Z({id:s,src:e,children:t,conLeft:r,conRight:c,change:i}){const{md:o}=se(u=>u.screens),l=m.useRef(null),p=m.useRef(null);return m.useEffect(()=>{const u=S.gsap.matchMedia();return u.add(`(min-width:${o})`,()=>{const h=S.gsap.timeline({scrollTrigger:{trigger:l.current,pin:!0,anticipatePin:1,scrub:!0,start:"top top"},onComplete:()=>ee(S.gsap.utils.toArray(".Thej path"),.2)}),[a,d]=Le[s];[{id:0,animate:"fromTo",params:[".motion-video",{webkitClipPath:a,clipPath:a},{webkitClipPath:d,clipPath:d,duration:200,ease:"none"}]},{id:1,animate:"fromTo",params:[".motion-contents",{y:"0vh"},{y:"-100%",duration:200},"<+100"]},{id:2,animate:"to",params:[".motion-video",{opacity:0,duration:1}]},{id:3,animate:"fromTo",params:[".conRight span:first-of-type",{transform:"perspective(500px) rotateY(0deg)",display:"block"},{transform:"perspective(500px) rotateY(90deg)",display:"none",duration:200},">"]},{id:4,animate:"to",params:[".conLeft span",{duration:100,x:-20,margin:0},">"]},{id:5,animate:"fromTo",params:[".conRight span:last-of-type",{transform:"perspective(500px) rotateY(-90deg)",display:"none"},{transform:"perspective(500px) rotateY(0deg)",display:"block",duration:200},"<"]},{id:6,animate:"from",params:[".Thej",{duration:1e-7,opacity:0},">-=10"]}].forEach((g,f)=>{if(f===g.id){if(g.condition==null)return h[g.animate](...g.params);g.condition&&h[g.animate](...g.params)}})},l),()=>u.revert()},[s,o]),n.jsxs("div",{ref:l,children:[n.jsx("div",{className:"motion-video",children:n.jsx(H,{src:e})}),n.jsxs("article",{className:"motion-contents ",children:[t,n.jsxs("h1",{className:"text-heading-3 md:text-special capitalize",children:[n.jsxs("p",{className:"conLeft",children:[n.jsx(N,{tagName:"span",children:r}),n.jsx(Y,{shape:"typo/thej",className:"Thej",ref:p})]}),n.jsxs(N,{tagName:"p",className:"conRight relative",children:[c,i]})]})]})]})}Z.propTypes={id:v.string.isRequired,src:v.string.isRequired,children:v.node,conLeft:v.string,conRight:v.string,change:v.string};const _e="_visual_1k9m0_1",Fe="_text_box_1k9m0_103",Ue="_listMonoLayout_1k9m0_141",Me="_what_1k9m0_149",Ae="_who_1k9m0_243",E={visual:_e,text_box:Fe,listMonoLayout:Ue,what:Me,who:Ae},He={title:"🥰 Main",description:"this is a Main page."},C={word:{arrange:{start:"top 95%"}},sentence:{arrange:{start:"top 95%"},duration:1.5}};function Je(){const s=m.useCallback(c=>{c!=null}),{data:e,isLoading:t,isError:r}=ke({queryKey:["works"],queryFn:async()=>await fetch("./data/works.json").then(c=>c.json())});return n.jsx("div",{ref:s,children:n.jsxs("div",{className:"page-contents-wrap",children:["",n.jsx("section",{className:w(E.visual),children:n.jsxs(Z,{id:"smaller",src:"https://www.w3schools.com/tags/movie.mp4",conLeft:"make",conRight:"work",change:"moment",children:[n.jsx(N,{tagName:"nav",children:"Our latest"}),n.jsxs(N,{tagName:"h2",children:["LG Global Pilot Website","Platform Building"]})]})}),n.jsxs("section",{className:w(E.text_box),children:[n.jsx(j,{tagName:"h4",className:"text-heading-8 md:text-heading-6",content:"Creative Design Technical Agency",splitType:"none"}),n.jsxs("article",{children:[n.jsx(j,{tagName:"h3",className:"text-heading-10 md:text-heading-4",content:"We have implemented various experience, such as global integrated platforms and creative projects.",animationConfig:C.word,location:"experience,",styleId:"circle/16.up",color:"black"}),n.jsx(j,{className:"basic_p_2",content:"글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다.",splitType:"none",animationConfig:{...C.sentence,from:{duration:.6,ease:"circ.out",yPercent:"100",opacity:1}}}),n.jsx(Y,{shape:"tail arrow"})]})]}),!t&&!r&&n.jsxs("section",{className:w(E.listMonoLayout),children:[n.jsx(re,{layout:ne,list:e}),n.jsx("p",{className:"mt-60 mb-120 md:text-center md:mt-150 md:mb-300",children:n.jsx("a",{href:"",className:"link",children:"See more work"})})]}),n.jsxs("section",{className:w(E.what),children:[n.jsx("div",{children:n.jsx(H,{src:"https://www.w3schools.com/tags/movie.mp4"})}),n.jsxs("article",{children:[n.jsx(D,{tagName:"h5",className:"text-heading-9 md:text-heading-8",children:"What we do"}),n.jsxs("ul",{children:[n.jsx(Q,{tagName:"li",content:"We re-create designs for",keyword:["re-create"],location:"http://localhost:3000/"}),n.jsx(Q,{tagName:"li",content:"user experiences with",keyword:["user","experiences"],location:"http://localhost:3000/"}),n.jsx(Q,{tagName:"li",content:"our creative perspective",keyword:["creative","perspective"],location:"http://localhost:3000/"})]})]})]}),n.jsx("section",{className:"py-100",children:n.jsx("h1",{className:"w-screen overflow-hidden text-heading-3 md:text-special capitalize",children:n.jsx(te,{text:"About the J",size:20,runDirection:"left"})})}),n.jsxs("section",{className:w(E.who,"layout_text_box"),children:[n.jsx(D,{tagName:"h5",className:"md:pt-32 md:col-span-4 text-heading-9 md:text-heading-8",children:"Who we are"}),n.jsxs("article",{children:[n.jsx(j,{tagName:"h3",className:"md:pt-32 mb-32 text-heading-10 md:text-heading-4",content:"We are an agency specializing in global and commerce, from building and maintenance to rollout, and strategic plan and creative design.",animationConfig:C.word,location:"specializing",styleId:"circle/18.up"}),n.jsx(j,{tagName:"p",className:"basic_p_2",content:"전략, 기획설계, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 크리에이티브 디자인이 가능한 에이전시입니다.",splitType:"none",animationConfig:C.sentence}),n.jsxs("p",{className:"inline-flex gap-x-25 mt-63",children:[n.jsx("a",{href:"",className:"link",children:"Learn more about"}),n.jsx("a",{href:"",className:"link",children:"Join us"})]})]})]})]})})}export{Je as Page,He as documentProps};
