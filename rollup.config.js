/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');

const input = ['src/Deferred.ts', 'src/Subject.ts'];
const outputDir = 'dist';
const plugins = [typescript({ tsconfig: './tsconfig.build.json' })];

module.exports = [
  {
    input,
    output: {
      dir: outputDir,
      format: 'cjs',
    },
    plugins,
  },
  {
    input,
    output: {
      entryFileNames: '[name].mjs',
      dir: outputDir,
      format: 'es',
    },
    plugins,
  },
];
