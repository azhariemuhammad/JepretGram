// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import firebase from 'firebase'
import KeenUI from '../node_modules/keen-ui/dist/keen-ui.css'
Vue.config.productionTip = false
/* eslint-disable */
/* eslint-disable no-new */
// Initialize Firebase
Vue.use(KeenUI)
let app;
var config = {
  apiKey: "AIzaSyA6tkCsALPbiLlw038YHJ0izByVMcNgwU8",
  authDomain: "vue-project-1a9b9.firebaseapp.com",
  databaseURL: "https://vue-project-1a9b9.firebaseio.com",
  projectId: "vue-project-1a9b9",
  storageBucket: "vue-project-1a9b9.appspot.com",
  messagingSenderId: "889735417412"
};
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
  }
})
