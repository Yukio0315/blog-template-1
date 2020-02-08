<template src="./template.html" />

<script>
import MoreButton from '@/components/Ui/MoreButton/MoreButton'

export default {
  components: {
    MoreButton
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    direction: {
      type: String,
      required: false,
      default: 'vertical'
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
