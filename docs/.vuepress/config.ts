import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
import markdownItKatex from 'markdown-it-katex';

const customElement = ['mi','mo','mn','mrow','annotation','semantics','math'];
export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CH',
  title: '文文的文档',
  description: '只为了记录',
  head:[
    ['link',{rel:'icon',href:'/favicon.ico'}],
  ],
  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    logoDark : null,
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
    displayAllHeaders: true, // 显示所有页面的标题链接
    activeHeaderLinks: true,// 显示活动的标题链接
    sidebarDepth: 4,
    repo : 'https://github.com/wenleiwang/life-doc.git',
  },
  base: '/life-doc/',
  markdown:{
    extractHeaders:{
      level : [2,3,4] 
    },
    
  },
  extendsMarkdown: (md) => {
    md.use(markdownItKatex)
  },
  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
            isCustomElement: tag => customElement.includes(tag)
        }
      }
    }
  },
})

