<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  render () {
    return this.$scopedSlots.default({
      visible: this.visible
    })
  },
  mounted () {
    window.addEventListener('click', this.handleClick)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.handleClick)
  },
  methods: {
    handleClick (e) {
      if (this.$el.contains(e.target)) {
        this.visible = !this.visible
      } else {
        this.visible = false
      }
    }
  }
}
</script>
