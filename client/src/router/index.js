import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/SignUp'
import Hompage from '@/components/Hompage'
import Upload from '@/components/UploadPhotos'
import Profile from '@/components/Profile'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Hompage',
      component: Hompage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:id',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hompage')
  else next()
})

export default router
