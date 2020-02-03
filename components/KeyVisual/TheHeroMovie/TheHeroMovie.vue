<template src="./template.html" />

<script>
import TheTopInfoBox from '@/components/KeyVisual/TheTopInfoBox/TheTopInfoBox.vue'
import heroImage from '@/assets/images/hero-image.jpg'
export default {
  components: {
    TheTopInfoBox,
    heroImage
  },
  data() {
    return {
      image: {
        heroImage
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
