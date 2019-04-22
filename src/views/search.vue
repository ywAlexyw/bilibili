<template>
    <div class="search">
        <div class="search-top clearFloat">
            <div class="searchBox">
                <i class="searchIcon" @click="search"></i>
                <input type="search" id="search" placeholder="搜索视频、番剧、UP主或AV号" v-model="wd">
            </div>
            <div class="cancelBtn">
                <p>取消</p>
            </div>
        </div>
        <div class="search-recommed" v-if="show">
            <p class="subTitle">大家都在搜索</p>
            <div class="recommed-list">
                <div class="rl-item">
                    <p>东宫</p>
                </div>
                <div class="rl-item">
                    <p>药水哥</p>
                </div>
                <div class="rl-item">
                    <p>光年之外</p>
                </div>
                <div class="rl-item">
                    <p>华农兄弟</p>
                </div>
                <div class="rl-item">
                    <p>复仇者联盟4</p>
                </div>
                <div class="rl-item">
                    <p>英雄联盟</p>
                </div>
                <div class="rl-item">
                    <p>只狼</p>
                </div>
            </div>
        </div>
        <div class="search-history" v-if="show">
            <div class="history-title">
                <p>历史搜索</p>
            </div>
        </div>
        <div class="search-result">
            <div class="nothing">
                <img src="//s1.hdslb.com/bfs/static/mult/images/notFound.png">
                <p>什么都没有找到啊 T_T</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      wd: '',
      show: false
    }
  },
  methods: {
    search () {
      this.$router.push({
        path: '/search',
        query: {
          wd: this.wd
        }
      })
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.query.wd !== 'undefined') {
      
    }
    next()
  }
}
</script>



<style lang="scss" rel="stylesheet/scss">
.search-top {
    position: fixed;
    width: 93.33%;
    top: 0;
    height: 1.87733rem;
    padding: 0 3.33%;
    background-color: #fff;
    z-index: 1;
    flex-direction: row;
    .searchBox {
        position: relative;
        width: 88.29%;
        height: 1.28rem;
        margin-top: .29867rem;
        float: left;
    }
    .cancelBtn {
        position: relative;
        float: right;
        width: 1.28rem;
        margin-top: .64rem;
        p {
            text-align: right;
        color: #fb7299;
        font-size: .59733rem;
        line-height: .59733rem;
        }
    }
}

.search-recommed {
    position: relative;
    margin-top: 1.89867rem;
    z-index: 0;
    margin-left: .53333rem;
    margin-right: .14933rem;
    .subTitle {
        position: relative;
        padding-top: .68267rem;
        color: #999;
        line-height: .59733rem;
        font-size: .59733rem;
        text-align: left;
    }
    .recommed-list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: .17067rem;
        margin-bottom: .68267rem;
        height: 3.92533rem;
        overflow: hidden;
        .rl-item {
            padding: .40533rem .512rem;
            margin-top: .512rem;
            margin-right: .36267rem;
            border: .04267rem solid #ccc;
            border-radius: .68267rem;
            p {
                font-size: .55467rem;
                line-height: .55467rem;
                color: #505050;
                text-align: center;
            }
        }
    }
}

.search-history {
    position: relative;
    margin-top: 1.10933rem;
    border-top: .42667rem solid #f4f4f4;
    .history-title {
        position: relative;
        margin-left: .53333rem;
        p {
            text-align: left;
            color: #999;
            font-size: .59733rem;
            line-height: 1.96267rem;
        }
    }
}

.searchIcon {
    position: absolute;
    width: .93867rem;
    height: .93867rem;
    top: .17067rem;
    left: .512rem;
    background-size: 100% 100%;
}

#search {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 1.70667rem;
    padding-right: 3.37067rem;
    box-sizing: border-box;
    font-size: .55467rem;
    border: .02133rem solid #e7e7e7;
    border-radius: .17067rem;
    background-color: #f4f4f4;
    color: #505050;
}

input::-ms-clear {
 display:none!important;
}

.search-result {
    position: relative;
    z-index: 1;
    margin-top: 3.776rem;
    width: 100%;
    overflow: hidden;
    .nothing {
        position: relative;
        width: 100%;
        margin: auto;
        padding-top: 4.26667rem;
        img {
            display: block;
            width: 10.24rem;
            margin: auto;
        }
        p {
            text-align: center;
            color: #757575;
            font-size: .55467rem;
            line-height: 1.92rem;
        }
    }
}
</style>
