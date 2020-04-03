<template>
  <div class="letter">
    <img src="@/assets/images/revealDream/dreamRevealerIndex.jpg" />

    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      解梦回信
    </div>
    
    <div class="letter_box">
       <letter-list v-for="(item,index) in 10" :key="item.index"/>
    </div>
  </div>
</template>

<script>
import { dream_master_message } from '@/assets/javaScript/_axios'
import LetterList from './components/LetterList'
export default {
  name: 'RevealDreamLetter',
  data () {
    return {

    }
  },
  components: {
    LetterList
  },
  methods: {
    backClick() {
      this.$router.push('/RevealDreamIndex')
    }
  },
  mounted() {
    dream_master_message({

    }).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style lang="css" scoped>
  .letter{
    height: 100vh;
    overflow: hidden
  }
  .letter>img{
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
    background-color: rgba(0,0,0,0.5);
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .letter_box{
    height:calc(100vh - 1.92rem);
    overflow: auto;
    padding:0 0 .6rem;
  }
</style>