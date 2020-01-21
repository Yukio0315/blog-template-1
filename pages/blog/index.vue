<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'

export default {
  components: {
    PostList,
    Breadcrumbs
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
  },
  async fetch({ store }) {
    await store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
