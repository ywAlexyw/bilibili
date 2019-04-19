<template>
  <video id="video" ref="video">
    <source
      src="http://vodkgeyttp8.vod.126.net/cloudmusic/NjEyMTk1NjU=/dcec07fa4375312402fbd8e8ecb851e8/37dd00b0a2a6c4e788eeecdfef33d73d.mp4?wsSecret=d9eece25f6e000a2da946b5e91c2bf72&wsTime=1555655582"
      type="video/mp4"
    >
  </video>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
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
      this.$emit('byVideo', {time_1: this.$refs.video.currentTime,time_0: this.$refs.video.duration})
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
      this.$refs.video.style.height = (this.$refs.video.videoHeight * 2) + 'px'
    },
    cancelFullScreen () {
      this.$refs.video.style.height = this.$refs.video.videoHeight + 'px'
    },
    changProcess () {
      this.$refs.video.currentTime = newTime
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
      if (val === true) {
        this.fullScreen()
      } else {
        this.cancelFullScreen()
      }
    },
    '$parent.newTime' (val) {
      this.$refs.video.currentTime = this.$refs.video.duration * (val / 100)
    }
  }
}
</script>
