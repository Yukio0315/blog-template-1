<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'

export default {
  components: {
    PostList
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
