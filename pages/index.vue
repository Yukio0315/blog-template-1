<template src="./template.html" />

<script>
export default {
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
