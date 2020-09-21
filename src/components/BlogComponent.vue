<template>
  <div class="col-3 p-3 my-3">
    <div class="card spcbkg">
    <router-link
      :to="{name:'ActiveBlog', params:{blogId: blogProp.id}}"
      class="card text-dark ">
      <img class="card-img-top" :src="blogProp.creator.picture" alt />
      <div class="card-body container">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p>{{blogProp.creator.name}}</p>
      </div>
    </router-link>
  </div>
    </div>
</template>

<script>
export default {
  name: "blogs-component",
  props: ["blogProp"],
  methods: {
    getActiveBlog() {
      this.$router.push({ name: "ActiveBlog", params: {} });
    },
    deleteBlog(){
      this.$store.dispatch("deleteBlog", this.blogId)
    }
  },
};
</script>

<style scoped>
.spcbkg {
  background-color: rgb(238, 238, 238);
  border-color: solid 5px black;
}
.card {
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
  transition: 0.25s;
}
.card:hover {
  box-shadow: 0 23px 16px 0 rgba(99, 89, 243, 0.212);
}
.container {
  padding: 2px 16px;
}
</style>