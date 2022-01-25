
# SpringBoot Start
## SpringBoot对Bean的管理
Java的启动从main开始
```java
@SpringBootApplication
public class LearnApplication {
	public static void main(String[] args) {
		SpringApplication.run(LearnApplication.class, args);
	}
}
```
进入到run方法，run是SpringApplication类的静态方法
```java
public static ConfigurableApplicationContext run(Class<?> primarySource, String... args) {
    return run(new Class<?>[] { primarySource }, args);
}
```
传入两个参数，
    一个启动类构成的类数组
    一个main启动时传入的参数数组
```java
/**
    * 可用于使用默认设置从指定源运行SpringApplication的静态助手。
    * @param primarySource 要加载的主要来源
    * @param args 应用程序参数（通常从 Java 主方法传递）
    * @return 运行的 ApplicationContext 返回ConfigurableApplicationContext类型
    */
public static ConfigurableApplicationContext run(Class<?> primarySource,
        String... args) {
    return run(new Class<?>[] { primarySource }, args);
}
```
```java
/**
    * 静态助手，可用于使用默认设置和用户提供的参数从指定的源运行SpringApplication 。
    * @param primarySources the primary sources to load
    * @param args the application arguments (usually passed from a Java main method)
    * @return the running {@link ApplicationContext}
    */
public static ConfigurableApplicationContext run(Class<?>[] primarySources,
        String[] args) {
    return new SpringApplication(primarySources).run(args);
}
```

### 先来看SpringApplication的构造函数
从上面代码可以看到这里分了2步。一SpringApplication的构造函数，二调用run方法
```java
/**
    * 创建一个新的SpringApplication实例. 应用上下文将从指定的主要来源加载beans
    * （详情看SpringApplication文档，这个实例能被定制在调用run之前）
    * @param primarySources 指定的主要来源
    */
public SpringApplication(Class<?>... primarySources) {
    this(null, primarySources);
}

@SuppressWarnings({ "unchecked", "rawtypes" })
public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
    // resourceLoader在初始运行时传入的null
    this.resourceLoader = resourceLoader;
    // 断言primarySources（指定的主要来源，启动类）是否null，是-抛出IllegalArgumentException异常
    Assert.notNull(primarySources, "PrimarySources must not be null");
    // 构造成Set结构放入成员变量 this.primarySources
    this.primarySources = new LinkedHashSet<>(Arrays.asList(primarySources));
    // 推断 Web 应用程序类型
    this.webApplicationType = deduceWebApplicationType();
    //设置将应用于 Spring ApplicationContextInitializer的ApplicationContext 。
    setInitializers((Collection) getSpringFactoriesInstances(
            ApplicationContextInitializer.class));
    setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));
    // 推导出main应用的类。通过调用栈得到包含main的类反射后返回回来
    this.mainApplicationClass = deduceMainApplicationClass();
}


/**
*推断Web应用程序类型方法做如下操作：
*1. 如果存在DispatcherHandler、不存在DispatcherServlet、不存在ResourceConfig
*   则该应用程序应作为反应式 Web 应用程序运行，并应启动嵌入式反应式 Web 服务器。
*2. 上述条件不符合，判断javax.servlet.Servlet、ConfigurableWebApplicationContext不存在，
*   如果其中一个成立该应用程序不应作为 Web 应用程序运行，也不应启动嵌入式 Web 服务器。
*3. 上述2个都没满足，返回 WebApplicationType.SERVLET
*   该应用程序应作为基于 servlet 的 Web 应用程序运行，并应启动嵌入式 servlet Web 服务器
*/
private WebApplicationType deduceWebApplicationType() {
    if (ClassUtils.isPresent(REACTIVE_WEB_ENVIRONMENT_CLASS, null)
            && !ClassUtils.isPresent(MVC_WEB_ENVIRONMENT_CLASS, null)
            && !ClassUtils.isPresent(JERSEY_WEB_ENVIRONMENT_CLASS, null)) {
        return WebApplicationType.REACTIVE;
    }
    for (String className : WEB_ENVIRONMENT_CLASSES) {
        if (!ClassUtils.isPresent(className, null)) {
            return WebApplicationType.NONE;
        }
    }
    return WebApplicationType.SERVLET;
}
```
ApplicationContextInitalizer和ApplicationListener在spring-boot-autoconfigure-2.3.3.RELEASE.jar下
![](./img/springbootstart/2022-01-25-14-09-31.png)
```yml
# Initializers
# 共享元数据读取器工厂上下文初始化器  和 条件评估报告记录监听器
org.springframework.context.ApplicationContextInitializer=\
org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer,\
org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener

# Application Listeners 后台预初始化器
org.springframework.context.ApplicationListener=\
org.springframework.boot.autoconfigure.BackgroundPreinitializer
```
上面SpringApplication构造方法里
getSpringFactoriesInstances(ApplicationListener.class)实现接口的类如下：
![](./img/springbootstart/2022-01-24-13-14-50.png)
单独看下getSpringFactoriesInstances()这个方法
```java
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type) {
    return getSpringFactoriesInstances(type, new Class<?>[] {});
}
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes, Object... args) {
    // 获取类加载器
    ClassLoader classLoader = getClassLoader();
    // Use names and ensure unique to protect against duplicates
    // 使用名字并确保唯一防止重复
    // loadFactoryNames这个方法出现频率很高
    Set<String> names = new LinkedHashSet<>(SpringFactoriesLoader.loadFactoryNames(type, classLoader));
    List<T> instances = createSpringFactoriesInstances(type, parameterTypes, classLoader, args, names);
    AnnotationAwareOrderComparator.sort(instances);
    return instances;
}
```
看下loadFactoryNames方法
```java
/**
    * 使用给定的类加载器从"META-INF/spring.factories"加载给定类型的工厂实现的完全限定类名。
    * @param factoryType the interface or abstract class representing the factory
    * @param classLoader the ClassLoader to use for loading resources; can be
    * {@code null} to use the default
    * @throws IllegalArgumentException if an error occurs while loading factory names
    * @see #loadFactories
    */
public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
    String factoryTypeName = factoryType.getName();
    // 这个getOrDefault()表示从所有的META-INF/spring.factories文件组成的Map中
    //取到指定类型的所有全限定名的集合
    return loadSpringFactories(classLoader).getOrDefault(factoryTypeName, Collections.emptyList());
}

private static Map<String, List<String>> loadSpringFactories(@Nullable ClassLoader classLoader) {
    // 读缓存数据
    MultiValueMap<String, String> result = cache.get(classLoader);
    if (result != null) {
        return result;
    }

    try {
        // 得到classloader下的所有jar包中的spring.factories的文件。
        Enumeration<URL> urls = (classLoader != null ?
                classLoader.getResources(FACTORIES_RESOURCE_LOCATION) :
                ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
        result = new LinkedMultiValueMap<>();
        // 循环资源
        while (urls.hasMoreElements()) {
            URL url = urls.nextElement();
            UrlResource resource = new UrlResource(url);
            Properties properties = PropertiesLoaderUtils.loadProperties(resource);
            for (Map.Entry<?, ?> entry : properties.entrySet()) {
                String factoryTypeName = ((String) entry.getKey()).trim();
                // META-INF/spring.factories文件里面value有多个逗号隔开的字符串，需要循环取出每个
                for (String factoryImplementationName : StringUtils.commaDelimitedListToStringArray((String) entry.getValue())) {
                    // 放入响应Map中
                    result.add(factoryTypeName, factoryImplementationName.trim());
                }
            }
        }
        // 放入缓存
        cache.put(classLoader, result);
        return result;
    }
    catch (IOException ex) {
        throw new IllegalArgumentException("Unable to load factories from location [" +
                FACTORIES_RESOURCE_LOCATION + "]", ex);
    }
}
```
### 再来看调用run方法
从上面代码可以看到这里分了2步。一SpringApplication的构造函数，二调用run方法

