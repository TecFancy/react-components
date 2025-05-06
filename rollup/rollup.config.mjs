import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
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

const config = defineConfig({
  input: 'src/index.tsx',
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({ tsconfigOverride: overrides }),
    terser(),
    visualizer(),
  ],
});

export default config;
