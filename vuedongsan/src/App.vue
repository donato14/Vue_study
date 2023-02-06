<template>
  <div>

    <div class="menu">
      <a href="" v-for="(작명,i) in menu" :key="i">{{작명}}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <div v-for="(작명2,i) in products" :key="i">
      <h4>{{ 작명2 }}</h4>
      <p>50 만원</p>
    </div> -->
    <div>
      <h4>{{products[0]}}</h4>
      <p>50만원</p>
      <button @click="++신고수[0]">허위매물 신고</button> <span>신고수 : {{신고수[0]}}</span>
    </div>
    <div>
      <h4>{{products[1]}}</h4>
      <p>50만원</p>
      <button @click="++신고수[1]">허위매물 신고</button> <span>신고수 : {{신고수[1]}}</span>
    </div>
    <div>
      <h4>{{products[2]}}</h4>
      <p>51만원</p>
      <button @click="++신고수[2]">허위매물 신고</button> <span>신고수 : {{신고수[2]}}</span>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      신고수 : [0,0,0],
      products: ['역삼동원룸','천호동원룸','마포구원룸'],
      menu: ['Home', 'Shop', 'About']
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
</style>
