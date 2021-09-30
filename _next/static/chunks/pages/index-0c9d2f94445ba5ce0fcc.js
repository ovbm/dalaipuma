(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9435:function(e){var t=1e3,n=60*t,a=60*n,s=24*a,i=365.25*s;function r(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,o){o=o||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!r)return;var o=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return o*i;case"days":case"day":case"d":return o*s;case"hours":case"hour":case"hrs":case"hr":case"h":return o*a;case"minutes":case"minute":case"mins":case"min":case"m":return o*n;case"seconds":case"second":case"secs":case"sec":case"s":return o*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(e);if("number"===l&&!1===isNaN(e))return o.long?r(c=e,s,"day")||r(c,a,"hour")||r(c,n,"minute")||r(c,t,"second")||c+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},1227:function(e,t,n){var a=n(4155);function s(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof a&&"env"in a&&(e=a.env.DEBUG),e}(t=e.exports=n(1658)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var s=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(s++,"%c"===e&&(i=s))})),e.splice(i,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=s,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(s())},1658:function(e,t,n){var a;function s(e){function n(){if(n.enabled){var e=n,s=+new Date,i=s-(a||s);e.diff=i,e.prev=a,e.curr=s,a=s;for(var r=new Array(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];r[0]=t.coerce(r[0]),"string"!==typeof r[0]&&r.unshift("%O");var c=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;c++;var s=t.formatters[a];if("function"===typeof s){var i=r[c];n=s.call(e,i),r.splice(c,1),c--}return n})),t.formatArgs.call(e,r);var l=n.log||t.log||console.log.bind(console);l.apply(e,r)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),a=n.length,s=0;s<a;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(9435),t.names=[],t.skips=[],t.formatters={}},3999:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.G=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},365:function(e,t,n){var a=n(1227)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var r,o,c=t.prefix||"__jp",l=t.name||c+s++,d=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(o=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),u));function p(){r.parentNode&&r.parentNode.removeChild(r),window[l]=i,o&&clearTimeout(o)}return window[l]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+d+"="+m(l)).replace("?&","?"),a('jsonp req "%s"',e),(r=document.createElement("script")).src=e,f.parentNode.insertBefore(r,f),function(){window[l]&&p()}};var s=0;function i(){}},6961:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(5893),s=n(5988),i=n(7294),r=n(8509),o=n(1664);function c(e){var t=e.between;return(0,a.jsxs)("div",{between:t,className:s.default.dynamic([["4106296521",[t?"space-between":"space-evenly"]]]),children:[(0,a.jsx)("a",{href:"https://www.instagram.com/dalai_puma/","aria-label":"stagram link",className:s.default.dynamic([["4106296521",[t?"space-between":"space-evenly"]]]),children:(0,a.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"36px",width:"36px",className:s.default.dynamic([["4106296521",[t?"space-between":"space-evenly"]]]),children:(0,a.jsx)("path",{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z",className:s.default.dynamic([["4106296521",[t?"space-between":"space-evenly"]]])})})}),(0,a.jsx)(s.default,{id:"4106296521",dynamic:[t?"space-between":"space-evenly"],children:["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:".concat(t?"space-between":"space-evenly",";-webkit-justify-content:").concat(t?"space-between":"space-evenly",";-ms-flex-pack:").concat(t?"space-between":"space-evenly",";justify-content:").concat(t?"space-between":"space-evenly",";}")]})]})}var l=function(e){var t=e.color,n=void 0===t?"currentColor":t,s=e.size,i=void 0===s?"1em":s;return(0,a.jsx)("svg",{stroke:n,fill:n,viewBox:"0 0 512 512",height:i,width:i,children:(0,a.jsx)("path",{d:"M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"})})},d=n(1163),u=(0,i.forwardRef)((function(e,t){var n=e.headerHeight,i=e.isMenuOpen,r=(0,d.useRouter)();return console.log("/shows"===r.asPath),(0,a.jsxs)("div",{ref:t,className:s.default.dynamic([["2947750093",[n,i?"visible":"hidden",i?1:0,n]]])+" mobile-menu",children:[(0,a.jsx)("div",{className:s.default.dynamic([["2947750093",[n,i?"visible":"hidden",i?1:0,n]]])+" mobile-menu-bg"}),(0,a.jsxs)("div",{className:s.default.dynamic([["2947750093",[n,i?"visible":"hidden",i?1:0,n]]])+" mobile-menu-content",children:[(0,a.jsx)(o.default,{href:"/",children:(0,a.jsx)("a",{style:{textDecoration:"/"===r.asPath?"underline":"none"},className:s.default.dynamic([["2947750093",[n,i?"visible":"hidden",i?1:0,n]]]),children:"Home"})}),(0,a.jsx)(o.default,{href:"/shows",children:(0,a.jsx)("a",{style:{textDecoration:"/shows"===r.asPath?"underline":"none"},className:s.default.dynamic([["2947750093",[n,i?"visible":"hidden",i?1:0,n]]]),children:"Shows"})})]}),(0,a.jsx)(s.default,{id:"2947750093",dynamic:[n,i?"visible":"hidden",i?1:0,n],children:[".mobile-menu.__jsx-style-dynamic-selector{color:white;position:fixed;z-index:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:0;right:0;bottom:0;left:0;opacity:0;padding-top:".concat(n,"px;visibility:").concat(i?"visible":"hidden",";opacity:").concat(i?1:0,";-webkit-transition:opacity 0.4s;transition:opacity 0.4s;display:none;}"),"@media screen and (max-width:700px){.mobile-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}",".mobile-menu-bg.__jsx-style-dynamic-selector{background:center / cover no-repeat url('/dalai.webp');position:absolute;top:0;right:0;bottom:0;left:0;}",".mobile-menu-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:2;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:".concat(n,"px;height:100%;width:100%;}"),".mobile-menu-content.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:3em;line-height:1.5;}"]})]})}));u.displayName="MobileMenu";var m=u,f=(0,i.forwardRef)((function(e,t){var n=e.headerHeight,d=e.setHeaderHeight,u=(0,i.useState)(!1),f=u[0],p=u[1],x=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(x.current)return f?(0,r.Qp)(x.current):(0,r.tG)(x.current),function(){(0,r.tP)()}}),[f,x]),(0,i.useEffect)((function(){t.current&&d(t.current.scrollHeight)}),[t]),(0,a.jsxs)("header",{className:"jsx-53544354",children:[(0,a.jsxs)("div",{ref:t,className:"jsx-53544354 content",children:[(0,a.jsxs)("nav",{className:"jsx-53544354",children:[(0,a.jsx)(o.default,{href:"/",children:(0,a.jsx)("a",{style:{marginRight:24},className:"jsx-53544354",children:"Home"})}),(0,a.jsx)(o.default,{href:"/shows",children:(0,a.jsx)("a",{className:"jsx-53544354",children:"Shows"})})]}),(0,a.jsx)(c,{}),(0,a.jsx)("button",{onClick:function(){return p(!f)},className:"jsx-53544354 menubutton",children:(0,a.jsx)(l,{size:36})})]}),(0,a.jsx)(m,{headerHeight:n,isMenuOpen:f,ref:x}),(0,a.jsx)(s.default,{id:"53544354",children:["header.jsx-53544354{z-index:10;position:absolute;width:100%;}",".content.jsx-53544354{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:16px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-53544354{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","nav.jsx-53544354 a.jsx-53544354{font-size:1.5em;}","@media screen and (max-width:700px){nav.jsx-53544354{display:none;}}",".menubutton.jsx-53544354{background:none;color:red;border:none;display:none;-webkit-transition:color 0.4s;transition:color 0.4s;}","@media screen and (max-width:700px){.menubutton.jsx-53544354{display:block;}}",".menubutton.jsx-53544354:hover{color:magenta;}"]})]})}));f.displayName="Header";var p=f,x=function(e){var t=e.children,n=(0,i.useState)(0),r=n[0],o=n[1],c=(0,i.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]])+" bg",children:(0,a.jsx)("img",{src:"/dalai.jpg",alt:"Dalai Puma Background",className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]])+" bg"})}),(0,a.jsx)("div",{className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]])+" bg gif",children:(0,a.jsx)("img",{src:"/dalai.webp",alt:"Dalai Puma Background Gif",className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]])+" bg"})}),(0,a.jsx)(p,{headerHeight:r,setHeaderHeight:o,ref:c}),(0,a.jsx)("div",{className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]]),children:(0,a.jsx)("main",{className:"jsx-4068684336 "+s.default.dynamic([["1200992293",[r,r]]]),children:t})}),(0,a.jsx)(s.default,{id:"1200992293",dynamic:[r,r],children:[".bg.__jsx-style-dynamic-selector{position:fixed;right:0;bottom:0;min-width:100%;min-height:100%;z-index:-2;}",".image.__jsx-style-dynamic-selector{object-fit:cover;width:100%;height:100%;}",".gif.__jsx-style-dynamic-selector{z-index:-1;}","main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:960px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:".concat(r,"px 0 4em 0;}"),"@media screen and (max-width:700px){main.__jsx-style-dynamic-selector{padding:".concat(r,"px 15px 4em 15px;}}")]}),(0,a.jsx)(s.default,{id:"4068684336",children:["body{margin:0;font-family:'Gaegu',cursive;font-size:150%;text-shadow:2px 2px black;color:white;}","a{color:red;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;-webkit-transition:color 0.4s;transition:color 0.4s;}","a:hover{color:magenta;}"]})]})}},6824:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(5893),s=(n(7294),n(9008)),i=n(1163),r={title:"Dalai Puma",author:{name:"Dalai Puma",summary:"Band"},description:"Dalai Puma is Z\xfcrich super-trio consisting of Franziska Staubli, Ram\xf3n Oliveras and Yannik Sandhofer. They define their style as: Rhabarber Pop, Barbershop Hop, Indie Rap, Rock Lobster. Raaaa!",social:{intagram:"dalai_puma"}};var o=function(e){e.description,e.meta;var t=e.title,n=r.title,o=r.description,c=(0,i.useRouter)();return(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:"".concat(t," | ").concat(n)}),(0,a.jsx)("meta",{name:"description",content:o}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:n}),(0,a.jsx)("meta",{property:"og:description",content:o}),(0,a.jsx)("meta",{property:"og:site_name",content:n}),(0,a.jsx)("meta",{property:"og:image",content:"https://www.dalaipuma.band/social.png"}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{property:"twitter:creator",content:r.social.instagram}),(0,a.jsx)("meta",{property:"twitter:title",content:n}),(0,a.jsx)("meta",{property:"twitter:description",content:o}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap",rel:"stylesheet"}),"/shows"===c.asPath&&(0,a.jsx)("script",{src:"//widget.songkick.com/10131488/widget.js"})]})}},1026:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(5893),s=n(5988),i=n(7294),r=n(6961),o=n(6824),c=n(809),l=n.n(c);function d(e,t,n,a,s,i,r){try{var o=e[i](r),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(a,s)}var u=n(365),m=n.n(u),f=n(3999),p=function(e){var t=(0,f.G)(e),n=encodeURIComponent(e);if(!t)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var a="&EMAIL=".concat(n),s="".concat("https://band.us18.list-manage.com/subscribe/post-json?u=2abfeaaabd3d0205adb46d2de&amp;id=be683207e5").concat(a);return new Promise((function(e,t){return m()(s,{param:"c",timeout:3500},(function(n,a){n&&t(n),a&&e(a)}))}))},x=function(){var e=(0,i.useState)({result:"",msg:""}),t=e[0],n=e[1],r=(0,i.useState)(""),o=r[0],c=r[1],u=function(){var e,t=(e=l().mark((function e(t){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p(o);case 3:a=e.sent,n(a);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function r(e){d(i,a,s,r,o,"next",e)}function o(e){d(i,a,s,r,o,"throw",e)}r(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},className:"jsx-2329499648",children:[(0,a.jsxs)("form",{onSubmit:u,className:"jsx-2329499648",children:[(0,a.jsxs)("label",{className:"jsx-2329499648",children:["Newsletter"," ",(0,a.jsx)("input",{type:"email",name:"email",value:o,onChange:function(e){return c(e.target.value)},placeholder:"email",required:!0,className:"jsx-2329499648 emailInput"})]}),(0,a.jsx)("button",{type:"submit",className:"jsx-2329499648",children:"Subscribe"})]}),""!==t.result?(0,a.jsx)(a.Fragment,{children:"success"===t.result?(0,a.jsx)("p",{style:{color:"white",fontWeight:"bold"},className:"jsx-2329499648",children:"\u2665\ufe0f thanks! \u2665\ufe0f"}):(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.msg},className:"jsx-2329499648 error"})}):null,(0,a.jsx)(s.default,{id:"2329499648",children:[".emailInput.jsx-2329499648{background:white;font-family:inherit;font-size:inherit;width:80%;max-width:300px;}",".emailInput.jsx-2329499648:focus{outline:none;}","label.jsx-2329499648{color:white;font-weight:bold;}",".error.jsx-2329499648{text-align:center;margin:1em 0;width:300px;color:white;}","button.jsx-2329499648{background:magenta;color:white;text-shadow:2px 2px black;font-family:inherit;font-size:inherit;}"]})]})},h=function(){return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{title:"Home"}),(0,a.jsx)("h1",{className:"jsx-1644199148",children:"DALAI PUMA"}),(0,a.jsx)("p",{className:"jsx-1644199148 music",children:"Rhabarber Pop, Barbershop Hop, Indie wRap, Rock Lobster. Raaaa!"}),(0,a.jsx)(x,{}),(0,a.jsx)("iframe",{title:"Your Kink Is Not My Kink But Your Kink Is Ok by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=1578663658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)("iframe",{title:"You don't know how to Kiss by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=197760067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)("iframe",{title:"My Bedroom is an Entire Town by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=2158678826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)("iframe",{title:"Cigarette Day by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=588048221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)("iframe",{title:"Karma Ping Pong by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=2909376046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)("iframe",{title:"Leave Your Tribe by Dalai Puma",loading:"lazy",src:"https://bandcamp.com/EmbeddedPlayer/track=2109071849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",seamless:!0,className:"jsx-1644199148"}),(0,a.jsx)(s.default,{id:"1644199148",children:["iframe.jsx-1644199148{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:2em 0;border:0;width:300px;height:442px;}","h1.jsx-1644199148{margin:0;font-size:2em;}",".music.jsx-1644199148{text-align:center;font-size:1.5em;}","@media screen and (max-width:700px){.music.jsx-1644199148{font-size:1em;}}"]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1026)}])}},function(e){e.O(0,[774,682,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);