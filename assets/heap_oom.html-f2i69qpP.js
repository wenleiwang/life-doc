import{_ as i,r as p,o as c,c as l,b as a,e,w as t,d as n,a as o}from"./app-7rGY8hGP.js";const r="/life-doc/assets/343704a86943c4b1cfb161f002848bb1-S7XuTOwM.png",u="/life-doc/assets/9424396e83ba5ea7c0ca9580eb6209b7-QYg8I2z-.png",d={},v=a("h1",{id:"java8体验堆溢出",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java8体验堆溢出","aria-hidden":"true"},"#"),n(" Java8体验堆溢出")],-1),m={class:"table-of-contents"},k=o('<p>使用的HotSpot JDK8</p><h2 id="参数准备" tabindex="-1"><a class="header-anchor" href="#参数准备" aria-hidden="true">#</a> 参数准备</h2><blockquote><p>-Xms20m -Xmm20m -XX:+HeapDumpOnOutOfMemoryError</p></blockquote><p><img src="'+r+`" alt=""></p><h2 id="代码准备" tabindex="-1"><a class="header-anchor" href="#代码准备" aria-hidden="true">#</a> 代码准备</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author Wang WenLei
 * @Date 2022/8/13 11:53
 * @Version 1.0
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeapOOM</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">OOMObject</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OOMObject</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OOMObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行效果" tabindex="-1"><a class="header-anchor" href="#执行效果" aria-hidden="true">#</a> 执行效果</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Exception in thread &quot;main&quot; java.lang.OutOfMemoryError: Java heap space
	at java.util.Arrays.copyOf(Arrays.java:3210)
	at java.util.Arrays.copyOf(Arrays.java:3181)
	at java.util.ArrayList.grow(ArrayList.java:261)
	at java.util.ArrayList.ensureExplicitCapacity(ArrayList.java:235)
	at java.util.ArrayList.ensureCapacityInternal(ArrayList.java:227)
	at java.util.ArrayList.add(ArrayList.java:458)
	at learn.note.JDKCode.JVM.HeapOOM.main(HeapOOM.java:19)

Process finished with exit code 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="找到dump文件" tabindex="-1"><a class="header-anchor" href="#找到dump文件" aria-hidden="true">#</a> 找到Dump文件</h2><p>会发现在根目录下生成了一个.hprof结尾的文件，就是Dump文件</p><p>在IDEA中直接双击就可以分析查看</p><p><img src="`+u+'" alt=""></p><p>第一步首先确认是内存泄漏（memory Leak）还是内存溢出（Memory Overflow）</p><ul><li>如果是内存泄漏，可以进一步通过工具查看泄漏对象到GC Roots的引用链，找到泄漏对象是通过怎样的引用路径、与哪些GC Roots相关联，才导致垃圾收集器无法回收他们</li><li>如果不是内存泄漏（内存中的对象确实都是必须存活的），那就应当检查Java虚拟机的堆参数（-Xms与-Xmx—）设置，与机器的内存对比，看看是否还有上调整的空间。 再从代码上检查是否存在某些对象生命周期过长、持有状态时间过长、存储机构设计不合理等情况，尽量减少程序运行期的内存消耗。</li></ul>',14);function b(h,y){const s=p("router-link");return c(),l("div",null,[v,a("nav",m,[a("ul",null,[a("li",null,[e(s,{to:"#参数准备"},{default:t(()=>[n("参数准备")]),_:1})]),a("li",null,[e(s,{to:"#代码准备"},{default:t(()=>[n("代码准备")]),_:1})]),a("li",null,[e(s,{to:"#执行效果"},{default:t(()=>[n("执行效果")]),_:1})]),a("li",null,[e(s,{to:"#找到dump文件"},{default:t(()=>[n("找到Dump文件")]),_:1})])])]),k])}const f=i(d,[["render",b],["__file","heap_oom.html.vue"]]);export{f as default};