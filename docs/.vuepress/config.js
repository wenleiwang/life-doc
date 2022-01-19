module.exports = {
    title: '文文的文档',
    description: '只为了记录',
    head:[
      ['link',{rel:'icon',href:'/favicon.ico'}]
    ],
    themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: 'Java', link: '/java/' },
        { text: 'MySQL', link: '/mysql/' },
        { text: 'Redis', link: '/redis/' },
        { text: 'RabbitMQ', link: '/rabbitmq/', target:'_blank' },
      ],
      sidebar: {
        '/java/': [
          '',
          'java',
          'spring',
        ],
        '/mysql/': [
          '',
        ],
        '/redis/': [
          '',
        ],
        '/rabbitmq/': [
          '',
        ]
      },
      displayAllHeaders: true, // 显示所有页面的标题链接
      activeHeaderLinks: true,// 显示活动的标题链接
    },
    base: '/life-doc/'
}