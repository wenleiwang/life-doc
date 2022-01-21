import { navbar, sidebar } from './configs'

module.exports = {
  lang: 'zh-CH',
  title: '文文的文档',
  description: '只为了记录',
  head:[
    ['link',{rel:'icon',href:'/favicon.ico'}]
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
  },
  base: '/life-doc/',
  repo : 'https://github.com/wenleiwang/life-doc.git',
}