```java
/**
    * Run the Spring application, creating and refreshing a new
    * {@link ApplicationContext}.
    * @param args the application arguments (usually passed from a Java main method)
    * @return a running {@link ApplicationContext}
    */
public ConfigurableApplicationContext run(String... args) {
    // 简单的秒表，允许对多个任务进行计时，显示每个命名任务的总运行时间和运行时间。
    StopWatch stopWatch = new StopWatch();
    // 启动一个未命名的计时任务。
    stopWatch.start();
    ConfigurableApplicationContext context = null;
    // 收集 用于支持自定义上报SpringApplication启动错误的回调接口
    Collection<SpringBootExceptionReporter> exceptionReporters = new ArrayList<>();
    // 配置无头属性,给System设置java.awt.headless=true的Property值
    configureHeadlessProperty();
    // springboot启动的几个主要过程的监听通知都是通过他来进行回调
    SpringApplicationRunListeners listeners = getRunListeners(args);
    listeners.starting();
    try {
        ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
        ConfigurableEnvironment environment = prepareEnvironment(listeners, applicationArguments);
        configureIgnoreBeanInfo(environment);
        Banner printedBanner = printBanner(environment);
        context = createApplicationContext();
        exceptionReporters = getSpringFactoriesInstances(SpringBootExceptionReporter.class,
                new Class[] { ConfigurableApplicationContext.class }, context);
        prepareContext(context, environment, listeners, applicationArguments, printedBanner);
        refreshContext(context);
        afterRefresh(context, applicationArguments);
        stopWatch.stop();
        if (this.logStartupInfo) {
            new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);
        }
        listeners.started(context);
        callRunners(context, applicationArguments);
    }
    catch (Throwable ex) {
        handleRunFailure(context, ex, exceptionReporters, listeners);
        throw new IllegalStateException(ex);
    }

    try {
        listeners.running(context);
    }
    catch (Throwable ex) {
        handleRunFailure(context, ex, exceptionReporters, null);
        throw new IllegalStateException(ex);
    }
    return context;
}
```