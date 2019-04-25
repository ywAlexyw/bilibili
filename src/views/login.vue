<template>
    <div class="loginPage">
        <div class="login-title">
            <h1>登录bilibili</h1>
        </div>
        <div class="login-input">
            <div class="account-wrapper">
                <span>账号</span>
                <input class="account" type="text" placeholder="你的手机号/邮箱" v-model="account">
            </div>
            <div class="password-wrapper">
                <span>密码</span>
                <input class="password" type="password" placeholder="请输入密码" v-model="password">
            </div>
        </div>
        <div class="login-forget">
            <div class="forget-wrapper">
                <!-- <a>忘记密码</a> -->
            </div>
        </div>
        <div class="login-choose clearFloat">
            <div class="register-btn chooseBtn"  @click="loginBtn">
                <p>注册</p>
            </div>
            <div class="login-btn chooseBtn" @click="loginBtn" ref="loginBtn">
                <p>登录</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    loginBtn () {
      if (this.account.trim() === '' || this.password.trim() === '') {
        this.$refs.loginBtn.style.disabled = 'true'
      } else {
        this.$store.dispatch('login', {
          account: this.account,
          password: this.password
        })
        this.$refs.loginBtn.style.disabled = 'false'
        this.$router.push({
          path: '/user'
        })
        this.$store.commit('logined', true)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.path === '/login') {
      next(vm => {
        vm.$store.commit('nothingBG', true)
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.loginPage {
    position:relative;
    width: 10rem;
    height: 100%;
    margin: 0 auto;
    background-color: #f4f4f4;
    .login-title {
        position: relative;
        min-height: 1.1733333rem;
        padding: 0 .32rem;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        background-color: #fff;
        color: #212121;
        h1 {
            font-size: .426667rem;
            text-align: center;
            line-height: .533333rem;
            padding: .32rem 0;
            font-weight: 400;
        }
    }
    .login-input {
        width: 10rem;
        margin: 0 auto;
        padding-top: .426667rem;
        border-bottom: 0.02rem solid #e7e7e7;
    }
    .login-forget {
        padding: .213333rem .32rem;
    }
    .login-choose {
        margin: .426667rem 0;
        padding: 0 .32rem;
    }
}

.account-wrapper, .password-wrapper {
    position: relative;
    width: 10rem;
    min-height: 1.173333rem;
    padding: 0 .32rem;
    background: #fff;
    border-top: 0.02rem solid #e7e7e7;
    box-sizing: border-box;
}

.login-input span, .account, .password{
    float: left;
    display: block;
    min-height: 1.173333rem;
    line-height: 1.173333rem;
    width: 2.026667rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: PingFangSC-Regular;
    font-size: .373333rem;
}

.account, .password {
    width: 6.746667rem;
}

.forget-wrapper {
    text-align: right;
    line-height: .426667rem;
    font-family: PingFangSC-Regular;
    font-size: .346667rem;
    a {
        color: #fb7299;
    }
}

.chooseBtn {
    height: 1.173333rem;
    min-width: 2.346667rem;
    text-align: center;
    line-height: 1.12rem;
    font-size: .373333rem;
    cursor: pointer;
    border-radius: .106667rem;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 .266667rem;
}

.register-btn {
    float: left;
    width: 4.533333rem;
    margin-right: .266667rem;
    border: 0.03rem solid #fb7299;
    background: transparent;
    color: #fb7299;
}

.login-btn {
    float: left;
    width: 4.533333rem;
    margin-right: 0;
    border: 0.03rem solid #ff9db5;
    background: #ff9db5;
    color: #fff;
}
</style>
