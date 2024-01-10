# Mybatis配置类的读取流程

通过 `SqlSessionFactory` 的构建配置类里的一步是配置的构建。

 `SqlSessionFactory`  是通过 `SqlSessionFactoryBuilder` 调用 `build` 方法构建

```java
public SqlSessionFactory build(Reader reader, String environment, Properties properties) {  
  try {  
    XMLConfigBuilder parser = new XMLConfigBuilder(reader, environment, properties);  
    // build方法的参数需要是Configuration类型。所以parse.parse()就是在配置里的读取方法
    return build(parser.parse());  
  } catch (Exception e) {  
    throw ExceptionFactory.wrapException("Error building SqlSession.", e);  
  } finally {  
    ErrorContext.instance().reset();  
    try {  
      reader.close();  
    } catch (IOException e) {  
      // Intentionally ignore. Prefer previous error.  
    }  
  }  
}
```

## 配置类的读取方法 `parser.parse()`

```java
public Configuration parse() {  
  // 创建 XMLConfigBuilder 类时默认赋值非 false 。目的是标记已经解析过
  if (parsed) {  
    // 抛出任何 XMLConfigBuilder 只能被使用一次
    throw new BuilderException("Each XMLConfigBuilder can only be used once.");  
  }  
  parsed = true;  
  // 解析配置类的方法，参数是XML文件里 configuration 部分的节点信息
  parseConfiguration(parser.evalNode("/configuration"));  
  return configuration;  
}
```
## 解析配置类方法`parseConfiguration(XNode root)`

这里包含所有配置的解析

```java
private void parseConfiguration(XNode root) {  
  try {  
    // issue #117 read properties first  
    propertiesElement(root.evalNode("properties"));  
    Properties settings = settingsAsProperties(root.evalNode("settings"));  
    loadCustomVfs(settings);  
    loadCustomLogImpl(settings);  
    typeAliasesElement(root.evalNode("typeAliases"));  
    pluginElement(root.evalNode("plugins"));  
    objectFactoryElement(root.evalNode("objectFactory"));  
    objectWrapperFactoryElement(root.evalNode("objectWrapperFactory"));  
    reflectorFactoryElement(root.evalNode("reflectorFactory"));  
    settingsElement(settings);  
    // read it after objectFactory and objectWrapperFactory issue #631  
    environmentsElement(root.evalNode("environments"));  
    databaseIdProviderElement(root.evalNode("databaseIdProvider"));  
    typeHandlerElement(root.evalNode("typeHandlers"));  
    mapperElement(root.evalNode("mappers"));  
  } catch (Exception e) {  
    throw new BuilderException("Error parsing SQL Mapper Configuration. Cause: " + e, e);  
  }  
}
```

### properties（属性）


### settings（设置）

### typeAliases（别名）

### plugins（插件）

### objectFactory（对象工厂）

### objectWrapperFactory

### reflectorFactory（反射工厂）

### environments（环境信息）

### databaseIdProvider（厂商）

### typeHandlers（类型处理器）

### mappers（映射）