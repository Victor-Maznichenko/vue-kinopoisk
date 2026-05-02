<template>
   <section :class="$style.catalog">
      <Typography :class="$style.title" variant="heading-2">
         {{ PAGE_CONTENT.catalog.title }}
      </Typography>

      <div :class="$style.genresList">
         <div
            v-if="preparedList.length > 0"
            v-for="item in preparedList"
            :class="$style.genre"
            :key="item?.id"
         >
            <Typography :class="$style.genreTitle" variant="heading-4" as="h4">
               {{item?.name}}
            </Typography>
            <SliderMovies :items="item?.list ?? []" />
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import SliderMovies from "@/components/slider-movies/index.vue";
import Typography from "@/ui-kit/typography/index.vue";
import { useMoviesByGenres } from "@/store/movies-by-genres";
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

const store = useMoviesByGenres();
const { preparedList } = storeToRefs(store);
const { getList } = store;

onMounted(() => {
   getList();
});
</script>

<style lang="scss" module>
.catalog {
   padding: 60px 0;
}

.title {
   margin-bottom: 60px;
}

.genresList {
   margin-bottom: 64px;
}

.genre {
   display: block;

   &Title {
      text-transform: capitalize;
      margin-bottom: 20px;
   }

   & + & {
      margin-top: 50px;
   }
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
