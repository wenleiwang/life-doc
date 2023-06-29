---
title: useLimit
date: 2023-02-01 18:08:51
permalink: /pages/bac779/
categories:
  - redis
  - use
tags:
  - 
---
# Redis实现限流

限流算法在分布式领域是一个经常被提起的话题，当系统的处理能力有限时，如果阻止计划外的请求继续对系统施加压力？

除了控制流量，还可以控制用户行为，避免垃圾请求（严格限定某行为在规定时间被允许的次数，超过就非法行为）

## 简单限流
使用zset数据结构。

* score值表示限制时间
* key表示一种行为
* value保证唯一即可（毫秒时间戳）

```java
private boolean isActionAllowed(String userId,String actionKey,int perid,int maxCount) {
    String key = String.format("hist:%s:%s",userId,actionKey);
    long nowTs = System.currentTimeMillis();
    // 开启事务
    redisTemplate.multi();
    try {
        redisTemplate.opsForZSet().add(key,nowTs,nowTs);
        redisTemplate.opsForZSet().removeRangeByScore(key, 0, nowTs - perid * 1000);
        Long aLong = redisTemplate.opsForZSet().zCard(key);
        // 执行
        redisTemplate.exec();
        return aLong <= maxCount;
    } catch (Exception e) {
        // 放弃
        redisTemplate.discard();
        return false;
    }
}
```

要记录时间范围内所有操作，如果操作量很大，就不适合使用这个作为限流的方法。

## 漏斗限流
漏斗限流是最常用的限流方法之一。

```java
package learn.note.redis;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author Wang WenLei
 * @Date 2022/5/26 8:21
 * @Version 1.0
 **/
public class FunnelRateLimiter {
    static class Funnel {
        /**
         * 漏斗容量
         */
        int capacity;
        /**
         * 漏嘴流水速率
         */
        float leakingRate;
        /**
         * 漏斗剩余空间
         */
        int leftQuota;
        /**
         * 上次漏水时间
         */
        long leakingTs;

        public Funnel(int capacity, float leakingRate) {
            this.capacity = capacity;
            this.leakingRate = leakingRate;
            this.leftQuota = capacity;
            this.leakingTs = System.currentTimeMillis();
        }

        void makeSpace() {
            long nowTs = System.currentTimeMillis();
            // 距离上次漏水过去了多久
            long deltaTs = nowTs - leakingTs;
            // 可以腾出的空间
            int deltaQuota = (int) (deltaTs * leakingRate);
            // 间隔时间太长，整数数字过大溢出
            if (deltaQuota < 0) {
                // 漏斗空间变满
                this.leftQuota = capacity;
                // 改为当前时间
                this.leakingTs = nowTs;
                return;
            }
            // 腾出空间太小，最小单位是1。那就下次这次无操作
            if (deltaQuota < 1) {
                return;
            }
            // 漏斗空间增加释放掉的空间
            this.leftQuota += deltaQuota;
            // 改为当前时间
            this.leakingTs = nowTs;
            if (this.leftQuota > this.capacity) {
                // 如果漏斗剩余空间大于总空间，把漏斗剩余空间变满
                this.leftQuota = this.capacity;
            }
        }

        boolean watering(int quota) {
            makeSpace();
            if (this.leftQuota >= quota) {
                this.leftQuota -= quota;
                return true;
            }
            return false;
        }

        boolean watering() {
            return watering(1);
        }
    }

    private Map<String, Funnel> funnels = new HashMap<>();

    public boolean isActionAllowed(String userId, String actionKey, int capacity, float leakingRate) {
        String key = String.format("%s:%s", userId, actionKey);
        Funnel funnel = funnels.get(key);
        if (funnel == null) {
            funnel = new Funnel(capacity,leakingRate);
            funnels.put(key, funnel);
        }
        return funnel.watering();
    }

}
```
简单的原理在代码中已经体现，实际使用中需要完善
1. 不是分布式，需要考虑从hash结构中取值，内存中运算，再填回hash结构中（隐藏动作）。三个操作的不是原子的，需要适当加锁
2. 分布式，需要考虑hash分布在不同的主机上，要把结构共享出来。依然要考虑3个操作的原子性问题。

有没有简单的解决方案？如下节

## 漏斗限流之Redis-Cell
Redis4.0提供了一个限流模块Redis-Cell。该模块使用了漏斗算法，并提供了原子的限流指令。
### 安装Redis-Cell
根据自己系统下载对应的版本，我这里是CentOS7，
[下载github地址](https://github.com/brandur/redis-cell/releases)
解压`tar -zxvf redis-cell-v0.3.0-x86_64-unknown-linux-gnu.tar.gz`

`vim redis.conf`添加`loadmodule pwd刚才的地址/libredis_cell.so`

我这里使用的Docker安装的redis，所以启动时需要把文件映射一下，如下命令
```
docker run -v /home/wenlei/software/redis.conf:/usr/local/etc/redis/redis.conf -v /home/wenlei/software/redis-cell/libredis_cell.so:/home/wenlei/software/redis-cell/libredis_cell.so -d --name redis-cell -p 6381:6379 redis redis-server /usr/local/etc/redis/redis.conf
```
::: tip 解释
做了2个映射
1. 配置文件的映射。从/home/wenlei/software文件夹映射到容器的/usr/local/etc/redis/文件夹下
2. module文件的映射。从/home/wenlei/software/redis-cell/文件夹映射到/home/wenlei/software/redis-cell/

:::


### 命令行模式
该模块只有一个指令`cl.throttle`，它的参数和返回值都稍稍复杂。

如下：
```
命令格式：cl.throttle  key名字   令牌桶容量-1   令牌产生个数   令牌产生时间 本次取走的令牌数 （不写时默认1，负值表放入令牌）
cl.throttle key 15 30 60 1  # 运行key行为的频率为每60s最多30次，漏斗初始容量15，即一开始可以连续操作15次，然后开始受漏斗速率影响

返回格式：
1)(integer) 0   #    0成功，1失败

2)(integer) 15  #    令牌桶的容量

3)(integer) 14  #    当前桶内剩余的令牌数

4)(integer) -1  #    成功时该值为-1，失败时表还需要等待多少秒可以有足够的令牌

5)(integer) 2   #    表预计多少秒后令牌桶会满
```

### SpringBoot配合LUA脚本使用该命令
```java
@Autowired
RedisTemplate redisTemplate;

@GetMapping("/limit")
public String limit(){
    if (isActionAllowed("test",15,30,60,1)) {
        return "通行~";
    } else {
        return "繁忙请稍后";
    }
}
/**
* lua 脚本
*/
private static final String LUA_SCRIPT = "return redis.call('cl.throttle',KEYS[1], ARGV[1], ARGV[2], ARGV[3], ARGV[4])";

public boolean isActionAllowed(String key, int maxBurst, int countPerPeriod, int period ,int quantity) {
    DefaultRedisScript<List> script = new DefaultRedisScript<>(LUA_SCRIPT, List.class);
    List<Long> rst = (List<Long>) redisTemplate.execute(script, Arrays.asList(key), maxBurst, countPerPeriod, period, quantity);
    //这里只关注第一个元素0表示正常，1表示过载
    return rst.get(0) == 0;
}
```