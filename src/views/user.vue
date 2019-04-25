<template>
    <div class="userInfo-page">
        <Header></Header>
        <div class="UI-space"></div>
        <div class="UI-img">
            <img src="//s1.hdslb.com/bfs/static/mult/images/bannerTop.png">
        </div>
        <div class="userInfo">
            <div class="info-face">
                <img src="//static.hdslb.com/images/member/noface.gif">
            </div>
            <div class="name">
                <p>史蒂夫</p>
            </div>
            <div class="signOut" @click="signOut">
                <p>退出登录</p>
            </div>
            <div class="details clearFloat">
                <p>
                    <span>0</span>
                    关注
                </p>
                <p>
                    <span>0</span>
                    粉丝
                </p>
            </div>
        </div>
        <div class="UI-tags clearFloat">
            <div class="tages_history">
                <p class="onTage" @click="show = true; addClass($event)">历史记录</p>
            </div>
            <div class="tages_contribute">
                <p  @click="show = false; addClass($event)">我的投稿</p>
            </div>
        </div>
        <CardOther v-if="show"></CardOther>
        <div class="contribute" v-else>
            <div class="noInfo">
                <img src="//s1.hdslb.com/bfs/static/mult/images/noContent.png">
                <p>你还没投过稿</p>
                <p>
                    快去发现
                    <router-link to="/" class="newContent">新内容</router-link>
                    吧！
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import CardOther from '@/components/CardOther.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    CardOther,
    Header
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    addClass (el) {
      let onTage = document.getElementsByClassName('onTage')[0]
      onTage.classList.remove('onTage')
      el.target.className = 'onTage'
    },
    signOut () {
      this.$store.commit('setUserInfo')
      this.$store.commit('logined', false)
      this.$router.push({
        path: '/'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$store.state.user.login) {
        vm.$router.push({
          path: '/'
        })
      }
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.UI-space {
    position: relative;
    width: 100%;
    padding-top: 1.87733rem;
}

.UI-img {
    position: relative;
    width: 100%;
    height: 5.54667rem;
    img {
        display: block;
        width: 100%;
    }
}

.userInfo {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding-bottom: .768rem;
    .info-face {
        position: absolute;
        top: -1.70667rem;
        z-index: 1;
        left: .512rem;
        width: 3.41333rem;
        height: 3.41333rem;
        border-radius: 50%;
        background-size: 100% 100%;
        overflow: hidden;
        img {
            position: absolute;
            display: block;
            width: auto;
            height: 100%;
        }
    }
    .name {
        position: relative;
        padding-top: 2.56rem;
        margin-left: .512rem;
        P {
            font-size: .85333rem;
            color: #212121;
            line-height: 1.024rem;
        }
    }
    .details {
        position: relative;
        margin-left: .512rem;
        margin-top: .512rem;
        margin-right: .512rem;
        P {
            float: left;
            font-size: .59733rem;
            line-height: .72533rem;
            color: #757575;
            text-align: left;
        }
        p:last-child {
            margin-left: .896rem;
        }
    }
}

.signOut {
    position: absolute;
    z-index: 2;
    top: .42667rem;
    right: .512rem;
    border: .02133rem solid #fb7299;
    border-radius: .17067rem;
    width: 3.072rem;
    p {
        font-size: .59733rem;
        line-height: 1.19467rem;
        color: #fb7299;
        text-align: center;
    }
}

.UI-tags {
    position: relative;
    width: 100%;
    padding: 0;
    background-color: #fff;
    border-top: .02133rem solid #979797;
    border-bottom: .02133rem solid #979797;
    .tages_history, .tages_contribute {
        position: relative;
        float: left;
        width: 50%;
        p {
            font-size: .59733rem;
            line-height: 1.62133rem;
            color: #666;
            text-align: center;
        }
    }
}

.noInfo {
    position: relative;
    padding-top: 3.62667rem;
    padding-bottom: .68267rem;
    img {
        display: block;
        position: relative;
        height: 8rem;
        width: 11.94667rem;
        margin: auto;
        margin-bottom: .64rem;
    }
    p {
        font-size: .68267rem;
        color: #999;
        line-height: .85333rem;
        text-align: center;
    }
}

.newContent, .onTage {
    color: #fb7299!important;
}

.onTage:after {
    content: '';
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: .10667rem;
    position: absolute;
    width: 2.38933rem;
    height: .08533rem;
    background-color: #fb7299;
    border-radius: .04267rem;
}
</style>
