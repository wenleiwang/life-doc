import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/java/': [
    {
      text:'Java基础',
      collapsible: true,
      children :[
        '/java/base/javabasee.md',
        '/java/base/HashMap.md',
        '/java/base/ConcurrentMap.md',
        '/java/base/interfaceandabstract.md',
        '/java/base/inclass.md',
        '/java/base/thread.md',
        '/java/base/threadpool.md',
        '/java/base/lock.md',
        '/java/base/synchronized.md',
        '/java/base/reflew.md',
        '/java/base/integerInMapper.md',
        '/java/base/threadLocal.md',
        '/java/base/proxy.md',
        '/java/base/callback.md',
        '/java/base/security.md',
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
        '/java/servlet/Servlet.md',
        '/java/servlet/ServletConfigAndContext.md',
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
    '/spring/spring_circularDependecies.md',
    '/spring/ComponentScanAnnotationParser.md',
  
    '/spring/spring_beanfactoryorfactorybean.md',
    '/spring/spring_aware.md',
    '/spring/spring_transaction.md',
    {
      text:'Spring MVC',
      collapsible: true,
      children :[
        '/spring/springmvc_start.md',
        '/spring/contentnegotiation.md',
      ]
    },
    {
      text:'Spring小知识点',
      collapsible: true,
      children :[
        '/spring/replenish/InstantiationAwareBeanPostProcessor.md',
        '/spring/replenish/beandefinition.md',
      ]
    }
  ],
  '/mysql/': [
    '/mysql/interview.md',
    '/mysql/transaction.md',
    {
      text:'Java使用MySQL',
      collapsible: true,
      children :[
        '/mysql/use/jdbc.md',
      ]
    }
  ],
  '/redis/': [
    {
      text:'Redis基础',
      collapsible: true,
      children :[
        '/redis/base/resume.md',
        '/redis/base/usestring.md',
        '/redis/base/uselist.md',
        '/redis/base/usehash.md',
        '/redis/base/usezset.md',
      ]
    },
    {
      text:'Redis使用',
      collapsible: true,
      children :[
        '/redis/use/distributedLock.md',
        '/redis/use/uselist.md',
        '/redis/use/bloomFilter.md',
        '/redis/use/useHyperLogLog.md',
        '/redis/use/useLimit.md',
      ]
    },
    {
      text:'Redis集群',
      collapsible: true,
      children :[
        '/redis/cluster/masterSlaveSync.md',
        '/redis/cluster/sentinel.md',
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
        '/algorithm/list/backlist.md',
        '/algorithm/list/isPail.md',
        '/algorithm/list/reverseBetween.md',
        '/algorithm/list/mergeKLists.md',
        '/algorithm/list/hasCycle.md',
        '/algorithm/list/EntryNodeOfLoop.md',
        '/algorithm/list/FindKthToTail.md',
        '/algorithm/list/removeNthFromEnd.md',
        '/algorithm/list/FindFirstCommonNode.md', 
        '/algorithm/list/addInList.md', 
        '/algorithm/list/deleteDuplicates.md', 
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
      text:'哈希/堆/栈/队列',
      collapsible: true,
      children :[
        '/algorithm/innorheaporqueue/includeMain.md',
        '/algorithm/innorheaporqueue/isValidBracket.md',
        '/algorithm/innorheaporqueue/twoSum.md',
        '/algorithm/innorheaporqueue/MoreThanHalfNum.md',
        '/algorithm/innorheaporqueue/FindNumsAppearOnce.md',
        '/algorithm/innorheaporqueue/minNumberDisappeared.md ',
      ]
    },
    {
      text: '字符串和数组',
      collapsible: true,
      children :[
        '/algorithm/string/judge.md',
        '/algorithm/string/solve.md',
        '/algorithm/string/merge.md',
      ]
    },
    {
      text: '递归/回溯',
      collapsible: true,
      children :[
        '/algorithm/recursion/solve.md',
        '/algorithm/recursion/Permutation.md',
        '/algorithm/recursion/Nqueen.md',
        '/algorithm/recursion/generateParenthesis.md',
      ]
    }
  ],
  '/temp/': [
    '/temp/interface.md',
    '/temp/jwt.md',
    '/temp/gitback.md',
    '/temp/calendar.md',
    '/temp/spel.md',
    '/temp/learndockerfile.md'
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