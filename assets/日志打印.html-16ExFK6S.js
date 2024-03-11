import{_ as p,r as o,o as i,c as r,b as n,e as s,w as e,d as a,a as c}from"./app-7rGY8hGP.js";const u="/life-doc/assets/c176a74e7105362ffdd105447eee3c27-cvqBh6AO.png",d="/life-doc/assets/34493e47d56a51904046fb04df7e45d4-22pHUJ5c.png",h="/life-doc/assets/20da14651896b1b175e218a4aa87b286-M8queheX.png",g="/life-doc/assets/15d9b04800ded661a744cbaec3b85fb7-g8yRN92D.png",k={},m=n("h1",{id:"日志打印",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#日志打印","aria-hidden":"true"},"#"),a(" 日志打印")],-1),b={class:"table-of-contents"},f=c(`<h2 id="java在控制台输出不同颜色的文本system-out-println实现" tabindex="-1"><a class="header-anchor" href="#java在控制台输出不同颜色的文本system-out-println实现" aria-hidden="true">#</a> Java在控制台输出不同颜色的文本System.out.println实现</h2><p>可以根据需要改成以下颜色：</p><p>红色：<code>\\033[31m</code> 绿色：<code>\\033[32m</code> 黄色：<code>\\033[33m</code> 蓝色：<code>\\033[34m</code> 紫色：<code>\\033[35m</code> 青色：<code>\\033[36m</code> 白色：<code>\\033[37m</code></p><p>需要恢复默认颜色可以使用：<code>\\033[0m</code></p><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 红色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[31m这是红色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 绿色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[32m这是绿色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 黄色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[33m这是黄色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 蓝色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[34m这是蓝色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 紫色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[35m这是紫色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 青色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[36m这是青色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 白色</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[37m这是白色的文本\\033[0m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3><p><img src="`+u+'" alt=""></p><h2 id="springboot修改启动图标-详细步骤" tabindex="-1"><a class="header-anchor" href="#springboot修改启动图标-详细步骤" aria-hidden="true">#</a> SpringBoot修改启动图标（详细步骤）</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>修改图标就是在资源加载目录（resources）下放一个banner.txt文件。这样运行加载的时候就会扫描到这个文件，然后启动的时候就会显示出来了。</p><ol><li><p>可以自己找定义或者找一个网站提取素材，我在👇这个网站拿一个素材</p><blockquote><p>https://www.bootschool.net/ascii-art</p></blockquote></li><li><p>选取好喜欢的素材后，点击下载（下载到本地）</p></li><li><p>下载到本地后（CTRL+C）复制banner.txt文件。在IDEA的springboot项目里面的resource目录（CTRL+V）粘贴</p></li></ol><p><img src="'+d+'" alt=""></p><ol start="4"><li>点击运行项目（运行成功）</li></ol><h2 id="spring-boot-日志配置" tabindex="-1"><a class="header-anchor" href="#spring-boot-日志配置" aria-hidden="true">#</a> Spring Boot 日志配置</h2><h3 id="slf4j" tabindex="-1"><a class="header-anchor" href="#slf4j" aria-hidden="true">#</a> SLF4J</h3><p>简单日志门面（Simple Logging Facade for Java），它不是一个真正的日志实现，而是一个抽象层（ abstraction layer），它允许在后台使用任意一个日志实现。每一种日志框架都有自己单独的API，要使用对应的框架就要使用其对应的API，这就大大的增加应用程序代码对于日志框架的耦合性。</p><p>使用了SLF4J后，对于应用程序来说，无论底层的日志框架如何变，应用程序不需要修改任意一行代码，就可以直接上线了。</p><h3 id="常用日志框架" tabindex="-1"><a class="header-anchor" href="#常用日志框架" aria-hidden="true">#</a> 常用日志框架</h3><p>下面介绍几个常用的日志框架，推荐Log4j2</p><h4 id="log4j" tabindex="-1"><a class="header-anchor" href="#log4j" aria-hidden="true">#</a> Log4j</h4><p>Log4j是Apache的一个Java的日志库，通过使用Log4j，我们可以控制日志信息输送的目的地（控制台、文件、数据库等）；我们也可以控制每一条日志的输出格式；通过定义每一条日志信息的级别，我们能够更加细致地控制日志的生成过程。</p><h4 id="logback" tabindex="-1"><a class="header-anchor" href="#logback" aria-hidden="true">#</a> Logback</h4><p>Logback，一个“可靠、通用、快速而又灵活的Java日志框架”。logback当前分成三个模块：logback-core，logback- classic和logback-access。logback-core是其它两个模块的基础模块。logback-classic是log4j的一个改良版本。此外logback-classic完整实现SLF4J API使你可以很方便地更换成其它日志系统，如log4j或JDK14 Logging。logback-access模块与Servlet容器（如Tomcat和Jetty）集成，以提供HTTP访问日志功能。请注意，您可以在logback-core之上轻松构建自己的模块。</p>',24),v={href:"https://logback.qos.ch/index.html",target:"_blank",rel:"noopener noreferrer"},_=c('<h4 id="log4j2" tabindex="-1"><a class="header-anchor" href="#log4j2" aria-hidden="true">#</a> Log4j2</h4><p>Apache Log4j 2是对Log4j的升级，它比其前身Log4j 1.x提供了重大改进，并提供了Logback中可用的许多改进，同时修复了Logback架构中的一些问题。</p><p>现在最优秀的Java日志框架是Log4j2，没有之一。根据官方的测试表明，在多线程环境下，Log4j2的异步日志表现更加优秀。在异步日志中，Log4j2使用独立的线程去执行I/O操作，可以极大地提升应用程序的性能。</p><h4 id="log4j1-logback-log4j2性能比较" tabindex="-1"><a class="header-anchor" href="#log4j1-logback-log4j2性能比较" aria-hidden="true">#</a> Log4j1/Logback/Log4j2性能比较</h4><p>在官方的测试中，Log4j1/Logback/Log4j2三个日志框架的异步日志性能比较如下图所示。</p><p>其中，Loggers all async是基于LMAX Disruptor实现的。可见Log4j2的异步日志性能是最棒的。</p><p><img src="'+h+'" alt=""></p><p>下图比较了Log4j2框架Sync、Async Appenders和Loggers all async三者的性能。其中Loggers all async表现最为出色，而且线程数越多，Loggers all async性能越好。</p><p><img src="'+g+'" alt=""></p>',9);function L(j,x){const t=o("router-link"),l=o("ExternalLinkIcon");return i(),r("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[s(t,{to:"#java在控制台输出不同颜色的文本system-out-println实现"},{default:e(()=>[a("Java在控制台输出不同颜色的文本System.out.println实现")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#示例代码"},{default:e(()=>[a("示例代码")]),_:1})]),n("li",null,[s(t,{to:"#效果"},{default:e(()=>[a("效果")]),_:1})])])]),n("li",null,[s(t,{to:"#springboot修改启动图标-详细步骤"},{default:e(()=>[a("SpringBoot修改启动图标（详细步骤）")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#介绍"},{default:e(()=>[a("介绍")]),_:1})])])]),n("li",null,[s(t,{to:"#spring-boot-日志配置"},{default:e(()=>[a("Spring Boot 日志配置")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#slf4j"},{default:e(()=>[a("SLF4J")]),_:1})]),n("li",null,[s(t,{to:"#常用日志框架"},{default:e(()=>[a("常用日志框架")]),_:1})])])])])]),f,n("blockquote",null,[n("p",null,[n("a",v,[a("更多了解官网看看"),s(l)])])]),_])}const S=p(k,[["render",L],["__file","日志打印.html.vue"]]);export{S as default};
