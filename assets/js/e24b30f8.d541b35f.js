"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[3185],{3905:function(e,a,s){s.d(a,{Zo:function(){return i},kt:function(){return p}});var n=s(67294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function c(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function d(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?c(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function l(e,a){if(null==e)return{};var s,n,r=function(e,a){if(null==e)return{};var s,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)s=c[n],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var t=n.createContext({}),o=function(e){var a=n.useContext(t),s=a;return e&&(s="function"==typeof e?e(a):d(d({},a),e)),s},i=function(e){var a=o(e.components);return n.createElement(t.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var s=e.components,r=e.mdxType,c=e.originalType,t=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=o(s),p=r,m=f["".concat(t,".").concat(p)]||f[p]||h[p]||c;return s?n.createElement(m,d(d({ref:a},i),{},{components:s})):n.createElement(m,d({ref:a},i))}));function p(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=s.length,d=new Array(c);d[0]=f;var l={};for(var t in a)hasOwnProperty.call(a,t)&&(l[t]=a[t]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var o=2;o<c;o++)d[o]=s[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,s)}f.displayName="MDXCreateElement"},48922:function(e,a,s){s.r(a),s.d(a,{assets:function(){return i},contentTitle:function(){return t},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return h}});var n=s(83117),r=s(80102),c=(s(67294),s(3905)),d=["components"],l={},t="rgbasm(1) \u2014 Game Boy assembler",o={unversionedId:"rgbasm.1",id:"version-v0.5.2/rgbasm.1",title:"rgbasm(1) \u2014 Game Boy assembler",description:"",source:"@site/versioned_docs/version-v0.5.2/rgbasm.1.md",sourceDirName:".",slug:"/rgbasm.1",permalink:"/docs/v0.5.2/rgbasm.1",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbasm.1",tags:[],version:"v0.5.2",frontMatter:{},sidebar:"nav",previous:{title:"rgbds(5) \u2014 object file format documentation",permalink:"/docs/v0.5.2/rgbds.5"},next:{title:"rgblink(1) \u2014 Game Boy linker",permalink:"/docs/v0.5.2/rgblink.1"}},i={},h=[{value:"SYNOPSIS",id:"SYNOPSIS",level:2,children:[]},{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"DIAGNOSTICS",id:"DIAGNOSTICS",level:2,children:[]},{value:"EXAMPLES",id:"EXAMPLES",level:2,children:[]},{value:"BUGS",id:"BUGS",level:2,children:[]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],f={toc:h};function p(e){var a=e.components,s=(0,r.Z)(e,d);return(0,c.kt)("wrapper",(0,n.Z)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"rgbasm1--game-boy-assembler"},"rgbasm(1) \u2014 Game Boy assembler"),(0,c.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="SYNOPSIS"><a class="permalink" href="#SYNOPSIS">SYNOPSIS</a></h2>\n<table class="Nm">\n  <tr>\n    <td><code class="Nm">rgbasm</code></td>\n    <td>[<code class="Fl"><a href="#E">-E</a><a href="#h">h</a><a href="#L">L</a><a href="#V">V</a><a href="#v">v</a><a href="#w">w</a></code>] [<code class="Fl"><a href="#b">-b</a></code>\n      <var class="Ar">chars</var>] [<code class="Fl"><a href="#D">-D</a></code>\n      <var class="Ar">name</var>[=<var class="Ar">value</var>]]\n      [<code class="Fl"><a href="#g">-g</a></code> <var class="Ar">chars</var>]\n      [<code class="Fl"><a href="#i">-i</a></code> <var class="Ar">path</var>]\n      [<code class="Fl"><a href="#M">-M</a></code> <var class="Ar">depend_file</var>]\n      [<code class="Fl"><a href="#M">-M</a><a href="#G">G</a></code>] [<code class="Fl"><a href="#M">-M</a><a href="#P">P</a></code>]\n      [<code class="Fl"><a href="#M">-M</a><a href="#T">T</a></code> <var class="Ar">target_file</var>]\n      [<code class="Fl"><a href="#M">-M</a><a href="#Q">Q</a></code> <var class="Ar">target_file</var>]\n      [<code class="Fl"><a href="#o">-o</a></code> <var class="Ar">out_file</var>]\n      [<code class="Fl"><a href="#p">-p</a></code> <var class="Ar">pad_value</var>]\n      [<code class="Fl"><a href="#r">-r</a></code> <var class="Ar">recursion_depth</var>]\n      [<code class="Fl"><a href="#W">-W</a></code> <var class="Ar">warning</var>]\n      <var class="Ar">file ...</var></td>\n  </tr>\n</table>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">The <code class="Nm">rgbasm</code> program creates an RGB object\n    file from an assembly source file. The input <var class="Ar">file</var> can\n    be a file path, or <code class="Cm">-</code> denoting\n    <code class="Cm">stdin</code>.</p>\n<p class="Pp">Note that options can be abbreviated as long as the abbreviation\n    is unambiguous: <code class="Fl">--verb</code> is\n    <code class="Fl">--verbose</code>, but <code class="Fl">--ver</code> is\n    invalid because it could also be <code class="Fl">--version</code>. The\n    arguments are as follows:</p>\n<dl class="Bl-tag">\n  <dt id="b"><a class="permalink" href="#b"><code class="Fl">-b</code></a>\n    <var class="Ar">chars</var>, <code class="Fl">--binary-digits</code>\n    <var class="Ar">chars</var></dt>\n  <dd>Change the two characters used for binary constants. The defaults are\n    01.</dd>\n  <dt id="D"><a class="permalink" href="#D"><code class="Fl">-D</code></a>\n    <var class="Ar">name</var>[=<var class="Ar">value</var>],\n    <code class="Fl">--define</code>\n    <var class="Ar">name</var>[=<var class="Ar">value</var>]</dt>\n  <dd>Add a string symbol to the compiled source code. This is equivalent to\n      &#x2018;<code class="Li"><var class="Ar">name</var> <code class="Ic">EQUS\n      &quot;</code><var class="Ar">value</var>&quot;</code>&#x2019; in code, or\n      &#x2018;<code class="Li"><var class="Ar">name</var> <code class="Ic">EQUS\n      &quot;1&quot;</code></code>&#x2019; if <var class="Ar">value</var> is not\n      specified.</dd>\n  <dt id="E"><a class="permalink" href="#E"><code class="Fl">-E</code></a>,\n    <code class="Fl">--export-all</code></dt>\n  <dd>Export all labels, including unreferenced and local labels.</dd>\n  <dt id="g"><a class="permalink" href="#g"><code class="Fl">-g</code></a>\n    <var class="Ar">chars</var>, <code class="Fl">--gfx-chars</code>\n    <var class="Ar">chars</var></dt>\n  <dd>Change the four characters used for gfx constants. The defaults are\n    0123.</dd>\n  <dt id="h"><a class="permalink" href="#h"><code class="Fl">-h</code></a>,\n    <code class="Fl">--halt-without-nop</code></dt>\n  <dd>By default, <code class="Nm">rgbasm</code> inserts a\n      <code class="Ic">nop</code> instruction immediately after any\n      <code class="Ic">halt</code> instruction. The <code class="Fl">-h</code>\n      option disables this behavior.</dd>\n  <dt id="i"><a class="permalink" href="#i"><code class="Fl">-i</code></a>\n    <var class="Ar">path</var>, <code class="Fl">--include</code>\n    <var class="Ar">path</var></dt>\n  <dd>Add an include path.</dd>\n  <dt id="L"><a class="permalink" href="#L"><code class="Fl">-L</code></a>,\n    <code class="Fl">--preserve-ld</code></dt>\n  <dd>Disable the optimization that turns loads of the form <code class="Ic">LD\n      [$FF00+n8],A</code> into the opcode <code class="Ic">LDH\n      [$FF00+n8],A</code> in order to have full control of the result in the\n      final ROM.</dd>\n  <dt id="M"><a class="permalink" href="#M"><code class="Fl">-M</code></a>\n    <var class="Ar">depend_file</var>, <code class="Fl">--dependfile</code>\n    <var class="Ar">depend_file</var></dt>\n  <dd>Print\n      <a class="Xr" href="https://man7.org/linux/man-pages/man1/make.1.html">make(1)</a>\n      dependencies to <var class="Ar">depend_file</var>.</dd>\n  <dt id="MG"><a class="permalink" href="#MG"><code class="Fl">-MG</code></a></dt>\n  <dd>To be used in conjunction with <code class="Fl">-M</code>. This makes\n      <code class="Nm">rgbasm</code> assume that missing files are\n      auto-generated: when <code class="Ic">INCLUDE</code> or\n      <code class="Ic">INCBIN</code> is attempted on a non-existent file, it is\n      added as a dependency, then <code class="Nm">rgbasm</code> exits normally\n      instead of erroring out. This feature is used in automatic updating of\n      makefiles.</dd>\n  <dt id="MP"><a class="permalink" href="#MP"><code class="Fl">-MP</code></a></dt>\n  <dd>When enabled, this causes a phony target to be added for each dependency\n      other than the main file. This prevents\n      <a class="Xr" href="https://man7.org/linux/man-pages/man1/make.1.html">make(1)</a>\n      from erroring out when dependency files are deleted.</dd>\n  <dt id="MT"><a class="permalink" href="#MT"><code class="Fl">-MT</code></a>\n    <var class="Ar">target_file</var></dt>\n  <dd>Add a target to the rules emitted by <code class="Fl">-M</code>. The exact\n      string provided will be written, including spaces and special characters.\n    <div class="Bd Bd-indent"><code class="Li"><code class="Fl">-MT</code>\n      <span class="No">fileA</span> <code class="Fl">-MT</code>\n      <span class="No">fileB</span></code></div>\n    is equivalent to\n    <div class="Bd Bd-indent"><code class="Li"><code class="Fl">-MT</code>\n      <span class="No">\'fileA fileB\'</span></code></div>\n    . If neither this nor <code class="Fl">-MQ</code> is specified, the output\n      file name is used.</dd>\n  <dt id="MQ"><a class="permalink" href="#MQ"><code class="Fl">-MQ</code></a>\n    <var class="Ar">target_file</var></dt>\n  <dd>Same as <code class="Fl">-MT</code>, but additionally escapes any special\n      <a class="Xr" href="https://man7.org/linux/man-pages/man1/make.1.html">make(1)</a>\n      characters, essentially &#x2018;$&#x2019;.</dd>\n  <dt id="o"><a class="permalink" href="#o"><code class="Fl">-o</code></a>\n    <var class="Ar">out_file</var>, <code class="Fl">--output</code>\n    <var class="Ar">out_file</var></dt>\n  <dd>Write an object file to the given filename.</dd>\n  <dt id="p"><a class="permalink" href="#p"><code class="Fl">-p</code></a>\n    <var class="Ar">pad_value</var>, <code class="Fl">--pad-value</code>\n    <var class="Ar">pad_value</var></dt>\n  <dd>When padding an image, pad with this value. The default is 0x00.</dd>\n  <dt id="r"><a class="permalink" href="#r"><code class="Fl">-r</code></a>\n    <var class="Ar">recursion_depth</var>,\n    <code class="Fl">--recursion-depth</code>\n    <var class="Ar">recursion_depth</var></dt>\n  <dd>Specifies the recursion depth at which RGBASM will assume being in an\n      infinite loop.</dd>\n  <dt id="V"><a class="permalink" href="#V"><code class="Fl">-V</code></a>,\n    <code class="Fl">--version</code></dt>\n  <dd>Print the version of the program and exit.</dd>\n  <dt id="v"><a class="permalink" href="#v"><code class="Fl">-v</code></a>,\n    <code class="Fl">--verbose</code></dt>\n  <dd>Be verbose.</dd>\n  <dt id="W"><a class="permalink" href="#W"><code class="Fl">-W</code></a>\n    <var class="Ar">warning</var>, <code class="Fl">--warning</code>\n    <var class="Ar">warning</var></dt>\n  <dd>Set warning flag <var class="Ar">warning</var>. A warning message will be\n      printed if <var class="Ar">warning</var> is an unknown warning flag. See\n      the <a class="Sx" href="#DIAGNOSTICS">DIAGNOSTICS</a> section for a list\n      of warnings.</dd>\n  <dt id="w"><a class="permalink" href="#w"><code class="Fl">-w</code></a></dt>\n  <dd>Disable all warning output, even when turned into errors.</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="DIAGNOSTICS"><a class="permalink" href="#DIAGNOSTICS">DIAGNOSTICS</a></h2>\n<p class="Pp">Warnings are diagnostic messages that indicate possibly erroneous\n    behavior that does not necessarily compromise the assembling process. The\n    following options alter the way warnings are processed.</p>\n<dl class="Bl-tag">\n  <dt id="Werror"><a class="permalink" href="#Werror"><code class="Fl">-Werror</code></a></dt>\n  <dd>Make all warnings into errors.</dd>\n  <dt id="Werror="><a class="permalink" href="#Werror="><code class="Fl">-Werror=</code></a></dt>\n  <dd>Make the specified warning into an error. A warning\'s name is appended\n      (example: <code class="Fl">-Werror=obsolete</code>), and this warning is\n      implicitly enabled and turned into an error. This is an error if used with\n      a meta warning, such as <code class="Fl">-Werror=all</code>.</dd>\n</dl>\n<p class="Pp">The following warnings are &#x201C;meta&#x201D; warnings, that\n    enable a collection of other warnings. If a specific warning is toggled via\n    a meta flag and a specific one, the more specific one takes priority. The\n    position on the command-line acts as a tie breaker, the last one taking\n    effect.</p>\n<dl class="Bl-tag">\n  <dt id="Wall"><a class="permalink" href="#Wall"><code class="Fl">-Wall</code></a></dt>\n  <dd>This enables warnings that are likely to indicate an error or undesired\n      behavior, and that can easily be fixed.</dd>\n  <dt id="Wextra"><a class="permalink" href="#Wextra"><code class="Fl">-Wextra</code></a></dt>\n  <dd>This enables extra warnings that are less likely to pose a problem, but\n      that may still be wanted.</dd>\n  <dt id="Weverything"><a class="permalink" href="#Weverything"><code class="Fl">-Weverything</code></a></dt>\n  <dd>Enables literally every warning.</dd>\n</dl>\n<p class="Pp">The following warnings are actual warning flags; with each\n    description, the corresponding warning flag is included. Note that each of\n    these flag also has a negation (for example,\n    <code class="Fl">-Wcharmap-redef</code> enables the warning that\n    <code class="Fl">-Wno-charmap-redef</code> disables). Only the non-default\n    flag is listed here. Ignoring the &#x201C;no-&#x201D; prefix, entries are\n    listed alphabetically.</p>\n<dl class="Bl-tag">\n  <dt id="Wno-assert"><a class="permalink" href="#Wno-assert"><code class="Fl">-Wno-assert</code></a></dt>\n  <dd>Warn when <code class="Ic">WARN</code><span class="No">-type</span>\n      assertions fail. (See &#x201C;Aborting the assembly process&#x201D; in\n      <a class="Xr" href="./rgbasm.5">rgbasm(5)</a> for\n      <code class="Ic">ASSERT</code>).</dd>\n  <dt id="Wbackwards-for"><a class="permalink" href="#Wbackwards-for"><code class="Fl">-Wbackwards-for</code></a></dt>\n  <dd>Warn when <code class="Ic">FOR</code> loops have their start and stop\n      values switched according to the step value. This warning is enabled by\n      <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wbuiltin-args"><a class="permalink" href="#Wbuiltin-args"><code class="Fl">-Wbuiltin-args</code></a></dt>\n  <dd>Warn about incorrect arguments to built-in functions, such as\n      <code class="Fn">STRSUB</code>() with indexes outside of the string\'s\n      bounds. This warning is enabled by <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wcharmap-redef"><a class="permalink" href="#Wcharmap-redef"><code class="Fl">-Wcharmap-redef</code></a></dt>\n  <dd>Warn when re-defining a charmap mapping. This warning is enabled by\n      <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wdiv"><a class="permalink" href="#Wdiv"><code class="Fl">-Wdiv</code></a></dt>\n  <dd>Warn when dividing the smallest negative integer (-2**31) by -1, which\n      yields itself due to integer overflow.</dd>\n  <dt id="Wempty-macro-arg"><a class="permalink" href="#Wempty-macro-arg"><code class="Fl">-Wempty-macro-arg</code></a></dt>\n  <dd>Warn when a macro argument is empty. This warning is enabled by\n      <code class="Fl">-Wextra</code>.</dd>\n  <dt id="Wempty-strrpl"><a class="permalink" href="#Wempty-strrpl"><code class="Fl">-Wempty-strrpl</code></a></dt>\n  <dd>Warn when <code class="Fn">STRRPL</code>() is called with an empty string\n      as its second argument (the substring to replace). This warning is enabled\n      by <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wlarge-constant"><a class="permalink" href="#Wlarge-constant"><code class="Fl">-Wlarge-constant</code></a></dt>\n  <dd>Warn when a constant too large to fit in a signed 32-bit integer is\n      encountered. This warning is enabled by\n    <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wlong-string"><a class="permalink" href="#Wlong-string"><code class="Fl">-Wlong-string</code></a></dt>\n  <dd>Warn when a string too long to fit in internal buffers is encountered.\n      This warning is enabled by <code class="Fl">-Wall</code>.</dd>\n  <dt id="Wmacro-shift"><a class="permalink" href="#Wmacro-shift"><code class="Fl">-Wmacro-shift</code></a></dt>\n  <dd>Warn when shifting macro arguments past their limits. This warning is\n      enabled by <code class="Fl">-Wextra</code>.</dd>\n  <dt id="Wno-obsolete"><a class="permalink" href="#Wno-obsolete"><code class="Fl">-Wno-obsolete</code></a></dt>\n  <dd>Warn when obsolete constructs such as the <code class="Ic">_PI</code>\n      constant or <code class="Ic">PRINTT</code> directive are encountered.</dd>\n  <dt id="Wnumeric-string="><a class="permalink" href="#Wnumeric-string="><code class="Fl">-Wnumeric-string=</code></a></dt>\n  <dd>Warn when a multi-character string is treated as a number.\n      <code class="Fl">-Wnumeric-string=0</code> or\n      <code class="Fl">-Wno-numeric-string</code> disables this warning.\n      <code class="Fl">-Wnumeric-string=1</code> or just\n      <code class="Fl">-Wnumeric-string</code> warns about strings longer than\n      four characters, since four or fewer characters fit within a 32-bit\n      integer. <code class="Fl">-Wnumeric-string=2</code> warns about any\n      multi-character string.</dd>\n  <dt id="Wshift"><a class="permalink" href="#Wshift"><code class="Fl">-Wshift</code></a></dt>\n  <dd>Warn when shifting right a negative value. Use a division by 2**N\n    instead.</dd>\n  <dt id="Wshift-amount"><a class="permalink" href="#Wshift-amount"><code class="Fl">-Wshift-amount</code></a></dt>\n  <dd>Warn when a shift\'s operand is negative or greater than 32.</dd>\n  <dt id="Wtruncation="><a class="permalink" href="#Wtruncation="><code class="Fl">-Wtruncation=</code></a></dt>\n  <dd>Warn when an implicit truncation (for example, <code class="Ic">db</code>\n      to an 8-bit value) loses some bits. <code class="Fl">-Wtruncation=0</code>\n      or <code class="Fl">-Wno-truncation</code> disables this warning.\n      <code class="Fl">-Wtruncation=1</code> warns when an N-bit value\'s\n      absolute value is 2**N or greater. <code class="Fl">-Wtruncation=2</code>\n      or just <code class="Fl">-Wtruncation</code> also warns when an N-bit\n      value is less than -2**(N-1), which will not fit in two\'s complement\n      encoding.</dd>\n  <dt id="Wno-user"><a class="permalink" href="#Wno-user"><code class="Fl">-Wno-user</code></a></dt>\n  <dd>Warn when the <code class="Ic">WARN</code> built-in is executed. (See\n      &#x201C;Aborting the assembly process&#x201D; in\n      <a class="Xr" href="./rgbasm.5">rgbasm(5)</a> for\n      <code class="Ic">WARN</code>).</dd>\n</dl>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="EXAMPLES"><a class="permalink" href="#EXAMPLES">EXAMPLES</a></h2>\n<p class="Pp">You can assemble a source file in two ways.</p>\n<p class="Pp">Straightforward way:</p>\n<div class="Bd Bd-indent"><code class="Li">$ rgbasm -o bar.o\n  foo.asm</code></div>\n<p class="Pp">Pipes way:</p>\n<div class="Bd Bd-indent"><code class="Li">$ cat foo.asm | rgbasm -o bar.o\n  -</code></div>\n<div class="Bd Bd-indent"><code class="Li">$ rgbasm -o bar.o - &lt;\n  foo.asm</code></div>\n<p class="Pp">The resulting object file is not yet a usable ROM image&#x2014;it\n    must first be run through <a class="Xr" href="./rgblink.1">rgblink(1)</a>\n    and then <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="BUGS"><a class="permalink" href="#BUGS">BUGS</a></h2>\n<p class="Pp">Please report bugs on\n    <a class="Lk" href="https://github.com/gbdev/rgbds/issues">GitHub</a>.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.5">rgbasm(5)</a>,\n    <a class="Xr" href="./rgbfix.1">rgbfix(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.5">rgbds(5)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbasm</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/gbdev/rgbds">https://github.com/gbdev/rgbds</a>.</p>\n</section>\n'}}))}p.isMDXComponent=!0}}]);