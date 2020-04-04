<template>
  <div>
    <img :class="imgType" src="@/assets/images/revealDream/indexBg.png" />
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      <div class="title">
        <div>解梦所</div>
        <span>解读梦境告诉你的一切</span>
      </div>
      <div class="letter" @click="toLetter">
        <span class="iconfont">&#xe657;</span>
        <div>解梦回信</div>
      </div>
    </div>
    <div class="center">
      <p>选择一个解梦方式</p>
      <div @click="toAutoRevealDream">自动解梦</div>
      <div @click="toKeyWorldReveal">关键词解梦</div>
      <div @click="toDreamRevealerIndex">解梦师解梦</div>
    </div>
  </div>
</template>

<script>
import { get_user_info } from '@/assets/javaScript/_axios'
export default {
  name: 'RevealDreamIndex',
  data () {
    return {
      swidth:window.innerWidth,
      sheight:window.innerHeight,
    }
  },
  computed:{
    imgType: {
      get() {
        if( this.swidth/this.sheight > 0.5622189){
          return 'width'
        }else{
          return 'height'
        }
      }
    }
  },
  methods: {
    backClick(){
      // 从解梦所中退出后，星辰数量发生了改变，所以需要更新一下数据
      get_user_info({
        token:this.$globalData.token
      }).then(res=>{
        // localStorage.setItem('userInfo',JSON.stringify(res.data));
        this.$globalData.userInfo = res.data;
        this.$router.push('/home')
      })
    },
    // 前往自动解梦
    toAutoRevealDream() {
      this.$router.push('/AutoRevealDream')
    },
    // 前往解梦师解梦
    toDreamRevealerIndex() {
      this.$router.push('/DreamRevealerIndex')
    },
    // 前往关键词解梦
    toKeyWorldReveal() {
      this.$router.push('/KeyWorldReveal')
    },
    toLetter() {
      this.$router.push('/RevealDreamLetter')
    }
  }
}
</script>

<style lang="css" scoped>
  img{
    position: absolute;
    top:0;
    left: 50%;
    transform:translate(-50%,0)
  }
  .width{
    width: 100%;
  }
  .height{
    height: 100%;
  }
  .header{
    height: 1.28rem;
    color: #12132f;
    font-size: .36rem;
    text-align: center;
    position: relative;
  }
  .header>.iconfont{
    display: inline-block;
    position: absolute;
    line-height: 1.28rem;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .title{
    display: inline-block;
    line-height: .4rem;
  }
  .title>div{
    font-weight: bold;
    margin-top: .42rem;
  }
  .title>span{
    font-size: .24rem;
  }
  .letter{
    position: absolute;
    right: 0;
    top: 0;
    padding: .39rem .3rem;
  }
  .letter>span{
    font-size: .4rem;
    font-weight: 600;
  }
  .letter>div{
    font-size: .24rem;
    margin-top: .12rem;
  }
  .center{
    position: absolute;
    bottom: 2.97rem;
    width: 100%;
  }
  .center>p{
    text-align: center;
    font-size: .24rem;
    color:#fff;
    position: relative;
  }
  .center>div{
    width: 3.62rem;
    height: .8rem;
    border: 2px solid #fff;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    font-size: .3rem;
    position: relative;
    border-radius: .18rem;
    margin: .36rem auto 0;
  }
</style>