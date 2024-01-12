# 前言

去到 Mybatis 官网，读使用说明

https://mybatis.org/mybatis-3/zh_CN/index.html

使用可以在官网上看到，这里跟随着官网的使用看下对应的源码。

## 开始位置

我们可以跟着官网的入门，找到我们从何处作为看对应源码的入口。

> 在官网入门中说:
> 每个基于 MyBatis 的应用都是以一个 SqlSessionFactory 的实例为核心的。SqlSessionFactory 的实例可以通过 SqlSessionFactoryBuilder 获得。而 SqlSessionFactoryBuilder 则可以从 XML 配置文件或一个预先配置的 Configuration 实例来构建出 SqlSessionFactory 实例。
> 
> 从 XML 文件中构建 SqlSessionFactory 的实例非常简单，建议使用类路径下的资源文件进行配置。 但也可以使用任意的输入流（InputStream）实例，比如用文件路径字符串或 file:// URL 构造的输入流。MyBatis 包含一个名叫 Resources 的工具类，它包含一些实用方法，使得从类路径或其它位置加载资源文件更加容易。
> 


```java
String resource = "org/mybatis/example/mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
```

#Java文件读取

 > [了解MyBatis 包含 Resources 的工具类](了解MyBatis包含Resources的工具类.md)

