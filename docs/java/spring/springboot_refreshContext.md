# Spingboot启动的refreshContext(context)

## 入口
```java
private void refreshContext(ConfigurableApplicationContext context) {
    refresh((ApplicationContext) context);
    if (this.registerShutdownHook) {
        try {
            context.registerShutdownHook();
        }
        catch (AccessControlException ex) {
            // Not allowed in some environments.
        }
    }
}
```
进入`refresh((ApplicationContext) context);`
```java
/**
    * Refresh the underlying {@link ApplicationContext}.
    * @param applicationContext the application context to refresh
    * @deprecated since 2.3.0 in favor of
    * {@link #refresh(ConfigurableApplicationContext)}
    */
@Deprecated
protected void refresh(ApplicationContext applicationContext) {
    Assert.isInstanceOf(ConfigurableApplicationContext.class, applicationContext);
    refresh((ConfigurableApplicationContext) applicationContext);
}
```
进入`refresh((ConfigurableApplicationContext) applicationContext);`
```java
/**
    * Refresh the underlying {@link ApplicationContext}.
    * @param applicationContext the application context to refresh
    */
protected void refresh(ConfigurableApplicationContext applicationContext) {
    applicationContext.refresh();
}
// 进入来到接口层，去到 ServletWebServerApplicationContext 的实现类
@Override
public final void refresh() throws BeansException, IllegalStateException {
    try {
        super.refresh();
    }
    catch (RuntimeException ex) {
        WebServer webServer = this.webServer;
        if (webServer != null) {
            webServer.stop();
        }
        throw ex;
    }
}
// 调用父类的 refresh()
```
子类实现调用父类的 refresh() 
```java
@Override
public void refresh() throws BeansException, IllegalStateException {
    synchronized (this.startupShutdownMonitor) {
        // 1. Prepare this context for refreshing.
        prepareRefresh();

        // 2. Tell the subclass to refresh the internal bean factory.
        ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();

        // 3. Prepare the bean factory for use in this context.
        prepareBeanFactory(beanFactory);

        try {
            // 4. Allows post-processing of the bean factory in context subclasses.
            postProcessBeanFactory(beanFactory);

            // 5. Invoke factory processors registered as beans in the context.
            invokeBeanFactoryPostProcessors(beanFactory);

            // 6. Register bean processors that intercept bean creation.
            registerBeanPostProcessors(beanFactory);

            // 7. Initialize message source for this context.
            initMessageSource();

            // 8. Initialize event multicaster for this context.
            initApplicationEventMulticaster();

            // 9. Initialize other special beans in specific context subclasses.
            onRefresh();

            // 10. Check for listener beans and register them.
            registerListeners();

            // 11. Instantiate all remaining (non-lazy-init) singletons.
            finishBeanFactoryInitialization(beanFactory);

            // 12. Last step: publish corresponding event.
            finishRefresh();
        }

        catch (BeansException ex) {
            if (logger.isWarnEnabled()) {
                logger.warn("Exception encountered during context initialization - " +
                        "cancelling refresh attempt: " + ex);
            }

            // Destroy already created singletons to avoid dangling resources.
            destroyBeans();

            // Reset 'active' flag.
            cancelRefresh(ex);

            // Propagate exception to caller.
            throw ex;
        }

        finally {
            // Reset common introspection caches in Spring's core, since we
            // might not ever need metadata for singleton beans anymore...
            resetCommonCaches();
        }
    }
}
```

## 逐个描述refresh()12步 
上面代码梳理已经找到refresh的源码位置，下面逐个描述。

### 第1步：prepareRefresh();
repare this context for refreshing.
准备此上下文以进行刷新
```java
protected void prepareRefresh() {
    // 清除本地元数据缓存（如果有），删除所有缓存的类元数据。
    this.scanner.clearCache();
    // 调用父类，写在下面
    super.prepareRefresh();
}
```
```java
/**
    * Prepare this context for refreshing, setting its startup date and
    * active flag as well as performing any initialization of property sources.
    * 准备此上下文以进行刷新、设置其启动日期和活动标志以及执行所有属性源的初始化。
    */
protected void prepareRefresh() {
    // Switch to active.
    this.startupDate = System.currentTimeMillis();
    this.closed.set(false);
    this.active.set(true);

    if (logger.isDebugEnabled()) {
        if (logger.isTraceEnabled()) {
            logger.trace("Refreshing " + this);
        }
        else {
            logger.debug("Refreshing " + getDisplayName());
        }
    }

    // Initialize any placeholder property sources in the context environment.
    // 初始化上下文环境中的所有占位符属性源。
    initPropertySources();

    // Validate that all properties marked as required are resolvable:
    // see ConfigurablePropertyResolver#setRequiredProperties
    // 验证标记为必需的所有属性都是可解析的
    getEnvironment().validateRequiredProperties();

    // Store pre-refresh ApplicationListeners...
    // 存储预刷新 ApplicationListeners
    if (this.earlyApplicationListeners == null) {
        this.earlyApplicationListeners = new LinkedHashSet<>(this.applicationListeners);
    }
    else {
        // Reset local application listeners to pre-refresh state.
        this.applicationListeners.clear();
        this.applicationListeners.addAll(this.earlyApplicationListeners);
    }

    // Allow for the collection of early ApplicationEvents,
    // to be published once the multicaster is available...
    // 允许收集早期的应用程序事件，一旦多播器可用就发布
    this.earlyApplicationEvents = new LinkedHashSet<>();
}
```

