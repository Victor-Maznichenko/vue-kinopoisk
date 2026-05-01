<template>
   <section :class="$style.main">
      <div :class="$style.info">
         <Typography variant="heading-2">{{ PAGE_CONTENT.main.title }}</Typography>
         <Typography :class="$style.description" variant="text-m"
            >| {{ PAGE_CONTENT.main.description }}</Typography
         >
         <Button :class="$style.button">{{ PAGE_CONTENT.main.buttonText }}</Button>
      </div>

      <SliderPopular :items="list" />
   </section>
</template>

<script setup lang="ts">
import SliderPopular from "@/components/slider-popular/index.vue";
import Button from "@/ui-kit/button/index.vue";
import Typography from "@/ui-kit/typography/index.vue";
import { usePopularMovies } from "@/store/popular-movies";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const PAGE_CONTENT = {
   main: {
      title: "Самые сочные премьеры кино — у вас дома",
      description:
         "Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!",
      buttonText: "Смотреть бесплатно",
   },
};

const store = usePopularMovies();
const { list } = storeToRefs(store);
const { getList } = store;

onMounted(() => {
   getList();
});
</script>

<style lang="scss" module>
.main {
   padding: 205px 0 210px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-image: url("@/common/assets/images/main-background.webp");
   background-repeat: no-repeat;
   background-position: center center;
   background-size: 100% auto;
}

.info {
   max-width: 426px;
}

.description {
   margin: 20px 0 35px;
}

.slide {
   &__img {
      height: 490px;
      width: 100%;
      object-fit: cover;
      display: block;
      margin-bottom: 10px;
   }
}
</style>
