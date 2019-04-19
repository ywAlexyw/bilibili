<template>
  <nav class="nav" :class="{ nav_index: navIndex }">
    <div class="pagesContainer" :class="{ nav_index_pagesContainer: navIndex }">
      <div class="nav-content" :class="{ nav_index_content: navIndex }">
        <div class="roller-hidden">
          <div class="n-c-wrapper" :class="{ nav_index_wrapper: navIndex }">
            <router-link to="/" class="wra-item" >
              <p class="item_1" @click="navActive(0)" :class="{ active: onIndex === 0 }">首页</p>
            </router-link>
            <template  v-for="(item, index) in navs">
              <router-link :to="'/channels/' + (item.id)" class="wra-item"
                :key="index" v-if="index !== 0">
                <p
                  class="item_1"
                  :class="{ active: index === onIndex }"
                  @click="navActive(index)"
                >{{item.name}}</p>
              </router-link>
            </template>
          </div>
        </div>
      </div>
      <div class="pullBtn" @click="show = true" :class="{ pullBtn_index: navIndex }">
        <i class="pullBtn_icon"></i>
      </div>
      <div class="navBox" :class="{ showNavBox: show }">
        <div class="navBox-content">
          <router-link :to="'/channels/' + (item.id)"
            class="navBox-item"
            v-for="(item, index) in navs"
            :key="index"
            :class="{ big: index > 11 && index < 14}"
          >
            <p
              class="item_2"
              :class="{ box_active: index === 0 }"
              @click="navActive(index)"
            >{{item.name}}</p>
          </router-link>
        </div>
        <div class="pushBtn" @click="show = false">
          <i class="pushBtn_icon"></i>
        </div>
      </div>
      <slot name="scrollContainer"></slot>
    </div>
  </nav>
</template>

<script>
import { getNav } from "@/js/request.js"

export default {
  props: {
    onActive: String
  },
  data() {
    return {
      navs: [],
      show: false,
      navIndex: true
    }
  },
  created() {
    this.getData()
  },
  computed: {
    onIndex () {
      return this.$store.state.channels
    }
  },
  methods: {
    getData() {
      getNav().then(res => {
        this.navs = res.data.navs
      })
    },
    navActive(index) {
      var boxActive = document.getElementsByClassName("box_active")[0]
      var active = document.getElementsByClassName("active")[0]
      var item1 = document.getElementsByClassName("item_1")
      var item2 = document.getElementsByClassName("item_2")
      boxActive.classList.remove("box_active")
      active.classList.remove("active")
      item1[index].classList.add("active")
      item2[index].classList.add("box_active")
      this.$store.commit('setChannels', index)
      this.show = false
    }
  },
  watch: {
    $route (to, from) {
      if (to.path.split('/')[1] === 'channels') {
        this.navIndex = false
      } if (to.path === '/') {
        this.navIndex = true
        this.$store.commit('setChannels', 0)
      }
    },
    navs (val) {
      if (this.$route.path.split('/')[1] === 'channels') {
        val.forEach((value, index) => {
          if (value.id === this.onActive) {
            this.$store.commit('setChannels', index)
            this.navIndex = false
          }
        })
      }
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
.nav-content {
  position: relative;
  width: 85%;
  height: 1.87733rem;
  padding-top: 0.256rem;
  overflow: hidden;
  .n-c-wrapper {
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    top: .4rem;
    height: 2.1rem;
    white-space: nowrap;
    .wra-item {
      display: inline-block;
      background-color: #fff;
      padding: 0 .74667rem;
      p {
        width: 1.36533rem;
        font-size: 0.59733rem;
        line-height: 1.28rem;
        text-align: center;
        color: #757575;
        border-bottom: 0.08533rem solid #fff;
      }
    }
  }
}

.nav_index_content {
  width: 90%;
  .nav_index_wrapper {
    position: relative;
    padding-left: 1.024rem;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 2.1rem;
    white-space: nowrap;
    .wra-item {
      margin-right: 1.49333rem;
      padding: 0;
    }
  }
}

.pullBtn {
  position: absolute;
  top: 0;
  right: .768rem;
  width: 1.38667rem;
  height: 1.87733rem;
  .pullBtn_icon {
    display: block;
    width: 0.68267rem;
    height: 1.87733rem;
    margin: 0 auto;
  }
}

.pullBtn_index {
  right: .256rem;
}

.nav {
  position: fixed;
  height: 3.75466rem; 
  width: 100%;
  top: 1.856rem;
  background-color: #fff;
  z-index: 5;
}

.nav_index {
  height: 1.87733rem;
  // overflow: hidden;
}

.navBox {
  position: fixed;
  top: -6.5rem;
  padding-left: 0.34133rem;
  padding-right: 0.29867rem;
  overflow: hidden;
  background-color: #fff;
  transition: 0.4s;
  z-index: 6;
  .navBox-content {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .navBox-item {
      position: relative;
      display: block;
      padding-top: 0.256rem;
      padding-bottom: 0.256rem;
      margin-left: 0.59733rem;
      margin-right: 0.59733rem;
      background-color: #fff;
      p {
        width: 1.36533rem;
        font-size: 0.59733rem;
        line-height: 1.28rem;
        text-align: center;
        color: #757575;
        border-bottom: 0.08533rem solid #fff;
      }
    }
  }
}

.pushBtn {
  position: relative;
  margin: auto;
  margin-top: -0.10667rem;
  width: 3.84rem;
  height: 0.91733rem;
  margin-bottom: 0.27733rem;
}

.pushBtn_icon {
  position: relative;
  display: block;
  width: 0.68267rem;
  height: 0.91733rem;
  margin: auto;
}

.big {
  margin: 0 0.29867rem !important;
  p {
    width: 1.96267rem !important;
  }
}

.showNavBox {
  top: 1.87733rem;
}

.active,
.box_active {
  color: #fb7299 !important;
  border-bottom: 0.08533rem solid #fb7299 !important;
}

.pagesContainer {
  height: 1.87733rem;
}

.roller-hidden {
  height: 2rem;
  overflow: hidden;
  position: relative;
  top: -0.3rem;
}

// .n-c-wrapper::-webkit-scrollbar {
//   width: 0 !important
// }

// .n-c-wrapper { -ms-overflow-style: none; }


// .n-c-wrapper { overflow: -moz-scrollbars-none; }
</style>
