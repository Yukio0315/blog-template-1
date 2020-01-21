<template src="./template.html" />

<script>
import TheHeroImage from '@/components/TheHeroImage/TheHeroImage'
import GoogleMap from '@/components/GoogleMap/GoogleMap'

export default {
  components: {
    TheHeroImage,
    GoogleMap
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
