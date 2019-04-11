<template>
    <div class="indexPage">
        <div class="indexP-content">
            <Nav>
                <div slot="scrollContainer">
                    <div class="navSub">
                        <div class="n-s-wrapper">
                            <div class="scrollContainer">
                                <template v-for="(item, index) in channels">
                                    <a class="navSub-wra-item" :key="index" v-if="index === 0">
                                        <p class="item_2" :class="{ subActive: index === 0 }" @click="getSubActive($event, index)">推荐</p>
                                    </a>
                                    <a class="navSub-wra-item" :key="index" v-else>
                                        <p class="item_2" @click="getSubActive($event, index)">{{item.title}}</p>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </Nav>
            <div class="index-line"></div>
            <VideoLayout>
                <div slot="videoLayout" class="clearFloat">
                    <Card v-for="(item, index) in channels" :key="index">
                        <p slot="title" class="VL-title" :class="{ firstTitle: index === 0 }">{{item.title}}</p>
                        <a slot="rank"  class="rank clearFloat" v-if="index === 0">
                            <i class="rankIcon"></i>
                            <div class="rank-words" >
                                <p>排行榜</p>
                            </div>
                            <div class="rank-arrow">
                                <i class="icon_arrow"></i>
                            </div>
                        </a>
                        <a slot="moreItem"  class="moreItem clearFloat" v-else>
                            <div class="moreItem-words" >
                                <p>查看更多</p>
                            </div>
                            <div class="moreItem-arrow">
                                <i class="icon_arrow"></i>
                            </div>
                        </a>
                        <div slot="videos" class="clearFloat">
                            <VideoCard v-for="(sub, index) in item.childs" :key="index">
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
import Nav from '@/components/Nav'
import Card from '@/components/Card'
import VideoLayout from '@/components/VideoLayout'
import VideoCard from '@/components/VideoCard'
import Container from '@/components/Container'
import { getChannels } from '@/js/request.js'

export default {
  components: {
      VideoLayout,
      VideoCard,
      Card,
      Nav,
      Container
  },
  data () {
    return {
      channels: [],
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
    },
    getSubActive (el, index) {
      var subActive = document.getElementsByClassName('subActive')[0]
      subActive.classList.remove('subActive')
      el.target.classList.add('subActive')
    },
    changeChannels (index) {
      getChannels().then((res) => {
        switch (index) {
          case 1:
            this.channels = res.data.channel_1
            break
          case 2:
            this.channels = res.data.channel_2
            break
          case 3:
            this.channels = res.data.channel_3
            break
          case 4:
            this.channels = res.data.channel_4
            break
          default:
            return
        }
      })
    }
  },
  watch: {
    '$store.state.channels' (val) {
      this.changeChannels(val)
    //   this.onIndex = val
    },
    $route (to, from) {
      
    }
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

.Nav-line {
    position: relative;
    width: 100%;
    padding-top: 37.52px;
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

</style>
