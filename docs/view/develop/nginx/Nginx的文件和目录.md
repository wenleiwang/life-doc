# Nginx的文件和目录

以下文件、目录和命令对于 NGINX 新手来说十分重要。
## /etc/nginx/
/etc/nginx/ 目录是 NGINX 服务器的默认配置根，您可以从中找到指示 NGINX 如何运行的配置文件。
## /etc/nginx/nginx.conf
/etc/nginx/nginx.conf 文件是 NGINX 服务使用的默认配置入口点。此配置文件能够为 worker 进程、调优、日志记录、动态模块的加载以及对其他 NGINX 配置文件的引用设置全局设置。在默认配置中，/etc/nginx/nginx.conf 文件包括顶层 http 代码块，也就是上下文，它提供了下述目录中的所有配置文件。

## /etc/nginx/conf.d/
/etc/nginx/conf.d/ 目录包含默认的 HTTP 服务器配置文件，其中以 .conf 结尾的文件都包含在 /etc/nginx/nginx.conf 文件的顶层 http 代码块中。最佳实践是利用include 语句并以这种方式组织配置，从而保持配置文件的简洁。在某些软件包仓库中，此文件夹被命名为 sites-enabled ，配置文件链接到 site-available 文件夹；此惯例已不再使用。

## /var/log/nginx/
/var/log/nginx/ 目录是 NGINX 的默认日志位置，您可以从中找到一个 access.log文件和 error.log 文件。访问日志包含 NGINX 服务的每条请求的条目。如果启用了debug 模块，则错误日志文件包含错误事件和调试信息。


## Nginx 命令

### nginx -h
显示 NGINX 帮助菜单。
### nginx -v
显示 NGINX 版本。
### nginx -V
显示 NGINX 版本、build 信息和配置参数，这些参数显示了 NGINX 二进制文件中
内置的模块。
### nginx -t
测试 NGINX 配置。
### nginx -T
测试 NGINX 配置并将验证后的配置打印到屏幕上。此命令在寻求支持时很有用。
### nginx -s signal
-s 标记向 NGINX master 进程发送信号。您可以发送 stop、quit、reload 和reopen 等信号。stop 信号可立即停止 NGINX 进程。quit 信号会在完成当前正在处理的请求后停止 NGINX 进程。reload 信号可重新加载配置。reopen 信号指示NGINX 重新打开日志文件。

## 优雅的重载配置文件

可以运用上面知识更改默认配置文件，并使用 nginx -t 命令测试您的更改。
如果测试成功，您还将了解到如何使用 nginx -s reload 命令指示 NGINX 重新加载配置。

### nginx -s reload
使用 NGINX 的 reload 方法，您可以在不中止服务器的情况下有条不紊地重载配置。此示例使用 NGINX 二进制文件向 master 进程发送信号，从而达到重载 NGINX 系统的目的。

通过在不中止服务器的情况下重载 NGINX 配置，您将能够动态更改配置，同时又不丢失任何数据包。在正常运行时间较长的动态环境中，您需要在某个时间点更改负载均衡配置。NGINX 允许您在保持负载均衡器在线的同时执行此操作。此功能提供了无数可能性，例如在实时环境中重新运行配置管理，或者构建应用感知型和集群感知型模块来动态配置和重载 NGINX，从而满足环境需求。

