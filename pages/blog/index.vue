<template src="./template.html" />

<script>
import PostList from '~/components/Posts/PostList/PostList'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
