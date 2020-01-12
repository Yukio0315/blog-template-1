<template src="./template.html" />

<script>
export default {
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
