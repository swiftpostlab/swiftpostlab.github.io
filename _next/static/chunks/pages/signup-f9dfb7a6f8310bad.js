(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(3599)}])},3599:function(e,n,t){"use strict";t.r(n);var i=t(5893),r=t(5861),s=t(9047),a=t(2630),o=t(9211),l=t(1664),u=t.n(l),c=t(1163),d=t(7294),h=t(4579),g=t(3101),m=t(4345),f=t(5087),p=t(6033);let x=()=>{let[e,n]=(0,d.useState)(""),[t,l]=(0,d.useState)(""),[x,j]=(0,d.useState)(""),[w,v]=(0,d.useState)(""),[Z,_]=(0,d.useState)(!1),S=(0,c.useRouter)(),b=(0,d.useContext)(p.B);(0,d.useEffect)(()=>{b.isActive()&&S.replace(f.L.home)},[]),(0,d.useEffect)(()=>{v("")},[t,x]),(0,d.useEffect)(()=>{Z&&setTimeout(()=>S.push(f.L.home),5e3)},[Z]);let y=async()=>{if(t.length<8){v("Password too short");return}if(t!==x){v("Password confirmation not matching");return}let n=await (0,h.v)("".concat(g._,"/auth/signup"),{username:e,password:t});if(n.isError){console.log("SignUp error"),v("Could not sign in. Try again later.");return}C()},C=async()=>{v("");let n=await b.login(e,t);if(!n){v("Something went wrong, try again later.");return}v(""),_(!0)};return(0,i.jsx)(m.Z,{children:(0,i.jsx)(o.Z,{direction:"column",justifyContent:"center",alignItems:"center",flexGrow:1,height:"100%",children:Z?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{variant:"h1",children:"Sign up completed!"}),(0,i.jsxs)(r.Z,{variant:"subtitle1",children:["Thank you. You're being redirected"," ",(0,i.jsx)(u(),{href:f.L.home,children:"home"}),"."]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{variant:"h1",children:"Sign up"}),(0,i.jsx)(r.Z,{variant:"subtitle1",children:"Please, fill up your data"}),(0,i.jsxs)(o.Z,{direction:"column",justifyContent:"center",spacing:"2rem",paddingTop:"2rem",children:[(0,i.jsx)(s.Z,{required:!0,label:"Username",value:e,onChange:e=>n(e.target.value)}),(0,i.jsx)(s.Z,{required:!0,label:"Password",type:"password",value:t,onChange:e=>l(e.target.value)}),(0,i.jsx)(s.Z,{required:!0,label:"Confirm Password",type:"password",value:x,onChange:e=>j(e.target.value)}),w.length>0&&(0,i.jsx)(r.Z,{variant:"body1",color:"error",children:w}),(0,i.jsx)(a.Z,{variant:"contained",onClick:y,children:"Sign Up"})]})]})})})};n.default=x},4345:function(e,n,t){"use strict";var i=t(5893),r=t(6447),s=t(9008),a=t.n(s);t(7294);let o=e=>{let{children:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"SwiftPost"}),(0,i.jsx)("meta",{name:"description",content:"Swift web generation"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)("main",{children:(0,i.jsx)(r.Z,{minHeight:"100vh",minWidth:"100%",children:(0,i.jsx)(r.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:n})})})]})};n.Z=o},5087:function(e,n,t){"use strict";t.d(n,{L:function(){return i}});let i={home:"/",signup:"/signup",login:"/login"}}},function(e){e.O(0,[75,317,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);