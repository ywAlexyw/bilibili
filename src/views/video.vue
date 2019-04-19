<template>
    <div class="page">
        <Header></Header>
        <div class="page-video">
            <div class="player">
                <div class="player-box">
                    <div class="display">
                        <div class="load-layer">
                            <Video @byVideo="process"></Video>
                            <img class="videoImg">
                            <i class="TV-Play" :class="{move: getVideoInfo}" @click="videoPlay" v-if="!play"></i>
                            <i class="TV-Puase" :class="{move: getVideoInfo}" @click="videoPlay" v-else></i>
                            <div class="innerTop">
                                <p>av47441335</p>
                            </div>
                            <div class="videoTime" v-if="allTime === ''">
                                <p>00:00</p>
                                
                            </div>
                        </div>
                        <div class="player-contorl" v-if="allTime !== ''">
                            <div class="time-container">
                                <span class="time">{{currentTime}}/{{allTime}}</span>
                            </div>
                            <div class="contorl-right">
                                <span class="btn-widescreen">
                                    <i class="icon-widescreen" @click="clickFullScreen"></i>
                                </span>
                            </div>
                            <div class="contorl-slider" ref="contorlSlider" @click="changProcess($event)">
                                <div class="line" ref="line"></div>
                                <div class="lineBtn" ref="lineBtn"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="openAppBtn">
                <p>高清更流畅，App内打开观看</p>
            </div>
            <div class="infoBlock">
                <div class="infoBlock-cont">
                    <div class="videoInfo">
                        <div class="video-title">
                            <a class="activity">活动</a>
                            <span class="title-cont">完美还阿三完美还阿三完美还阿三完美还阿三</span>
                        </div>
                        <div class="pullIcon" @click="allInfo = true" v-show="!allInfo">
                            <i class="pullBtn_icon"></i>
                        </div>
                        <div class="pushIcon" @click="allInfo = false" v-show="allInfo">
                            <i class="pushBtn_icon"></i>
                        </div>
                        <div class="info-video">
                            <a class="writer">啊是大</a>
                            <span class="videoNum">2222次观看</span>
                            <span class="barrageNum">5555弹幕</span>
                            <span class="pubdate">3-27</span>
                        </div>
                        <div class="video-introduce">
                            <div class="copyright">
                                <div class="icon_copyright">
                                    <i class="banIcon"></i>
                                </div>
                                <span>未经作者授权禁止转载</span>
                            </div>
                            <div class="descriptions">
                                <p>
                                    <span>
                                        <i>因为只画了30秒，所以要画的并不多</i><br/>
                                        大概也就700帧吧，十几个小时就画好了~<br/>
                                        这个月都第三个视频啦，这么肝的up猪，还不点个关注吗？<br/>
                                        希望大家能多点点三连呢~<br/>
                                        本萌新会再努力哒~<br/>
                                    </span>
                                </p>
                            </div>
                            <div class="video-url">
                                <a>
                                    主页
                                </a>
                                <a>
                                    主页
                                </a>
                                <a>
                                    主页
                                </a>
                                <span>av47441335</span>
                            </div>
                        </div>
                    </div>
                    <div class="videoTag">
                        <div class="tag-list">
                            <a class="tagItem">绘画</a>
                            <a class="tagItem">绘画啊</a>
                            <a class="tagItem">绘画</a>
                            <a class="tagItem">绘画</a>
                            <a class="tagItem">绘画搜索</a>
                            <a class="tagItem">绘画</a>
                            <a class="tagItem">绘画</a>
                            <a class="tagItem">绘画</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="operateZone">
                <div class="oz-videoTag">
                    <div class="favorite">
                        <div class="tagIconSize">
                            <i class="icon_favorite"></i>
                        </div>
                        <p>收藏</p>
                    </div>
                    <div class="download">
                        <div class="tagIconSize">
                            <i class="icon_download"></i>
                        </div>
                        <p>缓存</p>
                    </div>
                    <div class="share">
                        <div class="tagIconSize">
                            <i class="icon_share"></i>
                        </div>
                        <p>分享</p>
                    </div>
                    <div class="comments">
                        <img src="//s1.hdslb.com/bfs/static/mult/images/comment.png">
                        <span>5555 评论</span>
                    </div>
                </div>
            </div>
            <div class="relativeVideo">
                <div class="itemWrap">
                    <a class="itemVideo" v-for="(item, index) in videos" :key="index">
                        <div class="item_img">
                            <img >
                            <div class="itemTime">00:00:00</div>
                        </div>
                        <div class="item_info">
                            <div class="ii-title">
                                <p>{{item.name}}</p>
                            </div>
                            <div class="ii-subInfo">
                                <p>{{item.plays}}万&nbsp;·</p>
                                <p>&nbsp;{{item.mesNum}}弹幕</p>
                            </div>
                            <div class="ii-openApp">App 内打开</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Video from '@/components/Video'
