# 岛屿数量
[[toc]]

## 描述
描述
给一个01矩阵，1代表是陆地，0代表海洋， 如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。

岛屿: 相邻陆地可以组成一个岛屿（相邻:上下左右） 判断岛屿个数。

例如：

输入
```
[
    [1,1,0,0,0],
    [0,1,0,1,1],
    [0,0,0,1,1],
    [0,0,0,0,0],
    [0,0,1,1,1]
]
```
对应的输出为3

(注：存储的01数据其实是字符'0','1')

## 思路
这样临近的问题想到使用广度优先遍历得到附近的数据

首先肯定是遍历，如果当前点是1，就要排除它周边的所有未1的点来防止重复统计。使用bfs如果当前点是1就标记为0后分别探索它上下左右点（注意边界）

这样周而复始同一个片区域的1只统计1次，就能统计到所有

bfs编写逻辑
1. 递归出口（终止条件）：如果是边界，或者点上是0就跳出
2. 返回值：找到返回1没有返回0；每一级的子问题就是把修改后的矩阵返回，因为其是函数引用算是一个返回
3. 本级任务：将该位置值变为1，让后向4个方向查询，看能否进入子问题。

## 代码实现
```java
import java.util.*;

public class Solution {
    /**
     * 判断岛屿数量
     * @param grid char字符型二维数组 
     * @return int整型
     */
    public int solve (char[][] grid) {
        int l = grid.length;
        if (grid == null || l == 0) {
            return 0;
        }
        int h = grid[0].length;
        int sum = 0;
        for (int i = 0 ; i < l ; i++){
            for (int j = 0; j < h ; j++){
                sum += dfs(grid,i,j);
            }
        }
        return sum;
    }
    
    private int dfs (char[][]grid , int x,int y) {
        int l = grid.length - 1;
        int h = grid[0].length - 1;
        if (x < 0 || x > l || y < 0 || y > h || grid[x][y] == '0') {
            return 0;
        }
        
        grid[x][y] = '0';
        if (x - 1 >= 0 && grid[x - 1][y] == '1') {
            dfs(grid,x - 1,y);
        }
        if (x + 1 <= l && grid[x + 1][y] == '1') {
            dfs(grid,x + 1,y);
        }
        if (y - 1 >= 0 && grid[x][y - 1] == '1') {
            dfs(grid,x,y - 1);
        }
        if (y + 1 <= h && grid[x][y + 1] == '1') {
            dfs(grid,x,y + 1);
        }
        return 1;
    }
}
```
