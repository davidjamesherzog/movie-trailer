<template>
  <div class="trailer-body" style="background: #1e1d1d">
   <div class="has-text-centered">
    <div class="columns">
     <div class="column vertical-align">
      <iframe
       allowFullScreen
       frameborder="0"
       height="376"
       :src="trailerUrlPath"
       style="width: 100%; min-width: 536px"
      />
     </div>
    </div>
   </div>
  </div>
</template>
<script>
export default {
  computed: {
    trailerUrlPath() {
      return this.$store.state.movies[this.$route.params.id].trailerPath;
    }
  }
};
</script>
<style scoped lang="scss">
.trailer-body {
  padding: 0;
  height: 376px;
}
</style>
