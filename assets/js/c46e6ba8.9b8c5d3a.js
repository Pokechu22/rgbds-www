"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[3678],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=l(t),f=a,u=b["".concat(c,".").concat(f)]||b[f]||p[f]||s;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},17641:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(83117),a=t(80102),s=(t(67294),t(3905)),i=["components"],o={},c="rgblink(5) \u2014 linkerscript file format",l={unversionedId:"rgblink.5",id:"version-v0.3.10/rgblink.5",title:"rgblink(5) \u2014 linkerscript file format",description:"",source:"@site/versioned_docs/version-v0.3.10/rgblink.5.md",sourceDirName:".",slug:"/rgblink.5",permalink:"/docs/v0.3.10/rgblink.5",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgblink.5",tags:[],version:"v0.3.10",frontMatter:{},sidebar:"nav",previous:{title:"gbz80(7) \u2014 CPU opcode reference",permalink:"/docs/v0.3.10/gbz80.7"},next:{title:"rgbds(5) \u2014 object file format documentation",permalink:"/docs/v0.3.10/rgbds.5"}},d={},p=[{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],b={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rgblink5--linkerscript-file-format"},"rgblink(5) \u2014 linkerscript file format"),(0,s.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The linkerscript is an external file that allows the user to\n    specify the order of sections without the need for doing so before\n    assembling each object file.</p>\n<p class="Pp">The placement of sections specified in the linkerscript is done\n    before the sections whose placement is defined in the source code.</p>\n<p class="Pp">A linkerscript consists on a series of banks followed by a list of\n    sections and, optionally, commands. They can be lowercase or uppercase, it\n    is ignored. Any line can contain a comment starting with\n    &#x2018;<code class="Li">;</code>&#x2019; that ends at the end of the\n  line:</p>\n<div class="Bd Pp Bd-indent Li">\n<pre>ROMX $F ; This is a comment\n  &quot;Functions to read array&quot;\n  ALIGN 8\n  &quot;Array aligned to 256 bytes&quot;\n\nWRAMX 2\n  &quot;Some variables&quot;</pre>\n</div>\n<p class="Pp">Numbers can be in decimal or hexadecimal format (the prefix is\n    &#x2018;<code class="Li">$</code>&#x2019;). It is an error if any section\n    name or command are found before setting a bank.</p>\n<p class="Pp">Files can be included by using the <var class="Ar">INCLUDE</var>\n    keyword followed by a string with the path of the file that has to be\n    included.</p>\n<p class="Pp" id="ROM0">The possible bank types are:\n    <a class="permalink" href="#ROM0"><b class="Sy">ROM0</b></a>,\n    <b class="Sy">ROMX</b>, <b class="Sy">VRAM</b>,\n    <a class="permalink" href="#WRAM0"><b class="Sy" id="WRAM0">WRAM0</b></a>,\n    <b class="Sy">WRAMX</b>,\n    <a class="permalink" href="#OAM"><b class="Sy" id="OAM">OAM</b></a> and\n    <a class="permalink" href="#HRAM"><b class="Sy" id="HRAM">HRAM</b></a>.\n    Types <b class="Sy">ROMX</b>, <b class="Sy">VRAM</b>,\n    <b class="Sy">WRAMX</b> and\n    <a class="permalink" href="#SRAM"><b class="Sy" id="SRAM">SRAM</b></a> are\n    banked, which means that it is needed to specify a bank after the type.</p>\n<p class="Pp">When a new bank statement is found, sections found after it will\n    be placed right from the beginning of that bank. If the linkerscript\n    switches to a different bank and then it comes back to the previous one it\n    will continue from the last address that was used.</p>\n<p class="Pp">The only two commands are <var class="Ar">ORG</var> and\n    <var class="Ar">ALIGN</var>:</p>\n<ul class="Bl-bullet">\n  <li><var class="Ar">ORG</var> sets the address in which new sections will be\n      placed. It can not be lower than the current address.</li>\n  <li id="ALIGN"><var class="Ar">ALIGN</var> will increase the address until it\n      is aligned to the specified boundary (it tries to set to 0 the number of\n      bits specified after the command:\n      <a class="permalink" href="#ALIGN"><b class="Sy">ALIGN 8</b></a> will\n      align to $100).</li>\n</ul>\n<p class="Pp">Note: The bank, alignment, address and type of sections can be\n    specified both in the source code and in the linkerscript. For a section to\n    be able to be placed with the linkerscript the bank must be left unassigned\n    in the source code or be the same as the one specified in the linkerscript.\n    The address and alignment musn\'t be set.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgblink</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}f.isMDXComponent=!0}}]);