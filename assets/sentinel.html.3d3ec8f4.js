import{r as p,o as i,c as t,a as e,e as l,w as r,F as c,d as s,b as n}from"./app.388479f4.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";var o="/life-doc/assets/2022-05-27-14-10-47.c83af7a0.png",u="/life-doc/assets/2022-05-27-14-24-59.50f02600.png";const m={},d=s('<h1 id="redis\u54E8\u5175\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#redis\u54E8\u5175\u6A21\u5F0F" aria-hidden="true">#</a> Redis\u54E8\u5175\u6A21\u5F0F</h1><p>Redis Sentinel\u662F\u9488\u5BF9\u9700\u8981\u5F53\u53D1\u751F\u6545\u969C\u65F6\u81EA\u52A8\u8FDB\u884C\u4E3B\u4ECE\u5207\u6362\uFF0C\u7A0B\u5E8F\u53EF\u4EE5\u4E0D\u7528\u91CD\u542F\u7684\u4E00\u4E2A\u9AD8\u53EF\u7528\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u53EF\u4EE5\u5C06Redis Sentinel\u96C6\u7FA4\u770B\u6210\u662F\u4E00\u4E2Azookeeper\u96C6\u7FA4\uFF0C\u5B83\u662F\u96C6\u7FA4\u9AD8\u53EF\u7528\u7684\u5FC3\u810F\uFF0C\u4E00\u822C\u75313~5\u4E2A\u8282\u70B9\u7EC4\u6210\uFF0C\u8FD9\u6837\u5373\u4F7F\u522B\u7684\u8282\u70B9\u6302\u4E86\uFF0C\u96C6\u7FA4\u8FD8\u662F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u8F6C\u3002</p><h2 id="\u7406\u89E3\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u539F\u7406" aria-hidden="true">#</a> \u7406\u89E3\u539F\u7406</h2><p>\u4E00\u4E2A\u6B63\u5E38\u7684\u5206\u5E03\u56FE</p><p><img src="'+o+'" alt=""></p><p>Sentinel\u8D1F\u8D23\u6301\u7EED\u76D1\u63A7\u4E3B\u4ECE\u8282\u70B9\u7684\u5065\u5EB7\uFF0C\u5F53\u4E3B\u8282\u70B9\u6302\u6389\u65F6\uFF0C\u81EA\u52A8\u9009\u62E9\u4E00\u4E2A\u6700\u4F18\u7684\u4ECE\u8282\u70B9\u5207\u6362\u79F0\u4E3A\u4E3B\u8282\u70B9\u3002</p><p>\u5BA2\u6237\u7AEF\u6765\u8FDE\u63A5\u96C6\u7FA4\u65F6\uFF0C\u4F1A\u9996\u5148\u8FDE\u63A5Sentinel\uFF0C\u901A\u8FC7Sentinel\u6765\u67E5\u8BE2\u4E3B\u8282\u70B9\u7684\u5730\u5740\uFF0C\u7136\u540E\u518D\u8FDE\u63A5\u4E3B\u8282\u70B9\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\u3002</p><p>\u5F53\u4E3B\u8282\u70B9\u53D1\u751F\u6545\u969C\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u91CD\u65B0\u5411Sentinel\u8981\u5730\u5740\uFF0CSentinel\u4F1A\u5C06\u6700\u65B0\u7684\u4E3B\u8282\u70B9\u5730\u5740\u544A\u8BC9\u5BA2\u6237\u7AEF\u3002</p><p>\u5982\u6B64\u5E94\u7528\u7A0B\u5E8F\u5C06\u65E0\u5E8F\u91CD\u542F\u5373\u53EF\u81EA\u52A8\u5B8C\u6210\u8282\u70B9\u7684\u5207\u6362\u3002</p><p><img src="'+u+`" alt=""></p><p>\u5982\u4E0A\u56FE\uFF0C\u5982\u679C\u4E3B\u8282\u70B9\u6302\u6389\uFF0C\u539F\u5148\u7684\u4E3B\u4ECE\u590D\u5236\u4E5F\u65AD\u5F00\uFF0C\u5BA2\u6237\u7AEF\u548C\u635F\u574F\u7684\u4E3B\u8282\u70B9\u4E5F\u65AD\u5F00\u3002\u4E00\u4E2A\u4ECE\u8282\u70B9\u88AB\u63D0\u5347\u4E3A\u65B0\u7684\u4E3B\u8282\u70B9\uFF0C\u5176\u4ED6\u4ECE\u8282\u70B9\u5F00\u59CB\u548C\u65B0\u7684\u4E3B\u8282\u70B9\u5EFA\u7ACB\u590D\u5236\u5173\u7CFB\u3002</p><p>\u5BA2\u6237\u7AEF\u901A\u8FC7\u65B0\u8282\u70B9\u7EE7\u7EED\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>Sentinel\u4F1A\u6301\u7EED\u76D1\u63A7\u5DF2\u7ECF\u6302\u6389\u7684\u4E3B\u8282\u70B9\uFF0C\u5F85\u5B83\u6062\u590D\u540E\uFF0C\u96C6\u7FA4\u4F1A\u8C03\u6574\u4E3A\u4ECE\u8282\u70B9\uFF0C\u4ECE\u65B0\u7684\u4E3B\u8282\u70B9\u90A3\u91CC\u5EFA\u7ACB\u590D\u5236\u5173\u7CFB\u3002</p><h2 id="\u6D88\u606F\u4E22\u5931\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u4E22\u5931\u95EE\u9898" aria-hidden="true">#</a> \u6D88\u606F\u4E22\u5931\u95EE\u9898</h2><p>Redis\u662F\u91C7\u7528\u5F02\u6B65\u590D\u5236\uFF0C\u4E3B\u8282\u70B9\u6302\u6389\uFF0C\u4ECE\u8282\u70B9\u53EF\u80FD\u6CA1\u6709\u6536\u5230\u5168\u90E8\u7684\u6D88\u606F\uFF0C\u672A\u540C\u6B65\u90E8\u5206\u5C31\u4E22\u5931\u4E86\u3002</p><p>Sentinel\u65E0\u6CD5\u4FDD\u8BC1\u6D88\u606F\u5B8C\u5168\u4E0D\u4E22\u5931\uFF0C\u4F46\u4E5F\u80FD\u5C3D\u91CF\u4FDD\u8BC1\u6D88\u606F\u5C11\u4E22\u5931\u3002</p><p>\u901A\u8FC72\u4E2A\u9009\u9879\u9650\u5236\u4E3B\u4ECE\u5EF6\u8FDF\u8FC7\u5927</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8868\u793A\u4E3B\u8282\u70B9\u5FC5\u987B\u81F3\u5C11\u6709\u4E00\u4E2A\u4ECE\u8282\u70B9\u5728\u8FDB\u884C\u6B63\u5E38\u590D\u5236\uFF0C\u5426\u5219\u5C31\u505C\u6B62\u5BF9\u5916\u5199\u670D\u52A1\uFF0C\u4E27\u5931\u53EF\u7528\u6027\u3002
# \u662F\u5426\u6B63\u5E38\u53D6\u51B3\u4E8E\u4E0B\u4E00\u4E2A\u53C2\u6570
min-slaves-to-write 1   

# \u4F46\u662F\u662F\u79D2\uFF0C\u8868\u793A\u5982\u679C10s\u5185\u6CA1\u6709\u6536\u5230\u4ECE\u8282\u70B9\u7684\u53CD\u9988\uFF0C\u5C31\u610F\u5473\u7740\u4ECE\u8282\u70B9\u540C\u6B65\u4E0D\u6B63\u5E38\u3002
# \u8981\u4E48\u662F\u7F51\u7EDC\u65AD\u5F00\u4E86\uFF0C\u8981\u4E48\u662F\u4E00\u76F4\u6CA1\u6709\u7ED9\u53CD\u9988
min-slaves-max-lage 10  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4E00\u53F0\u670D\u52A1\u5668\u642D\u5EFA\u4E00\u4E3B\u4E8C\u4ECE\u4E09\u54E8\u5175\u7684\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u53F0\u670D\u52A1\u5668\u642D\u5EFA\u4E00\u4E3B\u4E8C\u4ECE\u4E09\u54E8\u5175\u7684\u96C6\u7FA4" aria-hidden="true">#</a> \u4E00\u53F0\u670D\u52A1\u5668\u642D\u5EFA\u4E00\u4E3B\u4E8C\u4ECE\u4E09\u54E8\u5175\u7684\u96C6\u7FA4</h2><p>sentinel\u54E8\u5175\u6A21\u5F0F\u5DF2\u7ECF\u88AB\u96C6\u6210\u5728redis2.4\u4E4B\u540E\u7684\u7248\u672C\u4E2D\u3002</p><p>\u4E00\u822C\u5EFA\u8BAEsentinel\u91C7\u53D6\u5947\u6570\u53F0\uFF0C\u9632\u6B62\u67D0\u4E00\u53F0sentinel\u65E0\u6CD5\u8FDE\u63A5\u5230master\u5BFC\u81F4\u8BEF\u5207\u6362\u3002</p><h3 id="_1-\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939redis" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939redis" aria-hidden="true">#</a> 1.\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939redis</h3>`,23),k=n("\u91CC\u9762\u653E\u7F6E3\u4E2A\u6587\u4EF6\u3002\u4E00\u4E2A\u542F\u52A8redis\u7684docker\u914D\u7F6E\u6587\u4EF6\uFF1B1\u4E00\u4E2A\u4E3Bredis\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C2\u4E2A\u4ECEredis\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\uFF1B \u6587\u4EF61\uFF1Adocker-compose.yml\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u65F6docker\u7528\u6765\u65B9\u4FBF\u521B\u5EFA\u96C6\u7FA4\u64CD\u4F5C\u7684\u914D\u7F6E\u6587\u4EF6\u3002"),y=n("\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B"),v=s(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4E3Bredis\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># bind 127.0.0.1
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
replica-announce-ip 150.158.58.15 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E
replica-announce-port 6379 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E
acllog-max-len 128
masterauth \u5BC6\u7801 # \u4E3B\u4E5F\u8981\u5199\u4E0A\u8FD9\u4E2A\u5BC6\u7801\uFF0C\u9762\u5BF9\u4E3B\u673A\u6302\u6389\u91CD\u65B0\u542F\u52A8\u5F53\u4ECE\u673A\u8FDE\u63A5\u522B\u7684\u4E3B\u673A\u4F7F\u7528
requirepass \u5BC6\u7801
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><p>\u4ECE1\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># bind 127.0.0.1
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
replicaof 150.158.58.15 6379    # \u914D\u7F6E\u76D1\u542C150.158.58.15\u7AEF\u53E36379\u7684\u4E3Bredis
masterauth \u5BC6\u7801
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-diskless-load disabled
repl-disable-tcp-nodelay no
replica-priority 100
replica-announce-ip 150.158.58.15 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E
replica-announce-port 6380 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E \u4ECE\u4E00\u670D\u52A1\u7684\u7AEF\u53E3
acllog-max-len 128
requirepass \u5BC6\u7801
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p>\u4ECE2\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># bind 127.0.0.1
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
replicaof 150.158.58.15 6379    # \u914D\u7F6E\u76D1\u542C150.158.58.15\u7AEF\u53E36379\u7684\u4E3Bredis
masterauth \u5BC6\u7801
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-diskless-load disabled
repl-disable-tcp-nodelay no
replica-priority 100
replica-announce-ip 150.158.58.15 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E
replica-announce-port 6381 # docker\u542F\u52A8\u5F88\u91CD\u8981\u7684\u914D\u7F6E \u4ECE\u4E00\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u6539\u8FD9\u91CC\u5C31\u884C\u5176\u4F59\u4E0D\u52A8
acllog-max-len 128
requirepass \u5BC6\u7801
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p>\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939sentinel" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939sentinel" aria-hidden="true">#</a> 2.\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939sentinel</h3><p>\u91CC\u9762\u653E\u7F6E4\u4E2A\u6587\u4EF6\u3002\u4E00\u4E2A\u542F\u52A8\u54E8\u5175\u7684docker\u914D\u7F6E\u6587\u4EF6\uFF1B3\u4E2A\u54E8\u5175\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p>`,11),h=n("\u6587\u4EF61\uFF1Adocker-compose.yml\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u65F6docker\u7528\u6765\u65B9\u4FBF\u521B\u5EFA\u96C6\u7FA4\u64CD\u4F5C\u7684\u914D\u7F6E\u6587\u4EF6\u3002"),g=n("\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B"),f=s(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u6587\u4EF62\uFF083\u4E2A\u54E8\u5175\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\uFF09\uFF1A sentinel1.conf\u3001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26379
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster \u5BC6\u7801
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>sentinel2.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26380
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster \u5BC6\u7801
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>sentinel3.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>port 26379
sentinel announce-ip 150.158.58.15
sentinel announce-port 26381
sentinel monitor mymaster 150.158.58.15 6379 2
# sentinel auth-pass mymaster \u5BC6\u7801
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>sentinel.conf\u914D\u7F6E\u6CE8\u89E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u54E8\u5175sentinel\u5B9E\u4F8B\u8FD0\u884C\u7684\u7AEF\u53E3 \u9ED8\u8BA426379
port 26379

# \u54E8\u5175sentinel\u7684\u5DE5\u4F5C\u76EE\u5F55
#dir /tmp

#sentinel\u5BB9\u5668\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\u548CIP\u3002docker\u542F\u52A8\u65F6\u8FD9\u4E2A\u5F88\u91CD\u8981
sentinel announce-ip 150.158.58.15
sentinel announce-port 26379

# \u54E8\u5175sentinel\u76D1\u63A7\u7684redis\u4E3B\u8282\u70B9\u7684 ip port
# master-name \u53EF\u4EE5\u81EA\u5DF1\u547D\u540D\u7684\u4E3B\u8282\u70B9\u540D\u5B57 \u53EA\u80FD\u7531\u5B57\u6BCDA-z\u3001\u6570\u5B570-9 \u3001\u8FD9\u4E09\u4E2A\u5B57\u7B26&quot;.-_&quot;\u7EC4\u6210\u3002
# quorum \u914D\u7F6E\u591A\u5C11\u4E2Asentinel\u54E8\u5175\u7EDF\u4E00\u8BA4\u4E3Amaster\u4E3B\u8282\u70B9\u5931\u8054 \u90A3\u4E48\u8FD9\u65F6\u5BA2\u89C2\u4E0A\u8BA4\u4E3A\u4E3B\u8282\u70B9\u5931\u8054\u4E86
# \u6CE8\u610F\uFF1A\u5982\u679C quorum \u7ED9\u7684\u503C\u8FC7\u5927\uFF0C \u8D85\u8FC7\u4E3B\u673A\u6570\u91CF\uFF0C \u53EF\u80FD\u4F1A\u5BFC\u81F4 master \u4E3B\u673A\u6302\u6389\u4E4B\u540E\uFF0C \u6CA1\u6709\u65B0\u7684 slave\u6765\u66FF\u4EE3 master
# sentinel monitor &lt;master-name&gt; &lt;ip&gt; &lt;redis-port&gt; &lt;quorum&gt;
sentinel monitor mymaster 150.158.58.15 6379 2

# \u5F53\u5728Redis\u5B9E\u4F8B\u4E2D\u5F00\u542F\u4E86requirepass foobared \u6388\u6743\u5BC6\u7801 \u8FD9\u6837\u6240\u6709\u8FDE\u63A5Redis\u5B9E\u4F8B\u7684\u5BA2\u6237\u7AEF\u90FD\u8981\u63D0\u4F9B\u5BC6\u7801
# \u8BBE\u7F6E\u54E8\u5175sentinel \u8FDE\u63A5\u4E3B\u4ECE\u7684\u5BC6\u7801 \u6CE8\u610F\u5FC5\u987B\u4E3A\u4E3B\u4ECE\u8BBE\u7F6E\u4E00\u6837\u7684\u9A8C\u8BC1\u5BC6\u7801
# sentinel auth-pass &lt;master-name&gt; &lt;password&gt;
sentinel auth-pass mymaster redis2716

# \u6307\u5B9A\u591A\u5C11\u6BEB\u79D2\u4E4B\u540E \u4E3B\u8282\u70B9\u6CA1\u6709\u5E94\u7B54\u54E8\u5175sentinel \u6B64\u65F6 \u54E8\u5175\u4E3B\u89C2\u4E0A\u8BA4\u4E3A\u4E3B\u8282\u70B9\u4E0B\u7EBF \u9ED8\u8BA430\u79D2
# sentinel down-after-milliseconds &lt;master-name&gt; &lt;milliseconds&gt;
sentinel down-after-milliseconds mymaster 30000

# \u8FD9\u4E2A\u914D\u7F6E\u9879\u6307\u5B9A\u4E86\u5728\u53D1\u751Ffailover\u4E3B\u5907\u5207\u6362\u65F6\u6700\u591A\u53EF\u4EE5\u6709\u591A\u5C11\u4E2Aslave\u540C\u65F6\u5BF9\u65B0\u7684master\u8FDB\u884C\u540C\u6B65\uFF0C\u8FD9\u4E2A\u6570\u5B57\u8D8A\u5C0F\uFF0C\u5B8C\u6210failover\u6240\u9700\u7684\u65F6\u95F4\u5C31\u8D8A\u957F\uFF0C\u4F46\u662F\u5982\u679C\u8FD9\u4E2A\u6570\u5B57\u8D8A\u5927\uFF0C\u5C31\u610F\u5473\u7740\u8D8A \u591A\u7684slave\u56E0\u4E3Areplication\u800C\u4E0D\u53EF\u7528\u3002\u53EF\u4EE5\u901A\u8FC7\u5C06\u8FD9\u4E2A\u503C\u8BBE\u4E3A 1 \u6765\u4FDD\u8BC1\u6BCF\u6B21\u53EA\u6709\u4E00\u4E2Aslave \u5904\u4E8E\u4E0D\u80FD\u5904\u7406\u547D\u4EE4\u8BF7\u6C42\u7684\u72B6\u6001\u3002
# sentinel parallel-syncs &lt;master-name&gt; &lt;numslaves&gt;
sentinel parallel-syncs mymaster 1

# \u6545\u969C\u8F6C\u79FB\u7684\u8D85\u65F6\u65F6\u95F4 failover-timeout \u53EF\u4EE5\u7528\u5728\u4EE5\u4E0B\u8FD9\u4E9B\u65B9\u9762\uFF1A
#1. \u540C\u4E00\u4E2Asentinel\u5BF9\u540C\u4E00\u4E2Amaster\u4E24\u6B21failover\u4E4B\u95F4\u7684\u95F4\u9694\u65F6\u95F4\u3002
#2. \u5F53\u4E00\u4E2Aslave\u4ECE\u4E00\u4E2A\u9519\u8BEF\u7684master\u90A3\u91CC\u540C\u6B65\u6570\u636E\u5F00\u59CB\u8BA1\u7B97\u65F6\u95F4\u3002\u76F4\u5230slave\u88AB\u7EA0\u6B63\u4E3A\u5411\u6B63\u786E\u7684master\u90A3\u91CC\u540C\u6B65\u6570\u636E\u65F6\u3002
#3.\u5F53\u60F3\u8981\u53D6\u6D88\u4E00\u4E2A\u6B63\u5728\u8FDB\u884C\u7684failover\u6240\u9700\u8981\u7684\u65F6\u95F4\u3002
#4.\u5F53\u8FDB\u884Cfailover\u65F6\uFF0C\u914D\u7F6E\u6240\u6709slaves\u6307\u5411\u65B0\u7684master\u6240\u9700\u7684\u6700\u5927\u65F6\u95F4\u3002\u4E0D\u8FC7\uFF0C\u5373\u4F7F\u8FC7\u4E86\u8FD9\u4E2A\u8D85\u65F6\uFF0Cslaves\u4F9D\u7136\u4F1A\u88AB\u6B63\u786E\u914D\u7F6E\u4E3A\u6307\u5411master\uFF0C\u4F46\u662F\u5C31\u4E0D\u6309parallel-syncs\u6240\u914D\u7F6E\u7684\u89C4\u5219\u6765\u4E86
# \u9ED8\u8BA4\u4E09\u5206\u949F
# sentinel failover-timeout &lt;master-name&gt; &lt;milliseconds&gt;
sentinel failover-timeout mymaster 180000

# SCRIPTS EXECUTION
# \u914D\u7F6E\u5F53\u67D0\u4E00\u4E8B\u4EF6\u53D1\u751F\u65F6\u6240\u9700\u8981\u6267\u884C\u7684\u811A\u672C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u811A\u672C\u6765\u901A\u77E5\u7BA1\u7406\u5458\uFF0C\u4F8B\u5982\u5F53\u7CFB\u7EDF\u8FD0\u884C\u4E0D\u6B63\u5E38\u65F6\u53D1\u90AE\u4EF6\u901A\u77E5\u76F8\u5173\u4EBA\u5458\u3002
# \u5BF9\u4E8E\u811A\u672C\u7684\u8FD0\u884C\u7ED3\u679C\u6709\u4EE5\u4E0B\u89C4\u5219\uFF1A
# \u82E5\u811A\u672C\u6267\u884C\u540E\u8FD4\u56DE1\uFF0C\u90A3\u4E48\u8BE5\u811A\u672C\u7A0D\u540E\u5C06\u4F1A\u88AB\u518D\u6B21\u6267\u884C\uFF0C\u91CD\u590D\u6B21\u6570\u76EE\u524D\u9ED8\u8BA4\u4E3A10
# \u82E5\u811A\u672C\u6267\u884C\u540E\u8FD4\u56DE2\uFF0C\u6216\u8005\u6BD42\u66F4\u9AD8\u7684\u4E00\u4E2A\u8FD4\u56DE\u503C\uFF0C\u811A\u672C\u5C06\u4E0D\u4F1A\u91CD\u590D\u6267\u884C\u3002
# \u5982\u679C\u811A\u672C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u7531\u4E8E\u6536\u5230\u7CFB\u7EDF\u4E2D\u65AD\u4FE1\u53F7\u88AB\u7EC8\u6B62\u4E86\uFF0C\u5219\u540C\u8FD4\u56DE\u503C\u4E3A1\u65F6\u7684\u884C\u4E3A\u76F8\u540C\u3002
# \u4E00\u4E2A\u811A\u672C\u7684\u6700\u5927\u6267\u884C\u65F6\u95F4\u4E3A60s\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u811A\u672C\u5C06\u4F1A\u88AB\u4E00\u4E2ASIGKILL\u4FE1\u53F7\u7EC8\u6B62\uFF0C\u4E4B\u540E\u91CD\u65B0\u6267\u884C\u3002
# \u901A\u77E5\u578B\u811A\u672C:\u5F53sentinel\u6709\u4EFB\u4F55\u8B66\u544A\u7EA7\u522B\u7684\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF08\u6BD4\u5982\u8BF4redis\u5B9E\u4F8B\u7684\u4E3B\u89C2\u5931\u6548\u548C\u5BA2\u89C2\u5931\u6548\u7B49\u7B49\uFF09\uFF0C\u5C06\u4F1A\u53BB\u8C03\u7528\u8FD9\u4E2A\u811A\u672C\uFF0C\u8FD9\u65F6\u8FD9\u4E2A\u811A\u672C\u5E94\u8BE5\u901A\u8FC7\u90AE\u4EF6\uFF0CSMS\u7B49\u65B9\u5F0F\u53BB\u901A\u77E5\u7CFB\u7EDF\u7BA1\u7406\u5458\u5173\u4E8E\u7CFB\u7EDF\u4E0D\u6B63\u5E38\u8FD0\u884C\u7684\u4FE1\u606F\u3002\u8C03\u7528\u8BE5\u811A\u672C\u65F6\uFF0C\u5C06\u4F20\u7ED9\u811A\u672C\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E00\u4E2A\u662F\u4E8B\u4EF6\u7684\u7C7B\u578B\uFF0C\u4E00\u4E2A\u662F\u4E8B\u4EF6\u7684\u63CF\u8FF0\u3002\u5982\u679Csentinel.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E86\u8FD9\u4E2A\u811A\u672C\u8DEF\u5F84\uFF0C\u90A3\u4E48\u5FC5\u987B\u4FDD\u8BC1\u8FD9\u4E2A\u811A\u672C\u5B58\u5728\u4E8E\u8FD9\u4E2A\u8DEF\u5F84\uFF0C\u5E76\u4E14\u662F\u53EF\u6267\u884C\u7684\uFF0C\u5426\u5219sentinel\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\u6210\u529F\u3002
#\u901A\u77E5\u811A\u672C
# sentinel notification-script &lt;master-name&gt; &lt;script-path&gt;
# sentinel notification-script mymaster /var/redis/notify.sh

# \u5BA2\u6237\u7AEF\u91CD\u65B0\u914D\u7F6E\u4E3B\u8282\u70B9\u53C2\u6570\u811A\u672C
# \u5F53\u4E00\u4E2Amaster\u7531\u4E8Efailover\u800C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8FD9\u4E2A\u811A\u672C\u5C06\u4F1A\u88AB\u8C03\u7528\uFF0C\u901A\u77E5\u76F8\u5173\u7684\u5BA2\u6237\u7AEF\u5173\u4E8Emaster \u5730\u5740\u5DF2\u7ECF\u53D1\u751F\u6539\u53D8\u7684\u4FE1\u606F\u3002
# \u4EE5\u4E0B\u53C2\u6570\u5C06\u4F1A\u5728\u8C03\u7528\u811A\u672C\u65F6\u4F20\u7ED9\u811A\u672C:
# &lt;master-name&gt; &lt;role&gt; &lt;state&gt; &lt;from-ip&gt; &lt;from-port&gt; &lt;to-ip&gt; &lt;to-port&gt;
# \u76EE\u524D&lt;state&gt;\u603B\u662F\u201Cfailover\u201D,
# &lt;role&gt;\u662F\u201Cleader\u201D\u6216\u8005\u201Cobserver\u201D\u4E2D\u7684\u4E00\u4E2A\u3002
# \u53C2\u6570 from-ip, from-port, to-ip, to-port\u662F\u7528\u6765\u548C\u65E7\u7684master\u548C\u65B0\u7684master(\u5373\u65E7\u7684slave)\u901A\u4FE1\u7684
# \u8FD9\u4E2A\u811A\u672C\u5E94\u8BE5\u662F\u901A\u7528\u7684\uFF0C\u80FD\u88AB\u591A\u6B21\u8C03\u7528\uFF0C\u4E0D\u662F\u9488\u5BF9\u6027\u7684\u3002
# sentinel client-reconfig-script &lt;master-name&gt; &lt;script-path&gt;
# sentinel client-reconfig-script mymaster /var/redis/reconfig.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_3-\u542F\u52A8\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8\u6548\u679C" aria-hidden="true">#</a> 3.\u542F\u52A8\u6548\u679C</h3><p>\u6765\u5230\u4E00\u4E2Asentinel\u670D\u52A1\u91CC\uFF0C\u4F7F\u7528info\u547D\u4EE4 \u5F97\u5230\u4E86\u5982\u4E0B\u6548\u679C\uFF1A <code>master0:name=mymaster,status=ok,address=150.158.58.15:6379,slaves=2,sentinels=3</code></p><h3 id="_4-\u4E3B\u52A8\u6302\u6389redis\u4E3B" tabindex="-1"><a class="header-anchor" href="#_4-\u4E3B\u52A8\u6302\u6389redis\u4E3B" aria-hidden="true">#</a> 4.\u4E3B\u52A8\u6302\u6389redis\u4E3B</h3><p>\u5148\u6253\u5F00sentinel\u96C6\u7FA4\u7684\u65E5\u5FD7\uFF0C\u6765\u5230sentinel\u6587\u4EF6\u5939\u91CC\u6267\u884C<code>docker-compose logs -f</code></p><p>\u5E72\u6389redis\u4E3B<code>docker stop 6ac57c328423</code>\uFF0C\u6839\u636E\u6587\u4EF6\u77E5\u9053\u9700\u8981\u7B49\u5F85\u7B49\u5F8530s\uFF1B</p><p>\u65E5\u5FD7\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-sentinel-2  | 1:X 01 Jun 2022 15:01:07.769 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-1  | 1:X 01 Jun 2022 15:01:07.773 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-3  | 1:X 01 Jun 2022 15:01:08.929 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u6765\u5230sentinel\u670D\u52A1\u91CC\u518D\u6B21\u4F7F\u7528info\u67E5\u770B\uFF0C\u53D1\u73B0master\u5DF2\u7ECF\u53D8\u6210\u4E866380</p><p><code>master0:name=mymaster,status=ok,address=150.158.58.15:6380,slaves=2,sentinels=3</code></p><h3 id="_5-\u518D\u6B21\u542F\u52A8\u521A\u597D\u5173\u95ED\u7684\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u518D\u6B21\u542F\u52A8\u521A\u597D\u5173\u95ED\u7684\u670D\u52A1" aria-hidden="true">#</a> 5.\u518D\u6B21\u542F\u52A8\u521A\u597D\u5173\u95ED\u7684\u670D\u52A1</h3><p><code>docker start 6ac57c328423</code> \u5F97\u5230\u65E5\u5FD7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-sentinel-2  | 1:X 01 Jun 2022 15:01:07.769 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-1  | 1:X 01 Jun 2022 15:01:07.773 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
redis-sentinel-3  | 1:X 01 Jun 2022 15:01:08.929 # +sdown slave 150.158.58.15:6379 150.158.58.15 6379 @ mymaster 150.158.58.15 6380
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u642D\u5EFA\u5B8C\u6210</p><h2 id="springboot\u4F7F\u7528redis\u54E8\u5175\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#springboot\u4F7F\u7528redis\u54E8\u5175\u96C6\u7FA4" aria-hidden="true">#</a> SpringBoot\u4F7F\u7528Redis\u54E8\u5175\u96C6\u7FA4</h2><h3 id="redisson\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#redisson\u4F7F\u7528" aria-hidden="true">#</a> Redisson\u4F7F\u7528</h3><p>\u5176\u4F59\u6B63\u5E38\u4F7F\u7528\u5C31\u884C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span></span><span class="token class-name">Redisson</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">Config</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedissonConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Redisson</span> redisson <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">useSentinelServers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addSentinelAddress</span><span class="token punctuation">(</span><span class="token string">&quot;redis://150.158.58.15:26379&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;redis://150.158.58.15:26380&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;redis://150.158.58.15:26381&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setMasterName</span><span class="token punctuation">(</span><span class="token string">&quot;mymaster&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Redisson</span><span class="token punctuation">)</span> <span class="token class-name">Redisson</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u4F7F\u7528springboot\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528springboot\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528SpringBoot\u9ED8\u8BA4\u914D\u7F6E</h3><p>\u5176\u4F59\u6B63\u5E38\u4F7F\u7528\u5C31\u884C</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">master</span><span class="token punctuation">:</span> mymaster
      <span class="token key atrule">nodes</span><span class="token punctuation">:</span> 150.158.58.15<span class="token punctuation">:</span><span class="token number">26379</span><span class="token punctuation">,</span>150.158.58.15<span class="token punctuation">:</span><span class="token number">26380</span><span class="token punctuation">,</span>150.158.58.15<span class="token punctuation">:</span><span class="token number">26381</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> \u5BC6\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,31);function x(z,w){const a=p("RouterLink");return i(),t(c,null,[d,e("p",null,[k,l(a,{to:"/temp/learndockerfile.html#docker-compose"},{default:r(()=>[y]),_:1})]),v,e("p",null,[h,l(a,{to:"/temp/learndockerfile.html#docker-compose"},{default:r(()=>[g]),_:1})]),f],64)}var S=b(m,[["render",x]]);export{S as default};
