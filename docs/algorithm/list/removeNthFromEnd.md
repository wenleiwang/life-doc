# 删除链表的倒数第n个节点
## 描述
给定一个链表，删除链表的倒数第 n 个节点并返回链表的头指针
例如，
给出的链表为: 1\to 2\to 3\to 4\to 51→2→3→4→5, n= 2n=2.
删除了链表的倒数第 nn 个节点之后,链表变为1\to 2\to 3\to 51→2→3→5.

数据范围： 链表长度 0≤n≤1000，链表中任意节点的值满足 0≤val≤100

要求：空间复杂度 O(1)，时间复杂度 O(n)

备注：
题目保证 n 一定是有效的

## 结题思路
1. 先统计所有的点为i
2. 所有的点减去倒数几个点得到正数的第几个点
3. 使用循环得到这个点next和这个点的前一个点pro
4. 把这个点的前一个点和这个点的后一个点连接得到新的链表，返回头

>注意：
1.链表为空
2.链表1个点去掉一个点
3.去掉头结点

## 代码实现
```java
import java.util.*;

public class Solution {
    public ListNode removeNthFromEnd (ListNode head, int n) {
        // 链表为空
        if (head == null) {
            return null;
        }
        // 链表1个点去掉一个点
        if (n >= 1 && head.next == null) {
            return null;
        }
        
        ListNode next = head;
        int i = 0;
        while (next != null) {
            i++;
            next = next.next;
        }
        if (n > i) {
            return null;
        } else {
            int num = i - n;
            // 去掉头结点
            if (num == 0) {
                return head.next;
            }
            next = head;
            ListNode pro = head;
            for (int j = 0 ; j < num ; j++) {
                pro = next;
                next = next.next;
            }
            pro.next = next.next;
            return head;
        }
    }
}
```

