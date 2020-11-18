<template lang="pug">
  footer.footer.pb-5.bg-primary.text-white.pt-9.mt-n9
    .container
      .row.mt-6
        .col-xl-3.mb-3.mb-xl-0
          img.mb-3(src='../assets/treelogo.png' height='' alt='treelogo')
          p {{ wellcome }}
        .col-6.col-xl-2.mb-5.mb-xl-0
          span(v-text="themesberg" :class="hlistObject")
          ul(:class="flinkObject")
            li(v-for="(item,i) in traval" :key="i.traval")
              a(target='_blank' href='#') {{ item.name }}

        .col-6.col-xl-3.mb-5.mb-xl-0
          span(v-text="other" :class="hlistObject")
          ul(:class="flinkObject")
            li(v-for="(item,i) in features" :key="i.features")
              a(href='#') {{ item.name }}
        .col-12.col-xl-4.mb-5.mb-xl-0
          span.h5 下載專區
          p.mt-2 ( 請點擊下載 )

          //app download
          appbtn

      hr.my-3.my-lg-4
      .row
        .col.mb-md-0
          div(:class="footerObject")
            span.mb-3.fas.fa-angle-double-down
          div(:class="footerObject")
            p.font-weight-normal.font-small.mb-0 {{ Copyright }} 

</template>
<script>
import appbtn from './app_btn/app_btn.vue'
export default {
  components:{
    appbtn,
  },
  data() {
    return {
      wellcome:"歡迎來到 HTD 嘎嘎旅遊去 ----- Happy Traval Date 請盡情瀏覽",
      themesberg:"主題",
      other:"其它",
      Copyright:"Copyright © 嘎嘎旅遊去 - Happy Traval Date",
      traval:[
        { name:'部落客分享' },
        { name:'訂房系統' },
        { name:'關於我們' },
        { name:'聯繫我們' },
      ],
      features:[
        { name:'地圖搜尋' },
        { name:'評價搜尋' },
        { name:'價格搜尋' },
        { name:'地區搜尋' },
      ],
      hlistObject:{
        'h5': true, 
        'font-weight-bold': true,
      },
      flinkObject:{
        'footer-links': true, 
        'mt-2': true, 
      },
      footerObject: {
        'd-flex': true,
        'justify-content-center': true,
      },
    }
  },
}
</script>
<style lang="sass" scoped>
  .bg-primary 
    background-color: #0d1b48!important
  .footer 
    ul 
      margin-bottom: 0
      padding: 0
      list-style: none
      li
        a
          text-decoration: none
          position: relative
          display: block
    .footer-links 
      li 
        display: block
        margin-left: -5px
        margin-right: -5px
        a
          padding: 5px
          color:#FFF
          font-weight: 700
          &:hover 
            color: #c33c54
            transition: 0.8s
</style>
