import { navbar, sidebar } from './configs'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { defaultTheme } from '@vuepress/theme-default'
import { tocPlugin } from '@vuepress/plugin-toc'


const customElement = ['maction','math','menclose','merror','mfenced','mfrac','mi','mmultiscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow','ms','mspace','msqrt','mstyle','msub','msubsup','msup','mtable','mtd','mtext','mtr','munder','munderover','semantics','annotation'];

export default {
  base: '/life-doc/',
  lang: 'zh-CH',
  title: '文文的技术笔记',
  description: '只为了记录',
  head:[
    ['link',{rel:'icon',href:'/favicon.ico'}],
  ],
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!private', '!.obsidian', '!.trash'],

  theme: defaultTheme({
    logoDark : null,
    logo: '/logo.png',
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // 是否启用编辑
        editLink: true,
        // page meta
        editLinkText: '去编辑',
        docsRepo: 'https://github.com/wenleiwang/life-doc',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',

        // 是否显示最后更新时间
        lastUpdated: true,
        lastUpdatedText: '时间',

        // 作者
        contributors: true,
        contributorsText: '作者',
        toggleDarkMode: '切换夜间模式'

      },
    },
    displayAllHeaders: true, // 显示所有页面的标题链接
    activeHeaderLinks: true,// 显示活动的标题链接
    sidebarDepth: 0,
    repo : 'https://github.com/wenleiwang/life-doc',
  }),
  plugins: [
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
    }),
    tocPlugin({
      // 配置项
    }),
  ],
  markdown:{
    extractHeaders:{
      level : []
    },

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

}
