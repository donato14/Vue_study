<template>
  <div>
    <!-- <div class="start" :class="{ end : 모달창상태 }"> -->
    <Transition name="fade">
      <modal @closeModal="모달창상태 = false" :원룸들="원룸들" :누른번호="누른번호" :모달창상태="모달창상태" />
    </Transition>
    <!-- </div> -->

    <div class="menu">
      <a href="" v-for="(작명,i) in menu" :key="i">{{작명}}</a>
    </div>

    <DiscountBanner/>

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <Card @openModal="모달창상태 = true; 누른번호 = $event" :원룸들="원룸들" :누른번호="누른번호" :모달창상태="모달창상태" />

    
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
      원룸들오리지널: [...data],
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
    },
    priceSort() {
      this.원룸들.sort(function(a,b) {
        return a.price - b.price
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
  },

  components: {
    DiscountBanner : DiscountBanner,
    Modal : Modal,
    Card : Card
  }
}
</script>

<style>
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}


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
