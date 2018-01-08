<template>
  <div>
    <main class="mdl-layout__content">
      <div class="mdl-grid">
        <div class="mdl-cell--2-col"></div>
          <div class="mdl-cell--8-col">
             <h3>Sign In</h3>
                 <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="loginGoogle">
                  Google
                  </button>
                  <hr>
                  <!-- <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" @click="loginFacebook">
                  Facebook Sign
                  </button> -->
                                
                <p>You don't have an accoutn ? You can create one</p>
          </div>
        <div class="mdl-cell--2-col"></div>
      </div>
    </main>
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
  

</style>
