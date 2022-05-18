"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[3919],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return f}});var s=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,s,r=function(e,a){if(null==e)return{};var n,s,r={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),i=function(e){var a=s.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=i(e.components);return s.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},h=s.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=i(n),f=r,m=h["".concat(c,".").concat(f)]||h[f]||p[f]||t;return n?s.createElement(m,l(l({ref:a},d),{},{components:n})):s.createElement(m,l({ref:a},d))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,l=new Array(t);l[0]=h;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<t;i++)l[i]=n[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91837:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var s=n(83117),r=n(80102),t=(n(67294),n(3905)),l=["components"],o={},c="rgblink(1) \u2014 Game Boy linker",i={unversionedId:"rgblink.1",id:"version-v0.5.0-rcCar/rgblink.1",title:"rgblink(1) \u2014 Game Boy linker",description:"",source:"@site/versioned_docs/version-v0.5.0-rcCar/rgblink.1.md",sourceDirName:".",slug:"/rgblink.1",permalink:"/docs/v0.5.0-rcCar/rgblink.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgblink.1",tags:[],version:"v0.5.0-rcCar",frontMatter:{},sidebar:"nav",previous:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/v0.5.0-rcCar/rgbasm.1"},next:{title:"rgbfix(1) \u2014 Game Boy header utility and checksum fixer",permalink:"/docs/v0.5.0-rcCar/rgbfix.1"}},d={},p=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"BUGS",id:"BUGS",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:p};function f(e){var a=e.components,n=(0,r.Z)(e,l);return(0,t.kt)("wrapper",(0,s.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rgblink1--game-boy-linker"},"rgblink(1) \u2014 Game Boy linker"),(0,t.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgblink</code></td>\n    <td>[<code class="Fl"><a href="#d">-d</a><a href="#t">t</a><a href="#V">V</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a></code>] [<code class="Fl"><a href="#l">-l</a></code>\n      <var class="Ar">linker_script</var>] [<code class="Fl"><a href="#m">-m</a></code>\n      <var class="Ar">map_file</var>] [<code class="Fl"><a href="#n">-n</a></code>\n      <var class="Ar">sym_file</var>] [<code class="Fl"><a href="#O">-O</a></code>\n      <var class="Ar">overlay_file</var>] [<code class="Fl"><a href="#o">-o</a></code>\n      <var class="Ar">out_file</var>] [<code class="Fl"><a href="#p">-p</a></code>\n      <var class="Ar">pad_value</var>] [<code class="Fl"><a href="#s">-s</a></code>\n      <var class="Ar">symbol</var>] <var class="Ar">file ...</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgblink</code> program links RGB object\n    files, typically created by <a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    into a single Game Boy ROM file. The format is documented in\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>.</p>\n<p class="Pp">ROM0 sections are placed in the first 16 KiB of the output ROM,\n    and ROMX sections are placed in any 16 KiB &#x201C;bank&#x201D; except the\n    first. If your ROM will only be 32 KiB, you can use the\n    <code class="Fl">-t</code> option to change this.</p>\n<p class="Pp">Similarly, WRAM0 sections are placed in the first 4 KiB of WRAM\n    (&#x201C;bank 0&#x201D;), and WRAMX sections are placed in any bank of the\n    last 4 KiB. If your ROM doesn\'t use banked WRAM, you can use the\n    <code class="Fl">-w</code> option to change this.</p>\n<p class="Pp">Also, if your ROM is designed for a monochrome Game Boy, you can\n    make sure that you don\'t use any incompatible section by using the\n    <code class="Fl">-d</code> option, which implies <code class="Fl">-w</code>\n    but also prohibits the use of banked VRAM.</p>\n<p class="Pp">Note that options can be abbreviated as long as the abbreviation\n    is unambiguous: <code class="Fl">--verb</code> is\n    <code class="Fl">--verbose</code>, but <code class="Fl">--ver</code> is\n    invalid because it could also be <code class="Fl">--version</code>. The\n    arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="d"><a class="permalink" href="#d"><code class="Fl">-d</code></a>,\n    <code class="Fl">--dmg</code></dt>\n  <dd>Enable DMG mode. Prohibit the use of sections that doesn\'t exist on a DMG,\n      such as VRAM bank 1. This option automatically enables\n      <code class="Fl">-w</code>.</dd>\n  <dt id="l"><a class="permalink" href="#l"><code class="Fl">-l</code></a>\n    <var class="Ar">linker_script</var>, <code class="Fl">--linkerscript</code>\n    <var class="Ar">linker_script</var></dt>\n  <dd>Specify a linker script file that tells the linker how sections must be\n      placed in the ROM. The attributes assigned in the linker script must be\n      consistent with any assigned in the code. See\n      <a class="Xr" href="./rgblink.5">rgblink(5)</a> for more information about\n      the linker script format.</dd>\n  <dt id="m"><a class="permalink" href="#m"><code class="Fl">-m</code></a>\n    <var class="Ar">map_file</var>, <code class="Fl">--map</code>\n    <var class="Ar">map_file</var></dt>\n  <dd>Write a map file to the given filename, listing how sections and symbols\n      were assigned.</dd>\n  <dt id="n"><a class="permalink" href="#n"><code class="Fl">-n</code></a>\n    <var class="Ar">sym_file</var>, <code class="Fl">--sym</code>\n    <var class="Ar">sym_file</var></dt>\n  <dd>Write a symbol file to the given filename, listing the address of all\n      exported symbols. Several external programs can use this information, for\n      example to help debugging ROMs.</dd>\n  <dt id="O"><a class="permalink" href="#O"><code class="Fl">-O</code></a>\n    <var class="Ar">overlay_file</var>, <code class="Fl">--overlay</code>\n    <var class="Ar">overlay_file</var></dt>\n  <dd>If specified, sections will be overlaid &quot;on top&quot; of the provided\n      ROM image. In that case, all sections must be fixed. This may be used to\n      patch an existing binary.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">out_file</var>, <code class="Fl">--output</code>\n    <var class="Ar">out_file</var></dt>\n  <dd>Write the ROM image to the given file.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var>, <code class="Fl">--pad</code>\n    <var class="Ar">pad_value</var></dt>\n  <dd>When inserting padding between sections, pad with this value. Has no\n      effect if <code class="Fl">-O</code> is specified. The default is 0.</dd>\n  <dt id="s"><a class="permalink" href="#s"><code class="Fl">-s</code></a>\n    <var class="Ar">symbol</var>, <code class="Fl">--smart</code>\n    <var class="Ar">symbol</var></dt>\n  <dd>This option is ignored. It was supposed to perform smart linking but fell\n      into disrepair, and so has been removed. It will be reimplemented at some\n      point.</dd>\n  <dt id="t"><a class="permalink" href="#t"><code class="Fl">-t</code></a>,\n    <code class="Fl">--tiny</code></dt>\n  <dd>Expand the ROM0 section size from 16 KiB to the full 32 KiB assigned to\n      ROM. ROMX sections that are fixed to a bank other than 1 become errors,\n      other ROMX sections are treated as ROM0. Useful for ROMs that fit in 32\n      KiB.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a>,\n    <code class="Fl">--version</code></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a>,\n    <code class="Fl">--verbose</code></dt>\n  <dd>Verbose: enable printing more information to standard error.</dd>\n  <dt id="w"><a class="permalink" href="#w"><code class="Fl">-w</code></a>,\n    <code class="Fl">--wramx</code></dt>\n  <dd>Expand the WRAM0 section size from 4 KiB to the full 8 KiB assigned to\n      WRAM. WRAMX sections that are fixed to a bank other than 1 become errors,\n      other WRAMX sections are treated as WRAM0.</dd>\n  <dt id="x"><a class="permalink" href="#x"><code class="Fl">-x</code></a>,\n    <code class="Fl">--nopad</code></dt>\n  <dd>Disables padding the end of the final file. This option automatically\n      enables <code class="Fl">-t</code>. You can use this when not not making a\n      ROM. When making a ROM, be careful that not using this is not a\n      replacement for <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>\'s\n      <code class="Fl">-p</code> option!</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">All you need for a basic ROM is an object file, which can be made\n    into a ROM image like so:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgblink -o bar.gb\n  foo.o</code></div>\n<p class="Pp">The resulting <var class="Ar">bar.gb</var> will not have correct\n    checksums (unless you put them in the assembly source). You should use\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a> to fix these so that the\n    program will actually run in a Game Boy:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgbfix -v bar.gb</code></div>\n<p class="Pp">Here is a more complete example:</p>\n<p class="Pp"></p>\n<div class="Bd Bd-indent"><code class="Li">$ rgblink -o bin/game.gb -n\n  bin/game.sym -p 0xFF obj/title.o obj/engine.o</code></div>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="BUGS"><a class="permalink" href="#BUGS">BUGS</a></h2>\n<p class="Pp">Please report bugs on\n    <a class="Lk" href="https://github.com/gbdev/rgbds/issues">GitHub</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.5">rgblink(5)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgblink</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}f.isMDXComponent=!0}}]);