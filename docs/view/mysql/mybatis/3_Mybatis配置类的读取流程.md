# Mybatis配置类的读取流程

## 前言

要看 Mybatis 配置列表描述，去到 [配置_MyBatis中文网](https://mybatis.net.cn/configuration.html#settings) 查看。

在官网的列表中有 28 个配置。

## 找到查看代码入口

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
    // 详看1
    propertiesElement(root.evalNode("properties"));  
    // 详看2
    Properties settings = settingsAsProperties(root.evalNode("settings"));  
    // 详看3
    loadCustomVfs(settings);  
    // 详看4
    loadCustomLogImpl(settings);  
    // 详看5
    typeAliasesElement(root.evalNode("typeAliases"));  
    // 详看6
    pluginElement(root.evalNode("plugins"));  
    // 详看7
    objectFactoryElement(root.evalNode("objectFactory"));  
    // 详看8
    objectWrapperFactoryElement(root.evalNode("objectWrapperFactory"));  
    // 详看9
    reflectorFactoryElement(root.evalNode("reflectorFactory"));  
    // 详看10
    settingsElement(settings);  
    // read it after objectFactory and objectWrapperFactory issue #631  
    // 详看11
    environmentsElement(root.evalNode("environments"));  
    // 详看12
    databaseIdProviderElement(root.evalNode("databaseIdProvider"));  
    // 详看13
    typeHandlerElement(root.evalNode("typeHandlers"));  
    // 详看14
    mapperElement(root.evalNode("mappers"));  
  } catch (Exception e) {  
    throw new BuilderException("Error parsing SQL Mapper Configuration. Cause: " + e, e);  
  }  
}
```

### 详看1：properties（属性）


### 详看2：settings（设置）

### 详看3：加载自定义文件系统

==注意这个要写全限定名==，因为没有配置别名

| 设置名 | 描述 | 有效值 | 默认值 |
| ---- | ---- | ---- | ---- |
| vfsImpl | 指定 VFS 的实现 | 自定义 VFS 的实现的类全限定名，以逗号分隔。 | 未设置 |

`loadCustomVfs(settings)`

看下代码：
```java
private void loadCustomVfs(Properties props) throws ClassNotFoundException {  
  // 从配置文件中去到 vfsImpl 属性
  String value = props.getProperty("vfsImpl");  
  if (value != null) {  
    // 这个配置可以是多个用逗号隔开
    String[] clazzes = value.split(",");  
    for (String clazz : clazzes) {  
      if (!clazz.isEmpty()) {  
        @SuppressWarnings("unchecked")  
        // 加载资源，放入配置类中
        Class<? extends VFS> vfsImpl = (Class<? extends VFS>)Resources.classForName(clazz);  
        configuration.setVfsImpl(vfsImpl);  
      }  
    }  
  }  
}
```

这里有一个VFS的类，关于它的使用如下，可以试试

```java
@Test  
public void testVfs() throws IOException {  
    DefaultVFS defaultVFS = new DefaultVFS();  
  
    // 1. 加载 classpath 下的文件  
    List<String> list = defaultVFS.list("learn/note");  
    System.out.println("info--" + list.toString());  
      
    // 2. 加载 jar 包下的资源  
    String path = "file:///E:/apache-maven-3.9.6/repository/com/alibaba/fastjson/1.2.69/fastjson-1.2.69.jar";  
    list = defaultVFS.list(new URL(path), "com/alibaba/fastjson/annotation");  
    System.out.println("info--" + list.toString());  
}
```

### 详看4：加载自定义日志实现

| 设置名  | 描述  | 有效值  | 默认值  |
|---|---|---|---|
|logImpl|指定 MyBatis 所用日志的具体实现，未指定时将自动查找。|SLF4J \| LOG4J \| LOG4J2 \| JDK_LOGGING \| COMMONS_LOGGING \| STDOUT_LOGGING \| NO_LOGGING|未设置|

`loadCustomLogImpl(settings)`

```java
private void loadCustomLogImpl(Properties props) {  
  // 这里可以是配置好的别名也可以是全限定名
  Class<? extends Log> logImpl = resolveClass(props.getProperty("logImpl"));  
  // 配置读取设置到配置类
  configuration.setLogImpl(logImpl);  
}
```

看下 resolveClass

```java
protected <T> Class<? extends T> resolveClass(String alias) {  
  // 如果没有传入返回
  if (alias == null) {  
    return null;  
  }  
  try {  
    // 尝试解析
    return resolveAlias(alias);  
  } catch (Exception e) {  
    throw new BuilderException("Error resolving class. Cause: " + e, e);  
  }  
}

protected <T> Class<? extends T> resolveAlias(String alias) {  
  return typeAliasRegistry.resolveAlias(alias);  
}
```

调用类型别名注册器的方法

```java
public <T> Class<T> resolveAlias(String string) {  
  try {  
    if (string == null) {  
      return null;  
    }  
    // issue #748  
    // 都转换成小写
    String key = string.toLowerCase(Locale.ENGLISH);  
    Class<T> value;  
    // 如果包含在类型别名里，直接从 map 中取出返回
    if (typeAliases.containsKey(key)) {  
      value = (Class<T>) typeAliases.get(key);  
    } else {  
      // 反射出来一个类，这里使用的是全限定名
      value = (Class<T>) Resources.classForName(string);  
    }  
    return value;  
  } catch (ClassNotFoundException e) {  
    // 没有直接抛异常
    throw new TypeException("Could not resolve type alias '" + string + "'.  Cause: " + e, e);  
  }  
}
```

我们可以在 TypeAliasRegistry 类的初始化时可以看到，基本类型的别名
```
registerAlias("string", String.class);  
  
