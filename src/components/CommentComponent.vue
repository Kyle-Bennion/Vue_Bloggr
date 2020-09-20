<template>
  <div class="comment-component">
    <div class="card-header">{{commentProp.creator.name}}</div>
    <div class="card-body">{{commentProp.body}}</div>
    <button class="btn btn-danger" @click="deleteComment">Delete comment</button>
  </div>
</template>


<script>
export default {
  name: 'comment-component',
  props: ['commentProp'],
  data(){
    return {}
  },
  computed:{},
  methods:{
    deleteComment(){
      this.$store.dispatch("deleteComment",this.commentProp)
    }
  },
  components:{

  }
}
</script>


<style scoped>

</style>