(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,n){"use strict";var a=n(12);t.__esModule=!0,t.withPrefix=M,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=a(n(188)),l=a(n(189)),r=a(n(11)),c=a(n(69)),s=a(n(70)),o=a(n(1)),u=a(n(0)),m=n(32),d=n(183);function M(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var g={activeClassName:o.default.string,activeStyle:o.default.object},N=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,c.default)((0,c.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,c.default)((0,c.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(i.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,r=void 0===a?this.defaultGetProps:a,c=t.onClick,s=t.onMouseEnter,o=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),g=t.replace,N=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=M(n);return u.default.createElement(m.Link,(0,l.default)({to:y,state:o,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),L(n,{state:o,replace:g})),!0}},N))},t}(u.default.Component);N.propTypes=(0,l.default)({},g,{innerRef:o.default.func,onClick:o.default.func,to:o.default.string.isRequired,replace:o.default.bool});var y=N;t.default=y;var L=function(e,t){window.___navigate(M(e),t)};t.navigate=L;var p=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(M(e))};t.push=p;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(M(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),p(e)}},181:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return r});n(93),n(94);function a(){return"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage).includes("tr")?"tr":"en"}var i=null;function l(){return i}function r(e){i="en"===e||"tr"===e?e:"en"}},182:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEzMjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTQxNEFCQzk5QTExMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMwOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTMxOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7ClIwAADR5JREFUeNrsnQuw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"},183:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return M});var a=n(0),i=n.n(a),l=n(1),r=n.n(l),c=n(180),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var o=n(184),u=n.n(o);n.d(t,"PageRenderer",function(){return u.a});var m=n(63);n.d(t,"parsePath",function(){return m.a});var d=i.a.createContext({}),M=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},184:function(e,t,n){var a;e.exports=(a=n(190))&&a.default||a},186:function(e,t,n){"use strict";var a=n(11),i=n.n(a),l=n(0),r=n.n(l),c=n(92),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleAbout=function(){var e=document.getElementById("story");e&&e.scrollIntoView(!0)},t}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return l.createElement("div",{className:e.Landing},l.createElement("div",{className:e.LandingCarrier},l.createElement("div",{className:e.LandingText},l.createElement("div",{className:e.LandingTextTitle},l.createElement("h1",null,"HELLO")),l.createElement("div",{className:e.LandingTextDesc},l.createElement("p",null,"I'm Anıl,"),l.createElement("p",null,"a software developer.")),l.createElement("div",{className:e.LandingTextButtons},l.createElement("div",{className:e.LandingTextButtonAbout,onClick:this.handleAbout},l.createElement("p",null,"More About Me")),l.createElement("div",{className:e.LandingTextButtonContact},l.createElement("p",null,"Contact Me")))),l.createElement("div",{className:e.LandingVisual},l.createElement("div",{className:e.LandingVisualImage},l.createElement("img",{alt:"developer vector",src:n(187)})))))},t}(l.Component),o=Object(c.default)(function(e){return{Landing:{width:"100%",height:"100%"},LandingCarrier:{height:"calc(100vh - 101px)",maxWidth:1e3,margin:"auto",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},LandingText:{width:400,height:400,display:"flex",flexDirection:"column"},LandingTextTitle:{"& h1":{margin:0,fontSize:"5em"},marginBottom:25},LandingTextDesc:{display:"flex",flexDirection:"column",marginBottom:100,"& p":{margin:0,fontSize:"2em"},"& p:last-child":{fontWeight:800}},LandingTextButtons:{display:"flex",flexDirection:"row","& div":{width:200,height:60,backgroundColor:"#f2ba5b",borderRadius:30,textAlign:"center",color:"#FFF",marginRight:50,cursor:"pointer"},"& p":{fontWeight:800,fontSize:"1.2em"}},LandingTextButtonAbout:{},LandingTextButtonContact:{},LandingVisual:{},LandingVisualImage:{"& img":{height:400},height:400},"@media (max-width:500px)":{LandingCarrier:{flexDirection:"column",height:"100%"},LandingText:{margin:"auto",height:"100%",width:"100%",marginBottom:50},LandingTextTitle:{marginBottom:12},LandingTextDesc:{marginBottom:50},LandingTextButtons:{flexDirection:"column",alignItems:"center","& div":{marginRight:0,marginBottom:10}},LandingVisual:{width:"100%",height:"100%"},LandingVisualImage:{height:"100%",width:"100%","& img":{width:"100%",height:"auto"}}}}})(s),u=n(183),m=n(181),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return l.createElement("div",{className:e.Header},l.createElement("div",{className:e.HeaderCarrier},l.createElement("div",{className:e.HeaderHome},l.createElement(u.Link,{to:"/"},l.createElement("p",null,"Home"))),l.createElement("div",{className:e.HeaderItem},l.createElement(u.Link,{to:"/"+Object(m.b)()+"/#story"},l.createElement("p",null,"My Story"))),l.createElement("div",{className:e.HeaderItem},l.createElement(u.Link,{to:"/"+Object(m.b)()+"/#projects"},l.createElement("p",null,"Projects"))),l.createElement("div",{className:e.HeaderItem},l.createElement(u.Link,{to:"/"},l.createElement("p",null,"Contact Me"))),l.createElement("div",{className:e.HeaderItem},l.createElement(u.Link,{to:"/"},l.createElement("p",null,"Resume")))))},t}(l.Component),M=Object(c.default)(function(e){return{Header:{width:"100%",height:100,borderBottom:"1px darkgray solid"},HeaderCarrier:{maxWidth:1e3,height:"100%",margin:"auto",display:"flex",flexDirection:"row",alignItems:"center","& a":{textDecoration:"none"}},HeaderHome:{flex:4},HeaderItem:{flex:1,textAlign:"center"},"@media (max-width:500px)":{HeaderHome:{flex:1,textAlign:"center"}}}})(d),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return l.createElement("div",{id:"story",className:e.Story},l.createElement("div",{className:e.StoryCarrier},l.createElement("div",{className:e.StoryTitle},l.createElement("h1",null,"My Story")),l.createElement("div",{className:e.StoryMain},l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.EmptyBlock}),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"1995")),l.createElement("div",{className:e.StoryText},l.createElement("p",null,"Born"))),l.createElement("div",{className:e.StoryRectangle}),l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.StoryText},l.createElement("p",null,"Started IEU")),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"2013")),l.createElement("div",{className:e.EmptyBlock})),l.createElement("div",{className:e.StoryRectangle}),l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.EmptyBlock}),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"2016")),l.createElement("div",{className:e.StoryText},l.createElement("p",null,"ERASMUS"))),l.createElement("div",{className:e.StoryRectangle}),l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.StoryText},l.createElement("p",null,"GRADUATED IEU")),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"2017")),l.createElement("div",{className:e.EmptyBlock})),l.createElement("div",{className:e.StoryRectangle}),l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.EmptyBlock}),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"Dec")),l.createElement("div",{className:e.StoryText},l.createElement("p",null,"bidolubaski"))),l.createElement("div",{className:e.StoryRectangle}),l.createElement("div",{className:e.StoryPoint},l.createElement("div",{className:e.StoryText},l.createElement("p",null,"Otsimo")),l.createElement("div",{className:e.StoryCircle},l.createElement("p",null,"2018")),l.createElement("div",{className:e.EmptyBlock})))))},t}(l.Component),N=Object(c.default)(function(e){return{Story:{width:"100%",height:"100%"},StoryCarrier:{width:"100%",maxWidth:1e3,display:"flex",flexDirection:"column",margin:"48px auto"},StoryTitle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},StoryMain:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},StoryPoint:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center"},StoryCircle:{backgroundColor:"#f2ba5b",width:50,height:50,borderRadius:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},StoryText:{flex:1,textAlign:"center"},EmptyBlock:{flex:1},StoryRectangle:{backgroundColor:"#000",width:10,height:150,borderRadius:5}}})(g),y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return l.createElement("div",{id:"projects",className:e.Projects},l.createElement("div",{className:e.ProjectsCarrier},l.createElement("div",{className:e.ProjectsTitle},l.createElement("h1",null,"My Projects")),l.createElement("div",{className:e.ProjectsMain},l.createElement("div",{className:e.Project},l.createElement("div",{className:e.Title},l.createElement("h3",null,"Budgetpack")),l.createElement("div",{className:e.Text},l.createElement("div",{className:e.Desc},l.createElement("p",null,"Budgetpack is an app that created for people who are on budget and want to travel the world and do as much as they can.")),l.createElement("div",{className:e.Stack},l.createElement("p",null,"Tech Stack:"),l.createElement("ul",null,l.createElement("li",null,"Android"),l.createElement("li",null,"Java"),l.createElement("li",null,"Firebase"))),l.createElement("div",{className:e.Links},l.createElement("a",{href:"https://github.com/anilsansak/Budgetpack"},l.createElement("img",{alt:"github",src:n(182)}))))),l.createElement("div",{className:e.Project},l.createElement("div",{className:e.Title},l.createElement("h3",null,"Mevzubahis")),l.createElement("div",{className:e.Text},l.createElement("div",{className:e.Desc},l.createElement("p",null,"Senior Year Project. An Android app that lets users challenge their friends in both sportive and social subjects.")),l.createElement("div",{className:e.Stack},l.createElement("p",null,"Tech Stack:"),l.createElement("ul",null,l.createElement("li",null,"Android"),l.createElement("li",null,"Java"),l.createElement("li",null,"Firebase"))),l.createElement("div",{className:e.Links},l.createElement("a",{href:"https://github.com/anilsansak/MevzuBahis"},l.createElement("img",{alt:"github",src:n(182)}))))),l.createElement("div",{className:e.Project},l.createElement("div",{className:e.Title},l.createElement("h3",null,"BouncingBallzz")),l.createElement("div",{className:e.Text},l.createElement("div",{className:e.Desc},l.createElement("p",null,"A 2D Android game made with Unity.")),l.createElement("div",{className:e.Stack},l.createElement("p",null,"Tech Stack:"),l.createElement("ul",null,l.createElement("li",null,"Unity"),l.createElement("li",null,"C#"))),l.createElement("div",{className:e.Links},l.createElement("a",{href:"https://github.com/anilsansak/BouncingBallzz"},l.createElement("img",{alt:"github",src:n(182)}))))),l.createElement("div",{className:e.Project},l.createElement("div",{className:e.Title},l.createElement("h3",null,"anilsansak.github.io")),l.createElement("div",{className:e.Text},l.createElement("div",{className:e.Desc},l.createElement("p",null,"Personal website made with Gatsby.")),l.createElement("div",{className:e.Stack},l.createElement("p",null,"Tech Stack:"),l.createElement("ul",null,l.createElement("li",null,"GatsbyJS"),l.createElement("li",null,"React"),l.createElement("li",null,"Javascript"),l.createElement("li",null,"CSS"),l.createElement("li",null,"HTML"),l.createElement("li",null,"Gİthub Pages"))),l.createElement("div",{className:e.Links},l.createElement("a",{href:"https://github.com/anilsansak/anilsansak.github.io"},l.createElement("img",{alt:"github",src:n(182)}))))))))},t}(l.Component),L=Object(c.default)(function(e){return{Projects:{width:"100%",height:"100%"},ProjectsCarrier:{width:"100%",height:"100%",maxWidth:1e3,margin:"48px auto"},ProjectsTitle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ProjectsMain:{width:"100%",display:"flex",flexDirection:"column"},Project:{display:"flex",flexDirection:"row",justifyContent:"center",borderBottom:"1px dashed #454545",marginTop:48},Title:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",flex:1,marginRight:24},Text:{display:"flex",flexDirection:"column",flex:1,marginLeft:24},Desc:{},Stack:{},Links:{"& img":{width:32,height:32}},"@media (max-width:500px)":{Project:{flexDirection:"column",marginTop:24},Title:{alignItems:"center",marginRight:0},Text:{marginLeft:0}}}})(y),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.createElement("div",null,l.createElement(M,null),l.createElement(o,null),l.createElement(N,null),l.createElement(L,null))},t}(l.Component);n.d(t,"a",function(){return E});var E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(p,null))},t}(r.a.Component)},187:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjIuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMV8xXyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEJDNUU7IiBkPSJNNjIsNTVIMzRWNDJjMC0xLjEwNSwwLjg5NS0yLDItMmgyNGMxLjEwNSwwLDIsMC44OTUsMiwyVjU1eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEJDNUU7IiBkPSJNMjIsMUMxMy43MjksMSw3LDcuNzI5LDcsMTZ2OGgxYzAtMi4yMDksMS43OTEtNCw0LTR2LTFjMC0wLjU1MiwwLjQ0OC0xLDEtMWgxOCAgICBjMC41NTIsMCwxLDAuNDQ4LDEsMXYxYzIuMjA5LDAsNCwxLjc5MSw0LDRoMXYtOEMzNyw3LjcyOSwzMC4yNzEsMSwyMiwxeiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBjeD0iMTciIGN5PSIyMiIgcj0iMSIvPgoJCTxjaXJjbGUgY3g9IjI3IiBjeT0iMjIiIHI9IjEiLz4KCQk8cGF0aCBkPSJNMjYsMjhoLTJjMCwxLjEwMy0wLjg5NywyLTIsMnMtMi0wLjg5Ny0yLTJoLTJjMCwyLjIwNiwxLjc5NCw0LDQsNFMyNiwzMC4yMDYsMjYsMjh6Ii8+CgkJPHBhdGggZD0iTTYwLDM5SDM2Yy0wLjU2MiwwLTEuMDgyLDAuMTY1LTEuNTMzLDAuNDM1TDI4LDM3LjI3OXYtMi4wNzJjMi4yMS0xLjQ0NSwzLjg2NC0zLjY2Myw0LjU4OS02LjI2NyAgICBDMzUuMDY2LDI4LjY0NSwzNywyNi41NTUsMzcsMjRjMC0yLjQxNC0xLjcyMS00LjQzNC00LTQuODk5VjE5YzAtMS4xMDMtMC44OTctMi0yLTJIMTNjLTEuMTAzLDAtMiwwLjg5Ny0yLDJ2MC4xMDEgICAgQzguNzIxLDE5LjU2Niw3LDIxLjU4Niw3LDI0YzAsMi41NTUsMS45MzQsNC42NDUsNC40MTEsNC45NGMwLjcyNCwyLjYwNSwyLjM3OSw0LjgyMiw0LjU4OSw2LjI2N3YyLjA3Mkw1Ljc4Niw0MC42ODQgICAgQzIuOTI0LDQxLjYzOCwxLDQ0LjMwNywxLDQ3LjMyNVY1N2gzMi4xODRjMC40MTQsMS4xNjEsMS41MTQsMiwyLjgxNiwyaDZ2MmgtMnYyaDE2di0yaC0ydi0yaDZjMS42NTQsMCwzLTEuMzQ2LDMtM1Y0MiAgICBDNjMsNDAuMzQ2LDYxLjY1NCwzOSw2MCwzOXogTTM1LDI0YzAsMS4zMTctMC44NTksMi40MjctMi4wNDIsMi44MjlDMzIuOTc5LDI2LjU1NCwzMywyNi4yOCwzMywyNnYtNC44MTYgICAgQzM0LjE2MSwyMS41OTgsMzUsMjIuNjk4LDM1LDI0eiBNMzMsNTVIMjN2LTkuNTg2bDQuMTgyLDQuMTgybDUuNDIxLTguNjc0bDAuNTQ5LDAuMTgzQzMzLjA2Miw0MS4zODksMzMsNDEuNjg2LDMzLDQydjZWNTV6ICAgICBNMzAuNjUyLDQwLjI3MWwtMy44MzMsNi4xMzNMMjMuNDE0LDQzbDMuODU2LTMuODU2TDMwLjY1Miw0MC4yNzF6IE05LDI0YzAtMS4zMDIsMC44MzktMi40MDIsMi0yLjgxNlYyNiAgICBjMCwwLjI4LDAuMDIxLDAuNTU0LDAuMDQyLDAuODI5QzkuODU5LDI2LjQyNyw5LDI1LjMxNyw5LDI0eiBNMTMsMjZ2LTdoMTh2N2MwLDQuOTYyLTQuMDM3LDktOSw5UzEzLDMwLjk2MiwxMywyNnogTTIyLDM3ICAgIGMxLjQxMiwwLDIuNzU4LTAuMjc3LDQtMC43NjR2MS4zNWwtNCw0bC00LTR2LTEuMzVDMTkuMjQyLDM2LjcyMywyMC41ODgsMzcsMjIsMzd6IE0xNi43MywzOS4xNDRMMjAuNTg2LDQzbC0zLjQwNCwzLjQwNCAgICBsLTMuODMzLTYuMTMzTDE2LjczLDM5LjE0NHogTTYuNDE5LDQyLjU4MWw0Ljk3OC0xLjY1OWw1LjQyMSw4LjY3NUwyMSw0NS40MTRWNTVIMTF2LTdIOXYzSDN2LTMuNjc1ICAgIEMzLDQ1LjE2OSw0LjM3NCw0My4yNjMsNi40MTksNDIuNTgxeiBNMyw1M2g2djJIM1Y1M3ogTTUyLDYxaC04di0yaDhWNjF6IE02MSw1NmMwLDAuNTUxLTAuNDQ4LDEtMSwxSDM2Yy0wLjU1MiwwLTEtMC40NDktMS0xdi04ICAgIHYtNmMwLTAuNTUxLDAuNDQ4LTEsMS0xaDI0YzAuNTUyLDAsMSwwLjQ0OSwxLDFWNTZ6Ii8+CgkJPHBvbHlnb24gcG9pbnRzPSI1MS40LDQ0LjggNTQuMzMzLDQ3IDUxLjQsNDkuMiA1Mi42LDUwLjggNTcuNjY3LDQ3IDUyLjYsNDMuMiAgICIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNDMuNCw0My4yIDM4LjMzMyw0NyA0My40LDUwLjggNDQuNiw0OS4yIDQxLjY2Nyw0NyA0NC42LDQ0LjggICAiLz4KCQk8cmVjdCB4PSI0My41MzgiIHk9IjQ2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjM4ODEgLTAuOTIxNiAwLjkyMTYgMC4zODgxIC0xMy45NDQyIDcyLjk5ODQpIiB3aWR0aD0iOC45MjUiIGhlaWdodD0iMi4wMDEiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},188:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},189:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},190:function(e,t,n){"use strict";n.r(t);n(45);var a=n(0),i=n.n(a),l=n(1),r=n.n(l),c=n(85),s=n(6),o=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o}}]);
//# sourceMappingURL=0-0b0563d72fb019ac9a44.js.map