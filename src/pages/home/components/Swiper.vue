<template>
  <div>
    <swiper :options="swiperOptions"
            @slideChange="slideChange">
      <swiper-slide v-for='(item,index) in list' :key="index">
        <img class="home-pic" :src="item.src" />
      </swiper-slide>
      <div :class="['swiper-button-prev',prevDisplay]" 
            slot="button-prev">
        <span class="iconfont">&#xe625;</span>
      </div>
      <div :class="['swiper-button-next',nextDisplay]" 
            slot="button-next">
        <span class="iconfont">&#xe625;</span>
      </div>
    </swiper>
  </div>
</template>

<script>
let that;
export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Object,
      default () {
        return this.$globalData.homeDreamLists
      } 
    }
  },
  data () {
    that = this;
    return {
      prevDisplay: 'hidden',
      nextDisplay: 'show',
      imgIndex: 0,
      swiperOptions: {
        grabCursor: true,
        on: {
          slideChangeTransitionEnd: function() {
            if(this.isEnd){
              that.nextDisplay= 'hidden';
            }else{
              that.nextDisplay= 'show';
            }
            if(this.isBeginning){
              that.prevDisplay= 'hidden';
            }else{
              that.prevDisplay= 'show';
            }
            // that.imgIndex = this.realIndex;
            // console.log("end",this.realIndex);
            that.$emit('slideChangeEnd',this.realIndex);
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  methods: {
    slideChange(){
      that.$emit('slideChange',this.$children[0].swiper.snapIndex);
      // this.itemIndex = this.$children[0].swiper.snapIndex;
    }
  }
}
</script>

<style scoped>
  .swiper-slide{
    height:5.96rem;
    display:flex;
    flex-direction:column-reverse;
  }
  .swiper-button-prev,.swiper-button-next{
    color: inherit;
    background-image: none;
    outline:none;
  }
  .swiper-button-prev>span{
    display:inline-block;
    transform: rotate(180deg);
  }
  .swiper-button-prev>span,.swiper-button-next>span{
    color:inherit;
    font-size:.48rem;
    transition: color .3s;
  }
  .swiper-button-prev>span:active,.swiper-button-next>span:active{
    opacity: 0.7;
  }
  .home-pic{
    max-height: 5.96rem;
    max-width:6rem;
    margin:0 auto;
  }
  .hidden{
    display: none;
  }
  .show{
    display: inline-block;
  }
</style>