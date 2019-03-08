<template>

  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <section class="hero is-primary is-medium">
      <router-view></router-view>
      <div class="hero-foot">
        <div class="columns">
          <div v-for="movieChoice in movieChoices" :key="movieChoice.id" class="column">
            <movie-thumbnail :movie="movieChoice"></movie-thumbnail>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import MovieThumbnail from '../components/movie-thumbnail.vue';

export default {
  components: {
    MovieThumbnail
  },
  created() {
    this.getMovies();
  },
  computed: {
    movieChoices() {
      return this.$store.state.movies;
    }
  },
  methods: {
    ...mapActions(['getMovies'])
  }
};
</script>
<style lang="scss">
//$primary: #287ab1;
@import '~bulma';

$fa-font-path: '~font-awesome/fonts';
@import '~font-awesome/scss/font-awesome.scss';

$small: 589px;
$medium: 767px;
$large: 1023px;

html,
body {
  height: 100%;
  background: linear-gradient(to bottom right, #7f3737, #2a2122);
  @extend .vertical-align;

  .hero {
    @media screen and (max-width: $medium) {
      max-width: 536px;
    }

    background: #1e1d1d !important;
    position: relative;
    max-width: 1021px;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);

    .hero-body {
      background-color: rgba(0, 0, 0, 0.7);
      background-blend-mode: multiply;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      padding-bottom: 4rem !important;
      padding-top: 4.5rem !important;

      @media screen and (max-width: $medium) {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

    .hero-foot {
      background: linear-gradient(to bottom right, #7d1e24, #bb2d35);

      .columns {
        padding: 20px;
        padding-bottom: 30px;
        text-align: center;

        .movie-choice {
          position: relative;
          list-style: none;
          cursor: pointer;

          .favorite-check {
            position: absolute;
            right: 5px;
            top: 5px;
            z-index: 1;
            color: #fcff4c;

            @media (max-width: $medium) {
              position: initial;
              display: block;
            }
          }

          img {
            opacity: 0.9;
          }
        }
      }
    }
  }

  .desktop {
    // movie and layout
    display: block;

    @media screen and (max-width: $medium) {
      display: none;
    }
  }

  .mobile {
    // layout
    display: none;

    @media screen and (max-width: $medium) {
      display: block;
    }
  }

  // Miscellaneous
  .vertical-align {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }
}
</style>
