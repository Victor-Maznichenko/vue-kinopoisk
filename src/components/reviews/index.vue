<template>
   <div :class="$style.reviews">
      <Typography :class="$style.title" variant="heading-2" as="h2">Рецензии</Typography>
      <Typography v-if="!isLoading && preparedList.length === 0" as="p">Рецензий пока нет...</Typography>

      <div :class="$style.reviewsList">
         <div v-for="review in preparedList" :key="review.id">
            <div :class="$style.person">
               <Avatar variant="circle" :src="review.author.avatarSrc" />
               <div>
                  <Typography :class="$style.personName" as="b">{{review.author.name}}</Typography>
                  <Typography :class="$style.personDate" variant="text-s">{{review.createdDate}}</Typography>
               </div>
            </div>
            <div :class="$style.overview">
               <Typography accentColor>{{ review.author.rating }}</Typography>
               <Typography>• «Вуди, Руди, Винии»</Typography>
            </div>
            <TextExpand :text="review.content" />
         </div>
      </div>

      <!-- 
      <Condition
        else={<ReviewsList reviews={displayedReviews} />}
        then={<ReviewsListSkeleton limit={LIMIT} />}
        value={isLoading}
      /> -->

      <!--       <Button
         v-if="hasExpandedButton && !isLoading"
         :class="$style.expandButton"
         variant="outline-white"
         @click="handleToggle"
      >
         {{isExpanded ? 'Свернуть' : 'Посмотреть всё'}}
      </Button> -->
   </div>
</template>

<script setup lang="ts">
import Typography from "@/ui-kit/typography/index.vue";
import Avatar from "@/ui-kit/avatar/index.vue";
import TextExpand from "@/ui-kit/text-expand/index.vue";
import { storeToRefs } from "pinia";
import { useMovieReviews } from "@/store/movie-reviews";
import { onMounted } from "vue";

const props = defineProps<{ movieId: number }>();

const store = useMovieReviews();
const { preparedList, isLoading } = storeToRefs(store);
const { getReviews } = store;

onMounted(() => {
   getReviews(props.movieId);
});
</script>

<style module lang="scss">
.reviewCard {
    width: 100%;
}

.overview {
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--color-white);
}

.person, .overview {
    display: flex;
    align-items: center;
}

.person {
    column-gap: 12px;
    margin-bottom: 30px;
    color: var(--color-white);

    &Name {
        margin-bottom: 5px;
    }

    &Date {
        color: var(--color-white-50);
    }
}

.reviewsList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
    row-gap: 80px;
}


</style>
