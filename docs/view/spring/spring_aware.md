# Spring的`Aware`
[[toc]]

## `ApplicationContextAware`

当`ApplicationContext`创建一个实现 `org.springframework.context.ApplicationContextAware`接口的对象实例时，会为该实例提供对该`ApplicationContext`的引用。以下为`ApplicationContextAware`接口的定义

```java
public interface ApplicationContextAware {
    void setApplicationContext(ApplicationContext applicationContext) throws BeansException;
}
```

因此，Bean可以通过接口或通过将引用转换为该接口的子类



## `BeanNameAware`

当`ApplicationContext`创建一个实现 `org.springframework.beans.factory.BeanNameAware`接口的类时，该类被提供了对其关联对象定义中定义的名称的引用。以下清单显示了 BeanNameAware 接口的定义：

```java
public interface BeanNameAware {

    void setBeanName(String name) throws BeansException;
}
```

在填充普通 bean 属性之后但在初始化回调（例如`InitializingBean.afterPropertiesSet()`自定义 init 方法）之前调用回调。



## 其他`Aware`

Spring 提供了广泛的`Aware`回调接口，让 bean 向容器指示它们需要特定的基础设施依赖项。作为一般规则，名称表示依赖类型。

| 名称                             | 注入依赖                                                     | 解释...                                                      |
| :------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `ApplicationContextAware`        | 声明`ApplicationContext`.                                    | [`ApplicationContextAware`和`BeanNameAware`](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-aware) |
| `ApplicationEventPublisherAware` | 封闭的事件发布者`ApplicationContext`。                       | [`ApplicationContext`的附加功能](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#context-introduction) |
| `BeanClassLoaderAware`           | 类加载器用于加载 bean 类。                                   | [实例化 Bean](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-class) |
| `BeanFactoryAware`               | 声明`BeanFactory`.                                           | [这`BeanFactory`](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beanfactory) |
| `BeanNameAware`                  | 声明 bean 的名称。                                           | [`ApplicationContextAware`和`BeanNameAware`](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-aware) |
| `LoadTimeWeaverAware`            | 定义的编织器，用于在加载时处理类定义。                       | [在 Spring 框架中使用 AspectJ 进行加载时编织](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-aj-ltw) |
| `MessageSourceAware`             | 用于解析消息的配置策略（支持参数化和国际化）。               | [`ApplicationContext`的附加功能](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#context-introduction) |
| `NotificationPublisherAware`     | Spring JMX 通知发布者。                                      | [通知](https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#jmx-notifications) |
| `ResourceLoaderAware`            | 为对资源进行低级访问而配置的加载程序。                       | [资源](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources) |
| `ServletConfigAware`             | 当前`ServletConfig`容器在其中运行。仅在可感知网络的 Spring 中有效 `ApplicationContext`。 | [春季MVC](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc) |
| `ServletContextAware`            | 当前`ServletContext`容器在其中运行。仅在可感知网络的 Spring 中有效 `ApplicationContext`。 | [春季MVC](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc) |
