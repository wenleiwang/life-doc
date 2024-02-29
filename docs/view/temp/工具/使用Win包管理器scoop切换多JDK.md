# 使用Win包管理器scoop切换多JDK

## 安装scoop

检查`$PSversionTable.PSVersion # has to be >= 5.1` 。检查版本是否大于等于5.1

![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281801292.png)

权限允许
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
![打算|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281801047.png)


执行如下命令会在当前目录下下载一个`install.ps1`的文件
`irm get.scoop.sh -outfile 'install.ps1'`
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281803217.png)


查看帮助`.\install.ps1 -?`
![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281803960.png)

自定义安装
`.\install.ps1 -ScoopDir 'D:\Scoop\bin' -ScoopGlobalDir 'D:\Scoop\pakges' -NoProxy`
![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281803199.png)
安装 Scoop 用的依赖软件
```
scoop install git # Scoop 依赖 git 安装软件
scoop install aria2 # aria2 多线程下载
```

查看帮助命令:

![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281803035.png)

## 安装不同版本JDK
搜索JDK有各个版本的JDK

![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281804987.png)


搜索到后，直接安装。报没有找到
根据[Java · ScoopInstaller/Scoop Wiki (github.com)](https://github.com/ScoopInstaller/Scoop/wiki/Java) 指引添加上java的bucket
```text
scoop bucket add java
```
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281804201.png)


再次尝试，时间卡在快凌晨估计网络问题，前两次失败，第三次成功

![image.png|950](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281804019.png)


查看下java版本

![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402281804330.png)

## 配合IDEA使用
使用一下指令查找JDK位置。默认情况下，where 搜索当前目录和 PATH 环境变量中指定的路径。
```
where.exe java

where.exe /r E:\ java
```
![image.png|650|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290946533.png)

打开IDEA查看，查看IDEA引入JDK ，这个1.8是使用scoop之前使用的1.8
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402291023383.png)


## 切换多个Java版本
[Home · ScoopInstaller/Java Wiki --- 首页 ·ScoopInstaller/Java 维基 (github.com)](https://github.com/ScoopInstaller/Java/wiki)

```
PS C:> scoop install oraclejdk
Installing 'oraclejdk' (12.0.2-10) [64bit]

PS C:> scoop install zulu6
Installing 'zulu6' (6.18.1.5) [64bit]

PS C:> scoop install openjdk10
Installing 'openjdk10' (10.0.1) [64bit]

PS C:> java -version
openjdk version "10.0.1" 2018-04-17
OpenJDK Runtime Environment (build 10.0.1+10)
OpenJDK 64-Bit Server VM (build 10.0.1+10, mixed mode)

PS C:> scoop reset zulu6
Resetting zulu6 (6.18.1.5).
Linking ~\scoop\apps\zulu6\current => ~\scoop\apps\zulu6\6.18.1.5

PS C:> java -version
openjdk version "1.6.0-99"
OpenJDK Runtime Environment (Zulu 6.18.1.5-win64) (build 1.6.0-99-b99)
OpenJDK 64-Bit Server VM (Zulu 6.18.1.5-win64) (build 23.77-b99, mixed mode)

PS C:> scoop reset oraclejdk

PS C:> java -version
java version "12.0.2" 2019-07-16
Java(TM) SE Runtime Environment (build 12.0.2+10)
Java HotSpot(TM) 64-Bit Server VM (build 12.0.2+10, mixed mode, sharing)
```

## 扩展 Bucket 的概念和使用
scoop 有 bucket 的概念，每个bucket 都像是一组套件的资料夹.

在安装 scoop 时就会预设安装 main bucket，里面应该预设就有一千多种常用套件，而 scoop 的搜索也是优先在本地已安装的 bucket 里面做搜索，如果本地的 bucket 搜索不到，才会到网络上其已知的 bucket 中做搜索。

![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290930771.png)

所以首先想要确认本地安装了哪些 bucket 就输入一下命令

```
scoop bucket list
```
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290931595.png)

