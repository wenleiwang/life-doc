import{_ as d,r as c,o as r,c as n,b as e,e as t,w as s,d as i,a as o}from"./app-7rGY8hGP.js";const l="/life-doc/assets/9977e2e639ad8883fb7c1c7eae3478e5-yqE1Fqy1.png",m="/life-doc/assets/925f1bf085a936edb9b0c4c9f745c502-VGglmDAt.png",p="/life-doc/assets/a8048c8d8bbd5d64ef23550b3e10c43f-VgIS4AoH.png",u="/life-doc/assets/83dade4d5d46cd38a972c825df2cc601-7ZJLzHiJ.png",g="/life-doc/assets/853d06c70643b57c234e30667683a31e-SCD9qp_s.png",b="/life-doc/assets/adee28573ab9177a5558485fd1353cce-i_UDPFpX.png",h="/life-doc/assets/0f567fec600ec56e97f6b5f61a0c85d7-GUOa9Rmh.png",v="/life-doc/assets/3014cdf5091816ba946b96932a522060-hkIUgrGI.png",f="/life-doc/assets/d54ffe83d17f3bbc39eeece313181cf0-zoYQb4BQ.png",_="/life-doc/assets/c23c00c433f1d58243a71c71cacd7131-g8FRiNWi.png",x="/life-doc/assets/df0f27e1fdd946e2a3ae9e080de3b30a-gnOMCVbl.png",k="/life-doc/assets/79b3f6ce0b9a28818eec5b580e167aef-mwNaCua-.png",D="/life-doc/assets/a7fa468f7c6037c1bb6de271715e7efc-eaGpmnvr.png",E="/life-doc/assets/63b1ee2243e730fc8b9a2449d935f0ae-1EcUCCwl.png",A="/life-doc/assets/62203ab57cf912b6dca76c60fe921833-ogocoaK7.png",H="/life-doc/assets/60c4cb75e3690f6bb292decfd3d3c4d3-8jmPZIzp.png",q="/life-doc/assets/29e3f8cc51f6899768200a5d10fd2ae0-chFg2TMj.png",G="/life-doc/assets/d2bc0ddc37b0d9da88be23fa73e25f68-3XSNCROZ.png",w={},y=e("h1",{id:"git-reset与revert的区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-reset与revert的区别","aria-hidden":"true"},"#"),i(" git reset与revert的区别")],-1),C={class:"table-of-contents"},I=o('<h2 id="_0-基础知识铺垫" tabindex="-1"><a class="header-anchor" href="#_0-基础知识铺垫" aria-hidden="true">#</a> 0.基础知识铺垫</h2><p>搞懂了三个区域，才能更好理解这些Git命令是在干什么</p><ul><li>Workspace：工作区</li><li>Index / Stage：暂存区</li><li>Repository：仓库区（或本地仓库）（或版本库）</li></ul><p><img src="'+l+'" alt=""></p><p>左侧为工作区，右侧为版本库。</p><p>在版本库中标记为 &quot;index&quot; 的区域是暂存区（stage/index）</p><p>标记为 &quot;master&quot; 的是 master 分支所代表的目录树。</p><p>直观理解下 一个文件添加改动</p><p><img src="'+m+'" alt=""></p><p>感觉这里IDEA自动把文件使用了 <code>git add .</code>了 文件使用<code>git add .</code>会把文件放入暂存区</p><h2 id="_1-reset" tabindex="-1"><a class="header-anchor" href="#_1-reset" aria-hidden="true">#</a> 1. reset</h2><h3 id="reset命令的作用" tabindex="-1"><a class="header-anchor" href="#reset命令的作用" aria-hidden="true">#</a> reset命令的作用？</h3><p>reset命令把当前分支指向另外一个位置（提交的ID版本号），并且有选择性的变动暂存区和工作区的内容。</p><p>原理是基于本地仓库的文件去覆盖暂存区或工作区的内容</p><p>当执行 git reset HEAD 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。</p><h3 id="_3个" tabindex="-1"><a class="header-anchor" href="#_3个" aria-hidden="true">#</a> 3个</h3><p><img src="'+p+'" alt=""></p><ul><li><p>mixed（默认） 默认的时候，只有暂存区变化 soft参数告诉Git重置HEAD到另外一个commit，但也到此为止。如果你指定--soft参数，Git将停止在那里而什么也不会根本变化。这意味着stage(index),Workspace都不会做任何变化，所有的在original HEAD和你重置到的那个commit之间的所有变更集都放在stage(index)区域中。</p></li><li><p>hard参数 如果使用--hard参数，那么工作区也会变化</p></li><li><p>soft 如果使用--soft参数，那么暂存区和工作区都不会变化 mixed是reset的默认参数，也就是当你不指定任何参数时的参数。它将重置HEAD到另外一个commit,并且重置index以便和HEAD相匹配，但是也到此为止。Workspace不会被更改。所有该branch上从original HEAD（commit）到你重置到的那个commit之间的所有变更将作为local modifications保存在working area中，（被标示为local modification or untracked via git status)，但是并未staged的状态，你可以重新检视然后再做修改和commit</p></li></ul><h3 id="分别举例子" tabindex="-1"><a class="header-anchor" href="#分别举例子" aria-hidden="true">#</a> 分别举例子</h3><p>准备几个提交的分支，如下</p><p><img src="'+u+'" alt=""></p><h4 id="_1-soft-软的-暂存区和工作区都不会变化" tabindex="-1"><a class="header-anchor" href="#_1-soft-软的-暂存区和工作区都不会变化" aria-hidden="true">#</a> 1. soft 软的（暂存区和工作区都不会变化）</h4><p>这个不会变化是保持现在没有回滚前的文件不变 先针对4的提交进行回退使用<code>soft</code> 用IDE看下使用效果</p><p><img src="'+g+'" alt=""></p><p>点击<code>Soft</code>，后点击<code>Reset</code></p><p><img src="'+b+'" alt=""></p><p>发现，暂存区保留了回滚版本的代码，变成了待<code>commit</code>的状态（这个是跟版本库比较）</p><p><img src="'+h+'" alt=""></p><h4 id="_2-hard-硬的-暂存区和工作区都变化" tabindex="-1"><a class="header-anchor" href="#_2-hard-硬的-暂存区和工作区都变化" aria-hidden="true">#</a> 2. hard 硬的（暂存区和工作区都变化）</h4><p><img src="'+v+'" alt=""></p><p>步骤一致选择Hard</p><p><img src="'+f+'" alt=""></p><p>发现，任何本地的文件都回退，没有任何保留，直接到目标commit</p><h4 id="_3-mixed-混合的-只有暂存区变化" tabindex="-1"><a class="header-anchor" href="#_3-mixed-混合的-只有暂存区变化" aria-hidden="true">#</a> 3. mixed 混合的（只有暂存区变化）</h4><p><img src="'+_+'" alt=""></p><p>步骤一致选择Mixed</p><p><img src="'+x+'" alt=""></p><p>发现，暂存区保留了回滚版本的代码，变成了待<code>commit</code>的状态（这个是跟版本库比较）</p><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4><p>这么看来，Mixed和Soft好像没什么区别，其实不然。他们对Index和Workspace的影响不同</p><blockquote><p>详情查看：https://www.cnblogs.com/kidsitcn/p/4513297.html</p></blockquote><h2 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> revert</h2><p><code>revert</code>命令撤销指定的<code>commit</code>并且新建一个<code>commit</code>，新建<code>comment</code>的内容由指定<code>commit</code>前一个提交内容保持一致</p><p>一种情况：</p><p><img src="'+k+'" alt=""></p><p><img src="'+D+'" alt=""></p><p><img src="'+E+'" alt=""></p><p><img src="'+A+'" alt=""></p><p>再一种情况：</p><p><img src="'+H+'" alt=""></p><p>回滚到a6，看下b2是否还在</p><p><img src="'+q+'" alt=""></p><p>发现b2还在，表示不会影响到别的提交</p><p><img src="'+G+`" alt=""></p><h2 id="回滚大法" tabindex="-1"><a class="header-anchor" href="#回滚大法" aria-hidden="true">#</a> 回滚大法</h2><p>在使用Git的过程中，有时候会因为一些误操作，比如reset、rebase、merge等。特别是在Commit之后又执行了git reset --hard HEAD强制回滚本地记录以及文件到服务器版本，导致本地做的修改全部恢复到Git当前分支的服务器版本，同时自己的Commmit记录也消失了。碰到这种情况，不要慌，我们在Git上做的任何操作都只是在原来之前的操作上做修改，并且会被记录下来保存，也就是说无论你做了什么，对于Git来说都可以进行回滚操作。 你现在看git的历史记录，你可以看到两次提交：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log
* 98abc5a (HEAD, master) more stuff added to foo
* b7057a9 initial commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们来重置回第一次提交的状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git reset --hard b7057a9
$ git log
* b7057a9 (HEAD, master) initial commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这看起来我们是丢掉了我们第二次的提交，本地的修改也消失了，没有办法找回来了。 <strong>但是 reflog 就是用来解决这个问题的。简单的说，它会记录所有HEAD的历史，也就是说当你做 reset，checkout等操作的时候，这些操作会被记录在reflog中</strong> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git reflog
b7057a9 HEAD@{0}: reset: moving to b7057a9
98abc5a HEAD@{1}: commit: more stuff added to foo
b7057a9 HEAD@{2}: commit (initial): initial commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，我们要找回我们第二commit，只需要做如下操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git reset --hard 98abc5a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再来看一下 git 记录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log
* 98abc5a (HEAD, master) more stuff added to foo
* b7057a9 initial commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并某个分支上的单个commit" tabindex="-1"><a class="header-anchor" href="#合并某个分支上的单个commit" aria-hidden="true">#</a> 合并某个分支上的单个commit</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用git log或查git log --graph --pretty=oneline --abbrev-commit 查看提交的信息,记住commit id.

git checkout [branch-name] 切换到合并的分支
git cherry-pick &lt;commit-id&gt; 把某个commit id提交合并到当前分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dd2e86 - 946992 -9143a9 - a6fd86 - 5a6057 [master]
    \\
    76cada - 62ecb3 - b886a0 [feature]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，feature 分支上的commit 62ecb3 非常重要，它含有一个bug的修改，或其他人想访问的内容。无论什么原因，你现在只需要将62ecb3 合并到master，而不合并feature上的其他commits，所以我们用git cherry-pick命令来做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master  先切换到master分支
git cherry-pick 62ecb3  再使用cherry-pick命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在62ecb3 就被合并到master分支，并在master中添加了commit（作为一个新的commit）。cherry-pick 和merge比较类似，如果git不能合并代码改动（比如遇到合并冲突），git需要你自己来解决冲突并手动添加commit。</p><h2 id="合并某个分支上的一系列commits" tabindex="-1"><a class="header-anchor" href="#合并某个分支上的一系列commits" aria-hidden="true">#</a> 合并某个分支上的一系列commits</h2><p>在一些特性情况下，合并单个commit并不够，你需要合并一系列相连的commits。这种情况下就不要选择cherry-pick了，rebase 更适合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;newBranchName&gt; &lt;to-commit-id&gt;
创建一个新的分支，指明新分支的最后一个commit

git rebase --onto &lt;branchName&gt; &lt;from-commit-id&gt;
变基这个新的分支到最终要合并到的分支，指明从哪个特定的commit开始
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如： 还以上面的为例，假设你需要合并feature分支的commit 76cada ~62ecb3 到master分支。 首先需要基于feature创建一个新的分支，并指明新分支的最后一个commit：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b &lt;newbranch&gt; 62ecb3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，rebase这个新分支的commit到master（–onto master）。76cada^ 指明你想从哪个特定的commit开始。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase --onto master 76cada^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到的结果就是feature分支的commit 76cada ~62ecb3 都被合并到了master分支。</p><p>再合并的过程中可能出现冲突，出现冲突，必须手动解决后，然后 运行git rebase --continue。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>系统对冲突的提示：
fix conflicts and then run &quot;git rebase --continue&quot;
use &quot;git rebase --skip&quot; to skip this patch
use &quot;git rebase --abort&quot; to check out the original branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82);function N(S,V){const a=c("router-link");return r(),n("div",null,[y,e("nav",C,[e("ul",null,[e("li",null,[t(a,{to:"#_0-基础知识铺垫"},{default:s(()=>[i("0.基础知识铺垫")]),_:1})]),e("li",null,[t(a,{to:"#_1-reset"},{default:s(()=>[i("1. reset")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#reset命令的作用"},{default:s(()=>[i("reset命令的作用？")]),_:1})]),e("li",null,[t(a,{to:"#_3个"},{default:s(()=>[i("3个")]),_:1})]),e("li",null,[t(a,{to:"#分别举例子"},{default:s(()=>[i("分别举例子")]),_:1})])])]),e("li",null,[t(a,{to:"#revert"},{default:s(()=>[i("revert")]),_:1})]),e("li",null,[t(a,{to:"#回滚大法"},{default:s(()=>[i("回滚大法")]),_:1})]),e("li",null,[t(a,{to:"#合并某个分支上的单个commit"},{default:s(()=>[i("合并某个分支上的单个commit")]),_:1})]),e("li",null,[t(a,{to:"#合并某个分支上的一系列commits"},{default:s(()=>[i("合并某个分支上的一系列commits")]),_:1})])])]),I])}const B=d(w,[["render",N],["__file","gitback.html.vue"]]);export{B as default};