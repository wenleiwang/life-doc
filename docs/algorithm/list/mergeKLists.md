---
title: mergeKLists
date: 2023-02-01 18:08:51
permalink: /pages/8ad43b/
categories:
  - algorithm
  - list
tags:
  - 
---
# 合并K个已合并的链表
## 描述
合并 k 个升序的链表并将结果作为一个升序的链表返回其头节点。

数据范围：节点总数满足 0 《= n 《= 10^5，链表个数满足 1 《= k 《= 10^5
 
每个链表的长度满足 1 《= len 《= 200  ，每个节点的值满足 |val| <= 1000∣val∣<=1000
要求：时间复杂度 O(nlogk)

## 解题思路
k个链表，每个链表都是一个头结点。放入堆中，弹出的值就是最小的，弹出后把相应的下一个结点压入堆中。

重复弹出动作再次得到最小，把所有最小的拼接在一起就是结果。

## 实现代码
```java
public class Solution {
        
    static class QueueComp implements Comparator<ListNode> {
        public int compare(ListNode o1,ListNode o2) {
            return o1.val - o2.val;
        }
    }
    public ListNode mergeKLists(ArrayList<ListNode> lists) {
       Queue<ListNode> q = new PriorityQueue<>(new QueueComp());
        for (ListNode item : lists) {
            if (item != null) {
                q.add(item);
            }
        }
        ListNode head = new ListNode(-1);
        ListNode next = head;
        while (q.size() != 0) {
            ListNode cur = q.poll();
            next.next = cur;
            next = next.next;
            cur = cur.next;
            if (cur != null) {
                q.add(cur);
            }
        }
        return head.next;
    }
}
```