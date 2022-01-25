import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/java/': [
    {
      text:'Java基础',
      collapsible: true,
      children :[
        '/java/base/javabasee.md',
        '/java/base/javabianliang.md',
        '/java/base/javacondition.md',
      ]
    },
    {
      text:'Spring',
      collapsible: true,
      children :[
        '/java/spring/spring.md',
        '/java/spring/springbootstart.md',
        '/java/spring/springioc.md',
        '/java/spring/springaop.md',
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
  '/mysql/': [
    ''
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
}