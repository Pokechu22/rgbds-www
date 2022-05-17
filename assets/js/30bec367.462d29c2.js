"use strict";(self.webpackChunkrgbds_www_2=self.webpackChunkrgbds_www_2||[]).push([[5767],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var s=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(t),m=a,p=h["".concat(c,".").concat(m)]||h[m]||f[m]||r;return t?s.createElement(p,i(i({ref:n},d),{},{components:t})):s.createElement(p,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6176:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return f}});var s=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],o={},c="rgbds(5) \u2014 object file format documentation",l={unversionedId:"rgbds.5",id:"version-v0.4.1/rgbds.5",title:"rgbds(5) \u2014 object file format documentation",description:"",source:"@site/versioned_docs/version-v0.4.1/rgbds.5.md",sourceDirName:".",slug:"/rgbds.5",permalink:"/docs/v0.4.1/rgbds.5",draft:!1,editUrl:"https://github.com/gbdev/rgbds/edit/master/man/rgbds.5",tags:[],version:"v0.4.1",frontMatter:{},sidebar:"nav",previous:{title:"rgblink(5) \u2014 linker script file format",permalink:"/docs/v0.4.1/rgblink.5"},next:{title:"rgbasm(1) \u2014 Game Boy assembler",permalink:"/docs/v0.4.1/rgbasm.1"}},d={},f=[{value:"DESCRIPTION",id:"DESCRIPTION",level:2,children:[]},{value:"FILE STRUCTURE",id:"FILE_STRUCTURE",level:2,children:[{value:"RPN DATA",id:"RPN_DATA",level:3,children:[]}]},{value:"SEE ALSO",id:"SEE_ALSO",level:2,children:[]},{value:"HISTORY",id:"HISTORY",level:2,children:[]}],h={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbds5--object-file-format-documentation"},"rgbds(5) \u2014 object file format documentation"),(0,r.kt)("div",{className:"manual-text",dangerouslySetInnerHTML:{__html:'<section class="Sh">\n<h2 class="Sh" id="DESCRIPTION"><a class="permalink" href="#DESCRIPTION">DESCRIPTION</a></h2>\n<p class="Pp">This is the description of the object files used by\n    <a class="Xr" href="./rgbasm.1">rgbasm(1)</a> and\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>.\n    <a class="permalink" href="#Please"><i class="Em" id="Please">Please note\n    that the specifications may change.</i></a> This toolchain is in development\n    and new features may require adding more information to the current format,\n    or modifying some fields, which would break compatibility with older\n    versions.</p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="FILE_STRUCTURE"><a class="permalink" href="#FILE_STRUCTURE">FILE\n  STRUCTURE</a></h2>\n<p class="Pp">The following types are used:</p>\n<p class="Pp"><var class="Ar">LONG</var> is a 32&#x2010;bit integer stored in\n    little&#x2010;endian format. <var class="Ar">BYTE</var> is an 8&#x2010;bit\n    integer. <var class="Ar">STRING</var> is a 0&#x2010;terminated string of\n    <var class="Ar">BYTE</var>.</p>\n<div class="Bd Pp Li">\n<pre>; Header\n\nBYTE    ID[4]            ; &quot;RGB9&quot;\nLONG    RevisionNumber   ; The format\'s revision number this file uses\nLONG    NumberOfSymbols  ; The number of symbols used in this file\nLONG    NumberOfSections ; The number of sections used in this file\n\n; Symbols\n\nREPT    NumberOfSymbols   ; Number of symbols defined in this object file.\n\n    STRING  Name          ; The name of this symbol. Local symbols are stored\n                          ; as &quot;Scope.Symbol&quot;.\n\n    BYTE    Type          ; 0 = LOCAL symbol only used in this file.\n                          ; 1 = IMPORT this symbol from elsewhere\n                          ; 2 = EXPORT this symbol to other objects.\n                          ; Bit 7 is independent from the above value, and\n                          ; encodes whether the section is unionized\n\n    IF (Type &amp; 0x7F) != 1 ; If symbol is defined in this object file.\n\n        STRING  FileName  ; File where the symbol is defined.\n\n        LONG    LineNum   ; Line number in the file where the symbol is defined.\n\n        LONG    SectionID ; The section number (of this object file) in which\n                          ; this symbol is defined. If it doesn\'t belong to any\n                          ; specific section (like a constant), this field has\n                          ; the value -1.\n\n        LONG    Value     ; The symbols value. It\'s the offset into that\n                          ; symbol\'s section.\n\n    ENDC\n\nENDR\n\n; Sections\n\nREPT NumberOfSections\n    STRING  Name  ; Name of the section\n\n    LONG    Size  ; Size in bytes of this section\n\n    BYTE    Type  ; 0 = WRAM0\n                  ; 1 = VRAM\n                  ; 2 = ROMX\n                  ; 3 = ROM0\n                  ; 4 = HRAM\n                  ; 5 = WRAMX\n                  ; 6 = SRAM\n                  ; 7 = OAM\n\n    LONG    Org   ; Address to fix this section at. -1 if the linker should\n                  ; decide (floating address).\n\n    LONG    Bank  ; Bank to load this section into. -1 if the linker should\n                  ; decide (floating bank). This field is only valid for ROMX,\n                  ; VRAM, WRAMX and SRAM sections.\n\n    BYTE    Align ; Alignment of this section, as N bits. 0 when not specified.\n\n    LONG    Ofs   ; Offset relative to the alignment specified above.\n                  ; Must be below 1 &lt;&lt; Align.\n\n    IF      (Type == ROMX) || (Type == ROM0) ; Sections that can contain data.\n\n        BYTE    Data[Size]      ; Raw data of the section.\n\n        LONG    NumberOfPatches ; Number of patches to apply.\n\n        REPT    NumberOfPatches\n\n            STRING  SourceFile   ; Name of the source file (for printing error\n                                 ; messages).\n\n            LONG    Offset       ; Offset into the section where patch should\n                                 ; be applied (in bytes).\n\n            LONG    PCSectionID  ; Index within the file of the section in which\n                                 ; PC is located.\n                                 ; This is usually the same section that the\n                                 ; patch should be applied into, except e.g.\n                                 ; with LOAD blocks.\n\n            LONG    PCOffset     ; PC\'s offset into the above section.\n                                 ; Used because the section may be floating, so\n                                 ; PC\'s value is not known to RGBASM.\n\n            BYTE    Type         ; 0 = BYTE patch.\n                                 ; 1 = little endian WORD patch.\n                                 ; 2 = little endian LONG patch.\n                                 ; 3 = JR offset value BYTE patch.\n\n            LONG    RPNSize      ; Size of the buffer with the RPN.\n                                 ; expression.\n\n            BYTE    RPN[RPNSize] ; RPN expression. Definition below.\n\n        ENDR\n\n    ENDC\n\nENDR\n\n; Assertions\n\nLONG  NumberOfAssertions\n\nREPT  NumberOfAssertions\n\n  STRING  SourceFile   ; Name of the source file (for printing the failure).\n\n  LONG    Offset       ; Offset into the section where the assertion is located.\n\n  LONG    SectionID    ; Index within the file of the section in which PC is\n                       ; located, or -1 if defined outside a section.\n\n  LONG    PCOffset     ; PC\'s offset into the above section.\n                       ; Used because the section may be floating, so PC\'s value\n                       ; is not known to RGBASM.\n\n  BYTE    Type         ; 0 = Prints the message but allows linking to continue\n                       ; 1 = Prints the message and evaluates other assertions,\n                       ;     but linking fails afterwards\n                       ; 2 = Prints the message and immediately fails linking\n\n  LONG    RPNSize      ; Size of the RPN expression\'s buffer.\n\n  BYTE    RPN[RPNSize] ; RPN expression, same as patches. Assert fails if == 0.\n\n  STRING  Message      ; A message displayed when the assert fails. If set to\n                       ; the empty string, a generic message is printed instead.\n\nENDR</pre>\n</div>\n<section class="Ss">\n<h3 class="Ss" id="RPN_DATA"><a class="permalink" href="#RPN_DATA">RPN\n  DATA</a></h3>\n<p class="Pp">Expressions in the object file are stored as RPN. This is an\n    expression of the form &#x201C;2 5 +&#x201D;. This will first push the value\n    &#x201C;2&#x201D; to the stack, then &#x201C;5&#x201D;. The\n    &#x201C;+&#x201D; operator pops two arguments from the stack, adds them, and\n    then pushes the result on the stack, effectively replacing the two top\n    arguments with their sum. In the RGB format, RPN expressions are stored as\n    <var class="Ar">BYTE</var>s with some bytes being special prefixes for\n    integers and symbols.</p>\n<table class="Bl-column Bd-indent">\n  <tr id="Value">\n    <td><a class="permalink" href="#Value"><b class="Sy">Value</b></a></td>\n    <td><a class="permalink" href="#Meaning"><b class="Sy" id="Meaning">Meaning</b></a></td>\n  </tr>\n  <tr id="$00">\n    <td><a class="permalink" href="#$00"><code class="Li">$00</code></a></td>\n    <td><a class="permalink" href="#+"><code class="Li" id="+">+\n      operator</code></a></td>\n  </tr>\n  <tr id="$01">\n    <td><a class="permalink" href="#$01"><code class="Li">$01</code></a></td>\n    <td><code class="Li">- operator</code></td>\n  </tr>\n  <tr id="$02">\n    <td><a class="permalink" href="#$02"><code class="Li">$02</code></a></td>\n    <td><a class="permalink" href="#*"><code class="Li" id="*">*\n      operator</code></a></td>\n  </tr>\n  <tr id="$03">\n    <td><a class="permalink" href="#$03"><code class="Li">$03</code></a></td>\n    <td><a class="permalink" href="#/"><code class="Li" id="/">/\n      operator</code></a></td>\n  </tr>\n  <tr id="$04">\n    <td><a class="permalink" href="#$04"><code class="Li">$04</code></a></td>\n    <td><a class="permalink" href="#_"><code class="Li" id="_">%\n      operator</code></a></td>\n  </tr>\n  <tr id="$05">\n    <td><a class="permalink" href="#$05"><code class="Li">$05</code></a></td>\n    <td><a class="permalink" href="#unary"><code class="Li" id="unary">unary\n      -</code></a></td>\n  </tr>\n  <tr id="$10">\n    <td><a class="permalink" href="#$10"><code class="Li">$10</code></a></td>\n    <td>|\n      <a class="permalink" href="#operator"><code class="Li" id="operator">operator</code></a></td>\n  </tr>\n  <tr id="$11">\n    <td><a class="permalink" href="#$11"><code class="Li">$11</code></a></td>\n    <td><a class="permalink" href="#&amp;"><code class="Li" id="&amp;">&amp;\n      operator</code></a></td>\n  </tr>\n  <tr id="$12">\n    <td><a class="permalink" href="#$12"><code class="Li">$12</code></a></td>\n    <td><a class="permalink" href="#_~2"><code class="Li" id="_~2">^\n      operator</code></a></td>\n  </tr>\n  <tr id="$13">\n    <td><a class="permalink" href="#$13"><code class="Li">$13</code></a></td>\n    <td><a class="permalink" href="#unary~2"><code class="Li" id="unary~2">unary\n      ~</code></a></td>\n  </tr>\n  <tr id="$21">\n    <td><a class="permalink" href="#$21"><code class="Li">$21</code></a></td>\n    <td><a class="permalink" href="#&amp;&amp;"><code class="Li" id="&amp;&amp;">&amp;&amp;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$22">\n    <td><a class="permalink" href="#$22"><code class="Li">$22</code></a></td>\n    <td><a class="permalink" href="#__"><code class="Li" id="__">||\n      comparison</code></a></td>\n  </tr>\n  <tr id="$23">\n    <td><a class="permalink" href="#$23"><code class="Li">$23</code></a></td>\n    <td><a class="permalink" href="#unary~3"><code class="Li" id="unary~3">unary&#x00A0;!</code></a></td>\n  </tr>\n  <tr id="$30">\n    <td><a class="permalink" href="#$30"><code class="Li">$30</code></a></td>\n    <td><a class="permalink" href="#=="><code class="Li" id="==">==\n      comparison</code></a></td>\n  </tr>\n  <tr id="$31">\n    <td><a class="permalink" href="#$31"><code class="Li">$31</code></a></td>\n    <td><a class="permalink" href="#!="><code class="Li" id="!=">!=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$32">\n    <td><a class="permalink" href="#$32"><code class="Li">$32</code></a></td>\n    <td><a class="permalink" href="#_~3"><code class="Li" id="_~3">&gt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$33">\n    <td><a class="permalink" href="#$33"><code class="Li">$33</code></a></td>\n    <td><a class="permalink" href="#_~4"><code class="Li" id="_~4">&lt;\n      comparison</code></a></td>\n  </tr>\n  <tr id="$34">\n    <td><a class="permalink" href="#$34"><code class="Li">$34</code></a></td>\n    <td><a class="permalink" href="#_="><code class="Li" id="_=">&gt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$35">\n    <td><a class="permalink" href="#$35"><code class="Li">$35</code></a></td>\n    <td><a class="permalink" href="#_=~2"><code class="Li" id="_=~2">&lt;=\n      comparison</code></a></td>\n  </tr>\n  <tr id="$40">\n    <td><a class="permalink" href="#$40"><code class="Li">$40</code></a></td>\n    <td><a class="permalink" href="#__~2"><code class="Li" id="__~2">&lt;&lt;\n      operator</code></a></td>\n  </tr>\n  <tr id="$41">\n    <td><a class="permalink" href="#$41"><code class="Li">$41</code></a></td>\n    <td><a class="permalink" href="#__~3"><code class="Li" id="__~3">&gt;&gt;\n      operator</code></a></td>\n  </tr>\n  <tr id="$50">\n    <td><a class="permalink" href="#$50"><code class="Li">$50</code></a></td>\n    <td><a class="permalink" href="#BANK(symbol)"><code class="Li" id="BANK(symbol)">BANK(symbol)</code></a>,\n      a <var class="Ar">LONG</var> Symbol ID follows.</td>\n  </tr>\n  <tr id="$51">\n    <td><a class="permalink" href="#$51"><code class="Li">$51</code></a></td>\n    <td><a class="permalink" href="#BANK(section_name)"><code class="Li" id="BANK(section_name)">BANK(section_name)</code></a>,\n      a null-terminated string follows.</td>\n  </tr>\n  <tr id="$52">\n    <td><a class="permalink" href="#$52"><code class="Li">$52</code></a></td>\n    <td><a class="permalink" href="#Current"><code class="Li" id="Current">Current\n      BANK()</code></a></td>\n  </tr>\n  <tr id="$60">\n    <td><a class="permalink" href="#$60"><code class="Li">$60</code></a></td>\n    <td><a class="permalink" href="#HRAMCheck"><code class="Li" id="HRAMCheck">HRAMCheck</code></a>.\n      Checks if the value is in HRAM, ANDs it with 0xFF.</td>\n  </tr>\n  <tr id="$61">\n    <td><a class="permalink" href="#$61"><code class="Li">$61</code></a></td>\n    <td><a class="permalink" href="#RSTCheck"><code class="Li" id="RSTCheck">RSTCheck</code></a>.\n      Checks if the value is a RST vector, ORs it with 0xC7.</td>\n  </tr>\n  <tr id="$80">\n    <td><a class="permalink" href="#$80"><code class="Li">$80</code></a></td>\n    <td><var class="Ar">LONG</var> integer follows.</td>\n  </tr>\n  <tr id="$81">\n    <td><a class="permalink" href="#$81"><code class="Li">$81</code></a></td>\n    <td><var class="Ar">LONG</var> symbol ID follows.</td>\n  </tr>\n</table>\n</section>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="SEE_ALSO"><a class="permalink" href="#SEE_ALSO">SEE\n  ALSO</a></h2>\n<p class="Pp"><a class="Xr" href="./rgbasm.1">rgbasm(1)</a>,\n    <a class="Xr" href="./rgblink.1">rgblink(1)</a>,\n    <a class="Xr" href="./rgbds.7">rgbds(7)</a>,\n    <a class="Xr" href="./gbz80.7">gbz80(7)</a></p>\n</section>\n<section class="Sh">\n<h2 class="Sh" id="HISTORY"><a class="permalink" href="#HISTORY">HISTORY</a></h2>\n<p class="Pp"><code class="Nm">rgbds</code> was originally written by Carsten\n    S&#x00F8;rensen as part of the ASMotor package, and was later packaged in\n    RGBDS by Justin Lloyd. It is now maintained by a number of contributors at\n    <a class="Lk" href="https://github.com/rednex/rgbds">https://github.com/rednex/rgbds</a>.</p>\n</section>\n'}}))}m.isMDXComponent=!0}}]);