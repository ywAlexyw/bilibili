<template>
  <div class="relativeVideo">
    <div class="itemWrap">
      <router-link to="/video" class="itemVideo" v-for="(item, index) in videos" :key="index">
        <div class="item_img">
          <img :src="item.image">
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
      </router-link>
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
.relativeVideo {
  position: relative;
  padding: 0.21333rem 0 0;
  background-color: #f4f4f4;
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
</style>
