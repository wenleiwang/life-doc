# MySQL当前时间减去一小时

## MySQL NOW() 函数
在开始之前，我们先来了解一下MySQL中的NOW()函数。NOW()函数用于获取当前的日期和时间。它的使用非常简单，只需在查询中调用NOW()函数即可。

```sql
SELECT NOW();
```

上述代码将返回当前的日期和时间，例如：2024-01-26 15:57:32。
## 减去一个小时
要在MySQL中减去一个小时，我们可以使用DATE_SUB函数。DATE_SUB函数用于对日期或时间进行减法操作。它接受三个参数：待减的日期或时间、减去的数量、以及要减去的单位。

```sql
DATE_SUB(date, INTERVAL quantity unit);
```

* date：待减的日期或时间。
* quantity：要减去的数量。
* unit：要减去的单位，可以是YEAR、MONTH、DAY、HOUR、MINUTE或SECOND。

下面是一个示例，用于获取当前时间并减去一个小时：

```sql
SELECT DATE_SUB(NOW(), INTERVAL 1 HOUR);
```

上述代码将返回当前时间减去一个小时后的结果，例如：2024-01-26 14:57:32。


---

#MYSQL函数

