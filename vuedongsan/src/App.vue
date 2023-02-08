<template>
  <div>

    <modal :원룸들="원룸들" :누른번호="누른번호" :모달창상태="모달창상태" />

    <div class="menu">
      <a href="" v-for="(작명,i) in menu" :key="i">{{작명}}</a>
    </div>

    <DiscountBanner/>

    <img alt="Vue logo" src="./assets/logo.png">

    <Card :원룸들="원룸들" :누른번호="누른번호" :모달창상태="모달창상태" />

    
  </div>
</template>

<script>

import data from './assets/oneroom.js';
import DiscountBanner from './DiscountBanner.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data(){
    return {
      모달창상태 : false,
      누른번호: 0,
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
    DiscountBanner : DiscountBanner,
    Modal : Modal,
    Card : Card
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

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
