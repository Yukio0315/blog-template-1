<template src="./template.html" />

<script>
import marked from 'marked'

export default {
  computed: {
    compiledMarkdown() {
      return marked(this.post.description)
    }
  },
  asyncData({ params, error }) {
    const post = require(`@/dist/_nuxt/blog/entry/${params.slug}`)
    return { post }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
