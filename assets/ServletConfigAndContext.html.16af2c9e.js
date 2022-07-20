import{d as n}from"./app.388479f4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="servletconfig\u4E0Eservletcontext" tabindex="-1"><a class="header-anchor" href="#servletconfig\u4E0Eservletcontext" aria-hidden="true">#</a> ServletConfig\u4E0EServletContext</h1><h2 id="servletconfig\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#servletconfig\u63A5\u53E3" aria-hidden="true">#</a> ServletConfig\u63A5\u53E3</h2><p>\u4F5C\u7528\uFF1Aservlet \u5BB9\u5668\u7528\u4E8E\u5728\u521D\u59CB\u5316\u671F\u95F4\u5C06\u4FE1\u606F\u4F20\u9012\u7ED9 servlet \u7684 servlet \u914D\u7F6E\u5BF9\u8C61\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServletConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u6B64 servlet \u5B9E\u4F8B\u7684\u540D\u79F0
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServletName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u5BF9\u8C03\u7528\u8005\u6B63\u5728\u5176\u4E2D\u6267\u884C\u7684ServletContext\u7684\u5F15\u7528\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletContext</span> <span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u547D\u540D\u521D\u59CB\u5316\u53C2\u6570\u503C\u7684String \uFF0C\u5982\u679C\u53C2\u6570\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DEnull \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06 servlet \u7684\u521D\u59CB\u5316\u53C2\u6570\u7684\u540D\u79F0\u4F5C\u4E3AString\u5BF9\u8C61\u7684Enumeration\u8FD4\u56DE\uFF0C\u5982\u679C servlet \u6CA1\u6709\u521D\u59CB\u5316\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u7684Enumeration \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getInitParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="servletcontext\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#servletcontext\u63A5\u53E3" aria-hidden="true">#</a> ServletContext\u63A5\u53E3</h2><p>\u4F5C\u7528\uFF1A\u662FServlet\u8FD0\u884C\u73AF\u5883\u4E0A\u4E0B\u6587\u3002\u5B9A\u4E49\u4E00\u7EC4 servlet \u7528\u6765\u4E0E\u5176 servlet \u5BB9\u5668\u901A\u4FE1\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF0C\u83B7\u53D6\u6587\u4EF6\u7684 MIME \u7C7B\u578B\u3001\u5206\u6D3E\u8BF7\u6C42\u6216\u5199\u5165\u65E5\u5FD7\u6587\u4EF6\u3002</p><p>\u6BCF\u4E2A Java \u865A\u62DF\u673A\u7684\u6BCF\u4E2A\u201CWeb \u5E94\u7528\u7A0B\u5E8F\u201D\u90FD\u6709\u4E00\u4E2A\u4E0A\u4E0B\u6587\u3002 \uFF08\u201CWeb \u5E94\u7528\u7A0B\u5E8F\u201D\u662F\u5B89\u88C5\u5728\u670D\u52A1\u5668 URL \u547D\u540D\u7A7A\u95F4\u7684\u7279\u5B9A\u5B50\u96C6\uFF08\u4F8B\u5982/catalog \uFF09\u4E0B\u7684 servlet \u548C\u5185\u5BB9\u7684\u96C6\u5408\uFF0C\u5E76\u4E14\u53EF\u80FD\u901A\u8FC7.war\u6587\u4EF6\u5B89\u88C5\u3002\uFF09 \u5BF9\u4E8E\u5728\u5176\u90E8\u7F72\u63CF\u8FF0\u7B26\u4E2D\u6807\u8BB0\u4E3A\u201C\u5206\u5E03\u5F0F\u201D\u7684 Web \u5E94\u7528\u7A0B\u5E8F\uFF0C\u6BCF\u4E2A\u865A\u62DF\u673A\u5C06\u6709\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5B9E\u4F8B\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u4E0B\u6587\u4E0D\u80FD\u7528\u4F5C\u5171\u4EAB\u5168\u5C40\u4FE1\u606F\u7684\u4F4D\u7F6E\uFF08\u56E0\u4E3A\u4FE1\u606F\u4E0D\u4F1A\u662F\u771F\u6B63\u7684\u5168\u5C40\u4FE1\u606F\uFF09\u3002\u8BF7\u6539\u7528\u6570\u636E\u5E93\u7B49\u5916\u90E8\u8D44\u6E90</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">javax<span class="token punctuation">.</span>servlet</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">MalformedURLException</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>URL<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Enumeration</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">EventListener</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>descriptor<span class="token punctuation">.</span></span><span class="token class-name">JspConfigDescriptor</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServletContext</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> TEMPDIR <span class="token operator">=</span> <span class="token string">&quot;javax.servlet.context.tempdir&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@since</span> Servlet 3.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ORDERED_LIBS <span class="token operator">=</span> <span class="token string">&quot;javax.servlet.context.orderedLibs&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E0E\u6B64\u4E0A\u4E0B\u6587\u5173\u8054\u7684\u4E3B\u8DEF\u5F84
     * <span class="token keyword">@since</span> Servlet 2.5
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u5BF9\u5E94\u4E8E\u670D\u52A1\u5668\u4E0A\u6307\u5B9A URL\u8DEF\u5F84 \u7684ServletContext\u5BF9\u8C61\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletContext</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token class-name">String</span> uripath<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6B64 servlet \u5BB9\u5668\u652F\u6301\u7684 Java Servlet API \u7684\u4E3B\u8981\u7248\u672C\u3002\u6211\u8FD9\u7248\u672C\u5FC5\u987B\u8FD4\u56DE4
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMajorVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u6B64 servlet \u5BB9\u5668\u652F\u6301\u7684 Servlet API \u7684\u6B21\u8981\u7248\u672C\u3002\u6211\u8FD9\u7248\u672C\u5FC5\u987B\u8FD4\u56DE0
     * <span class="token keyword">@return</span> 0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMinorVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> TODO
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getEffectiveMajorVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> TODO
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getEffectiveMinorVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u6307\u5B9A\u6587\u4EF6\u7684 MIME \u7C7B\u578B\uFF0C\u5982\u679C MIME \u7C7B\u578B\u672A\u77E5\uFF0C\u5219\u8FD4\u56DEnull \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token class-name">String</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u6240\u6709\u8D44\u6E90\u8DEF\u5F84\u7684\u7C7B\u76EE\u5F55\u5217\u8868\uFF0C\u5176\u4E2D\u6700\u957F\u7684\u5B50\u8DEF\u5F84\u4E0E\u63D0\u4F9B\u7684\u8DEF\u5F84\u53C2\u6570\u5339\u914D\u3002
     * <span class="token keyword">@since</span> Servlet 2.3
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getResourcePaths</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u6620\u5C04\u5230\u6307\u5B9A\u8DEF\u5F84\u7684\u8D44\u6E90\u7684 URL\u3002\u8DEF\u5F84\u5FC5\u987B\u4EE5\u201C/\u201D\u5F00\u5934\uFF0C\u5E76\u88AB\u89E3\u91CA\u4E3A\u76F8\u5BF9\u4E8E\u5F53\u524D\u4E0A\u4E0B\u6587\u6839\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">URL</span> <span class="token function">getResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MalformedURLException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u4F4D\u4E8E\u547D\u540D\u8DEF\u5F84\u7684\u8D44\u6E90\u4F5C\u4E3AInputStream\u5BF9\u8C61\u8FD4\u56DE
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">InputStream</span> <span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E00\u4E2ARequestDispatcher\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5145\u5F53\u4F4D\u4E8E\u7ED9\u5B9A\u8DEF\u5F84\u7684\u8D44\u6E90\u7684\u5305\u88C5\u5668\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestDispatcher</span> <span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E00\u4E2ARequestDispatcher\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5145\u5F53\u547D\u540D servlet \u7684\u5305\u88C5\u5668\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestDispatcher</span> <span class="token function">getNamedDispatcher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F03\u7528\u7684\u3002\u6B64\u65B9\u6CD5\u6700\u521D\u5B9A\u4E49\u4E3A\u4ECEServletContext\u68C0\u7D22 servlet\u3002\u5728\u6B64\u7248\u672C\u4E2D\uFF0C\u6B64\u65B9\u6CD5\u59CB\u7EC8\u8FD4\u56DEnull\u5E76\u4E14\u4EC5\u4FDD\u7559\u4E8C\u8FDB\u5236\u517C\u5BB9\u6027\u3002\u6B64\u65B9\u6CD5\u5C06\u5728 Java Servlet API \u7684\u672A\u6765\u7248\u672C\u4E2D\u6C38\u4E45\u5220\u9664\u3002
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Servlet</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F03\u7528\u7684\u3002\u6B64\u65B9\u6CD5\u6700\u521D\u5B9A\u4E49\u4E3A\u8FD4\u56DE\u6B64 servlet \u4E0A\u4E0B\u6587\u5DF2\u77E5\u7684\u6240\u6709 servlet \u7684Enumeration \u3002
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Servlet</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServlets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F03\u7528\u7684\u3002\u6B64\u65B9\u6CD5\u6700\u521D\u88AB\u5B9A\u4E49\u4E3A\u8FD4\u56DE\u6B64\u4E0A\u4E0B\u6587\u5DF2\u77E5\u7684\u6240\u6709 servlet \u540D\u79F0\u7684Enumeration \u3002
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServletNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u6307\u5B9A\u7684\u6D88\u606F\u5199\u5165 servlet \u65E5\u5FD7\u6587\u4EF6\uFF0C\u901A\u5E38\u662F\u4E8B\u4EF6\u65E5\u5FD7\u3002 servlet \u65E5\u5FD7\u6587\u4EF6\u7684\u540D\u79F0\u548C\u7C7B\u578B\u7279\u5B9A\u4E8E servlet \u5BB9\u5668\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5DF2\u5F03\u7528\u3002\u4ECE Java Servlet API 2.1 \u5F00\u59CB\uFF0C\u8BF7\u6539\u7528log
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u7ED9\u5B9AThrowable\u5F02\u5E38\u7684\u89E3\u91CA\u6027\u6D88\u606F\u548C\u5806\u6808\u8DDF\u8E2A\u5199\u5165 servlet \u65E5\u5FD7\u6587\u4EF6\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u5305\u542B\u7ED9\u5B9A\u865A\u62DF\u8DEF\u5F84\u7684\u771F\u5B9E\u8DEF\u5F84\u7684String \u3002
     * \u4F8B\u5982\uFF0C\u8DEF\u5F84\u201C/index.html\u201D\u8FD4\u56DE\u670D\u52A1\u5668\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u7684\u7EDD\u5BF9\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5C06\u7531\u5BF9\u201Chttp://host/contextPath/index.html\u201D\u7684\u8BF7\u6C42\u63D0\u4F9B\u670D\u52A1\uFF0C
     * \u5176\u4E2D contextPath \u662F\u6B64 ServletContext \u7684\u4E0A\u4E0B\u6587\u8DEF\u5F84.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u8FD0\u884C servlet \u7684 servlet \u5BB9\u5668\u7684\u540D\u79F0\u548C\u7248\u672C\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServerInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u5305\u542B\u547D\u540D\u4E0A\u4E0B\u6587\u8303\u56F4\u521D\u59CB\u5316\u53C2\u6570\u503C\u7684String \uFF0C\u5982\u679C\u53C2\u6570\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DEnull \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u4E0A\u4E0B\u6587\u521D\u59CB\u5316\u53C2\u6570\u7684\u540D\u79F0\u4F5C\u4E3AString\u5BF9\u8C61\u7684Enumeration\u8FD4\u56DE\uFF0C\u5982\u679C\u4E0A\u4E0B\u6587\u6CA1\u6709\u521D\u59CB\u5316\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u7A7AEnumeration \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getInitParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u7ED9\u5B9A\u7684\u521D\u59CB\u5316\u53C2\u6570\u8BBE\u7F6E\u4E3A\u7ED9\u5B9A\u7684\u503C\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">setInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u5177\u6709\u7ED9\u5B9A\u540D\u79F0\u7684 servlet \u5BB9\u5668\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u8BE5\u540D\u79F0\u7684\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DEnull \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E00\u4E2AEnumeration \uFF0C\u5176\u4E2D\u5305\u542B\u6B64 servlet \u4E0A\u4E0B\u6587\u4E2D\u53EF\u7528\u7684\u5C5E\u6027\u540D\u79F0\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAttributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u5BF9\u8C61\u7ED1\u5B9A\u5230\u6B64 servlet \u4E0A\u4E0B\u6587\u4E2D\u7684\u7ED9\u5B9A\u5C5E\u6027\u540D\u79F0\u3002\u5982\u679C\u6307\u5B9A\u7684\u540D\u79F0\u5DF2\u7528\u4E8E\u67D0\u4E2A\u5C5E\u6027\uFF0C\u5219\u6B64\u65B9\u6CD5\u5C06\u7528\u65B0\u5C5E\u6027\u66FF\u6362\u8BE5\u5C5E\u6027\u3002
     * \u5982\u679C\u5728ServletContext\u4E0A\u914D\u7F6E\u4E86\u4FA6\u542C\u5668\uFF0C\u5219\u5BB9\u5668\u4F1A\u76F8\u5E94\u5730\u901A\u77E5\u5B83\u4EEC\u3002
     * \u5982\u679C\u4F20\u9012\u4E86\u7A7A\u503C\uFF0C\u5219\u6548\u679C\u4E0E\u8C03\u7528removeAttribute()\u76F8\u540C\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4ECE servlet \u4E0A\u4E0B\u6587\u4E2D\u5220\u9664\u5177\u6709\u7ED9\u5B9A\u540D\u79F0\u7684\u5C5E\u6027\u3002\u5220\u9664\u540E\uFF0C\u540E\u7EED\u8C03\u7528getAttribute\u4EE5\u68C0\u7D22\u5C5E\u6027\u503C\u5C06\u8FD4\u56DEnull \u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u4E0E\u6B64 ServletContext \u5BF9\u5E94\u7684\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u540D\u79F0\uFF0C\u8BE5\u540D\u79F0\u5728\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u90E8\u7F72\u63CF\u8FF0\u7B26\u4E2D\u7531 display-name \u5143\u7D20\u6307\u5B9A\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServletContextName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u518C\u4E00\u4E2A servlet \u5B9E\u73B0\u4EE5\u5728\u6B64 ServletContext \u4E2D\u4F7F\u7528
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">,</span> <span class="token class-name">String</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u518C\u4E00\u4E2A servlet \u5B9E\u4F8B\u4EE5\u5728\u6B64 ServletContext \u4E2D\u4F7F\u7528\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">,</span> <span class="token class-name">Servlet</span> servlet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u518C\u4E00\u4E2A servlet \u5B9E\u4F8B\u4EE5\u5728\u6B64 ServletContext \u4E2D\u4F7F\u7528\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">,</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Servlet</span><span class="token punctuation">&gt;</span></span> servletClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">jspName</span>   The servlet name under which this JSP file should be
     *                  registered
     * <span class="token keyword">@param</span> <span class="token parameter">jspFile</span>   The path, relative to the web application root, for the
     *                  JSP file to be used for this servlet
     *
     * <span class="token keyword">@return</span>  a <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistration</span><span class="token punctuation">.</span><span class="token class-name">Dynamic</span></span><span class="token punctuation">}</span> object
     *          that can be used to further configure the servlet
     *
     * <span class="token keyword">@since</span> Servlet 4.0
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addJspFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> jspName<span class="token punctuation">,</span> <span class="token class-name">String</span> jspFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Servlet</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">createServlet</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u547D\u540D servlet \u7684\u8BE6\u7EC6\u4FE1\u606F
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration</span> <span class="token function">getServletRegistration</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">ServletRegistration</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServletRegistrations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u8FC7\u6EE4\u5668\u6DFB\u52A0\u5230\u4E0A\u4E0B\u6587
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">,</span> <span class="token class-name">String</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u8FC7\u6EE4\u5668\u6DFB\u52A0\u5230\u4E0A\u4E0B\u6587
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">,</span> <span class="token class-name">Filter</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5C06\u8FC7\u6EE4\u5668\u6DFB\u52A0\u5230\u4E0A\u4E0B\u6587
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">,</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span><span class="token punctuation">&gt;</span></span> filterClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">createFilter</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration</span> <span class="token function">getFilterRegistration</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">FilterRegistration</span><span class="token punctuation">&gt;</span></span> <span class="token function">getFilterRegistrations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">SessionCookieConfig</span> <span class="token function">getSessionCookieConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u914D\u7F6E\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u53EF\u7528\u4F1A\u8BDD\u8DDF\u8E2A\u6A21\u5F0F
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSessionTrackingModes</span><span class="token punctuation">(</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SessionTrackingMode</span><span class="token punctuation">&gt;</span></span> sessionTrackingModes<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u9ED8\u8BA4\u4F1A\u8BDD\u8DDF\u8E2A\u6A21\u5F0F
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SessionTrackingMode</span><span class="token punctuation">&gt;</span></span> <span class="token function">getDefaultSessionTrackingModes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u5F53\u524D\u542F\u7528\u7684\u4F1A\u8BDD\u8DDF\u8E2A\u6A21\u5F0F\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SessionTrackingMode</span><span class="token punctuation">&gt;</span></span> <span class="token function">getEffectiveSessionTrackingModes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">String</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span><span class="token punctuation">&gt;</span></span> listenerClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">createListener</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">JspConfigDescriptor</span> <span class="token function">getJspConfigDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u4E0E\u6B64 ServletContext \u5173\u8054\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ClassLoader</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6DFB\u52A0\u5230\u6B64 ServletContext \u7684\u58F0\u660E\u89D2\u8272
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">declareRoles</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> roleNames<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u90E8\u7F72\u6B64\u4E0A\u4E0B\u6587\u7684\u865A\u62DF\u4E3B\u673A\u7684\u4E3B\u540D\u79F0\u3002\u8BE5\u540D\u79F0\u53EF\u80FD\u662F\u4E5F\u53EF\u80FD\u4E0D\u662F\u6709\u6548\u7684\u4E3B\u673A\u540D
     *
     * <span class="token keyword">@return</span> The primary name of the virtual host on which this context is
     *         deployed
     * <span class="token keyword">@since</span> Servlet 3.1
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getVirtualServerName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u9ED8\u8BA4\u4F1A\u8BDD\u8D85\u65F6\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSessionTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u9ED8\u8BA4\u4F1A\u8BDD\u8D85\u65F6\u3002\u6B64\u65B9\u6CD5\u53EA\u80FD\u5728 ServletContext \u521D\u59CB\u5316\u4E4B\u524D\u8C03\u7528\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSessionTimeout</span><span class="token punctuation">(</span><span class="token keyword">int</span> sessionTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u8BFB\u53D6\u8BF7\u6C42\u6B63\u6587\u7684\u9ED8\u8BA4\u5B57\u7B26\u7F16\u7801\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRequestCharacterEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u7528\u4E8E\u8BFB\u53D6\u8BF7\u6C42\u6B63\u6587\u7684\u9ED8\u8BA4\u5B57\u7B26\u7F16\u7801\u3002\u8C03\u7528\u6B64\u65B9\u6CD5\u5C06\u8986\u76D6\u90E8\u7F72\u63CF\u8FF0\u7B26\u4E2D\u8BBE\u7F6E\u7684\u4EFB\u4F55\u503C\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRequestCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">String</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u7528\u4E8E\u7F16\u5199\u54CD\u5E94\u6B63\u6587\u7684\u9ED8\u8BA4\u5B57\u7B26\u7F16\u7801\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getResponseCharacterEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u7528\u4E8E\u7F16\u5199\u54CD\u5E94\u6B63\u6587\u7684\u9ED8\u8BA4\u5B57\u7B26\u7F16\u7801\u3002\u8C03\u7528\u6B64\u65B9\u6CD5\u5C06\u8986\u76D6\u90E8\u7F72\u63CF\u8FF0\u7B26\u4E2D\u8BBE\u7F6E\u7684\u4EFB\u4F55\u503C\u3002
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setResponseCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">String</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br></div></div>`,8);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
