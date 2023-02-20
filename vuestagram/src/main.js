import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();

//모든 라이브러리 추가할 수 있어짐
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.mount('#app')
