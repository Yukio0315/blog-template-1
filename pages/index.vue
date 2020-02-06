<template src="./template.html" />

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import TheHeroMovie from '@/components/KeyVisual/TheHeroMovie/TheHeroMovie'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import ThreeColumn from '@/components/MainContents/ThreeColumn/ThreeColumn'
import { createClient } from '@/plugins/contentful'

export default {
  components: {
    TheHeroMovie,
    GoogleMap,
    ThreeColumn,
    RingLoader
  },
  data() {
    return {
      color: '#29206d',
      size: '50px',
      loading: true,
      keyMovie: ''
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
  asyncData() {
    return createClient()
      .getAsset(process.env.CTF_KEY_VISUAL_ASSET_ID)
      .then((asset) => {
        return { keyMovie: asset.fields.file.url, loading: false }
      })
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
