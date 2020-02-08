<template src="./template.html" />

<script>
import marked from 'marked'

export default {
  computed: {
    compiledMarkdown() {
      return marked(this.post.description)
    }
  },
  asyncData({ params }) {
    return { post: require(`@/static/data/blog/entry/${params.slug}.json`) }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
