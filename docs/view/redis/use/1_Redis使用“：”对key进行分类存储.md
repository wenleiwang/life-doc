# Redis使用“：”对key进行分类存储
[[toc]]

通常存在redis中的key值是这个样子的，只看key值，我们很难知道这个key值是干什么的，有什么用处。

![image-20230919151052524](img/1_Redis使用“：”对key进行分类存储/0c3e872999387f60b50bcbb96a239f96.png)

所以需要我们对key值进行一定的分类：

**使用“：”冒号来体现层次。**

例如：set intern:user:user_code 123456 得到形式如下：

![image-20230919151114008](img/1_Redis使用“：”对key进行分类存储/7ba5c8963a7055d9d72f1f435191d47a.png)
