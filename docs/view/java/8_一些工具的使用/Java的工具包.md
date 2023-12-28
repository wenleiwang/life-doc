# Java的工具包

## Javah
`javah` 是一个命令行工具，旨在为开发人员提供一种将 Java 类转换为 C/C++ 头文件的方式。它最初作为 Java SE 开发套件的一部分于 JDK 1.0 版本中引入，旨在支持 Java 和本地代码的混合编程。
`javah` 用于生成包含 JNI（Java Native Interface）函数原型的头文件，以便在使用 JNI 连接 Java 和本地代码时进行编译和链接。
### 语法格式
`javah` 命令的基本语法格式如下：

```shell
javah [options] <classes>
```

其中，`options` 是可选参数，`classes` 是要生成头文件的完全限定类名。

将 `javah` 命令支持的所有可选参数汇总如下表：

| 参数                  | 作用                              | 
|:--------------------- |:--------------------------------- |
| `-o <file>`             | 输出文件 (只能使用 -d 或 -o 之一) |
| `-v`或`-verbose`          | 启用详细输出                      |
| `-h`或`--help` 或 -?      | 输出此消息                        |
| `-version`            | 输出版本信息                      |
|   `-jni`                | 生成 JNI 样式的标头文件 (默认值)  |
| `-force`                | 始终写入输出文件                  |
|`-classpath`             | `<path>`	从中加载类的路径           |
| `-cp <path>`            | 从中加载类的路径                  |
| `-bootclasspath <path>` | 从中加载引导类的路径              |

#### 可选参数：`-classpath < path>`
`javah -classpath <path> classes` 命令的作用是设置要在查找类文件时使用的路径。

其中，`<path>` 是指定要使用的类文件路径，可以是一个目录或包含多个目录路径的冒号分隔列表。classes 是要生成头文件的完全限定类名。

> `javah -classpath <path>` 的path不带引号或双引号

####  可选参数：`javah -jni` 
`javah -jni` 命令的作用是生成用于 JNI（Java Native Interface）的头文件。这意味着生成的头文件会符合 JNI 的函数命名规则，以便与 Java 代码进行交互。

> 区分开项目根路径和类的包路径+类名，另外生成位置是看你在哪里执行，若是你在d盘执行，就会把.h文件生成在d盘下

#### 演示如何使用该命令及其作用
现在有一个 `learn.note.jni.JNIUse1` 的 Java 类，并且该类所在的类文件位于 `D:\life\life-learn\src\main\java\learn\note\jni` 目录下，则可以执行以下命令：
`javah -classpath D:\life\life-learn\src\main\java\ -jni learn.note.jni.JNIUse1`

执行命令后，javah 将根据 -classpath 参数指定的路径在其中查找类文件，并为 `learn.note.jni.JNIUse1` 生成相应的 C/C++ 头文件。生成的头文件可以用于编写本地代码，实现与 Java 类的交互。

