(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),i=n.n(c),o=(n(140),n(141),n(223)),l=n(115),s=Object(l.a)({palette:{primary:{main:"#333996",light:"#3c44b126"},secondary:{main:"#f83245",light:"#f8324526"},background:{default:"#f4f5fd"}},overrides:{MuiAppBar:{root:{transform:"translateZ(0)"}}},props:{MuiIconButton:{disableRipple:!0}}}),j=n(24),d=n(43),u=n(200),b=n(19),O=n(209),m=n(198),p=n(157),h=n(210),x=n(211),f=n(212),g=n(213),v=n(205),C=n(151),y=n(208),S=n(121),N=n(214),k=n(227),I=n(232),w=n(106),P=n.n(w),T=n(17),z=n(108),M=n.n(z),A=n(109),D=n.n(A),E=n(110),B=n.n(E),F=n(149),H=n(150),J=n(231),R=n(195),W=n(226),q=n(3);var L=n(13),G=n(63),V=n(196),Y=["label","name","value","onChange","error"];var U=n(154),Z=n(160),$=n(199),K=n(156);var Q=n(228);var X=n(25),_=n(224),ee=n(114);var te=n(204),ne=["text","size","color","variant","onClick"],ae=Object(u.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var re=Object(u.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var ce=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange,c=e.error,i=void 0===c?null:c,o=Object(G.a)(e,Y);return Object(q.jsx)("div",{children:Object(q.jsx)(V.a,Object(L.a)(Object(L.a)({variant:"outlined",label:t,name:n,value:a,onChange:r},o),i&&{error:!0,helperText:i}))})},ie=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange,c=e.items;return Object(q.jsx)("div",{children:Object(q.jsxs)(F.a,{children:[Object(q.jsx)(H.a,{children:t}),Object(q.jsx)(J.a,{row:!0,name:n,value:a,onChange:r,children:c.map((function(e){return Object(q.jsx)(R.a,{label:e.title,value:e.id,control:Object(q.jsx)(W.a,{})},e.id)}))})]})})},oe=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange,c=e.options,i=e.error,o=void 0===i?null:i;return Object(q.jsx)("div",{children:Object(q.jsxs)(F.a,Object(L.a)(Object(L.a)({variant:"outlined"},o&&{error:!0}),{},{children:[Object(q.jsx)(U.a,{children:t}),Object(q.jsxs)(Z.a,{name:n,value:a,onChange:r,children:[Object(q.jsx)($.a,{value:"",children:"None"}),c.map((function(e){return Object(q.jsx)($.a,{value:e.id,children:e.title},e.id)}))]}),o&&Object(q.jsx)(K.a,{children:o})]}))})},le=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange;return Object(q.jsx)("div",{children:Object(q.jsx)(F.a,{children:Object(q.jsx)(R.a,{control:Object(q.jsx)(Q.a,{checked:a,name:n,color:"primary",onChange:function(e){return r(function(e,t){return{target:{name:e,value:t}}}(n,e.target.checked))}}),label:t})})})},se=function(e){var t=e.name,n=e.label,a=e.value,r=e.onChange;return Object(q.jsx)(X.a,{utils:ee.a,children:Object(q.jsx)(_.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:n,format:"MMM/dd/yyyy",name:t,value:a,onChange:function(e){return r(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},je=function(e){var t=e.text,n=e.size,a=e.color,r=e.variant,c=e.onClick,i=Object(G.a)(e,ne),o=ae();return Object(q.jsx)(te.a,Object(L.a)(Object(L.a)({variant:r||"contained",size:n||"large",color:a||"primary",onClick:c},i),{},{classes:{root:o.root,label:o.label},children:t}))},de=function(e){var t=e.color,n=e.children,a=e.onClick,r=re();return Object(q.jsx)(te.a,{className:"".concat(r.root," ").concat(r[t]),onClick:a,children:n})},ue=n(201),be=n(207),Oe=n(57),me=n(202),pe=n(77),he=n.n(pe),xe=Object(u.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:"0px"}}}));function fe(e){var t=e.title,n=e.children,a=e.openPopup,r=e.setOpenPopup,c=xe();return Object(q.jsxs)(ue.a,{open:a,maxWidth:"md",classes:{paper:c.dialogWrapper},children:[Object(q.jsx)(be.a,{className:c.dialogTitle,children:Object(q.jsxs)("div",{style:{display:"flex"},children:[Object(q.jsx)(Oe.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(q.jsx)(de,{color:"secondary",onClick:function(){r(!1)},children:Object(q.jsx)(he.a,{})})]})}),Object(q.jsx)(me.a,{dividers:!0,children:n})]})}var ge=["children"];var ve=Object(u.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));function Ce(e){e.children;var t=Object(G.a)(e,ge),n=ve();return Object(q.jsx)("form",Object(L.a)(Object(L.a)({className:n.root,autoComplete:"off"},t),{},{children:e.children}))}var ye="employees",Se="employeeId";function Ne(e){var t=ke();e.id=function(){null==localStorage.getItem(Se)&&localStorage.setItem(Se,"0");var e=parseInt(localStorage.getItem(Se));return localStorage.setItem(Se,(++e).toString()),e}(),t.push(e),localStorage.setItem(ye,JSON.stringify(t))}function ke(){null==localStorage.getItem(ye)&&localStorage.setItem(ye,JSON.stringify([]));var e=JSON.parse(localStorage.getItem(ye)),t=[{id:1,title:"IT"},{id:2,title:"Accounting"},{id:3,title:"Marketing"},{id:4,title:"Hr"}];return e.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{department:t[e.departmentId-1].title})}))}var Ie=[{id:"male",title:"Male"},{id:"female",title:"Female"},{id:"other",title:"Other"}],we={id:0,fullName:"",email:"",mobile:"",city:"",gender:"male",departmentId:"",hireDate:new Date,isPermanant:!1};function Pe(e){var t=e.addOrEdit,n=e.recordForEdit,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=Object(L.a)({},s);if("fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=/$^|.+@.+..+/.test(e.email)?"":"Email is not valid."),"mobile"in e&&(t.mobile=e.mobile.length>9?"":"Minimum 10 numbers required."),"departmentId"in e&&(t.departmentId=0!=e.departmentId.length?"":"This field is required."),u(Object(L.a)({},t)),e==i)return Object.values(t).every((function(e){return""==e}))},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=Object(a.useState)(e),c=Object(j.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)({}),s=Object(j.a)(l,2),u=s[0],b=s[1],O=function(e){var a=e.target,r=a.name,c=a.value;o(Object(L.a)(Object(L.a)({},i),{},Object(d.a)({},r,c))),t&&n(Object(d.a)({},r,c))},m=function(){o(e),b({})};return{values:i,setValues:o,handleInputChange:O,errors:u,setErrors:b,resetForm:m}}(we,!0,r),i=c.values,o=c.setValues,l=c.handleInputChange,s=c.errors,u=c.setErrors,b=c.resetForm;return Object(a.useEffect)((function(){null!=n&&o(Object(L.a)({},n))}),[n]),Object(q.jsx)(Ce,{onSubmit:function(e){e.preventDefault(),r()&&t(i,b)},children:Object(q.jsxs)(y.a,{container:!0,children:[Object(q.jsxs)(y.a,{item:!0,sm:6,xs:6,children:[Object(q.jsx)(ce,{name:"fullName",value:i.fullName,label:"Full Name",onChange:l,error:s.fullName}),Object(q.jsx)(ce,{name:"email",value:i.email,label:"Email",onChange:l,error:s.email}),Object(q.jsx)(ce,{name:"mobile",value:i.mobile,label:"Mobile No",onChange:l,error:s.mobile}),Object(q.jsx)(ce,{name:"city",value:i.city,label:"City",onChange:l})]}),Object(q.jsxs)(y.a,{item:!0,sm:6,xs:6,children:[Object(q.jsx)(ie,{name:"gender",value:i.gender,label:"Gender",onChange:l,items:Ie}),Object(q.jsx)(oe,{name:"departmentId",value:i.departmentId,label:"Departments",onChange:l,options:[{id:1,title:"IT"},{id:2,title:"Accounting"},{id:3,title:"Marketing"},{id:4,title:"Hr"}],error:s.departmentId}),Object(q.jsx)(se,{name:"hireDate",value:i.hireDate,label:"Hire Date",onChange:l}),Object(q.jsx)(le,{name:"isPermanant",value:i.isPermanant,label:"Permanant Employee",onChange:l}),Object(q.jsxs)("div",{children:[Object(q.jsx)(je,{type:"submit",text:"Submit"}),Object(q.jsx)(je,{text:"Reset",color:"default",onClick:b})]})]})]})})}var Te=n(107),ze=n.n(Te),Me=n(79),Ae=n(90),De=n(103),Ee=n(104),Be=n(105),Fe=280,He=Object(u.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:Fe,flexShrink:0}),appBar:(t={},Object(d.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Fe,"px)"),marginLeft:Fe}),Object(d.a)(t,"background","#fff"),t),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:Fe},content:{flexGrow:2,padding:e.spacing(3)}}}));var Je=Object(T.f)((function(e){var t=e.history,n=e.window,a=He(),c=[{text:"DashBoard",icon:Object(q.jsx)(Ae.a,{size:"1.5rem"}),onClick:function(){t.push("/")}},{text:"Employees",icon:Object(q.jsx)(Me.c,{size:"1.5rem"}),onClick:function(){t.push("/employees")}},{text:"Customers",icon:Object(q.jsx)(De.a,{size:"1.5rem"}),onClick:function(){t.push("/customers")}},{text:"Products",icon:Object(q.jsx)(Me.b,{size:"1.5rem"}),onClick:function(){t.push("/products")}},{text:"Categories",icon:Object(q.jsx)(Ee.a,{size:"1.5rem"}),onClick:function(){t.push("/categories")}},{text:"Orders",icon:Object(q.jsx)(Me.a,{size:"1.5rem"}),onClick:function(){t.push("/orders")}},{text:"Coupans",icon:Object(q.jsx)(Be.a,{size:"1.5rem"}),onClick:function(){t.push("/")}},{text:"Setting",icon:Object(q.jsx)(Ae.b,{size:"1.5rem"}),onClick:function(){t.push("/")}}],i=Object(b.a)(),o=r.a.useState(!1),l=Object(j.a)(o,2),s=l[0],d=l[1],u=function(){d(!s)},w=Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:a.toolbar}),Object(q.jsx)(O.a,{}),Object(q.jsx)(m.a,{children:c.map((function(e,t){var n=e.text,a=e.icon,r=e.onClick;return Object(q.jsxs)(p.a,{button:!0,onClick:r,children:[a&&Object(q.jsx)(h.a,{children:a}),Object(q.jsx)(x.a,{primary:n})]},n)}))})]}),T=void 0!==n?function(){return n().document.body}:void 0;return Object(q.jsxs)("div",{className:a.root,children:[Object(q.jsx)(f.a,{}),Object(q.jsx)(g.a,{position:"fixed",className:a.appBar,children:Object(q.jsxs)(v.a,{children:[Object(q.jsx)(C.a,{"aria-label":"open drawer",edge:"start",onClick:u,className:a.menuButton,children:Object(q.jsx)(P.a,{})}),Object(q.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(q.jsx)(y.a,{item:!0,children:Object(q.jsx)(S.a,{placeholder:"Search topics",className:a.searchInput,startAdornment:Object(q.jsx)(ze.a,{fontSize:"small"})})}),Object(q.jsx)(y.a,{item:!0,sm:!0}),Object(q.jsxs)(y.a,{item:!0,children:[Object(q.jsx)(C.a,{children:Object(q.jsx)(N.a,{badgeContent:4,color:"secondary",children:Object(q.jsx)(M.a,{fontSize:"small"})})}),Object(q.jsx)(C.a,{children:Object(q.jsx)(N.a,{badgeContent:3,color:"primary",children:Object(q.jsx)(D.a,{fontSize:"small"})})}),Object(q.jsx)(C.a,{children:Object(q.jsx)(B.a,{fontSize:"small"})})]})]})]})}),Object(q.jsxs)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:[Object(q.jsx)(k.a,{smUp:!0,implementation:"css",children:Object(q.jsx)(I.a,{container:T,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:s,onClose:u,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:w})}),Object(q.jsx)(k.a,{xsDown:!0,implementation:"css",children:Object(q.jsx)(I.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:w})})]}),Object(q.jsx)("main",{className:a.content,children:Object(q.jsx)("div",{className:a.toolbar})})]})})),Re=n(89),We=n(215),qe=n(216),Le=n(217),Ge=n(218),Ve=n(233),Ye=n(229),Ue=Object(u.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.primary.light},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function Ze(e,t,n){var r=Ue(),c=[5,10,25],i=Object(a.useState)(0),o=Object(j.a)(i,2),l=o[0],s=o[1],d=Object(a.useState)(c[l]),u=Object(j.a)(d,2),b=u[0],O=u[1],m=Object(a.useState)(),p=Object(j.a)(m,2),h=p[0],x=p[1],f=Object(a.useState)(),g=Object(j.a)(f,2),v=g[0],C=g[1],y=function(e,t){s(t)},S=function(e){O(parseInt(e.target.value,10)),s(0)};function N(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}return{TblContainer:function(e){return Object(q.jsx)(We.a,{className:r.table,children:e.children})},TblHead:function(e){return Object(q.jsx)(qe.a,{children:Object(q.jsx)(Le.a,{children:t.map((function(e){return Object(q.jsx)(Ge.a,{sortDirection:v===e.id&&h,children:e.disableSorting?e.label:Object(q.jsx)(Ve.a,{active:v===e.id,direction:v===e.id?h:"asc",onClick:function(){var t;t=e.id,x(v===t&&"asc"===h?"desc":"asc"),C(t)},children:e.label})},e.id)}))})})},TblPagination:function(){return Object(q.jsx)(Ye.a,{component:"div",page:l,rowsPerPageOptions:c,rowsPerPage:b,count:e.length,onChangePage:y,onChangeRowsPerPage:S})},recordsAfterPagingAndSorting:function(){return function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}(n.fn(e),function(e,t){return"desc"===e?function(e,n){return N(e,n,t)}:function(e,n){return-N(e,n,t)}}(h,v)).slice(l*b,(l+1)*b)}}}var $e=n(219),Ke=n(81),Qe=n(220),Xe=Object(u.a)((function(e){return{root:{backgroundColor:"#fdfdff",marginTop:"100px",paddingLeft:0},pageHeader:{padding:e.spacing(2),display:"flex",marginBottom:e.spacing(2)},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function _e(e){var t=Xe(),n=e.title,a=e.subTitle,r=e.icon;return Object(q.jsx)($e.a,{children:Object(q.jsx)(y.a,{container:!0,children:Object(q.jsx)(y.a,{item:!0,md:12,sm:12,xs:12,lg:12,children:Object(q.jsx)(Ke.a,{elevation:0,square:!0,className:t.root,children:Object(q.jsxs)("div",{className:t.pageHeader,children:[Object(q.jsx)(Qe.a,{className:t.pageIcon,children:r}),Object(q.jsxs)("div",{className:t.pageTitle,children:[Object(q.jsx)(Oe.a,{variant:"h6",component:"div",children:n}),Object(q.jsx)(Oe.a,{variant:"subtitle2",component:"div",children:a})]})]})})})})})}var et=n(112),tt=n.n(et),nt=n(206),at=n(222),rt=n(88),ct=n.n(rt),it=n(221),ot=n(113),lt=n.n(ot),st=n(230),jt=n(225),dt=Object(u.a)((function(e){return{root:{top:e.spacing(9)}}}));function ut(e){var t=e.notify,n=e.setNotify,a=dt(),r=function(e,a){"clickaway"!==a&&n(Object(L.a)(Object(L.a)({},t),{},{isOpen:!1}))};return Object(q.jsx)(st.a,{className:a.root,open:t.isOpen,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:r,children:Object(q.jsx)(jt.a,{severity:t.type,onClose:r,children:t.message})})}var bt=n(203),Ot=n(111),mt=n.n(Ot),pt=Object(u.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function ht(e){var t=e.confirmDialog,n=e.setConfirmDialog,a=pt();return Object(q.jsxs)(ue.a,{open:t.isOpen,classes:{paper:a.dialog},children:[Object(q.jsx)(be.a,{className:a.dialogTitle,children:Object(q.jsx)(C.a,{disableRipple:!0,className:a.titleIcon,children:Object(q.jsx)(mt.a,{})})}),Object(q.jsxs)(me.a,{className:a.dialogContent,children:[Object(q.jsx)(Oe.a,{variant:"h6",children:t.title}),Object(q.jsx)(Oe.a,{variant:"subtitle2",children:t.subTitle})]}),Object(q.jsxs)(bt.a,{className:a.dialogAction,children:[Object(q.jsx)(je,{text:"No",color:"default",onClick:function(){return n(Object(L.a)(Object(L.a)({},t),{},{isOpen:!1}))}}),Object(q.jsx)(je,{text:"Yes",color:"secondary",onClick:t.onConfirm})]})]})}var xt=Object(u.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchInput:{width:"50ch"},newButton:{position:"absolute",right:"10px"}}})),ft=[{id:"fullName",label:"Employee Name"},{id:"email",label:"Email Address (Personal)"},{id:"mobile",label:"Mobile Number"},{id:"department",label:"Department",disableSorting:!0},{id:"actions",label:"Actions",disableSorting:!0}];function gt(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(ke()),i=Object(j.a)(c,2),o=i[0],l=i[1],s=Object(a.useState)(null),d=Object(j.a)(s,2),u=d[0],b=d[1],O=Object(a.useState)({isOpen:!1,message:"",type:""}),m=Object(j.a)(O,2),p=m[0],h=m[1],x=Object(a.useState)({isOpen:!1,title:"",subTitle:""}),f=Object(j.a)(x,2),g=f[0],C=f[1],y=Object(a.useState)({fn:function(e){return e}}),S=Object(j.a)(y,2),N=S[0],k=S[1],I=Ze(o,ft,N),w=I.TblContainer,P=I.TblHead,T=I.TblPagination,z=I.recordsAfterPagingAndSorting,M=function(e){C(Object(L.a)(Object(L.a)({},g),{},{isOpen:!1})),function(e){var t=ke();t=t.filter((function(t){return t.id!=e})),localStorage.setItem(ye,JSON.stringify(t))}(e),l(ke()),h({isOpen:!0,message:"Deleted Successfully",type:"error"})},A=xt();return Object(q.jsxs)("div",{children:[Object(q.jsx)(_e,{title:"New Employee",subTitle:"Form design with validation",icon:Object(q.jsx)(tt.a,{fontSize:"large"})}),Object(q.jsxs)(Ke.a,{className:A.pageContent,children:[Object(q.jsxs)(v.a,{children:[Object(q.jsx)(ce,{label:"Search Employees",className:A.searchInput,InputProps:{startAdornment:Object(q.jsx)(nt.a,{position:"start",children:Object(q.jsx)(it.a,{})})},onChange:function(e){var t=e.target;k({fn:function(e){return""==t.value?e:e.filter((function(e){return e.fullName.toLowerCase().includes(t.value)}))}})}}),Object(q.jsx)(je,{text:"Add New",variant:"outlined",startIcon:Object(q.jsx)(ct.a,{}),className:A.newButton,onClick:function(){r(!0),b(null)}})]}),Object(q.jsxs)(w,{children:[Object(q.jsx)(P,{}),Object(q.jsx)(at.a,{children:z().map((function(e){return Object(q.jsxs)(Le.a,{children:[Object(q.jsx)(Ge.a,{children:e.fullName}),Object(q.jsx)(Ge.a,{children:e.email}),Object(q.jsx)(Ge.a,{children:e.mobile}),Object(q.jsx)(Ge.a,{children:e.department}),Object(q.jsx)(de,{color:"primary",children:Object(q.jsx)(lt.a,{fontSize:"small",onClick:function(){!function(e){b(e),r(!0)}(e)}})}),Object(q.jsx)(de,{color:"secondary",children:Object(q.jsx)(he.a,{fontSize:"small",onClick:function(){C({isOpen:!0,title:"Are you sure to delete this record?",subTitle:"You can't undo this operation",onConfirm:function(){M(e.id)}})}})})]},e.id)}))})]}),Object(q.jsx)(T,{})]}),Object(q.jsx)(fe,{openPopup:n,setOpenPopup:r,title:"Employee Form",children:Object(q.jsx)(Pe,{addOrEdit:function(e,t){0==e.id?Ne(e):function(e){var t=ke(),n=t.findIndex((function(t){return t.id==e.id}));t[n]=Object(L.a)({},e),localStorage.setItem(ye,JSON.stringify(t))}(e),t(),b(null),r(!1),l(ke()),h({isOpen:!0,message:"Submitted Successfully",type:"success"})},recordForEdit:u})}),Object(q.jsx)(ut,{notify:p,setNotify:h}),Object(q.jsx)(ht,{confirmDialog:g,setConfirmDialog:C})]})}function vt(){return Object(q.jsx)("div",{children:Object(q.jsx)(gt,{})})}function Ct(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"Orders"})})}function yt(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"Products"})})}function St(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"Customers"})})}function Nt(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"Home"})})}function kt(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"CustomersCustomersCustomersCustomersCustomersCustomersCustomersCustomersCustomersCustomers"})})}var It=Object(u.a)({root:{display:"flex"}});var wt=function(){var e=It();return Object(q.jsxs)(o.a,{theme:s,children:[Object(q.jsx)(Re.a,{children:Object(q.jsxs)("div",{className:e.root,children:[Object(q.jsx)(Je,{}),Object(q.jsxs)(T.c,{children:[Object(q.jsx)(T.a,{path:"/employees",exact:!0,component:vt}),Object(q.jsx)(T.a,{path:"/orders",exact:!0,component:Ct}),Object(q.jsx)(T.a,{path:"/products",exact:!0,component:yt}),Object(q.jsx)(T.a,{path:"/customers",exact:!0,component:St}),Object(q.jsx)(T.a,{path:"/",exact:!0,component:Nt}),Object(q.jsx)(T.a,{path:"/categories",exact:!0,component:kt})]})]})}),Object(q.jsx)(f.a,{})]})};var Pt=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(wt,{})})};i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(Pt,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.371efe6c.chunk.js.map