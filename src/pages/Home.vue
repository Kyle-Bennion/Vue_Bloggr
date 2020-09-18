<template>
  <div class="home">
    <h1>This is the screen that is visible so far</h1>
  </div>
</template>

<script>
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
};
</script>
