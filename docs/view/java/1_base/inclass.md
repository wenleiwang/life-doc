# 匿名内部类

匿名内部类的创建格式为： 
```java
new 父类构造器（参数列表）|实现接口（）{
    //匿名内部类的类体实现
}
```

1. 使用匿名内部类时，必须继承一个类或实现一个接口
2. 匿名内部类由于没有名字，因此不能定义构造函数
3. 匿名内部类中不能含有静态成员变量和静态方法