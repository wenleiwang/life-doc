# Springboot延时队列DeayQueue的使用

## 什么是DeayQueue？

是一个任务定时周期的延迟执行的队列。根据指定的执行时间从小到大排序，否则根据插入到队列的先后排序。newScheduledThreadPool 线程池使用了这个队列。

DelayQueue提供了在指定时间才能获取队列元素的功能，队列头元素是最接近过期的元素。

没有过期元素的话，使用poll()方法会返回null值，超时判定是通过getDelay(TimeUnit.NANOSECONDS)方法的返回值小于等于0来判断。
延时队列不能存放空元素。

一般使用take()方法阻塞等待，有过期元素时继续。


> [文章摘自：springboot执行延时任务之DelayQueue](https://blog.csdn.net/weixin_42169551/article/details/110121130)


## 使用步骤

### 队列中的元素

```java

import java.util.Date;
import java.util.concurrent.Delayed;
import java.util.concurrent.TimeUnit;

/**
 * @author 
 * @Time 2020/11/23 10:53
 * @description: DelayTask延时任务队列中元素
 */
public class DelayTask implements Delayed {
    final private HotelRabbitMq data;
    final private long expire;

    /**
     * 构造延时任务
     * @param data      业务数据
     * @param expire    任务延时时间（ms）
     */
    public DelayTask(xx data, long expire) {
        super();
        this.data = data;
        this.expire = expire + System.currentTimeMillis();
    }

    public HotelRabbitMq getData() {
        return data;
    }

    public long getExpire() {
        return expire;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof DelayTask) {
            return this.data.getIdentifier().equals(((DelayTask) obj).getData().getIdentifier());
        }
        return false;
    }

    @Override
    public String toString() {
        return "{" + "data:" + data.toString() + "," + "expire:" + new Date(expire) + "}";
    }

    @Override
    public long getDelay(TimeUnit unit) {
        return unit.convert(this.expire - System.currentTimeMillis(), unit);
    }

    @Override
    public int compareTo(Delayed o) {
        long delta = getDelay(TimeUnit.NANOSECONDS) - o.getDelay(TimeUnit.NANOSECONDS);
        return (int) delta;
    }
}

```

### 用户自定义的业务数据基类

```java
TaskBase类是用户自定义的业务数据基类，其中有一个identifier字段来标识任务的id，方便进行索引  

xx 类按自己需求定义
```


### 定义验视任务管理类DelayQueueManager

定义一个延时任务管理类DelayQueueManager，通过@Component注解加入到spring中管理，在需要使用的地方通过@Autowire注入

```java
import com.alibaba.fastjson.JSON;
import org.fh.config.RabbitProducer;
import org.fh.entity.dyne.HotelRabbitMq;
import org.fh.entity.dyne.HotelRegister;
import org.fh.entity.util.TaskBase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.concurrent.DelayQueue;
import java.util.concurrent.Executors;

/**
 * @author 
 * @Time 2020/11/23 10:59
 * @description: DelayQueueManager延时任务管理类
 */

@Component
public class DelayQueueManager implements CommandLineRunner {

    @Autowired
    RabbitProducer rabbitProducer;

    private final Logger logger = LoggerFactory.getLogger(DelayQueueManager.class);
    private DelayQueue<DelayTask> delayQueue = new DelayQueue<>();

    /**
     * 加入到延时队列中
     * @param task
     */
    public void put(DelayTask task) {
        logger.info("加入延时任务：{}", task);
        delayQueue.put(task);
    }

    /**
     * 取消延时任务
     * @param task
     * @return
     */
    public boolean remove(DelayTask task) {
        logger.info("取消延时任务：{}", task);
        return delayQueue.remove(task);
    }

    /**
     * 取消延时任务
     * @param taskid
     * @return
     */
    public boolean remove(String taskid) {
        return remove(new DelayTask(new HotelRabbitMq(taskid), 0));
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("初始化延时队列");
        Executors.newSingleThreadExecutor().execute(new Thread(this::excuteThread));
    }

    /**
     * 延时任务执行线程
     */
    private void excuteThread() {
        while (true) {
            try {
                DelayTask task = delayQueue.take();
                processTask(task);
            } catch (InterruptedException e) {
                break;
            }
        }
    }

    /**
     * 内部执行延时任务
     * @param task
     */
    private void processTask(DelayTask task) {
        logger.info("执行延时任务：{}", task);
        //根据task中的data自定义数据来处理相关逻辑，例 if (task.getData() instanceof XXX) {}
        //发送rabbitmq
        //rabbitProducer.sendDemoQueue(task.getData());
    }

    public void put(HotelRegister hotelRegister, int i) {
    }
}
```


---

#线程 