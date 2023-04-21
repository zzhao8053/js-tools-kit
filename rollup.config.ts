import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')

const libraryName = 'js-tools-kit'

export default {
  input: `src/index.ts`,
  output: [{ file: pkg.main, format: 'es' }],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({ declaration: true }),
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
}
