<template>
  <div :class="[isSafari?'isSafari':'']">
    <!-- <div class="num" @click="click">宽：{{swidth}} 高：{{sheight}}</div> -->
    <img :src="photoSrc+'index/photo_2.jpg'" 
         :class="typeNum"
         v-if="isMobile"/>
    <p style="line-height: 100vh;text-align: center;font-size: 1.5rem;"
       v-if="!isMobile">请使用手机打开</p>
  </div>
</template>

<script>
var that;
export default {
  name: 'Index',
  data() {
    that = this;
    return {
      imgIndex:0,
      swidth:window.innerWidth,
      sheight:window.innerHeight,
      photoSrc:this.$globalData.photoSrc,
      isSafari:this.$globalData.isSafari,
      isMobile:false,
    }
  },
  methods: {
    click(){
      this.$router.push("/loginAndRegister");
      // this.$router.push("/dreamWorld");
    }
  },
  beforeCreate(){
    
  },
  created(){
    if( this.swidth <= 1024 ) {
      this.isMobile = true;
      setTimeout(function() {
        that.$router.push("/loginAndRegister");
      },3000)
    } else {
      this.isMobile = false
    }
  },
  computed:{
    typeNum: {
      get() {
        if( this.swidth/this.sheight > 0.738){
          return 'width'
        }else{
          return 'height'
        }
      }
    }
  }
}
</script>

<style scoped>
/*  img{
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    bottom:0;
  }*/
  .width{
    width:100%;
    position: absolute;
    bottom: 0;
  }
  .height{
    height: 100vh;
    position: absolute;
    /*display: inline;*/
    left: 50%;
    transform:translate(-50%,0)
  }
  .isSafari .heihgt{
    height: calc(100vh - 75px);
  }
  .num{
    position: absolute;
    z-index: 1;
    color:#fff;
    font-size: .5rem;
  }
</style>
