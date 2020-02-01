import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iconfont插件样式
import './assets/iconfont.css'
import './assets/iconfont.js';

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 轮播图插件
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// 轮播图插件样式
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
