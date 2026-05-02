import { requests, type MovieDetails200 } from "@/common/api";
import { buildStaticURL, formatDuration } from "@/common/lib";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMovie = defineStore("movie", () => {
   const movie = ref<MovieDetails200 | null>(null);
   const isLoading = ref(false);

   const preparedMovie = computed(() => ({
      id: movie.value?.id ?? -1,
      title: movie.value?.title ?? "",
      genres: movie.value?.genres ?? [],
      overview: movie.value?.overview ?? "",
      originCountry: movie.value?.origin_country ?? [],
      duration: formatDuration(movie.value?.runtime ?? 0),
      backdropSrc: buildStaticURL(movie.value?.backdrop_path),
      voteAverage: String(movie.value?.vote_average ?? '').slice(0, 3),
      releaseYear: new Date(movie.value?.release_date ?? '').getFullYear(),
   }));

   const getMovie = async (id: number) => {
      if (isLoading.value) return;

      isLoading.value = true;

      try {
         const response = await requests.movieDetails(id);
         movie.value = response.data ?? null;
      } catch (error) {
         // toast.notify
      } finally {
         isLoading.value = false;
      }
   };


   const $reset = () => movie.value = null;

   return {
      isLoading,
      getMovie,
      $reset,
      preparedMovie,
   };
});
