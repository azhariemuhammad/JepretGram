<template>
  <div>
    <main class="mdl-layout__content">
        <div class="mdl-grid portofolio-max-widht">
            <div class="mdl-cell mdl-cell--2-col"></div>
             <div class="mdl-cell mdl-cell--8-col">
                <div class="mdl-grid portfolio-max-width">
                    <div class="demo-card-image mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-card--expand"></div>
                        <div class="mdl-card__actions">
                            <span class="demo-card-image__filename">{{ username }}</span>
                        </div>
                        </div>
                    <div class="mdl-cell mdl-card mdl-shadow--10dp portfolio-max-width">
                        <div class="mdl-card__supporting-text">
                            <p>{{ bio.posts }} posts</p>
                            <p>{{ bio.followers.length }} followers</p>
                            <p>{{ bio.following.length }} following</p>
                            <div v-if="pemilik === false">
                                <div  v-if="flag">
                                  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="unfollow">
                                  following
                                  </button>
                               </div>
                               <div v-else>
                                 <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="follow(username)">
                                 follow
                                </button>
                                </div>
                          </div>  
                        </div>
                    </div>
                </div>
             </div>
             <div class="mdl-cell mdl-cell--2-col"></div> 
        </div>
        <div class="mdl-grid portofolio-max-widht">
            <div class="mdl-cell mdl-cell--2-col"></div>
                <div class="mdl-cell mdl-cell--8-col">
                    <div class="mdl-grid portfolio-max-width">
                        <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card" v-if="photos" v-for="photo in photos">
                            <div class="mdl-card__media">
                                <img class="article-image" :src="photo.photo" width=100%; height=300px;  border="0" alt="">
                            </div>
                            <div class="mdl-card__supporting-text">
                                {{ photo.caption }}
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                                <span><p>{{ photo.votes.length }} Likes</p>
                                <p>{{ photo.comments.length }} comments</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="mdl-cell mdl-cell--2-col"></div>
        </div>
        
     </main>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      photos: null,
      username: '',
      pemilik: '',
      bio: {
        posts: '',
        followers: '',
        following: ''
      },
      flag: false
    }
  },
  beforeRouteEnter (to, from, next) {
    let id = to.params.id
    let profile = to.params.profile
    let pemilikAkun = to.params.pemilik
    console.log('beforeroute enter', to.params)
    axios.get(`http://localhost:3000/api/photos/user/${id}`)
      .then(({data}) => {
        if (data.length > 0) {
          next(vm => {
            console.log(data, 'data data data')
            vm.photos = data
            vm.bio.posts = data.length
            vm.bio.followers = data[0].userId.followers
            vm.bio.following = data[0].userId.following
            vm.bio.followers.forEach(element => {
              console.log(element, 'em')
              if (element === pemilikAkun) {
                vm.flag = true
              }
            })
            console.log(vm.bio.following, 'foll')
            vm.username = profile
            console.log(profile)
            console.log(pemilikAkun)
            if (profile === pemilikAkun) vm.pemilik = true
            else vm.pemilik = false
            console.log(vm.pemilik, '09090909')
          })
        } else {
          axios.get(`http://localhost:3000/api/users/${id}`)
          .then(({data}) => {
            console.log(data[0].username)
            next(vm => {
              console.log(data[0].followers, 'data dataphoto')
              vm.bio.posts = 0
              vm.bio.followers = data[0].followers
              vm.bio.following = data[0].following
              vm.bio.followers.forEach(element => {
                console.log(element, 'em')
                if (element === pemilikAkun) {
                  vm.flag = true
                }
              })
              vm.username = data[0].username
              vm.pemilik = pemilikAkun
              if (profile === pemilikAkun) vm.pemilik = true
              else vm.pemilik = false
              console.log(vm.pemilik, 'user')
            })
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    ...mapActions([
      'follow'
    ])
  }
}
</script>

<style>
.demo-card-image.mdl-card {
  width: 256px;
  height: 100px;
  background: url('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png') center / cover;

}
.demo-card-image > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.demo-card-image__filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

</style>
