(this.webpackJsonpsaatva=this.webpackJsonpsaatva||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"mattresses":{"classic":{"name":"Saatva Classic","price":999,"reviewRating":4.8,"imageFileName":"classic-carousel.jpg"},"loom":{"name":"Loom & Leaf","price":1299,"reviewRating":4.6,"imageFileName":"loom-carousel.jpg"},"zen":{"name":"Zenhaven","price":1599,"reviewRating":4.7,"imageFileName":"zen-carousel.jpg"}}}')},57:function(e,a,t){e.exports=t(86)},62:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(62),t(10)),s=t(109),o=t(113),m=t(110),d=t(117),u=t(111),g=t(47),f=t(42),b=t.n(f),p=t(43),E=t(121),h=t(119),v=t(112),x=t(118),j=t(120),O=Object(s.a)((function(e){return{manttresMattressName:{fontSize:"1.2rem"},manttresMattressPrice:{fontSize:"1.1rem",opacity:"0.5"}}}));function w(e){var a=O(),t=Object(n.useState)(e.mattress.name),c=Object(i.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)(e.mattress.price),d=Object(i.a)(o,2),g=d[0],f=d[1],b=Object(n.useState)(e.mattress.reviewRating),p=Object(i.a)(b,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){s(e.mattress.name),f(e.mattress.price),h(e.mattress.reviewRating)}),[e]),r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:8,lg:7},r.a.createElement(u.a,{variant:"body1",className:a.manttresMattressName},l)),r.a.createElement(m.a,{item:!0,xs:4,lg:5,style:{textAlign:"right"}},r.a.createElement(u.a,{variant:"body1",className:a.manttresMattressPrice},"$",g)),r.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},r.a.createElement(j.a,{name:"rating",defaultValue:E,precision:.1,size:"large",readOnly:!0})))}function y(e){var a=e.children,t=e.value,n=e.index,c=Object(g.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),t===n&&r.a.createElement(x.a,{p:3},r.a.createElement(u.a,{component:"div"},a)))}function S(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var C=Object(s.a)((function(e){return{stars:{display:"flex",flexDirection:"column","& > * + *":{marginTop:e.spacing(1)}},root:{flexGrow:1,boxShadow:"inset 0 -1px 2px rgba(0,0,0,0.12)",borderRadius:15,background:"linear-gradient(60deg, rgba(0,0,0,0.3), transparent)","@media screen and (prefers-color-scheme: light) ":{color:"#282c34",background:"linear-gradient(60deg, #ffffff, transparent)"}},colorDefault:{borderRadius:"15px 15px 0 0 ",background:"linear-gradient(60deg, #676561, #737271)",color:"#e6b417 !important",overflow:"hidden","&:hover":{color:"#282c34"},"@media screen and (prefers-color-scheme: light) ":{background:"linear-gradient(60deg, #222222, #5e5e5e)",color:"#282c34"}},textColorPrimary:{backgroundColor:"wheat",height:4}}}));function k(e){var a=C(),t=Object(p.a)(),c=r.a.useState(0),l=Object(i.a)(c,2),s=l[0],o=l[1],m=Object(n.useState)(e.mattresses.classic),d=Object(i.a)(m,2),u=d[0],g=d[1],f=Object(n.useState)(e.mattresses.loom),x=Object(i.a)(f,2),j=x[0],O=x[1],k=Object(n.useState)(e.mattresses.zen),M=Object(i.a)(k,2),N=M[0],Z=M[1];Object(n.useEffect)((function(){g(e.mattresses.classic),O(e.mattresses.loom),Z(e.mattresses.zen)}),[e]),Object(n.useEffect)((function(){e.onClick(s)}),[e,s]);return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{position:"static",color:"default",elevation:4,classes:{colorDefault:a.colorDefault}},r.a.createElement(h.a,{value:s,onChange:function(e,a){o(a)},indicatorColor:"primary",variant:"fullWidth","aria-label":"Mattress Type Tabs"},r.a.createElement(v.a,Object.assign({label:" Classic"},S(0))),r.a.createElement(v.a,Object.assign({label:"Loom "},S(1))),r.a.createElement(v.a,Object.assign({label:"Zen"},S(2))))),r.a.createElement(b.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){o(e)}},r.a.createElement(y,{value:s,index:0,dir:t.direction},r.a.createElement(w,{mattress:u})),r.a.createElement(y,{value:s,index:1,dir:t.direction},r.a.createElement(w,{mattress:j})),r.a.createElement(y,{value:s,index:2,dir:t.direction},r.a.createElement(w,{mattress:N}))))}var M=t(45),N=t(114),Z=t(115),z=t(116),L=t(46),R=t.n(L),A=Object(s.a)((function(e){return{grow:{flexGrow:1},sectionDesktop:Object(M.a)({display:"none"},e.breakpoints.up("xs"),{display:"flex"}),colorPrimary:{background:"linear-gradient(60deg, #222, transparent)",padding:10,"@media screen and (prefers-color-scheme: light) ":{background:"linear-gradient(60deg, #ffffff, transparent)",color:"#282c34"}},colorSecondary:{backgroundColor:"#c19579"}}}));function D(e){var a=A(),t=Object(n.useState)(0),c=Object(i.a)(t,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){s(e.cartItems)}),[e]),r.a.createElement(E.a,{position:"static",className:a.grow,elevation:2,classes:{colorPrimary:a.colorPrimary}},r.a.createElement(o.a,{fixed:!0,maxWidth:"xl",disableGutters:!0},r.a.createElement(N.a,null,r.a.createElement("div",{className:"logo"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 38.263"},r.a.createElement("title",null,"logo_saatva_new"),r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("path",{d:"M59.844,37.484H54.926v-4.8a13.15,13.15,0,0,1-10.675,5.576c-8.517,0-15.413-6.956-15.413-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.473,7.137,15.473,16.252ZM44.371,10.5c-5.758,0-10.435,5.1-10.435,11.574s4.677,11.456,10.435,11.456c5.7,0,10.435-5.1,10.435-11.456C54.806,15.653,50.008,10.5,44.371,10.5Z",fill:"#c19678"}),r.a.createElement("path",{d:"M96.3,37.484H91.385v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.474,7.137,15.474,16.252ZM80.83,10.5c-5.757,0-10.435,5.1-10.435,11.574S75.073,33.526,80.83,33.526c5.7,0,10.435-5.1,10.435-11.456C91.265,15.653,86.467,10.5,80.83,10.5Z",fill:"#c19678"}),r.a.createElement("path",{d:"M115.01,37.484c-7.2.84-12.175-3.419-12.175-11.275V0h5.039V6.6h7.016v4.858h-7.016V26.209c0,5.458,3.3,6.837,7.136,6.6Z",fill:"#c19678"}),r.a.createElement("path",{d:"M119.235,6.6h5.4l8.516,24.109h.06L141.726,6.6h5.4L135.908,37.484h-5.457Z",fill:"#c19678"}),r.a.createElement("path",{d:"M180,37.484h-4.919v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.534-16.252C173.283,5.818,180,12.955,180,22.07ZM164.527,10.5c-5.758,0-10.436,5.1-10.436,11.574s4.678,11.456,10.436,11.456c5.7,0,10.435-5.1,10.435-11.456C174.962,15.653,170.164,10.5,164.527,10.5Z",fill:"#c19678"}),r.a.createElement("path",{d:"M0,33.218a19.382,19.382,0,0,0,13,4.937c6.774,0,11.151-3.651,11.151-9.3v-.09c0-4.814-2.806-7.372-10.009-9.124-6-1.421-7.636-2.516-7.636-5.092v-.09c0-2.283,2.17-3.877,5.276-3.877a14.285,14.285,0,0,1,8.545,3.2l2.829-3.987A17.269,17.269,0,0,0,11.867,5.924c-6.273,0-10.655,3.714-10.655,9.03v.09c0,5.707,3.661,7.673,10.416,9.305,5.54,1.278,7.229,2.436,7.229,4.956v.09c0,2.454-2.3,4.1-5.726,4.1-3.613,0-6.69-1.251-9.958-4.052Z",fill:"#c19678"}))))),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(Z.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(z.a,{badgeContent:l,color:"secondary",classes:{colorSecondary:a.colorSecondary}},r.a.createElement(R.a,null)))))))}var P=t(32),W=Object(s.a)((function(e){return{mattressesContaner:{padding:20,"@media screen and (min-width: 600px)":{padding:50}},contained:{marginTop:40,backgroundColor:"rgb(230,180,22)",borderRadius:10,color:"#282c34",textShadow:"none",lineHeight:"1.5 !important",fontSize:"1.05rem !important","&:hover":{backgroundColor:"rgb(255,190,0)",color:"#282c34 !important"}}}}));function F(){var e=W(),a=Object(n.useState)(P.mattresses),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(0),g=Object(i.a)(s,2),f=g[0],b=g[1],p=Object(n.useState)("classic"),E=Object(i.a)(p,2),h=E[0],v=E[1];Object(n.useEffect)((function(){l(P.mattresses),b(0)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{cartItems:f}),r.a.createElement(o.a,{fixed:!0,maxWidth:"xl",className:e.mattressesContaner},r.a.createElement(m.a,{container:!0,spacing:8},r.a.createElement(m.a,{item:!0,xs:12,lg:7},r.a.createElement("img",{src:"./images/"+h+".jpg",alt:"mattress"})),r.a.createElement(m.a,{item:!0,xs:12,lg:5,style:{textAlign:"left"}},r.a.createElement(u.a,{variant:"h3"},"Choose Your Mattress"),r.a.createElement(k,{mattresses:c,onClick:function(e){0===e&&v("classic"),1===e&&v("loom"),2===e&&v("zen")}}),r.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(e){b(f+1)},classes:{contained:e.contained}},"Add to Cart"))))))}t(85);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.063c388b.chunk.js.map