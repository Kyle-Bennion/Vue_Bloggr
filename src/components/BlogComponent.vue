<template>
  <div class="col-3 p-2">
    <router-link
      :to="{name:'ActiveBlog', params:{blogId: blogProp.id}}"
      class="card text-dark spcbkg"
    >
      <img class="card-img-top" :src="blogProp.creator.picture" alt />
      <div class="card-body">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p>{{blogProp.creator.name}}</p>
      </div>
    </router-link>
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
  background-color: rgb(248, 248, 248);
}
</style>