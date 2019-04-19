<template>
    <div class="RankingFlow">
        <div class="RF-content">
            <div class="video clearFloat">
                <router-link to="video" class="video-item" v-for="(item, index) in videos" :key="index">
                    <div class="video-item-img">
                        <img :src="item.image" :alt="item.name">
                        <div class="info">
                            <div class="play_icon">
                                <i class="playIcon"></i>
                            </div>
                            <div class="play_num">
                                <p>{{item.plays}}</p>
                            </div>
                            <div class="comment">
                                <i class="commentIcon"></i>
                            </div>
                            <div class="comment_num">
                                <p>{{item.mesNum}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="video-item-title">
                        <p>{{item.name}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { getVideos } from '@/js/request.js'

export default {
  data () {
    return {
      videos: []
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
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.RankingFlow {
  position: relative;
  width: 100%;
  padding-top: .512rem;
  .RF-content {
    position: relative;
    padding: 0 .256rem;
  }
}

.video-item {
  float: left;
  display: block;
  position: relative;
  width: 50%;
  margin-bottom: .68267rem;
  .video-item-img {
    position: relative;
    width: 7.232rem;
    height: 4.52267rem;
    overflow: hidden;
    display: block;
    margin: auto;
    border-radius: .23rem;
    background-color: #e7e7e7;
    background-image: linear-gradient(transparent 50%,rgba(0,0,0,.5));
    z-index: 1;
  }
  .video-item-title {
    width: 7.232rem;
    position: relative;
    margin: auto;
    margin-top: .21333rem;
    height: 1.36533rem;
    overflow: hidden;
    p {
      font-size: .55467rem;
      color: #212121;
      letter-spacing: 0;
      line-height: .68267rem;
      text-align: left;
    }
  }
}



.playIcon, .commentIcon {
  display: block;
  width: 100%;
  height: .68267rem;
  fill: #fff;
}

.play_icon, .comment {
  position: relative;
  float: left;
  width: .68267rem;
  margin-top: -.064rem;
}

.play_num, .comment_num,{
  position: relative;
  float: left;
  margin-left: .256rem;
  width: 2.048rem;
}

</style>
