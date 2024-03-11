import{_ as o,r,o as i,c as h,b as e,d as a,e as t,a as n}from"./app-7rGY8hGP.js";const d="/life-doc/assets/img_20231122-3JwNhuTj.png",s={},c=n('<h1 id="python从数据处理到人工智能简介" tabindex="-1"><a class="header-anchor" href="#python从数据处理到人工智能简介" aria-hidden="true">#</a> Python从数据处理到人工智能简介</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><h2 id="对于数据分析" tabindex="-1"><a class="header-anchor" href="#对于数据分析" aria-hidden="true">#</a> 对于数据分析</h2><h3 id="数据分析基本库numpy" tabindex="-1"><a class="header-anchor" href="#数据分析基本库numpy" aria-hidden="true">#</a> 数据分析基本库Numpy</h3><p>用于表达N维数组</p><ul><li>使用C语言实现，使用python提供接口，计算速度优异</li><li>是Python数据分析及科学计算的基础库，比如支撑Pandas库等</li><li>提供直接的矩阵运算、广播函数、线性代数等功能</li></ul>',6),u={href:"http://www.numpy.org",target:"_blank",rel:"noopener noreferrer"},p=n('<p>==可以对数组直接进行运算==</p><h3 id="python数据分析高层级应用库pandas" tabindex="-1"><a class="header-anchor" href="#python数据分析高层级应用库pandas" aria-hidden="true">#</a> Python数据分析高层级应用库Pandas</h3><ul><li>提供了简单易用的数据结构和数分析工具</li><li>理解数据类型与索引的关系，操作索引即操作数据</li><li>基于Numpy开发</li></ul><p>提供两种数据结构</p><ul><li>Series = 索引 + 一维数据</li><li>DataFrame = 行列索引 + 二维数据</li></ul>',5),_={href:"http://pandas.pydata.org",target:"_blank",rel:"noopener noreferrer"},y=n('<p>==对一维数据和二维数据的一种表示==</p><h3 id="数学、科学和工程计算功能库scipy" tabindex="-1"><a class="header-anchor" href="#数学、科学和工程计算功能库scipy" aria-hidden="true">#</a> 数学、科学和工程计算功能库SciPy</h3><ul><li>提供了一批数学算法及工程数据运算功能</li><li>类似Matlab，可用于傅里叶变换、信号处理等应用</li><li>是Python最主要用于科学计算功能库，基于Numpy开发 <img src="'+d+'" alt=""></li></ul><h2 id="对于数据可视化" tabindex="-1"><a class="header-anchor" href="#对于数据可视化" aria-hidden="true">#</a> 对于数据可视化</h2><h3 id="高质量的二维数据可视化功能库matplotlib" tabindex="-1"><a class="header-anchor" href="#高质量的二维数据可视化功能库matplotlib" aria-hidden="true">#</a> 高质量的二维数据可视化功能库Matplotlib</h3><ul><li>提供了超过100种数据可视化展示效果</li><li>库展示效果非常多，所以子库也非常多</li><li>通过matplotlib.pyplot子库调用各可视化效果，可以理解为各可视化的快捷方式，它把所有有效的可视化展示方法汇聚到一个子库中</li><li>是Python最主要的数据库可视化库，基于Numpy开发</li></ul>',6),f={href:"http://matplotlib.org",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"统计类数据可视化功能库seaborn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#统计类数据可视化功能库seaborn","aria-hidden":"true"},"#"),a(" 统计类数据可视化功能库Seaborn")],-1),m=e("ul",null,[e("li",null,"提供了一批高层次的统计类数据可视化展示效果"),e("li",null,"主要展示数据间分布、分类和线性关系等内容"),e("li",null,"基于Matplotlib开发，支持Numpy和Pandas")],-1),g={href:"http://seaborn.pydata.org",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"三维科学数据可视化功能库mayavi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三维科学数据可视化功能库mayavi","aria-hidden":"true"},"#"),a(" 三维科学数据可视化功能库Mayavi")],-1),x=e("ul",null,[e("li",null,"提供了一匹简单易用的3D科学计算数据可视化展示效果"),e("li",null,"目前版本是Mayavi2，三维可视化最主要的第三方库"),e("li",null,"支持Numpy、TVTK、Traits、Envisage等第三方库")],-1),P={href:"http://docs.enthought.com/mayavi/mayavi/",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"python库文本处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python库文本处理","aria-hidden":"true"},"#"),a(" Python库文本处理")],-1),N=e("h3",{id:"处理pdf文件的工具集pypdf2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#处理pdf文件的工具集pypdf2","aria-hidden":"true"},"#"),a(" 处理PDF文件的工具集PyPDF2")],-1),v=e("ul",null,[e("li",null,"提供了一批处理PDF文件的计算功能"),e("li",null,"支持获取信息、分割/整合文件、加密解密等"),e("li",null,"完全Python实现，不需要额外依赖，功能稳定")],-1),q={href:"http://mstamy2.github.io/PyPDF2",target:"_blank",rel:"noopener noreferrer"},F=e("h3",{id:"自然语言文本处理第三方库nltk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自然语言文本处理第三方库nltk","aria-hidden":"true"},"#"),a(" 自然语言文本处理第三方库NLTK")],-1),M=e("ul",null,[e("li",null,"提供了一批简单易用的自然语言文本处理功能"),e("li",null,"支持语言分类、标记、语法句法、语义分析等"),e("li",null,"最优秀的Python自然语言处理库 形成一个树形结构，然后分析语句逻辑")],-1),T={href:"http://nltk.org/",target:"_blank",rel:"noopener noreferrer"},D=n('<h3 id="microsoft-word文件的第三方库" tabindex="-1"><a class="header-anchor" href="#microsoft-word文件的第三方库" aria-hidden="true">#</a> Microsoft Word文件的第三方库</h3><ul><li>其中最优秀的是Python-docx</li><li>提供创建和更新.doc、.docx等文件的计算功能</li><li>增加并配置段落、图片、表格、文字等，功能全面</li></ul><h2 id="python库机器学习" tabindex="-1"><a class="header-anchor" href="#python库机器学习" aria-hidden="true">#</a> Python库机器学习</h2><h3 id="机器学习方法工具集scikit-learn" tabindex="-1"><a class="header-anchor" href="#机器学习方法工具集scikit-learn" aria-hidden="true">#</a> 机器学习方法工具集Scikit-learn</h3><ul><li>提供一批统一化的机器学习方法功能接口</li><li>提供聚类、分类、回归、强化学习等计算功能</li><li>机器学习最基本且最优秀的Python第三方库</li></ul>',5),S={href:"http://scikit-learn.org",target:"_blank",rel:"noopener noreferrer"},V=e("h3",{id:"alphago背后的机器学习计算框架tensorflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#alphago背后的机器学习计算框架tensorflow","aria-hidden":"true"},"#"),a(" AlphaGo背后的机器学习计算框架TensorFlow")],-1),E=e("ul",null,[e("li",null,"谷歌公司推动的开源机器学习框架"),e("li",null,"将数据流图作为基础，图节点代表运算，边代表张量，进而形成机器学习的整体模式"),e("li",null,"应用机器学习方法的一种方式，支撑谷歌人工智能应用")],-1),L={href:"https://www.tensorflow.org/",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"深度学习计算框架mxnet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#深度学习计算框架mxnet","aria-hidden":"true"},"#"),a(" 深度学习计算框架MXNet")],-1),K=e("ul",null,[e("li",null,"提供可扩展的神经网络及深度学习计算功能"),e("li",null,"可用于自动驾驶、机器翻译、语音识别等众多领域"),e("li",null,"是Python最重要的深度学习计算框架")],-1);function C(I,j){const l=r("ExternalLinkIcon");return i(),h("div",null,[c,e("blockquote",null,[e("p",null,[e("a",u,[a("numpy官网：http://www.numpy.org"),t(l)])])]),p,e("blockquote",null,[e("p",null,[e("a",_,[a("Pandas官网：http://pandas.pydata.org"),t(l)])])]),y,e("blockquote",null,[e("p",null,[e("a",f,[a("Matplotlib官网地址：http://matplotlib.org"),t(l)])])]),b,m,e("blockquote",null,[e("p",null,[e("a",g,[a("Seaborn官网地址：http://seaborn.pydata.org"),t(l)])])]),k,x,e("blockquote",null,[e("p",null,[e("a",P,[a("Mayavi官网地址：http://docs.enthought.com/mayavi/mayavi/"),t(l)])])]),w,N,v,e("blockquote",null,[e("p",null,[e("a",q,[a("PyPDF2官网地址：http://mstamy2.github.io/PyPDF2"),t(l)])])]),F,M,e("blockquote",null,[e("p",null,[e("a",T,[a("NLTK官网地址：http://nltk.org/"),t(l)])])]),D,e("blockquote",null,[e("p",null,[e("a",S,[a("Scikit-learn官方网站：http://scikit-learn.org"),t(l)])])]),V,E,e("blockquote",null,[e("p",null,[e("a",L,[a("TensorFlow官方网站：https://www.tensorflow.org/"),t(l)])])]),B,K])}const G=o(s,[["render",C],["__file","3_python对于数据分析.html.vue"]]);export{G as default};
