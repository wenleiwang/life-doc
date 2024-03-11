import{_ as s,r,o,c as i,b as t,e as h,w as d,d as a,a as l}from"./app-7rGY8hGP.js";const n={},c=t("h1",{id:"redis基础类型——hash-字典",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#redis基础类型——hash-字典","aria-hidden":"true"},"#"),a(" Redis基础类型——hash（字典）")],-1),p={class:"table-of-contents"},u=l('<h2 id="介绍基本概念" tabindex="-1"><a class="header-anchor" href="#介绍基本概念" aria-hidden="true">#</a> 介绍基本概念</h2><p>Redis的字典相当于Java语言里的HashMap，它是无序字典，内部存储了很多键值对。实现结构上与Java的HashMap也是一样的，都是“数组+链表”的二维结构，第一维hash的数组位置碰撞时，就会将碰撞的元素使用链表串接起来。</p><p>与Java不同地方是，Redis的字典值只能是字符串，他们的rehash方式不一样。</p><p>Java的HashMap在字典很大时，rehash是一个耗时的操作，需要一次性全部rehash</p><p>Redis为了追求高性能，不能堵塞服务，所以采用了渐进式rehash策略。</p><p>渐进式rehash会在rehash的同时，保留新旧两个hash结构，查询时会同时查两个hash结构，然后再后续的定时任务以及hash操作指令中，循序渐进地将旧hash的内容一点点迁移到新hash结构中。搬迁完成，就会使用新的hash结构取代旧的hash。</p><p>当hash移除最后一个元素之后，该数据结构被自动删除，内存被回收。</p><p>使用： hash结构可以存储用户信息，与字符串需要一次性全部序列化整个对象不同，hash可以对用户结构中的每个字段单独存储。 hash结构中单个key也可进行计数，使用hincrby</p><p>优点：</p><p>获取是可以进行部分获取。相比于以整个字符串形式去保存用户信息（一次只能全部读取），节省网络流量</p><p>hash缺点：</p><p>hash结构存储消耗要高于单个字符串</p><h2 id="命令与java方法对应关系" tabindex="-1"><a class="header-anchor" href="#命令与java方法对应关系" aria-hidden="true">#</a> 命令与Java方法对应关系</h2><p>Java方法基于redisTemplate.opsForList()。</p><table><thead><tr><th>命令</th><th>Java方法</th><th>描述</th></tr></thead><tbody><tr><td>HSET</td><td>put(object, key, value)</td><td>将哈希表 key 中的域 field 的值设为 value</td></tr><tr><td>HGET</td><td>get(object, key)</td><td>返回哈希表 key 中给定域 field 的值。</td></tr><tr><td>HKEYS</td><td>keys(object)</td><td>返回哈希表 key 中的所有域。</td></tr><tr><td>HVALS</td><td>values(object)</td><td>返回哈希表 key 中所有域的值</td></tr><tr><td>HGETALL</td><td>entries(object)</td><td>返回哈希表 key 中，所有的域和值</td></tr><tr><td>HEXISTS</td><td>hasKey(object, key)</td><td>查看哈希表 key 中，给定域 field 是否存在</td></tr></tbody></table><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如果用hash结构来缓存用户信息，该如何封装比较合适？</p>',17);function _(f,v){const e=r("router-link");return o(),i("div",null,[c,t("nav",p,[t("ul",null,[t("li",null,[h(e,{to:"#介绍基本概念"},{default:d(()=>[a("介绍基本概念")]),_:1})]),t("li",null,[h(e,{to:"#命令与java方法对应关系"},{default:d(()=>[a("命令与Java方法对应关系")]),_:1})]),t("li",null,[h(e,{to:"#问题"},{default:d(()=>[a("问题")]),_:1})])])]),u])}const k=s(n,[["render",_],["__file","usehash.html.vue"]]);export{k as default};
