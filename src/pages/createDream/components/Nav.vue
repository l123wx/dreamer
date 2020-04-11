<template>
  <div class="nav">
    <div v-if="(typePage && typePage =='create') || (typePage && typePage =='revise')">
      <span class="iconfont" @click="click_btn1"></span>
      <span class="iconfont" @click="click_btn2"></span>
      <span class="iconfont" @click="click_btn3">&#xe63b;</span>
    </div>
    <div v-if="typePage && typePage=='read'">
      <span class="iconfont" @click="revise_dream">&#xe655;</span>
      <span class="iconfont" @click="clock_dream">&#xe639;</span>
      <span class="iconfont" @click="move_dream">&#xe65e;</span>
      <span class="iconfont" @click="del_dream">&#xe65f;</span>
    </div>
  </div>
</template>

<script>
import { del_dream,change_single_dream_column } from '@/assets/javaScript/_axios.js'
import { Popup,Dialog,ActionSheet,Notify } from 'vant'
export default {
  name: 'Nav',
  data () {
    return {
       ClockMenuShow: false,
       ClockActions: [
        { name: '锁定这个梦' },
        { name: '解锁这个梦' },
      ],
    }
  },
  props:{
    buttonShow:{
      type: Boolean,
      default: false
    },
    typePage: {
      type:String
    },
    dreamId: {
      type: Number
    }
  },
  components:{
    NPopup:Popup,
    ClockActionSheet:ActionSheet,
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
      this.$emit("revise_dream");
    },
    // 锁定&解锁梦
    clock_dream(){
      this.$emit("clock_dream");
    },
    // 移动梦
    move_dream(){
      this.$emit("move_dream");
    },
    // 删除梦
    del_dream(){
      Dialog.confirm({
        message: '确定要删除这个梦吗'
      }).then(() => {
        del_dream({
          dreamId:this.dreamId
        }).then(res=>{
          console.log(res)
          if( res.data == '删除成功' ){
            Notify({ type: 'success', message: '已删除'});
            this.$router.go(-1)
          }else{
            Notify({ type: 'danger', message: '操作失败，请重试'});
          }
        })
      }).catch(() => {
        // on cancel
      });
    }
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
    font-size: .5rem;
    text-align: center;
    height:1.04rem;
    line-height:1.04rem;
  }
</style>

