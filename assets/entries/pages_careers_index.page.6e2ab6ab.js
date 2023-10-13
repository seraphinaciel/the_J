import{P as s,r as f,j as e}from"../chunks/chunk-a7a1a7a3.js";import{g,S as y,I as b,C as d,T as p,a as w}from"../chunks/chunk-0b6e19a6.js";import{T as _}from"../chunks/chunk-df2c6ce7.js";import{L as v,S as T}from"../chunks/chunk-a77b6982.js";import{u as N}from"../chunks/chunk-c6c7910c.js";import{P as S}from"../chunks/chunk-8d3ec88a.js";import{S as $}from"../chunks/chunk-07f880a5.js";import"../chunks/chunk-ddec4b77.js";const P="_container_170gz_1",C="_pen_line_170gz_23",j={container:P,pen_line:C};g.gsap.registerPlugin(y.ScrollTrigger);function x({title:r,description:a,paragraph:t,className:h=null}){return e.jsxs("div",{className:d("card flex flex-col gap-y-25 md:gap-y-30",h),children:[e.jsx(w,{className:"text-heading-10 md:text-heading-8",tagName:"strong",children:r}),e.jsx(p,{className:"text-[4.6rem] leading-[5.4rem] md:text-heading-4",children:a}),e.jsx(p,{className:"mt-5 md:mt-20 text-body-7-kr md:text-body-5-kr",tagName:"p",children:t})]})}x.propTypes={title:s.oneOfType([s.string,s.node]),description:s.oneOfType([s.string,s.node]),paragraph:s.oneOfType([s.string,s.node]),className:s.string};function m({url:r,classes:a={container:"aspect-[365/274] md:aspect-[365/274]",image:null},meta:t={alt:""}}){const{md:h,mobile:n}=N(o=>o.screens);return e.jsxs("picture",{className:d(a.container),children:[e.jsx("source",{media:`(max-width:${n.max})`,srcSet:`${r}-m.webp`}),e.jsx("source",{media:`(min-width:${h})`,srcSet:`${r}.webp`}),e.jsx("img",{className:d(a.image),src:`${r}-m.webp`,alt:t.alt})]})}m.propTypes={...b,classes:s.shape({container:s.string,image:s.string})};function I(){const r=f.useRef(null),{md:a}=N(t=>t.screens);return f.useEffect(()=>{if(r.current==null)return;const t=g.gsap.matchMedia();return t.add(`(min-width:${a})`,n=>{const{matches:o}=n.conditions;console.log("desktop",o);const c=r.current.children[0];if(!c)return;const i=()=>c.scrollWidth-window.innerWidth,l={x:()=>i()*-1,duration:3,ease:"none",scrollTrigger:{trigger:r.current,start:"top top",end:()=>`+=${i()}`,pin:!0,scrub:!0,invalidateOnRefresh:!0,markers:!0}};g.gsap.to(c,l)},r),t.add(`(min-width:${a})`,n=>{const o=g.gsap.utils.toArray("img");o.length!==0&&o.map((c,i)=>{if(3<i)return;const l=c.parentElement;if(!l)return;const u=()=>window.innerWidth*.65;n.add(`spread${i+1}`,()=>g.gsap.fromTo(c,{css:{position:"relative",transform:`rotate(${i*1.4*-1}deg)`,maxWidth:()=>`${u()}px`,left:()=>`${window.innerWidth*.5-u()*.5-l.getBoundingClientRect().x}px`,top:()=>`${window.innerHeight*.5-l.getBoundingClientRect().height*.5-l.getBoundingClientRect().y}px`}},{css:{maxWidth:"100%",position:"relative",left:0,top:0,transform:"rotate(0deg)"},duration:.75,scrollTrigger:{trigger:r.current,start:"-50%, 20%",end:"-15% 20%",scrub:!0,invalidateOnRefresh:!0}})),n[`spread${i+1}`]()})},r),()=>{t.revert()}},[a]),e.jsx("div",{ref:r,className:"scroll-wrap | ",children:e.jsxs("div",{className:d(j.container,"scroll-container","mobile:gap-100"),children:[e.jsx("section",{className:"mobile:hidden",children:e.jsx(m,{url:"/the_J/images/thej-careers-hz-img01"})}),e.jsxs("section",{className:"flex flex-col gap-y-60 md:gap-y-110",children:[e.jsx(m,{classes:{container:"mobile:pr-[--grid-container-margin]"},url:"/the_J/images/thej-careers-hz-img02"}),e.jsx(x,{className:"mobile:px-[--grid-container-margin] md:pl-50",title:"UX UI Planner",description:"Various ideas, Strategic Plan",paragraph:"비즈니스 분석은 정확하고 Precise하게 아이디어 발산은 다양하고 Flexible하게 프로젝트 진행에 합리적인 일정관리와 기획 설계를 진행합니다."})]}),e.jsxs("section",{className:"flex flex-col gap-y-60 md:gap-y-110",children:[e.jsx(m,{classes:{container:"mobile:pl-[--grid-container-margin]"},url:"/the_J/images/thej-careers-hz-img03"}),e.jsx(x,{className:"mobile:px-[--grid-container-margin]",title:"UX UI Designer",description:"UX experience, creative design ",paragraph:"크리에이티브 디자인부터 SI와 영상까지 다양한 도메인에 대한 디자인 경험을 보유하고 있으며 최신 트렌드 기술에 적합한 UX-UI 디자인을 진행합니다."})]}),e.jsxs("section",{className:"flex flex-col gap-y-60 md:gap-y-110",children:[e.jsx(m,{classes:{container:"mobile:pr-[--grid-container-margin]"},url:"/the_J/images/thej-careers-hz-img04"}),e.jsx(x,{className:"mobile:px-[--grid-container-margin]",title:"Front-end Developer",description:e.jsxs(e.Fragment,{children:["Various frameworks"," ",e.jsx(v,{styleId:"circle/16.up",extendLineStyle:j.pen_line,children:"technologies"})]}),paragraph:"프론트엔드 기술 적용과 최신 기술 트렌드에 필요한 모든 작업을 수행합니다. 크리에이티브에 필요한 스크립트 기술과 백엔드 영향도까지 커버 가능한 실력을 보유하고 있습니다."})]}),e.jsx("section",{className:"w-full",children:e.jsx(m,{url:"/the_J/images/thej-careers-hz-img05"})}),e.jsx("section",{children:e.jsxs(p,{className:"text-heading-1",children:["The different",e.jsx("br",{}),"ones making ",e.jsx("br",{}),"the real",e.jsx(T,{shape:"typo/difference"})]})})]})})}const z="_page_header_1f8bv_1",U={page_header:z},M={title:"🥰 Careers",description:"this is a Careers page.",pageId:"/career"};function X(){return e.jsx("div",{className:"careers",children:e.jsxs("div",{className:"page-contents-wrap",children:[e.jsxs("div",{role:"region",className:d(U.page_header,"mobile:px-[--grid-container-margin]"),children:[e.jsx("div",{className:d("flex",{"items-start":!0,"md:items-center":!1}),children:e.jsx(S,{layoutId:"careers",title:["Different people","come together and","move in one direction"],description:{text:"Projects are people-centered, and the results shine because people come together.",transform:"프로젝트는 사람이 중심이며 그 결과물이 빛나는 이유는 함께하는 사람들이 있기 때문입니다."}})}),e.jsx($,{text:"See our job openings"})]}),e.jsxs("section",{className:"overflow-hidden w-screen",children:[e.jsx(_,{text:"Meet our team",size:20,runDirection:"left"}),e.jsx("div",{className:"px-[--grid-container-margin] mt-60 mb-100 md:mt-140 md:mb-208",children:e.jsxs("div",{className:"md:grid md:grid-cols-12 md:gap-[--grid-col-gap]",children:[e.jsx(p,{tagName:"p",className:"md:col-span-6 md:col-start-6 text-heading-10 md:text-heading-6",children:"We create high-performance outcomes with usability and design that everyone can relate to."}),e.jsx(p,{tagName:"p",className:"md:col-span-6 md:col-start-6 text-body-6-kr md:text-body-5-kr mt-30 md:mt-50",children:"우리는 누구나 공감할 수 있는 사용성과 디자인으로 하이 퍼포먼스의 결과물을 만들어갑니다."})]})}),e.jsx(I,{})]})]})})}export{X as Page,M as documentProps};
