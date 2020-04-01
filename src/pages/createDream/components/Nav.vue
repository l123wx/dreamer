<template>
  <div class="nav">
    <div>
      <span class="iconfont" @click="click_btn1"></span>
      <span class="iconfont" @click="click_btn2"></span>
      <span class="iconfont" @click="click_btn3">&#xe63b;</span>
    </div>
<!--     <div>
      <span class="iconfont" @click="revise_dream">&#xe655;</span>
      <span class="iconfont" @click="clock_dream">&#xe639;</span>
      <span class="iconfont" @click="move_dream">&#xe65e;</span>
      <span class="iconfont" @click="del_dream">&#xe65f;</span>
    </div> -->
  </div>
</template>

<script>
import { del_dream,change_single_dream_column,locked_single_dream } from '@/assets/javaScript/_axios.js'
import { Popup,Dialog  } from 'vant'
export default {
  name: 'Nav',
  data () {
    return {

    }
  },
  methods: {
    click_btn1() {
      this.$emit("click_btn1");
    },
    click_btn2() {
      this.$emit("click_btn2");
    },
    click_btn3() {
      this.$emit("click_btn3");
    },
    // 修改梦
    revise_dream(){

    },
    // 锁定&解锁梦
    clock_dream(){

    },
    // 移动梦
    move_dream(){
      change_single_dream_column({
        // type  
        // dreamId
      })
    },
    // 删除梦
    del_dream(){
      del_dream({
        // dreamId
      })
    }
  },
  props:{
    buttonShow:{
      type: Boolean,
      default: false
    }
  },
  components:{
    NPopup:Popup
  }
}
</script>

<style scoped>
  .nav{
    height:1.04rem;
    background-image: linear-gradient( to right, rgb(159,211,222) 0%, rgb(182,165,213) 100%);
    color:#fff;
    position: relative;
  }
  .nav>div{
    display: flex;
  }
  .nav>div>span{
    display:inline-block;
    flex:1;
    font-size: .65rem;
    text-align: center;
    height:1.04rem;
    line-height:1.04rem;
  }
</style>

