<template>
  <div>

    <div class="menu">
      <a href="" v-for="(작명,i) in menu" :key="i">{{작명}}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="(작명2,i) in products" :key="i">
      <h4>{{ 작명2 }}</h4>
      <p>50 만원</p>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      products: ['역삼동원룸','천호동원룸','마포구원룸'],
      menu: ['Home', 'Shop', 'About']
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
