<template>
  <div class="default">
    <TheHeader class="header" />
    <nuxt class="main" />
    <TheFooter class="footer" />
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
  margin: auto;
  max-width: $width-base;
}
</style>
