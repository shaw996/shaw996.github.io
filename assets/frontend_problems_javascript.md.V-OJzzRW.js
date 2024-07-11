import{_ as t,o as i,c as o,R as e,k as s,a}from"./chunks/framework.S8W019Nk.js";const f=JSON.parse('{"title":"遇到的关于Javascript的一些问题 & 解决方法","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/problems/javascript.md","filePath":"frontend/problems/javascript.md"}'),n={name:"frontend/problems/javascript.md"},l=e('<h1 id="遇到的关于javascript的一些问题-解决方法" tabindex="-1">遇到的关于Javascript的一些问题 &amp; 解决方法 <a class="header-anchor" href="#遇到的关于javascript的一些问题-解决方法" aria-label="Permalink to &quot;遇到的关于Javascript的一些问题 &amp; 解决方法&quot;">​</a></h1><h2 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h2><h3 id="window-open为什么会复制sessionstorage" tabindex="-1">window.open为什么会复制sessionStorage？ <a class="header-anchor" href="#window-open为什么会复制sessionstorage" aria-label="Permalink to &quot;window.open为什么会复制sessionStorage？&quot;">​</a></h3><p>根据HTML规范:</p>',4),r=s("ul",null,[s("li",null,[a("window.open会将"),s("span",{hl:""},"原文档(sourceDocument)"),a("作为新打开窗口的全局对象的"),s("span",{hl:""},"关联文档"),a("。")]),s("li",null,[a("获取sessionStorage时，如果"),s("span",{hl:""},"关联文档"),a("的sessionStorage不为空，则复制一份关联文档的sessionStorage并返回。")])],-1),p=e('<blockquote><p>想要打开新窗口时不复制sessionStorage该如何做？</p></blockquote><p>使用<code>a</code>标签跳转：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.com&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Example&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>',3),h=s("p",null,[s("span",{hlbg:""},"参考链接：")],-1),d=s("ul",null,[s("li",null,[s("a",{href:"https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-open-dev",target:"_blank",rel:"noreferrer"},"HTML规范 #dom-open-dev")]),s("li",null,[s("a",{href:"https://html.spec.whatwg.org/multipage/webstorage.html#dom-sessionstorage-dev",target:"_blank",rel:"noreferrer"},"HTML规范 #dom-sessionstorage-dev")])],-1),c=[l,r,p,h,d];function _(k,g,m,u,E,v){return i(),o("div",null,c)}const T=t(n,[["render",_]]);export{f as __pageData,T as default};