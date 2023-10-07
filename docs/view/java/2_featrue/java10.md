---

---
# Java10新特性
[[toc]]

## 基于时间的版本控制（JEP 322）
随着基于时间的发布周期的采用，Oracle改变了javase平台和JDK的版本字符串方案，以及相关的版本控制信息，用于当前和未来基于时间的发布模型。

`$FEATURE.$INTERIM.$UPDATE.$PATCH`

`$FEATURE:counter`将每6个月递增一次，并且将基于功能发布版本，例如：JDK 10、JDK 11。

`$INTERIM: counter` 对于包含兼容的错误修复和增强但没有不兼容更改的非功能版本，计数器将增加。通常，这将是零，因为六个月内不会有临时发布。这是为了将来对发布模型进行修订而保留的。

`$UPDATE:counter`对于修复新特性中的安全问题、退化和bug的兼容更新版本将增加。此功能发布后一个月更新，以后每3个月更新一次。2018年4月的版本是JDK10.0.1，7月的版本是JDK10.0.2，以此类推

`$PATCH:counter`将在紧急版本中增加，以修复关键问题。

## 局部变量类型推断（JEP 286）
局部变量类型推断是Java10中为开发人员提供的最大的新特性。它将类型推断添加到带有初始值设定项的局部变量声明中。局部类型推断只能在以下情况下使用：
* 仅限于具有初始值设定项的局部变量
* 增强for循环的索引
* 在for循环中声明的本地

```java

var numbers = List.of("1","2","3","4","5");// inferred value ArrayList<String>`

// Index of Enhanced For Loop

for(var number : numbers) {
    System.out.println(number);
}

// Local variable declared in a loop

for(var i =0; i < numbers.size(); i++) {
    System.out.println(numbers.get(i));
}

```

## 实验性基于Java的JIT编译器（JEP 317）
这个特性使基于Java的JIT编译器Graal能够在Linux/x64平台上作为一个实验性的JIT编译器使用。到目前为止，这是Java10特性列表中最具未来感的内容

> Graal是在java9中引入的。它是我们已经习惯的JIT编译器的替代品。它是JVM的一个插件，这意味着JIT编译器没有绑定到JVM，它可以动态地插入JVMCI兼容的任何其他插件（Java级JVM编译器接口）。它还带来了java世界中的提前编译（AOT）。它还支持多语言翻译。

“一个用Java编写的基于Java的实时编译器，用于将Java字节码转换为机器码。”这让人困惑吗？如果JVM是用Java编写的，那么您不需要JVM来运行JVM吗？JVM可以通过AOT编译，然后JIT编译器可以在jvmit中使用，通过实时代码优化来提高性能。

Graal是用Java从头开始的对JIT编译器的完全重写。以前的JIT编译器是用c++编写的。它被认为是任何编程语言进化的最后阶段。

可以使用以下jvm参数切换到Graal：`-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler`

## 应用程序级数据共享（JEP 310）
此功能有助于改善启动占用空间，扩展现有的类数据共享（“CDS”）功能，以允许将应用程序类放置在共享存档中。
>JVM在启动时执行一些初步步骤，其中一个步骤是在内存中加载类。如果有几个jar有多个类，那么第一个请求中的延迟就很明显了。这成为无服务器体系结构的一个问题，其中引导时间至关重要。为了缩短应用程序启动时间，可以使用应用程序类数据共享。其思想是通过在不同的Java进程之间共享公共类元数据来减少占用空间。可通过以下3个步骤实现：

确定要存档的类：使用java启动器创建要存档的文件列表，这可以通过以下参数实现：
`$java -Xshare:off -XX:+UseAppCDS -XX:DumpLoadedClassList=hello.lst -cp hello.jar HelloWorld`

创建AppCDS存档：使用java launcher创建要用于应用程序cd的文件列表的存档，这可以通过以下参数实现：
`$java -Xshare:dump -XX:+UseAppCDS -XX:SharedClassListFile=hello.lst -XX:SharedArchiveFile=hello.jsa -cp hello.jar`

使用AppCDS存档：使用带有以下参数的Java启动器来使用应用程序cd。
`$java -Xshare:on -XX:+UseAppCDS -XX:SharedArchiveFile=hello.jsa -cp hello.jar HelloWorld`

## G1并行Full GC（JEP 307）
G1垃圾收集器在jdk9中是默认的。G1垃圾收集器避免了任何完全的垃圾收集，但是当用于收集的并发线程不能足够快地恢复内存时，用户的体验就会受到影响。

此更改通过使完全GC并行来改善G1最坏情况下的延迟。G1收集器的mark-sweep compact算法作为此更改的一部分被并行化，当用于收集的并发线程不能足够快地恢复内存时，它将被触发。

## 垃圾收集器接口（JEP 304）
这个JEP是未来的变化。它通过引入一个通用的垃圾收集器接口来改进不同垃圾收集器的代码隔离。

此更改为内部GC代码提供了更好的模块化。它将有助于将来添加新的GC而不改变现有的代码基，也有助于删除或管理以前的GC。

## 附加Unicode语言标记扩展（JEP 314）

此功能增强了java.util.Locale语言环境以及相关的API来实现BCP 47语言标记的额外Unicode扩展。从JavaSE9开始，支持的BCP47U语言标记扩展是“ca”和“nu”。此JEP将添加对以下附加扩展的支持：

cu（货币类型）
fw（每周第一天）
rg（区域覆盖）
tz（时区）
为了支持这些附加扩展，对各种api进行了更改，以提供基于U或附加扩展的信息。

## 根证书（JEP 319）
为了推广OpenJDK并使其对社区用户更具吸引力，此功能在JDK中提供了一组默认的根证书颁发机构（CA）证书。这也意味着Oracle和openjdk二进制文件在功能上是相同的。

关键的安全组件（如TLS）将在OpenJDK构建中默认工作。

## Thread-Local 线程本地握手（JEP 312）
这是一个用于提高性能的内部JVM特性。

握手操作是在每个JavaThread处于safepoint状态时对其执行的回调。回调要么由线程本身执行，要么由VM线程执行，同时保持线程处于阻塞状态。

此功能提供了一种在线程上执行回调而不执行全局VM safepoint的方法。使停止单个线程，而不仅仅是停止所有线程或不停止任何线程既可能又便宜。

## 替代内存设备上的堆分配（JEP 316）
应用程序已经变得内存匮乏，云本地应用程序、内存数据库、流式应用程序都在增加。为了满足这些服务，有各种可用的内存体系结构。此功能增强了HotSpot VM在用户指定的备用内存设备（如NV-DIMM）上分配Java对象堆的能力。

此JEP针对具有与DRAM相同的语义（包括原子操作的语义）的替代内存设备，因此，可以在不更改现有应用程序代码的情况下代替DRAM用于对象堆。

## 删除Native-Header生成工具Javah（Jep313）
这是一个从JDK中删除javah工具的内务管理更改。javac中添加的工具功能是jdk8的一部分，它提供了在编译时编写Native-Header文件的能力，从而使javah变得无用。

## 将JDK林整合到单个存储库中（JEP 296）
多年来，在JDK代码库中有各种Mercurial存储库。不同的存储库确实提供了一些优势，但它们也有不同的操作缺点。作为此更改的一部分，JDK的许多存储库被合并到一个存储库中，以简化开发。

## API更改
Java10已经添加和删除了API（是的，它不是一个拼写错误）。

Java9引入了增强的弃用，其中某些API被标记为在将来的版本中删除。

添加了API:Java10中添加了73个新API。


