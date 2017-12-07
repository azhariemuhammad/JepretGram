import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)
const state = {

}

const mutations = {
  saveUser:
}

const actions = {
  signup({ commit }, dataUser) {
  http.post('/api/users', {
    username: dataUser.username,
    email: dataUser.email
  })
    .then(({ data }) => {
      let obj = {}
      obj.username = data.user.username
      obj.id = data.user._id
      obj.email = data.user.email
      commit('saveUser', obj)
    })
    .catch(err => console.error(err))
  },
}