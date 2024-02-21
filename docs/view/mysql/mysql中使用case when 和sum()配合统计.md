# mysql中使用case when 和sum()配合统计

![image.png|150](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402191755597.png)

## 1、sum与if结合使用

如图：表中，**count_money** 字段代表金额。为正表示收入，负表示支出。

**统计总收入，总支出。**

```sql
select 
sum(if(count_money > 0, count_money, 0)) as sum_receipt,
sum(if(count_money < 0, count_money, 0)) as sum_paid 
from tableName;

```

**得到sum_receipt为总收入，sum_paid为总支出。**

## sum与case when 结合使用

```sql
select 
sum(case when count_money > 0 then count_money else 0 end) as sum_receipt,
sum(case when count_money < 0 then count_money else 0 end) as sum_paid 
from tableName;
```

## 3、总结

可以发现，case when和if函数的功能是相同的，if的使用更简洁直观
条件复杂时，使用case when，条件简单时，使用if()
