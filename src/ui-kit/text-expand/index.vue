
<template>
    <p v-if="isExpanded">
      <Typography as='span'>{{isOpen ? text : shortestText}} </Typography>
      <Button @click="handleClick" variant='text'>{{ isOpen ? 'Скрыть' : 'Показать' }}</Button>
    </p>
    <p v-else><Typography as='span'>{{text}} </Typography></p>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import Button from '../button/index.vue'; 
    import Typography from '@/ui-kit/typography/index.vue';

    interface TextExpandProps {
        text: string,
        maxLength?: number
    }

    const isOpen = ref(false);


    const props = withDefaults(defineProps<TextExpandProps>(), {
        maxLength: 200
    });

    const handleClick = () => isOpen.value = !isOpen.value;

    const isExpanded = computed(() => props.text.length > props.maxLength);
    const shortestText = computed(() => `${props.text.slice(0, props.maxLength)}...`);
</script>
