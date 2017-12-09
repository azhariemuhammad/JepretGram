import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)
const state = {
  photos: []
}

const mutations = {
  saveUser: function (state, payload) {
    console.log(payload)
    localStorage.setItem('email', payload.email)
    localStorage.setItem('id', payload.id)
    localStorage.setItem('username', payload.username)
  },
  setPhotos: function (state, payload) {
    state.photos = payload
  }
}

const actions = {
  signUp ({ commit }, dataUser) {
    console.log('masuk signUp', dataUser)
    http.post('/api/users', {
      username: dataUser.username,
      email: dataUser.email
    })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.error(err))
  },
  logIn ({ commit }, payload) {
    console.log('dat', payload)
    http.get(`api/users/${payload.email}`)
    .then(({ data }) => {
      console.log('datauser login', data[0])
      commit('saveUser', data[0])
    })
    .catch(err => console.log(err))
  },
  getAllPhotos ({ commit }, photos) {
    http.get('/api/photos')
    .then(({ data }) => {
      console.log('get all photos', data)
      commit('setPhotos', data)
    })
    .catch(err => console.log(err))
  },
  upload ({ commit }, photos) {
    http.post('/api/photos', {
      url: photos.url,
      caption: photos.caption
    })
    .then(({ data }) => {
      console.log('upload')
    })
    .catch(err => console.log(err))
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
