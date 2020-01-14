<template>
  <div class="default">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Navigation/TheHeader/TheHeader'
import Footer from '@/components/Navigation/TheFooter/TheFooter'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: 游明朝, 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN',
    'Hiragino Mincho Pro', HGS明朝E, メイリオ, Meiryo, serif;
}
a {
  text-decoration: none;
}
.default {
  display: grid;
  width: $width-base;
  margin: auto;
}
</style>
