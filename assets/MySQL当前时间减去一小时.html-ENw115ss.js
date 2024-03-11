import{_ as a,o as n,c as s,a as e}from"./app-7rGY8hGP.js";const t={},l=e(`<h1 id="mysql当前时间减去一小时" tabindex="-1"><a class="header-anchor" href="#mysql当前时间减去一小时" aria-hidden="true">#</a> MySQL当前时间减去一小时</h1><h2 id="mysql-now-函数" tabindex="-1"><a class="header-anchor" href="#mysql-now-函数" aria-hidden="true">#</a> MySQL NOW() 函数</h2><p>在开始之前，我们先来了解一下MySQL中的NOW()函数。NOW()函数用于获取当前的日期和时间。它的使用非常简单，只需在查询中调用NOW()函数即可。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述代码将返回当前的日期和时间，例如：2024-01-26 15:57:32。</p><h2 id="减去一个小时" tabindex="-1"><a class="header-anchor" href="#减去一个小时" aria-hidden="true">#</a> 减去一个小时</h2><p>要在MySQL中减去一个小时，我们可以使用DATE_SUB函数。DATE_SUB函数用于对日期或时间进行减法操作。它接受三个参数：待减的日期或时间、减去的数量、以及要减去的单位。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>DATE_SUB<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> quantity unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>date：待减的日期或时间。</li><li>quantity：要减去的数量。</li><li>unit：要减去的单位，可以是YEAR、MONTH、DAY、HOUR、MINUTE或SECOND。</li></ul><p>下面是一个示例，用于获取当前时间并减去一个小时：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> DATE_SUB<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">HOUR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述代码将返回当前时间减去一个小时后的结果，例如：2024-01-26 14:57:32。</p><hr><p>#MYSQL函数</p>`,14),p=[l];function c(i,o){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","MySQL当前时间减去一小时.html.vue"]]);export{u as default};
