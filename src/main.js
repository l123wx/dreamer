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
import Mui from 'vue-awesome-mui';

Vue.config.productionTip = false;
fastClick.attach(document.body); // 使用fastclick
Vue.use(VueAwesomeSwiper);
Vue.prototype.$globalData = globalData; //全局变量
Vue.use(Mui);
mui.init({
  keyEventBind: {
    backbutton: true //关闭back按键监听
  }
});
// //首页返回键处理
// //处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
  //首次按键，提示  再按一次退出应用
  var href = window.location.href;
  var arrUrl = href.split("#");
  var prams = '' ;
  if(arrUrl[1].indexOf('?')>0){
    var page = arrUrl[1].split("?");
    prams = page[0];
  }else{
    prams = arrUrl[1];
  }
  var endparms = new Array();
  endparms= prams.split("/");
  if(!first && (endparms[1] == 'home' || endparms[1] == 'loginAndRegister' || endparms[1]=='')) {
    first = new Date().getTime(); //记录第一次按下回退键的时间
    mui.toast('再按一次退出应用'); //给出提示
    setTimeout(function() { //1s中后清除
      first = null;
    }, 1000);
  } else if(!first && endparms[1] != 'home') {
    history.go(-1) //回退到上一页面
  } else {
    if(new Date().getTime() - first < 1000) { //如果两次按下的时间小于1s，
      plus.runtime.quit(); //那么就退出app
    }
  }
};

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
