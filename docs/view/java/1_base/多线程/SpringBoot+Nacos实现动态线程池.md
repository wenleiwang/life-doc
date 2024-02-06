# SpringBoot+Nacos实现动态线程池

> 文章摘自：不才陈某 码猿技术专栏

在后台开发中，会经常用到线程池技术，对于线程池核心参数的配置很大程度上依靠经验。然而，由于系统运行过程中存在的不确定性，我们很难一劳永逸地规划一个合理的线程池参数。在对线程池配置参数进行调整时，一般需要对服务进行重启，这样修改的成本就会偏高。一种解决办法就是，将线程池的配置放到平台侧，运行开发同学根据系统运行情况对核心参数进行动态配置。

本文以Nacos作为服务配置中心，以修改线程池核心线程数、最大线程数为例，实现一个简单的动态化线程池。

## 依赖

```xml
<dependency>  
    <groupId>com.alibaba.cloud</groupId>  
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>  
    <version>2021.1</version>  
</dependency>  
<dependency>  
    <groupId>com.alibaba.cloud</groupId>  
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>  
    <version>2021.1</version>  
</dependency>  
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-web</artifactId>  
</dependency>  
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter</artifactId>  
</dependency>
```


## 配置文件

### bootstrap.yml

```yaml
server:  
  port: 8010  
  # 应用名称（nacos会将该名称当做服务名称）  
spring:  
  application:  
    name: order-service  
  cloud:  
    nacos:  
      discovery:  
        namespace: public  
        server-addr: 192.168.174.129:8848  
      config:  
        server-addr: 192.168.174.129:8848  
        file-extension: yml
```

### application.yml

```yaml
spring:  
  profiles:  
    active: dev
```

为什么要配置两个yml文件？

springboot中配置文件的加载是存在优先级顺序的，bootstrap优先级高于application。

nacos在项目初始化时，要保证先从配置中心进行配置拉取，拉取配置之后才能保证项目的正常启动。

## nacos配置

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041035892.png)


注意Data ID的命名格式为，`${spring.application.name}-${spring.profile.active}.${spring.cloud.nacos.config.file-extension}` ，在本文中，Data ID的名字就是`order-service-dev.yml`。

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041037841.png)

## 线程池配置和nacos配置变更监听

```java
@RefreshScope  
@Configuration  
public class DynamicThreadPool implements InitializingBean {  
    @Value("${core.size}")  
    private String coreSize;  
   
    @Value("${max.size}")  
    private String maxSize;  
   
    private static ThreadPoolExecutor threadPoolExecutor;  
   
    @Autowired  
    private NacosConfigManager nacosConfigManager;  
   
    @Autowired  
    private NacosConfigProperties nacosConfigProperties;  
   
    @Override  
    public void afterPropertiesSet() throws Exception {  
        //按照nacos配置初始化线程池  
        threadPoolExecutor = new ThreadPoolExecutor(Integer.parseInt(coreSize), Integer.parseInt(maxSize), 10L, TimeUnit.SECONDS,  
                new LinkedBlockingQueue<>(10),  
                new ThreadFactoryBuilder().setNameFormat("c_t_%d").build(),  
                new RejectedExecutionHandler() {  
                    @Override  
                    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {  
                        System.out.println("rejected!");  
                    }  
                });  
   
        //nacos配置变更监听  
        nacosConfigManager.getConfigService().addListener("order-service-dev.yml", nacosConfigProperties.getGroup(),  
                new Listener() {  
                    @Override  
                    public Executor getExecutor() {  
                        return null;  
                    }  
   
                    @Override  
                    public void receiveConfigInfo(String configInfo) {  
                        //配置变更，修改线程池配置  
                        System.out.println(configInfo);  
                        changeThreadPoolConfig(Integer.parseInt(coreSize), Integer.parseInt(maxSize));  
                    }  
                });  
    }  
   
    /**  
     * 打印当前线程池的状态  
     */  
    public String printThreadPoolStatus() {  
        return String.format("core_size:%s,thread_current_size:%s;" +  
                        "thread_max_size:%s;queue_current_size:%s,total_task_count:%s", threadPoolExecutor.getCorePoolSize(),  
                threadPoolExecutor.getActiveCount(), threadPoolExecutor.getMaximumPoolSize(), threadPoolExecutor.getQueue().size(),  
                threadPoolExecutor.getTaskCount());  
    }  
   
    /**  
     * 给线程池增加任务  
     *  
     * @param count  
     */  
    public void dynamicThreadPoolAddTask(int count) {  
        for (int i = 0; i < count; i++) {  
            int finalI = i;  
            threadPoolExecutor.execute(new Runnable() {  
                @Override  
                public void run() {  
                    try {  
                        System.out.println(finalI);  
                        Thread.sleep(10000);  
                    } catch (InterruptedException e) {  
                        e.printStackTrace();  
                    }  
                }  
            });  
        }  
    }  
   
    /**  
     * 修改线程池核心参数  
     *  
     * @param coreSize  
     * @param maxSize  
     */  
    private void changeThreadPoolConfig(int coreSize, int maxSize) {  
        threadPoolExecutor.setCorePoolSize(coreSize);  
        threadPoolExecutor.setMaximumPoolSize(maxSize);  
    }  
}
```

