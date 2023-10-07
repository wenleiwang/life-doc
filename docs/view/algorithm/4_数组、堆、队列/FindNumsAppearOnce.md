# 数组中只出现一次的的两个数字
[[toc]]

## 描述
一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

示例1
```
输入：
[1,4,1,6]
返回值：
[4,6]
说明：
返回的结果中较小的数排在前面  
```

示例2
```
输入：
[1,2,3,3,2,9]
返回值：
[1,9]
```
## 实现思路
用hash表记录次数

## 代码实现
```java
import java.util.*;

public class Solution {
    public int[] FindNumsAppearOnce (int[] array) {
        if (array == null || array.length == 0) {
            return null;
        }
        if (array.length == 1) {
            return null;
        }
        int [] res = new int[2];
        if (array.length == 2) {
            if (array[0] > array[1]) {
                res[0] = array[1];
                res[1] = array[0];
                return res;
            } else {
                return array;
            }
        }
        Map<Integer,Integer> map = new HashMap<>();
        for (int item : array) {
            if (map.get(item) == null) {
                map.put(item,1);
            } else {
                map.put(item,map.get(item)+ 1);
            }
        }
        boolean has = false;
        for(int item : map.keySet()) {
            if (1 == map.get(item)) {
                if (!has) {
                    res[0] = item;
                    has = true;
                } else {
                    res[1] = item;
                }
            }
        }
        if (res[1] > res[0]) {
            int temp = res[0];
            res[0] = res[1];
            res[0] = temp;
        }
        return res; 
    }
}
```
