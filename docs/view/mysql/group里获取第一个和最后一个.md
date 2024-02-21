# MySQL group里获取第一个和最后一个

## MySQL 8.0以后版本，使用窗口函数over

### 取前 5 条

```sql
SELECT * from (
    SELECT *, ROW_NUMBER() OVER(PARTITION BY task_id ORDER BY data_date DESC, modify_time DESC) AS rn
    FROM t_task_exec_log 
    WHERE exec_status='success' 
    AND task_id IN (124,156,158,200,300,358,500,800,1000,1001)
) t WHERE rn <= 5;
```

## MySQL 8.0以前方法

### 方法一

需要用到的函数：
* group_concat  分组连接
* substring_index  按索引截取

使用 `GROUP_CONCAT` 函数。再使用 `SUBSTRING_INDEX` 截取。排序方式改变一下正序倒序取第一条

mysql里没有现成的方法，只能找一个变通的方法，就是先把所有值拼成一个长字符串，然后再从这个长字符串中取最前面和最后面的部分，但是这样会有性能问题，如果可以忍受性能问题，目前也没有别的好的办法：

```sql
SELECT
  DATE_FORMAT(create_time, '%Y%m%d') times, // 时间格式化
  MAX(price) max_price,    // 最高价
  MIN(price) min_price,    // 最低价
  SUM(num) num,            // 每天数量
  SUBSTRING_INDEX(GROUP_CONCAT(CAST(price AS CHAR) ORDER BY create_time), ',', 1 ) first_price,
  SUBSTRING_INDEX(GROUP_CONCAT(CAST(price AS CHAR) ORDER BY create_time DESC), ',', 1 ) last_price
FROM `bill`
GROUP BY `times` // 时间分组
ORDER BY `times` // 时间排序
```

### 方法二

> 这段有点突兀，是[MySQL获取分组中的第一条数据和最后一条数据](https://blog.csdn.net/q116975174/article/details/124807513)文章里的一段，觉得相关一点粘在这里

需求：账号表有多条相同的staff_id的数据，按staff_id分组，取ID最大（也就是最新）的一行

这里的关键是`a.staff_id = b.staff_id`,根据业务情况不同，实际是分组group by字段，然后通过左关联（一定是左关联）算出笛卡尔积，通过过滤条件 `a.id < b.id`和`b.created_at IS NULL`找到数据  
反过来`a.id > b.id`是最小

```sql
SELECT
    a.id aid,
    b.id bid
FROM
    account a
    LEFT JOIN account b ON a.staff_id = b.staff_id
        AND a.id < b.id
WHERE
    b.created_at IS NULL
    AND a.staff_id = 1;

```

## 相关函数

### GROUP_CONCAT

#### 语法

```sql
GROUP_CONCAT([DISTINCT] expr [,expr ...]
             [ORDER BY {unsigned_integer | col_name | expr}
                 [ASC | DESC] [,col_name ...]]
             [SEPARATOR str_val])

SELECT student_name,
        GROUP_CONCAT(test_score)
       FROM student
       GROUP BY student_name;

SELECT student_name,
        GROUP_CONCAT(DISTINCT test_score
                      ORDER BY test_score DESC SEPARATOR ' ')
       FROM student
       GROUP BY student_name;
```

#### 使用注意

group_concat超出了默认值1024，超过就会截断，group_concat查询出来的数据就是不全。

---

参考文章
[MySQL 分组排序后 → 如何取前N条或倒数N条](https://www.cnblogs.com/youzhibing/p/17881895.html)

[MySQL group_concat()函数](https://www.yiibai.com/mysql/group_concat.html)

