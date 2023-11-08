# 基础语法
[[toc]]

## 查询

```sql
select 字段 from 表名 where 条件 group by 分组 having 分组筛选 limit 分页
```

内连接、右连接、左连接

## 增加

## 修改
MySQL官方文档的update语法：
![img.png](img/base/c4f8d70fece20c92acb41100fb42e596.png)

看到assignment_list的格式是以逗号分隔的col_name=value列表，一下子豁然开朗，开发同学想要的多字段更新语句应该这样写：

### 使用过程中的非常经典的“坑”

**坑点：**

在MySQL里面update一条记录，语法都正确的，但记录并没有被更新



**复现：**

先创建一个模拟的数据

![image-20231008115915162](img/base/1374e3bf409f16bf1b05388c3c4b91a0.png)



**有问题的SQL：**
```sql
update global_company_user set `user_id`='43212' and `name`='李四' where 
id = 1603682441172779009; 
```

执行后效果：

> name的值没有变，但user_id变成了0！

![image-20231008120107348](img/base/2449eeadba470e342a60cde5c942d727.png)

**修正的SQL：**

> 在一条UPDATE语句中，如果要更新多个字段，字段间不能使用“AND”，而应该用逗号分隔。

```sql
update apps set owner_code='43212' , owner_name='李四' where 
owner_code='13245' and owner_name='张三';  
```

![image-20231008124623680](img/base/e92ff3b5a78466adf51c058744d7d87a.png)



## 删除
