# 链表中环的入口结点
[[toc]]
## 题目描述
给一个长度为n链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。

数据范围： n≤10000，1<=结点值<=10000

要求：空间复杂度 O(1)，时间复杂度 O(n)

## 解题思路
### 使用Hash结构
把经过的节点都存入HashMap结构，如果出现环，Map结构里会存过，直接返回。

### 快慢指针思路
通过定义slow和fast指针，slow每走一步，fast走两步，若是有环，则一定会在环的某个结点处相遇.

快指针是慢指针步数的2倍，环入口到相遇节点步数一致。

第一次走过一遍开始头结点到相与处。

第二次就是从相遇处环回相与处，又环入口到相遇节点步数一致。则得出头节点到环入口的步数等于快指针相遇处到入环处。

那么通过快慢指针得到相与处。从这个节点以后快指针变成每次一步，与头结点每次一步同步比较得到相同位置即为环入口处。

## 实现代码
### 使用Hash结构
```java
import java.util.Map;
import java.util.HashMap;
public class Solution {

    public ListNode EntryNodeOfLoop(ListNode pHead) {
        if (pHead == null || pHead.next == null) {
            return null;
        }
        Map<ListNode,ListNode> map = new HashMap<>();
        ListNode next = pHead;
        while (next != null) {
            ListNode m = map.get(next);
            if (m != null) {
                return m;
            } else {
                map.put(next,next);
                next = next.next;
            }
        }
        return null;
    }
}
```
### 快慢指针
```java
public class Solution {

    public ListNode EntryNodeOfLoop(ListNode pHead) {
        if (pHead == null || pHead.next == null) {
            return null;
        }
        ListNode f = pHead;
        ListNode l = pHead;
        
        while (f != null && l != null) {
            if (f.next != null) {
                f = f.next.next;
            } else {
                f = null;
            }
            l = l.next;
            if (f == l) {
                break;
            }
        }
        if (f != null) {
            ListNode next = pHead;
            while (next != null) {
                if (next == f) {
                    return next;
                }
                next = next.next;
                f = f.next;
            }
        }
        return null;
    }
}
```
