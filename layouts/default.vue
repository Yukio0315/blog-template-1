<template>
  <div class="default">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
html {
  font-family: 游明朝, 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN',
    'Hiragino Mincho Pro', HGS明朝E, メイリオ, Meiryo, serif;
}
body {
  background-color: $color-background;
}
a {
  text-decoration: none;
}
.default {
  display: grid;
  max-width: $width-base;
  margin: auto;
}
</style>
