<template>
  <div id="app">
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Jepret Gram</span>
                </span>
            </div>
            <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                      <router-link to="/" class="mdl-tabs__tab is-active">feeds</router-link>
                      <router-link to="/upload" class="mdl-tabs__tab ">upload</router-link>
                      <router-link :to="{ name: 'Profile', params: { id: userId || id, profile: username, pemilik: username }}" class="mdl-tabs__tab is-active">profile</router-link>
                      <div v-if="userId || id">
                        <a href="#" class="mdl-tabs__tab" @click="logout">Logout</a>
                      </div>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                <router-link to="/" class="mdl-tabs__tab is-active">feeds</router-link>
                <router-link to="/upload" class="mdl-tabs__tab is-active">upload</router-link>
                <router-link :to="{ name: 'Profile', params: { id: userId || id }}" class="mdl-tabs__tab is-active">profile</router-link>
                <div v-if="userId || id">
                <a href="#" @click="logout">Logout</a>
                </div>
            </nav>
        </div>
           <router-view/>
      </div>     
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'app',
  data () {
    return {
      userId: localStorage.getItem('id'),
      username: localStorage.getItem('username')
    }
  },
  computed: {
    ...mapState([
      'id'
    ])
  },
  beforeRouterEnter (to, from, next) {
    console.log(to.params, 'tot')
    this.userId = to.params.userId
  },
  methods: {
    ...mapActions([
      'removeId'
    ]),
    logout () {
      let vm = this
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        localStorage.removeItem('id')
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        console.log('dada')
        vm.$router.push({path: 'login', params: { userId: localStorage.getItem('id') }})
        vm.userId = null
        vm.removeId()
      }).catch(function (error) {
        // An error happened.
        console.log(error)
      })
    }
  },
  created () {
    this.userId = localStorage.getItem('id')
  }
}
</script>

<style scoped>
.portfolio-header {
  position: relative;
}

.portfolio-header .mdl-layout__header-row {
  padding: 0;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.mdl-layout__title {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
}

.is-compact .mdl-layout__title span {
  display: none;
}

.portfolio-logo-row {
  min-height: 200px;
}

.is-compact .portfolio-logo-row {
  min-height: auto;
}

.portfolio-logo {
  background-size: cover;
  height: 150px;
  width: 150px;
  margin: auto auto 10px;
}

.is-compact .portfolio-logo {
  height: 50px;
  width: 50px;
  margin-top: 7px;
}

.portfolio-navigation-row {
  background-color: rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  height: 45px;
}

.portfolio-navigation-row  .mdl-navigation {
  text-align: center;
  max-width: 900px;
  width: 100%;
}

.portfolio-navigation-row .mdl-navigation__link {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  line-height: 42px;
}

.portfolio-header .mdl-layout__drawer-button {
    background-color: rgba(197, 197, 197, 0.44);
}

.portfolio-navigation-row .is-active {
  position: relative;
  font-weight: bold;
}

.portfolio-navigation-row .is-active:after {
  content: "";
  width: 70%;
  height: 2px;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgb(255,64,129);
  left: 15%;
}

.portfolio-card .mdl-card__title {
  padding-bottom: 0;
}


.portfolio-blog-card-compact .mdl-card__title {
  padding-bottom: 0;
}

.portfolio-blog-card-bg > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}

img.article-image {
  width: 100%;
  height: auto;
}

.portfolio-max-width {
  max-width: 900px;
  margin: auto;
}

.portfolio-copy {
  max-width: 700px;
}

.no-padding {
  padding: 0;
}

.no-left-padding{
  padding-left: 0;
}

.no-bottom-padding {
  padding-bottom: 0;
}

.padding-top {
  padding: 10px 0 0;
}

.portfolio-share-btn {
  position: relative;
  float: right;
  top: -4px;
}

.demo-card-event > .mdl-card__actions {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.portfolio-contact .mdl-textfield {
  width: 100%;
}

.portfolio-contact form {
  max-width: 550px;
  margin: auto;
}

footer {
  background-size: cover;
}

</style>
