<template>
  <div>
    <div v-show="!loadCompleted" class="loader">
      <ring-loader
        :loading="loadCompleted"
        color="#29206d"
        class="loader-ling"
      ></ring-loader>
    </div>
    <div v-show="loadCompleted" class="default">
      <TheHeader class="header" />
      <nuxt class="main" />
      <TheFooter class="footer" />
    </div>
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import TheHeader from '@/components/Navigation/TheHeader/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
    RingLoader
  },
  computed: {
    loadCompleted() {
      return this.$store.state.loadCompleted
    }
  },
  created() {
    if (this.$store.state.loadCompleted) {
      this.$store.commit('toggleLoading')
    }
  },
  mounted() {
    this.$store.commit('toggleLoading')
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
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.default {
  margin: auto;
  max-width: $width-base;
}
</style>
