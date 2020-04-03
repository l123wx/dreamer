<template>
  <div class="header">
    <span class="iconfont back_btn"
          @click="back_click" >&#xe622;</span>
    记录梦境
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  props: {
   
  },
  methods: {
    back_click() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  *{
    touch-action: pan-y; 
  }
  .header{
    height:1.28rem;
    line-height: 1.28rem;
    text-align: center;
    font-size: .36rem;
    position: relative;
    color:#878787;
  }
  .back_btn{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .send_btn{
    right:0;
    display: inline-block;
    position: absolute;
    padding:0 .5rem;
    font-size:.54rem;
  }
</style>