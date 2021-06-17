const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
// css 配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer'), require('postcss-pxtorem')({
          rootValue: 16,
          propList: ['*']
        })]
      }
    }
  },

  chainWebpack: config => {
    // 为src下文件配别名，不使用相对路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('icons', resolve('src/icons'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('style', resolve('src/style'))

    /** 设置处理svg的 loader，使svg可直接用名称调用，无需路径 */
    // svg rule loader
    // 方法1
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule // 添加svg新的loader处理
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })

    // 方法2
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/image/book')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 配置开发环境 source-map
    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(!isProduction,
      // config => config.devtool('cheap-source-map')
        config => config.devtool('source-map')
      )
  },

  // #region 开发环境配置
  devServer: {
    port: 9001, // 端口号配置
    open: true,
    hot: true
    // 代理配置
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRequires: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
  // #endregion

  //  webpackconfig: {
  //   externals: {
  //     AMap: 'AMap', // 高德地图配置
  //     T: 'T', // 天地图
  //     BMap: 'BMap', // 百度地图配置
  //   },
  // },
}
