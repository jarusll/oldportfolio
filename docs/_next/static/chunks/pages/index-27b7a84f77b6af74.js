(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7623)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),c=t(7190);var s={};function f(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var r=a(u.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),w=j[0],x=j[1],k=l.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);l.default.useEffect((function(){var e=x&&t&&u.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,x,b,t,n]);var _={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:i,scroll:l}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&u.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);_.href=N||u.addBasePath(u.addLocale(p,E,n&&n.defaultLocale))}return l.default.cloneElement(r,_)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(i){u=!0,a=i}finally{try{l||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!u,n=o.useRef(),c=a(o.useState(!1),2),s=c[0],f=c[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||s||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,s]);return o.useEffect((function(){if(!u&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),l=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},7623:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),a=t(1664),o=t(425);function l(){var e=[{url:"https://github.com/jarusll",icon:"fa-github"},{url:"mailto:ysuraj877@gmail.com",icon:"fa-google"},{url:"https://www.linkedin.com/in/suraj-yadav-98794b62/",icon:"fa-linkedin"}],r=(0,o.F)(),t=r.theme,l=r.setTheme;return(0,n.jsxs)("main",{className:"self-center flex justify-center items-center h-screen w-screen",children:[(0,n.jsx)("button",{className:"absolute top-0 right-0 m-1",onClick:function(){return l("dark"==t?"light":"dark")},children:(0,n.jsx)("i",{className:"fas fa-adjust p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full transition-colors"})}),(0,n.jsxs)("article",{className:"grid-cols-1",children:[(0,n.jsx)("h1",{className:"uppercase text-5xl nunito text-center",children:"Suraj Yadav"}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"flex row-auto justify-center text-center py-2",children:e.map((function(e){var r=e.icon,t=e.url;return(0,n.jsx)(a.default,{href:t,passHref:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-4 rounded-full",children:(0,n.jsx)("i",{className:"fab fa-3x ".concat(r)})})})},t)}))})})]})]})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);