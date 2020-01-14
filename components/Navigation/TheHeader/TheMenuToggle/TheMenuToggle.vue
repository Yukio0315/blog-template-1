<template src="./template.html" />

<script>
export default {
  computed: {
    displayMenu() {
      return this.$store.state.displayMenu
    }
  },
  methods: {
    toggleMenu() {
      // eslint-disable-next-line
      console.log('toggle')
      this.$store.dispatch('toggleMenu')
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
