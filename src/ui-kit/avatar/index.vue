<template>
  <div :class="classes" :style="styles">
    <img v-if="props?.src" :class="$style.img" :src="props.src" alt="" />
    <span v-else-if="props.text">{{ getInitials(props.text) }}</span>
    <IconUser v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import IconUser from '@/common/assets/icons/user.svg';
import { getInitials } from './lib';

const style = useCssModule()

interface AvatarProps {
  variant?: 'circle' | 'square';
  text?: string;
  src?: string;
  size?: number;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  variant: 'square',
  size: 54,
});

const classes = computed(() => [
  style.avatar,
  style[`avatar--${props.variant}`],
  !props?.src && !props?.text && style.iconPlaceholder
]);

const styles = computed(() => [{'--avatar-size': `${props.size}px`}]);
</script>

<style lang="scss" module>
.avatar {
    --avatar-size: 32px;
    display: inline-block;
    aspect-ratio: 1;
    width: var(--avatar-size);
    border: calc(var(--avatar-size) / 30) solid currentColor;
    color: var(--black);
    font-weight: 700;
    font-family: Poppins, sans-serif;
    font-size: calc(var(--avatar-size) / 3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
}

.img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.iconPlaceholder {
    font-size: 0;
    padding: calc(var(--avatar-size) / 3.33);
    
    svg {
        width: 100%;
        height: 100%;
    }
}

.avatar--circle {
    border-radius: 50%;
}

.avatar--square {
    border-radius: calc(var(--avatar-size) / 5.4);
}
</style>
