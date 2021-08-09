(this["webpackJsonprick-and-morty-react"]=this["webpackJsonprick-and-morty-react"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(33),s=a.n(r),i=(a(42),a(9)),l=a(24),o=a(35),u=(a(43),a(1));var d=function(){return Object(u.jsxs)("header",{id:"header",className:"tablet:h-20 tablet:px-12 border-b-2 flex flex-col justify-center tablet:flex-row tablet:justify-between align-middle",children:[Object(u.jsx)(i.b,{to:"/","data-testid":"navigate-to-home",className:"w-full border-b-2 tablet:border-b-0 tablet:mx-0",children:Object(u.jsx)("img",{className:"max-h-20 mx-auto tablet:mx-0",src:"".concat("/rick-and-morty","/assets/rick-and-morty-logo.png"),alt:"",width:"350.7",height:"78"})}),Object(u.jsx)("nav",{id:"header-nav",className:"justify-center items-center flex p-2",children:Object(u.jsxs)("ul",{className:"flex items-center tablet:h-5 gap-x-2",children:[Object(u.jsx)("li",{children:Object(u.jsxs)(i.c,{to:"/character","data-testid":"navigate-to-characters",activeClassName:"bg-custom-gradient",className:"text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center",children:[Object(u.jsx)("span",{className:"tablet:hidden laptop:block",children:"Characters"}),Object(u.jsx)(l.b,{className:"hidden tablet:block laptop:hidden",style:{fontSize:"1.4rem"}})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.c,{to:"/location","data-testid":"navigate-to-locations",activeClassName:"bg-custom-gradient",className:"text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center",children:[Object(u.jsx)("span",{className:"tablet:hidden laptop:block",children:"Locations"}),Object(u.jsx)(o.a,{className:"hidden tablet:block laptop:hidden",style:{fontSize:"1.3rem"}})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(i.c,{to:"/episode","data-testid":"navigate-to-episodes",activeClassName:"bg-custom-gradient",className:"text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center",children:[Object(u.jsx)("span",{className:"tablet:hidden laptop:block",children:"Episodes"}),Object(u.jsx)(l.a,{className:"hidden tablet:block laptop:hidden",style:{fontSize:"1.3rem"}})]})})]})})]})},b=a(8),j=a(5),p=a(13),f=a(3),x=a.n(f),m=a(6),h=a(4),O=a(18);a(54);var v=function(e){var t=e.filterTypes,a=e.filters,n=e.setFilters,c=function(e){var t;n(Object(b.a)(Object(b.a)({},a),{},Object(O.a)({},e.target.name,null===(t=e.target)||void 0===t?void 0:t.value)))};return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return function(e,t){return"gender"===e?Object(u.jsxs)("select",{name:"gender",className:"w-full mb-2 py-2 px-5",onChange:t,children:[Object(u.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Gender"}),Object(u.jsx)("option",{value:"",children:"All"}),Object(u.jsx)("option",{value:"female",children:"Female"}),Object(u.jsx)("option",{value:"male",children:"Male"}),Object(u.jsx)("option",{value:"genderless",children:"Genderless"}),Object(u.jsx)("option",{value:"unknown",children:"Unknown"})]},e):"status"===e?Object(u.jsxs)("select",{name:"status",className:"w-full mb-2 py-2 px-5",onChange:t,children:[Object(u.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Status"}),Object(u.jsx)("option",{value:"",children:"All"}),Object(u.jsx)("option",{value:"alive",children:"Alive"}),Object(u.jsx)("option",{value:"dead",children:"Dead"}),Object(u.jsx)("option",{value:"unknown",children:"Unknown"})]},e):Object(u.jsx)("input",{name:e,type:"text",className:"w-full mb-2 py-2 px-5",placeholder:e[0].toUpperCase()+e.slice(1),autoComplete:"off",onChange:t},e)}(e,c)}))})},g=(a(55),a(36));var y=function(e){var t=e.items,a=e.totalDataCount,n=e.fetchMoreData,c=e.pathName;function r(e){var t=Object.entries(e).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return(!["name","image","url","created","type"].includes(a)||"location"===c&&"type"===a)&&"string"===typeof n&&[a,n]})).filter((function(e){return""!==e[1]&&"unknown"!==e[1]})).filter((function(e){return e}));return"episode"===c?t.reverse():t}return Object(u.jsxs)("section",{id:"item-list",className:"h-full w-11/12  tablet:overflow-hidden tablet:flex-1 tablet:flex tablet:flex-col",children:[Object(u.jsxs)("div",{className:"laptop:flex laptop:justify-between laptop:items-end",children:[Object(u.jsxs)("h2",{children:["List of ",c,"s"]}),Object(u.jsxs)("p",{className:"mb-5 text-gray-500",children:[(null===t||void 0===t?void 0:t.length)||0," of ",a||0," items listed."]})]}),t?Object(u.jsx)("div",{id:"scrollableDiv",className:"custom-scrollbar overflow-y-scroll tablet:pr-5 h-full",children:Object(u.jsx)(g.a,{dataLength:t.length,className:"grid grid-cols-1 laptop:grid-cols-2 largeDesktop:grid-cols-3 gap-2",next:n,hasMore:!0,scrollableTarget:"scrollableDiv",children:t.map((function(e){return Object(u.jsx)(i.b,{to:"".concat(c,"/").concat(e.id),className:"card-link",children:Object(u.jsxs)("div",{className:"card-container flex items-end border border-gray-300",children:[Object(u.jsx)("img",{className:"card-bg",src:e.image||"./assets/placeholder.png",alt:""}),Object(u.jsxs)("div",{className:"card-content w-full",children:[Object(u.jsx)("h3",{className:"text-black font-black border-b-4 border-black p-2 text-center tablet:text-left",children:e.name}),Object(u.jsx)("ul",{className:"flex flex-wrap p-2 justify-center tablet:justify-start",children:r(e).map((function(e){return Object(u.jsx)("li",{className:"uppercase text-green-600 font-bold text-xl text-center",children:e[1]},e[0])}))})]})]},e.id)},e.id)}))})}):null]})},N=(a(56),a(37)),w=a.n(N),k=function(e){if(Object.keys(e)<=0)return"";if("id"in e)return"/".concat(e.id);var t=Object.entries(e).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)}));return"/?".concat(t.join("&"))},C=function(){var e=Object(m.a)(x.a.mark((function e(t){var a,n,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://rickandmortyapi.com/api/").concat(t),e.prev=1,e.next=4,w.a.get(a);case 4:if(!("error"in(n=e.sent).data)){e.next=7;break}throw new Error(n.data.error);case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:if(!("results"in(c=n.data))){e.next=15;break}return e.abrupt("return",{totalDataCount:null===(r=c.info)||void 0===r?void 0:r.count,data:c.results});case 15:return e.abrupt("return",{data:c});case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(x.a.mark((function e(){var t,a,n,c,r=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},n=k(a),e.next=5,C(t+n);case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D={character:function(e){return S("character",e)},location:function(e){return S("location",e)},episode:function(e){return S("episode",e)},items:function(){var e=Object(m.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled(t.map((function(e){return C(e.replace("https://rickandmortyapi.com/api/",""))})));case 2:return a=e.sent,n=a.map((function(e){return e.value.data})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var E=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(h.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)({name:"",type:"",species:"",gender:"",status:""}),d=Object(h.a)(o,2),j=d[0],f=d[1],O=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.character(j);case 2:return t=e.sent,c(t.data),l(t.totalDataCount),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.character();case 2:t=e.sent,c(t.data),l(t.totalDataCount);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){c([]),O()}),[j]);var g=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length<i)){e.next=6;break}return t=Object(p.a)(a),e.next=4,D.character(Object(b.a)(Object(b.a)({},j),{},{page:Math.floor(t.length/20)+1}));case 4:"data"in(n=e.sent)&&c([].concat(Object(p.a)(t),Object(p.a)(n.data)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=null;return 0!==(null===a||void 0===a?void 0:a.length)&&(N=i&&0!==i?i<671?"./assets/filtered-list-caps.png":671===i?"./assets/full-list-caps.png":"":"./assets/empty-list-caps.png"),Object(u.jsxs)("main",{"data-testid":"characters-main",className:"bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16",children:[Object(u.jsxs)("aside",{id:"filtersSection",className:"w-11/12 tablet:flex-none tablet:w-3/12 h-full",children:[Object(u.jsx)("h2",{className:"mb-3",children:"Filter"}),Object(u.jsx)(v,{filterTypes:["name","type","species","gender","status"],filters:j,setFilters:f}),Object(u.jsx)("img",{src:N,alt:""})]}),Object(u.jsx)(y,{items:a,totalDataCount:i,fetchMoreData:g,pathName:"character"})]})};a(75);var F=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(h.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)({name:"",type:"",dimension:""}),d=Object(h.a)(o,2),j=d[0],f=d[1],O=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.location(j);case 2:return t=e.sent,c(t.data),l(t.totalDataCount),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.location();case 2:t=e.sent,c(t.data),l(t.totalDataCount);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){c([]),O()}),[j]);var g=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length<i)){e.next=12;break}return t=Object(p.a)(a),e.prev=2,e.next=5,D.location(Object(b.a)(Object(b.a)({},j),{},{page:Math.floor(t.length/20)+1}));case 5:n=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return");case 11:"data"in n&&c([].concat(Object(p.a)(t),Object(p.a)(n.data)));case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),N=null;return 0!==(null===a||void 0===a?void 0:a.length)&&(N=i&&0!==i?i<108?"./assets/filtered-list-caps.png":108===i?"./assets/full-list-caps.png":"":"./assets/empty-list-caps.png"),Object(u.jsxs)("main",{"data-testid":"locations-main",className:"bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16",children:[Object(u.jsxs)("aside",{id:"filtersSection",className:"w-11/12 tablet:flex-none tablet:w-3/12 h-full",children:[Object(u.jsx)("h2",{className:"mb-3",children:"Filter"}),Object(u.jsx)(v,{filterTypes:["name","type","dimension"],filters:j,setFilters:f}),Object(u.jsx)("img",{src:N,alt:""})]}),Object(u.jsx)(y,{items:a,totalDataCount:i,fetchMoreData:g,pathName:"location"})]})};a(76);var M=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(h.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)({name:"",episode:""}),d=Object(h.a)(o,2),j=d[0],f=d[1],O=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.episode(j);case 2:return t=e.sent,c(t.data),l(t.totalDataCount),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.episode();case 2:return t=e.sent,c(t.data),l(t.totalDataCount),e.abrupt("return",(function(){c([]),l(0)}));case 6:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){c([]),O()}),[j]);var g=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length<i)){e.next=6;break}return t=Object(p.a)(a),e.next=4,D.episode(Object(b.a)(Object(b.a)({},j),{},{page:Math.floor(t.length/20)+1}));case 4:"data"in(n=e.sent)&&c([].concat(Object(p.a)(t),Object(p.a)(n.data)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=null;return 0!==(null===a||void 0===a?void 0:a.length)&&(N=i&&0!==i?i<41?"./assets/filtered-list-caps.png":41===i?"./assets/full-list-caps.png":"":"./assets/empty-list-caps.png"),Object(u.jsxs)("main",{"data-testid":"episodes-main",className:"bg-gray-100 flex flex-col items-center tablet:items-start tablet:flex-row p-6 tablet:px-20 gap-16",children:[Object(u.jsxs)("aside",{id:"filtersSection",className:"w-11/12 tablet:flex-none tablet:w-3/12 h-full",children:[Object(u.jsx)("h2",{className:"mb-3",children:"Filter"}),Object(u.jsx)(v,{filterTypes:["name","episode"],filters:j,setFilters:f}),Object(u.jsx)("img",{src:N,alt:""})]}),Object(u.jsx)(y,{items:a,totalDataCount:i,fetchMoreData:g,pathName:"episode"})]})};a(77);var T=function(){return Object(u.jsx)("main",{id:"not-found-main",className:"flex justify-center items-center",children:Object(u.jsxs)("div",{className:"flex flex-col items-center",children:[Object(u.jsx)("h2",{className:"mb-10",children:"404"}),Object(u.jsxs)("p",{className:"text-center text-2xl",children:["You are lost in the world of Rick and Morty!",Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",onClick:function(){return window.history.back()},"data-testid":"return-previos-page",children:"Return to the familiar place."})]})]})})};a(78);var I=function(e){var t=e.arrayInfo,a=Object(n.useState)([]),c=Object(h.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[1].sort((function(e,t){return e-t})).reverse().slice(0,5),e.next=3,D.items(a);case 3:n=e.sent,s(n);case 5:case"end":return e.stop()}}),e)}))),[]),Object(u.jsxs)("div",{id:"episode-list",className:"px-5 w-full",children:[Object(u.jsx)("h2",{className:"mt-5 text-center",children:"Last Episodes"}),Object(u.jsx)("ul",{className:"uppercase items-center w-full py-4 flex flex-col flex-wrap",children:r.map((function(e){return Object(u.jsx)("li",{className:"flex text-center",children:Object(u.jsx)(i.b,{to:"/episode/".concat(e.id),className:"episode-link",children:Object(u.jsxs)("span",{className:"text-2xl",children:[Object(u.jsxs)("span",{className:"text-2xl font-bold text-gray-500 m-0 mr-2",children:["ep",e.id]}),e.name]})})},e.id)}))})]})};a(79);var L=function(e){var t=e.arrayInfo,a=Object(n.useState)([]),c=Object(h.a)(a,2),r=c[0],s=c[1];Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[1],e.next=3,D.items(a);case 3:n=e.sent,s(n);case 5:case"end":return e.stop()}}),e)}))),[]);var l=t[0][0].toUpperCase()+t[0].slice(1);return Object(u.jsxs)("div",{id:"character-list",className:"px-10",children:[Object(u.jsx)("h2",{className:"mt-5 text-center",children:l}),Object(u.jsx)("ul",{className:"uppercase items-center justify-center w-full py-4 flex flex-wrap flex-1",children:r.map((function(e){return Object(u.jsx)("li",{className:"flex flex-col items-center text-center p-1",children:Object(u.jsx)(i.b,{to:"/character/".concat(e.id),className:"character-link",children:Object(u.jsx)("img",{src:e.image,alt:"",className:"rounded-full w-16"})})},e.id)}))})]})};var z=function(e){var t=e.item,a=e.pathName,n=Object.entries(t).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return!["name","image","url","created"].includes(a)&&"string"===typeof n&&[a,n]})).filter((function(e){return!!e})),c=Object.entries(t).filter((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return["episode","residents","characters"].includes(a)&&n})).filter((function(e){return!!e})).slice(-1)[0],r=a;return!!c&&Object(u.jsxs)("div",{id:"detail-content",className:"flex flex-col",children:[Object(u.jsx)("ul",{id:"info-list",className:"capitalize flex flex-col border-b-2 py-4",children:n.map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("li",{className:"flex",children:[Object(u.jsxs)("h4",{children:[a.split("_"),":"]}),Object(u.jsx)("span",{className:"text-2xl font-bold",children:n||"Unknown"})]},a)}))}),"character"===r?Object(u.jsx)(I,{arrayInfo:c}):Object(u.jsx)(L,{arrayInfo:c})]})};a(80);var U=function(e){var t=e.image,a=e.name;return Object(u.jsxs)("section",{id:"detail-header",className:"border-b-2 pb-10 px-20",children:[Object(u.jsx)("img",{src:t,alt:"",className:"mb-5"}),Object(u.jsx)("h2",{children:a})]})};var A=function(e){var t=e.pathName,a=Object(j.g)().id,c=Object(n.useState)({}),r=Object(h.a)(c,2),s=r[0],i=r[1],l=t||/\/[a-zA-Z-]+\/(\w+)\/*.*/.exec(window.location.pathname)[1];Object(n.useEffect)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D[l]({id:a});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);var o="";return 0!==Object.keys(s).length&&(o=s.image?s.image:"../assets/placeholder.png"),!!s&&Object(u.jsxs)("main",{id:"detail-main",className:"py-10 desktop:py-0",children:[Object(u.jsx)(U,{image:o,name:s.name}),Object(u.jsx)(z,{item:s,pathName:t})]})};var P=function(){return Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(j.a,{exact:!0,from:"/",to:"/character"})}),Object(u.jsx)(j.b,{exact:!0,path:"/character/:id",render:function(e){return Object(u.jsx)(A,Object(b.a)({pathName:"character"},e),e.location.key)}}),Object(u.jsx)(j.b,{exact:!0,path:"/character",component:E}),Object(u.jsx)(j.b,{exact:!0,path:"/location/:id",render:function(e){return Object(u.jsx)(A,Object(b.a)({pathName:"location"},e),e.location.key)}}),Object(u.jsx)(j.b,{exact:!0,path:"/location",component:F}),Object(u.jsx)(j.b,{exact:!0,path:"/episode/:id",render:function(e){return Object(u.jsx)(A,Object(b.a)({pathName:"episode"},e),e.location.key)}}),Object(u.jsx)(j.b,{exact:!0,path:"/episode",component:M}),Object(u.jsx)(j.b,{exact:!0,path:"/404",component:T}),Object(u.jsx)(j.a,{from:"*",to:"/404"})]})};a(81);var B=function(){return Object(u.jsxs)(i.a,{basename:"/rick-and-morty",children:[Object(u.jsx)(d,{}),Object(u.jsx)(P,{})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),G()}},[[82,1,2]]]);
//# sourceMappingURL=main.22653f72.chunk.js.map