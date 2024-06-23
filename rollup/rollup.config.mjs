import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import cssnano from "cssnano";
import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
import terser from '@rollup/plugin-terser';
import { visualizer } from "rollup-plugin-visualizer";

const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'src/**/*.test.tsx',
    'src/**/*.stories.tsx',
    'src/**/*.stories.mdx',
    'src/setupTests.ts',
    'src/stories/**/*',
    'src/**/*.stories.*',
  ],
};

const config = {
  input: 'src/index.tsx',
  plugins: [
    nodeResolve(),
      commonjs(),
      json(),
    typescript({ tsconfigOverride: overrides }),
    sass({
      output: 'dist/index.css',
      processor: css => postcss([autoprefixer, cssnano()])
          .process(css)
          .then(result => result.css),
    }),
    terser(),
    visualizer(),
  ],
};

export default config;
