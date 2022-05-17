"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[3998],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=o(t),f=r,m=h["".concat(d,".").concat(f)]||h[f]||p[f]||s;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=h;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2109:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=t(3117),r=t(102),s=(t(7294),t(3905)),l=["components"],i={},d="rgbgfx(1) \u2014 Game Boy graphics converter",o={unversionedId:"rgbgfx.1",id:"version-v0.3.6/rgbgfx.1",title:"rgbgfx(1) \u2014 Game Boy graphics converter",description:"",source:"@site/versioned_docs/version-v0.3.6/rgbgfx.1.md",sourceDirName:".",slug:"/rgbgfx.1",permalink:"/docs/v0.3.6/rgbgfx.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbgfx.1",tags:[],version:"v0.3.6",frontMatter:{},sidebar:"nav",previous:{title:"rgbfix(1) \u2014 Game Boy checksum fixer",permalink:"/docs/v0.3.6/rgbfix.1"},next:{title:"rgbds(7) \u2014 Rednex Game Boy Development System",permalink:"/docs/v0.3.6/rgbds.7"}},c={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"ARGUMENTS",id:"ARGUMENTS",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:p};function f(e){var a=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"rgbgfx1--game-boy-graphics-converter"},"rgbgfx(1) \u2014 Game Boy graphics converter"),(0,s.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbgfx</code></td>\n    <td>[<code class="Fl"><a href="#D">-D</a><a href="#f">f</a><a href="#F">F</a><a href="#h">h</a><a href="#P">P</a><a href="#T">T</a><a href="#V">V</a><a href="#v">v</a></code>] [<code class="Fl"><a href="#o">-o</a></code>\n      <var class="Ar">outfile</var>] [<code class="Fl"><a href="#d">-d</a></code>\n      <var class="Ar">depth</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">palfile</var>] [<code class="Fl"><a href="#t">-t</a></code>\n      <var class="Ar">mapfile</var>] [<code class="Fl"><a href="#x">-x</a></code>\n      <var class="Ar">tiles</var>] <var class="Ar">file</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbgfx</code> program converts PNG images\n    into the Nintendo Game Boy\'s planar tile format.</p>\n<p class="Pp">The resulting colors and their palette indices are determined\n    differently depending on the input PNG file:</p>\n<ul class="Bl-dash">\n  <li>If the file has an embedded palette, that palette\'s color and order are\n      used.</li>\n  <li>If not, and the image only contains shades of gray, rgbgfx maps them to\n      the indices appropriate for each shade. Any undetermined indices are set\n      to respective default shades of gray. For example: if the bit depth is 2\n      and the image contains light gray and black, they become the second and\n      fourth colors - and the first and third colors get set to default white\n      and dark gray. If the image has multiple shades that map to the same\n      index, the palette is instead determined as if the image had color.</li>\n  <li>If the image has color (or the grayscale method failed), the colors are\n      sorted from lightest to darkest.</li>\n</ul>\n<p class="Pp">The input image may not contain more colors than the selected bit\n    depth allows. Transparent pixels are set to palette index 0.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="ARGUMENTS"><a class="permalink" href="#ARGUMENTS">ARGUMENTS</a></h2>\n<dl class="Bl-tag">\n  <dt id="D"><a class="permalink" href="#D"><code class="Fl">-D</code></a></dt>\n  <dd>Debug features are enabled.</dd>\n  <dt id="f"><a class="permalink" href="#f"><code class="Fl">-f</code></a></dt>\n  <dd>Fix the input PNG file to be a correctly indexed image.</dd>\n  <dt id="F"><a class="permalink" href="#F"><code class="Fl">-F</code></a></dt>\n  <dd>Same as <code class="Fl">-f</code>, but additionally, the supplied command\n      line parameters are saved within the PNG and will be loaded and\n      automatically used next time.</dd>\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a>\n    <var class="Ar">depth</var></dt>\n  <dd>The bit depth of the output image (either 1 or 2). By default, the bit\n      depth is 2 (two bits per pixel).</dd>\n  <dt id="h"><a class="permalink" href="#h"><code class="Fl">-h</code></a></dt>\n  <dd>Lay out tiles horizontally rather than vertically.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">outfile</var></dt>\n  <dd>The name of the output file.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">palfile</var></dt>\n  <dd>Output the image\'s palette in standard GBC palette format - bytes (8 bytes\n      for two bits per pixel, 4 bytes for one bit per pixel) containing the\n      RGB15 values in little-endian byte order. If the palette contains too few\n      colors, the remaining entries are set to black.</dd>\n  <dt id="P"><a class="permalink" href="#P"><code class="Fl">-P</code></a></dt>\n  <dd>Same as <code class="Fl">-p</code>, but the palette file output name is\n      made by taking the input PNG file\'s filename, removing the file extension,\n      and appending <span class="Pa">.pal</span>.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>\n    <var class="Ar">mapfile</var></dt>\n  <dd>If any tiles are the same, don\'t place the repeat tiles in the output\n      file, and make a tilemap file.</dd>\n  <dt id="T"><a class="permalink" href="#T"><code class="Fl">-T</code></a></dt>\n  <dd>Same as <code class="Fl">-t</code>, but the tilemap file output name is\n      made by taking the input filename, removing the file extension, and\n      appending <span class="Pa">.tilemap</span>.</dd>\n  <dt id="u"><a class="permalink" href="#u"><code class="Fl">-u</code></a></dt>\n  <dd>Truncate repeated tiles. Useful with tilemaps.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a></dt>\n  <dd>Verbose. Print errors when the command line parameters and the parameters\n      in the PNG file don\'t match.</dd>\n  <dt id="x"><a class="permalink" href="#x"><code class="Fl">-x</code></a>\n    <var class="Ar">tiles</var></dt>\n  <dd>Trim the end of the output file by this many tiles.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">The following will take a PNG file with a bit depth of 1, 2, or 8,\n    and output planar 2bpp data:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -o out.2bpp in.png</div>\n<p class="Pp">The following creates a planar 2bpp file with only unique tiles,\n    and its tilemap <span class="Pa">out.tilemap</span>:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx -T -u -o out.2bpp in.png</div>\n<p class="Pp">The following will do nothing:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbgfx in.png</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbgfx</code> was created by\n    <span class="An">stag019</span> to be included in RGBDS. It is now\n    maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}f.isMDXComponent=!0}}]);