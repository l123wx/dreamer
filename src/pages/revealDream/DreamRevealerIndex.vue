<template>
  <div class="box">
    <img src="@/assets/images/revealDream/dreamRevealerIndex.jpg" />
    
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      解梦师解梦
    </div>
    <div class="numbers">
      <div>
        <img src="@/assets/images/star.png" />
        {{this.$globalData.userInfo.starsCount}}
      </div>
      <div>
        <img src="@/assets/images/tickets.png" />
        {{this.$globalData.userInfo.ticketCount}}
      </div>
    </div>

    <div class="sentence">
      <p>梦，许多人都做过。<br/>但你知道自己梦里的奥秘吗？</p>
      <p>在这里，<br/>你可以把梦境讲述给我们的解梦师听，<br/>专业解梦师将依据心理学对你的梦进行解析，<br/>或许能让你看见自我更真实的一面。</p>
    </div>

    <div class="buttons">
      <p>解梦需要花费解梦券<img src="@/assets/images/tickets.png" />x1</p>
      <div @click="startReveal"><span class="iconfont">&#xe62d;</span>开始解梦</div>
      <div @click="toLetter"><span class="iconfont">&#xe624;</span>查看解梦回信</div>
      <!-- <div @click=""><span class="iconfont">&#xe64e;</span>返回解梦所</div> -->
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'DreamRevealerIndex',
  data () {
    return {

    }
  },
  methods: {
    backClick(){
      this.$router.push('/RevealDreamIndex')
    },
    toLetter() {
      this.$router.push('/RevealDreamLetter')
    },
    startReveal(){
      if(this.$globalData.userInfo.ticketCount <= 0){
        Dialog({message:'解梦券数量不足'})
      }else{
        this.$router.push('/DreamRevealerIng')
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    height: 100vh;
    overflow: hidden
  }
  .box>img{
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    margin-left: -.44rem;
  }
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
    background-color: transparent;
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .numbers{
    text-align: right;
  }
  .numbers>div{
    display: inline-block;
    position: relative;
    margin:0 .4rem;
    color: #fff;
  }
  .numbers>div>img{
    height:.43rem;
    position: relative;
    top: -.06rem;
  }
  .numbers>div:nth-child(2)>img{
    height:.5rem;
  }
  .sentence{
    padding: .8rem 0;
    text-align: center;
    width: 6.9rem;
    background-color: rgba(9, 6, 20 ,0.7);
    border-radius: .3rem;
    position: relative;
    left: 50%;
    margin-left: -3.45rem;
    margin-top: 1rem;
  }
  .sentence>p{
    color: #fff;
    line-height: .52rem;
  }
  .sentence>p+p{
    margin-top: .3rem;
  }

  .buttons{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding:0 0 1.22rem;
  }
  .buttons>p{
    position: relative;
    text-align: center;
    color: #b4a8d5;
    font-size: .26rem;
    margin-bottom: -.24rem;
  }
  .buttons>p>img{
    height:.6rem;
    margin: 0 .1rem;
  }
  .buttons>div{
    border-radius: .18rem;
    width: 3.69rem;
    height: .76rem;
    line-height: .76rem;
    font-size: .26rem;
    margin: .36rem auto 0;
    display: flex;
    color: #fff;
    justify-content: center;
  }
  .buttons .iconfont{
    font-size: .48rem;
    margin-right: .34rem;
  }
  .buttons>div+div{
    border: 1px solid #fff;
  }
  .buttons>div:nth-child(2){
    background-color: #140f2c;
  }
</style>