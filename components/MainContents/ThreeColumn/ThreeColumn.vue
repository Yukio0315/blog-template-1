<template src="./template.html" />

<script>
import one from '@/assets/images/one.jpg'
import two from '@/assets/images/two.jpg'
import three from '@/assets/images/three.jpg'

export default {
  data() {
    return {
      contents: [
        {
          for: '1の方へ',
          title: 'ONE',
          sub: 'one',
          message:
            'ひるますぎわたしは舞台へ明るくんてさっきの汗の風館が笑い第一狩会のおじぎがなっながらいましたら。',
          button: 'one',
          url: '/one',
          image: one,
          color: 'rgba(41, 32, 109, 0.5)'
        },
        {
          for: '2の方へ',
          title: 'TWO',
          sub: 'two',
          message:
            'トランペットもさっきくらべでしまえませ。ゴーシュは一しなんどのように引きあげてきまし。呆気は病院いちどときみをつかれながらいた。',
          button: 'two',
          url: '/two',
          image: two,
          color: 'rgba(117, 15, 57, 0.5)'
        },
        {
          for: '3の方へ',
          title: 'THREE',
          sub: 'three',
          message:
            'ばかは虎をまったくに出しとゴーシュに室のようをつまんて棒をきかせでもうセロをすぎてくださいたら。',
          button: 'three',
          url: '/three',
          image: three,
          color: 'rgba(41, 32, 109, 0.5)'
        }
      ]
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
