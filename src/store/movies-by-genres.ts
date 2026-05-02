import {
   requests,
   type DiscoverMovie200ResultsItem,
} from "@/common/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useGenres } from "./genres";

const LIMIT = 10;

export const useMoviesByGenres = defineStore("moviesByGenres", () => {
   const offset = ref(0);
   const list = ref<DiscoverMovie200ResultsItem[][]>([]);
   const isLoading = ref(false);

   const getList = async () => {
      if (isLoading.value) return;
      isLoading.value = true;

      try {
         const genresStore = useGenres();
         if (!genresStore.list.length) await genresStore.getList();

         const promises = genresStore.list.slice(LIMIT, offset.value + LIMIT).map(({ id }) =>
            requests.discoverMovie({ with_genres: String(id ?? -1) }),
         );

         const responses = await Promise.all(promises);
         list.value = responses.map((response) => response.data.results ?? []);
         offset.value += LIMIT;
      } catch (error) {
         // TOAST
      } finally {
         isLoading.value = false;
      }
   };

   const preparedList = computed(() => {
      const genresStore = useGenres();
      if (!genresStore.list.length || !list.value.length) return [];

      return list.value
         .map((moviesByGenre, i) => {
            const genre = genresStore.list[i];

            if (!genre?.name || !genre?.id || !moviesByGenre) return null;

            const enrichedMovies = moviesByGenre.map(({ genre_ids = [], ...movie }) => ({
               ...movie,
               genre_ids,
               genres_names: genre_ids.map(
                  (id) => genresStore.list.find((g) => g.id === id)?.name ?? "",
               ),
            }));
            return { id: genre.id, name: genre.name, list: enrichedMovies };
         })
         .filter(Boolean);
   });

   return {
      isLoading,
      getList,
      preparedList,
   };
});
