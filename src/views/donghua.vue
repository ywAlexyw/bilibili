<template>
    <div class="indexPage">
        <div class="indexP-content">
            <Nav>
                <div slot="navSub" class="navSub">
                    <div class="n-s-wrapper">
                        <div class="scrollContainer">
                            <a class="wra-item">
                                <p class="item_1">推荐</p>
                            </a>
                            <template v-for="(item, index) in channel_1" >
                                <a class="wra-item" :key="index"  v-if="index > 0">
                                    <p class="item_1">{{item.title}}</p>
                                </a>
                            </template>
                        </div>
                    </div>
                </div>
            </Nav>
            <div class="index-line"></div>
            <VideoLayout>
                <div slot="videoLayout" class="clearFloat">
                    <Card v-for="(item, index) in channel_1" :key="index">
                        <p slot="title" class="VL-title">{{item.title}}</p>
                        <a slot="rank"  class="rank clearFloat" v-if="index === 0">
                            <i class="rankIcon"></i>
                            <div class="rank-words" >
                                <p>排行榜</p>
                            </div>
                            <div class="rank-arrow">
                                <i class="icon_arrow"></i>
                            </div>
                        </a>
                        <a slot="moreItem"  class="moreItem clearFloat" v-if="index !== 0">
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
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Card from '@/components/Card'
import VideoLayout from '@/components/VideoLayout'
import VideoCard from '@/components/VideoCard'
import { getChannels } from '@/js/request.js'

export default {
  components: {
      VideoLayout,
      VideoCard,
      Card,
      Nav
  },
  data () {
    return {
      channel_1: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getChannels().then((res) => {
        this.channel_1 = res.data.channel_1
      })
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

.navSub {
    position: relative;
    width: 100%;
    height: 1.87733rem;
    overflow: hidden;
    background-color: #f9f9f9;
    z-index: 1;
    .n-s-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        .scrollContainer {
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            padding-left: .896rem;
            padding-bottom: .21333rem;
            .wra-item {
                display: inline-block;
                margin-right: 1.024rem;
                p {
                    font-size: .59733rem;
                    line-height: 1.87733rem;
                    text-align: center;
                    color: #757575;
                }
            }
        }
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

.rank {
    position: absolute;
    right: .512rem;
    top: .29867rem;
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

</style>
