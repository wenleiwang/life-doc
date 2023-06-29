
const path = require('path')

const theme = (options) => {
  console.log(options)
  // 返回一个主题对象
  return {
    name: 'vuepress-theme-wdo',

    // 主题的客户端配置文件的路径
    clientConfigFile: path.resolve(__dirname, 'client.js'),

    // 设置自定义 dev / build 模板
    // 如果没有指定模板，将会使用 `@vuepress/client` 提供的默认模板
    // templateBuild: path.resolve(__dirname, 'templates/build.html'),
    // templateDev: path.resolve(__dirname, 'templates/dev.html'),

    // 使用插件
    plugins: [
      // ...
    ],

    // 其他的插件 API 也都可用
  }
}

module.exports = theme()
