import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {text: '首页', link: '/'},
    {
        text: '开发技术栈',
        ariaLabel: '开发技术栈',
        children: [
            {text: '高级开发语言Java', link: '/view/java/'},
            {text: 'Java开发框架Spring', link: '/view/spring/'},
            {text: '数据库MySQL', link: '/view/mysql/'},
            {text: 'NOSQL数据库Redis', link: '/view/redis/'},
            // { text: 'RabbitMQ', link: '/rabbitmq/', target:'_blank' },
            {text: '消息队列', link: '/view/mq/'},
            {text: '前端开发', link: '/view/vue/'},
            {text: '程序员的自我修养', link: '/view/develop/'},
        ]
    },
    {
        text: 'AI技术栈',
        ariaLabel: '大数据模型栈',
        children: [
            {text: '高级开发语言Python', link: '/view/python/'},
            {
                text: '大数据模型',
                children: [
                    {text: 'AI初探', link: '/view/bigdata/AI初探/'},
                    {text: '机器学习', link: '/view/bigdata/机器学习/'},
                    {text: '大数据模型使用', link: '/view/bigdata/大数据模型使用/'},
                ]
            },
        ]
    },
    {text: '算法', link: '/view/algorithm/'},
    {text: '补充', link: '/view/temp/'},
    {text: 'English', link: '/view/english/'},
    {text: '写给自己', link: '/view/note/'},
]
