<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';

defineOptions({ name: 'SwiperSlide' });
</script>

<template>
  <SwiperSlide>
    <slot />
  </SwiperSlide>
</template>
