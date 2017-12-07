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
    localStorage.setItem('email', payload.email)
    localStorage.setItem('id', payload.id)
    localStorage.setItem('username', payload.username)
  },
  setPhotos: function (state, payload) {
    state.photos = payload
  }
}

const actions = {
  signup ({ commit }, dataUser) {
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
