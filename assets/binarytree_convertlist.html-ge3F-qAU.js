import{_ as p,r as l,o as c,c as o,b as n,e,w as t,d as s,a as i}from"./app-7rGY8hGP.js";const u="/life-doc/assets/2ebb7f8f5baafc840e43494ec75d038c-nf7jW280.png",r={},d=n("h1",{id:"二叉树与双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树与双向链表","aria-hidden":"true"},"#"),s(" 二叉树与双向链表")],-1),k={class:"table-of-contents"},v=i('<h2 id="_0-题目" tabindex="-1"><a class="header-anchor" href="#_0-题目" aria-hidden="true">#</a> 0. 题目</h2><p>题目来自牛客网 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。如下图所示</p><p><img src="'+u+`" alt=""></p><p>数据范围：输入二叉树的结点数 0 &lt;= n &lt;= 10000≤n≤1000，二叉树中每个结点的值 0&lt;= val &lt;= 10000≤val≤1000 要求：空间复杂度O(1)（即在原树上操作），时间复杂度 O(n)</p><p>注意: 1.要求不能创建任何新的结点，只能调整树中结点指针的指向。当转化完成以后，树中结点的左指针需要指向前驱，树中结点的右指针需要指向后继 2.返回链表中的第一个结点的指针 3.函数返回的TreeNode，有左右指针，其实可以看成一个双向链表的数据结构 4.你不用输出双向链表，程序会根据你的返回值自动打印输出</p><p>输入描述： 二叉树的根结点 返回值描述： 双向链表的其中一个头结点。</p><p>示例1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
{10,6,14,4,8,12,16}
返回值：
From left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;
说明：
输入题面图中二叉树，输出的时候将双向链表的头结点返回即可。     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
{5,4,#,3,#,2,#,1}
返回值：
From left to right are:1,2,3,4,5;From right to left are:5,4,3,2,1;
说明：
                    5
                  /
                4
              /
            3
          /
        2
      /
    1
树的形状如上图  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-准备" tabindex="-1"><a class="header-anchor" href="#_1-准备" aria-hidden="true">#</a> 1.准备</h2><ul><li>前驱结点：中序遍历，一个结点的前一个结点为前驱结点</li><li>后驱结点：中序遍历，一个结点的后一个结点为后驱结点</li></ul><h2 id="_2-非递归解法" tabindex="-1"><a class="header-anchor" href="#_2-非递归解法" aria-hidden="true">#</a> 2.非递归解法</h2><h3 id="_2-1思路" tabindex="-1"><a class="header-anchor" href="#_2-1思路" aria-hidden="true">#</a> 2.1思路</h3><p>1.需要一个变量pre保存前驱结点。 2.编写非递归中序遍历的代码 3.因为弹出栈中的结点已经不再使用，所以可以直接修改它的指针，周而复始全部结点的指针都修改。就可已完成</p><p>修改指针思路： 一开始没有前驱结点，pre=null; 弹出结点的左指针指向前驱结点pro； 如果前驱结点不为空，前驱结点右指针指向当前结点（即从第二次开始生效）；</p><h3 id="_2-2代码" tabindex="-1"><a class="header-anchor" href="#_2-2代码" aria-hidden="true">#</a> 2.2代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">learn<span class="token punctuation">.</span>note<span class="token punctuation">.</span>algorithm<span class="token punctuation">.</span>binarytree</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author Wang WenLei
 * @Date 2022/3/13 11:38
 * @Version 1.0
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bm30_ConvertList</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> tree <span class="token operator">=</span> <span class="token class-name">CreateTree</span><span class="token punctuation">.</span><span class="token function">createTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TreeNode</span> convert <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>convert<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TreeNode</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> pRootOfTree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pRootOfTree <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TreeNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> pRootOfTree<span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pre<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                    cur<span class="token punctuation">.</span>left <span class="token operator">=</span> pre<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    head <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                    cur<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-递归实现" tabindex="-1"><a class="header-anchor" href="#_3-递归实现" aria-hidden="true">#</a> 3.递归实现</h2><h3 id="_3-1思路" tabindex="-1"><a class="header-anchor" href="#_3-1思路" aria-hidden="true">#</a> 3.1思路</h3><p>改成递归方式</p>`,21);function m(b,h){const a=l("router-link");return c(),o("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[e(a,{to:"#_0-题目"},{default:t(()=>[s("0. 题目")]),_:1})]),n("li",null,[e(a,{to:"#_1-准备"},{default:t(()=>[s("1.准备")]),_:1})]),n("li",null,[e(a,{to:"#_2-非递归解法"},{default:t(()=>[s("2.非递归解法")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_2-1思路"},{default:t(()=>[s("2.1思路")]),_:1})]),n("li",null,[e(a,{to:"#_2-2代码"},{default:t(()=>[s("2.2代码")]),_:1})])])]),n("li",null,[e(a,{to:"#_3-递归实现"},{default:t(()=>[s("3.递归实现")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_3-1思路"},{default:t(()=>[s("3.1思路")]),_:1})])])])])]),v])}const f=p(r,[["render",m],["__file","binarytree_convertlist.html.vue"]]);export{f as default};
