(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),l=a.n(i),c=(a(147),a(174)),o=a.n(c),s=a(161),u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){try{a(150),a(151)}catch(e){}},n.render=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"inner-wrapper"},l.a.createElement("div",{className:"uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom uk-visible@m"},l.a.createElement("a",{href:o.a,download:!0},l.a.createElement("button",{className:"download-button uk-margin-bottom"},"Download Resume")),l.a.createElement("div",{className:"uk-margin-top"},l.a.createElement("h3",{style:{color:"#FFFFFF"}},"Send me an Email!"),l.a.createElement("form",{method:"POST",action:"https://formspree.io/patnaikaj@gmail.com"},l.a.createElement("fieldset",{className:"uk-fieldset"},l.a.createElement("div",{className:"uk-margin"},l.a.createElement("input",{className:"uk-input uk-width-xlarge",name:"email",placeholder:"Your email"})),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("textarea",{className:"uk-textarea uk-width-xlarge",rows:"10",name:"message",placeholder:"Your message"})),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("button",{type:"submit",className:"submit-button uk-width-xlarge"},"Send")))))),l.a.createElement("div",{className:"uk-animation-scale-up uk-text-center uk-margin-small-top uk-margin-small-bottom uk-hidden@m"},l.a.createElement("a",{href:o.a,download:!0},l.a.createElement("button",{className:"download-button-mobile uk-margin-bottom"},"Download Resume")),l.a.createElement("div",{className:"uk-margin-top"},l.a.createElement("h3",{style:{color:"#FFFFFF"}},"Send me an Email!"),l.a.createElement("form",{method:"POST",action:"https://formspree.io/patnaikaj@gmail.com"},l.a.createElement("fieldset",{className:"uk-fieldset"},l.a.createElement("div",{className:"uk-margin"},l.a.createElement("input",{className:"uk-input",type:"email",name:"email",placeholder:"Your email"})),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("textarea",{className:"uk-textarea",rows:"10",name:"message",placeholder:"Your message"})),l.a.createElement("div",{className:"uk-margin"},l.a.createElement("button",{type:"submit",className:"submit-button-mobile"},"Send"))))))))},t}(i.Component);t.default=u},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return k});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(147),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(148),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),k=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}k.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(54),o=a(1),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},154:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(163),s=a.n(o),u=a(149),m=(a(53),a(164),a(78),a(165),a(8)),d=a.n(m),p=a(52),k=a.n(p),f=a(147),h=a.n(f),v=a(167),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={path:"",data:[{title:"Home",link:"/",active:""},{title:"Projects",link:"/projects",active:""},{title:"Work",link:"/work",active:""},{title:"School",link:"/school",active:""},{title:"Contact",link:"/contact",active:""}]},a.active=a.active.bind(k()(k()(a))),a}d()(t,e);var n=t.prototype;return n.componentDidMount=function(){try{a(150);a(151);var e=a(166),t="/"+window.location.pathname.split("/")[1];this.setState({path:t}),e(".uk-offcanvas-content a").click(function(){window.location.reload()})}catch(e){}},n.active=function(e){for(var t=0;t<this.state.data.length;t++)this.state.data[t].active="";this.state.data[e].active="uk-active"},n.render=function(){for(var e=this,t=0;t<this.state.data.length;t++)this.state.data[t].link==this.state.path&&(this.state.data[t].active="uk-active");return i.a.createElement("div",null,i.a.createElement("div",{className:"uk-margin-medium-top uk-visible@m"},i.a.createElement("ul",{className:"uk-flex-center uk-tab","data-uk-scrollspy":"cls:uk-animation-slide-top"},this.state.data.map(function(t,a){return i.a.createElement("li",{key:a,className:t.active},i.a.createElement(h.a,{to:t.link,onClick:function(){return e.active(a)}},t.title))}))),i.a.createElement("div",{className:"uk-margin-small-top uk-hidden@m"},i.a.createElement("div",{className:"uk-offcanvas-content"},i.a.createElement("div",{className:"uk-flex-inline uk-flex-between","data-uk-scrollspy":"cls:uk-animation-slide-top",style:{width:"100%"}},i.a.createElement("div",null,i.a.createElement("button",{className:"button",type:"button","data-uk-toggle":"target: #offcanvas-nav"},i.a.createElement(v.a,{color:"#FFFFFF",size:"45px"}))),i.a.createElement("div",null,i.a.createElement("span",{className:"menu-title uk-margin-small-right"},"Ajay Patnaik"))),i.a.createElement("div",{id:"offcanvas-nav","data-uk-offcanvas":"overlay: true"},i.a.createElement("div",{className:"uk-offcanvas-bar"},i.a.createElement("ul",{className:"uk-nav uk-nav-default"},this.state.data.map(function(t,a){return i.a.createElement("li",{key:a,className:t.active},i.a.createElement(h.a,{to:t.link,onClick:function(){return e.active(a)}},t.title))})))))))},t}(r.Component),g=a(162),b=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return i.a.createElement("div",{className:"uk-margin-medium-bottom uk-position-fixed uk-position-bottom uk-visible@m"},i.a.createElement("div",{className:"uk-flex uk-flex-center","data-uk-scrollspy":"cls:uk-animation-slide-bottom"},i.a.createElement("a",{target:"_blank",href:"https://github.com/ajay-patnaik",className:"uk-icon-button"},i.a.createElement(g.d,{color:"#000000"})),i.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/ajay-patnaik/",className:"uk-icon-button uk-margin-medium-left uk-margin-medium-right"},i.a.createElement(g.e,{color:"#000000"})),i.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/patnaikaj",className:"uk-icon-button"},i.a.createElement(g.c,{color:"#000000"}))))},t}(r.Component),y=(a(168),a(154),a(156),a(159),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Ajay Patnaik",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:"page-wrapper"},i.a.createElement("div",{className:"uk-container"},i.a.createElement(E,null),t,i.a.createElement(b,null))))},data:n})});y.propTypes={children:c.a.node.isRequired};t.a=y},174:function(e,t,a){e.exports=a.p+"static/Patnaik.Ajay.Resume-dbd7d9727fcbaa02859a60b03238dacf.pdf"}}]);
//# sourceMappingURL=component---src-pages-contact-js-041200b3ddff514174ca.js.map