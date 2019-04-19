import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    channels: 0,
    play: false,
    currentTime: '',
    allTime: '',
    fullScreen: false
  },
  mutations: {
    setChannels (state, payload) {
      state.channels = payload
    },
    videoPlay (state) {
      state.play = !state.play
    },
    setCurrentTime (state, payload) {
      state.currentTime = payload
    },
    setAllTime (state, payload) {
      state.allTime = payload
    },
    setFullScreen (state) {
      state.fullScreen = !state.fullScreen
    }
  }
})

export default store
