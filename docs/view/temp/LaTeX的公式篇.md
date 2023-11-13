# LaTeX的公式篇
[[toc]]

LaTeX，始于公式，忠于优雅...

很长一段时间，数学公式的编辑都是采用MathType解决的，但是直到我遇到了LaTeX的公式便一见倾心、久久不能释怀…

## 简介

相信很多做学术的科研狗应该都是听过LaTeX排版写出来的Paper是多么的好看，颜值高。其实LaTeX简单来说就是一种文字处理软件/计算机标记语言。本文作为入门教程，不去过多解释其家族TeX、LaTeX、CTeX等等之间的伦理关系。一方面，用过Word的人都知道，排版的时间有的时候比写一篇文章的时间还长。更有甚者会遇到一些无解的玄学问题；另一方面，对于很多顶级期刊、会议对于投稿论文格式明确要求是LaTeX，拒收Word格式

LaTeX，作为广义上的计算机标记语言（比如HTML），它继承了计算机语言的光荣传统，通过一些简单的代码表达出精确的含义，具有不二义性。其文章排版的结果可以完全按照你的想法来，不仅解决了玄学问题，渲染出来的文章优美；同时，其还可以通过简单的语法写出优雅高贵的数学公式，目前Markdown也已经支持LaTeX语法的公式

## 数学模式

在LaTeX数学模式中，公式有两种形式——行内公式和行间公式。前者公式嵌入在行内，适用于简单短小的公式；后者居中独占一行，适用于比较长或重要的公式。公式中的空格均会被忽略，可以使用命令\quad或\qquad实现
在行间公式中，命令\tag{n}可以进行手动编号

**行内公式，单个$包裹**

```
f(x) = a+b 
```

![image-20230919173134741](img/LaTeX的公式篇/fb9a82d1e4366af57bc6f74f0fad8331.png)

**行间公式，两个$包裹**

```
f(x) = a+b
```

![image-20230919173153143](img/LaTeX的公式篇/a40dcdf42ca770df6bad7936d9e513f3.png)



**手动编号**

```
f(x) = a - b \tag{1.1}
```

![image-20230919173422503](img/LaTeX的公式篇/f1b82935d212ac9b8f7369b8153ed7da.png)

## 数学结构

### 简单运算

拉丁字母、阿拉伯数字和 +-*/= 运算符均可以直接输入获得，命令\cdot表示乘法的圆点，命令\neq表示不等号，命令\equiv表示恒等于，命令\bmod表示取模

```
x+2-3*4/6=4/y + x\cdot y
```

![image-20230919173325708](img/LaTeX的公式篇/05d5a527480d5c77e2ad3b05101f7c60.png)



```
0 \neq 1 \quad x \equiv x \quad 1 = 9 \bmod 2
```

![image-20230919173450752](img/LaTeX的公式篇/d57d2ef7a4eb1de5844a814dce1be888.png)





```
\ln2*\lg2*\log2
```

![image-20230919173521748](img/LaTeX的公式篇/bff6ec33f9451cf6d8076d924f19e247.png)

### 分子分母

二分之一的表达

```
\frac{1}{2}
```

![image-20230919173555184](img/LaTeX的公式篇/b86e50b956ee9e6da8892dadd68846d3.png)

### 上下标

语法_表示下标、^表示上标，但上下标内容不止一个字符时，需用大括号括起来。单引号'表示求导

```
a_{ij}^{2} + b^3_{2}=x^{t} + y' + x''_{12}
```

![image-20230919173630896](img/LaTeX的公式篇/6b4b882792f99a2528da082f863b1bf4.png)

### 根号、分式

命令：\sqrt表示平方根，\sqrt[n]表示n次方根，\frac表示分式

```
\sqrt{x} + \sqrt{x^{2}+\sqrt{y}} = \sqrt[3]{k_{i}} - \frac{x}{m}
```

![image-20230919173651569](img/LaTeX的公式篇/001ebbc411df3411fea1d7e91317f6cc.png)

### 上下标记

命令：\overline, \underline 分别在表达式上、下方画出水平线

```
\overline{x+y} \qquad \underline{a+b}
```

![image-20230919173723818](img/LaTeX的公式篇/9400dcebdb944492d45b2e8888e1c06b.png)

命令：\overbrace, \underbrace 分别在表达式上、下方给出一个水平的大括号

```
\overbrace{1+2+\cdots+n}^{n个} \qquad \underbrace{a+b+\cdots+z}_{26}
```

