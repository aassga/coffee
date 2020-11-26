<template lang="pug">
  .section.section-we-do-2#workflow
    .container(v-for="(item,i) in opaction" :key="i.opaction" )
      .row
        .title
          h2
            span.textStyle.br-3 {{ item.adv }}
            span {{ item.advname }}
          .separator-container
            .separator.line-separator ∎
          p {{ item.msg }}
      .row
        .col-md-4(v-for="(adv,i) in item.advantage" :key="i.advantage" )
          .card
            .icon
              i.pe-7s-tools
            h3 {{ adv.title }}
            p {{ adv.name }}

</template>

<script>
export default {
  data() {
    return {
      opaction:[
        {
          adv:"Advantage",
          advname:"產品優勢",
          msg:"多元化的設計概念 豐富的咖啡選擇",
          advantage:[
            {
              title:"Multiple color",
              name:"客製化的杯子顏色，增加更多顏色的選擇",
            },
            {
              title:"Convenience",
              name:"在杯子寬度上特別設計符合一般大人手握的寬度，不會因為太寬而拿起來顯得吃力",
            },
            {
              title:"Time picking",
              name:"在咖啡豆挑選上，極度講求，想給所有喝過鬍子咖啡的客人，有一種難忘的感覺",
            },
          ],
        }
      ],
    }
  },
  mounted() {
    this.getadvmsg();
  },
  methods: {
    getadvmsg(){
      var e = this.opaction;
      this.advantage = [];
      e.forEach((item) =>{
        this.advantage.push(item.advantage)
      }) 
      console.log(this.opaction);
      console.log(this.advantage);
    }
  },
}
</script>

<style lang="sass" scoped>

</style>