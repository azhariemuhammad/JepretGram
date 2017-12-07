<template>
  <div>
    <h3>Sign In</h3>
    <input type="text" placeholder="Username">
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button @click="login">Login</button>
    <p>You don't have an accoutn ? You can <router-link to="/signup">Create one</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {}
  },
  methods: {
    login: function () {
      this.$router.replace('hompage')
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
