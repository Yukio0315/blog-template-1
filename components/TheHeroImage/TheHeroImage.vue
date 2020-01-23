<template src="./template.html" />

<script>
export default {
  computed: {
    seenTopAnime() {
      return this.$store.state.seenTopAnime
    }
  },
  async mounted() {
    if (!this.$store.state.seenTopAnime.showBox) {
      await this.$delay(1500)
      this.$store.commit('seenTopAnime', 'showBox')
      await this.$delay(1000)
      this.$store.commit('seenTopAnime', 'showTitle')
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
