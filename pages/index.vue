<template src="./template.html" />

<script>
import TheHeroMovie from '@/components/KeyVisual/TheHeroMovie/TheHeroMovie'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import ThreeColumn from '@/components/MainContents/ThreeColumn/ThreeColumn'

export default {
  components: {
    TheHeroMovie,
    GoogleMap,
    ThreeColumn
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
