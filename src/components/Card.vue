<template>
  <div class="videoListItem">
    <div class="item-title" :class="{ IT_title_2: !onSubCont }">
      <slot name="title"></slot>
      <slot name="newTitle"></slot>
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
  props: {
    onSubCont: Boolean
  },
  mounted () {
    var recommend = document.getElementsByClassName('recommend')[0]
    if (typeof recommend === 'undefined') {
      var firstIT = document.getElementsByClassName('item-title')[0]
      firstIT.classList.add('recommend')
    }
  },
  watch: {
    onSubCont (val) {
      var itemTitle = document.getElementsByClassName('item-title')[0]
      if (typeof itemTitle !== 'undefined') {
        if (val === false) {
          itemTitle.classList.remove('IT_title_2')
          itemTitle.style.marginBottom = '0'
        } else {
          itemTitle.style.marginBottom = '.21333rem;'
        }
      }
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

// .IT_title_2 {
//   margin-bottom: .40533rem;
// }

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
