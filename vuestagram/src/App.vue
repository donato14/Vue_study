<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step ==1" @click="step = 2">Next</li>
        <li v-if="step ==2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- <h4>안녕 {{ $store.state.name }}</h4> -->
    <!-- <h4>{{ $store.state.age }}</h4> -->
    <!-- <button @click="$store.state.name = '박'">버튼</button> -->
    <!-- 하면 안됨 -->
    <!-- <button @click="$store.commit('이름변경')">버튼</button> -->
    <!-- <button @click="$store.commit('더하기', 10)">더하기버튼</button> -->
    <!-- <button @click="더하기(10)">더하기버튼</button> -->

    <!-- <p>{{$store.state.more}}</p> -->
    <!-- <button @click="$store.dispatch('getData')">더보기버튼테스트</button> -->

    <!-- <p>{{name}} {{age}}</p> -->
    <!-- <p>{{now()}}  {{카운터}}</p>
    <p>{{now2}}  {{카운터}}</p>
    <button @click="카운터++">버튼</button> -->

    <Container :게시물="게시물" :step="step" :url="url" @write="작성한글 =$event" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postdata from './assets/data.js';
import axios from 'axios';
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      게시물 : postdata,
      더보기 : 0,
      step: 3,
      url: '',
      작성한글 :'',
      선택된필터 : '',
      카운터: 0,
    }
  },
  mounted() {
    this.emitter.on('작명', (a) => {
      console.log(a)
    });
    this.emitter.on('selFil', (b) => {
      this.선택된필터 = b;
    });
  },
  components: {
    Container : Container,
  },
// 
  computed : {
    // now2(){
    //   return new Date();
    // },
    name(){
      return this.$store.state.name
    },
    // age(){
    //   return this.$store.state.age
    // }
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 작명 : 'name' })
  },
// 
  methods: {
    ...mapMutations(['setMore', '좋아요증가', '더하기']),
    now(){
      return new Date();
    },
    more(){
      if(this.더보기 === 0) {
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((res) => {
          this.게시물 = [...this.게시물, res.data]
        })
        this.더보기 ++;
      } else {
        axios.get('https://codingapple1.github.io/vue/more1.json')
        .then((res) => {
          this.게시물 = [...this.게시물, res.data]
        })
      }
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
      console.log(url)
      this.url = url;
      this.step = 1;
    },
    publish() {
      let 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.선택된필터
      };
      this.게시물.unshift(내게시물)
      this.step = 0
    }
  },
}
</script>

<style>
  body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }
  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
  }
  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }
  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }
  .inputfile {
    display: none;
  }
  .input-plus {
    cursor: pointer;
  }
  #app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
</style>
