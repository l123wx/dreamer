<template>
  <div>
    <div class="num" @click="click">宽：{{swidth}} 高：{{sheight}}</div>
    <img :src="photoSrc+'index/photo_2.jpg'" 
         :class="typeNum"/>
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
    setTimeout(function() {
      that.$router.push("/loginAndRegister");
    },3000)
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
  .num{
    position: absolute;
    z-index: 1;
    color:#fff;
    font-size: .5rem;
  }
</style>