如果想查询有哪些已知的 bucket（本地及远端） 就输入以下指令
```
scoop bucket known
```
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290933062.png)

但这个列表也行已过时，这时候需要输入更新scoop后，再做查询
```
scoop update
```
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290934970.png)

如果想要安装指定 bucket 到本地
```
scoop bucket add games
```
![image.png|650](https://img-life.oss-cn-beijing.aliyuncs.com/doc/202402290936342.png)

移除 bucket
```
scoop bucket rm games
```

bucket上榜目录
```
# 官方额外 bucket
scoop bucket add extras

# 宇宙第一 IDE
scoop bucket add JetBrains

# java
scoop bucket add java

# 国人自制的 bucket, 国产常用软件
scoop bucket add dorado https://github.com/h404bi/dorado
```

## 用 Scoop 安装软件
### 日常软件
```
scoop install extras/winrar # winrar 解压
scoop install dorado/utools # 快捷栏
scoop install extras/sublime-text # 文本编辑
scoop install dorado/snipaste-beta # 截图工具
scoop install extras/v2rayn # v2rayn
scoop install extras/everything # 搜索工具
scoop install extras/potplayer # 视频播放器
scoop install extras/bitwarden # bitwarden 密钥管理器
```
### 开发工具
```
scoop install extras/github # github desktop
scoop install dorado/redis-desktop-manager # redis 图形工具
scoop install JetBrains/IntelliJ-IDEA-Ultimate # IDEA
scoop install JetBrains/WebStorm # WebStorm
scoop install extras/vscode # vscode
```

### 命令行工具
```
scoop install sudo
scoop install vim
scoop install neofetch
```
开发环境
```
scoop install mysql
scoop install nodejs
scoop install java/ojdkbuild11
scoop install maven
```
锁定更新
```
### 开发环境建议 hold 住，平时不要更新

scoop hold mysql
scoop hold nodejs
scoop hold ojdkbuild11
scoop hold maven
scoop hold IntelliJ-IDEA-Ultimate
scoop hold WebStorm
scoop hold vscode
```

## 使用 Windows Terminal 命令行终端

Windows Terminal 经过多版本更新上了 Microsoft Store， 自带图形化设置界面及优化了很多功能, 更推荐直接从 Microsoft Store 安装。

## 分享软件
```
7zip 21.07 [main]  
aria2 1.36.0-1 [main]  
captura 8.0.0 [extras]  
ccleaner 5.89.9401 [extras]  
clash-for-windows 0.19.7 [dorado]  
dark 3.11.2 [main]  
dingtalk 6.3.25.1219101 [dorado]  
dismplusplus 10.1.1002.1 [extras]  
draw.io 16.5.1 [extras]  
ffmpeg 5.0 [main]  
git 2.35.0.windows.1 [main]  
github 2.9.6 [extras]  
gridea 0.9.2 [extras]  
innounp 0.50 [main]  
lessmsi 1.10.0 [main]  
marktext 0.16.3 [extras]  
neteasemusic 2.9.6.199543 [dorado]  
nodejs 17.4.0 [main]  
obs-studio 27.1.3 [extras]  
pandoc 2.17.0.1 [main]  
picgo 2.3.0 [dorado]  
potplayer 220106 [extras]  
qbittorrent 4.4.0 [extras]  
rufus 3.17 [extras]  
steam nightly-20200720 [extras]  
sublime-text 4-4126 [extras]  
sumatrapdf 3.3.3 [extras]  
trafficmonitor 1.82 [extras]  
typora 0.11.18 *hold* [extras]  
utools 2.5.2 [dorado]  
ventoy 1.0.64 [extras]  
wechat nightly-20201231 [dorado]  
xmind8 3.7.9 [extras]
```


---

> [Scoop——也许是Windows平台最好用的软件（包）管理器 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/463284082)
> 
> [Quick Start · ScoopInstaller/Scoop Wiki (github.com)](https://github.com/ScoopInstaller/Scoop/wiki/Quick-Start)


#JDK管理