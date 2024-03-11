import{_ as o,r as e,o as c,c as u,b as n,e as t,w as p,d as s,a as i}from"./app-7rGY8hGP.js";const l={},k=n("h1",{id:"包含min函数的栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包含min函数的栈","aria-hidden":"true"},"#"),s(" 包含min函数的栈")],-1),d={class:"table-of-contents"},r=i(`<h2 id="_0-题目" tabindex="-1"><a class="header-anchor" href="#_0-题目" aria-hidden="true">#</a> 0.题目</h2><p>定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数，输入操作时保证 pop、top 和 min 函数操作时，栈中一定有元素。</p><p>此栈包含的方法有： push(value):将value压入栈中 pop():弹出栈顶元素 top():获取栈顶元素 min():获取栈中最小元素</p><p>数据范围：操作数量满足 0 \\le n \\le 300 \\0≤n≤300 ，输入的元素满足 |val| \\le 10000 \\∣val∣≤10000 进阶：栈的各个操作的时间复杂度是 O(1)\\O(1) ，空间复杂度是 O(n)\\O(n)</p><p>示例: 输入: [&quot;PSH-1&quot;,&quot;PSH2&quot;,&quot;MIN&quot;,&quot;TOP&quot;,&quot;POP&quot;,&quot;PSH1&quot;,&quot;TOP&quot;,&quot;MIN&quot;] 输出: -1,2,1,-1 解析: &quot;PSH-1&quot;表示将-1压入栈中，栈中元素为-1 &quot;PSH2&quot;表示将2压入栈中，栈中元素为2，-1 “MIN”表示获取此时栈中最小元素==&gt;返回-1 &quot;TOP&quot;表示获取栈顶元素==&gt;返回2 &quot;POP&quot;表示弹出栈顶元素，弹出2，栈中元素为-1 &quot;PSH1&quot;表示将1压入栈中，栈中元素为1，-1 &quot;TOP&quot;表示获取栈顶元素==&gt;返回1 “MIN”表示获取此时栈中最小元素==&gt;返回-1</p><h2 id="_1-代码" tabindex="-1"><a class="header-anchor" href="#_1-代码" aria-hidden="true">#</a> 1.代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bm43_includeMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stackMin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stackMin<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stackMin<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stackMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stackMin<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stackMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                stackMin<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stackMin<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> stackMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,b){const a=e("router-link");return c(),u("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#_0-题目"},{default:p(()=>[s("0.题目")]),_:1})]),n("li",null,[t(a,{to:"#_1-代码"},{default:p(()=>[s("1.代码")]),_:1})])])]),r])}const h=o(l,[["render",v],["__file","includeMain.html.vue"]]);export{h as default};