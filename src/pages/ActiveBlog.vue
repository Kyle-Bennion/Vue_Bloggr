<template>
  <div class="card">
    <div class="row d-flex justify-content-around text-center">
      <div v-if="blog.id" class="card col-6">
        <h6 class="card-title card-header text-center">{{profile.name}}</h6>
        <img v-if="blog.imgUrl" class="card-img-top" :src="blog.imgUrl" alt="Card image cap" />
        <img
          v-else
          class="card-img-top"
          :src="profile.picture || 'https://images-na.ssl-images-amazon.com/images/I/61TJ9b3IegL._AC_SL1500_.jpg' "
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{blog.title}}</h5>
          <p class="card-text">{{blog.body}}</p>
          <form class="form-inline" @submit.prevent="editBlog" v-if="isCreator">
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
            <button type="submit" class="btn btnclr" v-if="isCreator">Edit Blog</button>
            <button class="btn btn-danger" @click="deleteBlog" v-if="isCreator">Delete Blog</button>
          </form>
        </div>
      </div>
      <div class="card mb-2">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <b>New Comment</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Comment..."
              v-model="commentData.body"
            />
          </div>
          <div class="form-group"></div>
          <button type="submit" class="btn btn-primary" @click.prevent="addComment">Submit</button>
        </form>
        <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent.vue";
export default {
  name: "active-blog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getComments", this.$route.params.blogId);
    this.$store.dispatch("getProfile");
  },
  data() {
    return {
      blogData: {},
      commentData: {
        creatorEmail: this.$store.state.profile.email,
        blog: this.$route.params.blogId,
      },
    };
  },

  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    profile() {
      return this.$store.state.profile;
    },
    comments() {
      return this.$store.state.comments;
    },
    // This is where Timmy helped me make sure that buttons dont render if the profile isnt mine.
    isCreator() {
      return (
        this.$store.state.activeBlog.creatorEmail ==
        this.$store.state.profile.email
      );
    },
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog._id);
    },
    editBlog() {
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("editBlog", this.blogData);
      this.editToggle = false;
    },
    addComment() {
      this.$store.dispatch("createComment", this.commentData);
    },
  },
  components: {
    CommentComponent,
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
}
.btnclr {
  background-color: cadetblue;
}
</style>