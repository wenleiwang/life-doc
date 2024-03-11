import{_ as t,r as d,o as c,c as u,b as n,e,w as i,d as s,a as l}from"./app-7rGY8hGP.js";const o="/life-doc/assets/84038ab226c303a6d477e0c812d09be9-XjyH4yFC.png",v="/life-doc/assets/398ebfa06053ec0b501554e75de8d579-vo-x0cVW.png",p={},m=n("h1",{id:"redis哨兵模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis哨兵模式","aria-hidden":"true"},"#"),s(" Redis哨兵模式")],-1),b={class:"table-of-contents"},k=l('<p>Redis Sentinel是针对需要当发生故障时自动进行主从切换，程序可以不用重启的一个高可用的解决方案。</p><p>可以将Redis Sentinel集群看成是一个zookeeper集群，它是集群高可用的心脏，一般由3~5个节点组成，这样即使别的节点挂了，集群还是可以正常运转。</p><h2 id="理解原理" tabindex="-1"><a class="header-anchor" href="#理解原理" aria-hidden="true">#</a> 理解原理</h2><p>一个正常的分布图</p><p><img src="'+o+'" alt=""></p><p>Sentinel负责持续监控主从节点的健康，当主节点挂掉时，自动选择一个最优的从节点切换称为主节点。</p><p>客户端来连接集群时，会首先连接Sentinel，通过Sentinel来查询主节点的地址，然后再连接主节点进行数据交互。</p><p>当主节点发生故障时，客户端会重新向Sentinel要地址，Sentinel会将最新的主节点地址告诉客户端。</p><p>如此应用程序将无序重启即可自动完成节点的切换。</p><p><img src="'+v+`" alt=""></p><p>如上图，如果主节点挂掉，原先的主从复制也断开，客户端和损坏的主节点也断开。一个从节点被提升为新的主节点，其他从节点开始和新的主节点建立复制关系。</p><p>客户端通过新节点继续进行交互。</p><p>Sentinel会持续监控已经挂掉的主节点，待它恢复后，集群会调整为从节点，从新的主节点那里建立复制关系。</p><h2 id="消息丢失问题" tabindex="-1"><a class="header-anchor" href="#消息丢失问题" aria-hidden="true">#</a> 消息丢失问题</h2><p>Redis是采用异步复制，主节点挂掉，从节点可能没有收到全部的消息，未同步部分就丢失了。</p><p>Sentinel无法保证消息完全不丢失，但也能尽量保证消息少丢失。</p><p>通过2个选项限制主从延迟过大</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 表示主节点必须至少有一个从节点在进行正常复制，否则就停止对外写服务，丧失可用性。
# 是否正常取决于下一个参数
min-slaves-to-write 1   

# 但是是秒，表示如果10s内没有收到从节点的反馈，就意味着从节点同步不正常。
# 要么是网络断开了，要么是一直没有给反馈
min-slaves-max-lage 10  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一台服务器搭建一主二从三哨兵的集群" tabindex="-1"><a class="header-anchor" href="#一台服务器搭建一主二从三哨兵的集群" aria-hidden="true">#</a> 一台服务器搭建一主二从三哨兵的集群</h2><p>sentinel哨兵模式已经被集成在redis2.4之后的版本中。</p><p>一般建议sentinel采取奇数台，防止某一台sentinel无法连接到master导致误切换。</p><h3 id="_1-创建一个文件夹redis" tabindex="-1"><a class="header-anchor" href="#_1-创建一个文件夹redis" aria-hidden="true">#</a> 1.创建一个文件夹redis</h3>`,22),y=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis1</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6379<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /usr/local/etc/redis/redis.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./redis.conf<span class="token punctuation">:</span>/usr/local/etc/redis/redis.conf

  <span class="token key atrule">redis2</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis2
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6380<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /usr/local/etc/redis/redis_slave1.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./redis_slave1.conf<span class="token punctuation">:</span>/usr/local/etc/redis/redis_slave1.conf

  <span class="token key atrule">redis3</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis3
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6381<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /usr/local/etc/redis/redis_slave2.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./redis_slave2.conf<span class="token punctuation">:</span>/usr/local/etc/redis/redis_slave2.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主redis服务的配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># bind 127.0.0.1
timeout 0
tcp-keepalive 300
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile &quot;&quot;
databases 16
always-show-logo yes
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
rdb-del-sync-files no
dir ./
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-diskless-load disabled
repl-disable-tcp-nodelay no
replica-priority 100
replica-announce-ip 150.158.58.15 # docker启动很重要的配置
replica-announce-port 6379 # docker启动很重要的配置
acllog-max-len 128
masterauth 密码 # 主也要写上这个密码，面对主机挂掉重新启动当从机连接别的主机使用
requirepass 密码
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
lazyfree-lazy-user-del no
oom-score-adj no
oom-score-adj-values 0 200 800
appendonly no
appendfilename &quot;appendonly.aof&quot;
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
aof-use-rdb-preamble yes
lua-time-limit 5000
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events &quot;&quot;
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
dynamic-hz yes
aof-rewrite-incremental-fsync yes
rdb-save-incremental-fsync yes
jemalloc-bg-thread yes
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从1配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># bind 127.0.0.1
protected-mode no
port 6379
tcp-backlog 511
timeout 0
tcp-keepalive 300
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile &quot;&quot;
databases 16
always-show-logo yes
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
rdb-del-sync-files no
dir ./
replicaof 150.158.58.15 6379    # 配置监听150.158.58.15端口6379的主redis
masterauth 密码
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-diskless-load disabled
repl-disable-tcp-nodelay no
replica-priority 100
replica-announce-ip 150.158.58.15 # docker启动很重要的配置
replica-announce-port 6380 # docker启动很重要的配置 从一服务的端口
acllog-max-len 128
requirepass 密码
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
lazyfree-lazy-user-del no
oom-score-adj no
oom-score-adj-values 0 200 800
appendonly no
appendfilename &quot;appendonly.aof&quot;
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
aof-use-rdb-preamble yes
lua-time-limit 5000
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events &quot;&quot;
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
dynamic-hz yes
aof-rewrite-incremental-fsync yes
rdb-save-incremental-fsync yes
jemalloc-bg-thread yes
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从2配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># bind 127.0.0.1
protected-mode no
port 6379
tcp-backlog 511
timeout 0
tcp-keepalive 300
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile &quot;&quot;
databases 16
always-show-logo yes
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
rdb-del-sync-files no
dir ./
replicaof 150.158.58.15 6379    # 配置监听150.158.58.15端口6379的主redis
masterauth 密码
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-diskless-load disabled
repl-disable-tcp-nodelay no
replica-priority 100
replica-announce-ip 150.158.58.15 # docker启动很重要的配置
replica-announce-port 6381 # docker启动很重要的配置 从一服务的端口，改这里就行其余不动
acllog-max-len 128
requirepass 密码
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
lazyfree-lazy-user-del no
oom-score-adj no
oom-score-adj-values 0 200 800
appendonly no
appendfilename &quot;appendonly.aof&quot;
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
aof-use-rdb-preamble yes
lua-time-limit 5000
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events &quot;&quot;
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
dynamic-hz yes
aof-rewrite-incremental-fsync yes
rdb-save-incremental-fsync yes
jemalloc-bg-thread yes
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-创建一个文件夹sentinel" tabindex="-1"><a class="header-anchor" href="#_2-创建一个文件夹sentinel" aria-hidden="true">#</a> 2.创建一个文件夹sentinel</h3><p>里面放置4个文件。一个启动哨兵的docker配置文件；3个哨兵服务的配置文件。</p>`,11),h=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">sentinel1</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 26379<span class="token punctuation">:</span><span class="token number">26379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./sentinel1.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf

  <span class="token key atrule">sentinel2</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">2</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 26380<span class="token punctuation">:</span><span class="token number">26379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./sentinel2.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf

  <span class="token key atrule">sentinel3</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">3</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 26381<span class="token punctuation">:</span><span class="token number">26379</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./sentinel3.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件2（3个哨兵服务的配置文件）： sentinel1.conf、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26379
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster 密码
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sentinel2.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26380
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster 密码
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sentinel3.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26381
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster 密码
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sentinel.conf配置注解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 哨兵sentinel实例运行的端口 默认26379
port 26379

