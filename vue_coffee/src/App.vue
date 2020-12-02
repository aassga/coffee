<template lang="pug">
  div(:style="{height: scrollerHeight}")
    headerbox
    articlebox
    footerbox
</template>

<script>
import headerbox from './components/header.vue'
import articlebox from './components/article.vue'
import footerbox from './components/footer.vue'
import '../css/bootstrap.css'
export default {
  name: 'App',
  components: {
    headerbox,
    articlebox,
    footerbox,
  },
  computed: {
    // 滚动区高度
    // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
    scrollerHeight() {
      return (window.innerHeight - 46 - 50) + 'px';
    }
  },
}
</script>

<style lang="sass">
  #app
    background-color: #000
</style>

