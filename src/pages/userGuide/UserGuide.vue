<template>
  <div class="box">
    <swiper :options="swiperOptions"
            @slideChange="slideChange">
      <swiper-slide v-for='(item,index) in list' :key="index">
        <img :class="typeNum" 
             :src="photoSrc + item"
             ref="pic" />
      </swiper-slide>
      <div class="swiper-pagination"  
           slot="pagination"
           :style="{'top':navHeight+'px'}"></div>
    </swiper>
    <div class="cloesBtn" 
         :style="{'bottom':btnHeight+'px'}"
         ref="cloesBtn">
      <div @click="closeBtn">知道了</div>
    </div>
  </div>
</template>

<script>
let that;
export default {
  name: 'UserGuide',
  data () {
    that = this;
    return {
      photoSrc:this.$globalData.photoSrc,
      swidth:window.innerWidth,
      sheight:window.innerHeight,
      navHeight:0,
      btnHeight:0,
      imgIndex: 0,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        grabCursor: true,
        on: {
          slideChangeTransitionEnd: function() {
            
          }
        }
      },
      list: [
        'userGuide/userGuide_1.png',
        'userGuide/userGuide_2.png',
        'userGuide/userGuide_3.png',
        'userGuide/userGuide_4.png',
        'userGuide/userGuide_5.png',
        'userGuide/userGuide_6.png',
        'userGuide/userGuide_7.png',
        'userGuide/userGuide_8.png'
      ]
    }
  },
  methods: {
    slideChange(){
      if(this.$children[0].swiper.snapIndex == 7){
        that.$refs.cloesBtn.style.display = 'block'
      }else {
        that.$refs.cloesBtn.style.display = 'none'
      }
    },
    setNavHeight() {
      this.btnHeight = (this.sheight - this.$refs.pic[0].offsetHeight)/2;
    },
    setBtnHeight() {
      this.navHeight = (this.sheight - this.$refs.pic[0].offsetHeight)/2;
    },
    closeBtn(){
      this.$router.go(-1)
    }
  },
  computed:{
    typeNum: {
      get() {
        if( this.swidth/this.sheight < 0.5622189){
          return 'width'
        }else{
          return 'height'
        }
      }
    }
  },
  mounted() {
    setTimeout(()=>{
      this.setNavHeight();
      this.setBtnHeight();
    },100)
  }
}
</script>

<style lang="css" scoped>
  .box {
    height: 100vh;
    background-color: #232323;
  }
  .width{
    width:100%;
    position: absolute;
    top: 50%;
    transform:translate(0,-50%)
  }
  .height{
    height: 100%;
    position: absolute;
    /*display: inline;*/
    left: 50%;
    transform:translate(-50%,0)
  }
  .width {
    width: 100%;
  }
  .height {
    height: 100%;
  }
  .box >>> .swiper-container {
    height: 100%;
  }
  .swiper-pagination {
    bottom: unset;
    margin-top: .1rem;
  }
  .box>>> .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .cloesBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
    display: none;
  }
  .cloesBtn>div {
    width: 2.37rem;
    height: .69rem;
    border: 1px solid #fff;
    border-radius: 50px;
    text-align: center;
    line-height: .69rem;
    color: #fff;
    font-size: .3rem;
    margin: 2rem auto;
  }
</style>