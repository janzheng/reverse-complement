var Ee=Object.defineProperty,xe=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var me=(i,e,r)=>e in i?Ee(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,J=(i,e)=>{for(var r in e||(e={}))Ae.call(e,r)&&me(i,r,e[r]);if(de)for(var r of de(e))ye.call(e,r)&&me(i,r,e[r]);return i},te=(i,e)=>xe(i,Ie(e));import{S as Z,i as B,s as P,D as De,j as A,k as H,l as y,f as x,d as c,v as W,w as Y,E as Se,x as Q,F as u,p as O,n as R,A as X,e as d,c as m,b as n,G as N,H as pe,I as Ve,t as q,a as v,g as F,J as re,K as z,L as Le,M as Ne,N as Te,O as Ue,P as Ge}from"../chunks/vendor-a16e5ec3.js";let h={baseUrl:{}.VITE_BASE_URL,title:"Sveltekit Starter",description:"This is a starter",url:"https://www.example.com/articles/article-title",canonical:"https://www.example.com",pageName:"",color:"#5432CA",twitter:"@yawnxyz",author:"Jan Zheng",ico:"/pd_icon.png",image:{url:"/pd_share.jpg",width:850,height:650,alt:"Alt text for the card!"},meta:[{hid:"google-site-verification",name:"google-site-verification",content:"FV3L35TjM9haadbuZvHLDz2n-I1KUbN_gYqM3cIH0Wk"}]};h=te(J({},h),{links:[{rel:"icon",type:"image/png",href:h.ico},{rel:"apple-touch-icon",href:h.ico},{rel:"mask-icon",href:h.ico,color:h.color}]});const _e={openGraph:{title:h.title,description:h.description,type:"website",url:h.url,images:[h.image]},twitter:{site:h.twitter,title:h.title,description:h.description,image:h.image.url,imageAlt:h.image.alt}};function ve(i,e,r){const t=i.slice();return t[4]=e[r],t}function ge(i,e,r){const t=i.slice();return t[7]=e[r],t}function He(i){let e,r,t=h.meta&&Me(i),s=h.links&&je(i);return{c(){t&&t.c(),e=A(),s&&s.c(),r=H()},l(a){t&&t.l(a),e=y(a),s&&s.l(a),r=H()},m(a,l){t&&t.m(a,l),x(a,e,l),s&&s.m(a,l),x(a,r,l)},p(a,l){h.meta&&t.p(a,l),h.links&&s.p(a,l)},d(a){t&&t.d(a),a&&c(e),s&&s.d(a),a&&c(r)}}}function Me(i){let e,r=h.meta,t=[];for(let s=0;s<r.length;s+=1)t[s]=$e(ge(i,r,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=H()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=H()},m(s,a){for(let l=0;l<t.length;l+=1)t[l].m(s,a);x(s,e,a)},p(s,a){if(a&0){r=h.meta;let l;for(l=0;l<r.length;l+=1){const f=ge(s,r,l);t[l]?t[l].p(f,a):(t[l]=$e(f),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},d(s){pe(t,s),s&&c(e)}}}function $e(i){let e;return{c(){e=d("meta"),this.h()},l(r){e=m(r,"META",{charset:!0,"data-hid":!0,name:!0,content:!0,property:!0}),this.h()},h(){n(e,"charset",i[7].charset),n(e,"data-hid",i[7].hid),n(e,"name",i[7].name),n(e,"content",i[7].content),n(e,"property",i[7].property)},m(r,t){x(r,e,t)},p:N,d(r){r&&c(e)}}}function je(i){let e,r=h.links,t=[];for(let s=0;s<r.length;s+=1)t[s]=be(ve(i,r,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=H()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=H()},m(s,a){for(let l=0;l<t.length;l+=1)t[l].m(s,a);x(s,e,a)},p(s,a){if(a&0){r=h.links;let l;for(l=0;l<r.length;l+=1){const f=ve(s,r,l);t[l]?t[l].p(f,a):(t[l]=be(f),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},d(s){pe(t,s),s&&c(e)}}}function be(i){let e;return{c(){e=d("link"),this.h()},l(r){e=m(r,"LINK",{"data-hid":!0,rel:!0,href:!0,crossorigin:!0}),this.h()},h(){n(e,"data-hid",i[4].hid),n(e,"rel",i[4].rel),n(e,"href",i[4].href),n(e,"crossorigin",i[4].crossorigin?"crossorigin":"")},m(r,t){x(r,e,t)},p:N,d(r){r&&c(e)}}}function Ce(i){let e,r,t,s;e=new De({props:{title:i[0]?`${h.title} | ${i[0]}`:h.title,description:i[1]||h.description,keywords:h.keywords,canonical:h.canonical+"",openGraph:te(J({},_e.openGraph),{url:i[2]||h.url+""}),twitter:i[3]?J(J({},_e.twitter),i[3]):null}});let a=h&&He(i);return{c(){W(e.$$.fragment),r=A(),a&&a.c(),t=H()},l(l){Y(e.$$.fragment,l),r=y(l);const f=Se('[data-svelte="svelte-huzock"]',document.head);a&&a.l(f),t=H(),f.forEach(c)},m(l,f){Q(e,l,f),x(l,r,f),a&&a.m(document.head,null),u(document.head,t),s=!0},p(l,[f]){h&&a.p(l,f)},i(l){s||(O(e.$$.fragment,l),s=!0)},o(l){R(e.$$.fragment,l),s=!1},d(l){X(e,l),l&&c(r),a&&a.d(l),c(t)}}}function Ke(i,e,r){return["","","",{}]}class Oe extends Z{constructor(e){super();B(this,e,Ke,Ce,P,{title:0,description:1,ogUrl:2,twitter:3})}get title(){return this.$$.ctx[0]}get description(){return this.$$.ctx[1]}get ogUrl(){return this.$$.ctx[2]}get twitter(){return this.$$.ctx[3]}}const Re=()=>{const i=Ve("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session}},qe={subscribe(i){return Re().page.subscribe(i)}};var we="/_app/assets/svelte-logo-87df40b8.svg";function Fe(i){let e,r,t,s,a,l,f,p,$,_,o,g,D,w,S,M,k,I,T,j,V,L,U,C,G;return{c(){e=d("header"),r=d("div"),t=d("a"),s=d("img"),l=A(),f=d("nav"),p=d("ul"),$=d("li"),_=d("a"),o=q("Home"),g=A(),D=d("li"),w=d("a"),S=q("About"),M=A(),k=d("li"),I=d("a"),T=q("Todos"),j=A(),V=d("ul"),L=d("a"),U=q("Right side item"),C=A(),G=d("div"),this.h()},l(E){e=m(E,"HEADER",{class:!0});var b=v(e);r=m(b,"DIV",{class:!0});var se=v(r);t=m(se,"A",{class:!0,href:!0});var le=v(t);s=m(le,"IMG",{src:!0,alt:!0}),le.forEach(c),se.forEach(c),l=y(b),f=m(b,"NAV",{class:!0});var ee=v(f);p=m(ee,"UL",{class:!0});var K=v(p);$=m(K,"LI",{});var ae=v($);_=m(ae,"A",{"sveltekit:prefetch":!0,href:!0});var ie=v(_);o=F(ie,"Home"),ie.forEach(c),ae.forEach(c),g=y(K),D=m(K,"LI",{});var oe=v(D);w=m(oe,"A",{"sveltekit:prefetch":!0,href:!0});var ne=v(w);S=F(ne,"About"),ne.forEach(c),oe.forEach(c),M=y(K),k=m(K,"LI",{});var ce=v(k);I=m(ce,"A",{"sveltekit:prefetch":!0,href:!0});var fe=v(I);T=F(fe,"Todos"),fe.forEach(c),ce.forEach(c),K.forEach(c),j=y(ee),V=m(ee,"UL",{class:!0});var ue=v(V);L=m(ue,"A",{href:!0});var he=v(L);U=F(he,"Right side item"),he.forEach(c),ue.forEach(c),ee.forEach(c),C=y(b),G=m(b,"DIV",{class:!0});var ke=v(G);ke.forEach(c),b.forEach(c),this.h()},h(){re(s.src,a=i[0])||n(s,"src",a),n(s,"alt","SvelteKit"),n(t,"class","decoration-transparent hover:fill-_hover"),n(t,"href","/"),n(r,"class","p-8 pr-8 md:mr-8 border-r border-r-white border-r-half"),n(_,"sveltekit:prefetch",""),n(_,"href","/"),z($,"active",i[2].url.pathname==="/"),n(w,"sveltekit:prefetch",""),n(w,"href","/about"),z(D,"active",i[2].url.pathname==="/about"),n(I,"sveltekit:prefetch",""),n(I,"href","/todos"),z(k,"active",i[2].url.pathname==="/todos"),n(p,"class","menu-items-left text-lg md:space-x-4 md:flex flex-row place-content-end pr-8 list-none"),n(L,"href","/"),n(V,"class","menu-items-right text-lg md:space-x-4 md:flex flex-row items-baseline place-content-end mt-8 md:mt-0"),n(f,"class","menu-items relative md:flex items-center flex-wrap md:gap-4 justify-between w-full px-8 md:pl-0 md:pr-8"),n(G,"class","corner"),n(e,"class","menu-desktop hidden sm:block sm:visible sm:relative max-w-7xl mx-auto max-w-7xl md:flex items-center leading-6")},m(E,b){x(E,e,b),u(e,r),u(r,t),u(t,s),u(e,l),u(e,f),u(f,p),u(p,$),u($,_),u(_,o),u(p,g),u(p,D),u(D,w),u(w,S),u(p,M),u(p,k),u(k,I),u(I,T),u(f,j),u(f,V),u(V,L),u(L,U),u(e,C),u(e,G)},p(E,[b]){b&1&&!re(s.src,a=E[0])&&n(s,"src",a),b&4&&z($,"active",E[2].url.pathname==="/"),b&4&&z(D,"active",E[2].url.pathname==="/about"),b&4&&z(k,"active",E[2].url.pathname==="/todos")},i:N,o:N,d(E){E&&c(e)}}}function ze(i,e,r){let t,s=N,a=()=>(s(),s=Le(f,p=>r(2,t=p)),f);i.$$.on_destroy.push(()=>s());let{logo:l,page:f}=e;return a(),i.$$set=p=>{"logo"in p&&r(0,l=p.logo),"page"in p&&a(r(1,f=p.page))},[l,f,t]}class Je extends Z{constructor(e){super();B(this,e,ze,Fe,P,{logo:0,page:1})}}function Ze(i){let e,r;return e=new Je({props:{logo:we,page:qe}}),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){Q(e,t,s),r=!0},p:N,i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}class Be extends Z{constructor(e){super();B(this,e,null,Ze,P,{})}}function Pe(i){let e,r,t,s,a,l,f,p,$,_,o,g,D,w,S,M;return{c(){e=d("footer"),r=d("div"),t=d("div"),s=d("div"),a=d("a"),l=d("img"),p=A(),$=d("div"),_=d("section"),o=d("div"),g=q("Explore"),D=A(),w=d("section"),S=d("div"),M=q("Get involved"),this.h()},l(k){e=m(k,"FOOTER",{class:!0});var I=v(e);r=m(I,"DIV",{class:!0});var T=v(r);t=m(T,"DIV",{class:!0});var j=v(t);s=m(j,"DIV",{class:!0});var V=v(s);a=m(V,"A",{class:!0,href:!0});var L=v(a);l=m(L,"IMG",{src:!0,alt:!0}),L.forEach(c),V.forEach(c),j.forEach(c),p=y(T),$=m(T,"DIV",{class:!0});var U=v($);_=m(U,"SECTION",{class:!0});var C=v(_);o=m(C,"DIV",{class:!0});var G=v(o);g=F(G,"Explore"),G.forEach(c),C.forEach(c),D=y(U),w=m(U,"SECTION",{class:!0});var E=v(w);S=m(E,"DIV",{class:!0});var b=v(S);M=F(b,"Get involved"),b.forEach(c),E.forEach(c),U.forEach(c),T.forEach(c),I.forEach(c),this.h()},h(){re(l.src,f=we)||n(l,"src",f),n(l,"alt","SvelteKit"),n(a,"class","decoration-transparent hover:fill-_hover"),n(a,"href","/"),n(s,"class","p-8 pr-8 md:mr-8 border-r border-r-white border-r-half"),n(t,"class","footer-title py-8 grow"),n(o,"class","footer-links-section-header "),n(_,"class","footer-links-section grow"),n(S,"class","footer-links-section-header "),n(w,"class","footer-links-section grow"),n($,"class","footer-links relative md:flex items-start flex-wrap gap-16 w-full "),n(r,"class","relative max-w-7xl mx-auto pb-16 md:flex-row md:flex items-center gap-8 text-white w-full h-full"),n(e,"class","footer ")},m(k,I){x(k,e,I),u(e,r),u(r,t),u(t,s),u(s,a),u(a,l),u(r,p),u(r,$),u($,_),u(_,o),u(o,g),u($,D),u($,w),u(w,S),u(S,M)},p:N,i:N,o:N,d(k){k&&c(e)}}}class We extends Z{constructor(e){super();B(this,e,null,Pe,P,{})}}function Ye(i){let e,r,t,s,a,l,f,p;e=new Oe({}),t=new Be({});const $=i[1].default,_=Ne($,i,i[0],null);return f=new We({}),{c(){W(e.$$.fragment),r=A(),W(t.$$.fragment),s=A(),a=d("main"),_&&_.c(),l=A(),W(f.$$.fragment),this.h()},l(o){Y(e.$$.fragment,o),r=y(o),Y(t.$$.fragment,o),s=y(o),a=m(o,"MAIN",{class:!0});var g=v(a);_&&_.l(g),g.forEach(c),l=y(o),Y(f.$$.fragment,o),this.h()},h(){n(a,"class","svelte-1l5lemn")},m(o,g){Q(e,o,g),x(o,r,g),Q(t,o,g),x(o,s,g),x(o,a,g),_&&_.m(a,null),x(o,l,g),Q(f,o,g),p=!0},p(o,[g]){_&&_.p&&(!p||g&1)&&Te(_,$,o,o[0],p?Ge($,o[0],g,null):Ue(o[0]),null)},i(o){p||(O(e.$$.fragment,o),O(t.$$.fragment,o),O(_,o),O(f.$$.fragment,o),p=!0)},o(o){R(e.$$.fragment,o),R(t.$$.fragment,o),R(_,o),R(f.$$.fragment,o),p=!1},d(o){X(e,o),o&&c(r),X(t,o),o&&c(s),o&&c(a),_&&_.d(o),o&&c(l),X(f,o)}}}function Qe(i,e,r){let{$$slots:t={},$$scope:s}=e;return i.$$set=a=>{"$$scope"in a&&r(0,s=a.$$scope)},[s,t]}class tt extends Z{constructor(e){super();B(this,e,Qe,Ye,P,{})}}export{tt as default};
