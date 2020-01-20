<template src="./template.html" />

<script>
import TheHeroImage from '@/components/TheHeroImage/TheHeroImage'
export default {
  components: {
    TheHeroImage
  },
  async fetch({ store, params }) {
    await store.dispatch('fetchPosts')
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
