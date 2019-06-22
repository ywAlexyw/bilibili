<template>
    <div class="rankPage">
        <div class="fixTop">
            <div class="topArea">
                <router-link to="/channels/1" class="backIcon">
                    <img src="//s1.hdslb.com/bfs/static/mult/images/back.png">
                </router-link>
                <div class="topTitle">
                    <p>排行榜</p>
                </div>
            </div>
            <nav class="rank-nav">
                <div class="rn-pagesContainer">
                    <div class="tabs">
                        <div class="tabs-item" v-for="(item, index) in navs" :key="index">
                            <p v-if=" index === 0" :class="{active: index === 0}"   @click="rankNavsBtn(index)" ref="navsBtn">全站</p>
                            <p v-else @click="rankNavsBtn(index)" ref="navsBtn">{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="rank-content">
            <div class="rankVideo">
                <div class="itemWrap">
                    <router-link to="/video" class="rank-itemVideo" v-for="(item, index) in videos" :key="index">
                        <div class="item_index" v-if="index === 0">
                            <img src="../assets/rank1.png">
                        </div>
                        <div class="item_index" v-if="index === 1">
                            <img src="../assets/rank2.png">
                        </div>
                        <div class="item_index" v-if="index === 2">
                            <img src="../assets/rank3.png">
                        </div>
                        <div class="item_index" v-if="index > 2">
                            <p>{{item.id}}</p>
                        </div>
                        <div class="item_img">
                            <img :src="item.image">
                            <div class="itemTime">00:00:00</div>
                        </div>
                        <div class="item_info">
                            <div class="ii-title">
                                <p>{{item.name}}</p>
                            </div>
                            <div class="ii-uper">
                                <img src="//s1.hdslb.com/bfs/static/mult/images/ico_up.png">
                                <p>{{item.uper}}</p>
                            </div>
                            <div class="ii-Info">
                                <div class="plays">
                                    <img src="//s1.hdslb.com/bfs/static/mult/images/ico_play.png">
                                    <p>{{item.plays}}</p>
                                </div>
                                <div class="comments">
                                    <img src="//s1.hdslb.com/bfs/static/mult/images/ico_danmu.png">
                                    <p>{{item.asdasd}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getNav, getVideos } from '@/js/request'

export default {
  data () {
    return {
      navs: [],
      videos: [],
      num: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getNav().then((res) => {
        this.navs = res.data.navs
      })
      getVideos().then((res) => {
        this.videos = res.data.videos
      })
    },
    rankNavsBtn (index) {
      var active = document.getElementsByClassName('active')[0]
      active.classList.remove('active')
      this.$refs.navsBtn[index].classList.add('active')
      this.num = index
    }
  },
  watch: {
    num (val) {
      getVideos().then((res) => {
        this.videos = res.data.videos
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scope>
.fixTop {
    position: fixed;
    z-index: 10;
    width: 100%;
    background-color: #f4f4f4;
    .topArea {
        position: relative;
        width: 100%;
        height: 1.32267rem;
        padding: .27733rem 0;
        background-color: #fff;
    }
    .rank-nav {
        position: relative;
        background-color: #fff;
        width: 96.8%;
        padding-left: .512rem;
        margin-bottom: .21333rem;
        overflow: hidden;
        .rn-pagesContainer {
            position: relative;
            width: 100%;
            height: 1.67733rem;
            overflow: hidden;
            .tabs {
                position: relative;
                display: flex;
                flex-direction: row;
                height: 2rem;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
            }
        }
    }
}

.rank-content {
    position: relative;
    padding-top: 3.86667rem;
    background-color: #f4f4f4;
}

.backIcon {
    position: absolute;
    display: block;
    left: .42667rem;
    top: 50%;
    width: 1.536rem;
    transform: translateY(-50%);
    img {
        position: relative;
        display: block;
        width: 25%;
        margin: auto;
    }
}

.topTitle {
    position: absolute;
    width: 2.26133rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    p {
        font-size: .68267rem;
        line-height: 1.024rem;
        color: #fb7299;
        text-align: center;
    }
}

.tabs-item {
    position: relative;
    float: left;
    width: 1.28rem;
    background-color: #fff;
    margin-right: 1.49333rem;
    p {
        font-size: .59733rem;
        line-height: 1.408rem;
        text-align: center;
        color: hsla(0,0%,46%,.8);
    }
}

.rankVideo {
    position: relative;
    padding: .5rem 0 0;
}

.rank-itemVideo {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: .42667rem;
    padding-bottom: .42667rem;
    opacity: 1;
    border-bottom: .02133rem solid #e7e7e7;
    background-color: #f4f4f4;
    .item_img {
        position: relative;
        width: 4.992rem;
        height: 3.2rem;
        overflow: hidden;
        border-radius: .256rem;
        border: .04267rem solid;
    }
    .item_info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0 .512rem 0 .34133rem;
        flex: 1;
    }
}

.item_info .ii-Info {
    position: relative;
    width: 100%;
    .plays {
        position: relative;
        float: left;
    }
    .comments {
        position: relative;
        margin-left: 3.84rem;
    }
    p {
        float: left;
        margin-left: .25333rem;
        font-size: .512rem;
        color: #999;
        line-height: .512rem;
    }
    img {
        display: inline-block;
        vertical-align: middle;
        width: .59733rem;
        float: left;
    }
}

.item_info .ii-title {
    position: relative;
    width: 100%;
    height: 1.36533rem;
    overflow: hidden;
    p {
        text-align: left;
        font-size: .59733rem;
        line-height: .68267rem;
        word-break: break-all;
    }
}

.ii-uper {
    position: relative;
    width: 100%;
    height: 1.19467rem;
    margin-top: .08533rem;
    display: flex;
    align-items: center;
    img {
        position: relative;
        float: left;
        display: block;
        width: .59733rem;
        height: .59733rem;
    }
    p {
        margin-left: .25333rem;
        text-align: left;
        font-size: .512rem;
        color: #999;
        line-height: 1.19467rem;
    }
}

.item_index {
    position: relative;
    float: left;
    width: 2.176rem;
    height: 3.11467rem;
    p {
        text-align: center;
        font-size: .59733rem;
        color: #999;
        line-height: 3.11467rem;
    }
    img {
        display: block;
        width: .81067rem;
        height: 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}

.play_icon, .comment {
  position: relative;
  float: left;
  width: .68267rem;
  margin-top: -.064rem;
}
</style>
