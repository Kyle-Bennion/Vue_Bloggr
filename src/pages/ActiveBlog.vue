<template>
<div class="row d-flex justify-content-around">
  <div v-if="blog.id" class="card col-6">
      <h6 class="card-title card-header text-center">{{profile.name}}</h6>
    <img v-if="blog.imgUrl" class="card-img-top" :src="blog.imgUrl" alt="Card image cap" />
    <img v-else class="card-img-top" :src="profile.picture || 'https://images-na.ssl-images-amazon.com/images/I/61TJ9b3IegL._AC_SL1500_.jpg' " alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{blog.title}}</h5>
      <p class="card-text">{{blog.body}}</p>
      <button class="btn btn-danger" @click="deleteBlog">Delete</button>
      <button class="btn btn-warning" @click="editToggle = !editToggle">Edit</button>
      <form class="form-inline" @submit.prevent="editBlog" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="New Post Title"
            aria-describedby="helpId"
            v-model="blogData.title"
          />
          <input
            type="text"
            class="form-control"
            placeholder="New Body"
            aria-describedby="helpId"
            v-model="blogData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Post</button>
        </form>
    </div>
    <div>
            <form class="form-inline" @submit.prevent="addComment">
      <button class="btn btn-info" type="submit">Comment</button>
          <input
            type="text"
            class="form-control"
            placeholder="New Comment"
            aria-describedby="helpId"
            v-model="commentData.body"
          />
          </form>
    </div>
  </div>
</div>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue"
export default {
  name: "active-blog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
  },
  data(){
    return {
      blogData: {}, editToggle: false,
      commentData: {
        creatorEmail: this.$store.state.profile.email,
        blog: this.$route.params.blogId
      }
    };
  },

  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    profile(){
      return this.$store.state.profile
    },
    comment(){
      return this.$store.state.comments;
    }
  },
  methods: {
    deleteBlog(){
      this.$store.dispatch('deleteBlog', this.blog._id)
    },
    editBlog(){
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("editBlog", this.blogData);
      this.editToggle = false;
    },
    addComment(){
      this.$store.dispatch("createComment", this.newComment);
    }
  }
};
</script>

<style scoped>
img{
  height: 250px;
  width: 250px;
}
</style>