import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      좋아요눌렀니: false,
      more : {},
    }
  },
  mutations: {
    이름변경(state) {
      state.name = 'park'
    },
    더하기(state, payload) {
      state.age =  state.age + payload;
    },
    좋아요증가(state) {
      if (state.좋아요눌렀니 == false) {
        state.likes++;
        state.좋아요눌렀니 == true;
      } else {
        state.likes--;
        state.좋아요눌렀니 == false;
      }
    }
  },
  actions: {
    getData() {
      axios.get()
    },
  },
})

export default store