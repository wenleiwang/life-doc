---

---
# Java9

Java9发布于2017年9月22日，带来了很多新特性，其中最主要的变化是已经实现的模块化系统。
详情 看官方文档https://docs.oracle.com/javase/9/whatsnew/toc.htm#JSNEW-GUID-527735CF-44E1-4144-919B-E7D7CC9CDD4D

## Java语言新特性

### 私有实例方法上允许使用 @SafeVarargs 注释。
允许@SafeVargs私有实例方法。
@SafeVarargs 注释只能应用于不能被覆盖的方法。其中包括静态方法、最终实例方法，以及 Java SE 9 中的新增私有实例方法。

### 更简洁的 try-with-resources 语句
允许有效地将最终变量用作try-with-resources语句中的资源。
如果您已经将资源作为变量final或有效final变量，则可以在try-with-resources语句中使用该变量而无需声明新变量。“有效最终”变量是其值在初始化后从未更改过的变量。

例如，您声明了这两个资源：
```java
// A final resource
final Resource resource1 = new Resource("resource1");
// An effectively final resource
Resource resource2 = new Resource("resource2");
```
In Java SE 7 or 8, you would declare new variables, like this:
```java
try (Resource r1 = resource1;
    Resource r2 = resource2) {
    ...
}
```
In Java SE 9, you don’t need to declare r1 and r2:
```java
// New and improved try-with-resources statement in Java SE 9
try (resource1;
        resource2) {
    ...
}
```

### 可以将菱形语法与匿名内部类结合使用
如果推断类型的参数类型是可表示的，则允许使用匿名类的菱形。
可以在 Java 程序中编写的类型，例如int或String，称为可表示类型。不能在 Java 程序中编写的编译器内部类型称为不可表示类型。
由于菱形运算符使用的推理结果，可能会出现不可表示的类型。因为使用带有匿名类构造函数的 diamond 推断的类型可能超出类文件中签名属性支持的类型集，因此 Java SE 7 中不允许使用带有匿名类的 diamond。
在 Java SE 9 中，只要推断类型是可表示的，就可以在创建匿名内部类时使用菱形运算符。


### 下划线字符不是合法名称
从 Java SE 8 开始，从合法标识符名称集中删除下划线。
如果您使用下划线字符（“_”）作为标识符，您的源代码将无法再编译。

### 支持私有接口方法
添加对私有接口方法的支持。支持私有接口方法。这种支持允许接口的非抽象方法在它们之间共享代码
