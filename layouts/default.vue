<template>
  <div class="default">
    <TheHeader />
    <TheMenu v-show="displayMenu" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter/TheFooter'
import TheMenu from '@/components/Navigation/TheMenu/TheMenu'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheMenu
  },
  computed: {
    displayMenu() {
      return this.$store.state.displayMenu
    }
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
  width: $width-base;
  margin: auto;
}
</style>
