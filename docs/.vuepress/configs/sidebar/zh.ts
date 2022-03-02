import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/java/': [
    {
      text:'Java基础',
      collapsible: true,
      children :[
        '/java/base/javabasee.md',
        '/java/base/security.md',
        '/java/base/synchronized.md'
      ]
    },
    {
      text:'Utils',
      collapsible: true,
      children :[
        '/java/utils/json/jackson.md',
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
    '/spring/springdi.md',
    '/spring/ComponentScanAnnotationParser.md',
    '/spring/contentnegotiation.md',
    '/spring/beandifition.md',
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
    '',
  ],
  '/algorithm/': [
    {
      text:'链表',
      collapsible: true,
      children :[
        '/algorithm/backlist.md',
      ]
    },
  ],
}