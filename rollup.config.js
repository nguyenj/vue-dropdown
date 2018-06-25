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
    VuePlugin()
  ]
}
