<template>
  <div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']"
    :style="{ 'background-image': selectedMovie.largeImgSrc }">
    <header class="nav">
     <div class="container">
      <div class="nav-left">
       <a class="nav-item">
        <i class="fa fa-bars" aria-hidden="true"></i>
       </a>
       <router-link to="/" class="nav-item is-active">
        Home
       </router-link>
       <a class="nav-item is-active">
        <span class="tag is-rounded">Films</span>
       </a>
       <a class="nav-item is-active">
        Shows
       </a>
       <a class="nav-item is-active">
        Music
       </a>
      </div>
      <div class="nav-right desktop">
       <span class="nav-item">
        <a class="title">
         VueFlix
        </a>
       </span>
      </div>
     </div>
    </header>
    <div class="container description-container">
     <div class="columns">
      <div class="column is-three-quarters">
       <h1 class="title">{{ selectedMovie.title }}</h1>
       <h4 class="subtitle">
        <p class="subtitle-tag">{{ selectedMovie.duration }} |</p>
        <p class="subtitle-tag">{{ selectedMovie.genre }} |</p>
        <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
       </h4>
       <p class="description">{{ selectedMovie.description }}</p>
       <div class="links">
        <router-link
          :to="{path: '/' + $route.params.id + '/trailer'}"
          class="button play-button">
           Play <i class="fa fa-play"></i>
        </router-link>

        <a
          class="button is-link favorites-button"
          @click="addToFavorites">
        <span
          :class="[{ 'hide': selectedMovie.favorite }]">
          Add to
        </span>
        <span
          :class="[{ 'hide': !selectedMovie.favorite }]">
          Remove from
        </span>
          &nbsp;favorites
          <i class="fa fa-plus-square fa-plus-square-o"></i>
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      selectedMovie: this.$store.getters.movie(this.$route.params.id)
    };
  },
  watch: {
    $route() {
      this.selectMovie();
    }
  },
  methods: {
    selectMovie() {
      this.selectedMovie = this.$store.getters.movie(this.$route.params.id);
    },
    ...mapMutations({
      addToFavorites(commit) {
        commit('addToFavorites', {
          id: this.$route.params.id
        });
      }
    })
    /* addToFavorites() {
        this.$store.commit('addToFavorites', {
          id: this.$route.params.id
        })
      } */
  }
};
</script>

<style scoped lang="scss">
$small: 589px;
$medium: 767px;
$large: 1023px;

.hero-body {

  .container {
    width: 100%;
  }

  .nav > .container {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 3.25rem;
    width: 100%;
  }
  .nav {
    position: absolute;
    top: 10px;
    width: 100%;
    box-shadow: 0px 0px 0px !important;

    .nav-item {
      .fa-bars {
        color: #ce2424;
        font-size: 40px;
      }

      .tag {
        font-size: 15px;
      }

      .title {
        color: red;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
      }
    }

    .nav-right {
      .nav-item {
        float: right;
      }
    }
  }

  .column {
    padding-left: 50px;
    min-height: 264px;

    .title {
      font-size: 45px;
      font-weight: 600;

      @media screen and (max-width: $medium) {
        font-size: 35px;
      }
    }

    .subtitle {
      font-size: 15px;
      font-weight: 600;
      color: red;

      @media screen and (max-width: $medium) {
        font-size: 14px;
      }

      .subtitle-tag {
        padding-right: 3px;
        display: inline;
      }
    }

    .description {
      font-size: 15px;
      margin-bottom: 24px;
      max-width: 450px;
    }

    .links {
      .play-button {
        background: #ce2424;
        color: #fff;
        border-radius: 15px;
        border: 0px;
        margin-right: 20px;
        padding: 15px;

        .fa-play {
          padding-left: 7px;
        }

        @media screen and (max-width: $medium) {
          font-size: 14px;
        }
      }

      .favorites-button {
        background: none;
        text-decoration: none;
        color: #fff;

        .fa-plus-square-o {
          padding-left: 10px;
          padding-top: 2px;
        }

        @media screen and (max-width: $medium) {
          background: #fff;
          color: #4a4a4a;
          border-radius: 15px;
          font-size: 14px;

          &:hover {
            background: #fff;
          }
        }
      }

      @media screen and (max-width: $medium) {
        text-align: center;
      }
    }
  }
}

.favorite-shadow {
  box-shadow: 0 0 50px 15px rgba(251, 255, 15, 0.25);
}

.hide {
  display: none;
}
</style>
