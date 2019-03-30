<template>
    <nav class="nav">
        <div class="nav-content">
            <div class="n-c-wrapper">
                <a class="wra-item" v-for="(item, index) in Nav" :key="index">
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>
        <div class="pullBtn">
            <i class="pullBtn_icon"></i>
        </div>
    </nav>
</template>

<script>
import { getNav } from '@/js/request.js'

export default {
  data () {
    return {
      Nav: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getNav().then((res) => {
        this.Nav = res.data.getNav
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.nav {
  position: fixed;
  width: 100%;
  height: 1.87733rem;
  top: 1.856rem;
  background-color: #fff;
  overflow: hidden;
//   backface-visibility: hidden;
  z-index: 5;
  .nav-content {
    position: relative;
    width: 90%;
    padding-top: .256rem;
    overflow: hidden;
    .n-c-wrapper {
    //   display: flex;
      position: relative;
      height: 1.87733rem;
      padding-left: 1.024rem;
      white-space: nowrap;
      align-items: center;
      .wra-item {
        display: inline-block;
        background-color: #fff;
        margin-right: 1.49333rem;
        p {
          width: 1.36533rem;
          font-size: .59733rem;
          line-height: 1.28rem;
          text-align: center;
          color: #757575;
          border-bottom: .08533rem solid #fff;
        }
      }
    }
  }
}

.pullBtn {
  position: absolute;
  top: 0;
  right: .256rem;
  width: 1.38667rem;
  height: 1.87733rem;
  .pullBtn_icon {
    display: block;
    width: .68267rem;
    height: 1.87733rem;
    margin: 0 auto;
  }
}
</style>
