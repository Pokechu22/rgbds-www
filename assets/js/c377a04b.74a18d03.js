"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1269:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={},l="Release information",u={unversionedId:"index",id:"index",title:"Release information",description:"What is master?",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/master/",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www/edit/master/docs/index.md",tags:[],version:"current",frontMatter:{},sidebar:"nav",next:{title:"rgbasm(5) \u2014 language documentation",permalink:"/docs/master/rgbasm.5"}},m={},c=[{value:"What is <code>master</code>?",id:"master",level:2},{value:"Pros and cons of <code>master</code> over releases",id:"pros-and-cons-of-master-over-releases",level:3},{value:"Table of contents",id:"table-of-contents",level:2}],p={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-information"},"Release information"),(0,o.kt)("h2",{id:"master"},"What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"master"),"?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"master")," is the name of RGBDS' main development branch. It's usually employed as a version name to refer to the state of in-development RGBDS: it contains the latest changes as they are pushed, but for this reason it's very unstable."),(0,o.kt)("h3",{id:"pros-and-cons-of-master-over-releases"},"Pros and cons of ",(0,o.kt)("inlineCode",{parentName:"h3"},"master")," over releases"),(0,o.kt)("p",null,"Pros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the latest changes quickly"),(0,o.kt)("li",{parentName:"ul"},"Also get bugfixes quickly"),(0,o.kt)("li",{parentName:"ul"},"Help development by submitting feedback early")),(0,o.kt)("p",null,"Cons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tested, but unstable, so expect things to break often"),(0,o.kt)("li",{parentName:"ul"},"Must be compiled manually, unless you ",(0,o.kt)("a",{parentName:"li",href:"/install#using-our-ci"},"use our CI")),(0,o.kt)("li",{parentName:"ul"},"Updated often")),(0,o.kt)("p",null,"In general, we only recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," to experienced users that can afford breakage from time to time.\nIf you do decide to use ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", we thank you and encourage you to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds/issue"},"report any bugs you find"),"!"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("p",null,"These pages are HTML renders of the various ",(0,o.kt)("inlineCode",{parentName:"p"},"man")," pages provided with RGBDS.\nPDFs are also offered for offline reading, and maybe printing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Language reference"),": documentation of the various languages used throughout RGBDS.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbasm.5"},"Assembly syntax"),": how to write RGBASM-flavored Game Boy assembly, and what the various directives do."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/gbz80.7"},"CPU instructions"),": a list of CPU instructions, as well as quick descriptions of their various effects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgblink.5"},"Linkerscript format"),": how to write a linker script for RGBLINK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbds.5"},"Object file format"),": a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command-line options"),": how to write the command lines to invoke RGBDS programs.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbasm.1"},"RGBASM"),", the assembler;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgblink.1"},"RGBLINK"),", the linker;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbfix.1"},"RGBFIX"),", the header manipulator;"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbgfx.1"},"RGBGFX"),", the image converter."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/master/rgbds.7"},"history")," of RGBDS is also available for the curious.")))}f.isMDXComponent=!0}}]);