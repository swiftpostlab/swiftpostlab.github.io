(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(3326)}])},3326:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(5861),a=n(6932),s=n(2630),o=n(8085),l=n(1664),u=n.n(l),c=n(1163),d=n(7294),h=n(6184),g=n(761),m=n(9107),p=n(2409);t.default=()=>{let[e,t]=(0,d.useState)(""),[n,l]=(0,d.useState)(""),[f,x]=(0,d.useState)(""),[j,v]=(0,d.useState)(""),[w,S]=(0,d.useState)(""),[Z,y]=(0,d.useState)(""),[b,C]=(0,d.useState)(""),[_,E]=(0,d.useState)(""),[T,k]=(0,d.useState)(""),[P,N]=(0,d.useState)(!1),U=(0,c.useRouter)(),q=(0,d.useContext)(g.B);(0,d.useEffect)(()=>{q.isActive()&&U.replace(p.L.home)},[]),(0,d.useEffect)(()=>{l(""),v(""),y(""),E(""),k("")},[w,b]),(0,d.useEffect)(()=>{P&&setTimeout(()=>U.push(p.L.home),5e3)},[P]);let L=async()=>{if(e.length<3){l("Username too short");return}if(l(""),f.length<6||!f.includes("@")||!f.includes(".")){v("Email format not valid");return}if(v(""),w.length<8){y("Password has less than 8 characters.");return}if(y(""),w!==b){E("Password confirmation not matching");return}E("");let t=await h.i.postSignUp(e.trim(),f.trim(),w.trim());if(t.isError){console.log("SignUp error"),k("Could not sign up. Try again later.");return}X()},X=async()=>{k("");let t=await q.login(e,w);if(!t){k("Something went wrong, try again later.");return}N(!0)};return(0,r.jsx)(m.Z,{children:(0,r.jsx)(o.Z,{direction:"column",justifyContent:"center",alignItems:"center",flexGrow:1,height:"100%",children:P?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{variant:"h1",children:"Sign up completed!"}),(0,r.jsxs)(i.Z,{variant:"subtitle1",children:["Thank you. You're being redirected"," ",(0,r.jsx)(u(),{href:p.L.home,children:"home"}),"."]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{variant:"h1",children:"Sign up"}),(0,r.jsx)(i.Z,{variant:"subtitle1",children:"Please, fill up your data"}),(0,r.jsxs)(o.Z,{direction:"column",justifyContent:"center",spacing:"2rem",paddingTop:"2rem",children:[(0,r.jsx)(a.Z,{required:!0,label:"Username",value:e,onChange:e=>t(e.target.value),error:""!==n,helperText:n}),(0,r.jsx)(a.Z,{required:!0,label:"Email",type:"email",value:f,onChange:e=>x(e.target.value),error:""!==j,helperText:j}),(0,r.jsx)(a.Z,{required:!0,label:"Password",type:"password",value:w,onChange:e=>S(e.target.value),error:""!==Z,helperText:Z}),(0,r.jsx)(a.Z,{required:!0,label:"Confirm Password",type:"password",value:b,onChange:e=>C(e.target.value),error:""!==_,helperText:_}),T.length>0&&(0,r.jsx)(i.Z,{variant:"body1",color:"error",children:T}),(0,r.jsx)(s.Z,{variant:"contained",onClick:L,children:"Sign Up"})]})]})})})}},9107:function(e,t,n){"use strict";var r=n(5893),i=n(6447),a=n(9008),s=n.n(a);n(7294),t.Z=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"SwiftPost"}),(0,r.jsx)("meta",{name:"description",content:"Swift web generation"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsx)(i.Z,{minHeight:"100vh",minWidth:"100%",children:(0,r.jsx)(i.Z,{maxWidth:"1200px",paddingBottom:"2.5rem",paddingTop:"1rem",paddingX:"0.5rem",flexGrow:1,sx:e=>({[e.breakpoints.up("md")]:{marginX:"auto"}}),children:t})})})]})}},2409:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});let r={home:"/",signup:"/signup",login:"/login",verify:"/verify",projects:"/projects"}}},function(e){e.O(0,[836,630,932,424,774,888,179],function(){return e(e.s=7805)}),_N_E=e.O()}]);