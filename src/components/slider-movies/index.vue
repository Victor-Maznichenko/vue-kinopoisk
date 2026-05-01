<template>
   <Swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :modules="modules"
      :class="$style.sliderMovies"
   >
      <SwiperSlide :class="$style.movie" v-for="movie in items">
         <img :class="$style.movieImg" :src="buildStaticURL(movie.poster_path)" loading="lazy" :alt="movie.title" />
         <Typography variant="heading-5" as="h5">{{movie.title}}</Typography>
      </SwiperSlide>
   </Swiper>
</template>

<script setup lang="ts">
import type { DiscoverMovie200ResultsItem } from "@/common/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { buildStaticURL } from "@/common/lib";
import "swiper/css";

interface SliderProps {
   items: (DiscoverMovie200ResultsItem & { genres_names?: string[] })[];
}

const { items } = defineProps<SliderProps>();

const modules = [Navigation];
</script>

<style module lang="scss">
.sliderMovies {
  width: 100%;
}

.movieImg {
  display: block;
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
