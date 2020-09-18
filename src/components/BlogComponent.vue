<template>
  <div class="col-4">
    <div class="card text-dark spcbkg">
      <img class="card-img-top" :src="blogProp.creator.picture" alt />
      <div class="card-body">
        <h4 class="card-title">{{blogProp.title}}</h4>
        <p>{{blogProp.creator.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogs-component",
  props: ["blogProp"],
};
</script>

<style scoped>
.spcbkg {
  background-color: rgb(248, 248, 248);
}
</style>