---
title: twoSum
date: 2023-02-01 18:08:51
permalink: /pages/ed6fc4/
categories:
  - algorithm
  - innorheaporqueue
tags:
  - 
---
# 两数之和
## 描述
给出一个整型数组 numbers 和一个目标值 target，请在数组中找出两个加起来等于目标值的数的下标，返回的下标按升序排列。

（注：返回的数组下标从1开始算起，保证target一定可以由数组里面2个数字相加得到）

数据范围：2≤len(numbers)≤10 的5次方 ，−10≤numbers_i ≤10 的9次方,0≤target≤10 的9次方
 
要求：空间复杂度 O(n)，时间复杂度 O(nlogn)

示例1
```
[3,2,4],6
返回值：
[2,3]
说明：
因为 2+4=6 ，而 2的下标为2 ， 4的下标为3 ，又因为 下标2 < 下标3 ，所以返回[2,3]            
```
示例2
```
[20,70,110,150],90
返回值：
[1,2]
说明：
20+70=90  
```
## 解题思路
1. 放入map，重复的下标会代替前面的下标
2. 循环得到第一个值，目标减去第一个值后取map取，取到即可以得到目标值
3. 第一个值得下标，与map取到的下标比较。小的放返回前面。如果第一个值与map取到的值一样，下标直接第一个值下标放在前面，map放在后面

## 代码实现
```java
import java.util.*;

public class Solution {
    public int[] twoSum (int[] numbers, int target) {
        if (numbers == null || numbers.length == 0 ) {
            return null;
        }
        int [] res = new int[2];
        Map<Integer,Integer> map = new HashMap<>();
        
        for (int i = 0 ; i < numbers.length ; i++) {
            map.put(numbers[i],i);
        }
        
        for (int i = 0 ; i < numbers.length ; i++) {
            if (map.get(target - numbers[i]) != null && i != map.get(target - numbers[i])) {
                int tar = map.get(target - numbers[i]);
                if (tar >= i) {
                    res[0] = i + 1;
                    res[1] = tar + 1;
                    break;
                }
            }
        }
        return res;
    }
}
```