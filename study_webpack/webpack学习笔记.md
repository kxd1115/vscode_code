# 概念

## 入口(entry)
入口起点指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。
默认值: `./src/index.js`
可以通过在*webpack configuration*中配置`entry`属性
* 可以同时指定多个不同的入口起点
## 输出(output)
告诉webpack在哪里输出它所创建的bundle，以及设置命名
默认值: `./dist/main.js`，其他默认文件放在`./dist`文件夹中

## loader
webpack只能理解js和JSON文件。loader让webpack能去处理其他类型的文件。
配置中，loader具有两个属性
1. `test`: 识别哪些文件会被转换
2. `use`： 定义出在进行转换时，应该使用哪个loader

## 插件(plugin)
用于转换某些类型的模块，使用前需要先`require()`它。

## 模式(mode)
* development
* production: 默认值
* none
三选一，设置mode参数

```js
// webpack.config.js
const path = requires('path');
const HtmlWebpackPLugun = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  // 输入(可同时存在多个入口)
  entry: './path/to/my/entry/file.js',
  // 输出
  output: {
    // 配置文件夹名称
    path: path.resolve(__dirname, 'dist'),
    // 配置文件名称
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    // 定义loader规则，必须在module.rules中配置
    // 使用正则时，不要添加引号
    rules: [{test: /\.txt$/, use: 'raw-loader'}],
  },
  plugins: [
    new HtmlWebpackPlugin({templateL './src/index.html'})
  ],
  mode: 'production',
}
```

## 入口起点(entry points)

### 单个入口(简单)语法
```js
entry: '...';
// 是对象语法的简写
// 等同于
entry: {
  main: '...',
}
```

### 对象语法
入口对象有以下属性
* dependOn: 当前入口所依赖的入口
* filename: 指定输出的文件名称
* import: 启动时需要加载的模块(一般是js文件)
* library: 指定后为当前入口构建一个library
* runtime：运行时chunk的名称
```js
module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/dminApp.js',
  },
}
// 注意
/*
 * runtime和dependOn不应放在同一个入口上同时使用
 * runtime不能指向已存在的入口名称
 * dependOn不能循环引用
*/ 
```
### 常用场景

#### 分离app和vendor入口

#### 多页面应用程序

## 输出(output)
如果配置中创建出多余一个`chunk`(例如多个入口起点)，则使用占位符确保每个文件具有唯一的名称
```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/serach.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  }
}
```

## loader
推荐通过使用配置`webpack.config.js`的方式指定loader。
`module.rules`允许配置多个loader
```js
module.exports = {
  module.rules = [{
    test: /\.txt$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          module: true,
        },
      },
    ],
  },],
};
```

## plugin
webpack插件是具有apply方法的JS对象。
apply方法会被`webpack compiler`调用。

### 配置方式
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 访问内置插件
const path = require('path');

module.export = {
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPLugin({ 
      template: './src/index.html',
      title: 'test', // 设置title
    }),
  ]
}
```

## 配置
通过在配置中使用`require()`
* 引入其他文件
* 使用npm下载的工具函数
* 使用JS控制流表达式，如`?:`操作符
* 编写并执行函数
以下操作需要避免:
* 使用webpack CLI工具时，访问CLI参数
* 导出不确定的结果
* 编写超长的配置