### 第2步：ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();
Tell the subclass to refresh the internal bean factory.
告诉子类刷新内部 bean 工厂，得到Bean工厂
```java
protected ConfigurableListableBeanFactory obtainFreshBeanFactory() {
    refreshBeanFactory();
    // 返回BeanFactory
    return getBeanFactory();
}
```
```java
protected final void refreshBeanFactory() throws IllegalStateException {
    // 如果当前值 refreshed 是预期值 false，则自动将值设置为给定的true 更新值
    if (!this.refreshed.compareAndSet(false, true)) {
        throw new IllegalStateException(
                "GenericApplicationContext does not support multiple refresh attempts: just call 'refresh' once");
    }
    // getId():applicton
    // 指定一个 id 用于序列化目的，如果需要，允许将此 BeanFactory 从此 id 反序列化回 BeanFactory 对象。
    this.beanFactory.setSerializationId(getId());
}
```
```java
@Override
public final ConfigurableListableBeanFactory getBeanFactory() {
    return this.beanFactory;
}
```


### 第3步：prepareBeanFactory(beanFactory);
Prepare the bean factory for use in this context.
准备 bean 工厂以在此上下文中使用
```java
protected void prepareBeanFactory(ConfigurableListableBeanFactory beanFactory) {
    // Tell the internal bean factory to use the context's class loader etc.
    // 告诉内部 bean 工厂使用上下文的类加载器等
    beanFactory.setBeanClassLoader(getClassLoader());
    beanFactory.setBeanExpressionResolver(new StandardBeanExpressionResolver(beanFactory.getBeanClassLoader()));
    beanFactory.addPropertyEditorRegistrar(new ResourceEditorRegistrar(this, getEnvironment()));

    // Configure the bean factory with context callbacks.
    // 使用上下文回调配置 bean 工厂
    beanFactory.addBeanPostProcessor(new ApplicationContextAwareProcessor(this));
    beanFactory.ignoreDependencyInterface(EnvironmentAware.class);
    beanFactory.ignoreDependencyInterface(EmbeddedValueResolverAware.class);
    beanFactory.ignoreDependencyInterface(ResourceLoaderAware.class);
    beanFactory.ignoreDependencyInterface(ApplicationEventPublisherAware.class);
    beanFactory.ignoreDependencyInterface(MessageSourceAware.class);
    beanFactory.ignoreDependencyInterface(ApplicationContextAware.class);

    // BeanFactory interface not registered as resolvable type in a plain factory.
    // BeanFactory 接口未在普通工厂中注册为可解析类型
    // MessageSource registered (and found for autowiring) as a bean.
    // MessageSource 作为 bean 注册（并为自动装配找到）
    beanFactory.registerResolvableDependency(BeanFactory.class, beanFactory);
    beanFactory.registerResolvableDependency(ResourceLoader.class, this);
    beanFactory.registerResolvableDependency(ApplicationEventPublisher.class, this);
    beanFactory.registerResolvableDependency(ApplicationContext.class, this);

    // Register early post-processor for detecting inner beans as ApplicationListeners.
    // 将用于检测内部 bean 的早期后处理器注册为 ApplicationListener
    beanFactory.addBeanPostProcessor(new ApplicationListenerDetector(this));

    // Detect a LoadTimeWeaver and prepare for weaving, if found.
    // 检测 LoadTimeWeaver 并准备编织（如果找到）
    if (beanFactory.containsBean(LOAD_TIME_WEAVER_BEAN_NAME)) {
        beanFactory.addBeanPostProcessor(new LoadTimeWeaverAwareProcessor(beanFactory));
        // Set a temporary ClassLoader for type matching.
        beanFactory.setTempClassLoader(new ContextTypeMatchClassLoader(beanFactory.getBeanClassLoader()));
    }

    // Register default environment beans.
    // 注册默认环境 bean
    if (!beanFactory.containsLocalBean(ENVIRONMENT_BEAN_NAME)) {
        beanFactory.registerSingleton(ENVIRONMENT_BEAN_NAME, getEnvironment());
    }
    if (!beanFactory.containsLocalBean(SYSTEM_PROPERTIES_BEAN_NAME)) {
        beanFactory.registerSingleton(SYSTEM_PROPERTIES_BEAN_NAME, getEnvironment().getSystemProperties());
    }
    if (!beanFactory.containsLocalBean(SYSTEM_ENVIRONMENT_BEAN_NAME)) {
        beanFactory.registerSingleton(SYSTEM_ENVIRONMENT_BEAN_NAME, getEnvironment().getSystemEnvironment());
    }
}
```

