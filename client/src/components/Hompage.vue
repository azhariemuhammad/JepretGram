<template>
<div>
  <div container>
    <h1>Halaman Hompage</h1>
    <Navbar/>
      <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-6">
        <Content/>
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Navbar from '@/components/TheNavBar'
import Content from '@/components/Content'
export default {
  name: 'Homepage',
  components: {Navbar, Content}
}
</script>

<style>

</style>
