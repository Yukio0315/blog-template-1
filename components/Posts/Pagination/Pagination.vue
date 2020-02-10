<template src="./template.html" />

<script>
import variables from '@/lib/variables'

export default {
  computed: {
    getMaxBlogPage() {
      return (
        Math.floor(
          this.$store.state.posts.length / variables.PAGE_LIMIT_OF_BLOG
        ) + 1
      )
    },
    getNowPage() {
      return Number(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
