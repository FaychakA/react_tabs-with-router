(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),i=a.n(c),s=a(6),r=a(1),m=(a(21),a(22),function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"head-home"},"Home Page"))}),o=(a(23),function(e){var t=e.tabs,a=e.currentId,n=t.find((function(e){return e.id===a}));return l.a.createElement("div",null,l.a.createElement("h1",{className:"head-tab"},"Tab ".concat(a)),l.a.createElement("ul",{className:"tab-list"},t.map((function(e){return l.a.createElement("li",{key:e.id,className:"tab-list__item"},l.a.createElement(s.b,{to:"/tabs/".concat(e.id),className:"tab-list__link",activeClassName:"tab-list__link--active"},e.title))}))),l.a.createElement("div",null,n&&l.a.createElement("div",null,l.a.createElement("p",{className:"text"},n.title),l.a.createElement("p",{className:"text"},n.content))))}),u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"head"},"Tabs with router"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"list__item"},l.a.createElement(s.b,{to:"/",className:"list__link",activeClassName:"list__link--active"},"Home Page")),l.a.createElement("li",{className:"list__item"},l.a.createElement(s.b,{to:"/tabs",className:"list__link",activeClassName:"list__link--active"},"Tabs"))),l.a.createElement(r.a,{path:"/",exact:!0,component:m}),l.a.createElement(r.a,{path:"/tabs/:id?",render:function(e){var t=e.match;return l.a.createElement(o,{tabs:u,currentId:t.params.id})}}))};i.a.render(l.a.createElement(s.a,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5e376174.chunk.js.map