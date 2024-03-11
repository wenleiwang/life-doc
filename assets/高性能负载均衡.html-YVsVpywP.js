import{_ as e,o as a,c as n,a as s}from"./app-7rGY8hGP.js";const i={},r=s(`<h1 id="高性能负载均衡" tabindex="-1"><a class="header-anchor" href="#高性能负载均衡" aria-hidden="true">#</a> 高性能负载均衡</h1><p>用户体验离不开出色的性能和正常运行时间。为此，企业需要运行多个相同的副本，并将负载分散在整个系统集群上。</p><p>随着负载增加，集群内引入新的副本。架构技术称为水平扩展。基于软件的基础架构因其灵活性而愈发受欢迎，并创造了更多的可能性。无论是仅有两个系统副本组成的高可用性方案，还是全球范围内成千上万个系统构成的大型集群，它们都需要一款像基础架构一样动态的负载均衡解决方案。NGINX 能够以多种方式满足这一需求，例如 HTTP、TCP 和用户数据报协议（UDP）负载均衡，本章将会对这些内容进行详细介绍。</p><p>NGINX 提供了两种不同类型的健康检查方法：被动式（NGINX 开源版提供）和主动式（仅 NGINX Plus 提供）。</p><h2 id="http负载均衡" tabindex="-1"><a class="header-anchor" href="#http负载均衡" aria-hidden="true">#</a> HTTP负载均衡</h2><h3 id="将负载分发到两台或多台-http-服务器。" tabindex="-1"><a class="header-anchor" href="#将负载分发到两台或多台-http-服务器。" aria-hidden="true">#</a> 将负载分发到两台或多台 HTTP 服务器。</h3><p>在 NGINX 的 HTTP 模块内使用 upstream 代码块对 HTTP 服务器实施负载均衡：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend {
	server 10.10.12.45:80 weight=1;
	server app.example.com:80 weight=2;
	server spare.example.com:80 backup;
}
server {
	location / {
		proxy_pass http://backend;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该配置对端口 80 的两台 HTTP 服务器实施负载均衡，然后再将另一台服务器定义为backup，以便在两台主服务器不可用时发挥作用。 weight 参数指示 NGINX 向第二台服务器传输两倍的请求，它的默认值为 1。</p><blockquote><p>HTTP 的 upstream 模块控制着 HTTP 负载均衡。 该模块定义了一个目标池 —— 它可以是 Unix 套接字、IP 地址和 DNS（域名服务）记录的任意组合，也可以是它们的混合使用配置。upstream 模块还定义了如何将任一个请求分发给任何上游（upstream）服务器。</p></blockquote><blockquote><p>每个上游目标都通过 server 指令在上游池中进行定义。server 指令接收 Unix 套接字、IP 地址或 FQDN（全限定域名） 以及一些可选的参数。可选参数能够增强对请求路由的控制。这包括均衡算法中服务器的 weight 参数（无论服务器处于待机模式、可用还是不可用），以及确定服务器是否不可用的参数。NGINX Plus 还提供了许多其他好用的参数，例如对服务器的连接限制、高级 DNS 解析控制以及在服务器启动后缓慢增加与服务器的连接等等。</p></blockquote><h2 id="tcp负载均衡" tabindex="-1"><a class="header-anchor" href="#tcp负载均衡" aria-hidden="true">#</a> TCP负载均衡</h2><h3 id="将负载分发到两台或多台-tcp-服务器" tabindex="-1"><a class="header-anchor" href="#将负载分发到两台或多台-tcp-服务器" aria-hidden="true">#</a> 将负载分发到两台或多台 TCP 服务器</h3><p>在 NGINX 的 stream 模块内使用 upstream 代码块对 TCP 服务器实施负载均衡：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stream {
	upstream mysql_read {
		server read1.example.com:3306 weight=5;
		server read2.example.com:3306;
		server 10.10.12.34:3306 backup;
	}
	server {
		listen 3306;
		proxy_pass mysql_read;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此示例中的 server 代码块指示 NGINX 侦听 TCP 端口 3306，并对两个 MySQL 数据库读取副本实施负载均衡，同时将另一台服务器定义为 backup，以便在主服务器崩溃时传输流量。</p><p>此配置不会被添加到 conf.d 文件夹中，因为该文件夹包含在 http 代码块中；您应该另行创建名为 stream.conf.d 的文件夹，打开 nginx.conf 文件中的 stream 代码块，添加新文件夹以支持 stream 配置。 示例： 在 /etc/nginx/nginx.conf 配置文件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user nginx;
worker_processes auto;
pid /run/nginx.pid;

stream {
	include /etc/nginx/stream.conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>名为 /etc/nginx/stream.conf.d/mysql_reads.conf 的文件可能包含以下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream mysql_read {
	server read1.example.com:3306 weight=5;
	server read2.example.com:3306;
	server 10.10.12.34:3306 backup;
}
server {
	listen 3306;
	proxy_pass mysql_read;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="详解" tabindex="-1"><a class="header-anchor" href="#详解" aria-hidden="true">#</a> 详解</h3><p>http 和 stream 上下文之间的主要区别在于它们在 OSI 模型的不同层上运行。http 上下文在应用层（七层）运行，stream 在传输层（四层）运行。这并不意味着 stream 上下文不能通过一些巧妙的脚本获得应用感知能力，而是说 http 上下文是专门为了完全理解HTTP 协议而设计的，stream 上下文默认情况下只能对数据包进行路由和负载均衡。</p><p>配置中有许多选项可以改变 TCP 连接反向代理的属性，包括 SSL/TLS 验证限制、超时和 keepalive 等。这些代理选项的一些值可以是（或者包含）变量，例如下载速率、验证 SSL/TLS 证书时使用的名称等。</p><p>TCP 与 HTTP 负载均衡中的 upstream 指令非常相似，它们均将上游资源定义为服务器，配置格式同样为 Unix 套接字、IP 或 FQDN，此外服务器 weight 参数、最大连接数、DNS 解析器、连接数缓增期以及判断服务器是激活状态、故障状态还是备用模式的参数也都相似。</p><h2 id="udp负载均衡" tabindex="-1"><a class="header-anchor" href="#udp负载均衡" aria-hidden="true">#</a> UDP负载均衡</h2><h3 id="将负载分发到两台或多台-udp-服务器" tabindex="-1"><a class="header-anchor" href="#将负载分发到两台或多台-udp-服务器" aria-hidden="true">#</a> 将负载分发到两台或多台 UDP 服务器</h3><p>在 NGINX 的 stream 模块内使用 upstream 代码块（定义为 udp）对 UDP 服务器实施负载均衡：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stream {
	upstream ntp {
		server ntp1.example.com:123 weight=2;
		server ntp2.example.com:123;
	}
	server {
		listen 123 udp;
		proxy_pass ntp;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这部分配置对使用 UDP 协议的两台上游（upstream）网络时间协议（NTP）服务器实施了负载均衡。UDP 负载均衡的指定非常简单，只需使用 listen 指令中的 udp 参数便可。</p><p>如果进行负载均衡的服务需要在客户端和服务器之间来回发送多个数据包，则可以指定 reuseport 参数。例如，OpenVPN、互联网语音协议（VoIP）、虚拟桌面解决方案和数据报传输层安全（DTLS）都是这种类型的服务。下面举例说明了如何使用NGINX 处理 OpenVPN 连接并将其代理到本地运行的 OpenVPN 服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stream {
	server {
		listen 1195 udp reuseport;
		proxy_pass 127.0.0.1:1194;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 TCP 类似，您可以在 stream 模块中找到 UDP 负载平衡，并以同样的方式完成大部分配置。两者的主要区别在于，UDP 负载均衡的 listen 指令指定打开的套接字用于处理数据报。此外，在处理数据报时，UDP 负载均衡还提供了 TCP 所没有的一些其他指令。</p><p>例如 proxy_response 指令，它向 NGINX 指定了可以从上游服务器发送多少预期的响应。默认情况下，除非达到 proxy_timeout 限制，否则这一数量是无限的。proxy_timeout 指令设置了在连接关闭之前，客户端或代理服务器连接连续进行两次读取或写入操作之间的时间。</p><p>reuseport 参数指示 NGINX 为每个 worker 进程创建一个单独的侦听套接字。这允许内核在 worker 进程之间分发传入的连接，以处理在客户端和服务器之间发送的多个数据包。reuseport 功能仅适用于 Linux kernels 3.9 及更高版本、DragonFly BSD、FreeBSD 12 及更高版本。</p><h2 id="负载均衡的方式" tabindex="-1"><a class="header-anchor" href="#负载均衡的方式" aria-hidden="true">#</a> 负载均衡的方式</h2><h3 id="轮询" tabindex="-1"><a class="header-anchor" href="#轮询" aria-hidden="true">#</a> 轮询</h3><p>轮询是默认的负载均衡方法，它按照上游池中服务器列表的顺序分发请求。当上游服务器的容量变化时，您还可以考虑使用加权轮询。权重的整数值越高，服务器在轮询中的优势就越大。权重背后的算法只是加权平均值的统计概率。</p><h3 id="最小连接" tabindex="-1"><a class="header-anchor" href="#最小连接" aria-hidden="true">#</a> 最小连接</h3><p>此方法通过将当前请求代理到打开连接数最少的上游服务器实现负载均衡。与轮询一样，在决定将连接发送到哪台服务器时，最少连接也会考虑权重。其指令名称是least_conn。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend {
	least_conn;
	server backend.example.com;
	server backend1.example.com;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最短时间" tabindex="-1"><a class="header-anchor" href="#最短时间" aria-hidden="true">#</a> 最短时间</h3><p>该算法仅在 NGINX Plus 中提供，与最少连接算法类似，它将请求代理到当前连接数最少的上游服务器，但首选平均响应时间最短的服务器。此方法是最复杂的负载均衡算法之一，能够满足高性能 Web 应用的需求。最短时间在最少连接的基础上进行了优化，因为少量连接并不一定意味着最快的响应。使用此算法时，切记要考虑服务请求时间的统计差异。有些请求可能本身就需要更多的处理，请求时间也就更长，因而拉宽了统计的范围。请求时间长并不一定意味着服务器性能欠佳或超负荷工作。但是，需要进行更多处理的请求可以考虑使用异步工作流。用户必须为此指令指定 header 或 last_byte 参数。当指定 header 时，使用接收响应头的时间；当指定 last_byte 时，使用接收完整响应的时间。 其指令名称是least_time。</p><h3 id="通用哈希" tabindex="-1"><a class="header-anchor" href="#通用哈希" aria-hidden="true">#</a> 通用哈希</h3><p>管理员使用请求或运行时给定的文本、变量或两者的组合定义哈希值。NGINX 能够为当前请求生成哈希值并将其放在上游服务器上，从而在这些服务器之间分发负载。当您希望更好地控制请求的发送位置或确定哪台上游服务器最有可能缓存数据时，此方法就会派上用场。请注意，当从池中添加或删除服务器时，将重新分发哈希请求。此算法有一个可选的参数：consistent，它能够将重新分发带来的影响最小化。 其指令名称是 hash。</p><h3 id="随机" tabindex="-1"><a class="header-anchor" href="#随机" aria-hidden="true">#</a> 随机</h3><p>该方法用于指示 NGINX 从组中随机选择一台服务器，同时考虑服务器的权重。可选的 two [method] 参数指示 NGINX 随机选择两台服务器，然后使用提供的负载均衡方法对两者均匀地分发请求。默认情况下，如果传输的参数只有 two，没有method，则使用 least_conn 方法。 随机负载均衡的指令名称是 random。</p><h3 id="ip哈希" tabindex="-1"><a class="header-anchor" href="#ip哈希" aria-hidden="true">#</a> IP哈希</h3><p>此方法仅适用于 HTTP。IP 哈希算法使用客户端 IP 地址作为哈希。IP 哈希与通用哈希存在细微的不同，前者使用 IPv4 地址的前三个八进制位或整个 IPv6 地址，而后者使用的是远程变量。当会话状态十分重要，但又无法通过应用的共享内存进行处理时，此方法可确保客户端始终被代理到同一上游服务器（只要服务器可用）。此方法在分发哈希值时也考虑了 weight 参数。 其指令名称是 ip_hash。</p><h2 id="被动健康检查" tabindex="-1"><a class="header-anchor" href="#被动健康检查" aria-hidden="true">#</a> 被动健康检查</h2><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>被动检查上游（upstream）服务器的健康状况。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>通过 NGINX 健康检查和负载均衡确保只使用健康的上游服务器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend <span class="token punctuation">{</span>
	server backend1.example.com:1234 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>3s<span class="token punctuation">;</span>
	server backend2.example.com:1234 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此配置能够监控定向到上游服务器的客户端请求的响应，从而被动监控上游服务器的健康状况。该示例将 max_fails 指令设置为 3，将 fail_timeout 设置为 3 秒。这些指令参数在 stream 和 HTTP 服务器中的工作原理相同。</p><h3 id="详解-1" tabindex="-1"><a class="header-anchor" href="#详解-1" aria-hidden="true">#</a> 详解</h3><p>NGINX 开源版提供了被动健康检查功能，并且使用了相同的 server 参数来实施HTTP、TCP 和 UDP 负载均衡。当客户端发出请求时，被动监控功能可以监测通过NGINX 的失效或超时连接。默认情况下启用被动健康检查；此处提到的参数允许您调整它们的行为。max_fails 的默认值为 1，fail_timeout 的默认值为 10s。健康监控在所有类型的负载均衡中都很重要，这不仅是为了保障用户体验，也是为了实现业务连续性。NGINX 能够被动监控上游 HTTP、TCP 和 UDP 服务器，确保它们健康、高效地运行。</p>`,57),d=[r];function t(l,c){return a(),n("div",null,d)}const v=e(i,[["render",t],["__file","高性能负载均衡.html.vue"]]);export{v as default};
