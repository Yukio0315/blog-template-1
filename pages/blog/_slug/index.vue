<template src="./template.html" />

<script>
import marked from 'marked'
import { createClient } from '~/plugins/contentful'

export default {
  asyncData({ params, payload }) {
    if (payload) {
      return {
        post: payload
      }
    }
    return createClient()
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug[in]': params.slug
      })
      .then((entry) => {
        return { post: entry.items[0].fields }
      })
  },
  computed: {
    compiledMarkdown() {
      return marked(this.post.description)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
