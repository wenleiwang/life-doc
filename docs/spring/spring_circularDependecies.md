# Spring循环依赖

英文： Circular dependencies

## 引用
引用官网一段话

If you use predominantly constructor injection, it is possible to create an unresolvable circular dependency scenario.

For example: Class A requires an instance of class B through constructor injection, and class B requires an instance of class A through constructor injection. If you configure beans for classes A and B to be injected into each other, the Spring IoC container detects this circular reference at runtime, and throws a BeanCurrentlyInCreationException.

One possible solution is to edit the source code of some classes to be configured by setters rather than constructors. Alternatively, avoid constructor injection and use setter injection only. In other words, although it is not recommended, you can configure circular dependencies with setter injection.

Unlike the typical case (with no circular dependencies), a circular dependency between bean A and bean B forces one of the beans to be injected into the other prior to being fully initialized itself (a classic chicken-and-egg scenario).

> 译文：
> 如果主要使用构造函数注入，可能会创建无法解决的循环依赖的场景。
>
> 例如：A类通过构造函数注入需要B类的实例，B类通过构造函数注入需要A类的实例。如果你为类 A 和 B 配置 bean 以相互注入，Spring IoC 容器会在运行时检测到这个循环引用，并抛出一个 `BeanCurrentlyInCreationException`。
>
> 一种可能的解决方案是编辑某些类的源代码以由设置器而不是构造器配置。或者，避免构造函数注入并仅使用 setter 注入。也就是说，虽然不推荐，但是可以通过setter注入来配置循环依赖。
>
> 与典型情况（没有循环依赖关系）不同，bean A 和 bean B 之间的循环依赖关系强制其中一个 bean 在完全初始化之前注入另一个 bean（典型的先有鸡还是先有蛋的场景）。
