<template src="./template.html" />

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return `/blog/${this.slug}`
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
