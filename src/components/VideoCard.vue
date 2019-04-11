<template>
    <router-link to="/video" class="video-item">
      <div class="video-item-img">
        <div class="info">
          <div class="play_icon">
            <i class="playIcon"></i>
          </div>
          <div class="play_num">
            <slot name="playNum"></slot>
          </div>
          <div class="comment">
            <i class="commentIcon"></i>
          </div>
          <div class="comment_num">
            <slot name="commentNum"></slot>
          </div>
        </div>
      </div>
      <div class="video-item-title">
        <slot name="itemName"></slot>
      </div>
    </router-link>
</template>

<style lang="scss" rel="stylesheet/scss">
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


// .info-video {
//   position: absolute;
//   width: 100%;
//   height: .68267rem;
//   left: 0;
//   bottom: 0;
//   padding-left: .34133rem;
//   // background: linear-gradient(180deg,rgba(33,33,33,0),rgba(33,33,33,.5));
//   z-index: 3;
//   .play_num p, .comment_num p {
//     text-align: left;
//     font-size: .46933rem;
//     color: #fff;
//     line-height: .59733rem;
//   }
//   .comment {
//     margin-left: .61867rem;
//   }
// }


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
