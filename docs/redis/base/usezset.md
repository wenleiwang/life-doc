# Redis基础类型——zset（有序列表）

## 介绍基本概念
zset是Redis提供的最有特色的数据结构，它是面试官最爱问的数据结构。

它类似Java的SortedSet和HashMap的结合体，一方面它是一个set，保证了内部value的唯一性，另一方面它可以给每个value赋予一个score，代表这个value的排序权重。

内部用“跳跃列表”的数据结构实现

zset中最后一个元素被移除后，数据结构会被自动删除，内存被回收。

zset可以用来存储粉丝列表，value值是粉丝的用户ID，score是关注时间。可以对粉丝列表按关注时间进行排序。


## 命令与Java方法对应关系

|命令|Java方法|描述|
|--|--|--|
|ZADD|	add(key,value,score)|	将一个或多个 member 元素及其 score 值加入到有序集 key 当中|
|ZREM|	remove(key,value)|	移除有序集 key 中的一个或多个成员|
|ZCARD|	zCard(key)|	返回有序集 key 对应的成员总数|
|ZCOUNT|	count(key, score1, score2)|	返回有序集 key 中，score 值在 min 和 max 之间成员数量|
|ZRANGE|	range(key, index1, index2)	返回有序集 key 中，指定区间内的成员|
|ZRANGEBYSCORE|	rangeByScore(key, score1, score2)|	返回有序集 key 中，所有 score 值区间内（包含）的成员|
|ZREVRANGE|	reverseRange(key, index1 , index2)|	与ZRANGE排序规则相反|
|ZREVRANGEBYSCORE|	reverseRangeByScore(key, score1, score2)|	与ZRANGEBYSCORE排序规则相反|
|ZINCRBY|	incrementScore(key, value, increment)|	为有序集 key 的成员 member 的 score 值加上增量 increment|

## 使用注意事项
获取指定value的score，内部的score使用double类型存储，所有存在小数点精度问题

## 跳跃列表
zset内部的排序功能是通过“跳跃列表”数据结构来实现的。
以为zset要支持随机的插入和删除，所以它不宜使用数字来表示。

我们需要链表按照score值进行排序。这意味着当有新元素需要插入式，要定位到特定位置的插入点，这样可以继续保证链表的有序。通常我们会通过二分查找来找到插入点，但是二分查找的对象必须是数组，只有数组才可以支持快速位置定位，链表做不到怎么办？

跳跃列表就类似于层级制，最下面一层所有元素都会串联起来。然后每隔几个元素挑选出一个代表，再将这几个代表使用另外一层指针串起来，表示一层。这些一层代表里再挑选出二级代表，再串起来。最终形成金字塔结构。

跳跃列表采取一个随机策略来决定新元素可以兼职到几层。
首先其位于L0层的概率肯定100%，而兼职L1层只有50%的概率，到L2层只有25%的概率，到L3层只有12.5%的概率，依次类推，一直到最顶层L31层。

绝大多数元素都过不了几层，只有极少数元素可以深入到顶层。列表中的元素越多，能够深入的层次就越深，元素能进入到顶层的可能性就越大。

> [关于这块算法可以参考左神这个视频 1小时31分54秒开始的关于跳表的讲述](https://www.bilibili.com/video/BV13g41157hK?p=19) 个人觉得他们是一个原理