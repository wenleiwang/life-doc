# spring文档首页

[Spring Boot启动解析](springbootstart.md)

[spring IOC](springioc.md)

[Spring refresh方法解析](springboot_refreshContext.md)

[Spring DI的过程解析](springdi.md)

[spring AOP](springaop.md)

[Spring 事件](springevent.md)

[Spring 日志](springlogging.md)

## 代码版本声明
> spring-boot-2.3.3.RELEASE.jar
> 
> spring-boot-autoconfigure-2.3.3.RELEASE.jar
> 
> spring-context-5.2.8.RELEASE.jar
> 
> spring-core-5.2.8.RELEASE.jar
> 
> spring-beans-5.2.8.RELEASE.jar
> 
> spring-aop-5.2.8.RELEASE.jar
> 
> spring-web-5.2.8.RELEASE.jar

## Bean的作用范围
|范围|描述|
|--|--|
|singletion|（默认）将单个bean定义限定为每个 Spring IoC 容器的单个对象实例。|
|prototype|将单个 bean 定义限定为任意数量的对象实例。|
|request|将单个 bean 定义限定为单个 HTTP 请求的生命周期。也就是说，每个 HTTP 请求都有自己的 bean 实例，该实例是在单个 bean 定义的后面创建的。仅在 Web 感知 Spring 的上下文中有效`ApplicationContext`。|
|session|将单个 bean 定义限定为 HTTP 的生命周期`Session`。仅在 Web 感知 Spring 的上下文中有效`ApplicationContext`。|
|application|将单个 bean 定义限定为`ServletContext`. 仅在 Web 感知 Spring 的上下文中有效`ApplicationContext`。|
|websocket|将单个 bean 定义限定为`WebSocket`. 仅在 Web 感知 Spring 的上下文中有效`ApplicationContext`。|