这个代码就是实现动态线程池和核心了，需要说明的是：

- `@RefreshScope`：这个注解用来支持nacos的动态刷新功能；
    
- `@Value("${max.size}")`，`@Value("${core.size}")`：这两个注解用来读取我们上一步在nacos配置的具体信息；同时，nacos配置变更时，能够实时读取到变更后的内容
    
- `nacosConfigManager.getConfigService().addListener`：配置监听，nacos配置变更时实时修改线程池的配置。


## controller

为了观察线程池动态变更的效果，增加Controller类。

```java
@RestController  
@RequestMapping("/threadpool")  
public class ThreadPoolController {  
   
    @Autowired  
    private DynamicThreadPool dynamicThreadPool;  
   
    /**  
     * 打印当前线程池的状态  
     */  
    @GetMapping("/print")  
    public String printThreadPoolStatus() {  
        return dynamicThreadPool.printThreadPoolStatus();  
    }  
   
    /**  
     * 给线程池增加任务  
     *  
     * @param count  
     */  
    @GetMapping("/add")  
    public String dynamicThreadPoolAddTask(int count) {  
        dynamicThreadPool.dynamicThreadPoolAddTask(count);  
        return String.valueOf(count);  
    }  
}
```

## 测试

启动项目，访问http://localhost:8010/threadpool/print打印当前线程池的配置。

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041038257.png)

可以看到，这个就是我们之前在nacos配置的线程数。

访问http://localhost:8010/threadpool/add?count=20增加20个任务，重新打印线程池配置

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041038754.png)


可以看到已经有线程在排队了。

为了能够看到效果，我们多访问几次/add接口，增加任务数，在控制台出现拒绝信息时调整nacos配置。

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039118.png)


此时，执行/add命令时，所有的线程都会提示rejected。

调整nacos配置，将核心线程数调整为50，最大线程数调整为100.

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039585.png)

重新多次访问/add接口增加任务，发现没有拒绝信息了。这时，打印具体的线程状态，发现线程池参数修改成功。

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039577.png)

## 总结

这里，只是简单实现了一个可以调整核心线程数和最大线程数的动态线程池。具体的线程池实现原理可以参考美团的这篇文章：https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html，结合监控告警等实现一个完善的动态线程池产品。

优秀的轮子还有好多，比如Hippo4J ，使用起来和dynamic-tp差不多。Hippo4J 有无依赖中间件实现动静线程池，也有默认实现Nacos和Apollo的版本，而dynamic-tp 默认实现依赖Nacos或Apollo。

---

#线程 