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

<style lang="scss" rel="stylesheet/scss">
.item-title {
    position: relative;
    margin-left: .512rem;
    margin-bottom: .21333rem;
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
