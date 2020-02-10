<template src="./template.html" />

<script>
import variables from '@/lib/variables'

export default {
  data() {
    return {
      switchNum: 5
    }
  },
  computed: {
    calcLastPage() {
      return (
        Math.floor(
          this.$store.state.posts.length / variables.LIMIT_OF_SINGLE_PAGE
        ) + 1
      )
    },
    getNowPage() {
      return Number(this.$route.params.id)
    },
    changePagination() {
      return this.calcLastPage <= this.switchNum + 2
    },
    firstPagination() {
      return this.getNowPage <= this.switchNum
    },
    middlePagination() {
      return (
        this.getNowPage > this.switchNum &&
        this.getNowPage <= this.calcLastPage - this.switchNum
      )
    },
    finalPagination() {
      return (
        this.getNowPage > this.calcLastPage - this.switchNum &&
        this.getNowPage <= this.calcLastPage
      )
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
