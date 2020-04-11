<template>
  <div class="header">
    <span class="iconfont back_btn"
          @click="back_click" >&#xe622;</span>
    {{pageType=='create'?'记录梦境':'梦境游记'}}
    <span class="iconfont send_btn"
          @click="create_dream" 
          v-if="pageType=='create' || pageType == 'revise'">&#xe638;</span>
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
    pageType: {
      type:String
    }
  },
  methods: {
    back_click() {
      this.$router.go(-1);
    },
    create_dream(){
      this.$emit('create_dream');
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