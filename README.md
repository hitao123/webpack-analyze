# webpack 打包 && 按需加载分析

## webpack v1 按需

> 介绍 webpack1 使用 require.ensure 按需加载原理

## webpack v4 按需

> 介绍 webpack4 使用 import() 按需加载原理

## webapck 最重要的 tapable 概念

> tapable 是 webapck 的灵魂， webpack 的 compiler compilation 对象都是集成自 tapable

## webpack loader 开发介绍

> 参照项目 webapck-test-loader, 介绍如何将一个 md 格式的文件 处理成一个 react 组件

## webpack plugin 开发介绍

> [npm link 本地调试](https://github.com/atian25/blog/issues/17), 这里开发一个插件，将代码打包的时候，在生成的代码前面加注释类似下面的, 还有一个功能是对所有 webpack 插件使用之后 对 webpack 运行结果做一个总结（这其实可以单独拎一个插件的）

```js
    /** @license
     *
     * Copyright (c) Google, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
```

## webapck 内部处理流程的原理简介

> 可以先看下 [webpack-flow](https://fed.taobao.org/blog/2016/09/10/webpack-flow/)

## 如何自己实现一个简单的打包工具
