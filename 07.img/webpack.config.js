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
   
   html-webpack-plugin 这个插件 我们想要需要进行
   相应的配置 接收一个数组   意思是我们可以配置许多的插件插件里面
    new 出来这个对象 就好了
   
   引入这个插件 在里面 new 出来这个 对象
   在命令号输入 npm run dev 

   有意思的事情发生了  现在在dist 目录下面出现了
   相应的在dist目录下面 生成相应额 index.html
   我们当然也可以根据自己的需求进行相应的配置
   在插件对象中 里面接收一个对象

   filename: 'main.html',  新生成的相应额文件名称
   template: './src/index.html' 使用的原来的模块文件
   此时在dist 目录下面就可以看到相应额生成的文件
   这个文件和之前的模板文件的唯一的不同点在于在里面插入了相应的
   相应的我们新生成的代码;


   我们需要配置相应的能够解析这个loader的文件
   因为在浏览器中 只能跑真正的javascript代码
   use 字段里面接收的是loader:'babel'
   即使我们指定了 loader 但是还不够我们还要指定相应的
   不同的预设处理不同的内容 我们需要一个reaact的预设 
   全名是babel-presrt-react
   那么  这里我们需要
   语法类型
   module:{
        rules:[{ module 是一个对象  rules里面 test 写的是匹配的规则
            test:/\.js$/,
            use:[{  使用use loader: 是采用的babel-loader 
                loader:'babel-loader',
                options:{ 采用的预设是解析react的语法解析
                    presets:[
                        'react'
                    ]
                }
            }]
        }]
    }

    对于webpack-dev-server 这个插件来说
    并不是简简单单的静态服务器  它是将文件
    运行在服务器中的 打包之后的资源是放在内存里面
    而不是放在 硬盘里面

    并且会监视我们app.js的变化 我们修改app.js
    的文件 浏览器就会自动的更新操作;

    我们当然也可以进行相应的定制化的配置工作
    我们在文件中添加dev-serve字段 接收一个对象
    里面可以根据需求配置化webpack的相关的功能


    webpack  不仅会将所有的js 文件当成一个个的模块同样的
    会将 css 也当成一个模块
    但是如果想要编译css 文件webpack 需要进行编译工作
     这里需要注意的是 我们在使用webpack 进行编译的时候
     首先需要将css 进行编译  然后使用style-loader 进行应用
     上面的样式  处理是有顺序的,首先执行的是css 然后
     执行的是 style-loader


     我想让背景变成一张图片 css loader在遇到url的时候
     会解析url 里面额东西 在webpack 上面  引入资源也被称之为
     一个模块 遇到图片类型的资源我们也需要加载相应的模块来
     解析他们 有一种 loader 专门处理图片类型的loader 的
     、就是fileloader   
 **/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.jpg$/,
                use: ['file-loader']
            }
        ]
    },
    devServer:{
        open:true, 
        port:9000 
    }
};
