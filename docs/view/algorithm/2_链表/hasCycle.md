# 判断链表中是否有环
[[toc]]

## 描述
判断给定的链表中是否有环。如果有环则返回true，否则返回false。

数据范围：链表长度 0≤n≤10000，链表中任意节点的值满足 |val| <= 100000∣val∣<=100000

要求：空间复杂度 O(1)，时间复杂度 O(n)

## 解题思路
在单链表中只有三种情况

![](./img/hasCycle/2022-06-12-08-36-45.png)

1. 有环，没有出去的点
2. 无环，有出去的点
3. 链表为空

使用快慢指针，快指针一次走2步，慢指针一次走1步。

所以如果遇到环的话，快指针经过几次后会与慢指针重合。

如果没有环，快指针会先遇到空出去。

## 代码实现
```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        // 链表为空或链表里就一个结点无法使用快慢指针，直接排除
        if (head == null || head.next == null) {
            return false;
        }
        // 快指针
        ListNode f = head;
        // 慢指针
        ListNode l = head;
        while (f != null && l != null) {
            // 快指针一次二步
            if (f.next != null) {
                f = f.next.next;
            } else {
                f = null;
            }
            // 慢指针一次一步
            l = l.next;
            // 快指针与慢指针重合，有环
            if (f == l) {
                return true;
            }
        }
        // 循环正常结束，无环
        return false;
    }
}
```
