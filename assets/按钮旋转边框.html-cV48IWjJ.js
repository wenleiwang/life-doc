import{_ as n,o as s,c as a,a as t}from"./app-7rGY8hGP.js";const p="/life-doc/assets/旋转3-NJSs7-bU.gif",e="/life-doc/assets/img_20240112_1-DDPRl5YE.png",o="/life-doc/assets/img_20240112_2-tkYs1eRc.png",c="/life-doc/assets/img_20240112_3-q6cZJAcS.png",i="/life-doc/assets/img_20240112_4-ncXx0NDT.png",l="/life-doc/assets/img_20240112_5-vgmehl0n.png",u="/life-doc/assets/旋转-ww3evNn5.gif",r="/life-doc/assets/旋转1-gelVBEdS.gif",k="/life-doc/assets/旋转2-yH4JRPX_.gif",d={},v=t('<h1 id="按钮旋转边框的实现" tabindex="-1"><a class="header-anchor" href="#按钮旋转边框的实现" aria-hidden="true">#</a> 按钮旋转边框的实现</h1><p>首先看下效果</p><p><img src="'+p+`" alt=""></p><p>基础准备</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>固定宽高比<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">       <span class="token selector">body</span> <span class="token punctuation">{</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
       <span class="token selector">button</span> <span class="token punctuation">{</span>  
          <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>  
          <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>  
          <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>  
          <span class="token property">color</span><span class="token punctuation">:</span> #0ebeff<span class="token punctuation">;</span>  
          <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  
          <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  
          <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>  
          <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  
          <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>  
          <span class="token property">outline</span><span class="token punctuation">:</span> 4px solid #fff<span class="token punctuation">;</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>  
          <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
  
       <span class="token selector">button::before</span> <span class="token punctuation">{</span>  
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
          <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
          <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #f40<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>  
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>边框按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给 <code>button</code> 加一个伪标签，效果如下</p><p><img src="`+e+`" alt=""></p><p>现在元素是覆盖上去的调整 <code>z-index</code> 顺序放在按钮的下面：<code>z-index: -2;</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button::before</span> <span class="token punctuation">{</span>  
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
	<span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
	<span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
	<span class="token property">background</span><span class="token punctuation">:</span> #f40<span class="token punctuation">;</span>  
	<span class="token property">z-index</span><span class="token punctuation">:</span> -2<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt=""></p><p>调整伪元素中心，位于左上角</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button::before</span> <span class="token punctuation">{</span>  
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
    <span class="token property">background</span><span class="token punctuation">:</span> #f40<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> -2<span class="token punctuation">;</span>  
    <span class="token comment">/* 调整伪元素中心，位于左上角 */</span>    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
    <span class="token property">right</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按钮设置溢出隐藏<code>overflow: hidden;</code>，效果如下。这个红色的就是旋转的边框</p><p><img src="`+c+'" alt=""></p><p>怎么是边框呢，下图解析。黄色的就是看到的边框，我们要找个东西把绿色部分盖住。让这个整个红色部分沿着左上角旋转起来，就成了。</p><p><img src="'+i+`" alt=""></p><p>先遮住，在写一个伪元素 <code>after</code>，调整覆盖层级为-1</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button::after</span> <span class="token punctuation">{</span>  
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
    <span class="token comment">/* css 变量*/</span>  
    <span class="token property">--w</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>  
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token property">background</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>  
    <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><p>写个动画让他动起来</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">button::before</span> <span class="token punctuation">{</span>  
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
    <span class="token property">background</span><span class="token punctuation">:</span> #f40<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> -2<span class="token punctuation">;</span>  
    <span class="token comment">/* 调整伪元素中心，位于左上角 */</span>    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
    <span class="token property">right</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
    <span class="token comment">/* 加一个动画 */</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotation 3s linear infinite<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> rotation</span> <span class="token punctuation">{</span>  
    <span class="token selector">to</span> <span class="token punctuation">{</span>  
       <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1turn<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放开button的溢出隐藏注释看下效果，现在效果是这样的</p><p><img src="`+u+'" alt=""></p><p>设置下 after 的形变原点<code>transform-origin: left top;</code></p><p><img src="'+r+'" alt=""></p><p>最终调整，把button的溢出隐藏注释放开、after的背景颜色调整成黑色、去掉button的外边框，效果如下</p><p><img src="'+k+`" alt=""></p><p>所有代码</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>固定宽高比<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">       <span class="token selector">body</span> <span class="token punctuation">{</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
       <span class="token selector">button</span> <span class="token punctuation">{</span>  
          <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>  
          <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>  
          <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>  
          <span class="token property">color</span><span class="token punctuation">:</span> #0ebeff<span class="token punctuation">;</span>  
          <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  
          <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  
          <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>  
          <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  
          <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>  
          <span class="token comment">/*outline: 4px solid #fff;*/</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>  
          <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>  
          <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
  
       <span class="token selector">button::before</span> <span class="token punctuation">{</span>  
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
          <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
          <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #f40<span class="token punctuation">;</span>  
          <span class="token property">z-index</span><span class="token punctuation">:</span> -2<span class="token punctuation">;</span>  
          <span class="token comment">/* 调整伪元素中心，位于左上角 */</span>          <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
          <span class="token property">right</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>  
          <span class="token comment">/* 设置形变原地 */</span>          <span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>  
          <span class="token property">animation</span><span class="token punctuation">:</span> rotation 1s linear infinite<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
  
       <span class="token selector">button::after</span> <span class="token punctuation">{</span>  
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
          <span class="token comment">/* css 变量*/</span>  
          <span class="token property">--w</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>  
          <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--w<span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>  
          <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>  
          <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>  
       <span class="token punctuation">}</span>  
  
       <span class="token atrule"><span class="token rule">@keyframes</span> rotation</span> <span class="token punctuation">{</span>  
          <span class="token selector">to</span> <span class="token punctuation">{</span>  
             <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1turn<span class="token punctuation">)</span><span class="token punctuation">;</span>  
          <span class="token punctuation">}</span>  
       <span class="token punctuation">}</span>  
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>  
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>边框按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),m=[v];function b(g,y){return s(),a("div",null,m)}const h=n(d,[["render",b],["__file","按钮旋转边框.html.vue"]]);export{h as default};
