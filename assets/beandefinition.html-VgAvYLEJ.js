import{_ as e,r as t,o as i,c,b as n,e as l,w as o,d as s,a as p}from"./app-7rGY8hGP.js";const u="/life-doc/assets/6257b2e15f51f3720e11a704271810df-Lesfp_y1.png",d="/life-doc/assets/9b406395053ee4e3c16020c539d54138-N5AsWqWy.png",m={},v=n("h1",{id:"beandefinition源码阅读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#beandefinition源码阅读","aria-hidden":"true"},"#"),s(" BeanDefinition源码阅读")],-1),r={class:"table-of-contents"},k=p('<p>Bean的定义</p><h2 id="beandefinition接口" tabindex="-1"><a class="header-anchor" href="#beandefinition接口" aria-hidden="true">#</a> BeanDefinition接口</h2><p>作用：BeanDefinition 描述了一个 bean 实例，它具有属性值、构造函数参数值以及具体实现提供的更多信息。</p><p>这只是一个最小的接口：主要目的是允许BeanFactoryPostProcessor内省和修改属性值和其他 bean 元数据。</p><p><img src="'+u+'" alt=""></p><p>继承了2个接口AttributeAccessor、BeanMetadataElement。就具扩展了Attribute（属性）处理和获取Bean元数据的功能</p><p>AttributeAccessor：属性访问器，有getAttribute()、setAttribute()、removeAttribute()、hasAttribute()、attributeNames()方法</p><p>BeanMetadataElement：Bean 元数据元素，有getSource()方法。由承载配置源对象的 bean 元数据元素实现的接口。</p><p>看下方法汇总</p><p><img src="'+d+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeanMetadataElement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">MutablePropertyValues</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">AttributeAccessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">ResolvableType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">AttributeAccessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 标准单例范围的范围标识符：“单例”  singleton
	 */</span>
	<span class="token class-name">String</span> <span class="token constant">SCOPE_SINGLETON</span> <span class="token operator">=</span> <span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span><span class="token constant">SCOPE_SINGLETON</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 标准原型范围的范围标识符：“原型” prototype
	 */</span>
	<span class="token class-name">String</span> <span class="token constant">SCOPE_PROTOTYPE</span> <span class="token operator">=</span> <span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span><span class="token constant">SCOPE_PROTOTYPE</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指示BeanDefinition是应用程序主要部分的角色提示。通常对应于用户定义的 bean
	 */</span>
	<span class="token keyword">int</span> <span class="token constant">ROLE_APPLICATION</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 角色提示表明BeanDefinition是一些较大配置的支持部分，
     * 通常是外部org.springframework.beans.factory.parsing.ComponentDefinition 
     * SUPPORT bean 被认为足够重要，
     * 以便在更仔细地查看特定org.springframework.beans.factory.parsing.ComponentDefinition时意识到这一点，
     * 但在查看应用程序的整体配置时则不然。
	 */</span>
	<span class="token keyword">int</span> <span class="token constant">ROLE_SUPPORT</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指示BeanDefinition提供完全后台角色且与最终用户无关的角色提示。
     * 当注册完全属于org.springframework.beans.factory.parsing.ComponentDefinition内部工作的 bean 时，会使用此提示
	 */</span>
	<span class="token keyword">int</span> <span class="token constant">ROLE_INFRASTRUCTURE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>


	<span class="token comment">// Modifiable attributes</span>

	<span class="token doc-comment comment">/**
	 * 设置此 bean 定义的父定义的名称（如果有）
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setParentName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> parentName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 定义的父定义的名称（如果有）。
	 */</span>
	<span class="token class-name">String</span> <span class="token function">getParentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定此 bean 定义的 bean 类名。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setBeanClassName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> beanClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 定义的当前 bean 类名。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getBeanClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 覆盖此 bean 的目标范围，指定一个新的范围名称
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setScope</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> scope<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 的当前目标范围的名称，如果尚不知道，则返回null 。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置这个 bean 是否应该被延迟初始化。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setLazyInit</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> lazyInit<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 是否应该延迟初始化，即在启动时不急切地实例化。仅适用于单例 bean。
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isLazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此 bean 初始化所依赖的 bean 的名称。 bean 工厂将保证这些 bean 首先被初始化。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDependsOn</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> dependsOn<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 所依赖的 bean 名称。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDependsOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此 bean 是否是自动装配到其他 bean 的候选对象。
     * 请注意，此标志旨在仅影响基于类型的自动装配。它不会影响按名称的显式引用，
     * 即使指定的 bean 未标记为自动装配候选者，也会得到解决。
     * 因此，如果名称匹配，按名称自动装配仍然会注入一个 bean。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setAutowireCandidate</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> autowireCandidate<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 是否是自动装配到其他 bean 的候选对象。
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAutowireCandidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此 bean 是否是主要的自动装配候选者。
     * 如果该值对于多个匹配候选者中的一个 bean 为true ，
     * 则它将作为主要的自动装配候选者。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setPrimary</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 是否是主要的自动装配候选者。
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrimary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定要使用的工厂 bean（如果有）。这是要调用指定工厂方法的 bean 的名称。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryBeanName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回工厂 bean 名称（如果有）
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryBeanName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定工厂方法（如果有）。将使用构造函数参数调用此方法，如果未指定参数，则不使用任何参数。
     * 该方法将在指定的工厂 bean 上调用，如果有的话，或者作为本地 bean 类的静态方法。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回一个工厂方法，如果有的话。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 的构造函数参数值。返回的实例可以在 bean 工厂后处理期间进行修改。
	 */</span>
	<span class="token class-name">ConstructorArgumentValues</span> <span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 如果有为此 bean 定义的构造函数参数值，则返回。
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 返回要应用于 bean 的新实例的属性值。
	 * 返回的实例可以在 bean 工厂后处理期间进行修改。
	 */</span>
	<span class="token class-name">MutablePropertyValues</span> <span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 如果有为此 bean 定义的属性值，则返回。
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 设置初始化方法的名称。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setInitMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> initMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回初始化方法的名称。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getInitMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置销毁方法的名称。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDestroyMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> destroyMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回销毁方法的名称。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDestroyMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 为此BeanDefinition设置角色提示。
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setRole</span><span class="token punctuation">(</span><span class="token keyword">int</span> role<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 获取此BeanDefinition的角色提示。
     * 角色提示为框架和工具提供了特定BeanDefinition的角色和重要性的指示。
	 */</span>
	<span class="token keyword">int</span> <span class="token function">getRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此 bean 定义的描述
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 定义的描述。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// Read-only attributes</span>

	<span class="token doc-comment comment">/**
	 * 根据 bean 类或其他特定元数据，返回此 bean 定义的可解析类型。
	 */</span>
	<span class="token class-name">ResolvableType</span> <span class="token function">getResolvableType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回这是否是Singleton ，在所有调用中都返回一个共享实例。
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回这是否是Prototype ，每次调用都返回一个独立的实例。
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 是否是“抽象的”，即不打算实例化
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此 bean 定义来自的资源的描述（为了在出现错误时显示上下文）。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getResourceDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回原始 BeanDefinition，如果没有则返回null 。允许检索修饰的 bean 定义（如果有）。
     * 此方法返回直接发起者。遍历 originator 链以找到用户定义的原始 BeanDefinition。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">BeanDefinition</span> <span class="token function">getOriginatingBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(f,g){const a=t("router-link");return i(),c("div",null,[v,n("nav",r,[n("ul",null,[n("li",null,[l(a,{to:"#beandefinition接口"},{default:o(()=>[s("BeanDefinition接口")]),_:1})])])]),k])}const w=e(m,[["render",b],["__file","beandefinition.html.vue"]]);export{w as default};
