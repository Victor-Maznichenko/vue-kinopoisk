import { requests, type MoviePopularList200ResultsItem } from "@/common/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePopularMovies = defineStore("popularMovies", () => {
   const list = ref<MoviePopularList200ResultsItem[]>([]);
   const isLoading = ref(false);

   const shortestList = computed(() =>
      list.value.map((movie) => ({
         id: movie.id ?? -1,
         title: movie.title ?? movie.original_title ?? "Название фильма",
         image: movie.poster_path ?? movie.backdrop_path ?? "",
         release_date: movie.release_date ?? "",
      })),
   );

   const getList = async () => {
      if (isLoading.value) return;

      isLoading.value = true;

      try {
         const response = await requests.moviePopularList();
         list.value = response.data?.results ?? [];
      } catch (error) {
         // toast.notify
      } finally {
         isLoading.value = false;
      }
   };

   return {
      isLoading,
      getList,
      list,
      shortestList,
   };
});
