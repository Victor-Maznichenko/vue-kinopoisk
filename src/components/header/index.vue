<template>
  <header :class="$style.header">
    <div class='container'>
      <div :class="$style.inner">
        <div :class="$style.start">
          <RouterLink to='/'>
            <LogoIcon />
          </RouterLink>

          <nav>
            <ul :class="$style.navList">
                <li v-for="{href, label} in NAVIGATION_LINKS" :key="href">
                    <RouterLink :to="href">{{ label }}</RouterLink>
                </li>
            </ul>
          </nav>
        </div>

        <div :class="$style.end">
          <Button :class="$style.search" variant='unstyled'>
            <SearchIcon />
            <Typography as='span'>Поиск</Typography>
          </Button>

          <Button variant='unstyled'>
            <NotifyIcon />
          </Button>

          <RouterLink to='/profile'>
            <Avatar />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/common/assets/icons/logo.svg';
import SearchIcon from '@/common/assets/icons/search.svg';
import NotifyIcon from '@/common/assets/icons/notify.svg';
import Typography from '@/ui-kit/typography/index.vue';

const NAVIGATION_LINKS = [
  {
    href: '/films',
    label: 'Фильмы'
  },
  {
    href: '/serials',
    label: 'Сериалы'
  },
  {
    href: '/collections',
    label: 'Подборки'
  }
];
</script>

<style lang="scss" module>
.inner, .start, .end, .navList {
    display: flex;
    align-items: center;
}

.header {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 115px;
    padding: 30px 0;
    border-bottom: 1px solid var(--color-white-15);
}

.inner {
    justify-content: space-between;
}

.start {
    column-gap: 60px;
}

.end, .navList {
    column-gap: 30px;
}

.search {
    display: flex;
    align-items: center;
    column-gap: 8px;
}
</style>