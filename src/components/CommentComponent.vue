<template>
  <div class="comment-component">
    <div class="card-header">{{commentProp.creator.name}}</div>
    <div class="card-body">{{commentProp.body}}</div>
  </div>
</template>


<script>
export default {
  name: 'comment-component',
  props: ['commentProp'],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>