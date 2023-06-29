---
title: object
date: 2023-02-01 18:08:51
permalink: /pages/b18eb5/
categories:
  - java
  - base
tags:
  - 
---
# Object 对象



## 主要包含的方法
|方法名|用途|
|--|--|
|getClass()||
|int hashCode()|返回对象的hash码值|
|boolean equals(Object obj)||
|Object clone()||
|String toString()||
|void notify()||
|void notifyAll()||
|void wait(long timeout)||
|void wait(long timeout, int nanos)||
|void wait()||
|void finalize()||

## hashCode()和equals()关系
1. 如果两个对象相同（即用equals比较返回true），那么它们的hashCode值一定要相同
2. 如果两个对象不同（即用equals比较返回false），那么它们的hashCode值可能相同也可能不同；
3. 如果两个对象的hashCode相同（存在哈希冲突），那么它们可能相同也可能不同(即equals比 较可能是false也可能是true)
4. 如果两个对象的hashCode不同，那么他们肯定不同(即用equals比较返回false)

## ==和equals()关系
== 比较的是内存地址是否相同，基本数据类型是否相同
equals 没有重写时与==等价