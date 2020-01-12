<template src="./template.html" />

<script>
import PostCard from '@/components/Posts/PostCard/PostCard.vue'

export default {
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