# 哨兵sentinel的工作目录
#dir /tmp

#sentinel容器映射到宿主机的端口和IP。docker启动时这个很重要
sentinel announce-ip 150.158.58.15
sentinel announce-port 26379

# 哨兵sentinel监控的redis主节点的 ip port
# master-name 可以自己命名的主节点名字 只能由字母A-z、数字0-9 、这三个字符&quot;.-_&quot;组成。
# quorum 配置多少个sentinel哨兵统一认为master主节点失联 那么这时客观上认为主节点失联了
# 注意：如果 quorum 给的值过大， 超过主机数量， 可能会导致 master 主机挂掉之后， 没有新的 slave来替代 master
# sentinel monitor &lt;master-name&gt; &lt;ip&gt; &lt;redis-port&gt; &lt;quorum&gt;
sentinel monitor mymaster 150.158.58.15 6379 2

# 当在Redis实例中开启了requirepass foobared 授权密码 这样所有连接Redis实例的客户端都要提供密码
# 设置哨兵sentinel 连接主从的密码 注意必须为主从设置一样的验证密码
# sentinel auth-pass &lt;master-name&gt; &lt;password&gt;
sentinel auth-pass mymaster redis2716

# 指定多少毫秒之后 主节点没有应答哨兵sentinel 此时 哨兵主观上认为主节点下线 默认30秒
# sentinel down-after-milliseconds &lt;master-name&gt; &lt;milliseconds&gt;
sentinel down-after-milliseconds mymaster 30000

