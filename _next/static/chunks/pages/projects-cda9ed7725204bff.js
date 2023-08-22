(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(1085)}])},1085:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var n=i(5893),r=i(5861),o=i(2630),a=i(3366),l=i(7462),s=i(7294),d=i(6010),c=i(4780),p=i(2996),u=i(8216),h=i(4367),x=i(6628),m=i(629),g=i(1657),j=i(948),Z=i(1588),f=i(7621);function v(e){return(0,f.Z)("MuiDialog",e)}let k=(0,Z.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),b=s.createContext({});var w=i(4808),S=i(2734);let C=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],W=(0,j.ZP)(w.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),y=e=>{let{classes:t,scroll:i,maxWidth:n,fullWidth:r,fullScreen:o}=e,a={root:["root"],container:["container",`scroll${(0,u.Z)(i)}`],paper:["paper",`paperScroll${(0,u.Z)(i)}`,`paperWidth${(0,u.Z)(String(n))}`,r&&"paperFullWidth",o&&"paperFullScreen"]};return(0,c.Z)(a,v,t)},P=(0,j.ZP)(h.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),D=(0,j.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.container,t[`scroll${(0,u.Z)(i.scroll)}`]]}})(({ownerState:e})=>(0,l.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),M=(0,j.ZP)(m.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.paper,t[`scrollPaper${(0,u.Z)(i.scroll)}`],t[`paperWidth${(0,u.Z)(String(i.maxWidth))}`],i.fullWidth&&t.paperFullWidth,i.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>(0,l.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),N=s.forwardRef(function(e,t){let i=(0,g.Z)({props:e,name:"MuiDialog"}),r=(0,S.Z)(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":u,BackdropComponent:h,BackdropProps:j,children:Z,className:f,disableEscapeKeyDown:v=!1,fullScreen:k=!1,fullWidth:w=!1,maxWidth:N="sm",onBackdropClick:B,onClose:R,open:T,PaperComponent:A=m.Z,PaperProps:$={},scroll:_="paper",TransitionComponent:E=x.Z,transitionDuration:F=o,TransitionProps:X}=i,I=(0,a.Z)(i,C),Y=(0,l.Z)({},i,{disableEscapeKeyDown:v,fullScreen:k,fullWidth:w,maxWidth:N,scroll:_}),H=y(Y),L=s.useRef(),G=(0,p.Z)(u),K=s.useMemo(()=>({titleId:G}),[G]);return(0,n.jsx)(P,(0,l.Z)({className:(0,d.Z)(H.root,f),closeAfterTransition:!0,components:{Backdrop:W},componentsProps:{backdrop:(0,l.Z)({transitionDuration:F,as:h},j)},disableEscapeKeyDown:v,onClose:R,open:T,ref:t,onClick:e=>{L.current&&(L.current=null,B&&B(e),R&&R(e,"backdropClick"))},ownerState:Y},I,{children:(0,n.jsx)(E,(0,l.Z)({appear:!0,in:T,timeout:F,role:"presentation"},X,{children:(0,n.jsx)(D,{className:(0,d.Z)(H.container),onMouseDown:e=>{L.current=e.target===e.currentTarget},ownerState:Y,children:(0,n.jsx)(M,(0,l.Z)({as:A,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":G},$,{className:(0,d.Z)(H.paper,$.className),ownerState:Y,children:(0,n.jsx)(b.Provider,{value:K,children:Z})}))})}))}))});function B(e){return(0,f.Z)("MuiDialogTitle",e)}(0,Z.Z)("MuiDialogTitle",["root"]);let R=["className","id"],T=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},B,t)},A=(0,j.ZP)(r.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),$=s.forwardRef(function(e,t){let i=(0,g.Z)({props:e,name:"MuiDialogTitle"}),{className:r,id:o}=i,c=(0,a.Z)(i,R),p=T(i),{titleId:u=o}=s.useContext(b);return(0,n.jsx)(A,(0,l.Z)({component:"h2",className:(0,d.Z)(p.root,r),ownerState:i,ref:t,variant:"h6",id:null!=o?o:u},c))});var _=i(6932);function E(e){return(0,f.Z)("MuiDialogActions",e)}(0,Z.Z)("MuiDialogActions",["root","spacing"]);let F=["className","disableSpacing"],X=e=>{let{classes:t,disableSpacing:i}=e;return(0,c.Z)({root:["root",!i&&"spacing"]},E,t)},I=(0,j.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,l.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Y=s.forwardRef(function(e,t){let i=(0,g.Z)({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:o=!1}=i,s=(0,a.Z)(i,F),c=(0,l.Z)({},i,{disableSpacing:o}),p=X(c);return(0,n.jsx)(I,(0,l.Z)({className:(0,d.Z)(p.root,r),ownerState:c,ref:t},s))});var H=i(8085),L=i(761),G=i(9107);let K={projects:[{id:0,name:"First project",token:"shdfk-i3jsi-idif-fkdjo"},{id:1,name:"My other project",token:"shdfk-i3jsi-idif-fkdjo"}]},O=()=>{let[e,t]=(0,s.useState)(K.projects);return{projects:e,addProject:i=>t([i,...e]),editProject:(i,n)=>t(e.map(e=>e.id===i?{id:i,...n}:e)),deleteProject:i=>t(e.filter(e=>e.id!==i))}};var z=()=>{let e=(0,s.useContext)(L.B),t=O(),[i,a]=(0,s.useState)(!1),[l,d]=(0,s.useState)(!1),[c,p]=(0,s.useState)(null),[u,h]=(0,s.useState)(!1),[x,m]=(0,s.useState)("");return e.isActive(),(0,n.jsx)(G.Z,{children:(0,n.jsxs)(H.Z,{direction:"column",justifyContent:"center",flexGrow:1,height:"100%",padding:"2rem",children:[(0,n.jsx)(r.Z,{variant:"h1",gutterBottom:!0,children:"Your projects"}),t.projects.map((e,t)=>(0,n.jsxs)(H.Z,{alignItems:"flex-start",marginBottom:"2rem",children:[(0,n.jsx)(r.Z,{variant:"h2",children:e.name}),(0,n.jsxs)(r.Z,{variant:"body1",gutterBottom:!0,children:["Token:"," ",(0,n.jsx)("code",{style:{backgroundColor:"lightgray",borderRadius:"5px",paddingLeft:"0.5em",paddingRight:"0.5em"},children:e.token})]}),(0,n.jsxs)(H.Z,{flexDirection:"row",justifyContent:"flex-end",width:"100%",children:[(0,n.jsx)(o.Z,{onClick:()=>{p(e.id),d(!0),m(e.name)},children:"Edit"}),(0,n.jsx)(o.Z,{onClick:()=>{p(e.id),h(!0)},children:"Delete"})]})]},t)),(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>a(!0),children:"Add new project"}),(0,n.jsx)(N,{open:i,children:(0,n.jsxs)(H.Z,{padding:"2rem",children:[(0,n.jsx)($,{children:"Add project"}),(0,n.jsx)(_.Z,{id:"outlined-basic",label:"Name",variant:"outlined",value:x,onChange:e=>m(e.target.value)}),(0,n.jsxs)(Y,{sx:{marginTop:"2rem"},children:[(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{a(!1)},children:"Cancel"}),(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{t.addProject({name:x,id:t.projects.length+1,token:t.projects[0].token}),a(!1)},children:"Add"})]})]})}),(0,n.jsx)(N,{open:l,children:(0,n.jsxs)(H.Z,{padding:"2rem",children:[(0,n.jsx)($,{children:"Edit project"}),(0,n.jsx)(_.Z,{id:"outlined-basic",label:"Name",variant:"outlined",value:x,onChange:e=>m(e.target.value)}),(0,n.jsxs)(Y,{sx:{marginTop:"2rem"},children:[(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{d(!1),p(null)},children:"Cancel"}),(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{null!=c&&t.editProject(c,{name:x,token:t.projects[0].token}),d(!1),p(null)},children:"Edit"})]})]})}),(0,n.jsx)(N,{open:u,children:(0,n.jsxs)(H.Z,{padding:"2rem",children:[(0,n.jsx)($,{children:"Delete project"}),(0,n.jsx)(r.Z,{children:"Warning: this will delete the project permanently and cannot be undone."}),(0,n.jsxs)(Y,{sx:{marginTop:"2rem"},children:[(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{h(!1),p(null)},children:"Cancel"}),(0,n.jsx)(o.Z,{variant:"contained",onClick:()=>{null!=c&&t.deleteProject(c),h(!1),p(null)},children:"I'm sure to delete my project"})]})]})})]})})}},9107:function(e,t,i){"use strict";var n=i(5893),r=i(6447),o=i(9008),a=i.n(o);i(7294),t.Z=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"SwiftPost"}),(0,n.jsx)("meta",{name:"description",content:"Swift web generation"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{children:(0,n.jsx)(r.Z,{minHeight:"100vh",minWidth:"100%",children:(0,n.jsx)(r.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:t})})})]})}}},function(e){e.O(0,[836,630,932,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);