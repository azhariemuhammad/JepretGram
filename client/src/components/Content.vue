<template>
<div>
  <div v-for="photo in photos">
    <div class="card" style="width: 100%">
      <img class="card-img-top" :src=photo.photo alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{ photo.caption }}</h4>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