![image-20230919173744189](img/LaTeX的公式篇/6cec6d6029e8467df37212fa08545d90.png)

### 向量

命令：\vec表示向量，\overrightarrow表示箭头向右的向量，\overleftarrow表示箭头向左的向量

```
\vec{a} + \overrightarrow{AB} + \overleftarrow{DE}
```

![image-20230919173801143](img/LaTeX的公式篇/e7292008a9477c295a1a03b8cecd3a3f.png)

### 积分、极限、求和、乘积

命令：\int表示积分，\lim表示极限， \sum表示求和，\prod表示乘积，^、_表示上、下限

```
\lim_{x \to \infty} x^2_{22} - \int_{1}^{5}x\mathrm{d}x + \sum_{n=1}^{20} n^{2} = \prod_{j=1}^{3} y_{j}  + \lim_{x \to -2} \frac{x-2}{x}
```

![image-20230919173818471](img/LaTeX的公式篇/80557678f3fe0dd32510bed4546e54c9.png)

### 三圆点

命令：\ldots点位于基线上，\cdots点设置为居中，\vdots使其垂直，\ddots对角线排列

```
x_{1},x_{2},\ldots,x_{5}  \quad x_{1} + x_{2} + \cdots + x_{n}
```

![image-20230919173839091](img/LaTeX的公式篇/5e62df210e55e391b4b9432254666dda.png)

### 重音符号

常用命令如下：

```
\hat{x}
```

![image-20230919173907233](img/LaTeX的公式篇/0e3fb59041ccd5c5b55607830bea974e.png)

```
\bar{x}
```

![image-20230919173921002](img/LaTeX的公式篇/b95c1158755252867f259cbd37199a9c.png)

```
\tilde{x}
```

![image-20230919173946591](img/LaTeX的公式篇/a6efee3f275d97193b77da30b2bb45cb.png)

### 矩阵

其采用矩阵环境实现矩阵排列，常用的矩阵环境有matrix、bmatrix、vmatrix、pmatrix，其区别为在于外面的括号不同：

![image-20230919174032363](img/LaTeX的公式篇/ae951f18146ef594c7439c9b80e5e39a.png)

下列代码中，&用于分隔列，\用于分隔行

```
\begin{bmatrix} 1 & 2 & \cdots \\ 67 & 95 & \cdots \\ \vdots  & \vdots & \ddots \\ \end{bmatrix}
```

![image-20230919174053396](img/LaTeX的公式篇/7ce4049ac42a1de0bc514a033dff9794.png)

### 希腊字母

希腊字母无法直接通过美式键盘输入获得。在LaTeX中通过反斜杠\加上其字母读音实现，将读音首字母大写即可输入其大写形式，详见下表

```
\alpha^{2} + \beta = \Theta
```

![image-20230919174154334](img/LaTeX的公式篇/5215ea975168784deb993e72d1329e0b.png)

![image-20230919174221195](img/LaTeX的公式篇/2f7f18d4ea03683a05d859dbad518412.png)

![image-20230919174240154](img/LaTeX的公式篇/74a3895b66ce6627b08f1f3f5d4cb895.png)

![image-20230919174258989](img/LaTeX的公式篇/d90ade52c963f3beeccb57f5d4e514be.png)

箭头的英文是“arrow”，最常见的箭头不外乎向左、右、上、下四个方向，那么它们的关键词刚好就是leftarrow,rightarrow,uparrow,downarrow。

\xleftarrow[下方公式]{上方公式}

和

\xrightarrow[下方公式]{上方公式}

![image-20230919174321284](img/LaTeX的公式篇/fafe145c2d3c3647c8531d863ad88f51.png)

## 多行公式

### 公式组合

通过cases环境实现公式的组合，&分隔公式和条件，还可以通过\limits来让x→0位于lim的正下方而非默认在lim符号的右下方显示

```
D(x) = \begin{cases} \lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\ \pi, & x=3 \\ \int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\ \end{cases}
```

![image-20230919174359061](img/LaTeX的公式篇/1e1616a92bf0dbc74e1d1db147e4a11d.png)

### 拆分单个公式

通过split环境实现公式拆分

```
\begin{split} \cos 2x &= \cos^2x - \sin^2x \\ &=2\cos^2x-1 \end{split}
```

![image-20230919174434874](img/LaTeX的公式篇/110c792e78d53cb343df2dc83405f2ae.png)

---
#工具 #LateX #md #公式

完~