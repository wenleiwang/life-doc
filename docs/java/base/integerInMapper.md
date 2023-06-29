---
title: integerInMapper
date: 2023-02-01 18:08:51
permalink: /pages/bfad93/
categories:
  - java
  - base
tags:
  - 
---
# Integer在Mapper中的判断
## 阐述
1. Integer类型在Mapper使用`<if test="state == 1">`直接判断即可
    * 前端state传入是null，条件不成立（不会影响整个判断，底层给处理了）
    * 前端state传入是1，条件会成立
2. Integer类型在Mapper使用`<if test="state == null">`
    * 前端state传入是null或前端不给state传值，条件成立
    * 前端state传入任意值，条件不成立
3. Integer类型在Mapper使用`<if test="state != -1">`
    * 前端state传入是-1，条件会不成立
    * 前端state传入是null或前端不给state传值，条件成立
    * 前端state出入除-1外的其他数字，条件成立
4. Integer类型在Mapper使用`<if test="state != null and state != -1">`
    * 前端state传入是-1，条件不成立
    * 前端state传入是null或前端不给state传值，条件不成立
    * 前端state出入除-1外的其他数字，条件成立
5. Intger类型在Mapper使用`<if test="state == '1'">`，不能用''，这个是用来判断字符串的。
## 结论
Integer在Mapper使用中前端传入null和数字一样成为了其中一种情况

Integer在Mapper不能用''判断

int在Mapper使用中前端传入null，Java会自动把值赋值成0