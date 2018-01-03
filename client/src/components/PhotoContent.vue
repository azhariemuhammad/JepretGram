<template>
<div>

  <div class="jepretgram-card" v-for="photo in photos">
    <div class="jepretgram-card-header">
      <img src="https://scontent-mia1-2.cdnjepretgram.com/t51.2885-19/11351720_883119395071375_1326111195_a.jpg"class="jepretgram-card-user-image">
      <a class="jepretgram-card-user-name" href="https://www.jepretgram.com/rogersbase/"> {{ photo.userId.username }} </a>
      <div class="jepretgram-card-time"> {{ timeline(photo.createdAt) }} </div>
    </div>

    <div class="jepretgram-card-image">
      <img :src= "photo.photo" height=300px; width="100%"/>
    </div>

    <div class="jepretgram-card-content">
      <p class="Likes">{{ photo.votes.length }} Likes</p>
      <p><a class="jepretgram-card-content-user">
      {{ photo.userId.username }}</a>
      {{ photo.caption }}
     </p>
      <p class="comments" v-for="com in photo.comments">
      <a class="user-comment" href="https://www.jepretgram.com/chrisobrien64/">{{ com.by }}             </a>{{ com.comment }}
      <input type="button" id="removecomment" value="x">
      </p>
    <hr>
    </div>  

    <div class="jepretgram-card-footer">
      <a class="footer-action-icons" href="#" @click="voting(photo)"><i class="fa fa-heart-o"></i></a>
      <input class="comments-input" type="text" placeholder="Comment" v-model="comment"  @keyup.enter="submit(photo._id)"/>
      <a class="footer-action-icons"href="#"><i class="fa fa-ellipsis-h"></i></a>
    </div>

  </div>

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'PhotoContent',
  data () {
    return {
      comment: ''
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
      'votes',
      'unvotes'
    ]),
    timeline: function (time) {
      return moment(time).startOf('hour').fromNow()
    },
    submit: function (id) {
      let obj = {
        comment: this.comment,
        postBy: localStorage.getItem('username'),
        photoId: id
      }
      console.log('hello: ', obj)
      this.comments(obj)
      this.comment = ''
    },
    removecomment: function () {

    },
    voting: function (photo) {
      let index = photo.votes.findIndex(x => {
        return x === localStorage.getItem('id')
      })
      let obj = {
        photoId: photo._id
        }
        console.log(index)
      if (index == -1) {
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
