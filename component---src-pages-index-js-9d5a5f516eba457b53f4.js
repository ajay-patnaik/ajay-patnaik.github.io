(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),l=a(0),i=a.n(l),c=(a(147),a(186)),u=a.n(c),o=a(161),s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){try{a(150),a(151)}catch(e){}},n.render=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"inner-wrapper"},i.a.createElement("div",{className:"uk-animation-scale-up uk-grid-large uk-child-width-expand@s uk-text-center uk-margin-small-top uk-margin-small-bottom","data-uk-grid":!0},i.a.createElement("div",null,i.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},i.a.createElement("img",{src:u.a,alt:"Ajay Patnaik"}))),i.a.createElement("div",null,i.a.createElement("div",{className:"uk-card uk-card-default uk-card-body uk-card-hover"},i.a.createElement("h3",{className:"uk-card-title"},i.a.createElement("span",{style:{color:"#6464FF"}},"<h3>"),"Hi, I'm Ajay Patnaik!",i.a.createElement("span",{style:{color:"#6464FF"}},"</h3>")),i.a.createElement("p",null,"I am a 3rd year Computer Science Major at the University of Dayton."),i.a.createElement("p",null,i.a.createElement("span",{style:{color:"#6464FF"}},"<span>"),i.a.createElement("b",null,"Here's some of my skills"),i.a.createElement("span",{style:{color:"#6464FF"}},"</span>")),i.a.createElement("div",{"data-uk-grid":!0},i.a.createElement("div",null,i.a.createElement("ul",{className:"uk-list uk-list-striped"},i.a.createElement("li",null,"HTML 5"),i.a.createElement("li",null,"CSS 3"),i.a.createElement("li",null,"JavaScript"))),i.a.createElement("div",null,i.a.createElement("ul",{className:"uk-list uk-list-striped"},i.a.createElement("li",null,"PHP"),i.a.createElement("li",null,"SQL"),i.a.createElement("li",null,"Java"))),i.a.createElement("div",null,i.a.createElement("ul",{className:"uk-list uk-list-striped"},i.a.createElement("li",null,"Node.js"),i.a.createElement("li",null,"React"),i.a.createElement("li",null,"Laravel")))))))))},t}(l.Component);t.default=s},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return k});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(147),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(27);a.d(t,"waitForRouteChange",function(){return o.c});var s=a(148),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),k=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}k.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(54),u=a(1),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},154:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";var n=a(153),r=a(0),l=a.n(r),i=a(4),c=a.n(i),u=a(163),o=a.n(u),s=a(149),m=(a(53),a(164),a(78),a(165),a(8)),d=a.n(m),p=a(52),k=a.n(p),f=a(147),v=a.n(f),E=a(166),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={data:[{title:"Home",link:"/",active:""},{title:"Projects",link:"/projects",active:""},{title:"Work",link:"/work",active:""},{title:"School",link:"/school",active:""},{title:"Contact",link:"/contact",active:""}]},a.active=a.active.bind(k()(k()(a))),a}d()(t,e);var n=t.prototype;return n.componentDidMount=function(){try{a(150),a(151)}catch(e){}},n.active=function(e){for(var t=0;t<this.state.data.length;t++)this.state.data[t].active="";this.state.data[e].active="uk-active"},n.render=function(){for(var e=this,t="/"+window.location.pathname.split("/")[1],a=0;a<this.state.data.length;a++)this.state.data[a].link==t&&(this.state.data[a].active="uk-active");return l.a.createElement("div",null,l.a.createElement("div",{className:"uk-margin-medium-top uk-visible@m"},l.a.createElement("ul",{className:"uk-flex-center uk-tab","data-uk-scrollspy":"cls:uk-animation-slide-top"},this.state.data.map(function(t,a){return l.a.createElement("li",{key:a,className:t.active},l.a.createElement(v.a,{to:t.link,onClick:function(){return e.active(a)}},t.title))}))),l.a.createElement("div",{className:"uk-margin-small-top uk-hidden@m"},l.a.createElement("div",{className:"uk-offcanvas-content"},l.a.createElement("div",{className:"uk-flex-inline uk-flex-between","data-uk-scrollspy":"cls:uk-animation-slide-top",style:{width:"100%"}},l.a.createElement("div",null,l.a.createElement("button",{className:"button",type:"button","data-uk-toggle":"target: #offcanvas-nav"},l.a.createElement(E.a,{color:"#FFFFFF",size:"45px"}))),l.a.createElement("div",null,l.a.createElement("span",{className:"menu-title uk-margin-small-right"},"Ajay Patnaik"))),l.a.createElement("div",{id:"offcanvas-nav","data-uk-offcanvas":"overlay: true"},l.a.createElement("div",{className:"uk-offcanvas-bar"},l.a.createElement("ul",{className:"uk-nav uk-nav-default"},this.state.data.map(function(t,a){return l.a.createElement("li",{key:a,className:t.active},l.a.createElement(v.a,{to:t.link,onClick:function(){return e.active(a)},"data-uk-toggle":"target: #offcanvas-nav"},t.title))})))))))},t}(r.Component),y=a(162),g=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return l.a.createElement("div",{className:"uk-margin-medium-bottom uk-position-fixed uk-position-bottom uk-visible@m"},l.a.createElement("div",{className:"uk-flex uk-flex-center","data-uk-scrollspy":"cls:uk-animation-slide-bottom"},l.a.createElement("a",{target:"_blank",href:"https://github.com/ajay-patnaik",className:"uk-icon-button"},l.a.createElement(y.d,{color:"#000000"})),l.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/ajay-patnaik/",className:"uk-icon-button uk-margin-medium-left uk-margin-medium-right"},l.a.createElement(y.e,{color:"#000000"})),l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/patnaikaj",className:"uk-icon-button"},l.a.createElement(y.c,{color:"#000000"}))))},t}(r.Component),b=(a(167),a(154),a(156),a(159),function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("div",{className:"page-wrapper"},l.a.createElement("div",{className:"uk-container"},l.a.createElement(h,null),t,l.a.createElement(g,null))))},data:n})});b.propTypes={children:c.a.node.isRequired};t.a=b},186:function(e,t,a){e.exports=a.p+"static/ajay-8fc5316c38d10a51b088683a4507b048.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9d5a5f516eba457b53f4.js.map