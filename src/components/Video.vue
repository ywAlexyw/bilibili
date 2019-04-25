<template>
  <video id="video" ref="video">
    <source
      src="http://pgc.cdn.xiaodutv.com/2762392026_2252531009_2018102720134120181028002937.mp4?Cache-Control=max-age%3D8640000&responseExpires=Tue%2C+05+Feb+2019+00%3A40%3A11+GMT&xcode=6362f13f0c92dc0f47201b0133e5078e00121d60532539f2&time=1556262189"
      type="video/mp4"
    >
  </video>
</template>

<script>
import { setInterval, clearInterval } from 'timers'

export default {
  computed: {
    play () {
      return this.$store.state.play
    }
  },
  methods: {
    playing () {
      this.time = setInterval(this.setCurrentTime, 1000)
    },
    pause () {
      clearInterval(this.time)
    },
    setCurrentTime () {
      let currentTime = this.timeFormat(this.$refs.video.currentTime)
      this.$store.commit('setCurrentTime', currentTime)
      this.$emit('byVideo', { time_1: this.$refs.video.currentTime, time_0: this.$refs.video.duration })
    },
    setAllTime () {
      let allTime = this.timeFormat(this.$refs.video.duration)
      this.$store.commit('setAllTime', allTime)
    },
    timeFormat (num) {
      var minute = Math.round(num / 60)
      var second = Math.round(num % 60)
      minute = minute >= 10 ? minute : '0' + minute
      second = second >= 10 ? second : '0' + second
      return minute + ':' + second
    },
    fullScreen () {
      this.$refs.video.webkitRequestFullScreen()
    },
    cancelFullScreen () {
      this.$refs.video.webkitCancelFullScreen()
    },
    changProcess () {
      this.$refs.video.currentTime = this.$parent.newTime
    }
  },
  watch: {
    play (val) {
      if (val === false) {
        this.$refs.video.pause()
        this.pause()
      } else {
        this.$refs.video.play()
        this.playing()
        this.setAllTime()
      }
    },
    '$store.state.fullScreen' (val) {
      this.fullScreen()
    },
    '$parent.newTime' (val) {
      this.$refs.video.currentTime = this.$refs.video.duration * (val / 100)
    }
  }
}
</script>
