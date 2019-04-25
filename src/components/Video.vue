<template>
  <video id="video" ref="video">
    <source
      src="https://apd-357c9abe40af07ebc1e54daf3936f9b3.v.smtcdns.com/om.tc.qq.com/AqPhCli_Tmb96vTQwiNrHeBUs6xmarY08o1H0gcFmYKY/uwMROfz0r5zCYaQXGdGnC2dfDmYp-X0PaD-pLg4shqEe_wmq/o0519l5zg09.mp4?sdtfrom=v3010&guid=f546524006d6ab98bb646c2dd7e4f077&vkey=F6E10BC98909A282A52B4D45F6D1AD0CDF359AC76F21DC3DE9A9FFCDB3EE446A961A82CBE340608D5DB310908E80E11E24CA83ED8205AF409BC0A53C7685461B8B448E69E785665E800D0E54235D50BC21A685C99CFED5C2EE9FD96DF4D02C5E1DCF8FEE69EDC6EF15C5D35339E83FD2A40A8206A9757768&platform=2"
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
