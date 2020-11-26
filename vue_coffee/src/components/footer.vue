<template lang="pug">
  footer.footer.footer-color-black
    .container
      .copyright {{ footer }}
</template>

<script>
export default {
  data() {
    return {
      footer:"© 2017 Moustache coffee, Design coffee",
    }
  },
}
</script>
<style lang="sass" scoped>
  .copyright
    color:#FFF
    font-family: 'Reenie Beanie'
    font-size: 1.2em
</style>
