<template src="./template.html" />

<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
  directives: {
    onClickaway
  },
  computed: {
    displayMenu() {
      return this.$store.state.displayMenu
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
    away() {
      if (this.$store.state.displayMenu) this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
