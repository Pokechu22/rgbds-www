"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[9710],{3905:function(e,a,r){r.d(a,{Zo:function(){return i},kt:function(){return p}});var n=r(67294);function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,n,s=function(e,a){if(null==e)return{};var r,n,s={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=n.createContext({}),o=function(e){var a=n.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},i=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var r=e.components,s=e.mdxType,t=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),h=o(r),p=s,m=h["".concat(d,".").concat(p)]||h[p]||f[p]||t;return r?n.createElement(m,l(l({ref:a},i),{},{components:r})):n.createElement(m,l({ref:a},i))}));function p(e,a){var r=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=r.length,l=new Array(t);l[0]=h;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c.mdxType="string"==typeof e?e:s,l[1]=c;for(var o=2;o<t;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64262:function(e,a,r){r.r(a),r.d(a,{assets:function(){return i},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return f}});var n=r(83117),s=r(80102),t=(r(67294),r(3905)),l=["components"],c={},d="rgbasm(1) \u2014 Game Boy assembler",o={unversionedId:"rgbasm.1",id:"version-v0.3.6/rgbasm.1",title:"rgbasm(1) \u2014 Game Boy assembler",description:"",source:"@site/versioned_docs/version-v0.3.6/rgbasm.1.md",sourceDirName:".",slug:"/rgbasm.1",permalink:"/docs/v0.3.6/rgbasm.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbasm.1",tags:[],version:"v0.3.6",frontMatter:{},sidebar:"nav",previous:{title:"rgbds(5) \u2014 object file format documentation",permalink:"/docs/v0.3.6/rgbds.5"},next:{title:"rgblink(1) \u2014 Game Boy linker",permalink:"/docs/v0.3.6/rgblink.1"}},i={},f=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:f};function p(e){var a=e.components,r=(0,s.Z)(e,l);return(0,t.kt)("wrapper",(0,n.Z)({},h,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rgbasm1--game-boy-assembler"},"rgbasm(1) \u2014 Game Boy assembler"),(0,t.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbasm</code></td>\n    <td>[<code class="Fl"><a href="#E">-E</a><a href="#h">h</a><a href="#L">L</a><a href="#V">V</a><a href="#v">v</a><a href="#w">w</a></code>] [<code class="Fl"><a href="#b">-b</a></code>\n      <var class="Ar">chars</var>] [<code class="Fl"><a href="#D">-D</a></code>\n      <var class="Ar">name</var>[=<var class="Ar">value</var>]]\n      [<code class="Fl"><a href="#g">-g</a></code> <var class="Ar">chars</var>]\n      [<code class="Fl"><a href="#i">-i</a></code> <var class="Ar">path</var>]\n      [<code class="Fl"><a href="#M">-M</a></code> <var class="Ar">dependfile</var>]\n      [<code class="Fl"><a href="#o">-o</a></code> <var class="Ar">outfile</var>]\n      [<code class="Fl"><a href="#p">-p</a></code> <var class="Ar">pad_value</var>]\n      <var class="Ar">file</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbasm</code> program creates an object file\n    from an assembly source file. Its arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="b"><a class="permalink" href="#b"><code class="Fl">-b</code></a>\n    <var class="Ar">chars</var></dt>\n  <dd>Change the two characters used for binary constants. The defaults are\n    01.</dd>\n  <dt id="D"><a class="permalink" href="#D"><code class="Fl">-D</code></a>\n    <var class="Ar">name</var>[=<var class="Ar">value</var>]</dt>\n  <dd>Add string symbol to the compiled source code. This is equivalent to\n      <var class="Ar">name</var> <code class="Cm">EQUS</code>\n      &quot;<var class="Ar">value</var>&quot; in code. If a value is not\n      specified, a value of 1 is given.</dd>\n  <dt id="E"><a class="permalink" href="#E"><code class="Fl">-E</code></a></dt>\n  <dd>Export all labels, including unreferenced and local labels.</dd>\n  <dt id="g"><a class="permalink" href="#g"><code class="Fl">-g</code></a>\n    <var class="Ar">chars</var></dt>\n  <dd>Change the four characters used for binary constants. The defaults are\n      0123.</dd>\n  <dt id="h"><a class="permalink" href="#h"><code class="Fl">-h</code></a></dt>\n  <dd>By default, <code class="Nm">rgbasm</code> inserts a &#x2018;nop&#x2019;\n      instruction immediately after any &#x2018;halt&#x2019; instruction. The\n      <code class="Fl">-h</code> option disables this behavior.</dd>\n  <dt id="i"><a class="permalink" href="#i"><code class="Fl">-i</code></a>\n    <var class="Ar">path</var></dt>\n  <dd>Add an include path.</dd>\n  <dt id="L"><a class="permalink" href="#L"><code class="Fl">-L</code></a></dt>\n  <dd>Disable the optimization that turns loads of the form\n      <a class="permalink" href="#LD"><b class="Sy" id="LD">LD\n      [$FF00+n8],A</b></a> into the opcode\n      <a class="permalink" href="#LDH"><b class="Sy" id="LDH">LDH\n      [$FF00+n8],A</b></a> in order to have full control of the result in the\n      final ROM.</dd>\n  <dt id="M"><a class="permalink" href="#M"><code class="Fl">-M</code></a>\n    <var class="Ar">dependfile</var></dt>\n  <dd>Print\n      <a class="Xr" href="https://man7.org/linux/man-pages/man1/make.1.html">make(1)</a>\n      dependencies to <var class="Ar">dependfile</var>.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">outfile</var></dt>\n  <dd>Write an object file to the given filename.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var></dt>\n  <dd>When padding an image, pad with this value. The default is 0x00.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a></dt>\n  <dd>Be verbose.</dd>\n  <dt id="w"><a class="permalink" href="#w"><code class="Fl">-w</code></a></dt>\n  <dd>Disable warning output.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">Assembling a basic source file is simple:</p>\n<div class="Bd Pp Bd-indent Li">\n<pre>$ rgbasm -o bar.o foo.asm</pre>\n</div>\n<p class="Pp">The resulting object file is not yet a usable ROM image &#x2014;\n    it must first be run through <a class="Xr" href="./rgblink.1">rgblink(1)</a>\n    and <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.5">rgbasm(5)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbasm</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}p.isMDXComponent=!0}}]);