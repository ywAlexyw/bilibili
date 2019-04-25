<template>
  <footer class="footer" v-show="showContainer">
    <div class="f-background"></div>
    <img class="f-closeBtn" @click="closeBtn" src="http://s1.hdslb.com/bfs/static/mult/images/ic_close_bottom.png">
    <img class="f-logo" src="http://s1.hdslb.com/bfs/static/mult/images/logo_bottom.png">
    <div class="f-content">
      <div class="f-c-title">上bilibili客户端</div>
      <div class="f-c-message">高清视频 新番电影一览无余</div>
    </div>
    <a class="tiyanBtn">
      <p>立即体验</p>
    </a>
  </footer>
</template>

<script>
export default {
  computed: {
    showContainer () {
      return this.$store.state.showContainer
    }
  },
  methods: {
    closeBtn () {
      this.$store.commit('setShowContainer', false)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.footer {
  position: fixed;
  width: 100%;
  height: 2.56rem;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items:center;
  z-index: 1001;
 .f-background {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   opacity: 0.8;
   background: #000;
   z-index: -1;
 }
  .f-closeBtn {
    width: .42667rem;
    height: .42667rem;
    margin-left: .512rem;
    margin-right: .68267rem;
  }
  .f-logo {
    width: 1.36533rem;
    height: 1.36533rem;
    margin-right: .256rem;
  }
  .tiyanBtn {
   margin-left: auto;
    height: 1.28rem;
    line-height: 1.28rem;
    width: 3.072rem;
    font-size: .59733rem;
    color: #fff;
    background: #fb7299;
    border-radius: .17067rem;
    text-align: center;
    margin-right: .512rem;
  }
}

.f-content .f-c-title {
  line-height: 0.8rem;
  font-size: .59733rem;
  color: #fff;
}
.f-content .f-c-message {
  line-height: 0.8rem;
  font-size: .512rem;
  color: #999;
}
</style>
