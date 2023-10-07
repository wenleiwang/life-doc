# ServletConfig与ServletContext
[[toc]]

## ServletConfig接口
作用：servlet 容器用于在初始化期间将信息传递给 servlet 的 servlet 配置对象。
```java
public interface ServletConfig {

    /**
     * 返回此 servlet 实例的名称
     */
    public String getServletName();

    /**
     * 返回对调用者正在其中执行的ServletContext的引用。
     */
    public ServletContext getServletContext();

    /**
     * 返回一个包含命名初始化参数值的String ，如果参数不存在，则返回null 。
     */
    public String getInitParameter(String name);

    /**
     * 将 servlet 的初始化参数的名称作为String对象的Enumeration返回，如果 servlet 没有初始化参数，则返回一个空的Enumeration 。
     */
    public Enumeration<String> getInitParameterNames();
}
```

## ServletContext接口
作用：是Servlet运行环境上下文。定义一组 servlet 用来与其 servlet 容器通信的方法，例如，获取文件的 MIME 类型、分派请求或写入日志文件。

每个 Java 虚拟机的每个“Web 应用程序”都有一个上下文。 （“Web 应用程序”是安装在服务器 URL 命名空间的特定子集（例如/catalog ）下的 servlet 和内容的集合，并且可能通过.war文件安装。）
对于在其部署描述符中标记为“分布式”的 Web 应用程序，每个虚拟机将有一个上下文实例。在这种情况下，上下文不能用作共享全局信息的位置（因为信息不会是真正的全局信息）。请改用数据库等外部资源

