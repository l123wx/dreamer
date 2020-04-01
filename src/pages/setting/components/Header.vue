<template>
  <div class="header">
    <span class="iconfont" @click="backClick">&#xe650;</span>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  props:{
    title:{
      type:String
    }
  },
  methods:{
    backClick(){
      this.$emit('backClick');
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
</style>
