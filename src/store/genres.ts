import { requests, type GenreMovieList200GenresItem } from "@/common/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGenres = defineStore('genres', () => {
    const list = ref<GenreMovieList200GenresItem[]>([]);
    const isLoading = ref(false);

    const getList = async () => {
        if(isLoading.value) return;
        isLoading.value = true;

        try {
            const genresResponse = await requests.genreMovieList();
            list.value = genresResponse.data?.genres ?? [];
        } catch (error) {
            // TOAST
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isLoading,
        list,
        getList
    }
})
