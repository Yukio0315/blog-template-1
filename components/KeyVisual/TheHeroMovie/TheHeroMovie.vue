<template src="./template.html" />

<script>
import TheTopInfoBox from '@/components/KeyVisual/TheTopInfoBox/TheTopInfoBox.vue'
import keyVisual from '@/assets/images/key-visual.jpg'
export default {
  components: {
    TheTopInfoBox,
    keyVisual
  },
  data() {
    return {
      image: {
        keyVisual
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
