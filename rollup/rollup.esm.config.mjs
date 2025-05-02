import copy from 'rollup-plugin-copy';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

import basicConfig from './rollup.config.mjs';

const config = {
  ...basicConfig,
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    ...basicConfig.plugins,
    excludeDependenciesFromBundle(),
    copy({
      targets: [
        {
          src: 'src/styles/_variables.scss',
          dest: 'dist/styles',
        },
        {
          src: 'src/statics/fonts',
          dest: 'dist/statics',
        }
      ],
    }),
  ],
};

export default config;