### 第4步：postProcessBeanFactory(beanFactory);
Allows post-processing of the bean factory in context subclasses.
调用在上下文中注册为 bean 的工厂处理器
实例化并调用所有已注册的 BeanFactoryPostProcessor bean，如果给定，则尊重显式顺序
这里创建的是AnnotationConfigServletWebServerApplicationContext类的上下文，所以执行的是这个类里的postProcessBeanFactory(beanFactory)方法
> BeanFactoryPostProcessor接口，可以在spring的bean创建之前，修改bean的定义属性。
> 也就是说，Spring允许BeanFactoryPostProcessor在容器实例化任何其它bean之前读取配置元数据，并可以根据需要进行修改。
> 例如:
> * 可以把bean的scope从singleton改为prototype
> * 也可以把property的值给修改掉。
> * 可以同时配置多个BeanFactoryPostProcessor，并通过设置'order'属性来控制各个BeanFactoryPostProcessor的执行次序。

<span style="color : green">
BeanFactoryPostProcessor是在spring容器加载了bean的定义文件之后，在bean实例化之前执行的。
接口方法的入参是ConfigurrableListableBeanFactory，使用该参数，可以获取到相关bean的定义信息
</span>

```java
protected void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {
    // 调用父类，注册 Servlet 上下文感知处理器
    super.postProcessBeanFactory(beanFactory);
    if (this.basePackages != null && this.basePackages.length > 0) {
        this.scanner.scan(this.basePackages);
    }
    if (!this.annotatedClasses.isEmpty()) {
        this.reader.register(ClassUtils.toClassArray(this.annotatedClasses));
    }
}
```

### 第5步：invokeBeanFactoryPostProcessors(beanFactory);
Invoke factory processors registered as beans in the context.

### 第6步：registerBeanPostProcessors(beanFactory);
Register bean processors that intercept bean creation.

### 第7步：initMessageSource();
Initialize message source for this context.
 
### 第8步：initApplicationEventMulticaster();
Initialize event multicaster for this context.
初始化此context的事件多播器
```java {18}
// 工厂中 ApplicationEventMulticaster bean 的名称。 如果没有提供，则使用默认的
public static final String APPLICATION_EVENT_MULTICASTER_BEAN_NAME = "applicationEventMulticaster";
/**
    * 初始化 ApplicationEventMulticaster。 
    * 如果上下文中没有定义，则使用 SimpleApplicationEventMulticaster。
    * @see org.springframework.context.event.SimpleApplicationEventMulticaster
    */
protected void initApplicationEventMulticaster() {
    ConfigurableListableBeanFactory beanFactory = getBeanFactory();
    if (beanFactory.containsLocalBean(APPLICATION_EVENT_MULTICASTER_BEAN_NAME)) {
        this.applicationEventMulticaster =
                beanFactory.getBean(APPLICATION_EVENT_MULTICASTER_BEAN_NAME, ApplicationEventMulticaster.class);
        if (logger.isTraceEnabled()) {
            logger.trace("Using ApplicationEventMulticaster [" + this.applicationEventMulticaster + "]");
        }
    }
    else {
        this.applicationEventMulticaster = new SimpleApplicationEventMulticaster(beanFactory);
        beanFactory.registerSingleton(APPLICATION_EVENT_MULTICASTER_BEAN_NAME, this.applicationEventMulticaster);
        if (logger.isTraceEnabled()) {
            logger.trace("No '" + APPLICATION_EVENT_MULTICASTER_BEAN_NAME + "' bean, using " +
                    "[" + this.applicationEventMulticaster.getClass().getSimpleName() + "]");
        }
    }
}
```
[SimpleApplicationEventMulticaster](./springevent.md)

 
### 第9步：onRefresh();
Initialize other special beans in specific context subclasses.

### 第10步：registerListeners();
Check for listener beans and register them.
 
### 第11步：finishBeanFactoryInitialization(beanFactory);
Instantiate all remaining (non-lazy-init) singletons.

### 第12步：finishRefresh();
Last step: publish corresponding event.