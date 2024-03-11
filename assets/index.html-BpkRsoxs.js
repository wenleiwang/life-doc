import{_ as e,r as n,o as a,c as o,b as t,e as d,w as r,d as i,a as p}from"./app-7rGY8hGP.js";const u="/life-doc/assets/4b49c2b5336ce7be88924f66b783d782-sWCDXBuE.png",s={},c=t("h1",{id:"概述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),i(" 概述")],-1),g={class:"table-of-contents"},h=p('<p>Spring Cloud 是分布式微服务架构的一站式解决方案，它提供了一套简单易用的编程模型，使我们能在 Spring Boot 的基础上轻松地实现微服务系统的构建。</p><p>Spring Cloud 被称为构建分布式微服务系统的“全家桶”，它并不是某一门技术，而是一系列微服务解决方案或框架的有序集合。 它将市面上成熟的、经过验证的微服务框架整合起来，并通过 Spring Boot 的思想进行再封装，屏蔽调其中复杂的配置和实现原理， 最终为开发人员提供了一套简单易懂、易部署和易维护的分布式系统开发工具包。</p><p>Spring Cloud 中包含了 spring-cloud-config、spring-cloud-bus 等近 20 个子项目， 提供了服务治理、服务网关、智能路由、负载均衡、断路器、监控跟踪、分布式消息队列、配置管理等领域的解决方案。</p><h2 id="springcloud-netflix与springcloud-alibaba" tabindex="-1"><a class="header-anchor" href="#springcloud-netflix与springcloud-alibaba" aria-hidden="true">#</a> SpringCloud Netflix与SpringCloud Alibaba</h2><p>Spring Cloud 本身并不是一个拿来即可用的框架，它是一套微服务规范，共有两代实现。</p><ul><li>Spring Cloud Netflix 是 Spring Cloud 的第一代实现，主要由 Eureka、Ribbon、Feign、Hystrix 等组件组成。</li><li>Spring Cloud Alibaba 是 Spring Cloud 的第二代实现，主要由 Nacos、Sentinel、Seata 等组件组成。</li></ul><p><img src="'+u+'" alt=""></p><p>Nacos读音为/nɑ:kəʊs/ ，是Dynamic Naming and Configuration Service 的首字母简称；</p><p>Sentinel读音为，</p><h2 id="微服务架构和单体架构" tabindex="-1"><a class="header-anchor" href="#微服务架构和单体架构" aria-hidden="true">#</a> 微服务架构和单体架构</h2><p>在项目的初期，单体架构无论是在开发速度还是运维难度上都具有明显的优势。但随着业务复杂度的不断提高，单体架构的许多弊端也逐渐凸显出来，主要体现在以下 3 个方面：</p><ul><li>随着业务复杂度的提高，单体应用（采用单体架构的应用程序）的代码量也越来越大，导致代码的可读性、可维护性以及扩展性下降。</li><li>随着用户越来越多，程序所承受的并发越来越高，而单体应用处理高并发的能力有限。</li><li>单体应用将所有的业务都集中在同一个工程中，修改或增加业务都可能会对其他业务造成一定的影响，导致测试难度增加。</li></ul><h2 id="spring-cloud常用组件" tabindex="-1"><a class="header-anchor" href="#spring-cloud常用组件" aria-hidden="true">#</a> Spring Cloud常用组件</h2><table><thead><tr><th>Spring Cloud组件</th><th>描述</th></tr></thead><tbody><tr><td>Spring Cloud Netflix Eureka</td><td>Spring Cloud Netflix 中的服务治理组件，包含服务注册中心、服务注册与发现机制的实现</td></tr><tr><td>Spring Cloud Netflix Ribbon</td><td>Spring Cloud Netflix 中的服务调用和客户端负载均衡的组件</td></tr><tr><td>Spring Cloud Netflix Hystrix</td><td>Spring Cloud Netflix的容错管理器，为服务中心出现的延迟和故障提供强大的容错能力</td></tr><tr><td>Spring Cloud Netflix Feign</td><td>基于Ribbon和Hystrix的声明式服务调用组件</td></tr><tr><td>Spring Cloud Netflix Zuul</td><td>Spring Cloud Netflix 中的网关组件，提供了智能路由、访问过滤等功能</td></tr><tr><td>Spring Cloud Gatewagy</td><td>一个基于Spring 5.0，Spring Boot2.0和Project Reactor等技术的网关框架，它使用Filter链方式提供了网关的基本功能，例如安全、监控/指标和限流等</td></tr><tr><td>Spring Cloud Config</td><td>Spring Cloud的配置管理工具，支持Git存储配置内容，实现应用配置的外部化存储，并支持在客户端对配置进行刷新、加密、解密等操作</td></tr><tr><td>Spring Cloud Bus</td><td>Spring Cloud的事件和消息总线，主要用于在集群中传播或状态变化，以触发后续的处理，例如动态刷新配置</td></tr><tr><td>Spring Cloud Stream</td><td>Spring Cloud的消息中间件，它集成了Apache Kafka和Rabbit MQ等消息中间件，并通过定义绑定器作为中间层，完美地实现了应用程序与消息中间件之间的隔离。通过向应用程序暴露同意的Channel通道，使得应用程序不需要再考虑各种不同的消息中间件实现，就能轻松的发送和接收消息。</td></tr><tr><td>Spring Cloud Sleuth</td><td>Spring Cloud分布式链路跟踪组件，能够完美的整合Twitter的Zipkin</td></tr></tbody></table><h2 id="分布式事务如何处理-怎么保证事务的一致性" tabindex="-1"><a class="header-anchor" href="#分布式事务如何处理-怎么保证事务的一致性" aria-hidden="true">#</a> 分布式事务如何处理？怎么保证事务的一致性？</h2><h3 id="什么是分布式事务" tabindex="-1"><a class="header-anchor" href="#什么是分布式事务" aria-hidden="true">#</a> 什么是分布式事务</h3><p>就是要将不同节点上的事务操作，提供操作原子性保证，同时成功或同时失败。</p><p>分布式第一个要点：要在原本没有直接关联的事务之间建立联系</p><ol><li>HTTP连接：最大努力通知，要加事后补偿。最终一致性</li><li>MQ，事务消息机制</li><li>Redis</li><li>Seata：是通过TC来在多个事务之间建立联系</li></ol><p>Seata</p><p>两阶段：AT、XA 就在于要锁资源</p><p>三阶段：TCC 在两阶段基础上增加一个准备阶段，在准备阶段是不锁资源的</p><p>SAGA模式：类似于熔断。业务自己实现正向操作和补偿操作的逻辑</p>',23);function S(C,f){const l=n("router-link");return a(),o("div",null,[c,t("nav",g,[t("ul",null,[t("li",null,[d(l,{to:"#springcloud-netflix与springcloud-alibaba"},{default:r(()=>[i("SpringCloud Netflix与SpringCloud Alibaba")]),_:1})]),t("li",null,[d(l,{to:"#微服务架构和单体架构"},{default:r(()=>[i("微服务架构和单体架构")]),_:1})]),t("li",null,[d(l,{to:"#spring-cloud常用组件"},{default:r(()=>[i("Spring Cloud常用组件")]),_:1})]),t("li",null,[d(l,{to:"#分布式事务如何处理-怎么保证事务的一致性"},{default:r(()=>[i("分布式事务如何处理？怎么保证事务的一致性？")]),_:1}),t("ul",null,[t("li",null,[d(l,{to:"#什么是分布式事务"},{default:r(()=>[i("什么是分布式事务")]),_:1})])])])])]),h])}const x=e(s,[["render",S],["__file","index.html.vue"]]);export{x as default};
