<template>
  <button class="more-button">
    <font-awesome-icon icon="chevron-right" class="more-button-arrow" />
    <div class="more-button-message">MORE</div>
  </button>
</template>

<style lang="scss" scoped>
.more-button {
  display: flex;
  color: $color-main;
  &-arrow {
    padding-top: 10px;
  }
  &-message {
    padding-left: 5px;
  }
}
</style>
