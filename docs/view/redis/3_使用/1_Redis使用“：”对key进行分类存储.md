# Redis使用“：”对key进行分类存储
[[toc]]

通常存在redis中的key值是这个样子的，只看key值，我们很难知道这个key值是干什么的，有什么用处。

![](img/ec7bbee871a74acaba1c0f044982bdc0.png)
所以需要我们对key值进行一定的分类：

**使用“：”冒号来体现层次。**

例如：set intern:user:user_code 123456 得到形式如下：

![](img/9b31070e62411f2fbea691c0f165bf15.png)