<template>
  <div class="black-bg" v-if="모달창상태 === true">
    <div class="white-bg">
      <img :src="원룸들[누른번호].image" class="room-img">
      <h4>{{ 원룸들[누른번호].title }}</h4>
      <p>{{ 원룸들[누른번호].content}}</p>
      <!-- <input type="text" @input="month = $event.target.value"> -->
      <input type="text" v-model="month">
      <p> {{month}}개월 선택함 : {{ 원룸들[누른번호].price*month }} 원</p>
      <DiscountBanner/>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedModal',
  data(){
    return{
      month : 1,
    }
  },
  props: {
    원룸들 : Array,
    누른번호 : Number,
    모달창상태 : Boolean,
  }
}
</script>

<style>

</style>