# HyperLogLog
[[toc]]

## 使用场景
* 统计UV（独立访客）

## 使用方法
### 命令行模式
HyperLogLog提供2个指令pfadd和pfcount，一个是增加计数，一个是获取计数。
```
127.0.0.1:6379> pfadd 20220525 user3
(integer) 1
127.0.0.1:6379> pfadd 20220525 user4
(integer) 1
127.0.0.1:6379> pfcount 20220525
(integer) 4
127.0.0.1:6379>
```

### Java模式
```java
// 成功会返回1
Long add = redisTemplate.opsForHyperLogLog().add("20220525", "user5", "user6");
System.out.println("add:" + add);
// 返回统计的总数
Long size = redisTemplate.opsForHyperLogLog().size("20220525");
System.out.println("size" + size);
redisTemplate.opsForHyperLogLog().delete("20220525");
```

## 使用注意
* HyperLogLog提供不精确的去重方案，虽然不精确，但也不是很离谱，标准误差0.81%
* 每个HyperLogLog结构需要12KB的存储空间，Redis已经对HyperLogLog的存储进行了优化，不是一开始就12KB。计数比较小时采用稀疏矩阵存储，空间占用很小，数据慢慢变大超过阈值时，才会变成稠密矩阵12KB。
* pf是指数据结构的发明人Philippe Flaolet的缩写。

---

> 版本说明：
>
>Java 8
>
>SpringBoot v2.3.3.RELEASE
>
>Redis 6.2.5

