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
  data() {
    return {
      loading: true
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('fetchPosts')
  },
  created() {
    console.log(`load start: ${this.loading}`)
  },
  mounted() {
    this.loading = true
    console.log(`load end: ${this.loading}`)
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
