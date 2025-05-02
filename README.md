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

A modern, customizable React UI component library.

## Features

- 🔧 TypeScript Support - Full type definitions included
- 🎨 Customizable Themes - Support for multiple theme modes including dark mode
- 📦 On-Demand Loading - Import components individually to optimize bundle size
- 🌈 Style Isolation - SCSS modules for style management
- 🧩 Rich Components - Various commonly used components like Button with multiple sizes and states
- 📚 Storybook Documentation - Comprehensive component examples and docs

## Installation

```bash
# Using npm
npm install react-components

# Using yarn
yarn add react-components
```

## Quick Start

```tsx
import React from 'react';
import { Button } from 'react-components';
import 'react-components/dist/es/styles/index.css'; // Import styles

const App = () => (
  <Button size="large" theme="primary">
    Click Me
  </Button>
);

export default App;
```

## Custom Themes

The component library supports theme customization. You can use the provided variables file:

```scss
// Import variables
@use 'react-components/dist/es/styles/_variables.scss' as *;

// Customize variables
$primary-color: #1890ff;
```

## Development Guide

This quick guide will help you set up the project in your local development environment.

### System Requirements

- `Node.js`: >= 20.10.0

After installing Node.js, you'll need to install the `yarn` package manager:

```bash
npm install -g yarn
```

### Install Dependencies

```bash
yarn install
```

## Script Commands

The project includes several commonly used scripts that can be executed from the project root.

### Start Project

```bash
yarn start
```

This command launches the development server. Access the project at `http://localhost:6006` in your browser.

### Build Project

To build the final component library, run:

```bash
yarn build
```

To build the documentation site for the component library, run:

```bash
yarn build:storybook
```

### Unit Testing

```bash
yarn test
```

This command runs unit tests once. You can also start test watch mode:

```bash
yarn test:watch
```

### Check Dependency Updates

```bash
yarn ncu
```

This command checks for new versions of third-party dependencies. Update dependencies with:

```bash
yarn ncu -u
```

This updates dependencies in `package.json` to their latest versions. Before updating, ensure major version updates won't break the project.

After updating dependencies, run `yarn install` to install the latest versions.

## Tech Stack

- React
- TypeScript
- SCSS
- Rollup
- Storybook
- Jest

Happy coding ;-)
