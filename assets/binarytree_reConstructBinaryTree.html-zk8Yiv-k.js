import{_ as e,r as o,o as c,c as l,b as n,e as t,w as p,d as s,a as i}from"./app-7rGY8hGP.js";const u="/life-doc/assets/2339bb8109b5d3a4b238d03a2ad58b81-BDDZvC_4.png",r="/life-doc/assets/8e574d13955490bcd3ba78c98d58e5e5-9gub11JO.png",k={},d=n("h1",{id:"重建二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#重建二叉树","aria-hidden":"true"},"#"),s(" 重建二叉树")],-1),v={class:"table-of-contents"},m=i('<h2 id="_0-题目" tabindex="-1"><a class="header-anchor" href="#_0-题目" aria-hidden="true">#</a> 0.题目</h2><p>给定节点数为 n 的二叉树的前序遍历和中序遍历结果，请重建出该二叉树并返回它的头结点。 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。</p><p><img src="'+u+'" alt=""></p><p>提示: 1.vin.length == pre.length 2.pre 和 vin 均无重复元素 3.vin出现的元素均出现在 pre里 4.只需要返回根结点，系统会自动输出整颗树做答案对比 数据范围：n≤2000，节点的值 −10000≤val≤10000 要求：空间复杂度 O(n)，时间复杂度 O(n) 示例1 输入： [1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6] 返回值： {1,2,3,4,#,5,6,#,7,#,#,8} 说明： 返回根节点，系统会输出整颗二叉树对比结果，重建结果如题面图示<br> 示例2 输入： [1],[1] 返回值： {1} 示例3 输入： [1,2,3,4,5,6,7],[3,2,4,1,6,5,7] 返回值： {1,2,5,3,4,6,7}</p><h2 id="_1-思路" tabindex="-1"><a class="header-anchor" href="#_1-思路" aria-hidden="true">#</a> 1.思路</h2><p>根据中序遍历和前序遍历可以确定二叉树，具体过程为：</p><p>根据前序序列第一个结点确定根结点 根据根结点在中序序列中的位置分割出左右两个子序列 对左子树和右子树分别递归使用同样的方法继续分解 例如： 前序序列{1,2,3,4,5,6,7} = pre 中序序列{3,2,4,1,6,5,7} = in</p><ol><li>根据当前前序序列的第一个结点确定根结点，为 1</li><li>找到 1 在中序遍历序列中的位置，为 in[3]</li><li>切割左右子树，则 in[3] 前面的为左子树， in[3] 后面的为右子树</li><li>则切割后的左子树前序序列为：{3,2,4}，切割后的左子树中序序列为：{6,5,7}；切割后的右子树前序序列为：{2,3,4}，切割后的右子树中序序列为：{5,6,7}</li><li>对子树分别使用同样的方法分解</li></ol><p><img src="'+r+`" alt=""></p><h2 id="_2-代码" tabindex="-1"><a class="header-anchor" href="#_2-代码" aria-hidden="true">#</a> 2.代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> pre<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> vin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> pre<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>  <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vin <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> vin<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>  <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vin<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vin<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>vin<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>pre<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>vin<span class="token punctuation">,</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>vin<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(_,h){const a=o("router-link");return c(),l("div",null,[d,n("nav",v,[n("ul",null,[n("li",null,[t(a,{to:"#_0-题目"},{default:p(()=>[s("0.题目")]),_:1})]),n("li",null,[t(a,{to:"#_1-思路"},{default:p(()=>[s("1.思路")]),_:1})]),n("li",null,[t(a,{to:"#_2-代码"},{default:p(()=>[s("2.代码")]),_:1})])])]),m])}const y=e(k,[["render",b],["__file","binarytree_reConstructBinaryTree.html.vue"]]);export{y as default};
