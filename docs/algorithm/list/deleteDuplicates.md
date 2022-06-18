# 删除有序链表中重复的元素（二）

## 描述
给出一个升序排序的链表，删除链表中的所有重复出现的元素，只保留原链表中只出现一次的元素。
例如：
给出的链表为1→2→3→3→4→4→5, 返回1→2→5.

给出的链表为1→1→1→2→3, 返回2→3.

数据范围：链表长度 0≤n≤10000，链表中的值满足 val∣≤1000

要求：空间复杂度 O(n)，时间复杂度 O(n)

进阶：空间复杂度 O(1)，时间复杂度 O(n)

## 解题思路

### 使用Hash表，O(n)
1. 使用Hash表来判断存在元素的个数，如果超过1就放弃节点
2. 循环技巧，有头节点的链表使用`cur.next != null`来作为while的结束条件。

::: tip
因为头有可能也需要去掉，所以在前面拼接一个头结节点
:::

循环技巧优点：可以方便的去掉当前节点的下一个节点。因为本身保存着节点而又已知下一个节点必然不会空，可以放心使用一下个节点的next

::: warning 这里引发了一个思考
`while(cur.next != null){cur = cur.next;}`与`while(cur != null){cur = cur.next;}`的区别

共同点：
1. cur代表的都是当前节点
2. 都能正常完整的遍历链表全部节点

差异：
1. 以`cur.next != null`为判断条件时，能方便的操作删除当前节点的下一个节点；能判断当前节点与下一个节点的关、
2. 以`cur != null`为判断条件时，链表能为空
:::

### 不使用Hash表，O(1)

## 实现代码

### 使用Hash表，O(n)
```java
import java.util.*;
public class Solution {
    public ListNode deleteDuplicates (ListNode head) {
        if (head == null) {
            return null;
        }
        ListNode next = head;
        Map<Integer,Integer> map = new HashMap<> ();
        while (next != null) {
            if (map.containsKey(next.val)) {
                map.put(next.val,map.get(next.val) + 1);
            } else {
                map.put(next.val,1);
            }
            next = next.next;
        }
        ListNode res = new ListNode(-1) ;
        res.next = head;
        next = res;
        while (next.next != null) {
            if (map.get(next.next.val) > 1) {
                next.next = next.next.next;
            } else {
                next = next.next;
            }
        }
        return res.next;
    }
}
```

### 不使用Hash表
```java
import java.util.*;
public class Solution {
    public ListNode deleteDuplicates (ListNode head) {
        if (head == null) {
            return null;
        }
        ListNode res = new ListNode(-1) ;
        res.next = head;
        ListNode cur = res;
        while (cur.next != null && cur.next.next != null) {
            if (cur.next.val == cur.next.next.val) {
                int temp = cur.next.val;
                while (cur.next != null && cur.next.val == temp) {
                    cur.next = cur.next.next;
                }
                
            } else {
                cur = cur.next;
            }
        }
        return res.next;
    }
}
```