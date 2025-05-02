# React Components

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=bugs)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=TecFancy_react-components&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=TecFancy_react-components)

[English](./README.md) | [简体中文](./README_ZH.md)

一个现代化、可定制的 React UI 组件库。

## 特性

- 🔧 TypeScript 支持 - 提供完整的类型定义
- 🎨 可定制主题 - 支持多种主题模式，包括夜间模式
- 📦 按需加载 - 支持组件按需引入，优化包体积
- 🌈 样式隔离 - 使用 SCSS 模块化管理样式
- 🧩 丰富组件 - 提供如 Button 等多种常用组件，支持多种尺寸和状态
- 📚 Storybook 文档 - 完善的组件示例和文档

## 安装

确保你的项目中已经安装了以下依赖：

- `react`: >= 16.8.0
- `react-dom`: >= 16.8.0
- `classnames`: >= 2.5.1

```bash
# 使用 npm
npm install react-components

# 使用 yarn
yarn add react-components
```

## 快速开始

```tsx
import React from 'react';
import { Button } from 'react-components';
import 'react-components/dist/es/styles/index.css'; // 引入样式

const App = () => (
  <Button size="large" theme="primary">
    点击我
  </Button>
);

export default App;
```

## 自定义主题

组件库支持主题定制，您可以使用提供的变量文件：

```scss
// 导入变量
@use 'react-components/dist/es/styles/_variables.scss' as *;

// 自定义变量
$primary-color: #1890ff;
```

## 开发指南

该简易指南将引导你如何在本地开发环境中运行项目。

### 系统环境要求

- `Node.js`: >= 20.10.0

安装 Node.js 开发环境后，你还需要安装 `yarn` 包管理工具。

```bash
npm install -g yarn
```

### 安装依赖

```bash
yarn install
```

## 脚本命令

项目中包含了一些常用的脚本命令，你可以在项目根目录下运行这些命令。

### 启动项目

```bash
yarn start
```

执行该命令会启动项目的开发服务器，你可以在浏览器中访问 `http://localhost:6006` 查看项目。

### 项目打包

要构建最终的组件库，你可以运行以下命令:

```bash
yarn build
```

如果你要构建组件库对应的文档站点，可以运行以下命令:

```bash
yarn build:storybook
```

### 单元测试

```bash
yarn test
```

该命令会执行一次单元测试，你也可以启动测试监视模式:

```bash
yarn test:watch
```

### 检查依赖是否有新版本

```bash
yarn ncu
```

执行该命令会检查项目中第三方库是否有新版本，你可以通过以下命令更新依赖:

```bash
yarn ncu -u
```

该命令会将 `package.json` 中的依赖更新到最新版本。不过在更新依赖依赖版本之前，你需要确保最新依赖版本是否为大版本更新，否则可能会导致项目无法正常运行。

将依赖版本更新到最新版本后，你需要重新运行 `yarn install` 安装最新依赖。

## 技术栈

- React
- TypeScript
- SCSS
- Rollup
- Storybook
- Jest

Happy coding ;-)
