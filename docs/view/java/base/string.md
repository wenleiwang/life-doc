# String类
* split()
* replace()
* indexOf()
* concat()
* equals()
* substring()
* toLowerCase()
* toUpperCase()
* valueOf()
* charAt()

## String类中支持正则的方法
* replace()
* replaceAll()

## new String()和""的区别

## 字符串相加的实现机制
两个或两个以上的字符常量相加，在编译的时候会被优化，把两个或两个以上字符串常量自动合并成一个字符串常量

## String、StringBuilder、StringBuffer的区别
String对象不可变，StringBuilder、StringBuffer可变。
StringBuilderr执行速度最佳，StringBuffer次之，String的执行速度最慢（String为字符串常量，而StringBuilder和StringBuffer均为字符串变量，String对象一旦创建后该对象是不可更改的，后两者的对象是变量是可以更改的）
String、StringBuffer是线程安全的，StringBuilder是线程不安全的



