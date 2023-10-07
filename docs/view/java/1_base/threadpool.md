# 线程池
[[toc]]

## 一、写在前面
听到线程池、线程，不禁都为为之端正姿势

## 二、部分基础
### 1、两种线程模型
用户级线程（ULT）：用户程序实现，不依赖操作系统核心，应用提供创建、同步、调度和管理新城的函数来控制用户线程。不需要用户态/内核态之间的切换，速度快，内核对ULT无感知。
内核线程（KLT）：系统内核管理线程，内核保存线程的状态和上下文，线程阻塞不会引起进程阻塞，在多处理器系统上，多线程在处理器上并行运行，线程创建、调度和管理由内核完成，效率要比ULT慢，比进程操作快。
直观感受下内核线程：如果创建的是内核线程，那么这个数字会增多。

![](./img/threadpool/2022-07-11-20-47-19.png)

Java线程创建是依赖于系统内核，通过JVM调用系统库创建内核线程，内核线程与Java-Thread是1:1关系

### 2、使用线程池的原因
线程创建太麻烦，Java是依赖于内核线程，创建和销毁需要保存线程的状态和切换上下文，是一个小消耗资源的操作。为了避免资源消耗过度需要设法重用线程的执行多任务。线程池就是一个线程缓存，负责对线程进行统一分配、调优与监控。

### 3、什么时候使用线程池
单个任务处理时间比较快
需要处理的任务数量比较大

### 4、线程池的优势
重用存在的线程，减少创建线程、消亡的开销，提升性能
提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行
提高线程管理型，可以统一分配、调优和监控

### 5、包关系
所有的线程都是继承自Executor，Executor是一个超类

ThreadPoolExecutor：比较常用

FrokJoinPool：幂级类

ScheduledTreadPoolExecutor：延时类

ThreadPoolTaskExecutor

ThreadPoolTaskScheduler

### 6、线程池的几个参数
corePoolSize：核心线程池大小
maximumPoolSize：最多能创建多少个线程
keepAliveTime：如果没有工作，最长可以空闲多长时间
unit：时间单位
workQueue：都在工作状态，都阻塞，提供的阻塞队列，处理不过来，就放在阻塞队列。在任意时刻，不管并发多高，永远只有一个线程能够进队或出队，线程是安全的。
handler：阻塞队列已满，且线程数达到最大，所采用的饱和策略

### 7、线程池的工作原理
用工作原理说线程池的几个参数
先上图镇楼

![](./img/threadpool/2022-07-11-20-47-55.png)

来了通过execute提交过来任务先进入corePool
当corePoll满了进入阻塞队列
当队列满了使用MaximumPoolSize的数量开启线程
当线程超过了MaximumPoolSize的数量，走饱和策略（拒绝策略）
### 8、线程池常用的阻塞队列及选择
#### 1.无界队列
队列大小无限制，常用的无界队列LinkdeBlackQueue，使用该队列作为阻塞队列时要尤其小心，当任务耗时较长时，可能会导致大量的新任务在队列中堆积最终导致OOM 1 。Executors.newFixedThreadPool()采用的就是LinkedBlockingQueue

#### 2.有界队列
常用的有两类

遵循FIFO2 原则的队列，例如：ArrayBlockingQueue
优先级队列，例如：PriorityBlockingQueue
使用有界队列时队列大小和线程池大小相互配合，线程池较小有界队列较大时可减少内存消耗，降低CPU的使用率和上下文切换，但有可能会限制系统吞吐量。

#### 3.同步移交队列
如果不希望任务在队列中等待而是希望将任务直接移交工作线程，可以使用SynchronousQueue作为等待队列SyncronousQueue不是一个真正的队列，而是一种线程之间移交的机制。只有在使用无界线程或有饱和策略时才建议使用该队列

### 9、饱和策略的选择
Java提供四种，最后一个是Tomcat的

![](./img/threadpool/2022-07-11-20-48-22.png)

#### 1.默认AbortPolicy
终止策略：使用该策略在饱和时会抛出RejectedExectionExcetion（继承自RuntimeException），调用者可以捕捉该异常自行处理

#### 2.DiscardPoicy
抛弃策略：不做任何处理，相当于直接抛弃任务，看下源码直接就是{}什么都没有做
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
}
```
#### 3.DiscardOldestPolicy
抛弃旧任务策略：先将阻塞队列中的头元素出队抛弃，再尝试提交任务。如果此时阻塞队列使用PriorityBlockQueue优先队列，将会导致优先级最高的任务被抛弃，因此不建议将该种策略配合优先级队列使用。
看一下源码
```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        e.getQueue().poll();
        e.execute(r);
    }
}
```
#### 4.CallerRunsPolicy
调用者运行：既不抛弃任务也不抛弃异常，直接运行任务的run方法，换言之将任务回退给调用者直接运行。使用该策略时线程池饱和后将由调用线程池的主线程自己来执行任务，因此在执行任务的这段时间里主线程无法再提价新任务，从而使线程池中工作线程有时间将正在处理的任务处理完成。
看下源码：

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        r.run();
    }
}
```

### 10、生命周期

![](./img/threadpool/2022-07-11-20-48-45.png)


## 三、应用
### 1、创建线程池
本实例是开启5个线程，队列大小设置1000，饱和策略是调用者运行；

```java
ExecutorService pool = new ThreadPoolExecutor(5, 5, 60L, TimeUnit.SECONDS, 
            new LinkedBlockingQueue<>(1000),
            new ThreadPoolExecutor.CallerRunsPolicy());
```
### 2、使用
```java
for(TempStoreInfo item : monoList){
    Runnable runnable = () -> {
        ...
    };
    pool.execute(runnable);
}
```

### 3、停止
常用关闭线程

```java
try {
    pool.shutdown();
    if (!pool.awaitTermination( 1 * 60 * 1000, TimeUnit.MILLISECONDS)) { //设置超时
        // 超时的时候向线程池中所有的线程发出中断(interrupted)。
        log.error("超时了。。。。中断所有子进程，停止所有任务");
        pool.shutdownNow();
    }
} catch (InterruptedException e) {
    // awaitTermination方法被中断的时候也中止线程池中全部的线程的执行。
    pool.shutdownNow();
}
```
>
> OOM：Out Of Memory，在学习JVM虚拟机时有过这个概念.
> 元空间溢出是Out of Memory Error Metaspace，java8后方法区由本地内存管理内地化一份元空间。用作存储类信息（类名、父类、成员变量、方法等）、运行时常量池、类加载器、静态变量。
> 堆内存溢出是Out of Memory heap，存储对象、数组。
> 他们都是OOM ↩︎
>
> FIFO：先进先出队列
