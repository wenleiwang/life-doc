import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/java/': [
    {
      text:'Java基础',
      // collapsible: true,
      children :[
        '/java/jababse/javabase.md',
        '/java/jababse/java_bianliang.md',
        '/java/jababse/java_condition.md',
      ]
    },
    {
      text:'Spring',
      // collapsible: true,
      children :[
        '/java/spring/spring.md',
        '/java/spring/springioc.md',
        '/java/spring/springaop.md',
      ]
    },
  ],
  '/mysql/': [
    '',
  ],
  '/redis/': [
    '',
  ],
  '/rabbitmq/': [
    '',
  ],
}