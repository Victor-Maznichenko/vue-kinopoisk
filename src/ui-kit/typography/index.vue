<template>
  <component :is="props.as" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';

type TypographyStyle =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'text-m'
  | 'text-s';

interface TypographyProps {
  variant?: TypographyStyle;
  accentColor?: boolean;
  as?: keyof HTMLElementTagNameMap;
}

const style = useCssModule();

const props = withDefaults(defineProps<TypographyProps>(), {
  as: 'p',
  variant: 'text-m',
});

const classes = computed(() => [
  style.typography,
  style[`typography--${props.variant}`],
  props.accentColor && style['typography--primary-color']
]);
</script>

<style lang="scss" module>
.typography--heading-1,
.typography--heading-2,
.typography--heading-3,
.typography--heading-4,
.typography--heading-5 {
  font-weight: 700;
  color: var(--color-white);
}

.typography--heading-6 {
  font-weight: 600;
  color: var(--color-white);
}

.typography--text-m,
.typography--text-s {
  font-weight: 400;
}

@mixin init-heading($size) {
  .typography--heading-#{$size} {
    font-size: var(--fs-heading-#{$size});
    line-height: 1;
  }
}

@include init-heading(1);
@include init-heading(2);
@include init-heading(3);
@include init-heading(4);
@include init-heading(5);
@include init-heading(6);

.typography--text-m {
  font-size: var(--fs-text-m);
  line-height: 140%;
}

.typography--text-s {
  font-size: var(--fs-text-s);
  line-height: 1;
}

.typography--primaryColor {
  color: var(--color-red);
}
</style>