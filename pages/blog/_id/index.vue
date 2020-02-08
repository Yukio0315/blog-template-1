<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import KeyVisual from '@/components/KeyVisual/KeyVisual/KeyVisual.vue'
import image from '@/static/data/assets/blog-image'

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
        { text: 'Blog', disabled: true, href: 'blog' }
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
    return { loadedPosts: require(`@/static/data/blog/${params.id}.json`) }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
