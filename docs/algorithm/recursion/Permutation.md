# 字符串的排列
## 描述
输入一个长度为 n 字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。

例如输入字符串ABC,则输出由字符A,B,C所能排列出来的所有字符串ABC,ACB,BAC,BCA,CBA和CAB。

数据范围：n < 10
要求：空间复杂度 O(n!)，时间复杂度 O(n!)

## 思路
全排列思想

1. 从候选者中选出一个，用循环选
2. 标记已经使用
3. 进入下一层
4. 回溯，保证循环选到每个元素

## 解题代码
```java
import java.util.*;

public class Solution {
    Set<String> set = new HashSet<>();
    public ArrayList<String> Permutation (String str) {
        ArrayList<String> list = new ArrayList<>();
        if (str == null || "".equals(str.trim())) {
            return list;
        }
        boolean [] vis = new boolean [str.length()] ;
        String temp = "";
        disposeData(temp,str,vis);
        list = new ArrayList<>(set);
        return list;
    }
    
    private void disposeData(String temp,String data,boolean [] vis) {
        // 终止条件
        if (temp.length() == (data.length() )) {
            // 返回值
            set.add(temp);
        } else {
            // 本级任务：选出一个，进入下一层
            for (int i = 0 ; i < data.length() ; i++) {
                if (vis[i]) {
                    continue;
                }
                vis[i] = true;
                temp += data.charAt(i);
                disposeData(temp,data,vis);
                // 回溯
                vis[i] = false;
                temp = temp.substring(0,temp.length() - 1);
            }
        }
    }
}
```