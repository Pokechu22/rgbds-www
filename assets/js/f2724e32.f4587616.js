"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[5320],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,s=function(e,a){if(null==e)return{};var n,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var n=e.components,s=e.mdxType,t=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(n),h=s,u=f["".concat(o,".").concat(h)]||f[h]||p[h]||t;return n?r.createElement(u,l(l({ref:a},d),{},{components:n})):r.createElement(u,l({ref:a},d))}));function h(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=n.length,l=new Array(t);l[0]=f;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<t;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8604:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),s=n(102),t=(n(7294),n(3905)),l=["components"],i={},o="rgblink(1) \u2014 Game Boy linker",c={unversionedId:"rgblink.1",id:"version-v0.3.7/rgblink.1",title:"rgblink(1) \u2014 Game Boy linker",description:"",source:"@site/versioned_docs/version-v0.3.7/rgblink.1.md",sourceDirName:".",slug:"/rgblink.1",permalink:"/docs/v0.3.7/rgblink.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgblink.1",tags:[],version:"v0.3.7",frontMatter:{},sidebar:"nav",previous:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/v0.3.7/rgbasm.1"},next:{title:"rgbfix(1) \u2014 Game Boy checksum fixer",permalink:"/docs/v0.3.7/rgbfix.1"}},d={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],f={toc:p};function h(e){var a=e.components,n=(0,s.Z)(e,l);return(0,t.kt)("wrapper",(0,r.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rgblink1--game-boy-linker"},"rgblink(1) \u2014 Game Boy linker"),(0,t.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgblink</code></td>\n    <td>[<code class="Fl"><a href="#d">-d</a><a href="#t">t</a><a href="#V">V</a><a href="#w">w</a></code>] [<code class="Fl"><a href="#m">-m</a></code>\n      <var class="Ar">mapfile</var>] [<code class="Fl"><a href="#n">-n</a></code>\n      <var class="Ar">symfile</var>] [<code class="Fl"><a href="#O">-O</a></code>\n      <var class="Ar">overlayfile</var>] [<code class="Fl"><a href="#o">-o</a></code>\n      <var class="Ar">outfile</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">pad_value</var>] [<code class="Fl"><a href="#s">-s</a></code>\n      <var class="Ar">symbol</var>] [<code class="Fl"><a href="#l">-l</a></code>\n      <var class="Ar">linkerscript</var>] <var class="Ar">file ...</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgblink</code> program links objects created\n    by <a class="Xr" href="./rgbasm.1">rgbasm(1)</a> into a single Game Boy ROM\n    file.</p>\n<p class="Pp">By default, ROM0 sections created by the assembler are placed in\n    the 16KiB bank 0, and ROMX sections are placed in any bank except bank 0. If\n    your ROM will only be 32KiB, you can use the <code class="Fl">-t</code>\n    option to override this.</p>\n<p class="Pp">Similarly, WRAM0 sections are placed in the first 4KiB of WRAM\n    bank 0 and WRAMX sections are placed in any bank except bank 0. If your ROM\n    doesn\'t use banked WRAM you can use option <code class="Fl">-w</code> option\n    to override this.</p>\n<p class="Pp">Also, if your ROM is designed for DMG, you can make sure that you\n    don\'t use any prohibited section by using the option\n    <code class="Fl">-d</code>, which implies <code class="Fl">-w</code> but\n    also prohibits the use of VRAM bank 1.</p>\n<p class="Pp">The arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>\n    <var class="Ar">mapfile</var></dt>\n  <dd>Write a mapfile to the given filename.</dd>\n  <dt id="n"><a class="permalink" href="#n"><code class="Fl">-n</code></a>\n    <var class="Ar">symfile</var></dt>\n  <dd>Write a symbol file to the given filename.</dd>\n  <dt id="O"><a class="permalink" href="#O"><code class="Fl">-O</code></a>\n    <var class="Ar">overlayfile</var></dt>\n  <dd>The ROM image to overlay sections over. When an overlay ROM is provided,\n      all sections must be fixed. This may be used to patch an existing\n    binary.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">outfile</var></dt>\n  <dd>Write ROM image to the given filename.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var></dt>\n  <dd>When padding an image, pad with this value. The default is 0x00.</dd>\n  <dt id="s"><a class="permalink" href="#s"><code class="Fl">-s</code></a>\n    <var class="Ar">symbol</var></dt>\n  <dd>???</dd>\n  <dt id="w"><a class="permalink" href="#w"><code class="Fl">-w</code></a></dt>\n  <dd>Expand the WRAM0 section size from 4KiB to the full 8KiB assigned to WRAM\n      and prohibit the use of WRAMX sections.</dd>\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a></dt>\n  <dd>Enable DMG mode. Prohibit the use of sections that doesn\'t exist on a DMG,\n      such as WRAMX and VRAM bank 1. This option automatically enables\n      <code class="Fl">-w</code>.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a></dt>\n  <dd>Expand the ROM0 section size from 16KiB to the full 32KiB assigned to ROM\n      and prohibit the use of ROMX sections. Useful for ROMs that fit in 32\n    KiB.</dd>\n  <dt id="l"><a class="permalink" href="#l"><code class="Fl">-l</code></a>\n    <var class="Ar">linkerscript</var></dt>\n  <dd>Specify a linkerscript file that tells the linker how sections must be\n      placed in the ROM. This file has priority over the attributes assigned in\n      the source code, but they have to be consistent. See\n      <a class="Xr" href="./rgblink.5">rgblink(5)</a> for more information about\n      its format.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a></dt>\n  <dd>Print the version of the program and exit.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">All you need for a basic ROM is an object file, which can be made\n    into a ROM image like so:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgblink -o bar.gb foo.o</div>\n<p class="Pp">The resulting bar.gb will not have correct checksums (unless you\n    put them in the assembly source). You should use\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a> to fix these so that the\n    program will actually run in a Game Boy:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent">$ rgbfix -v bar.gb</div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.5">rgblink(5)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgblink</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}h.isMDXComponent=!0}}]);