import type { SidebarConfig } from '@vuepress/theme-default'
import {path} from "@vuepress/utils";
import { sideBarTool } from '../utils'

//导入生成侧边栏的工具类
// const { sideBarTool } = require(path.join(__dirname, '../utils/index.js'))

// 需要排除的一些目录
let unDirIncludes = ['node_modules', 'assets', 'public', '网络工程','dest','img']
// 只需要处理后缀的文件类型
let SuffixIncludes = ['md', 'html']
//使用方法生生成侧边栏
// 侧边栏
const rootPath = path.dirname(path.resolve(__dirname, '../../')) + '/view'
console.log('rootPath',rootPath)
let sidebar = sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {})


console.log('最终生成：',sidebar)
export const zh: SidebarConfig = sidebar

// export const zh: SidebarConfig = {
//   '/java/': [
//     {
//       text:'Java基础',
//       collapsible: true,
//       children :[
//         '/java/base/javabasee.md',
//         '/java/base/HashMap.md',
//         '/java/base/ConcurrentMap.md',
//         '/java/base/interfaceandabstract.md',
//         '/java/base/inclass.md',
//         '/java/base/thread.md',
//         '/java/base/threadpool.md',
//         '/java/base/lock.md',
//         '/java/base/synchronized.md',
//         '/java/base/reflew.md',
//         '/java/base/integerInMapper.md',
//         '/java/base/threadLocal.md',
//         '/java/base/proxy.md',
//         '/java/base/callback.md',
//         '/java/base/security.md',
//       ]
//     },
//     {
//       text:'Java各版本特性',
//       collapsible: true,
//       children :[
//         '/java/featrue/java9.md',
//         '/java/featrue/onjvm.md',
//         '/java/featrue/java10.md',
//         '/java/featrue/java11.md',
//         '/java/featrue/java12.md',
//         '/java/featrue/java13.md',
//         '/java/featrue/java14.md',
//         '/java/featrue/java15.md',
//         '/java/featrue/java16.md',
//         '/java/featrue/java17.md',
//       ]
//     },
//     {
//       text:'Utils',
//       collapsible: true,
//       children :[
//         '/java/utils/json/jackson.md',
//       ]
//     },
//     {
//       text:'servlet',
//       collapsible: true,
//       children :[
//         '/java/servlet/',
//         '/java/servlet/Servlet.md',
//         '/java/servlet/ServletConfigAndContext.md',
//       ]
//     },
//     {
//       text:'JVM',
//       collapsible: true,
//       children :[
//         '/java/jvm/class.md',
//       ]
//     }
//   ],
//   '/spring/': [
//     '/spring/springbootstart.md',
//     '/spring/springioc.md',
//     '/spring/springaop.md',
//     '/spring/springevent.md',
//     '/spring/springboot_refreshContext.md',
//     '/spring/springlogging.md',
//     '/spring/spring_autowire.md',
//     '/spring/springdi.md',
//     '/spring/spring_circularDependecies.md',
//     '/spring/ComponentScanAnnotationParser.md',
//
//     '/spring/spring_beanfactoryorfactorybean.md',
//     '/spring/spring_aware.md',
//     '/spring/spring_transaction.md',
//     {
//       text:'Spring MVC',
//       collapsible: true,
//       children :[
//         '/spring/springmvc_start.md',
//         '/spring/contentnegotiation.md',
//       ]
//     },
//     {
//       text:'Spring小知识点',
//       collapsible: true,
//       children :[
//         '/spring/补充/InstantiationAwareBeanPostProcessor.md',
//         '/spring/补充/beandefinition.md',
//       ]
//     },
//     {
//       text:'Spring Cloud',
//       collapsible: true,
//       children :[
//         '/spring/spring_cloud/',
//       ]
//     }
//   ],
//   '/mysql/': [
//     '/mysql/interview.md',
//     '/mysql/transaction.md',
//     {
//       text:'Java使用MySQL',
//       collapsible: true,
//       children :[
//         '/mysql/use/jdbc.md',
//       ]
//     }
//   ],
//   '/redis/': [
//     {
//       text:'Redis基础',
//       collapsible: true,
//       children :[
//         '/redis/base/resume.md',
//         '/redis/base/usestring.md',
//         '/redis/base/uselist.md',
//         '/redis/base/usehash.md',
//         '/redis/base/usezset.md',
//       ]
//     },
//     {
//       text:'Redis使用',
//       collapsible: true,
//       children :[
//         '/redis/use/distributedLock.md',
//         '/redis/use/uselist.md',
//         '/redis/use/bloomFilter.md',
//         '/redis/use/useHyperLogLog.md',
//         '/redis/use/useLimit.md',
//       ]
//     },
//     {
//       text:'Redis集群',
//       collapsible: true,
//       children :[
//         '/redis/cluster/masterSlaveSync.md',
//         '/redis/cluster/sentinel.md',
//       ]
//     },
//   ],
//   '/mq/': [
//     {
//       text:'RabbitMQ',
//       collapsible: true,
//       children :[
//         '/mq/rabbitmq/',
//       ]
//     },
//     {
//       text:'RocketMQ',
//       collapsible: true,
//       children :[
//         '/mq/rocketmq/',
//       ]
//     },
//     '/mq/mideng.md'
//   ],
//   '/algorithm/': [
//     {
//       text:'链表',
//       collapsible: true,
//       children :[
//         '/algorithm/list/backlist.md',
//         '/algorithm/list/isPail.md',
//         '/algorithm/list/reverseBetween.md',
//         '/algorithm/list/mergeKLists.md',
//         '/algorithm/list/hasCycle.md',
//         '/algorithm/list/EntryNodeOfLoop.md',
//         '/algorithm/list/FindKthToTail.md',
//         '/algorithm/list/removeNthFromEnd.md',
//         '/algorithm/list/FindFirstCommonNode.md',
//         '/algorithm/list/addInList.md',
//         '/algorithm/list/deleteDuplicates.md',
//       ]
//     },
//     {
//       text:'二叉树',
//       collapsible: true,
//       children :[
//         '/algorithm/二叉树/binarytree_preorder.md',
//         '/algorithm/二叉树/binarytree_inorder.md',
//         '/algorithm/二叉树/binarytree_postorder.md',
//         '/algorithm/二叉树/binarytree_levelorder.md',
//         '/algorithm/二叉树/binarytree_snake.md',
//         '/algorithm/二叉树/binarytree_maxdepth.md',
//         '/algorithm/二叉树/binarytree_haspathsum.md',
//         '/algorithm/二叉树/binarytree_convertlist.md',
//         '/algorithm/二叉树/binarytree_mirror.md',
//         '/algorithm/二叉树/binarytree_isValidBST.md',
//         '/algorithm/二叉树/binarytree_isCompleteTree.md',
//         '/algorithm/二叉树/binarytree_isBalanced.md',
//         '/algorithm/二叉树/binarytree_lowestCommonAncestor.md',
//         '/algorithm/二叉树/binarytree_lowestCommonAncestor2.md',
//         '/algorithm/二叉树/binarytree_serialize.md',
//         '/algorithm/二叉树/binarytree_reConstructBinaryTree.md',
//         '/algorithm/二叉树/binartytree_solve.md',
//       ]
//     },
//     {
//       text:'哈希/堆/栈/队列',
//       collapsible: true,
//       children :[
//         '/algorithm/innorheaporqueue/includeMain.md',
//         '/algorithm/innorheaporqueue/isValidBracket.md',
//         '/algorithm/innorheaporqueue/twoSum.md',
//         '/algorithm/innorheaporqueue/MoreThanHalfNum.md',
//         '/algorithm/innorheaporqueue/FindNumsAppearOnce.md',
//         '/algorithm/innorheaporqueue/minNumberDisappeared.md ',
//       ]
//     },
//     {
//       text: '字符串和数组',
//       collapsible: true,
//       children :[
//         '/algorithm/string/judge.md',
//         '/algorithm/string/solve.md',
//         '/algorithm/string/merge.md',
//       ]
//     },
//     {
//       text: '递归/回溯',
//       collapsible: true,
//       children :[
//         '/algorithm/recursion/solve.md',
//         '/algorithm/recursion/Permutation.md',
//         '/algorithm/recursion/Nqueen.md',
//         '/algorithm/recursion/generateParenthesis.md',
//       ]
//     },
//     {
//       text: '其他',
//       collapsible: true,
//       children :[
//         '/algorithm/more/pivotInteger.md',
//       ]
//     }
//   ],
//   '/temp/': [
//     '/temp/interface.md',
//     '/temp/jwt.md',
//     '/temp/git_branch.md',
//     '/temp/gitback.md',
//     '/temp/calendar.md',
//     '/temp/spel.md',
//     '/temp/learndockerfile.md',
//     '/temp/proxy.md',
//     '/temp/黄赤交角.md',
//   ],
//   '/python/': [
//     '/python/base.md'
//   ],
//   '/english/': [
//     '/english/grammar.md'
//   ],
//   '/note/': [
//     '/note/20220305.md'
//   ],
// }
