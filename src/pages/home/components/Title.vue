<template>
  <div class="title">
    <div :style="{'opacity':textOpacity}">
      <span>{{title}}</span>
    </div>
    <p :style="{'opacity':textOpacity}">{{title_sec}}</p>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
  data () {
   return {
     
   }
  },
  props: {
    title: {
      type: String,
      default:"梦境标题"
    },
    title_sec: {
      type: String,
      default:"这是一句解释的画"
    },
    textOpacity: {
      type: Number,
      default: 1
    }
  }
}  
</script>

<style scoped>
  .title{
    text-align: center;
    padding-bottom:.5rem;
    position: relative;
    /*overflow: hidden;*/
  }
  .title>div:not(.shadow){
    position: relative;
    padding: .28rem 0;
    z-index: 1;
    transition: opacity .4s;
  }
  .title span{
    font-size: .36rem;
  }
  .title span:before,.title span:after{
    content: '——';
    width: .73rem;
    height: .02rem;
    margin:0 .28rem;
  }    
  .title>p{
    transition: opacity .4s;
    font-size: .26rem;
    z-index: 1;
    position: relative;
  }
  .shadow{
    border-radius:50% 50% 0 0;
    width:10rem;
    height:3.66rem;
    position: absolute;
    background-image: linear-gradient(to bottom,rgba(000,000,000,0.1) 0%,rgba(000,000,000,0) 60%);
    top:0;
    left:50%;
    margin-left: -5rem;
    opacity: 1 !important;
  }
</style>

