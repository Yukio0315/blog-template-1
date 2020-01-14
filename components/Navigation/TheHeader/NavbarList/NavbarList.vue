<template src="./template.html" />

<script>
export default {
  data() {
    return {
      menu: [
        { id: 0, link: '/company', title: '会社概要', sub: 'Company' },
        { id: 1, link: '/member', title: '社員紹介', sub: 'Employees' },
        { id: 2, link: '/feedback', title: 'お客様の声', sub: 'Feedback' },
        { id: 3, link: '/reason', title: '弊社が選ばれる理由', sub: 'Reasons' },
        { id: 4, link: '/blog', title: 'ブログ', sub: 'Blog' },
        { id: 5, link: '/access', title: 'アクセス・営業時間', sub: 'Access' },
        { id: 6, link: '/form', title: 'お問い合わせフォーム', sub: 'Form' }
      ]
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
