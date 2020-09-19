<template>
  <div class="profile">
    <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
  </div>
  </div>
</template>


<script>
export default {
  name: "profile",
  data() {
    return {};
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