<template>
  <div class="header">
    梦世界
    <span class="iconfont" @click="backClick">&#xe650;</span>
    <div>
      <img v-show="stared!=-1&&stared" src="@/assets/images/star.png" />
      <img v-show="!stared"  @click="admire" src="@/assets/images/star-bf.png" />
    </div>
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
    stared: {
      type: Number,
      default: 0
    }
  },
  methods: {
    admire() {
      this.$emit("admireClick");
      // if( this.stared == 0 ){
      //   this.stared = 1;
      // }else{
      //   this.stared = 0;
      // }
    },
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
    padding:0 .5rem;
    font-size:.4rem;
    left:0;
  }
  .header>div{
    position: absolute;
    right:0;
    top:0;
    padding:0 .5rem;
    font-size:.5rem;
    line-height: 1.15rem;
    height:1.28rem;
    display: inline-block;
  }
  .header>div>img{
    height:.45rem;
    display: inline-block;
  }
</style>