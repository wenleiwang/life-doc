import{_ as e,r as o,o as c,c as l,b as n,e as t,w as p,d as s,a as i}from"./app-7rGY8hGP.js";const u={},k=n("h1",{id:"字符串的排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符串的排列","aria-hidden":"true"},"#"),s(" 字符串的排列")],-1),r={class:"table-of-contents"},d=i(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>输入一个长度为 n 字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。</p><p>例如输入字符串ABC,则输出由字符A,B,C所能排列出来的所有字符串ABC,ACB,BAC,BCA,CBA和CAB。</p><p>数据范围：n &lt; 10 要求：空间复杂度 O(n!)，时间复杂度 O(n!)</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>全排列思想</p><ol><li>从候选者中选出一个，用循环选</li><li>标记已经使用</li><li>进入下一层</li><li>回溯，保证循环选到每个元素</li></ol><h2 id="解题代码" tabindex="-1"><a class="header-anchor" href="#解题代码" aria-hidden="true">#</a> 解题代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Permutation</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">boolean</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> vis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span> <span class="token punctuation">[</span>str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>
        <span class="token class-name">String</span> temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token function">disposeData</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span>str<span class="token punctuation">,</span>vis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">disposeData</span><span class="token punctuation">(</span><span class="token class-name">String</span> temp<span class="token punctuation">,</span><span class="token class-name">String</span> data<span class="token punctuation">,</span><span class="token keyword">boolean</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> vis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 终止条件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 返回值</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 本级任务：选出一个，进入下一层</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>vis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                vis<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                temp <span class="token operator">+=</span> data<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">disposeData</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span>data<span class="token punctuation">,</span>vis<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 回溯</span>
                vis<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                temp <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>temp<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(m,b){const a=o("router-link");return c(),l("div",null,[k,n("nav",r,[n("ul",null,[n("li",null,[t(a,{to:"#描述"},{default:p(()=>[s("描述")]),_:1})]),n("li",null,[t(a,{to:"#思路"},{default:p(()=>[s("思路")]),_:1})]),n("li",null,[t(a,{to:"#解题代码"},{default:p(()=>[s("解题代码")]),_:1})])])]),d])}const f=e(u,[["render",v],["__file","Permutation.html.vue"]]);export{f as default};
