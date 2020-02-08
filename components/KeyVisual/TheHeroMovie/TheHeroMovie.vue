<template src="./template.html" />

<script>
import TheTopInfoBox from '@/components/KeyVisual/TheTopInfoBox/TheTopInfoBox.vue'
import keyVisual from '@/static/data/assets/key-visual-image'
import keyMovie from '@/static/data/assets/key-visual-movie'

export default {
  components: {
    TheTopInfoBox
  },
  data() {
    return {
      keyVisual,
      keyMovie
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
