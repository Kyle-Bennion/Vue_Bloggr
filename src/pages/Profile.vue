<template>
  <div class="profile">
    <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <div class="row card col-6 text-center crdclr">
              <form class="form-inline" @submit.prevent="createBlog">
          <div class="form-group">
            <input
              type="text"
              v-model="newBlog.title"
              class="form-control"
              placeholder="Title"
              aria-describedby="helpId"
            />
              <input
              type="text"
              class="form-control"
              v-model="newBlog.body"
              placeholder="New Blog"
              aria-describedby="helpId"
            />
            <input
              type="text"
              class="form-control"
              v-model="newBlog.imgUrl"
              placeholder="Img Url"
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success text-dark">
            <i class="fa fa-plus" aria-hidden="true">NewBlog</i>
          </button>
        </form>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "profile",
  mounted(){
    this.$store.dispatch("getProfile")
  },
  data() {
    return {
      newBlog:{
        creatorEmail: this.$store.state.profile.email,
      }
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }},
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      this.newBlog = {}
    },
    deleteBlog(){
      this.$store.dispatch("deleteBlog", this.blogId)
    }
  },
  components: {},
};
</script>


<style scoped>
.crdclr{
  background-color: black;
}
</style>