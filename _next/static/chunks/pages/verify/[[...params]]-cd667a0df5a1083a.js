(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{3195:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify/[[...params]]",function(){return n(5206)}])},5206:function(e,i,n){"use strict";n.r(i);var t=n(5893),r=n(5861),s=n(9211),a=n(1664),c=n.n(a),o=n(1163),l=n(7294),u=n(4579),d=n(3101),h=n(4345),f=n(5087),m=n(6033);let x="".concat(d.T,"/auth/verify"),j=()=>{let[e,i]=(0,l.useState)(!1),[n,a]=(0,l.useState)(!1),d=(0,o.useRouter)();(0,l.useContext)(m.B),(0,l.useEffect)(()=>{if(d.isReady){console.log("Router:",d.query);let e=d.query.params,i=Array.isArray(e)?e[0]:e;i&&j(i)}},[d.isReady]),(0,l.useEffect)(()=>{e&&setTimeout(()=>d.push(f.L.home),5e3)},[e]);let j=async e=>{let n=await (0,u.U2)("".concat(x,"/").concat(e));if(n.isError){a(!0);return}i(!0)};return(0,t.jsx)(h.Z,{children:(0,t.jsx)(s.Z,{direction:"column",justifyContent:"center",alignItems:"center",flexGrow:1,height:"100%",children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{variant:"h1",children:"Verification failed"}),(0,t.jsx)(r.Z,{variant:"subtitle1",children:"Verification failed"})]}):e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{variant:"h1",children:"Verification succeded"}),(0,t.jsxs)(r.Z,{variant:"subtitle1",children:["Thank you for verifying your email. You're being redirected"," ",(0,t.jsx)(c(),{href:f.L.home,children:"home"}),"."]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{variant:"h1",children:"Confirm verification"}),(0,t.jsx)(r.Z,{variant:"subtitle1",children:"Please, wait a moment while we verify..."})]})})})};i.default=j},4345:function(e,i,n){"use strict";var t=n(5893),r=n(6447),s=n(9008),a=n.n(s);n(7294);let c=e=>{let{children:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"SwiftPost"}),(0,t.jsx)("meta",{name:"description",content:"Swift web generation"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("main",{children:(0,t.jsx)(r.Z,{minHeight:"100vh",minWidth:"100%",children:(0,t.jsx)(r.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:i})})})]})};i.Z=c},5087:function(e,i,n){"use strict";n.d(i,{L:function(){return t}});let t={home:"/",signup:"/signup",login:"/login",verify:"/verify"}}},function(e){e.O(0,[673,664,774,888,179],function(){return e(e.s=3195)}),_N_E=e.O()}]);