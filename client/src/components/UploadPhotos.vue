<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">
    upload
    </button>
    <div class="modal fade" id="modal1">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="form.url" placeholder="url">
        <input type="text" v-model="form.caption" placeholder="caption">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="uploadBtn"> Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Upload',
  data () {
    return {
      form: {
        url: '',
        caption: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'upload'
    ]),
    uploadBtn: function () {
      this.upload(this.form)
    }
  }
}
</script>

<style>

</style>
