(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return s}));var c="CREATE",a="UPDATE",r="DELETE",i="FETCH_ALL",l="FETCH_OLD",s="DELETE_PART"},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),r=n.n(a),i=n(37),l=n(14),s=n(46),o=n(28),u=n(5),d=n(47),b=n(32),j=n(54),h=n(15),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.d:return t.payload.slice().sort((function(e,t){return new Date(e.beginDate)-new Date(t.beginDate)}));case h.a:return[].concat(Object(j.a)(e),[t.payload]);case h.f:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case h.b:return e.filter((function(e){return e._id!==t.payload}));case h.c:return e.map((function(e){return e._id===t.payload.event?Object(b.a)(Object(b.a)({},e),{},{participants:e.participants.filter((function(e){return!t.payload.parts.includes(e._id)}))}):e}));default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.e:return t.payload.slice().sort((function(e,t){return new Date(t.beginDate)-new Date(e.beginDate)}));default:return e}},O=Object(l.c)({events:f,oldevents:p}),y=n(80),x=n(83),v=n(3),g=function(){return Object(v.jsx)(y.a,{style:{display:"flex",justifyContent:"center",height:"90vh"},children:Object(v.jsx)(x.a,{style:{alignSelf:"center"}})})},m=n(84),E=function(){return Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"90vh"},children:Object(v.jsxs)("div",{style:{alignSelf:"center",display:"flex"},children:[Object(v.jsx)(m.a,{variant:"h1",bold:!0,children:"404"}),Object(v.jsx)("span",{style:{width:"0.5rem",backgroundColor:"black",margin:"0 2rem"}}),Object(v.jsxs)(m.a,{variant:"h5",style:{alignSelf:"end"},children:["You are not supposed to be here, ",Object(v.jsx)(o.b,{to:"/",children:"Go back"})]})]})})},D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(6),n.e(7)]).then(n.bind(null,217))})),w=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,222))})),k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,223))})),_=Object(l.e)(O,Object(l.d)(Object(l.a)(s.a)));r.a.render(Object(v.jsxs)(i.a,{store:_,children:[Object(v.jsx)(d.a,{children:Object(v.jsx)("title",{children:"Vilkkoni | Events"})}),Object(v.jsx)(o.a,{basename:".",children:Object(v.jsx)(c.Suspense,{fallback:Object(v.jsx)(g,{}),children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/",component:D}),Object(v.jsx)(u.a,{path:"/unsubscribe",component:w}),Object(v.jsx)(u.a,{path:"/validate",component:k}),Object(v.jsx)(u.a,{component:E})]})})})]}),document.getElementById("root"))}},[[68,4,5]]]);
//# sourceMappingURL=main.44eeba8a.chunk.js.map