<template>
  <div class="header">
    <span class="iconfont back_btn"
          @click="back_click" >&#xe650;</span>
    {{dreamtitle}}
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
    dreamtitle: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    back_click() {
      localStorage.removeItem('dreamListData');
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
  }
  .back_btn{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
</style>