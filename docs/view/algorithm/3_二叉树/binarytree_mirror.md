# 二叉树的镜像
[[toc]]
## 0.题目

## 1.递归解法

### 1.1思路
根据后续遍历特性，得到如下推倒，看蓝色示意图是递归推导执行顺序。第三步交换时它的子结点都已经交换完成

![](../img/2022-03-17-22-46-31.png)

### 1.2代码
```java
package learn.note.algorithm.binarytree;

public class Bm33_Mirror {
    public static void main(String[] args) {
        TreeNode tree = CreateTree.createTree();
        TreeNode mirror = mirror(tree);
    }

    public static TreeNode mirror (TreeNode pRoot) {
        if (pRoot == null) {
            return null;
        }
        // 完成遍历
        mirror(pRoot.left);
        mirror(pRoot.right);

        // 交换
        TreeNode left = pRoot.left;
        pRoot.left = pRoot.right;
        pRoot.right = left;
        return pRoot;
    }
}

```

## 2.非递归解法
