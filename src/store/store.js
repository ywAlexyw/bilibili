import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    channels: 0,
    play: false,
    currentTime: '',
    allTime: '',
    fullScreen: false,
    searchBG: false,
    showContainer: true
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
    },
    nothingBG (state, payload) {
      state.searchBG = payload
    },
    setShowContainer (state, payload) {
      state.showContainer = payload
    }
  },
  actions,
  modules: {
    user
  }
})

export default store
