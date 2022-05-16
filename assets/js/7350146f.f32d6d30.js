"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[2049],{3905:function(e,a,n){n.d(a,{Zo:function(){return o},kt:function(){return h}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},o=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,u=f["".concat(i,".").concat(h)]||f[h]||p[h]||s;return n?t.createElement(u,l(l({ref:a},o),{},{components:n})):t.createElement(u,l({ref:a},o))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=f;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<s;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8086:function(e,a,n){n.r(a),n.d(a,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var t=n(3117),r=n(102),s=(n(7294),n(3905)),l=["components"],d={},i="rgbgfx(1) \u2014 Game Boy graphics converter",c={unversionedId:"rgbgfx.1",id:"version-v0.3.2/rgbgfx.1",title:"rgbgfx(1) \u2014 Game Boy graphics converter",description:"",source:"@site/versioned_docs/version-v0.3.2/rgbgfx.1.md",sourceDirName:".",slug:"/rgbgfx.1",permalink:"/docs/v0.3.2/rgbgfx.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds-www/edit/master/versioned_docs/version-v0.3.2/rgbgfx.1.md",tags:[],version:"v0.3.2",frontMatter:{},sidebar:"nav",previous:{title:"rgbfix(1) \u2014 Game Boy checksum fixer",permalink:"/docs/v0.3.2/rgbfix.1"},next:{title:"rgbds(7) \u2014 Rednex Game Boy Development System",permalink:"/docs/v0.3.2/rgbds.7"}},o={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],f={toc:p};function h(e){var a=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rgbgfx1--game-boy-graphics-converter"},"rgbgfx(1) \u2014 Game Boy graphics converter"),(0,s.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbgfx</code></td>\n    <td>[<code class="Fl"><a href="#D">-D</a><a href="#f">f</a><a href="#F">F</a><a href="#h">h</a><a href="#P">P</a><a href="#T">T</a><a href="#v">v</a></code>] [<code class="Fl"><a href="#o">-o</a></code>\n      <var class="Ar">outfile</var>] [<code class="Fl"><a href="#d">-d</a></code>\n      <var class="Ar">depth</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">palfile</var>] [<code class="Fl"><a href="#t">-t</a></code>\n      <var class="Ar">mapfile</var>] [<code class="Fl"><a href="#x">-x</a></code>\n      <var class="Ar">tiles</var>] <var class="Ar">file</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbgfx</code> program converts PNG images\n    into the Nintendo Game Boy\'s planar tile format. The arguments are as\n    follows:</p>\n<dl class="Bl-tag">\n  <dt id="D"><a class="permalink" href="#D"><code class="Fl">-D</code></a></dt>\n  <dd>Debug features are enabled.</dd>\n  <dt id="f"><a class="permalink" href="#f"><code class="Fl">-f</code></a></dt>\n  <dd>Fix the input PNG file to be a correctly indexed image.</dd>\n  <dt id="F"><a class="permalink" href="#F"><code class="Fl">-F</code></a></dt>\n  <dd>Same as <code class="Fl">-f</code>, but additionally, the input PNG file\n      is fixed to have its parameters match the command line\'s parameters.</dd>\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a>\n    <var class="Ar">depth</var></dt>\n  <dd>The bitdepth of the output image (either 1 or 2). By default, the bitdepth\n      is 2 (two bits per pixel).</dd>\n  <dt id="h"><a class="permalink" href="#h"><code class="Fl">-h</code></a></dt>\n  <dd>Lay out tiles horizontally rather than vertically.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">outfile</var></dt>\n  <dd>The name of the output file.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">palfile</var></dt>\n  <dd>Raw bytes (8 bytes for two bits per pixel, 4 bytes for one bit per pixel)\n      containing the RGB15 values in the little-endian byte order and then\n      ordered from lightest to darkest.</dd>\n  <dt id="P"><a class="permalink" href="#P"><code class="Fl">-P</code></a></dt>\n  <dd>Same as <code class="Fl">-p</code>, but the pallete file output name is\n      made by taking the input filename, removing the file extension, and\n      appending <span class="Pa">.pal</span>.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>\n    <var class="Ar">mapfile</var></dt>\n  <dd>If any tiles are the same, don\'t place the repeat tiles in the output\n      file, and make a tilemap file.</dd>\n  <dt id="T"><a class="permalink" href="#T"><code class="Fl">-T</code></a></dt>\n  <dd>Same as <code class="Fl">-t</code>, but the tilemap file output name is\n      made by taking the input filename, removing the file extension, and\n      appending <span class="Pa">.tilemap</span>.</dd>\n  <dt id="u"><a class="permalink" href="#u"><code class="Fl">-u</code></a></dt>\n  <dd>Truncate repeated tiles. Useful with tilemaps.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a></dt>\n  <dd>Verbose. Print errors when the command line parameters and the parameters\n      in the PNG file don\'t match.</dd>\n  <dt id="x"><a class="permalink" href="#x"><code class="Fl">-x</code></a>\n    <var class="Ar">tiles</var></dt>\n  <dd>Trim the end of the output file by this many tiles.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">The following will take a PNG file with a bitdepth of 1, 2, or 8,\n    and output planar 2bpp data:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -o out.2bpp in.png</div>\n<p class="Pp">The following creates a planar 2bpp file with only unique tiles,\n    and its tilemap <span class="Pa">out.tilemap</span>:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -T -u -o out.2bpp in.png</div>\n<p class="Pp">The following will do nothing:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx in.png</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbgfx</code> was created by\n    <span class="An">stag019</span> to be included in RGBDS. It is now\n    maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}h.isMDXComponent=!0}}]);