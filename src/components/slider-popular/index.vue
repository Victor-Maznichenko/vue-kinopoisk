<template>
   <swiper
      :effect="'creative'"
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :creativeEffect="creativeEffectParams"
      :pagination="true"
      :modules="modules"
      :speed="500"
      :class="$style.sliderPopular"
   >
      <SwiperSlide v-for="movie in items" :class="$style.slide" :key="movie.id">
         <RouterLink :class="$style.movie" :to="{ path: ROUTES.MOVIE.replace(':id', String(movie.id)) }">
            <img :class="$style.movie__img" :src="buildStaticURL(movie.poster_path)" />
            <Typography as="h6">{{ movie.title }}</Typography>
         </RouterLink>
      </SwiperSlide>
    </swiper>
</template>

<script setup lang="ts">
import type { MoviePopularList200ResultsItem } from "@/common/api";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ROUTES, buildStaticURL } from "@/common/lib";
import "swiper/css";
import 'swiper/css/effect-creative';

interface SliderProps {
   items: MoviePopularList200ResultsItem[];
}

const Z_AXIS_DEPTH = -436;
const MOVE_PERCENTAGE = "92%";
const creativeEffectParams = {
  limitProgress: 3,
  perspective: true,
  prev: { translate: [`-${MOVE_PERCENTAGE}`, 0, Z_AXIS_DEPTH] },
  next: { translate: [MOVE_PERCENTAGE, 0, Z_AXIS_DEPTH] },
};

const { items } = defineProps<SliderProps>();
const modules = [EffectCreative, Autoplay];
</script>

<style module lang="scss">
.sliderPopular {
   width: 100%;
   max-width: 910px;
   perspective: 1200px;
   padding-left: 60px;
}

.slide {
   width: 380px;
   overflow: hidden;
   transform-style: preserve-3d;
   transition-property: transform;
   filter: blur(3.6px);
   opacity: 0 !important;
   height: 546px;
}

.movie {
    &__img {
        height: 490px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
        margin-bottom: 10px;
        border-radius: 12px;
    }
}

.slide:global(.swiper-slide-active) {
   filter: blur(0);
}

.slide:global(.swiper-slide-visible) {
   opacity: 1 !important;
}
</style>
