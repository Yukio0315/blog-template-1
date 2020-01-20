<template src="./template.html" />

<script>
import { alterHeroImageBox } from '@/lib/anime.js'
export default {
  mounted() {
    this.transitSquareBox()
  },
  methods: {
    transitSquareBox() {
      alterHeroImageBox('.hero-image-square', '42%')
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
