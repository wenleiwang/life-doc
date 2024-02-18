# Docker里执行Redis命令的Lua脚本

## 前言

Redis 是一个广泛使用的内存数据库，它提供了强大的 Lua 脚本执行器，可以在 Redis 服务器上运行自定义脚本，本文将简单展示如何在 Docker 里执行 Redis 命令的 Lua 脚本。

## 准备工作

* 安装 docker 
* 用 docker 下载 redis 
* 使用 docker 启动 redis 服务

## 编写和执行 Lua 脚本

### 进入Redis 容器

要执行 Lua 脚本，我们首先需要进入 Redis 容器的命令行界面。可以使用以下命令进入容器：

`docker exec -it my-redis redis-cli`

### 创建 Lua 脚本

在 Redis 容器的命令行界面中，我们可以创建一个 Lua 脚本。以下是一个简单的示例：

```lua
local name = ARGV[1]
local age = ARGV[2]

redis.call('SET', 'name', name)
redis.call('SET', 'age', age)
```

这个脚本接受两个参数 name 和 age，然后使用 Redis 的 SET 命令将这两个值分别存储在 name 和 age 键中。

执行 Lua 脚本
要在 Redis 容器中执行 Lua 脚本，我们可以使用以下命令：

`EVAL "lua_script" numkeys key [key ...] arg [arg ...]`
其中 `lua_script` 是 Lua 脚本的内容，`numkeys` 是脚本中需要访问的键的数量，`key` 是需要访问的键的名称，`arg` 是脚本的参数。

在我们的示例中，我们可以使用以下命令来执行 Lua 脚本：
`EVAL "local name = ARGV[1]\nlocal age = ARGV[2]\n\nredis.call('SET', 'name', name)\nredis.call('SET', 'age', age)" 0 "John Doe" "30"`

这个命令将会在 Redis 服务器上执行 Lua 脚本，并将 “John Doe” 存储在 name 键中，将 “30” 存储在 age 键中。


[Springboot 如何执行Lua脚本请看Redis实现布隆过滤器里方式二：Redis Lua脚本](./Redis实现布隆过滤器.md#方式二：Redis Lua脚本)


---
完

#Lau脚本
