<template>
  <div :class="['letter_list',active?'active':'']">
    <p class="title">【{{data.dreamTitle}}】</p>
    <div class="content">
      <span class="name">{{data.username}}：</span>
      {{data.dreamContent}}
    </div>
    <div class="content reveal" v-if="data.reply">
      <span class="name">解梦师：</span>
      {{data.reply}}
    </div>
    <div class="tips" v-if="!data.reply">请耐心等待解梦师回信……</div>
    <div class="iconfont" @click="openClick"><span>&#xe652;</span></div>
  </div>
</template>

<script>
export default {
  name: 'LetterList',
  data () {
    return {
      active:false
    }
  },
  props:{
    data:{
      type:Object
    }
  },
  methods: {
    openClick(){
      this.active = !this.active;
    }
  },
  mounted(){
    // console.log(this.data)
  }
}
</script>

<style lang="css" scoped>
  .letter_list{
    position: relative;
    width: 6rem;
    padding: .2rem .4rem;
    margin: 0 auto;
    background-color: rgba(0,0,0,0.7);
    margin-top: .38rem;
    border-radius: .29rem;
  }
  .title{
    color: #fce782;
    font-size: .3rem;
    text-align: center;
  }
  .content{
    color: #fff;
    line-height: .44rem;
    margin-top: .3rem;
    font-size: .26rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .content.reveal{
    -webkit-line-clamp: 2;
  }
  .letter_list.active .content{
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  .content .name{
    color: #b4a8d5;
  }
  .tips{
    text-align: center;
    color: #b4a8d5;
    margin-top: .4rem;
    font-size: .26rem;
  }
  .iconfont{
    text-align: center;
    color: #b0b0b0;
    font-size: .6rem;
    margin:.1rem 0 -.12rem;
  }
  .iconfont>span{
    display: inline-block;
    transform: rotate(-90deg);
  }
  .letter_list.active .iconfont>span{
    transform: rotate(90deg);
  }
</style>