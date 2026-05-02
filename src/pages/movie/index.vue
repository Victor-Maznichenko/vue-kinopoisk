<template>
   <main :class="$style.catalog">
      <section :class="$style.preview" :style="{backgroundImage: `url(${preparedMovie.backdropSrc})`}">
         <div className="container">
            <div :class="$style.previewContent">
               <div :class="$style.previewInfo">
                  <Typography accentColor>{{ preparedMovie.voteAverage }}</Typography>
                  <Typography>
                     <span>• </span>
                     <span>{{ preparedMovie.releaseYear }}, </span>
                     <span v-for="genre in preparedMovie.genres" :key="genre.id"
                        >{{ genre.name }},
                     </span>
                     <span>• </span>
                     <span v-for="countryCode in preparedMovie.originCountry" :key="countryCode">
                        {{ COUNTRY_NAMES?.[countryCode] ?? "" }}, {{ " " }}
                     </span>
                     <span>• </span>
                     <span>{{ preparedMovie.duration }}</span>
                  </Typography>
               </div>

               <Typography variant="heading-1" as="h1">{{ preparedMovie.title }}</Typography>

               <div :class="$style.previewActions">
                  <Button :class="[$style.button, $style.buttonPlay]">
                     <span>Смотреть фильм</span>
                     <IconPlayTriangle />
                  </Button>
                  <Button :class="$style.button" variant="outline-white">Трейлер</Button>
                  <Button :class="[$style.button, $style.liked]" variant="outline-white-icon">
                     <IconHeart :class="$style.heart" />
                  </Button>
               </div>
            </div>
         </div>
      </section>

      <div class="container">
         <section :class="$style.info">
            <div :class="$style.details">
               <div :class="$style.about">
                  <Typography :class="$style.title" variant="heading-2" as="h2">
                     {{MOVIE_CONTENT.aboutTitle}}
                  </Typography>
                  <Typography>{{preparedMovie.overview}}</Typography>
               </div>

               <Reviews :movieId="Number(id)" />
            </div>
         </section>
      </div>
   </main>
</template>

<script setup lang="ts">
import { COUNTRY_NAMES } from "@/common/lib";
import { useMovie } from "@/store/movie";
import Typography from "@/ui-kit/typography/index.vue";
import Button from '@/ui-kit/button/index.vue';
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import IconPlayTriangle from '@/common/assets/icons/play-triangle.svg';
import IconHeart from '@/common/assets/icons/heart.svg';
import Reviews from '@/components/reviews/index.vue';

const route = useRoute();
const id = Number(route.params.id ?? "-1");

const store = useMovie();
const { preparedMovie } = storeToRefs(store);
const { getMovie } = store;

onMounted(() => {
   getMovie(id);
});

const MOVIE_CONTENT = {
   aboutTitle: "О фильме",
};
</script>

<style module lang="scss">
.catalog {
   margin-bottom: 120px;
}

.title {
   margin-bottom: 60px;
}

.info {
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
}

.details {
   max-width: 615px;
   display: flex;
   flex-direction: column;
   row-gap: 80px;
}

.preview {
   min-height: 700px;
   padding: 140px 0 100px 0;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   position: relative;
   z-index: var(--z-over);
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   justify-content: flex-end;

   &::before,
   &::after {
      content: "";
      position: absolute;
   }

   &::before {
      pointer-events: none;
      z-index: var(--z-over);
      background: linear-gradient(to bottom, transparent 0%, rgba(#141025, 0.7) 50%, #141025 100%);
      height: 15%;
      bottom: 0;
      right: 0;
      left: 0;
   }

   &::after {
      pointer-events: none;
      z-index: var(--z-under);
      background-color: rgba(#1c267f, 0.5);
      inset: 0;
   }

   &Info {
      display: flex;
      align-items: center;
      column-gap: 5px;
      margin: 15px 0 5px;
   }

   &Actions {
      margin-top: 35px;
      display: flex;
      column-gap: 15px;
   }
}

.buttonPlay {
   display: flex;
   align-items: center;
   column-gap: 10px;
}

.button.liked .heart {
   fill: var(--color-white);
}
</style>
