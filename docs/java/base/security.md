# 系统安全管理器 System.getSecurityManager()

## 简介
`SecurityManager sm = System.getSecurityManager();`
在阅读SpringBoot源码时看到这么一句话，一直不理解他的意思，今天解决它。
这个方法获取系统安全接口
源码对其注释描述
```java
/**
    * Gets the system security interface.
    * 获取系统安全接口
    * @return  if a security manager has already been established for the
    *          current application, then that security manager is returned;
    *          otherwise, <code>null</code> is returned.
              如果已经为当前应用程序建立了安全管理器，则返回该安全管理器； 
              否则，返回null 。
    * @see     #setSecurityManager
    */
public static SecurityManager getSecurityManager() {
    return security;
}
```
安全管理器是一个允许应用程序实现安全策略的类。 它允许应用程序在执行可能不安全或敏感的操作之前确定该操作是什么以及是否在允许执行该操作的安全上下文中尝试该操作。 应用程序可以允许或禁止该操作。
SecurityManager类包含许多名称以单词check开头的方法。 在这些方法执行某些潜在敏感操作之前，这些方法由 Java 库中的各种方法调用。
这种check方法的调用通常如下所示：
```java
SecurityManager security = System.getSecurityManager();
if (security != null) {
    security.checkXXX(argument,  . . . );
}
```
因此，安全管理器有机会通过抛出异常来阻止操作完成。 如果操作被允许，安全管理器例程会简单地返回，但如果操作不被允许，则抛出SecurityException 。 
此约定的唯一例外是checkTopLevelWindow ，它返回一个boolean值。
当前安全管理器由System类中的setSecurityManager方法设置。 当前的安全管理器通过getSecurityManager方法获取。
特殊方法checkPermission(Permission)确定是否应授予或拒绝由指定权限指示的访问请求。
默认实现调用
```java
AccessController.checkPermission(perm);
```
如果请求的访问被允许， checkPermission会安静地返回。 如果被拒绝，则会引发SecurityException 。
从 Java 2 SDK v1.2 开始， SecurityManager中其他每个check方法的默认实现是调用SecurityManager的checkPermission方法来确定调用线程是否有权执行请求的操作。
请注意，只有一个权限参数的checkPermission方法总是在当前执行线程的上下文中执行安全检查。
有时，应该在给定上下文中进行的安全检查实际上需要在不同的上下文中进行（例如，从工作线程中）。为这种情况提供了getSecurityContext方法和包含上下文参数的checkPermission方法。getSecurityContext方法返回当前调用上下文的“快照”。 （默认实现返回一个 AccessControlContext 对象。）
```jvava
Object context = null;
SecurityManager sm = System.getSecurityManager();
if (sm != null) context = sm.getSecurityContext();
```
checkPermission方法除了权限外还接受上下文对象，根据该上下文而不是当前执行线程的上下文做出访问决策。
因此，不同上下文中的代码可以调用该方法，传递权限和先前保存的上下文对象。
使用如上例中获得的 SecurityManager sm的示例调用如下：
```java
if (sm != null) sm.checkPermission(permission, context);
```
权限分为以下类别：文件、套接字、网络、安全性、运行时、属性、AWT、反映和可序列化。
管理这些不同权限类别的类是java.io.FilePermission 、 java.net.SocketPermission 、 java.net.NetPermission 、 java.security.SecurityPermission 、 
java.lang.RuntimePermission 、 java.util.PropertyPermission 、 java.awt.AWTPermission 、 java.lang.reflect.ReflectPermission和java.io.SerializablePermission 。
除了前两个（FilePermission 和 SocketPermission）之外的所有都是java.security.BasicPermission的子类，它本身是顶级权限类java.security.Permission的抽象子类。 BasicPermission 定义了包含遵循分层属性命名约定的名称的所有权限所需的功能（例如，“exitVM”、“setFactory”、“queuePrintJob”等）。 星号可能出现在名称的末尾，跟在“.”之后，或者单独出现，表示通配符匹配。 例如：“a.*”或“*”有效，“*a”或“a*b”无效。
FilePermission 和 SocketPermission 是顶级权限类 ( java.security.Permission ) 的子类。 与 BasicPermission 子类直接从 Permission 而不是从 BasicPermission 中使用的类相比，此类具有更复杂的名称语法。 例如，对于java.io.FilePermission对象，权限名称是文件（或目录）的路径名。
一些权限类有一个“动作”列表，它告诉对象允许的动作。 例如，对于java.io.FilePermission对象，操作列表（例如“读、写”）指定为指定文件（或指定目录中的文件）授予哪些操作。
其他权限类用于“命名”权限 - 包含名称但没有操作列表的权限； 您要么拥有命名权限，要么没有。
注意：还有一个java.security.AllPermission权限意味着所有权限。 它的存在是为了简化可能需要执行需要全部（或大量）权限的多项任务的系统管理员的工作。
有关权限相关信息，请参阅 JDK中的权限。 例如，该文档包括一个表格，其中列出了各种 SecurityManager check方法以及每个此类方法的默认实现所需的权限。 它还包含所有需要权限的 1.2 版方法的表格，并为每个此类方法说明它需要哪些权限。
也可以看看：
ClassLoader ， SecurityException ， checkTopLevelWindow ， getSecurityManager ， setSecurityManager ， AccessController ， AccessControlContext ， AccessControlException ， Permission ， BasicPermission ， FilePermission ， SocketPermission ， PropertyPermission ， RuntimePermission ， AWTPermission ， Policy ， SecurityPermission ， ProtectionDomain

