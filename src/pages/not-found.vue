<template>
    <main :class="$style.notFound">
      <img :class="$style.img" alt='Страница не найдена =(' :src="notFoundSrc" />
      <div>
        <Button :class="$style.button" :click="handleHome">
          На главную
        </Button>
        <Button :class="$style.button" :click="handleBackward" variant='outline-white'>
          Вернуться назад
        </Button>
      </div>
    </main>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import notFoundSrc from '@/common/assets/images/not-found.webp';
  import { ROUTES } from '@/common/lib';

  const router = useRouter()
  const handleBackward = () => router.back()
  const handleHome = () => router.push(ROUTES.ROOT)
</script>

<style lang="scss" module>
.notFound {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.img {
  filter: drop-shadow(0px 0px 10px black);
  pointer-events: none;
  max-width: 100%;
  max-height: 80dvh;
  display: block;
  margin-bottom: 1rem;
}
.button {
  & + & {
    margin-left: 15px;
  }
}
</style>
