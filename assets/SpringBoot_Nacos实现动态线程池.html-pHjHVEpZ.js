import{_ as n,o as s,c as a,a as t}from"./app-7rGY8hGP.js";const p={},e=t(`<h1 id="springboot-nacos实现动态线程池" tabindex="-1"><a class="header-anchor" href="#springboot-nacos实现动态线程池" aria-hidden="true">#</a> SpringBoot+Nacos实现动态线程池</h1><blockquote><p>文章摘自：不才陈某 码猿技术专栏</p></blockquote><p>在后台开发中，会经常用到线程池技术，对于线程池核心参数的配置很大程度上依靠经验。然而，由于系统运行过程中存在的不确定性，我们很难一劳永逸地规划一个合理的线程池参数。在对线程池配置参数进行调整时，一般需要对服务进行重启，这样修改的成本就会偏高。一种解决办法就是，将线程池的配置放到平台侧，运行开发同学根据系统运行情况对核心参数进行动态配置。</p><p>本文以Nacos作为服务配置中心，以修改线程池核心线程数、最大线程数为例，实现一个简单的动态化线程池。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2021.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2021.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><h3 id="bootstrap-yml" tabindex="-1"><a class="header-anchor" href="#bootstrap-yml" aria-hidden="true">#</a> bootstrap.yml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>  
  port<span class="token punctuation">:</span> <span class="token number">8010</span>  
  <span class="token comment"># 应用名称（nacos会将该名称当做服务名称）  </span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>  
  application<span class="token punctuation">:</span>  
    name<span class="token punctuation">:</span> order<span class="token punctuation">-</span>service  
  cloud<span class="token punctuation">:</span>  
    nacos<span class="token punctuation">:</span>  
      discovery<span class="token punctuation">:</span>  
        namespace<span class="token punctuation">:</span> public  
        server<span class="token punctuation">-</span><span class="token key atrule">addr</span><span class="token punctuation">:</span> 192.168.174.129<span class="token punctuation">:</span><span class="token number">8848</span>  
      config<span class="token punctuation">:</span>  
        server<span class="token punctuation">-</span><span class="token key atrule">addr</span><span class="token punctuation">:</span> 192.168.174.129<span class="token punctuation">:</span><span class="token number">8848</span>  
        file<span class="token punctuation">-</span><span class="token key atrule">extension</span><span class="token punctuation">:</span> yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>  
  profiles<span class="token punctuation">:</span>  
    active<span class="token punctuation">:</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么要配置两个yml文件？</p><p>springboot中配置文件的加载是存在优先级顺序的，bootstrap优先级高于application。</p><p>nacos在项目初始化时，要保证先从配置中心进行配置拉取，拉取配置之后才能保证项目的正常启动。</p><h2 id="nacos配置" tabindex="-1"><a class="header-anchor" href="#nacos配置" aria-hidden="true">#</a> nacos配置</h2><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041035892.png" alt="image.png|950"></p><p>注意Data ID的命名格式为，<code>\${spring.application.name}-\${spring.profile.active}.\${spring.cloud.nacos.config.file-extension}</code> ，在本文中，Data ID的名字就是<code>order-service-dev.yml</code>。</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041037841.png" alt="image.png|950"></p><h2 id="线程池配置和nacos配置变更监听" tabindex="-1"><a class="header-anchor" href="#线程池配置和nacos配置变更监听" aria-hidden="true">#</a> 线程池配置和nacos配置变更监听</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RefreshScope</span>  
<span class="token annotation punctuation">@Configuration</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicThreadPool</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${core.size}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> coreSize<span class="token punctuation">;</span>  
   
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${max.size}&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> maxSize<span class="token punctuation">;</span>  
   
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ThreadPoolExecutor</span> threadPoolExecutor<span class="token punctuation">;</span>  
   
    <span class="token annotation punctuation">@Autowired</span>  
    <span class="token keyword">private</span> <span class="token class-name">NacosConfigManager</span> nacosConfigManager<span class="token punctuation">;</span>  
   
    <span class="token annotation punctuation">@Autowired</span>  
    <span class="token keyword">private</span> <span class="token class-name">NacosConfigProperties</span> nacosConfigProperties<span class="token punctuation">;</span>  
   
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>  
        <span class="token comment">//按照nacos配置初始化线程池  </span>
        threadPoolExecutor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>coreSize<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>maxSize<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span>  
                <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
                <span class="token keyword">new</span> <span class="token class-name">ThreadFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNameFormat</span><span class="token punctuation">(</span><span class="token string">&quot;c_t_%d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
                <span class="token keyword">new</span> <span class="token class-name">RejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    <span class="token annotation punctuation">@Override</span>  
                    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rejectedExecution</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">ThreadPoolExecutor</span> executor<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rejected!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
   
        <span class="token comment">//nacos配置变更监听  </span>
        nacosConfigManager<span class="token punctuation">.</span><span class="token function">getConfigService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;order-service-dev.yml&quot;</span><span class="token punctuation">,</span> nacosConfigProperties<span class="token punctuation">.</span><span class="token function">getGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
                <span class="token keyword">new</span> <span class="token class-name">Listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    <span class="token annotation punctuation">@Override</span>  
                    <span class="token keyword">public</span> <span class="token class-name">Executor</span> <span class="token function">getExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
   
                    <span class="token annotation punctuation">@Override</span>  
                    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveConfigInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> configInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                        <span class="token comment">//配置变更，修改线程池配置  </span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>configInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                        <span class="token function">changeThreadPoolConfig</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>coreSize<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>maxSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
   
    <span class="token doc-comment comment">/**  
     * 打印当前线程池的状态  
     */</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">printThreadPoolStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;core_size:%s,thread_current_size:%s;&quot;</span> <span class="token operator">+</span>  
                        <span class="token string">&quot;thread_max_size:%s;queue_current_size:%s,total_task_count:%s&quot;</span><span class="token punctuation">,</span> threadPoolExecutor<span class="token punctuation">.</span><span class="token function">getCorePoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
                threadPoolExecutor<span class="token punctuation">.</span><span class="token function">getActiveCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadPoolExecutor<span class="token punctuation">.</span><span class="token function">getMaximumPoolSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadPoolExecutor<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
                threadPoolExecutor<span class="token punctuation">.</span><span class="token function">getTaskCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
   
    <span class="token doc-comment comment">/**  
     * 给线程池增加任务  
     *  
     * @param count  
     */</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dynamicThreadPoolAddTask</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">int</span> finalI <span class="token operator">=</span> i<span class="token punctuation">;</span>  
            threadPoolExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token annotation punctuation">@Override</span>  
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>  
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>finalI<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span>  
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
   
    <span class="token doc-comment comment">/**  
     * 修改线程池核心参数  
     *  
     * @param coreSize  
     * @param maxSize  
     */</span>  
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">changeThreadPoolConfig</span><span class="token punctuation">(</span><span class="token keyword">int</span> coreSize<span class="token punctuation">,</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        threadPoolExecutor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span>coreSize<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        threadPoolExecutor<span class="token punctuation">.</span><span class="token function">setMaximumPoolSize</span><span class="token punctuation">(</span>maxSize<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个代码就是实现动态线程池和核心了，需要说明的是：</p><ul><li><p><code>@RefreshScope</code>：这个注解用来支持nacos的动态刷新功能；</p></li><li><p><code>@Value(&quot;\${max.size}&quot;)</code>，<code>@Value(&quot;\${core.size}&quot;)</code>：这两个注解用来读取我们上一步在nacos配置的具体信息；同时，nacos配置变更时，能够实时读取到变更后的内容</p></li><li><p><code>nacosConfigManager.getConfigService().addListener</code>：配置监听，nacos配置变更时实时修改线程池的配置。</p></li></ul><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h2><p>为了观察线程池动态变更的效果，增加Controller类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>  
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/threadpool&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolController</span> <span class="token punctuation">{</span>  
   
    <span class="token annotation punctuation">@Autowired</span>  
    <span class="token keyword">private</span> <span class="token class-name">DynamicThreadPool</span> dynamicThreadPool<span class="token punctuation">;</span>  
   
    <span class="token doc-comment comment">/**  
     * 打印当前线程池的状态  
     */</span>  
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/print&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">printThreadPoolStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> dynamicThreadPool<span class="token punctuation">.</span><span class="token function">printThreadPoolStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
   
    <span class="token doc-comment comment">/**  
     * 给线程池增加任务  
     *  
     * @param count  
     */</span>  
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dynamicThreadPoolAddTask</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        dynamicThreadPool<span class="token punctuation">.</span><span class="token function">dynamicThreadPoolAddTask</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>启动项目，访问http://localhost:8010/threadpool/print打印当前线程池的配置。</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041038257.png" alt="image.png|950"></p><p>可以看到，这个就是我们之前在nacos配置的线程数。</p><p>访问http://localhost:8010/threadpool/add?count=20增加20个任务，重新打印线程池配置</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041038754.png" alt="image.png|950"></p><p>可以看到已经有线程在排队了。</p><p>为了能够看到效果，我们多访问几次/add接口，增加任务数，在控制台出现拒绝信息时调整nacos配置。</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039118.png" alt="image.png|950"></p><p>此时，执行/add命令时，所有的线程都会提示rejected。</p><p>调整nacos配置，将核心线程数调整为50，最大线程数调整为100.</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039585.png" alt="image.png|950"></p><p>重新多次访问/add接口增加任务，发现没有拒绝信息了。这时，打印具体的线程状态，发现线程池参数修改成功。</p><p><img src="https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402041039577.png" alt="image.png|950"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这里，只是简单实现了一个可以调整核心线程数和最大线程数的动态线程池。具体的线程池实现原理可以参考美团的这篇文章：https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html，结合监控告警等实现一个完善的动态线程池产品。</p><p>优秀的轮子还有好多，比如Hippo4J ，使用起来和dynamic-tp差不多。Hippo4J 有无依赖中间件实现动静线程池，也有默认实现Nacos和Apollo的版本，而dynamic-tp 默认实现依赖Nacos或Apollo。</p><hr><p>#线程</p>`,44),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","SpringBoot_Nacos实现动态线程池.html.vue"]]);export{d as default};
