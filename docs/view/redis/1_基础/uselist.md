# Redis基础类型——list(列表)
[[toc]]

Java方法基于redisTemplate.opsForList()。

## 介绍基本概念
Redis的列表相当于Java语言的LinkedList，是链表而不是数组。意味着插入和删除操作非常快，时间复杂度O(1)，但索引定位慢，时间复杂度O(n)。

当列表弹出最后一个元素之后，该数据结构被自动删除，内存被回收。

Redis的列表结构常用来做异步队列使用。将需要延后的处理的任务结构体序列化成字符串，塞进Redis的列表，另一个线程从这个列表中轮询数据进行处理。

理解可以，但是Redis底层存储的不是一个简单的LinkedList，而是称之为“快速链表”（quicklist）的一个结构。

列表元素比较少的情况下，会使用一块连续的内存存储，这个结构是压缩列表（ziplist）。当数据量较多的时候才会改成quicklist。

因为普通的链表需要的附加指针空间太大，会浪费空间，还会加重内存的碎片化。所以Redis将链表和ziplist结合起来组成了quicklist，也就是将多个ziplist使用双向指针串起来使用。
这样quicklist既满足快速的插入删除性能，又不会出现太大的空间冗余。


## 命令与Java方法对应关系

|命令|Java方法|描述|
|--|--|--|
|LPUSH|leftPush(key, value)|将一个或多个值 value 插入到列表 key 的表头|
|LPOP|leftPop(key)|移除并返回列表 key 的头元素|
|RPUSH|rightPush(key, value)|将一个或多个值 value 插入到列表 key 的表尾|
|RPOP|rightPop(key)|移除并返回列表 key 的尾元素|
|linde|index(key,index)|相当于Java链表的get(int index)方法，需要对链表进行遍历，性能会随着index的增大而变差。index可以为负，表示倒数第几个元素|
|ltrim|trim(K key, long start, long end)|保留，ltrim的两个参数start_index和end_index定义了一个区间，在这个区间内的值ltrim要保留，区间之外砍掉。可以通过ltrim实现一个定长的链表|

```java
  HashOperations hashOperations = redisTemplate.opsForHash();
  // 将哈希表 key 中的域 field 的值设为 value 。
  //如果 key 不存在，一个新的哈希表被创建并进行 HSET 操作。
  //如果域 field 已经存在于哈希表中，旧值将被覆盖。
  String object = "Object", hashKey1 = "hashKey1", hashKey2 = "hashKey2", hashValue1 = "hashValue1", hashValue2 = "hashValue2";
  hashOperations.put(object, hashKey1, hashValue1);
  hashOperations.put(object, hashKey2, hashValue2);
  // 返回哈希表 key 中给定域 field 的值。
  Object result = hashOperations.get(object, hashKey1);
  // 返回哈希表 key 中的所有域。
  Set set = hashOperations.keys(object);
  //返回哈希表 key 中所有域的值
  List list = hashOperations.values(object);
  // 返回哈希表 key 中，所有的域和值。
  //在返回值里，紧跟每个域名(field name)之后是域的值(value)，所以返回值的长度是哈希表大小的两倍。
  Map map = hashOperations.entries(object);
  // 查看哈希表 key 中，给定域 field 是否存在
  hashOperations.hasKey(object, hashKey1);
```
