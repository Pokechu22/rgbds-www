"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[98],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=f(r),d=a,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41806:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={},l="Release information",f={unversionedId:"index",id:"version-v0.3.3/index",title:"Release information",description:"GitHub links",source:"@site/versioned_docs/version-v0.3.3/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.3.3/",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www/edit/master/versioned_docs/version-v0.3.3/index.md",tags:[],version:"v0.3.3",frontMatter:{},sidebar:"nav",next:{title:"rgbasm(5) \u2014 language documentation",permalink:"/docs/v0.3.3/rgbasm.5"}},c={},u=[{value:"GitHub links",id:"github-links",level:2},{value:"Table of contents",id:"table-of-contents",level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-information"},"Release information"),(0,i.kt)("h2",{id:"github-links"},"GitHub links"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gbdev/rgbds/releases/v0.3.3"},"release page")," contains the full changelog, as well as pre-built downloads."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("p",null,"These pages are HTML renders of the various ",(0,i.kt)("inlineCode",{parentName:"p"},"man")," pages provided with RGBDS.\nPDFs are also offered for offline reading, and maybe printing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language reference"),": documentation of the various languages used throughout RGBDS.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbasm.5"},"Assembly syntax"),": how to write RGBASM-flavored Game Boy assembly, and what the various directives do. (",(0,i.kt)("a",{target:"_blank",href:r(78878).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/gbz80.7"},"CPU instructions"),": a list of CPU instructions, as well as quick descriptions of their various effects. (",(0,i.kt)("a",{target:"_blank",href:r(19404).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgblink.5"},"Linkerscript format"),": how to write a linker script for RGBLINK. (",(0,i.kt)("a",{target:"_blank",href:r(76992).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbds.5"},"Object file format"),": a description of the format of files emitted by RGBASM and expected by RGBLINK; useful for integrating custom tooling with RGBDS. (",(0,i.kt)("a",{target:"_blank",href:r(76347).Z},"PDF"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Command-line options"),": how to write the command lines to invoke RGBDS programs.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbasm.1"},"RGBASM"),", the assembler; (",(0,i.kt)("a",{target:"_blank",href:r(23793).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgblink.1"},"RGBLINK"),", the linker; (",(0,i.kt)("a",{target:"_blank",href:r(38037).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbfix.1"},"RGBFIX"),", the header manipulator; (",(0,i.kt)("a",{target:"_blank",href:r(11330).Z},"PDF"),")"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbgfx.1"},"RGBGFX"),", the image converter. (",(0,i.kt)("a",{target:"_blank",href:r(55925).Z},"PDF"),")"))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.3.3/rgbds.7"},"history")," of RGBDS is also available for the curious. (",(0,i.kt)("a",{target:"_blank",href:r(5047).Z},"PDF"),")")))}d.isMDXComponent=!0},19404:function(e,t,r){t.Z=r.p+"assets/files/gbz80.7-013f51e1bf709273f18e66f197faba5e.pdf"},23793:function(e,t,r){t.Z=r.p+"assets/files/rgbasm.1-cc240592245361436f40d17225d00a88.pdf"},78878:function(e,t,r){t.Z=r.p+"assets/files/rgbasm.5-f68381f31330be527995116f988e9434.pdf"},76347:function(e,t,r){t.Z=r.p+"assets/files/rgbds.5-b55b7a90803219e034b479088a24747f.pdf"},5047:function(e,t,r){t.Z=r.p+"assets/files/rgbds.7-388cc253a0587f2ba68fcf1d0d83d026.pdf"},11330:function(e,t,r){t.Z=r.p+"assets/files/rgbfix.1-15b343324cb950d6e9bc83f5d0fbbfbc.pdf"},55925:function(e,t,r){t.Z=r.p+"assets/files/rgbgfx.1-a199951e37e554bf4bc5677ae2b3f950.pdf"},38037:function(e,t,r){t.Z=r.p+"assets/files/rgblink.1-fc477c9cb8a5d5aca3f0602fcce58511.pdf"},76992:function(e,t,r){t.Z=r.p+"assets/files/rgblink.5-9ae4a9624ab720fa51a7acbb0c0d0afb.pdf"}}]);