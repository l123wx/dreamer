// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import globalData from '@/assets/javaScript/global.js'
import 'styles/reset.css'
import 'styles/adaption.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body); // 使用fastclick
Vue.use(VueAwesomeSwiper);
Vue.prototype.$globalData = globalData; //全局变量

//////////过滤器///////////
///时间戳转yyyy.mm.dd
Vue.filter('yyyy.mm.dd', function (value) {
  if (!value) return ''
  var date = new Date(value*1),
      Y = date.getFullYear() + '.',
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.',
      D = date.getDate() + ' ';
  return Y+M+D
})
///时间戳转早中晚
Vue.filter('timeWord', function (value) {
  if (!value) return ''
  var date = new Date(value*1),
      h = date.getHours();
  if( h >= 0 && h <= 12)
    return '早'
  else if( h >= 1 && h <= 5 )
    return '午'
  else
    return '夜'
})
//转换空格和回车
Vue.filter('spaceAndEnter', function (value) {
  return value = value.replace(/\<br\/\>/g,"\n");
  // return value;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
