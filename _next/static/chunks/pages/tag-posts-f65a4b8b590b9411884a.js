(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{8282:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(9008),i=a(5660),l=a.n(i),o=(a(2356),a(366),a(767),a(551)),s=n.createElement,c=function(){return s("footer",{className:"footer"},s("div",null,"Copyright \xa9 ",(new Date).getFullYear()," zainsci"),s("div",null,"Built with Next.js by"," ",s("a",{href:"https://zainsci.github.io",target:"_blank",rel:"noopener noreferrer"},"zainsci")),s("div",null,s(o.Z,null)))},m=a(1664),g=n.createElement,u=function(){var e;e=window.localStorage.getItem("theme");var t=(0,n.useState)(e),a=t[0],r=t[1],i=g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",className:"feather feather-moon"},g("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})),l=g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-sun"},g("circle",{cx:"12",cy:"12",r:"5"}),g("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),g("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),g("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),g("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),g("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),g("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),g("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),g("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}));return g("div",{className:"toggler"},g("a",{onClick:function(){"light"===a?(document.body.className="dark",localStorage.setItem("theme","dark"),r("dark")):(document.body.className="light",localStorage.setItem("theme","light"),r("light"))}},"light"===a?i:l))},h=n.createElement,d=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return h("header",{className:"header"},h("div",null,h("h3",{className:"logo"},"zainsci-blog"),h("div",{className:"nav__toggler",onClick:function(){return a(!t)}},h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-menu"},h("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),h("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),h("line",{x1:"3",y1:"18",x2:"21",y2:"18"})))),h("nav",{className:"nav"},h("ul",{className:"nav__list"+(t?" nav__open":"")},h("li",{className:"nav__item"},h(m.default,{href:"/"},h("a",{className:"nav__link"},"Home"))),h("li",{className:"nav__item"},h("a",{href:"https://zainsci.github.io",className:"nav__link",target:"_blank",rel:"noopener noreferrer"},"Portfolio")),h("li",{className:"nav__item"},h(m.default,{href:"/about"},h("a",{className:"nav__link"},"About"))),h("li",{className:"nav__item"},h(m.default,{href:"/contact"},h("a",{className:"nav__link"},"Contact"))),h("li",{className:"nav__item"},h(u,null)))))},f=n.createElement,p=function(e){var t=e.title,a=e.children;return"undefined"!==typeof document&&(document.documentElement.lang="en-us"),(0,n.useEffect)((function(){var e=localStorage.getItem("theme");e?document.body.className=e:(window.localStorage.setItem("theme","light"),document.body.className="light"),l().highlightAll()}),[]),f(n.Fragment,null,f(r.default,null,f("link",{rel:"preload",href:"fonts.googleapis.com"}),f("title",null,t," - zainsci-blog"),f("meta",{charset:"UTF-8"}),f("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),f("meta",{name:"description",content:"A place for me, zainsci, to share what I learn about computers and programming."}),f("meta",{property:"og:title",content:"zainsci-blog"}),f("meta",{property:"og:description",content:"A place for me, zainsci, to share what I learn about computers and programming."}),f("meta",{property:"og:image",content:"https://zainsci.github.io/potrait.jpg"}),f("meta",{property:"og:url",content:"https://zainsci.github.io/blog"}),f("meta",{name:"twitter:card",content:"summary_large_image"}),f("meta",{property:"og:site_name",content:"zainsci-blog"}),f("meta",{name:"twitter:image:alt",content:"zainsci's portrait"})),f(d,null),f("a",{class:"skip-link",href:"#main"},"Skip to main"),f("main",{id:"main"},a),f(c,null))}},4776:function(e,t,a){"use strict";var n=a(7294).createElement;t.Z=function(e){var t=e.post,a=e.title;return n("div",{key:t.slug,className:"card"},n("a",{href:"/blog/posts/"+t.slug,itemProp:"url",className:"card__link"},n("article",{itemScope:!0,itemType:"http://schema.org/Article"},n("header",{className:"card__header"},n("h2",{className:"card__headline",itemProp:"headline"},a),n("section",null,n("p",{dangerouslySetInnerHTML:{__html:(t.description||t.excerpt)+"..."},itemProp:"description",className:"card__description"}))),n("footer",{className:"card__footer"},n("small",{className:"card__date"},n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"feather feather-calendar"},n("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),t.date),n("small",{className:"card__readtime"},t.readtime," Min Read")))))}},551:function(e,t,a){"use strict";var n=a(7294),r=n.createElement;t.Z=function(){var e="zainsci";return r(n.Fragment,null,r("div",{className:"social__icons"},r("a",{href:"https://twitter.com/".concat(e),target:"_blank",rel:"noreferrer noopener"},r("img",{src:"/blog/assets/svgs/twitter.svg",alt:"twitter logo"})),r("a",{href:"https://instagram.com/".concat(e),target:"_blank",rel:"noreferrer noopener"},r("img",{src:"/blog/assets/svgs/instagram.svg",alt:"instagram logo"})),r("a",{href:"https://github.com/".concat(e),target:"_blank",rel:"noreferrer noopener"},r("img",{src:"/blog/assets/svgs/github.svg",alt:"github logo"}))))}},6458:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(8282),i=(a(4776),n.createElement);t.default=function(e){e.data,e.location;return i(r.Z,{title:"zainsci-blog"},i("div",null))}},280:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag-posts",function(){return a(6458)}])}},function(e){e.O(0,[774,351,296],(function(){return t=280,e(e.s=t);var t}));var t=e.O();_N_E=t}]);