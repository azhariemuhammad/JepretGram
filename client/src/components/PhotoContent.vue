<template>
<div>
     <div class="jepretgram-card" v-for="(photo, index) in photos">
    <div class="jepretgram-card-header">
      <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"class="jepretgram-card-user-image">
       <router-link :to="{ name: 'Profile', params: { id: photo.userId._id, profile: photo.userId.username, pemilik: username }}">
      <a class="jepretgram-card-user-name"> {{ photo.userId.username }} </a> </router-link>
      
      <div class="jepretgram-card-time"> {{ timeline(photo.createdAt) }} </div>
    </div>

    <div class="jepretgram-card-image">
      <img :src= "photo.photo" height=300px; width="100%"/>
    </div>

    <div class="jepretgram-card-content">
      <p class="Likes">{{ photo.votes.length }} Likes</p>
      <p> <router-link :to="{ name: 'Profile', params: { id: photo.userId._id, profile: photo.userId.username, pemilik: username  }}"><a class="jepretgram-card-content-user">
      {{ photo.userId.username }}</a> </router-link>
      {{ photo.caption }}
      <input v-if="photo.userId.username === username" type="button" id="removecomment" @click="removecom([photo])" value="edit">
     </p>
      <p class="comments" v-for="com in photo.comments">
      <router-link class="user-comment" href="https://www.jepretgram.com/chrisobrien64/" v-for="(post, index) in com.by" :key="index" :to="{ name: 'Profile', params: { id: post._id, profile: post.username, pemilik: username }}">{{ post.username }}             </router-link>{{ com.comment }}
        <input v-for="(post, index) in com.by" v-if="post.username === username" type="button" id="removecomment" @click="removecom([photo, com])" value="x">
      </p>
    <hr>
    </div>  

    <div class="jepretgram-card-footer">
      <a class="footer-action-icons" href="#" @click="voting(photo)"><i class="fa fa-heart-o"></i></a>
      <input class="comments-input" type="text" placeholder="Comment" v-model="comment"  @keyup.enter="submit(photo._id)"/>
      <a class="footer-action-icons"href="#"><i class="fa fa-ellipsis-h"></i></a>
    </div>
     </div>
  <br>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ModalEdit from '@/components/ModalEdit'
import moment from 'moment'
export default {
  name: 'PhotoContent',
  components: { ModalEdit },
  data () {
    return {
      comment: '',
      username: localStorage.getItem('username')
    }
  },
  computed: {
    ...mapState([
      'photos'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPhotos',
      'comments',
      'removecomments',
      'votes',
      'unvotes'
    ]),
    timeline: function (time) {
      let timeLine = moment(time).startOf('hour').fromNow()
      let split = timeLine.split(' ')
      if (split[1] === 'hours' && split[0] > 24) {
        timeLine = moment(time).startOf('day').fromNow()
        return timeLine
      } else {
        return timeLine
      }
    },
    submit: function (id) {
      let obj = {
        comment: this.comment,
        postBy: localStorage.getItem('id'),
        photoId: id
      }
      console.log('hello: ', obj)
      this.comments(obj)
      this.comment = ''
    },
    removecom: function (params) {
      let obj = {
        comment: params[1].comment,
        postBy: localStorage.getItem('username'),
        photoId: params[0]._id
      }
      console.log('obj remove: ', obj)
      this.removecomments(obj)
    },
    voting: function (photo) {
      let index = photo.votes.findIndex(x => {
        return x === localStorage.getItem('id')
      })
      let obj = {
        photoId: photo._id
      }
      if (index === -1) {
        this.votes(obj)
      } else {
        this.unvotes(obj)
      }
    }
  },
  created () {
    this.getAllPhotos()
  }
}
</script>

<style scoped>
body{
	background-color: #fafafa;
	padding: 60px;
	font-family: 'Droid Sans', sans-serif;

}

a{
  text-decoration: none;
}

.jepretgram-card{
	background: #ffffff;
	border: 1px solid #f2f2f2;
	border-radius: 3px;
	width: 100%;
	max-width: 600px;
	margin: auto;
}

.jepretgram-card-header{
	padding: 20px;
	height: 40px;
}

.jepretgram-card-user-image{
	border-radius: 50%;
	width: 40px;
	height: 40px;
	vertical-align: middle;
}

.jepretgram-card-time{
	float: right;
	width: 80px;
	padding-top:10px;
	text-align: right !important;
	color: #999;
}

.jepretgram-card-user-name{
	margin-left:20px;
	font-weight:bold;
  color: #262626;
}

.jepretgram-card-content{
  padding: 20px;
  text-align: none;
}

.Likes{
  font-weight: bold;
}

.jepretgram-card-content-user{
  font-weight: bold;
  color: #262626;
}

.hashtag{
  color: #003569;
}

.comments{
  color:#999;
}

.user-comment{
  color: #003569;
}

.jepretgram-card-footer{
  padding: 20px;
  display: flex;
  align-items: center;
}

#removecomment {
  background: 0 0;
  border: none;
  color: #c7c7c7;
  cursor: pointer;
  float: right;
  font-size: inherit;
  height: 1.2em;
  line-height: inherit;
  margin-left: 10px;
  overflow: hidden;
  padding: 0;
  width: 1em;
  padding-right: 24px;
}
hr{
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 0px;
 
}


.footer-action-icons{
  font-size: 16px;
  color: #ccc;
}

.comments-input{
  border: none;
  margin-left: 10px;
  width: 100%;
}
</style>
