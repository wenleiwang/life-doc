import{_ as a,o as e,c as t,a as n}from"./app-7rGY8hGP.js";const o="/life-doc/assets/2457817a9332b2302e7a42e892245d1e-YsFanNuq.png",c={},r=n('<h1 id="beanfactory与factorybean的区别" tabindex="-1"><a class="header-anchor" href="#beanfactory与factorybean的区别" aria-hidden="true">#</a> BeanFactory与FactoryBean的区别</h1><nav class="table-of-contents"><ul></ul></nav><p>一直都说</p><p>BeanFactory是在 Spring 容器中配置并通过实例或静态工厂方法创建对象的 bean。</p><p>FactoryBean是管理Bean的仓库。</p><blockquote><p>可以通过FactoryBean获取它已经管理好的dean</p></blockquote><p>一直不太能理解，直到看到官网的这段话才恍然理解到原来就是字面的意思... （哈哈认知不到导致，看字面意思都看不懂）。</p><p>下面截图中“使用实例工厂方法进行实例化” DefaultServiceLocator进入到Spring就是一个BeanFactory啊。</p><p><img src="'+o+'" alt="image-20220422094651352"></p>',9),s=[r];function p(i,_){return e(),t("div",null,s)}const l=a(c,[["render",p],["__file","spring_beanfactoryorfactorybean.html.vue"]]);export{l as default};