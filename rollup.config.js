const sourceMaps = require('rollup-plugin-sourcemaps');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const packageFile = require('./package');

module.exports = {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    sourcemap: true,
    freeze: false,
    esModule: false,
    exports: 'named',
    name: packageFile.name,
    treeshake: {
      propertyReadSideEffects: false
    }
  },
  plugins: [
    typescript({ clean: true }),
    sourceMaps(),
    terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        keep_infinity: true,
        pure_getters: true,
        collapse_vars: false
      },
      ecma: 5,
      warnings: true
    })
  ]
};
