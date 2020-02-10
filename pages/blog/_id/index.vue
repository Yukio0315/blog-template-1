<template src="./template.html" />

<script>
import PostList from '@/components/Posts/PostList/PostList.vue'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import KeyVisual from '@/components/KeyVisual/KeyVisual/KeyVisual.vue'
import SortSelectBox from '@/components/Posts/SortSelectBox/SortSelectBox.vue'
import Pagination from '@/components/Posts/Pagination/Pagination.vue'
import image from '@/static/data/assets/blog-image'
import { createClient } from '@/plugins/contentful'

export default {
  components: {
    PostList,
    Breadcrumbs,
    KeyVisual,
    SortSelectBox,
    Pagination
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
      image,
      tags: []
    }
  },
  computed: {
    sortedPosts() {
      return this.$store.state.posts
    }
  },
  asyncData({ params }) {
    return { loadedPosts: require(`@/static/data/blog/${params.id}.json`) }
  },
  created() {
    this.getTags()
  },
  methods: {
    async getTags() {
      const contentTypes = await createClient().getContentTypes()
      this.tags = contentTypes.items
        .filter((item) => item.name === 'Blog Article')[0]
        .fields.filter(
          (content) => content.id === 'tags'
        )[0].items.validations[0].in
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
