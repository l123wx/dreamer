<template>
  <div class="nav">
    <!-- 菜单按钮 -->
    <span class="iconfont menu"
          @click="menuOpen">&#xe62b;</span>
    <!-- 星星数量 -->
    <div class="starNbm">
      <img :src="photoSrc+'star.png'" />
      <span>{{starNum>999999?'999999+':starNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    starNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      photoSrc:this.$globalData.photoSrc,
    }
  },
  methods: {
    menuOpen() {
      this.$emit("menuOpen");
    }
  }
}  
</script>

<style scoped>
  .nav{
    height:.47rem;
    padding:.4rem;
    color:inherit;
    transition: color .3s;
  }
  .menu{
    font-size: .48rem;
  }
  .starNbm{
    display: inline-block;
    min-width: .5rem;
    height: .36rem;
    border-radius: 0.26rem;
    background-color: rgba(0,0,0,0.25);
    float: right;
    position: relative;
    padding:0 .15rem 0 .37rem;
  }
  .starNbm>img{
    height:.43rem;
    position: absolute;
    left:-.20rem;
    top:-.04rem;
  }
  .starNbm>span{
    color: #fff;
    font-size: .24rem;
    display: block;
    text-align: right;
    line-height: .36rem;
    /*background-color: red;*/
  }
</style>
