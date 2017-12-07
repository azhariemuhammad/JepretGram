<template>
<div>
  <div container>
    <h1>Halaman Hompage</h1>
    <Navbar/>
      <div class="row">
      <div class="col">
        <button></button>
        <upload/>
      </div>
      <div class="col-6">
        <Content/>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Navbar from '@/components/TheNavBar'
import Content from '@/components/Content'
import Upload from '@/components/UploadPhotos'
export default {
  name: 'Homepage',
  components: {Navbar, Content, Upload}
}
</script>

<style>

</style>
