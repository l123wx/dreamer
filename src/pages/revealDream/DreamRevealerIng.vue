<template>
  <div :class="['box',isSafari?'isSafari':'']">
    <div class="header">
      <span class="iconfont" @click="backClick">&#xe650;</span>
      解梦师解梦
    </div>

    <reveal-content @startReveal="startReveal" @listClick="listClick" />

    <popup class="inputPopup" 
           v-model="show"
           closeable
           round>
      <field
        v-model="message"
        :autosize="true"
        autofocus
        type="textarea"
        class="input"
        placeholder="你有什么想告诉解梦师的吗？你可以分享一下生活背景、感情状况、近期遭遇，尽量清晰的描述可以获得更好的解答。"/>
      <div class="confirm" @click="confirmClick">确定</div>
    </popup>
  </div>
</template>

<script>
import RevealContent from './components/AutoRevealContent'
import { add_reveal_dream } from '@/assets/javaScript/_axios'
import { Dialog,Popup,Field } from 'vant'
export default {
  name: 'DreamRevealerIng',
  data () {
    return {
      show:false,
      message:'',
      dreamId:-1,
      isSafari:this.$globalData.isSafari,
    }
  },
  components: {
    RevealContent,
    Popup,
    Field
  },
  methods:{
    backClick() {
      this.$router.go(-1)
    },
    startReveal(){
      // console.log(this.dreamId)
      if(this.dreamId == -1){
        Dialog({message:'请选择要解的梦'})
      }else{
        this.show = true; //显示解梦备注框
      }
    },
    listClick(dreamId) {
      this.dreamId = dreamId;
    },
    confirmClick(){
      Dialog.confirm({
        message: '确定要消耗1张解梦券解梦吗'
      }).then(() => {
        // on confirm
        add_reveal_dream({
          dreamId:this.dreamId,
          content:this.message
        }).then(res=>{
          if(res.msg == "解梦券数量不足"){
            Dialog({message:'解梦券数量不足'})
          }else{
            this.$router.push('/RevealDreamLetter')
          }
        })
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="css" scoped>
  .box{
    height:100vh;
    overflow: hidden;
    background-color: #090614;
  }
  .box.isSafari{
    height:calc(100vh - 75px);
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
  .inputPopup{
    background-color: #201624;
    padding: .9rem 0 .4rem;
  }
  .inputPopup .confirm{
    text-align: center;
    color: #c8c9cc;
    font-size: .3rem;
  }
  .input{
    background-color:transparent;
  }
  .inputPopup >>> .van-cell:not(:last-child)::after{
    border:none;
  }
  .inputPopup >>> textarea{
    width:6.3rem;
    min-height: 5rem;
    max-height: 7rem;
    color: #dcdcdc;
    margin-top: -.2rem;
  }
</style>