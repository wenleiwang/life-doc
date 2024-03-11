import{_ as e,r as o,o as c,c as l,b as n,e as t,w as p,d as s,a as u}from"./app-7rGY8hGP.js";const i={},k=n("h1",{id:"删除有序链表中重复的元素-二",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#删除有序链表中重复的元素-二","aria-hidden":"true"},"#"),s(" 删除有序链表中重复的元素（二）")],-1),r={class:"table-of-contents"},d=u(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>给出一个升序排序的链表，删除链表中的所有重复出现的元素，只保留原链表中只出现一次的元素。 例如： 给出的链表为1→2→3→3→4→4→5, 返回1→2→5.</p><p>给出的链表为1→1→1→2→3, 返回2→3.</p><p>数据范围：链表长度 0≤n≤10000，链表中的值满足 val∣≤1000</p><p>要求：空间复杂度 O(n)，时间复杂度 O(n)</p><p>进阶：空间复杂度 O(1)，时间复杂度 O(n)</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="使用hash表-o-n" tabindex="-1"><a class="header-anchor" href="#使用hash表-o-n" aria-hidden="true">#</a> 使用Hash表，O(n)</h3><ol><li>使用Hash表来判断存在元素的个数，如果超过1就放弃节点</li><li>循环技巧，有头节点的链表使用<code>cur.next != null</code>来作为while的结束条件。</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>因为头有可能也需要去掉，所以在前面拼接一个头结节点</p></div><p>循环技巧优点：可以方便的去掉当前节点的下一个节点。因为本身保存着节点而又已知下一个节点必然不会空，可以放心使用一下个节点的next</p><div class="custom-container warning"><p class="custom-container-title">这里引发了一个思考</p><p><code>while(cur.next != null){cur = cur.next;}</code>与<code>while(cur != null){cur = cur.next;}</code>的区别</p><p>共同点：</p><ol><li>cur代表的都是当前节点</li><li>都能正常完整的遍历链表全部节点</li></ol><p>差异：</p><ol><li>以<code>cur.next != null</code>为判断条件时，能方便的操作删除当前节点的下一个节点；能判断当前节点与下一个节点的关、</li><li>以<code>cur != null</code>为判断条件时，链表能为空</li></ol></div><h3 id="不使用hash表-o-1" tabindex="-1"><a class="header-anchor" href="#不使用hash表-o-1" aria-hidden="true">#</a> 不使用Hash表，O(1)</h3><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h2><h3 id="使用hash表-o-n-1" tabindex="-1"><a class="header-anchor" href="#使用hash表-o-n-1" aria-hidden="true">#</a> 使用Hash表，O(n)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> deleteDuplicates <span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>val<span class="token punctuation">,</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>val<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            next <span class="token operator">=</span> next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        next <span class="token operator">=</span> res<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                next<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                next <span class="token operator">=</span> next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不使用hash表" tabindex="-1"><a class="header-anchor" href="#不使用hash表" aria-hidden="true">#</a> 不使用Hash表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> deleteDuplicates <span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> res<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function v(m,h){const a=o("router-link");return c(),l("div",null,[k,n("nav",r,[n("ul",null,[n("li",null,[t(a,{to:"#描述"},{default:p(()=>[s("描述")]),_:1})]),n("li",null,[t(a,{to:"#解题思路"},{default:p(()=>[s("解题思路")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#使用hash表-o-n"},{default:p(()=>[s("使用Hash表，O(n)")]),_:1})]),n("li",null,[t(a,{to:"#不使用hash表-o-1"},{default:p(()=>[s("不使用Hash表，O(1)")]),_:1})])])]),n("li",null,[t(a,{to:"#实现代码"},{default:p(()=>[s("实现代码")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#使用hash表-o-n-1"},{default:p(()=>[s("使用Hash表，O(n)")]),_:1})]),n("li",null,[t(a,{to:"#不使用hash表"},{default:p(()=>[s("不使用Hash表")]),_:1})])])])])]),d])}const x=e(i,[["render",v],["__file","deleteDuplicates.html.vue"]]);export{x as default};