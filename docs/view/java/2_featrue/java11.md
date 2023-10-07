---

---
# Java11新特性
[[toc]]

## 0.总结
最实用的八大新特性
1. 本地变量类型推断
2. 字符串加强
3. 集合加强
4. Stream 加强
5. Optional 加强
6. InputStream 加强
7. HTTP Client API
8. 化繁为简，一个命令编译运行源代码

## 1.本地变量类型推断
```java
var name = "name";
System.out.println(name);
```
局部变量类型推断就是左边的类型直接使用var定义，而不用写具体的类型，编译器能根据右边的表达式自动推断类型，如上面的String

## 2.字符串加强
Java 11 增加了一系列的字符串处理方法
```java
// 判断字符串是否为空白
" ".isBlank(); // true
// 去除尾部空格
" name".strip(); // "name"
// 去除首部空格
" name ".stripTrailing(); // "name "
// 去除位部空格
" name ".stripLeading(); // " name"
// 复制字符串
"name".repeat(3); // "namenamename"
// 行数统计
"A\nB\nC".lines().count(); // 3
```

## 3.集合加强
自 Java 9 开始，Jdk 里面为集合（List/ Set/ Map）都添加了 of 和 copyOf 方法，它们两个都用来创建不可变的集合，来看下它们的使用和区别
示例1：
```java
    var list = List.of("Java", "Python", "C");
    var copy = List.copyOf(list);
    System.out.println(list == copy); // true
```
示例2：
```java
    var list = new ArrayList<String>();
    var copy = List.copyOf(list);
    System.out.println(list == copy); // false
```

看下源码
```java
static <E> List<E> of(E... elements) {
    switch (elements.length) { // implicit null check of elements
        case 0:
            return ImmutableCollections.emptyList();
        case 1:
            return new ImmutableCollections.List12<>(elements[0]);
        case 2:
            return new ImmutableCollections.List12<>(elements[0], elements[1]);
        default:
            return new ImmutableCollections.ListN<>(elements);
    }

}

static <E> List<E> copyOf(Collection<? extends E> coll) {
    return ImmutableCollections.listCopy(coll);
}

static <E> List<E> listCopy(Collection<? extends E> coll) {
    if (coll instanceof AbstractImmutableList && coll.getClass() != SubList.class) {
        return (List<E>)coll;
    } else {
        return (List<E>)List.of(coll.toArray());
    }
}
```
可以看出 copyOf 方法会先判断来源集合是不是 AbstractImmutableList 类型的，如果是，就直接返回，如果不是，则调用 of 创建一个新的集合。

示例2因为用的 new 创建的集合，不属于不可变 AbstractImmutableList 类的子类，所以 copyOf 方法又创建了一个新的实例，所以为false.

注意：使用of和copyOf创建的集合为不可变集合，不能进行添加、删除、替换、排序等操作，不然会报 java.lang.UnsupportedOperationException 异常。

上面演示了 List 的 of 和 copyOf 方法，Set 和 Map 接口都有。

## 4. Stream加强
Stream 是 Java 8 中的新特性，Java 9 开始对 Stream 增加了以下 4 个新方法。

## 5. Optional 加强
## 6. InputStream 加强
## 7. HTTP Client API
## 8.化繁为简，一个命令编译运行源代码
