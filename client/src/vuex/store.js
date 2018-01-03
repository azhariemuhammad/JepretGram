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
    localStorage.setItem('id', payload._id)
    localStorage.setItem('username', payload.username)
  },
  setPhotos: function (state, payload) {
    state.photos = payload
  },
  setNewPhoto: function (state, payload) {
    console.log(payload)
    state.photos.forEach((element, index) => {
      if (element._id === payload._id) {
        state.photos.splice(index, 1, payload)
      }
    })
  }
}

const actions = {
  login ({ commit }, dataUser) {
    console.log('masuk signUp', dataUser)
    http.post('/api/users', {
      username: dataUser.username,
      email: dataUser.email
    })
    .then(({ data }) => {
      console.log('datauser login', data)
      commit('saveUser', data.user)
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
  },
  comments ({ commit }, payload) {
    console.log('payload comments: ', payload)
    http.put(`/api/photos/comments/${payload.photoId}`, {
      comment: payload.comment,
      by: payload.postBy
    })
    .then(({data}) => {
      console.log('data comments: ', data)
      commit('setNewPhoto', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  votes ({ commit }, payload) {
    http.put(`/api/photo/vote/${payload.photoId}`, {
      votes: localStorage.getItem('id')
    })
    .then(({data}) => {
      console.log('data votes: ', data)
      commit('setNewPhoto', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  unvotes ({ commit }, payload) {
    http.put(`/api/photo/unvote/${payload.photoId}`, {
      unvotes: localStorage.getItem('id')
    })
    .then(({data}) => {
      console.log('data unvote: ', data)
      commit('setNewPhoto', data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
