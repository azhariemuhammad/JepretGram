<template>
  <div>
      

  
    <h3>Sign In</h3>
    <!-- <input type="text" v-model="formLogin.username" placeholder="Username">
    <input type="text" v-model="formLogin.email"  placeholder="Email">
    <input type="password" v-model="formLogin.password"  placeholder="Password"> -->
    <button @click="loginGoogle">Login</button>
    <button @click="loginFacebook">FbLogin</button>
    

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
        username: ''
      },
      provider1: new firebase.auth.GoogleAuthProvider(),
      provider2: new firebase.auth.FacebookAuthProvider()
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    loginFacebook: function () {
      this.provider2.addScope('email')
      this.provider2.addScope('user_about_me')
      this.auth(this.provider2)
    },
    loginGoogle: function () {
      this.provider1.addScope('https://www.googleapis.com/auth/contacts.readonly')
      this.provider1.addScope('profile')
      this.provider1.addScope('email')
      this.auth(this.provider1)
    },
    auth: function (provider) {
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken
        console.log('token: ', token)
        let user = result.user
        this.formLogin.email = user.email
        this.formLogin.username = user.displayName
        console.log('user: ', user.displayName)
        console.log(this.$router)
        this.login(this.formLogin)
        this.$router.replace({path: '/', params: {userId: localStorage.getItem('id')}})
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
    width: 20%;
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
