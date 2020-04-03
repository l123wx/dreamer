<template>
  <div class="auto_reveal">
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      自动解梦
    </div>
    <auto-reveal-content v-if="!pageIndex" @startReveal="startReveal" />
    <auto-reveal-result v-if="pageIndex" :dreamId="dreamId" />

    
    
  </div>
</template>

<script>
import AutoRevealContent from './components/AutoRevealContent'
import AutoRevealResult from './components/AutoRevealResult'
import { Dialog } from 'vant'
export default {
  name: 'AutoRevealDream',
  data () {
    return {
      pageIndex:0,
      dreamId:-1
    }
  },
  components: {
    AutoRevealContent,
    AutoRevealResult
  },
  methods: {
    backClick(){
      this.$router.push('RevealDreamIndex')
    },
    startReveal(e){
      console.log(e)
      if(e == -1){
        Dialog({message:'请选择要解的梦'})
      }else{
        this.dreamId = e;
        this.pageIndex = 1;
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .auto_reveal{
    background-color: #090614;
    height: 100vh;
    overflow: hidden;
  }
  .header{
    height: 1.28rem;
    line-height: 1.28rem;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
    background-color: #201624;
  }
  .header>span{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
</style>