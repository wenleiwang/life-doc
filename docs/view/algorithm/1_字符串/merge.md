# 合并两个有序的数组
[[toc]]
## 描述
给出一个有序的整数数组 A 和有序的整数数组 B ，请将数组 B 合并到数组 A 中，变成一个有序的升序数组

数据范围：0≤n,m≤100，A_i <=100

注意：
1. 保证 A 数组有足够的空间存放 B 数组的元素， A 和 B 中初始的元素数目分别为 m 和 n，A的数组空间大小为 m+n
2. 不要返回合并的数组，将数组 B 的数据合并到 A 里面就好了，且后台会自动将合并后的数组 A 的内容打印出来，所以也不需要自己打印
3. A 数组在[0,m-1]的范围也是有序的

## 实现思路
1. 使用3个指针，一个指针m指向A的最大、一个指针n指向B的最大，一个指针k指向A最后存放的位置
2. AB中找到最大放在k位置上，k--相应的m或n也自减1
3. 循环补齐所有

## 代码实现
```java
import java.util.*;
public class Solution {
    public void merge(int A[], int m, int B[], int n) {

        int k = m + n;
        while (m > 0 || n > 0) {
            if (m > 0 && n > 0) {
                if (A[m - 1] > B[n - 1]) {
                    A[k - 1] = A[m - 1];
                    m--;
                } else {
                    A[k - 1] = B[n - 1];
                    n--;
                }
            } else if (m > 0) {
                A[k - 1] = A [m - 1];
                m--;
            } else if (n > 0) {
                A[k - 1] = B [n - 1];
                n--;
            }
            k--;
        }
    }
}
```
