import { login } from '@/js/request'

export default {
  login ({ commit }, payload) {
    login(payload).then(({ data }) => {
      commit('setUserInfo', data.userInfo)
    })
  }
}
