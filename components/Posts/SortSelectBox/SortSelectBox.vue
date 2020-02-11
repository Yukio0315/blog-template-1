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
      options: ['Date', 'Title', 'Popularity', 'Initial', 'Tag'],
      secondOptions: ['Desk', 'Ask']
    }
  },
  computed: {
    sortOption() {
      return this.$store.state.sortOption
    },
    first() {
      return this.$store.state.sortOption.first
    },
    second() {
      return this.$store.state.sortOption.second
    }
  },
  methods: {
    ...mapActions([
      'sortBlogByDate',
      'sortBlogByTitle',
      'sortBlogByPopularity',
      'filterBlogByInitial',
      'filterBlogByTag'
    ]),

    handleChange(first) {
      this.$store.commit('isSorted')
      this.secondOptions = []
      switch (first) {
        case 'Date':
          this.secondOptions.push('Desk', 'Ask')
          this.$store.commit('setSortOption', {
            first,
            second: this.secondOptions[0]
          })
          this.sortBlogByDate(this.second)
          break
        case 'Title':
          this.secondOptions.push('Desk', 'Ask')
          this.$store.commit('setSortOption', {
            first,
            second: this.secondOptions[0]
          })
          this.sortBlogByTitle(this.second)
          break
        case 'Popularity':
          this.secondOptions.push('Desk', 'Ask')
          this.$store.commit('setSortOption', {
            first,
            second: this.secondOptions[0]
          })
          this.sortBlogByPopularity(this.second)
          break
        case 'Initial':
          this.secondOptions.push('Desk', 'Ask')
          this.$store.commit('setSortOption', {
            first,
            second: this.secondOptions[0]
          })
          this.filterBlogByInitial(this.second)
          break
        case 'Tag':
          this.secondOptions.push(...this.tags)
          this.$store.commit('setSortOption', {
            first,
            second: this.tags[0]
          })
          this.filterBlogByTag(this.second)
          break
      }
      this.$router.push({ path: '/blog/1' })
    },

    filterOrSortBlog(second) {
      const first = this.first
      this.$store.commit('isSorted')
      this.$store.commit('setSortOption', {
        first,
        second
      })
      switch (first) {
        case 'Date':
          this.sortBlogByDate(second)
          break
        case 'Title':
          this.sortBlogByTitle(second)
          break
        case 'Popularity':
          this.sortBlogByPopularity(second)
          break
        case 'Initial':
          this.filterBlogByInitial(second)
          break
        case 'Tag':
          this.filterBlogByTag(second)
          break
      }
      this.$router.push({ path: '/blog/1' })
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
