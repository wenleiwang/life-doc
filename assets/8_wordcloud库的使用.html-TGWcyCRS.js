import{_ as n,o as a,c as s,a as o}from"./app-7rGY8hGP.js";const e="/life-doc/assets/img_20231121-KHENOewx.png",t={},p=o(`<h1 id="词云库的使用" tabindex="-1"><a class="header-anchor" href="#词云库的使用" aria-hidden="true">#</a> 词云库的使用</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install wordcloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>wordcloud库把词云当做一个WordCloud对象，可以根据文本中词语出现的频率等参数绘制词云。绘制词云的形状、尺寸和颜色都可以设定。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>w <span class="token operator">=</span> wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span><span class="token punctuation">)</span>

wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">600</span><span class="token punctuation">)</span> <span class="token comment"># 默认宽度400px</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>height<span class="token operator">=</span><span class="token number">400</span><span class="token punctuation">)</span> <span class="token comment"># 默认高度200px</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>min_font_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># 默认4号</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>max_font_size<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment"># 默认根据高度自动调节</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>font_step<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 步进间隔，默认为1</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>font_path<span class="token operator">=</span><span class="token string">&quot;msyh.tcc&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 指定字体文件的路径，默认None，这里设置微软雅黑</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>max_words<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment"># 词云最大显示数量</span>
wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>stop_words<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;Python&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 词云排除词列表，不显示的单词列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><ul><li>w.generate(txt)：向WordCloud对象w中加载文本txt</li><li>w.to_file(filename)：将词云输出为图像文件，.png或.jpg格式</li></ul><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><ol><li>配置对象参数</li><li>加载词云文本</li><li>输出词云文件</li></ol><p><img src="`+e+`" alt=""></p><h2 id="设置指定形状" tabindex="-1"><a class="header-anchor" href="#设置指定形状" aria-hidden="true">#</a> 设置指定形状</h2><p>需要使用imread，把文件读取出来</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>form scipy<span class="token punctuation">.</span>misc improt imread
mk <span class="token operator">=</span> imread<span class="token punctuation">(</span><span class="token string">&quot;pic.png&quot;</span><span class="token punctuation">)</span>
w <span class="token operator">=</span> wordcloud<span class="token punctuation">.</span>WordCloud<span class="token punctuation">(</span>mask<span class="token operator">=</span>mk<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[p];function l(i,d){return a(),s("div",null,c)}const r=n(t,[["render",l],["__file","8_wordcloud库的使用.html.vue"]]);export{r as default};
