<template src="./template.html" />

<script>
import KeyVisualInfoBox from '@/components/KeyVisual/KeyVisualInfoBox/KeyVisualInfoBox.vue'
export default {
  components: {
    KeyVisualInfoBox
  },
  props: {
    theme: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
