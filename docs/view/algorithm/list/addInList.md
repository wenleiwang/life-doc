# 链表相加(二)
## 描述

假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。

给定两个这种链表，请生成代表两个整数相加值的结果链表。

数据范围：0≤n,m≤1000000，链表任意值 0≤val≤9

要求：空间复杂度 O(n)，时间复杂度 O(n)

## 解题思路

### 空间复杂度O(1)
1. 把链表1反转，求出链表1的长度
2. 把链表2反转，求出链表2的长度
3. 按短的逐位相加，并在相加时加上进位
4. 长出的部分保留，并加上进位
5. 如果所有求完还有进位，新建一个节点
6. 反转回来得到目标链表

### 空间复杂度O(n)
使用栈结构来反转列表，就可以啦

## 代码实现
### 空间复杂度O(1)
```java
import java.util.*;
public class Solution {
    public ListNode addInList (ListNode head1, ListNode head2) {
        if (head1 == null && head2 == null) {
            return null;
        }
        if (head1 == null) {
            return head2;
        }
        if (head2 == null) {
            return head1;
        }
        ListNode ch1 = null;
        ListNode next1 = head1;
        int num1 = 0;
        while (next1 != null) {
            num1++;
            ListNode cur = next1.next;
            next1.next = ch1;
            ch1 = next1;
            next1 = cur;
        }
        ListNode ch2 = null;
        ListNode next2 = head2;
        int num2 = 0;
        while (next2 != null) {
            num2++;
            ListNode cur = next2.next;
            next2.next = ch2;
            ch2 = next2;
            next2 = cur;
        }
        next1 = ch1;
        next2 = ch2;
        ListNode head = null;
        if (num1 > num2) {
            int pro = 0;
            ListNode curNode = null;
            for (int i = 0 ; i < num1 ; i++) {
                curNode = next1;
                if (i < num2) {
                    int cur = next1.val + next2.val;
                    cur += pro;
                    pro = cur / 10;
                    next1.val = cur % 10;
                    next1 = next1.next;
                    next2 = next2.next;
                } else {
                    int cur = next1.val + pro;
                    pro = cur / 10;
                    next1.val = cur % 10;
                    next1 = next1.next;
                }
            }
            if (pro > 0) {
                ListNode node = new ListNode(pro);
                curNode.next = node;
            }
            head = ch1;
        } else if (num2 > num1){
            int pro = 0;
            ListNode curNode = null;
            for (int i = 0 ; i < num2 ; i++) {
                curNode = next2;
                if (i < num1) {
                    int cur = next1.val + next2.val;
                    cur += pro;
                    pro = cur / 10;
                    next2.val = cur % 10;
                    next1 = next1.next;
                    next2 = next2.next;
                } else {
                    int cur = next2.val + pro;
                    pro = cur / 10;
                    next2.val = cur % 10;
                    next2 = next2.next;
                }
            }
            if (pro > 0) {
                ListNode node = new ListNode(pro);
                curNode.next = node;
            }
            head = ch2;
        } else {
            int pro = 0;
            ListNode curNode = null;
            for (int i = 0 ; i < num1 ; i++) {
                curNode = next1;
                int cur = next1.val + next2.val;
                cur += pro;
                pro = cur / 10;
                next1.val = cur % 10;
                next1 = next1.next;
                next2 = next2.next;
            }
            if (pro > 0) {
                ListNode node = new ListNode(pro);
                curNode.next = node;
            }
            head = ch1;
        }

        next1 = head;
        ch1 = null;
        while (next1 != null) {
            ListNode cur = next1.next;
            next1.next = ch1;
            ch1 = next1;
            next1 = cur;
        }
        return ch1;
    }
}
```

### 空间复杂度O(n)
使用栈
```java
import java.util.*;

public class Solution {

    public ListNode addInList (ListNode head1, ListNode head2) {
                if (head1 == null && head2 == null) {
            return null;
        }
        if (head1 == null) {
            return head2;
        }
        if (head2 == null) {
            return head1;
        }
        Stack<ListNode> stack1 = new Stack<>();
        ListNode next = head1;
        while (next != null) {
            stack1.push(next);
            next = next.next;
        }

        Stack<ListNode> stack2 = new Stack<>();
        next = head2;
        while (next != null) {
            stack2.push(next);
            next = next.next;
        }
        ListNode head = new ListNode(-1);
        next = head;
        ListNode curNode = null;
        int pro = 0;
        while (!stack1.empty() && !stack2.empty()) {
            curNode = next;
            ListNode h1 = stack1.pop();
            ListNode h2 = stack2.pop();
            int cur = h1.val + h2.val;
            cur += pro;
            pro = cur / 10;
            next.next = new ListNode(cur % 10);
            next = next.next;
        }
        while (!stack1.empty()) {
            curNode = next;
            ListNode h1 = stack1.pop();
            int cur = h1.val + pro;
            pro = cur / 10;
            next.next = new ListNode(cur % 10);
            next = next.next;
        }
        while (!stack2.empty()) {
            curNode = next;
            ListNode h2 = stack2.pop();
            int cur = h2.val + pro;
            pro = cur / 10;
            next.next = new ListNode(cur % 10);
            next = next.next;
        }
        if (pro > 0) {
            next.next = new ListNode(pro);
        }
        head = head.next;

        // 反转
        next = head;
        curNode = null;
        while (next != null) {
            ListNode cur = next.next;
            next.next = curNode;
            curNode = next;
            next = cur;
        }
        return curNode;
    }
}
```