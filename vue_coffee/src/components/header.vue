<template lang="pug">
  nav.navbar.navbar-default.navbar-transparent.navbar-fixed-top.navbar-burger
    .container
      .navbar-header
        span.navbar-brand Moustache
        ul.nav.navbar-nav.navbar-right.navbar-uppercase(v-for="(item,i) in menudata" :key="i.menudata" )
          li 
            a(href) 
              span.textStyle.br-3 {{ item.index }}
              span {{ item.name }}
</template>

<script>
export default {
  data() {
    return {
      menudata:[
        {
          index:"Moustache",
          name:"設計理念",
        },
        {
          index:"Advantage",
          name:"產品優勢",
        },
        {
          index:"statistics",
          name:"年齡統計",
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
  .navbar 
    .navbar-brand
      font-family: 'Reenie Beanie', cursive
      font-size: 1.7em
</style>
