(this.webpackJsonpsaatva=this.webpackJsonpsaatva||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"mattresses":{"classic":{"name":"Saatva Classic","price":999,"reviewRating":4.8,"imageFileName":"classic-carousel.jpg"},"loom":{"name":"Loom & Leaf","price":1299,"reviewRating":4.6,"imageFileName":"loom-carousel.jpg"},"zen":{"name":"Zenhaven","price":1599,"reviewRating":4.7,"imageFileName":"zen-carousel.jpg"}}}')},57:function(e,a,t){e.exports=t(85)},62:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),o=t.n(c),l=(t(62),t(10)),i=t(108),s=t(112),m=t(109),d=t(116),u=t(110),g=t(47),b=t(42),v=t.n(b),f=t(43),p=t(120),E=t(118),h=t(111),x=t(117),j=t(119),w=Object(i.a)((function(e){return{manttresMattressName:{fontSize:"1.4rem"},manttresMattressPrice:{fontSize:"1.25rem",opacity:"0.5"}}}));function O(e){var a=w(),t=Object(r.useState)(e.mattress.name),c=Object(l.a)(t,2),o=c[0],i=c[1],s=Object(r.useState)(e.mattress.price),d=Object(l.a)(s,2),g=d[0],b=d[1],v=Object(r.useState)(e.mattress.reviewRating),f=Object(l.a)(v,2),p=f[0],E=f[1];return Object(r.useEffect)((function(){i(e.mattress.name),b(e.mattress.price),E(e.mattress.reviewRating)}),[e]),n.a.createElement(m.a,{container:!0,spacing:2},n.a.createElement(m.a,{item:!0,xs:8,lg:7},n.a.createElement(u.a,{variant:"body1",className:a.manttresMattressName},o)),n.a.createElement(m.a,{item:!0,xs:4,lg:5,style:{textAlign:"right"}},n.a.createElement(u.a,{variant:"body1",className:a.manttresMattressPrice},"$",g)),n.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},n.a.createElement(j.a,{name:"rating",defaultValue:p,precision:.1,size:"large",readOnly:!0})))}function k(e){var a=e.children,t=e.value,r=e.index,c=Object(g.a)(e,["children","value","index"]);return n.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},c),t===r&&n.a.createElement(x.a,{p:3},n.a.createElement(u.a,{component:"div"},a)))}function y(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var S=Object(i.a)((function(e){return{stars:{display:"flex",flexDirection:"column","& > * + *":{marginTop:e.spacing(1)}},root:{flexGrow:1,boxShadow:"inset 0 -1px 2px rgba(0,0,0,0.12)",borderRadius:15,color:"var(--dark-main-color)",background:"linear-gradient(60deg, #ffffff, transparent)","@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, rgba(0,0,0,0.3), transparent)",color:"var(--main-color)"}},colorDefault:{borderRadius:"15px 15px 0 0 ",background:"linear-gradient(60deg, var(--dark-main-color), var(--dark-main-color-washed))",color:"#e6b417 !important",overflow:"hidden","&:hover":{color:"var(--dark-main-color)"},"@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, var(--dark-secondary-color), var(--dark-warning-color))"}},textColorPrimary:{backgroundColor:"var(--third-color)",height:4}}}));function C(e){var a=S(),t=Object(f.a)(),c=n.a.useState(0),o=Object(l.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)(e.mattresses.classic),d=Object(l.a)(m,2),u=d[0],g=d[1],b=Object(r.useState)(e.mattresses.loom),x=Object(l.a)(b,2),j=x[0],w=x[1],C=Object(r.useState)(e.mattresses.zen),M=Object(l.a)(C,2),N=M[0],Z=M[1];Object(r.useEffect)((function(){g(e.mattresses.classic),w(e.mattresses.loom),Z(e.mattresses.zen)}),[e]),Object(r.useEffect)((function(){e.onClick(i)}),[e,i]);return n.a.createElement("div",{className:a.root},n.a.createElement(p.a,{position:"static",color:"default",elevation:4,classes:{colorDefault:a.colorDefault}},n.a.createElement(E.a,{value:i,onChange:function(e,a){s(a)},indicatorColor:"primary",variant:"fullWidth","aria-label":"Mattress Type Tabs"},n.a.createElement(h.a,Object.assign({label:" Classic"},y(0))),n.a.createElement(h.a,Object.assign({label:"Loom "},y(1))),n.a.createElement(h.a,Object.assign({label:"Zen"},y(2))))),n.a.createElement(v.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){s(e)}},n.a.createElement(k,{value:i,index:0,dir:t.direction},n.a.createElement(O,{mattress:u})),n.a.createElement(k,{value:i,index:1,dir:t.direction},n.a.createElement(O,{mattress:j})),n.a.createElement(k,{value:i,index:2,dir:t.direction},n.a.createElement(O,{mattress:N}))))}var M=t(45),N=t(113),Z=t(114),z=t(115),L=t(46),R=t.n(L),A=Object(i.a)((function(e){return{grow:{flexGrow:1},sectionDesktop:Object(M.a)({display:"none"},e.breakpoints.up("xs"),{display:"flex"}),colorPrimary:{background:"linear-gradient(60deg,white,var(--main-color))",color:"var(--dark-main-color)",padding:10,"@media screen and (prefers-color-scheme: dark) ":{background:"linear-gradient(60deg, var(--dark-main-color), #023475)",color:"var(--dark-warning-color)"}},colorSecondary:{backgroundColor:"var(--third-color)","@media screen and (prefers-color-scheme: dark) ":{background:"var(--warning-color)",color:"var(--dark-secondary-color)"}}}}));function D(e){var a=A(),t=Object(r.useState)(0),c=Object(l.a)(t,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){i(e.cartItems)}),[e]),n.a.createElement(p.a,{position:"static",className:a.grow,elevation:2,classes:{colorPrimary:a.colorPrimary}},n.a.createElement(s.a,{fixed:!0,maxWidth:"xl",disableGutters:!0},n.a.createElement(N.a,null,n.a.createElement("div",{className:"logo"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 180 38.263"},n.a.createElement("title",null,"logo_saatva_new"),n.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},n.a.createElement("path",{d:"M59.844,37.484H54.926v-4.8a13.15,13.15,0,0,1-10.675,5.576c-8.517,0-15.413-6.956-15.413-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.473,7.137,15.473,16.252ZM44.371,10.5c-5.758,0-10.435,5.1-10.435,11.574s4.677,11.456,10.435,11.456c5.7,0,10.435-5.1,10.435-11.456C54.806,15.653,50.008,10.5,44.371,10.5Z",fill:"#c19678"}),n.a.createElement("path",{d:"M96.3,37.484H91.385v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.474,7.137,15.474,16.252ZM80.83,10.5c-5.757,0-10.435,5.1-10.435,11.574S75.073,33.526,80.83,33.526c5.7,0,10.435-5.1,10.435-11.456C91.265,15.653,86.467,10.5,80.83,10.5Z",fill:"#c19678"}),n.a.createElement("path",{d:"M115.01,37.484c-7.2.84-12.175-3.419-12.175-11.275V0h5.039V6.6h7.016v4.858h-7.016V26.209c0,5.458,3.3,6.837,7.136,6.6Z",fill:"#c19678"}),n.a.createElement("path",{d:"M119.235,6.6h5.4l8.516,24.109h.06L141.726,6.6h5.4L135.908,37.484h-5.457Z",fill:"#c19678"}),n.a.createElement("path",{d:"M180,37.484h-4.919v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.534-16.252C173.283,5.818,180,12.955,180,22.07ZM164.527,10.5c-5.758,0-10.436,5.1-10.436,11.574s4.678,11.456,10.436,11.456c5.7,0,10.435-5.1,10.435-11.456C174.962,15.653,170.164,10.5,164.527,10.5Z",fill:"#c19678"}),n.a.createElement("path",{d:"M0,33.218a19.382,19.382,0,0,0,13,4.937c6.774,0,11.151-3.651,11.151-9.3v-.09c0-4.814-2.806-7.372-10.009-9.124-6-1.421-7.636-2.516-7.636-5.092v-.09c0-2.283,2.17-3.877,5.276-3.877a14.285,14.285,0,0,1,8.545,3.2l2.829-3.987A17.269,17.269,0,0,0,11.867,5.924c-6.273,0-10.655,3.714-10.655,9.03v.09c0,5.707,3.661,7.673,10.416,9.305,5.54,1.278,7.229,2.436,7.229,4.956v.09c0,2.454-2.3,4.1-5.726,4.1-3.613,0-6.69-1.251-9.958-4.052Z",fill:"#c19678"}))))),n.a.createElement("div",{className:a.grow}),n.a.createElement("div",{className:a.sectionDesktop},n.a.createElement(Z.a,{"aria-label":"show 4 new mails",color:"inherit"},n.a.createElement(z.a,{badgeContent:o,color:"secondary",classes:{colorSecondary:a.colorSecondary}},n.a.createElement(R.a,null)))))))}var P=t(32),W=Object(i.a)((function(e){return{mattressesContaner:{padding:20,"@media screen and (min-width: 600px)":{padding:50}},contained:{marginTop:40,backgroundColor:"var(--warning-color)",borderRadius:10,color:"#282c34",textShadow:"none",lineHeight:"1.5 !important",fontSize:"1.05rem !important","&:hover":{backgroundColor:"rgb(255,190,0)",color:"#282c34 !important"}}}}));function F(){var e=W(),a=Object(r.useState)(P.mattresses),t=Object(l.a)(a,2),c=t[0],o=t[1],i=Object(r.useState)(0),g=Object(l.a)(i,2),b=g[0],v=g[1],f=Object(r.useState)("classic"),p=Object(l.a)(f,2),E=p[0],h=p[1];Object(r.useEffect)((function(){o(P.mattresses),v(0)}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{cartItems:b}),n.a.createElement(s.a,{fixed:!0,maxWidth:"xl",className:e.mattressesContaner},n.a.createElement(m.a,{container:!0,spacing:8},n.a.createElement(m.a,{item:!0,xs:12,lg:7},n.a.createElement("img",{src:"./images/"+E+".jpg",alt:"mattress"})),n.a.createElement(m.a,{item:!0,xs:12,lg:5,style:{textAlign:"left"}},n.a.createElement(u.a,{variant:"h3"},"Choose Your Mattress"),n.a.createElement(C,{mattresses:c,onClick:function(e){0===e&&h("classic"),1===e&&h("loom"),2===e&&h("zen")}}),n.a.createElement(m.a,{item:!0,xs:12,lg:12,style:{textAlign:"right"}},n.a.createElement(d.a,{id:"add-to-cart",value:"add",variant:"contained",color:"primary",onClick:function(e){v(b+1)},classes:{contained:e.contained}},"Add to Cart"))))))}var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.ba46812c.chunk.js.map