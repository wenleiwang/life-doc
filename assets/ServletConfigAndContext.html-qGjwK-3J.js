import{_ as c,r as p,o as l,c as i,b as n,e,w as t,d as s,a as o}from"./app-7rGY8hGP.js";const u={},d=n("h1",{id:"servletconfig与servletcontext",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#servletconfig与servletcontext","aria-hidden":"true"},"#"),s(" ServletConfig与ServletContext")],-1),r={class:"table-of-contents"},v=o(`<h2 id="servletconfig接口" tabindex="-1"><a class="header-anchor" href="#servletconfig接口" aria-hidden="true">#</a> ServletConfig接口</h2><p>作用：servlet 容器用于在初始化期间将信息传递给 servlet 的 servlet 配置对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServletConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 返回此 servlet 实例的名称
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServletName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回对调用者正在其中执行的ServletContext的引用。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletContext</span> <span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回一个包含命名初始化参数值的String ，如果参数不存在，则返回null 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将 servlet 的初始化参数的名称作为String对象的Enumeration返回，如果 servlet 没有初始化参数，则返回一个空的Enumeration 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getInitParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="servletcontext接口" tabindex="-1"><a class="header-anchor" href="#servletcontext接口" aria-hidden="true">#</a> ServletContext接口</h2><p>作用：是Servlet运行环境上下文。定义一组 servlet 用来与其 servlet 容器通信的方法，例如，获取文件的 MIME 类型、分派请求或写入日志文件。</p><p>每个 Java 虚拟机的每个“Web 应用程序”都有一个上下文。 （“Web 应用程序”是安装在服务器 URL 命名空间的特定子集（例如/catalog ）下的 servlet 和内容的集合，并且可能通过.war文件安装。） 对于在其部署描述符中标记为“分布式”的 Web 应用程序，每个虚拟机将有一个上下文实例。在这种情况下，上下文不能用作共享全局信息的位置（因为信息不会是真正的全局信息）。请改用数据库等外部资源</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">javax<span class="token punctuation">.</span>servlet</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">MalformedURLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URL</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Enumeration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">EventListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>descriptor<span class="token punctuation">.</span></span><span class="token class-name">JspConfigDescriptor</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServletContext</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">TEMPDIR</span> <span class="token operator">=</span> <span class="token string">&quot;javax.servlet.context.tempdir&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@since</span> Servlet 3.0
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ORDERED_LIBS</span> <span class="token operator">=</span> <span class="token string">&quot;javax.servlet.context.orderedLibs&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回与此上下文关联的主路径
     * <span class="token keyword">@since</span> Servlet 2.5
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取对应于服务器上指定 URL路径 的ServletContext对象。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletContext</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token class-name">String</span> uripath<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 此 servlet 容器支持的 Java Servlet API 的主要版本。我这版本必须返回4
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMajorVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回此 servlet 容器支持的 Servlet API 的次要版本。我这版本必须返回0
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
     * 返回指定文件的 MIME 类型，如果 MIME 类型未知，则返回null 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token class-name">String</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回 Web 应用程序中所有资源路径的类目录列表，其中最长的子路径与提供的路径参数匹配。
     * <span class="token keyword">@since</span> Servlet 2.3
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getResourcePaths</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回映射到指定路径的资源的 URL。路径必须以“/”开头，并被解释为相对于当前上下文根。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">URL</span> <span class="token function">getResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MalformedURLException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将位于命名路径的资源作为InputStream对象返回
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">InputStream</span> <span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回一个RequestDispatcher对象，该对象充当位于给定路径的资源的包装器。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestDispatcher</span> <span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回一个RequestDispatcher对象，该对象充当命名 servlet 的包装器。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestDispatcher</span> <span class="token function">getNamedDispatcher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 弃用的。此方法最初定义为从ServletContext检索 servlet。在此版本中，此方法始终返回null并且仅保留二进制兼容性。此方法将在 Java Servlet API 的未来版本中永久删除。
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Servlet</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 弃用的。此方法最初定义为返回此 servlet 上下文已知的所有 servlet 的Enumeration 。
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Servlet</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServlets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 弃用的。此方法最初被定义为返回此上下文已知的所有 servlet 名称的Enumeration 。
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServletNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将指定的消息写入 servlet 日志文件，通常是事件日志。 servlet 日志文件的名称和类型特定于 servlet 容器。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 已弃用。从 Java Servlet API 2.1 开始，请改用log
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将给定Throwable异常的解释性消息和堆栈跟踪写入 servlet 日志文件。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回包含给定虚拟路径的真实路径的String 。
     * 例如，路径“/index.html”返回服务器文件系统上的绝对文件路径，将由对“http://host/contextPath/index.html”的请求提供服务，
     * 其中 contextPath 是此 ServletContext 的上下文路径.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回运行 servlet 的 servlet 容器的名称和版本。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServerInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回包含命名上下文范围初始化参数值的String ，如果参数不存在，则返回null 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将上下文初始化参数的名称作为String对象的Enumeration返回，如果上下文没有初始化参数，则返回空Enumeration 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getInitParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将给定的初始化参数设置为给定的值。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">setInitParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回具有给定名称的 servlet 容器属性，如果没有该名称的属性，则返回null 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回一个Enumeration ，其中包含此 servlet 上下文中可用的属性名称。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAttributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将对象绑定到此 servlet 上下文中的给定属性名称。如果指定的名称已用于某个属性，则此方法将用新属性替换该属性。
     * 如果在ServletContext上配置了侦听器，则容器会相应地通知它们。
     * 如果传递了空值，则效果与调用removeAttribute()相同。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 从 servlet 上下文中删除具有给定名称的属性。删除后，后续调用getAttribute以检索属性值将返回null 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回与此 ServletContext 对应的此 Web 应用程序的名称，该名称在此 Web 应用程序的部署描述符中由 display-name 元素指定。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServletContextName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 注册一个 servlet 实现以在此 ServletContext 中使用
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">,</span> <span class="token class-name">String</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 注册一个 servlet 实例以在此 ServletContext 中使用。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addServlet</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">,</span> <span class="token class-name">Servlet</span> servlet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 注册一个 servlet 实例以在此 ServletContext 中使用。
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
     * 获取命名 servlet 的详细信息
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistration</span> <span class="token function">getServletRegistration</span><span class="token punctuation">(</span><span class="token class-name">String</span> servletName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * TODO
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">ServletRegistration</span><span class="token punctuation">&gt;</span></span> <span class="token function">getServletRegistrations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将过滤器添加到上下文
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">,</span> <span class="token class-name">String</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将过滤器添加到上下文
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> <span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token class-name">String</span> filterName<span class="token punctuation">,</span> <span class="token class-name">Filter</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 将过滤器添加到上下文
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
     * 配置此 Web 应用程序的可用会话跟踪模式
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSessionTrackingModes</span><span class="token punctuation">(</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SessionTrackingMode</span><span class="token punctuation">&gt;</span></span> sessionTrackingModes<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取此 Web 应用程序的默认会话跟踪模式
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SessionTrackingMode</span><span class="token punctuation">&gt;</span></span> <span class="token function">getDefaultSessionTrackingModes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取此 Web 应用程序当前启用的会话跟踪模式。
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
     * 获取与此 ServletContext 关联的 Web 应用程序类加载器。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ClassLoader</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加到此 ServletContext 的声明角色
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">declareRoles</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> roleNames<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取部署此上下文的虚拟主机的主名称。该名称可能是也可能不是有效的主机名
     *
     * <span class="token keyword">@return</span> The primary name of the virtual host on which this context is
     *         deployed
     * <span class="token keyword">@since</span> Servlet 3.1
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getVirtualServerName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取默认会话超时。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSessionTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 设置默认会话超时。此方法只能在 ServletContext 初始化之前调用。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSessionTimeout</span><span class="token punctuation">(</span><span class="token keyword">int</span> sessionTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取读取请求正文的默认字符编码。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRequestCharacterEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 设置用于读取请求正文的默认字符编码。调用此方法将覆盖部署描述符中设置的任何值。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRequestCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">String</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取用于编写响应正文的默认字符编码。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getResponseCharacterEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 设置用于编写响应正文的默认字符编码。调用此方法将覆盖部署描述符中设置的任何值。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setResponseCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">String</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(m,b){const a=p("router-link");return l(),i("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#servletconfig接口"},{default:t(()=>[s("ServletConfig接口")]),_:1})]),n("li",null,[e(a,{to:"#servletcontext接口"},{default:t(()=>[s("ServletContext接口")]),_:1})])])]),v])}const S=c(u,[["render",k],["__file","ServletConfigAndContext.html.vue"]]);export{S as default};
