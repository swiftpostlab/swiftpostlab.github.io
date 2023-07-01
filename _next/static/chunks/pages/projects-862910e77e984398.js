(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(1785)}])},1785:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var i=r(5893),n=r(5861),o=r(2630),a=r(3366),l=r(7462),s=r(7294),d=r(6010),c=r(4780),p=r(2996),u=r(8216),h=r(4367),m=r(6628),x=r(629),f=r(1657),Z=r(948),g=r(1588),j=r(7621);function v(e){return(0,j.Z)("MuiDialog",e)}let b=(0,g.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=s.createContext({});var w=r(4808),S=r(2734);let W=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y=(0,Z.ZP)(w.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),P=e=>{let{classes:t,scroll:r,maxWidth:i,fullWidth:n,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,u.Z)(r)}`],paper:["paper",`paperScroll${(0,u.Z)(r)}`,`paperWidth${(0,u.Z)(String(i))}`,n&&"paperFullWidth",o&&"paperFullScreen"]};return(0,c.Z)(a,v,t)},C=(0,Z.ZP)(h.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),D=(0,Z.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.container,t[`scroll${(0,u.Z)(r.scroll)}`]]}})(({ownerState:e})=>(0,l.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),M=(0,Z.ZP)(x.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.paper,t[`scrollPaper${(0,u.Z)(r.scroll)}`],t[`paperWidth${(0,u.Z)(String(r.maxWidth))}`],r.fullWidth&&t.paperFullWidth,r.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>(0,l.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${b.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),B=s.forwardRef(function(e,t){let r=(0,f.Z)({props:e,name:"MuiDialog"}),n=(0,S.Z)(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":u,BackdropComponent:h,BackdropProps:Z,children:g,className:j,disableEscapeKeyDown:v=!1,fullScreen:b=!1,fullWidth:w=!1,maxWidth:B="sm",onBackdropClick:N,onClose:A,open:R,PaperComponent:T=x.Z,PaperProps:$={},scroll:_="paper",TransitionComponent:F=m.Z,transitionDuration:E=o,TransitionProps:X}=r,I=(0,a.Z)(r,W),Y=(0,l.Z)({},r,{disableEscapeKeyDown:v,fullScreen:b,fullWidth:w,maxWidth:B,scroll:_}),H=P(Y),G=s.useRef(),K=e=>{G.current=e.target===e.currentTarget},L=e=>{G.current&&(G.current=null,N&&N(e),A&&A(e,"backdropClick"))},O=(0,p.Z)(u),z=s.useMemo(()=>({titleId:O}),[O]);return(0,i.jsx)(C,(0,l.Z)({className:(0,d.Z)(H.root,j),closeAfterTransition:!0,components:{Backdrop:y},componentsProps:{backdrop:(0,l.Z)({transitionDuration:E,as:h},Z)},disableEscapeKeyDown:v,onClose:A,open:R,ref:t,onClick:L,ownerState:Y},I,{children:(0,i.jsx)(F,(0,l.Z)({appear:!0,in:R,timeout:E,role:"presentation"},X,{children:(0,i.jsx)(D,{className:(0,d.Z)(H.container),onMouseDown:K,ownerState:Y,children:(0,i.jsx)(M,(0,l.Z)({as:T,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":O},$,{className:(0,d.Z)(H.paper,$.className),ownerState:Y,children:(0,i.jsx)(k.Provider,{value:z,children:g})}))})}))}))});function N(e){return(0,j.Z)("MuiDialogTitle",e)}(0,g.Z)("MuiDialogTitle",["root"]);let A=["className","id"],R=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},N,t)},T=(0,Z.ZP)(n.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),$=s.forwardRef(function(e,t){let r=(0,f.Z)({props:e,name:"MuiDialogTitle"}),{className:n,id:o}=r,c=(0,a.Z)(r,A),p=R(r),{titleId:u=o}=s.useContext(k);return(0,i.jsx)(T,(0,l.Z)({component:"h2",className:(0,d.Z)(p.root,n),ownerState:r,ref:t,variant:"h6",id:null!=o?o:u},c))});var _=r(6932);function F(e){return(0,j.Z)("MuiDialogActions",e)}(0,g.Z)("MuiDialogActions",["root","spacing"]);let E=["className","disableSpacing"],X=e=>{let{classes:t,disableSpacing:r}=e;return(0,c.Z)({root:["root",!r&&"spacing"]},F,t)},I=(0,Z.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,l.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Y=s.forwardRef(function(e,t){let r=(0,f.Z)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:o=!1}=r,s=(0,a.Z)(r,E),c=(0,l.Z)({},r,{disableSpacing:o}),p=X(c);return(0,i.jsx)(I,(0,l.Z)({className:(0,d.Z)(p.root,n),ownerState:c,ref:t},s))});var H=r(8085),G=r(7386),K=r(4345);let L={projects:[{id:0,name:"First project",token:"shdfk-i3jsi-idif-fkdjo"},{id:1,name:"My other project",token:"shdfk-i3jsi-idif-fkdjo"}]},O=()=>{let[e,t]=(0,s.useState)(L.projects);return{projects:e,addProject:r=>t([r,...e]),deleteProject:r=>t(e.filter(e=>e.id!==r))}},z=()=>{let e=(0,s.useContext)(G.B),t=O(),[r,a]=(0,s.useState)(!1),[l,d]=(0,s.useState)("");return e.isActive(),(0,i.jsx)(K.Z,{children:(0,i.jsxs)(H.Z,{direction:"column",justifyContent:"center",flexGrow:1,height:"100%",children:[(0,i.jsx)(n.Z,{variant:"h1",gutterBottom:!0,children:"Your projects"}),t.projects.map((e,r)=>(0,i.jsxs)(H.Z,{alignItems:"flex-start",marginBottom:"2rem",children:[(0,i.jsx)(n.Z,{variant:"h2",children:e.name}),(0,i.jsxs)(n.Z,{variant:"body1",gutterBottom:!0,children:["Token:"," ",(0,i.jsx)("code",{children:e.token})]}),(0,i.jsx)(o.Z,{onClick:()=>t.deleteProject(e.id),children:"Delete"})]},r)),(0,i.jsx)(o.Z,{variant:"contained",onClick:()=>a(!0),children:"Add new project"}),(0,i.jsx)(B,{open:r,children:(0,i.jsxs)(H.Z,{padding:"2rem",children:[(0,i.jsx)($,{children:"Add project"}),(0,i.jsx)(_.Z,{id:"outlined-basic",label:"Name",variant:"outlined",value:l,onChange:e=>d(e.target.value)}),(0,i.jsx)(Y,{sx:{marginTop:"2rem"},children:(0,i.jsx)(o.Z,{variant:"contained",onClick:()=>{t.addProject({name:l,id:t.projects.length+1,token:t.projects[0].token}),a(!1)},children:"Add"})})]})})]})})};var q=z},4345:function(e,t,r){"use strict";var i=r(5893),n=r(6447),o=r(9008),a=r.n(o);r(7294);let l=e=>{let{children:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"SwiftPost"}),(0,i.jsx)("meta",{name:"description",content:"Swift web generation"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{children:(0,i.jsx)(n.Z,{minHeight:"100vh",minWidth:"100%",children:(0,i.jsx)(n.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:t})})})]})};t.Z=l}},function(e){e.O(0,[836,630,932,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);