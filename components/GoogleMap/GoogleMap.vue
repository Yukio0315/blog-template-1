<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div>
    <GmapMap
      :center="{ lat, lng }"
      :zoom="17"
      :style="`width: ${size.width}; height: ${size.height}`"
      map-type-id="terrain"
    >
      <GmapCustomMarker
        v-for="(m, index) in markers"
        :key="index"
        :marker="m.position"
        :clickable="true"
        :title="m.title"
        :offsetX="m.offset.X"
        :offsetY="m.offset.Y"
      >
        <img :src="icon" />
      </GmapCustomMarker>
    </GmapMap>
  </div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'

export default {
  components: {
    GmapCustomMarker
  },
  props: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    markers: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Object,
      required: true
    }
  }
}
</script>
