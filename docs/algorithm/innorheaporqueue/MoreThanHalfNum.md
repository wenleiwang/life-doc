---
title: MoreThanHalfNum
date: 2023-02-01 18:08:51
permalink: /pages/2cb301/
categories:
  - algorithm
  - innorheaporqueue
tags:
  - 
---
# 数组中出现次数超过一半的数字
## 描述
给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2

## 解题思路
使用map存放重复次数

## 解题代码
```java
import java.util.*;
public class Solution {
    public int MoreThanHalfNum_Solution(int [] array) {
        if (array == null || array.length == 0) {
            return 0;
        }
        if (array.length == 1) {
            return array[0];
        }
        Map<Integer,Integer> map = new HashMap<>();
        for (int item : array) {
            if (map.get(item) == null) {
                map.put(item,1);
            } else {
                map.put(item,map.get(item)+ 1);
            }
        }
        int max = 0;
        int data = 0;
        for(int item : map.keySet()) {
            if (max < map.get(item)) {
                max = map.get(item);
                data = item;
            }
        }
        return data;      
    }
}
```