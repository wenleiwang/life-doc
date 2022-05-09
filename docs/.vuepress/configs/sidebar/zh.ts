import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/java/': [
    {
      text:'Java基础',
      collapsible: true,
      children :[
        '/java/base/javabasee.md',
        '/java/base/security.md',
        '/java/base/synchronized.md',
        '/java/base/integerInMapper.md',
        '/java/base/threadLocal.md'
      ]
    },
    {
      text:'Java9新特性',
      collapsible: true,
      children :[
        '/java/java9/',
        '/java/java9/onjvm.md'
      ]
    },
    {
      text:'Java10新特性',
      collapsible: true,
      children :[
        '/java/java10/'
      ]
    },
    {
      text:'Java11新特性',
      collapsible: true,
      children :[
        '/java/java11/'
      ]
    },
    {
      text:'Java12新特性',
      collapsible: true,
      children :[
        '/java/java12/'
      ]
    },
    {
      text:'Java13新特性',
      collapsible: true,
      children :[
        '/java/java13/'
      ]
    },
    {
      text:'Java14新特性',
      collapsible: true,
      children :[
        '/java/java14/'
      ]
    },
    {
      text:'Java15新特性',
      collapsible: true,
      children :[
        '/java/java15/'
      ]
    },
    {
      text:'Java16新特性',
      collapsible: true,
      children :[
        '/java/java16/'
      ]
    },
    {
      text:'Java17新特性',
      collapsible: true,
      children :[
        '/java/java17/'
      ]
    },
    {
      text:'Utils',
      collapsible: true,
      children :[
        '/java/utils/json/jackson.md',
      ]
    },
    {
      text:'servlet',
      collapsible: true,
      children :[
        '/java/servlet/',
      ]
    },
  ],
  '/spring/': [
    '/spring/springbootstart.md',
    '/spring/springioc.md',
    '/spring/springaop.md',
    '/spring/springevent.md',
    '/spring/springboot_refreshContext.md',
    '/spring/springlogging.md',
    '/spring/spring_autowire.md',
    '/spring/springdi.md',
    '/spring/ComponentScanAnnotationParser.md',
    '/spring/contentnegotiation.md',
    '/spring/beandifition.md',
    '/spring/springmvc_start.md',
    '/spring/spring_beanfactoryorfactorybean.md',
    '/spring/spring_circularDependecies.md',
    '/spring/spring_aware.md'
  ],
  '/mysql/': [
    '/mysql/interview.md',
  ],
  '/redis/': [
    {
      text:'Redis基础',
      collapsible: true,
      children :[
        '/redis/base/resume.md',
        '/redis/base/usestring.md'
      ]
    },
  ],
  '/rabbitmq/': [
    '/rabbitmq/mideng.md'
  ],
  '/algorithm/': [
    {
      text:'链表',
      collapsible: true,
      children :[
        '/algorithm/backlist.md',
        '/algorithm/isPail.md',
        '/algorithm/reverseBetween.md',
      ]
    },
    {
      text:'二叉树',
      collapsible: true,
      children :[
        '/algorithm/binarytree/binarytree_preorder.md',
        '/algorithm/binarytree/binarytree_inorder.md',
        '/algorithm/binarytree/binarytree_postorder.md',
        '/algorithm/binarytree/binarytree_levelorder.md',
        '/algorithm/binarytree/binarytree_snake.md',
        '/algorithm/binarytree/binarytree_maxdepth.md',
        '/algorithm/binarytree/binarytree_haspathsum.md',
        '/algorithm/binarytree/binarytree_convertlist.md',
        '/algorithm/binarytree/binarytree_mirror.md',
        '/algorithm/binarytree/binarytree_isValidBST.md',
        '/algorithm/binarytree/binarytree_isCompleteTree.md',
        '/algorithm/binarytree/binarytree_isBalanced.md',
        '/algorithm/binarytree/binarytree_lowestCommonAncestor.md',
        '/algorithm/binarytree/binarytree_lowestCommonAncestor2.md',
        '/algorithm/binarytree/binarytree_serialize.md',
        '/algorithm/binarytree/binarytree_reConstructBinaryTree.md',
        '/algorithm/binarytree/binartytree_solve.md',
      ]
    },
    {
      text:'堆/栈/队列',
      collapsible: true,
      children :[
        '/algorithm/innorheaporqueue/includeMain.md',
        '/algorithm/innorheaporqueue/isValidBracket.md'
      ]
    }
  ],
  '/temp/': [
    '/temp/interface.md',
    '/temp/jwt.md',
    '/temp/gitback.md',
    '/temp/calendar.md',
    '/temp/spel.md'
  ],
  '/python/': [
    '/python/base.md'
  ],
  '/english/': [
    '/english/grammar.md'
  ],
  '/note/': [
    '/note/20220305.md'
  ],
}