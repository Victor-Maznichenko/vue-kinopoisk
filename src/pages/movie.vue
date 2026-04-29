<template>
    <main :class="$style.root">
      <!-- <MoviePreview movie={movie}>
        <MoviePreview.Title />
        <MoviePreview.Info />
        <MoviePreview.Actions>
          <MoviePreview.ButtonWatch />
          <MoviePreview.ButtonTrailer />
          <MoviePreview.ButtonLike />
        </MoviePreview.Actions>
      </MoviePreview> -->

      <div class='container'>
        <section :class="$style.info">
          <div :class="$style.details">
            <div :class="$style.about">
              <Typography :class="$style.title" variant='heading-2' as='h2'>{{MOVIE_CONTENT.aboutTitle}}</Typography>
              <!-- <Typography>{{movie?.overview}}</Typography> -->
            </div>

            <Reviews movieId={Number(id)} />

          </div>
          <div :class="$style.stats"></div>
        </section>
      </div>
    </main>
</template>

<script setup lang="ts">
import Typography from '@/ui-kit/typography/index.vue';
//   const id = useParams()?.id ?? '-1';
//   const { movie, getMovie, reset } = useMoviesStore();

//   useEffect(() => {
//     getMovie(Number(id));
//     return () => reset();
//   }, [id]);

const MOVIE_CONTENT = {
  aboutTitle: 'О фильме'
};

</script>

<style module>

</style>