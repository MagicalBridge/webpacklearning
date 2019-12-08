## webpack 的核心的概念：


### 1.entry 入口

```js
// 这是commonJS的一种写法。
module.exports = { 
  entry:"./src/index.js"  
}
```
这个entry还可以是一个**数组**,还可以是**对象**的形式,对象的形式是`key:value`的样子,我们还是推崇这种这种写法,因为能够明确的知道这个文件的名字。

上述的配置等同于
```js
module.exports = {
  entry: {
    main:'./src/index.js'
  }
}
```

或者配置多个入口：
```js
module.exports = {
  entry:{
    foo:"./src/page-foo.js",
    bar:"./src/page-bar.js"
  }
}
```
使用数组对多个文件进行打包
```js
module.exports = {
  entry:{
    main:[
      './src/foo.js',
      './src/bar.js'
    ]
  }
}
```

### 2. output   出口

### 3. loader   模块解释器

  处理文件的 转为模块 js可以处理的模块
  常见的cssloader
  module.exports = {
    module:{
      rules:[
        test:/\.css$/,
        use:'css-loader'
      ]
    }
  }

  编译相关：babel-loader ts-loader
  样式相关：style-loader css-loader less-loader postcss-loader
  文件相关：file-loader

### 4. plugins  插件
  参与打包的过程
  打包优化和压缩
  配置编译时的变量

  我在上海一家互联网金融公司担任前端架构师，拥有全栈开发能力，
  拥有运营、产品岗位的工作经验。学生时代有幸在京东金融实习，
  曾带领团队成员在三个月内做出月纯利润300万的现金贷产品。

5. webpack的一些基本的概念:

6. 关于css-loader 和 style-loader
  css-loader 负责解析css 代码，主要是为了处理css 中的依赖，例如@import 和 url()等引用外部的声明
  style-loader 会将 css-loader 解析的结果转变成JS代码，运行时动态插入style 标签让css 代码生效



  
