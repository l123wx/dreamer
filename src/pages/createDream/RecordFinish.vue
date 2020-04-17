<template>
  <div class="box">
    <!-- 标题 -->
    <div class="header">梦境已记录</div>
    <!-- 获取星辰提示 -->
    <div class="getStar">
      获得星辰
      <img :src="photoSrc+'star.png'" />
      x2
    </div>
    <!-- 分享开关 -->
    <div class="switch">
      <div>
        <div>允许被投放进梦世界</div>
        <div>与他人分享你的梦境，有机会获得星辰</div>
      </div>
      <div>
        <r-f-switch size="20"
                    :value="checked"
                    :loading="loading"
                    @input="onInput"/>
      </div>
    </div>

    <div class="buttons">
      <div @click="toDreamsWorld"><span class="iconfont">&#xe630;</span>进入梦世界</div>
      <div @click="toHome"><span class="iconfont">&#xe64e;</span>返回首页</div>
    </div>
  </div>
</template>

<script>
let that;
import { locked_single_dream,get_user_info } from '@/assets/javaScript/_axios.js'
import { Switch,Dialog,Notify } from 'vant';
export default {
  name: 'RecordFinish',
  components: {
    RFSwitch: Switch,
  },
  data () {
    that = this;
    return {
      checked: false,
      loading: false,
      dreamId: this.$route.params.dreamId,
      photoSrc: this.$globalData.photoSrc,
    }
  },
  methods: {
    onInput(checked) {
      if(checked) {
        Dialog.confirm({
          // title: '提醒',
          message: '要公开这个梦吗'
        }).then(
        (confirm) => {
          this.checked = true;
          this.loading = true;
          locked_single_dream({
            dreamId:this.dreamId,
            type:1
          }).then(res=>{
            Notify({ type: 'success', message: '已公开' });
            that.loading = false;
          })
        },
        (cancel) => {
          // console.log(this.dreamId)
        })
      }else{
        this.checked = false;
        this.loading = true;
        locked_single_dream({
          dreamId:this.dreamId,
          type:0
        }).then(res=>{
          // console.log(res)
          that.loading = false;
          Notify({ type: 'success', message:'已锁定' });
        })
      }
    },
    toDreamsWorld() {
      location.hash = '/DreamWorldIndex';
    },
    toHome() {
      location.hash = '/home';
    }
  },
  mounted() {
    get_user_info({})
    .then(res=>{
      // console.log(res)
      this.$globalData.userInfo = res.data
    })
  }
}
</script>

<style lang="css" scoped>
  .box{
    background-color: #f2f2f2;
    height: 100vh;
    position: relative;
  }  
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #878787;
    font-size: .36rem;
    text-align: center;
  }
  .getStar{
    text-align: center;
    font-size: .26rem;
    color:#a0a0a0;
  }
  .getStar>img{
    height:.42rem;
    position: relative;
    top: -.11rem;
  }
  .switch{
    height: .8rem;
    background-color: #fff;
    border-radius: .2rem;
    margin:.58rem .3rem;
    padding:.3rem .36rem;
  }
  .switch>div:nth-child(1){
    color:#a0a0a0;
    line-height: .44rem;
    display: inline-block;
  }
  .switch>div:nth-child(1)>div:nth-child(1){
    font-size: .3rem;
  }
  .switch>div:nth-child(1)>div:nth-child(2){
    font-size: .24rem;
  }
  .switch>div:nth-child(2){
    height:100%;
    display: inline-block;
    float: right;
    display: flex;
    align-items: center;
  }
  .buttons{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding:0 0 1.22rem;
  }
  .buttons>div{
    border-radius: .18rem;
    width: 2.13rem;
    height: .76rem;
    line-height: .76rem;
    font-size: .26rem;
    padding: 0 .78rem;
    margin: .36rem auto 0;
    display: flex;
  }
  .buttons .iconfont{
    font-size: .48rem;
    margin-right: .34rem;
  }
  .buttons>div:nth-child(1){
    background-color: #b4a8d5;
    color:#fff;
  }
  .buttons>div:nth-child(2){
    background-color: #fff;
    color:#7a7a7a;
  }
</style>