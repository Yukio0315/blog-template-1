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
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
