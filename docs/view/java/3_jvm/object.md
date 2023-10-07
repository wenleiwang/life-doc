# Java对象
[[toc]]

Java对象由3部分组成
1. Java对象头
2. 实例数据
3. 对齐填充字节

## Java对象头
Java对象头有3部分组成
1. Mark Word
2. 类型指针
3. 数组长度（只有数组对象才有）

### Mark Word
Mark Word组成
1. 锁状态
2. hashcode
3. GC信息

[参考文章](https://www.jb51.net/article/236532.htm)
