import {
   requests,
   type DiscoverMovie200ResultsItem,
   type GenreMovieList200GenresItem,
} from "@/common/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useGenres } from "./genres";

interface MoviesByGenre {
   list: (DiscoverMovie200ResultsItem & { genres_names?: string[] })[];
   name: string;
   id: number;
}

const offset = 0;
const limit = 10;
const findGenreById = (genres: GenreMovieList200GenresItem[], id: number) =>
   genres.find((g) => g.id === id);

export const useMoviesByGenres = defineStore("moviesByGenres", () => {
   const list = ref<DiscoverMovie200ResultsItem[][]>([]);
   const isLoading = ref(false);

   const getList = async () => {
      if (isLoading.value) return;
      isLoading.value = true;

      try {
         const genresStore = useGenres();
         if (!genresStore.list.length) await genresStore.getList();

         const promises = genresStore.list.slice(offset, offset + limit).map(({ id }) =>
            requests.discoverMovie({
               with_genres: String(id ?? -1),
            }),
         );

         const responses = await Promise.all(promises);
         list.value = responses.map((response) => response.data.results ?? []);
      } catch (error) {
         // TOAST
      } finally {
         isLoading.value = false;
      }
   };

   const getPreparedList = computed(() => {
      const genresStore = useGenres();
      const preparedData = list.value.map((moviesByGenre, i) => {
         const { name, id } = genresStore.list[i];

         if (!name || !id || !moviesByGenre) {
            throw new Error("Неверный ответ от сервера");
         }

         moviesByGenre = moviesByGenre.map(({ genre_ids = [], ...movie }) => ({
            ...movie,
            genre_ids,
            genres_names: genre_ids.map((id) => findGenreById(genresStore.list, id)?.name ?? ""),
         }));

         return { id, name, list: moviesByGenre } as MoviesByGenre;
      });

      return preparedData;
   });

   return {
      isLoading,
      getList,
      getPreparedList,
   };
});
