"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[3877],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(d,".").concat(f)]||p[f]||u[f]||s;return r?t.createElement(b,o(o({ref:n},l),{},{components:r})):t.createElement(b,o({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4808:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var t=r(3117),a=r(102),s=(r(7294),r(3905)),o=["components"],i={},d="rgbds(7) \u2014 Rednex Game Boy Development System",c={unversionedId:"rgbds.7",id:"version-v0.3.3/rgbds.7",title:"rgbds(7) \u2014 Rednex Game Boy Development System",description:"",source:"@site/versioned_docs/version-v0.3.3/rgbds.7.md",sourceDirName:".",slug:"/rgbds.7",permalink:"/docs/v0.3.3/rgbds.7",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www/edit/master/versioned_docs/version-v0.3.3/rgbds.7.md",tags:[],version:"v0.3.3",frontMatter:{},sidebar:"nav",previous:{title:"rgbgfx(1) \u2014 Game Boy graphics converter",permalink:"/docs/v0.3.3/rgbgfx.1"},next:{title:"Submitting feedback",permalink:"/docs/v0.3.3/feedback"}},l={},u=[{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],p={toc:u};function f(e){var n=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rgbds7--rednex-game-boy-development-system"},"rgbds(7) \u2014 Rednex Game Boy Development System"),(0,s.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">To get a working ROM image from a single assembly source file:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbasm -o bar.o foo.asm</div>\n<div class="Bd Bd-indent">$ rgblink -o baz.gb bar.o</div>\n<div class="Bd Bd-indent">$ rgbfix -v -p 0 baz.gb</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<dl class="Bl-ohang">\n  <dt></dt>\n  <dd>1997, Carsten S&#x00F8;rensen (AKA SurfSmurf) writes ASMotor as a\n      general-purpose assembler/linker system for DOS/Win32.</dd>\n  <dt></dt>\n  <dd>1999, Justin Lloyd (AKA Otaku no Zoku) adapts ASMotor to read and produce\n      GBZ80 assembly/machine code, and releases this version as RGBDS.</dd>\n  <dt></dt>\n  <dd>2009, Vegard Nossum adapts the code to be more UNIX-like and releases this\n      version as rgbds-linux on GitHub.</dd>\n  <dt></dt>\n  <dd>2010, Anthony J. Bentley forks that repository. The fork becomes the\n      reference implementation of rgbds.</dd>\n  <dt></dt>\n  <dd>2017, Bentley\'s repository is moved to a neutral name. It is now\n      maintained by a number of contributors at\n      <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</dd>\n</dl>\n</section>\n'}}))}f.isMDXComponent=!0}}]);