<template lang="pug">
  nav.navbar.navbar-default.navbar-transparent.navbar-fixed-top.navbar-burger
    .container
      .navbar-header
        button#menu-toggle.navbar-toggle(type='button' data-toggle='collapse' data-target='#example')
          span.sr-only Toggle navigation
          span.icon-bar.bar1
          span.icon-bar.bar2
          span.icon-bar.bar3
        a.navbar-brand(target='_blank' href='#') Moustache
      .collapse.navbar-collapse
        ul.nav.navbar-nav.navbar-right.navbar-uppercase
          li
            a(href data-id='#whoWeAre') Moustache 設計理念
          li
            a(href data-id='#workflow') Advantage 產品優勢
          li
            a(href data-id='#numbers') statistics 年齡統計
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