```java
package javax.servlet;

import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Enumeration;
import java.util.EventListener;
import java.util.Map;
import java.util.Set;

import javax.servlet.descriptor.JspConfigDescriptor;

public interface ServletContext {

    public static final String TEMPDIR = "javax.servlet.context.tempdir";

    /**
     * @since Servlet 3.0
     */
    public static final String ORDERED_LIBS = "javax.servlet.context.orderedLibs";

    /**
     * 返回与此上下文关联的主路径
     * @since Servlet 2.5
     */
    public String getContextPath();

    /**
     * 获取对应于服务器上指定 URL路径 的ServletContext对象。
     */
    public ServletContext getContext(String uripath);

    /**
     * 此 servlet 容器支持的 Java Servlet API 的主要版本。我这版本必须返回4
     */
    public int getMajorVersion();

    /**
     * 返回此 servlet 容器支持的 Servlet API 的次要版本。我这版本必须返回0
     * @return 0
     */
    public int getMinorVersion();

    /**
     * @return TODO
     */
    public int getEffectiveMajorVersion();

    /**
     * @return TODO
     */
    public int getEffectiveMinorVersion();

    /**
     * 返回指定文件的 MIME 类型，如果 MIME 类型未知，则返回null 。
     */
    public String getMimeType(String file);

    /**
     * 返回 Web 应用程序中所有资源路径的类目录列表，其中最长的子路径与提供的路径参数匹配。
     * @since Servlet 2.3
     */
    public Set<String> getResourcePaths(String path);

    /**
     * 返回映射到指定路径的资源的 URL。路径必须以“/”开头，并被解释为相对于当前上下文根。
     */
    public URL getResource(String path) throws MalformedURLException;

    /**
     * 将位于命名路径的资源作为InputStream对象返回
     */
    public InputStream getResourceAsStream(String path);

    /**
     * 返回一个RequestDispatcher对象，该对象充当位于给定路径的资源的包装器。
     */
    public RequestDispatcher getRequestDispatcher(String path);

    /**
     * 返回一个RequestDispatcher对象，该对象充当命名 servlet 的包装器。
     */
    public RequestDispatcher getNamedDispatcher(String name);

    /**
     * 弃用的。此方法最初定义为从ServletContext检索 servlet。在此版本中，此方法始终返回null并且仅保留二进制兼容性。此方法将在 Java Servlet API 的未来版本中永久删除。
     */
    @Deprecated
    public Servlet getServlet(String name) throws ServletException;

    /**
     * 弃用的。此方法最初定义为返回此 servlet 上下文已知的所有 servlet 的Enumeration 。
     */
    @Deprecated
    public Enumeration<Servlet> getServlets();

    /**
     * 弃用的。此方法最初被定义为返回此上下文已知的所有 servlet 名称的Enumeration 。
     */
    @Deprecated
    public Enumeration<String> getServletNames();

    /**
     * 将指定的消息写入 servlet 日志文件，通常是事件日志。 servlet 日志文件的名称和类型特定于 servlet 容器。
     */
    public void log(String msg);

    /**
     * 已弃用。从 Java Servlet API 2.1 开始，请改用log
     */
    @Deprecated
    public void log(Exception exception, String msg);

    /**
     * 将给定Throwable异常的解释性消息和堆栈跟踪写入 servlet 日志文件。
     */
    public void log(String message, Throwable throwable);

    /**
     * 返回包含给定虚拟路径的真实路径的String 。
     * 例如，路径“/index.html”返回服务器文件系统上的绝对文件路径，将由对“http://host/contextPath/index.html”的请求提供服务，
     * 其中 contextPath 是此 ServletContext 的上下文路径.
     */
    public String getRealPath(String path);

    /**
     * 返回运行 servlet 的 servlet 容器的名称和版本。
     */
    public String getServerInfo();

    /**
     * 返回包含命名上下文范围初始化参数值的String ，如果参数不存在，则返回null 。
     */
    public String getInitParameter(String name);

    /**
     * 将上下文初始化参数的名称作为String对象的Enumeration返回，如果上下文没有初始化参数，则返回空Enumeration 。
     */
    public Enumeration<String> getInitParameterNames();

    /**
     * 将给定的初始化参数设置为给定的值。
     */
    public boolean setInitParameter(String name, String value);

    /**
     * 返回具有给定名称的 servlet 容器属性，如果没有该名称的属性，则返回null 。
     */
    public Object getAttribute(String name);

    /**
     * 返回一个Enumeration ，其中包含此 servlet 上下文中可用的属性名称。
     */
    public Enumeration<String> getAttributeNames();

    /**
     * 将对象绑定到此 servlet 上下文中的给定属性名称。如果指定的名称已用于某个属性，则此方法将用新属性替换该属性。
     * 如果在ServletContext上配置了侦听器，则容器会相应地通知它们。
     * 如果传递了空值，则效果与调用removeAttribute()相同。
     */
    public void setAttribute(String name, Object object);

    /**
     * 从 servlet 上下文中删除具有给定名称的属性。删除后，后续调用getAttribute以检索属性值将返回null 。
     */
    public void removeAttribute(String name);

    /**
     * 返回与此 ServletContext 对应的此 Web 应用程序的名称，该名称在此 Web 应用程序的部署描述符中由 display-name 元素指定。
     */
    public String getServletContextName();

    /**
     * 注册一个 servlet 实现以在此 ServletContext 中使用
     */
    public ServletRegistration.Dynamic addServlet(String servletName, String className);

    /**
     * 注册一个 servlet 实例以在此 ServletContext 中使用。
     */
    public ServletRegistration.Dynamic addServlet(String servletName, Servlet servlet);

    /**
     * 注册一个 servlet 实例以在此 ServletContext 中使用。
     */
    public ServletRegistration.Dynamic addServlet(String servletName,
            Class<? extends Servlet> servletClass);

    /**
     *
     * @param jspName   The servlet name under which this JSP file should be
     *                  registered
     * @param jspFile   The path, relative to the web application root, for the
     *                  JSP file to be used for this servlet
     *
     * @return  a {@link javax.servlet.ServletRegistration.Dynamic} object
     *          that can be used to further configure the servlet
     *
     * @since Servlet 4.0
     */
    public ServletRegistration.Dynamic addJspFile(String jspName, String jspFile);

    /**
     * TODO
     */
    public <T extends Servlet> T createServlet(Class<T> c)
            throws ServletException;

    /**
     * 获取命名 servlet 的详细信息
     */
    public ServletRegistration getServletRegistration(String servletName);

    /**
     * TODO
     */
    public Map<String, ? extends ServletRegistration> getServletRegistrations();

    /**
     * 将过滤器添加到上下文
     */
    public FilterRegistration.Dynamic addFilter(String filterName, String className);

    /**
     * 将过滤器添加到上下文
     */
    public FilterRegistration.Dynamic addFilter(String filterName, Filter filter);

    /**
     * 将过滤器添加到上下文
     */
    public FilterRegistration.Dynamic addFilter(String filterName,
            Class<? extends Filter> filterClass);

    /**
     * TODO
     */
    public <T extends Filter> T createFilter(Class<T> c) throws ServletException;

    /**
     * TODO
     */
    public FilterRegistration getFilterRegistration(String filterName);

    /**
     * @return TODO
     */
    public Map<String, ? extends FilterRegistration> getFilterRegistrations();

    /**
     * @return TODO
     */
    public SessionCookieConfig getSessionCookieConfig();

    /**
     * 配置此 Web 应用程序的可用会话跟踪模式
     */
    public void setSessionTrackingModes(
            Set<SessionTrackingMode> sessionTrackingModes);

    /**
     * 获取此 Web 应用程序的默认会话跟踪模式
     */
    public Set<SessionTrackingMode> getDefaultSessionTrackingModes();

    /**
     * 获取此 Web 应用程序当前启用的会话跟踪模式。
     */
    public Set<SessionTrackingMode> getEffectiveSessionTrackingModes();

    /**
     * TODO
     */
    public void addListener(String className);

    /**
     * TODO
     */
    public <T extends EventListener> void addListener(T t);

    /**
     * TODO
     */
    public void addListener(Class<? extends EventListener> listenerClass);

    /**
     * TODO
     */
    public <T extends EventListener> T createListener(Class<T> c)
            throws ServletException;

    /**
     * @return TODO
     */
    public JspConfigDescriptor getJspConfigDescriptor();

    /**
     * 获取与此 ServletContext 关联的 Web 应用程序类加载器。
     */
    public ClassLoader getClassLoader();

    /**
     * 添加到此 ServletContext 的声明角色
     */
    public void declareRoles(String... roleNames);

    /**
     * 获取部署此上下文的虚拟主机的主名称。该名称可能是也可能不是有效的主机名
     *
     * @return The primary name of the virtual host on which this context is
     *         deployed
     * @since Servlet 3.1
     */
    public String getVirtualServerName();

    /**
     * 获取默认会话超时。
     */
    public int getSessionTimeout();

    /**
     * 设置默认会话超时。此方法只能在 ServletContext 初始化之前调用。
     */
    public void setSessionTimeout(int sessionTimeout);

    /**
     * 获取读取请求正文的默认字符编码。
     */
    public String getRequestCharacterEncoding();

    /**
     * 设置用于读取请求正文的默认字符编码。调用此方法将覆盖部署描述符中设置的任何值。
     */
    public void setRequestCharacterEncoding(String encoding);

    /**
     * 获取用于编写响应正文的默认字符编码。
     */
    public String getResponseCharacterEncoding();

    /**
     * 设置用于编写响应正文的默认字符编码。调用此方法将覆盖部署描述符中设置的任何值。
     */
    public void setResponseCharacterEncoding(String encoding);
}

```
