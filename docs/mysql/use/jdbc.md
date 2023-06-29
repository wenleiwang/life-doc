---
title: jdbc
date: 2023-02-01 18:08:51
permalink: /pages/9a5633/
categories:
  - mysql
  - use
tags:
  - 
---
# 通过JDBC使用数据库
## 什么是JDBC？
全称： Java Data Base Connectivity

JDBC代表Java连接数据库。它是用于Java编程语言和数据库之间的数据库无关连接的标准Java API

## JDBC架构
![](./img/jdbc/2022-07-14-19-49-59.png)

## 常见JDBC组件
* DriverManager：此类管理数据库驱动程序列表。 使用通信子协议将来自java应用程序的连接请求与适当的数据库驱动程序进行匹配。在JDBC下识别某个子协议的第一个驱动程序将用于建立数据库连接。
* Driver：此接口处理与数据库服务器的通信。我们很少会直接与Driver对象进行交互。 但会使用DriverManager对象来管理这种类型的对象。 它还提取与使用Driver对象相关的信息。
* Connection：此接口具有用于联系数据库的所有方法。 连接(Connection)对象表示通信上下文，即，与数据库的所有通信仅通过连接对象。
* Statement：使用从此接口创建的对象将SQL语句提交到数据库。 除了执行存储过程之外，一些派生接口还接受参数。
* ResultSet：在使用Statement对象执行SQL查询后，这些对象保存从数据库检索的数据。 它作为一个迭代器并可移动ResultSet对象查询的数据。
* SQLException：此类处理数据库应用程序中发生的任何错误。