# 这个配置项指定了在发生failover主备切换时最多可以有多少个slave同时对新的master进行同步，这个数字越小，完成failover所需的时间就越长，但是如果这个数字越大，就意味着越 多的slave因为replication而不可用。可以通过将这个值设为 1 来保证每次只有一个slave 处于不能处理命令请求的状态。
# sentinel parallel-syncs &lt;master-name&gt; &lt;numslaves&gt;
sentinel parallel-syncs mymaster 1

# 故障转移的超时时间 failover-timeout 可以用在以下这些方面：
#1. 同一个sentinel对同一个master两次failover之间的间隔时间。
#2. 当一个slave从一个错误的master那里同步数据开始计算时间。直到slave被纠正为向正确的master那里同步数据时。
#3.当想要取消一个正在进行的failover所需要的时间。
#4.当进行failover时，配置所有slaves指向新的master所需的最大时间。不过，即使过了这个超时，slaves依然会被正确配置为指向master，但是就不按parallel-syncs所配置的规则来了
# 默认三分钟
# sentinel failover-timeout &lt;master-name&gt; &lt;milliseconds&gt;
sentinel failover-timeout mymaster 180000

# SCRIPTS EXECUTION
# 配置当某一事件发生时所需要执行的脚本，可以通过脚本来通知管理员，例如当系统运行不正常时发邮件通知相关人员。
# 对于脚本的运行结果有以下规则：
# 若脚本执行后返回1，那么该脚本稍后将会被再次执行，重复次数目前默认为10
# 若脚本执行后返回2，或者比2更高的一个返回值，脚本将不会重复执行。
# 如果脚本在执行过程中由于收到系统中断信号被终止了，则同返回值为1时的行为相同。
# 一个脚本的最大执行时间为60s，如果超过这个时间，脚本将会被一个SIGKILL信号终止，之后重新执行。
# 通知型脚本:当sentinel有任何警告级别的事件发生时（比如说redis实例的主观失效和客观失效等等），将会去调用这个脚本，这时这个脚本应该通过邮件，SMS等方式去通知系统管理员关于系统不正常运行的信息。调用该脚本时，将传给脚本两个参数，一个是事件的类型，一个是事件的描述。如果sentinel.conf配置文件中配置了这个脚本路径，那么必须保证这个脚本存在于这个路径，并且是可执行的，否则sentinel无法正常启动成功。
#通知脚本
# sentinel notification-script &lt;master-name&gt; &lt;script-path&gt;
# sentinel notification-script mymaster /var/redis/notify.sh

