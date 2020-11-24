<template lang="pug">
  div
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
}
</script>

<style lang="sass">
  #app
    background-color: #000
</style>

