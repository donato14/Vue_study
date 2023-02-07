<template>
  <div>

    <div class="black-bg" v-if="모달창상태 === true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click="모달창상태 = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a href="" v-for="(작명,i) in menu" :key="i">{{작명}}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="(작명2,i) in 원룸들" :key="i">
      <img :src="작명2.image" class="room-img">
      <h4>{{ 작명2.title }}</h4>
      <p>{{작명2.price}} 원</p>
    </div>
    <!-- <div>
      <img src="./assets/room0.jpg" class="room-img">
      <h4 @click="모달창상태 = true">{{products[0]}}</h4>
      <p>50만원</p>
      <button @click="++신고수[0]">허위매물 신고</button> <span>신고수 : {{신고수[0]}}</span>
    </div>
    <div>
      <img src="./assets/room1.jpg" class="room-img">
      <h4>{{products[1]}}</h4>
      <p>50만원</p>
      <button @click="++신고수[1]">허위매물 신고</button> <span>신고수 : {{신고수[1]}}</span>
    </div>
    <div>
      <img src="./assets/room2.jpg" class="room-img">
      <h4>{{products[2]}}</h4>
      <p>51만원</p>
      <button @click="++신고수[2]">허위매물 신고</button> <span>신고수 : {{신고수[2]}}</span>
    </div> -->
    
  </div>
</template>

<script>

import data from './assets/oneroom.js';
data;

export default {
  name: 'App',
  data(){
    return {
      모달창상태 : false,
      신고수 : [0,0,0],
      menu: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸','천호동원룸','마포구원룸'],
      원룸들 : data,
    }
  },

  methods: {
    increse(a){
      this.신고수[a] +=1;
    }
  },

  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
