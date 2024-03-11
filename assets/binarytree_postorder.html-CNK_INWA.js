import{_ as e,r as o,o as c,c as l,b as n,e as t,w as p,d as s,a as i}from"./app-7rGY8hGP.js";const u="/life-doc/assets/5d5bf815a5e922756ebffbaaea34d4a3-Qde57x7R.png",r={},k=n("h1",{id:"三-二叉树之后序遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三-二叉树之后序遍历","aria-hidden":"true"},"#"),s(" （三）二叉树之后序遍历")],-1),d={class:"table-of-contents"},v=i('<h2 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言" aria-hidden="true">#</a> 0.前言</h2><h2 id="_1-递归遍历" tabindex="-1"><a class="header-anchor" href="#_1-递归遍历" aria-hidden="true">#</a> 1.递归遍历</h2><h3 id="_1-1思路" tabindex="-1"><a class="header-anchor" href="#_1-1思路" aria-hidden="true">#</a> 1.1思路</h3><p>递归树在第三区直接打印，即为后序遍历</p><p><img src="'+u+`" alt=""></p><h3 id="_1-2代码" tabindex="-1"><a class="header-anchor" href="#_1-2代码" aria-hidden="true">#</a> 1.2代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">learn<span class="token punctuation">.</span>note<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span>binarytree</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WangWenLei
 * @DATE: 2022/3/9
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TreeNode</span> createTree <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> node8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        node1<span class="token punctuation">.</span>left <span class="token operator">=</span> node2<span class="token punctuation">;</span>
        node1<span class="token punctuation">.</span>right <span class="token operator">=</span> node3<span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span>left <span class="token operator">=</span> node4<span class="token punctuation">;</span>
        node2<span class="token punctuation">.</span>right <span class="token operator">=</span> node5<span class="token punctuation">;</span>
        node3<span class="token punctuation">.</span>left <span class="token operator">=</span> node6<span class="token punctuation">;</span>
        node3<span class="token punctuation">.</span>right <span class="token operator">=</span> node7<span class="token punctuation">;</span>
        node4<span class="token punctuation">.</span>left <span class="token operator">=</span> node8<span class="token punctuation">;</span>

        <span class="token keyword">return</span> node1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token function">createTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        int[] ints = preorderTraversal(root);</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ints <span class="token operator">=</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ints<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token punctuation">(</span>ints<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ints<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ints<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 后序遍历-递归
     * <span class="token keyword">@param</span> <span class="token parameter">root</span> 根节点
     * <span class="token keyword">@return</span> 所有节点的数组
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorderTraversal <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> postorderTraversal <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-非递归遍历" tabindex="-1"><a class="header-anchor" href="#_2-非递归遍历" aria-hidden="true">#</a> 2.非递归遍历</h2><h3 id="_2-1思路" tabindex="-1"><a class="header-anchor" href="#_2-1思路" aria-hidden="true">#</a> 2.1思路</h3><h3 id="_2-2代码" tabindex="-1"><a class="header-anchor" href="#_2-2代码" aria-hidden="true">#</a> 2.2代码</h3>`,10);function m(b,h){const a=o("router-link");return c(),l("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#_0-前言"},{default:p(()=>[s("0.前言")]),_:1})]),n("li",null,[t(a,{to:"#_1-递归遍历"},{default:p(()=>[s("1.递归遍历")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_1-1思路"},{default:p(()=>[s("1.1思路")]),_:1})]),n("li",null,[t(a,{to:"#_1-2代码"},{default:p(()=>[s("1.2代码")]),_:1})])])]),n("li",null,[t(a,{to:"#_2-非递归遍历"},{default:p(()=>[s("2.非递归遍历")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_2-1思路"},{default:p(()=>[s("2.1思路")]),_:1})]),n("li",null,[t(a,{to:"#_2-2代码"},{default:p(()=>[s("2.2代码")]),_:1})])])])])]),v])}const _=e(r,[["render",m],["__file","binarytree_postorder.html.vue"]]);export{_ as default};