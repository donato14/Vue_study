<template>
  <div class="black-bg" v-if="모달창상태 === true">
    <div class="white-bg">
      <img :src="원룸들[누른번호].image" class="room-img">
      <h4>{{ 원룸들[누른번호].title }}</h4>
      <p>{{ 원룸들[누른번호].content}}</p>
      <p>{{ 원룸들[누른번호].price }}</p>
      <DiscountBanner/>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedModal',
  props: {
    원룸들 : Array,
    누른번호 : Number,
    모달창상태 : Boolean,
  }
}
</script>

<style>

</style>