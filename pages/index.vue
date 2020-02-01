<template src="./template.html" />

<script>
import TheHeroImage from '@/components/MainContents/TheHeroImage/TheHeroImage'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import ThreeColumn from '@/components/MainContents/ThreeColumn/ThreeColumn'

export default {
  components: {
    TheHeroImage,
    GoogleMap,
    ThreeColumn
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
