import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)
const state = {
  photos: [],
  id: ''
}

const mutations = {
  saveUser: function (state, payload) {
    console.log(payload)
    localStorage.setItem('email', payload.email)
    localStorage.setItem('id', payload._id)
    localStorage.setItem('username', payload.username)
    state.id = payload._id
  },
  remove: function (state) {
    state.id = ''
  },
  setPhotos: function (state, payload) {
    payload.reverse()
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
  removeId ({ commit }) {
    commit('remove')
  },
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
  updateUser ({ commit }, payload) {
    http.put(`/api/users/${payload.id}`)
    .then(({data}) => {
      console.log(data)
    })
  },
  getAllPhotos ({ commit }, photos) {
    http.get('/api/photos')
    .then(({ data }) => {
      console.log('get all photos', data)
      commit('setPhotos', data)
    })
    .catch(err => console.log(err))
  },
  upload ({ commit }, payload) {
    console.log(payload)
    let formData = new FormData()
    formData.append('file', payload.image)
    formData.append('caption', payload.caption)
    formData.append('userId', localStorage.getItem('id'))
    http.post('/api/photos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(({ data }) => {
      console.log('upload')
      commit('setNewPhoto', data)
    })
    .catch(err => console.log(err))
  },
  follow ({ commit, state }, foo) {
    let id = localStorage.getItem('id')
    http.put(`/api/users/${id}/following?username=${foo}`)
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => console.error(err))
  },
  unfollow ({commit}, payload) {
    let id = localStorage.getItem('id')
    console.log(payload)
    http.put(`/api/users/${id}/unfollow?username=${payload}`)
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => console.error(err))
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
  remove ({ commit }, payload) {
    console.log(payload)
    http.delete(`api/photos/${payload._id}`)
    .then(({data}) => {
      console.log('data remove: ', data)
      commit('setNewPhoto', data)
    })
  },
  removecomments ({commit}, payload) {
    http.put(`/api/photos/removecomments/${payload.photoId}`, {
      comment: payload.comment,
      by: payload.postBy
    })
    .then(({ data }) => {
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
  mutations,
  http
})

export default store
