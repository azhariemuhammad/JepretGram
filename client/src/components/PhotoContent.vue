<template>
<div>

  <div class="jepretgram-card" v-for="photo in photos">
    <div class="jepretgram-card-header">
      <img src="https://scontent-mia1-2.cdnjepretgram.com/t51.2885-19/11351720_883119395071375_1326111195_a.jpg"class="jepretgram-card-user-image">
      <a class="jepretgram-card-user-name" href="https://www.jepretgram.com/rogersbase/"> rogersbase </a>
      <div class="jepretgram-card-time"> 1 sem </div>
    </div>

    <div class="jepretgram-card-image">
      <img :src= "photo.photo" height=600px; width="100%"/>
    </div>

    <div class="jepretgram-card-content">
      <p class="Likes">640 Likes</p>
      <p><a class="jepretgram-card-content-user">
      {{ photo._id }}</a>
      {{ photo.caption }}
     </p>
      <p class="comments">Ver los 12 comentarios</p>
      <br><a class="user-comment" href="https://www.jepretgram.com/chrisobrien64/">chrisobrien64</a> NO WAY! WAY TO GO ROGER MY BOI</br>
      <br><a class="user-comment" href="https://www.jepretgram.com/artie_mcparty/">artie_mcparty</a> ROGER = BEST NINTENDO FAN.</br>
      <br><a class="user-comment" href="https://www.jepretgram.com/theealeexj/">theealeexj</a> I JUST TRIED IT OUT TODAY ITS AMAZING</br>
    <hr>
    </div>  

    <div class="jepretgram-card-footer">
      <a class="footer-action-icons"href="#"><i class="fa fa-heart-o"></i></a>
      <input class="comments-input" type="text" placeholder="Añade un comentario..."/>
      <a class="footer-action-icons"href="#"><i class="fa fa-ellipsis-h"></i></a>
    </div>

  </div>

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PhotoContent',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'photos'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPhotos'
    ])
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
}

.Likes{
  font-weight: bold;
}

.Instagram-card-content-user{
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

.Instagram-card-footer{
  padding: 20px;
  display: flex;
  align-items: center;
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
