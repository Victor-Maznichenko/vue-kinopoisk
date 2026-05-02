import { requests, type MovieReviews200ResultsItem } from "@/common/api";
import { buildStaticURL } from "@/common/lib";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

export const useMovieReviews = defineStore("movieReviews", () => {
   const list = ref<MovieReviews200ResultsItem[]>([]);
   const isLoading = ref(false);

   const preparedList = computed(() =>
      list.value.map((review) => {
         const author = review.author_details ?? {};
         const avatarSrc = author?.avatar_path
            ? buildStaticURL(author?.avatar_path, "logo")
            : undefined;

         const formattedDate = new Date(review.created_at ?? "").toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
         });

         const md = new MarkdownIt({
            html: false,
            linkify: true,
            breaks: true,
         });

         const html = md.render(review.content ?? "")
         const sanitazedHTML = DOMPurify.sanitize(html)

         return {
            author: {
               name: author?.name ?? "",
               username: author?.username ?? "",
               rating: `${author?.rating ?? 0}/10`,
               avatarSrc,
            },
            content: sanitazedHTML,
            createdDate: formattedDate,
            id: review.id ?? -1,
            updated_at: review.updated_at ?? "",
            url: review.url ?? "",
         };
      }),
   );

   console.log(list.value);
   console.log(preparedList.value);

   const getReviews = async (id: number) => {
      // if (isLoading.value) return;

      isLoading.value = true;

      try {
         const response = await requests.movieReviews(id, { language: 'en-US' });
         list.value = response.data.results ?? [];
      } catch (error) {
         // toast.notify
      } finally {
         isLoading.value = false;
      }
   };

   const $reset = () => (list.value = []);

   return {
      isLoading,
      getReviews,
      $reset,
      preparedList,
   };
});
