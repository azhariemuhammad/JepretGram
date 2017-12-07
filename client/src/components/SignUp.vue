<template>
  <div sign-up>
    <p>Let's create a new account</p>
    <input type="text" v-model="username" placeholder="Username">
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login"></button>
    <span>or go back to <router-link to="/login"> login</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data: function () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    signup: function () {
      firebase.auth.creatUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          console.log('masuk')
        },
        function (err) {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style>

</style>
