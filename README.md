## Demo - 为了使用分包异步化特性，将Taro组件编译成原生小程序组件，再将这些组件提供给Taro项目本身

[详细文档](https://docs.taro.zone/docs/taro-in-miniapp#%E6%8A%8A-taro-%E7%BB%84%E4%BB%B6%E7%BC%96%E8%AF%91%E4%B8%BA%E5%8E%9F%E7%94%9F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)

此前这个模式的demo一直无法正常运行，之前已经提过issues，9月才修复
- https://github.com/NervJS/taro/issues/14371
- https://github.com/NervJS/taro/pull/14544

### 开发环境

推荐在 Taro 项目中进行开发调试，在生产环境下再在原生小程序中进行预览。

#### 1. 编译运行

```bash
$ npm run dev
```

#### 2. 预览

小程序开发者工具导入项目，项目路径请指向 `dist`。

### 生产环境

#### 编译运行

```bash
$ npm run build
```

#### 2. 预览

小程序开发者工具导入项目，项目路径请指向 `dist`。

### 介绍

本示例包括了以下特性：

- 基本使用方法
- 给组件传递 props
- 分包之间异步引入组件
- 主包引入分包组件
