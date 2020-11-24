<template lang="pug">
  div
    .wrapper
      .section.section-header
        .parallax.pattern-image
          img(src='../assets/Moustachebackground.png')
          .container
            .content
              h1 Moustache Coffee
              .separator-container
                .separator.line-separator ∎
              h5 Design coffee Ⓒ
        a.scroll-arrow.hidden-xs.hidden-sm(href data-scroll='true' data-id='#whoWeAre')
          i.fa.fa-angle-down(aria-hidden='true')
      .section.section-we-are-1#whoWeAre
        .text-area
          .container
            .row
              .title#animationTest
                h2 Moustache 設計理念
                .separator-container
                  .separator.line-separator ∎
                p.large 鎖住咖啡最原始的風味，配上多種不同杯子顏色，給每個購買的客人無限驚喜
        .container
          .row
            .col-md-10.col-md-offset-1
              .row
                .col-md-4
                  .card
                    img(alt='...' src='../assets/pic10-1.jpg')
                  .card
                    img(alt='...' src='../assets/pic10-2.jpg')
                .col-md-4
                  .card
                    img(alt='...' src='../assets/pic7-1.jpg')
                  .card
                    img(alt='...' src='../assets/pic7-2.jpg')
                .col-md-4
                  .card
                    img(alt='...' src='../assets/pic7-1.jpg')
                  .card
                    img(alt='...' src='../assets/pic7-2.jpg')
    article_design
    article_advantage

</template>

<script>
import article_design from './article_design.vue'
import article_advantage from './article_advantage.vue'

export default {
  components: {
    article_design,
    article_advantage
  },
}
</script>

<style scoped>
  .section-header .separator {
    margin: 0em auto 2em;
  }
  .space-50 {
    height: 50px;
    width: 100%;
    display: block;
    content: "";
  }
  .section .parallax>img {
    width: 100%;
    min-width: 0;
    min-height: 0;
  }
  .pattern-image:after {
    opacity: .2;
    /*                 background: #111; */
  }
  .section-header h1 {
    text-shadow: -2px 2px 30px rgba(0, 0, 0, 0.25), -2px 4px 14px rgba(0, 0, 0, 0.1);
  }
  .section-header h5 {
    text-shadow: 0px 0px 11px rgba(0, 0, 0, 0.3);
  }
  .section-header .content {
    top: 42%;
  }
  .section-we-are-1 .title {
    max-width: 960px;
  }
  .card .icon~h3 {
    margin-bottom: 10px;
  }
  .section-with-hover .project .content {
    text-align: center;
  }
  .section-with-hover .project .over-area {
    background: rgba(0, 0, 0, .83);
  }
  .section-clients-2 {
    padding: 6em 0 1em;
  }
  .section-clients-2 .nav-text li {
    margin: 0 15px 10px 15px;
  }
  .section-contact-3 .contact-container .address-container {
    width: 28%;
    background-color: #FFFFFF;
    height: 470px;
    top: 50px;
    padding: 20px;
  }
  .section-contact-3 .address {
    margin-top: 40px;
  }
  .section-we-made-3 .content {
    padding: 0 15px;
    text-align: center;
  }
  .section-we-made-3 .over-area .content h3 {
    margin: 5px 0 20px;
  }
  .section-we-made-3 .over-area .content p {
    font-size: .9em;
    color: #898989;
  }
  .section-we-made-3 .over-area .content h5 {
    margin-bottom: 0px;
    margin-top: 20px;
  }
  .btn-black {
    letter-spacing: 1px;
    margin-top: 20px;
  }
  .copyright a {
    color: #FFFFFF;
  }
  .section-team-2 .team .member p {
    font-size: .9em;
    padding: 0 10px;
  }
  .card {
    margin-bottom: 30px;
  }
  .section-with-hover .project .over-area.over-area-sm .content p {
    font-size: .85em;
  }
  .section-with-hover .project .over-area.over-area-sm .content h4 {
    font-size: 1.6em;
  }
  .logo {
    display: block;
    margin: 0 auto 10px;
    width: 61px;
    height: 61px;
    border-radius: 50%;
    border: 1px solid #333333;
    overflow: hidden;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .loading .loading-container p {
    font-size: 30px;
    width: 220px;
    margin: 0 auto;
    margin-bottom: 30px;
    height: 35px;
  }
  .loading .logo {
    opacity: 0;
    transition: all 0.9s;
    -webkit-transition: all 0.9s;
    -moz-transition: all 0.9s;
  }
  .loading .logo.visible {
    opacity: 1;
  }
  .sharrre.btn {
    color: #444444;
    border-color: #444444;
    font-weight: 400;
  }
  .address .col-md-6 {
    padding-right: 7px;
    padding-left: 7px;
  }
  a.img-class {
    opacity: 1;
  }
  a.img-class:hover {
    opacity: .9;
  }
  .btn-lg {
    padding: 14px 10px;
  }
  @media (max-width: 1200px) {
    .section-contact-3 .contact-container .address-container {
      height: 520px;
    }
  }
</style>