## 使用的六个步骤
* 导入包：需要包含包含数据库编程所需的JDBC类的包。 大多数情况下，使用import java.sql.*就足够了。
* 注册JDBC驱动程序：需要初始化驱动程序，以便可以打开与数据库的通信通道。
* 打开一个连接：需要使用DriverManager.getConnection()方法创建一个Connection对象，它表示与数据库的物理连接。
* 执行查询：需要使用类型为Statement的对象来构建和提交SQL语句到数据库。
* 从结果集中提取数据：需要使用相应的ResultSet.getXXX()方法从结果集中检索数据。
* 清理环境：需要明确地关闭所有数据库资源，而不依赖于JVM的垃圾收集。
```java
package com.xzh.jdbc;
 
import javax.xml.transform.Result;
import java.sql.*;
 
public class Test {
 
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet res = null;
        try {
            // 第一步：注册驱动（告诉Java程序，即将要连接那个品牌的数据库）
            Class.forName("com.mysql.jdbc.Driver");
 
            // 第二步：获取连接（表示JVM的进程和数据库进程之间的通道打开了，这属于进程之间的通信，重量级的，使用完后一定要关闭）
            String url = "jdbc:mysql://localhost:3306/test";
            String user = "root";
            String password = "root";
            conn = DriverManager.getConnection(url, user, password);
 
            // 第三步：获取数据库操作对象（专门执行sql语句的对象）
            stmt = conn.createStatement();
 
            // 第四步：执行SQL语句（DQL DML ...)
            String sql = "select empno as a,ename from emp";
            res = stmt.executeQuery(sql);// 专门执行DQL语句
 
            // 专门执行DML语句的（insert delete update）
            // 返回值是“影响数据库中的记录条数”
            //int c =stmt.executeUpdate(sql);
 
            // 第五步：处理查询结果集（只有第四步执行select语句时，才会执行第五步）
            while (res.next()) {
                String empno = res.getString("a");
                String ename = res.getString("ename");
                System.out.println(empno + "," + ename);
            }
 
        } catch (SQLException e) {
            e.printStackTrace();
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        }finally {
            // 第六步：释放资源（使用完资源后一定要关闭资源。Java和数据库属于进程间通信，开启后一定要关闭）
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

## JDBC Statements, PreparedStatement和CallableStatement语句

当获得了与数据库的连接后，就可以与数据库进行交互了。 JDBC Statement，CallableStatement和PreparedStatement接口定义了可用于发送SQL或PL/SQL命令，并从数据库接收数据的方法和属性。

它们还定义了有助于在Java和SQL数据类型的数据类型差异转换的方法。

### Statement对象

在使用Statement对象执行SQL语句之前，需要使用Connection对象的createStatement()方法创建一个Statement对象，如以下示例所示：
```java
Statement stmt = null;
try {
   stmt = conn.createStatement( );
   . . .
}
catch (SQLException e) {
   . . .
}
finally {
   . . .
   // 关闭
   stmt.close();
}
```
在创建Statement对象后，可以使用它来执行一个SQL语句，它有三个执行方法可以执行。
* `boolean execute (String SQL)`:如果可以检索到ResultSet对象，则返回一个布尔值true; 否则返回false。使用此方法执行SQLDDL语句或需要使用真正的动态SQL，可使用于执行创建数据库，创建表的SQL语句等等。
* `int executeUpdate (String SQL)`:返回受SQL语句执行影响的行数。使用此方法执行预期会影响多行的SQL语句，例如:INSERT，UPDATE或DELETE语句。
* `ResultSet executeQuery(String SQL)`:返回一个ResultSet对象。 当您希望获得结果集时，请使用此方法，就像使用SELECT语句一样。

### PreparedStatement对象
PreparedStatement接口扩展了Statement接口，它添加了比Statement对象更好一些优点的功能。

此语句可以动态地提供/接受参数。
```java
PreparedStatement pstmt = null;
try {
   String SQL = "Update Employees SET age = ? WHERE id = ?";
   pstmt = conn.prepareStatement(SQL);
   . . .
}
catch (SQLException e) {
   . . .
}
finally {
   . . .
    // 关闭
   pstmt.close();
}
```
JDBC中的所有参数都由 ? 符号作为占位符，这被称为参数标记。 在执行SQL语句之前，必须为每个参数(占位符)提供值。

setXXX()方法将值绑定到参数，其中XXX表示要绑定到输入参数的值的Java数据类型。 如果忘记提供绑定值，则将会抛出一个SQLException。

每个参数标记是它其顺序位置引用。第一个标记表示位置1，下一个位置2等等。 该方法与Java数组索引不同(它不从0开始)。

所有Statement对象与数据库交互的方法(a)execute()，(b)executeQuery()和(c)executeUpdate()也可以用于PreparedStatement对象。 
但是改变的是这些方法被修改为可以使用输入参数的SQL语句。

### CallableStatement对象
类似Connection对象创建Statement和PreparedStatement对象一样，它还可以使用同样的方式创建CallableStatement对象，该对象将用于执行对数据库存储过程的调用。

PreparedStatement对象只使用IN参数。CallableStatement对象可以使用上面三个参数类型。

|参数|描述|
|--|--|
|IN|创建SQL语句时其参数值是未知的。 使用setXXX()方法将值绑定到IN参数。|
|OUT|由SQL语句返回的参数值。可以使用getXXX()方法从OUT参数中检索值。|
|INOUT|提供输入和输出值的参数。使用setXXX()方法绑定变量并使用getXXX()方法检索值。|

以下代码片段显示了如何使用Connection.prepareCall()方法根据上述存储过程来实例化一个CallableStatement对象
```java
CallableStatement cstmt = null;
try {
   String strSQL = "{call getEmpName (?, ?)}";
   cstmt = conn.prepareCall (SQL);
   . . .
}
catch (SQLException e) {
   . . .
}
finally {
   . . .
   // 关闭
   cstmt.close();
}
```
String变量strSQL表示存储过程，带有两个参数占位符

使用CallableStatement对象就像使用PreparedStatement对象一样。 在执行语句之前，必须将值绑定到所有参数，否则将抛出一个SQLException异常。

如果有IN参数，只需遵循适用于PreparedStatement对象的相同规则和技术; 使用与绑定的Java数据类型相对应的setXXX()方法。

使用OUT和INOUT参数时，必须使用一个额外的CallableStatement对象方法registerOutParameter()。 registerOutParameter()方法将JDBC数据类型绑定到存储过程并返回预期数据类型。

当调用存储过程，可以使用适当的getXXX()方法从OUT参数中检索该值。 此方法将检索到的SQL类型的值转换为对应的Java数据类型。


> 文章参考
>
> https://www.yiibai.com/jdbc/jdbc-introduction.html