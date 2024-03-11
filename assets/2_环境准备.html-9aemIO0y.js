import{_ as n,o as s,c as a,a as t}from"./app-7rGY8hGP.js";const p={},e=t(`<h1 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h1><h2 id="什么是pytorch" tabindex="-1"><a class="header-anchor" href="#什么是pytorch" aria-hidden="true">#</a> 什么是PyTorch？</h2><p>是一个机器学习的框架，把一些高位矩阵运算（Tensor）使用GPU做加速运算。把神经网络的梯度计算进行了封装。</p><p>第一步：加载数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Dataset

torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data<span class="token punctuation">.</span>DataLoader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Tensors</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 得到维度使用</span>
<span class="token punctuation">.</span>shape<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 创建一个Tensors</span>
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>from_numpy<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 内容都是0或1</span>
x <span class="token operator">=</span> torch<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
x <span class="token operator">=</span> troch<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 一些处理方法</span>
<span class="token comment"># 加</span>
<span class="token comment"># 减</span>
<span class="token comment"># 求和</span>
x<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># mean</span>
<span class="token comment"># power</span>

<span class="token comment"># 转置，第0个维度和第一个维度互换</span>
x<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 削平</span>
x<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># 填充一个维度</span>
x<span class="token punctuation">.</span>unsqueeze<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 合并</span>
torch<span class="token punctuation">.</span>cat<span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 使用计算环境为CPU</span>
x<span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">&#39;cpu&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 使用计算环境为GPU</span>
x<span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">&#39;cuda&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 判断电脑有NVIDIA GPU</span>
torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>pytorch官方文档：https://pytorch.org/docs/stable/tensors.html</p></blockquote>`,8),c=[e];function o(u,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","2_环境准备.html.vue"]]);export{r as default};
