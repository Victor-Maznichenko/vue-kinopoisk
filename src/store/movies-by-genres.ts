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

const preparedList = computed(() => {
  const genresStore = useGenres();
  // если жанры не загружены или результаты фильмов пусты — вернуть []
  if (!genresStore.list.length || !list.value.length) return [];

  return list.value.map((moviesByGenre, i) => {
    const genre = genresStore.list[i];
    if (!genre?.name || !genre?.id || !moviesByGenre) {
      // вместо throw возвращаем заглушку или логируем ошибку
      console.warn('Invalid data for genre', genre, moviesByGenre);
      return null;
    }
    const enrichedMovies = moviesByGenre.map(({ genre_ids = [], ...movie }) => ({
      ...movie,
      genre_ids,
      genres_names: genre_ids.map(id => genresStore.list.find(g => g.id === id)?.name ?? ''),
    }));
    return { id: genre.id, name: genre.name, list: enrichedMovies };
  }).filter(Boolean); // убрать null-элементы
});

   return {
      isLoading,
      getList,
      preparedList,
   };
});
