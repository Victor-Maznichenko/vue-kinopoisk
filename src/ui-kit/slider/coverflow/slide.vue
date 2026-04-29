<script setup lang="ts">
import { SliderDefault } from '../default'

defineOptions({
  name: 'SwiperSlide'
})
</script>

<template>
  <SliderDefault.Slide
    :class="$style.slide"
  >
    <slot />
  </SliderDefault.Slide>
</template>

<style lang="scss" module>
.slide {
  width: 380px;
  border-radius: 12px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition-property: transform;
  filter: blur(3.6px);
  opacity: 0 !important;
  min-height: 546px;
}

:global(.swiper-slide-active).slide {
  filter: blur(0);
}

:global(.swiper-slide-visible).slide {
  opacity: 1 !important;
}
</style>