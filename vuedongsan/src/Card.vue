<template>
  <div>
    <div v-for="(작명2,i) in 원룸들" :key="i">
      <img :src="작명2.image" class="room-img">
      <!-- <h4 @click="모달창상태 = true; 누른번호 = i">{{ 작명2.title }}</h4> -->
      <h4>{{ 작명2.title }}</h4>
      <p>{{작명2.price}} 원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  props: {
    원룸들 : Array,
    누른번호 : Number,
    모달창상태 : Boolean,
  },

}
</script>

<style>

</style>