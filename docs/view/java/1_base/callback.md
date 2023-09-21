# Java回调函数 + 使用案例
## 什么是回调函数
回调函数，是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。

在Java中，指针即所谓的引用。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。

第一次看这知识点，是真的懵。下面看我拆解后逐步理解它的思路。

## 第0个版本
初代版本
我调用了你，在我调用你的方法里你又调用了我（回调）
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        b.b();
    }
    public void backs(){
        System.out.println("A:我就是A的回调函数！");
    }
}

```
```java
public class ClassB {
    public void b() {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        ClassA a = new ClassA();
        a.backs();
        System.out.println("B: <--我完成调用A的回调");
    }
}

```
```java
public class Main {
    public static void main(String[] args) {
        ClassA a = new ClassA();
        a.a();
    }
}

```
执行结果
```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！
B: <--我完成调用A的回调

```
## 第1个版本
演变一下把在B里创建的A，用对象的形式在A里调用时就带过去。

写一个回调用的接口
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        b.b(this);
    }
    public void backs(){
        System.out.println("A:我就是A的回调函数！");
    }
}

```
```java

public class ClassB {
    public void b(ClassA a) {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        a.backs();
        System.out.println("B: <--我完成调用A的回调");
    }
}

```
Main方法不用变
执行结果，执行结果不变

```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！
B: <--我完成调用A的回调

```
## 第2个版本
把第1个版本中的这个类换成接口Interface
创建一个接口
```java
public interface Interface {
    public void backs();
}

```
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        b.b(new Interface() {
            @Override
            public void backs() {
                System.out.println("A:我就是A的回调函数！");
            }
        });
    }
}

```
```java
public class ClassB {
    public void b(Interface in) {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        in.backs();
        System.out.println("B: <--我完成调用A的回调");
    }
}

```
Main依然不变
执行结果也不变
```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！
B: <--我完成调用A的回调

```
## 第3个版本
给接口加一个入参，让回调方法可以传参
```java
public interface Interface {
    public void backs(String n);
}

```
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        b.b(new Interface() {
            @Override
            public void backs(String n) {
                System.out.println("A:我就是A的回调函数！我打印：" + n);
            }
        });
    }
}

```
```java
public class ClassB {
    public void b(Interface in) {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        in.backs("《我是B传的参数》");
        System.out.println("B: <--我完成调用A的回调");
    }
}

```
执行结果
```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！我打印：《我是B传的参数》
B: <--我完成调用A的回调

```
## 第4个版本
给接口加个返回的参数
```java
public interface Interface {
    public String backs(String n);
}

```
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        b.b(new Interface() {
            @Override
            public String backs(String n) {
                System.out.println("A:我就是A的回调函数！我打印：" + n);
                return "A:我就是A的回调函数！我打印：" + n + "的返回。";
            }
        });
    }
}

```
```java
public class ClassB {
    public void b(Interface in) {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        String backs = in.backs("《我是B传的参数》");
        System.out.println("B:我收到了回调的结果:"+backs);
        System.out.println("B: <--我完成调用A的回调");
    }
}

```
执行结果
```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！我打印：《我是B传的参数》
B:我收到了回调的结果:A:我就是A的回调函数！我打印：《我是B传的参数》的返回。
B: <--我完成调用A的回调

```
## 第5个版本
```java
public interface Interface {
    public String backs(String n);
}

```
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        ClassB b = new ClassB();
        String b1 = b.b(new Interface() {
            @Override
            public String backs(String n) {
                System.out.println("A:我就是A的回调函数！我打印：" + n);
                return "A:我就是A的回调函数！我打印：" + n + "的返回。";
            }
        });
        System.out.println("A:执行完得到的结果:" + b1);
    }
}

```
```java
public class ClassB {
    public String b(Interface in) {
        System.out.println("我执行了b");
        System.out.println("B:我开始调用A的回调-->");
        String backs = in.backs("《我是B传的参数》");
        System.out.println("B:我收到了回调的结果:"+backs + "<--我完成调用A的回调");
        return "《我是B的返回》";
    }
}

```
执行结果：
```java
执行了a方法
我执行了b
B:我开始调用A的回调-->
A:我就是A的回调函数！我打印：《我是B传的参数》
B:我收到了回调的结果:A:我就是A的回调函数！我打印：《我是B传的参数》的返回。<--我完成调用A的回调
A:执行完得到的结果:《我是B的返回》

```
## 第6个版本，终极版本
先声明回调函数，再使用
```java
public class ClassA {
    public void a() {
        System.out.println("执行了a方法");
        Interface in = (n -> {
            System.out.println("A：我是直接使用回调接口，我接收的参数是：" + n);
            return "我是回调的返回数据";
        });

        String backs = in.backs("我A，我是《in》的使用者");
        System.out.println("backes:" + backs);
    }
}

```
调用
```java
public class Main {
    public static void main(String[] args) {
        ClassA a = new ClassA();
        a.a();
    }
}

```
执行结果
```java
执行了a方法
A：我是直接使用回调接口，我接收的参数是：我A，我是《in》的使用者
backes:我是回调的返回数据

```