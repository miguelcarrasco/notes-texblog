(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},CHYI:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("HQhv");var r=["Enero","Febrero","Marzo","April","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function o(t){var e;return e=t.split("-"),parseInt(e[2])+" de "+r[parseInt(e[1])-1]+", "+e[0]}},"G2/G":function(t,e,n){},TyFo:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m})),n.d(e,"pageQuery",(function(){return b}));var r=n("q1tI"),o=n.n(r),c=n("7ljp"),a=n("A2+M"),i=n("Wbzz"),u=n("sNzC"),f=n("cElI"),l=n("wqpA"),p=n("CHYI"),s=(n("G2/G"),{Link:i.Link});function m(t){var e=t.data.mdx;return console.log(e),o.a.createElement(u.a,null,o.a.createElement(f.a,{title:Object(l.a)(e.frontmatter.title,17),description:e.frontmatter.description}),o.a.createElement("article",{className:"PostPage",id:e.id},o.a.createElement("h1",{className:"PostPage__title"},e.frontmatter.title),o.a.createElement("h3",{className:"PostPage__date"},Object(p.a)(e.frontmatter.date)),o.a.createElement(c.MDXProvider,{components:s,className:"test"},o.a.createElement(a.MDXRenderer,null,e.body)),o.a.createElement("a",{onClick:function(){window.scrollTo(0,0)},className:"PostPage__topbutton",title:"Go to top of page"},"↑")))}var b="1485454984"},X8hv:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var p=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,b=s.mdx,y=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),i=m(n),u=y(e),l=p.useMemo((function(){if(!o)return null;var t=f({React:p,mdx:b},u),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return p.createElement(l,f({components:i},c))}},wqpA:function(t,e,n){"use strict";function r(t,e){return t.length<=e?t:t.slice(0,e)+"..."}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-components-post-page-postpage-tsx-512ace32965fd59130c7.js.map