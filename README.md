# README

[English](./README.md) | [简体中文](./README_ZH.md)

## Quick Start

This quick guide will show you how to run the project in your local development environment.

### System Requirements

- `Node.js`: >= 20.10.0

After installing the Node.js development environment, you also need to install the `yarn` package management tool.

```bash
npm install -g yarn
```

### Install Dependencies

```bash
yarn install
```

## Script Commands

The project contains some commonly used script commands, which you can run in the project root directory.

### Start Project

```bash
yarn start
```

Running this command will start the project's development server, and you can access the project in the browser at `http://localhost:6006`.

### Build Project

To build the final component library, you can run the following command:

```bash
yarn build
```

If you want to build the documentation site for the component library, you can run the following command:

```bash
yarn build:storybook
```

### Unit Test

```bash
yarn test
```

This command will run the unit tests once, and you can also start the test watch mode:

```bash
yarn test:watch
```

### Check for New Dependency Versions

```bash
yarn ncu
```

Running this command will check if there are new versions of third-party libraries in the project, and you can update the dependencies with the following command:

```bash
yarn ncu -u
```

This command will update the dependencies in `package.json` to the latest version. However, before updating the dependency version, you need to ensure that the latest dependency version is a major version update, otherwise it may cause the project to fail to run normally.

After updating the dependency version to the latest version, you need to run `yarn install` again to install the latest dependencies.

Happy coding ;-)
