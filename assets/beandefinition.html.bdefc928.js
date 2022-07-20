import{d as n}from"./app.388479f4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/life-doc/assets/2022-07-06-10-16-27.e45bb234.png",p="/life-doc/assets/2022-07-06-10-22-36.fe34a5ed.png";const e={},t=n('<h1 id="beandefinition\u6E90\u7801\u9605\u8BFB" tabindex="-1"><a class="header-anchor" href="#beandefinition\u6E90\u7801\u9605\u8BFB" aria-hidden="true">#</a> BeanDefinition\u6E90\u7801\u9605\u8BFB</h1><p>Bean\u7684\u5B9A\u4E49</p><h2 id="beandefinition\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#beandefinition\u63A5\u53E3" aria-hidden="true">#</a> BeanDefinition\u63A5\u53E3</h2><p>\u4F5C\u7528\uFF1ABeanDefinition \u63CF\u8FF0\u4E86\u4E00\u4E2A bean \u5B9E\u4F8B\uFF0C\u5B83\u5177\u6709\u5C5E\u6027\u503C\u3001\u6784\u9020\u51FD\u6570\u53C2\u6570\u503C\u4EE5\u53CA\u5177\u4F53\u5B9E\u73B0\u63D0\u4F9B\u7684\u66F4\u591A\u4FE1\u606F\u3002</p><p>\u8FD9\u53EA\u662F\u4E00\u4E2A\u6700\u5C0F\u7684\u63A5\u53E3\uFF1A\u4E3B\u8981\u76EE\u7684\u662F\u5141\u8BB8BeanFactoryPostProcessor\u5185\u7701\u548C\u4FEE\u6539\u5C5E\u6027\u503C\u548C\u5176\u4ED6 bean \u5143\u6570\u636E\u3002</p><p><img src="'+a+'" alt=""></p><p>\u7EE7\u627F\u4E862\u4E2A\u63A5\u53E3AttributeAccessor\u3001BeanMetadataElement\u3002\u5C31\u5177\u6269\u5C55\u4E86Attribute\uFF08\u5C5E\u6027\uFF09\u5904\u7406\u548C\u83B7\u53D6Bean\u5143\u6570\u636E\u7684\u529F\u80FD</p><p>AttributeAccessor\uFF1A\u5C5E\u6027\u8BBF\u95EE\u5668\uFF0C\u6709getAttribute()\u3001setAttribute()\u3001removeAttribute()\u3001hasAttribute()\u3001attributeNames()\u65B9\u6CD5</p><p>BeanMetadataElement\uFF1ABean \u5143\u6570\u636E\u5143\u7D20\uFF0C\u6709getSource()\u65B9\u6CD5\u3002\u7531\u627F\u8F7D\u914D\u7F6E\u6E90\u5BF9\u8C61\u7684 bean \u5143\u6570\u636E\u5143\u7D20\u5B9E\u73B0\u7684\u63A5\u53E3\u3002</p><p>\u770B\u4E0B\u65B9\u6CD5\u6C47\u603B</p><p><img src="'+p+`" alt=""></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeanMetadataElement</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">MutablePropertyValues</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">AttributeAccessor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">ResolvableType</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">AttributeAccessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * \u6807\u51C6\u5355\u4F8B\u8303\u56F4\u7684\u8303\u56F4\u6807\u8BC6\u7B26\uFF1A\u201C\u5355\u4F8B\u201D  singleton
	 */</span>
	<span class="token class-name">String</span> SCOPE_SINGLETON <span class="token operator">=</span> <span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span>SCOPE_SINGLETON<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6807\u51C6\u539F\u578B\u8303\u56F4\u7684\u8303\u56F4\u6807\u8BC6\u7B26\uFF1A\u201C\u539F\u578B\u201D prototype
	 */</span>
	<span class="token class-name">String</span> SCOPE_PROTOTYPE <span class="token operator">=</span> <span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span>SCOPE_PROTOTYPE<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6307\u793ABeanDefinition\u662F\u5E94\u7528\u7A0B\u5E8F\u4E3B\u8981\u90E8\u5206\u7684\u89D2\u8272\u63D0\u793A\u3002\u901A\u5E38\u5BF9\u5E94\u4E8E\u7528\u6237\u5B9A\u4E49\u7684 bean
	 */</span>
	<span class="token keyword">int</span> ROLE_APPLICATION <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u89D2\u8272\u63D0\u793A\u8868\u660EBeanDefinition\u662F\u4E00\u4E9B\u8F83\u5927\u914D\u7F6E\u7684\u652F\u6301\u90E8\u5206\uFF0C
     * \u901A\u5E38\u662F\u5916\u90E8org.springframework.beans.factory.parsing.ComponentDefinition 
     * SUPPORT bean \u88AB\u8BA4\u4E3A\u8DB3\u591F\u91CD\u8981\uFF0C
     * \u4EE5\u4FBF\u5728\u66F4\u4ED4\u7EC6\u5730\u67E5\u770B\u7279\u5B9Aorg.springframework.beans.factory.parsing.ComponentDefinition\u65F6\u610F\u8BC6\u5230\u8FD9\u4E00\u70B9\uFF0C
     * \u4F46\u5728\u67E5\u770B\u5E94\u7528\u7A0B\u5E8F\u7684\u6574\u4F53\u914D\u7F6E\u65F6\u5219\u4E0D\u7136\u3002
	 */</span>
	<span class="token keyword">int</span> ROLE_SUPPORT <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6307\u793ABeanDefinition\u63D0\u4F9B\u5B8C\u5168\u540E\u53F0\u89D2\u8272\u4E14\u4E0E\u6700\u7EC8\u7528\u6237\u65E0\u5173\u7684\u89D2\u8272\u63D0\u793A\u3002
     * \u5F53\u6CE8\u518C\u5B8C\u5168\u5C5E\u4E8Eorg.springframework.beans.factory.parsing.ComponentDefinition\u5185\u90E8\u5DE5\u4F5C\u7684 bean \u65F6\uFF0C\u4F1A\u4F7F\u7528\u6B64\u63D0\u793A
	 */</span>
	<span class="token keyword">int</span> ROLE_INFRASTRUCTURE <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>


	<span class="token comment">// Modifiable attributes</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u6B64 bean \u5B9A\u4E49\u7684\u7236\u5B9A\u4E49\u7684\u540D\u79F0\uFF08\u5982\u679C\u6709\uFF09
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setParentName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> parentName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u5B9A\u4E49\u7684\u7236\u5B9A\u4E49\u7684\u540D\u79F0\uFF08\u5982\u679C\u6709\uFF09\u3002
	 */</span>
	<span class="token class-name">String</span> <span class="token function">getParentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6307\u5B9A\u6B64 bean \u5B9A\u4E49\u7684 bean \u7C7B\u540D\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setBeanClassName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> beanClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u5B9A\u4E49\u7684\u5F53\u524D bean \u7C7B\u540D\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getBeanClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8986\u76D6\u6B64 bean \u7684\u76EE\u6807\u8303\u56F4\uFF0C\u6307\u5B9A\u4E00\u4E2A\u65B0\u7684\u8303\u56F4\u540D\u79F0
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setScope</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> scope<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u7684\u5F53\u524D\u76EE\u6807\u8303\u56F4\u7684\u540D\u79F0\uFF0C\u5982\u679C\u5C1A\u4E0D\u77E5\u9053\uFF0C\u5219\u8FD4\u56DEnull \u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u8FD9\u4E2A bean \u662F\u5426\u5E94\u8BE5\u88AB\u5EF6\u8FDF\u521D\u59CB\u5316\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setLazyInit</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> lazyInit<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u662F\u5426\u5E94\u8BE5\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u5373\u5728\u542F\u52A8\u65F6\u4E0D\u6025\u5207\u5730\u5B9E\u4F8B\u5316\u3002\u4EC5\u9002\u7528\u4E8E\u5355\u4F8B bean\u3002
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isLazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u6B64 bean \u521D\u59CB\u5316\u6240\u4F9D\u8D56\u7684 bean \u7684\u540D\u79F0\u3002 bean \u5DE5\u5382\u5C06\u4FDD\u8BC1\u8FD9\u4E9B bean \u9996\u5148\u88AB\u521D\u59CB\u5316\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDependsOn</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> dependsOn<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u6240\u4F9D\u8D56\u7684 bean \u540D\u79F0\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDependsOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u6B64 bean \u662F\u5426\u662F\u81EA\u52A8\u88C5\u914D\u5230\u5176\u4ED6 bean \u7684\u5019\u9009\u5BF9\u8C61\u3002
     * \u8BF7\u6CE8\u610F\uFF0C\u6B64\u6807\u5FD7\u65E8\u5728\u4EC5\u5F71\u54CD\u57FA\u4E8E\u7C7B\u578B\u7684\u81EA\u52A8\u88C5\u914D\u3002\u5B83\u4E0D\u4F1A\u5F71\u54CD\u6309\u540D\u79F0\u7684\u663E\u5F0F\u5F15\u7528\uFF0C
     * \u5373\u4F7F\u6307\u5B9A\u7684 bean \u672A\u6807\u8BB0\u4E3A\u81EA\u52A8\u88C5\u914D\u5019\u9009\u8005\uFF0C\u4E5F\u4F1A\u5F97\u5230\u89E3\u51B3\u3002
     * \u56E0\u6B64\uFF0C\u5982\u679C\u540D\u79F0\u5339\u914D\uFF0C\u6309\u540D\u79F0\u81EA\u52A8\u88C5\u914D\u4ECD\u7136\u4F1A\u6CE8\u5165\u4E00\u4E2A bean\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setAutowireCandidate</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> autowireCandidate<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u662F\u5426\u662F\u81EA\u52A8\u88C5\u914D\u5230\u5176\u4ED6 bean \u7684\u5019\u9009\u5BF9\u8C61\u3002
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAutowireCandidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u6B64 bean \u662F\u5426\u662F\u4E3B\u8981\u7684\u81EA\u52A8\u88C5\u914D\u5019\u9009\u8005\u3002
     * \u5982\u679C\u8BE5\u503C\u5BF9\u4E8E\u591A\u4E2A\u5339\u914D\u5019\u9009\u8005\u4E2D\u7684\u4E00\u4E2A bean \u4E3Atrue \uFF0C
     * \u5219\u5B83\u5C06\u4F5C\u4E3A\u4E3B\u8981\u7684\u81EA\u52A8\u88C5\u914D\u5019\u9009\u8005\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setPrimary</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u662F\u5426\u662F\u4E3B\u8981\u7684\u81EA\u52A8\u88C5\u914D\u5019\u9009\u8005\u3002
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrimary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6307\u5B9A\u8981\u4F7F\u7528\u7684\u5DE5\u5382 bean\uFF08\u5982\u679C\u6709\uFF09\u3002\u8FD9\u662F\u8981\u8C03\u7528\u6307\u5B9A\u5DE5\u5382\u65B9\u6CD5\u7684 bean \u7684\u540D\u79F0\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryBeanName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u5DE5\u5382 bean \u540D\u79F0\uFF08\u5982\u679C\u6709\uFF09
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryBeanName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u6307\u5B9A\u5DE5\u5382\u65B9\u6CD5\uFF08\u5982\u679C\u6709\uFF09\u3002\u5C06\u4F7F\u7528\u6784\u9020\u51FD\u6570\u53C2\u6570\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u53C2\u6570\uFF0C\u5219\u4E0D\u4F7F\u7528\u4EFB\u4F55\u53C2\u6570\u3002
     * \u8BE5\u65B9\u6CD5\u5C06\u5728\u6307\u5B9A\u7684\u5DE5\u5382 bean \u4E0A\u8C03\u7528\uFF0C\u5982\u679C\u6709\u7684\u8BDD\uFF0C\u6216\u8005\u4F5C\u4E3A\u672C\u5730 bean \u7C7B\u7684\u9759\u6001\u65B9\u6CD5\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u4E00\u4E2A\u5DE5\u5382\u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u7684\u6784\u9020\u51FD\u6570\u53C2\u6570\u503C\u3002\u8FD4\u56DE\u7684\u5B9E\u4F8B\u53EF\u4EE5\u5728 bean \u5DE5\u5382\u540E\u5904\u7406\u671F\u95F4\u8FDB\u884C\u4FEE\u6539\u3002
	 */</span>
	<span class="token class-name">ConstructorArgumentValues</span> <span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u5982\u679C\u6709\u4E3A\u6B64 bean \u5B9A\u4E49\u7684\u6784\u9020\u51FD\u6570\u53C2\u6570\u503C\uFF0C\u5219\u8FD4\u56DE\u3002
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u8981\u5E94\u7528\u4E8E bean \u7684\u65B0\u5B9E\u4F8B\u7684\u5C5E\u6027\u503C\u3002
	 * \u8FD4\u56DE\u7684\u5B9E\u4F8B\u53EF\u4EE5\u5728 bean \u5DE5\u5382\u540E\u5904\u7406\u671F\u95F4\u8FDB\u884C\u4FEE\u6539\u3002
	 */</span>
	<span class="token class-name">MutablePropertyValues</span> <span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u5982\u679C\u6709\u4E3A\u6B64 bean \u5B9A\u4E49\u7684\u5C5E\u6027\u503C\uFF0C\u5219\u8FD4\u56DE\u3002
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u521D\u59CB\u5316\u65B9\u6CD5\u7684\u540D\u79F0\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setInitMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> initMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u521D\u59CB\u5316\u65B9\u6CD5\u7684\u540D\u79F0\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getInitMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u9500\u6BC1\u65B9\u6CD5\u7684\u540D\u79F0\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDestroyMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> destroyMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u9500\u6BC1\u65B9\u6CD5\u7684\u540D\u79F0\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDestroyMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u4E3A\u6B64BeanDefinition\u8BBE\u7F6E\u89D2\u8272\u63D0\u793A\u3002
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setRole</span><span class="token punctuation">(</span><span class="token keyword">int</span> role<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u83B7\u53D6\u6B64BeanDefinition\u7684\u89D2\u8272\u63D0\u793A\u3002
     * \u89D2\u8272\u63D0\u793A\u4E3A\u6846\u67B6\u548C\u5DE5\u5177\u63D0\u4F9B\u4E86\u7279\u5B9ABeanDefinition\u7684\u89D2\u8272\u548C\u91CD\u8981\u6027\u7684\u6307\u793A\u3002
	 */</span>
	<span class="token keyword">int</span> <span class="token function">getRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8BBE\u7F6E\u6B64 bean \u5B9A\u4E49\u7684\u63CF\u8FF0
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u5B9A\u4E49\u7684\u63CF\u8FF0\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// Read-only attributes</span>

	<span class="token doc-comment comment">/**
	 * \u6839\u636E bean \u7C7B\u6216\u5176\u4ED6\u7279\u5B9A\u5143\u6570\u636E\uFF0C\u8FD4\u56DE\u6B64 bean \u5B9A\u4E49\u7684\u53EF\u89E3\u6790\u7C7B\u578B\u3002
	 */</span>
	<span class="token class-name">ResolvableType</span> <span class="token function">getResolvableType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u8FD9\u662F\u5426\u662FSingleton \uFF0C\u5728\u6240\u6709\u8C03\u7528\u4E2D\u90FD\u8FD4\u56DE\u4E00\u4E2A\u5171\u4EAB\u5B9E\u4F8B\u3002
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u8FD9\u662F\u5426\u662FPrototype \uFF0C\u6BCF\u6B21\u8C03\u7528\u90FD\u8FD4\u56DE\u4E00\u4E2A\u72EC\u7ACB\u7684\u5B9E\u4F8B\u3002
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u662F\u5426\u662F\u201C\u62BD\u8C61\u7684\u201D\uFF0C\u5373\u4E0D\u6253\u7B97\u5B9E\u4F8B\u5316
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u6B64 bean \u5B9A\u4E49\u6765\u81EA\u7684\u8D44\u6E90\u7684\u63CF\u8FF0\uFF08\u4E3A\u4E86\u5728\u51FA\u73B0\u9519\u8BEF\u65F6\u663E\u793A\u4E0A\u4E0B\u6587\uFF09\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getResourceDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * \u8FD4\u56DE\u539F\u59CB BeanDefinition\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u8FD4\u56DEnull \u3002\u5141\u8BB8\u68C0\u7D22\u4FEE\u9970\u7684 bean \u5B9A\u4E49\uFF08\u5982\u679C\u6709\uFF09\u3002
     * \u6B64\u65B9\u6CD5\u8FD4\u56DE\u76F4\u63A5\u53D1\u8D77\u8005\u3002\u904D\u5386 originator \u94FE\u4EE5\u627E\u5230\u7528\u6237\u5B9A\u4E49\u7684\u539F\u59CB BeanDefinition\u3002
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">BeanDefinition</span> <span class="token function">getOriginatingBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br></div></div>`,12);function c(l,o){return t}var i=s(e,[["render",c]]);export{i as default};