import { getVideos } from '@/js/request.js'

export default {
  components: {
    Header,
    Video
  },
  data () {
    return {
      videos: [],
      allInfo: false,
      infoHeight: [],
      getVideoInfo: false,
      newTime: ''
    }
  },
  computed: {
    play () {
      return this.$store.state.play
    },
    currentTime () {
      return this.$store.state.currentTime
    },
    allTime () {
      return this.$store.state.allTime
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getVideos().then((res) => {
        this.videos = res.data.videos
      })
    },
    videoPlay () {
      this.$store.commit('videoPlay')
      if (this.getVideoInfo === false) {
        this.getVideoInfo = true
      }
    },
    clickFullScreen () {
      this.$store.commit('setFullScreen')
    },
    process (val) {
      let processWidth = ((val.time_1 / val.time_0) * 100).toFixed(6)
      this.move(processWidth)
    },
    changProcess (el) {
      let a = document.getElementsByClassName('contorl-slider')[0]
      let processWidth = el.clientX - this.$refs.contorlSlider.offsetLeft
      let place = (processWidth / el.srcElement.clientWidth) * 100
      this.move(place)
      this.newTime = place
    },
    move (val) {
      this.$refs.line.style.width = val + '%'
    }
  },
  watch: {
    allInfo (val) {
      if (val === true) {
        var IBheight = this.infoHeight[3].clientHeight
        var getHeight = this.infoHeight[0].clientHeight
        this.infoHeight[1].style.height = (getHeight / 20) * 1.024 + 'rem'
        this.infoHeight[2].style.height = (IBheight / 20) * 1.024 + 'rem'
      } else {
        this.infoHeight[1].style.height = 1.024 + 'rem'
        this.infoHeight[2].style.height = 2.38933 + 'rem'
      }
    }
  },
  mounted () {
    var titleHeight = document.getElementsByClassName('title-cont')[0]
    var setTitle = document.getElementsByClassName('video-title')[0]
    var infoBlock = document.getElementsByClassName('infoBlock')[0]
    var IBheight = document.getElementsByClassName('infoBlock-cont')[0]
    this.infoHeight.push(titleHeight, setTitle, infoBlock, IBheight)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.page-video {
  position: relative;
  padding-top: 1.87733rem;
  .player {
    position: relative;
    width: 100%;
    height: 9.00267rem;
    background-color: #fff;
  }
  .openAppBtn {
    position: relative;
    width: 14.976rem;
    margin: auto;
    padding-top: .64rem;
    margin-bottom: .21333rem;
  }
  .infoBlock {
    position: relative;
    width: 100%;
    height: 2.38933rem;
    overflow: hidden;
    transition: 0.3s;
  }
  .relativeVideo {
    position: relative;
    padding: .21333rem 0 0;
  }
}

.player-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .display {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    user-select: none;
    .load-layer {
      display: block;
      position: absolute;
      z-index: 3;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(60,60,60,.5);
      overflow: hidden;
      cursor: pointer;
      text-align: center;
    }
  }
}

.videoImg {
  border-style: none;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: .85;
  margin: 0;
  padding: 0;
  filter: blur(.34133rem);
  -webkit-filter: blur(.34133rem);
}

.TV-Play, .TV-Puase {
  position: absolute;
  display: block;
  bottom: .6912rem;
  right: .55467rem;
  width: 1.96267rem;
  height: 1.96267rem;
  background-size: 100% auto;
}

.move {
  bottom: 2.38933333rem;
}

.innerTop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg,rgba(33,33,33,.5),rgba(33,33,33,0));
  z-index: 999;
  p {
    font-size: .64rem;
    color: #fff;
    line-height: 1.36533rem;
    text-align: center;
  }
}

