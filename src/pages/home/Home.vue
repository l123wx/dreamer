<template>
  <div :class="['box',isSafari?'isSafari':'']">
    <!-- 主要内容部分 -->
    <div :class="colorType">
      <!-- home页导航栏 -->
      <home-nav @menuOpen="menuOpen" :starNum="starNum"/>
      <!-- 标题 -->
      <home-title :textOpacity="textOpacity" :title="title" :title_sec="title_sec" />
      <!-- 中心滑动元素 -->
      <home-swiper @slideChangeEnd="slideChangeEnd" 
                   @slideChange="slideChange"
                   :list="list"/>
      <!-- 解释文字 -->
      <p class="sentence" :style="{'opacity':textOpacity}">{{sentence}}</p>
      <!-- 按钮 -->
      <button :class="colorType" @click="startRecord">开始记录</button>
    </div>
    <!-- 背景颜色 -->
    <div class="bgColor">
     <div :style="bgColor1"></div>
     <div :style="bgColor2"></div>
    </div>
    <!-- 菜单 -->
    <home-menu :show="meunShow"
               :menuLists="menuLists"
               @menuClose="menuClose"
               @menuListClick="menuListClick"/>
  </div>
</template>

<script>
var that;
import HomeSwiper from './components/Swiper'
import HomeNav from './components/Nav'
import HomeTitle from './components/Title'
import HomeOverlay from '@/components/Overlay'
import HomeMenu from './components/Menu'
import { get_dream_list,get_user_info } from '@/assets/javaScript/_axios'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeNav,
    HomeTitle,
    HomeOverlay,
    HomeMenu
  },
  data () {
    that = this;
    return {
      isSafari:this.$globalData.isSafari,
      meunShow:false,
      imgIndex: 0,
      colorType:'white',
      starNum:0,
      title: '标题',
      title_sec: '说明1',
      sentence: '说明2',
      bgColor1:{'background-image':'linear-gradient(-13deg, rgb(195,228,255),rgb(252,208,226))'},
      bgColor2:{
        'background-image':'linear-gradient(-13deg, rgb(195,228,255),rgb(252,208,226))',
        'opacity':1,
        'transition':"opacity .4s"
      },
      //记录梦的栏目 
      list: {},
      textOpacity:1,//利用透明度解决字体变换时太突兀的参数
      menuLists: this.$globalData.homeMenu,
    }
  },
  methods: {
    slideChange(e) {
      // 更新栏目index
      this.imgIndex = e;
      // console.log("slideChange",e)
      this.textOpacity=0;

      //改变背景色
      this.bgColor2['transition'] = "opacity .5s";
      this.bgColor1['background-image'] = this.list[that.imgIndex].bgColor;
      this.bgColor2['opacity'] = 0;
    },
    slideChangeEnd() {
      that.bgColor2['transition'] = "none";
      that.bgColor2['background-image'] = that.list[that.imgIndex].bgColor;
      that.bgColor2['opacity'] = 1;

      // 改变文字，字体颜色
      this.colorType = this.list[that.imgIndex].type;
      this.title = this.list[that.imgIndex].title;
      this.title_sec = this.list[that.imgIndex].title_sec;
      this.sentence = this.list[that.imgIndex].sentence;
      this.textOpacity=1;
    },
    menuClose() {
      this.meunShow = false;
    },
    menuOpen() {
      this.meunShow = true;
    },
    // 点击开始按钮触发的方法
    startRecord() {
      get_dream_list({
        columnId:this.imgIndex+1
      }).then(res=>{
        if( res.data == '该栏目下还没有发布梦境'){
          res.data = []
        }
        // console.log(res.data)
        this.$router.push({
          name:'DreamList',
          params:{
            bgColor:this.bgColor1['background-image'],
            index:this.imgIndex,
            colorType:this.colorType,
            title:this.title,
            lists:res.data,
          }
        });
      })
    },
    menuListClick(e) {
      this.$router.push(this.menuLists[e].path);
    }
  },
  mounted(){
    // console.log(Object.keys(this.$globalData.userInfo))
    if(this.$globalData.userInfo && Object.keys(this.$globalData.userInfo).length != 0){
      this.starNum = this.$globalData.userInfo.starsCount;
    }else{
      get_user_info({
        token: this.$globalData.token
      }).then(res=>{
        // console.log(res.data)
        this.$globalData.userInfo = res.data;
        this.starNum = res.data.starsCount;
      })
    }
    this.list = this.$globalData.homeDreamLists;
    this.title = this.list[0].title;
    this.title_sec = this.list[0].title_sec
    this.sentence = this.list[0].sentence
  }
}

</script>

<style scoped>
  *{
    touch-action: pan-y; 
  }
  .box{
    height:100vh;
    position: relative;
    overflow: hidden;
  }
  .box.isSafari{
    height:calc(100vh - 75px);
  }
  .box>div:nth-child(1){
    height:100vh;
  }
  .isSafari.box>div:nth-child(1){
    height:calc(100vh - 75px);
  }
  .box>div:nth-child(1)>div{
    position: relative;
    z-index:1;
  }
  .box>div>p{
    position: relative;
    z-index: 1;
  }
  .bgColor{
    position: absolute;
    top:0;
    height: 100vh;
    width: 100%;
  }
  .isSafari .bgColot{
    height:calc(100vh - 75px);
  }
  .bgColor>div{
    position: absolute;
    top:0;
    height: 100vh;
    width: 100%;
  }
  .isSafari .bgColot>div{
    height:calc(100vh - 75px);
  }
  .sentence{
    padding:.1rem 0;
    text-align:center;
    font-size:.26rem;
    transition: opacity .4s;
  }
  button{
    display:block;
    width:3.45rem;
    height:1rem;
    border:1px solid #fff;
    border-radius: .34rem;
    font-size:.4rem;
    margin:.3rem auto;
    background: none;
    position: relative;
    z-index: 1;
    transition: all .3s;
  }
  button.white{
    color:#fff;
    background-image:linear-gradient( 90deg, rgba(16,16,16,0.10196) 0%, rgba(0,0,0,0.14902) 100%);
  }
  button.black{
    color: rgb(80, 84, 133);
    border-color: rgb(75, 76, 125);
    background-image: linear-gradient( 90deg, rgba(61,61,61,0.05098) 0%, rgba(0,0,0,0.10196) 100%);
  }
  .white{
    color:#fff;
  }
  .black{
    color:#4d5181;
  }
</style>
