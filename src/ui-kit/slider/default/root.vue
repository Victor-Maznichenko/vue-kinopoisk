<template>
  <div :class="[$style.root, props.class]">
    <Swiper
      class="slider"
      :modules="[Navigation, ...(props.modules ?? [])]"
      :watchSlidesProgress="true"
      slides-per-view="auto"
      grab-cursor
      :navigation="{ prevEl, nextEl }"
      @swiper="onSwiper"
    >
      <slot />
    </Swiper>

    <slot name="prev">
      <SliderPrev hide />
    </slot>

    <slot name="next">
      <SliderNext hide />
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper';
import { provide, ref, nextTick } from 'vue';
import { Swiper } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { sliderKey } from './contextKey';

defineOptions({ name: 'Swiper' });

const props = defineProps<{
  class?: string;
  modules?: any[];
}>();

const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
const swiper = ref<SwiperInstance | null>(null);

provide(sliderKey, { prevEl, nextEl });

const initNavigation = () => {
  const s = swiper.value;
  if (!s || !prevEl.value || !nextEl.value) return;

  s.params.navigation = {
    ...(s.params.navigation as object),
    prevEl: prevEl.value,
    nextEl: nextEl.value,
  };

  s.navigation.destroy();
  s.navigation.init();
  s.navigation.update();
}

const onSwiper = (instance: SwiperInstance) => {
  swiper.value = instance;
  nextTick(initNavigation);
}

</script>

<style module lang="scss">
.root {
    position: relative;
    padding: 0 60px;
    margin: 0 -60px;
}
</style>