.videoTime {
  position: absolute;
  z-index: 999;
  bottom: .768rem;
  left: .512rem;
  border: .04267rem solid hsla(0,0%,100%,.6);
  background-color: hsla(0,0%,100%,.2);
  padding-left: .34133rem;
  padding-right: .34133rem;
  border-radius: .08533rem;
  p {
    color: #fff;
    font-size: .512rem;
    line-height: .85333rem;
    text-align: center;
  }
}

.openAppBtn p {
  background-color: #fb7299;
  border: .0224rem solid #fb7299;
  border-radius: 2.13333rem;
  height: 1.49333rem;
  line-height: 1.49333rem;
  font-size: .68267rem;
  color: #fff;
  text-align: center;
}

.activity {
    min-width: 1.49467rem;
    height: .79733rem;
    line-height: .79733rem;
    color: #fb7299;
    display: inline-block;
    border: .05133rem solid #fb7299;
    border-radius: .08533rem;
    background-color: #fff;
    text-align: center;
    font-size: .0042667rem;
    transform: scale(0.7);
    margin-right: .256rem;
    position: relative;
}

.title-cont {
    line-height: 1.024rem;
    font-size: .68267rem;
    font-style: normal;
    color: #212121;
}

.video-title {
    width: 14.10133rem;
    max-height: 2.048rem;
    overflow: hidden;
    margin: 0 0 .34133rem;
    line-height: 1.024rem;
    font-size: .68267rem;
    font-style: normal;
    color: #212121;
    height: 1.024rem;
    word-break: break-all;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    transition: .2s;
}

.info-video {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #999;
    .writer {
        font-family: PingFangSC-Regular;
        vertical-align: middle;
        display: inline-block;
        font-size: .512rem;
        color: #212121;
        margin-right: .768rem;
        height: .64rem;
        line-height: .64rem;
    }
    span {
        display: inline-block;
        height: .64rem;
        width: auto;
        margin-right: .34133rem;
        vertical-align: middle;
        line-height: .64rem;
        font-size: .512rem;
    }
}

.videoNum, .barrageNum {
    color: #999;
}

.infoBlock-cont {
    padding: .256rem .512rem .46933rem;
}

.pullIcon, .pushIcon {
    position: absolute;
    right: .46933rem;
    top: .04267rem;
    width: .768rem;
    height: .768rem;
}

.tagIconSize {
    position: relative;
    margin-right: .21333rem;
    width: .768rem;
    height: .768rem;
}

