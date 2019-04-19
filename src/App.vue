<template>
  <div id="app">
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
      show: true
    }
  },
  mounted() {
    let size = document.getElementsByTagName('html')[0].style.fontSize
    let pageHeight = window.screen.availHeight / size.split('px')[0]
    this.$refs.pageMin.style.minHeight = pageHeight + 'rem'
  },
  watch: {
    $route (to, from) {
      if (to.path === '/other') {
        this.show = false
      } else {
        this.show = true
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
