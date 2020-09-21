<template>
  <div class="comment-component">
    <div class="card-header my-2">{{commentProp.creator.name}}</div>
    <div class="card-body">{{commentProp.body}}</div>
    <form class="form-inline" @submit.prevent="editComment">
      <input
    type="text"
    class="form-control"
    placeholder="Edit Comment..."
    aria-describedby="helpId"
    v-model="commentData.body"
  />
    <button class="btn" style="color: blue" @click="editComment(commentProp._id)">Edit Comment</button>
    <button class="btn btn-danger" @click="deleteComment">Delete Comment</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'comment-component',
  props: ['commentProp'],
  data(){
    return {
      commentData:{
        creatorEmail: this.$store.state.profile.email,
        blog: this.$route.params.blogId
      }
    }
  },
  mounted(){
    this.$store.dispatch("getComments", this.$route.params.blogId);
  },
  computed:{},
  methods:{
    deleteComment(){
      this.$store.dispatch("deleteComment",this.commentProp)
    },
    editComment(commentId) {
      this.$store.dispatch("editComment",{body: this.commentData,_id:commentId});
    },
  },
  components:{

  }
}
</script>


<style scoped>
.crdhdr{
  background-color: cornflowerblue;
}
</style>