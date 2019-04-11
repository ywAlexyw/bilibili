<template>
  <div id="app">
    <Header></Header>
    <div class="pageMin">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.pageMin {
  position: relative;
  min-height: 800px;
}
</style>
