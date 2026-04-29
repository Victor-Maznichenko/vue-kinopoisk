<template>
   <div :class="$style.wrapper">
      <Header />
      <main :class="$style.main">
        <router-view />
      </main>
      <Footer />
   </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
</script>

<style lang="scss" module>
.wrapper  {
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>