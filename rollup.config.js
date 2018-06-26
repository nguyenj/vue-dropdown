import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/vue-dropdown.vue',
  output: {
    name: 'Dropdown',
    file: 'dropdown.js',
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    VuePlugin(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
