import{_ as l,r as e,o as i,c as u,b as n,e as a,w as p,d as s,a as o}from"./app-7rGY8hGP.js";const k="/life-doc/assets/6a6caac2c17c51de093b595481db0900-orFyqHwW.png",r={},d=n("h1",{id:"n皇后问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#n皇后问题","aria-hidden":"true"},"#"),s(" N皇后问题")],-1),v={class:"table-of-contents"},b=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>N 皇后问题是指在 n * n 的棋盘上要摆 n 个皇后， 要求：任何两个皇后不同行，不同列也不在同一条斜线上， 求给一个整数 n ，返回 n 皇后的摆法数。</p><p>数据范围: 1≤n≤9</p><p><img src="'+k+'" alt=""></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h2 id="解题思路学习" tabindex="-1"><a class="header-anchor" href="#解题思路学习" aria-hidden="true">#</a> 解题思路学习</h2>',6),m={href:"https://www.bilibili.com/video/BV13g41157hK?p=10&vd_source=fd5e0f3c8528dd8670e2db083a720f67",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="解题代码" tabindex="-1"><a class="header-anchor" href="#解题代码" aria-hidden="true">#</a> 解题代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">Nqueen</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> sign <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">despose</span><span class="token punctuation">(</span>sign<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">despose</span><span class="token punctuation">(</span><span class="token keyword">int</span> sign <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">==</span> sign<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sign<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isVaild</span><span class="token punctuation">(</span>sign<span class="token punctuation">,</span>i<span class="token punctuation">,</span>h<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sign<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                res <span class="token operator">+=</span> <span class="token function">despose</span><span class="token punctuation">(</span>sign<span class="token punctuation">,</span>h <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>   
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">isVaild</span><span class="token punctuation">(</span><span class="token keyword">int</span> sign <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> w<span class="token punctuation">,</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> h <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sign<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> w <span class="token operator">||</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>w <span class="token operator">-</span> sign<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>h <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function w(f,y){const t=e("router-link"),c=e("ExternalLinkIcon");return i(),u("div",null,[d,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#题目"},{default:p(()=>[s("题目")]),_:1})]),n("li",null,[a(t,{to:"#解题思路"},{default:p(()=>[s("解题思路")]),_:1})]),n("li",null,[a(t,{to:"#解题思路学习"},{default:p(()=>[s("解题思路学习")]),_:1})]),n("li",null,[a(t,{to:"#解题代码"},{default:p(()=>[s("解题代码")]),_:1})])])]),b,n("p",null,[n("a",m,[s("2小时27分24秒左神讲算法"),a(c)])]),h])}const g=l(r,[["render",w],["__file","Nqueen.html.vue"]]);export{g as default};