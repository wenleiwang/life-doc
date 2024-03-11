import{_ as s,o as n,c as a,a as e}from"./app-7rGY8hGP.js";const t={},o=e(`<p>1, 首先我们要做的是连接服务器, 我们需要一个 SSH 客户端来连接, 我这边用的是 putty(文末附工具下载地址), 打开 putty 后输入服务器的 ip 地址点 open 就可以了, 然后输入用户名和密码 (鼠标右键是粘贴) 就进去到你的远程服务器了.</p><p>2, 安装 python, 安装过程遇到 Y/n 的一律输入 Y(按顺序执行下面命令):</p><p>yum install python-setuptools</p><p>3, 安装 pip, 依次执行下面几个命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://pypi.python.org/packages/source/p/pip/pip-1.3.1.tar.gz --no-check-certificate
tar -xzvf pip-1.3.1.tar.gz
cd pip-1.3.1
python setup.py install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4, 安装 Shadowsocks:</p><p>pip install shadowsocks</p><p>出现 Successfully installed shadowsocks-XXX 说明安装成功了</p><p>5, 按顺序执行下面命令, 在 / etc 目录下新建文件夹 &quot;shadowsocks&quot;, 然后在 shadowsocks 文件夹下新建文件 &quot;config.json&quot;:</p><p>输入完上面命令之后出现的页面, 就相当于 Windows 中的记事本. 最下一行提示我们当前这个文件是新建的.</p><p>在这个视图中有如下几个按键需要记住 &quot;i&quot;: 按键盘上的 i 键, 窗口最底下显示 &quot;insert&quot;, 表示当前文件可编辑.&quot;Esc&quot;: 编辑完之后按 Esc 退出编辑模式.&quot;:&quot;: 半角的冒号, 在非编辑模式下按键盘上的冒号(半角), 可以进入输入命令的模式.&quot;w&quot;: 在命令模式中输入 w 并回车, 窗口最下显示 &quot;written&quot;, 表示所做的更改已保存.&quot;q&quot;: 在命令模式中输入 q 并回车, 可以退出当前的编辑器.</p><p>config.JSON 的内容如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span><span class="token number">8388</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span><span class="token string">&quot;your_password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;server&quot;: 是你 Vultr 服务器的 ip 地址</p><p>&quot;server_port&quot; 和 &quot;password&quot; 可以根据自己的要求设定</p><p>如果需要同时开多个端口, config.JSON 的内容可以设置如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port_password&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;8888&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your_password1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;8889&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your_password2&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6, 执行以下命令启动 Shadowsocks:</p><p>ssserver -c /etc/shadowsocks/config.JSON -d start</p><p>如果停止 Shadowsocks 执行如下命令(此步不需要执行):</p><p>ssserver -c /etc/shadowsocks/config.JSON -d stop</p><p>7, 设置 Shadowsocks 开机自启动</p><p>执行下面的命令, 创建 shadowsocks.service 文件:</p><p>vi /etc/systemd/system/shadowsocks.service</p><p>shadowsocks.service 的内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=Shadowsocks
After=network.target
[Service]
Type=forking
PIDFile=/run/shadowsocks/server.pid
PermissionsStartOnly=true
ExecStartPre=/bin/mkdir -p /run/shadowsocks
ExecStartPre=/bin/chown root:root /run/shadowsocks
ExecStart=/usr/bin/ssserver --pid-file /var/run/shadowsocks/server.pid -c /etc/shadowsocks/config.JSON -d start
Restart=on-abort
User=root
Group=root
UMask=0027
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置文件权限:</p><p>chmod 755 /etc/systemd/system/shadowsocks.service</p><p>启动服务:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start shadowsocks
systemctl enable shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>三, Final</p><p>好了, 到此, 你的梯子已经搭好了, 你现在只要去下载 shadowsocks 的客户端填上 Config.JSON 中的 ip 地址, 端口号, 以及密码就可以了.</p><hr><p>#工具 #网络</p>`,34),p=[o];function i(r,c){return n(),a("div",null,p)}const u=s(t,[["render",i],["__file","搭建梯子-服务端.html.vue"]]);export{u as default};
