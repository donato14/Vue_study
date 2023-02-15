<template>
  <div>
    <post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i"/>
  </div>
</template>

<script>
import post from './Post.vue'

export default {
  components: { post:post },
  name: 'ContainerContent',
  props: {
    게시물 : Array,
  },
}
</script>

<style>

</style>