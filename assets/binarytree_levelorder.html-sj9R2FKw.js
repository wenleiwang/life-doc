import{_ as e,r as o,o as c,c as l,b as n,e as t,w as p,d as s,a as i}from"./app-7rGY8hGP.js";const u="/life-doc/assets/db21a58e4bf936801b260ac21fc158ef-nUc9OSqr.gif",k={},r=n("h1",{id:"二叉树的层序遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树的层序遍历","aria-hidden":"true"},"#"),s(" 二叉树的层序遍历")],-1),d={class:"table-of-contents"},v=i(`<h2 id="_0-题目" tabindex="-1"><a class="header-anchor" href="#_0-题目" aria-hidden="true">#</a> 0.题目</h2><p>描述 给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历） 例如： 给定的二叉树是{3,9,20,#,#,15,7}, 该二叉树层序遍历的结果是 [ [3], [9,20], [15,7] ] 提示: 0 &lt;= 二叉树的结点数 &lt;= 1500</p><p>示例1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
{1,2}

返回值：
[[1],[2]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
{1,2,3,4,#,#,5}

返回值：
[[1],[2,3],[4,5]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-使用哈希表" tabindex="-1"><a class="header-anchor" href="#_1-使用哈希表" aria-hidden="true">#</a> 1.使用哈希表</h2><h3 id="_1-1思路" tabindex="-1"><a class="header-anchor" href="#_1-1思路" aria-hidden="true">#</a> 1.1思路</h3><p><img src="`+u+`" alt=""></p><h3 id="_1-2代码" tabindex="-1"><a class="header-anchor" href="#_1-2代码" aria-hidden="true">#</a> 1.2代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">learn<span class="token punctuation">.</span>note<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span>binarytree</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author Wang WenLei
 * @Date 2022/3/10 23:45
 * @Version 1.0
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LevelOrder</span> <span class="token punctuation">{</span>
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
        <span class="token class-name">TreeNode</span> tree <span class="token operator">=</span> <span class="token function">createTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> arrayLists <span class="token operator">=</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayLists<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> levelOrder <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> curLevel <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> curCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArrayList</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> lists <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>curLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> poll <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Integer</span> integer <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>poll<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>integer <span class="token operator">==</span> curLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                curCount <span class="token operator">++</span><span class="token punctuation">;</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                curLevel <span class="token operator">++</span><span class="token punctuation">;</span>
                lists<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
                list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>left<span class="token punctuation">,</span>curLevel <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>poll<span class="token punctuation">.</span>right<span class="token punctuation">,</span>curLevel <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>list<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lists<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> lists<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用几个变量" tabindex="-1"><a class="header-anchor" href="#_2-使用几个变量" aria-hidden="true">#</a> 2.使用几个变量</h2><h3 id="_2-1思路" tabindex="-1"><a class="header-anchor" href="#_2-1思路" aria-hidden="true">#</a> 2.1思路</h3><h3 id="_2-2代码" tabindex="-1"><a class="header-anchor" href="#_2-2代码" aria-hidden="true">#</a> 2.2代码</h3>`,14);function m(b,h){const a=o("router-link");return c(),l("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#_0-题目"},{default:p(()=>[s("0.题目")]),_:1})]),n("li",null,[t(a,{to:"#_1-使用哈希表"},{default:p(()=>[s("1.使用哈希表")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_1-1思路"},{default:p(()=>[s("1.1思路")]),_:1})]),n("li",null,[t(a,{to:"#_1-2代码"},{default:p(()=>[s("1.2代码")]),_:1})])])]),n("li",null,[t(a,{to:"#_2-使用几个变量"},{default:p(()=>[s("2.使用几个变量")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_2-1思路"},{default:p(()=>[s("2.1思路")]),_:1})]),n("li",null,[t(a,{to:"#_2-2代码"},{default:p(()=>[s("2.2代码")]),_:1})])])])])]),v])}const y=e(k,[["render",m],["__file","binarytree_levelorder.html.vue"]]);export{y as default};
