<template>
    <div class="indexPage">
        <div class="indexP-content">
          <Header></Header>
          <Nav></Nav>
          <div class="index-bivder"></div>
          <div class="index-banner">
            <div class="swiper"></div>
          </div>
          <RankingFLow></RankingFLow>
          <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RankingFLow from '@/components/RankingFlow'

export default {
  components: {
    Header,
    Footer,
    Nav,
    RankingFLow
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.index-bivder {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top:3.79733rem;
}

.index-banner {
  position: relative;
  height: 4.69333rem;
  border-radius: .34133rem;
  border: 1px solid #aaa;
  padding: 0 .512rem;
}
</style>
