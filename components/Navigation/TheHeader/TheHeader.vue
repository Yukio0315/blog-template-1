<template src="./template.html" />

<script>
import TheHeaderPC from '@/components/Navigation/TheHeader/TheHeaderPC/TheHeaderPC'
import TheHeaderPCFixed from '@/components/Navigation/TheHeader/TheHeaderPCFixed/TheHeaderPCFixed'
import TheHeaderSP from '@/components/Navigation/TheHeader/TheHeaderSP/TheHeaderSP'
import TheMenuSP from '@/components/Navigation/TheHeader/TheMenuSP/TheMenuSP'

export default {
  components: {
    TheHeaderPC,
    TheHeaderPCFixed,
    TheHeaderSP,
    TheMenuSP
  },
  data() {
    return {
      menu: [
        { id: 0, link: '/company', title: '会社概要', sub: 'Company' },
        { id: 1, link: '/member', title: '社員紹介', sub: 'Employees' },
        { id: 2, link: '/feedback', title: 'お客様の声', sub: 'Feedback' },
        { id: 3, link: '/reason', title: '弊社が選ばれる理由', sub: 'Reasons' },
        { id: 4, link: '/blog/1', title: 'ブログ', sub: 'Blog' },
        { id: 5, link: '/access', title: 'アクセス・営業時間', sub: 'Access' },
        { id: 6, link: '/form', title: 'お問い合わせ', sub: 'Form' }
      ],
      scrollY: 0,
      scrollYTarget: 138
    }
  },
  computed: {
    displayMenu() {
      return this.$store.state.displayMenu
    }
  },
  mounted() {
    window.addEventListener('scroll', this.calculateScrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.calculateScrollY)
  },
  methods: {
    calculateScrollY() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
