const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const Webpack = require('webpack')
const config = require('./config/projectsConfig.js');
let projectName = process.env.PROJECT_NAME;

module.exports = {
  ...config[projectName],
  // pages: conf.pages,

  // 基本路径
  // baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: './', // vue-cli3.3+新版本使用

  // 输出文件目录
  outputDir: 'dist/' + projectName + '/',
  configureWebpack() {
    return {
      resolve: {
        // 配置alias简称
        alias: {
          '@': resolve('src'),
          '@mlgj': resolve('src/applications/app_mlgj'),
          '@user': resolve('src/projects/user_management'),
          '*': resolve('')
        }
      },
      plugins: [new Webpack.ProvidePlugin({})]
    }
  },
   chainWebpack: (config) => {

        //配置 svg-sprite-loader
    
        // 第一步：让其他svg loader不要对src/icons进行操作
    
        config.module
    
         .rule('svg')
    
         .exclude.add(resolve('src/SvgIcon/svg'))//注意：路径要具体到存放的svg的路径下，不然会报错
    
         .end()
    
        // 第二步：使用svg-sprite-loader 对 src/icons下的svg进行操作
    
        config.module
    
         .rule('icons')
    
         .test(/\.svg$/)
    
         .include.add(resolve('src/SvgIcon/svg'))//注意：路径要具体到存放的svg的路径下，不然会报错
    
         .end()
    
         .use('svg-sprite-loader')
    
         .loader('svg-sprite-loader')
    
         //定义规则 使用时 <svg class="icon"> <use xlink:href="#icon-svg文件名"></use> </svg>
    
         .options({
    
          symbolId: 'icon-[name]'
    
         })
    
         .end()
    
       },
       
    
 
};
