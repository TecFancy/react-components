import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcssImport from 'postcss-import';
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
      // Set `api: "modern"` to remove `Deprecation Warning [legacy-js-api]: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.`
      // See: https://github.com/sass/dart-sass/issues/2352#issuecomment-2778594669
      api: 'modern',
      output: 'dist/index.css',
      processor: css => postcss([postcssImport, autoprefixer, cssnano()])
        .process(css, { from: 'src/styles/index.scss' })
        .then(result => result.css),
    }),
    terser(),
    visualizer(),
  ],
};

export default config;
