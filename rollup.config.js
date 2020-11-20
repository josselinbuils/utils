/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');
const packageFile = require('./package');

module.exports = {
  input: ['src/Deferred.ts', 'src/Subject.ts'],
  output: {
    dir: 'dist',
    format: 'es',
    name: packageFile.name,
  },
  plugins: [typescript()],
};
