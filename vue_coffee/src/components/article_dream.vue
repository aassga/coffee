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
            .col-md-3
              .card
                img(alt='...' src='../assets/pic7.jpg')
            .col-md-3    
              .card
                img(alt='...' src='../assets/pic8.jpg')
            .col-md-3
              .card
                img(alt='...' src='../assets/pic9.jpg')
            .col-md-3    
              .card
                img(alt='...' src='../assets/pic10.jpg')
            .col-md-3
              .card
                img(alt='...' src='../assets/pic11.jpg')
            .col-md-3   
              .card
                img(alt='...' src='../assets/pic12.jpg')
            .col-md-3
              .card
                img(alt='...' src='../assets/pic13.jpg')
            .col-md-3   
              .card
                img(alt='...' src='../assets/pic14.jpg')    
</template>

<script>

export default {
  data() {
    return {
      Mou:"Moustache",
      Mouname:"設計理念",
      Moumsg:"鎖住咖啡最原始的風味，配上多種不同杯子顏色，給每個購買的客人無限驚喜",
      // url_add:'../assets/pic7.jpg',
      // img:[
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic7.jpg"
      //   }, 
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic8.jpg"
      //   }, 
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic9.jpg"
      //   }, 
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic10.jpg"
      //   }, 
      //   {
      //     name:"1",
      //     photoURL: "../assets/pic11.jpg"
      //   }, 
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic12.jpg"
      //   }, 
      //   { 
      //     name:"1",
      //     photoURL: "../assets/pic13.jpg"
      //   }, 
      //   {
      //     name:"1",
      //     photoURL: "../assets/pic14.jpg"
      //   }
      // ],
    }
  },

  // methods: {
  //   photoURL(){
  //     for(var i=7; i<=14; i++){
  //       this.url_add = "../assets/pic"+i+".jpg";
  //       // return this.url_add
  //       console.log(this.url_add);
  //     }
  //   }
  // },
}
</script>

<style lang="sass" scoped>

</style>
