---
title: springboot_externalizedConfiguration
date: 2023-02-01 18:08:51
permalink: /pages/a5c01f/
categories:
  - spring
tags:
  - 
---
# 外部配置

Spring Boot 允许您将配置外部化，以便您可以在不同的环境中使用相同的应用程序代码。您可以使用各种外部配置源，包括 Java 属性文件、YAML 文件、环境变量和命令行参数。

属性值可以通过使用注解直接注入到你的 bean 中`@Value`，通过 Spring 的[抽象](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.typesafe-configuration-properties)`Environment`访问，或者通过.`@ConfigurationProperties`

Spring Boot 使用一种非常特殊的`PropertySource`顺序，旨在允许合理地覆盖值。属性按以下顺序考虑（较低项目的值覆盖较早的项目）：

1. 默认属性（由设置`SpringApplication.setDefalutProperties`指定
2. `@PropertySource`注解在你的`@Configuration`类。请注意，Application Context刷新之前，这样的属性资源不会添加到`Environment`。对配置一些属性来说太晚（例如：`logging.*`和`spring.main.*`）他们读取在`refresh`之前
3. 配置数据（例如：`application.properties`文件）
4. `RandomValuePropertySource`，仅在`random.*`中的属性
5. 系统环境变量
6. Java系统属性（`System.getProperties()`）
7. 来自`java:comp/env`下的 JNDI 属性
8. `ServletContext`初始化参数
9. `ServletConfig`初始化参数
10. 属性来自`SPRING_APPLICATION_JSON`（嵌入的内联 JSON 在环境变量或系统属性）
11. 命令行参数
12. `properties`属性在你的tests，可用于 在`@SpringBootTest` 和 应用程序的特定部分的测试注解
13. `@TestPropertySource`注解在你的tests
14. 当devtools被激活时，Devtools全局设置属性在`$HOME/.config/spring-boot`目录



配置数据文件可以考虑如下顺序：

1. 打包在jar中的应用属性（`application.properties` 和 YAML）
2. 打包在jar中的特定应用属性（`appliction.properties={profile}.properties`和YAML）
3. 打包 jar（`application.properties`和 YAML 变体）之外的应用程序属性。
4. 打包的 jar（`application-{profile}.properties`和 YAML 变体）之外的特定于配置文件的应用程序属性。



## 命令行配置属性

默认SpringApplication转换以`--`开头的命令行操作参数（`--server.port=9000`）为一个`property`并把它们添加到Spring的`Environment`

如上所述，命令行参数配置属性优先级高于以文件为基础的属性

如果不想使用命令行配置属性，可以通过`SpringApplication.setAddCommandLineProperties(false)`关闭他们





## JSON 应用程序属性

环境变量和系统属性通常有限制，一些属性名不能被使用。为了解决这个，SpringBoot 允许你使用编写一单个的 JSON 结构块的属性

当你的应用启动，任何`spring.application.json`或`SPRING_APPLICATION_JSON`属性将解析并添加到`Environment`

举例：

`SPRING_APPLICATION_JSON`属性能通过shell命令行提供一个环境变量

```shell
$ SPRING_APPLICATION_JSON='{"my":{"name":"test"}}' java -jar myapp.jar
```

这样最终会在Spring环境中`my.name=test`使用



相同的 JSON 也能通过系统属性提供

```shell
$ java -Dspring.application.json='{"my":{"name":"test"}}' -jar myapp.jar
```

或者能使用命令行参数提供

```shell
$ java -jar myapp.jar --spring.application.json='{"my":{"name":"test"}}'
```



如果你部署一个经典的应用服务，你也可以使用 JNDI 变量名`java:comp/env/spring.application.json`



## 外部的应用配置文件

Spring Boot将自动发现和加载`application.properties`和`application.yaml`文件通过如下位置在你的应用启动时：

1. 从类路径
   1. 类路径跟
   2. 类路径`/config`包下
2. 从当前目录
   1. 当前目录
   2. 当前目录下`/config`子目录
   3. `/config`子目录的直接子目录

这个列表按优先级排序（后面的值覆盖前面的值）文档（从加载文件）作为`PropertySources`到Spring的`Environment`