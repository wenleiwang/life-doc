# 判断是否为回文字符串

## 描述
给定一个长度为 n 的字符串，请编写一个函数判断该字符串是否回文。如果是回文请返回true，否则返回false。

字符串回文指该字符串正序与其逆序逐字符一致。

数据范围：0<n≤1000000

要求：空间复杂度 O(1)，时间复杂度 O(n)

## 解题代码
### 使用N空间
```java
public class Solution {
    public boolean judge (String str) {
        if (str == null) {
            return false;
        }
        String [] s = str.split("");
        int l = s.length;
        int num = l / 2;
        int index = l - 1;
        for (int i = 0 ; i < num ; i++) {
            if (!s[i].equals(s[index - i])) {
                return false;
            }
        }
        return true;
    }
}
```
### 使用有限空间
```java
public class Solution {
    public boolean judge (String str) {
        if (str == null) {
            return false;
        }
        int i = 0;
        int j = str.length() -1;
        while (i < j) {
            if (str.charAt(i) != str.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
```