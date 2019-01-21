import Vue from "vue";
import Vuex from "vuex";
import movies from './data/movies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: {}
  },
  mutations: {
    updateMovies(state, movies) {
      state.movies = movies;
    },
    addToFavorites(state, payload) {
      state.movies[payload.id].favorite = !state.movies[payload.id].favorite;
    }
  },
  actions: {
    getMovies({commit}) {
      commit('updateMovies', movies);
    }
  },
  getters: {
    movies: state => {
      return state.movies;
    },
    movie: state => id => {
      return state.movies[id];
    }
  }
});
