<template src="./template.html" />

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      first: 'Date',
      second: 'Desk',
      options: ['Date', 'Title', 'Popularity', 'Initial', 'Tag'],
      secondOptions: ['Desk', 'Ask']
    }
  },
  methods: {
    handleChange(value) {
      this.second = ''
      this.secondOptions = []
      switch (value) {
        case 'Date':
          this.secondOptions.push('Desk', 'Ask')
          break
        case 'Title':
          this.secondOptions.push('Desk', 'Ask')
          break
        case 'Popular':
          this.secondOptions.push('Desk', 'Ask')
          break
        case 'Initial':
          this.secondOptions.push('Desk', 'Ask')
          break
        case 'Tag':
          this.secondOptions.push(...this.tags)
          break
      }
    },
    ...mapActions([
      'sortBlogByDate',
      'sortBlogByTitle',
      'sortBlogByPopularity',
      'filterBlogByInitial',
      'filterBlogByTag'
    ]),
    filterOrSortBlog(value) {
      switch (this.first) {
        case 'Date':
          this.sortBlogByDate(value)
          break
        case 'Title':
          this.sortBlogByTitle(value)
          break
        case 'Popularity':
          this.sortBlogByPopularity(value)
          break
        case 'Initial':
          this.filterBlogByInitial(value)
          break
        case 'Tag':
          this.filterBlogByTag(value)
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
