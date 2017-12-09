<template>
  <div sign-up>
    <p>Let's create a new account</p>
    <input type="text" v-model="formSignUp.username" placeholder="Username">
    <input type="text" v-model="formSignUp.email" placeholder="Email">
    <input type="password" v-model="formSignUp.password" placeholder="Password">
    <button @click="signup">Login</button>
    <span>or go back to <router-link to="/login"> login</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  name: 'Signup',
  data: function () {
    return {
      formSignUp: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signUp'
    ]),
    signup: function () {
      firebase.auth().createUserWithEmailAndPassword(this.formSignUp.email, this.formSignUp.password)
      .then((user) => {
        alert('berhasil login')
        this.signUp(this.formSignUp)
        this.$router.push('/login')
      })
      .catch(err => alert(err.message))
    }
  }
}
</script>

<style>

</style>
