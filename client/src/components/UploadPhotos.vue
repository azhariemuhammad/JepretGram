<template>
  <div>
     <main class="mdl-layout__content">
            <div class="mdl-grid ">
                <div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Upload </h2>
                    </div>
                    <div class="mdl-card__media" v-if="!form.image">
                        <img class="article-image" src="" border="0" alt="">
                    </div>
                    <div class="mdl-card__media" v-else>
                        <img :src="imagePreview" />
                        <button  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="Remove" @click="removeImage">Remove</button>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <form action="#" class="" @submit.prevent="post">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <div v-if="!form.image">
                                <input type="file" @change="onfileChange">
                              </div>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea class="mdl-textfield__input" type="text" rows="5" id="note" v-model="form.caption" placeholder="caption"></textarea>
                            </div>
                            
                            <p>
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                    Submit
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
       </main>
</div>
  </div>
</template>

<script>
import { UiFileupload } from 'keen-ui'
import { mapActions } from 'vuex'
export default {
  name: 'Upload',
  components: { UiFileupload },
  data () {
    return {
      form: {
        image: null,
        caption: ''
      },
      photo: null,
      imagePreview: ''
    }
  },
  methods: {
    ...mapActions([
      'upload'
    ]),
    uploadBtn: function () {
      this.upload(this.form)
    },
    onfileChange: function (e) {
      console.log('hello')
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.form.image = files[0]
      this.createImage(files[0])
    },
    createImage: function (file) {
      var image = new Image()
      console.log(image)
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.form.image = ''
    },
    post: function () {
      console.log('heelo')
      this.upload(this.form)
      this.form.image = null
      this.form.caption = ''
    }
  }
}
</script>

<style scoped>
img {
  width: 50%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.mdl-card__media {
  background-color: #fff !important;
}

</style>
