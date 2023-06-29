---
title: binarytree_maxdepth
date: 2023-02-01 18:08:51
permalink: /pages/9ae689/
categories:
  - algorithm
  - binarytree
tags:
  - 
---
# 二叉树的最大深度

## 0.题目 



## 1.递归实现
### 1.1思路
直接递归出深度

### 1.2代码
```java
package learn.note.algorithm.binarytree;

/**
 * 求给定二叉树的最大深度，
 * @author WangWenLei
 * @DATE: 2022/3/11
 **/
public class Bm28_MaxDepth {
    public static void main(String[] args) {
        TreeNode tree = CreateTree.createTree();
        System.out.println(maxDepth(tree));
    }

    public static int maxDepth (TreeNode root) {
        if (root == null) {
            return 0;
        }

        int left = maxDepth(root.left);
        int right = maxDepth(root.right);
        return Math.max(left,right) + 1;
    }
}
```

## 2.非递归实现
### 2.1思路
### 2.2代码

