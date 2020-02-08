<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import KeyVisual from '@/components/KeyVisual/KeyVisual/KeyVisual.vue'
import image from '@/assets/images/blog-image.jpg'

export default {
  components: {
    PostList,
    Breadcrumbs,
    KeyVisual
  },
  data() {
    return {
      items: [
        { text: 'Home', disabled: false, href: '/' },
        { text: 'Blog', disabled: true, href: 'blog/entries' }
      ],
      theme: {
        title: 'BLOG',
        sub: 'Sub title',
        info: 'BLOG INFORMATION'
      },
      image
    }
  },
  asyncData({ params }) {
    const loadedPosts = require(`@/dist/_nuxt/blog/${params.id}`)
    return { loadedPosts }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
