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
        // Prepare this context for refreshing.
        prepareRefresh();

        // Tell the subclass to refresh the internal bean factory.
        ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();

        // Prepare the bean factory for use in this context.
        prepareBeanFactory(beanFactory);

        try {
            // 1. Allows post-processing of the bean factory in context subclasses.
            postProcessBeanFactory(beanFactory);

            // 2. Invoke factory processors registered as beans in the context.
            invokeBeanFactoryPostProcessors(beanFactory);

            // 3. Register bean processors that intercept bean creation.
            registerBeanPostProcessors(beanFactory);

            // 4. Initialize message source for this context.
            initMessageSource();

            // 5. Initialize event multicaster for this context.
            initApplicationEventMulticaster();

            // 6. Initialize other special beans in specific context subclasses.
            onRefresh();

            // 7. Check for listener beans and register them.
            registerListeners();

            // 8. Instantiate all remaining (non-lazy-init) singletons.
            finishBeanFactoryInitialization(beanFactory);

            // 9. Last step: publish corresponding event.
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

## 逐个描述refresh()9步 
上面代码梳理已经找到refresh的源码位置，下面逐个描述。

### 第1步：prepareRefresh();
repare this context for refreshing.

### 第2步：ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();
Tell the subclass to refresh the internal bean factory.

### 第3步：prepareBeanFactory(beanFactory);
Prepare the bean factory for use in this context.
### 第4步：postProcessBeanFactory(beanFactory);
Allows post-processing of the bean factory in context subclasses.

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