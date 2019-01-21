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
          <div v-for="movieChoice in movieChoices" class="column">
            <router-link :to="`/${movieChoice.id}`"
                          tag="li"
                          class="movie-choice">
              <i :class="[{ 'fa fa-check-circle favorite-check':  movieChoice.favorite }]"></i>
              <img :src="`${movieChoice.smallImgSrc}`" class="desktop"/>
              <p class="mobile">{{ movieChoice.subtitle }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer></app-footer>
  </div> -->
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    created() {
      console.log('getting movies in layout');
      this.getMovies();
    },
    computed: {
      movieChoices() {
        return this.$store.state.movies;
      },
    },
    methods: {
      ...mapActions(['getMovies'])
    }
  };
</script>
<style lang="scss">
  //$primary: #287ab1;
  @import '~bulma';

  $fa-font-path: "~font-awesome/fonts";
  @import '~font-awesome/scss/font-awesome.scss';

  $small: 589px;
  $medium: 767px;
  $large: 1023px;

  html, body {
    height: 100%;
    background: linear-gradient(to bottom right,#7f3737,#2a2122);
    @extend .vertical-align;

    .hero {
      @media screen and (max-width: $medium) {
        max-width: 536px;
      }

      background: #1e1d1d !important;
      position: relative;
      max-width: 1021px;
      box-shadow: 0 0 50px 5px rgba(0,0,0,.25);

      .hero-body {
        background-color: rgba(0,0,0,0.7);
        background-blend-mode: multiply;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        padding-bottom: 4rem !important;
        padding-top: 4.5rem !important;

        @media screen and (max-width: $medium) {
          background-color: rgba(0,0,0,0.8);
        }

        .container {
          width: 100%;

          .home-intro {
            font-size: 60px;
            letter-spacing: 8px;
            color: red;
            text-align: center;
            text-transform: uppercase;
          }
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
              color: #FFF;
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
              text-decoration: none;
              color: #FFF;

              &:hover {
                background: none;
                text-decoration: none;
              }

              .fa-plus-square-o {
                padding-left: 10px;
                padding-top: 2px;
              }

              @media screen and (max-width: $medium) {
                background: #FFF;
                color: #4a4a4a;
                border-radius: 15px;
                font-size: 14px;

                &:hover {
                  background: #FFF;
                }
              }
            }

            @media screen and (max-width: $medium) {
              text-align: center;
            }
          }
        }
      }

      .trailer-body {
        padding: 0;
        height: 376px;
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
              
              @media(max-width: $medium) {
                position: initial;
                display: block;
              }
            }

            img {
              opacity: 0.9;
            }

            .movie-title {
              &:active {
                font-weight: 600;
              }
            }
          }
        }
      }
    }

    /* .appreciation-tag {
      color: #FFF;
      text-align: center;

      a {
        color: #ce2424;
        font-weight: 600;
      }
    } */

    /* .twitter-section {
      position: absolute;
      right: 10px;
      bottom: 10px;

      .fa-twitter-square {
        color: #FFF;
        font-size: 30px;
      }
    }  */
    
    /* .medium-section {
      position: absolute;
      left: 10px;
      bottom: 10px;
      
      .fa-medium {
        font-size: 15px;
      }
    } */

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

    /* .movie-title-active {
      font-size: 18px;
      font-weight: 600;
    } */

    /* .iframe-box {
      max-width: 1280px; 
      max-height: 720px; 
    } */

    .desktop { // movie and layout
      display: block;

      @media screen and (max-width: $medium) {
        display: none;
      }
    }

    .mobile { // layout
      display: none;

      @media screen and (max-width: $medium) {
        display: block;
      }
    }

    
  }

  //.columns{
  //  flex-wrap: wrap
  //}
</style>
