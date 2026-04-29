<template>
   <main class="container">
      <section :class="$style.main">
         <div :class="$style.info">
            <Typography variant="heading-2">{{ PAGE_CONTENT.main.title }}</Typography>
            <Typography :class="$style.description" variant="text-m">|
                {{ PAGE_CONTENT.main.description }}</Typography>
            <Button :class="$style.button">{{ PAGE_CONTENT.main.buttonText }}</Button>
         </div>

         <SliderCoverflow.Root v-if="list.length > 0" speed="500">
            <SliderCoverflow.Slide v-for="{ id, title, poster_path } in list" :key="id">
               <RouterLink :to="ROUTES.MOVIE.replace(':id', String(id))">
                  <img :class="$style.slide__img" :src="buildStaticURL(poster_path)" />
                  <Typography as="h6">{{ title }}</Typography>
               </RouterLink>
            </SliderCoverflow.Slide>
         </SliderCoverflow.Root>
      </section>
      <section :class="$style.catalog">
         <Typography :class="$style.title" variant="heading-2">
            {{ PAGE_CONTENT.catalog.title }}
        </Typography>
         <!-- <MoviesListSkeleton genresCount={genresCount} />-->
         <!-- <MoviesList moviesByGenres="{list}" /> -->
                <!-- <div v-for="{ id, title, poster_path } in list" :key="id">
         <RouterLink :to="ROUTES.MOVIE.replace(':id', String(id))">
            <img :class="$style.slide__img" :src="buildStaticURL(poster_path)" />
            <Typography as="h6">{{ title }}</Typography>
         </RouterLink>
      </div> -->
         <!-- <Button variant='outline-white' @click="handleClick">{buttonText}</Button> -->
      </section>
   </main>
</template>

<script setup lang="ts">
import Button from "@/ui-kit/button/index.vue";
import Typography from "@/ui-kit/typography/index.vue";
import { SliderCoverflow } from "@/ui-kit/slider/coverflow";
import { ROUTES, buildStaticURL } from "@/common/lib";
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
   catalog: {
      title: "Каталог фильмов и сериалов",
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
