<template>
  <div class="index-nav">
    <nav class="nav">
      <div class="nav-content">
        <div class="n-c-wrapper">
          <a class="wra-item" v-for="(item, index) in Nav" :key="index" >
            <p :class="{ active: index === 0 }" @click="navActive($event)">{{item.name}}</p>
          </a>
        </div>
      </div>
      <div class="pullBtn" @click="show = true">
        <i class="pullBtn_icon"></i>
      </div>
    </nav>
    <div class="navBox" :class="{ showNavBox: show }">
      <div class="navBox-content">
        <a class="navBox-item" v-for="(item, index) in Nav" :key="index" :class="{ big: index > 11 && index < 14}">
          <p :class="{ box_active: index === 0 }"  @click="navActive($event)">{{item.name}}</p>
        </a>
      </div>
      <div class="pushBtn" @click="show = false">
        <i class="pushBtn_icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getNav } from '@/js/request.js'
import { watch } from 'fs';
import { setTimeout } from 'timers';

export default {
  data () {
    return {
      navs: [],
      show: false,
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getNav().then((res) => {
        this.Nav = res.data.navs
      })
    },
    navActive (el) {
      if (this.show === true) {
        var box_active = document.getElementsByClassName('box_active')[0]
        box_active.classList.remove('box_active')
        el.target.classList.add('box_active')
      } else {
        var active = document.getElementsByClassName('active')[0]
        active.classList.remove('active')
        el.target.classList.add('active')
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.nav-content {
  position: relative;
  width: 90%;
  padding-top: .256rem;
  overflow: hidden;
  .n-c-wrapper {
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

.nav {
  position: fixed;
  width: 100%;
  height: 1.87733rem;
  top: 1.856rem;
  background-color: #fff;
  overflow: hidden;
  z-index: 5;
}

.navBox {
  position: fixed;
  top: -6.5rem;
  padding-left: .34133rem;
  padding-right: .29867rem;
  overflow: hidden;
  background-color: #fff;
  transition: .4s;
  z-index: 6;
  .navBox-content {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .navBox-item {
      position: relative;
      display: block;
      padding-top: .256rem;
      padding-bottom: .256rem;
      margin-left: .59733rem;
      margin-right: .59733rem;
      background-color: #fff;
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

.pushBtn {
  position: relative;
  margin: auto;
  margin-top: -.10667rem;
  width: 3.84rem;
  height: .91733rem;
  margin-bottom: .27733rem;
}

.pushBtn_icon {
  position: absolute;
  display: block;
  width: .68267rem;
  height: .91733rem;
  margin: auto;
  left: 1.57867rem;
}

.big {
  margin: 0 .29867rem!important;
  p {
    width: 1.96267rem!important;
  }
}

.showNavBox {
  top: 1.87733rem;
}

.active, .box_active {
  color: #fb7299!important;
  border-bottom: .08533rem solid #fb7299!important;
}
</style>
