<template src="./template.html" />

<script>
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
      options: ['Date', 'Title', 'Popular', 'Initial', 'Tag'],
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
    setSortStatus() {
      this.$store.commit('setSortState', {
        first: this.first,
        second: this.second
      })
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
