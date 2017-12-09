<template>
  <div>
    <h3>Sign In</h3>
    <input type="text" v-model="formLogin.username" placeholder="Username">
    <input type="text" v-model="formLogin.email"  placeholder="Email">
    <input type="password" v-model="formLogin.password"  placeholder="Password">
    <button @click="login">Login</button>
    <p>You don't have an accoutn ? You can <router-link to="/signup">Create one</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'Login',
  data: function () {
    return {
      formLogin: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'logIn'
    ]),
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.formLogin.email, this.formLogin.password)
      .then((user) => {
        alert('login')
        this.logIn(this.formLogin)
        this.$router.replace('hompage')
      })
      .catch(err => alert(err.message))
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    widht: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }

</style>
