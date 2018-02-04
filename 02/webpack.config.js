/*
   是commonJS的模块化语法 为什么不使用es6的模块化语法是因为
   webpack 这里使用的nodejs来跑的；导出的这个对象就是webpack的
   配置了 webpack 怎么去打包 打包的过程中会做什么事情
   全部都依赖这个对象来描述
   entry : 程序的入口 告诉webpack 项目的入口是谁
   然后webpack 开始分析整个的项目的依赖
   output:{ // 输出的对象形式
      path:  接收一个绝对的路径 如果给相对的路径就会报错
      这时候我们需要引用path 模块 这个模块是nodejs的一个模块
      path.resolve(__dirname) 使用这个命令就可以找到当前的根目录，第二个参数是指定的
      输出的文件名
      我们还要告诉这个webpack 打包后的文件名字
   }
   写完这个配置之后 我们安装依赖 然后使用 npm run dev 
   就会执行webpack.config.js这个文件  然后执行命令
   就会输出 mian.js 这个文件
   
 **/
const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
};