<template>
<div>
 <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <main class="mdl-layout__content">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--2-col"></div>
        <div class="mdl-cell mdl-cell--6-col">
          <div class="mdl-grid portofolio-max-widht">
            <div class="mdl-card-media">
              <PhotoContent/>
            </div>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--4-col"></div>
      </div>
    </main>
  </div>
</div>
</template>

<script>
import PhotoContent from '@/components/PhotoContent'
export default {
  name: 'Homepage',
  components: {PhotoContent}
}
</script>

<style scoped>
.demo-layout-transparent {
  background: url('../assets/bc.jpg') center / cover;
}
.demo-layout-transparent .mdl-layout__header,
.demo-layout-transparent .mdl-layout__drawer-button {
  /* This background is dark, so we set text to white. Use 87% black instead if
     your background is light. */
  color: white;
}
.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
