---
title: usehash
date: 2023-02-01 18:08:51
permalink: /pages/d2c436/
categories:
  - redis
  - base
tags:
  - 
---
# Redis基础类型——hash（字典）

## 介绍基本概念
Redis的字典相当于Java语言里的HashMap，它是无序字典，内部存储了很多键值对。实现结构上与Java的HashMap也是一样的，都是“数组+链表”的二维结构，第一维hash的数组位置碰撞时，就会将碰撞的元素使用链表串接起来。

与Java不同地方是，Redis的字典值只能是字符串，他们的rehash方式不一样。

Java的HashMap在字典很大时，rehash是一个耗时的操作，需要一次性全部rehash

Redis为了追求高性能，不能堵塞服务，所以采用了渐进式rehash策略。

渐进式rehash会在rehash的同时，保留新旧两个hash结构，查询时会同时查两个hash结构，然后再后续的定时任务以及hash操作指令中，循序渐进地将旧hash的内容一点点迁移到新hash结构中。搬迁完成，就会使用新的hash结构取代旧的hash。

当hash移除最后一个元素之后，该数据结构被自动删除，内存被回收。

使用：
hash结构可以存储用户信息，与字符串需要一次性全部序列化整个对象不同，hash可以对用户结构中的每个字段单独存储。
hash结构中单个key也可进行计数，使用hincrby

优点：

获取是可以进行部分获取。相比于以整个字符串形式去保存用户信息（一次只能全部读取），节省网络流量

hash缺点：

hash结构存储消耗要高于单个字符串

## 命令与Java方法对应关系
Java方法基于redisTemplate.opsForList()。

|命令|Java方法|描述|
|--|--|--|
|HSET|put(object, key, value)|将哈希表 key 中的域 field 的值设为 value|
|HGET|get(object, key)|返回哈希表 key 中给定域 field 的值。|
|HKEYS|keys(object)|返回哈希表 key 中的所有域。|
|HVALS|values(object)|返回哈希表 key 中所有域的值|
|HGETALL|entries(object)|返回哈希表 key 中，所有的域和值|
|HEXISTS|hasKey(object, key)|查看哈希表 key 中，给定域 field 是否存在|

## 问题
如果用hash结构来缓存用户信息，该如何封装比较合适？

