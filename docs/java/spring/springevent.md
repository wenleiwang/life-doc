# Spring 事件驱动机制
Spring提供了`ApplicationEventPublisher`接口作为事件发布者(`ApplicationContext`接口继承了该接口，担当着事件发布者的角色)。
Spring提供了`ApplicationEventMulticaster`接口，负责管理`ApplicationListener`和真正发布`ApplicationEvent`（ApplicationContext是委托给它完成的）
::: tip 
`ApplicationListener`实现了JDK的`EventListener`，但它抽象出一个onApplicationEvent方法，使用更方便。

`ApplicationEvent`继承自`EventObject`。

`ApplicationEventPublisher`最终都是委托给`ApplicationEventMulticaster`去完成的。当然你也可以自己去实现一个`ApplicationEventMulticaster`
:::
