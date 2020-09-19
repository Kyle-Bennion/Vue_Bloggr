<template>
<div class="row d-flex justify-content-around">
  <div v-if="blog.id" class="card col-6">
      <h6 class="card-title card-header text-center">{{profile.name}}</h6>
    <img v-if="blog.imgUrl" class="card-img-top" :src="blog.imgUrl" alt="Card image cap" />
    <img v-else class="card-img-top" :src="profile.picture || 'https://images-na.ssl-images-amazon.com/images/I/61TJ9b3IegL._AC_SL1500_.jpg' " alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{blog.title}}</h5>
      <p class="card-text">{{blog.body}}</p>
    </div>
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
    profile(){
      return this.$store.state.profile
    }
  },
};
</script>

<style scoped>
img{
  height: 250px;
  width: 250px;
}
</style>