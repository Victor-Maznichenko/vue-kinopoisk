import { ROUTES } from '@/common/lib'
import Home from '@/pages/home/index.vue'
import Movie from '@/pages/movie.vue'
import NotFound from '@/pages/not-found.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: ROUTES.ROOT, name: 'home', component: Home },
  { path: ROUTES.MOVIE, name: 'movie', component: Movie },
  { path: '/:pathMatch(.*)*', redirect: { name: 'not-found' } },
  { path: ROUTES.NOT_FOUND, name: 'not-found', component: NotFound }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
