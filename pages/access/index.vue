<template src="./template.html" />

<script>
import GoogleMap from '@/components/GoogleMap/GoogleMap.vue'
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import AccessTable from '@/components/Access/AccessTable/AccessTable.vue'
import Transportation from '@/components/Access/Transportation/Transportation.vue'

export default {
  components: {
    BreadCrumbs,
    GoogleMap,
    AccessTable,
    Transportation
  },
  data() {
    return {
      breadcrumbsItems: [
        { text: 'Home', disabled: false, href: '/' },
        { text: 'Access', disabled: true, href: 'access' }
      ],
      gmap: {
        position: { lat: 35.644388, lng: 139.699306 },
        markers: [
          {
            position: { lat: 35.644388, lng: 139.699306 },
            title: 'My favorite Starbucks',
            offset: { X: 35, Y: -12 }
          }
        ],
        icon: 'static-logo-small.png',
        size: { height: '600px', width: '600px' }
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
