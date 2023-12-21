# Redis基础类型——set（集合）
[[toc]]

## 介绍基本概念
Redis集合相当于Java语言里得HashSet，它内部的键值对是无序的、唯一的。它的内部实现相当于一个特殊的字典，字典中所有的value都是一个值NULL。

当集合中最后一个元素被移除后，数据结构被自动删除，内存被回收。

set结构可以用来存储在某活动中中奖的用户ID，因为有去重功能，可以保证同一个用户不会中奖2次。

## 命令与Java方法对应关系

|命令|Java方法|描述|
|--|--|--|
|SADD|add(key,values)|将一个或多个 member 元素加入到集合 key 当中|
|SPOP|pop(key)|移除并返回集合中的一个随机元素|
|SRANDMEMBER|randomMember(key)|返回集合中的一个随机元素|
|SDIFF|difference(keys)|返回一个集合的全部成员，该集合是所有给定集合之间的差集|
|SINTER|intersect(keys)|返回一个集合的全部成员，该集合是所有给定集合的交集|
|SMOVE|move(key, value1, key2)|将 member 元素从 source 集合移动到 destination 集合|
|SUNION|union(key, key2)|返回一个集合的全部成员，该集合是所有给定集合的并集|
|SREM|remove(key, value1))|移除集合 key 中的一个或多个 member 元素|
