<template>
  <div id="app" ref="app">
    <div class="pageMin" ref="pageMin">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer v-if="show"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      show: true,
      arr:[5,2]
    }
  },
  mounted () {
    let pageHeight = window.screen.availHeight
    this.$refs.pageMin.style.minHeight = pageHeight + 'px'
  },
  watch: {
    $route (to, from) {
      if (to.path === '/other') {
        this.show = false
      } else {
        this.show = true
      }
    },
    '$store.state.searchBG' (val) {
      if (val === true) {
        this.$refs.app.style.backgroundColor = 'rgb(244, 244, 244)'
      } else {
        this.$refs.app.style.backgroundColor = '#ffffff'
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.pageMin {
  position: relative;
}
</style>
