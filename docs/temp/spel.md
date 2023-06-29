---
title: spel
date: 2023-02-01 18:08:51
permalink: /pages/bf6f45/
categories:
  - temp
tags:
  - 
---
# SpEL

文章摘自：http://itmyhome.com/spring/expressions.html

## 0.什么是SpEL？

Spring表达式语言。是一个支持查询和操作运行时对象导航图功能的强大的表达式语言。它的语法类似于传统EL，但提供额外的功能，最出色的就是函数调用和简单字符串的模板函数。

尽管有其他可选的 Java 表达式语言，如 OGNL, MVEL,JBoss EL 等等，但 Spel 创建的初衷是了给 Spring 社区提供一种简单而高效的表达式语言，一种可贯穿整个 Spring 产品组的语言。这种语言的特性应基于 Spring 产品的需求而设计。

虽然SpEL引擎作为Spring 组合里的表达式解析的基础 ，但它不直接依赖于Spring,可独立使用。

## 1.功能概述

表达式语言支持一下功能

* 文字表达式
* 布尔和关系运算
* 正则表达式
* 类表达式
* 访问 properties、arrays、lists、maps
* 方法调用
* 关系运算符
* 参数
* 调用构造函数
* Bean引用
* 构造Array
* 内嵌lists
* 内嵌maps
* 三元运算符
* 变量
* 用户定义的函数
* 集合投影
* 集合筛选
* 模板表达式



## 2.简单用法

### 1.文字表达式

