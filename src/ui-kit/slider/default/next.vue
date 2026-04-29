<!-- SliderNext.vue -->
<script setup lang="ts">
import { inject } from 'vue';
import Button from '@/ui-kit/button/index.vue';
import { sliderKey } from './contextKey';
import ArrowRightIcon from '@/common/assets/icons/arrow-right.svg';

defineOptions({ name: 'SliderNext' });

const props = defineProps<{
  hide?: boolean;
  class?: string;
}>();

const slider = inject(sliderKey);
if (!slider) {
  throw new Error('SliderNext must be used inside SliderRoot');
}
</script>

<template>
  <Button
    :ref="slider.nextEl"
    :class="[$style.buttonNext, props.hide && $style.hide, props.class]"
    variant="unstyled"
  >
    <ArrowRightIcon />
  </Button>
</template>

<style module lang="scss">
.buttonNext {
    position: absolute;
    z-index: 2;
    top: 50%;
}

.buttonNext {
    right: 0;
    transform: translateY(-50%);
}

.hide {
    opacity: 0;
    pointer-events: none;
}
</style>