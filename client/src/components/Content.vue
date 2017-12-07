<template>
<div v-for="photo in photos">
  <div class="card" style="width: 100%">
    <img class="card-img-top" :src=photo.photo alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Content',
  data: {
    return: {}
  },
  computed: {
    ...mapState([
      'photos'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPhotos'
    ])
  },
  created () {
    this.getAllPhotos()
  }
}
</script>

<style>

</style>
