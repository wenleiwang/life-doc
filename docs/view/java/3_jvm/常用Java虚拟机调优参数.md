# 常用Java虚拟机调优参数


|JVM参数 | 解释|
|--|--|
|-Xmx2g	| 设置 JVM 的最大堆内存为 2GB。这是 Java 堆可使用的最大内存量。|
|-Xms2g	| 设置 JVM 的初始堆内存为 2GB。这是 Java 堆的初始内存大小，在 JVM 启动时将分配给堆。|
|-Xmn768m	| 设置 JVM 的年轻代初始大小为 768MB。年轻代是 Java 堆中用于存放新创建的对象的区域。|
|-XX:MetaspaceSize=256m	| 设置 Metaspace（元空间）的初始大小为 256MB。Metaspace 用于存放类的元数据。|
|-XX:MaxMetaspaceSize=256m	| 设置 Metaspace（元空间）的最大大小为 256MB。当 Metaspace 达到这个大小时，JVM 将触发垃圾回收来回收不再使用的类元数据。|
|-Xss256k	| 设置每个线程的栈大小为 256KB。这决定了每个线程可使用的内存大小。|
|-XX:+UseG1GC |	指定使用 G1 (Garbage-First) 垃圾回收器。G1 是一种现代的垃圾回收器，适用于大内存和多核处理器的应用。|
|-XX:+AlwaysPreTouch |	指定在 JVM 启动时，将堆的所有页面都预先分配和填充，以避免后续使用时的延迟。|
|-XX:-ResizePLAB |	禁用自适应的 Parallel Lab（PLAB）大小调整。PLAB 是 G1 回收器中用于优化对象分配的一种技术。|
|-XX:+ParallelRefProcEnabled|	启用并行的引用处理。这允许 G1 回收器在处理引用时使用并行处理。|
|-XX:+ExplicitGCInvokesConcurrent|	允许显式调用 System.gc() 时与并发标记周期并行执行垃圾回收。|
|-XX:MaxGCPauseMillis=200 |	设置期望的最大 GC 暂停时间为 200 毫秒。G1 回收器将尽力保持 GC 暂停时间在这个范围内。|
|-XX:ParallelGCThreads=4 |	设置并行垃圾回收的线程数为 4。这决定了在进行并行垃圾回收时使用的线程数量。|
|-XX:ConcGCThreads=2 |	设置并发垃圾回收的线程数为 2。这决定了在进行并发垃圾回收时使用的线程数量。|

