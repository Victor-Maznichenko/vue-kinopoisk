<script setup lang="ts">
import { inject } from 'vue';
import Button from '@/ui-kit/button/index.vue';
import { sliderKey } from './contextKey';
import ArrowRightIcon from '@/common/assets/icons/arrow-right.svg';

defineOptions({ name: 'SliderPrev' });

const props = defineProps<{
  hide?: boolean;
  class?: string;
}>();

const slider = inject(sliderKey);
if (!slider) throw new Error('SliderPrev must be used inside SliderRoot');

</script>

<template>
  <Button
    :ref="slider.prevEl"
    :class="[$style.buttonPrev, props.hide && $style.hide, props.class]"
    variant="unstyled"
  >
    <ArrowRightIcon />
  </Button>
</template>

<style module lang="scss">
.buttonPrev {
    position: absolute;
    z-index: 2;
    top: 50%;
}

.buttonPrev{
    left: 0;
    transform: translateY(-50%) rotateY(180deg);
}

.hide {
    opacity: 0;
    pointer-events: none;
}
</style>