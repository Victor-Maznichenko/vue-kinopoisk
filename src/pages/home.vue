<template>
    <section :class="$style.main">
        <div :class="$style.info">
            <Typography variant='heading-2'>{{ PAGE_CONTENT.main.title }}</Typography>
            <Typography :class="$style.description" variant='text-m'>{{ PAGE_CONTENT.main.description }}</Typography>
            <Button :class="$style.button">{{ PAGE_CONTENT.main.buttonText }}</Button>
        </div>
        <!-- <SliderСoverflow.Root v-if="isLoading">
            {Array.from({ length: 4 }).map((_, i) => (
              <SliderСoverflow.Slide key={i}>
                <Skeleton height={546} />
              </SliderСoverflow.Slide>
            ))}
          </SliderСoverflow.Root v-else>
                    <SliderСoverflow.Root modules={[Autoplay]} speed={500} autoplay>
            {popularMovies.map(({ id, title, poster_path }) => (
              <SliderСoverflow.Slide key={id}>
                <Link to={ROUTES.MOVIE.replace(':id', String(id))}>
                  <img :class="style.slide__img" src={buildStaticURL(poster_path)} />
                  <Typography as='h6'>{title}</Typography>
                </Link>
              </SliderСoverflow.Slide>
            ))}
          </SliderСoverflow.Root> -->
    </section>
    <section :class="$style.catalog">
        <Typography :class="$style.title" variant='heading-2'>{{ PAGE_CONTENT.catalog.title }}</Typography>
        <!-- <MoviesListSkeleton genresCount={genresCount} />
        <MoviesList moviesByGenres={list} /> -->
        <!-- <Button variant='outline-white' @click="handleClick">{buttonText}</Button> -->
    </section>
</template>

<script setup lang="ts">
const PAGE_CONTENT = {
    main: {
        title: 'Самые сочные премьеры кино — у вас дома',
        description:
            'Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!',
        buttonText: 'Смотреть бесплатно'
    },
    catalog: {
        title: 'Каталог фильмов и сериалов'
    }
};
</script>

<style lang="scss" module>
.main {
    padding: 205px 0 210px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url('@/common/assets/images/main-background.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
}

.info {
    max-width: 426px;
}

.description {
    margin: 20px 0 35px;
}

.slide {
    &__img {
        height: 490px;
        width: 100%;
        object-fit: cover;
        display: block;
        margin-bottom: 10px;
    }
}
</style>
