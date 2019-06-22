<template>
    <div class="indexPage">
        <Header></Header>
        <div class="indexP-content">
            <Nav :onActive="onActive">
                <div slot="scrollContainer" class="navSub">
                    <div class="n-s-wrapper">
                        <div class="scrollContainer">
                            <template v-for="(item, index) in subTitle">
                                <a class="navSub-wra-item" :key="index"  v-if="item===0">
                                    <p class="navSub_item_2" :class="{ subActive: index === 0 }" @click="getSubActive(index)">推荐</p>
                                </a>
                                <router-link :to="'/channels/' + (item.id)" class="navSub-wra-item" :key="index" v-else>
                                    <p class="navSub_item_2" @click="getSubActive(index)">{{item.title}}</p>
                                </router-link>
                            </template>
                        </div>
                    </div>
                </div>
            </Nav>
            <div class="index-line"></div>
            <VideoLayout>
                <div slot="videoLayout" class="clearFloat">
                    <Card :onSubCont="onSubCont" v-for="(item, index) in channels" :key="index">
                        <p slot="title" class="VL-title" :class="{ firstTitle: index === 0 }" v-if="onSubCont">{{item.title}}</p>
                        <p slot="newTitle" class="VL-title" :class="{ new: !onSubCont }"  v-if="!onSubCont && index=== 1">最新视频</p>
                        <p slot="newTitle" class="VL-title" :class="{ hot: !onSubCont }" v-if="!onSubCont && index=== 0">热门推荐</p>
                        <router-link to="/rank" slot="rank"  class="rank clearFloat" v-if="index === 0" v-show="onSubCont">
                            <i class="rankIcon"></i>
                            <div class="rank-words" >
                                <p>排行榜</p>
                            </div>
                            <div class="rank-arrow">
                                <i class="icon_arrow"></i>
                            </div>
                        </router-link>
                        <a slot="moreItem"  class="moreItem clearFloat" v-else v-show="onSubCont" @click="getSubActive(index)">
                            <div class="moreItem-words" >
                                <p>查看更多</p>
                            </div>
                            <div class="moreItem-arrow">
                                <i class="icon_arrow"></i>
                            </div>
                        </a>
                        <div slot="videos" class="clearFloat">
                            <VideoCard v-for="(sub, index) in item.childs" :key="index">
                                <img slot="videoCardImg" :src="sub.image">
                                <p slot="playNum">{{sub.plays}}</p>
                                <p slot="commentNum">{{sub.mesNum}}</p>
                                <p slot="itemName">{{sub.name}}</p>
                            </VideoCard>
                        </div>
                    </Card>
                </div>
            </VideoLayout>
        </div>
        <Container></Container>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Card from '@/components/Card'
import VideoLayout from '@/components/VideoLayout'
import VideoCard from '@/components/VideoCard'
import Container from '@/components/Container'
import { getChannels, getSubTitle } from '@/js/request.js'

export default {
  components: {
    Header,
    VideoLayout,
    VideoCard,
    Card,
    Nav,
    Container
  },
  data () {
    return {
      channels: [],
      chaNum: 0,
      onSubCont: true,
      onSubNum: 0,
      subTitle: [],
      onActive: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getChannels().then((res) => {
        this.channels = res.data.channel_1
      })
      getSubTitle().then((res) => {
        this.subTitle = res.data.subTitle[0].Title
      })
    },
    getSubActive (index) {
      var boxTitle = document.getElementsByClassName('navSub_item_2')
      var subActive = document.getElementsByClassName('subActive')[0]
      if (typeof subActive !== 'undefined') {
        subActive.classList.remove('subActive')
        boxTitle[index].classList.add('subActive')
      }
      this.onSubCont = false
      this.onSubNum = index
      getChannels().then((res) => {
        this.channels = res.data.channel_1
      })
      if (index === 0) {
        this.onSubCont = true
      }
    }
  },
  watch: {
    '$store.state.channels' (val) {
      if (val === 0) {
        this.$router.push({
          path: '/'
        })
      } else {
        this.chaNum = val
        this.getSubActive(0)
        this.onSubCont = true
      }
    },
    chaNum (val) {
      getSubTitle().then((res) => {
        this.subTitle = res.data.subTitle[val - 1].Title
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    var pathArr = to.path.split('/')
    next(vm => {
      if (pathArr[1] === 'channels') {
        vm.onActive = pathArr[2]
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.index-line {
    position: relative;
    width: 100%;
    padding-top: 5.632rem;
    height: .02133rem;
    border-bottom: .02133rem solid #ccc;
}

.navSub-wra-item {
    display: inline-block;
    margin-right: 1.024rem;
    p {
        font-size: .59733rem;
        line-height: 1.87733rem;
        text-align: center;
        color: #757575;
    }
}

.more {
    position: relative;
    float: left;
    width: 2.47467rem;
    margin-left: .23467rem;
    margin-top: .14933rem;
    p {
        font-size: .59733rem;
        color: #999;
        text-align: center;
        line-height: .59733rem;
    }
}

.moreItem {
    position: absolute;
    right: .512rem;
    top: .29867rem;
    .moreItem-words {
        position: relative;
        float: left;
        width: 2.47467rem;
        margin-left: .23467rem;
        margin-top: .14933rem;
        p {
            font-size: .59733rem;
            color: #999;
            text-align: center;
            line-height: .59733rem;
        }
    }
    .moreItem-arrow {
        position: relative;
        height: .59733rem;
        width: .59733rem;
        margin-top: .192rem;
        margin-left: .21333rem;
        float: left;
    }
}

.VL-title {
    font-size: .68267rem;
    line-height: 1.49333rem;
    text-align: left;
    color: #212121;
}

.VL_title_2 {
  line-height: 1.10933rem;
}

.firstTitle{
    line-height: 2.26133rem;
}

.rank {
    position: absolute;
    right: .512rem;
    top: .8rem;
    .rankIcon {
        position: relative;
        width: 1.36533rem;
        height: .81067rem;
        float: left;
        display: block;
    }
    .rank-words {
        position: relative;
        float: left;
        width: 1.87733rem;
        margin-top: .14933rem;
        p {
            font-size: .59733rem;
            color: #ffa726;
            text-align: center;
            line-height: .59733rem;
        }
    }
    .rank-arrow {
        position: relative;
        width: .59733rem;
        height: .59733rem;
        margin-top: .14933rem;
        margin-left: .21333rem;
        float: left;
    }
}

.subActive {
    color: #fb7299!important;
}

.navSub {
  position: relative;
  width: 100%;
  height: 1.87733rem;
  margin-top: -.3rem;
  overflow: hidden;
  background-color: #fff;
  z-index: 1;
  .n-s-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .scrollContainer {
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      padding-left: 0.896rem;
      padding-bottom: 0.29rem;
    }
  }
}

.hot {
  line-height: 2.26133rem;
}

.new {
  line-height: 1.10933rem;
}

</style>