.oz-videoTag {
    position: relative;
    padding: .46933rem .768rem;
    border-bottom: .04267rem solid #e7e7e7;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #999;
    line-height: .42667rem;
    font-size: .42667rem;
    &>div {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .comments {
        margin-left: auto;
    }
    .favorite, .download, .share {
        margin-right: .85333rem;
    }
}

.comments img {
    display: block;
    width: .93867rem;
    margin-right: .10667rem;
}

.itemVideo {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 93.33%;
    margin-left: .512rem;
    padding-right: .512rem;
    padding-top: .42667rem;
    padding-bottom: .42667rem;
    opacity: 1;
    border-bottom: .02133rem solid #e7e7e7;
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

.itemTime {
    position: absolute;
    width: 2.31867rem;
    bottom: .17067rem;
    right: .17067rem;
    background: rgba(0,0,0,.3);
    border-radius: .08533rem;
    text-align: center;
    font-size: .46933rem;
    line-height: .64rem;
    color: #fff;
}

.item_info .ii-item {
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

.item_info .ii-subInfo {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: .256rem;
    p {
        text-align: left;
        font-size: .512rem;
        color: #999;
        line-height: .512rem;
    }
}

.item_info .ii-openApp {
    margin-top: .21333rem;
    padding: .08533rem .17067rem;
    display: inline-block;
    border: .04267rem solid #fb7299;
    border-radius: .08533rem;
    color: #fb7299;
    font-size: .42667rem;
}

.copyright span {
    color: #999;
    display: inline-block;
    height: .64rem;
    width: auto;
    vertical-align: middle;
    line-height: .64rem;
    font-size: .512rem;
}

.icon_copyright {
    display: inline-block;
    height: .64rem;
    width: .64rem;
    margin-right: .08533rem;
    vertical-align: middle;
    line-height: .64rem;
    font-size: .512rem;
}

.descriptions {
    white-space: pre-line;
    position: relative;
    line-height: .768rem;
    overflow: hidden;
    color: #999;
    font-size: .512rem;
    word-break: break-all;
}

.video-url {
    margin-top: .34133rem;
    font-size: .512rem;
    color: #999;
    a {
        float: left;
        color: #fb7299;
        font-size: .512rem;
        margin-right: .21333rem;
    }
    a:after {
        content: ">";
        display: inline-block;
        margin-left: .21333rem;
        font-size: .512rem;
        color: #ccc;
    }
}

.videoTag {
    position: relative;
    padding: 0 .512rem .512rem;
    color: #212121;
    .tag-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .tagItem {
            text-decoration: none;
            display: block;
            margin: 0;
            margin-bottom: .256rem;
            margin-right: .42667rem;
            padding: .34133rem .768rem;
            font-size: .512rem;
            background-color: #f4f4f4;
            border-radius: 4.26667rem;
            color: #505050;
            text-align: center;
            transform: scale(0.8);
        }
    }
}

.play_icon, .comment {
  position: relative;
  float: left;
  width: .68267rem;
  margin-top: -.064rem;
}

.player-contorl {
    position: absolute;
    // display: flex;
    // align-items: center;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.87733333rem;
    border: 0 solid #e2e2e2;
    background-color: rgba(0,0,0,.5);
    font-size: 0;
    text-align: left;
    opacity: 1;
    z-index: 5;
}

.time-container {
    position: absolute;
    top: 0;
    left: .512rem;
    height: 1.87733333rem;
}

.contorl-right {
    height: 100%;
    float: right;
    font-size: 0;
    margin-right: .512rem;
    cursor: default;
}

.btn-widescreen {
    display: block;
    height: 1.024rem;
    width: 1.024rem;
    text-align: center;
    vertical-align: top;
    background-color: rgba(0,0,0,0);
    color: #585858;
    margin-top: .512rem;
    margin-left: 1.024rem;
}

.time {
    font-size: .59733333rem;
    font-family: arial,sans-serif;
    color: #fff;
    height: 100%;
    line-height: 1.87733333rem;
    vertical-align: top;
    float: left;
}

.line:after {
    content: "";
    position: absolute;
    display: block;
    right: -.23466667rem;
    top: -.23466667rem;
    width: .512rem;
    height: .512rem;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: .02133333rem .02133333rem .128rem #000!important;
}

.line {
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    transform: translateZ(0);
    border-radius: 0;
    box-shadow: none;
    background-color: #de698c;
}

.contorl-slider {
    position: absolute;
    bottom: .896rem;
    left: 4.56533333rem;
    right: 4.90666667rem;
    width: auto;
    height: .08533333rem;
    background-color: #fff;
}
</style>
