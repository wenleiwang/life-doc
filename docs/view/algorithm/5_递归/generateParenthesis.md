# 括号匹配问题
[[toc]]

## 描述
给出n对括号，请编写一个函数来生成所有的由n对括号组成的合法组合。

例如，给出n=3，解集为：

"((()))", "(()())", "(())()", "()()()", "()(())"

数据范围：0≤n≤10

要求：空间复杂度 O(n)，时间复杂度 O(2^n)


## 解题思路
选择不能任意的选，要有条件的选。
1. 有左括号先选左括号
2. 有右括号且有没有匹配的左括号时选右括号
3. 左括号一路选下去，当没有左括号一路右括号。为一种选择
4. 完成第一种选择，由画第三个左括号返回到没执行完的画第二个括号。符合条件2画左括号
5. 直至所有都完成

## 解题代码
```java
import java.util.*;

public class Solution {
    public ArrayList<String> generateParenthesis (int n) {
        ArrayList<String> list = new ArrayList<>();
        if (n <= 0) {
            return list;
        }
        recursion(0,0,"",list,n);
        return list;
    }
    
    // temp为返回
    private void recursion(int left , int right, String temp , ArrayList<String> res ,int n) {
        // 出口
        if (left == n && right == n) {
            res.add(temp);
            return ;
        }
        // 本层任务
        if (left < n) {
            recursion(left + 1,right,temp + "(",res,n);
        }
        if (right < n && right < left) {
            recursion(left,right + 1,temp + ")",res,n);
        }
    }
}
```
