import Cookies from 'js-cookie'

export default {
  state: {
    userInfo: {},
    login: false
  },
  mutations: {
    setUserInfo (state, payload) {
      if (!payload) {
        Cookies.remove('userInfo')
        state.userInfo = payload
      } else {
        Cookies.set('userInfo', payload)
        state.userInfo = payload
      }
    },
    logined (state, payload) {
      state.login = payload
    }
  }
}
