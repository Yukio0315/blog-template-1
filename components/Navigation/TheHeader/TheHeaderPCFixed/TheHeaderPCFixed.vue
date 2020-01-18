<template src="./template.html" />

<script>
import NavbarList from '@/components/Navigation/TheHeader/NavbarList/NavbarList'

export default {
  components: {
    NavbarList
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
