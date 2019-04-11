import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    channels: 0
  },
  mutations: {
    setChannels (state, payload) {
      state.channels = payload
    }
  }
})

export default store
