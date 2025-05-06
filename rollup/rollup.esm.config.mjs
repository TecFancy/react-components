import { defineConfig } from 'rollup';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from "cssnano";
import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

import basicConfig from './rollup.config.mjs';

const config = defineConfig({
  ...basicConfig,
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      preserveModules: true, // preserve the module structure
      preserveModulesRoot: 'src', // Keep the structure based on the src directory
      sourcemap: true,
    },
  ],
  plugins: [
    ...basicConfig.plugins,
    excludeDependenciesFromBundle(),
    sass({
      // Set `api: "modern"` to remove `Deprecation Warning [legacy-js-api]: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.`
      // See: https://github.com/sass/dart-sass/issues/2352#issuecomment-2778594669
      api: 'modern',
      output: 'dist/es/styles/index.css',
      processor: css => postcss([postcssImport, autoprefixer, cssnano()])
        .process(css, { from: 'src/styles/index.scss' })
        .then(result => result.css),
    }),
    copy({
      targets: [
        {
          src: 'src/styles/_variables.scss',
          dest: 'dist/es/styles',
        },
        {
          src: 'src/statics/fonts',
          dest: 'dist/es/statics',
        }
      ],
    }),
  ],
});

export default config;
