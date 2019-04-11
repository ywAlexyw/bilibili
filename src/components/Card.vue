<template>
  <div class="videoListItem">
    <div class="item-title">
      <slot name="title"></slot>
    </div>
    <slot name="rank"></slot>
    <slot name="moreItem"></slot>
    <div class="item-content clearFloat">
      <slot name="videos"></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    var recommend = document.getElementsByClassName('recommend')[0]
    if (typeof recommend === 'undefined') {
      var firstIT = document.getElementsByClassName('item-title')[0]
      firstIT.classList.add('recommend')
    }
  }
}
</script>


<style lang="scss" rel="stylesheet/scss">
.item-title {
  position: relative;
  margin-left: .512rem;
  margin-bottom: .21333rem;
}

.recommend {
  position: relative;
  margin-left: .512rem;
  margin-bottom: 0;
}

.item-content {
  position: relative;
  padding: 0 0.256rem;
}

.videoListItem {
  position: relative;
  display: block;
}
</style>
