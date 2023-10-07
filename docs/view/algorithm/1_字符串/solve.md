# 反转字符串
[[toc]]
## 描述
写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）

数据范围： 0≤n≤1000

要求：空间复杂度 O(n)，时间复杂度 O(n)

## 实现代码
### 暴力循环
```java
import java.util.*;

public class Solution {
    public String solve (String str) {
        if (str == null) {
            return null;
        }
        int j = str.length() - 1;
        StringBuffer sb = new StringBuffer();
        while (j >= 0) {
            sb.append(str.charAt(j));
            j--;
        }
        return sb.toString();
    }
}
```
运行时间：19ms
占用内存：9900KB

### 双指针
```java
import java.util.*;

public class Solution {
    public String solve (String str) {
        if (str == null) {
            return null;
        }
        int j = str.length() - 1;
        int i = 0;
        char [] s = str.toCharArray();
        while (i < j) {
            char temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            j--;
            i++;
        }
        return new String(s);
    }
}
```
运行时间：19ms
占用内存：9816KB
