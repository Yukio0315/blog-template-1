<template src="./template.html" />

<script>
import HeroImage from '@/components/HeroImage/HeroImage'
export default {
  components: {
    HeroImage
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
