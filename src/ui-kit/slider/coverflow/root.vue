<script setup lang="ts">
import { computed } from 'vue'
import 'swiper/css'
import 'swiper/css/effect-creative'

import { EffectCreative } from 'swiper/modules'
import { SliderDefault } from '../default';

const Z_AXIS_DEPH = -436
const MOVE_PERCENTAGE = '92%'

defineOptions({
  name: 'Swiper'
})

const props = defineProps<{
  className?: string
  modules?: any[]
}>()

const mergedModules = computed(() => [
  EffectCreative,
  ...(props.modules ?? [])
])
</script>

<template>
  <SliderDefault.Root
    :class="$style.slider"
    :creativeEffect="{
      limitProgress: 3,
      perspective: true,
      prev: { translate: [`-${MOVE_PERCENTAGE}`, 0, Z_AXIS_DEPH] },
      next: { translate: [MOVE_PERCENTAGE, 0, Z_AXIS_DEPH] }
    }"
    :watchSlidesProgress="true"
    :modules="mergedModules"
    effect="creative"
    loop
  >
    <slot />
  </SliderDefault.Root>
</template>

<style lang="scss" module>
.slider {
  width: 100%;
  max-width: 910px;
  perspective: 1200px;
  padding-left: 60px;
}

</style>