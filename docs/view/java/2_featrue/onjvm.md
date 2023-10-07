# JDK9 中JVM调优新特性
[[toc]]

## 提高 G1 可用性、确定性和性能
增强垃圾优先 (G1) 垃圾收集器以自动确定几个重要的内存回收设置。以前必须手动设置这些设置以获得最佳结果。此外，修复了 G1 垃圾收集器的可用性、确定性和性能问题。

## JEP 158：统一 JVM 日志记录
为 JVM 的所有组件引入了一个通用的日志记录系统。

## JEP 214：删除 JDK 8 中已弃用的 GC 组合
删除 JDK 8 中已弃用的垃圾收集器 (GC) 组合。
这意味着以下 GC 组合不再存在：
DefNew + CMS
ParNew + SerialOld
增量CMS

并发标记扫描 (CMS) 的“前台”模式也已被删除。以下命令行标志已被删除
-Xincgc
-XX:+CMSIncrementalMode
-XX:+UseCMSCompactAtFullCollection
-XX:+CMSFullGCsBeforeCompaction
-XX:+UseCMSCollectionPassing
命令行标志-XX:+UseParNewGC不再有效。ParNew 只能与 CMS 一起使用，而 CMS 需要 ParNew。因此，该-XX:+UseParNewGC标志已被弃用，并且可能会在未来的版本中被删除。

## JEP 248：使 G1 成为默认垃圾收集器
使垃圾优先 (G1) 成为 32 位和 64 位服务器配置上的默认垃圾收集器 (GC)。
对于大多数用户来说，使用低暂停收集器（例如 G1）比以前默认的面向吞吐量的收集器（例如 Parallel GC）提供更好的整体体验。

## JEP 271：统一 GC 日志记录
使用JEP 158中引入的统一 JVM 日志记录框架重新实现垃圾收集 (GC) 日志记录。GC 日志以与当前 GC 日志格式一致的方式重新实现；但是，新旧格式之间存在一些差异。

## JEP 291：弃用并发标记扫描 (CMS) 垃圾收集器
弃用并发标记扫描 (CMS) 垃圾收集器。-XX:+UseConcMarkSweepGC使用该选项在命令行上请求时会发出警告消息。Garbage-First (G1) 垃圾收集器旨在替代 CMS 的大多数用途。
