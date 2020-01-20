<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'

export default {
  components: {
    PostList,
    Breadcrumb
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  },
  data() {
    return {
      items: [
        { text: 'Home', disabled: false, href: '/' },
        { text: 'Blog', disabled: true, href: 'blog' }
      ]
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
