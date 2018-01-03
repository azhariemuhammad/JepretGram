<template>
<div>
 <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <div class="mdl-layout__header-row portfolio-logo-row">
        <span class="mdl-layout__title">
          <div class="portfolio-logo"></div>
            <span class="mdl-layout__title">Simple portfolio website</span>
        </span>
      </div>
        <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
          <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <a class="mdl-navigation__link is-active" href="index.html">Portfolio</a>
            <a class="mdl-navigation__link" href="blog.html">Blog</a>
            <a class="mdl-navigation__link" href="about.html">About</a>
            <a class="mdl-navigation__link" href="contact.html">Contact</a>
          </nav>
        </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <a class="mdl-navigation__link is-active" href="index.html">Portfolio</a>
          <a class="mdl-navigation__link" href="blog.html">Blog</a>
          <a class="mdl-navigation__link" href="about.html">About</a>
          <a class="mdl-navigation__link" href="contact.html">Contact</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--2-col">4</div>
        <div class="mdl-cell mdl-cell--8-col">
          <div class="mdl-grid portofolio-max-widht">
            <div class="mdl-card-media">
              <PhotoContent/>
            </div>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--2-col">4</div>
      </div>
    </main>
  </div>
</div>
</template>

<script>
// import Navbar from '@/components/TheNavBar'
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
