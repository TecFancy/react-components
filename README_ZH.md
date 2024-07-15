# README

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

## 快速开始

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

Happy coding ;-)
