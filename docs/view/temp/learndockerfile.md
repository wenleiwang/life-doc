# DockerFile和docker-compose
[[toc]]
Dockerfile 是一个文本文件，其内包含了一条条的指令，描述我们的镜像该如何构建，就像我们程序的源码。

我们的 docker 镜像文件事实上是分层的。拉取镜像的时候，它pull了很多次。而分层的操作也方便不同镜像间共享相同的层，这显著的节省了客户机的存储空间以及下载时间。

Dockfile 的每一条指令的内容，就是描述该层应当如何构建。


1. FROM 命令
FROM为指定基础镜像，像之前我们基于官方 nginx 进行定制，这样可以省略大量的重复工作。DockerHub 上有大量的镜像，ubuntu、mysql、php、python 等等，
一定要选择合适的作为基础镜像，比如开发 django 就选用 python 或者django 镜像，而不要去用 php 镜像。

2. RUN 命令
RUN 命令即用来在容器中执行命令的，相当于你之前手动在 docker 里面执行命令。
其格式也很简单，`RUN <command>`即可，command可以是容器能执行的任何命令。RUN 命令不一定能成功执行，你不必一遍遍更改然后 build 实验，
可以直接 run 一个基础镜像，然后去执行命令，等成功了再写入 Dockerfile，会方便很多。

3. COPY 命令
COPY 命令用于将文件拷贝到镜像中。
`COPY <源路径> <目标路径>`
你可以将需要的文件拷贝到镜像内，注意这里源路径是相对路径，即相对上文构建命令里的最后一个参数所指定的目录，不能随意引用其它文件。
另外，尽量不要在构建目录里放入无关文件，因为 docker 会将目录下所有文件打包发送给服务进程

4. CMD命令
CMD 命令为容器启动时的默认命令，因为容器其实本质是一个进程（后面会细讲）。比如 ubuntu 镜像默认CMD 命令为/bin/bash，
因此事实上我们只要执行 docker run -it ubuntu就可以得到一个交互式 shell。如果我们传入其它命令，比如 执行 docker run ubuntu uname，容器就会执行我们指定的命令。

## docker-compose
docker 是轻量化的应用程序，docker 官方推荐每个 docker 容器中只运行一个进程（下篇文章你将明白这是为什么），
那么就是说，我们需要分别为我们的应用、数据库、nginx 创建单独的 docker 容器，然后分别启动它。
想象一下，构建好 docker 之后，每次启动我们的网站，都要至少 docker run 三次，是不是很繁琐？而且此时这几个 docker 是分散独立的，很不方便管理。
既然这几个 docker 都是为了同一个网站服务，是不是应该把它们放到一起？这就引出了 docker-compose 项目。

docker-compose是 docker 官方的开源项目，使用 python 编写，实现上调用了 Docker 服务的 API 进行容器管理。
其官方定义为为 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）），其实就是上面所讲的功能。

### 安装
1. [官网地址下载对应机器版本的文件](https://github.com/docker/compose/releases)
2. 文件发送到`/usr/local/bin`下，并改文件名称为`docker-compose`
3. 修改执行权限`chmod +x /usr/local/bin/docker-compose`
4. 查看版本号判断是否可用`docker-compose --version`

[实践看Sentinel搭建](../redis/cluster/sentinel.md#一台服务器搭建一主二从三哨兵的集群)
