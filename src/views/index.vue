<template>
    <div class="indexPage">
        <Header></Header>
        <div class="indexP-content">
          <Nav></Nav>
          <div class="index-bivder"></div>
          <div class="index-banner">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in swiperImg" :key="index">
                <a class="li">
                  <img :src="item.imgSrc">
                </a>
              </div>
            </div>
             <div class="point">
               <div class="swiper-pagination SC">
               </div>
             </div>
          </div>
          <RankingFLow></RankingFLow>
          <Container></Container>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import RankingFLow from '@/components/RankingFlow'
import { getSwiperImg } from '@/js/request.js'

export default {
  components: {
    Header,
    Container,
    Nav,
    RankingFLow
  },
  data () {
    return {
      swiperImg: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getSwiperImg().then((res) => {
        this.swiperImg = res.data.swiperImg
        this.$nextTick(() => {
          // $nextTick和mounted是一样的
          /* eslint-disable no-new */
          new Swiper('.index-banner', {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            speed: 1000,
            effect: 'fade',
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
              // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
            }
          })
        })
      })
    }
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
  padding: 0 .512rem;
  z-index: 4;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 4.69333rem;
  border-radius: .34133rem;
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  width: 100%;
  height: 4.69333rem;
  margin: auto;
}

.li img {
  width: 100%;
  height: 100%;
}

.point {
  position: absolute;
  left: 0;
  bottom: .192rem;
  z-index: 5;
  width: 100%;
  text-align: center;
  height: .552rem;
  line-height: .552rem;
}

.SC {
  background-color: rgba(0,0,0,.5);
  border-radius: .21333rem;
  padding: 0 .32rem;
  display: inline-block;
  transform: translate(-50%,50%);
}
.swiper-pagination-bullet {
    width: .21333rem;
    height: .21333rem;
    float: left;
    background: #fff;
    opacity: 1;
    border-radius: .10667rem;
    margin: .10667rem!important;
  }

.swiper-pagination-bullet-active {
  background: #de698c!important;
}

</style>
