<template lang="pug">
  .section.section-we-are-1#whoWeAre
    .text-area
      .container
        .row
          .title#animationTest
            h2
              span.textStyle.br-3 {{ Mou }}
              span {{ Mouname }}
            .separator-container
              .separator.line-separator ∎
            p {{ Moumsg }}
    .container
      .row
        .col-md-10.col-md-offset-1
          .row
            .col-md-3(v-for="(item,i) in images" :key="i.images")
              .card
                img(:data-id='item.id' :src='item.photoURL' alt )
</template>

<script>

export default {
  data() {
    return {
      Mou:"Moustache",
      Mouname:"設計理念",
      Moumsg:"鎖住咖啡最原始的風味，配上多種不同杯子顏色，給每個購買的客人無限驚喜",
      images:[
        { 
          id:"1",
          photoURL:require('../assets/pic7.jpg')
        }, 
        { 
          id:"2",
          photoURL:require('../assets/pic8.jpg')
        }, 
        { 
          id:"3",
          photoURL:require('../assets/pic9.jpg')
        }, 
        { 
          id:"4",
          photoURL:require('../assets/pic10.jpg')
        }, 
        {
          id:"5",
          photoURL:require('../assets/pic11.jpg')
        }, 
        { 
          id:"6",
          photoURL:require('../assets/pic12.jpg')
        }, 
        { 
          id:"7",
          photoURL:require('../assets/pic13.jpg')
        }, 
        {
          id:"8",
          photoURL:require('../assets/pic14.jpg')
        }
      ],
    }
  },

}
</script>

<style lang="sass" scoped>

</style>