# 客户端重新配置主节点参数脚本
# 当一个master由于failover而发生改变时，这个脚本将会被调用，通知相关的客户端关于master 地址已经发生改变的信息。
# 以下参数将会在调用脚本时传给脚本:
# &lt;master-name&gt; &lt;role&gt; &lt;state&gt; &lt;from-ip&gt; &lt;from-port&gt; &lt;to-ip&gt; &lt;to-port&gt;
# 目前&lt;state&gt;总是“failover”,
# &lt;role&gt;是“leader”或者“observer”中的一个。
# 参数 from-ip, from-port, to-ip, to-port是用来和旧的master和新的master(即旧的slave)通信的
# 这个脚本应该是通用的，能被多次调用，不是针对性的。
# sentinel client-reconfig-script &lt;master-name&gt; &lt;script-path&gt;
# sentinel client-reconfig-script mymaster /var/redis/reconfig.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-启动效果" tabindex="-1"><a class="header-anchor" href="#_3-启动效果" aria-hidden="true">#</a> 3.启动效果</h3><p>来到一个sentinel服务里，使用info命令 得到了如下效果： <code>master0:name=mymaster,status=ok,address=150.158.58.15:6379,slaves=2,sentinels=3</code></p><h3 id="_4-主动挂掉redis主" tabindex="-1"><a class="header-anchor" href="#_4-主动挂掉redis主" aria-hidden="true">#</a> 4.主动挂掉redis主</h3><p>先打开sentinel集群的日志，来到sentinel文件夹里执行<code>docker-compose logs -f</code></p><p>干掉redis主<code>docker stop 6ac57c328423</code>，根据文件知道需要等待等待30s；</p><p>日志显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-sentinel-2  | 1:X 01 Jun 2022 15:01:07.769 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-1  | 1:X 01 Jun 2022 15:01:07.773 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-3  | 1:X 01 Jun 2022 15:01:08.929 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用来到sentinel服务里再次使用info查看，发现master已经变成了6380</p><p><code>master0:name=mymaster,status=ok,address=150.158.58.15:6380,slaves=2,sentinels=3</code></p><h3 id="_5-再次启动刚好关闭的服务" tabindex="-1"><a class="header-anchor" href="#_5-再次启动刚好关闭的服务" aria-hidden="true">#</a> 5.再次启动刚好关闭的服务</h3><p><code>docker start 6ac57c328423</code> 得到日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-sentinel-2  | 1:X 01 Jun 2022 15:01:07.769 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-1  | 1:X 01 Jun 2022 15:01:07.773 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-3  | 1:X 01 Jun 2022 15:01:08.929 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搭建完成</p><h2 id="springboot使用redis哨兵集群" tabindex="-1"><a class="header-anchor" href="#springboot使用redis哨兵集群" aria-hidden="true">#</a> SpringBoot使用Redis哨兵集群</h2><h3 id="redisson使用" tabindex="-1"><a class="header-anchor" href="#redisson使用" aria-hidden="true">#</a> Redisson使用</h3><p>其余正常使用就行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span></span><span class="token class-name">Redisson</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">Config</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedissonConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Redisson</span> redisson <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">useSentinelServers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addSentinelAddress</span><span class="token punctuation">(</span><span class="token string">&quot;redis://150.158.58.15:26379&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;redis://150.158.58.15:26380&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;redis://150.158.58.15:26381&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setMasterName</span><span class="token punctuation">(</span><span class="token string">&quot;mymaster&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;密码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Redisson</span><span class="token punctuation">)</span> <span class="token class-name">Redisson</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用springboot默认配置" tabindex="-1"><a class="header-anchor" href="#使用springboot默认配置" aria-hidden="true">#</a> 使用SpringBoot默认配置</h3><p>其余正常使用就行</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">master</span><span class="token punctuation">:</span> mymaster
      <span class="token key atrule">nodes</span><span class="token punctuation">:</span> 150.158.58.15<span class="token punctuation">:</span><span class="token number">26379</span><span class="token punctuation">,</span>150.158.58.15<span class="token punctuation">:</span><span class="token number">26380</span><span class="token punctuation">,</span>150.158.58.15<span class="token punctuation">:</span><span class="token number">26381</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function g(f,x){const a=d("router-link"),r=d("RouterLink");return c(),u("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[e(a,{to:"#理解原理"},{default:i(()=>[s("理解原理")]),_:1})]),n("li",null,[e(a,{to:"#消息丢失问题"},{default:i(()=>[s("消息丢失问题")]),_:1})]),n("li",null,[e(a,{to:"#一台服务器搭建一主二从三哨兵的集群"},{default:i(()=>[s("一台服务器搭建一主二从三哨兵的集群")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_1-创建一个文件夹redis"},{default:i(()=>[s("1.创建一个文件夹redis")]),_:1})]),n("li",null,[e(a,{to:"#_2-创建一个文件夹sentinel"},{default:i(()=>[s("2.创建一个文件夹sentinel")]),_:1})]),n("li",null,[e(a,{to:"#_3-启动效果"},{default:i(()=>[s("3.启动效果")]),_:1})]),n("li",null,[e(a,{to:"#_4-主动挂掉redis主"},{default:i(()=>[s("4.主动挂掉redis主")]),_:1})]),n("li",null,[e(a,{to:"#_5-再次启动刚好关闭的服务"},{default:i(()=>[s("5.再次启动刚好关闭的服务")]),_:1})])])]),n("li",null,[e(a,{to:"#springboot使用redis哨兵集群"},{default:i(()=>[s("SpringBoot使用Redis哨兵集群")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#redisson使用"},{default:i(()=>[s("Redisson使用")]),_:1})]),n("li",null,[e(a,{to:"#使用springboot默认配置"},{default:i(()=>[s("使用SpringBoot默认配置")]),_:1})])])])])]),k,n("p",null,[s("里面放置3个文件。一个启动redis的docker配置文件；1一个主redis服务的配置文件，2个从redis服务的配置文件； 文件1：docker-compose.yml，这个文件时docker用来方便创建集群操作的配置文件。"),e(r,{to:"/view/develop/Linux/learndockerfile.html#docker-compose"},{default:i(()=>[s("详情可以查看")]),_:1})]),y,n("p",null,[s("文件1：docker-compose.yml，这个文件时docker用来方便创建集群操作的配置文件。"),e(r,{to:"/view/develop/Linux/learndockerfile.html#docker-compose"},{default:i(()=>[s("详情可以查看")]),_:1})]),h])}const z=t(p,[["render",g],["__file","sentinel.html.vue"]]);export{z as default};
