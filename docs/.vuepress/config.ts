import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
import markdownItKatex from 'markdown-it-katex';
import { defineClientAppEnhance } from '@vuepress/client'


const customElement = ['maction','math','menclose','merror','mfenced','mfrac','mi','mmultiscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow','ms','mspace','msqrt','mstyle','msub','msubsup','msup','mtable','mtd','mtext','mtr','munder','munderover','semantics','annotation'];
const katex = require('katex');
export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CH',
  title: '文文的技术笔记',
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

        // 是否启用编辑
        editLink: true,
        // page meta
        editLinkText: '在GitHub上编辑',
        docsRepo: 'https://github.com/wenleiwang/life-doc',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',

        // 是否显示最后更新时间
        lastUpdated: true,
        lastUpdatedText: '最后更新时间',

        // 作者
        contributors: true,
        contributorsText: '@Author ',

        toggleDarkMode: '切换夜间模式'

      },
    },
    displayAllHeaders: true, // 显示所有页面的标题链接
    activeHeaderLinks: true,// 显示活动的标题链接
    sidebarDepth: 4,
    repo : 'https://github.com/wenleiwang/life-doc',
    plugins: [
      [
        path.resolve(__dirname, './plugin/rili.js'),
        {
          /* 选项 */
        },
      ],
    ],
  },
  base: '/life-doc/',
  markdown:{
    extractHeaders:{
      level : [2,3,4] 
    },
    
  },
  extendsMarkdown: (md) => {
    md.use(markdownItKatex, {
      // 配置选项
      katex:katex,
      "throwOnError" : false,
      "errorColor" : " #cc0000"
    })
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

