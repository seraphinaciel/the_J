import{P as N,r as n,j as e}from"../chunks/chunk-a7a1a7a3.js";import{g as w,S as G,a as i,C as g,T as C}from"../chunks/chunk-0b6e19a6.js";import{W as P,a as $}from"../chunks/chunk-a77b6982.js";import{T as E}from"../chunks/chunk-df2c6ce7.js";import{S as v}from"../chunks/chunk-aee347e2.js";import{V as M}from"../chunks/chunk-2e5b6ab5.js";import{P as B}from"../chunks/chunk-8d3ec88a.js";import{u as D}from"../chunks/chunk-97d36b7b.js";w.gsap.registerPlugin(G.ScrollTrigger);const h={target:{start:"top",end:"bottom"},viewport:{start:"top",end:"top"}},L={bigger:["inset(40%)","inset(0%)"],smaller:["inset(0%)","inset(40%)"]};function k({id:m,src:l,children:u}){const c=n.useRef(null);return n.useEffect(()=>{const b=w.gsap.context(()=>{const a=w.gsap.timeline({scrollTrigger:{trigger:c.current,start:`${h.target.start} ${h.viewport.start}`,end:`${h.target.end} ${h.viewport.end}`,pin:!0,anticipatePin:1,scrub:!0}}),[x,p]=L[m];[{id:0,animate:"fromTo",params:[".motion-video",{webkitClipPath:x,clipPath:x},{webkitClipPath:p,clipPath:p,duration:14,ease:"none"}]},{id:1,animate:"fromTo",params:[".motion-contents",{y:"50vh"},{y:"0vh",duration:5},"<+15"]},{id:2,animate:"to",params:[".motion-video",{opacity:0,duration:10,display:"none"}]}].forEach((o,f)=>{if(f===o.id){if(o.condition==null)return a[o.animate](...o.params);o.condition&&a[o.animate](...o.params)}})},c);return()=>{b.revert()}},[m]),e.jsxs("section",{ref:c,className:"h-screen flex flex-col items-center justify-center bg-slate-200 mb-10",children:[u,e.jsx("div",{className:"motion-video | relative w-full h-full bg-orange-400",children:e.jsx(M,{src:l})})]})}k.propTypes={id:N.string.isRequired,src:N.string.isRequired,children:N.node};const V="_title_1x97q_9",z="_head_1x97q_15",A="_font_1x97q_23",H="_color_1x97q_41",J="_table_1x97q_57",d={title:V,head:z,font:A,color:H,table:J},O=["text-special","text-heading-1","text-heading-2","text-heading-3","text-heading-4","text-heading-5","text-heading-6","text-heading-7","text-heading-8","text-heading-9","text-heading-10","text-body-1","text-body-2","text-body-3","text-body-16-24","text-heading-1-kr","text-body-1-kr","text-body-2-kr","text-body-3-kr","text-body-4-kr","text-body-5-kr","text-body-6-kr","text-body-7-kr"],F=["text-white","text-black","text-base-1","text-base-2","text-base-3"];function K(){const{fontSize:m,colors:l}=D(t=>t),u={...Object.entries(m).reduce((t,s)=>{const[r,q]=s;return r.indexOf("special")<0&&r.indexOf("heading")<0&&r.indexOf("body")<0||(t[`${r}`]=q),t},{})},c={cursor:l.cursor,white:l.white,black:l.black,...Object.entries(l.base).reduce((t,s)=>(t[`base-${s[0]}`]=s[1],t),{}),...Object.entries(l.bg).reduce((t,s)=>(t[`bg-${s[0]}`]=s[1],t),{}),...Object.entries(l.line).reduce((t,s)=>(t[`line-${s[0]}`]=s[1],t),{})},b=n.useCallback(()=>{},[]),[a,x]=n.useState({text:"Soundrise",direction:"left",duration:100}),p=()=>{x(t=>({...t,direction:t.direction==="left"?"right":"left"}))},S=()=>{const t=document.getElementById("rolling-text").value,s=document.getElementById("rolling-duration").value;x(r=>({...r,text:t.length<10?r.text:t,duration:s===""||parseInt(s,10)===0?r.duration:s}))},[o,f]=n.useState(O[0]),[j,R]=n.useState(F[0]),[T,I]=n.useState("auto"),[_,Q]=n.useState("dark"),[y,W]=n.useState(!0);return console.log("boxWidth",T),e.jsx(e.Fragment,{children:e.jsxs("div",{ref:b,children:[e.jsx(i,{className:"text-heading-1 mb-50",children:"Style Guide"}),e.jsxs("section",{className:d.font,children:[e.jsx(i,{tagName:"strong",className:d.head,children:"Font & Color"}),e.jsxs("div",{className:"relative z-1 flex flex-wrap gap-x-[--grid-col-gap] gap-y-14 ml-auto text-heading-10 mt-30",children:[e.jsx("button",{className:g("border border-solid border-blue-300 rounded-[10px] p-10",{"bg-blue-300":y}),type:"button",onClick:()=>{W(t=>!t)},children:`말줄임 : ${y?"활성":"비활성"}`}),e.jsx("select",{className:"border border-solid border-blue-300 rounded-[10px] p-10",name:"font",id:"font-options",onChange:t=>f(t.currentTarget.value),children:Object.keys(u).map((t,s)=>{const r=O[s];return e.jsx("option",{type:"button",value:r,children:t},t)})}),e.jsx("select",{className:"border border-solid border-blue-300 rounded-[10px] p-10",name:"colors",id:"color-options",onChange:t=>R(t.currentTarget.value),children:Object.keys(c).filter(t=>!t.match(/bg|line|cursor/gi)).map((t,s)=>{const r=F[s];return e.jsxs("option",{type:"button",value:r,children:[t," : ",c[t]]},t)})}),e.jsxs("div",{className:"flex gap-x-[--grid-col-gap] items-center",children:[e.jsx("label",{htmlFor:"font-box-width",children:"텍스트 상자 크기"}),e.jsx("input",{className:"border border-solid border-blue-300 rounded-[10px] p-10",type:"text",id:"font-box-width",onKeyDown:t=>{t.key==="Enter"&&I(parseInt(t.currentTarget.value))},placeholder:"px 단위로 입력해주세요."})]})]}),e.jsx("p",{style:{maxWidth:`${T*.1}rem`},className:`${o} ${g(j,{"bg-black":_==="dark"||j==="text-white","bg-white":_==="light"||j!=="text-white","border-y-2 border-red-700":!0,"overflow-hidden text-ellipsis whitespace-nowrap":y},"mt-30 w-full")}`,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate?"}),e.jsx(C,{className:"block text-body-5-kr mt-5 mb-15",children:"* 빨간 테두리가 텍스트 상자의 높이 가늠선입니다."})]}),e.jsx(i,{tagName:"h2",className:g(d.head,"mt-100 mb-30"),children:"Component"}),e.jsxs("section",{className:"w-screen",children:[e.jsxs("div",{className:"text-heading-10",children:[e.jsx("div",{className:"flex flex-col gap-y-12",children:e.jsxs("dl",{children:[e.jsxs("div",{className:"flex flex-row gap-x-4",children:[e.jsx("dt",{children:"컴포넌트 이름 : "}),e.jsx("dd",{children:"TextPassed"})]}),e.jsxs("div",{className:"flex flex-row gap-x-4 mt-14",children:[e.jsx("dt",{children:"조정 옵션"}),e.jsx("dd",{children:e.jsxs("ul",{className:"flex-1",children:[e.jsx("li",{children:"방향 : Left | Right"}),e.jsx("li",{children:"속도 : 0 ~ 500 "})]})})]})]})}),e.jsxs("div",{className:"flex flex-wrap flex-row gap-[--grid-col-gap] gap-y-14 mt-14 mobile:text-body-2",children:[e.jsxs("div",{className:"bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full",children:[e.jsx("label",{className:"pr-4",htmlFor:"rolling-duration",children:"속도"})," ",e.jsx("input",{className:"px-10 py-4 rounded-[7px]",id:"rolling-duration",placeholder:`현재 속도는 ${a.duration}입니다.`})]}),e.jsxs("div",{className:"bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full",children:[e.jsx("label",{className:"pr-4",htmlFor:"rolling-text",children:"텍스트 입력"})," ",e.jsx("input",{className:"px-10 py-4 rounded-[7px]",id:"rolling-text",placeholder:"8자 이상 입력",minLength:8})]}),e.jsx("button",{type:"button",className:"bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-4 mobile:flex-1",onClick:S,children:"적용"}),e.jsx("button",{type:"button",className:"bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-1 mobile:flex-1",onClick:p,children:"방향 전환"})]})]}),e.jsxs("div",{className:"flex flex-wrap overflow-hidden md:pb-22 ",children:[e.jsx(E,{text:a.text,runDirection:a.direction}),e.jsx(E,{text:a.text,runDirection:a.direction==="left"?"right":"left"})]})]}),e.jsxs("section",{className:"layout_text_box",children:[e.jsx(i,{tagName:"strong",className:d.title,children:"Fade motion"}),e.jsxs("article",{children:[e.jsx(i,{className:"text-heading-8",children:"Our Philosophy"}),e.jsx(P,{className:"title_p",content:"We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum.",location:"respect",styleId:"circle/8.up",color:"red",animationConfig:$.description,animationType:"fade up"}),e.jsx(P,{className:"basic_p_2",content:"우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다.",animationConfig:$.description,animationType:"fade in"})]})]}),e.jsxs("section",{children:[e.jsx(i,{tagName:"strong",className:d.title,children:"Page Header"}),e.jsx("div",{role:"region",className:"mobile:px-[--grid-container-margin]",children:e.jsx("div",{className:g("flex",{"items-start":!0,"md:items-center":!1}),children:e.jsx(B,{title:["We are focusing on","creative design","and technical work"],description:{text:"As technology develops, the combination of UX design and technology will be our powerful force.",transform:"기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다."}})})})]}),e.jsxs("section",{children:[e.jsx(i,{tagName:"strong",className:d.title,children:"#smaller, #bigger"}),e.jsx(k,{id:"smaller",src:"https://www.w3schools.com/tags/movie.mp4"}),e.jsx(k,{id:"bigger",src:"https://www.w3schools.com/tags/movie.mp4"})]}),e.jsx(i,{tagName:"strong",className:d.title,children:"SVG (SvgLine.jsx)"}),e.jsx(i,{tagName:"strong",className:d.title,children:"SVG (SvgIcons.jsx)"}),e.jsxs("section",{className:"flex gap-10",children:[e.jsx(C,{className:"text-heading-8",children:"SvgIcons .basic .big1~2"}),e.jsx(v,{types:"basic",color:"pink"}),e.jsx(v,{types:"big1",color:"hotpink"}),e.jsx(v,{types:"big2"})]})]})})}const oe={title:"😁 index",description:"this is a index page."};function ie(){return e.jsx(e.Fragment,{children:e.jsx(K,{})})}export{ie as Page,oe as documentProps};
