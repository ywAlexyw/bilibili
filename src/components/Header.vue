<template>
    <header class="topBox">
        <router-link to="/"  class="topB_left">
            <i class="logo"></i>
        </router-link >
        <div class="topB_right">
            <router-link to="/search" class="search_btn">
                <i class="search_btn-svg"></i>
            </router-link>
            <a class="my_space">
                <i class="my_space-svg"></i>
            </a>
            <a class="downloadAppBtn">
                <p>下载 App</p>
            </a>
        </div>
    </header>
</template>

<style lang="scss" rel="stylesheet/scss">
.topBox {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 1.32267rem;
  align-items: center;
  padding: .27733rem 0;
  background-color: #fff;
  z-index: 20;
  .topB_left {
    display: block;
    margin-left: .768rem;
    width: 2.64533rem;
    .logo {
        position: relative;
        margin: auto;
        color: transparent;
    }
  }
}

.topB_right {
  position: absolute;
  right: 0;
}

.search_btn {
  display: inline-block;
  width: 1.024rem;
  height: 1.024rem;
  margin-left: auto;
  margin-right: .93867rem;
  color: hsla(0,0%,100%,0);
}

.my_space {
  position: relative;
  display: inline-block;
  width: 1.024rem;
  height: 1.024rem;
  margin-right: .512rem;
}

.downloadAppBtn {
  display: inline-block;
  width: 3.41333rem;
  height: 1.024rem;
  margin-right: .512rem;
  border: .02133rem solid #fb7299;
  border-radius: .17067rem;
  background-color: #fb7299;
  P {
      font-size: .55467rem;
      line-height: 1.0667rem;
      text-align: center;
      color: #fff;
  }
}
</style>
