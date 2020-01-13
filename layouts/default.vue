<template>
  <div class="default">
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Navigation/Header/Header'
import Footer from '~/components/Navigation/Footer/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: 游明朝, 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN',
    'Hiragino Mincho Pro', HGS明朝E, メイリオ, Meiryo, serif;
}
</style>
