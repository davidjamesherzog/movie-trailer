import Vue from 'vue';
import Router from 'vue-router';
import Intro from './views/Intro.vue';
import Movie from './views/Movie.vue';
import MovieTrailer from './views/MovieTrailer.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: Intro },
    { path: '/:id', component: Movie },
    { path: '/:id/trailer', component: MovieTrailer },
    { path: '*', component: NotFound }
  ]
});
