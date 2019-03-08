<template>
  <router-link :to="`/${movie.id}`"
                tag="li"
                class="movie-choice">
    <i :class="[{ 'fa fa-check-circle favorite-check':  movie.favorite }]"></i>
    <img :src="`${movie.smallImgSrc}`" class="desktop"/>
    <p class="mobile">{{ movie.subtitle }}</p>
  </router-link>
</template>

<script>
export default {
  //name: 'MovieThumbnail',
  props: {
    movie: Object
  }
};
</script>
