<template>
<div>
  <div class="md-layout">
    <div class="md-layout-item">

    </div>
    <div class="md-layout-item">
      <span class="md-display-1">Jepret Gram</span>
      <Content/>
    </div>
    <div class="md-layout-item"></div>
  </div>
</div>
</template>

<script>
// import Navbar from '@/components/TheNavBar'
import Content from '@/components/Content'
import Upload from '@/components/UploadPhotos'
export default {
  name: 'Homepage',
  components: {Content, Upload}
}
</script>

<style>

</style>
