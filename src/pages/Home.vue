<template>
  <div class="home container-fluid">
    <div class="row">
      <blog-component v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
    </div>
  </div>
</template>

<script>
import blogComponent from "../components/BlogComponent";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  components: {
    blogComponent,
  },
};
</script>
