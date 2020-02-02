<template src="./template.html" />

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
