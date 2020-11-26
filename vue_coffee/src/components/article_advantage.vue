<template lang="pug">
  .section.section-numbers-1#numbers
    .container(v-for="(item,i) in opaction" :key="i.opaction" )
      .text-area
        .title
          h2 
            span.textStyle.br-3 {{ item.sta }}
            span  {{ item.staname }}
          .separator-container
            .separator.line-separator ∎
          p {{ item.msg }}
      .row
        .col-md-4.col-sm-4(v-for="(sta,i) in item.statistics" :key="i.statistics" )
          .card
            h3 {{ sta.year }}
            h5 {{ sta.name }}
            .number {{ sta.number }}
              
</template>

<script>
export default {
  data() {
    return {
      opaction:[
        {
          sta:"statistics",
          staname:"年齡統計",
          msg:"Purchase age separately and occupation",
          statistics:[
            {
              year:"65 Years Old UP",
              name:"Retirees and Businesses and Professionals",
              number:"15 %",
            },
            {
              year:"45 Years Old UP",
              name:"Businesses and Professionals",
              number:"35 %",
            },
            {
              year:"15 Years Old UP",
              name:"student and Businesses and Professionals",
              number:"50 %",
            },
          ],
        }
      ],
    }
  },
  mounted() {
    this.getstamsg();
  },
  methods: {
    getstamsg(){
      var e = this.opaction;
      this.statistics = [];
      e.forEach((item) =>{
        this.statistics.push(item.statistics)
      }) 
      console.log(this.opaction);
      console.log(this.statistics);
    }
  },
}
</script>

<style lang="sass" scoped>

</style>