<template>
  <div v-if="blog.id" class="card" style="width: 18rem;">
    <img v-if="blog.imgUrl" class="card-img-top" :src="blog.imgUrl" alt="Card image cap" />
    <img v-else class="card-img-top" :src="blog.creator.picture" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{blog.title}}</h5>
      <p class="card-text">{{blog.body}}</p>
      <h6 class="card-title">{{blog.creator.name}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "active-blog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
  },
};
</script>

<style>
</style>