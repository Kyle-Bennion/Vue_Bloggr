<template>
  <div class="profile">
    <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <div class="row card col-6">
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
              v-model="newBlog.imgUrl"
              placeholder="Img Url"
              aria-describedby="helpId"
            />
              <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" placeholder="New Blog" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
          </div>
          <button type="submit" class="btn btn-success">
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
  data() {
    return {
      newBlog:{}
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }},
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      for (let key in this.newBlog) {
        this.newBlog[key] = null;
      }
    },
  },
  components: {},
};
</script>


<style scoped>
</style>