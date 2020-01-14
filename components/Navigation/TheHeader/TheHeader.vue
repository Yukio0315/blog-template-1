<template src="./template.html" />

<script>
import NavbarList from '@/components/Navigation/TheHeader/NavbarList/NavbarList'
import TheMenuToggle from '@/components/Navigation/TheHeader/TheMenuToggle/TheMenuToggle'

export default {
  components: {
    NavbarList,
    TheMenuToggle
  },
  data() {
    return {
      menu: [
        { id: 1, link: '/member', title: '社員紹介', sub: 'Employees' },
        { id: 2, link: '/feedback', title: 'お客様の声', sub: 'Feedback' },
        { id: 3, link: '/reason', title: '弊社が選ばれる理由', sub: 'Reasons' },
        { id: 4, link: '/blog', title: 'ブログ', sub: 'Blog' },
        { id: 5, link: '/form', title: 'お問い合わせフォーム', sub: 'Form' }
      ]
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