registerAlias("byte", Byte.class);  
registerAlias("long", Long.class);  
registerAlias("short", Short.class);  
registerAlias("int", Integer.class);  
registerAlias("integer", Integer.class);  
registerAlias("double", Double.class);  
registerAlias("float", Float.class);  
registerAlias("boolean", Boolean.class);  
  
registerAlias("byte[]", Byte[].class);  
registerAlias("long[]", Long[].class);  
registerAlias("short[]", Short[].class);  
registerAlias("int[]", Integer[].class);  
registerAlias("integer[]", Integer[].class);  
registerAlias("double[]", Double[].class);  
registerAlias("float[]", Float[].class);  
registerAlias("boolean[]", Boolean[].class);  
  
registerAlias("_byte", byte.class);  
registerAlias("_long", long.class);  
registerAlias("_short", short.class);  
registerAlias("_int", int.class);  
registerAlias("_integer", int.class);  
registerAlias("_double", double.class);  
registerAlias("_float", float.class);  
registerAlias("_boolean", boolean.class);  
  
registerAlias("_byte[]", byte[].class);  
registerAlias("_long[]", long[].class);  
registerAlias("_short[]", short[].class);  
registerAlias("_int[]", int[].class);  
registerAlias("_integer[]", int[].class);  
registerAlias("_double[]", double[].class);  
registerAlias("_float[]", float[].class);  
registerAlias("_boolean[]", boolean[].class);  
  
registerAlias("date", Date.class);  
registerAlias("decimal", BigDecimal.class);  
registerAlias("bigdecimal", BigDecimal.class);  
registerAlias("biginteger", BigInteger.class);  
registerAlias("object", Object.class);  
  
registerAlias("date[]", Date[].class);  
registerAlias("decimal[]", BigDecimal[].class);  
registerAlias("bigdecimal[]", BigDecimal[].class);  
registerAlias("biginteger[]", BigInteger[].class);  
registerAlias("object[]", Object[].class);  
  
registerAlias("map", Map.class);  
registerAlias("hashmap", HashMap.class);  
registerAlias("list", List.class);  
registerAlias("arraylist", ArrayList.class);  
registerAlias("collection", Collection.class);  
registerAlias("iterator", Iterator.class);  
  
registerAlias("ResultSet", ResultSet.class);
```

发现看见上面表格中有效值的这些别名，==有效值中的这些别名什么时候被注册进来的==？

Mybatis 在执行过程中使用的是自己的 Log 

### 详看5：typeAliases（别名）

这个配置有个约束 package 要在 typeAlias 下面

```xml
<typeAliases>
  <typeAlias alias="Author" type="domain.blog.Author"/>
  <typeAlias alias="Blog" type="domain.blog.Blog"/>
  <typeAlias alias="Comment" type="domain.blog.Comment"/>
  <typeAlias alias="Post" type="domain.blog.Post"/>
  <typeAlias alias="Section" type="domain.blog.Section"/>
  <typeAlias alias="Tag" type="domain.blog.Tag"/>
  
  <package name="domain.blog"/>
</typeAliases>
```

`typeAliasesElement(root.evalNode("typeAliases"));`

注册别名到配置里这个代码简单

```java
private void typeAliasesElement(XNode parent) {  
  if (parent != null) {  
    for (XNode child : parent.getChildren()) {  
      if ("package".equals(child.getName())) {  
        String typeAliasPackage = child.getStringAttribute("name");  
        configuration.getTypeAliasRegistry().registerAliases(typeAliasPackage);  
      } else {  
        String alias = child.getStringAttribute("alias");  
        String type = child.getStringAttribute("type");  
        try {  
          Class<?> clazz = Resources.classForName(type);  
          if (alias == null) {  
            typeAliasRegistry.registerAlias(clazz);  
          } else {  
            typeAliasRegistry.registerAlias(alias, clazz);  
          }  
        } catch (ClassNotFoundException e) {  
          throw new BuilderException("Error registering typeAlias for '" + alias + "'. Cause: " + e, e);  
        }  
      }  
    }  
  }  
}
```

### 详看6：plugins（插件）

引入插件

```java
private void pluginElement(XNode parent) throws Exception {  
  if (parent != null) {  
    for (XNode child : parent.getChildren()) {  
      String interceptor = child.getStringAttribute("interceptor");  
      Properties properties = child.getChildrenAsProperties();  
      // 插件初始化出来
      Interceptor interceptorInstance = (Interceptor) resolveClass(interceptor).getDeclaredConstructor().newInstance();  
      interceptorInstance.setProperties(properties);  
      // 添加到配置类
      configuration.addInterceptor(interceptorInstance);  
    }  
  }  
}
```

### 详看7：objectFactory（对象工厂）

### 详看8：objectWrapperFactory

### 详看9：reflectorFactory（反射工厂）

### ### 详看10：settingsElement(settings); 

### 详看11：environments（环境信息）

### 详看12：databaseIdProvider（厂商）

### 详看13：typeHandlers（类型处理器）

### 详看14：mappers（映射）