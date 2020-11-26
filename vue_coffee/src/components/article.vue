<template lang="pug">
  div
    .wrapper
      .section.section-header
        .parallax.pattern-image
          img(src='../assets/Moustachebackground.png')
          .container
            .content
              h1.textStyle {{ h1msg }}
              .separator-container
                .separator.line-separator ∎
              h5 {{ h2msg }}
        a.scroll-arrow.hidden-xs.hidden-sm(href data-scroll='true' data-id='#whoWeAre')
          i.fa.fa-angle-down(aria-hidden='true')
    articledream
    articledesign
    articleadvantage

</template>

<script>
import articledream from './article_dream.vue'
import articledesign from './article_design.vue'
import articleadvantage from './article_advantage.vue'

export default {
  components: {
    articledream,
    articledesign,
    articleadvantage
  },
  data() {
    return {
      h1msg:"Moustache Coffee",
      h2msg:"Design coffee Ⓒ",
    }
  },
}
</script>

<style lang="sass" scoped>
  
</style>
