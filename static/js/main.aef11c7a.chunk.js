(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{32:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://hrand1005.github.io",j="HR.",h="Herbie Rand",b="Backend Software Engineer",d="Pursuing M.S. in Software Engineering at Carnegie Mellon University Silicon Valley",u="https://hrand1005.github.io/resume/resume.pdf",m={linkedin:"https://linkedin.com/in/herbie-rand-a863851a0/",github:"https://github.com/hrand1005"},O=[{name:"mcsweeney",description:"Automatic youtube content generator",stack:["Go","Bash"],sourceCode:"https://github.com/hrand1005/mcsweeney"},{name:"Training Notebook",description:"API for a training (weightlifting) notebook written in Go",stack:["Gin","Go","Bash"],sourceCode:"https://github.com/hrand1005/training-notebook"},{name:"grafapyAPI",description:"Python Library for creating Grafana Dashboards",stack:["Python"],sourceCode:"https://github.com/hrand1005/grafapyAPI"}],x=["Go","Gin","Gorilla/Mux","Python","Flask","Behave","Bash","Jenkins","Groovy","Docker"],f="hjrand1005@gmail.com",k=n(18),p=n.n(k),g=n(16),N=n.n(g),v=n(20),_=n.n(v),w=n(19),y=n.n(w),C=(n(32),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,f?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(N.a,{}):Object(i.jsx)(p.a,{})}),Object(i.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})})]})}),P=(n(36),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),S=n(11),E=n.n(S),G=n(21),B=n.n(G),I=(n(37),function(){var e=h,t=b,n=d,c=u,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(B.a,{})})]})]})]})}),A=n(7),L=n.n(A),M=n(22),R=n.n(M),H=(n(38),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(E.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(R.a,{})})]})}),J=(n(39),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(H,{project:e},L()())}))})]}):null}),T=(n(40),function(){return x.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),D=n(23),F=n.n(D),z=(n(41),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(F.a,{fontSize:"large"})})}):null}),U=(n(42),function(){return f?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(f),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(n(43),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Credit to Raj Shekhar's Cleanfolio"})})}),Y=(n(44),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(P,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(I,{}),Object(i.jsx)(J,{}),Object(i.jsx)(T,{}),Object(i.jsx)(U,{})]}),Object(i.jsx)(z,{}),Object(i.jsx)(V,{})]})});n(45);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(Y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.aef11c7a.chunk.js.map