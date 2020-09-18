<template>
  <div class="card text-dark">
    <img class="card-img-top" :src="blogProp" alt />
    <div class="card-body">
      <h4 class="card-title">{{blogProp.title}}</h4>
      <p>{{blogProp.creator.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogs-component",
  props: ["blogProp"],
};
</script>

<style>
</style>